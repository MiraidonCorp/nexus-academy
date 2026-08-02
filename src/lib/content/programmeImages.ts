export type ProgrammeImage = {
  src: string;
  alt: string;
};

export const programmeImages: Record<string, ProgrammeImage> = {
  spike: {
    src: '/images/robotics/programmes/spike-prime.webp',
    alt: 'Two children assemble and test a beginner robot in a robotics classroom',
  },
  fll: {
    src: '/images/robotics/programmes/fll-challenge.webp',
    alt: 'A student robotics team strategizes around a competition robot and challenge field',
  },
  microbit: {
    src: '/images/robotics/programmes/microbit-electronics.webp',
    alt: 'Two children wire sensors and test a microcontroller rover in a maker lab',
  },
  html: {
    src: '/images/robotics/programmes/html-css-design.webp',
    alt: 'A teenager designs a web interface beside a physical robot prototype',
  },
  ai: {
    src: '/images/robotics/programmes/ai-vision.webp',
    alt: 'Two teenagers explore machine learning with a camera-equipped robot',
  },
  robot: {
    src: '/images/robotics/programmes/robot-fabrication.webp',
    alt: 'A teenager develops a custom robot beside a desktop 3D printer',
  },
};

export const getProgrammeImage = (id: string): ProgrammeImage =>
  programmeImages[id] ?? programmeImages.spike;
