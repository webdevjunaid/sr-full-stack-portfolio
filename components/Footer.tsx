import React from 'react';
import { Github, ArrowUp, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/40 bg-background pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight leading-tight">
              Let's build something <br />
              <span className="text-primary">extraordinary.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Open for new opportunities.
            </p>
             <div className="flex gap-4 pt-4">
               <a 
                 href={SOCIAL_LINKS.email}
                 className="inline-flex items-center text-lg font-medium hover:text-primary transition-colors border-b border-primary/20 hover:border-primary pb-1"
               >
                 junaidch249249@gmail.com
               </a>
             </div>
          </div>
          
          <div className="flex flex-col md:items-end justify-between gap-8">
             <div className="flex gap-4">
                <a 
                   href={SOCIAL_LINKS.github}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                 >
                   <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                 </a>
                 <a 
                   href={SOCIAL_LINKS.email}
                   className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                 >
                   <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
                 </a>
             </div>
             <Button 
                variant="outline" 
                size="icon"
                className="rounded-full h-12 w-12 border-border/60 hover:border-primary hover:bg-background hover:text-primary transition-all" 
                onClick={scrollToTop}
                aria-label="Back to top"
             >
               <ArrowUp className="h-5 w-5" />
             </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/40 text-sm text-muted-foreground">
          <p>© {currentYear} Muhammad Junaid.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0 font-mono text-xs opacity-70">
            <span>React</span>
            <span>TypeScript</span>
            <span>Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;