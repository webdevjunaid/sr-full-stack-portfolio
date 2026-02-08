import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-heading font-bold sticky top-32"
              >
                Stack
              </motion.h2>
            </div>
            
            <div className="md:col-span-3 grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {SKILL_CATEGORIES.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6 border-b border-border/40 pb-2">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <motion.li 
                        key={skill} 
                        className="text-lg font-medium hover:text-primary transition-colors cursor-default"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + (idx * 0.05) }}
                        whileHover={{ x: 10, color: "hsl(var(--primary))" }}
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;