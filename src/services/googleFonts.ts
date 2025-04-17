
const GOOGLE_FONTS_API = 'https://www.googleapis.com/webfonts/v1/webfonts';

export interface GoogleFont {
  family: string;
  variants: string[];
  category: string;
}

// Cache for fonts that are already loaded
const loadedFonts = new Set<string>();

export const fetchGoogleFonts = async (): Promise<GoogleFont[]> => {
  // Note: In production, you would need to add your Google Fonts API key
  const response = await fetch(`${GOOGLE_FONTS_API}?key=YOUR_API_KEY&sort=popularity`);
  const data = await response.json();
  return data.items;
};

export const loadGoogleFont = (fontFamily: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // If font is already loaded, resolve immediately
    if (loadedFonts.has(fontFamily)) {
      resolve();
      return;
    }
    
    // Create link element for the font
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s+/g, '+')}:wght@400;700&display=swap`;
    link.rel = 'stylesheet';
    
    // Set up load and error handlers
    link.onload = () => {
      // Add to loaded fonts cache
      loadedFonts.add(fontFamily);
      resolve();
    };
    
    link.onerror = () => {
      reject(new Error(`Failed to load font: ${fontFamily}`));
    };
    
    // Add to document
    document.head.appendChild(link);
  });
};

// Helper function to check if a font is already loaded
export const isFontLoaded = (fontFamily: string): boolean => {
  return loadedFonts.has(fontFamily);
};

// Helper to preload a set of fonts
export const preloadFonts = async (fontFamilies: string[]): Promise<void> => {
  try {
    await Promise.all(fontFamilies.map(font => loadGoogleFont(font)));
    console.log('Preloaded fonts successfully');
  } catch (error) {
    console.error('Error preloading fonts:', error);
  }
};
