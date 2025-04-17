
// Font pairing characteristics
export interface FontAnalysisResult {
  score: 'excellent' | 'good' | 'warning';
  message: string;
  details: string[];
  recommendations?: string[];
}

interface FontCharacteristics {
  category: string;
  weight: number;
  readability: number;
  personality: string[];
  bestUseCase: string[];
}

// Font database with characteristics
const fontDatabase: Record<string, FontCharacteristics> = {
  'Playfair Display': {
    category: 'serif',
    weight: 7,
    readability: 8,
    personality: ['elegant', 'sophisticated', 'traditional'],
    bestUseCase: ['headlines', 'editorial', 'luxury brands']
  },
  'Source Sans Pro': {
    category: 'sans-serif',
    weight: 5,
    readability: 9,
    personality: ['clean', 'versatile', 'modern'],
    bestUseCase: ['body text', 'interfaces', 'minimalist designs']
  },
  'Roboto': {
    category: 'sans-serif',
    weight: 5,
    readability: 9,
    personality: ['clean', 'natural', 'accessible'],
    bestUseCase: ['interfaces', 'body text', 'modern websites']
  },
  'Lato': {
    category: 'sans-serif',
    weight: 4,
    readability: 9,
    personality: ['friendly', 'approachable', 'natural'],
    bestUseCase: ['general purpose', 'corporate content', 'interfaces']
  },
  'Open Sans': {
    category: 'sans-serif',
    weight: 4,
    readability: 10,
    personality: ['neutral', 'friendly', 'accessible'],
    bestUseCase: ['web interfaces', 'mobile apps', 'readability']
  },
  'Merriweather': {
    category: 'serif',
    weight: 6,
    readability: 7,
    personality: ['traditional', 'serious', 'reliable'],
    bestUseCase: ['long-form reading', 'editorial', 'educational']
  },
  'Oswald': {
    category: 'sans-serif',
    weight: 8,
    readability: 7,
    personality: ['bold', 'confident', 'narrow'],
    bestUseCase: ['headlines', 'posters', 'impactful statements']
  },
  'Montserrat': {
    category: 'sans-serif',
    weight: 6,
    readability: 8,
    personality: ['modern', 'geometric', 'versatile'],
    bestUseCase: ['headlines', 'branding', 'digital interfaces']
  },
  'Raleway': {
    category: 'sans-serif',
    weight: 4,
    readability: 7,
    personality: ['elegant', 'light', 'modern'],
    bestUseCase: ['headlines', 'luxury branding', 'elegant websites']
  },
  'Comfortaa': {
    category: 'display',
    weight: 5,
    readability: 6,
    personality: ['friendly', 'rounded', 'playful'],
    bestUseCase: ['casual brands', 'children content', 'creative projects']
  },
  'Georgia': {
    category: 'serif',
    weight: 5,
    readability: 8,
    personality: ['classic', 'readable', 'timeless'],
    bestUseCase: ['long-form reading', 'formal content', 'traditional brands']
  },
  'Comic Sans MS': {
    category: 'display',
    weight: 4,
    readability: 5,
    personality: ['casual', 'informal', 'playful'],
    bestUseCase: ['children content', 'informal communications', 'casual contexts']
  },
  'Pacifico': {
    category: 'script',
    weight: 6,
    readability: 4,
    personality: ['playful', 'friendly', 'casual'],
    bestUseCase: ['logos', 'headers', 'casual brands']
  },
  'Dancing Script': {
    category: 'script',
    weight: 5,
    readability: 5,
    personality: ['elegant', 'friendly', 'casual'],
    bestUseCase: ['invitations', 'headers', 'feminine brands']
  },
  'Fredoka One': {
    category: 'display',
    weight: 7,
    readability: 6,
    personality: ['playful', 'bold', 'friendly'],
    bestUseCase: ['children brands', 'fun projects', 'entertainment']
  },
  'Righteous': {
    category: 'display',
    weight: 7,
    readability: 5,
    personality: ['retro', 'playful', 'geometric'],
    bestUseCase: ['logos', 'display text', 'retro designs']
  },
  'Bebas Neue': {
    category: 'display',
    weight: 8,
    readability: 6,
    personality: ['powerful', 'condensed', 'bold'],
    bestUseCase: ['headlines', 'posters', 'attention-grabbing content']
  },
  'Crimson Text': {
    category: 'serif',
    weight: 4,
    readability: 7,
    personality: ['classic', 'elegant', 'traditional'],
    bestUseCase: ['books', 'literary content', 'refined designs']
  },
  'Work Sans': {
    category: 'sans-serif',
    weight: 4,
    readability: 8,
    personality: ['clean', 'modern', 'neutral'],
    bestUseCase: ['interfaces', 'corporate designs', 'minimalist websites']
  },
  'Lobster': {
    category: 'script',
    weight: 7,
    readability: 4,
    personality: ['playful', 'bold', 'casual'],
    bestUseCase: ['logos', 'headlines', 'casual brands']
  },
  'Nunito': {
    category: 'sans-serif',
    weight: 4,
    readability: 8,
    personality: ['friendly', 'rounded', 'approachable'],
    bestUseCase: ['interfaces', 'children content', 'casual brands']
  },
  'Quicksand': {
    category: 'sans-serif',
    weight: 4,
    readability: 7,
    personality: ['friendly', 'rounded', 'geometric'],
    bestUseCase: ['modern interfaces', 'tech brands', 'clean designs']
  },
  'Permanent Marker': {
    category: 'handwriting',
    weight: 7,
    readability: 5,
    personality: ['casual', 'handwritten', 'bold'],
    bestUseCase: ['casual headings', 'creative projects', 'emphasis']
  },
  'Karla': {
    category: 'sans-serif',
    weight: 5,
    readability: 8,
    personality: ['clean', 'versatile', 'approachable'],
    bestUseCase: ['interfaces', 'general text', 'clean designs']
  },
  'Libre Baskerville': {
    category: 'serif',
    weight: 6,
    readability: 7,
    personality: ['traditional', 'authoritative', 'elegant'],
    bestUseCase: ['formal content', 'literature', 'traditional brands']
  },
  'PT Serif': {
    category: 'serif',
    weight: 5,
    readability: 8,
    personality: ['classic', 'readable', 'formal'],
    bestUseCase: ['long-form reading', 'editorial', 'educational content']
  },
  'PT Sans': {
    category: 'sans-serif',
    weight: 5,
    readability: 8,
    personality: ['versatile', 'neutral', 'clean'],
    bestUseCase: ['interfaces', 'informational content', 'general text']
  }
};

