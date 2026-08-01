import type { Metadata } from 'next';
import { locales, localeMeta, type Locale } from './config';

const SITE_URL = 'https://nexusrobotics.com.au';

export function localeAlternates(
  locale: Locale,
  path = '',
): NonNullable<Metadata['alternates']> {
  const normalizedPath = path.startsWith('/') ? path : path ? `/${path}` : '';
  const languages = Object.fromEntries(
    locales.map((l) => [localeMeta[l].hreflang, `${SITE_URL}/${l}${normalizedPath}`]),
  );

  return {
    canonical: `${SITE_URL}/${locale}${normalizedPath}`,
    languages,
  };
}
