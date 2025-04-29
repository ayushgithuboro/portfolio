
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Experience', href: '#experience' },
    { title: 'Education', href: '#education' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <span className="font-heading font-bold text-xl md:text-2xl">
                Ayush<span className="text-accent">.</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="font-medium text-foreground/80 hover:text-accent transition-colors"
              >
                {link.title}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="mr-2"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <div className={`w-6 h-0.5 bg-foreground transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-foreground my-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-foreground transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-4 py-4 bg-background/95 backdrop-blur-lg rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-medium py-2 text-foreground/80 hover:text-accent transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
