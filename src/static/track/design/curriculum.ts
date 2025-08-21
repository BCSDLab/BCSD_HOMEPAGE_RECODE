import { Curriculum } from '@/types/curriculum';
import PhotoShop from '@/assets/svg/techstack/design/photoshop.svg';
import Illustrator from '@/assets/svg/techstack/design/illustrator.svg';
import AfterEffects from '@/assets/svg/techstack/design/aftereffects.svg';
import Figma from '@/assets/svg/techstack/design/figma.svg';

const DESIGN: Curriculum = {
  track: 'design',
  displayName: 'Design',
  weeks: [
    {
      week: 1,
      items: [
        { index: 1, title: 'UI/UX란 무엇인가 조사해보기', detail: ['사전과제 피드백'] },
        { index: 2, title: 'UI/UX 디자이너로서의\n커리어 설계', detail: ['강의 진행'] },
        { index: 3, title: '동아리 내에서 UI/UX가 하는 작업', detail: ['멘토의 강의(OFF-LINE / ON-LINE)'] },
      ],
    },
    {
      week: 2,
      items: [
        { index: 1, title: '앱의 유형별 차이와 Android / iOS 디자인 시 고려사항', detail: ['사전과제 피드백'] },
        { index: 2, title: 'Android / iOS 디자인 시\n고려사항', detail: ['강의 진행'] },
      ],
    },
    {
      week: 3,
      items: [
        { index: 1, title: 'UI/UX 디자인 트렌드', detail: ['사전과제 피드백'] },
        { index: 2, title: '참고 사이트', detail: ['Notefolio', 'Pinterest', 'Behance'] },
        { index: 3, title: '디자인 트렌드', detail: ['강의 진행'] },
      ],
    },
    {
      week: 4,
      items: [
        { index: 1, title: 'UI/UX 디자인 시스템,\n기업사례 조사', detail: ['사전과제 피드백'] },
        { index: 2, title: '디자인시스템 + Tool의 이해', detail: ['강의 진행'] },
        {
          index: 3,
          title: '현업에서 쓰이는 도구들의\n종류와 쓰임새',
          detail: ['Adobe 계열', 'ProtoPie', 'Sketch', 'Zeplin', 'BCSD에서 사용하는 도구'],
        },
      ],
    },
    {
      week: 5,
      items: [
        { index: 1, title: '디자인 프로세스 조사하기', detail: ['사전과제 피드백'] },
        { index: 2, title: 'UI/UX 디자인 프로세스', detail: ['강의 진행'] },
      ],
    },
    {
      week: 6,
      items: [{ index: 1, title: '와이어프레임', detail: ['사전과제 피드백'] }],
    },
    {
      week: 7,
      items: [
        { index: 1, title: 'GUI', detail: ['사전과제 피드백'] },
        { index: 2, title: 'GUI Benchmarking\nPractice', detail: ['Mobile 2개, Web 2개씩'] },
      ],
    },
    {
      week: { from: 8, to: 11 },
      items: [{ index: 1, title: 'GUI Benchmarking\nPractice', detail: ['Mobile 2개, Web 2개씩'] }],
    },
    {
      week: 12,
      items: [{ index: 1, title: 'UI 리뉴얼', detail: ['Figma 사용법', 'Figma에서 기존 프로젝트 확인'] }],
    },
    {
      week: { from: 13, to: 17 },
      items: [
        {
          index: 1,
          title: '내가 만드는 상용화 서비스',
          detail: ['서비스 기획', 'Wireframe 제작', 'GUI 디자인', '제안서 제출'],
        },
      ],
    },
    {
      week: 18,
      items: [{ index: 1, title: '자신이 만든 GUI 페이지\n 업로드하기', detail: ['과제'] }],
    },
    {
      week: 19,
      items: [{ index: 1, title: '회고' }],
    },
  ],
  techStack: [PhotoShop, Illustrator, AfterEffects, Figma],
};

export default DESIGN;
