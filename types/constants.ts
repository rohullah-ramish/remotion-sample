import { z } from "zod";
export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
  title: z.string(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "Next.js and Remotion",
};

export const VIDEO_WIDTH = 720;
export const VIDEO_HEIGHT = 1280;
export const VIDEO_FPS = 30;

export const stamps = [
  {
    title: "DID YOU KNOW THAT THE GRAND CANYON",
    duration: 2,
  },
  {
    title: "IN THE UNITED STATES IS SO VAST THAT",
    duration: 2,
  },
  {
    title: "IT HAS ITS OWN WEATHER PATTERNS.",
    duration: 2,
  },
  {
    title: "THE MASSIVE DEPTH AND SIZE OF THE CANYON",
    duration: 2,
  },
  {
    title: "CAN CREATE UNIQUE MICRO CLIMATES,",
    duration: 2,
  },
  {
    title: "LEADING TO SUDDEN CHANGES IN WEATHER.",
    duration: 2,
  },
  {
    title: "FOR EXAMPLE, IT MIGHT BE SUNNY AT THE RIM",
    duration: 2,
  },
  {
    title: "WHILE IT'S RAINING IN THE CANYON ITSELF.",
    duration: 2,
  },
  {
    title: "THIS CREATES A DRAMATIC AND EVER-CHANGING",
    duration: 2,
  },
  {
    title: "LANDSCAPE FOR VISITORS TO EXPERIENCE.",
    duration: 2,
  },
];

export const images = [
  {
    duration: 2.5,
    src: "https://w0.peakpx.com/wallpaper/116/728/HD-wallpaper-grand-canyon-canyon-desert-grand-park.jpg",
  },
  {
    duration: 2.5,
    src: "https://wallpaper.forfun.com/fetch/90/9053af09f16461ce6eefd0d7b2eae563.jpeg",
  },
  {
    duration: 2.5,
    src: "https://i.pinimg.com/736x/a8/ab/08/a8ab08039f4a7f1f6d674d2289b1c810.jpg",
  },
  {
    duration: 2.5,
    src: "https://w0.peakpx.com/wallpaper/800/871/HD-wallpaper-canyon-minimal-desert-grand-flat-canyons.jpg",
  },
  { duration: 2.5, src: "https://wallpapercave.com/wp/wp6572164.jpg" },
  {
    duration: 2.5,
    src: "https://i.pinimg.com/originals/86/cd/34/86cd34ae96396184700da47757c0fbaa.jpg",
  },
  {
    duration: 2.5,
    src: "https://s1.1zoom.me/b5037/756/Grand_Canyon_Park_USA_Parks_Scenery_Mountains_Sky_515036_1080x1920.jpg",
  },
  { duration: 2.5, src: "https://wallpapercave.com/wp/wp6572656.jpg" },
];

export const DURATION_IN_FRAMES = stamps.reduce(
  (p, c) => (p += c.duration * VIDEO_FPS),
  0
);
