import { Project, Experience, SkillCategory, Education } from './types';

export const RESUME_LINK = "https://drive.google.com/file/d/1v6wfYBF6tsGYsy06bVRTKM_uP7iIzLRR/view?usp=sharing";
export const SOCIAL_LINKS = {
  github: "https://github.com/webdevjunaid",
  email: "mailto:junaidch249249@gmail.com",
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "codonomy-senior",
    company: "Codonomy",
    role: "Senior Software Developer",
    period: "Sept 2025 - Present",
    description: [
      "Leading design and delivery of full-stack features using React.js/Next.js and backend services in .NET Core and Node.js.",
      "Architecting and implementing REST APIs with strong standards for validation, security, and maintainability.",
      "Delivering cloud-native solutions using AWS Lambda and Azure services, improving reliability and monitoring.",
      "Driving performance improvements by optimizing SQL Server queries and stored procedures.",
      "Mentoring developers through code reviews and enforcing clean coding practices.",
    ],
    techStack: ["React", "Next.js", ".NET Core", "Node.js", "AWS Lambda", "Azure"]
  },
  {
    id: "codonomy-associate",
    company: "Codonomy",
    role: "Associate Software Developer",
    period: "Jan 2025 - Aug 2025",
    description: [
      "Developed production features across frontend (React) and backend (.NET Core, Node.js).",
      "Built backend modules using NestJS and ASP.NET Core, integrating with SQL Server.",
      "Implemented serverless components using AWS Lambda for background tasks.",
      "Managed delivery with Azure DevOps and contributed to CI/CD improvements.",
    ],
    techStack: ["React", "NestJS", "ASP.NET Core", "SQL Server", "AWS", "Azure DevOps"]
  },
  {
    id: "codonomy-junior",
    company: "Codonomy",
    role: "Junior Software Developer",
    period: "June 2024 - Dec 2024",
    description: [
      "Implemented features using React.js and backend services in ASP.NET Core/MVC and Express.",
      "Supported cloud deployments and environments on AWS/Azure.",
      "Resolved UI/UX issues ensuring responsive design.",
      "Collaborated via Git workflows and validated features in staging environments.",
    ],
    techStack: ["React", "Express", "ASP.NET MVC", "Git"]
  },
  {
    id: "codonomy-intern",
    company: "Codonomy",
    role: "Software Development Intern",
    period: "April 2024 - June 2024",
    description: [
      "Contributed to a healthcare web application for appointment scheduling.",
      "Built frontend components in React.js and supported .NET backend logic.",
      "Wrote SQL queries and assisted with API performance optimizations.",
    ],
    techStack: ["React", ".NET", "SQL"]
  },
  {
    id: "self-employed",
    company: "Self-Employed",
    role: "Full-Stack Web Developer",
    period: "Jan 2022 - Feb 2024",
    description: [
      "Delivered custom web applications for e-commerce, healthcare, and portfolio domains.",
      "Developed responsive interfaces using React, Next.js, and Tailwind CSS.",
      "Designed backend APIs using Node.js and .NET Core.",
      "Integrated third-party services like Stripe, Firebase, and Supabase.",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Firebase"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"]
  },
  {
    title: "Backend & API",
    skills: ["Node.js", "NestJS", ".NET Core", "ASP.NET MVC", "Express.js", "RESTful APIs"]
  },
  {
    title: "Data & Storage",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Supabase", "Redis"]
  },
  {
    title: "Cloud Infrastructure",
    skills: ["AWS Lambda", "Azure DevOps", "Docker", "CI/CD Pipelines", "Serverless"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "pva-deals",
    title: "PVA Deals",
    description: "SMS Verification & Number Rental Platform built with serverless architecture.",
    role: "Full Stack Developer",
    techStack: ["React", "Node.js", "AWS Lambda", "Serverless"],
    features: [
      "Number rental lifecycle management",
      "Provider synchronization and fallback logic",
      "Scheduled cron-based serverless jobs",
      "Idempotent request handling and structured logging"
    ],
    image: "",
    links: { demo: "#", github: "#" }
  },
  {
    id: "unifaires",
    title: "Unifaires",
    description: "Multi-Language Web Platform with separate admin and user portals.",
    role: "Full Stack Developer",
    techStack: ["Next.js", "Node.js", "Express", "MySQL"],
    features: [
      "Real-time chat using Socket.io",
      "CMS capabilities with role-based access",
      "Automated content translation flows",
      "Payment integration (Stripe, PayPal)"
    ],
    image: "",
    links: { demo: "#", github: "#" }
  },
  {
    id: "pj-farmers-market",
    title: "PJFarmersMarket",
    description: "Seafood E-commerce Platform enabling direct-to-customer sales for fishermen.",
    role: "Full Stack Developer",
    techStack: ["Next.js", "Supabase", "Stripe", "Tailwind"],
    features: [
      "Product catalog and shopping cart",
      "Stripe webhook-based order processing",
      "Optimized Supabase queries for performance",
      "Order tracking system"
    ],
    image: "",
    links: { demo: "#", github: "#" }
  },
  {
    id: "precure-pm",
    title: "PrecurePM",
    description: "Medical Appointment & Insurance System for healthcare workflows.",
    role: "Frontend & Backend Support",
    techStack: ["React", ".NET Core", "SQL Server", "Redux"],
    features: [
      "Role-based appointment scheduling",
      "Complex state management with Redux",
      "Secure medical record handling",
      "Insurance claims management"
    ],
    image: "",
    links: { demo: "#", github: "#" }
  },
  {
    id: "insurance-backend",
    title: "Insurance Commission Backend",
    description: "High-volume Insurance Commission Calculation System.",
    role: "Backend Developer",
    techStack: ["C#", "ASP.NET Core", "SQL Server"],
    features: [
      "High-volume commission calculation",
      "SQL Query optimization and caching",
      "Legacy system integration",
      "Audit logging for compliance"
    ],
    image: "",
    links: { demo: "#", github: "#" }
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    school: "University of Agriculture, Faisalabad",
    degree: "Bachelor of Science in Computer Science",
    details: ["Software Engineering", "Data Structures", "Algorithms", "Database Systems"]
  }
];