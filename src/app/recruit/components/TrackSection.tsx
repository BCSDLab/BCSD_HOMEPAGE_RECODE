import Image from 'next/image';
import { type TrackItem, TRACKS } from '@/static/recruit/trackDescription';
import type { HomeRecruitLink } from '@/api/home';
import ApplyButton from '@/components/ApplyButton';
import { RECRUIT_TERM } from '@/constants/recruit';

function TrackCard({ title, description, iconSrc }: TrackItem) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#f9f9f9] p-4 lg:flex-col lg:items-stretch lg:gap-0 lg:pr-21 lg:pb-6">
      <div className="min-w-0 flex-1 lg:flex-none">
        <div className="text-lg font-medium lg:text-xl">{title}</div>
        <div className="mt-1 text-[15px] text-neutral-300">{description}</div>
      </div>
      <Image
        src={iconSrc}
        alt=""
        aria-hidden="true"
        width="281"
        height="186"
        loading="lazy"
        unoptimized
        className="h-auto w-24 shrink-0 self-end lg:mt-6 lg:w-[281px]"
      />
    </div>
  );
}

export default function TrackSection({ recruit }: { recruit: HomeRecruitLink | null }) {
  return (
    <section className="mt-6 w-full px-6 lg:w-auto lg:px-0">
      <div className="text-center">
        <div className="inline-block rounded-lg bg-[#f5dbff] px-3 py-1.5 text-center text-[15px] font-medium text-[#b611f5]">
          {RECRUIT_TERM}
        </div>
        <h2 className="title mt-3 max-lg:text-[26px]">
          <span className="font-bold">BCSD와 함께 할 준비</span>가 되었나요?
        </h2>
        <div className="mt-6 mb-10 text-[15px] leading-[150%] text-neutral-200 lg:mb-19 lg:text-[17px]">
          <span className="lg:block">함께 프로젝트를 진행하며 자신의 능력을 향상시키고</span>{' '}
          <span className="lg:block">싶은 분들의 많은 지원바랍니다.</span>
        </div>
        <ApplyButton
          className="rounded-[10px] bg-[#D365FD] p-2.5 text-[17px] font-medium text-white"
          recruit={recruit}
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 lg:gap-6">
        {TRACKS.map((track) => (
          <TrackCard key={track.title} {...track} />
        ))}
      </div>
    </section>
  );
}
