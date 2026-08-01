import type { CourseModule } from '../types';

const module2: CourseModule = {
  slug: 'module-2',
  number: 2,
  title: 'Ports & Pins, Up Close',
  lede:
    "Last time you learned that every pin has two names. Today you learn what each pin is *for* — the four pin families and the one rule that keeps your board safe.",
  sessionLabel: 'Session 2',
  ageRange: 'Ages 10–14',
  duration: '90 minutes',
  summary:
    'Sort every pin into its family — power, digital, analog, comms — and learn how you choose input or output in code.',
  goals: [
    '🧩 Name the **4 pin families**',
    '🔋 Explain **power & ground**',
    '🔀 Tell **digital** from **analog**',
    '🚪 Choose **input or output**',
  ],
  emoji: '🧩',
  accent: 'green',
  sections: [
    {
      id: 'families',
      number: '1',
      heading: 'The four pin families',
      subheading: 'Every pin belongs to a family. Learn the families, and the whole board makes sense.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "There are a *lot* of pins, but you don't have to learn them one by one. They come in just **four families**, and each family has one job. Get these four, and you can wire almost anything.",
        },
        {
          type: 'steps',
          items: [
            { icon: '🔋', title: 'Power', body: 'Feed electricity in and give it a way out. No commands — just energy.' },
            { icon: '🔘', title: 'Digital', body: 'ON or OFF signals. Perfect for buttons and LEDs.' },
            { icon: '🎚️', title: 'Analog', body: 'Smooth, in-between values. Great for sensors and dials.' },
            { icon: '💬', title: 'Communication', body: 'Special "languages" for chatting with other gadgets.' },
          ],
        },
        {
          type: 'paragraph',
          text:
            "💡 On this board you can use the **printed labels** (`D2`, `A0`, `3V3`…) in your code — you don't need the GPIO numbers to get started.",
        },
      ],
    },
    {
      id: 'power',
      number: '2',
      heading: 'Power pins',
      subheading: 'Nothing moves without power — and every circuit needs a way back.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'Power pins carry the **electricity** that makes everything else run — not commands. There are two kinds: pins that **give power** and a pin that **takes it away again**.',
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '💧',
          title: 'The water-slide idea',
          body:
            'Think of a water slide. The power pins (`3V3`, `5V`, `VIN`) are the **top** — they push electricity out. `GND` is the **splash pool at the bottom**. Electricity only flows if there\'s both a top *and* a bottom. So almost every part you add connects to a **power pin** and a **ground pin**.',
        },
        {
          type: 'table',
          columns: ['Pin', 'What it does'],
          rows: [
            ['3V3', 'Gives out a steady 3.3 volts. Your go-to pin for powering sensors.'],
            ['5V / VBUS', 'Gives out 5 volts, straight from the USB cable.'],
            ['VIN', 'Power coming in from a battery, so your robot runs with no computer attached.'],
            ['GND', 'Ground — the "0" line, the finish line for electricity. A part\'s − almost always connects here. (There are two GND pins.)'],
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          icon: '⚡',
          title: 'The 3.3-volt rule (say it with me)',
          body:
            'This board lives in a **3.3 volt world**. When you add sensors, power most of them from `3V3` — not 5V. And never push a raw 5 volt signal into a pin. (Servos and motors are special: they get their *own* battery power, which you\'ll set up later.)',
        },
      ],
    },
    {
      id: 'digital',
      number: '3',
      heading: 'Digital pins · D2–D13',
      subheading: 'Two states, and only two: ON or OFF.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'A **digital pin** understands exactly two things — like a light switch that\'s either up or down. There\'s nothing in between.',
        },
        {
          type: 'stats',
          items: [
            { value: 'HIGH', label: '= **ON** ≈ 3.3 volts' },
            { value: 'LOW', label: '= **OFF** = 0 volts' },
            { value: '12', label: 'digital pins to play with (**D2**–**D13**)' },
          ],
        },
        { type: 'paragraph', text: 'Digital pins work **both directions**:' },
        {
          type: 'card',
          icon: '⚙️',
          title: 'OUTPUT — the board acts',
          body:
            'You switch the pin ON or OFF to **light an LED** or **beep a buzzer**. In code: `digitalWrite(pin, HIGH)`.',
        },
        {
          type: 'card',
          icon: '👁️',
          title: 'INPUT — the board listens',
          body:
            'You **read** whether something is on or off — **is the button pressed?** In code: `digitalRead(pin)`.',
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '💡',
          title: 'Two pins to leave alone (for now)',
          body:
            '`D0` and `D1` are how the board talks to your computer. Avoid wiring things to them while you\'re coding. And `D13` is wired to the built-in LED — a perfect first output to test.',
        },
      ],
    },
    {
      id: 'analog',
      number: '4',
      heading: 'Analog pins · A0–A7',
      subheading: "For everything that isn't just ON or OFF.",
      blocks: [
        {
          type: 'paragraph',
          text:
            "Some things in the world aren't a simple yes/no. *How bright* is the room? *How far* is that wall? *How far* did you turn the dial? For smooth, in-between values, you need **analog pins**.",
        },
        {
          type: 'card',
          icon: '🔘',
          title: 'Digital = a switch',
          body: 'Only **2** choices: ON or OFF.',
        },
        {
          type: 'card',
          icon: '🎚️',
          title: 'Analog = a dial',
          body: '**Thousands** of steps between fully off and fully on.',
        },
        { type: 'paragraph', text: 'When you read an analog pin, the board gives you a **number**:' },
        {
          type: 'stats',
          items: [
            { value: '0', label: 'no voltage (0 V)' },
            { value: '4095', label: 'full voltage (3.3 V)' },
            { value: '0–4095', label: 'and every step in between' },
          ],
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🔎',
          title: 'Four times sharper than old boards',
          body:
            'Older Arduino boards only counted `0–1023`. Yours counts `0–4095` — **four times more detail**, so your robot senses the world more precisely. In code you\'ll use `analogRead(pin)`.',
        },
        {
          type: 'paragraph',
          text:
            'You have **A0–A7** for reading sensors like light sensors, temperature sensors, and dials. Two of them, **A4** and **A5**, also have a special communication job (coming up next).',
        },
      ],
    },
    {
      id: 'comm',
      number: '5',
      heading: 'Communication pins',
      subheading: 'How the board talks to other gadgets — minus the scary code words.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'Sometimes the board needs to **talk** to another gadget — a screen, a smart sensor, or even another board. And talking to a gadget is a lot like talking to a friend. You only ever need three things:',
        },
        {
          type: 'steps',
          items: [
            { icon: '🗣️', title: 'A mouth', body: 'A wire to **send** messages out.' },
            { icon: '👂', title: 'An ear', body: 'A wire to **listen** for messages coming in.' },
            { icon: '🥁', title: 'A beat', body: 'Sometimes a wire that taps a **beat**, so both stay in time.' },
          ],
        },
        {
          type: 'paragraph',
          text:
            'On real sensors and on your board\'s diagram, those wires have short **label names**. You never memorize them — you just **match the labels** when you plug a part in. Here\'s the secret decoder:',
        },
        {
          type: 'table',
          caption: "Label you'll see",
          columns: ['Label', "What it actually means"],
          rows: [
            ['TX', '🗣️ the board\'s **mouth** — sends messages out (it\'s just short for "transmit")'],
            ['RX', '👂 the board\'s **ear** — listens for messages (short for "receive")'],
            ['SDA', '🗒️ the wire the **words travel on** (the "data" wire)'],
            ['SCL / SCK', '🥁 wires that tap the **beat** (the "clock" wires that keep time)'],
            ['MOSI / MISO', '🗣️👂 **mouth-to-ear** wires between two gadgets'],
          ],
        },
        { type: 'heading', text: 'For the curious: what do the letters actually stand for?' },
        {
          type: 'paragraph',
          text:
            'Every one of these is just a plain phrase squished into initials. Notice the pattern: anything with **"Clock"** is a **beat** wire, anything with **"Data"** or an **in/out** direction is a **words** wire.',
        },
        {
          type: 'table',
          columns: ['Label', 'Full name', 'In plain words'],
          rows: [
            ['TX', 'Transmit', 'send out (mouth)'],
            ['RX', 'Receive', 'listen (ear)'],
            ['SDA', 'Serial Data', 'the words wire'],
            ['SCL', 'Serial Clock', 'the beat wire'],
            ['SCK', 'Serial Clock', 'the beat wire (fast-lane version)'],
            ['MOSI', 'Main Out, Sub In', 'board → gadget (words)'],
            ['MISO', 'Main In, Sub Out', 'gadget → board (words)'],
            ['SS / CS', 'Sub Select / Chip Select', '"pick this gadget"'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '📜',
          title: 'One honest wrinkle: MOSI & MISO',
          body:
            'These two used to stand for "**Master** Out **Slave** In" and "**Master** In **Slave** Out." The tech world has been moving to kinder words — **Main/Sub** or **Controller/Peripheral** — but the parts you buy are still usually printed with the old `MOSI` / `MISO` labels. So you\'ll see the old letters on real gadgets even though the meaning has a nicer name now.',
        },
        {
          type: 'paragraph',
          text:
            'Put those pieces together and you get the board\'s few "languages." You\'ll meet them properly later — for now, just get the vibe:',
        },
        {
          type: 'card',
          icon: '💬',
          title: 'The simple chat',
          body:
            'Just a **mouth** and an **ear** (the `TX` + `RX` wires, on `D0` `D1`). It\'s also how the board talks to your computer. Grown-ups call it **Serial**.',
        },
        {
          type: 'card',
          icon: '👥',
          title: 'The group chat',
          body:
            'Lots of gadgets share just **two wires** — one for words, one for the beat (on `A4` `A5`). Tidy! Grown-ups call it **I²C**.',
        },
        {
          type: 'card',
          icon: '🏎️',
          title: 'The fast lane',
          body:
            'Uses **more wires** so lots of info moves quickly — great for screens (on `D11` `D12` `D13`). Grown-ups call it **SPI**.',
        },
        {
          type: 'card',
          icon: '📡',
          title: 'No wires at all',
          body: '**Wi-Fi + Bluetooth** — the board\'s built-in superpower from Module 1.',
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🙂',
          title: "Don't stress about the letters",
          body:
            'Nobody memorizes these. When you plug in a part, you simply match the label on the *part* to the same label on the *board* — mouth to ear (`TX→RX`), words to words (`SDA→SDA`), beat to beat. That\'s the whole trick.',
        },
      ],
    },
    {
      id: 'io',
      number: '6',
      heading: 'The big idea: input or output — you choose',
      subheading: 'This is the concept that ties the whole board together.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Here's the part that clicks for everyone: **most pins can be a way IN or a way OUT** — and *you* decide, in your code, with one line: `pinMode(pin, INPUT)` or `pinMode(pin, OUTPUT)`.",
        },
        {
          type: 'table',
          columns: ['Direction', 'What it means', 'Examples', 'Robot loop'],
          rows: [
            ['INPUT', 'A door in — the board is listening / sensing.', 'button, light sensor, distance sensor', '👁️ Sense'],
            ['OUTPUT', 'A door out — the board is doing / acting.', 'LED, buzzer, motor signal', '⚙️ Act'],
          ],
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🚪',
          title: 'One pin, your choice',
          body:
            'The same digital pin can **read a button** today and **blink an LED** tomorrow — just change the code. Remember the robot loop from Module 1? **Inputs** feed the *Sense* step, **outputs** drive the *Act* step, and your code is the *Think* in the middle.',
        },
      ],
    },
    {
      id: 'map',
      number: '7',
      heading: 'Your pins, sorted by family',
      subheading: 'The same board from Module 1 — now grouped by job.',
      blocks: [
        {
          type: 'paragraph',
          text: 'The full board, one family at a time. Keep this handy for the color-coding mission.',
        },
        { type: 'heading', text: '🔋 Power' },
        {
          type: 'tags',
          items: [
            { text: '3V3' },
            { text: '5V / VBUS' },
            { text: 'VIN' },
            { text: 'GND ×2' },
          ],
        },
        { type: 'heading', text: '🔘 Digital (each shows its GPIO number)' },
        {
          type: 'tags',
          items: [
            { text: 'D2', sub: 'GPIO5' },
            { text: 'D3', sub: 'GPIO6' },
            { text: 'D4', sub: 'GPIO7' },
            { text: 'D5', sub: 'GPIO8' },
            { text: 'D6', sub: 'GPIO9' },
            { text: 'D7', sub: 'GPIO10' },
            { text: 'D8', sub: 'GPIO17' },
            { text: 'D9', sub: 'GPIO18' },
            { text: 'D10', sub: 'GPIO21' },
            { text: 'D11', sub: 'GPIO38' },
            { text: 'D12', sub: 'GPIO47' },
            { text: 'D13', sub: 'GPIO48 · LED' },
            { text: 'D0', sub: 'GPIO44 · RX' },
            { text: 'D1', sub: 'GPIO43 · TX' },
            { text: 'B0', sub: 'GPIO46' },
            { text: 'B1', sub: 'GPIO0' },
          ],
        },
        { type: 'heading', text: '🎚️ Analog' },
        {
          type: 'tags',
          items: [
            { text: 'A0', sub: 'GPIO1' },
            { text: 'A1', sub: 'GPIO2' },
            { text: 'A2', sub: 'GPIO3' },
            { text: 'A3', sub: 'GPIO4' },
            { text: 'A4', sub: 'GPIO11 · SDA' },
            { text: 'A5', sub: 'GPIO12 · SCL' },
            { text: 'A6', sub: 'GPIO13' },
            { text: 'A7', sub: 'GPIO14' },
          ],
        },
        { type: 'heading', text: '💬 Communication (special jobs on the pins above)' },
        {
          type: 'tags',
          items: [
            { text: 'Simple chat (Serial)', sub: 'D0 · D1' },
            { text: 'Group chat (I²C)', sub: 'A4 · A5' },
            { text: 'Fast lane (SPI)', sub: 'D11 · D12 · D13' },
            { text: 'No wires', sub: 'Wi-Fi + Bluetooth' },
          ],
        },
        {
          type: 'paragraph',
          text:
            "Keep this handy for today's color-coding mission. **Yellow** = GPIO number · **Green** = D/A label · **Orange** = I²C · **Blue** = Serial · **Red** = power.",
        },
      ],
    },
    {
      id: 'mission',
      number: '8',
      heading: "Today's mission",
      subheading: 'Make the board\'s map your own.',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              eyebrow: 'Mission 1',
              icon: '🎨',
              title: 'Color-code your pinout',
              body:
                'On a printed pinout, shade every pin by its family: **red = power, green = digital, blue = analog, orange = communication**.',
            },
            {
              eyebrow: 'Mission 2',
              icon: '🏷️',
              title: 'Sticker the 3V3 pin',
              body: 'Put a small sticker on the `3V3` pin that says **use me for sensors**. Future-you will thank you.',
            },
            {
              eyebrow: 'Mission 3',
              icon: '🧠',
              title: 'Which pin would you use?',
              body:
                'Answer fast: *Light an LED?* → any **Dx**. *Read a dimmer knob?* → any **Ax**. *Power a sensor?* → **3V3**. *Connect an I²C screen?* → **A4 & A5**.',
              highlight: true,
            },
          ],
        },
      ],
    },
  ],
  glossary: [
    { term: 'Voltage', body: 'How hard electricity is "pushed." Measured in volts (V). This board pushes at 3.3 V.' },
    { term: 'Ground (GND)', body: "The \"0\" line — the path electricity returns through. Parts' − connect here." },
    { term: 'HIGH / LOW', body: 'A digital pin\'s two states: HIGH = ON ≈ 3.3 V, LOW = OFF = 0 V.' },
    { term: 'Digital', body: 'Signals that are only ON or OFF.' },
    { term: 'Analog', body: 'Smooth, in-between values — read as a number from 0 to 4095.' },
    { term: 'Input', body: 'A pin set to listen — reading a button or sensor.' },
    { term: 'Output', body: 'A pin set to act — lighting an LED or beeping a buzzer.' },
    { term: 'pinMode()', body: 'The code line that tells a pin to be INPUT or OUTPUT.' },
    { term: 'digitalWrite / digitalRead', body: 'Turn a pin ON/OFF, or read if it\'s ON/OFF.' },
    { term: 'analogRead()', body: 'Read a smooth value (0–4095) from an analog pin.' },
    { term: 'TX / RX', body: 'The board\'s "mouth" (TX = send) and "ear" (RX = listen) — the two talking wires.' },
    { term: 'SDA · SCL · SCK', body: 'Talking wires: SDA carries the words, SCL and SCK tap the beat so gadgets stay in time.' },
  ],
  quiz: [
    { question: 'What are the four pin families?', answer: '**Power, Digital, Analog, and Communication.**' },
    { question: 'What two states can a digital pin have?', answer: '**HIGH** (ON ≈ 3.3 V) and **LOW** (OFF = 0 V).' },
    { question: 'What number range does an analog reading give on this board?', answer: '**0 to 4095** — 0 means 0 V, 4095 means the full 3.3 V.' },
    {
      question: 'What does the GND pin do?',
      answer: "It's **ground** — the \"0\" line that electricity returns through. A part's − almost always connects to GND.",
    },
    { question: 'Which pin should you use to power most sensors?', answer: 'The **3V3** pin — remember the 3.3-volt rule.' },
    {
      question: 'What decides whether a pin is an input or an output?',
      answer: '**Your code** — you set it with `pinMode(pin, INPUT)` or `pinMode(pin, OUTPUT)`.',
    },
    {
      question: '⭐ Challenge: Gadgets talk with a "mouth," an "ear," and sometimes a "beat." What do the labels `TX` and `RX` mean?',
      answer: '**TX** is the board\'s **mouth** (it sends), and **RX** is the board\'s **ear** (it listens). To connect two gadgets, one\'s mouth (TX) goes to the other\'s ear (RX).',
    },
  ],
  teacherNotes: {
    sessionLength: '90 minutes',
    agenda: [
      { time: 'Warm-up · 10m', title: 'Warm-up', body: 'Recap Module 1: "every pin has two names." Reveal today\'s question: "But what does each pin do?"' },
      { time: 'Concept · 25m', title: 'Concept', body: 'Walk Sections 1–5: the four families, with the water-slide and switch-vs-dial analogies.' },
      { time: 'Big idea · 15m', title: 'Big idea', body: 'Section 6: input vs output, tied back to the Sense→Think→Act loop.' },
      { time: 'Hands-on · 30m', title: 'Hands-on', body: 'The color-coding + sticker mission and the "which pin?" quiz.' },
      { time: 'Wrap · 10m', title: 'Wrap', body: 'Quick-check questions; preview Module 3 (breadboard + first circuit).' },
    ],
    prep: [
      'Printed pinout diagrams (1 per student) + colored pencils or markers in red / green / blue / orange.',
      'A sheet of small stickers (or sticky notes cut small) for the "use me for sensors" label.',
      'Optional props: a light switch (digital) and a dimmer/volume knob (analog) to pass around.',
    ],
    noteGroups: [
      {
        heading: 'Teaching tips',
        items: [
          'Anchor on the colors. The family colors here match the board diagram — point at the real board often.',
          "Use the mouth / ear / beat decoder. Kids don't memorize SDA/SCL/MOSI/TX/RX — they just match a label on a part to the same label on the board. Recognition only.",
          'Make input/output physical: "listening ear" (input) vs "pointing finger / action" (output).',
          'Reinforce the 3.3 V rule — it becomes critical the moment wiring starts next module.',
        ],
      },
      {
        heading: 'Questions kids ask',
        items: [
          '"Why 0–4095 and not 0–100?" It\'s how the chip measures — 12 steps of doubling (2¹²). More steps = finer detail. They don\'t need the math, just "more = sharper."',
          '"Can any pin be input or output?" Almost all digital/analog pins, yes — set it in code. Power and GND pins are the exception (they\'re always power).',
          '"What if I use the wrong pin?" Usually it just won\'t work until fixed — a great reason to check the family first.',
        ],
      },
      {
        heading: 'Keep it inclusive',
        items: [
          "Stretch: ask fast finishers to label each pin's GPIO number too, and find all the \"special job\" pins.",
          'Support: focus on Power vs Digital vs Analog (three colors) and the input/output idea; comms can be recognition-only.',
        ],
      },
    ],
  },
};

export default module2;
