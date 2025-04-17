
import React, { useState } from 'react';
import { AlertCircle, CheckCircle, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { analyzeFontPairing, FontAnalysisResult } from '@/services/fontAnalysis';
import { useFontMoodStore } from '@/lib/fontMoodStore';
import { toast } from 'sonner';

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
  const { currentMood } = useFontMoodStore();
  const [expanded, setExpanded] = useState(false);
  
  // Use the AI analysis service
  const analysisResult = analyzeFontPairing(headingFont, bodyFont, currentMood);
  
  const handleApplyRecommendation = (recommendation: string) => {
    // This is just a notification for now
    // In a full implementation, this would update the font selection
    toast.success(`Font recommendation noted: ${recommendation}`);
  };
  
  return (
    <div className={cn('rounded-lg bg-white border overflow-hidden', {
      'border-green-500 bg-green-50': analysisResult.score === 'excellent',
      'border-amber-500 bg-amber-50': analysisResult.score === 'warning',
      'border-blue-500 bg-blue-50': analysisResult.score === 'good'
    }, className)}>
      <div 
        className="flex items-center p-3 cursor-pointer" 
        onClick={() => setExpanded(!expanded)}
      >
        {analysisResult.score === 'warning' ? (
          <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
        ) : (
          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
        )}
        <span className="text-sm flex-grow">{analysisResult.message}</span>
        <Button variant="ghost" size="sm" className="p-1 h-auto">
          {expanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      {expanded && (
        <div className="p-3 pt-0 border-t border-dashed border-gray-200">
          <div className="text-xs text-gray-600 space-y-2">
            <h4 className="font-medium text-sm text-gray-700 mb-1">Typography Analysis:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {analysisResult.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            
            {analysisResult.recommendations && analysisResult.recommendations.length > 0 && (
              <div className="mt-3 pt-2 border-t border-gray-200">
                <div className="flex items-center mb-2">
                  <Lightbulb className="h-4 w-4 text-amber-500 mr-1" />
                  <h4 className="font-medium text-sm text-gray-700">AI Recommendations:</h4>
                </div>
                <ul className="space-y-2">
                  {analysisResult.recommendations.map((recommendation, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-600 flex-grow">{recommendation}</span>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-auto py-1 px-2 text-xs"
                            onClick={() => handleApplyRecommendation(recommendation)}
                          >
                            Apply
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-64 text-xs">
                          This would apply the recommendation in a full implementation.
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityChecker;
