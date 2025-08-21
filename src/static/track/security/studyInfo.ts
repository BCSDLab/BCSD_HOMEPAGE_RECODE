import type { StudyInfo } from '@/types/curriculum';
import Book from '@/assets/svg/track/book-icon.svg';
import Target from '@/assets/svg/track/target-icon.svg';
import Prevent from '@/assets/svg/track/prevent-icon.svg';

const SECURITY_STUDY: StudyInfo[] = [
  {
    title: '웹해킹 기초 및 보안 원리 학습',
    descriptions: '네트워크 보안 개념과 함께 웹 서비스에서\n 발생할 수 있는 주요 보안 취약점 학습',
    Icon: Book,
  },
  {
    title: '취약점 분석 및 공격 기법 실습',
    descriptions: 'OWASP Top 10을 기반으로 다양한\n 웹 서비스 취약점 분석 및 모의해킹 실습',
    Icon: Target,
  },
  {
    title: '보안 강화를 위한 방어 기법 적용',
    descriptions: '프로젝트를 통해 보안 취약점에 대한 방어 기술 적용',
    Icon: Prevent,
  },
];

export default SECURITY_STUDY;
