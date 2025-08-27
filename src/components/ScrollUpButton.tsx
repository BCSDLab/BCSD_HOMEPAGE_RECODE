'use client';

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
    <button onClick={scrollToTop} className="fixed right-30 bottom-20 z-10">
      <UpButton />
    </button>
  );
}
