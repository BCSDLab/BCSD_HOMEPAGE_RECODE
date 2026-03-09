'use client';

import Image from 'next/image';
import { useState, type MouseEvent } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import useBooleanState from '@/hooks/useBooleanState';
import ImageModal from './ImageModal';
import 'swiper/css';
import 'swiper/css/navigation';

interface ActivityMediaCarouselProps {
  images: string[];
  title: string;
}

const IMAGE_SIZES = '(max-width: 768px) 100vw, 686px';

function getNearbyImageIndices(activeIndex: number, imageCount: number) {
  const indices = new Set([activeIndex]);

  if (imageCount > 1) {
    indices.add((activeIndex + 1) % imageCount);
    indices.add((activeIndex - 1 + imageCount) % imageCount);
  }

  return indices;
}

export default function ActivityMediaCarousel({ images, title }: ActivityMediaCarouselProps) {
  const [isOpenImageModal, openImageModal, closeImageModal] = useBooleanState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedIndices, setLoadedIndices] = useState(() => getNearbyImageIndices(0, images.length));

  const canSwipe = images.length > 1;

  const handleImageClick = (index: number) => {
    setImageIndex(index);
    openImageModal();
  };

  const handleRenderedImageClick = (event: MouseEvent<HTMLButtonElement>) => {
    const index = Number(event.currentTarget.dataset.index);

    if (Number.isNaN(index)) {
      return;
    }

    handleImageClick(index);
  };

  const loadIndicesAround = (nextIndex: number) => {
    setActiveIndex(nextIndex);
    setLoadedIndices((current) => {
      const next = new Set(current);

      for (const index of getNearbyImageIndices(nextIndex, images.length)) {
        next.add(index);
      }

      return next;
    });
  };

  const handleSlideChange = (swiper: SwiperType) => {
    loadIndicesAround(swiper.realIndex);
  };

  const renderImage = (src: string, index: number) => {
    const shouldLoadImage = loadedIndices.has(index);

    return (
      <button
        type="button"
        data-index={index}
        onClick={handleRenderedImageClick}
        className="relative block h-96.5 w-171.5"
      >
        {shouldLoadImage ? (
          <Image
            src={src}
            alt={`${title} 이미지 ${index + 1}/${images.length}`}
            fill
            sizes={IMAGE_SIZES}
            className="object-contain"
          />
        ) : (
          <div aria-hidden="true" className="h-full w-full rounded-xl bg-[#f4f4f4]" />
        )}
      </button>
    );
  };

  return (
    <div className="relative h-96.5 w-171.5 shrink-0">
      {canSwipe ? (
        <Swiper
          modules={[Navigation]}
          navigation
          className="h-full w-full"
          onSlideChange={handleSlideChange}
        >
          {images.map((src, index) => (
            <SwiperSlide key={src} className="relative">
              {renderImage(src, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        renderImage(images[0], activeIndex)
      )}

      {isOpenImageModal && (
        <ImageModal images={images} alt={`${title} 이미지`} initialIndex={imageIndex} onClose={closeImageModal} />
      )}
    </div>
  );
}
