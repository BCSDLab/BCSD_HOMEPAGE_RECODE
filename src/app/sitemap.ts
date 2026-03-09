import type { MetadataRoute } from 'next';
import { tracks } from '@/app/track/components/TrackTabs';

const activityRoutes = ['/activity/event', '/activity/game', '/activity/koin'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

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
    ...activityRoutes.map((route) => ({
      url: `https://bcsdlab.com${route}`,
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
