'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import type { Locale } from '@/lib/i18n/config';
import { localizedPath } from '@/lib/i18n/paths';
import styles from './Nav.module.css';
import AuthModal from './AuthModal';
import LocaleSwitcher from './LocaleSwitcher';
import { trackButtonClick, trackInteraction, trackLogout } from '@/lib/analytics';

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

type SiteContent = {
  nav: NavItem[];
};

interface NavProps {
  locale: Locale;
  siteContent: SiteContent;
}

export default function Nav({ locale, siteContent }: NavProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'signup'>('login');
  const [loggedIn, setLoggedIn] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const read = () => {
      try {
        const stored = localStorage.getItem('nexus_auth');
        setLoggedIn(!!stored && JSON.parse(stored).loggedIn === true);
      } catch {
        setLoggedIn(false);
      }
    };
    read();
    window.addEventListener('nexus-auth-change', read);
    return () => window.removeEventListener('nexus-auth-change', read);
  }, []);

  const openLogin = (location: string) => {
    trackButtonClick({ label: 'Log in', location });
    setAuthTab('login'); setAuthOpen(true);
  };
  const openSignup = (location: string) => {
    trackButtonClick({ label: 'Sign up / Log in', location });
    setAuthTab('signup'); setAuthOpen(true);
  };

  const handleLogout = (location: string) => {
    trackLogout(location);
    localStorage.removeItem('nexus_auth');
    setLoggedIn(false);
    window.dispatchEvent(new Event('nexus-auth-change'));
  };

  const toggleMenu = () => {
    trackInteraction({ type: 'menu_toggle', label: menuOpen ? 'Close menu' : 'Open menu', location: 'nav-mobile' });
    setMenuOpen((v) => !v);
  };

  const contactHref = localizedPath(locale, '/contact');

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav} role="navigation" aria-label="Main navigation">
          <Link href={localizedPath(locale, '/')} className={styles.logo} aria-label="NEXUS Robotics – go to homepage">
            <Image
              src="/images/nexus-logo.svg"
              alt="NEXUS Robotics logo"
              width={52}
              height={52}
              priority
            />
            <span className={styles.logoText}>
              <span className={styles.logoName}>NEXUS</span>
              <span className={styles.logoSub}>Institute of STEM &amp; Robotics</span>
            </span>
          </Link>

          <ul className={styles.links} role="list">
            {siteContent.nav.map((item) => {
              const href = localizedPath(locale, item.href);
              const active = pathname === href || (item.href !== '/' && pathname.startsWith(href));

              if (item.children?.length) {
                return (
                  <li
                    key={item.href}
                    className={styles.dropdownItem}
                    onMouseEnter={() => setOpenDropdown(item.href)}
                    onMouseLeave={() => setOpenDropdown((v) => (v === item.href ? null : v))}
                  >
                    <button
                      type="button"
                      className={styles.link}
                      aria-current={active ? 'page' : undefined}
                      data-active={active ? 'true' : undefined}
                      aria-expanded={openDropdown === item.href}
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenDropdown((v) => (v === item.href ? null : item.href))
                      }
                    >
                      {item.label}
                      <svg aria-hidden="true" width="9" height="9" viewBox="0 0 10 10" fill="none" className={styles.chevron}>
                        <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {openDropdown === item.href && (
                      <ul className={styles.dropdownMenu} role="list">
                        {item.children.map((child) => {
                          const childHref = localizedPath(locale, child.href);
                          return (
                            <li key={child.href}>
                              <Link
                                href={childHref}
                                className={styles.dropdownLink}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={href}
                    className={styles.link}
                    aria-current={active ? 'page' : undefined}
                    data-active={active ? 'true' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={styles.actions}>
            <LocaleSwitcher />
            {loggedIn ? (
              <button
                type="button"
                className={styles.btnOutline}
                onClick={() => handleLogout('nav-desktop')}
              >
                Log out
              </button>
            ) : (
              <button
                type="button"
                className={styles.btnOutline}
                onClick={() => openLogin('nav-desktop')}
              >
                Log in
              </button>
            )}
            <Link
              href={contactHref}
              className={styles.btnPrimary}
              onClick={() => trackButtonClick({ label: 'Book a Free Trial', location: 'nav-desktop', href: contactHref })}
            >
              Book a Free Trial
            </Link>
          </div>

          <button
            className={styles.hamburger}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </nav>

        {menuOpen && (
          <div id="mobile-menu" className={styles.mobileMenu} role="dialog" aria-label="Navigation menu">
            <ul role="list" className={styles.mobileLinks}>
              {siteContent.nav.map((item) => {
                const href = localizedPath(locale, item.href);
                const active = pathname === href || (item.href !== '/' && pathname.startsWith(href));

                if (item.children?.length) {
                  const expanded = mobileDropdown === item.href;
                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        className={styles.mobileLink}
                        data-active={active ? 'true' : undefined}
                        aria-expanded={expanded}
                        onClick={() => setMobileDropdown((v) => (v === item.href ? null : item.href))}
                      >
                        {item.label}
                        <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none" className={expanded ? styles.chevronOpen : styles.chevron}>
                          <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {expanded && (
                        <ul role="list" className={styles.mobileSubLinks}>
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={localizedPath(locale, child.href)}
                                className={styles.mobileSubLink}
                                onClick={() => setMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={href}
                      className={styles.mobileLink}
                      aria-current={active ? 'page' : undefined}
                      data-active={active ? 'true' : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className={styles.mobileLocale}>
                <LocaleSwitcher />
              </li>
              <li>
                {loggedIn ? (
                  <button
                    type="button"
                    className={styles.mobileCta}
                    onClick={() => { handleLogout('nav-mobile'); setMenuOpen(false); }}
                  >
                    Log out
                  </button>
                ) : (
                  <button
                    type="button"
                    className={styles.mobileCta}
                    onClick={() => { openSignup('nav-mobile'); setMenuOpen(false); }}
                  >
                    Sign up / Log in
                  </button>
                )}
              </li>
              <li>
                <Link
                  href={contactHref}
                  className={styles.mobileCta}
                  onClick={() => { trackButtonClick({ label: 'Book a Free Trial', location: 'nav-mobile', href: contactHref }); setMenuOpen(false); }}
                >
                  Book a Free Trial
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        initialTab={authTab}
      />
    </>
  );
}
