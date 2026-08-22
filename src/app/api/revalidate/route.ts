import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * 인터널 백엔드가 콘텐츠 변경 후 호출하는 웹훅(ADR-010). 시크릿이 맞지 않으면 401,
 * 캐시 태그 목록을 revalidateTag로 무효화하고 어떤 태그를 처리했는지 돌려준다.
 */
export async function POST(request: NextRequest) {
  const secret = request.headers.get('X-Revalidate-Secret');
  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'invalid secret' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const tags: unknown = body?.tags;
  if (!Array.isArray(tags) || tags.some((tag) => typeof tag !== 'string')) {
    return NextResponse.json({ message: 'tags must be a string array' }, { status: 400 });
  }

  tags.forEach((tag) => revalidateTag(tag, 'max'));
  return NextResponse.json({ revalidated: tags });
}
