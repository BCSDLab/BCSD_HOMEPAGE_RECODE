import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActivity } from '@/api/activities';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';

interface ActivityDetailPageProps {
  params: Promise<{ category: string; id: string }>;
}

export async function generateMetadata({ params }: ActivityDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const activity = await getActivity(Number(id));
  if (!activity) {
    return { title: '활동' };
  }
  return {
    title: `${activity.title} | BCSD`,
    description: activity.summary,
  };
}

export default async function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const { category, id } = await params;
  const activity = await getActivity(Number(id));

  if (!activity || activity.categorySlug !== category || !activity.content) {
    notFound();
  }

  return (
    <main className="hide-scrollbar w-full overflow-x-auto">
      <div className="min-w-360">
        <GlobalNavigationBar location="Activity" />

        <article className="mx-auto max-w-200 px-6 pt-40 pb-30">
          <Link href={`/activity/${category}`} className="text-[15px] text-[#9d9d9d] hover:underline">
            ← 목록으로
          </Link>
          <div className="mt-4 text-[15px] text-[#9d9d9d]">
            {activity.year}.{String(activity.month).padStart(2, '0')}
          </div>
          <h1 className="mt-2 text-[32px] font-bold">{activity.title}</h1>
          <p className="mt-3 text-[17px] text-[#777]">{activity.summary}</p>

          {/* eslint-disable-next-line react/no-danger -- 백엔드에서 jsoup safelist로 저장 시점에 정제한다(T-15). */}
          <div className="prose mt-12 max-w-none" dangerouslySetInnerHTML={{ __html: activity.content }} />
        </article>
      </div>
    </main>
  );
}
