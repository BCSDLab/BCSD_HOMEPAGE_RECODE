import { type TrackItem, TRACKS } from '@/static/recruit/trackDescription';
import Link from 'next/link';

function TrackCard({ title, description, Icon }: TrackItem) {
  return (
    <div className="flex flex-col rounded-2xl bg-[#f9f9f9] p-4 pr-21 pb-6">
      <div className="text-xl font-medium">{title}</div>
      <div className="mt-1 text-[15px] text-neutral-300">{description}</div>
      <Icon />
    </div>
  );
}

export default function TrackSection() {
  return (
    <div className="mt-6">
      <div className="text-center">
        <div className="inline-block rounded-lg bg-[#f5dbff] px-3 py-1.5 text-center text-[15px] font-medium text-[#b611f5]">
          2025년 하반기
        </div>
        <div className="title mt-3">
          <span className="font-bold">BCSD와 함께 할 준비</span>가 되었나요?
        </div>
        <div className="mt-6 mb-19 text-[17px] leading-[150%] text-neutral-200">
          <div>함께 프로젝트를 진행하며 자신의 능력을 향상시키고</div>
          <div>싶은 분들의 많은 지원바랍니다.</div>
        </div>
        <Link
          className="rounded-[10px] bg-[#D365FD] p-2.5 text-[17px] font-medium text-white"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfMP9HZIE4TzVpoWX_o3nnUB_tAthRSIsJTfKw72F4mftA62w/viewform?edit2=2_ABaOnueiLzcPk7-tUYyUJ6fU1Zxy5Kpyr2uACwdIkIHWchOsPBhTOHJlF74Oo37Skw"
        >
          지원하기
        </Link>
      </div>

      <div className="mt-15 grid grid-cols-3 gap-6">
        {TRACKS.map((track) => (
          <TrackCard key={track.title} {...track} />
        ))}
      </div>
    </div>
  );
}
