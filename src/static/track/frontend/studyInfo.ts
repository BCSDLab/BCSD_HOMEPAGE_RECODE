import type { StudyInfo } from '@/types/curriculum';

const FRONTEND_STUDY: StudyInfo[] = [
  {
    title: '확장성과 재사용성을\n 고려한 엔지니어링',
    descriptions: 'React를 활용한 컴포넌트 기반의 UI 개발',
    iconSrc: '/images/track/cogwheel-icon.svg',
  },
  {
    title: '새로운 기술 토픽 공유',
    descriptions: '지속적으로 발전하는 웹 트렌드에 맞춰\n최신 기술 도입을 논의하고, 이를 프로젝트에 적용',
    iconSrc: '/images/track/talk-icon.svg',
  },
  {
    title: '사용자 경험 향상',
    descriptions: '웹 접근성, 크로스 브라우징, 검색엔진 최적화,\n그리고 개인화된 경험 제공',
    iconSrc: '/images/track/enhance-icon.svg',
  },
];

export default FRONTEND_STUDY;
