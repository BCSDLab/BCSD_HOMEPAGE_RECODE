import fs from 'node:fs/promises';
import path from 'node:path';

const ASSET_SUFFIXES = ['.br', '.gz', ''];

/**
 * 실제로 받아본 유니티 빌드 ZIP 7개는 전부 index.html 없이 `Build/` 폴더 내용물
 * (`*.loader.js`/`*.data(.br)`/`*.framework.js(.br)`/`*.wasm(.br)`)만 담고
 * 있었다 — Unity 에디터가 "Build And Run" 없이 "Build" 폴더만 내보낼 때 이런
 * 모양이 된다. index.html은 우리가 서빙 시점에 직접 만든다.
 */
export async function findUnityLoaderPrefix(root: string): Promise<string | null> {
  const entries = await fs.readdir(root, { withFileTypes: true });
  const loader = entries.find((entry) => entry.isFile() && /\.loader\.js$/i.test(entry.name));
  if (!loader) {
    return null;
  }
  return loader.name.replace(/\.loader\.js$/i, '');
}

async function resolveAsset(root: string, baseName: string): Promise<string | null> {
  for (const suffix of ASSET_SUFFIXES) {
    const candidate = `${baseName}${suffix}`;
    try {
      const stat = await fs.stat(path.join(root, candidate));
      if (stat.isFile()) {
        return candidate;
      }
    } catch {
      // 다음 후보 시도
    }
  }
  return null;
}

export interface UnityBuildAssets {
  loaderUrl: string;
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
  streamingAssetsUrl: string | null;
}

export async function resolveUnityBuildAssets(root: string, prefix: string): Promise<UnityBuildAssets | null> {
  const [dataUrl, frameworkUrl, codeUrl] = await Promise.all([
    resolveAsset(root, `${prefix}.data`),
    resolveAsset(root, `${prefix}.framework.js`),
    resolveAsset(root, `${prefix}.wasm`),
  ]);
  if (!dataUrl || !frameworkUrl || !codeUrl) {
    return null;
  }

  let streamingAssetsUrl: string | null = null;
  try {
    const stat = await fs.stat(path.join(root, 'StreamingAssets'));
    if (stat.isDirectory()) {
      streamingAssetsUrl = 'StreamingAssets';
    }
  } catch {
    // StreamingAssets 없는 빌드가 대부분이다.
  }

  return { loaderUrl: `${prefix}.loader.js`, dataUrl, frameworkUrl, codeUrl, streamingAssetsUrl };
}

/** 표준 유니티 WebGL 템플릿의 최소 버전 — 캔버스가 iframe을 꽉 채운다. */
export function renderUnityIndexHtml(name: string, assets: UnityBuildAssets): string {
  const config = {
    dataUrl: assets.dataUrl,
    frameworkUrl: assets.frameworkUrl,
    codeUrl: assets.codeUrl,
    streamingAssetsUrl: assets.streamingAssetsUrl ?? undefined,
    companyName: 'BCSD',
    productName: name,
  };

  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(name)}</title>
<style>
  html, body { margin: 0; padding: 0; height: 100%; background: #000; overflow: hidden; }
  #unity-canvas { width: 100%; height: 100%; display: block; }
  #unity-loading-cover {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background: #000;
  }
  #unity-progress-bar-track {
    width: min(320px, 70vw);
    height: 6px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.15);
    overflow: hidden;
  }
  #unity-progress-bar-fill {
    width: 0%;
    height: 100%;
    background: #fff;
    border-radius: 999px;
    transition: width 0.15s ease-out;
  }
  #unity-loading-percent {
    color: rgba(255, 255, 255, 0.7);
    font: 12px/1 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
</style>
</head>
<body>
<canvas id="unity-canvas"></canvas>
<div id="unity-loading-cover">
  <div id="unity-progress-bar-track">
    <div id="unity-progress-bar-fill"></div>
  </div>
  <div id="unity-loading-percent">0%</div>
</div>
<script src="${assets.loaderUrl}"></script>
<script>
  var unityLoadingCover = document.querySelector("#unity-loading-cover");
  var unityProgressFill = document.querySelector("#unity-progress-bar-fill");
  var unityLoadingPercent = document.querySelector("#unity-loading-percent");

  createUnityInstance(document.querySelector("#unity-canvas"), ${JSON.stringify(config)}, function (progress) {
    var percent = Math.round(progress * 100);
    unityProgressFill.style.width = percent + "%";
    unityLoadingPercent.textContent = percent + "%";
  }).then(function () {
    unityLoadingCover.style.display = "none";
  }).catch(function (message) {
    unityLoadingPercent.textContent = "로드 실패";
    console.error(message);
  });
</script>
</body>
</html>
`;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      default:
        return '&#39;';
    }
  });
}
