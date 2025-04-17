
import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccessibilityCheckerProps {
  headingFont: string;
  bodyFont: string;
  className?: string;
}

const AccessibilityChecker: React.FC<AccessibilityCheckerProps> = ({
  headingFont,
  bodyFont,
  className
}) => {
  // Mock function to check font pairing accessibility
  // In a real app, this would perform actual contrast and readability checks
  const checkAccessibility = (heading: string, body: string) => {
    // Simplified check - in real app you would do proper contrast analysis
    // and possibly check against WCAG guidelines
    
    // For demo purposes:
    // - Some pairings are always "great"
    // - Comic Sans always triggers a warning
    // - Random result for other pairings
    
    if (heading === 'Comic Sans MS') {
      return {
        score: 'warning',
        message: 'This heading font may reduce readability for some users'
      };
    }
    
    if (heading === 'Georgia' && body === 'Roboto') {
      return {
        score: 'excellent',
        message: 'Excellent pairing with strong contrast and readability'
      };
    }
    
    // Just for demo variety
    const scores = ['good', 'excellent', 'warning'];
    const randomScore = scores[Math.floor(Math.random() * scores.length)];
    
    const messages = {
      excellent: 'Excellent pairing with strong contrast and readability',
      good: 'Good pairing with adequate contrast',
      warning: 'Consider improving contrast between heading and body fonts'
    };
    
    return {
      score: randomScore,
      message: messages[randomScore as keyof typeof messages]
    };
  };

  const result = checkAccessibility(headingFont, bodyFont);
  
  return (
    <div className={cn('flex items-center p-3 rounded-lg bg-white border', {
      'border-green-500 bg-green-50': result.score === 'excellent',
      'border-amber-500 bg-amber-50': result.score === 'warning',
      'border-blue-500 bg-blue-50': result.score === 'good'
    }, className)}>
      {result.score === 'warning' ? (
        <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
      ) : (
        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
      )}
      <span className="text-sm">{result.message}</span>
    </div>
  );
};

export default AccessibilityChecker;
