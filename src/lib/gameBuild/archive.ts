import path from 'node:path';
import fs from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import AdmZip from 'adm-zip';

const MAX_ENTRIES = 20_000;
const MAX_ENTRY_BYTES = 300 * 1024 * 1024;
const MAX_TOTAL_BYTES = 800 * 1024 * 1024;

export class ArchiveError extends Error {}

/**
 * ZIP을 임시 디렉토리에 안전하게 푼다(zip slip 방지 — digital8150/
 * Unity-WebGL-IssuesTracker assetArchive.js의 경로 검증을 그대로 따른다).
 * 반환값은 실제 게임 파일이 있는 디렉토리 — 유니티 빌드 ZIP은 `index.html`이
 * 압축 루트에 바로 있을 때도, 프로젝트 이름 폴더 한 단계 아래에 있을 때도 있어서
 * 이름이 아니라 `index.html` 위치로 루트를 찾는다.
 */
export async function extractZipSafely(zipPath: string, destRoot: string): Promise<string> {
  const zip = new AdmZip(zipPath);
  const entries = zip.getEntries().filter((entry) => !entry.isDirectory);
  if (entries.length === 0) {
    throw new ArchiveError('빌드 ZIP이 비어 있습니다.');
  }
  if (entries.length > MAX_ENTRIES) {
    throw new ArchiveError('빌드 ZIP에 파일이 너무 많습니다.');
  }

  const resolvedDestRoot = path.resolve(destRoot);
  await fs.mkdir(resolvedDestRoot, { recursive: true });

  let totalBytes = 0;
  for (const entry of entries) {
    const parts = String(entry.entryName)
      .replaceAll('\\', '/')
      .split('/')
      .filter((part) => part.length > 0);
    if (parts.length === 0 || parts.some((part) => part === '..' || part === '.')) {
      continue;
    }

    const destPath = path.resolve(resolvedDestRoot, ...parts);
    if (destPath !== resolvedDestRoot && !destPath.startsWith(resolvedDestRoot + path.sep)) {
      throw new ArchiveError(`허용되지 않은 경로입니다: ${entry.entryName}`);
    }

    const declaredSize = entry.header?.size ?? 0;
    if (declaredSize > MAX_ENTRY_BYTES) {
      throw new ArchiveError(`파일이 너무 큽니다: ${entry.entryName}`);
    }

    const data = entry.getData();
    if (data.length > MAX_ENTRY_BYTES) {
      throw new ArchiveError(`파일이 너무 큽니다: ${entry.entryName}`);
    }
    totalBytes += data.length;
    if (totalBytes > MAX_TOTAL_BYTES) {
      throw new ArchiveError('압축 해제 후 용량이 너무 큽니다.');
    }

    await fs.mkdir(path.dirname(destPath), { recursive: true });
    await fs.writeFile(destPath, data);
  }

  const buildRoot = await findBuildRoot(resolvedDestRoot);
  if (!buildRoot) {
    throw new ArchiveError('index.html도, *.loader.js도 찾을 수 없습니다.');
  }
  return buildRoot;
}

/**
 * 완성된 사이트(HTML 포함)를 내보내는 빌드도 있고, Unity가 `Build/` 폴더 내용만
 * 내보내는 빌드(index.html 없이 `*.loader.js`/`*.data`/`*.framework.js`/`*.wasm`만
 * 있음 — 실제 구글 드라이브 산출물 7개가 전부 이 형태였다)도 있다. 후자는
 * index.html을 서빙 시점에 직접 만들어 준다(contentType.ts/route.ts 참고).
 */
async function findBuildRoot(root: string, depth = 0): Promise<string | null> {
  if (depth > 3) {
    return null;
  }
  const entries = await fs.readdir(root, { withFileTypes: true });
  const hasIndexHtml = entries.some((entry) => entry.isFile() && entry.name.toLowerCase() === 'index.html');
  const hasLoader = entries.some((entry) => entry.isFile() && /\.loader\.js$/i.test(entry.name));
  if (hasIndexHtml || hasLoader) {
    return root;
  }
  const subdirs = entries.filter((entry) => entry.isDirectory());
  if (subdirs.length !== 1) {
    return null;
  }
  return findBuildRoot(path.join(root, subdirs[0].name), depth + 1);
}

/**
 * 임시 디렉토리를 실제 서빙 디렉토리로 원자적으로 교체한다. 실패하면 이전
 * 상태로 롤백한다(digital8150/Unity-WebGL-IssuesTracker의
 * extractAndSwapArchive 패턴).
 */
export async function atomicSwapDir(tempDir: string, liveDir: string): Promise<void> {
  const oldDir = `${liveDir}.old-${randomUUID()}`;
  let oldMoved = false;
  try {
    try {
      await fs.rename(liveDir, oldDir);
      oldMoved = true;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
        throw error;
      }
    }
    await fs.rename(tempDir, liveDir);
  } catch (error) {
    if (oldMoved) {
      await fs.rename(oldDir, liveDir).catch(() => undefined);
    }
    throw error;
  }
  if (oldMoved) {
    await fs.rm(oldDir, { recursive: true, force: true });
  }
}
