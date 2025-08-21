import type { StudyInfo } from '@/types/curriculum';
import Data from '@/assets/svg/track/data-icon.svg';
import Abtest from '@/assets/svg/track/abtest-icon.svg';
import Uphuman from '@/assets/svg/track/uphuman-icon.svg';

const DATA_ANALYST_STUDY: StudyInfo[] = [
  {
    title: '데이터 처리 및 분석',
    descriptions: 'Python 및 SQL을 활용한\n 데이터 분석 및 시각화',
    Icon: Data,
  },
  {
    title: 'A/B 테스트 설계 및 실행',
    descriptions: 'A/B 테스트의 기본 원리와 실험\n 설계 방법을 이해 및 인사이트 도출',
    Icon: Abtest,
  },
  {
    title: '리텐션 분석 및 고객 행동 이해',
    descriptions: '고객 유지율, 이탈률 등의 지표 분석을\n 통한 서비스 개선 방향 제시',
    Icon: Uphuman,
  },
];

export default DATA_ANALYST_STUDY;
