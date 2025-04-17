
import React from 'react';
import Header from '@/components/Header';
import MoodSelector from '@/components/MoodSelector';
import FontPreview from '@/components/FontPreview';
import FontTips from '@/components/FontTips';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-accent/20">
      <Header />
      
      <main className="flex-1 container px-4 py-8">
        <section className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Discover Perfect Font Pairings
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your mood and find beautiful typography combinations that match how you feel.
          </p>
        </section>
        
        <section className="mb-16">
          <MoodSelector />
          <FontPreview />
        </section>
        
        <section>
          <FontTips />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
