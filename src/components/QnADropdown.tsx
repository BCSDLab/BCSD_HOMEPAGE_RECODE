'use client';

import Link from 'next/link';
import { useState } from 'react';
import DownArrow from '@/assets/svg/main/dropdown-down-arrow.svg';
import UpArrow from '@/assets/svg/main/dropdown-up-arrow.svg';
import { QnAData } from '@/static/main/QnA';

export default function QnADropdown() {
  const [isOpen, setIsOpen] = useState(new Array(QnAData.length).fill(false));

  const handleClick = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className="mt-[130px] flex w-full justify-center gap-8 p-10">
      <div className="w-1/3">
        <h2 className="text-[34px] font-medium">자주 물어보는 질문</h2>
        <p className="text-[17px] font-normal">더 궁금한 사항이 있다면 아래 메일로 문의바랍니다.</p>
        <Link href="mailto:bcsdlab@gmail.com" className="hover:underline">
          bcsdlab@gmail.com
        </Link>
      </div>

      <div className="max-w-md space-y-4">
        {QnAData.map((qna, index) => (
          <div key={qna.id} className="overflow-hidden rounded-lg border border-gray-200">
            <div
              className="flex cursor-pointer items-center justify-between bg-[#F9F9F9] p-[17px]"
              onClick={() => handleClick(index)}
            >
              <span className="text-[20px] font-medium">{qna.question}</span>
              {isOpen[index] ? <UpArrow /> : <DownArrow />}
            </div>

            {isOpen[index] && (
              <div className="bg-[#F9F9F9] p-[17px] text-[17px] font-normal text-[#444]">
                <p>{qna.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
