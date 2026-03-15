import type { StaticImageData } from 'next/image';
import Group from '@/assets/svg/recruit/group-icon.svg';
import Graph from '@/assets/svg/recruit/graph-icon.svg';
import Up from '@/assets/svg/recruit/up-icon.svg';
import Chat from '@/assets/svg/recruit/chat-icon.svg';

export interface Benefit {
  title: string;
  descriptions: string;
  iconSrc: StaticImageData;
  offset?: boolean;
}

export const BENEFITS: Benefit[] = [
  {
    title: '온/오프라인 병행',
    descriptions: '모교 출신 멘토들과의\n 24시간 질의응답',
    iconSrc: Group,
  },
  {
    title: '효율적인 프로세스',
    descriptions: '실제 스타트업에서 쓰이는\n 프로세스 차용',
    iconSrc: Graph,
    offset: true,
  },
  {
    title: '포트폴리오 강화',
    descriptions: '학부생으로서 가질 수 있는\n 최대의 프로젝트 경험',
    iconSrc: Up,
  },
  {
    title: '취업 멘토링',
    descriptions: '서류와 면접 준비에\n 대한 멘토들과의 커피챗',
    iconSrc: Chat,
    offset: true,
  },
];
