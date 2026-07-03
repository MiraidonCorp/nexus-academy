'use client';

import { useState } from 'react';
import Link from 'next/link';
import programmesContent from '@/lib/content/programmes.json';
import styles from './programmes.module.css';
import { trackButtonClick, trackInteraction } from '@/lib/analytics';

type AgeFilter = 'all' | '6-9' | '10-12' | '13-16';
type FormatFilter = 'all' | 'in-person' | 'online';

export default function ProgrammesClient() {
  const [ageFilter, setAgeFilter] = useState<AgeFilter>('all');
  const [formatFilter, setFormatFilter] = useState<FormatFilter>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = programmesContent.programmes.filter((p) => {
    const ageOk =
      ageFilter === 'all' ||
      (ageFilter === '6-9' && p.ageMin <= 9) ||
      (ageFilter === '10-12' && p.ageMax >= 10 && p.ageMin <= 12) ||
      (ageFilter === '13-16' && p.ageMax >= 13);
    const fmtOk = formatFilter === 'all' || p.formatKeys.includes(formatFilter);
    return ageOk && fmtOk;
  });

  const pill = (active: boolean) =>
    [styles.filterPill, active ? styles.filterPillActive : ''].join(' ');

  const selectAgeFilter = (v: AgeFilter) => {
    trackInteraction({ type: 'filter', label: v, location: 'programmes-age-filter' });
    setAgeFilter(v);
  };

  const selectFormatFilter = (v: FormatFilter) => {
    trackInteraction({ type: 'filter', label: v, location: 'programmes-format-filter' });
    setFormatFilter(v);
  };

  return (
    <>
      {/* FILTER BAR */}
      <div className={styles.filterBar} role="group" aria-label="Filter programmes">
        <div className={styles.filterInner}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel} id="age-filter-label">Age group</span>
            <div className={styles.filterPills} role="group" aria-labelledby="age-filter-label">
              {(['all', '6-9', '10-12', '13-16'] as AgeFilter[]).map((v) => (
                <button
                  key={v}
                  className={pill(ageFilter === v)}
                  onClick={() => selectAgeFilter(v)}
                  aria-pressed={ageFilter === v}
                >
                  {v === 'all' ? 'All ages' : v === '6-9' ? 'Ages 6–9' : v === '10-12' ? 'Ages 10–12' : 'Ages 13–16'}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.filterDivider} aria-hidden="true" />
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel} id="format-filter-label">Format</span>
            <div className={styles.filterPills} role="group" aria-labelledby="format-filter-label">
              {(['all', 'in-person', 'online'] as FormatFilter[]).map((v) => (
                <button
                  key={v}
                  className={pill(formatFilter === v)}
                  onClick={() => selectFormatFilter(v)}
                  aria-pressed={formatFilter === v}
                >
                  {v === 'all' ? 'All formats' : v === 'in-person' ? 'In-person' : 'Online'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PROGRAMME LIST */}
      <section className={styles.programmeList} aria-label="Filtered programmes" aria-live="polite">
        <div className={styles.sectionInner}>
          {filtered.length === 0 ? (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon} aria-hidden="true">🔍</span>
              <p>No programmes match this filter. Try a different age group or format.</p>
            </div>
          ) : (
            <div className={styles.progCards}>
              {filtered.map((prog, i) => {
                const reverse = i % 2 === 1;
                return (
                  <article
                    key={prog.id}
                    className={[styles.progCard, reverse ? styles.progCardReverse : ''].join(' ')}
                    style={{ borderTopColor: prog.accentColor }}
                  >
                    <div
                      className={styles.progCardVisual}
                      style={{ background: prog.headerBg }}
                      aria-hidden="true"
                    >
                      <div
                        className={styles.progCardGlow}
                        style={{ background: `radial-gradient(circle at center,${prog.glowColor} 0%,transparent 65%)` }}
                      />
                      <span className={styles.progCardEmoji}>{prog.heroIcon}</span>
                    </div>
                    <div className={styles.progCardContent}>
                      <div className={styles.cardBadges}>
                        <span
                          className={styles.pillarBadge}
                          style={{ color: prog.pillarColor, background: prog.pillarBg }}
                        >
                          {prog.pillar}
                        </span>
                        <span className={styles.tagBadge}>{prog.format}</span>
                        <span className={styles.tagBadge}>{prog.duration}</span>
                        <span className={styles.tagBadge}>{prog.sessionLength}</span>
                      </div>
                      <h2 className={styles.progCardTitle}>{prog.name}</h2>
                      <p className={styles.progCardSub} style={{ color: prog.pillarColor }}>
                        {prog.subtitle} · {prog.ageRange}
                      </p>
                      <p className={styles.progCardDesc}>{prog.description}</p>
                      <div className={styles.progCardDetails}>
                        <div>
                          <p className={styles.detailsLabel}>What kids learn</p>
                          <ul className={styles.skillsList} role="list">
                            {prog.skills.map((s) => (
                              <li key={s} className={styles.skillItem}>
                                <svg aria-hidden="true" width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ color: prog.pillarColor, flexShrink: 0 }}>
                                  <path d="M1.5 5.5l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className={styles.detailsLabel}>Programme details</p>
                          <ul className={styles.detailsList} role="list">
                            <li>📦 {prog.kit}</li>
                            <li>⭐ {prog.outcomes}</li>
                            <li>🏷️ Course fee: {prog.price}</li>
                          </ul>
                          <Link
                            href="/contact"
                            className={styles.enrollBtn}
                            onClick={() => trackButtonClick({ label: 'Enroll now', location: 'programmes-list', href: '/contact', programme: prog.name })}
                          >
                            Enroll now
                            <svg aria-hidden="true" width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5h8M7 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
