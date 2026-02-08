import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '../ui/button';
import { RESUME_LINK, SOCIAL_LINKS } from '../../constants';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden bg-background">
      {/* Abstract Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-5xl mx-auto"
        >
          
          <motion.div variants={itemVariants} className="mb-8 pl-1">
             <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="font-mono text-sm tracking-widest uppercase text-muted-foreground">Based in Islamabad, PK</span>
             </div>
          </motion.div>

          <div className="relative mb-12 select-none">
            <motion.h1 
              variants={itemVariants}
              className="text-[12vw] leading-[0.85] font-bold font-heading tracking-tighter text-foreground text-center"
            >
              MUHAMMAD
            </motion.h1>
            <motion.h1 
              variants={itemVariants}
              className="text-[12vw] leading-[0.85] font-bold font-heading tracking-tighter text-foreground text-center"
              style={{ WebkitTextStroke: '1px currentColor', WebkitTextFillColor: 'transparent', opacity: 0.6 }}
            >
              JUNAID
            </motion.h1>
          </div>

          <motion.div 
            variants={itemVariants}
            className="w-full grid md:grid-cols-[1fr_auto] gap-8 items-end border-t border-border/40 pt-8"
          >
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-xl leading-relaxed">
              Senior Full-Stack Developer engineering scalable solutions with <span className="text-foreground font-medium">React</span>, <span className="text-foreground font-medium">Node.js</span>, and <span className="text-foreground font-medium">.NET</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => window.open(RESUME_LINK, '_blank')}
                className="rounded-full h-14 px-8 text-lg bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
              >
                View Resume
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open(SOCIAL_LINKS.github, '_blank')}
                className="rounded-full h-14 w-14 p-0 border-border/60 hover:border-foreground transition-all hover:scale-110 active:scale-95"
              >
                <Github className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;