import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, isValidLocale, locales, type Locale } from '@/lib/i18n/config';

const LOCALE_COOKIE = 'NEXT_LOCALE';

function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && isValidLocale(cookie)) {
    return cookie;
  }

  // Geo headers vary by host (Vercel, Cloudflare, etc.); Accept-Language is the portable fallback.
  const country =
    request.headers.get('x-vercel-ip-country') ??
    request.headers.get('x-country') ??
    request.headers.get('cf-ipcountry');
  if (country === 'IN') {
    return 'in';
  }

  const acceptLanguage = request.headers.get('accept-language')?.toLowerCase() ?? '';
  if (acceptLanguage.includes('en-in') || acceptLanguage.includes('hi')) {
    return 'in';
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameLocale) {
    const response = NextResponse.next();
    response.headers.set('x-next-locale', pathnameLocale);
    return response;
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE, locale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  response.headers.set('x-next-locale', locale);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|.*\\..*).*)'],
};
