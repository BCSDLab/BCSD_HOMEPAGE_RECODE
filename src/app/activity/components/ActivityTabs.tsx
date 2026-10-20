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
    // 모바일은 카테고리가 늘어도 줄바꿈 없이 가로로 스크롤한다
    <div className="hide-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 lg:mx-0 lg:gap-6 lg:overflow-visible lg:px-0">
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
