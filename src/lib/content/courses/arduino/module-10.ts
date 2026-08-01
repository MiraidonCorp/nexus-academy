import type { CourseModule } from '../types';

const module10: CourseModule = {
  slug: 'module-10',
  number: 10,
  title: 'Otto Gets Smart & Goes Wireless',
  lede:
    "The grand finale. First Otto opens his eyes and explores **all by himself**. Then he learns to obey **your phone** — no wires at all. Everything you've learned, in one robot.",
  sessionLabel: 'Sessions 16–17',
  ageRange: 'Ages 10–14',
  duration: '90 minutes',
  summary:
    'Give Otto true autonomy with obstacle-avoiding code, then turn his board into a tiny Wi-Fi website you can drive from your phone.',
  goals: [
    '👀 Make Otto **avoid obstacles**',
    '🔁 See the **full robot loop**',
    '📶 Put Otto **on Wi-Fi**',
    '📱 Drive him from a **phone**',
  ],
  emoji: '🕹️',
  accent: 'blue',
  sections: [
    {
      id: 'last',
      number: '1',
      heading: 'The last piece',
      subheading: 'From a robot that performs to a robot that thinks.',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          icon: '🗓️',
          title: 'This is a two-session finale',
          body:
            "**Session 16:** autonomous Otto — he uses his eyes to sense, think, and avoid obstacles all on his own. **Session 17:** wireless Otto — control him live from your phone.",
        },
        {
          type: 'paragraph',
          text:
            "Right now Otto can walk and dance — but he's doing a **pre-set routine** with his eyes closed. A true robot **reacts** to what's around it. Today Otto starts using his **ultrasonic eyes** to make his own decisions, and then takes **live commands** from you over the air. This is the moment everything connects.",
        },
      ],
    },
    {
      id: 'loop',
      number: '2',
      heading: 'The full robot loop, at last',
      subheading: 'Everything since Module 1 in one picture.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Obstacle avoidance is the whole **Sense → Think → Act** loop running over and over: **measure the distance**, **decide** if something's too close, then **move** accordingly. You've built every piece — now they run together.",
        },
        {
          type: 'steps',
          items: [
            { icon: '📏', eyebrow: 'Sense', title: 'Measure distance', body: "Ping the ultrasonic eyes and read how far away things are." },
            { icon: '🤔', eyebrow: 'Think', title: 'Closer than 15 cm?', body: 'Decide whether something is too close to keep going.' },
            { icon: '🔊', eyebrow: 'Act · yes', title: 'Beep, back up, turn', body: "If it's too close: beep, step back, and turn away.", highlight: true },
            { icon: '▶️', eyebrow: 'Act · no', title: 'Walk forward', body: 'If the coast is clear, keep walking — then repeat forever.' },
          ],
        },
        {
          type: 'paragraph',
          text:
            'Sense (measure) → Think (decide) → Act (move) → repeat. A real autonomous robot, thinking for itself.',
        },
      ],
    },
    {
      id: 'avoid',
      number: '3',
      heading: 'Program the obstacle-dodger',
      subheading: "Otto's eyes + Otto's legs, working together.",
      blocks: [
        {
          type: 'paragraph',
          text:
            'We reuse the `readDistance()` helper you wrote back in Module 7, and pair it with Otto\'s movement commands. Walk forward until something\'s close, then react.',
        },
        {
          type: 'code',
          caption: 'OttoAvoid.ino — explores and dodges on its own',
          code:
`#include <Otto.h>
Otto Otto;
#define LEG_L D2
#define LEG_R D3
#define FOOT_L D4
#define FOOT_R D5
#define BUZZER D6
#define TRIG   D9
#define ECHO   D8

// distance helper — same as Module 7
int readDistance() {
  digitalWrite(TRIG, LOW);  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH); delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long t = pulseIn(ECHO, HIGH);
  return t * 0.034 / 2;
}

void setup() {
  Otto.init(LEG_L, LEG_R, FOOT_L, FOOT_R, true, BUZZER);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  Otto.home();
}

void loop() {
  int d = readDistance();       // SENSE
  if (d < 15) {                // THINK: too close?
    Otto.sing(S_surprise);      // ACT: uh-oh!
    Otto.walk(1, 1000, -1);   //   step back
    Otto.turn(2, 1000, 1);    //   turn away
  } else {
    Otto.walk(1, 1000, 1);    // clear -> walk on
  }
}`,
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '💡',
          title: 'A shortcut some Otto libraries offer',
          body:
            'Many versions include `Otto.getDistance()` which does the same thing in one word. If yours has it (and the eyes are set up in `init`), you can use it instead of `readDistance()`. Both work — ours is guaranteed because you built it.',
        },
        {
          type: 'paragraph',
          text:
            "🔧 Tune the `15` (cm) to make Otto braver or more cautious. Change `turn`'s direction so he explores differently.",
        },
      ],
    },
    {
      id: 'explore',
      number: '4',
      heading: 'Set him loose 🎉',
      subheading: 'Put Otto on the floor and watch him think.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Build a little course with books or boxes and let Otto explore. When he reaches a wall, he'll beep, back up, and choose a new way — **with no one controlling him**. That's a genuine autonomous robot, running the exact loop you drew above.",
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🤖',
          title: 'Pause and notice',
          body:
            "Nobody is steering. Otto is **sensing** the world, **deciding** what to do, and **acting** — the definition of a robot. You programmed that.",
        },
      ],
    },
    {
      id: 'wireless',
      number: '5',
      heading: 'The superpower pays off',
      subheading: "Remember Module 1's \"walkie-talkie\"? Time to use it.",
      blocks: [
        { type: 'heading', text: '📱 Session 17: Wireless Otto' },
        {
          type: 'paragraph',
          text:
            "Way back in Module 1 you learned this board's secret power: built-in **Wi-Fi**. Here's the trick — the board becomes a **tiny website**. Your phone opens that website and every button you tap sends a command to Otto. No app to install, no wires.",
        },
        {
          type: 'card',
          icon: '📶',
          title: 'How it works',
          body:
            "You tap a button on the web page → the command flies over Wi-Fi → Otto does it. Your phone shows **Walk**, **Turn**, and **Dance** buttons; the board listens and obeys.",
        },
      ],
    },
    {
      id: 'remote',
      number: '6',
      heading: 'The remote-control code',
      subheading: 'A little longer — but it turns your phone into a robot controller.',
      blocks: [
        {
          type: 'code',
          caption: 'OttoRemote.ino — control Otto from a web page',
          code:
`#include <WiFi.h>
#include <Otto.h>
Otto Otto;
#define LEG_L D2
#define LEG_R D3
#define FOOT_L D4
#define FOOT_R D5
#define BUZZER D6

const char* ssid     = "YOUR_WIFI_NAME";      // <- fill these in
const char* password = "YOUR_WIFI_PASSWORD";

WiFiServer server(80);

void setup() {
  Serial.begin(9600);
  Otto.init(LEG_L, LEG_R, FOOT_L, FOOT_R, true, BUZZER);
  Otto.home();
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) { delay(500); }
  Serial.print("Open this on your phone: ");
  Serial.println(WiFi.localIP());   // <- the address to type
  server.begin();
}

void loop() {
  WiFiClient client = server.available();
  if (client) {
    String req = client.readStringUntil('\\r');
    if (req.indexOf("/walk")  != -1) Otto.walk(2, 1000, 1);
    if (req.indexOf("/turn")  != -1) Otto.turn(2, 1000, 1);
    if (req.indexOf("/dance") != -1) Otto.moonwalker(3, 1000, 25, 1);
    // send the button page back to the phone
    client.println("HTTP/1.1 200 OK");
    client.println("Content-Type: text/html");
    client.println();
    client.println("<h1>Otto Remote</h1>");
    client.println("<a href='/walk'><button>Walk</button></a>");
    client.println("<a href='/turn'><button>Turn</button></a>");
    client.println("<a href='/dance'><button>Dance</button></a>");
    client.stop();
  }
}`,
        },
        {
          type: 'steps',
          items: [
            { title: 'Fill in your Wi-Fi', body: "Type your network's name and password into the two lines at the top." },
            { title: 'Upload & find the address', body: 'Open the Serial Monitor — the board prints an **IP address** like `192.168.1.42`.' },
            { title: 'Open it on your phone', body: 'Make sure your phone is on the **same Wi-Fi**, type that address into its browser, and tap the buttons!' },
          ],
        },
        {
          type: 'callout',
          variant: 'spark',
          icon: '📶',
          title: 'Same-network rule (and a Bluetooth note)',
          body:
            'Your phone and Otto must be on the **same Wi-Fi** — a phone hotspot works great in class. **Why Wi-Fi and not Bluetooth?** This chip has *Bluetooth LE*, which needs a special app, so a web page is the easy, no-app way to go wireless.',
        },
      ],
    },
    {
      id: 'mode',
      number: '7',
      heading: 'Auto vs. Remote',
      subheading: 'Two personalities in one robot.',
      blocks: [
        {
          type: 'paragraph',
          text: 'Your Otto can now do two very different things — and the mission is to give him **both**:',
        },
        { type: 'card', icon: '🤖', title: 'Auto mode', body: 'Otto explores and dodges obstacles **on his own** (Session 16).' },
        { type: 'card', icon: '📱', title: 'Remote mode', body: '**You** drive Otto with taps on your phone (Session 17).' },
        {
          type: 'callout',
          variant: 'spark',
          icon: '🕹️',
          title: 'Mission: add an "Auto" button',
          body:
            'Add a fourth button, `/auto`, to the web page. When tapped, Otto switches into obstacle-avoiding mode and roams free — until you tap `/walk` to take back control. One robot, two brains: yours and his.',
        },
      ],
    },
    {
      id: 'finale',
      number: '🏁',
      heading: 'You built a robot.',
      subheading: 'Look how far ten modules can take you.',
      blocks: [
        {
          type: 'paragraph',
          text:
            "Look how far you came. You started not knowing what the little board did — and now you've built, wired, coded, and brought to life an autonomous, wireless robot. That's real engineering.",
        },
        {
          type: 'tags',
          items: [
            { text: 'Module 1', sub: 'met the board' },
            { text: 'Module 2', sub: 'learned the pins' },
            { text: 'Module 3', sub: 'first circuit' },
            { text: 'Module 4', sub: 'first code' },
            { text: 'Module 5', sub: 'buttons & choices' },
            { text: 'Module 6', sub: 'analog & dimming' },
            { text: 'Module 7', sub: 'sensors' },
            { text: 'Module 8', sub: 'movement & sound' },
            { text: 'Module 9', sub: 'built Otto' },
            { text: 'Module 10', sub: 'smart & wireless 🎉' },
          ],
        },
        {
          type: 'paragraph',
          text: 'Every one of those skills is a tool you keep forever. Otto was just the beginning.',
        },
        {
          type: 'callout',
          variant: 'info',
          icon: '🚀',
          title: 'Where to go next',
          body:
            '**Sensor Lab:** pick a new sensor and invent your own project. **Python:** program Otto\'s board in a second language. **IoT Cloud:** control Otto from anywhere in the world, not just your Wi-Fi. Your robotics journey is just getting started.',
        },
      ],
    },
  ],
  glossary: [
    { term: 'Autonomous', body: 'Acting on its own, with no one controlling it.' },
    { term: 'Obstacle avoidance', body: 'Sensing something in the way and steering around it.' },
    { term: 'Robot loop', body: 'Sense → Think → Act, repeating forever.' },
    { term: 'Wi-Fi', body: 'Wireless internet the board can join to talk to phones.' },
    { term: 'Web server', body: 'Code that turns the board into a tiny website your phone can open.' },
    { term: 'IP address', body: "The board's \"phone number\" on the network, like 192.168.1.42." },
    { term: 'Bluetooth LE', body: 'The low-energy Bluetooth this chip has; needs a special app.' },
    { term: 'Same network', body: 'Phone and board must share one Wi-Fi to talk.' },
    { term: 'Mode', body: 'A setting that switches behaviour — here, Auto vs Remote.' },
    { term: 'getDistance()', body: 'An Otto shortcut some libraries offer for reading the eyes.' },
  ],
  quiz: [
    { question: 'What does "autonomous" mean?', answer: 'Acting **on its own** — sensing, deciding, and moving with no one controlling it.' },
    {
      question: 'Name the three steps of the robot loop in the obstacle-dodger.',
      answer: '**Sense** (measure distance) → **Think** (if too close?) → **Act** (beep, back up, turn / else walk).',
    },
    { question: 'In the wireless project, what does the board become?', answer: 'A **tiny web server** (website) that your phone opens and taps buttons on.' },
    { question: 'What must be true for your phone to control Otto?', answer: 'Your phone and Otto must be on the **same Wi-Fi network**.' },
    { question: 'Why use Wi-Fi instead of Bluetooth on this board?', answer: 'This chip has **Bluetooth LE**, which needs a special app; a Wi-Fi web page needs **no app**.' },
    {
      question: '⭐ Challenge: how would you make Otto braver at avoiding walls?',
      answer: "Lower the `15` cm threshold — he'll let things get closer before reacting.",
    },
  ],
  teacherNotes: {
    sessionLength: 'Two 90-minute sessions',
    agenda: [
      { time: 'Session 16 · 90m', title: 'Auto', body: 'The robot-loop flowchart; OttoAvoid; tune the threshold; a floor course.' },
      { time: 'Session 17 · 90m', title: 'Wireless', body: 'The web-server idea; OttoRemote; find the IP; phone control; Auto-vs-Remote.' },
    ],
    prep: [
      'Confirm the ultrasonic works on a built Otto (3.3 V-safe Echo from Module 7). The `readDistance()` approach avoids depending on a specific Otto-library `getDistance()`.',
      'Wi-Fi: a phone hotspot is usually the most reliable classroom network. Pre-enter its name/password, or have students paste it. School Wi-Fi often blocks device-to-device traffic — test first.',
      'Bluetooth note: the ESP32-S3 has Bluetooth LE only (no classic Serial Bluetooth), so lead with Wi-Fi. BLE control is possible but needs an app — keep it as an optional stretch.',
    ],
    noteGroups: [
      {
        heading: 'Teaching tips',
        items: [
          'Land the loop. The flowchart *is* the whole course — point back to Modules 5 (if/else), 7 (distance), 8 (servos/buzzer).',
          'The IP-on-the-phone moment is the biggest "wow" of the course. Give it room; let everyone succeed.',
          "Otto's moves are blocking, so the remote feels a touch laggy — that's expected, not a bug.",
        ],
      },
      {
        heading: 'Finish strong',
        items: [
          'Run a showcase: each pair demos auto mode and phone control, and explains their Sense→Think→Act loop.',
          'Hand out certificates. Point them to the next steps: the Sensor Lab, Python, and IoT Cloud.',
        ],
      },
    ],
  },
};

export default module10;
