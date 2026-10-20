'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Portal from '@/components/Portal';
import CloseIcon from '@/assets/svg/x-icon.svg';
import useBooleanState from '@/hooks/useBooleanState';
import useScrollLock from '@/hooks/useScrollLock';
import useEscapeKeyDown from '@/hooks/useEscapeKeyDown';
import useHandleOutside from '@/hooks/useOutsideClick';
import type { NavigationLink } from '@/components/GlobalNavigationBar';
import { locationType } from '@/types/location';

interface MobileNavigationProps {
  links: NavigationLink[];
  location?: locationType;
}

export default function MobileNavigation({ links, location }: MobileNavigationProps) {
  const [isOpen, open, close] = useBooleanState(false);

  return (
    <>
      {/* 페이지마다 GNB 위치 기준이 달라 버튼은 뷰포트에 고정하고, 흰 배경 위에서도 보이도록 어두운 배경을 깐다 */}
      <button
        type="button"
        aria-label="메뉴 열기"
        aria-expanded={isOpen}
        onClick={open}
        className="fixed top-4 right-4 z-50 flex size-11 flex-col items-center justify-center gap-1.25 rounded-full bg-black/50 backdrop-blur-sm lg:hidden"
      >
        <span className="h-0.5 w-5 rounded-full bg-white" />
        <span className="h-0.5 w-5 rounded-full bg-white" />
        <span className="h-0.5 w-5 rounded-full bg-white" />
      </button>
      {isOpen && <MobileNavigationDrawer links={links} location={location} onClose={close} />}
    </>
  );
}

interface MobileNavigationDrawerProps extends MobileNavigationProps {
  onClose: () => void;
}

function MobileNavigationDrawer({ links, location, onClose }: MobileNavigationDrawerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useScrollLock(true);
  useEscapeKeyDown(onClose);
  useHandleOutside({
    containerRef,
    backgroundRef: backdropRef,
    onOutsideClick: onClose,
  });

  return (
    <Portal>
      <div ref={backdropRef} className="fixed inset-0 z-1000 bg-black/60 lg:hidden">
        <div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label="전체 메뉴"
          className="ml-auto flex h-full w-72 max-w-[80vw] flex-col bg-[#111] px-8 pt-5 text-white"
        >
          <button type="button" aria-label="메뉴 닫기" onClick={onClose} className="self-end p-2.5">
            <Image src={CloseIcon} alt="" aria-hidden width={20} height={20} />
          </button>
          <nav className="mt-6 flex flex-col">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onClose}
                className={`py-3.5 text-xl ${link.location && location === link.location ? 'text-[#C360F3]' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </Portal>
  );
}
