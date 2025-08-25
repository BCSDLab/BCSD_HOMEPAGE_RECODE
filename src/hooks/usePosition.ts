import { useCallback, useEffect, useState } from 'react';
import { computeContainedRect, type Size } from '@/utils/computeRectSize';

type Position =
  | 'outside-top-right'
  | 'outside-top-left'
  | 'outside-bottom-right'
  | 'outside-bottom-left'
  | 'inside-top-right'
  | 'inside-top-left'
  | 'inside-bottom-right'
  | 'inside-bottom-left';

interface useOverlayPositionProps {
  containerRef: React.RefObject<HTMLElement | null>;
  naturalSize: Size | null;
  position?: Position;
  offset?: number;
}

export default function useOverlayPosition({
  containerRef,
  naturalSize,
  position = 'outside-top-right',
  offset = 8,
}: useOverlayPositionProps) {
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  const update = useCallback(() => {
    const el = containerRef.current;
    if (!el || !naturalSize) return;

    const rect = el.getBoundingClientRect();
    const contained = computeContainedRect({ width: rect.width, height: rect.height }, naturalSize);

    let left = contained.left;
    let top = contained.top;

    const right = contained.left + contained.width;
    const bottom = contained.top + contained.height;

    switch (position) {
      case 'inside-top-right':
        left = right - offset;
        top = contained.top + offset;
        break;
      case 'inside-top-left':
        left = contained.left + offset;
        top = contained.top + offset;
        break;
      case 'inside-bottom-right':
        left = right - offset;
        top = bottom - offset;
        break;
      case 'inside-bottom-left':
        left = contained.left + offset;
        top = bottom - offset;
        break;
      case 'outside-top-right':
        left = right + offset;
        top = contained.top;
        break;
      case 'outside-top-left':
        left = contained.left - offset;
        top = contained.top;
        break;
      case 'outside-bottom-right':
        left = right + offset;
        top = bottom - offset;
        break;
      case 'outside-bottom-left':
        left = contained.left - offset;
        top = bottom - offset;
        break;
    }

    setPos({ left, top });
  }, [containerRef, naturalSize, position, offset]);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  return pos;
}
