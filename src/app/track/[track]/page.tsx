import Image from 'next/image';
import type { TrackName } from '@/types/curriculum';
import TrackTabs from '@/app/track/components/TrackTabs';
import StudyCards from '@/app/track/components/StudyCard';
import Curriculum from '@/app/track/components/Curriculum';
import TrackMember from '@/app/track/components/TrackMember';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';

interface TrackPage {
  track: TrackName;
}
type TrackPageParams = Promise<TrackPage>;

export default async function TrackPage({ params }: { params: TrackPageParams }) {
  const { track } = await params;

  return (
    <div>
      <div className="w-100vw relative h-[587px]">
        <Image src="https://image.bcsdlab.com/bcsd_track_page.png" alt="track Image" fill sizes="100vw" />
        <GlobalNavigationBar location="Track" />
      </div>

      <div className="place-items-center">
        <TrackTabs track={track} />
        <StudyCards track={track} />
        <Curriculum track={track} />
        <TrackMember track={track} />
      </div>
    </div>
  );
}
