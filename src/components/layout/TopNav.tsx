import React from 'react';
import { Hexagon, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * @description The top navigation bar for the PokéFlow landing page.
 * It features the logo and a mobile menu toggle icon, adhering to a sticky position.
 * The layout is managed by Flexbox for proper alignment as per the design requirements.
 * @component
 * @returns {React.ReactElement} The rendered TopNav component.
 */
const TopNav: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Company Name */}
        <a href="/" className="flex items-center gap-2" aria-label="PokéFlow Home">
          <Hexagon className="h-7 w-7 text-accent" />
          <span className="text-xl font-bold text-primary">
            PokéFlow
          </span>
        </a>

        {/* Menu Toggle Button */}
        <Button variant="ghost" size="icon" aria-label="Toggle Menu">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default TopNav;