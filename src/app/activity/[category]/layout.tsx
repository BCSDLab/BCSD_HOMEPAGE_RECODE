import { notFound } from 'next/navigation';
import { listActivityCategories } from '@/api/activities';

interface ActivityCategoryLayoutProps {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}

/**
 * 없는 카테고리는 loading.tsx의 스트리밍이 시작되기 전에 404로 확정한다.
 * 페이지에서 notFound()를 던지면 이미 200이 나간 뒤라 상태 코드가 바뀌지 않는다.
 */
export default async function ActivityCategoryLayout({ children, params }: ActivityCategoryLayoutProps) {
  const { category } = await params;
  const categories = await listActivityCategories();
  if (!categories.some(({ slug }) => slug === category)) {
    notFound();
  }

  return children;
}