// Get font characteristics or return default
const getFontCharacteristics = (fontFamily: string): FontCharacteristics => {
  return fontDatabase[fontFamily] || {
    category: 'unknown',
    weight: 5,
    readability: 6,
    personality: ['unknown'],
    bestUseCase: ['general purpose']
  };
};

// Rules for compatibility between fonts
const analyzeCompatibility = (heading: FontCharacteristics, body: FontCharacteristics): {
  score: 'excellent' | 'good' | 'warning';
  reasons: string[];
} => {
  const reasons: string[] = [];
  let positivePoints = 0;
  let negativePoints = 0;

  // Rule 1: Contrast between categories is good
  if (heading.category !== body.category) {
    positivePoints += 2;
    reasons.push(`Good contrast between ${heading.category} heading and ${body.category} body.`);
  } else {
    negativePoints += 1;
    reasons.push(`Limited category contrast (both ${heading.category}).`);
  }

  // Rule 2: Weight difference should exist
  const weightDiff = Math.abs(heading.weight - body.weight);
  if (weightDiff >= 2) {
    positivePoints += 2;
    reasons.push('Good visual hierarchy through weight contrast.');
  } else {
    negativePoints += 1;
    reasons.push('Limited weight difference may affect visual hierarchy.');
  }

  // Rule 3: Body text should be highly readable
  if (body.readability >= 8) {
    positivePoints += 2;
    reasons.push('High body text readability.');
  } else if (body.readability >= 6) {
    positivePoints += 1;
    reasons.push('Acceptable body text readability.');
  } else {
    negativePoints += 2;
    reasons.push('Body text readability may be challenging.');
  }

  // Rule 4: Personality compatibility
  const sharedPersonality = heading.personality.filter(p => body.personality.includes(p));
  if (sharedPersonality.length > 0) {
    positivePoints += 1;
    reasons.push(`Consistent personality traits: ${sharedPersonality.join(', ')}.`);
  }

  // Determine final score
  let score: 'excellent' | 'good' | 'warning';
  if (positivePoints >= 5 && negativePoints <= 1) {
    score = 'excellent';
  } else if (positivePoints >= 3 && negativePoints <= 2) {
    score = 'good';
  } else {
    score = 'warning';
  }

  return { score, reasons };
};

