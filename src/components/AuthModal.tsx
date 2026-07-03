'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './AuthModal.module.css';
import { trackButtonClick, trackInteraction, trackLogin, trackSignUp } from '@/lib/analytics';

type Tab = 'login' | 'signup';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: Tab;
}

export default function AuthModal({ isOpen, onClose, initialTab = 'login' }: AuthModalProps) {
  const [tab, setTab] = useState<Tab>(initialTab);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { setTab(initialTab); }, [initialTab]);

  // Focus trap & restore
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.activeElement as HTMLElement;
    // delay so element is mounted
    const t = setTimeout(() => firstFocusRef.current?.focus(), 50);
    return () => {
      clearTimeout(t);
      prev?.focus();
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const validate = () => {
    const e: typeof errors = {};
    if (tab === 'signup' && !name.trim()) e.name = 'Name is required';
    if (!email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email';
    if (!password) e.password = 'Password is required';
    else if (password.length < 8) e.password = 'Password must be at least 8 characters';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    if (tab === 'signup') {
      trackSignUp({ method: 'email', location: 'auth-modal' });
    } else {
      trackLogin({ method: 'email', location: 'auth-modal' });
    }
    localStorage.setItem('nexus_auth', JSON.stringify({ loggedIn: true, ts: Date.now() }));
    window.dispatchEvent(new Event('nexus-auth-change'));
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const switchTab = (t: Tab) => {
    trackInteraction({ type: 'tab_switch', label: t, location: 'auth-modal' });
    setTab(t); setErrors({});
  };

  const handleSocialAuth = (provider: 'google' | 'github') => {
    trackButtonClick({ label: `Continue with ${provider === 'google' ? 'Google' : 'GitHub'}`, location: 'auth-modal' });
    alert(`${provider === 'google' ? 'Google' : 'GitHub'} OAuth requires backend integration.`);
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div className={styles.modal} ref={modalRef}>
        <button
          ref={firstFocusRef}
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {/* Header */}
        <div className={styles.header}>
          <Image src="/images/nexus-logo.svg" alt="" width={44} height={44} aria-hidden="true" />
          <div id="auth-modal-title" className={styles.logoName}>NEXUS</div>
          <div className={styles.logoSub}>Institute of STEM &amp; Robotics</div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs} role="tablist" aria-label="Authentication options">
          <button
            role="tab"
            aria-selected={tab === 'login'}
            aria-controls="auth-panel"
            className={[styles.tab, tab === 'login' ? styles.tabActive : ''].join(' ')}
            onClick={() => switchTab('login')}
          >
            Log in
          </button>
          <button
            role="tab"
            aria-selected={tab === 'signup'}
            aria-controls="auth-panel"
            className={[styles.tab, tab === 'signup' ? styles.tabActive : ''].join(' ')}
            onClick={() => switchTab('signup')}
          >
            Sign up
          </button>
        </div>

        <div id="auth-panel" role="tabpanel">
          {/* Social */}
          <div className={styles.social}>
            <button
              type="button"
              className={styles.socialBtn}
              onClick={() => handleSocialAuth('google')}
            >
              <GoogleIcon />
              Continue with Google
            </button>
            <button
              type="button"
              className={styles.socialBtn}
              onClick={() => handleSocialAuth('github')}
            >
              <GitHubIcon />
              Continue with GitHub
            </button>
          </div>

          <div className={styles.divider} aria-hidden="true">
            <span />
            <span className={styles.dividerText}>or</span>
            <span />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate aria-label={tab === 'login' ? 'Log in form' : 'Sign up form'}>
            <div className={styles.fields}>
              {tab === 'signup' && (
                <div className={styles.field}>
                  <label htmlFor="auth-name" className={styles.label}>Full name</label>
                  <input
                    id="auth-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={[styles.input, errors.name ? styles.inputError : ''].join(' ')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'auth-name-err' : undefined}
                    autoComplete="name"
                  />
                  {errors.name && <span id="auth-name-err" className={styles.fieldError} role="alert">{errors.name}</span>}
                </div>
              )}
              <div className={styles.field}>
                <label htmlFor="auth-email" className={styles.label}>Email</label>
                <input
                  id="auth-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={[styles.input, errors.email ? styles.inputError : ''].join(' ')}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'auth-email-err' : undefined}
                  autoComplete="email"
                />
                {errors.email && <span id="auth-email-err" className={styles.fieldError} role="alert">{errors.email}</span>}
              </div>
              <div className={styles.field}>
                <label htmlFor="auth-password" className={styles.label}>Password</label>
                <input
                  id="auth-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={[styles.input, errors.password ? styles.inputError : ''].join(' ')}
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? 'auth-pass-err' : undefined}
                  autoComplete={tab === 'login' ? 'current-password' : 'new-password'}
                  minLength={8}
                />
                {errors.password && <span id="auth-pass-err" className={styles.fieldError} role="alert">{errors.password}</span>}
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              {tab === 'login' ? 'Log in' : 'Create account'}
            </button>
          </form>

          <p className={styles.switchNote}>
            {tab === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              className={styles.switchLink}
              onClick={() => switchTab(tab === 'login' ? 'signup' : 'login')}
            >
              {tab === 'login' ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#2C2C2A" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}
