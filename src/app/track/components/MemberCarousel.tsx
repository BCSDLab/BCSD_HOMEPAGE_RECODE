'use client';

import Image from 'next/image';
import type { TrackMemberItem } from '@/api/tracks';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

function MemberCard(memberInfo: TrackMemberItem) {
  return (
    <div className="w-74.5">
      <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-[#f4f4f4]">
        {memberInfo.profileImageUrl && (
          <Image src={memberInfo.profileImageUrl} alt={memberInfo.name} fill sizes="298px" className="object-cover" />
        )}
      </div>

      <div className="rounded-b-2xl bg-white px-5 pt-4 pb-5">
        <div className="mb-2 inline-block rounded-sm bg-[#D365FD4D] px-2 pt-1.5 pb-1 align-middle">
          <div className="text-[10px] leading-none font-semibold text-[#8911B6]">{memberInfo.memberType}</div>
        </div>

        <div className="text-3xl font-semibold">{memberInfo.name}</div>
      </div>
    </div>
  );
}

export default function MemberCarousel({ members }: { members: TrackMemberItem[] }) {
  const canLoop = members.length > 4;

  return (
    <Swiper modules={[Navigation, A11y]} navigation slidesPerView="auto" loop={canLoop} className="member-swiper">
      {members.map((member) => (
        <SwiperSlide key={`${member.name}-${member.memberType}`} className="w-74.5!">
          <MemberCard {...member} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
