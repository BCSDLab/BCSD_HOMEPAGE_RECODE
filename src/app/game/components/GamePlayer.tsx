'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

interface GamePlayerProps {
  buildFileUrl: string;
  name: string;
  version: string;
  canvasWidth: number | null;
  canvasHeight: number | null;
}

const BUG_REPORT_EMAIL = 'bcsdlab@gmail.com';

/**
 * arcade.codingbot.kr/play 참고 — 플레이어 바(뒤로가기·이름·버전 | 해상도·버그
 * 신고·전체화면) + 캔버스 스테이지. 실제 캔버스 비율로 크기를 맞춰서
 * 세로/가로가 극단적인 빌드도 레터박스 없이 보이게 한다.
 */
export default function GamePlayer({ buildFileUrl, name, version, canvasWidth, canvasHeight }: GamePlayerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const ratio = canvasWidth && canvasHeight ? canvasWidth / canvasHeight : 16 / 9;

  async function toggleFullscreen() {
    if (!wrapRef.current) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      await wrapRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    }
  }

  const bugReportHref = `mailto:${BUG_REPORT_EMAIL}?subject=${encodeURIComponent(`[버그 신고] ${name}`)}`;

  return (
    <section aria-label={name} className="bg-[#111]">
      <div className="flex items-center justify-between gap-4 px-5 py-3 text-white">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/game" aria-label="게임 목록으로" className="text-[#9d9d9d] hover:text-white">
            ←
          </Link>
          <span aria-hidden="true" className="h-4 w-px bg-[#333]" />
          <strong className="truncate text-[15px] font-semibold">{name}</strong>
          <span className="flex-none text-[13px] text-[#9d9d9d]">v{version}</span>
        </div>
        <div className="flex flex-none items-center gap-4 text-[13px] text-[#9d9d9d]">
          {canvasWidth && canvasHeight && (
            <span>
              {canvasWidth} × {canvasHeight}
            </span>
          )}
          <a href={bugReportHref} className="hover:text-white">
            ↗ 버그 신고
          </a>
          <button type="button" onClick={toggleFullscreen} className="cursor-pointer hover:text-white">
            {isFullscreen ? '✕ 전체화면 종료' : '⛶ 전체화면'}
          </button>
        </div>
      </div>

      <div className="flex justify-center bg-black py-6">
        <div
          ref={wrapRef}
          style={{ maxWidth: `min(100%, calc(72vh * ${ratio}))`, aspectRatio: `${ratio}` }}
          className="w-full"
        >
          <iframe
            src={buildFileUrl}
            title={`${name} 플레이`}
            allow="autoplay; fullscreen; gamepad"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
