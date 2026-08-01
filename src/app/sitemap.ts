import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n/config';

const ROUTES = ['', '/about', '/programmes', '/blog', '/contact'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nexusrobotics.com.au';
  const now = new Date();
  const priorities: Record<string, number> = {
    '': 1.0,
    '/about': 0.8,
    '/programmes': 0.9,
    '/blog': 0.7,
    '/contact': 0.8,
  };
  const frequencies: Record<string, MetadataRoute.Sitemap[number]['changeFrequency']> = {
    '': 'weekly',
    '/about': 'monthly',
    '/programmes': 'weekly',
    '/blog': 'weekly',
    '/contact': 'monthly',
  };

  return locales.flatMap((locale) =>
    ROUTES.map((route) => ({
      url: `${base}/${locale}${route}`,
      lastModified: now,
      changeFrequency: frequencies[route],
      priority: priorities[route],
    })),
  );
}
