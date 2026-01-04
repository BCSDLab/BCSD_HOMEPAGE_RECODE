'use client';

import { useSearchParams } from 'next/navigation';
import type { ActivityCategory, ActivityList } from '@/types/activity';
import ActivityCards from './ActivityCards';
import YearSelect from './YearSelector';
import ActivityTabs from './ActivityTabs';

interface ActivityContentProps {
  category: ActivityCategory;
  activityGroups: ActivityList[];
  years: string[];
  defaultYear: string;
}

export default function ActivityContent({ category, activityGroups, years, defaultYear }: ActivityContentProps) {
  const searchParams = useSearchParams();
  const yearParam = searchParams.get('year');
  const selectedYear = yearParam && years.includes(yearParam) ? yearParam : defaultYear;

  return (
    <div className="mt-20 mb-30 px-50">
      <div className="flex justify-between">
        <ActivityTabs current={category} />
        {defaultYear && selectedYear && (
          <YearSelect years={years} selectedYear={selectedYear} defaultYear={defaultYear} />
        )}
      </div>

      <div className="mt-36">
        {selectedYear && activityGroups.length > 0 && (
          <ActivityCards year={selectedYear} activityList={activityGroups} />
        )}
      </div>
    </div>
  );
}
