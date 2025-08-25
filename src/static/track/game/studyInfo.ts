import type { StudyInfo } from '@/types/curriculum';
import Book from '@/assets/svg/track/book-icon.svg';
import Controller from '@/assets/svg/track/controller-icon.svg';
import together from '@/assets/svg/track/together-icon.svg';

const GAME_STUDY: StudyInfo[] = [
  {
    title: '다각적 학습 기회',
    descriptions: '게임 프로그래밍을 배울 수 있는 기회',
    Icon: Book,
  },
  {
    title: '재미를 만듭니다',
    descriptions: '원하는 게임을 직접 만들 수 있도록 지원',
    Icon: Controller,
  },
  {
    title: '함께 만드는 게임',
    descriptions: '상호발전과 유대감 형성',
    Icon: together,
  },
];

export default GAME_STUDY;
