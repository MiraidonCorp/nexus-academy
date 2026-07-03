'use client';

import { useState } from 'react';
import contactContent from '@/lib/content/contact.json';
import styles from './contact.module.css';

interface FormState {
  name: string;
  email: string;
  phone: string;
  childAge: string;
  interest: string;
  location: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', childAge: '', interest: '', location: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

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
      <div className={styles.formSuccess} role="alert" aria-live="polite">
        <div className={styles.successIcon} aria-hidden="true">✓</div>
        <h2 className={styles.successHeading}>{contactContent.form.successHeading}</h2>
        <p className={styles.successBody}>{contactContent.form.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate aria-label="Contact form">
      <h2 className={styles.formHeading}>{contactContent.form.heading}</h2>
      <p className={styles.formNote}>
        Fields marked <span aria-hidden="true" className={styles.required}>*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="cf-name" className={styles.label}>
            Your name <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            value={form.name}
            onChange={set('name')}
            placeholder="e.g. Sarah Kim"
            className={[styles.input, errors.name ? styles.inputError : ''].join(' ')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'cf-name-err' : undefined}
            autoComplete="name"
          />
          {errors.name && <span id="cf-name-err" className={styles.fieldError} role="alert">{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="cf-email" className={styles.label}>
            Email address <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            value={form.email}
            onChange={set('email')}
            placeholder="you@example.com"
            className={[styles.input, errors.email ? styles.inputError : ''].join(' ')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
            autoComplete="email"
          />
          {errors.email && <span id="cf-email-err" className={styles.fieldError} role="alert">{errors.email}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="cf-phone" className={styles.label}>Phone number</label>
          <input
            id="cf-phone"
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            placeholder="+61 4xx xxx xxx"
            className={styles.input}
            autoComplete="tel"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="cf-age" className={styles.label}>Child&apos;s age</label>
          <input
            id="cf-age"
            type="number"
            min="4"
            max="18"
            value={form.childAge}
            onChange={set('childAge')}
            placeholder="e.g. 9"
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="cf-interest" className={styles.label}>Programme of interest</label>
          <select id="cf-interest" value={form.interest} onChange={set('interest')} className={styles.select}>
            <option value="">Select a programme…</option>
            {contactContent.form.programmes.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="cf-format" className={styles.label}>Preferred format</label>
          <select id="cf-format" value={form.location} onChange={set('location')} className={styles.select}>
            <option value="">Select…</option>
            {contactContent.form.formats.map((f) => (
              <option key={f.value} value={f.value}>{f.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-message" className={styles.label}>Message or question</label>
        <textarea
          id="cf-message"
          value={form.message}
          onChange={set('message')}
          placeholder="Tell us a bit about your child, any prior experience, or questions you have…"
          className={styles.textarea}
          rows={4}
        />
      </div>

      <button type="submit" className={styles.submitBtn}>
        Send enquiry &amp; book my free trial
      </button>
      <p className={styles.formDisclaimer}>{contactContent.form.disclaimer}</p>
    </form>
  );
}
