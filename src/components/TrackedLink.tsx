'use client';

import Link, { type LinkProps } from 'next/link';
import { useParams } from 'next/navigation';
import { isValidLocale, type Locale } from '@/lib/i18n/config';
import { localizedPath } from '@/lib/i18n/paths';
import { trackButtonClick } from '@/lib/analytics';

interface TrackedLinkProps extends LinkProps {
  label: string;
  location: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

function resolveHref(href: LinkProps['href'], locale: Locale): LinkProps['href'] {
  if (typeof href === 'string') {
    return localizedPath(locale, href);
  }

  if (href && typeof href === 'object' && 'pathname' in href && href.pathname) {
    return {
      ...href,
      pathname: localizedPath(locale, href.pathname),
    };
  }

  return href;
}

/**
 * Wraps next/link with click tracking and locale-prefixed internal paths.
 */
export default function TrackedLink({ label, location, href, ...rest }: TrackedLinkProps) {
  const params = useParams();
  const localeParam = params.locale;
  const locale = typeof localeParam === 'string' && isValidLocale(localeParam)
    ? localeParam
    : 'ca';
  const resolvedHref = resolveHref(href, locale);

  return (
    <Link
      href={resolvedHref}
      onClick={() => trackButtonClick({ label, location, href: resolvedHref.toString() })}
      {...rest}
    />
  );
}
