import type { ActivityList } from '@/types/activity';

const EVENT_ACTIVITY: ActivityList[] = [
  {
    year: '2019',
    activities: [
      {
        id: 1,
        month: '05',
        title: 'BCSD Lab 컨퍼런스',
        description: '제 1회 BCSD Lab Conference를 개최하였습니다.',
        images: [
          'https://static.koreatech.in/upload/a5bc.png',
          'https://static.koreatech.in/upload/a6bc.jpg',
          'https://static.koreatech.in/upload/a7bc.png',
          'https://static.koreatech.in/upload/a8bc.jpg',
          'https://static.koreatech.in/upload/a9bc.jpg',
          'https://static.koreatech.in/upload/a10bc.jpg',
          'https://static.koreatech.in/upload/a11bc.jpg',
        ],
      },
      {
        id: 2,
        month: '01',
        title: '안드로이드 앱 출시',
        description: '코인 안드로이드 앱을 출시하였습니다.',
        images: ['https://static.koreatech.in/upload/a20ki.png', 'https://static.koreatech.in/upload/a21ki.png'],
      },
    ],
  },
  {
    year: '2018',
    activities: [
      {
        id: 3,
        month: '09',
        title: 'BCSD/KAP 통합',
        description: 'BCSD와 KAP가 통합되었습니다.',
        images: ['https://static.koreatech.in/upload/a26brbr.png'],
      },
    ],
  },
];

export default EVENT_ACTIVITY;
