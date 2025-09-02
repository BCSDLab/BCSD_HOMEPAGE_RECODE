import type { ActivityList } from '@/types/activity';

const KOIN_ACTIVITY: ActivityList[] = [
  {
    year: '2024',
    activities: [
      {
        id: 1,
        month: '12',
        title: '코인 버스 UI 개편 업데이트',
        description: '버스 노선 및 시간표 조회 화면을 개선하여 한눈에 보기 쉽게 정보 접근성을 향상.',
        images: [
          'https://static.koreatech.in/upload/activity/2024/bus-UI-update-1.png',
          'https://static.koreatech.in/upload/activity/2024/bus-UI-update-2.png',
        ],
      },
      {
        id: 2,
        month: '10',
        title: '코인 시간표 UI 개편 &\n 커스텀 시간표 업데이트',
        description: '시간표 화면 UI를 전면 개편하고, 사용자가 직접 커스텀 시간표를 구성할 수 있는 기능을 추가.',
        images: [
          'https://static.koreatech.in/upload/activity/2024/timetable-UI-update-custom-timetable-1.png',
          'https://static.koreatech.in/upload/activity/2024/timetable-UI-update-custom-timetable-2.png',
          'https://static.koreatech.in/upload/activity/2024/timetable-UI-update-custom-timetable-3.png',
        ],
      },
      {
        id: 3,
        month: '08',
        title: '코인 주변 상점 리뷰하기 업데이트',
        description: '상점 리뷰 작성 기능을 도입하여 사용자 피드백 공유와 상호 소통 활성화.',
        images: [
          'https://static.koreatech.in/upload/activity/2024/review-nearby-store-1.png',
          'https://static.koreatech.in/upload/activity/2024/review-nearby-store-2.png',
        ],
      },
      {
        id: 2,
        month: '06',
        title: '코인 식단 사진 보기 업데이트',
        description: '식단 메뉴에 실제 사진을 추가해 학생들이 식사를 선택하기 더 쉽게 개선.',
        images: ['https://static.koreatech.in/upload/activity/2024/view-meal-photos.png'],
      },
      {
        id: 5,
        month: '05',
        title: '코인 주변 상점 UI 개편 업데이트',
        description: '주변 상점 기능의 디자인을 새롭게 개선하여 더 직관적인 탐색 경험을 제공.',
        images: ['https://static.koreatech.in/upload/activity/2024/nearby-store-UI-update.png'],
      },
    ],
  },
];

export default KOIN_ACTIVITY;
