import Image from 'next/image';
import type { TrackName } from '@/types/curriculum';
import TrackTabs from '@/app/track/components/TrackTabs';
import StudyCards from '@/app/track/components/StudyCard';
import Curriculum from '@/app/track/components/Curriculum';
import TrackMember from '@/app/track/components/TrackMember';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';
import ScrollUpButton from '@/components/ScrollUpButton';

interface TrackPage {
  track: TrackName;
}
type TrackPageParams = Promise<TrackPage>;

export default async function TrackPage({ params }: { params: TrackPageParams }) {
  const { track } = await params;

  return (
    <div className="hide-scrollbar w-full overflow-x-auto">
      <div className="min-w-[1440px]">
        <div className="relative aspect-[1440/587] w-full">
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
