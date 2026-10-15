import type { MetadataRoute } from 'next';
import { listTracks } from '@/api/tracks';
import { getActivityTimeline, listActivityCategories } from '@/api/activities';
import { listGames } from '@/api/games';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [tracks, categories, games] = await Promise.all([listTracks(), listActivityCategories(), listGames()]);
  const timelines = await Promise.all(categories.map(({ slug }) => getActivityTimeline(slug)));
  const activityDetails = categories.flatMap(({ slug }, index) =>
    timelines[index].flatMap(({ activities }) =>
      activities.filter(({ hasDetail }) => hasDetail).map(({ id }) => ({ category: slug, id })),
    ),
  );

  return [
    {
      url: 'https://bcsdlab.com',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://bcsdlab.com/recruit',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://bcsdlab.com/game',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...categories.map(({ slug }) => ({
      url: `https://bcsdlab.com/activity/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...activityDetails.map(({ category, id }) => ({
      url: `https://bcsdlab.com/activity/${category}/${id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...tracks.map(({ slug }) => ({
      url: `https://bcsdlab.com/track/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...games.map(({ slug }) => ({
      url: `https://bcsdlab.com/game/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
