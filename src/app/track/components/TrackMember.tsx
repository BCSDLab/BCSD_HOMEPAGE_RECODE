import type { TrackMemberItem } from '@/api/tracks';
import MemberCarousel from './MemberCarousel';

interface TrackMemberProps {
  members: TrackMemberItem[];
}

export default function TrackMember({ members }: TrackMemberProps) {
  if (members.length === 0) {
    return null;
  }

  return (
    <section className="mt-60 w-full bg-[#f4f4f4] pt-25 pb-60">
      <h2 className="title">함께 할 멤버들</h2>
      <div className="mt-17.5 flex items-center justify-center">
        <MemberCarousel members={members} />
      </div>
    </section>
  );
}
