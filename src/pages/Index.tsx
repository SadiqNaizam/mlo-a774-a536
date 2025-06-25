import React from 'react';
import TopNav from '@/components/layout/TopNav';
import HeroContent from '@/components/Hero/HeroContent';

/**
 * @description The main landing page for the SynergyFlow application.
 * It serves as the primary entry point, composing the `TopNav` and `HeroContent`
 * components to present the key value proposition to users.
 * The layout is a simple vertical column, with the hero section centered
 * in the available space.
 * @page
 * @returns {React.ReactElement} The rendered index page.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <TopNav />
      <main className="flex flex-1 items-center justify-center p-4 md:p-6">
        <HeroContent />
      </main>
    </div>
  );
};

export default IndexPage;
