import { create } from 'zustand';
import { loadGoogleFont } from '@/services/googleFonts';

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
      bodyFont: 'Source Sans Pro',
      sampleHeading: 'Joyful Typography',
      sampleText: 'Create delightful experiences through carefully selected font pairings.',
    },
    {
      headingFont: 'Fredoka One',
      bodyFont: 'Lato',
      sampleHeading: 'Cheerful Design',
      sampleText: 'Express happiness through playful yet readable type combinations.',
    },
    {
      headingFont: 'Pacifico',
      bodyFont: 'Roboto',
      sampleHeading: 'Spread Some Joy',
      sampleText: 'Let your typography reflect the positive energy of your content.',
    },
    {
      headingFont: 'Dancing Script',
      bodyFont: 'Open Sans',
      sampleHeading: 'Happy Moments',
      sampleText: 'Capture the essence of joy with elegant script and clean sans-serif.',
    },
  ],
  playful: [
    {
      headingFont: 'Righteous',
      bodyFont: 'Quicksand',
      sampleHeading: 'Fun & Creative',
      sampleText: 'Express creativity through distinctive and playful typography choices.',
    },
    {
      headingFont: 'Lobster',
      bodyFont: 'Nunito',
      sampleHeading: 'Playful Spirit',
      sampleText: 'Add personality to your design with these whimsical combinations.',
    },
    {
      headingFont: 'Comfortaa',
      bodyFont: 'Maven Pro',
      sampleHeading: 'Quirky & Fun',
      sampleText: 'Bring a sense of play to your design with rounded letterforms.',
    },
    {
      headingFont: 'Permanent Marker',
      bodyFont: 'Karla',
      sampleHeading: 'Creative Energy',
      sampleText: 'Unleash creativity with handwritten style and clean body text.',
    },
  ],
  serious: [
    {
      headingFont: 'Merriweather',
      bodyFont: 'Source Sans Pro',
      sampleHeading: 'Professional Excellence',
      sampleText: 'Convey authority and expertise through typography.',
    },
    {
      headingFont: 'Libre Baskerville',
      bodyFont: 'Work Sans',
      sampleHeading: 'Classic Authority',
      sampleText: 'Traditional serif paired with modern sans for timeless appeal.',
    },
    {
      headingFont: 'Spectral',
      bodyFont: 'IBM Plex Sans',
      sampleHeading: 'Corporate Trust',
      sampleText: 'Build credibility with sophisticated type combinations.',
    },
    {
      headingFont: 'PT Serif',
      bodyFont: 'PT Sans',
      sampleHeading: 'Business Focus',
      sampleText: 'Professional typography for corporate communications.',
    },
  ],
  calm: [
    {
      headingFont: 'Cormorant Garamond',
      bodyFont: 'Proza Libre',
      sampleHeading: 'Serene Design',
      sampleText: 'Create peaceful reading experiences with balanced typography.',
    },
    {
      headingFont: 'Marcellus',
      bodyFont: 'Source Sans Pro',
      sampleHeading: 'Peaceful Balance',
      sampleText: 'Achieve harmony through careful font selection.',
    },
    {
      headingFont: 'Crimson Text',
      bodyFont: 'Lato',
      sampleHeading: 'Quiet Elegance',
      sampleText: 'Elegant serenity through classic type combinations.',
    },
    {
      headingFont: 'Gilda Display',
      bodyFont: 'Quattrocento Sans',
      sampleHeading: 'Tranquil Space',
      sampleText: 'Design for calmness with sophisticated typography.',
    },
  ],
  energetic: [
    {
      headingFont: 'Montserrat',
      bodyFont: 'Hind',
      sampleHeading: 'BOLD MOVES',
      sampleText: 'Dynamic typography that energizes your design.',
    },
    {
      headingFont: 'Raleway',
      bodyFont: 'Open Sans',
      sampleHeading: 'VIBRANT DESIGN',
      sampleText: 'Create impact with powerful type combinations.',
    },
    {
      headingFont: 'Bebas Neue',
      bodyFont: 'Roboto',
      sampleHeading: 'HIGH ENERGY',
      sampleText: 'Bold typography that demands attention.',
    },
    {
      headingFont: 'Oswald',
      bodyFont: 'Source Sans Pro',
      sampleHeading: 'DYNAMIC FORCE',
      sampleText: 'Strong type choices for maximum impact.',
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

// Update the store to preload fonts
const preloadFonts = () => {
  Object.values(moodFontMap).forEach(pairs => {
    pairs.forEach(pair => {
      loadGoogleFont(pair.headingFont);
      loadGoogleFont(pair.bodyFont);
    });
  });
};

// Initialize font loading
preloadFonts();
