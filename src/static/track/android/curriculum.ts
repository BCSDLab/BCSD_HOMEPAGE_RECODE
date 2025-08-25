import { Curriculum } from '@/types/curriculum';
import Java from '@/assets/svg/techstack/back/java.svg';
import Kotlin from '@/assets/svg/techstack/android/kotlin.svg';
import Android from '@/assets/svg/techstack/android/android.svg';
import Retrofit from '@/assets/svg/techstack/android/retrofit.svg';
import Glide from '@/assets/svg/techstack/android/glide.svg';
import Hilt from '@/assets/svg/techstack/android/hilt.svg';
import Coroutine from '@/assets/svg/techstack/android/coroutine.svg';

const ANDROID: Curriculum = {
  track: 'android',
  displayName: 'Android',
  weeks: [
    {
      week: 1,
      items: [
        { index: 1, title: 'Kotlin 이해하기' },
        {
          index: 2,
          title: 'Android에 대한 이해',
          detail: ['Android란 무엇인가', 'Android 버전 및 특징 (Android 1.0 ~ Android 16)'],
        },
        { index: 3, title: '안드로이드 스튜디오 설치' },
        {
          index: 4,
          title: 'Git flow 학습',
          detail: ['Git flow cheatsheet'],
        },
      ],
    },
    {
      week: 2,
      items: [
        {
          index: 1,
          title: 'Naming Convention',
          detail: ['XML Naming Convention', 'Kotlin Naming Convention', 'Const Naming Convention'],
        },
        {
          index: 2,
          title: 'Widget',
          detail: ['View란', 'Widget 종류', 'Widget 사용 방법', 'Widget 속성'],
        },
        {
          index: 3,
          title: 'Layout',
          detail: ['LinearLayout이란', 'RelativeLayout이란', 'FrameLayout이란', 'ConstraintLayout이란'],
        },
      ],
    },
    {
      week: 3,
      items: [
        {
          index: 1,
          title: 'Resource',
          detail: ['Drawable', 'Layout', 'Mipmap', 'Color', 'Strings'],
        },
        {
          index: 2,
          title: 'Styling and Theming',
          detail: ['themes.xml과 styles.xml', 'Style 및 Custom Style'],
        },
        { index: 3, title: '다양한 화면, 버전 및\n다크 모드 대응하기' },
      ],
    },
    {
      week: 4,
      items: [
        { index: 1, title: 'Intent', detail: ['Intent extras와 bundle'] },
        {
          index: 2,
          title: 'View와 상호작용',
          detail: ['onClick, onLongClick', 'text와 drawable을 동적으로 변경하기', 'textWatcher'],
        },
        {
          index: 3,
          title: 'Activity',
          detail: ['Activity 생명주기', 'Activity 전환', 'Activity Result API'],
        },
      ],
    },
    {
      week: 5,
      items: [
        {
          index: 1,
          title: 'Fragment',
          detail: [
            'Fragment 특징',
            'Fragment 생명주기',
            'FragmentManager와 FragmentTransaction',
            'Fragment 생성자 이슈',
          ],
        },
        {
          index: 2,
          title: 'Dialog 이해하기',
          detail: ['Dialog 특징', 'Dialog 종류', '커스텀 Dialog'],
        },
      ],
    },
    {
      week: 6,
      items: [
        { index: 1, title: 'EventListener' },
        { index: 2, title: 'ListView' },
        {
          index: 3,
          title: 'RecyclerView',
          detail: [
            'RecyclerView vs ListView',
            'LayoutManager',
            'Adapter Pattern, ViewHolder Pattern',
            'RecyclerView의 동작 원리',
          ],
        },
      ],
    },
    {
      week: 7,
      items: [
        {
          index: 1,
          title: '권한',
          detail: ['Marshmallow 이전과 이후', 'shouldShowRequestPermissionRationale'],
        },
        {
          index: 2,
          title: 'Notification',
          detail: ['Notification 종류', 'Oreo 이전과 이후 버전의 Notification'],
        },
        { index: 3, title: 'Broadcast Receiver' },
      ],
    },
    {
      week: 8,
      items: [
        {
          index: 1,
          title: '안드로이드의 파일 관리 방식',
          detail: ['Scoped Storage', 'Pie 이전의 파일 관리 방식'],
        },
        {
          index: 2,
          title: 'Content Provider',
          detail: ['Content Provider에 대해 이해하기', 'MediaStore로 미디어 파일에 접근하는 방식 이해하기'],
        },
        {
          index: 3,
          title: '안드로이드 버전 별\n 세분화된 파일 권한 이해하기',
          detail: ['~ Android 9.0', 'Android 10 ~ Android 12', 'Android 13 ~'],
        },
      ],
    },
    {
      week: 9,
      items: [
        { index: 1, title: 'Service', detail: ['Service 생명주기'] },
        {
          index: 2,
          title: 'Foreground, Background',
          detail: ['Foreground와 Background란', 'Oreo 이후의 Background 제한'],
        },
      ],
    },
    {
      week: 10,
      items: [
        { index: 1, title: 'Thread', detail: ['Thread란', '안드로이드 UI Thread와 Thread'] },
        {
          index: 2,
          title: 'Coroutine',
          detail: ['Coroutine이란', 'Coroutine vs Thread', 'CoroutineScope, Dispatcher', 'Suspend function'],
        },
      ],
    },
    {
      week: 11,
      items: [
        {
          index: 1,
          title: '디자인 패턴',
          detail: ['디자인 패턴이란', 'MVC, MVP, MVVM, MVI'],
        },
        {
          index: 2,
          title: 'View Binding과 Data Binding',
          detail: ['View Binding', 'Data Binding'],
        },
        {
          index: 3,
          title: 'Jetpack',
          detail: ['ViewModel', 'Room', 'LiveData'],
        },
      ],
    },
    {
      week: 12,
      items: [
        { index: 1, title: 'Clean architecture' },
        { index: 2, title: '의존성 주입', detail: ['Hilt'] },
        { index: 3, title: '이미지 처리 Opensource', detail: ['Glide', 'Coil'] },
        { index: 4, title: 'Firebase' },
      ],
    },
    {
      week: 13,
      items: [
        { index: 1, title: 'Okhttp' },
        { index: 2, title: 'Retrofit' },
        { index: 3, title: '난독화', detail: ['난독화란 무엇인가', 'Proguard R8'] },
      ],
    },
    { week: { from: 14, to: 16 }, items: [{ index: 1, title: '자율 상용화 프로젝트 개발' }] },
    { week: 17, items: [{ index: 1, title: '회고' }] },
  ],
  techStack: [Kotlin, Android, Retrofit, Glide, Java, Hilt, Coroutine],
};

export default ANDROID;
