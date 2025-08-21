import { Curriculum } from '@/types/curriculum';
import Python from '@/assets/svg/techstack/security/python.svg';
import BigQuery from '@/assets/svg/techstack/data-analyst/bigquery-icon.svg';
// import GA4 from '@/assets/svg/techstack/data-analyst/ga4-icon.svg';
import Tableau from '@/assets/svg/techstack/data-analyst/tableau-icon.svg';

const DATA_ANALYST: Curriculum = {
  track: 'data-analyst',
  displayName: 'Data Analyst',
  weeks: [
    {
      week: 1,
      items: [
        {
          index: 1,
          title: 'PYTHON (정제)',
          detail: ['파이썬과 R의 차이', '데이터 가져오기와 데이터 프레임', '데이터의 타입이란?'],
        },
      ],
    },
    {
      week: 2,
      items: [
        {
          index: 1,
          title: 'SQL (SELECT, FROM, WHERE)?',
          detail: ['SQL이란?', '데이터를 탐색하는 방법'],
        },
      ],
    },
    {
      week: 3,
      items: [
        {
          index: 1,
          title: 'PYTHON (요약)',
          detail: ['데이터 요약하기', '데이터 그룹화하기'],
        },
      ],
    },
    {
      week: 4,
      items: [
        {
          index: 1,
          title: 'SQL (GROUP BY, HAVING, SUM/COUNT)',
          detail: ['집계를 활용한 데이터 탐색'],
        },
      ],
    },
    {
      week: { from: 5, to: 7 },
      items: [
        {
          index: 1,
          title: 'PYTHON (시각화)',
          detail: ['시각화 라이브러리 소개', '다양한 Plot 소개 및 실습'],
        },
      ],
    },
    {
      week: 8,
      items: [
        {
          index: 1,
          title: 'PYTHON (검증)',
          detail: ['귀무가설과 대립가설', '정규성 검증', '등분산성 검증'],
        },
      ],
    },
    {
      week: 9,
      items: [
        {
          index: 1,
          title: 'SQL (JOIN, UNNEST)',
          detail: ['JOIN이란?', '각 조인의 방법', '빅쿼리(BigQuery)의 UNNEST'],
        },
      ],
    },
    {
      week: 10,
      items: [
        {
          index: 1,
          title: 'PYTHON (예측)',
          detail: ['ERD를 활용한 데이터 탐색', '모델 생성'],
        },
      ],
    },
    {
      week: 11,
      items: [
        {
          index: 1,
          title: 'SQL (WITH)',
          detail: ['WITH문과 파티션', '데이터 결과 검증'],
        },
      ],
    },
    {
      week: { from: 12, to: 13 },
      items: [
        {
          index: 1,
          title: 'A/B TEST',
          detail: [
            'A/B Test 소개',
            'A/B Test 시스템 구성 이해',
            'A/B Test 통계 이해',
            'A/B Test 분석',
            'A/B Test 시각화',
          ],
        },
      ],
    },
    {
      week: 14,
      items: [
        {
          index: 1,
          title: '리텐션(RETENTION) 분석',
          detail: ['리텐션 분석 소개', '코호트(Cohort) 분석', '실제 데이터를 통한 분석'],
        },
      ],
    },
  ],
  techStack: [Python, BigQuery, Tableau],
};

export default DATA_ANALYST;
