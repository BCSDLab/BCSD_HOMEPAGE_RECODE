'use client';

import Link from 'next/link';
import { useRef, useState, useLayoutEffect } from 'react';
import DownArrow from '@/assets/svg/main/dropdown-down-arrow.svg';
import { QnAData } from '@/static/main/QnA';

export default function QnADropdown() {
  const [isOpen, setIsOpen] = useState<boolean[]>(() => Array(QnAData.length).fill(false));
  const [heights, setHeights] = useState<number[]>(() => Array(QnAData.length).fill(0));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const setItemRef =
    (index: number) =>
    (el: HTMLDivElement | null): void => {
      refs.current[index] = el;
    };

  useLayoutEffect(() => {
    setHeights((prev) => prev.map((_, i) => refs.current[i]?.scrollHeight ?? 0));
  }, [isOpen]);

  const toggle = (i: number) => {
    setIsOpen((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <div className="mt-32.5 flex w-full justify-center gap-8 p-10">
      <div className="w-1/3">
        <h2 className="text-[34px] font-medium">자주 물어보는 질문</h2>
        <p className="text-[17px] font-normal">더 궁금한 사항이 있다면 아래 메일로 문의바랍니다.</p>
        <Link href="mailto:bcsdlab@gmail.com" className="hover:underline">
          bcsdlab@gmail.com
        </Link>
      </div>

      <div className="w-1/3 space-y-4">
        {QnAData.map((qna, index) => {
          const isDropDownOpen = isOpen[index];
          return (
            <div key={qna.id} className="overflow-hidden rounded-lg border border-gray-200">
              <div
                onClick={() => toggle(index)}
                className="flex items-center justify-between bg-[#F9F9F9] p-4.25 text-left"
              >
                <span className="text-[20px] font-medium">{qna.question}</span>
                <span className={`transition-transform duration-300 ${isDropDownOpen ? 'rotate-180' : ''}`}>
                  <DownArrow />
                </span>
              </div>

              <div
                className={`bg-[#F9F9F9] transition-[max-height] duration-300 ease-out`}
                style={{ maxHeight: isDropDownOpen ? heights[index] : 0 }}
              >
                <div
                  ref={setItemRef(index)}
                  className={`p-4.25 text-[17px] font-normal text-neutral-100 transition-opacity duration-200 ${isDropDownOpen ? 'opacity-100' : 'opacity-0'}`}
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