// Generate alternative recommendations
const generateRecommendations = (headingFont: string, bodyFont: string, mood: string): string[] => {
  const currentHeading = getFontCharacteristics(headingFont);
  
  // Find fonts with similar characteristics but better compatibility
  const recommendations: string[] = [];
  
  Object.entries(fontDatabase).forEach(([font, characteristics]) => {
    // Don't recommend the current fonts
    if (font !== headingFont && font !== bodyFont) {
      // Match based on the mood
      let moodMatch = false;
      
      switch(mood) {
        case 'happy':
          moodMatch = characteristics.personality.some(p => 
            ['friendly', 'playful', 'casual', 'approachable'].includes(p));
          break;
        case 'playful':
          moodMatch = characteristics.personality.some(p => 
            ['playful', 'fun', 'casual', 'friendly'].includes(p));
          break;
        case 'serious':
          moodMatch = characteristics.personality.some(p => 
            ['serious', 'formal', 'traditional', 'authoritative'].includes(p));
          break;
        case 'calm':
          moodMatch = characteristics.personality.some(p => 
            ['elegant', 'clean', 'refined', 'neutral'].includes(p));
          break;
        case 'energetic':
          moodMatch = characteristics.personality.some(p => 
            ['bold', 'powerful', 'confident', 'modern'].includes(p));
          break;
      }
      
      // If it's a good match for the mood and category is similar, add it
      if (moodMatch && (characteristics.category === currentHeading.category)) {
        if (currentHeading.category === 'serif' || currentHeading.category === 'sans-serif') {
          recommendations.push(`Try ${font} as an alternative heading font`);
        } else {
          recommendations.push(`Consider ${font} for a similar style`);
        }
      }
    }
  });
  
  // Limit to 3 recommendations
  return recommendations.slice(0, 3);
};

// Main analysis function
export const analyzeFontPairing = (
  headingFont: string, 
  bodyFont: string,
  mood: string
): FontAnalysisResult => {
  const headingCharacteristics = getFontCharacteristics(headingFont);
  const bodyCharacteristics = getFontCharacteristics(bodyFont);
  
  const { score, reasons } = analyzeCompatibility(headingCharacteristics, bodyCharacteristics);
  
  // Generate mood-specific feedback
  let moodFeedback = '';
  const moodMatch = isFontGoodForMood(headingFont, mood);
  
  if (moodMatch) {
    moodFeedback = `${headingFont} works well for ${mood} content.`;
  } else {
    moodFeedback = `${headingFont} may not be optimal for ${mood} content.`;
  }
  
  const recommendations = generateRecommendations(headingFont, bodyFont, mood);
  
  return {
    score,
    message: getMessageForScore(score),
    details: [...reasons, moodFeedback],
    recommendations: recommendations.length > 0 ? recommendations : undefined
  };
};

// Helper function to check if a font matches a mood
const isFontGoodForMood = (fontFamily: string, mood: string): boolean => {
  const characteristics = getFontCharacteristics(fontFamily);
  
  switch(mood) {
    case 'happy':
      return characteristics.personality.some(p => 
        ['friendly', 'playful', 'casual'].includes(p));
    case 'playful':
      return characteristics.personality.some(p => 
        ['playful', 'friendly', 'casual', 'fun'].includes(p));
    case 'serious':
      return characteristics.personality.some(p => 
        ['serious', 'traditional', 'formal', 'authoritative'].includes(p));
    case 'calm':
      return characteristics.personality.some(p => 
        ['elegant', 'clean', 'refined', 'traditional'].includes(p));
    case 'energetic':
      return characteristics.personality.some(p => 
        ['bold', 'powerful', 'modern', 'confident'].includes(p));
    default:
      return true;
  }
};

// Get summary message based on score
const getMessageForScore = (score: 'excellent' | 'good' | 'warning'): string => {
  switch (score) {
    case 'excellent':
      return 'Excellent pairing with strong contrast and readability';
    case 'good':
      return 'Good pairing with adequate contrast and readability';
    case 'warning':
      return 'Consider improving contrast or readability with this pairing';
  }
};
