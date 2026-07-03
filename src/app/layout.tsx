import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import siteContent from '@/lib/content/site.json';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexusrobotics.com.au'),
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
  openGraph: {
    type: 'website',
    locale: 'en_AU',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
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
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
