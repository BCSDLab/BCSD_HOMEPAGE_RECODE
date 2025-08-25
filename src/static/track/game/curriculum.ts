import { Curriculum } from '@/types/curriculum';
import Cplus from '@/assets/svg/techstack/game/c++.svg';
import Csharp from '@/assets/svg/techstack/game/c#.svg';
import Unity from '@/assets/svg/techstack/game/unity.svg';
import Unreal from '@/assets/svg/techstack/game/unreal.svg';

const GAME: Curriculum = {
  track: 'game',
  displayName: 'Game',
  weeks: [
    {
      week: 1,
      items: [
        { index: 1, title: 'GIT', detail: ['버전 관리 시스템과 Git'] },
        {
          index: 2,
          title: 'C#',
          detail: ['자료형, 문자 입출력, 배열', '선택문과 반복문, 상수'],
        },
      ],
    },
    {
      week: 2,
      items: [
        { index: 1, title: 'C#', detail: ['함수와 모듈화', '클래스'] },
        { index: 2, title: '객체지향 프로그래밍', detail: ['객체지향 프로그래밍(OOP)이란?'] },
      ],
    },
    {
      week: 3,
      items: [
        { index: 1, title: '자료구조와 알고리즘' },
        { index: 2, title: 'C#', detail: ['COLLECTION'] },
      ],
    },
    {
      week: 4,
      items: [
        {
          index: 1,
          title: 'Unity 2D',
          detail: ['Unity Interface, GameObject, Component', 'Transform, Event Function'],
        },
        { index: 2, title: 'Unity 2D RPG 제작실습 1' },
      ],
    },
    {
      week: 5,
      items: [
        {
          index: 1,
          title: 'Unity 2D',
          detail: ['Input, Physics, Prefab, Sprite', 'Layer, UGUI, Animation'],
        },
        { index: 2, title: 'Unity 2D RPG 제작실습 2' },
      ],
    },
    {
      week: { from: 6, to: 7 },
      items: [{ index: 1, title: 'Unity 2D 모작 프로젝트 기획 및 구현' }],
    },
    {
      week: 8,
      items: [{ index: 1, title: '회고 문서화', detail: ['프로젝트 회고 및 프로젝트 진행 내역 문서화'] }],
    },
    {
      week: 9,
      items: [
        {
          index: 1,
          title: 'Vector에 대한 이해',
          detail: ['3D 공간에서의 Point와 Vector의 차이점', '월드 좌표계, 로컬 좌표계', '벡터의 내적', '벡터의 외적'],
        },
        {
          index: 2,
          title: 'Quaternion에 대한 이해',
          detail: ['Euler Angle', 'Gimbal Lock', 'Quaternion'],
        },
        { index: 3, title: 'Unity 3D 튜토리얼', detail: ["John Lemon's Haunted Jaunt"] },
      ],
    },
    {
      week: 10,
      items: [
        { index: 1, title: 'Unity 3D 게임 제작의 이해' },
        { index: 2, title: 'Unity 3D FPS 실습' },
      ],
    },
    {
      week: 11,
      items: [{ index: 1, title: 'Unity 3D FPS 실습' }],
    },
    {
      week: 12,
      items: [{ index: 1, title: '개인 프로젝트 구상 및\n 기획서 작성' }],
    },
    {
      week: { from: 13, to: 16 },
      items: [{ index: 1, title: '개인 프로젝트', detail: ['프로젝트 진행사항 공유 및 피드백'] }],
    },
    {
      week: 17,
      items: [{ index: 1, title: '개인 프로젝트 시연 및 회고 진행' }],
    },
  ],
  techStack: [Cplus, Csharp, Unity, Unreal],
};

export default GAME;
