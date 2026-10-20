'use client';

import Link from 'next/link';
import Portal from '@/components/Portal';
import useBooleanState from '@/hooks/useBooleanState';
import useScrollLock from '@/hooks/useScrollLock';
import useEscapeKeyDown from '@/hooks/useEscapeKeyDown';
import type { NavigationLink } from '@/components/GlobalNavigationBar';
import { locationType } from '@/types/location';

interface MobileNavigationProps {
  links: NavigationLink[];
  location?: locationType;
}

const PANEL_ID = 'mobile-navigation-panel';

export default function MobileNavigation({ links, location }: MobileNavigationProps) {
  const [isOpen, , close, toggle] = useBooleanState(false);

  return (
    <>
      {/* 페이지마다 GNB 위치 기준이 달라 버튼은 뷰포트에 고정하고, 흰 배경 위에서도 보이도록 어두운 배경을 깐다.
          열린 동안에는 패널 위에 올라와 닫기 버튼 역할을 한다 */}
      <button
        type="button"
        aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={isOpen}
        aria-controls={PANEL_ID}
        onClick={toggle}
        className={`fixed top-4 right-4 flex size-11 flex-col items-center justify-center gap-1.25 rounded-full bg-black/50 backdrop-blur-sm lg:hidden ${isOpen ? 'z-1001' : 'z-50'}`}
      >
        <span
          className={`h-0.5 w-5 rounded-full bg-white transition-transform duration-300 motion-reduce:transition-none ${isOpen ? 'translate-y-1.75 rotate-45' : ''}`}
        />
        <span
          className={`h-0.5 w-5 rounded-full bg-white transition-opacity duration-300 motion-reduce:transition-none ${isOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`h-0.5 w-5 rounded-full bg-white transition-transform duration-300 motion-reduce:transition-none ${isOpen ? '-translate-y-1.75 -rotate-45' : ''}`}
        />
      </button>
      {isOpen && <MobileNavigationPanel links={links} location={location} onClose={close} />}
    </>
  );
}

interface MobileNavigationPanelProps extends MobileNavigationProps {
  onClose: () => void;
}

function MobileNavigationPanel({ links, location, onClose }: MobileNavigationPanelProps) {
  useScrollLock(true);
  useEscapeKeyDown(onClose);

  return (
    <Portal>
      <div className="fixed inset-0 z-1000 lg:hidden">
        {/* 같은 버튼으로 여닫기 때문에 useOutsideClick(mousedown)을 쓰면 닫힌 직후 click으로 다시 열린다 */}
        <div
          aria-hidden="true"
          onClick={onClose}
          className="absolute inset-0 bg-black/60 transition-opacity duration-300 motion-reduce:transition-none starting:opacity-0"
        />
        <nav
          id={PANEL_ID}
          aria-label="전체 메뉴"
          className="relative flex flex-col bg-[#111] px-6 pt-20 pb-8 text-white transition-transform duration-300 motion-reduce:transition-none starting:-translate-y-full"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className={`py-3 text-xl ${link.location && location === link.location ? 'text-[#C360F3]' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </Portal>
  );
}
