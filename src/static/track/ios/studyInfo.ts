import type { StudyInfo } from '@/types/curriculum';
import Design from '@/assets/svg/track/design-icon.svg';
import Toggle from '@/assets/svg/track/toggle-icon.svg';
import Fragment from '@/assets/svg/track/fragment-icon.svg';

const IOS_STUDY: StudyInfo[] = [
  {
    title: '사용자 인터페이스 설계',
    descriptions: '다양한 UI 컴포넌트를 사용해 직관적이고\n반응성이 뛰어난 iOS 애플리케이션 개발',
    Icon: Toggle,
  },
  {
    title: '확장 가능한 모듈 설계',
    descriptions: '유연한 모듈화 구조를 통해 새로운 기능 추가 및 유지보수가 용이한 앱 개발',
    Icon: Design,
  },
  {
    title: 'Swift의 최신 기능 활용',
    descriptions: 'Swift의 최신 기능을 사용해 빠르고 안전한 코드 작성',
    Icon: Fragment,
  },
];

export default IOS_STUDY;
