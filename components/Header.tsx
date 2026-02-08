import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import { RESUME_LINK } from '../constants';
import { motion } from 'framer-motion';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    // Animation variants for mobile menu
    const mobileMenuVariants = {
      hidden: { y: -20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 60, damping: 18 } },
      exit: { y: -20, opacity: 0, transition: { duration: 0.2 } },
    };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight">
          <Terminal className="h-6 w-6 text-primary" />
          <span>Junaid</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button variant="outline" size="sm" onClick={() => window.open(RESUME_LINK, '_blank')}>
            Resume
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <React.Fragment>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left py-2 px-4 hover:bg-muted rounded-md text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button className="w-full" onClick={() => window.open(RESUME_LINK, '_blank')}>
              Download Resume
            </Button>
          </motion.div>
        )}
      </React.Fragment>
    </header>
  );
};

export default Header;
