import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-background relative border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-16 mb-24">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
                <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-8">About Me</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-8">
                  I don't just write code.<br/>
                  <span className="text-muted-foreground">I architect reliability.</span>
                </h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    With over 4 years of rigorous experience, I specialize in building high-performance web applications that scale. My background spans the full development lifecycle, from designing intuitive frontend interfaces to engineering complex backend microservices.
                  </p>
                  <p>
                    Currently, I lead development initiatives that bridge modern JavaScript ecosystems with enterprise-grade .NET architectures, ensuring seamless deployment via cloud-native strategies on AWS and Azure.
                  </p>
                </div>
             </motion.div>
             
             <motion.div 
               className="flex flex-col justify-end gap-6"
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
             >
                <div className="p-8 bg-secondary/20 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
                   <span className="block text-6xl font-bold font-heading mb-2">4+</span>
                   <span className="font-mono text-sm uppercase tracking-wider text-muted-foreground">Years Experience</span>
                </div>
                <div className="p-8 bg-secondary/20 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
                   <span className="block text-6xl font-bold font-heading mb-2">20+</span>
                   <span className="font-mono text-sm uppercase tracking-wider text-muted-foreground">Projects Delivered</span>
                </div>
             </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { icon: Layout, label: "Frontend", sub: "React & Next.js" },
               { icon: Terminal, label: "Backend", sub: "Node.js & .NET" },
               { icon: Database, label: "Database", sub: "SQL & NoSQL" },
               { icon: Code2, label: "DevOps", sub: "AWS & Azure" },
             ].map((item, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 + (i * 0.1) }}
                 whileHover={{ y: -5 }}
                 className="p-6 border border-border/40 hover:border-primary/40 transition-all bg-background rounded-xl hover:shadow-lg"
               >
                 <item.icon className="h-8 w-8 mb-4 text-primary stroke-1" />
                 <h4 className="font-bold text-lg mb-1">{item.label}</h4>
                 <p className="text-sm text-muted-foreground font-mono">{item.sub}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;