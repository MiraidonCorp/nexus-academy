import type { Locale } from './config';

const EXTERNAL_PREFIXES = ['http://', 'https://', 'mailto:', 'tel:', '#'];

export function localizedPath(locale: Locale, href: string): string {
  if (EXTERNAL_PREFIXES.some((prefix) => href.startsWith(prefix))) {
    return href;
  }

  const path = href.startsWith('/') ? href : `/${href}`;

  if (path === `/${locale}` || path.startsWith(`/${locale}/`)) {
    return path;
  }

  if (path === '/') {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}

export function stripLocalePrefix(pathname: string, locale: Locale): string {
  const prefix = `/${locale}`;
  if (pathname === prefix) {
    return '/';
  }

  if (pathname.startsWith(`${prefix}/`)) {
    return pathname.slice(prefix.length);
  }

  return pathname;
}
