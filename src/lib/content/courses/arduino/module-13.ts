import type { CourseModule } from '../types';

const module13: CourseModule = {
  slug: 'module-13',
  number: 13,
  title: 'Sensor Lab — Invent Your Own Project',
  lede:
    "The course is done — but the fun isn't. Pick a new sensor from the buffet, and design a machine that senses something *you* care about. This is where you become the inventor.",
  sessionLabel: 'Optional Session',
  ageRange: 'Ages 10–14',
  duration: '90 minutes',
  summary:
    'An open-ended lab where you pick any new sensor from a themed buffet, wire it up, and design your own sense-decide-do project.',
  goals: [
    '🍽️ Pick from the **sensor buffet**',
    '🔌 Add **any** new sensor',
    '🧩 Design a **sense→do** machine',
  ],
  emoji: '🔬',
  accent: 'amber',
  sections: [
    {
      id: 'idea',
      number: '1',
      heading: 'Every project is the same shape',
      subheading: 'You already know how to do all three parts.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "No matter how fancy a gadget looks, it's built from the loop you've used all course. Choosing a project just means choosing **what to sense** — you already know how to decide and act.",
        },
        {
          type: 'steps',
          items: [
            { icon: '👂', title: 'Sense', body: 'Read something real with a sensor.' },
            { icon: '🧠', title: 'Decide', body: '`if / else` on the reading.' },
            { icon: '💪', title: 'Do', body: 'Light, sound, servo, or a phone alert.' },
          ],
        },
      ],
    },
    {
      id: 'recipe',
      number: '2',
      heading: 'How to add any new sensor',
      subheading: 'The one skill that unlocks all of them.',
      blocks: [
        {
          type: 'paragraph',
          text: 'New sensor, same five questions. Answer these and you can wire up almost anything:',
        },
        {
          type: 'steps',
          items: [
            {
              eyebrow: 'Step 1',
              title: 'Is it 3.3 V-safe?',
              body:
                "Our board is a **3.3 V** world. If a sensor's output is 5 V, add a voltage divider or pick a 3.3 V version — just like the ultrasonic in Module 7.",
            },
            {
              eyebrow: 'Step 2',
              title: 'How does it "talk"?',
              body:
                '**Analog** (a 0–4095 number), **digital** (on/off), or a smart bus (**I²C / SPI**). This tells you which pins and commands to use.',
            },
            {
              eyebrow: 'Step 3',
              title: 'Does it need a library?',
              body:
                'Smart (I²C/SPI) sensors usually do — search the Library Manager for its name. Simple ones just use `analogRead`/`digitalRead`.',
            },
            {
              eyebrow: 'Step 4',
              title: 'Read it & print it',
              body:
                'First just `Serial.println()` the value and watch it change. Always understand the numbers before you act on them.',
            },
            {
              eyebrow: 'Step 5',
              title: 'Decide & do',
              body: "Add your `if` and an action. Done — you've built a new machine.",
            },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🔎',
          title: 'Wiring tells you the "talk" type',
          body:
            '**3 pins** (S·V·G) → usually analog or digital. **4 pins with SDA & SCL** → I²C. **6-ish pins with MOSI/MISO/SCK** → SPI. Remember the "mouth/ear/beat" pins from Module 2?',
        },
      ],
    },
    {
      id: 'buffet',
      number: '3',
      heading: 'The sensor buffet',
      subheading: 'A menu of sensors, each with a ready project idea. Pick one that excites you.',
      blocks: [
        { type: 'heading', text: '🏠 Home & Security' },
        {
          type: 'card',
          title: '🟢 Easy: PIR motion sensor',
          body: '**Intruder alarm** or auto light that reacts to movement. *Digital · check 3.3V.*',
        },
        {
          type: 'card',
          title: '🟢 Easy: Magnetic (reed) sensor',
          body: '**Door open/close detector** or a bike speedometer. *Digital.*',
        },
        {
          type: 'card',
          title: '🟢 Easy: Flame sensor',
          body: '**Candle / fire alert** — with adult supervision. *Digital · supervise.*',
        },
        { type: 'heading', text: '🤖 Otto Upgrades' },
        {
          type: 'card',
          title: '🟢 Easy: IR line / edge sensors',
          body: "**Line-following Otto**, or an edge sensor so he won't walk off a table. *Digital.*",
        },
        {
          type: 'card',
          title: '🟡 Medium: 8×8 LED matrix / OLED',
          body: 'Give Otto **expressive faces** or show messages. *I²C · needs a library.*',
        },
        {
          type: 'card',
          title: '🟢 Easy: Joystick module',
          body: 'Build your **own handheld controller** for Otto. *Analog.*',
        },
        { type: 'heading', text: '🌦️ Environment & Weather' },
        {
          type: 'card',
          title: '🟡 Medium: DHT11 / DHT22',
          body: '**Wireless weather station** — temperature & humidity on your phone. *Digital · needs a library.*',
        },
        {
          type: 'card',
          title: '🟢 Easy: Soil moisture sensor',
          body: '**Thirsty-plant alarm** that beeps when the soil is dry. *Analog.*',
        },
        {
          type: 'card',
          title: '🟢 Easy: Rain / water sensor',
          body: '**Rain alert** or a flood warning for the windowsill. *Analog.*',
        },
        {
          type: 'card',
          title: '🟡 Medium: Gas / air quality (MQ-2/135)',
          body: '**Air-quality monitor.** *Analog · 5V, heats up, ventilate.*',
        },
        { type: 'heading', text: '🎮 Fun & Games' },
        {
          type: 'card',
          title: '🟢 Easy: Built-in touch pins',
          body: '**A touch piano** — no extra part needed! (See below.) *Built-in.*',
        },
        {
          type: 'card',
          title: '🟡 Easy–Medium: Sound sensor / mic',
          body: '**Clap-to-move Otto** or sound-reactive lights. *Analog.*',
        },
        {
          type: 'card',
          title: '🟡 Medium: Accelerometer (MPU6050)',
          body: '**Tilt-to-steer controller** or a step counter. *I²C.*',
        },
        {
          type: 'card',
          title: '🟡 Medium: Color sensor (TCS34725)',
          body: '**Colour-guessing game** or a sorter. *I²C.*',
        },
        {
          type: 'card',
          title: '🔴 Medium–Hard: RFID reader (RC522)',
          body: '**Keycard lock** or a scan-to-play game. *SPI.*',
        },
        {
          type: 'card',
          title: '🟡 Medium: Gesture sensor (APDS-9960)',
          body: '**Wave your hand** to make Otto dance. *I²C.*',
        },
      ],
    },
    {
      id: 'touch',
      number: '4',
      heading: 'The freebie: a touch piano',
      subheading: 'Your board can sense touch with no extra parts at all.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "The ESP32-S3 has built-in **touch pins** — they feel when your finger is near. Pair that with the buzzer from Module 8 and you've got an instrument. Read a touch pin, and if it's touched, play a note:",
        },
        {
          type: 'code',
          caption: '🎹 TouchPiano.ino — a starter idea',
          code:
            '#define BUZZER D6\n\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int t = touchRead(A0);   // read a touch-capable pin\n  Serial.println(t);       // watch it change when you touch!\n\n  if (touchedNow(t)) {      // your own "is it touched?" check\n    tone(BUZZER, 330);     // play a note\n  } else {\n    noTone(BUZZER);\n  }\n  delay(50);\n}',
        },
        {
          type: 'callout',
          variant: 'danger',
          icon: '🧪',
          title: 'An honest heads-up',
          body:
            'Touch readings and which pins support touch **vary by board**, and the "touched" value can be higher or lower than resting. So **print the numbers first** (step 4 of the recipe!), see what "touched" looks like on your board, then write your own threshold check. That investigation *is* the lab.',
        },
      ],
    },
    {
      id: 'combine',
      number: '5',
      heading: 'Level it up: combine your powers',
      subheading: 'A new sensor is even better with what you already built.',
      blocks: [
        {
          type: 'steps',
          items: [
            { icon: '📱', eyebrow: '+ Wireless', title: '+ Wireless', body: "Show your sensor's reading live on your phone (Module 10)." },
            { icon: '🤖', eyebrow: '+ Otto', title: '+ Otto', body: 'Give Otto a brand-new sense — clap to dance, wave to walk.' },
            { icon: '🐍', eyebrow: '+ Python', title: '+ Python', body: 'Read and react to your sensor in MicroPython (Module 11).' },
          ],
        },
      ],
    },
    {
      id: 'design',
      number: '6',
      heading: 'Design your own project',
      subheading: 'Fill this in, then build it.',
      blocks: [
        {
          type: 'table',
          caption: 'Your project, in five prompts',
          columns: ['Prompt', 'What to figure out'],
          rows: [
            ['My idea', 'What problem or game?'],
            ['It SENSES', 'Which sensor + how it talks'],
            ['It DECIDES', 'The if/else rule'],
            ['It DOES', 'Light / sound / servo / phone'],
            ['3.3 V ok?', 'Safe, or needs a divider?'],
          ],
        },
        {
          type: 'steps',
          items: [
            { eyebrow: 'Step 1', title: 'Wire & read', body: 'Connect the sensor and print its values until you understand them.' },
            { eyebrow: 'Step 2', title: 'Add the decision', body: 'Write the `if` that turns a reading into an action.' },
            { eyebrow: 'Step 3', title: 'Demo it', body: 'Show someone, and explain your sense → decide → do loop.' },
          ],
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🚀',
          title: "This never ends — and that's the point",
          body:
            "Every gadget in the world is some version of what you just learned. You now have the skills to keep inventing, far beyond this course. Go build something nobody's thought of yet.",
        },
      ],
    },
  ],
  glossary: [
    { term: 'Analog sensor', body: 'Gives a smooth number (0–4095) — read with `analogRead`.' },
    { term: 'Digital sensor', body: 'Gives on/off — read with `digitalRead`.' },
    { term: 'I²C', body: 'A 2-wire bus (SDA + SCL) for smart sensors; usually needs a library.' },
    { term: 'SPI', body: 'A faster multi-wire bus (MOSI/MISO/SCK) for things like RFID.' },
    { term: 'Library', body: 'Ready-made code that teaches the board to talk to a sensor.' },
    { term: 'Touch pin', body: 'A built-in pin that senses your finger — no extra part.' },
    { term: 'Threshold', body: 'The cut-off number your `if` compares against.' },
    { term: 'Voltage divider', body: 'Two resistors that drop a 5 V output down to a safe 3.3 V.' },
  ],
  quiz: [
    {
      question: 'What are the three parts of every sensor project?',
      answer: '**Sense → Decide → Do.** Choosing a project is really just choosing what to sense.',
    },
    {
      question: "What's the very first thing to check about a new sensor?",
      answer: "Whether it's **3.3 V-safe** — our board can be harmed by a raw 5 V output.",
    },
    {
      question: 'Name the three ways a sensor might "talk."',
      answer: '**Analog** (0–4095), **digital** (on/off), or a smart bus (**I²C / SPI**).',
    },
    {
      question: 'Before acting on a sensor, what should you always do?',
      answer: '**Print the values** and watch them change, so you understand the numbers first.',
    },
    {
      question: '⭐ Which sensor needs no extra hardware at all?',
      answer: "The board's built-in **touch pins** — perfect for a touch piano.",
    },
  ],
  teacherNotes: {
    sessionLength: 'Flexible — one session, several, or an after-course club',
    agenda: [
      { time: 'Step 1', title: 'Choose a sensor', body: 'Browse the buffet and pick one that excites you.' },
      { time: 'Step 2', title: 'Plan sheet', body: 'Fill in the design worksheet — sense, decide, do, and the 3.3 V check.' },
      { time: 'Step 3', title: 'Wire & read', body: 'Connect the sensor and print raw values before writing any logic.' },
      { time: 'Step 4', title: 'Decide & do', body: 'Add the if/else and the action it triggers.' },
      { time: 'Step 5', title: 'Demo', body: 'Show it off and explain the sense → decide → do loop.' },
    ],
    prep: [
      'Stock a few easy analog/digital sensors (soil, sound, PIR, reed) for guaranteed wins, plus one or two I²C modules (MPU6050, OLED) for keen kids.',
      'Flag the 5 V parts (some PIR/gas modules): use a divider on their output, and supervise gas/flame sensors — they heat up and involve open flame to test.',
      'Many "modules" are already 3.3 V-friendly on their signal pin, but check each one — make it a class habit.',
    ],
    noteGroups: [
      {
        heading: 'Format',
        items: [
          'Choose a sensor → plan sheet → wire & read → decide & do → demo.',
          'Best outcome: kids apply the 5-step recipe to a sensor you never taught directly.',
        ],
      },
      {
        heading: 'Teaching tips',
        items: [
          'Teach the recipe, not the sensor. The win is that kids can read a datasheet snippet, print values, and figure it out — the exact part matters less.',
          'Print first, always. Model reading raw values before writing any `if`. The touch-pin example is built around this on purpose.',
          'Encourage combining with wireless, Otto, or Python so earlier modules stay alive.',
          'Keep a gallery of finished projects to inspire the next cohort.',
        ],
      },
    ],
  },
};

export default module13;
