'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, A11y } from 'swiper/modules';
import Portal from '@/components/Portal';
import CloseIcon from '@/assets/svg/x-icon.svg';
import useScrollLock from '@/hooks/useScrollLock';
import useEscapeKeyDown from '@/hooks/useEscapeKeyDown';
import useHandleOutside from '@/hooks/useOutsideClick';
import 'swiper/css';
import 'swiper/css/navigation';

interface ImageModalProps {
  images: string[];
  alt: string;
  initialIndex: number;
  onClose: () => void;
}

export default function ImageModal({ images, alt, initialIndex, onClose }: ImageModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useScrollLock(true);
  useEscapeKeyDown((e) => {
    e.stopPropagation();
    onClose();
  });

  useHandleOutside({
    containerRef,
    backgroundRef: backdropRef,
    onOutsideClick: onClose,
  });

  return (
    <Portal>
      <div
        ref={backdropRef}
        role="dialog"
        className="image-modal fixed inset-0 z-1000 grid place-items-center bg-black/70"
      >
        <div
          ref={containerRef}
          className="relative h-[75vh] w-[75vw] overflow-hidden rounded-xl bg-black/40 p-3 shadow-2xl ring-1 ring-white/20"
        >
          <Swiper
            modules={[Navigation, Keyboard, A11y]}
            navigation
            keyboard={{ enabled: true }}
            loop={images.length > 1}
            initialSlide={initialIndex}
            className="h-full w-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <Image
                    src={src}
                    alt={`${alt} ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain select-none"
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 rounded-full bg-black/55 p-2"
            aria-label="닫기"
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    </Portal>
  );
}
