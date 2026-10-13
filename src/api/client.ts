const API_ORIGIN = process.env.INTERNAL_API_ORIGIN ?? 'http://localhost:8080';

/** 인터널 공개 API GET. 실패하면 `${errorMessage}: ${status}`로 던진다. */
export async function apiGet<T>(path: string, errorMessage: string): Promise<T> {
  const res = await fetch(`${API_ORIGIN}${path}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`${errorMessage}: ${res.status}`);
  }
  return res.json();
}

/** 404면 null, 그 밖의 실패는 던진다. */
export async function apiGetOrNull<T>(path: string, errorMessage: string): Promise<T | null> {
  const res = await fetch(`${API_ORIGIN}${path}`, { cache: 'no-store' });
  if (res.status === 404) {
    return null;
  }
  if (!res.ok) {
    throw new Error(`${errorMessage}: ${res.status}`);
  }
  return res.json();
}
