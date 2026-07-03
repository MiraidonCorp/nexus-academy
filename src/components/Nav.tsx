'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import siteContent from '@/lib/content/site.json';
import styles from './Nav.module.css';
import AuthModal from './AuthModal';

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'signup'>('login');
  const [loggedIn, setLoggedIn] = useState(false);

  // Read initial auth state and listen for changes
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

  const openLogin = () => { setAuthTab('login'); setAuthOpen(true); };
  const openSignup = () => { setAuthTab('signup'); setAuthOpen(true); };

  const handleLogout = () => {
    localStorage.removeItem('nexus_auth');
    setLoggedIn(false);
    window.dispatchEvent(new Event('nexus-auth-change'));
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav} role="navigation" aria-label="Main navigation">
          <Link href="/" className={styles.logo} aria-label="NEXUS Robotics – go to homepage">
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

          {/* Desktop links */}
          <ul className={styles.links} role="list">
            {siteContent.nav.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
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

          {/* CTA buttons */}
          <div className={styles.actions}>
            {loggedIn ? (
              <button
                type="button"
                className={styles.btnOutline}
                onClick={handleLogout}
              >
                Log out
              </button>
            ) : (
              <button
                type="button"
                className={styles.btnOutline}
                onClick={openLogin}
              >
                Log in
              </button>
            )}
            <Link href="/contact" className={styles.btnPrimary}>
              Book a Free Trial
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" className={styles.mobileMenu} role="dialog" aria-label="Navigation menu">
            <ul role="list" className={styles.mobileLinks}>
              {siteContent.nav.map((item) => {
                const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
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
              <li>
                {loggedIn ? (
                  <button
                    type="button"
                    className={styles.mobileCta}
                    onClick={() => { handleLogout(); setMenuOpen(false); }}
                  >
                    Log out
                  </button>
                ) : (
                  <button
                    type="button"
                    className={styles.mobileCta}
                    onClick={() => { openSignup(); setMenuOpen(false); }}
                  >
                    Sign up / Log in
                  </button>
                )}
              </li>
              <li>
                <Link href="/contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
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
