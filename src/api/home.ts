const API_ORIGIN = process.env.INTERNAL_API_ORIGIN ?? 'http://localhost:8080';

const SAFETY_NET_REVALIDATE_SECONDS = 3600;

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

export async function getHome(): Promise<HomeData> {
  const res = await fetch(`${API_ORIGIN}/v1/home`, {
    next: { tags: ['home'], revalidate: SAFETY_NET_REVALIDATE_SECONDS },
  });
  if (!res.ok) {
    throw new Error(`메인 화면 정보를 불러오지 못했습니다: ${res.status}`);
  }
  return res.json();
}

export async function getRecruitLink(): Promise<HomeRecruitLink | null> {
  const { recruit } = await getHome();
  return recruit;
}
