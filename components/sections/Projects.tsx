import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../../constants';
import { ArrowUpRight, Github, X, Layers, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Project } from '../../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter mb-6">SELECTED<br/>WORKS</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((project, index) => (
              <motion.div
                key={project.id}
                layoutId={`card-container-${project.id}`}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer relative flex flex-col h-full bg-secondary/5 border border-border/50 hover:border-primary/30 hover:bg-secondary/10 transition-all duration-500 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="p-8 md:p-12 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex flex-col gap-2">
                       <motion.span layoutId={`project-role-${project.id}`} className="font-mono text-xs uppercase tracking-widest text-primary">
                         {project.role}
                       </motion.span>
                       <motion.h3 layoutId={`project-title-${project.id}`} className="text-3xl font-bold font-heading group-hover:text-primary transition-colors duration-300">
                         {project.title}
                       </motion.h3>
                    </div>
                    <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-300">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <motion.p layoutId={`project-desc-${project.id}`} className="text-muted-foreground text-lg leading-relaxed mb-8 flex-grow line-clamp-3">
                    {project.description}
                  </motion.p>

                  <div className="space-y-4">
                    <div className="h-px w-full bg-border/50 group-hover:bg-primary/20 transition-colors"></div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-mono rounded-full bg-background border border-border/50 text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-3 py-1 text-xs font-mono rounded-full bg-background border border-border/50 text-muted-foreground">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div
              layoutId={`card-container-${selectedProject.id}`}
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-3xl shadow-2xl relative z-10 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 md:p-12 relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-6 right-6 rounded-full hover:bg-secondary"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                <div className="mb-8 pr-12">
                  <motion.span layoutId={`project-role-${selectedProject.id}`} className="inline-block font-mono text-sm uppercase tracking-widest text-primary mb-2">
                    {selectedProject.role}
                  </motion.span>
                  <motion.h3 layoutId={`project-title-${selectedProject.id}`} className="text-4xl md:text-5xl font-bold font-heading mb-4">
                    {selectedProject.title}
                  </motion.h3>
                </div>

                <div className="grid gap-8">
                  <motion.div layoutId={`project-desc-${selectedProject.id}`}>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Layers className="h-5 w-5 text-primary" /> Overview
                    </h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </motion.div>

                  <div>
                    <h4 className="text-lg font-bold mb-4">Key Features</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (idx * 0.05) }}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="px-4 py-1.5 text-sm font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-8 border-t border-border/50">
                    {selectedProject.links.github && selectedProject.links.github !== "#" && (
                      <Button onClick={() => window.open(selectedProject.links.github, "_blank")} size="lg" className="rounded-full">
                        <Github className="mr-2 h-5 w-5" /> View Code
                      </Button>
                    )}
                    {selectedProject.links.demo && selectedProject.links.demo !== "#" && (
                       <Button onClick={() => window.open(selectedProject.links.demo, "_blank")} variant="outline" size="lg" className="rounded-full">
                        <ArrowUpRight className="mr-2 h-5 w-5" /> Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;