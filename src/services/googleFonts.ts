
const GOOGLE_FONTS_API = 'https://www.googleapis.com/webfonts/v1/webfonts';

export interface GoogleFont {
  family: string;
  variants: string[];
  category: string;
}

export const fetchGoogleFonts = async (): Promise<GoogleFont[]> => {
  // Note: In production, you would need to add your Google Fonts API key
  const response = await fetch(`${GOOGLE_FONTS_API}?key=YOUR_API_KEY&sort=popularity`);
  const data = await response.json();
  return data.items;
};

export const loadGoogleFont = (fontFamily: string) => {
  const link = document.createElement('link');
  link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(' ', '+')}:wght@400;700&display=swap`;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

