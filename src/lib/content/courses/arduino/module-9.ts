import type { CourseModule } from '../types';

const module9: CourseModule = {
  slug: 'module-9',
  number: 9,
  title: 'Build Your Otto Robot',
  lede:
    "This is the moment. Everything you've learned since Module 1 comes together as you assemble Otto, wake him up, and watch him take his very first steps — then dance and sing.",
  sessionLabel: 'Sessions 13–15',
  ageRange: 'Ages 10–14',
  duration: '90 minutes',
  summary:
    'Assemble Otto from four servos and a body, center and calibrate him so he stands straight, then teach him to walk, dance, and sing.',
  goals: [
    '🔧 **Assemble** Otto\'s body',
    '🎯 **Calibrate** the servos',
    '🚶 Make him **walk**',
    '🕺 Make him **dance & sing**',
  ],
  emoji: '🤖',
  accent: 'green',
  sections: [
    {
      id: 'three-session',
      number: '🗓️',
      heading: 'This is a three-session build',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          icon: '🗓️',
          title: 'Sessions 13, 14 & 15',
          body:
            '**Session 13:** assemble & wire (and the golden rule of calibration). **Session 14:** first steps — stand, walk, and fix the wobble. **Session 15:** personality — dances, songs, and moods.',
        },
      ],
    },
    {
      id: 'meet',
      number: '1',
      heading: 'Meet Otto, part by part',
      subheading: 'A friendly little biped — and you know every piece.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'Otto is a walking robot with a head, a body, two legs, and two feet. He moves using **four servos**: two at the hips (to swing the legs) and two at the ankles (to tilt the feet). Together they let him waddle, turn, and dance.',
        },
        {
          type: 'table',
          caption: "Otto's anatomy",
          columns: ['Part', 'Role'],
          rows: [
            ['👀 Ultrasonic eyes', 'See obstacles ahead (Module 7)'],
            ['🦿 Leg servos ×2', 'At the hips — swing the legs'],
            ['🦶 Foot servos ×2', 'At the ankles — tilt the feet'],
            ['🎵 Buzzer', "Otto's voice — beeps and songs"],
          ],
        },
        {
          type: 'paragraph',
          text:
            'Two **hip servos** swing the legs; two **foot servos** tilt the feet. Add the **ultrasonic eyes** and a **buzzer**, and Otto is complete.',
        },
      ],
    },
    {
      id: 'center',
      number: '2',
      heading: 'The golden rule: center the servos FIRST',
      subheading: 'Do this before you attach a single leg.',
      blocks: [
        { type: 'heading', text: 'Session 13 — 🔧 Assemble & wire' },
        {
          type: 'paragraph',
          text:
            "Here's the secret to an Otto that stands straight: **every servo must be centered to 90° before you screw on the legs and feet.** If you attach them at a random angle, Otto will stand crooked forever. So first, upload this tiny sketch to move all four servos to their middle.",
        },
        {
          type: 'code',
          caption: 'CenterServos.ino — sets all four to 90° (run before assembly)',
          code:
`#include <ESP32Servo.h>
Servo leg_L, leg_R, foot_L, foot_R;

void setup() {
  leg_L.attach(D2);  leg_R.attach(D3);
  foot_L.attach(D4); foot_R.attach(D5);
  leg_L.write(90);  leg_R.write(90);   // all centered
  foot_L.write(90); foot_R.write(90);
}

void loop() { }   // just hold at 90°`,
        },
        {
          type: 'callout',
          variant: 'danger',
          icon: '🎯',
          title: 'Attach the horns while centered',
          body:
            'With the servos held at 90°, push the legs/feet on so they point **straight** (legs down, feet flat). Only then screw them in. This one habit saves a wobbly, leaning Otto.',
        },
      ],
    },
    {
      id: 'assemble',
      number: '3',
      heading: 'Assemble the body',
      subheading: "Follow your kit's guide for the exact fit — here's the order.",
      blocks: [
        {
          type: 'steps',
          items: [
            { eyebrow: 'Step 1', title: 'Mount the hip servos', body: 'Fit the two leg servos into the body so their arms poke out the sides.' },
            { eyebrow: 'Step 2', title: 'Build the legs', body: 'Attach a foot servo to the bottom of each leg, then click each leg onto a hip servo — **centered!**' },
            { eyebrow: 'Step 3', title: 'Attach the feet', body: 'Screw the feet onto the foot servos so they sit **flat** on the table.' },
            { eyebrow: 'Step 4', title: 'Add the eyes & voice', body: "Slot the ultrasonic sensor into the head (Otto's eyes) and tuck the buzzer inside the body." },
            { eyebrow: 'Step 5', title: 'Route the wires', body: 'Feed all the servo, sensor, and buzzer wires up into the body toward the board. Keep them tidy.' },
          ],
        },
      ],
    },
    {
      id: 'wire',
      number: '4',
      heading: 'Wire it & power it',
      subheading: 'Signals to the board, muscle-power from a battery.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'Install two libraries first (Library Manager): `Otto DIY` and `ESP32Servo`. Then connect each part. Servo **signal** wires go to the board; servo **power** comes from a battery through a 5V step-down.',
        },
        {
          type: 'table',
          caption: 'Wiring table',
          columns: ['Otto part', 'Wire', 'Goes to'],
          rows: [
            ['Left leg (hip) servo', 'signal', 'D2'],
            ['Right leg (hip) servo', 'signal', 'D3'],
            ['Left foot servo', 'signal', 'D4'],
            ['Right foot servo', 'signal', 'D5'],
            ['Buzzer', '+ / −', 'D6 / GND'],
            ['Ultrasonic', 'Trig / Echo', 'D9 / D8'],
            ['All servos', 'power (red / brown)', '5V buck + GND'],
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          icon: '🔋',
          title: 'Two power rules that make or break the build',
          body:
            "**1. Don't power four servos from the board** — use a battery + 5V step-down (buck). **2. Common ground:** the battery's GND and the board's GND *must* connect together, or the servos won't understand the board's signals. And remember the ultrasonic Echo needs the 3.3 V fix from Module 7.",
        },
      ],
    },
    {
      id: 'wake',
      number: '5',
      heading: 'Wake Otto up',
      subheading: 'The Otto library does the hard maths — you give the commands.',
      blocks: [
        { type: 'heading', text: 'Session 14 — 🚶 First steps' },
        {
          type: 'paragraph',
          text:
            'The **Otto library** already knows how to coordinate four servos into a walk. You just tell it your pin numbers in `Otto.init()`, then call friendly commands like `Otto.home()`. Here\'s Otto\'s first hello:',
        },
        {
          type: 'code',
          caption: 'OttoHello.ino — stand up and greet',
          code:
`#include <Otto.h>
Otto Otto;

#define LEG_L  D2
#define LEG_R  D3
#define FOOT_L D4
#define FOOT_R D5
#define BUZZER D6

void setup() {
  Otto.init(LEG_L, LEG_R, FOOT_L, FOOT_R, true, BUZZER);
  Otto.home();               // stand up straight
  Otto.sing(S_connection);    // a little hello sound
}

void loop() { }`,
        },
        {
          type: 'paragraph',
          text: "If Otto stands but leans a little — perfect, that's the next step to fix.",
        },
      ],
    },
    {
      id: 'walk',
      number: '6',
      heading: 'Make him walk 🚶',
      subheading: 'Four simple commands, and Otto is on the move.',
      blocks: [
        {
          type: 'code',
          caption: 'OttoWalk.ino — forward, back, and turn',
          code:
`// (same #include, Otto object and pin #defines as above)

void setup() {
  Otto.init(LEG_L, LEG_R, FOOT_L, FOOT_R, true, BUZZER);
  Otto.home();
}

void loop() {
  Otto.walk(2, 1000, 1);   // 2 steps forward
  Otto.walk(2, 1000, -1);  // 2 steps backward
  Otto.turn(2, 1000, 1);   // turn left
  Otto.turn(2, 1000, -1);  // turn right
  Otto.home();
  delay(1000);
}`,
        },
        {
          type: 'paragraph',
          text:
            'The numbers mean `(steps, speed, direction)` — bigger speed number = slower, gentler steps. `1` = forward/left, `-1` = back/right.',
        },
      ],
    },
    {
      id: 'trim',
      number: '7',
      heading: 'Fix the wobble (calibration)',
      subheading: 'A few small numbers turn a leaning Otto into a steady walker.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'Even when centered, servos are slightly different, so Otto may lean or drift. The fix is **trims** — tiny angle nudges added in code. Watch which way he tilts, then adjust that servo\'s trim by a few degrees and re-upload until he stands and walks straight.',
        },
        {
          type: 'code',
          caption: 'add this inside setup(), before Otto.home()',
          code:
`  Otto.setTrims(0, 0, 0, 0);  // leg_L, leg_R, foot_L, foot_R
  // e.g. if his left foot tilts in, try foot_L = 8 or -8`,
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🔍',
          title: 'How to tune trims',
          body:
            "Change **one number at a time** by about 5–10, upload, and look. Too far one way? Go the other. It's a little fiddly — that patient nudging is exactly what real roboticists do.",
        },
      ],
    },
    {
      id: 'dance',
      number: '8',
      heading: 'Dance & sing 🎶',
      subheading: 'The Otto library is packed with moves and sounds.',
      blocks: [
        { type: 'heading', text: 'Session 15 — 🕺 Give Otto personality' },
        {
          type: 'paragraph',
          text: 'Otto knows lots of dance moves and jingles built right in. Mix them however you like:',
        },
        {
          type: 'code',
          caption: 'OttoDance.ino — a little boogie',
          code:
`// (same setup with Otto.init + Otto.home)

void loop() {
  Otto.sing(S_happy);                // a happy jingle
  Otto.moonwalker(3, 1000, 25, 1);  // moonwalk
  Otto.crusaito(2, 1000, 20, 1);    // side shuffle
  Otto.swing(2, 1000, 20);         // swing
  Otto.home();
  delay(2000);
}`,
        },
        {
          type: 'paragraph',
          text:
            '🎵 Other moves to try: `jitter`, `flapping`, `tiptoeSwing`, `updown`. Other songs: `S_superHappy`, `S_OhOoh`, `S_cuddly`.',
        },
      ],
    },
    {
      id: 'moods',
      number: '9',
      heading: 'Moods & gestures 😄',
      subheading: 'One command each — a whole little feeling.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'A **gesture** bundles a movement, a sound, and (if you add a face screen) an expression into a single command. Give Otto some feelings:',
        },
        {
          type: 'code',
          caption: 'OttoMoods.ino — happy, super-happy, sad',
          code:
`// (same setup with Otto.init + Otto.home)

void loop() {
  Otto.playGesture(OttoHappy);
  delay(500);
  Otto.playGesture(OttoSuperHappy);
  delay(500);
  Otto.playGesture(OttoSad);
  delay(1500);
}`,
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '😀',
          title: 'Optional: give Otto a face',
          body:
            'Add an **8×8 LED matrix** in the head and gestures show expressions — happy eyes, a surprised mouth, a sleepy face. It\'s an easy, delightful upgrade.',
        },
      ],
    },
    {
      id: 'mission',
      number: '🎯',
      heading: 'Mission: the 20-second Otto show',
      subheading: 'Choreograph your own little performance.',
      blocks: [
        {
          type: 'paragraph',
          text: 'Combine everything into one routine: a greeting, a walk, a spin, a dance move, and a happy finale.',
        },
        {
          type: 'code',
          caption: "OttoShow.ino — your robot's debut",
          code:
`// (same #include, Otto object, pins, and setup with init + home)

void loop() {
  Otto.sing(S_happy);                // 1. hello!
  Otto.walk(3, 1000, 1);         // 2. walk on stage
  Otto.turn(2, 1000, 1);         // 3. spin
  Otto.moonwalker(3, 1000, 25, 1);  // 4. dance
  Otto.playGesture(OttoSuperHappy);  // 5. big finish!
  Otto.home();
  delay(3000);                   // bow, then encore
}`,
        },
        {
          type: 'steps',
          items: [
            { eyebrow: 'Step 1', title: 'Make it yours', body: 'Swap the moves and songs, change the order, tweak the numbers — no two Ottos have to perform the same.' },
            { eyebrow: 'Challenge', icon: '⭐', title: 'Challenge', body: 'Give your show a **theme** — a robot lullaby, a victory dance, a grumpy wake-up. Match the moves to the mood.', highlight: true },
          ],
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🤖',
          title: 'Next module',
          body:
            "Otto can move and perform — but he can't *see* yet. In Module 10 you'll switch on his ultrasonic eyes so he avoids obstacles, and even control him from your phone.",
        },
      ],
    },
  ],
  glossary: [
    { term: 'Biped', body: 'A robot (or animal) that walks on two legs — like Otto.' },
    { term: 'Hip / foot servo', body: "Otto's four servos: two swing the legs, two tilt the feet." },
    { term: 'Calibrate / center', body: 'Setting servos to 90° so parts attach straight.' },
    { term: 'Trim', body: 'A tiny angle nudge in code to fix a leaning robot.' },
    { term: 'Otto library', body: 'Ready-made code that turns four servos into walks and dances.' },
    { term: 'Otto.init()', body: 'Tells the library which pins your servos and buzzer use.' },
    { term: 'Otto.home()', body: 'Puts Otto in his neutral, standing-straight pose.' },
    { term: 'Gesture', body: 'A bundled move + sound (+ face) played with one command.' },
    { term: '5V buck', body: "A step-down that powers the servos from a battery." },
    { term: 'Common ground', body: "Connecting two power sources' GND so signals work." },
  ],
  quiz: [
    {
      question: 'Why must you center the servos before attaching legs and feet?',
      answer: 'So the parts attach **straight**. If a servo is at a random angle when you fix the horn, Otto stands crooked.',
    },
    {
      question: 'How many servos does Otto use, and where?',
      answer: '**Four** — two at the **hips** (swing the legs) and two at the **ankles** (tilt the feet).',
    },
    {
      question: 'Where do the servos get their power?',
      answer: 'From a **battery through a 5V step-down (buck)** — not the board.',
    },
    {
      question: 'What is "common ground" and why does it matter?',
      answer: "Connecting the battery's GND to the board's GND. Without it, the servos can't read the board's signals.",
    },
    {
      question: 'Otto leans to one side — what do you adjust?',
      answer: "His **trims** — nudge that servo's trim number a few degrees and re-upload.",
    },
    {
      question: '⭐ Challenge: what does `Otto.walk(2, 1000, -1)` do?',
      answer: 'Takes **2 steps backward** (direction `-1`), fairly slowly.',
    },
  ],
  teacherNotes: {
    sessionLength: '90 minutes',
    agenda: [
      { time: 'S13 · Build', title: 'Build', body: 'Center servos, assemble body, wire, install libraries.' },
      { time: 'S14 · Walk', title: 'Walk', body: 'OttoHello, OttoWalk, then trim-tuning until straight.' },
      { time: 'S15 · Personality', title: 'Personality', body: 'Dances, songs, gestures, and the 20-second show.' },
    ],
    prep: [
      'Sort out servo power (battery + 5V buck) and common ground before the build. Underpowering four servos from the board causes brownouts and random resets.',
      'Pre-print the wiring table; pre-install both libraries.',
      'Install an ESP32-compatible Otto library alongside `ESP32Servo` and test the walk on one built robot yourself first — ESP32 Otto is community-maintained.',
    ],
    noteGroups: [
      {
        heading: 'Before class — the important bit',
        items: [
          '**ESP32 Otto is community-maintained.** Install an **ESP32-compatible Otto library** alongside `ESP32Servo` and test the walk on one built robot yourself first. Confirm the exact `Otto.init()` signature and pin order for the version you install — details vary between forks.',
          'Sort out **servo power** (battery + 5V buck) and **common ground** before the build. Underpowering four servos from the board causes brownouts and random resets.',
          'Pre-print the wiring table; pre-install both libraries.',
        ],
      },
      {
        heading: 'The two make-or-break habits',
        items: [
          '**Center before attaching.** Run CenterServos first, every time. It prevents 90% of "my Otto is crooked" problems.',
          '**Trim patiently.** One number, small change, upload, observe. Frame it as normal engineering, not failure.',
        ],
      },
      {
        heading: 'Common problems',
        items: [
          '**Board resets when servos move** → power/brownout; use the buck, check common ground.',
          '**A leg moves the wrong way** → servo horn attached off by 180°, or leg/foot pins swapped in `init()`.',
          '**Won\'t compile** → wrong Otto library for ESP32, or `ESP32Servo` missing.',
        ],
      },
      {
        heading: 'Keep it inclusive',
        items: [
          '**Stretch:** the themed show; add an LED-matrix face; invent a new gesture from basic moves.',
          '**Support:** pair up for assembly; provide a known-good sketch so the focus is calibration and choreography.',
        ],
      },
    ],
  },
};

export default module9;
