import fs from 'node:fs/promises';
import path from 'node:path';

export async function directorySize(root: string): Promise<number> {
  let total = 0;
  const entries = await fs.readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(root, entry.name);
    if (entry.isDirectory()) {
      total += await directorySize(entryPath);
    } else if (entry.isFile()) {
      total += (await fs.stat(entryPath)).size;
    }
  }
  return total;
}

/**
 * `index.html`의 `<canvas>` 태그에서 width/height를 최선 노력으로 읽는다.
 * 유니티 WebGL 템플릿마다 위치가 달라 못 찾을 수도 있고, 그러면 null이다 —
 * 관리자 화면에 표시만 안 될 뿐 플레이 자체에는 영향이 없다.
 */
export async function detectCanvasSize(indexHtmlPath: string): Promise<{ width: number; height: number } | null> {
  let html: string;
  try {
    html = await fs.readFile(indexHtmlPath, 'utf-8');
  } catch {
    return null;
  }

  const canvasTagMatch = html.match(/<canvas\b[^>]*>/i);
  if (canvasTagMatch) {
    const width = canvasTagMatch[0].match(/width\s*=\s*["']?(\d+)/i);
    const height = canvasTagMatch[0].match(/height\s*=\s*["']?(\d+)/i);
    if (width && height) {
      return { width: Number(width[1]), height: Number(height[1]) };
    }
  }
  return null;
}
