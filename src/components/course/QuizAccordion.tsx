import type { QuizItem } from '@/lib/content/courses/types';
import Inline from './Inline';
import styles from './lesson.module.css';

export default function QuizAccordion({ items }: { items: QuizItem[] }) {
  return (
    <div>
      <p className={styles.asideEyebrow}>Quick check</p>
      <h2 className={styles.asideHeading}>Explain it back</h2>
      <div className={styles.quiz}>
        {items.map((q) => (
          <details key={q.question} className={styles.quizItem}>
            <summary>
              <Inline text={q.question} />
            </summary>
            <p className={styles.quizAnswer}>
              <Inline text={q.answer} />
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
