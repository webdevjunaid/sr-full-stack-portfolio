export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  techStack: string[];
  features: string[];
  image: string;
  links: {
    demo: string;
    github: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  details?: string[];
}
