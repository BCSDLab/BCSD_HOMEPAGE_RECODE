import { createHmac, timingSafeEqual } from 'node:crypto';
import { GAME_BUILD_SECRET } from './config';

export interface GameBuildTokenPayload {
  buildId: number;
  gameId: number;
  slug: string;
  version: string;
  exp: number;
}

/**
 * 인터널 API(GameBuildTokenService)가 발급한 토큰을 검증한다(ADR-024). 절대
 * payload JSON을 다시 직렬화해서 서명하지 않는다 — 발급 시점의 원본 바이트에 대한
 * 서명이므로, 재직렬화하면 키 순서가 달라 검증이 항상 실패한다.
 */
export function verifyGameBuildToken(token: string): GameBuildTokenPayload | null {
  const parts = token.split('.');
  if (parts.length !== 2) {
    return null;
  }
  const [payloadPart, signaturePart] = parts;

  let payloadBytes: Buffer;
  let signatureBytes: Buffer;
  try {
    payloadBytes = Buffer.from(payloadPart, 'base64url');
    signatureBytes = Buffer.from(signaturePart, 'base64url');
  } catch {
    return null;
  }

  const expectedSignature = createHmac('sha256', GAME_BUILD_SECRET).update(payloadBytes).digest();
  if (expectedSignature.length !== signatureBytes.length || !timingSafeEqual(expectedSignature, signatureBytes)) {
    return null;
  }

  let payload: GameBuildTokenPayload;
  try {
    payload = JSON.parse(payloadBytes.toString('utf-8'));
  } catch {
    return null;
  }

  if (typeof payload.exp !== 'number' || payload.exp < Math.floor(Date.now() / 1000)) {
    return null;
  }
  return payload;
}
