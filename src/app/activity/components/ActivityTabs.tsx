'use client';

import clsx from 'clsx';
import Link from 'next/link';
import type { ActivityCategorySummary } from '@/api/activities';

interface ActivityTabsProps {
  categories: ActivityCategorySummary[];
  current: string;
  selectedYear: string;
  defaultYear: string;
}

export default function ActivityTabs({ categories, current, selectedYear, defaultYear }: ActivityTabsProps) {
  const qs = selectedYear !== defaultYear ? `year=${selectedYear}` : '';

  return (
    // 모바일은 연도 선택과 한 줄에 두고, 카테고리가 늘면 탭 영역만 가로로 스크롤한다
    <div className="hide-scrollbar -ml-6 flex min-w-0 flex-1 gap-2 overflow-x-auto pl-6 lg:ml-0 lg:min-w-auto lg:flex-initial lg:gap-6 lg:overflow-visible lg:pl-0">
      {categories.map((category) => {
        const active = category.slug === current;
        return (
          <Link
            key={category.slug}
            href={`/activity/${category.slug}` + (qs ? `?${qs}` : '')}
            scroll={false}
            className={clsx(
              'shrink-0 rounded-full px-5 py-2 text-center text-[15px] font-medium transition-colors lg:w-40 lg:px-0 lg:text-[17px]',
              active ? 'bg-[#d365fd] text-white' : 'bg-[#f4f4f4]',
            )}
          >
            {category.name.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
