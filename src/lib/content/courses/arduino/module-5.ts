import type { CourseModule } from '../types';

const module5: CourseModule = {
  slug: 'module-5',
  number: 5,
  title: 'Buttons & Decisions',
  lede:
    "Your board can already *act*. Now you'll give it **ears** — a button it can feel — and a **brain for choices**, so it can decide what to do. That completes the whole robot loop.",
  sessionLabel: 'Session 6',
  ageRange: 'Ages 10–14',
  duration: '90 minutes',
  summary:
    'Wire up a push button, learn if/else decisions, and build a reaction-time game that puts sensing, thinking, and acting together.',
  goals: [
    '👂 **Read a button** with code',
    '🧲 Use **INPUT_PULLUP**',
    '🔀 Decide with **if / else**',
    '⚡ Build a **reaction game**',
  ],
  emoji: '🔘',
  accent: 'blue',
  sections: [
    {
      id: 'listen',
      number: '1',
      heading: 'Now the board listens',
      subheading: 'Time to close the loop.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'In Module 4 your board learned to **act** — it could switch an LED on and off. But a robot that only acts is just a light show. A real robot also **senses** the world and **decides** what to do. Today you add both.',
        },
        {
          type: 'steps',
          items: [
            { icon: '👁️', title: 'Sense', body: "Read a **button** — the board's first input." },
            { icon: '🧠', title: 'Think', body: 'Make a choice with **if / else**.' },
            { icon: '⚙️', title: 'Act', body: 'Light the LED — the part you already know.' },
          ],
        },
        {
          type: 'paragraph',
          text: '💡 Remember the robot loop from Module 1? After today, you can build all three steps yourself.',
        },
      ],
    },
    {
      id: 'button',
      number: '2',
      heading: 'How a button works',
      subheading: "Simpler than you'd think.",
      blocks: [
        {
          type: 'paragraph',
          text:
            'A push button is just a **gap in a wire** that closes when you press it. Not pressed → the gap is open and nothing gets through. Pressed → a little bridge connects the two sides, and electricity can flow.',
        },
        {
          type: 'list',
          items: [
            '**Not pressed** — the gap is open, nothing gets through.',
            '**Pressed** — a little bridge connects the two sides, and electricity can flow.',
          ],
        },
      ],
    },
    {
      id: 'pullup',
      number: '3',
      heading: 'The "confused pin" problem',
      subheading: 'Why a lone input pin needs a little help.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Here's a surprise: if you connect a button to a pin and nothing else, the pin gets **confused**. When the button isn't pressed, the pin is connected to… nothing. It floats around randomly between ON and OFF, so your code can't trust it.",
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🪑',
          title: 'Think of an empty swing',
          body:
            'A pin with nothing holding it is like a swing with no one on it — it drifts whichever way the wind blows. We need something to gently **hold it still** until the button is pressed.',
        },
        {
          type: 'paragraph',
          text:
            'The fix is built right into the chip: `INPUT_PULLUP`. It quietly **holds the pin HIGH** (up) all by itself. Then, when you press the button, it connects the pin to `GND` and **pulls it LOW** (down).',
        },
        {
          type: 'table',
          caption: 'Button wired between D3 and GND, held HIGH by the internal pull-up.',
          columns: ['State', 'Pin reads'],
          rows: [
            ['Not pressed', 'HIGH ↑'],
            ['Pressed', 'LOW ↓'],
          ],
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🙃',
          title: 'The twist everyone remembers',
          body:
            "Because of the pull-up, **pressed reads LOW** and **not-pressed reads HIGH** — the opposite of what you'd guess! Say it out loud a few times: \"pressed is LOW.\"",
        },
      ],
    },
    {
      id: 'read',
      number: '4',
      heading: 'Reading the button & seeing it',
      subheading: 'Meet digitalRead() and the Serial Monitor.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'To check a button in code, you use `digitalRead(pin)` — it hands back `HIGH` or `LOW`. And to actually *see* that value, we\'ll finally open the **Serial Monitor**: a window where the board prints messages to you.',
        },
        {
          type: 'code',
          caption: 'ReadButton.ino — prints the button state',
          code:
            '#define BUTTON_PIN D3\n\nvoid setup() {\n  Serial.begin(9600);              // open the message channel\n  pinMode(BUTTON_PIN, INPUT_PULLUP);  // button input, held HIGH\n}\n\nvoid loop() {\n  if (digitalRead(BUTTON_PIN) == LOW) {  // LOW = pressed\n    Serial.println("Pressed!");\n  } else {\n    Serial.println("...");\n  }\n  delay(200);\n}',
        },
        {
          type: 'paragraph',
          text:
            'Upload it, then click **Serial Monitor 🔍** (set it to `9600`). Press the button and watch the words change. You just read your first input! 🎉',
        },
      ],
    },
    {
      id: 'ifelse',
      number: '5',
      heading: 'Making a decision: if / else',
      subheading: 'The "Think" step, in code.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'An **if / else** lets your program choose. It reads like plain English: *IF something is true, do this; otherwise (ELSE), do that.*',
        },
        {
          type: 'code',
          caption: 'the shape of a decision',
          code: 'if ( something is true ) {\n  // do this\n} else {\n  // do this instead\n}',
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🟰',
          title: 'Why two equals signs?',
          body:
            'In code, one `=` means "**set to**," but `==` means "**is it equal to?**" So `digitalRead(pin) == LOW` asks: "is the button pressed?"',
        },
        {
          type: 'paragraph',
          text:
            "Now let's put input, decision, and output together — the button controls the LED you wired in Module 3:",
        },
        {
          type: 'code',
          caption: 'ButtonLight.ino — press to light up',
          code:
            '#define BUTTON_PIN D3\n#define LED_PIN    D2\n\nvoid setup() {\n  pinMode(BUTTON_PIN, INPUT_PULLUP);\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  if (digitalRead(BUTTON_PIN) == LOW) {  // pressed?\n    digitalWrite(LED_PIN, HIGH);         // yes -> light on\n  } else {\n    digitalWrite(LED_PIN, LOW);          // no  -> light off\n  }\n}',
        },
        {
          type: 'paragraph',
          text: 'That\'s the full **Sense → Think → Act** loop in nine lines. 🤖',
        },
      ],
    },
    {
      id: 'mission',
      number: '🎯',
      heading: 'Mission: the reaction-time game',
      subheading: 'How fast are your reflexes? Let\'s measure them.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'The board waits a random moment, flashes the LED, and times how quickly you slam the button. It uses two new helpers: `millis()` (the board\'s built-in stopwatch) and `random()` (a dice roll).',
        },
        {
          type: 'code',
          caption: 'ReactionGame.ino — test your reflexes',
          code:
            '#define BUTTON_PIN D3\n#define LED_PIN    D2\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(BUTTON_PIN, INPUT_PULLUP);\n  pinMode(LED_PIN, OUTPUT);\n  randomSeed(analogRead(A0));   // makes the wait different each run\n}\n\nvoid loop() {\n  Serial.println("Get ready...");\n  delay(random(2000, 5000));   // wait 2-5 seconds\n\n  digitalWrite(LED_PIN, HIGH);      // GO!\n  long start = millis();            // start the stopwatch\n\n  while (digitalRead(BUTTON_PIN) == HIGH) {\n    // keep waiting until it\'s pressed\n  }\n\n  long reaction = millis() - start; // stop the stopwatch\n  digitalWrite(LED_PIN, LOW);\n  Serial.print("Your time: ");\n  Serial.print(reaction);\n  Serial.println(" ms!");\n\n  delay(3000);                   // short break, then again\n}',
        },
        {
          type: 'steps',
          items: [
            { eyebrow: 'Mission 1', title: 'Play it', body: 'Upload, open the Serial Monitor, and race the light. Lower numbers = faster reflexes!' },
            { eyebrow: 'Mission 2', title: 'Tune it', body: 'Make it harder: change `random(2000, 5000)` so the wait is longer or trickier.' },
            { eyebrow: 'Mission 3', title: '⭐ Challenge', body: 'Add a **second button** and make a two-player duel — whoever presses first wins. (Hint: read both, decide with `if / else`.)', highlight: true },
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          icon: '🐞',
          title: 'Cheat-proofing (a real bug to spot)',
          body:
            'What if a player mashes the button *before* the light? Right now they\'d "win" instantly. Can you think of a rule to catch an early press? That\'s exactly the kind of thinking real programmers do.',
        },
      ],
    },
  ],
  glossary: [
    { term: 'Input', body: 'Information coming into the board — like a button press.' },
    { term: 'digitalRead()', body: 'Reads a pin and returns HIGH or LOW.' },
    { term: 'INPUT_PULLUP', body: "A built-in helper that holds an input pin HIGH until it's pulled LOW." },
    { term: 'Floating pin', body: 'An input with nothing holding it — its value drifts randomly.' },
    { term: 'if / else', body: 'A decision: do one thing if true, another if not.' },
    { term: '== (double equals)', body: 'Asks "is this equal to that?" (one `=` means "set to").' },
    { term: 'Serial Monitor', body: 'A window where the board prints messages to you.' },
    { term: 'Serial.println()', body: 'Prints a line of text to the Serial Monitor.' },
    { term: 'millis()', body: "The board's stopwatch — milliseconds since it turned on." },
    { term: 'random()', body: 'Picks a random number — like rolling dice.' },
    { term: 'while', body: '"Keep doing this while something is still true."' },
    { term: 'Variable', body: 'A named box that holds a value, like `start`.' },
  ],
  quiz: [
    { question: 'What does `digitalRead()` give you back?', answer: 'Either **HIGH** or **LOW** — the state of the pin right now.' },
    {
      question: 'With `INPUT_PULLUP`, does a pressed button read HIGH or LOW?',
      answer: '**LOW.** The pull-up holds the pin HIGH until a press pulls it down to GND.',
    },
    {
      question: 'Why do we even need `INPUT_PULLUP`?',
      answer: 'Without it, a lone input pin **floats** and reads randomly. The pull-up holds it steady.',
    },
    { question: "What's the difference between `=` and `==`?", answer: '`=` means "**set to**"; `==` asks "**is it equal to?**"' },
    {
      question: 'In plain English, what does an `if / else` do?',
      answer: 'Do one thing **if** something is true, and a different thing **otherwise**.',
    },
    {
      question: '⭐ Challenge: which three robot-loop steps does `ButtonLight.ino` use?',
      answer: '**Sense** (read the button) → **Think** (if/else) → **Act** (LED on/off).',
    },
  ],
  teacherNotes: {
    sessionLength: '90 minutes',
    agenda: [
      { time: 'Warm-up · 10m', title: 'Warm-up', body: 'Recap Module 4 (output). "Today the board gets to listen and decide."' },
      { time: 'Concept · 20m', title: 'Concept', body: 'How a button works, the floating-pin problem, INPUT_PULLUP.' },
      { time: 'Read · 20m', title: 'Read', body: 'Wire the button; ReadButton + Serial Monitor; ButtonLight.' },
      { time: 'Mission · 30m', title: 'Mission', body: 'Reaction game + tuning + the two-player challenge.' },
      { time: 'Wrap · 10m', title: 'Wrap', body: 'Quick-check; preview Module 6 (analog & dimming).' },
    ],
    prep: [
      'Per pair: a push button + the Module 3 breadboard with the LED still on `D2`.',
      "Wire the button between `D3` and `GND`. No external resistor needed — `INPUT_PULLUP` handles it.",
      "If a board profile doesn't recognise `D2`/`D3`, swap to their GPIO numbers (`D2 = 5`, `D3 = 6`) from the Module 1 map.",
    ],
    noteGroups: [
      {
        heading: 'The one idea that confuses everyone',
        items: [
          '"Pressed = LOW" feels backwards. Use the empty-swing analogy and have them say it aloud. Show it live in the Serial Monitor before writing the if/else.',
        ],
      },
      {
        heading: 'Teaching tips',
        items: [
          'Serial Monitor first. Seeing HIGH/LOW change makes the abstract concrete — do ReadButton before ButtonLight.',
          'Read if/else aloud as "if… then… otherwise" every time.',
          "The reaction game's while loop and millis() are a stretch — let students play and tweak rather than write from scratch.",
        ],
      },
      {
        heading: 'Keep it inclusive',
        items: [
          'Stretch: the two-player duel and the early-press "cheat-proofing" bug.',
          'Support: provide ButtonLight pre-typed; the student edits which pin or flips the logic.',
        ],
      },
    ],
  },
};

export default module5;
