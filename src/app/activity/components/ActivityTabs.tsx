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
    <div className={'flex gap-6'}>
      {categories.map((category) => {
        const active = category.slug === current;
        return (
          <Link
            key={category.slug}
            href={`/activity/${category.slug}` + (qs ? `?${qs}` : '')}
            scroll={false}
            className={clsx(
              'w-40 rounded-full py-2 text-center text-[17px] font-medium transition-colors',
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
