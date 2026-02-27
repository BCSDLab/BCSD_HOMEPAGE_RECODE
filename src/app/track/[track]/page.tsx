import Image from 'next/image';
import type { Metadata } from 'next';
import type { TrackName } from '@/types/curriculum';
import TrackTabs from '@/app/track/components/TrackTabs';
import StudyCards from '@/app/track/components/StudyCard';
import Curriculum from '@/app/track/components/Curriculum';
import TrackMember from '@/app/track/components/TrackMember';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';
import ScrollUpButton from '@/components/ScrollUpButton';
import { tracks } from '@/app/track/components/TrackTabs';

const trackDescriptions: Record<TrackName, string> = {
  frontend: '사용자 인터페이스를 구축하고 웹 애플리케이션을 개발합니다.',
  backend: '서버 로직과 데이터베이스를 설계하고 API를 개발합니다.',
  android: 'Android 플랫폼에서 모바일 애플리케이션을 개발합니다.',
  ios: 'iOS 플랫폼에서 모바일 애플리케이션을 개발합니다.',
  design: '사용자 경험과 인터페이스를 디자인하고 프로토타입을 제작합니다.',
  game: '게임 엔진을 활용하여 게임을 기획하고 개발합니다.',
  'data-analyst': '데이터를 분석하고 인사이트를 도출하여 의사결정을 지원합니다.',
  'product-manager': '제품의 기획부터 출시까지 전체 프로세스를 관리합니다.',
  security: '시스템과 네트워크의 보안을 강화하고 취약점을 분석합니다.',
};

export const dynamicParams = false;

export function generateStaticParams() {
  return tracks.map(({ slug }) => ({ track: slug }));
}

export async function generateMetadata({ params }: { params: TrackPageParams }): Promise<Metadata> {
  const { track } = await params;
  const trackInfo = tracks.find(({ slug }) => slug === track);
  const trackName = trackInfo?.label || track;
  const description = trackDescriptions[track];

  return {
    title: `${trackName} 트랙`,
    description: `BCSD ${trackName} 트랙 - ${description}`,
    openGraph: {
      title: `${trackName} 트랙 | BCSD`,
      description: `BCSD ${trackName} 트랙에서 함께 성장하세요. ${description}`,
      images: [
        {
          url: 'https://image.bcsdlab.com/bcsd_track_page.png',
          width: 1440,
          height: 587,
          alt: `${trackName} 트랙`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${trackName} 트랙 | BCSD`,
      description: `BCSD ${trackName} 트랙에서 함께 성장하세요. ${description}`,
      images: ['https://image.bcsdlab.com/bcsd_track_page.png'],
    },
  };
}

type TrackPageParams = Promise<{ track: TrackName }>;

export default async function TrackPage({ params }: { params: TrackPageParams }) {
  const { track } = await params;

  return (
    <div className="hide-scrollbar w-full overflow-x-auto">
      <div className="min-w-360">
        <div className="relative aspect-1440/587 w-full">
          <Image
            src="https://image.bcsdlab.com/bcsd_track_page.png"
            alt="Track hero"
            fill
            sizes="100vw"
            priority
            fetchPriority="high"
          />

          <GlobalNavigationBar location="Track" />
        </div>

        <div className="flex flex-col items-center">
          <TrackTabs track={track} />
          <StudyCards track={track} />
          <Curriculum track={track} />
          <TrackMember track={track} />
        </div>
        <ScrollUpButton />
      </div>
    </div>
  );
}
