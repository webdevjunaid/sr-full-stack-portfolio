import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { SOCIAL_LINKS } from '../../constants';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert("Message sent! (Simulated)");
    reset();
  };

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-between">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-6xl font-heading font-bold mb-8">Get in<br/>Touch.</h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-sm mb-12">
                    Have a project in mind or want to discuss modern web technologies? I'm always open to new opportunities.
                </p>

                <div className="space-y-6">
                    <a href={SOCIAL_LINKS.email} className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors group">
                        <span className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                            <Mail className="h-5 w-5" />
                        </span>
                        junaidch249249@gmail.com
                    </a>
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors group">
                        <span className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                            <Github className="h-5 w-5" />
                        </span>
                        github.com/webdevjunaid
                    </a>
                </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Input {...register("name")} placeholder="NAME" className="h-14 bg-secondary/10 border-border/50 focus:border-primary text-lg" />
                {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
              </div>
              
              <div className="space-y-2">
                <Input type="email" {...register("email")} placeholder="EMAIL" className="h-14 bg-secondary/10 border-border/50 focus:border-primary text-lg" />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Textarea {...register("message")} placeholder="MESSAGE" className="min-h-[200px] bg-secondary/10 border-border/50 focus:border-primary text-lg resize-none p-4" />
                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg rounded-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : (
                  <>Send Message <ArrowRight className="ml-2 h-5 w-5" /></>
                )}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;