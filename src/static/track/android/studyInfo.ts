import type { StudyInfo } from '@/types/curriculum';
import Play from '@/assets/svg/track/play-icon.svg';
import Book from '@/assets/svg/track/book-icon.svg';
import Design from '@/assets/svg/track/design-icon.svg';

const ANDROID_STUDY: StudyInfo[] = [
  {
    title: '구글 플레이에 등록',
    descriptions: '애플리케이션 개발 후 실제 마켓에 런칭',
    Icon: Play,
  },
  {
    title: '최신 트렌드에 대한 학습',
    descriptions: '메이저 업데이트와 오픈소스에 대한 이해',
    Icon: Book,
  },
  {
    title: '디자인 패턴의 실무적인 활용',
    descriptions: 'VIEW 위주의 앱에서의 설계와 이해',
    Icon: Design,
  },
];

export default ANDROID_STUDY;
