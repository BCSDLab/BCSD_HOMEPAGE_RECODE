import type { StudyInfo } from '@/types/curriculum';
import Book from '@/assets/svg/track/book-icon.svg';
import Laptop from '@/assets/svg/track/laptop-icon.svg';
import Flag from '@/assets/svg/track/flag-icon.svg';

const DESIGN_STUDY: StudyInfo[] = [
  {
    title: '상용화 프로젝트 경험',
    descriptions: '실제 웹/앱 디자인 후 상용화하는 프로세스를\n 통해 실무 능력 배양',
    Icon: Laptop,
  },
  {
    title: 'UI/UX 커리어 설계',
    descriptions: 'UI/UX 디자이너로 성장하기 위한\n 선배들의 커리어 피드백',
    Icon: Flag,
  },
  {
    title: '실무 노하우 학습',
    descriptions: '학교에서 배우지 않는 실무 노하우로\n 전문 인재 육성',
    Icon: Book,
  },
];

export default DESIGN_STUDY;
