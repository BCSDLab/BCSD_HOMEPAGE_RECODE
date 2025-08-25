'use client';

import Image from 'next/image';
import { useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, A11y } from 'swiper/modules';
import Portal from '@/components/Portal';
import CloseIcon from '@/assets/svg/x-icon.svg';
import useScrollLock from '@/hooks/useScrollLock';
import useOverlayPosition from '@/hooks/usePosition';
import useHandleOutside from '@/hooks/useOutsideClick';
import useEscapeKeyDown from '@/hooks/useEscapeKeyDown';
import 'swiper/css';
import 'swiper/css/navigation';

interface ImageModalProps {
  images: string[];
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ images, alt, onClose }: ImageModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [naturalSizeMap, setNaturalSizeMap] = useState<Record<string, { width: number; height: number }>>({});

  const naturalSize = useMemo(() => {
    const src = images[activeIndex];
    return naturalSizeMap[src] ?? null;
  }, [images, activeIndex, naturalSizeMap]);

  const ButtonPosition = useOverlayPosition({ containerRef, naturalSize });

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

  const handleImageLoad = (src: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setNaturalSizeMap((prev) =>
      prev[src] ? prev : { ...prev, [src]: { width: img.naturalWidth, height: img.naturalHeight } },
    );
  };

  return (
    <Portal>
      <div
        ref={backdropRef}
        className="image-modal fixed inset-0 z-[1000] flex items-center justify-center bg-black/70"
        role="dialog"
      >
        <div ref={containerRef} className="relative h-[80vh] w-[80vw]">
          <Swiper
            modules={[Navigation, Keyboard, A11y]}
            onSlideChange={(s) => setActiveIndex(s.realIndex ?? s.activeIndex)}
            navigation
            keyboard={{ enabled: true }}
            loop={images.length > 1}
            className="h-full w-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[80vh] w-[80vw]">
                  <Image
                    src={src}
                    alt={`${alt} ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain select-none"
                    onLoad={handleImageLoad(src)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={onClose}
            className="absolute z-100 cursor-pointer"
            style={ButtonPosition ?? undefined}
            aria-label="닫기"
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    </Portal>
  );
}
