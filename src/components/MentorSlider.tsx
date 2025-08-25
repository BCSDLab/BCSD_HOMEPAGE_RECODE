'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import { mentorData } from '@/static/main/mentor';

export default function MentorSlider() {
  return (
    <div className="px-[120px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {mentorData.mentors.map((mentor) => (
          <SwiperSlide key={mentor.id}>
            <div className="flex h-full w-[220px] flex-col items-center rounded-[19px] bg-gradient-to-b from-[#F5DBFF] to-[#F9E8FF] p-4 text-center">
              <Image
                src={mentor.image}
                alt={mentor.name}
                width={128}
                height={128}
                className="mb-4 h-32 w-32 rounded-full object-cover"
              />
              <p className="">{mentor.name}</p>
              <p className="text-sm text-gray-600">{mentor.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
