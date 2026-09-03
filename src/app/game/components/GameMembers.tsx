import Image from 'next/image';
import type { GameMember } from '@/api/games';

export default function GameMembers({ members }: { members: GameMember[] }) {
  if (members.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {members.map((member, index) => (
        <div key={index} className="flex items-center gap-2.5 rounded-full bg-[#f9f9f9] py-1.5 pr-4 pl-1.5">
          <div className="relative h-9 w-9 flex-none overflow-hidden rounded-full bg-[#eee]">
            {member.profileImageUrl && (
              <Image src={member.profileImageUrl} alt={member.name} fill sizes="36px" className="object-cover" />
            )}
          </div>
          <span className="text-sm font-medium">{member.name}</span>
        </div>
      ))}
    </div>
  );
}
