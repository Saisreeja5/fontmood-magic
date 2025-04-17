
import React from 'react';
import { Text } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6">
      <div className="container flex justify-center items-center">
        <div className="flex items-center gap-2">
          <Text className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            FontMood
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
