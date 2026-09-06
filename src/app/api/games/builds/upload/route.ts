import { randomUUID } from 'node:crypto';
import fs from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import os from 'node:os';
import path from 'node:path';
import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_ORIGIN, GAME_BUILD_STORAGE_DIR, INTERNAL_API_ORIGIN, GAME_BUILD_SECRET } from '@/lib/gameBuild/config';
import { verifyGameBuildToken } from '@/lib/gameBuild/token';
import { ArchiveError, atomicSwapDir, extractZipSafely } from '@/lib/gameBuild/archive';
import { directorySize, detectCanvasSize } from '@/lib/gameBuild/inspect';

/**
 * 게임 빌드 ZIP 업로드 수신(ADR-024). 어드민 프런트(internal.bcsdlab.com)가
 * 브라우저에서 직접 이 서버로 업로드한다 — 인터널 API는 바이트를 경유하지 않는다.
 * multipart가 아니라 body 전체가 ZIP 바이트다(500MB를 메모리에 올리지 않기
 * 위해 스트리밍으로 임시 파일에 받는다).
 */
export async function POST(request: NextRequest) {
  const corsHeaders = buildCorsHeaders(request);

  const token = request.headers.get('X-Game-Build-Token');
  const payload = token ? verifyGameBuildToken(token) : null;
  if (!payload) {
    return NextResponse.json({ message: '유효하지 않거나 만료된 업로드 토큰입니다.' }, { status: 401, headers: corsHeaders });
  }
  if (!request.body) {
    return NextResponse.json({ message: '요청 본문이 없습니다.' }, { status: 400, headers: corsHeaders });
  }

  // 압축 해제 임시 디렉토리는 반드시 GAME_BUILD_STORAGE_DIR "안"에 만든다 — 최종
  // 스왑이 fs.rename이라 임시 디렉토리와 서빙 디렉토리가 다른 파일시스템(예: os.tmpdir()가
  // tmpfs, 저장 볼륨이 별도 마운트)에 있으면 EXDEV로 실패한다. ZIP 파일 자체는 스왑
  // 대상이 아니라 os.tmpdir()에 둬도 무방하다.
  const zipWorkDir = path.join(os.tmpdir(), `game-build-upload-${randomUUID()}`);
  const zipPath = path.join(zipWorkDir, 'upload.zip');
  await fs.mkdir(GAME_BUILD_STORAGE_DIR, { recursive: true });
  const extractDir = path.join(GAME_BUILD_STORAGE_DIR, `.tmp-${randomUUID()}`);
  await fs.mkdir(zipWorkDir, { recursive: true });

  try {
    await pipeline(Readable.fromWeb(request.body as import('stream/web').ReadableStream), createWriteStream(zipPath));

    const buildRoot = await extractZipSafely(zipPath, extractDir);
    const storageBytes = await directorySize(buildRoot);
    const canvas = await detectCanvasSize(path.join(buildRoot, 'index.html'));

    const liveDir = path.join(GAME_BUILD_STORAGE_DIR, payload.slug);
    await atomicSwapDir(buildRoot, liveDir);

    const buildFileUrl = `${new URL(request.url).origin}/games/${payload.slug}/index.html`;
    await notifyWebhook(payload.buildId, {
      status: 'ACTIVE',
      canvasWidth: canvas?.width ?? null,
      canvasHeight: canvas?.height ?? null,
      storageBytes,
      buildFileUrl,
    });

    return NextResponse.json({ buildFileUrl }, { headers: corsHeaders });
  } catch (error) {
    const message = error instanceof ArchiveError ? error.message : '빌드 처리 중 오류가 발생했습니다.';
    await notifyWebhook(payload.buildId, { status: 'FAILED', failureReason: message }).catch(() => undefined);
    return NextResponse.json({ message }, { status: 422, headers: corsHeaders });
  } finally {
    await fs.rm(zipWorkDir, { recursive: true, force: true });
    await fs.rm(extractDir, { recursive: true, force: true });
  }
}

export function OPTIONS(request: NextRequest) {
  return new NextResponse(null, { status: 204, headers: buildCorsHeaders(request) });
}

function buildCorsHeaders(request: NextRequest): HeadersInit {
  const origin = request.headers.get('Origin');
  if (origin !== ADMIN_ORIGIN) {
    return {};
  }
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Game-Build-Token, Content-Type',
  };
}

async function notifyWebhook(
  buildId: number,
  body:
    | { status: 'ACTIVE'; canvasWidth: number | null; canvasHeight: number | null; storageBytes: number; buildFileUrl: string }
    | { status: 'FAILED'; failureReason: string },
) {
  await fetch(`${INTERNAL_API_ORIGIN}/v1/games/builds/${buildId}/webhook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Game-Build-Secret': GAME_BUILD_SECRET },
    body: JSON.stringify(body),
  });
}
