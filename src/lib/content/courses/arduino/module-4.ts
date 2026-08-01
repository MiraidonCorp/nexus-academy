import type { CourseModule } from '../types';

const module4: CourseModule = {
  slug: 'module-4',
  number: 4,
  title: 'Talking to the Chip',
  lede:
    "Last time you wired an LED to pin D2. Today you write the code that brings it to life — your first real program, and the moment the brain starts listening to *you*.",
  sessionLabel: 'Sessions 4–5',
  ageRange: 'Ages 10–14',
  duration: '2 × 90 minutes',
  summary:
    'Set up the Arduino IDE, write your first sketch, and make an LED blink — then spell SOS in Morse code.',
  goals: [
    '🛠️ Set up the **Arduino IDE**',
    '🔁 Use **setup()** & **loop()**',
    '💡 **Blink** an LED with code',
    '🐞 Read & fix **errors**',
  ],
  emoji: '💡',
  accent: 'purple',
  sections: [
    {
      id: 'intro',
      number: '1',
      heading: 'From wire to code',
      subheading: 'What "programming" really is.',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          icon: '🗓️',
          title: 'This is a two-session module',
          body:
            '**Session 4:** set up the tools, learn how a program is built, and get your first blink working. **Session 5:** blink patterns, colors, and the big finish — spelling **SOS** in Morse code.',
        },
        {
          type: 'paragraph',
          text:
            "A **program** (Arduino people call it a **sketch**) is just a **list of instructions** that the chip follows exactly, top to bottom, incredibly fast. The board never guesses — it does precisely what you write. That's the fun *and* the challenge.",
        },
        {
          type: 'paragraph',
          text:
            "In Module 3 you moved your LED's control wire to pin `D2`. Right now that pin is off, so the LED is dark. Today your code will reach that pin and switch it on and off — as fast or as slow as you like.",
        },
      ],
    },
    {
      id: 'tools',
      number: '2',
      heading: 'The tools: the Arduino IDE',
      subheading: 'The app where you write code and send it to the board.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "You'll write your sketches in the **Arduino IDE** (IDE just means the coding app). Three buttons do the heavy lifting:",
        },
        {
          type: 'steps',
          items: [
            { icon: '✔️', title: 'Verify', body: 'Checks your code for mistakes *without* sending it. Your spell-checker.' },
            { icon: '➡️', title: 'Upload', body: 'Sends your finished code to the board.' },
            { icon: '🔍', title: 'Serial Monitor', body: "A window where the board can print messages back to you (we'll use it a lot later)." },
          ],
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🛠️',
          title: 'One-time setup (your teacher will lead this)',
          body: 'You only ever do this once per computer.',
        },
        {
          type: 'steps',
          items: [
            { eyebrow: 'Step 1', title: 'Install the Arduino IDE', body: 'Download it from the official Arduino website and open it up.' },
            { eyebrow: 'Step 2', title: 'Add ESP32 support', body: 'In **Boards Manager**, search `esp32` and install the one **by Espressif**. This teaches the IDE about our chip.' },
            { eyebrow: 'Step 3', title: 'Pick your board', body: "Choose the ESP32-S3 Nano board your teacher tells you (usually `ESP32S3 Dev Module` or `Arduino Nano ESP32`)." },
            { eyebrow: 'Step 4', title: 'Plug in & pick the Port', body: "Connect the board with USB-C, then choose its **Port** so the IDE knows where to send your code." },
          ],
        },
      ],
    },
    {
      id: 'shape',
      number: '3',
      heading: 'How every sketch is built',
      subheading: 'Two blocks. That\'s the whole shape.',
      blocks: [
        {
          type: 'paragraph',
          text: 'Every Arduino sketch has the same two parts, and knowing them means you can read *any* program:',
        },
        {
          type: 'card',
          icon: '▶️',
          title: 'setup() — runs once',
          body: 'Runs a single time when the board powers on. Use it to **get things ready** — like telling a pin it\'s an output.',
        },
        {
          type: 'card',
          icon: '🔁',
          title: 'loop() — runs forever ↻',
          body: "Runs over and over, forever. This is the robot's **repeating job** — blink, check, react, repeat.",
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '👟',
          title: 'Morning routine',
          body:
            "Think of `setup()` as tying your shoes — you do it **once**. Then `loop()` is walking — left, right, left, right, **over and over**.",
        },
      ],
    },
    {
      id: 'words',
      number: '4',
      heading: 'Three magic words',
      subheading: 'Learn these three and you can already make an LED dance.',
      blocks: [
        {
          type: 'table',
          columns: ['Command', 'What it does'],
          rows: [
            [
              '`pinMode(pin, OUTPUT)`',
              "Get a pin ready. Say whether it's an **OUTPUT** (acting) or **INPUT** (listening). Do this in `setup()`.",
            ],
            ['`digitalWrite(pin, HIGH)`', 'Turn an output pin **ON** (`HIGH`) or **OFF** (`LOW`).'],
            ['`delay(1000)`', '**Wait.** The number is in milliseconds, so `1000` = 1 second.'],
          ],
        },
      ],
    },
    {
      id: 'first',
      number: '5',
      heading: 'Your first program: Blink',
      subheading: 'The "hello world" of robotics. Let\'s blink the board\'s own built-in light.',
      blocks: [
        {
          type: 'code',
          caption: 'Blink.ino — blinks the board\'s built-in LED',
          code:
            'void setup() {\n  pinMode(LED_BUILTIN, OUTPUT);   // get the built-in LED ready\n}\n\nvoid loop() {\n  digitalWrite(LED_BUILTIN, HIGH);  // light ON\n  delay(1000);                      // wait 1 second\n  digitalWrite(LED_BUILTIN, LOW);   // light OFF\n  delay(1000);                      // wait 1 second\n}',
        },
        {
          type: 'paragraph',
          text:
            '**Read it out loud:** "Get the light ready. Then forever: turn it on, wait a second, turn it off, wait a second." Press **Verify ✔️**, then **Upload ➡️**, and watch the board\'s little light blink. 🎉',
        },
        {
          type: 'paragraph',
          text: "`LED_BUILTIN` is a nickname for the board's own light — you don't need to know its pin number.",
        },
      ],
    },
    {
      id: 'rules',
      number: '6',
      heading: 'The picky rules of code',
      subheading: 'Computers are fussy. These three trip up everyone at first.',
      blocks: [
        {
          type: 'steps',
          items: [
            { icon: ';', title: 'Semicolons', body: 'Most lines end with a **semicolon** `;` — it\'s the "full stop" of code. Forget one and the board complains.' },
            { icon: 'Aa', title: 'Capitals matter', body: '`digitalWrite` works; `digitalwrite` does not. The board is picky about upper- and lower-case.' },
            { icon: '//', title: 'Comments', body: 'Anything after `//` is a **note for humans**. The board ignores it — perfect for reminding yourself what a line does.' },
          ],
        },
        {
          type: 'paragraph',
          text: '💡 Also: every `{` needs a matching `}`, and every `(` needs a `)`.',
        },
      ],
    },
    {
      id: 'errors',
      number: '7',
      heading: 'When it goes wrong (it will!)',
      subheading: "Errors aren't failure — they're the board pointing at the fix.",
      blocks: [
        {
          type: 'paragraph',
          text:
            'If you press Verify or Upload and get **red text**, don\'t panic. That\'s just the board saying "I got confused here." Nearly always it\'s one of the picky rules above — a missing `;`, a wrong capital letter, or a missing `}`.',
        },
        {
          type: 'callout',
          variant: 'danger',
          icon: '🔌',
          title: "Upload won't start?",
          body:
            'Sometimes the board isn\'t listening. Hold the **BOOT** button, tap **RESET**, then let go of BOOT. That puts the board in "ready for new code" mode. Try Upload again.',
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🐞',
          title: 'Debugging is a superpower',
          body:
            'Every coder — even the pros — spends time fixing errors. Read the **first** red line, check that line in your code, fix one thing, try again. That loop *is* programming.',
        },
      ],
    },
    {
      id: 'yourled',
      number: '8',
      heading: 'Now blink your LED',
      subheading: 'The one you wired to D2 in Module 3.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Let's control the real LED on your breadboard. We give the pin a friendly nickname at the top so it's easy to change later.",
        },
        {
          type: 'code',
          caption: 'BlinkD2.ino — blinks your wired LED, fast',
          code:
            '// give pin D2 a nickname (change to 5 if your board doesn\'t know "D2")\n#define LED_PIN D2\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH);\n  delay(500);                // half a second\n  digitalWrite(LED_PIN, LOW);\n  delay(500);\n}',
        },
        {
          type: 'paragraph',
          text: '🧪 **Experiment:** change both `500`s to `100` for a fast flicker, or `2000` for a slow, sleepy blink.',
        },
      ],
    },
    {
      id: 'rgb',
      number: '9',
      heading: 'Bonus: paint with the RGB light 🌈',
      subheading: 'Your board has a light that can be any color — no wiring needed.',
      blocks: [
        {
          type: 'code',
          caption: 'Rainbow.ino — cycles the built-in RGB light',
          code:
            'void setup() {\n  // nothing to set up — the RGB light is built in\n}\n\nvoid loop() {\n  rgbLedWrite(RGB_BUILTIN, 255, 0, 0);   // red\n  delay(500);\n  rgbLedWrite(RGB_BUILTIN, 0, 255, 0);   // green\n  delay(500);\n  rgbLedWrite(RGB_BUILTIN, 0, 0, 255);   // blue\n  delay(500);\n}',
        },
        {
          type: 'paragraph',
          text:
            'The three numbers are amounts of **Red, Green, Blue** (0–255). Mix your own: `255,255,0` = yellow, `255,0,255` = pink, `0,255,255` = cyan.',
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🙂',
          title: "If the colors don't show",
          body:
            "RGB lights differ from board to board. If nothing lights up, it's a **board-setting** thing, not your mistake — ask your teacher, or open the ready-made example at `File ▸ Examples ▸ ESP32 ▸ GPIO ▸ BlinkRGB`.",
        },
      ],
    },
    {
      id: 'mission',
      number: '🎯',
      heading: 'Mission: send a secret message',
      subheading: 'Blink patterns, then spell SOS in Morse code.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'Morse code turns letters into **dots** (short blinks) and **dashes** (long blinks). The world\'s most famous message is **SOS** — the call for help:',
        },
        { type: 'card', title: 'S = · · ·', body: 'three short blinks' },
        { type: 'card', title: 'O = — — —', body: 'three long blinks' },
        {
          type: 'paragraph',
          text:
            "Here we teach the board two brand-new tricks — a `dot()` and a `dash()` — then use them like building blocks. Notice how tidy that makes the message!",
        },
        {
          type: 'code',
          caption: 'MorseSOS.ino — blinks S-O-S forever',
          code:
            '#define LED_PIN D2\n\n// our two new tricks:\nvoid dot()  { digitalWrite(LED_PIN, HIGH); delay(200); digitalWrite(LED_PIN, LOW); delay(200); }\nvoid dash() { digitalWrite(LED_PIN, HIGH); delay(600); digitalWrite(LED_PIN, LOW); delay(200); }\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  dot();  dot();  dot();    // S\n  dash(); dash(); dash();   // O\n  dot();  dot();  dot();    // S\n  delay(1500);              // pause, then repeat\n}',
        },
        {
          type: 'steps',
          items: [
            { eyebrow: 'Mission 1', title: 'Blink patterns', body: 'Make your LED blink **twice fast, then once slow**, over and over. (Hint: copy the on/off lines and change the delays.)' },
            { eyebrow: 'Mission 2', title: 'Spell SOS', body: 'Upload `MorseSOS.ino` and watch your LED call for help in Morse code.' },
            { eyebrow: 'Mission 3', title: '⭐ Challenge', body: 'Spell the **first letter of your name** in Morse. Look up its dots and dashes and build it from `dot()` and `dash()`.', highlight: true },
          ],
        },
      ],
    },
  ],
  glossary: [
    { term: 'Sketch / Program', body: 'A list of instructions the board follows, top to bottom.' },
    { term: 'Arduino IDE', body: 'The app where you write code and upload it to the board.' },
    { term: 'Verify', body: 'Checks your code for mistakes without uploading it.' },
    { term: 'Upload', body: 'Sends your finished code to the board.' },
    { term: 'setup()', body: 'The block that runs **once** at start — get things ready here.' },
    { term: 'loop()', body: 'The block that runs **forever** — the repeating job.' },
    { term: 'pinMode()', body: 'Sets a pin as OUTPUT (acting) or INPUT (listening).' },
    { term: 'digitalWrite()', body: 'Turns an output pin ON (HIGH) or OFF (LOW).' },
    { term: 'delay()', body: 'Waits. The number is in milliseconds (1000 = 1 second).' },
    { term: 'LED_BUILTIN', body: "A nickname for the board's own built-in light." },
    { term: 'Comment (//)', body: 'A note for humans; the board ignores it.' },
    { term: 'Debugging', body: 'Finding and fixing mistakes in your code.' },
  ],
  quiz: [
    {
      question: 'Which part of a sketch runs only once, and which runs forever?',
      answer: '`setup()` runs **once**; `loop()` runs **forever**.',
    },
    { question: 'What does `delay(1000)` do?', answer: 'Waits **1 second** (1000 milliseconds).' },
    {
      question: 'Which command turns a pin on or off?',
      answer: '`digitalWrite(pin, HIGH)` for on, `digitalWrite(pin, LOW)` for off.',
    },
    {
      question: 'Name two "picky rules" that cause most beginner errors.',
      answer: 'Missing **semicolons** `;` and wrong **capital letters** (also unmatched `{ }` or `( )`).',
    },
    {
      question: "Your Upload won't start — what button trick can help?",
      answer: 'Hold **BOOT**, tap **RESET**, release BOOT — the board enters "ready for new code" mode.',
    },
    {
      question: '⭐ Challenge: in Morse, how do you write the letter S?',
      answer: 'Three dots: **· · ·** (three short blinks).',
    },
  ],
  teacherNotes: {
    sessionLength: '2 × 90 minutes',
    agenda: [
      { time: 'S4 · Setup', title: 'Setup', body: 'IDE + ESP32 install, board/port, sketch shape, the three words.' },
      { time: 'S4 · First blink', title: 'First blink', body: 'Built-in Blink + the picky rules + reading errors.' },
      { time: 'S5 · Your LED', title: 'Your LED', body: 'Blink the D2 LED; experiment with delays; RGB bonus.' },
      { time: 'S5 · Mission', title: 'Mission', body: 'Blink patterns and the Morse SOS finale.' },
    ],
    prep: [
      'Pre-install the Arduino IDE + ESP32 board package on every computer if you can — this saves the biggest time sink.',
      'Confirm which board profile uploads reliably to your exact boards (`ESP32S3 Dev Module` vs `Arduino Nano ESP32`) and tell students which to pick.',
      "Have the Module 3 breadboards ready with the LED still on `D2`.",
      'Keep the four code files handy to share (Blink, BlinkD2, Rainbow, MorseSOS).',
    ],
    noteGroups: [
      {
        heading: 'Two board-specific notes',
        items: [
          "If `D2` isn't recognised on your chosen board profile, have students change the nickname to `5` (D2's GPIO number from Module 1).",
          "RGB varies by board. `rgbLedWrite()` works on most ESP32-S3 profiles; if not, use `File ▸ Examples ▸ ESP32 ▸ GPIO ▸ BlinkRGB`. Keep RGB as a bonus so it never blocks the lesson.",
        ],
      },
      {
        heading: 'Teaching tips',
        items: [
          'Read code aloud as plain English before uploading — it demystifies the symbols.',
          'Normalise errors early: deliberately make a typo, show the red text, fix it together. Model calm debugging.',
          "Teach the BOOT + RESET upload trick on day one; you'll use it often.",
        ],
      },
      {
        heading: 'Keep it inclusive',
        items: [
          'Stretch: Morse a full name; nest patterns; try mixing custom RGB colors.',
          'Support: provide the sketches pre-typed so the student edits numbers (delays, colors) rather than typing from scratch.',
        ],
      },
    ],
  },
};

export default module4;
