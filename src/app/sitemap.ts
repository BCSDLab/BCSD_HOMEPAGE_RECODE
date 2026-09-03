import type { MetadataRoute } from 'next';
import { listTracks } from '@/api/tracks';
import { listActivityCategories } from '@/api/activities';
import { listGames } from '@/api/games';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [tracks, categories, games] = await Promise.all([listTracks(), listActivityCategories(), listGames()]);

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
