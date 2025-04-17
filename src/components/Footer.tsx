
import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 border-t">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-2">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500 fill-red-500" />
          <span>for typography lovers</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="text-gray-600 hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            About
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
