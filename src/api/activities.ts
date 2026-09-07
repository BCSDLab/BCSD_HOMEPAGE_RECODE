const API_ORIGIN = process.env.INTERNAL_API_ORIGIN ?? 'http://localhost:8080';

export interface ActivityCategorySummary {
  slug: string;
  name: string;
  headline: string | null;
  heroImageUrl: string | null;
}

export interface ActivityListItem {
  id: number;
  month: number;
  title: string;
  summary: string;
  thumbnailUrl: string | null;
  images: string[];
  externalUrl: string | null;
  hasDetail: boolean;
}

export interface ActivityTimelineGroup {
  year: number;
  activities: ActivityListItem[];
}

export interface ActivityDetail {
  id: number;
  categorySlug: string;
  year: number;
  month: number;
  title: string;
  summary: string;
  content: string | null;
  images: string[];
  externalUrl: string | null;
}

// 활동의 "게임" 카테고리(행사·소식 게시글)와 별도 게임 쇼케이스 기능(/game)이
// 둘 다 "게임"으로 불려 방문자가 헷갈릴 수 있어, 홈페이지 쪽에서만 이 탭을
// 숨긴다. 인터널 어드민의 카테고리 데이터 자체는 그대로 둔다 — 콘텐츠 삭제가
// 아니라 노출 화면의 결정이다.
const HIDDEN_ACTIVITY_CATEGORY_SLUGS = new Set(['game']);

export async function listActivityCategories(): Promise<ActivityCategorySummary[]> {
  const res = await fetch(`${API_ORIGIN}/v1/activity-categories`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`활동 카테고리를 불러오지 못했습니다: ${res.status}`);
  }
  const categories: ActivityCategorySummary[] = await res.json();
  return categories.filter((category) => !HIDDEN_ACTIVITY_CATEGORY_SLUGS.has(category.slug));
}

export async function getActivityTimeline(categorySlug: string): Promise<ActivityTimelineGroup[]> {
  const res = await fetch(`${API_ORIGIN}/v1/activities?category=${encodeURIComponent(categorySlug)}`, {
    cache: 'no-store',
  });
  if (res.status === 404) {
    return [];
  }
  if (!res.ok) {
    throw new Error(`활동 목록을 불러오지 못했습니다: ${res.status}`);
  }
  return res.json();
}

export async function getActivity(id: number): Promise<ActivityDetail | null> {
  const res = await fetch(`${API_ORIGIN}/v1/activities/${id}`, { cache: 'no-store' });
  if (res.status === 404) {
    return null;
  }
  if (!res.ok) {
    throw new Error(`활동 상세를 불러오지 못했습니다: ${res.status}`);
  }
  return res.json();
}
