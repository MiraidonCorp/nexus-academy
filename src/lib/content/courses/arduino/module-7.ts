import type { CourseModule } from '../types';

const module7: CourseModule = {
  slug: 'module-7',
  number: 7,
  title: 'Giving a Robot Senses',
  lede:
    'Your board can feel a button. Now it will **see light** and **measure distance** — the very senses Otto uses to explore the world without bumping into things.',
  sessionLabel: 'Sessions 9–10',
  ageRange: 'Ages 10–14',
  duration: '2 × 90 minutes',
  summary:
    'Build a light sensor into an automatic night light, then wire an ultrasonic sensor to measure distance and power a proximity alarm.',
  goals: [
    '☀️ Read a **light sensor**',
    '🌙 Build a **night light**',
    '📏 Measure **distance**',
    '⚡ Wire it **safely at 3.3V**',
  ],
  emoji: '👀',
  accent: 'blue',
  sections: [
    {
      id: 'what',
      number: '1',
      heading: 'What is a sensor?',
      subheading: 'The parts that let a robot feel the world.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'A **sensor** is a part that turns something in the real world — light, distance, heat, sound — into a **number** the board can read. Sensors are how a robot does the **Sense** step of the loop. Give a robot the right sensors and it can react to almost anything.',
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🤖',
          title: 'This is where Otto begins',
          body:
            "Both sensors today go straight into your Otto build. The light sensor could let Otto react to a torch; the **ultrasonic sensor becomes Otto's eyes**, so he can spot a wall and turn before he walks into it.",
        },
      ],
    },
    {
      id: 'ldr',
      number: '2',
      heading: 'The light sensor',
      subheading: 'A part that "feels" how bright it is.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "A **light sensor** (also called an **LDR** or photoresistor) changes with brightness: lots of light gives one reading, darkness gives another. Because it's a **smooth, in-between** value, you read it with `analogRead()` — just like the dial in Module 6.",
        },
        {
          type: 'table',
          caption: 'Light sensor wiring',
          columns: ['Pin', 'Connects to'],
          rows: [
            ['`3V3`', 'Top of the LDR'],
            ['`A0`', 'Middle tap — the reading'],
            ['`GND`', 'Bottom, through a resistor'],
          ],
        },
        {
          type: 'paragraph',
          text:
            'Have a 3-pin light sensor module? Even easier — just wire `S · V · G`, no extra resistor.',
        },
        {
          type: 'code',
          caption: '☀️ ReadLight.ino — prints the brightness',
          code:
            '#define LDR_PIN A0\n\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int light = analogRead(LDR_PIN);\n  Serial.println(light);\n  delay(200);\n}',
        },
        {
          type: 'paragraph',
          text:
            "🔦 Cover the sensor with your hand, then shine a light on it. Write down the two numbers — you'll need them next.",
        },
      ],
    },
    {
      id: 'nightlight',
      number: '3',
      heading: 'Build a night light 🌙',
      subheading: 'Dark? Turn on. Bright? Turn off.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'Now add a decision: *if it\'s dark, switch the LED on.* Pick a **threshold** number that sits between your "covered" and "lit" readings from the last step.',
        },
        {
          type: 'code',
          caption: '🌙 NightLight.ino — lights up in the dark',
          code:
            '#define LDR_PIN A0\n#define LED_PIN D2\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  int light = analogRead(LDR_PIN);\n  if (light < 1000) {           // dark? (use YOUR number)\n    digitalWrite(LED_PIN, HIGH);  // light on\n  } else {\n    digitalWrite(LED_PIN, LOW);   // light off\n  }\n}',
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🔧',
          title: 'Two tuning tips',
          body:
            '**1.** Change `1000` to a number between your bright and dark readings. **2.** If it works *backwards* (on in the light), just swap `<` for `>` — that depends on how your sensor is wired.',
        },
      ],
    },
    {
      id: 'ultrasonic',
      number: '4',
      heading: "The ultrasonic sensor — Otto's eyes 👀",
      subheading: 'Measuring distance with sound, like a bat.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'The **ultrasonic sensor** measures how far away something is — by **bouncing sound** off it. It sends out a quick *chirp* too high for us to hear, then listens for the echo. The longer the echo takes to return, the further away the object is. Bats and dolphins do exactly this!',
        },
        {
          type: 'steps',
          items: [
            { icon: '📢', eyebrow: 'Step 1', title: 'Chirp out', body: 'The sensor sends a sound too high-pitched for us to hear.' },
            { icon: '👂', eyebrow: 'Step 2', title: 'Echo back', body: 'The chirp bounces off an object and returns to the sensor.' },
            { icon: '🧮', eyebrow: 'Step 3', title: 'Time it', body: 'The board times the round trip — longer time means further away.', highlight: true },
          ],
        },
        {
          type: 'tags',
          items: [
            { text: 'VCC', sub: 'Power' },
            { text: 'Trig', sub: 'Trigger the chirp' },
            { text: 'Echo', sub: 'Hear it return' },
            { text: 'GND', sub: 'Ground' },
          ],
        },
      ],
    },
    {
      id: 'safety',
      number: '5',
      heading: '⚠️ Wire the Echo pin safely',
      subheading: 'The one place this sensor can hurt your 3.3V board.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'Most ultrasonic sensors run on **5 volts**, and their `Echo` pin sends back a **5 volt** signal. But remember the golden rule — this board only wants **3.3 volts** on its pins. Sending 5 V straight in can stress it. There are two easy fixes:',
        },
        {
          type: 'card',
          icon: '✅',
          title: 'Easiest: use an HC-SR04P',
          body: 'The "P" version runs happily at 3.3 V — just wire it up, no extra parts.',
        },
        {
          type: 'card',
          icon: '🔧',
          title: 'Or: a voltage divider',
          body: 'Two resistors on the `Echo` wire gently drop 5 V down to a safe ~3.3 V.',
        },
        {
          type: 'table',
          caption: 'Voltage divider path',
          columns: ['Point', 'Role'],
          rows: [
            ['`Echo` (5V)', 'signal in'],
            ['R1', 'drops the voltage'],
            ['Tap → board pin', '~3.3V safe signal'],
            ['R2', 'continues to ground'],
            ['`GND`', 'ground'],
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          icon: '⚡',
          title: "Ask your teacher which one you're using",
          body:
            "Your kit has *either* a 3.3 V-safe sensor *or* a divider already set up. Don't connect a raw 5 V Echo straight to a pin.",
        },
      ],
    },
    {
      id: 'measure',
      number: '6',
      heading: 'Measure the distance 📏',
      subheading: 'Chirp, listen, do the maths.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'In code: give `Trig` a tiny pulse to fire the chirp, then use `pulseIn()` to time how long `Echo` stays high. Multiply by the speed of sound (and halve it, for the round trip) to get centimetres.',
        },
        {
          type: 'code',
          caption: '📏 ReadDistance.ino — prints distance in cm',
          code:
            '#define TRIG_PIN D9\n#define ECHO_PIN D8\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(TRIG_PIN, OUTPUT);\n  pinMode(ECHO_PIN, INPUT);\n}\n\nvoid loop() {\n  // 1. fire a tiny chirp\n  digitalWrite(TRIG_PIN, LOW);  delayMicroseconds(2);\n  digitalWrite(TRIG_PIN, HIGH); delayMicroseconds(10);\n  digitalWrite(TRIG_PIN, LOW);\n\n  // 2. time the echo, then turn it into cm\n  long echoTime = pulseIn(ECHO_PIN, HIGH);\n  int distance = echoTime * 0.034 / 2;\n\n  Serial.print(distance);\n  Serial.println(" cm");\n  delay(300);\n}',
        },
        {
          type: 'paragraph',
          text:
            '✋ Wave your hand in front of the sensor and watch the centimetres change. Your robot can now judge distance!',
        },
      ],
    },
    {
      id: 'mission',
      number: '🎯',
      heading: 'Mission: the proximity alarm 🚨',
      subheading: 'The closer something gets, the faster the light flashes.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Let's turn distance into action. We teach the board one new trick — a `readDistance()` helper — then flash the LED faster the closer an object is.",
        },
        {
          type: 'code',
          caption: '🚨 ProximityAlarm.ino — flashes faster as things approach',
          code:
            '#define TRIG_PIN D9\n#define ECHO_PIN D8\n#define LED_PIN  D2\n\n// our new trick: measure distance and hand back cm\nint readDistance() {\n  digitalWrite(TRIG_PIN, LOW);  delayMicroseconds(2);\n  digitalWrite(TRIG_PIN, HIGH); delayMicroseconds(10);\n  digitalWrite(TRIG_PIN, LOW);\n  long t = pulseIn(ECHO_PIN, HIGH);\n  return t * 0.034 / 2;\n}\n\nvoid setup() {\n  pinMode(TRIG_PIN, OUTPUT);\n  pinMode(ECHO_PIN, INPUT);\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  int d = readDistance();\n  int wait = d * 10;          // closer = shorter wait = faster flash\n  if (wait < 30)  wait = 30;   // don\'t flash TOO fast\n  if (wait > 500) wait = 500;  // cap the slow end\n\n  digitalWrite(LED_PIN, HIGH); delay(wait);\n  digitalWrite(LED_PIN, LOW);  delay(wait);\n}',
        },
        {
          type: 'steps',
          items: [
            { eyebrow: 'Step 1', title: 'Test it', body: 'Move your hand closer and further — the LED should flash faster as you approach.' },
            { eyebrow: 'Step 2', title: 'Tune it', body: 'Change the `* 10` or the caps to make the alarm more sensitive or calmer.' },
            { eyebrow: 'Step 3', title: '⭐ Challenge', body: 'Add a "danger zone": if something is **closer than 10 cm**, keep the LED solid ON instead of flashing.', highlight: true },
          ],
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🤖',
          title: 'Coming next module',
          body:
            'Swap the LED for a **buzzer** and this becomes a real *beeping* alarm — and it\'s exactly how **Otto avoids obstacles**: "something\'s close → do something about it."',
        },
      ],
    },
  ],
  glossary: [
    { term: 'Sensor', body: 'A part that turns something real (light, distance…) into a number.' },
    { term: 'LDR / light sensor', body: "A part whose reading changes with brightness." },
    { term: 'Threshold', body: 'A cut-off number your code compares against to make a decision.' },
    { term: 'Ultrasonic', body: 'Sound too high for humans to hear — used to measure distance.' },
    { term: 'Echo', body: 'Sound bouncing back off an object.' },
    { term: 'Trig / Echo pins', body: 'Trig fires the chirp; Echo reports how long it took to return.' },
    { term: 'pulseIn()', body: 'Times how long a pin stays HIGH — used to time the echo.' },
    { term: 'Voltage divider', body: 'Two resistors that lower a voltage — here, 5 V down to ~3.3 V.' },
    { term: 'Function', body: 'A named "trick" you teach the board, like `readDistance()`.' },
    { term: 'return', body: 'How a function hands a value back to your program.' },
  ],
  quiz: [
    { question: 'What does a sensor do?', answer: 'Turns something in the real world (light, distance, heat…) into a **number** the board can read.' },
    {
      question: 'Which command reads a light sensor, and what range does it give?',
      answer: '`analogRead()` — a value from **0 to 4095**.',
    },
    {
      question: 'How does an ultrasonic sensor measure distance?',
      answer: 'It sends a **sound chirp** and **times the echo** bouncing back — longer time means further away.',
    },
    {
      question: 'Why must you be careful wiring the Echo pin?',
      answer: 'It can output **5 V**, but the board wants **3.3 V**. Use an HC-SR04P or a **voltage divider**.',
    },
    {
      question: 'In the night light, what is the number `1000` for?',
      answer: 'It\'s the **threshold** — the cut-off that decides "dark enough to switch on."',
    },
    {
      question: '⭐ Challenge: which robot-loop step do sensors provide?',
      answer: '**Sense** — they\'re how the robot feels the world before it Thinks and Acts.',
    },
  ],
  teacherNotes: {
    sessionLength: '2 × 90 minutes',
    agenda: [
      { time: 'S9 · Light', title: 'Read the light sensor', body: 'Wire the LDR; ReadLight; record bright/dark numbers.' },
      { time: 'S9 · Night light', title: 'Build the night light', body: 'NightLight.ino; tune the threshold; flip the logic.' },
      { time: 'S10 · Distance', title: 'Measure distance', body: 'Ultrasonic wiring + 3.3V safety; ReadDistance.' },
      { time: 'S10 · Alarm', title: 'Proximity alarm', body: 'ProximityAlarm.ino + tuning + danger-zone challenge.' },
    ],
    prep: [
      'Per pair: a light sensor (bare LDR + 10 kΩ resistor, or a 3-pin module), an ultrasonic sensor, and the LED-on-`D2` breadboard.',
      'Sort out the ultrasonic 3.3V question before class: supply HC-SR04P sensors, or pre-build a divider on each Echo wire. Suggested pins: `Trig = D9`, `Echo = D8`.',
      'Powered from `3V3` where possible; GPIO fallbacks from Module 1 if labels aren\'t recognised (`A0=1, D2=5, D8=17, D9=18`).',
    ],
    noteGroups: [
      {
        heading: 'The calibration habit',
        items: [
          'Read before you decide. Always watch the Serial numbers first, then choose a threshold. This teaches real sensor calibration and makes the night light reliable across different rooms.',
          "The light sensor's direction depends on wiring — expect some to flip `<`/`>`. That's a feature, not a bug.",
        ],
      },
      {
        heading: 'Teaching tips',
        items: [
          'Bat/dolphin echolocation makes ultrasonic instantly intuitive — lead with it.',
          '`readDistance()` reuses the "teach the board a trick" idea from Morse (Module 4). Point that back-reference out.',
          'Keep the Otto framing alive: "this exact code is how Otto will see." It builds anticipation for the build modules.',
        ],
      },
      {
        heading: 'Keep it inclusive',
        items: [
          'Stretch: the danger-zone challenge; combine both sensors (a night light that only reacts when something is near).',
          'Support: provide sketches pre-typed; students record numbers and edit the threshold / caps.',
        ],
      },
    ],
  },
};

export default module7;
