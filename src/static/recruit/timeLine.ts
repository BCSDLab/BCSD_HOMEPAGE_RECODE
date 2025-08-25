interface Step {
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    title: '지원서 접수',
    description: '본인의 역량과 관심사에 따라 트랙을 선택합니다.',
  },
  {
    title: '지원서 검토',
    description: 'BCSD는 지원 서류를 통해 지원자의 수준을 파악합니다.',
  },
  {
    title: '비기너 교육',
    description: '약 6개월간 트랙별 비기너 교육을 진행합니다.',
  },
  {
    title: '회고',
    description: '6개월간의 교육과 학습을 끝마친 지원자들의 레귤러 전환을 평가합니다.',
  },
];
