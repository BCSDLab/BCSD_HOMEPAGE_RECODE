'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { ActivityTimelineGroup } from '@/api/activities';

interface ActivityCardProps {
  category: string;
  id: number;
  year: number;
  month: number;
  title: string;
  summary: string;
  images: string[];
  hasDetail: boolean;
}

function ActivityMediaSkeleton() {
  return <div aria-hidden="true" className="h-96.5 w-171.5 rounded-xl bg-[#f4f4f4]" />;
}

const ActivityMediaCarousel = dynamic(() => import('./ActivityMediaCarousel'), {
  loading: ActivityMediaSkeleton,
  ssr: false,
});

function ActivityCard({ category, id, year, month, title, summary, images, hasDetail }: ActivityCardProps) {
  const body = (
    <div className="w-80 leading-[150%] whitespace-pre-line">
      <div className="text-[17px] text-[#9d9d9d]">
        {year}.{String(month).padStart(2, '0')}
      </div>
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-[15px]">{summary}</div>
    </div>
  );

  return (
    <div className="flex justify-between gap-5">
      {hasDetail ? (
        <Link href={`/activity/${category}/${id}`} className="hover:underline">
          {body}
        </Link>
      ) : (
        body
      )}

      <ActivityMediaCarousel images={images} title={title} />
    </div>
  );
}

interface ActivityCardListProps {
  category: string;
  year: string;
  timeline: ActivityTimelineGroup[];
}

export default function ActivityCardList({ category, year, timeline }: ActivityCardListProps) {
  const group = timeline.find((g) => String(g.year) === year);
  const activities = group?.activities ?? [];

  return (
    <div className="flex flex-col gap-13">
      {activities.length === 0 ? (
        <div className="py-10 text-center text-[#9d9d9d]">선택한 연도의 활동이 없습니다.</div>
      ) : (
        activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            category={category}
            id={activity.id}
            year={group!.year}
            month={activity.month}
            title={activity.title}
            summary={activity.summary}
            images={activity.images}
            hasDetail={activity.hasDetail}
          />
        ))
      )}
    </div>
  );
}
