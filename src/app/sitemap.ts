import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const APP_URL = 'https://www.gymbuddy.live';
  const lastModified = new Date();

  return [
    {
      url: APP_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${APP_URL}/support`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${APP_URL}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
