
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useFontMoodStore, FontPair } from '@/lib/fontMoodStore';
import useFontLoader from '@/hooks/useFontLoader';
import AccessibilityChecker from './AccessibilityChecker';
import { toast } from 'sonner';

const FontPreview: React.FC = () => {
  const { currentMood, nextPair, getCurrentPair } = useFontMoodStore();
  const currentPair = getCurrentPair();
  const [customText, setCustomText] = useState('');
  
  // Load the fonts
  const { fontsLoaded } = useFontLoader(currentPair.headingFont, currentPair.bodyFont);
  
  const headingStyles = {
    fontFamily: currentPair.headingFont,
  };
  
  const bodyStyles = {
    fontFamily: currentPair.bodyFont,
  };
  
  const getMoodColor = () => {
    const moodColors = {
      happy: 'from-orange-500/20 to-yellow-500/20',
      playful: 'from-purple-500/20 to-pink-500/20',
      serious: 'from-blue-800/20 to-blue-600/20',
      calm: 'from-emerald-500/20 to-teal-500/20',
      energetic: 'from-red-500/20 to-orange-500/20',
    };
    
    return moodColors[currentMood as keyof typeof moodColors];
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-scale-in">
      <div className={`font-card bg-gradient-to-br ${getMoodColor()} backdrop-blur-sm relative`}>
        {!fontsLoaded && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mb-2"></div>
              <p className="text-sm text-gray-600">Loading fonts...</p>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-gray-500">Heading</span>
            <h3 className="font-medium">{currentPair.headingFont}</h3>
          </div>
          <div className="text-right">
            <span className="text-xs uppercase tracking-wider text-gray-500">Body</span>
            <h3 className="font-medium">{currentPair.bodyFont}</h3>
          </div>
        </div>
        
        <div className="mb-8 font-transition">
          <h1 
            className="text-4xl sm:text-5xl font-bold mb-4 font-transition" 
            style={headingStyles}
          >
            {customText || currentPair.sampleHeading}
          </h1>
          <p 
            className="text-lg font-transition" 
            style={bodyStyles}
          >
            {customText || currentPair.sampleText}
          </p>
        </div>
        
        <div className="mb-4">
          <Textarea 
            placeholder="Enter your own text to preview the font pairing"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="w-full"
          />
        </div>
        
        <AccessibilityChecker 
          headingFont={currentPair.headingFont} 
          bodyFont={currentPair.bodyFont}
          className="mb-6"
        />
        
        <div className="flex justify-between items-center">
          <Button 
            variant="secondary"
            onClick={() => setCustomText('')}
            className="flex items-center gap-2"
          >
            Reset Text
          </Button>
          <Button 
            onClick={() => {
              nextPair();
              toast.info('Loading next font pairing...');
            }}
            className="flex items-center gap-2"
          >
            Next Pairing
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FontPreview;
