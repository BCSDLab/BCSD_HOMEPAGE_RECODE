'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { ActivityCategory } from '@/types/activity';

interface TabProps {
  href: string;
  label: string;
  slug: ActivityCategory;
}

const tabList: TabProps[] = [
  { href: '/activity/event', label: 'EVENT', slug: 'event' },
  { href: '/activity/game', label: 'GAME', slug: 'game' },
  { href: '/activity/koin', label: 'KOIN', slug: 'koin' },
];

interface ActivityTabsProps {
  current: ActivityCategory;
  selectedYear: string;
  defaultYear: string;
}

export default function ActivityTabs({ current, selectedYear, defaultYear }: ActivityTabsProps) {
  const qs = selectedYear !== defaultYear ? `year=${selectedYear}` : '';

  return (
    <div className={'flex gap-6'}>
      {tabList.map((t) => {
        const active = t.slug === current;
        return (
          <Link
            key={t.slug}
            href={t.href + (qs ? `?${qs}` : '')}
            scroll={false}
            className={clsx(
              'w-40 rounded-full py-2 text-center text-[17px] font-medium transition-colors',
              active ? 'bg-[#d365fd] text-white' : 'bg-[#f4f4f4]',
            )}
          >
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}
