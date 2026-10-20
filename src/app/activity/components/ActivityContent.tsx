'use client';

import { useSyncExternalStore } from 'react';
import type { ActivityCategorySummary, ActivityTimelineGroup } from '@/api/activities';
import ActivityCards from './ActivityCards';
import YearSelect from './YearSelector';
import ActivityTabs from './ActivityTabs';

const ACTIVITY_YEAR_CHANGE_EVENT = 'activity-year-change';

function getSelectedYear(years: string[], defaultYear: string) {
  if (typeof window === 'undefined') {
    return defaultYear;
  }

  const params = new URLSearchParams(window.location.search);
  const yearParam = params.get('year');
  return yearParam && years.includes(yearParam) ? yearParam : defaultYear;
}

function subscribeToSelectedYear(onStoreChange: () => void) {
  window.addEventListener('popstate', onStoreChange);
  window.addEventListener(ACTIVITY_YEAR_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener('popstate', onStoreChange);
    window.removeEventListener(ACTIVITY_YEAR_CHANGE_EVENT, onStoreChange);
  };
}

interface ActivityContentProps {
  categories: ActivityCategorySummary[];
  category: string;
  timeline: ActivityTimelineGroup[];
  years: string[];
  defaultYear: string;
  pathname: string;
}

export default function ActivityContent({
  categories,
  category,
  timeline,
  years,
  defaultYear,
  pathname,
}: ActivityContentProps) {
  const selectedYear = useSyncExternalStore(
    subscribeToSelectedYear,
    () => getSelectedYear(years, defaultYear),
    () => defaultYear,
  );

  const handleSelectYear = (value: string) => {
    const params = new URLSearchParams(window.location.search);

    if (value === defaultYear) {
      params.delete('year');
    } else {
      params.set('year', value);
    }

    const queryString = params.toString();
    const nextUrl = queryString ? `${pathname}?${queryString}` : pathname;
    window.history.replaceState(window.history.state, '', nextUrl);
    window.dispatchEvent(new Event(ACTIVITY_YEAR_CHANGE_EVENT));
  };

  return (
    <div className="mt-12 mb-20 px-6 lg:mt-20 lg:mb-30 lg:px-50">
      <div className="flex items-center gap-3 lg:items-stretch lg:justify-between lg:gap-0">
        <ActivityTabs
          categories={categories}
          current={category}
          selectedYear={selectedYear}
          defaultYear={defaultYear}
        />
        {defaultYear && selectedYear && (
          <YearSelect years={years} selectedYear={selectedYear} onSelect={handleSelectYear} />
        )}
      </div>

      <div className="mt-12 lg:mt-36">
        {selectedYear && timeline.length > 0 && (
          <ActivityCards category={category} year={selectedYear} timeline={timeline} />
        )}
      </div>
    </div>
  );
}
