import type { TeacherNotes as TeacherNotesType } from '@/lib/content/courses/types';
import Inline from './Inline';
import styles from './lesson.module.css';

export default function TeacherNotes({ notes }: { notes: TeacherNotesType }) {
  return (
    <div className={styles.teacher}>
      <p className={styles.asideEyebrow}>For the teacher</p>
      <h2 className={styles.asideHeading} style={{ marginBottom: 0 }}>
        Running this session
      </h2>
      <p className={styles.teacherIntro}>Suggested length: {notes.sessionLength}.</p>

      <div className={styles.agenda}>
        {notes.agenda.map((item) => (
          <div key={item.title} className={styles.agendaItem}>
            <p className={styles.agendaTime}>{item.time}</p>
            <p className={styles.agendaTitle}>{item.title}</p>
            <p className={styles.agendaBody}>{item.body}</p>
          </div>
        ))}
      </div>

      <h3 className={styles.teacherSubhead}>Prep before class</h3>
      <ul className={styles.teacherList}>
        {notes.prep.map((item, i) => (
          <li key={i}>
            <Inline text={item} />
          </li>
        ))}
      </ul>

      {notes.noteGroups.map((group) => (
        <div key={group.heading}>
          <h3 className={styles.teacherSubhead}>{group.heading}</h3>
          <ul className={styles.teacherList}>
            {group.items.map((item, i) => (
              <li key={i}>
                <Inline text={item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
