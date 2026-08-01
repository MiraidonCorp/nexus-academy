import type { CourseModule } from '../types';

const module1: CourseModule = {
  slug: 'module-1',
  number: 1,
  title: 'Meet Your ESP32-S3 Nano',
  lede:
    "This tiny board is the brain of everything you'll build — including a robot named Otto that walks, dances, and talks to your phone. Today, you get to know it inside and out.",
  sessionLabel: 'Session 1',
  ageRange: 'Ages 10–14',
  duration: '90 minutes',
  summary:
    'Meet the ESP32-S3 brain, tour every part of the board, and discover its wireless superpower.',
  goals: [
    '🤖 Say **what a robot is**',
    '🧠 Explain a **microcontroller**',
    '🔍 Find **every part** on the board',
    "📡 Name the chip's **superpower**",
  ],
  emoji: '🤖',
  accent: 'green',
  sections: [
    {
      id: 'robot',
      number: '1',
      heading: 'What is a robot?',
      subheading: "Once you know the trick, you'll spot robots everywhere.",
      blocks: [
        {
          type: 'paragraph',
          text:
            "A **robot** is a machine that can **sense** the world around it, **think** about what to do, and then **act** on it. That's the whole idea. Your board can do something extra, too — it can **talk** without any wires.",
        },
        {
          type: 'steps',
          items: [
            { icon: '👁️', eyebrow: 'Step 1', title: 'Sense', body: 'Read the world with sensors — light, distance, buttons, sound.' },
            { icon: '🧠', eyebrow: 'Step 2', title: 'Think', body: 'The brain decides what to do, using the code *you* write.' },
            { icon: '⚙️', eyebrow: 'Step 3', title: 'Act', body: 'Do something — light an LED, buzz, or move a motor.' },
            { icon: '📡', eyebrow: 'Bonus', title: 'Talk', body: 'Send and receive over Wi-Fi & Bluetooth — no wires.', highlight: true },
          ],
        },
        {
          type: 'card',
          icon: '🔎',
          title: 'Robots hiding in plain sight',
          body:
            'An **automatic door** senses you and opens. A **washing machine** senses water and time, then runs a cycle. A **robot vacuum** senses walls and steers around them. And **Otto** — the robot you\'ll build — senses distance with its "eyes," thinks, and walks. Same three steps every time: sense, think, act.',
        },
      ],
    },
    {
      id: 'brain',
      number: '2',
      heading: 'Meet the brain: the microcontroller',
      subheading: 'A whole computer, shrunk down to a single chip.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'Every robot needs a brain. Ours is a **microcontroller** — a tiny computer squeezed onto one chip. A laptop is a *big* computer that does everything at once. A microcontroller is a *small* computer that does one job really well, sips hardly any power, and costs about as much as a burger.',
        },
        {
          type: 'paragraph',
          text: "Our chip is called the `ESP32-S3R8`, made by a company called Espressif. Here's what makes it special:",
        },
        {
          type: 'stats',
          items: [
            { value: '2×', label: 'brains (**dual-core**) — it can do two things at once' },
            { value: '240 MHz', label: 'up to 240 **million** steps every second — super fast' },
            { value: '8+16 MB', label: 'memory to **think** and **remember** lots of code' },
            { value: 'Wi-Fi + BT', label: '**talks without wires** — the superpower', highlight: true },
          ],
        },
        {
          type: 'callout',
          variant: 'spark',
          title: 'The superpower',
          body:
            "Most robot brains can only *think*. Yours can also **talk over the air** using built-in radios. That's how, later in the course, you'll drive Otto around from a phone with no cable at all.",
        },
      ],
    },
    {
      id: 'tour',
      number: '3',
      heading: 'Board tour: find every part',
      subheading: 'The chip is the brain. The board is its body.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'The **board** is the little green skateboard the chip rides on. It carries all the parts that connect the brain to the real world. Grab your board and hunt for each one — tick it off as you go.',
        },
        {
          type: 'checklist',
          title: '🔦 Scavenger hunt — can you find them all?',
          items: [
            '**The main chip** — the square chip with the little squiggly *antenna*. This is the ESP32-S3 brain.',
            '**USB-C port** — plugs into the computer. Carries power, your code, *and* chat between board and PC.',
            "**The pins** — the two rows of gold holes along the edges. These are the doorways.",
            '**RST button** — "Reset." Press to restart your program from the top.',
            '**BOOT button** — helps the board accept new code if an upload gets stuck.',
            '**Built-in LED** — a tiny light you can blink with code, no wiring needed.',
            '**RGB LED** — a special light that can glow *any* color: red, green, blue, and mixes.',
            '**Flash memory chip** — labelled "Winbond." This is the board\'s storage, where your program lives.',
            '**The crystal** — a little silver "40.000 MHz" part. It\'s the heartbeat that keeps perfect time.',
          ],
        },
      ],
    },
    {
      id: 'pins',
      number: '4',
      heading: "The pins: the board's doorways",
      subheading: "A first look at the map you'll use all course long.",
      blocks: [
        {
          type: 'paragraph',
          text:
            'Look along both edges — those gold holes are the **pins** (some people call them "ports"). Each pin is a **doorway** where electricity goes *in* or comes *out*. That\'s how the brain connects to buttons, sensors, lights, and motors.',
        },
        { type: 'heading', text: 'Every pin has two names' },
        {
          type: 'paragraph',
          text:
            'This surprises everyone at first. The same doorway has a **friendly name** (printed for humans) and a **real name** (what the chip calls it inside). Some pins also have a **special job**. Your code understands all of them.',
        },
        {
          type: 'tags',
          items: [
            { text: 'GPIO11', sub: 'Real name' },
            { text: 'A4', sub: 'Friendly name' },
            { text: 'SDA', sub: 'Special job' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: "Don't memorize this!",
          body:
            "This is a **map**, not a test. You'll come back to it every time you build something. For now, just get comfortable that the pins come in **families** — we'll dig into each family next session in Module 2.",
        },
        { type: 'heading', text: 'The pin families' },
        {
          type: 'paragraph',
          text: 'Power · Digital (D) · Analog (A) · Control · plus special jobs like I²C, SPI and Serial.',
        },
        {
          type: 'table',
          caption: 'Left side (top → bottom)',
          columns: ['Pin', 'GPIO', 'Job'],
          rows: [
            ['D13', 'GPIO48', 'Digital · SPI SCK'],
            ['3V3', '—', 'Power out · 3.3 volts'],
            ['B0', 'GPIO46', 'Bonus digital pin'],
            ['A0', 'GPIO1', 'Analog in'],
            ['A1', 'GPIO2', 'Analog in'],
            ['A2', 'GPIO3', 'Analog in'],
            ['A3', 'GPIO4', 'Analog in'],
            ['A4', 'GPIO11', 'Analog · I²C SDA'],
            ['A5', 'GPIO12', 'Analog · I²C SCL'],
            ['A6', 'GPIO13', 'Analog in'],
            ['A7', 'GPIO14', 'Analog in'],
            ['VBUS', '—', 'Power · 5 V from USB'],
            ['B1', 'GPIO0', 'Bonus digital (BOOT)'],
            ['GND', '—', 'Ground · the "0" line'],
            ['VIN', '—', 'Power in · from a battery'],
          ],
        },
        {
          type: 'table',
          caption: 'Right side (top → bottom)',
          columns: ['Pin', 'GPIO', 'Job'],
          rows: [
            ['D12', 'GPIO47', 'Digital · SPI MISO'],
            ['D11', 'GPIO38', 'Digital · SPI MOSI'],
            ['D10', 'GPIO21', 'Digital'],
            ['D9', 'GPIO18', 'Digital'],
            ['D8', 'GPIO17', 'Digital'],
            ['D7', 'GPIO10', 'Digital'],
            ['D6', 'GPIO9', 'Digital'],
            ['D5', 'GPIO8', 'Digital'],
            ['D4', 'GPIO7', 'Digital'],
            ['D3', 'GPIO6', 'Digital'],
            ['D2', 'GPIO5', 'Digital'],
            ['GND', '—', 'Ground · the "0" line'],
            ['RST', '—', 'Reset · restart program'],
            ['D0', 'GPIO44', 'Digital · Serial RXD'],
            ['D1', 'GPIO43', 'Digital · Serial TXD'],
          ],
        },
        {
          type: 'paragraph',
          text:
            '💡 **SDA/SCL** (I²C), **MOSI/MISO/SCK** (SPI) and **RXD/TXD** (Serial) are three ways the board chats with other gadgets. You\'ll meet them later — for now, just notice they live on specific pins.',
        },
      ],
    },
    {
      id: 'safety',
      number: '5',
      heading: 'Handle with care',
      subheading: 'Simple rules that keep your board (and your project) happy.',
      blocks: [
        {
          type: 'callout',
          variant: 'danger',
          title: 'The 3.3-volt rule',
          body:
            'This board speaks **3.3 volts**. Never push a raw **5 volt** signal straight into a pin. When you add sensors later, power most of them from the `3V3` pin. (Servos and motors are the exception — they get their *own* battery power.)',
        },
        {
          type: 'list',
          items: [
            '**Hold the board by its edges** — like a photo. Fingers off the chip and pins when you can.',
            '**Check + and −** before powering anything. Backwards power is the #1 rookie mistake.',
            '**Unplug before you rewire.** Disconnect USB first, change wires, then plug back in.',
            "**Mistakes are normal.** A wire in the wrong hole almost never breaks anything — it just won't work until you fix it.",
          ],
        },
      ],
    },
    {
      id: 'activity',
      number: '6',
      heading: "Today's mission",
      subheading: 'Three things to do this session.',
      blocks: [
        {
          type: 'steps',
          items: [
            { eyebrow: 'Mission 1', icon: '🔦', title: 'Scavenger hunt', body: 'Find all nine parts on your board and tick the list.' },
            { eyebrow: 'Mission 2', icon: '🌈', title: 'The magic moment', body: 'Your teacher loads a demo and the RGB LED cycles colors — proof your brain is alive, with zero wiring.', highlight: true },
            { eyebrow: 'Mission 3', icon: '🤖', title: 'Meet Otto', body: 'Watch Otto walk. Everything you learn from here points to building your own.' },
          ],
        },
      ],
    },
  ],
  glossary: [
    { term: 'Microcontroller', body: "A tiny, whole computer on a single chip — the robot's brain." },
    { term: 'Chip', body: 'The small black square that does the thinking. Ours is the ESP32-S3.' },
    { term: 'Board', body: 'The green base the chip sits on, with ports and pins to connect to the world.' },
    { term: 'Pin / Port', body: 'A doorway where electricity enters or leaves the board.' },
    { term: 'GPIO', body: '"General Purpose Input/Output" — the chip\'s own number for each pin (like GPIO5).' },
    { term: 'Input', body: 'Information coming in — from a button or sensor.' },
    { term: 'Output', body: 'Action going out — a light, a sound, a motor moving.' },
    { term: 'Wi-Fi & Bluetooth', body: 'Two ways the board talks to phones, computers, and the internet — wirelessly.' },
    { term: 'Dual-core', body: 'Two brains in one chip, so it can do two jobs at the same time.' },
    { term: 'RGB LED', body: 'A light that mixes Red, Green and Blue to make any color.' },
    { term: 'Flash memory', body: "The board's storage — where your program is kept, even when powered off." },
    { term: '3.3 V', body: 'The voltage this board runs on. Its "safe" electricity level.' },
  ],
  quiz: [
    { question: 'What are the three things every robot does?', answer: '**Sense, Think, Act.** Our board can also **Talk** wirelessly.' },
    { question: 'What is a microcontroller?', answer: "A **tiny, complete computer on one chip** — it's the robot's brain." },
    {
      question: 'Why does every pin have two names?',
      answer:
        'A **friendly name** is printed for humans (like `A4`), and the **GPIO number** is what the chip calls it inside (`GPIO11`). Your code understands both.',
    },
    { question: 'How many volts does this board run on?', answer: '**3.3 volts.** Never feed a raw 5 V signal straight into a pin.' },
    { question: "Name this board's superpower.", answer: 'Built-in **Wi-Fi and Bluetooth** — it can talk without wires.' },
    {
      question: "⭐ Challenge: What is pin `D2`'s GPIO number? And which two pins are the I²C pins?",
      answer: 'D2 is **GPIO5**. The I²C pins are **A4 (SDA, GPIO11)** and **A5 (SCL, GPIO12)**.',
    },
  ],
  teacherNotes: {
    sessionLength: '90 minutes',
    agenda: [
      { time: 'Warm-up · 10m', title: 'Warm-up', body: '"Where have you seen a robot?" Collect answers; introduce Sense→Think→Act.' },
      { time: 'Concept · 20m', title: 'Concept', body: 'Sections 1–2: robot loop + the microcontroller and its stats.' },
      { time: 'Hands-on · 40m', title: 'Hands-on', body: 'Scavenger hunt + pin map tour + the RGB demo.' },
      { time: 'Wrap · 15m', title: 'Wrap', body: 'Quick-check questions + Otto teaser video.' },
    ],
    prep: [
      'One board + USB-C cable per pair; printed copies of this page (or a screen each).',
      'Pre-flash the RGB demo onto each board so Mission 2 works instantly (or do one live as a reveal).',
      'Queue a short Otto walking/dancing video for the teaser.',
      'Have printed pinout diagrams handy — students will reference them all course.',
    ],
    noteGroups: [
      {
        heading: 'The "magic moment" demo',
        items: [
          'Use a simple sketch that cycles the on-board RGB LED through colors — no wiring required.',
          "If an upload won't start: hold BOOT, tap RST, release BOOT, then upload. Mention this is normal.",
          "Emphasize: \"You didn't wire anything — the light lives on the board. That's your brain saying hello.\"",
        ],
      },
      {
        heading: 'Questions kids ask',
        items: [
          '"Is it a real computer?" Yes — smaller and simpler, built to control things rather than browse the web.',
          '"Why two names per pin?" Friendly labels help humans; GPIO numbers are the chip\'s own labels. Both work in code.',
          '"Can it really connect to my phone?" Yes — that\'s the Wi-Fi/Bluetooth superpower, which we\'ll use to drive Otto.',
        ],
      },
      {
        heading: 'Keep it inclusive',
        items: [
          "Stretch: ask fast finishers to find one pin's GPIO number and one \"special job\" pin on the diagram.",
          'Support: focus on the scavenger hunt and the loop — the pin map is a reference, not a memory test.',
          'Reinforce the 3.3 V rule today so it\'s second nature before wiring begins next module.',
        ],
      },
    ],
  },
};

export default module1;
