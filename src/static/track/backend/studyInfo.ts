import type { StudyInfo } from '@/types/curriculum';
import DB from '@/assets/svg/track/db-icon.svg';
import PC from '@/assets/svg/track/pc-icon.svg';
import Engineer from '@/assets/svg/track/engineer-icon.svg';

const BACKEND_STUDY: StudyInfo[] = [
  {
    title: '서버 개발 및 인프라 구축 경험',
    descriptions: '백엔드의 전반적인 분야 학습',
    Icon: DB,
  },
  {
    title: '전공 지식의 실질적 활용',
    descriptions: '컴퓨터공학 지식을 밀접하게 활용',
    Icon: PC,
  },
  {
    title: '안정적인 서비스 운영',
    descriptions: '현업에서 사용하는 서비스 지탱 기술',
    Icon: Engineer,
  },
];

export default BACKEND_STUDY;
