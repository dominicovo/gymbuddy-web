import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const APP_URL = 'https://gymbuddy.app';
  const lastModified = new Date();

  return [
    {
      url: APP_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${APP_URL}/#how-it-works`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${APP_URL}/#features`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${APP_URL}/#waitlist`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
