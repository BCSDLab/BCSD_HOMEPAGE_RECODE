import type { StudyInfo } from '@/types/curriculum';
import Book from '@/assets/svg/track/book-icon.svg';
import Person from '@/assets/svg/track/person-icon.svg';
import Paper from '@/assets/svg/track/paper-icon.svg';

const PRODUCT_MANAGER_STUDY: StudyInfo[] = [
  {
    title: '웹/앱 기획 실습을 통한\n 기획의 기본 이해 학습',
    descriptions: '웹/앱 기획 실습을 통해 기획의\n 기본 개념과 프로세스를 학습합니다.',
    Icon: Book,
  },
  {
    title: '유저 중심의 서비스 기획',
    descriptions: '타겟 유저의 니즈를 이해하고, 이를 반영한 서비스 기획\n 능력을 배양합니다.',
    Icon: Person,
  },
  {
    title: '기획 문서 작성 및 관리',
    descriptions: '화면정의서, 기능정의서 작성 및 프로토타입 제작 등의\n 기획 문서 작성 및 관리 방법을 학습합니다.',
    Icon: Paper,
  },
];

export default PRODUCT_MANAGER_STUDY;
