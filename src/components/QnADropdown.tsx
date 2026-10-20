'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useLayoutEffect, type MouseEvent } from 'react';
import DownArrow from '@/assets/svg/main/dropdown-down-arrow.svg';
import type { HomeQna } from '@/api/home';

export default function QnADropdown({ qna: qnaData }: { qna: HomeQna[] }) {
  const [isOpen, setIsOpen] = useState<boolean[]>(() => Array(qnaData.length).fill(false));
  const [heights, setHeights] = useState<number[]>(() => Array(qnaData.length).fill(0));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const setItemRef =
    (index: number) =>
    (el: HTMLDivElement | null): void => {
      refs.current[index] = el;
    };

  const handleToggleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const index = Number(event.currentTarget.dataset.index);

    if (Number.isNaN(index)) {
      return;
    }

    setIsOpen((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  useLayoutEffect(() => {
    setHeights((prev) => prev.map((_, i) => refs.current[i]?.scrollHeight ?? 0));
  }, [isOpen]);

  return (
    <div className="mt-20 flex w-full flex-col justify-center gap-8 px-6 py-10 lg:mt-32.5 lg:flex-row lg:p-10">
      <div className="lg:w-1/3">
        <h2 className="text-[26px] leading-[120%] font-medium lg:text-[34px]">자주 물어보는 질문</h2>
        <p className="mt-2 text-base font-normal lg:mt-0 lg:text-[17px]">
          더 궁금한 사항이 있다면 아래 메일로 문의바랍니다.
        </p>
        <Link href="mailto:bcsdlab@gmail.com" className="hover:underline">
          bcsdlab@gmail.com
        </Link>
      </div>

      <div className="space-y-4 lg:w-1/3">
        {qnaData.map((qna, index) => {
          const isDropDownOpen = isOpen[index];
          const triggerId = `qna-trigger-${index}`;
          const contentId = `qna-content-${index}`;

          return (
            <div key={index} className="overflow-hidden rounded-lg border border-gray-200">
              <button
                type="button"
                id={triggerId}
                data-index={index}
                aria-expanded={isDropDownOpen}
                aria-controls={contentId}
                onClick={handleToggleClick}
                className="flex w-full items-center justify-between gap-3 bg-[#F9F9F9] lg:gap-0 p-4.25 text-left"
              >
                <span className="text-[17px] leading-[130%] font-medium lg:text-[20px]">{qna.question}</span>
                <span className={`shrink-0 transition-transform duration-300 ${isDropDownOpen ? 'rotate-180' : ''}`}>
                  <Image src={DownArrow} alt="" aria-hidden />
                </span>
              </button>

              <div
                id={contentId}
                role="region"
                aria-labelledby={triggerId}
                className={`bg-[#F9F9F9] transition-[max-height] duration-300 ease-out`}
                style={{ maxHeight: isDropDownOpen ? heights[index] : 0 }}
              >
                <div
                  ref={setItemRef(index)}
                  className={`p-4.25 text-base font-normal text-neutral-100 transition-opacity duration-200 lg:text-[17px] ${isDropDownOpen ? 'opacity-100' : 'opacity-0'}`}
                >
                  <p>{qna.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
