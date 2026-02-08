import React from 'react';
import { EDUCATION_DATA } from '../../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-24 bg-secondary/5 border-y border-border/40">
      <div className="container mx-auto px-4 text-center">
        {EDUCATION_DATA.map((edu, index) => (
            <div key={index} className="max-w-2xl mx-auto">
              <GraduationCap className="h-8 w-8 mx-auto mb-6 text-muted-foreground opacity-50" />
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3">{edu.school}</h3>
              <p className="text-lg text-primary font-medium mb-2">{edu.degree}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {edu.details?.map((detail, i) => (
                    <span key={i} className="text-sm font-mono text-muted-foreground px-2">
                        {detail}
                    </span>
                ))}
              </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Education;