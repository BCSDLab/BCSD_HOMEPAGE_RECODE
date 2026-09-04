/**
 * Unity WebGL 빌드는 파일을 브라우저가 압축 해제하지 않고 그대로 받게 하려고
 * `.wasm.br`/`.data.gz` 같은 이중 확장자로 내보낸다. 로더가 그 파일명을 그대로
 * 요청하므로, 서버는 재압축 해제 없이 그 이름 그대로 서빙하면서 `Content-Encoding`과
 * 실제 파일 타입(`.wasm` → application/wasm)을 같이 알려줘야 한다 — 그래야
 * `instantiateStreaming`이 동작한다(digital8150/Unity-WebGL-IssuesTracker
 * buildFiles.js 참고, ADR-024).
 */
export function resolveContentType(filename: string): { contentType: string; contentEncoding: string | null } {
  const encoding = filename.endsWith('.br') ? 'br' : filename.endsWith('.gz') ? 'gzip' : null;
  const bare = encoding ? filename.slice(0, -'.br'.length) : filename;
  return { contentType: baseMime(bare), contentEncoding: encoding };
}

function baseMime(filename: string): string {
  const lower = filename.toLowerCase();
  if (lower.endsWith('.wasm')) return 'application/wasm';
  if (lower.endsWith('.data')) return 'application/octet-stream';
  if (lower.endsWith('.js')) return 'application/javascript';
  if (lower.endsWith('.json')) return 'application/json';
  if (lower.endsWith('.html')) return 'text/html; charset=utf-8';
  if (lower.endsWith('.css')) return 'text/css';
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.svg')) return 'image/svg+xml';
  if (lower.endsWith('.ico')) return 'image/x-icon';
  return 'application/octet-stream';
}
