import type { CourseModule } from '../types';

const module8: CourseModule = {
  slug: 'module-8',
  number: 8,
  title: 'Movement & Sound',
  lede:
    "The last stop before you build Otto. Today you make things **move** to an exact angle and **make sound** — the muscles and the voice your robot needs.",
  sessionLabel: 'Sessions 11–12',
  ageRange: 'Ages 10–14',
  duration: '90 minutes',
  summary:
    'Give your robot muscles and a voice — drive a servo to an exact angle, sweep and steer it, then make the buzzer beep and sing.',
  goals: [
    '🦿 Move a **servo** to any angle',
    '🎚️ **Sweep & steer** it',
    '🎵 Make **beeps & tunes**',
    '🎉 Know **every Otto part**',
  ],
  emoji: '🦿',
  accent: 'blue',
  sections: [
    {
      id: 'two-session',
      number: '🗓️',
      heading: 'This is a two-session module',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          icon: '🗓️',
          title: 'Session 11 & Session 12',
          body:
            '**Session 11:** the servo — move it to an exact angle, sweep it, and steer it with your dial. **Session 12:** the buzzer (beeps & melodies), an optional look at wheels, and the big "you have every Otto ingredient" moment.',
        },
      ],
    },
    {
      id: 'intro',
      number: '1',
      heading: 'Outputs that do big things',
      subheading: 'From blinking lights to moving and singing.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "You've made **light** as an output. Now for two mightier outputs: a **motor** that moves to an exact position, and a **buzzer** that makes sound. These are what turn a circuit into a *robot* — something that acts in the physical world.",
        },
        {
          type: 'card',
          icon: '🦿',
          title: 'Servo motor',
          body: 'Moves to an **exact angle** and holds it — perfect for legs, feet, and arms.',
        },
        {
          type: 'card',
          icon: '🎵',
          title: 'Buzzer',
          body: "Makes **beeps and tunes** — your robot's voice.",
        },
      ],
    },
    {
      id: 'servo',
      number: '2',
      heading: 'The servo motor 🦿',
      subheading: 'A motor that moves to an exact angle — and stays there.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "A normal motor just spins round and round. A **servo** is smarter: you tell it an **angle from 0° to 180°**, and it moves its arm exactly there and holds it steady. That precise control is exactly what a robot's joints need.",
        },
        {
          type: 'paragraph',
          text:
            'Three wires do the job: **signal** (to a digital pin), **power** (5V), and **ground** (GND).',
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '📦',
          title: 'Install one library first',
          body:
            'Our chip needs a special helper to run servos. In the Library Manager, search `ESP32Servo` and install it. (The plain "Servo" library won\'t work on this board.)',
        },
        {
          type: 'code',
          caption: 'ServoAngles.ino — point to three positions',
          code:
`#include <ESP32Servo.h>

Servo myServo;

void setup() {
  myServo.attach(D9);      // servo signal wire on D9
}

void loop() {
  myServo.write(0);     // point to 0°
  delay(1000);
  myServo.write(90);    // point to the middle
  delay(1000);
  myServo.write(180);   // point to 180°
  delay(1000);
}`,
        },
      ],
    },
    {
      id: 'sweep',
      number: '3',
      heading: 'Sweep it & steer it',
      subheading: 'Smooth motion, then hand-control with your dial.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Instead of jumping between angles, let's **sweep** smoothly through every angle using a `for` loop (just like the LED fade in Module 6):",
        },
        {
          type: 'code',
          caption: 'ServoSweep.ino — glides back and forth',
          code:
`#include <ESP32Servo.h>
Servo myServo;

void setup() { myServo.attach(D9); }

void loop() {
  for (int a = 0; a <= 180; a++) {  // sweep out
    myServo.write(a);
    delay(15);
  }
  for (int a = 180; a >= 0; a--) {  // sweep back
    myServo.write(a);
    delay(15);
  }
}`,
        },
        {
          type: 'paragraph',
          text:
            'Now steer the servo with your potentiometer — turn the dial, the arm follows. This is `map()` from Module 6 doing its job again:',
        },
        {
          type: 'code',
          caption: 'ServoKnob.ino — the dial moves the arm',
          code:
`#include <ESP32Servo.h>
Servo myServo;
#define POT_PIN A0

void setup() { myServo.attach(D9); }

void loop() {
  int knob  = analogRead(POT_PIN);          // 0 - 4095
  int angle = map(knob, 0, 4095, 0, 180); // -> 0 - 180°
  myServo.write(angle);
}`,
        },
        {
          type: 'callout',
          variant: 'danger',
          icon: '🔋',
          title: 'Servos are hungry',
          body:
            "One servo is fine powered from the board's `5V` pin. But **several** servos (like Otto's four legs) need their **own battery power** — you'll set that up in the build module. The board only ever sends the tiny **signal**.",
        },
      ],
    },
    {
      id: 'buzzer',
      number: '4',
      heading: 'The buzzer — a voice 🎵',
      subheading: 'Beeps, alarms, and even melodies.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'A **piezo buzzer** makes sound when you send it a signal. The command is `tone(pin, pitch)` — the **pitch** number is the frequency in hertz, and **bigger number = higher note**. `noTone(pin)` stops it. Wire the buzzer\'s **+** to a digital pin and **−** to `GND`.',
        },
        {
          type: 'code',
          caption: 'Beep.ino — a simple on/off beep',
          code:
`#define BUZZER_PIN D5

void setup() { }

void loop() {
  tone(BUZZER_PIN, 1000);   // beep at 1000 Hz
  delay(300);
  noTone(BUZZER_PIN);        // silence
  delay(300);
}`,
        },
        {
          type: 'paragraph',
          text: 'Every musical note is just a frequency. Here are a few to play with:',
        },
        {
          type: 'tags',
          items: [
            { text: 'C', sub: '262' },
            { text: 'D', sub: '294' },
            { text: 'E', sub: '330' },
            { text: 'F', sub: '349' },
            { text: 'G', sub: '392' },
            { text: 'A', sub: '440' },
            { text: 'B', sub: '494' },
            { text: 'C', sub: '523' },
          ],
        },
        {
          type: 'code',
          caption: 'Melody.ino — the start of "Twinkle Twinkle"',
          code:
`#define BUZZER_PIN D5

void setup() { }

void loop() {
  tone(BUZZER_PIN, 262); delay(400);  // C  Twin-
  tone(BUZZER_PIN, 262); delay(400);  // C  -kle
  tone(BUZZER_PIN, 392); delay(400);  // G  twin-
  tone(BUZZER_PIN, 392); delay(400);  // G  -kle
  tone(BUZZER_PIN, 440); delay(400);  // A  lit-
  tone(BUZZER_PIN, 440); delay(400);  // A  -tle
  tone(BUZZER_PIN, 392); delay(600);  // G  star
  noTone(BUZZER_PIN);
  delay(1000);
}`,
        },
        {
          type: 'paragraph',
          text: '🎼 Change the numbers to write your own tune — higher numbers make higher notes.',
        },
      ],
    },
    {
      id: 'motors',
      number: '5',
      heading: 'Optional: DC motors & wheels 🛞',
      subheading: 'For a rolling robot instead of a walking one.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "If you're building a **wheeled** robot rather than Otto, you'll use **DC motors** — these just spin round and round (great for wheels). They need two extra things:",
        },
        {
          type: 'card',
          title: 'A motor driver',
          body: "A helper board (L298N or L293D) — the ESP32 can't power motors directly, so the driver does the muscle work.",
        },
        {
          type: 'card',
          title: 'Its own battery',
          body: 'Motors are power-hungry; they get a separate battery. The board only sends control signals.',
        },
        {
          type: 'code',
          caption: 'DriveForward.ino — spin, then stop (via a driver)',
          code:
`#define IN1 D6
#define IN2 D7

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
}

void loop() {
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);  // forward
  delay(1000);
  digitalWrite(IN1, LOW);  digitalWrite(IN2, LOW);  // stop
  delay(1000);
}`,
        },
        {
          type: 'paragraph',
          text: "💡 Swapping which pin is HIGH makes the wheel spin the other way — that's how a robot turns.",
        },
      ],
    },
    {
      id: 'ingredients',
      number: '🎉',
      heading: 'You now have every Otto ingredient!',
      subheading: "Look how far you've come.",
      blocks: [
        {
          type: 'paragraph',
          text:
            'Eyes to see, servos to walk, a buzzer to sing — you can now program all three. Next module, they become a robot.',
        },
        {
          type: 'stats',
          items: [
            { value: '👀', label: '**Ultrasonic** = eyes *(Module 7)*' },
            { value: '🦿×4', label: '**Four servos** = legs & feet *(today!)*', highlight: true },
            { value: '🎵', label: '**Buzzer** = voice *(today!)*' },
          ],
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🤖',
          title: 'Next module: the build begins',
          body:
            "In Module 9 you'll assemble Otto's body, mount the four servos, and take his very first steps. Everything you've learned since Module 1 comes together.",
        },
      ],
    },
    {
      id: 'mission',
      number: '🎯',
      heading: 'Mission: move to the music',
      subheading: 'Combine a servo and a buzzer into one little performer.',
      blocks: [
        {
          type: 'steps',
          items: [
            { eyebrow: 'Step 1', title: 'Sweep to a beat', body: 'Play a beep, then move the servo; play another beep, move it back. Make the servo "dance" in time with the sound.' },
            { eyebrow: 'Step 2', title: 'Write a tune', body: 'Change the notes in `Melody.ino` to compose something of your own — or look up the notes to a song you like.' },
            { eyebrow: 'Challenge', icon: '⭐', title: 'Challenge', body: 'Make the servo wave **and** beep at the same tempo — a robot that dances while it sings.', highlight: true },
          ],
        },
      ],
    },
  ],
  glossary: [
    { term: 'Servo motor', body: 'A motor that moves to an exact angle (0–180°) and holds it.' },
    { term: 'Angle', body: 'How far the servo turns — from 0° to 180°.' },
    { term: 'ESP32Servo', body: 'The library our board needs to run servos.' },
    { term: 'attach() / write()', body: '`attach` picks the pin; `write` sets the angle.' },
    { term: 'Piezo buzzer', body: 'A part that makes sound from an electrical signal.' },
    { term: 'tone() / noTone()', body: 'Start a note at a pitch; stop the sound.' },
    { term: 'Frequency (Hz)', body: 'How high or low a note is — bigger number = higher pitch.' },
    { term: 'DC motor', body: 'A motor that spins continuously — good for wheels.' },
    { term: 'Motor driver', body: "A helper board that gives motors the power the chip can't." },
    { term: 'Library', body: 'Ready-made code you add to teach the board a new skill.' },
  ],
  quiz: [
    {
      question: 'How is a servo different from a normal motor?',
      answer: 'A servo moves to an **exact angle (0–180°)** and holds it, instead of just spinning round and round.',
    },
    {
      question: 'Which library do you need for servos on this board?',
      answer: '`ESP32Servo` — the plain "Servo" library won\'t work here.',
    },
    {
      question: 'In `tone(pin, 1000)`, what does the 1000 control?',
      answer: 'The **pitch** (frequency in Hz). Bigger number = higher note.',
    },
    {
      question: 'Why do several servos need their own battery?',
      answer: 'Motors are **power-hungry**; the board can\'t supply enough. It only sends the signal.',
    },
    {
      question: "What three parts make up Otto's eyes, legs, and voice?",
      answer: '**Ultrasonic** = eyes, **four servos** = legs & feet, **buzzer** = voice.',
    },
    {
      question: '⭐ Challenge: how would you make a servo move to 45°?',
      answer: '`myServo.write(45);`',
    },
  ],
  teacherNotes: {
    sessionLength: '90 minutes',
    agenda: [
      { time: 'S11 · Servo', title: 'Install & angles', body: 'Install ESP32Servo; ServoAngles; ServoSweep; ServoKnob.' },
      { time: 'S11 · Power talk', title: 'Power talk', body: 'Why many servos need their own battery (Otto foreshadow).' },
      { time: 'S12 · Buzzer', title: 'Buzzer', body: 'Beep; note chart; Melody; write your own tune.' },
      { time: 'S12 · Wrap', title: 'Wrap', body: '(Optional) motors; the Otto ingredients graphic; the mission.' },
    ],
    prep: [
      'Per pair: an SG90 servo, a piezo buzzer, the pot & LED from earlier, and (optional) DC motors + driver.',
      'Pre-install the `ESP32Servo` library if you can. Suggested pins: servo signal `D9`, buzzer `D5`.',
      "One servo can run off the board's `5V` for testing; if it jitters or resets the board, switch to external 5V. GPIO fallbacks from Module 1 if labels aren't recognised.",
    ],
    noteGroups: [
      {
        heading: 'Two things worth stating',
        items: [
          '**Servo = position, DC motor = spinning.** Make the distinction explicit; kids mix them up.',
          '**tone() needs a current ESP32 core.** It\'s built into modern cores; if beeps don\'t work, update the ESP32 board package.',
        ],
      },
      {
        heading: 'Teaching tips',
        items: [
          "**Reuse the wins:** ServoKnob is Module 6's `map()`; ServoSweep is the `for` loop. Point out that new hardware + old code = new powers.",
          'Let students **compose** a tune — ownership makes the buzzer memorable.',
          '**Land the ending:** the ingredients graphic is a motivation peak. Pause on it and preview the build.',
        ],
      },
      {
        heading: 'Keep it inclusive',
        items: [
          '**Stretch:** the dance-and-sing challenge; longer melodies; a two-servo puppet.',
          '**Support:** provide sketches pre-typed; students edit angles, pitches, and delays.',
        ],
      },
    ],
  },
};

export default module8;
