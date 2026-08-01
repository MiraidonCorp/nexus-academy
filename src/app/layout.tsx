import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import Analytics from '@/components/Analytics';
import SiteNotice from '@/components/SiteNotice';
import { localeMeta, defaultLocale } from '@/lib/i18n/config';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexusrobotics.com.au'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = localeMeta[defaultLocale].hreflang;

  return (
    <html lang={lang} className={inter.className}>
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Analytics />
        <SiteNotice />
        {children}
      </body>
    </html>
  );
}
