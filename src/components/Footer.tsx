
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary dark:bg-secondary/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-heading font-bold text-xl">
              Ayush<span className="text-accent">.</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
            Securing digital frontiers through threat intelligence and proactive defense
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/ayushgithuboro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ayush-kumar-640870254/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:hiiamayushkumar@gmail.com" 
              className="text-foreground/80 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-muted-foreground">
            © {currentYear} Ayush Kumar. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#home" className="text-foreground/80 hover:text-accent transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground/80 hover:text-accent transition-colors">
              About
            </a>
            <a href="#projects" className="text-foreground/80 hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
