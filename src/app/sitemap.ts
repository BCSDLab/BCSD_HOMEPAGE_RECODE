import type { MetadataRoute } from 'next';
import { listTracks } from '@/api/tracks';
import { listActivityCategories } from '@/api/activities';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [tracks, categories] = await Promise.all([listTracks(), listActivityCategories()]);

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
  ];
}
