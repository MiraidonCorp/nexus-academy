import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import LocaleHtmlLang from '@/components/LocaleHtmlLang';
import { getContent } from '@/lib/content/getContent';
import { locales, isValidLocale, type Locale } from '@/lib/i18n/config';
import { localeAlternates } from '@/lib/i18n/metadata';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) {
    return {};
  }

  const siteContent = await getContent<{ description: string; siteName: string }>(
    localeParam,
    'site',
  );

  return {
    title: {
      default: 'NEXUS Institute of STEM & Robotics | Kids Robotics & Coding Classes',
      template: '%s | NEXUS Robotics',
    },
    description: siteContent.description,
    keywords: [
      'robotics for kids',
      'STEM education',
      'FIRST LEGO League',
      'coding classes kids',
      'AI for kids',
      'Spike Prime',
      'micro:bit',
      'kids robotics classes',
      'STEM academy',
    ],
    authors: [{ name: 'NEXUS Institute of STEM & Robotics' }],
    creator: 'Miraidon',
    alternates: localeAlternates(localeParam),
    openGraph: {
      type: 'website',
      locale: localeParam === 'ca' ? 'en_CA' : 'en_IN',
      siteName: siteContent.siteName,
      title: 'NEXUS Institute of STEM & Robotics',
      description: siteContent.description,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'NEXUS Robotics' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'NEXUS Institute of STEM & Robotics',
      description: siteContent.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const siteContent = await getContent<typeof import('@/lib/content/ca/site.json')>(locale, 'site');

  return (
    <>
      <LocaleHtmlLang />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Nav locale={locale} siteContent={siteContent} />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer siteContent={siteContent} />
    </>
  );
}
