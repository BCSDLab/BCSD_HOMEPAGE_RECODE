import Image from 'next/image';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTrack, listTracks } from '@/api/tracks';
import TrackTabs from '@/app/track/components/TrackTabs';
import StudyCards from '@/app/track/components/StudyCard';
import Curriculum from '@/app/track/components/Curriculum';
import TrackMember from '@/app/track/components/TrackMember';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';

const ScrollUpButton = dynamic(() => import('@/components/ScrollUpButton'));

export async function generateStaticParams() {
  const tracks = await listTracks();
  return tracks.map(({ slug }) => ({ track: slug }));
}

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
    <main className="hide-scrollbar w-full overflow-x-auto">
      <div className="min-w-360">
        <header className="relative aspect-1440/587 w-full">
          <Image
            src="https://image.bcsdlab.com/bcsd_track_page.png"
            alt="Track hero"
            fill
            sizes="100vw"
            priority
            fetchPriority="high"
          />

          <GlobalNavigationBar location="Track" />
        </header>

        <div className="flex flex-col items-center">
          <header className="mt-17 text-center">
            <h1 className="text-[34px] leading-[120%] font-medium text-neutral-100">{trackDetail.name} 트랙</h1>
            <p className="mt-3 text-[17px] text-neutral-200">{trackDetail.tagline}</p>
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
