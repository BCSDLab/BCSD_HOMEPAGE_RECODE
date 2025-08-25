import { Curriculum } from '@/types/curriculum';
import Python from '@/assets/svg/techstack/security/python.svg';
import Burpsuit from '@/assets/svg/techstack/security/burpsuit.svg';
import Nmap from '@/assets/svg/techstack/security/nmap.svg';

const SECURITY: Curriculum = {
  track: 'security',
  displayName: 'Security',
  weeks: [
    {
      week: 1,
      items: [
        {
          index: 1,
          title: '보안의 정의와 중요성',
          detail: ['정보보안의 기본 개념(기밀성, 무결성, 가용성, 인증)', '사회 공학 공격'],
        },
        {
          index: 2,
          title: '보안 세부분야 소개',
          detail: ['해킹', '시스템해킹', '리버싱 엔지니어링'],
        },
        { index: 3, title: '로드맵(해킹/취약점 분석) 및\n일정 소개' },
        {
          index: 4,
          title: '보안 주요 개념 소개',
          detail: ['OWASP Top 10', '워게임, CTF', '버그바운티, 제로데이'],
        },
      ],
    },
    {
      week: 2,
      items: [
        { index: 1, title: '네트워크 계층', detail: ['OSI 7 Layer', 'TCP/IP 4 Layer'] },
        { index: 2, title: 'HTTP 프로토콜', detail: ['HTTP Request, Response', 'HTTP Method'] },
        { index: 3, title: 'HTTPS', detail: ['HTTP와의 차이점 비교'] },
      ],
    },
    {
      week: 3,
      items: [
        { index: 1, title: '기초 프론트엔드', detail: ['HTML, CSS, JavaScript 기초', '개발자 도구(F12) 활용법'] },
        { index: 2, title: '실습', detail: ['/LOGIN 페이지 제작'] },
      ],
    },
    {
      week: 4,
      items: [
        {
          index: 1,
          title: '암호화',
          detail: ['단방향 암호화(해시 함수, 솔트)', '대칭키와 공개키 암호화', '패스워드 관리와 인증서의 활용'],
        },
        { index: 2, title: '실습', detail: ['해시 함수를 통한 비밀번호 유효성 검사'] },
      ],
    },
    {
      week: 5,
      items: [
        { index: 1, title: '프록시' },
        { index: 2, title: '웹해킹 툴 사용', detail: ['버프스위트의 주요 기능', '관련 취약점 소개'] },
      ],
    },
    {
      week: 6,
      items: [
        { index: 1, title: '세션과 쿠키 기반 인증', detail: ['세션 하이재킹'] },
        { index: 2, title: 'JWT 기반 인증', detail: ['JWT 취약점(토큰 변조, 탈취, 키 관리 문제)'] },
        { index: 3, title: '실습: JWT를 활용하여 로그인하는 프로젝트의 취약점 방어' },
      ],
    },
    {
      week: 7,
      items: [
        { index: 1, title: 'SOP', detail: ['SOP의 개념'] },
        { index: 2, title: 'CORS', detail: ['CORS 동작 방식'] },
        { index: 3, title: '실습: /CROSS-ORIGIN 페이지 제작 후 취약점 방어', detail: ['SOP, CORS'] },
      ],
    },
    {
      week: 8,
      items: [
        { index: 1, title: '웹해킹 분석', detail: ['Server-Side, Client-Side 취약점 분석 소개'] },
        { index: 2, title: 'XSS, CSRF, SSRF 공격 \n시나리오 및 방어 기법', detail: ['XSS', 'CSRF', 'SSRF'] },
        { index: 3, title: '실습: /MEMO 페이지 제작 후 \n취약점 방어', detail: ['XSS, CSRF, SSRF'] },
      ],
    },
    {
      week: 9,
      items: [
        { index: 1, title: 'Injection이란?' },
        {
          index: 2,
          title: 'SQL Injection',
          detail: ['SQL Injection 유형 분석', 'SQL 인젝션 방어 기법', 'NoSQL 인젝션 방어 기법'],
        },
        { index: 3, title: '실습: /LOGIN 페이지 DB \n연결 후 취약점 방어', detail: ['SQL Injection'] },
      ],
    },
    {
      week: 10,
      items: [
        { index: 1, title: '서버 사이드 Injection 분석', detail: ['Command Injection', 'Shell Injection'] },
        { index: 2, title: 'XXE', detail: ['XML External Entity'] },
        { index: 3, title: '실습: /LOGIN, /MEMO\n페이지에서 취약점 방어', detail: ['Injection'] },
      ],
    },
    {
      week: 11,
      items: [
        { index: 1, title: '파일 경로 조작 취약점', detail: ['LFI', 'Path Traversal', 'RPO'] },
        { index: 2, title: '실습: /FILE 페이지 제작 후\n취약점 방어', detail: ['LFI, Path Traversal, RPO'] },
      ],
    },
    {
      week: 12,
      items: [
        {
          index: 1,
          title: 'DevSecOps',
          detail: ['DevOps', 'Jenkins로 CI/CD 파이프라인 구성 실습', 'DevSecOps 구조'],
        },
        { index: 2, title: '실습: 기존 프로젝트의 취약점\n방어 대책 적용' },
      ],
    },
    {
      week: { from: 13, to: 16 },
      items: [{ index: 1, title: 'Project', detail: ['동료 프로젝트 취약점 분석 및 보완'] }],
    },
  ],
  techStack: [Python, Burpsuit, Nmap],
};

export default SECURITY;
