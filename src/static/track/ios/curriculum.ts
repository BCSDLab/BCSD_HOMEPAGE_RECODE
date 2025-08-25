import { Curriculum } from '@/types/curriculum';
import Swift from '@/assets/svg/techstack/ios/swift.svg';
import Xcode from '@/assets/svg/techstack/ios/xcode.svg';
import Uikit from '@/assets/svg/techstack/ios/uikit.svg';
import Alamofile from '@/assets/svg/techstack/ios/alamofile.svg';

const IOS: Curriculum = {
  track: 'ios',
  displayName: 'iOS',
  weeks: [
    {
      week: 1,
      items: [
        {
          index: 1,
          title: 'iOS 개발의 기본 이해 및 개발\n환경 준비',
          detail: ['iOS 플랫폼 개요', '앱 생태계'],
        },
        {
          index: 2,
          title: 'Swift 언어의 특징',
          detail: ['Objective-C', 'Swift의 장점'],
        },
        {
          index: 3,
          title: 'Swift 기초 문법',
          detail: ['변수와 상수, 데이터 타입', '배열과 딕셔너리, 집합'],
        },
      ],
    },
    {
      week: 2,
      items: [
        {
          index: 1,
          title: 'Swift 심화 문법',
          detail: [
            '옵셔널과 옵셔널 바인딩',
            '접근 제어와 초기화 메서드',
            '익스텐션',
            '열거형(Enum), 구조체(Struct), 클래스(Class)',
            '프로퍼티와 메서드',
          ],
        },
        {
          index: 2,
          title: '메모리 구조',
          detail: ['iOS의 메모리 구조', 'ARC', '인스턴스 생성 및 소멸'],
        },
      ],
    },
    {
      week: 3,
      items: [
        {
          index: 1,
          title: '클로저',
          detail: ['Named Closure, Unnamed Closure', '캡처 리스트', 'Trailing Closure'],
        },
        { index: 2, title: '프로토콜' },
        {
          index: 3,
          title: '기본 UI 컴포넌트',
          detail: ['UILabel', 'UIButton', 'UITextField', 'UIImageView', 'UIView'],
        },
      ],
    },
    {
      week: 4,
      items: [
        {
          index: 1,
          title: 'iOS 앱의 생명 주기',
          detail: ['Inactive, Active, Background, Suspended', 'AppDelegate, SceneDelegate'],
        },
        {
          index: 2,
          title: 'iOS 앱의 구조',
          detail: ['스토리보드를 통한 UI 구성', 'Scene과 Segue'],
        },
        { index: 3, title: 'UIStackView' },
        { index: 4, title: 'Human Interface\nGuidelines' },
      ],
    },
    {
      week: 5,
      items: [
        {
          index: 1,
          title: 'Auto Layout과 제약 조건',
          detail: ['제약 조건(Constraints) 이해 및 활용', 'CodeBase, Storyboard 방식의 차이'],
        },
        { index: 2, title: 'UIKit vs SwiftUI' },
        { index: 3, title: 'Animation', detail: ['UIView.animate', 'Core Animation'] },
      ],
    },
    {
      week: 6,
      items: [
        { index: 1, title: 'NavigationController', detail: ['Navigation Stack'] },
        {
          index: 2,
          title: 'ViewController\nLifecycle',
          detail: ['viewDidLoad, viewWillAppear, viewDidAppear'],
        },
        {
          index: 3,
          title: '객체지향 프로그래밍',
          detail: ['상속, 캡슐화, 다형성, 추상화', 'SOLID 원칙'],
        },
      ],
    },
    {
      week: 7,
      items: [
        {
          index: 1,
          title: '디자인 패턴, 아키텍처',
          detail: ['MVC Pattern', 'MVVM Pattern', 'Apple의 MVC는 무엇이 다른가'],
        },
        { index: 2, title: '프로토콜 지향 프로그래밍', detail: ['프로토콜을 통한 다형성 구현'] },
        { index: 3, title: 'Initializer Delegation' },
      ],
    },
    {
      week: 8,
      items: [
        {
          index: 1,
          title: '많은 양의 데이터를 표시하는 방법',
          detail: ['UICollectionView', 'UITableView'],
        },
        { index: 2, title: '함수형 프로그래밍', detail: ['고차함수', '순수 함수, 불변성'] },
      ],
    },
    {
      week: 9,
      items: [
        {
          index: 1,
          title: 'Swift에서 데이터를 \n저장하는 방법',
          detail: ['SQLite', 'Core Data', 'Realm', 'User Defaults', 'Keychain'],
        },
        {
          index: 2,
          title: '다양한 UI 컴포넌트',
          detail: ['UISlider', 'UISwitch', 'UIProgressView', 'UIScrollView'],
        },
      ],
    },
    {
      week: 10,
      items: [
        {
          index: 1,
          title: '데이터 전달 방법',
          detail: ['Delegate Pattern', 'Closure', 'Combine', 'NotificationCenter'],
        },
        { index: 2, title: '데이터 전달 시 메모리 관리', detail: ['weak self, unowned'] },
        { index: 3, title: 'API Design Guideline' },
      ],
    },
    {
      week: 11,
      items: [
        { index: 1, title: 'Combine 심화', detail: ['Publisher, Subscriber', 'RxSwift'] },
        { index: 2, title: '서드파티 라이브러리 설치 방법', detail: ['CocoaPods', 'SPM', 'Carthage'] },
        { index: 3, title: '서드파티 라이브러리', detail: ['Kingfisher', 'SnapKit', 'Alamofire'] },
      ],
    },
    {
      week: 12,
      items: [
        { index: 1, title: '네트워크 요청', detail: ['Alamofire', 'URLSession', 'Codable'] },
        { index: 2, title: '에러 처리 기법', detail: ['Result 타입'] },
        { index: 3, title: '제네릭' },
      ],
    },
    {
      week: 13,
      items: [
        { index: 1, title: '비동기 프로그래밍', detail: ['GCD', 'OperationQueue'] },
        { index: 2, title: 'Async/Await &\n Concurrency' },
      ],
    },
    {
      week: 14,
      items: [
        {
          index: 1,
          title: 'Test Code 작성',
          detail: ['UnitTest', 'UITest', '의존성 주입과 Mocking', 'Testable한 코드란?'],
        },
        { index: 2, title: 'Sandbox의 개념' },
      ],
    },
    { week: { from: 15, to: 18 }, items: [{ index: 1, title: '프로젝트 개발' }] },
    { week: 19, items: [{ index: 1, title: '회고' }] },
  ],
  techStack: [Swift, Uikit, Alamofile, Xcode],
};

export default IOS;
