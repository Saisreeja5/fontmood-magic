
import React from 'react';
import { Smile, Music, Briefcase, Coffee, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Mood, useFontMoodStore } from '@/lib/fontMoodStore';

const MoodSelector: React.FC = () => {
  const { currentMood, setMood } = useFontMoodStore();
  
  const moods: { id: Mood; icon: React.ReactNode; label: string; color: string }[] = [
    { id: 'happy', icon: <Smile size={24} />, label: 'Happy', color: 'bg-moods-happy text-white' },
    { id: 'playful', icon: <Music size={24} />, label: 'Playful', color: 'bg-moods-playful text-white' },
    { id: 'serious', icon: <Briefcase size={24} />, label: 'Serious', color: 'bg-moods-serious text-white' },
    { id: 'calm', icon: <Coffee size={24} />, label: 'Calm', color: 'bg-moods-calm text-white' },
    { id: 'energetic', icon: <Zap size={24} />, label: 'Energetic', color: 'bg-moods-energetic text-white' },
  ];

  return (
    <div className="w-full mb-8">
      <h2 className="text-xl font-semibold mb-4 text-center">How are you feeling today?</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 justify-center">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => setMood(mood.id)}
            className={cn(
              'mood-button flex flex-col items-center min-w-[80px]',
              mood.color,
              currentMood === mood.id ? 'active' : ''
            )}
            aria-label={`Select ${mood.label} mood`}
          >
            <div className="mb-1">{mood.icon}</div>
            <span className="text-sm font-medium">{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
