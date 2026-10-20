import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActivityTimeline, listActivityCategories } from '@/api/activities';
import ActivityContent from '../components/ActivityContent';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';

const DEFAULT_HERO_IMAGE = 'https://image.bcsdlab.com/bcsd_activity_page.png';

export async function generateMetadata({ params }: ActivityPageProps): Promise<Metadata> {
  const { category } = await params;
  const categories = await listActivityCategories();
  const info = categories.find((c) => c.slug === category);

  if (!info) {
    return {
      title: '활동',
      description: 'BCSD 활동 페이지',
    };
  }

  const description = info.headline ?? `BCSD ${info.name} 활동을 확인하세요.`;

  return {
    title: `${info.name} 활동`,
    alternates: {
      canonical: `/activity/${category}`,
    },
    description,
    openGraph: {
      url: `https://bcsdlab.com/activity/${category}`,
      title: `${info.name} 활동 | BCSD`,
      description,
      images: [
        {
          url: info.heroImageUrl ?? DEFAULT_HERO_IMAGE,
          width: 1440,
          height: 587,
          alt: `BCSD ${info.name} 활동`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${info.name} 활동 | BCSD`,
      description,
      images: [info.heroImageUrl ?? DEFAULT_HERO_IMAGE],
    },
  };
}

interface ActivityPageProps {
  params: Promise<{ category: string }>;
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { category } = await params;

  const [categories, timeline] = await Promise.all([listActivityCategories(), getActivityTimeline(category)]);
  const currentCategory = categories.find((c) => c.slug === category);
  if (!currentCategory) {
    notFound();
  }

  const years = timeline.map((group) => String(group.year));
  const defaultYear = years[0] ?? '';

  return (
    <main className="lg:hide-scrollbar w-full lg:overflow-x-auto">
      <div className="lg:min-w-360">
        <header className="relative h-60 w-full md:h-80 lg:aspect-1440/587 lg:h-auto">
          <Image
            src={currentCategory.heroImageUrl ?? DEFAULT_HERO_IMAGE}
            alt="BCSD 활동 대표 이미지"
            fill
            sizes="100vw"
            className="object-cover lg:object-fill"
            priority
            unoptimized
          />
          <div className="absolute inset-0 flex items-start lg:items-end">
            <h1 className="font-inter relative z-10 mx-6 mt-20 rounded-md text-[26px] leading-[120%] font-semibold text-white md:text-[36px] lg:bottom-10 lg:left-50 lg:m-4 lg:text-[40px]">
              <span className="block">BCSD에서는</span>
              <span className="block">이런 활동을 하고 있어요.</span>
            </h1>
          </div>
          <GlobalNavigationBar location="Activity" />
        </header>

        <ActivityContent
          categories={categories}
          category={category}
          timeline={timeline}
          years={years}
          defaultYear={defaultYear}
          pathname={`/activity/${category}`}
        />
      </div>
    </main>
  );
}
