const API_ORIGIN = process.env.INTERNAL_API_ORIGIN ?? 'http://localhost:8080';

const SAFETY_NET_REVALIDATE_SECONDS = 3600;

export interface GameSummary {
  slug: string;
  name: string;
  oneLiner: string;
  thumbnailUrl: string | null;
}

export interface GameMember {
  name: string;
  memberType: string;
  profileImageUrl: string | null;
}

export interface GameRating {
  rating: 'ALL' | 'OVER_12' | 'OVER_15' | 'OVER_18';
  classificationNumber: string | null;
  classificationDate: string | null;
  businessName: string | null;
  developerReportNumber: string | null;
  contentDescriptors: string[];
}

export interface GameActiveBuild {
  version: string;
  status: string;
  buildFileUrl: string | null;
}

export interface GameDetail {
  slug: string;
  name: string;
  oneLiner: string;
  trackName: string | null;
  teamLabel: string | null;
  description: string | null;
  thumbnailUrl: string | null;
  screenshots: string[];
  members: GameMember[];
  rating: GameRating | null;
  activeBuild: GameActiveBuild | null;
}

export async function listGames(): Promise<GameSummary[]> {
  const res = await fetch(`${API_ORIGIN}/v1/games`, {
    next: { tags: ['game-list'], revalidate: SAFETY_NET_REVALIDATE_SECONDS },
  });
  if (!res.ok) {
    throw new Error(`게임 목록을 불러오지 못했습니다: ${res.status}`);
  }
  return res.json();
}

export async function getGame(slug: string): Promise<GameDetail | null> {
  const res = await fetch(`${API_ORIGIN}/v1/games/${slug}`, {
    next: { tags: [`game:${slug}`], revalidate: SAFETY_NET_REVALIDATE_SECONDS },
  });
  if (res.status === 404) {
    return null;
  }
  if (!res.ok) {
    throw new Error(`게임 상세를 불러오지 못했습니다: ${res.status}`);
  }
  return res.json();
}
