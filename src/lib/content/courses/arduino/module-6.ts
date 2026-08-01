import type { CourseModule } from '../types';

const module6: CourseModule = {
  slug: 'module-6',
  number: 6,
  title: 'In-Between Values',
  lede:
    'So far everything was ON or OFF. Today you break free: read a **smooth dial** and make an LED glow at *any* brightness — from a faint glimmer to full blaze.',
  sessionLabel: 'Sessions 7–8',
  ageRange: 'Ages 10–14',
  duration: '2 × 90 minutes',
  summary:
    'Read a potentiometer, learn the PWM trick behind brightness, and build a working dimmer knob and color-changing mood lamp.',
  goals: [
    '🎚️ Read a **dial** (0–4095)',
    '🌗 Understand **PWM**',
    '💡 **Dim** an LED',
    '🔁 Use **map()**',
  ],
  emoji: '🎚️',
  accent: 'amber',
  sections: [
    {
      id: 'beyond',
      number: '1',
      heading: 'Beyond on and off',
      subheading: 'Back to the switch vs the dial.',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          icon: '🗓️',
          title: 'This is a two-session module',
          body:
            '**Session 7:** read a dial with `analogRead`, and learn the PWM trick that makes brightness. **Session 8:** build a real dimmer knob with `map()`, then a color-changing mood lamp.',
        },
        {
          type: 'paragraph',
          text:
            "Remember Module 2? **Digital** is a light switch — only ON or OFF. **Analog** is a dial — every value in between. Until now you've only used the switch. But how would you make an LED *half* bright, or read *how far* you turned a knob? For that, you need analog.",
        },
        {
          type: 'card',
          title: 'Analog IN',
          body: 'Read a smooth value from a **dial** or sensor — a number from **0 to 4095**.',
        },
        {
          type: 'card',
          title: 'Analog-ish OUT',
          body: 'Make an LED any **brightness** using a clever trick called **PWM**.',
        },
      ],
    },
    {
      id: 'pot',
      number: '2',
      heading: 'The potentiometer: a dial you can read',
      subheading: 'Meet your first analog input.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "A **potentiometer** (pot for short) is just a **knob you can turn** — like a volume dial. It has **three legs**: the two outer legs get power and ground, and the **middle leg** reports the position back to the board.",
        },
        {
          type: 'table',
          caption: 'Potentiometer wiring',
          columns: ['Leg', 'Connects to'],
          rows: [
            ['Outer leg', '`3V3`'],
            ['Middle leg (wiper)', '`A0` — the reading'],
            ['Outer leg', '`GND`'],
          ],
        },
        {
          type: 'paragraph',
          text:
            'If you swap the two outer legs, the knob just turns the other way. Read it with `analogRead()` and watch the numbers in the Serial Monitor:',
        },
        {
          type: 'code',
          caption: '🎚️ ReadDial.ino — prints the knob position',
          code:
            '#define POT_PIN A0\n\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int value = analogRead(POT_PIN);  // 0 (off) to 4095 (full)\n  Serial.println(value);\n  delay(200);\n}',
        },
        {
          type: 'paragraph',
          text:
            "Turn the knob slowly and watch the number sweep from **0** all the way to **4095**. That's your board sensing something smoothly for the first time!",
        },
      ],
    },
    {
      id: 'pwm',
      number: '3',
      heading: 'The PWM trick 🌗',
      subheading: 'How a digital pin fakes "in-between" brightness.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Here's a puzzle: a digital pin can only do ON or OFF. So how do we get *half* brightness? The answer is sneaky and brilliant — **PWM** (Pulse Width Modulation). The pin blinks ON and OFF **thousands of times a second**, far too fast for your eyes to see. The more time it spends ON, the brighter the LED looks.",
        },
        {
          type: 'stats',
          items: [
            { value: '25%', label: 'ON — **dim**' },
            { value: '50%', label: 'ON — **medium**' },
            { value: '100%', label: 'ON — **bright**', highlight: true },
          ],
        },
        {
          type: 'paragraph',
          text: '↑ Wider "on" pulses = more power = brighter light. Same super-fast blinking every time — but wider on-pulses deliver more power, so the LED looks brighter. Your eyes blur the flicker into a steady glow.',
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🎬',
          title: 'Like a flip-book',
          body:
            'A flip-book is just still pictures shown fast enough to look like motion. PWM is just on/off shown fast enough to look like a steady, dimmable light.',
        },
      ],
    },
    {
      id: 'write',
      number: '4',
      heading: 'analogWrite: brightness in code',
      subheading: 'One command does all the fast blinking for you.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "You don't have to do the blinking yourself — `analogWrite(pin, level)` handles it. The level goes from **0** (off) to **255** (full brightness). Let's make a \"breathing\" LED that fades up and down forever:",
        },
        {
          type: 'code',
          caption: '🫁 Breathe.ino — a smoothly fading LED',
          code:
            '#define LED_PIN D2\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  // count up: get brighter\n  for (int b = 0; b <= 255; b++) {\n    analogWrite(LED_PIN, b);\n    delay(6);\n  }\n  // count down: get dimmer\n  for (int b = 255; b >= 0; b--) {\n    analogWrite(LED_PIN, b);\n    delay(6);\n  }\n}',
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🔢',
          title: 'New tool: the `for` loop',
          body:
            '`for (int b = 0; b <= 255; b++)` means: "start `b` at 0, keep going while it\'s 255 or less, and add 1 each time." So the brightness climbs 0, 1, 2… all the way to 255. The second loop counts back down.',
        },
      ],
    },
    {
      id: 'map',
      number: '5',
      heading: 'map(): making ranges match',
      subheading: 'The little translator that connects input to output.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Spot the mismatch: your **dial** reads **0–4095**, but **brightness** only goes **0–255**. If you fed the dial straight in, the LED would hit full brightness almost instantly and stay there. We need to **squeeze** one range into the other — and `map()` does exactly that.",
        },
        {
          type: 'code',
          caption: '🔁 the shape of map()',
          code:
            'map(value, fromLow, fromHigh, toLow, toHigh)\n\n// squeeze a dial reading (0-4095) into brightness (0-255):\nint bright = map(knob, 0, 4095, 0, 255);',
        },
        {
          type: 'paragraph',
          text:
            'Think of it as a translator: "on a scale of 0–4095 you\'re *here*… so on a scale of 0–255 you\'d be *there*."',
        },
      ],
    },
    {
      id: 'dimmer',
      number: '6',
      heading: 'Build a dimmer knob 💡',
      subheading: 'Everything together — turn the dial, the light follows.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Now the payoff. Read the dial, map it to brightness, and write it to the LED — all in the `loop`, so it updates constantly as you turn the knob.",
        },
        {
          type: 'code',
          caption: '🎛️ DimmerKnob.ino — the dial controls the light',
          code:
            '#define POT_PIN A0\n#define LED_PIN D2\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  int knob   = analogRead(POT_PIN);          // 0 - 4095\n  int bright = map(knob, 0, 4095, 0, 255); // -> 0 - 255\n  analogWrite(LED_PIN, bright);            // set the brightness\n}',
        },
        {
          type: 'paragraph',
          text:
            'Upload it and turn the knob. Your LED glides from dark to dazzling and back — a real dimmer switch you built and programmed yourself. 🎉',
        },
      ],
    },
    {
      id: 'mission',
      number: '🎯',
      heading: 'Mission: the mood lamp 🌈',
      subheading: 'Turn one knob to slide through colors.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Let's use the dial to control the built-in RGB light — blending from warm red to cool blue as you turn. We map the knob **twice**: as red fades down, blue rises up.",
        },
        {
          type: 'code',
          caption: '🌈 MoodLamp.ino — dial through the colors',
          code:
            '#define POT_PIN A0\n\nvoid setup() { }\n\nvoid loop() {\n  int knob = analogRead(POT_PIN);            // 0 - 4095\n  int red  = map(knob, 0, 4095, 255, 0);  // lots of red when low\n  int blue = map(knob, 0, 4095, 0, 255);  // lots of blue when high\n  rgbLedWrite(RGB_BUILTIN, red, 0, blue);\n}',
        },
        {
          type: 'steps',
          items: [
            { eyebrow: 'Step 1', title: 'Slide the colors', body: 'Upload and turn the knob slowly — watch red melt into purple into blue.' },
            { eyebrow: 'Step 2', title: 'Add green', body: 'Bring the green channel to life too for a fuller rainbow. Experiment with the three `map()` lines.' },
            { eyebrow: 'Step 3', title: '⭐ Challenge', body: 'Make a **night light**: when the knob is turned all the way down, the lamp is off; as you turn it up, it glows warmer and brighter.', highlight: true },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🙂',
          title: "If the RGB colors don't show",
          body:
            'Same as Module 4 — onboard RGB lights vary by board. If nothing lights, it\'s a **board setting**, not your code. Ask your teacher or check `File ▸ Examples ▸ ESP32 ▸ GPIO ▸ BlinkRGB`. The dimmer knob on a plain LED always works!',
        },
      ],
    },
  ],
  glossary: [
    { term: 'Analog', body: 'Smooth, in-between values — not just ON/OFF.' },
    { term: 'Potentiometer', body: 'A turnable knob the board can read; a "dial."' },
    { term: 'analogRead()', body: 'Reads an analog pin as a number from 0 to 4095.' },
    { term: 'PWM', body: 'Pulse Width Modulation — super-fast blinking that fakes brightness levels.' },
    { term: 'analogWrite()', body: "Sets an LED's brightness from 0 (off) to 255 (full)." },
    { term: 'map()', body: 'Translates a value from one range into another.' },
    { term: 'for loop', body: 'Repeats an action a set number of times, counting as it goes.' },
    { term: 'Brightness', body: 'How much an LED glows — controlled with PWM.' },
    { term: 'Range', body: 'The lowest-to-highest values something can be (like 0–4095).' },
    { term: 'int', body: 'A "box" that holds a whole number, like `knob`.' },
  ],
  quiz: [
    { question: 'What range of numbers does `analogRead()` give on this board?', answer: '**0 to 4095.**' },
    {
      question: 'In one sentence, how does PWM make an LED look dimmer?',
      answer: 'It blinks the LED ON and OFF **very fast**; less "on" time looks dimmer. Too fast for your eyes to see the flicker.',
    },
    { question: 'What range does `analogWrite()` use for brightness?', answer: '**0 to 255** — 0 is off, 255 is full brightness.' },
    {
      question: 'Why do we need `map()` in the dimmer?',
      answer: 'The dial reads **0–4095** but brightness is **0–255**. `map()` squeezes one range into the other.',
    },
    {
      question: 'A potentiometer has three legs. What does the middle one do?',
      answer: "It reports the **knob's position** back to the analog pin. The outer two are power and ground.",
    },
    {
      question: '⭐ Challenge: what would `map(knob, 0, 4095, 255, 0)` do differently?',
      answer: 'It **flips** the direction — turning the knob up would make the value go *down*.',
    },
  ],
  teacherNotes: {
    sessionLength: '2 × 90 minutes',
    agenda: [
      { time: 'S7 · Read', title: 'Read the dial', body: 'Wire the pot; ReadDial + Serial Monitor; watch 0→4095.' },
      { time: 'S7 · PWM', title: 'The PWM idea', body: 'The PWM idea; Breathe.ino; introduce the for loop.' },
      { time: 'S8 · Dimmer', title: 'Build the dimmer', body: 'map(); DimmerKnob.ino — the payoff.' },
      { time: 'S8 · Mood lamp', title: 'Mood lamp', body: 'MoodLamp.ino + add green + night-light challenge.' },
    ],
    prep: [
      'Per pair: a potentiometer + the LED-on-`D2` breadboard from earlier modules.',
      'Pot wiring: outer legs to `3V3` and `GND`, middle (wiper) to `A0`. Powered from `3V3` — remember the 3.3 V rule.',
      "If a board profile doesn't know `A0`/`D2`, use GPIO numbers (`A0 = 1`, `D2 = 5`) from the Module 1 map.",
    ],
    noteGroups: [
      {
        heading: 'Two facts worth stating clearly',
        items: [
          "**Two different ranges.** Reads are **0–4095** (12-bit); writes are **0–255** (8-bit). That mismatch is *why* `map()` exists — make this explicit.",
          '**"Analog out" is really PWM.** The pin isn\'t truly analog; it\'s fast on/off. The flip-book analogy lands well.',
        ],
      },
      {
        heading: 'Teaching tips',
        items: [
          'Serial first. Watching 0→4095 as they turn the knob makes analog tangible before any brightness code.',
          'Let `Breathe.ino` run while you explain the `for` loop — the visible fade sells it.',
          "Have them change numbers and predict (e.g. flip `map`'s last two) — instant, low-risk experiments.",
        ],
      },
      {
        heading: 'Keep it inclusive',
        items: [
          'Stretch: full RGB rainbow; a two-knob lamp (one for color, one for brightness).',
          "Support: provide DimmerKnob pre-typed; the student edits the `map()` numbers and observes.",
        ],
      },
    ],
  },
};

export default module6;
