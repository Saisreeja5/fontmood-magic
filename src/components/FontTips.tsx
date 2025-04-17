
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Contrast, Type, Eye } from 'lucide-react';

const FontTips: React.FC = () => {
  const tips = [
    {
      title: 'Contrast Creates Impact',
      description: 'Pair fonts with different characteristics - serif with sans-serif, or thick with thin.',
      icon: <Contrast className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Match the Mood',
      description: 'Choose fonts that reflect your content's emotional tone - playful, serious, elegant, or bold.',
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Maintain Hierarchy',
      description: 'Create clear visual hierarchy with distinct heading and body text styles.',
      icon: <Type className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Prioritize Readability',
      description: 'Ensure body text is always legible - test at multiple sizes and screen widths.',
      icon: <Eye className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Font Pairing Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                {tip.icon}
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{tip.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FontTips;
