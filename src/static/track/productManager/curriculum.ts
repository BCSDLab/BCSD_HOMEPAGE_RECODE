import { Curriculum } from '@/types/curriculum';
import Figma from '@/assets/svg/techstack/design/figma.svg';
import Notion from '@/assets/svg/techstack/product-manager/notion.svg';
import Slack from '@/assets/svg/techstack/product-manager/slack.svg';

const PRODUCT_MANAGER: Curriculum = {
  track: 'product-manager',
  displayName: 'Product Manager',
  weeks: [
    {
      week: 1,
      items: [
        {
          index: 1,
          title: 'Product Manager란?',
          detail: ['서비스 기획이란?', '기획자는 어떤 일을 할까'],
        },
      ],
    },
    {
      week: 2,
      items: [
        {
          index: 1,
          title: '웹 기획',
          detail: ['웹 기획 종류와 UI 특징 알아보기', '웹 기획 실습'],
        },
      ],
    },
    {
      week: 3,
      items: [
        {
          index: 1,
          title: '앱 기획',
          detail: ['iOS와 AOS의 UI/UX 특징 알아보기', '앱 기획 실습'],
        },
      ],
    },
    {
      week: { from: 4, to: 6 },
      items: [
        {
          index: 1,
          title: '유저 중심의 서비스 기획하기',
          detail: [
            '서비스 기획의 원리 학습하기',
            '타겟 유저 설정 방법 배우기',
            '페르소나 정립하기',
            '설문조사 및 질문 방법',
          ],
        },
      ],
    },
    {
      week: 7,
      items: [
        {
          index: 1,
          title: '타겟 고객의 이해',
          detail: [
            '설문조사 데이터 활용',
            '페르소나 추가 작성',
            '유저의 Flowchart 작성',
            '서비스 기획의 4대 요소 정리',
          ],
        },
      ],
    },
    {
      week: 8,
      items: [
        {
          index: 1,
          title: '비즈니스란 무엇일까?',
          detail: ['비즈니스의 이해 및 비즈니스 모델 제작', '성과 측정 지표 작성', '사업기획안 작성'],
        },
      ],
    },
    {
      week: 9,
      items: [
        {
          index: 1,
          title: '기획의 기초 문서 작성해보기',
          detail: ['PRD 작성하기', 'WBS란?', 'IA란?'],
        },
      ],
    },
    {
      week: 10,
      items: [
        {
          index: 1,
          title: '화면정의서란?',
          detail: ['PPT 버전으로 작성하기', 'Figma 버전으로 작성하기'],
        },
      ],
    },
    {
      week: 11,
      items: [
        {
          index: 1,
          title: '기능정의서란?',
          detail: ['Menu Tree 작성하기', '정책안 작성하기', '기능정의서 작성하기'],
        },
      ],
    },
    {
      week: { from: 12, to: 13 },
      items: [
        {
          index: 1,
          title: '프로토타입 제작',
          detail: ['Figma 활용해서 제작하기', 'QA & Test Case 정리'],
        },
      ],
    },
    {
      week: 14,
      items: [
        {
          index: 1,
          title: '역기획',
          detail: ['역기획이란?', '역기획 실습'],
        },
      ],
    },
    {
      week: 15,
      items: [
        {
          index: 1,
          title: '프로젝트 운영 방법에는 어떤 것들이 있을까',
          detail: ['워터폴', '디자인 씽킹', '애자일'],
        },
      ],
    },
    {
      week: 16,
      items: [
        {
          index: 1,
          title: '기획 A to Z 실습',
          detail: [
            '주제 및 니즈 파악하기',
            '유저의 니즈 및 솔루션 도출하기',
            '문서화 작성하기',
            '프로토타입 만들기',
            '발표 및 피드백',
          ],
        },
      ],
    },
  ],
  techStack: [Notion, Figma, Slack],
};

export default PRODUCT_MANAGER;
