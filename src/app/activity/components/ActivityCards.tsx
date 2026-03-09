'use client';

import dynamic from 'next/dynamic';
import type { ActivityList } from '@/types/activity';

interface ActivityCardProps {
  year: string;
  month: string;
  title: string;
  description: string;
  images: string[];
}

function ActivityMediaSkeleton() {
  return <div aria-hidden="true" className="h-96.5 w-171.5 rounded-xl bg-[#f4f4f4]" />;
}

const ActivityMediaCarousel = dynamic(() => import('./ActivityMediaCarousel'), {
  loading: ActivityMediaSkeleton,
  ssr: false,
});

function ActivityCard({ year, month, title, description, images }: ActivityCardProps) {
  return (
    <div className="flex justify-between gap-5">
      <div className="w-80 leading-[150%] whitespace-pre-line">
        <div className="text-[17px] text-[#9d9d9d]">
          {year}.{month}
        </div>
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-[15px]">{description}</div>
      </div>

      <ActivityMediaCarousel images={images} title={title} />
    </div>
  );
}

interface ActivityCardListProps {
  year: string;
  activityList: ActivityList[];
}

export default function ActivityCardList({ year, activityList }: ActivityCardListProps) {
  const group = activityList.find((g) => g.year === year);
  const filtered = group
    ? group.activities.map((activity) => ({
        id: activity.id,
        year: group.year,
        month: activity.month,
        title: activity.title,
        description: activity.description,
        images: activity.images,
      }))
    : [];

  return (
    <div className="flex flex-col gap-13">
      {filtered.length === 0 ? (
        <div className="py-10 text-center text-[#9d9d9d]">선택한 연도의 활동이 없습니다.</div>
      ) : (
        filtered.map((activity) => (
          <ActivityCard
            key={`${activity.title}-${activity.id}`}
            year={activity.year}
            month={activity.month}
            title={activity.title}
            description={activity.description}
            images={activity.images}
          />
        ))
      )}
    </div>
  );
}
