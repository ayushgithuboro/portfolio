import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      </div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-accent font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ayush Kumar
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground/80">
            Cybersecurity Enthusiast & Developer
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg">
            Passionate about cybersecurity, ethical hacking, and software development. Building secure and innovative
            solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30"></div>
              <div className="relative bg-card rounded-full overflow-hidden w-64 h-64 mx-auto">
                <img 
                  src="/lovable-uploads/Screenshot 2025-04-29 213754.png"
                  alt="Ayush Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
