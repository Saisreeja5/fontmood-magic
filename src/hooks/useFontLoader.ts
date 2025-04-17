
import { useEffect } from 'react';
import { loadGoogleFont } from '@/services/googleFonts';

export function useFontLoader(headingFont: string, bodyFont: string) {
  useEffect(() => {
    // Load both fonts
    loadGoogleFont(headingFont);
    loadGoogleFont(bodyFont);
    
    // Dispatch font loading event
    const fontLoadEvent = new CustomEvent('fontsLoaded', {
      detail: { headingFont, bodyFont }
    });
    
    document.dispatchEvent(fontLoadEvent);
    
  }, [headingFont, bodyFont]);
}

export default useFontLoader;

