'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './SiteNotice.module.css';
import { trackInteraction } from '@/lib/analytics';

const STORAGE_KEY = 'nexus_wip_notice_seen';

export default function SiteNotice() {
  const [isOpen, setIsOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => closeBtnRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleClose = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    trackInteraction({ type: 'dismiss', label: 'site_notice', location: 'site-notice' });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="site-notice-title"
      aria-describedby="site-notice-body"
    >
      <div className={styles.modal}>
        <span className={styles.icon} aria-hidden="true">i</span>
        <h2 id="site-notice-title" className={styles.heading}>This is a test site</h2>
        <p id="site-notice-body" className={styles.body}>
          This website is a work in progress. None of the claims on this site are real —
          all content is placeholder text used for testing purposes only.
        </p>
        <button
          ref={closeBtnRef}
          type="button"
          className={styles.actionBtn}
          onClick={handleClose}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
