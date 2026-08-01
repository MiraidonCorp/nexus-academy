export type ProgrammeImage = {
  src: string;
  alt: string;
};

export const programmeImages: Record<string, ProgrammeImage> = {
  spike: {
    src: '/images/robotics/foundations.webp',
    alt: 'Two children assemble and test a beginner robot in a robotics classroom',
  },
  fll: {
    src: '/images/robotics/competition.webp',
    alt: 'A student robotics team works together on a competition robot',
  },
  microbit: {
    src: '/images/robotics/electronics.webp',
    alt: 'Two teenagers wire sensors and test a custom robot in a maker lab',
  },
  html: {
    src: '/images/robotics/electronics.webp',
    alt: 'A teenager works with a laptop and electronics in a maker lab',
  },
  ai: {
    src: '/images/robotics/electronics.webp',
    alt: 'Teenagers collaborate around a robot and laptop in a hands-on lab',
  },
  robot: {
    src: '/images/robotics/fabrication.webp',
    alt: 'A teenager develops a custom robot beside a desktop 3D printer',
  },
};

export const getProgrammeImage = (id: string): ProgrammeImage =>
  programmeImages[id] ?? programmeImages.spike;
