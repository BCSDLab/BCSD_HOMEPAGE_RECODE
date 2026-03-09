import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://bcsdlab.com/sitemap.xml',
    host: 'https://bcsdlab.com',
  };
}
