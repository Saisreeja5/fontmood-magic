
import { create } from 'zustand';

export type Mood = 'happy' | 'playful' | 'serious' | 'calm' | 'energetic';

export type FontPair = {
  headingFont: string;
  bodyFont: string;
  sampleHeading: string;
  sampleText: string;
};

type MoodMap = {
  [key in Mood]: FontPair[];
};

// Mock data representing font pairings for different moods
const moodFontMap: MoodMap = {
  happy: [
    {
      headingFont: 'Playfair Display',
      bodyFont: 'Inter',
      sampleHeading: 'Embracing Joy and Creativity',
      sampleText: 'Happiness is the secret ingredient that turns ordinary moments into extraordinary memories. Design with vibrant energy and open spaces.',
    },
    {
      headingFont: 'Montserrat',
      bodyFont: 'Lora',
      sampleHeading: 'Bright Ideas Shine Here',
      sampleText: 'Happiness brings clarity to design choices, allowing us to create experiences that resonate with positivity and purpose.',
    },
  ],
  playful: [
    {
      headingFont: 'Comic Sans MS',
      bodyFont: 'Arial',
      sampleHeading: 'Let\'s Get Creative!',
      sampleText: 'Playfulness adds a spark of joy to everyday design. It invites interaction and creates memorable experiences for users of all ages.',
    },
    {
      headingFont: 'Pacifico',
      bodyFont: 'Quicksand',
      sampleHeading: 'Fun Times Ahead',
      sampleText: 'When design is playful, it breaks down barriers and creates connections through shared moments of delight and surprise.',
    },
  ],
  serious: [
    {
      headingFont: 'Georgia',
      bodyFont: 'Roboto',
      sampleHeading: 'Professional Excellence',
      sampleText: 'A serious approach to typography establishes credibility and trust. It communicates expertise and attention to detail.',
    },
    {
      headingFont: 'Merriweather',
      bodyFont: 'Source Sans Pro',
      sampleHeading: 'Strategic Innovation',
      sampleText: 'The foundation of effective communication is clarity and purpose. Typography choices should reflect the gravity of your message.',
    },
  ],
  calm: [
    {
      headingFont: 'Tenor Sans',
      bodyFont: 'Open Sans',
      sampleHeading: 'Finding Balance',
      sampleText: 'Calm design creates space for reflection and thoughtful engagement. It reduces visual noise and centers the user experience.',
    },
    {
      headingFont: 'Cormorant Garamond',
      bodyFont: 'Nunito Sans',
      sampleHeading: 'Peaceful Moments',
      sampleText: 'The art of creating calm through design involves intentional spacing, gentle transitions, and harmonious typography choices.',
    },
  ],
  energetic: [
    {
      headingFont: 'Bebas Neue',
      bodyFont: 'Karla',
      sampleHeading: 'BOLD MOVES ONLY',
      sampleText: 'Energy in design captures attention and drives action. It uses dynamic contrasts and strong typography to create momentum.',
    },
    {
      headingFont: 'Oswald',
      bodyFont: 'Noto Sans',
      sampleHeading: 'PUSH THE BOUNDARIES',
      sampleText: 'When design pulses with energy, it creates an immediate connection and inspires users to engage with renewed enthusiasm.',
    },
  ],
};

type FontMoodState = {
  currentMood: Mood;
  currentPairIndex: number;
  setMood: (mood: Mood) => void;
  nextPair: () => void;
  getCurrentPair: () => FontPair;
};

export const useFontMoodStore = create<FontMoodState>((set, get) => ({
  currentMood: 'playful',
  currentPairIndex: 0,
  setMood: (mood) => set({ currentMood: mood, currentPairIndex: 0 }),
  nextPair: () => {
    const { currentMood, currentPairIndex } = get();
    const pairs = moodFontMap[currentMood];
    const nextIndex = (currentPairIndex + 1) % pairs.length;
    set({ currentPairIndex: nextIndex });
  },
  getCurrentPair: () => {
    const { currentMood, currentPairIndex } = get();
    return moodFontMap[currentMood][currentPairIndex];
  },
}));
