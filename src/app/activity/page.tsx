import { redirect } from 'next/navigation';
import { resolveDefaultActivityCategorySlug } from '@/api/activities';

export default async function ActivityRoot() {
  redirect(`/activity/${await resolveDefaultActivityCategorySlug()}`);
}
