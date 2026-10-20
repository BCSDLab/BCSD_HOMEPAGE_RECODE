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
    <section className="mt-24 w-full bg-[#f4f4f4] pt-16 pb-24 lg:mt-60 lg:pt-25 lg:pb-60">
      <h2 className="title max-lg:text-[26px]">함께 할 멤버들</h2>
      <div className="mt-10 flex items-center justify-center px-6 lg:mt-17.5 lg:px-0">
        <MemberCarousel members={members} />
      </div>
    </section>
  );
}
