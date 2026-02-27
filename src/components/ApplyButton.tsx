'use client';

import Link from 'next/link';
import { useEffect, useId, useRef } from 'react';
import useBooleanState from '@/hooks/useBooleanState';
import { URLS } from '@/constants/urls';
import useEscapeKeyDown from '@/hooks/useEscapeKeyDown';

interface ApplyButtonProps {
  className?: string;
  label?: string;
}

export default function ApplyButton({ className, label = '지원하기' }: ApplyButtonProps) {
  const [isOpen, open, close] = useBooleanState(false);
  const menuId = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEscapeKeyDown(() => {
    close();
  });

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [close]);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        aria-haspopup="menu"
        aria-controls={menuId}
        aria-expanded={isOpen}
        onClick={isOpen ? close : open}
        className={className}
      >
        {label}
      </button>
      {isOpen && (
        <div
          id={menuId}
          role="menu"
          className="absolute top-full left-1/2 z-50 mt-2 w-40 -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-lg"
        >
          <Link
            href={URLS.STORE.PLAY_STORE}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-700 hover:bg-gray-50"
            onClick={close}
          >
            Play Store
          </Link>
          <Link
            href={URLS.STORE.APP_STORE}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-700 hover:bg-gray-50"
            onClick={close}
          >
            App Store
          </Link>
        </div>
      )}
    </div>
  );
}
