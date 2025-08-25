import type { ComponentType, SVGProps } from 'react';
import FrontEnd from '@/assets/svg/recruit/front-end-icon.svg';
import BackEnd from '@/assets/svg/recruit/back-end-icon.svg';
import Android from '@/assets/svg/recruit/android-icon.svg';
import IOS from '@/assets/svg/recruit/ios-icon.svg';
import ProductManager from '@/assets/svg/recruit/product-manager-icon.svg';
import Design from '@/assets/svg/recruit/design-icon.svg';
import Game from '@/assets/svg/recruit/game-icon.svg';
import DataAnalyst from '@/assets/svg/recruit/data-analyst-icon.svg';
import Security from '@/assets/svg/recruit/security-icon.svg';

export interface TrackItem {
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const TRACKS: TrackItem[] = [
  { title: 'Front-End', description: '웹사이트와 사용자 인터페이스를 개발해요.', Icon: FrontEnd },
  { title: 'Back-End', description: '서비스의 서버와 데이터 관리를 담당해요.', Icon: BackEnd },
  { title: 'Android', description: '안드로이드 앱을 개발하고 구현해요.', Icon: Android },
  { title: 'iOS', description: 'iOS 앱을 개발하고 구현해요.', Icon: IOS },
  { title: 'Design', description: '서비스의 디자인과 브랜딩 디자인을 담당해요.', Icon: Design },
  { title: 'Game', description: '게임 개발과 구현을 담당해요.', Icon: Game },
  { title: 'Data-Analyst', description: '데이터 분석과 시각화를 담당해요.', Icon: DataAnalyst },
  { title: 'Product-Manager', description: '프로젝트 기획과 팀 협업을 주도해요.', Icon: ProductManager },
  { title: 'Security', description: '서비스의 보안과 안전을 책임져요.', Icon: Security },
];
