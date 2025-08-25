import { Curriculum } from '@/types/curriculum';
import Html from '@/assets/svg/techstack/front/html.svg';
import Css from '@/assets/svg/techstack/front/css3.svg';
import Js from '@/assets/svg/techstack/front/javascript.svg';
import Webpack from '@/assets/svg/techstack/front/webpack.svg';
import ReactIcon from '@/assets/svg/techstack/front/react.svg';
import Vite from '@/assets/svg/techstack/front/vite.svg';
import Next from '@/assets/svg/techstack/front/nextjs.svg';

const FRONTEND: Curriculum = {
  track: 'frontend',
  displayName: 'Frontend',
  weeks: [
    {
      week: 1,
      items: [
        {
          index: 1,
          title: 'FrontEnd는 무엇을 배우는 것인가? (역할과 이해)',
        },
        {
          index: 2,
          title: 'HTML',
          detail: ['HTML이 뭘까?', 'Tag, Element, Attribute', 'HTML 문서 구조 (head, body)'],
        },
        {
          index: 3,
          title: 'CSS',
          detail: ['CSS가 뭘까? (구조, 적용방식)', 'BOX Model', 'CSS Layout'],
        },
      ],
    },
    {
      week: 2,
      items: [
        {
          index: 1,
          title: 'JavaScript',
          detail: ['표준 내장 객체', '식, 연산자', '선언문', '함수와 화살표 함수'],
        },
        { index: 2, title: 'TypeScript' },
      ],
    },
    {
      week: 3,
      items: [
        {
          index: 1,
          title: 'DOM',
          detail: ['HTML 데이터 읽기, 변경', '템플릿 리터럴'],
        },
        { index: 2, title: 'BOM', detail: ['브라우저 API', 'BOM 객체'] },
        { index: 3, title: 'Event', detail: ['Event binding', '이벤트 종류와 객체', '흐름과 제어'] },
      ],
    },
    {
      week: 4,
      items: [
        {
          index: 1,
          title: '웹 동작 방식',
          detail: ['웹 서버와 클라이언트', 'URL', 'HTTP'],
        },
        { index: 2, title: '동기/비동기', detail: ['Event Loop'] },
        { index: 3, title: 'AJAX, JSON' },
        { index: 4, title: 'RESTful API' },
        {
          index: 5,
          title: 'JS 비동기',
          detail: ['callback', 'Promise, async/await', 'Fetch API, axios', 'debounce, throttle'],
        },
        {
          index: 6,
          title: 'loading',
          detail: ['placeholder data, skeleton', 'lazy loading'],
        },
      ],
    },
    {
      week: 5,
      items: [
        {
          index: 1,
          title: 'Interactive Web 실습',
        },
      ],
    },
    {
      week: 6,
      items: [
        {
          index: 1,
          title: 'FE Framework',
        },
        { index: 2, title: 'node.js' },
        { index: 3, title: 'Webpack' },
        { index: 4, title: 'package manager', detail: ['npm, pnpm', 'yarn, yarn berry'] },
        { index: 5, title: '렌더링 방식', detail: ['SPA, MPA', 'CSR, SSR'] },
        {
          index: 6,
          title: '실습 : React 프로젝트 만들기',
          detail: ['Vite', '프로젝트 배포 (github actions, CI/CD)', 'package.json', '구조 학습'],
        },
      ],
    },
    {
      week: 7,
      items: [
        {
          index: 1,
          title: 'Virtual DOM',
        },
        {
          index: 2,
          title: 'JSX',
          detail: ['html과의 차이', '규칙과 attribute 작성', 'props 전달', 'event handling', 'key'],
        },
        { index: 3, title: 'Component(Class, Function)' },
        { index: 4, title: 'Hooks' },
        { index: 5, title: 'State', detail: ['useState', '불변성'] },
        { index: 6, title: 'Life Cycle', detail: ['react의 life cycle', 'useEffect'] },
        { index: 7, title: 'ref', detail: ['useRef'] },
      ],
    },
    {
      week: 8,
      items: [
        {
          index: 1,
          title: 'React router',
          detail: ['React Router DOM', 'useParams', 'useLocation', 'useNavigate'],
        },
        {
          index: 2,
          title: 'React 스타일링',
          detail: ['BEM이란?', 'React 스타일링 방법', '(CSS module, Styled Components, Emotion, tailwind)'],
        },
      ],
    },
    {
      week: 9,
      items: [
        {
          index: 1,
          title: 'Component',
          detail: ['조합과 상속', '제어와 비제어'],
        },
        {
          index: 2,
          title: 'Reusing',
          detail: ['HOC', 'Context API', 'Compound pattern', 'Custom Hooks'],
        },
        {
          index: 3,
          title: 'side Effect',
        },
        {
          index: 4,
          title: 'React Fragment',
        },
        {
          index: 5,
          title: 'Portal',
        },
      ],
    },
    {
      week: 10,
      items: [
        {
          index: 1,
          title: 'useContext, useReducer',
        },
        {
          index: 2,
          title: '메모이제이션',
          detail: ['useMemo', 'useCallback'],
        },
        {
          index: 3,
          title: '라이브러리',
          detail: ['Zustand', 'Recoil', 'Redux Toolkit', 'Jotai'],
        },
      ],
    },
    {
      week: 11,
      items: [
        {
          index: 1,
          title: 'useEffect 활용',
        },
        {
          index: 2,
          title: 'api 모듈화',
        },
        {
          index: 3,
          title: 'Fetching state, Server state',
          detail: ['tanstack query', 'useSWR'],
        },
        {
          index: 4,
          title: 'Suspense',
        },
        {
          index: 5,
          title: 'Error Boundaries',
        },
      ],
    },
    {
      week: 12,
      items: [
        {
          index: 1,
          title: '프로젝트에 TS 환경 추가하기',
          detail: ['props, element, event type', 'hook, tanstack query type'],
        },
        {
          index: 2,
          title: '브라우저 저장소',
          detail: ['localStorage', 'sessionStorage', 'Cookie(jwt, session)'],
        },
        {
          index: 3,
          title: 'Fetching state, Server state',
          detail: ['tanstack query', 'useSWR'],
        },
        {
          index: 4,
          title: 'Suspense',
        },
        {
          index: 5,
          title: 'Error Boundaries',
        },
      ],
    },
    {
      week: 13,
      items: [
        {
          index: 1,
          title: 'React 실습',
          detail: ['배운 내용 바탕으로 React 프로젝트 진행'],
        },
      ],
    },
    {
      week: { from: 14, to: 17 },
      items: [
        {
          index: 1,
          title: 'Frontend 개인 프로젝트',
        },
      ],
    },
    {
      week: 18,
      items: [
        {
          index: 1,
          title: 'Frontend 응용 - 회고',
        },
      ],
    },
  ],
  techStack: [Html, Css, Js, Webpack, ReactIcon, Vite, Next],
};

export default FRONTEND;
