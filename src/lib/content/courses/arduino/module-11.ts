import type { CourseModule } from '../types';

const module11: CourseModule = {
  slug: 'module-11',
  number: 11,
  title: 'Meet Python (MicroPython)',
  lede:
    'Your board can speak a **second language** — the same one used for AI, games, and data science. Same robot, same wires, brand-new superpower.',
  sessionLabel: 'Sessions 18–19',
  ageRange: 'Ages 10–14',
  duration: '90 minutes',
  summary:
    'Flash MicroPython onto the board and rebuild your favorite Arduino projects — blink, a sensor read, a servo move — in Python.',
  goals: [
    '🐍 Set up **MicroPython**',
    '💡 Blink & read sensors in **Python**',
    '🦿 Move a servo **the raw way**',
    '🛠️ Build your **own project**',
  ],
  emoji: '🐍',
  accent: 'purple',
  sections: [
    {
      id: 'why',
      number: '1',
      heading: 'Why learn a second language?',
      subheading: 'Because this one is everywhere.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "So far you've written **Arduino code** (a kind of C++). Now meet **Python** — the language behind **AI, video games, apps, and data science**. The amazing part: your board can run it too, using a kid-sized version called **MicroPython**. Nothing about your robot changes — you're just learning a new way to talk to it.",
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🐍',
          title: 'Same brain, new voice',
          body:
            'Real scientists and AI engineers write Python every day. Learning it here means you\'re using a genuine professional tool — on a robot you built yourself.',
        },
      ],
    },
    {
      id: 'setup',
      number: '2',
      heading: 'Set up MicroPython',
      subheading: 'A one-time setup — your teacher will guide it.',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Install Thonny', body: 'Get the free **Thonny** editor (from thonny.org) — a friendly place to write and run Python.' },
            { title: 'Flash MicroPython', body: 'In Thonny, choose the **MicroPython (ESP32)** interpreter and install the firmware onto the board. *(Hold `BOOT` if it won\'t start — just like Module 4.)*' },
            { title: 'Pick the board & port', body: "Select MicroPython (ESP32) and the right port, and you're connected." },
          ],
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🔁',
          title: 'One board, two languages — but one at a time',
          body:
            'Flashing MicroPython replaces Arduino mode for now. To go back to Arduino later, you just **re-upload an Arduino sketch**. Your teacher will manage the switch.',
        },
        { type: 'heading', text: "The shell: Python's superpower" },
        {
          type: 'paragraph',
          text:
            'Python has a **shell** (also called the REPL) — a live window where you type a line and see the answer *instantly*, no uploading. Try typing right into it:',
        },
        {
          type: 'code',
          caption: 'The Thonny shell — type and press Enter (Python)',
          code:
`print("Hello from Otto's brain!")
7 * 6
print("Python is instant!")`,
        },
        {
          type: 'paragraph',
          text: 'Instant feedback makes Python a joy for trying ideas — no waiting for an upload.',
        },
      ],
    },
    {
      id: 'blink',
      number: '3',
      heading: 'Blink — the Python way',
      subheading: 'The same idea you already know, in a new language.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Here's your very first program — **Blink** — in both languages, side by side. Notice how similar the *ideas* are, even though the words differ.",
        },
        {
          type: 'code',
          caption: 'Arduino C++',
          code:
`void setup() {
  pinMode(D2, OUTPUT);
}
void loop() {
  digitalWrite(D2, HIGH);
  delay(500);
  digitalWrite(D2, LOW);
  delay(500);
}`,
        },
        {
          type: 'code',
          caption: 'MicroPython',
          code:
`from machine import Pin
from time import sleep

led = Pin(5, Pin.OUT)   # D2 = GPIO5

while True:
    led.value(1)      # on
    sleep(0.5)
    led.value(0)      # off
    sleep(0.5)`,
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🏷️',
          title: 'Remember "two names" from Module 1?',
          body:
            'In Arduino you can write `D2`. In Python you use the pin\'s **GPIO number** instead — so `D2` becomes `5`. Same doorway, its other name.',
        },
        {
          type: 'table',
          caption: 'Arduino ↔ Python pin translation',
          columns: ['Arduino label', 'Python (GPIO)', 'We use it for'],
          rows: [
            ['D2', '5', 'LED'],
            ['D3', '6', 'Button'],
            ['A0', '1', 'Dial / light sensor'],
            ['D9', '18', 'Servo / ultrasonic Trig'],
            ['D8', '17', 'Ultrasonic Echo'],
          ],
        },
      ],
    },
    {
      id: 'sensor',
      number: '4',
      heading: 'Read a sensor in Python',
      subheading: 'Those 0–4095 numbers are back — and print live to the shell.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'Reading your dial or light sensor uses `ADC` (analog-to-digital), and gives the same **0–4095** range you met in Module 6. Watch the numbers stream in the shell as you turn the dial:',
        },
        {
          type: 'code',
          caption: 'read_sensor.py',
          code:
`from machine import ADC, Pin
from time import sleep

knob = ADC(Pin(1))          # A0 = GPIO1
knob.atten(ADC.ATTN_11DB)   # read the full 0-3.3V

while True:
    value = knob.read()      # 0 - 4095
    print(value)
    sleep(0.2)`,
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🌈',
          title: 'Bonus: glow the RGB LED',
          body:
            'Python can drive the onboard colour LED too, using the `neopixel` module: `np[0] = (60, 0, 0); np.write()` for red. The exact pin depends on your board — check its docs, just like the RGB bonus in Module 4.',
        },
      ],
    },
    {
      id: 'servo',
      number: '5',
      heading: 'Move a servo — the raw way 🦿',
      subheading: 'See what the Otto library was doing all along.',
      blocks: [
        { type: 'heading', text: '🛠️ Session 19: Build something in Python' },
        {
          type: 'paragraph',
          text:
            "Back in Module 8, the ESP32Servo library moved a servo with a friendly `write(angle)`. In Python, we do it **ourselves** with `PWM` — sending the servo a pulse 50 times a second. This is the secret the library was hiding from you:",
        },
        {
          type: 'code',
          caption: 'servo.py — angle → pulse, by hand',
          code:
`from machine import Pin, PWM
from time import sleep

servo = PWM(Pin(18), freq=50)   # D9 = GPIO18, 50 times a second

def write_angle(angle):
    # turn 0-180° into the pulse the servo wants
    duty = int(1638 + (angle / 180) * (8192 - 1638))
    servo.duty_u16(duty)

while True:
    write_angle(0);   sleep(1)
    write_angle(90);  sleep(1)
    write_angle(180); sleep(1)`,
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '💡',
          title: '"Aha!" moment',
          body:
            "A servo isn't magic — it just wants a pulse of a certain width. The library did this maths for you; now **you** can. Understanding the layer underneath is exactly how engineers level up.",
        },
      ],
    },
    {
      id: 'project',
      number: '6',
      heading: 'Build your own Python project',
      subheading: 'Pick one — or invent your own.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'Here\'s your Module 3 **night light**, reborn in Python. Same logic (`if dark → on`), new language:',
        },
        {
          type: 'code',
          caption: 'night_light.py',
          code:
`from machine import Pin, ADC
from time import sleep

ldr = ADC(Pin(1)); ldr.atten(ADC.ATTN_11DB)  # A0
led = Pin(5, Pin.OUT)                          # D2

while True:
    light = ldr.read()
    if light < 1000:      # dark? (use your number)
        led.value(1)
    else:
        led.value(0)
    sleep(0.2)`,
        },
        { type: 'card', icon: '🔦', title: 'Light lamp', body: 'The night light above — tune the threshold, flip the logic.' },
        { type: 'card', icon: '🦿', title: 'Servo wiggle', body: 'Loop `write_angle()` back and forth to make a part wave.' },
        {
          type: 'callout',
          variant: 'danger',
          icon: '🕺',
          title: "Honest note: Otto's dances stay in C++",
          body:
            'The fancy Otto dance library is written in Arduino C++, so we keep **dancing** in Arduino. Python is brilliant for **sensors, logic, and your own inventions** — use each language where it shines.',
        },
      ],
    },
    {
      id: 'mission',
      number: '🎯',
      heading: 'Mission: two languages, one idea',
      subheading: 'Prove to yourself you can switch languages.',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Pick an old project', body: 'Choose something you built earlier — Blink, the dimmer, the night light, or the reaction game.' },
            { title: 'Rewrite it in Python', body: 'Recreate it in MicroPython and get it working on the same hardware.' },
            { title: '⭐ Compare', body: 'Put the two versions side by side. Which parts look the same? Which language felt easier — and why?' },
          ],
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🚀',
          title: 'Where Python goes next',
          body:
            'The Python you learned here is the *same language* that runs on big computers for AI, games, websites, and science. You can keep going far beyond this board.',
        },
      ],
    },
  ],
  glossary: [
    { term: 'Python', body: 'A popular, readable language used for AI, games, and data.' },
    { term: 'MicroPython', body: 'A small version of Python that runs on chips like ours.' },
    { term: 'Thonny', body: 'A beginner-friendly editor for writing and running Python.' },
    { term: 'Shell / REPL', body: 'A live window where you type a line and see the result instantly.' },
    { term: 'GPIO number', body: "A pin's \"other name\" — Python uses this instead of D2/A0." },
    { term: 'machine', body: 'The MicroPython module that controls pins, ADC, and PWM.' },
    { term: 'ADC', body: 'Analog-to-digital — reads smooth values (0–4095).' },
    { term: 'PWM', body: 'Pulsing a pin on/off fast — here, to move a servo.' },
    { term: 'def', body: 'How you make your own function (a named trick) in Python.' },
    { term: 'Indentation', body: 'In Python, spaces at the start of a line group code together.' },
  ],
  quiz: [
    { question: 'What is MicroPython?', answer: 'A small version of **Python** that runs directly on microcontrollers like our board.' },
    { question: 'In Python, how do you name the pin that Arduino calls `D2`?', answer: 'By its **GPIO number** — `5`. (Every pin has two names.)' },
    { question: "What's special about the Python shell (REPL)?", answer: 'You type a line and get the answer **instantly** — no uploading needed.' },
    { question: 'What range does `ADC.read()` give?', answer: '**0–4095** — the same as `analogRead()` in Arduino.' },
    {
      question: "Why do we still use Arduino C++ for Otto's dances?",
      answer: 'The **Otto dance library** is written in Arduino C++; Python is used for sensors, logic, and your own projects.',
    },
    {
      question: '⭐ Challenge: what does `PWM(Pin(18), freq=50)` set up?',
      answer: 'A pin pulsing **50 times a second** on GPIO18 — the signal a servo wants.',
    },
  ],
  teacherNotes: {
    sessionLength: 'Two 90-minute sessions',
    agenda: [
      { time: 'Session 18 · 90m', title: 'Hello', body: 'Thonny + MicroPython flash; the shell; Blink; read a sensor.' },
      { time: 'Session 19 · 90m', title: 'Build', body: 'Servo via PWM; a chosen project; rewrite-and-compare.' },
    ],
    prep: [
      'Flashing MicroPython replaces Arduino firmware. Plan the switch: flash a class set before the session, and know that returning to Arduino just means uploading an Arduino sketch again. Keep a printed Thonny cheat-sheet.',
      'Pins are GPIO numbers in MicroPython, not `D2`/`A0`. The translation table in this handout is your friend — post it big.',
      'ESP32 ADC needs `atten(ADC.ATTN_11DB)` to read the full 0–3.3V; without it, high readings clip.',
    ],
    noteGroups: [
      {
        heading: 'Teaching tips',
        items: [
          'Lead with the shell. The instant feedback of the REPL is the single most motivating thing about Python — let kids type maths and `print()` live before any program.',
          'Use the side-by-side. Seeing Blink in both languages makes the point that ideas transfer; syntax is just costume.',
          'The servo-by-PWM "aha." Revealing the pulse under `Servo.write()` is a highlight — pause on it.',
          "Be honest about scope. Don't oversell Python for Otto's dances; celebrate it for sensors, logic, and invention.",
        ],
      },
      {
        heading: 'Keep it inclusive',
        items: [
          'Stretch: a Python function library of their own; combining sensor + servo; reading distance with `time_pulse_us()`.',
          'Support: provide starter `.py` files; students change numbers and thresholds. Watch for indentation errors — Python\'s one strict rule.',
        ],
      },
    ],
  },
};

export default module11;
