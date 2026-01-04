import { Suspense } from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import type { ActivityCategory, ActivityList } from '@/types/activity';
import { getActivity } from '@/static/activity';
import ActivityContent from '../components/ActivityContent';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';

const getYears = (groups: ActivityList[]) => groups.map((g) => g.year).sort((a, b) => Number(b) - Number(a));

const categoryInfo: Record<ActivityCategory, { title: string; description: string }> = {
  event: {
    title: '이벤트',
    description: 'BCSD에서 진행한 다양한 이벤트와 행사를 확인하세요.',
  },
  game: {
    title: '게임',
    description: 'BCSD 멤버들이 개발한 게임 프로젝트를 만나보세요.',
  },
  koin: {
    title: 'KOIN',
    description: 'BCSD의 대표 프로젝트 KOIN의 개발 히스토리를 확인하세요.',
  },
};

export function generateStaticParams() {
  return [{ category: 'event' }, { category: 'game' }, { category: 'koin' }] satisfies { category: ActivityCategory }[];
}

export async function generateMetadata({ params }: ActivityPageProps): Promise<Metadata> {
  const { category } = await params;
  const info = categoryInfo[category];

  return {
    title: `${info.title} 활동`,
    description: info.description,
    openGraph: {
      title: `${info.title} 활동 | BCSD`,
      description: info.description,
      images: [
        {
          url: 'https://image.bcsdlab.com/bcsd_activity_page.png',
          width: 1440,
          height: 587,
          alt: `BCSD ${info.title} 활동`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${info.title} 활동 | BCSD`,
      description: info.description,
      images: ['https://image.bcsdlab.com/bcsd_activity_page.png'],
    },
  };
}

interface ActivityPage {
  category: ActivityCategory;
}

interface ActivityPageProps {
  params: Promise<ActivityPage>;
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { category } = await params;

  const activityGroups = await getActivity(category);
  const years = getYears(activityGroups);
  const defaultYear = years[0] ?? '';

  return (
    <div className="hide-scrollbar w-full overflow-x-auto">
      <div className="min-w-360">
        <div className="relative aspect-1440/587 w-full">
          <Image src="https://image.bcsdlab.com/bcsd_activity_page.png" alt="Event Image" fill sizes="100vw" priority />
          <div className="absolute inset-0 flex items-end">
            <div className="font-inter relative bottom-10 left-50 z-10 m-4 rounded-md text-[40px] font-semibold text-white">
              <div>BCSD에서는</div>
              <div>이런 활동을 하고 있어요.</div>
            </div>
          </div>
          <GlobalNavigationBar location="Activity" />
        </div>

        <Suspense fallback={null}>
          <ActivityContent
            category={category}
            activityGroups={activityGroups}
            years={years}
            defaultYear={defaultYear}
          />
        </Suspense>
      </div>
    </div>
  );
}
