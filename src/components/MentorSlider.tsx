'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import StopButtonIcon from '@/assets/svg/main/stop-button-icon.svg';
import PlayButtonIcon from '@/assets/svg/main/play-button-icon.svg';
import { mentorData } from '@/static/main/mentor';
import { useState, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

export default function MentorSlider() {
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSwiperMount = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  const handleTogglePlay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="px-30">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={handleSwiperMount}
        className="w-full"
      >
        {mentorData.mentors.map((mentor) => (
          <SwiperSlide key={mentor.id}>
            <div className="flex min-h-71 w-55 flex-col items-center rounded-[19px] bg-linear-to-b from-[#F5DBFF] to-[#F9E8FF] px-4 pt-9 pb-7 text-center">
              <Image
                src={mentor.image}
                alt={mentor.name}
                width={128}
                height={128}
                className="mb-5 h-32 w-32 rounded-full object-cover"
              />
              <p className="mb-2 text-[20px] font-medium text-[#75109C]">{mentor.name}</p>
              <p className="text-[16px] text-neutral-100">{mentor.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-4 flex w-full justify-end px-16">
        <button
          type="button"
          aria-label={isPlaying ? '멘토 슬라이더 자동재생 일시정지' : '멘토 슬라이더 자동재생 시작'}
          className="cursor-pointer"
          onClick={handleTogglePlay}
        >
          <Image src={isPlaying ? StopButtonIcon : PlayButtonIcon} alt="" aria-hidden />
        </button>
      </div>
    </div>
  );
}
