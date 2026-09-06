/**
 * 게임 빌드 저장소는 반드시 컨테이너 밖(마운트된 볼륨)을 가리켜야 한다 — `output:
 * 'standalone'`이라 이미지 안에 쓴 파일은 재배포마다 사라진다(ADR-024).
 */
export const GAME_BUILD_STORAGE_DIR = process.env.GAME_BUILD_STORAGE_DIR ?? '/tmp/bcsd-game-builds';

export const GAME_BUILD_SECRET = process.env.GAME_BUILD_SECRET ?? 'local-dev-secret';

export const INTERNAL_API_ORIGIN = process.env.INTERNAL_API_ORIGIN ?? 'http://localhost:8080';

/** 어드민 프런트 origin — 업로드 CORS preflight를 이 origin에만 허용한다. */
export const ADMIN_ORIGIN = process.env.ADMIN_ORIGIN ?? 'http://localhost:3000';
