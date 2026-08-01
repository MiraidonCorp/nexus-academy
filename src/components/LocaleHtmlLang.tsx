'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n/config';
import { localeMeta } from '@/lib/i18n/config';

/** Syncs document lang with the active locale segment for accessibility/SEO. */
export default function LocaleHtmlLang() {
  const params = useParams();
  const localeParam = params.locale;

  useEffect(() => {
    if (typeof localeParam === 'string' && isValidLocale(localeParam)) {
      document.documentElement.lang = localeMeta[localeParam].hreflang;
    }
  }, [localeParam]);

  return null;
}
