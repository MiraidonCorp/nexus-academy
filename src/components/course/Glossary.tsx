import type { GlossaryTerm } from '@/lib/content/courses/types';
import Inline from './Inline';
import styles from './lesson.module.css';

export default function Glossary({ terms }: { terms: GlossaryTerm[] }) {
  return (
    <div>
      <p className={styles.asideEyebrow}>Word bank</p>
      <h2 className={styles.asideHeading}>Your new robotics vocabulary</h2>
      <dl className={styles.glossary}>
        {terms.map((t) => (
          <div key={t.term} className={styles.glossTerm}>
            <dt>{t.term}</dt>
            <dd>
              <Inline text={t.body} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
