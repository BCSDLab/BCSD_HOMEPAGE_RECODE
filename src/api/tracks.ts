import { apiGet, apiGetOrNull } from '@/api/client';
import { DEFAULT_TRACK_SLUG } from '@/constants/defaults';

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

export function listTracks(): Promise<TrackSummary[]> {
  return apiGet('/v1/tracks', '트랙 목록을 불러오지 못했습니다');
}

export function getTrack(slug: string): Promise<TrackDetail | null> {
  return apiGetOrNull(`/v1/tracks/${encodeURIComponent(slug)}`, '트랙 상세를 불러오지 못했습니다');
}

/** /track 진입 시 보낼 슬러그. 기본값이 목록에 있으면 유지하고, 없으면 첫 트랙으로 대체한다. */
export async function resolveDefaultTrackSlug(): Promise<string> {
  try {
    const tracks = await listTracks();
    return tracks.find(({ slug }) => slug === DEFAULT_TRACK_SLUG)?.slug ?? tracks[0]?.slug ?? DEFAULT_TRACK_SLUG;
  } catch {
    return DEFAULT_TRACK_SLUG;
  }
}
