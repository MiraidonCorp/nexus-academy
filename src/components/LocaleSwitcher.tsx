'use client';

import { useParams, usePathname } from 'next/navigation';
import { locales, localeMeta, type Locale } from '@/lib/i18n/config';
import { localizedPath, stripLocalePrefix } from '@/lib/i18n/paths';
import styles from './LocaleSwitcher.module.css';

const LOCALE_COOKIE = 'NEXT_LOCALE';

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

export default function LocaleSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params.locale as Locale;
  const pathWithoutLocale = stripLocalePrefix(pathname, currentLocale);

  return (
    <div className={styles.switcher} role="navigation" aria-label="Select region">
      {locales.map((locale) => {
        const href = localizedPath(locale, pathWithoutLocale);
        const isActive = locale === currentLocale;

        return (
          <a
            key={locale}
            href={href}
            className={[styles.option, isActive ? styles.active : ''].join(' ')}
            aria-current={isActive ? 'true' : undefined}
            onClick={() => setLocaleCookie(locale)}
          >
            {localeMeta[locale].label}
          </a>
        );
      })}
    </div>
  );
}
