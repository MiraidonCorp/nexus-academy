import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { isValidLocale, type Locale } from '@/lib/i18n/config';
import { localeAlternates } from '@/lib/i18n/metadata';
import { localizedPath } from '@/lib/i18n/paths';
import { arduinoModules, getArduinoModule, getAdjacentModules } from '@/lib/content/courses/arduino';
import LessonHero from '@/components/course/LessonHero';
import Blocks from '@/components/course/Blocks';
import Glossary from '@/components/course/Glossary';
import QuizAccordion from '@/components/course/QuizAccordion';
import TeacherNotes from '@/components/course/TeacherNotes';
import styles from '@/components/course/lesson.module.css';

export function generateStaticParams() {
  return arduinoModules.map((m) => ({ module: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; module: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, module: moduleSlug } = await params;
  if (!isValidLocale(localeParam)) return {};

  const mod = getArduinoModule(moduleSlug);
  if (!mod) return {};

  return {
    title: `Module ${mod.number} — ${mod.title}`,
    description: mod.summary,
    alternates: localeAlternates(localeParam, `/courses/arduino/${mod.slug}`),
  };
}

export default async function ArduinoModulePage({
  params,
}: {
  params: Promise<{ locale: string; module: string }>;
}) {
  const { locale: localeParam, module: moduleSlug } = await params;
  if (!isValidLocale(localeParam)) return null;
  const locale: Locale = localeParam;

  const mod = getArduinoModule(moduleSlug);
  if (!mod) notFound();

  const { prev, next } = getAdjacentModules(moduleSlug);

  const lessonSchema = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: `Module ${mod.number} — ${mod.title}`,
    description: mod.summary,
    educationalLevel: mod.ageRange,
    isPartOf: {
      '@type': 'Course',
      name: 'Arduino Course: ESP32-S3 Nano & Otto Robotics',
      provider: { '@type': 'Organization', name: 'NEXUS Institute of STEM & Robotics' },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lessonSchema) }}
      />

      <LessonHero mod={mod} locale={locale} />

      <div className={styles.body}>
        <div className={styles.bodyInner}>
          {mod.sections.map((section) => (
            <section key={section.id} id={section.id} className={styles.section} aria-labelledby={`${section.id}-heading`}>
              <div className={styles.secHead}>
                <span className={styles.secNum} aria-hidden="true">{section.number}</span>
                <h2 id={`${section.id}-heading`} className={styles.secHeading}>{section.heading}</h2>
              </div>
              {section.subheading && <p className={styles.secSub}>{section.subheading}</p>}
              <div className={styles.blocks}>
                <Blocks blocks={section.blocks} />
              </div>
            </section>
          ))}

          {mod.glossary.length > 0 && (
            <section aria-labelledby="glossary-heading">
              <Glossary terms={mod.glossary} />
            </section>
          )}

          {mod.quiz.length > 0 && (
            <section aria-labelledby="quiz-heading">
              <QuizAccordion items={mod.quiz} />
            </section>
          )}

          <section aria-labelledby="teacher-heading">
            <TeacherNotes notes={mod.teacherNotes} />
          </section>
        </div>

        <nav className={styles.moduleNav} aria-label="Module navigation">
          {prev ? (
            <Link href={localizedPath(locale, `/courses/arduino/${prev.slug}`)} className={styles.navLink}>
              <p className={styles.navLabel}>← Previous</p>
              <p className={styles.navTitle}>Module {prev.number}: {prev.title}</p>
            </Link>
          ) : (
            <Link href={localizedPath(locale, '/courses/arduino')} className={styles.navLink}>
              <p className={styles.navLabel}>← Back to</p>
              <p className={styles.navTitle}>Course overview</p>
            </Link>
          )}
          {next && (
            <Link href={localizedPath(locale, `/courses/arduino/${next.slug}`)} className={[styles.navLink, styles.navLinkNext].join(' ')}>
              <p className={styles.navLabel}>Next →</p>
              <p className={styles.navTitle}>Module {next.number}: {next.title}</p>
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}
