import { apiGet, apiGetOrNull } from '@/api/client';

const PUBLIC_ORIGIN = process.env.PUBLIC_ORIGIN ?? 'http://localhost:3010';

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
  canvasWidth: number | null;
  canvasHeight: number | null;
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

/**
 * 이전 업로드에서 저장된 컨테이너 내부 buildFileUrl도 공개 경로로 재생한다.
 * 빌드 파일은 이미 /games/{slug}/ 아래에 정적으로 존재하므로 URL의 origin만
 * 공개 홈페이지로 교체하면 된다. 이후 업로드는 PUBLIC_ORIGIN으로 정상 저장된다.
 */
function normalizeBuildFileUrl(url: string | null): string | null {
  if (!url) {
    return null;
  }

  try {
    const parsed = new URL(url);
    if (!parsed.pathname.startsWith('/games/')) {
      return url;
    }
    return `${PUBLIC_ORIGIN}${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return url;
  }
}

export function listGames(): Promise<GameSummary[]> {
  return apiGet('/v1/games', '게임 목록을 불러오지 못했습니다');
}

export async function getGame(slug: string): Promise<GameDetail | null> {
  const game = await apiGetOrNull<GameDetail>(`/v1/games/${encodeURIComponent(slug)}`, '게임 상세를 불러오지 못했습니다');
  if (!game) {
    return null;
  }
  if (game.activeBuild) {
    game.activeBuild = {
      ...game.activeBuild,
      buildFileUrl: normalizeBuildFileUrl(game.activeBuild.buildFileUrl),
    };
  }
  return game;
}
