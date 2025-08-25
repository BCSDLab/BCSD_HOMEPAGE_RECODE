import { Curriculum } from '@/types/curriculum';
import Java from '@/assets/svg/techstack/back/java.svg';
import Spring from '@/assets/svg/techstack/back/spring.svg';
import Mysql from '@/assets/svg/techstack/back/mysql.svg';
import Jenkins from '@/assets/svg/techstack/back/jenkins.svg';
import NodeIcon from '@/assets/svg/techstack/back/nodejs.svg';
import Swagger from '@/assets/svg/techstack/back/swagger.svg';
import Aws from '@/assets/svg/techstack/back/aws.svg';
import Redis from '@/assets/svg/techstack/back/redis.svg';
import Flyway from '@/assets/svg/techstack/back/flyway.svg';
import MongoDB from '@/assets/svg/techstack/back/mongodb.svg';

const BACKEND: Curriculum = {
  track: 'backend',
  displayName: 'Backend',
  weeks: [
    {
      week: 1,
      items: [
        {
          index: 1,
          title: '개발환경 세팅하기 (IntelliJ, JDK)',
          detail: ['인텔리제이 설치', 'JDK 설정'],
        },
        {
          index: 2,
          title: '실습: 자바 온보딩 미션\n(자동차경주 게임 구현)',
          detail: ['https://github.com/BCSDLab-EDU/java-racingcar'],
        },
      ],
    },
    {
      week: 2,
      items: [
        {
          index: 1,
          title: '객체지향 프로그래밍',
          detail: ['SOLID 원칙', 'OOP의 4가지 특징'],
        },
        { index: 2, title: '실습: 자동차 경주 게임 - 리팩터링' },
      ],
    },
    {
      week: 3,
      items: [
        {
          index: 1,
          title: '데이터베이스 기본',
          detail: ['관계형 데이터베이스', 'RDBMS', 'SQL (DDL, DCL, DML)', 'NoSQL'],
        },
        { index: 2, title: '실습: SQL 쿼리 작성' },
        { index: 3, title: '실습: 데이터베이스 설계' },
      ],
    },
    {
      week: 4,
      items: [
        {
          index: 1,
          title: '네트워크 기본',
          detail: ['IP 주소, PORT, DNS, URL, URI'],
        },
        {
          index: 2,
          title: 'HTTP',
          detail: ['HTTP 메시지의 구조와 기능', 'HTTP 메소드와 응답코드', 'HTTP를 이용한 웹 요청 흐름'],
        },
        { index: 3, title: 'REST API' },
        { index: 4, title: '실습: REST API 설계하기' },
      ],
    },
    {
      week: 5,
      items: [
        {
          index: 1,
          title: 'Spring',
          detail: ['Library, Framework', 'Spring Framework란?', 'Spring과 SpringBoot'],
        },
        { index: 2, title: '실습: Spring Boot 프로젝트\n환경설정' },
      ],
    },
    {
      week: 6,
      items: [
        {
          index: 1,
          title: 'Spring MVC',
          detail: ['MVC란?', 'Spring MVC', 'Spring MVC Request LifeCycle'],
        },
        { index: 2, title: '실습: GET, POST 요청하는\nAPI 만들기' },
      ],
    },
    {
      week: 7,
      items: [
        {
          index: 1,
          title: 'Spring JDBC',
          detail: ['JdbcTemplate', 'H2 Database'],
        },
        { index: 2, title: '실습: JDBC를 이용한 CRUD' },
      ],
    },
    {
      week: 8,
      items: [
        {
          index: 1,
          title: 'Spring Bean',
          detail: ['POJO Bean과 Spring Bean', 'Bean Scope (Singleton/Prototype)'],
        },
        { index: 2, title: 'Servlet과\nServlet Container' },
        {
          index: 3,
          title: '의존성 주입(DI)\n제어의 역전(IOC)',
          detail: ['Spring Bean 생명주기'],
        },
        { index: 4, title: '관점지향 프로그래밍(AOP)' },
        { index: 5, title: '실습: AOP를 활용한 함수 실행시간 측정하기' },
      ],
    },
    {
      week: 9,
      items: [
        { index: 1, title: 'ORM과 JPA' },
        { index: 2, title: 'Entity, 영속화, 1차 캐시' },
        { index: 3, title: 'Spring Data JPA' },
        { index: 4, title: '실습: 7주차에서 작성한 코드\nJPA로 리팩터링' },
      ],
    },
    {
      week: 10,
      items: [
        { index: 1, title: 'JPA 연관관계 매핑' },
        {
          index: 2,
          title: 'Spring MVC Request\nLifecycle',
          detail: ['컨트롤러와 서비스의 차이', 'URL Mapping', '비즈니스 로직'],
        },
        { index: 3, title: '실습: AOP를 활용한 로그 측정' },
      ],
    },
    {
      week: 11,
      items: [
        {
          index: 1,
          title: '보안 기초',
          detail: ['보안, 암호화, 복호화', '해싱 알고리즘'],
        },
        {
          index: 2,
          title: '웹에서의 보안',
          detail: ['HTTP와 HTTPS', '쿠키, 세션, JWT', 'BCrypt'],
        },
        { index: 3, title: '실습: JWT를 활용하여 로그인\n구현하기' },
      ],
    },
    {
      week: 12,
      items: [
        {
          index: 1,
          title: 'AWS와 배포',
          detail: ['EC2', '간단한 애플리케이션 배포 흐름'],
        },
        {
          index: 2,
          title: '회고 안내',
          detail: ['회고 프로젝트 설명 및 일정 안내', '프로젝트 진행 방식 설명'],
        },
      ],
    },
    {
      week: { from: 13, to: 16 },
      items: [{ index: 1, title: 'PROJECT', detail: ['자유 주제로 개인 프로젝트 진행'] }],
    },
    { week: 17, items: [{ index: 1, title: '회고' }] },
  ],
  techStack: [Java, NodeIcon, Spring, Mysql, Redis, Swagger, Jenkins, Aws, Flyway, MongoDB],
};

export default BACKEND;
