import { apiGet } from '@/api/client';

export interface HomeMentor {
  name: string;
  trackName: string;
  profileImageUrl: string | null;
}

export interface HomeQna {
  question: string;
  answer: string;
}

export interface HomeRecruitLink {
  googleFormUrl: string;
  isOpen: boolean;
  closedMessage: string | null;
}

export interface HomeData {
  mentors: HomeMentor[];
  qna: HomeQna[];
  recruit: HomeRecruitLink | null;
}

export function getHome(): Promise<HomeData> {
  return apiGet('/v1/home', '메인 화면 정보를 불러오지 못했습니다');
}

export async function getRecruitLink(): Promise<HomeRecruitLink | null> {
  const { recruit } = await getHome();
  return recruit;
}
