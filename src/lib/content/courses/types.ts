export type Block =
  | { type: 'paragraph'; text: string }
  | {
      type: 'steps';
      items: { icon?: string; eyebrow?: string; title: string; body: string; highlight?: boolean }[];
    }
  | { type: 'stats'; items: { value: string; label: string; highlight?: boolean }[] }
  | { type: 'card'; title: string; body: string; icon?: string }
  | { type: 'callout'; variant: 'info' | 'danger' | 'spark'; icon?: string; title: string; body: string }
  | { type: 'checklist'; title?: string; items: string[] }
  | { type: 'table'; caption?: string; columns: string[]; rows: string[][] }
  | { type: 'code'; caption?: string; code: string }
  | { type: 'tags'; items: { text: string; sub?: string }[] }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'heading'; text: string };

export type Section = {
  id: string;
  number: string;
  heading: string;
  subheading?: string;
  blocks: Block[];
};

export type GlossaryTerm = { term: string; body: string };
export type QuizItem = { question: string; answer: string };

export type TeacherAgendaItem = { time: string; title: string; body: string };
export type TeacherNoteGroup = { heading: string; items: string[] };

export type TeacherNotes = {
  sessionLength: string;
  agenda: TeacherAgendaItem[];
  prep: string[];
  noteGroups: TeacherNoteGroup[];
};

export type CourseModule = {
  slug: string;
  number: number | string;
  title: string;
  lede: string;
  sessionLabel: string;
  ageRange: string;
  duration: string;
  summary: string;
  goals: string[];
  emoji: string;
  accent: 'green' | 'amber' | 'purple' | 'blue';
  sections: Section[];
  glossary: GlossaryTerm[];
  quiz: QuizItem[];
  teacherNotes: TeacherNotes;
};
