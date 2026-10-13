/**
 * 게임 빌드 저장소는 반드시 컨테이너 밖(마운트된 볼륨)을 가리켜야 한다 — `output:
 * 'standalone'`이라 이미지 안에 쓴 파일은 재배포마다 사라진다(ADR-024).
 */
export const GAME_BUILD_STORAGE_DIR = process.env.GAME_BUILD_STORAGE_DIR ?? '/tmp/bcsd-game-builds';

/**
 * 운영에서 값이 없으면 빈 문자열로 두고 토큰 검증을 실패시킨다(fail-closed). 개발 기본값이 운영에서
 * 그대로 쓰이면 누구나 업로드 토큰을 만들 수 있다. 빌드 시점에는 import만 되므로 여기서 던지지 않는다.
 */
export const GAME_BUILD_SECRET =
  process.env.GAME_BUILD_SECRET ?? (process.env.NODE_ENV === 'production' ? '' : 'local-dev-secret');

export const INTERNAL_API_ORIGIN = process.env.INTERNAL_API_ORIGIN ?? 'http://localhost:8080';

/** 어드민 프런트 origin — 업로드 CORS preflight를 이 origin에만 허용한다. */
export const ADMIN_ORIGIN = process.env.ADMIN_ORIGIN ?? 'http://localhost:3000';

/**
 * buildFileUrl을 만들 때 쓰는 공개 origin. `request.url`의 origin을 쓰면 안 된다 —
 * nginx가 127.0.0.1:3003으로 프록시하는 운영 환경에서는 Next.js 컨테이너가 보는
 * origin이 컨테이너 내부 호스트명(예: http://8f643eeaacbe:3000)이라 실제로는
 * 아무도 접근할 수 없는 주소가 저장된다.
 */
export const PUBLIC_ORIGIN = process.env.PUBLIC_ORIGIN ?? 'http://localhost:3010';
