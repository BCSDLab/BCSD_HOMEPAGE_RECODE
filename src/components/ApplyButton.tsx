import Link from 'next/link';
import type { HomeRecruitLink } from '@/api/home';

interface ApplyButtonProps {
  className?: string;
  label?: string;
  recruit: HomeRecruitLink | null;
}

const DEFAULT_CLOSED_MESSAGE = '모집이 마감되었습니다.';

/** 모집 중이면 구글폼으로, 아니면 마감 메시지를 보여준다(FR-8.3). */
export default function ApplyButton({ className, label = '지원하기', recruit }: ApplyButtonProps) {
  if (!recruit || !recruit.isOpen) {
    return (
      <span className={`${className} pointer-events-none inline-block opacity-60`} aria-disabled="true">
        {recruit?.closedMessage || DEFAULT_CLOSED_MESSAGE}
      </span>
    );
  }

  return (
    <Link
      href={recruit.googleFormUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} inline-block`}
    >
      {label}
    </Link>
  );
}

/*
 * 코넥트 앱 다운로드 드롭다운(Play/App Store)은 모집 링크 CTA로 대체되어 비활성화했다.
 * 필요해지면 아래 구현과 src/constants/urls.ts의 URLS.STORE를 다시 연결한다.
 *
 * 'use client';
 *
 * import Link from 'next/link';
 * import { useCallback, useEffect, useId, useRef } from 'react';
 * import useBooleanState from '@/hooks/useBooleanState';
 * import { URLS } from '@/constants/urls';
 * import useEscapeKeyDown from '@/hooks/useEscapeKeyDown';
 *
 * export default function ApplyButton({ className, label = '지원하기' }: { className?: string; label?: string }) {
 *   const [isOpen, open, close] = useBooleanState(false);
 *   const menuId = useId();
 *   const ref = useRef<HTMLDivElement>(null);
 *   const triggerRef = useRef<HTMLButtonElement>(null);
 *   const menuRef = useRef<HTMLDivElement>(null);
 *   const menuItemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
 *
 *   const focusMenuItem = (index: number) => {
 *     menuItemRefs.current[index]?.focus();
 *   };
 *
 *   const closeMenu = useCallback(() => {
 *     close();
 *     triggerRef.current?.focus();
 *   }, [close]);
 *
 *   const handleEscapeKeyDown = (e: KeyboardEvent) => {
 *     if (!isOpen) return;
 *     e.stopPropagation();
 *     closeMenu();
 *   };
 *
 *   const setPlayStoreItemRef = (element: HTMLAnchorElement | null) => {
 *     menuItemRefs.current[0] = element;
 *   };
 *
 *   const setAppStoreItemRef = (element: HTMLAnchorElement | null) => {
 *     menuItemRefs.current[1] = element;
 *   };
 *
 *   useEscapeKeyDown(handleEscapeKeyDown);
 *
 *   useEffect(() => {
 *     if (!isOpen) return;
 *
 *     const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
 *       if (ref.current && !ref.current.contains(e.target as Node)) {
 *         closeMenu();
 *       }
 *     };
 *
 *     document.addEventListener('mousedown', handleOutsideClick);
 *     document.addEventListener('touchstart', handleOutsideClick);
 *
 *     return () => {
 *       document.removeEventListener('mousedown', handleOutsideClick);
 *       document.removeEventListener('touchstart', handleOutsideClick);
 *     };
 *   }, [isOpen, closeMenu]);
 *
 *   useEffect(() => {
 *     if (!isOpen || !menuRef.current) return;
 *     focusMenuItem(0);
 *   }, [isOpen]);
 *
 *   const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
 *     const items = menuItemRefs.current.filter((item): item is HTMLAnchorElement => item !== null);
 *     if (items.length === 0) return;
 *
 *     const currentIndex = items.findIndex((item) => item === document.activeElement);
 *     const hasFocusInside = currentIndex >= 0;
 *
 *     if (e.key === 'Escape') {
 *       e.preventDefault();
 *       closeMenu();
 *       return;
 *     }
 *
 *     if (e.key === 'Home') {
 *       e.preventDefault();
 *       items[0]?.focus();
 *       return;
 *     }
 *
 *     if (e.key === 'End') {
 *       e.preventDefault();
 *       items[items.length - 1]?.focus();
 *       return;
 *     }
 *
 *     if (e.key === 'ArrowDown') {
 *       e.preventDefault();
 *       const nextIndex = hasFocusInside ? (currentIndex + 1) % items.length : 0;
 *       items[nextIndex]?.focus();
 *       return;
 *     }
 *
 *     if (e.key === 'ArrowUp') {
 *       e.preventDefault();
 *       const prevIndex = hasFocusInside ? (currentIndex - 1 + items.length) % items.length : items.length - 1;
 *       items[prevIndex]?.focus();
 *     }
 *   };
 *
 *   return (
 *     <div ref={ref} className="relative inline-block">
 *       <button
 *         ref={triggerRef}
 *         type="button"
 *         aria-haspopup="menu"
 *         aria-controls={menuId}
 *         aria-expanded={isOpen}
 *         onClick={isOpen ? close : open}
 *         className={className}
 *       >
 *         {label}
 *       </button>
 *       {isOpen && (
 *         <div
 *           ref={menuRef}
 *           id={menuId}
 *           role="menu"
 *           onKeyDown={handleMenuKeyDown}
 *           className="absolute top-full left-1/2 z-50 mt-2 w-40 -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-lg"
 *         >
 *           <Link
 *             ref={setPlayStoreItemRef}
 *             href={URLS.STORE.PLAY_STORE}
 *             target="_blank"
 *             rel="noopener noreferrer"
 *             role="menuitem"
 *             className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-700 hover:bg-gray-50"
 *             onClick={close}
 *           >
 *             Play Store
 *           </Link>
 *           <Link
 *             ref={setAppStoreItemRef}
 *             href={URLS.STORE.APP_STORE}
 *             target="_blank"
 *             rel="noopener noreferrer"
 *             role="menuitem"
 *             className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-700 hover:bg-gray-50"
 *             onClick={close}
 *           >
 *             App Store
 *           </Link>
 *         </div>
 *       )}
 *     </div>
 *   );
 * }
 */
