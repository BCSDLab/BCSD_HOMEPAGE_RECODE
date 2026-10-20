import Image from 'next/image';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTrack } from '@/api/tracks';
import TrackTabs from '@/app/track/components/TrackTabs';
import StudyCards from '@/app/track/components/StudyCard';
import Curriculum from '@/app/track/components/Curriculum';
import TrackMember from '@/app/track/components/TrackMember';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';

const ScrollUpButton = dynamic(() => import('@/components/ScrollUpButton'));

export async function generateMetadata({ params }: { params: TrackPageParams }): Promise<Metadata> {
  const { track } = await params;
  const trackDetail = await getTrack(track);
  if (!trackDetail) {
    return { title: '트랙' };
  }

  return {
    title: `${trackDetail.name} 트랙`,
    alternates: {
      canonical: `/track/${track}`,
    },
    description: `BCSD ${trackDetail.name} 트랙 - ${trackDetail.tagline}`,
    openGraph: {
      url: `https://bcsdlab.com/track/${track}`,
      title: `${trackDetail.name} 트랙 | BCSD`,
      description: `BCSD ${trackDetail.name} 트랙에서 함께 성장하세요. ${trackDetail.tagline}`,
      images: [
        {
          url: 'https://image.bcsdlab.com/bcsd_track_page.png',
          width: 1440,
          height: 587,
          alt: `${trackDetail.name} 트랙`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${trackDetail.name} 트랙 | BCSD`,
      description: `BCSD ${trackDetail.name} 트랙에서 함께 성장하세요. ${trackDetail.tagline}`,
      images: ['https://image.bcsdlab.com/bcsd_track_page.png'],
    },
  };
}

type TrackPageParams = Promise<{ track: string }>;

export default async function TrackPage({ params }: { params: TrackPageParams }) {
  const { track } = await params;
  const trackDetail = await getTrack(track);
  if (!trackDetail) {
    notFound();
  }

  return (
    <main className="lg:hide-scrollbar w-full lg:overflow-x-auto">
      <div className="lg:min-w-360">
        <header className="relative h-60 w-full md:h-80 lg:aspect-1440/587 lg:h-auto">
          <Image
            src="https://image.bcsdlab.com/bcsd_track_page.png"
            alt="Track hero"
            fill
            sizes="100vw"
            className="object-cover lg:object-fill"
            priority
            fetchPriority="high"
          />

          <GlobalNavigationBar location="Track" />
        </header>

        <div className="flex flex-col items-center">
          <header className="mt-12 px-6 text-center lg:mt-17 lg:px-0">
            <h1 className="text-[26px] leading-[120%] font-medium text-neutral-100 lg:text-[34px]">
              {trackDetail.name} 트랙
            </h1>
            <p className="mt-3 text-[15px] text-neutral-200 lg:text-[17px]">{trackDetail.tagline}</p>
          </header>
          <TrackTabs track={track} />
          <StudyCards studyPoints={trackDetail.studyPoints} />
          <Curriculum curriculum={trackDetail.curriculum} techStacks={trackDetail.techStacks} />
          <TrackMember members={trackDetail.members} />
        </div>
        <ScrollUpButton />
      </div>
    </main>
  );
}
