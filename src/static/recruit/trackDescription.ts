export interface TrackItem {
  title: string;
  description: string;
  iconSrc: string;
}

export const TRACKS: TrackItem[] = [
  { title: 'Front-End', description: '웹사이트와 사용자 인터페이스를 개발해요.', iconSrc: '/images/recruit/front-end-icon.svg' },
  { title: 'Back-End', description: '서비스의 서버와 데이터 관리를 담당해요.', iconSrc: '/images/recruit/back-end-icon.svg' },
  { title: 'Android', description: '안드로이드 앱을 개발하고 구현해요.', iconSrc: '/images/recruit/android-icon.svg' },
  { title: 'iOS', description: 'iOS 앱을 개발하고 구현해요.', iconSrc: '/images/recruit/ios-icon.svg' },
  { title: 'Design', description: '서비스의 디자인과 브랜딩 디자인을 담당해요.', iconSrc: '/images/recruit/design-icon.svg' },
  { title: 'Game', description: '게임 개발과 구현을 담당해요.', iconSrc: '/images/recruit/game-icon.svg' },
  { title: 'Data-Analyst', description: '데이터 분석과 시각화를 담당해요.', iconSrc: '/images/recruit/data-analyst-icon.svg' },
  {
    title: 'Product-Manager',
    description: '프로젝트 기획과 팀 협업을 주도해요.',
    iconSrc: '/images/recruit/product-manager-icon.svg',
  },
  { title: 'Security', description: '서비스의 보안과 안전을 책임져요.', iconSrc: '/images/recruit/security-icon.svg' },
];
