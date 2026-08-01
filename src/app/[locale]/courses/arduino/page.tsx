import type { Metadata } from 'next';
import TrackedLink from '@/components/TrackedLink';
import { isValidLocale } from '@/lib/i18n/config';
import { localeAlternates } from '@/lib/i18n/metadata';
import { arduinoModules } from '@/lib/content/courses/arduino';
import type { CourseModule } from '@/lib/content/courses/types';
import styles from './arduino.module.css';

const accentColor: Record<CourseModule['accent'], string> = {
  green: 'var(--color-green)',
  amber: 'var(--color-amber)',
  purple: 'var(--color-purple)',
  blue: 'var(--color-blue)',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};

  return {
    title: 'Arduino Course',
    description:
      'A 13-module hands-on Arduino course for ages 10-14: meet the ESP32-S3 Nano, wire circuits, code in C++ and MicroPython, and build a walking robot named Otto.',
    alternates: localeAlternates(localeParam, '/courses/arduino'),
  };
}

export default async function ArduinoCoursePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return null;

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Arduino Course: ESP32-S3 Nano & Otto Robotics',
    description:
      'A 13-module hands-on Arduino course covering electronics, C++ programming, sensors, and building a walking robot.',
    provider: { '@type': 'Organization', name: 'NEXUS Institute of STEM & Robotics' },
    hasCourseInstance: arduinoModules.map((m) => ({
      '@type': 'CourseInstance',
      name: `Module ${m.number}: ${m.title}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* HERO */}
      <section className={styles.hero} aria-labelledby="course-heading">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div>
            <p className={styles.eyebrow}>Courses · Robotics track</p>
            <h1 id="course-heading" className={styles.heroHeading}>Arduino Course</h1>
            <p className={styles.heroBody}>
              13 hands-on sessions that take kids from &ldquo;what&rsquo;s a microcontroller?&rdquo; to building and coding
              a walking, talking robot named <strong>Otto</strong> — wired, programmed, and wireless.
            </p>
            <div className={styles.heroMeta}>
              <span className={styles.heroMetaItem}>🧩 13 modules</span>
              <span className={styles.heroMetaItem}>👦 Ages 10–14</span>
              <span className={styles.heroMetaItem}>⏱️ 90 min sessions</span>
              <span className={styles.heroMetaItem}>🤖 Build-your-own Otto robot</span>
            </div>
          </div>
          <TrackedLink href="/contact" className={styles.heroCta} label="Book a free trial" location="arduino-course-hero">
            Book a free trial
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </TrackedLink>
        </div>
      </section>

      {/* SYLLABUS */}
      <section className={styles.syllabus} aria-labelledby="syllabus-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrowGreen}>Full syllabus</p>
            <h2 id="syllabus-heading" className={styles.heading}>13 modules, one robot</h2>
            <p className={styles.sectionBody}>
              Each module is a full lesson — goals, hands-on activities, a glossary, a quick check, and notes for the teacher.
            </p>
          </div>
          <div className={styles.moduleGrid}>
            {arduinoModules.map((mod) => (
              <TrackedLink
                key={mod.slug}
                href={`/courses/arduino/${mod.slug}`}
                className={styles.moduleCard}
                style={{ borderTopColor: accentColor[mod.accent] }}
                label={`Module ${mod.number}: ${mod.title}`}
                location="arduino-course-syllabus"
              >
                <div className={styles.moduleCardTop}>
                  <span className={styles.moduleNum} style={{ color: accentColor[mod.accent] }}>Module {mod.number}</span>
                  <span className={styles.moduleEmoji} aria-hidden="true">{mod.emoji}</span>
                </div>
                <p className={styles.moduleTitle}>{mod.title}</p>
                <p className={styles.moduleSummary}>{mod.summary}</p>
                <div className={styles.moduleMeta}>
                  <span className={styles.moduleTag}>{mod.sessionLabel}</span>
                  <span className={styles.moduleTag}>{mod.duration}</span>
                </div>
                <span className={styles.moduleLink}>
                  View lesson
                  <svg aria-hidden="true" width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5h8M7 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </TrackedLink>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT KIDS BUILD */}
      <section className={styles.buildSection} aria-labelledby="build-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrowGreen}>What kids walk away with</p>
            <h2 id="build-heading" className={styles.heading}>From first circuit to a walking robot</h2>
          </div>
          <div className={styles.buildGrid}>
            <div className={styles.buildCard}>
              <div className={styles.buildIcon}>⚡</div>
              <p className={styles.buildTitle}>Real electronics</p>
              <p className={styles.buildBody}>Breadboards, LEDs, resistors, buttons, sensors — wired by hand, safely.</p>
            </div>
            <div className={styles.buildCard}>
              <div className={styles.buildIcon}>💻</div>
              <p className={styles.buildTitle}>Real code</p>
              <p className={styles.buildBody}>C++ on the Arduino IDE, then a first taste of Python with MicroPython.</p>
            </div>
            <div className={styles.buildCard}>
              <div className={styles.buildIcon}>🤖</div>
              <p className={styles.buildTitle}>A robot of their own</p>
              <p className={styles.buildBody}>Otto — a servo-legged robot that walks, senses, and takes Wi-Fi commands.</p>
            </div>
            <div className={styles.buildCard}>
              <div className={styles.buildIcon}>🏆</div>
              <p className={styles.buildTitle}>A capstone showcase</p>
              <p className={styles.buildBody}>The course ends with a self-directed sensor lab and an Otto showcase demo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaHeading}>Ready for your child to meet Otto?</h2>
          <p className={styles.ctaBody}>
            Book a free trial session and see the first module live — no experience needed, just curiosity.
          </p>
          <TrackedLink href="/contact" className={styles.heroCta} label="Book a free trial" location="arduino-course-cta">
            Book a free trial
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </TrackedLink>
        </div>
      </section>
    </>
  );
}
