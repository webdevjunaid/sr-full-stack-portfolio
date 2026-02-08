import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex items-end justify-between border-b border-border pb-6"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold">Experience</h2>
            <span className="font-mono text-sm text-muted-foreground hidden md:block">2022 — PRESENT</span>
          </motion.div>
          
          <div className="space-y-0">
            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group py-12 border-b border-border/40 last:border-0 hover:bg-background/50 transition-all duration-300 px-6 -mx-6 rounded-2xl hover:shadow-sm"
              >
                <div className="grid md:grid-cols-[1fr_3fr] gap-8">
                  <div className="md:pt-1">
                    <span className="font-mono text-sm text-muted-foreground mb-2 block tracking-wider uppercase">{exp.period}</span>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-heading font-semibold mb-6 group-hover:text-primary transition-colors">{exp.role}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description[0]} {exp.description[1]}
                    </p>
                    <div className="flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                      {exp.techStack?.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-xs font-mono border border-border px-2 py-1 rounded-sm bg-background/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;