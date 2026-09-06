import fs from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { Readable } from 'node:stream';
import path from 'node:path';
import { NextRequest, NextResponse } from 'next/server';
import { GAME_BUILD_STORAGE_DIR } from '@/lib/gameBuild/config';
import { resolveContentType } from '@/lib/gameBuild/contentType';
import { findUnityLoaderPrefix, renderUnityIndexHtml, resolveUnityBuildAssets } from '@/lib/gameBuild/unityLoader';

/**
 * 업로드·압축해제된 게임 빌드 정적 파일을 직접 서빙한다(ADR-024). Range는
 * 지원하지 않는다 — 유니티 로더는 이 파일들을 일반 GET으로만 요청하고,
 * Content-Encoding과 Range를 같이 다루는 건 알려진 문제 지점이라
 * 지금 범위에서는 굳이 필요하지 않다(digital8150 buildFiles.js 참고).
 */
export async function GET(_request: NextRequest, { params }: { params: Promise<{ slug: string; path: string[] }> }) {
  const { slug, path: segments } = await params;
  if (!isValidSlug(slug) || segments.some((segment) => segment === '..' || segment === '')) {
    return new NextResponse(null, { status: 400 });
  }

  const root = path.resolve(GAME_BUILD_STORAGE_DIR, slug);
  const filePath = path.resolve(root, ...segments);
  if (filePath !== root && !filePath.startsWith(root + path.sep)) {
    return new NextResponse(null, { status: 400 });
  }

  let stat;
  try {
    stat = await fs.stat(filePath);
  } catch {
    // 실제 산출물 7개 전부 index.html 없이 Build 폴더 내용물만 들어있었다 —
    // 그 자리는 로더 파일명으로 직접 만들어서 응답한다(unityLoader.ts).
    if (segments.length === 1 && segments[0].toLowerCase() === 'index.html') {
      return respondWithSynthesizedIndex(root, slug);
    }
    return new NextResponse(null, { status: 404 });
  }
  if (!stat.isFile()) {
    return new NextResponse(null, { status: 404 });
  }

  const filename = segments[segments.length - 1];
  const { contentType, contentEncoding } = resolveContentType(filename);
  const headers = new Headers({
    'Content-Type': contentType,
    'Content-Length': String(stat.size),
    'Cache-Control': filename.toLowerCase() === 'index.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
  });
  if (contentEncoding) {
    headers.set('Content-Encoding', contentEncoding);
  }

  const body = Readable.toWeb(createReadStream(filePath)) as ReadableStream;
  return new NextResponse(body, { headers });
}

function isValidSlug(slug: string): boolean {
  return /^[a-z0-9-]+$/.test(slug);
}

async function respondWithSynthesizedIndex(root: string, slug: string): Promise<NextResponse> {
  const prefix = await findUnityLoaderPrefix(root).catch(() => null);
  if (!prefix) {
    return new NextResponse(null, { status: 404 });
  }
  const assets = await resolveUnityBuildAssets(root, prefix);
  if (!assets) {
    return new NextResponse(null, { status: 404 });
  }
  const html = renderUnityIndexHtml(slug, assets);
  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' },
  });
}
