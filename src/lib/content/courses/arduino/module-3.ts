import type { CourseModule } from '../types';

const module3: CourseModule = {
  slug: 'module-3',
  number: 3,
  title: 'Your First Circuit',
  lede:
    "Time to stop reading and start building. Today you'll wire up a real circuit with your own hands and make an LED glow — no code yet, just you and electricity.",
  sessionLabel: 'Session 3',
  ageRange: 'Ages 10–14',
  duration: '90 minutes',
  summary:
    'Build a real LED circuit by hand on a breadboard — no code — and learn why a resistor keeps it alive.',
  goals: [
    '🔁 Say what **I/O** means',
    '🧩 Read a **breadboard**',
    '💡 Build a **glowing LED**',
    '🛑 Explain why a **resistor** matters',
  ],
  emoji: '🔌',
  accent: 'green',
  sections: [
    {
      id: 'io',
      number: '1',
      heading: 'I/O — the whole point',
      subheading: "Two little letters that explain what this board is for.",
      blocks: [
        {
          type: 'paragraph',
          text:
            '**I/O** stands for **Input / Output**. In Module 2 you learned that a pin can **listen** (input) or **act** (output). That\'s the board\'s entire job: take some **input**, think about it, and produce an **output**.',
        },
        {
          type: 'paragraph',
          text:
            'Today you make your very first **output** — a light that glows because *you* wired it. Remember the robot loop from Module 1? You\'re building the **⚙️ Act** step by hand. Next module, your code takes over.',
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🔁',
          title: 'Input, Output… by hand first',
          body:
            'Before code, it helps to feel how electricity actually moves. So today there\'s **no programming** — just wires, a light, and the satisfying moment it switches on.',
        },
      ],
    },
    {
      id: 'circuit',
      number: '2',
      heading: 'A circuit is a loop',
      subheading: 'The one rule that makes everything work.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'Electricity is fussy about one thing: it only flows if it has a **complete loop** to travel around. It leaves from a **power** pin, travels *through your part*, and returns to a **ground (GND)** pin. Break the loop anywhere and everything stops.',
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🏁',
          title: 'Think of a racetrack',
          body:
            'A race car can only keep going if the track loops back to the start. Electricity is the same: it needs a **start** (power) *and* a **finish** that connects back (ground). Every circuit you build needs both.',
        },
      ],
    },
    {
      id: 'breadboard',
      number: '3',
      heading: 'The breadboard',
      subheading: 'Build circuits by just pushing in wires — no soldering, no mess.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'A **breadboard** lets you build a circuit by pushing wires and parts into little holes. Nothing is glued, so you can pull it apart and try again as many times as you like. The clever bit: **some holes are already connected inside.**',
        },
        {
          type: 'paragraph',
          text:
            'Holes in the same little line are joined inside. The long rails at the top run all the way across — perfect for power (+) and ground (−).',
        },
        {
          type: 'steps',
          items: [
            { icon: '➖', title: 'Lines of 5', body: 'Each short line of holes is joined inside — plug two legs into the same line and they\'re connected.' },
            { icon: '⬛', title: 'The center gap', body: 'The trench down the middle splits the left group from the right group.' },
            { icon: '🔴', title: 'The rails', body: 'The long +/− lines run the whole length — your handy power and ground highways.' },
          ],
        },
        {
          type: 'paragraph',
          text: '💡 Rule of thumb: **holes in the same little line act as one connection point.**',
        },
      ],
    },
    {
      id: 'ioboard',
      number: '4',
      heading: 'The I/O expansion board (the easy button)',
      subheading: 'An even tidier way to plug things in.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'There\'s a shortcut for connecting parts: the **Nano I/O expansion board**. Your ESP32-S3 Nano plugs straight into it, and every pin turns into a neat little **3-pin socket**. No loose wires to muddle up.',
        },
        {
          type: 'steps',
          items: [
            { icon: '🟩', title: 'S = Signal', body: 'The actual pin — `D2`, `A0`, and so on. The wire that carries your message.' },
            { icon: '🟥', title: 'V = Voltage', body: 'Power for the part (like the `3V3` line).' },
            { icon: '⬛', title: 'G = Ground', body: 'The return path back to `GND`.' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🤖',
          title: 'When to use which',
          body:
            'Use a **breadboard** for learning and building your own custom circuits. Use the **I/O board** for quick, tidy hook-ups — it\'s what makes plugging in Otto\'s servos and sensors painless later, because each part is just three wires that can\'t get mixed up.',
        },
      ],
    },
    {
      id: 'parts',
      number: '5',
      heading: 'Meet the LED and the resistor',
      subheading: 'Your first two components — and their quirks.',
      blocks: [
        { type: 'heading', text: '💡 The LED — a light with a direction' },
        {
          type: 'paragraph',
          text:
            'An **LED** (Light Emitting Diode) is a tiny light. But it\'s picky: it only works **one way round**. Look at its two legs — one is longer than the other.',
        },
        {
          type: 'tags',
          items: [
            { text: 'Long leg', sub: '+ (toward power)' },
            { text: 'Short leg', sub: '− (same side as the flat edge)' },
          ],
        },
        {
          type: 'paragraph',
          text:
            'The **long leg is +** (connect toward power). The **short leg** — on the same side as the little **flat edge** — is **−** (connect toward ground). Backwards? It just won\'t light. It won\'t break.',
        },
        { type: 'heading', text: '🛑 The resistor — a speed bump' },
        {
          type: 'paragraph',
          text:
            'LEDs are greedy. Give one full power and it gulps too much electricity and burns out (or strains the pin). A **resistor** is a **speed bump** that limits the flow to a safe trickle.',
        },
        {
          type: 'card',
          title: 'Use 220–330 Ω',
          body: "That's the resistor value that keeps an LED happily lit on a 3.3 V board.",
        },
        {
          type: 'card',
          title: 'No direction 🙂',
          body: 'Unlike the LED, a resistor works **either way round** — one less thing to worry about.',
        },
      ],
    },
    {
      id: 'build',
      number: '6',
      heading: 'Build it! 💡',
      subheading: 'Follow along — this is the circuit you\'ll make.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'The loop: out of `3V3` → through the resistor → through the LED (＋ to −) → back into `GND`. Electricity flows all the way around.',
        },
        {
          type: 'steps',
          items: [
            { eyebrow: 'Step 1', icon: '1️⃣', title: 'Place the LED', body: 'Push the LED into the breadboard so its **two legs sit in different lines** (not the same one). Note which leg is the **long one (＋)**.' },
            { eyebrow: 'Step 2', icon: '2️⃣', title: 'Add the resistor', body: 'Connect the resistor so it\'s **in the loop** with the LED — one end in the LED\'s short-leg (−) line, the other reaching toward the − (ground) rail. Either leg of the LED can hold the resistor.' },
            { eyebrow: 'Step 3', icon: '3️⃣', title: 'Power in', body: 'Run a jumper wire from the board\'s `3V3` pin to the LED\'s **long-leg (＋)** line.' },
            { eyebrow: 'Step 4', icon: '4️⃣', title: 'Complete the loop', body: 'Run a jumper from the board\'s `GND` pin to the − rail where the resistor ends. Now the loop is closed.' },
            { eyebrow: 'Step 5', icon: '🎉', title: 'Power up', body: 'Plug the board into USB. Your LED glows! You just built a circuit with your own hands.', highlight: true },
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          icon: '🔧',
          title: 'Not lighting? Check these in order',
          body:
            '**1.** LED direction — flip it (this fixes it 9 times out of 10). **2.** Is the resistor actually in the loop? **3.** Are *both* `3V3` and `GND` connected? **4.** Push every leg and wire in firmly. **5.** Both LED legs in the same line? That shorts it — spread them out.',
        },
      ],
    },
    {
      id: 'twist',
      number: '7',
      heading: 'The twist: hand it over to a pin',
      subheading: 'A tiny change that sets up everything next.',
      blocks: [
        {
          type: 'paragraph',
          text:
            'Right now your LED is **always on** — it\'s wired straight to `3V3`, so it just gets constant power. But what if you moved that ＋ wire from `3V3` to a **digital pin** like `D2`?',
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🧠',
          title: 'You built the body — next, the brain',
          body:
            'Once the LED\'s control wire is on a digital pin, your **code** decides when it turns on and off: blinking, patterns, even Morse code. That\'s exactly where **Module 4** begins.',
        },
      ],
    },
    {
      id: 'mission',
      number: '8',
      heading: "Today's mission",
      subheading: 'Build, light, and get ready for code.',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              eyebrow: 'Mission 1',
              icon: '💡',
              title: 'Make it glow',
              body: 'Build the LED + resistor circuit and get it lighting from `3V3` and `GND`.',
            },
            {
              eyebrow: 'Mission 2',
              icon: '🔀',
              title: 'Move the control wire',
              body:
                'Unplug the ＋ wire from `3V3` and move it to digital pin `D2`. It may go dark — that\'s expected! The pin is "off" until code switches it on next time.',
            },
            {
              eyebrow: 'Mission 3',
              icon: '⭐',
              title: 'Challenge',
              body: 'Add a **second LED** in a different color. Can you get both to light at once?',
              highlight: true,
            },
          ],
        },
      ],
    },
  ],
  glossary: [
    { term: 'I/O', body: "Input / Output — the board's whole job: take input, make output." },
    { term: 'Circuit', body: 'A complete loop that electricity can flow around.' },
    { term: 'Breadboard', body: 'A reusable board with connected holes for building circuits — no soldering.' },
    { term: 'Power rail', body: 'The long +/− lines on a breadboard, connected all the way across.' },
    { term: 'Jumper wire', body: 'A short wire that connects two points on your circuit.' },
    { term: 'LED', body: 'Light Emitting Diode — a tiny light with a + and a − side.' },
    { term: 'Polarity', body: "Having a + side and a − side. LEDs care about it; resistors don't." },
    { term: 'Long / short leg', body: "An LED's long leg is ＋, its short leg (flat side) is −." },
    { term: 'Resistor', body: 'A "speed bump" that limits how much electricity flows.' },
    { term: 'Short circuit', body: 'Power connected straight to ground with no part in between — avoid it!' },
    { term: 'I/O expansion board', body: 'A board that turns each pin into a tidy Signal-Voltage-Ground socket.' },
    { term: 'S · V · G', body: 'The three parts of an I/O socket: Signal, Voltage (power), Ground.' },
  ],
  quiz: [
    { question: 'What does I/O stand for?', answer: '**Input / Output** — the board takes input and produces output.' },
    {
      question: 'Why must a circuit be a complete loop?',
      answer: 'Electricity only flows if it can leave a **power** pin and return to **ground**. Break the loop and nothing happens.',
    },
    {
      question: 'What does a resistor do, and why does an LED need one?',
      answer: 'It **limits the flow of electricity** (a speed bump). Without one, an LED gulps too much current and burns out.',
    },
    {
      question: "How do you tell an LED's ＋ leg?",
      answer: "It's the **long leg**. The **short leg** — on the flat-edge side — is the − leg.",
    },
    {
      question: 'On an I/O board socket, what do S, V and G mean?',
      answer: '**S**ignal (the pin), **V**oltage (power), **G**round.',
    },
    {
      question: "⭐ Challenge: your LED won't light — what's the first thing to check?",
      answer: 'Its **direction**. Flip the LED around — a backwards LED is the most common reason, and flipping it fixes it most of the time.',
    },
  ],
  teacherNotes: {
    sessionLength: '90 minutes',
    agenda: [
      { time: 'Warm-up · 10m', title: 'Warm-up', body: 'Recap input/output from Module 2. "Today we build our first output — by hand."' },
      { time: 'Concept · 20m', title: 'Concept', body: 'Sections 2–4: the loop, the breadboard, the I/O board.' },
      { time: 'Parts · 15m', title: 'Parts', body: 'Section 5: LED direction + why the resistor.' },
      { time: 'Build · 35m', title: 'Build', body: 'The 5-step circuit, then move the wire to D2.' },
      { time: 'Wrap · 10m', title: 'Wrap', body: 'Quick-check; preview Module 4 (first code).' },
    ],
    prep: [
      'Per pair: breadboard, 2–3 LEDs (assorted colors), a few 220–330 Ω resistors, jumper wires, USB-C cable.',
      'Optional: Nano I/O expansion boards to demo the S-V-G sockets.',
      'Have the Module 1/2 pinouts on hand so students can locate `3V3`, `GND`, and `D2`.',
    ],
    noteGroups: [
      {
        heading: 'The three mistakes to expect',
        items: [
          'LED in backwards — by far the most common. Teach "flip it first."',
          'No resistor / resistor not in the loop — reinforce it every time.',
          'Both LED legs in the same line — that shorts the LED; spread the legs across two lines.',
        ],
      },
      {
        heading: 'Safety',
        items: [
          "Never wire a power pin straight to GND with nothing in between — that's a short circuit and can get hot.",
          'Reinforce the 3.3 V rule and "unplug before you rewire."',
        ],
      },
      {
        heading: 'Keep it inclusive',
        items: [
          'Stretch: light two LEDs; introduce "in a line = same connection" by predicting which holes are joined.',
          'Support: pre-place the resistor and focus the student on LED direction and closing the loop.',
        ],
      },
    ],
  },
};

export default module3;
