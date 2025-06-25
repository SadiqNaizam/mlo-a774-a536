import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

/**
 * @description Main hero content section for the landing page.
 * Displays the main heading, descriptive text, and call-to-action buttons.
 * It follows a centered, column layout.
 */
const HeroContent: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-6 text-center max-w-lg mx-auto px-4 pt-12 pb-16 sm:pt-16 sm:pb-20">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
        Unify Your Team, <br />
        <span className="text-primary">Amplify Your Impact.</span>
      </h1>

      <p className="text-lg text-muted-foreground md:text-xl">
        PokéFlow is the all-in-one platform designed to streamline your
        projects, enhance collaboration, and boost productivity. Stop juggling
        tools, start achieving goals.
      </p>

      <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row mt-2">
        {/* Primary Call-to-Action Button */}
        <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
          Start Your Free Trial
        </Button>

        {/* Secondary Call-to-Action Button */}
        <Button
          variant="outline"
          size="lg"
          className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground sm:w-auto"
        >
          Learn More
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroContent;