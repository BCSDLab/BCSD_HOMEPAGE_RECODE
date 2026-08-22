const API_ORIGIN = process.env.INTERNAL_API_ORIGIN ?? 'http://localhost:8080';

/** 웹훅 유실 시 최악의 경우 1시간 안에 따라잡는 안전망(ADR-010) — 태그 무효화가 주 경로다. */
const SAFETY_NET_REVALIDATE_SECONDS = 3600;

export interface TrackSummary {
  slug: string;
  name: string;
}

export interface StudyPoint {
  title: string;
  description: string;
  iconImageUrl: string | null;
}

export interface TechStackItem {
  name: string;
  iconUrl: string;
}

export interface CurriculumTopic {
  title: string;
  details: string[];
}

export interface CurriculumWeek {
  weekFrom: number;
  weekTo: number | null;
  topics: CurriculumTopic[];
}

export interface Curriculum {
  name: string;
  weeks: CurriculumWeek[];
}

export interface TrackMemberItem {
  name: string;
  memberType: 'BEGINNER' | 'REGULAR' | 'MENTOR';
  profileImageUrl: string | null;
}

export interface TrackDetail {
  slug: string;
  name: string;
  tagline: string;
  studyPoints: StudyPoint[];
  techStacks: TechStackItem[];
  curriculum: Curriculum | null;
  members: TrackMemberItem[];
}

export async function listTracks(): Promise<TrackSummary[]> {
  const res = await fetch(`${API_ORIGIN}/v1/tracks`, {
    next: { tags: ['track-list'], revalidate: SAFETY_NET_REVALIDATE_SECONDS },
  });
  if (!res.ok) {
    throw new Error(`트랙 목록을 불러오지 못했습니다: ${res.status}`);
  }
  return res.json();
}

export async function getTrack(slug: string): Promise<TrackDetail | null> {
  const res = await fetch(`${API_ORIGIN}/v1/tracks/${slug}`, {
    next: { tags: [`track:${slug}`], revalidate: SAFETY_NET_REVALIDATE_SECONDS },
  });
  if (res.status === 404) {
    return null;
  }
  if (!res.ok) {
    throw new Error(`트랙 상세를 불러오지 못했습니다: ${res.status}`);
  }
  return res.json();
}
