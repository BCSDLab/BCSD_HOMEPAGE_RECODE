import { getTrackMembers } from '@/static/track';
import type { TrackName } from '@/types/curriculum';
import MemberCarousel from './MemberCarousel';

interface TrackMemberProps {
  track: TrackName;
}

export default async function TrackMember({ track }: TrackMemberProps) {
  const member = await getTrackMembers(track);
  return (
    <section className="mt-60 w-full bg-[#f4f4f4] pt-25 pb-60">
      <h2 className="title">함께 할 멤버들</h2>
      <div className="mt-17.5 flex items-center justify-center">
        <MemberCarousel members={member} />
      </div>
    </section>
  );
}
