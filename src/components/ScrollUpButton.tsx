'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import UpButton from '@/assets/svg/track/up-icon.svg';

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button type="button" aria-label="맨 위로 이동" onClick={scrollToTop} className="fixed right-5 bottom-5 z-10 lg:right-30 lg:bottom-20">
      <Image src={UpButton} alt="" aria-hidden />
    </button>
  );
}
