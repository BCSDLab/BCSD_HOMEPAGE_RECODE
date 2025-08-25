'use client';

import Image from 'next/image';
import type { ActivityList } from '@/types/activity';
import ImageModal from './ImageModal';
import LeftArrow from '@/assets/svg/left-arrow.svg';
import RightArrow from '@/assets/svg/right-arrow.svg';
import useBooleanState from '@/hooks/useBooleanState';

interface ActivityCardProps {
  year: string;
  month: string;
  title: string;
  description: string;
  images: string[];
  priority?: boolean;
}

function ActivityCard({ year, month, title, description, images, priority }: ActivityCardProps) {
  const [isOpenImageModal, openImageModal, closeImageModal] = useBooleanState(false);
  return (
    <div className="flex justify-between gap-5">
      <div className="w-80 leading-[150%] whitespace-pre-line">
        <div className="text-[17px] text-[#9d9d9d]">
          {year}.{month}
        </div>
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-[15px]">{description}</div>
      </div>

      <div className="relative h-[386px] w-[686px] shrink-0">
        <button type="button" onClick={openImageModal} className="relative block h-full w-full">
          <Image
            src={images[0]}
            alt={`${title} 대표 이미지`}
            fill
            sizes="(max-width: 768px) 100vw, 686px"
            priority={priority}
            fetchPriority={priority ? 'high' : undefined}
          />
        </button>
        {images.length > 1 && (
          <>
            <div className="absolute top-1/2 left-10 -translate-y-1/2">
              <LeftArrow className="drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]" />
            </div>
            <div className="absolute top-1/2 right-10 -translate-y-1/2">
              <RightArrow className="drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]" />
            </div>
          </>
        )}
      </div>
      {isOpenImageModal && <ImageModal images={images} alt={`${title} 이미지`} onClose={closeImageModal} />}
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
        filtered.map((activity, index) => (
          <ActivityCard
            key={activity.id}
            year={activity.year}
            month={activity.month}
            title={activity.title}
            description={activity.description}
            images={activity.images}
            priority={index === 0}
          />
        ))
      )}
    </div>
  );
}
