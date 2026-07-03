'use client';

import { useState } from 'react';
import styles from './TrialForm.module.css';

interface FormState {
  name: string;
  email: string;
  childAge: string;
  interest: string;
}

export default function TrialForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', childAge: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success} role="alert" aria-live="polite">
        <div className={styles.successIcon} aria-hidden="true">✓</div>
        <h3 className={styles.successHeading}>You&apos;re on the list.</h3>
        <p className={styles.successBody}>
          We&apos;ll be in touch within 24 hours to confirm your free trial. Bring curiosity — we&apos;ll handle the rest.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      noValidate
      aria-label="Book a free trial class"
    >
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="trial-name" className={styles.label}>
            Your name <span className={styles.required} aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="trial-name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Sarah Kim"
            className={styles.input}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'trial-name-error' : undefined}
            autoComplete="name"
          />
          {errors.name && (
            <span id="trial-name-error" className={styles.error} role="alert">{errors.name}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="trial-email" className={styles.label}>
            Email address <span className={styles.required} aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="trial-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            className={styles.input}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'trial-email-error' : undefined}
            autoComplete="email"
          />
          {errors.email && (
            <span id="trial-email-error" className={styles.error} role="alert">{errors.email}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="trial-age" className={styles.label}>Child&apos;s age</label>
          <input
            id="trial-age"
            type="number"
            min="4"
            max="18"
            value={form.childAge}
            onChange={(e) => setForm({ ...form, childAge: e.target.value })}
            placeholder="e.g. 9"
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="trial-interest" className={styles.label}>Programme of interest</label>
          <select
            id="trial-interest"
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
            className={styles.select}
          >
            <option value="">Select a programme…</option>
            <option value="spike">LEGO Spike Prime</option>
            <option value="fll">FLL Competition Track</option>
            <option value="microbit">Micro:bit Coding</option>
            <option value="html">HTML Basics</option>
            <option value="ai">AI for Kids</option>
            <option value="robot">Custom Robot Build</option>
          </select>
        </div>
      </div>

      <button type="submit" className={styles.submit}>
        Book my free trial class
      </button>
      <p className={styles.disclaimer}>
        No payment required. We&apos;ll confirm by email within 24 hours.
      </p>
    </form>
  );
}
