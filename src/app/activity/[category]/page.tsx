import Image from 'next/image';
import type { ActivityCategory, ActivityList } from '@/types/activity';
import { getActivity } from '@/static/activity';
import ActivityCards from '../components/ActivityCards';
import YearSelect from '../components/YearSelector';
import ActivityTabs from '../components/ActivityTabs';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';

const getYears = (groups: ActivityList[]) => groups.map((g) => g.year).sort((a, b) => Number(b) - Number(a));

interface ActivityPage {
  category: ActivityCategory;
}

interface ActivityPageProps {
  params: Promise<ActivityPage>;
  searchParams: Promise<{ year?: string }>;
}

export default async function ActivityPage({ params, searchParams }: ActivityPageProps) {
  const { category } = await params;
  const { year } = await searchParams;

  const activityGroups = await getActivity(category);
  const years = getYears(activityGroups);
  const defaultYear = years[0];
  const selectedYear = year && years.includes(year) ? year : defaultYear;

  return (
    <div className="hide-scrollbar w-full overflow-x-auto">
      <div className="min-w-[1440px]">
        <div className="relative aspect-[1440/587] w-full">
          <Image src="https://image.bcsdlab.com/bcsd_activity_page.png" alt="Event Image" fill sizes="100vw" priority />
          <div className="absolute inset-0 flex items-end">
            <div className="font-inter relative bottom-10 left-50 z-10 m-4 rounded-md text-[40px] font-semibold text-white">
              <div>BCSD에서는</div>
              <div>이런 활동을 하고 있어요.</div>
            </div>
          </div>
          <GlobalNavigationBar location="Activity" />
        </div>

        <div className="mt-20 mb-30 px-50">
          <div className="flex justify-between">
            <ActivityTabs current={category} />
            <YearSelect years={years} selectedYear={selectedYear} defaultYear={defaultYear} />
          </div>

          <div className="mt-36">
            {selectedYear && activityGroups.length > 0 && (
              <ActivityCards year={selectedYear} activityList={activityGroups} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
