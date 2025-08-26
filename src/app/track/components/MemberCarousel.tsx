'use client';

import Image from 'next/image';
import type { Member } from '@/types/trackMember';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

function MemberCard(memberInfo: Member) {
  return (
    <div className="w-[298px]">
      <div className="relative aspect-square overflow-hidden rounded-t-2xl">
        <Image src={memberInfo.image} alt={memberInfo.name} fill sizes="298px" className="object-cover" />
      </div>

      <div className="rounded-b-2xl bg-white px-5 pt-4 pb-5">
        <div className="mb-2 inline-block rounded-sm bg-[#D365FD4D] px-2 pt-1.5 pb-1 align-middle">
          <div className="text-[10px] leading-none font-semibold text-[#8911B6]">{memberInfo.role}</div>
        </div>

        <div className="text-3xl font-semibold">{memberInfo.name}</div>
      </div>
    </div>
  );
}

export default function MemberCarousel({ members }: { members: Member[] }) {
  const canLoop = members.length > 4;

  return (
    <Swiper modules={[Navigation, A11y]} navigation slidesPerView="auto" loop={canLoop} className="member-swiper">
      {members.map((member, index) => (
        <SwiperSlide key={index} className="!w-[298px]">
          <MemberCard {...member} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
