import type { CourseModule } from '../types';

const module12: CourseModule = {
  slug: 'module-12',
  number: 12,
  title: 'The Otto Showcase',
  lede:
    "The last session. Design a routine that shows off everything Otto can do, perform it, and explain — in your own words — how your robot senses, thinks, and acts.",
  sessionLabel: 'Session 20 · Capstone',
  ageRange: 'Ages 10–14',
  duration: '90 minutes',
  summary:
    'Design, rehearse, and perform an Otto showcase routine, then explain the sense-think-act loop and earn your certificate.',
  goals: [
    '🎨 **Design** your routine',
    '🎬 **Perform** it',
    '🗣️ **Explain** the loop',
    '🏅 **Celebrate!**',
  ],
  emoji: '🏆',
  accent: 'amber',
  sections: [
    {
      id: 'toolbox',
      number: '1',
      heading: 'Your toolbox — look what you can do',
      subheading: 'Every one of these is a power you earned. Mix and match for your show.',
      blocks: [
        {
          type: 'tags',
          items: [
            { text: '💡 Lights', sub: 'M3–4' },
            { text: '🔘 Buttons & choices', sub: 'M5' },
            { text: '🎚️ Dial & dimming', sub: 'M6' },
            { text: '🔦 Light sensor', sub: 'M7' },
            { text: '👀 Distance eyes', sub: 'M7' },
            { text: '🦿 Servos / walk', sub: 'M8–9' },
            { text: '🎵 Buzzer / sing', sub: 'M8' },
            { text: '🕺 Dances', sub: 'M9' },
            { text: '😄 Moods', sub: 'M9' },
            { text: '🤖 Avoid obstacles', sub: 'M10' },
            { text: '📱 Phone control', sub: 'M10' },
            { text: '🐍 Python', sub: 'M11' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🌟',
          title: "You don't need all of them",
          body:
            'A great show picks a **few** powers and links them with a story. Two or three, done well, beats a jumble of everything.',
        },
      ],
    },
    {
      id: 'plan',
      number: '2',
      heading: 'Plan your show',
      subheading: 'Every performer needs a plan. Fill this in first.',
      blocks: [
        {
          type: 'table',
          caption: 'Your show, in five prompts',
          columns: ['Prompt', 'What to figure out'],
          rows: [
            ['Theme', 'The story or vibe'],
            ["Powers I'll use", 'Pick 2–4 from your toolbox'],
            ['The opening', 'How the show starts'],
            ['The middle', 'The main trick or moment'],
            ['The finale', 'The big finish'],
          ],
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '💡',
          title: 'Theme ideas to spark you',
          body:
            'A robot lullaby · a superhero rescue · a grumpy wake-up · a dance battle · a maze explorer · a guard bot that beeps at intruders · a phone-driven obstacle race.',
        },
      ],
    },
    {
      id: 'loop',
      number: '3',
      heading: 'Show the loop',
      subheading: 'The one thing every judge wants to see: Sense → Think → Act.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Whatever your show does, be ready to point out the **robot loop** inside it. Here's an example, broken into its three parts:",
        },
        {
          type: 'steps',
          items: [
            { icon: '👀', eyebrow: 'Sense', title: 'Distance', body: '"Otto measures how far the wall is with his ultrasonic eyes."' },
            { icon: '🧠', eyebrow: 'Think', title: 'Decide', body: '"If it\'s closer than 15 cm, he decides to turn instead of crash."' },
            { icon: '🦿', eyebrow: 'Act', title: 'Move', body: '"He beeps, backs up, and turns — then I take over with my phone."', highlight: true },
          ],
        },
        {
          type: 'paragraph',
          text:
            'If you can say your show in this `sense → think → act` shape, you truly understand your robot.',
        },
      ],
    },
    {
      id: 'rehearse',
      number: '4',
      heading: 'Build & rehearse',
      subheading: 'A little practice makes show day smooth.',
      blocks: [
        {
          type: 'steps',
          items: [
            { eyebrow: 'Step 1', title: 'Build in pieces', body: "Get one part working, then add the next. Don't wire and code everything at once." },
            { eyebrow: 'Step 2', title: 'Re-calibrate', body: 'Check Otto still stands straight and his trims are good before you perform.' },
            { eyebrow: 'Step 3', title: 'Time it', body: 'Aim for a tidy 20–60 seconds. Short and clear beats long and messy.' },
            { eyebrow: 'Step 4', title: 'Have a backup', body: 'If phone control is flaky (Wi-Fi!), have an auto-mode version ready to run.' },
          ],
        },
      ],
    },
    {
      id: 'present',
      number: '5',
      heading: 'Present it',
      subheading: 'Tell the audience what they’re seeing.',
      blocks: [
        {
          type: 'paragraph',
          text: 'A demo is twice as good when you explain it. Cover these four things in a sentence or two each:',
        },
        {
          type: 'checklist',
          items: [
            '**What it does** — the story or trick, in one line.',
            '**The loop** — what it senses, decides, and does.',
            '**The hard part** — something that was tricky and how you fixed it.',
            "**What's next** — one thing you'd add with more time.",
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🗣️',
          title: "Nervous? That's normal",
          body:
            "Everyone is. Let Otto do the work — start him, then talk. If something goes wrong, explaining *why* is impressive too. Real engineers debug in public all the time.",
        },
      ],
    },
    {
      id: 'reflect',
      number: '6',
      heading: 'Reflect — how did it go?',
      subheading: 'No scary test. Just an honest look back.',
      blocks: [
        {
          type: 'checklist',
          items: [
            "My show **worked** (or I can explain what didn't and why).",
            "I can explain my robot's **sense → think → act** loop.",
            'My partner and I **solved a problem** together.',
            'I added something **creative** that was my own idea.',
            "I'm proud of **one thing** I built in this course.",
          ],
        },
      ],
    },
    {
      id: 'certificate',
      number: '7',
      heading: 'Your certificate',
      subheading: 'Print this page, write your name, and take a bow.',
      blocks: [
        {
          type: 'card',
          icon: '🏅',
          title: 'Certificate of Completion — Robotics with the ESP32-S3 Nano, featuring Otto',
          body:
            'This certifies that **you** have designed, wired, coded, and brought to life a real **autonomous, wireless robot** — mastering circuits, sensors, servos, sound, the **Otto** build, wireless control, and **two programming languages**. Sense → Think → Act, achieved.',
        },
        {
          type: 'paragraph',
          text: 'Print the certificate page, have your instructor sign and date it, and take a bow — you earned it.',
        },
      ],
    },
  ],
  glossary: [],
  quiz: [
    {
      question: 'What three parts should every robot demo show?',
      answer: '**Sense → Think → Act** — what it senses, what it decides, what it does.',
    },
    {
      question: 'How long should a good showcase routine be?',
      answer: 'Short and clear — about **20–60 seconds**. Tidy beats long.',
    },
    {
      question: 'Why keep an auto-mode backup ready?',
      answer: 'Phone/Wi-Fi control can be flaky in a room full of devices; a backup keeps the show going.',
    },
    {
      question: "Something breaks mid-demo — what's the pro move?",
      answer: "Explain **why** it happened. Debugging in public is real engineering, and it's impressive.",
    },
  ],
  teacherNotes: {
    sessionLength: '90 minutes',
    agenda: [
      { time: 'First third', title: 'Plan & storyboard', body: 'Plan sheets, pick powers, storyboard the routine.' },
      { time: 'Middle third', title: 'Build & rehearse', body: 'Build, rehearse, calibrate, time the run.' },
      { time: 'Last third', title: 'Perform & celebrate', body: 'Performances, explanations, certificates, applause.' },
    ],
    prep: [
      'Set up a clear stage — a taped floor course helps auto-mode demos — with a queue order for presenters.',
      'Have a reliable network ready (a dedicated hotspot) and a shared spares box.',
      'Print the certificate page for each student (it starts on a fresh page).',
      "Invite families if you can — it's a celebration session.",
    ],
    noteGroups: [
      {
        heading: 'Running the showcase',
        items: [
          "Ask every presenter to name their **sense → think → act** loop — that's the learning outcome, not polish.",
        ],
      },
      {
        heading: 'Assessment (kind & simple)',
        items: [
          'Use the reflection checklist as a self- and peer-assessment. Credit **explanation and problem-solving**, not just a flawless run.',
          'Celebrate creativity and teamwork loudly; every child should leave with a win to name.',
        ],
      },
      {
        heading: 'Certificates',
        items: [
          "Add each child's name, sign, and date on their printed certificate.",
          'Consider a small "specialty" label — Best Debugger, Most Creative, Smoothest Walker — so everyone is celebrated for something specific.',
        ],
      },
    ],
  },
};

export default module12;
