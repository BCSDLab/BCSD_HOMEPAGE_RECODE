'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { ActivityList } from '@/types/activity';
import ImageModal from './ImageModal';
import useBooleanState from '@/hooks/useBooleanState';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface ActivityCardProps {
  year: string;
  month: string;
  title: string;
  description: string;
  images: string[];
}

function ActivityCard({ year, month, title, description, images }: ActivityCardProps) {
  const [isOpenImageModal, openImageModal, closeImageModal] = useBooleanState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const canSwipe = images.length > 1;

  const handleImageClick = (index: number) => {
    setImageIndex(index);
    openImageModal();
  };

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
        <Swiper modules={[Navigation]} navigation={canSwipe} className="h-full w-full">
          {images.map((src, index) => (
            <SwiperSlide key={src} className="relative">
              <button
                type="button"
                onClick={() => handleImageClick(index)}
                className="relative block h-[386px] w-[686px]"
              >
                <Image
                  src={src}
                  alt={`${title} 이미지 ${index + 1}/${images.length}`}
                  fill
                  sizes="686px"
                  className="object-contain"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isOpenImageModal && (
        <ImageModal images={images} alt={`${title} 이미지`} initialIndex={imageIndex} onClose={closeImageModal} />
      )}
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
