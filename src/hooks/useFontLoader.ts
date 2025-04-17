
import { useEffect, useState } from 'react';
import { loadGoogleFont } from '@/services/googleFonts';
import { toast } from 'sonner';

export function useFontLoader(headingFont: string, bodyFont: string) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    // Reset state when font selection changes
    setFontsLoaded(false);
    
    const loadFonts = async () => {
      try {
        // Load both fonts
        await Promise.all([
          loadGoogleFont(headingFont),
          loadGoogleFont(bodyFont)
        ]);
        
        // Set state as loaded
        setFontsLoaded(true);
        
        // Dispatch font loading event
        const fontLoadEvent = new CustomEvent('fontsLoaded', {
          detail: { headingFont, bodyFont }
        });
        
        document.dispatchEvent(fontLoadEvent);
      } catch (error) {
        console.error('Error loading fonts:', error);
        toast.error('There was an issue loading the selected fonts');
      }
    };
    
    loadFonts();
  }, [headingFont, bodyFont]);
  
  return { fontsLoaded };
}

export default useFontLoader;
