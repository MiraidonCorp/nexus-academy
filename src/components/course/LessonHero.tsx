import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import { localizedPath } from '@/lib/i18n/paths';
import type { CourseModule } from '@/lib/content/courses/types';
import Inline from './Inline';
import styles from './lesson.module.css';

export default function LessonHero({ mod, locale }: { mod: CourseModule; locale: Locale }) {
  return (
    <section className={styles.hero} aria-labelledby="lesson-heading">
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.heroInner}>
        <p className={styles.crumb}>
          <Link href={localizedPath(locale, '/courses/arduino')} className={styles.crumbLink}>
            Arduino Course
          </Link>
          <span className={styles.crumbSep}>·</span>
          <span className={styles.crumbCurrent}>Module {mod.number}</span>
          <span className={styles.crumbSep}>·</span>
          <span>{mod.sessionLabel}</span>
          <span className={styles.crumbSep}>·</span>
          <span>{mod.ageRange}</span>
        </p>
        <div className={styles.heroGrid}>
          <div>
            <h1 id="lesson-heading" className={styles.heroTitle}>
              {mod.title}
            </h1>
            <p className={styles.heroLede}>
              <Inline text={mod.lede} />
            </p>
          </div>
          <span className={styles.heroEmoji} aria-hidden="true">
            {mod.emoji}
          </span>
        </div>
        <div className={styles.goals}>
          <span className={styles.goal}>By the end you can&hellip;</span>
          {mod.goals.map((goal) => (
            <span key={goal} className={styles.goal}>
              <Inline text={goal} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
