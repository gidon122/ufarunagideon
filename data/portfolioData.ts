export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: "Full-Stack" | "AI & ML" | "Frontend";
  featured: boolean;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  bulletPoints: string[];
  type: "Internship" | "Training" | "Education" | "Community";
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  verifyUrl?: string;
  badgeColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string;
}

export const personalDetails = {
  name: "Ufaruna Gideon",
  greeting: "Hi, I'm Gideon 👋",
  roleTitle: "Computer Engineer & Full-Stack Developer",
  aspiringRole: "Aspiring AI Engineer",
  tagline: "I build modern web applications and intelligent digital products that solve real problems.",
  status: "Available for opportunities",
  institution: "Federal University of Technology, Minna (FUT Minna)",
  fieldOfStudy: "Computer Engineering",
  bio: "I'm a Computer Engineering student at FUT Minna passionate about building software products at the intersection of web development, cloud computing, and artificial intelligence. I enjoy taking ideas from initial concept to clean, functional production software.",
  location: "Minna, Niger State, Nigeria",
  email: "ufarunagidosky@gmail.com",
  socials: {
    github: "https://github.com/gidon122",
    linkedin: "https://www.linkedin.com/in/gideonufaruna/",
    whatsapp: "https://wa.me/2348165631446",
    twitter: "https://x.com/geed_ion",
  },
  stats: [
    { label: "Degree Focus", value: "Computer Engineering", subtitle: "FUT Minna" },
    { label: "Specialization", value: "Full-Stack & AI", subtitle: "Modern Ecosystems" },
    { label: "Projects Built", value: "10+", subtitle: "Full-stack & AI Apps" },
    { label: "Core Competency", value: "Cloud & Systems", subtitle: "Scalable Architecture" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Creating responsive, fast, and visually polished user interfaces.",
    skills: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    description: "Architecting reliable APIs, microservices, and database schemas.",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate/Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced" },
      { name: "GraphQL", level: "Intermediate" },
    ],
  },
  {
    title: "AI & Data",
    description: "Integrating intelligent LLM features, agent workflows, and AI pipelines.",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "OpenAI APIs", level: "Advanced" },
      { name: "AI Agents", level: "Intermediate/Advanced" },
      { name: "LangChain", level: "Intermediate" },
      { name: "MCP", level: "Intermediate" },
      { name: "AI Application Development", level: "Advanced" },
    ],
  },
  {
    title: "Tools & Infrastructure",
    description: "Developer tooling, containers, version control, and cloud deployment.",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "Vercel", level: "Advanced" },
      { name: "AWS", level: "Intermediate" },
      { name: "Figma", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "devevent",
    title: "DevEvent",
    shortDescription: "A full-stack event discovery platform built for tech communities with real-time RSVPs and analytics.",
    fullDescription: "DevEvent simplifies tech event management and discovery for developer communities. Built with Next.js App Router and MongoDB, it features user authentication, event filtering, RSVP management, and PostHog telemetry to track user engagement seamlessly.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "PostHog"],
    githubUrl: "https://github.com/gidon122/devevent",
    liveUrl: "https://devevent.vercel.app",
    category: "Full-Stack",
    featured: true,
    highlights: [
      "Built with Next.js Server Components and Server Actions for fast rendering",
      "Integrated PostHog for real-time developer engagement telemetry",
      "MongoDB database layer with index optimizations for location & date filtering",
      "Fully responsive UI styled with Tailwind CSS",
    ],
  },
  {
    id: "ai-weather-analyzer",
    title: "AI Weather Analyzer",
    shortDescription: "A weather application that combines live meteorological data with AI-generated personalized recommendations.",
    fullDescription: "AI Weather Analyzer pulls real-time weather metrics from weather APIs and passes contextual parameters into OpenAI LLMs to generate intelligent outfit recommendations, travel alerts, and outdoor activity suggestions suited to current conditions.",
    technologies: ["React", "Tailwind CSS", "Weather API", "OpenAI"],
    githubUrl: "https://github.com/gidon122/ai-weather-analyzer",
    liveUrl: "https://ai-weather-analyzer.vercel.app",
    category: "AI & ML",
    featured: true,
    highlights: [
      "Dynamic weather API integration providing real-time conditions",
      "Generative AI insights powering custom daily travel & activity plans",
      "Responsive card UI with sleek weather status animations",
    ],
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    shortDescription: "An AI-powered web tool that evaluates resumes against job descriptions, suggesting instant feedback.",
    fullDescription: "AI Resume Analyzer takes candidate resume text and parses it against target engineering roles. Utilizing LLM prompts, it generates structured feedback on ATS friendliness, skill gap analysis, and tailored bullet-point enhancements.",
    technologies: ["React", "JavaScript", "AI APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/gidon122/ai-resume-analyzer",
    liveUrl: "https://ai-resume-analyzer.vercel.app",
    category: "AI & ML",
    featured: true,
    highlights: [
      "Instant resume parsing and ATS keyword match calculation",
      "Actionable recommendations to rewrite experience sections",
      "Clean UI with side-by-side comparative analysis",
    ],
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    shortDescription: "A modern fitness management platform designed to track workouts, daily goals, and health metrics.",
    fullDescription: "A web application empowering users to log workouts, track calorie expenditure, monitor personal records, and view progress over time through clean interactive charts.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/gidon122/fitness-tracker",
    liveUrl: "https://fitness-tracker.vercel.app",
    category: "Frontend",
    featured: true,
    highlights: [
      "Fast client-side navigation with Vite and React",
      "Interactive workout progress tracking and workout logging",
      "Local storage state persistence for seamless offline access",
    ],
  },
  {
    id: "ai-book-assistant",
    title: "AI Book Assistant",
    shortDescription: "An AI application allowing users to upload books/documents and interact through natural chat and voice commands.",
    fullDescription: "AI Book Assistant transforms reading into an interactive conversational dialogue. Users can upload long-form PDF books or research papers and query the text using semantic document search, voice commands, and summarized section highlights.",
    technologies: ["Next.js", "AI", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/gidon122/ai-book-assistant",
    liveUrl: "https://ai-book-assistant.vercel.app",
    category: "AI & ML",
    featured: true,
    highlights: [
      "Document ingestion and semantic vector context retrieval",
      "Natural conversational interface with voice input synthesis",
      "Built with Next.js App Router for rapid response streaming",
    ],
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio",
    shortDescription: "My previous personal developer portfolio showcasing early software projects and growth.",
    fullDescription: "My foundational portfolio website designed to showcase early software engineering experiments, responsive layouts, and technical blog highlights.",
    technologies: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/gidon122/previous-portfolio",
    liveUrl: "https://ufarunagideon.vercel.app",
    category: "Frontend",
    featured: false,
    highlights: [
      "Minimalist dark theme layout built with custom React components",
      "Optimized load times and responsive cross-device layout",
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Frontend Development Intern",
    organization: "Tech Innovation Hub",
    location: "Minna, Nigeria",
    period: "2024 - Present",
    description: "Developing modern web user interfaces, reusable React components, and integrating frontend interfaces with backend REST APIs.",
    bulletPoints: [
      "Collaborated with product teams to build clean, accessible web components in React and Next.js.",
      "Optimized web page performance, achieving high Lighthouse scores for speed and SEO.",
      "Refactored legacy UI components to TypeScript for improved code safety and maintainability.",
    ],
    type: "Internship",
  },
  {
    id: "exp-2",
    role: "AI & ML Track Intern / Researcher",
    organization: "NIHUB (FUT Minna Innovation Hub)",
    location: "FUT Minna, Nigeria",
    period: "2024",
    description: "Focused on machine learning fundamentals, generative AI applications, prompt engineering, and building agentic workflows.",
    bulletPoints: [
      "Participated in hands-on AI workshops building RAG systems and LLM integrations.",
      "Built intelligent prototype tools leveraging Python, LangChain, and OpenAI models.",
      "Collaborated with student engineers on practical hardware-software AI integration projects.",
    ],
    type: "Internship",
  },
  {
    id: "exp-3",
    role: "Computer Engineering Student & Student Researcher",
    organization: "Federal University of Technology, Minna",
    location: "Minna, Nigeria",
    period: "2021 - Present",
    description: "Pursuing Bachelor's degree in Computer Engineering, developing fundamental knowledge in computer systems, networking, digital logic, and software engineering.",
    bulletPoints: [
      "Studying core computer engineering disciplines: Embedded Systems, Data Structures, Computer Networks, and Control Engineering.",
      "Leading peer developer groups and organizing technical study sessions.",
    ],
    type: "Education",
  },
  {
    id: "exp-4",
    role: "Technical Lead & Community Contributor",
    organization: "FUT Minna Developer Community",
    location: "FUT Minna, Nigeria",
    period: "2023 - Present",
    description: "Mentoring junior engineering students in full-stack web development, Git version control, and modern programming practices.",
    bulletPoints: [
      "Organized coding tutorials and web development workshops for engineering peers.",
      "Contributed to student community web platforms and open-source starter repositories.",
    ],
    type: "Community",
  },
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "Oracle Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    credentialId: "ORACLE-AI-AGENTS-2025",
    verifyUrl: "https://education.oracle.com",
    badgeColor: "from-red-500 to-amber-600",
  },
  {
    id: "cert-2",
    title: "Huawei HCIA Cloud Services & Infrastructure",
    issuer: "Huawei Technologies",
    year: "2024",
    credentialId: "HCIA-CLOUD-2024-FUTM",
    verifyUrl: "https://e.huawei.com/en/talent/",
    badgeColor: "from-red-600 to-rose-700",
  },
  {
    id: "cert-3",
    title: "Full-Stack Web Development Specialization",
    issuer: "Coursera / Meta",
    year: "2024",
    credentialId: "COURSERA-FS-DEV-2024",
    verifyUrl: "https://coursera.org",
    badgeColor: "from-blue-600 to-indigo-700",
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "service-1",
    title: "Full-Stack Web Applications",
    description: "End-to-end production web applications with robust backend APIs, fast database queries, and sleek user interfaces.",
    iconName: "Globe",
    deliverables: ["Next.js / React Frontend", "Node / Express / MongoDB Backend", "Authentication & Security", "Vercel Deployment"],
  },
  {
    id: "service-2",
    title: "Modern Frontend Interfaces",
    description: "High-performance, pixel-perfect, accessible UIs designed with Tailwind CSS, Framer Motion animations, and TypeScript.",
    iconName: "Layout",
    deliverables: ["Responsive Web Design", "Micro-interactions & Motion", "Lighthouse SEO & Speed", "Reusable Component Libraries"],
  },
  {
    id: "service-3",
    title: "AI-Powered Applications",
    description: "Integrating Large Language Models, AI agents, document QA, and custom prompt workflows into practical web apps.",
    iconName: "Sparkles",
    deliverables: ["OpenAI & LLM API Integration", "AI Agents & MCP Workflows", "Vector Search & Document QA", "Custom AI Dashboards"],
  },
  {
    id: "service-4",
    title: "Backend APIs & Microservices",
    description: "Scalable REST and GraphQL APIs designed for security, high throughput, and seamless integration with frontends.",
    iconName: "Server",
    deliverables: ["RESTful & GraphQL Endpoints", "Database Schemas (SQL & NoSQL)", "JWT / OAuth Authentication", "API Documentation"],
  },
  {
    id: "service-5",
    title: "Developer & Admin Dashboards",
    description: "Data-rich dashboards featuring live analytics, interactive charts, data filtering, and role-based administration.",
    iconName: "BarChart3",
    deliverables: ["Analytics Visualization", "Real-time Metrics Tracking", "Export & Data Management", "Dark/Light UI Controls"],
  },
  {
    id: "service-6",
    title: "Business Websites",
    description: "Fast loading, SEO-optimized promotional and brand websites tailored to turn visitors into active clients or users.",
    iconName: "Briefcase",
    deliverables: ["Custom Modern Design", "Contact Form Integration", "Fast Mobile Performance", "Custom Domain Setup"],
  },
  {
    id: "service-7",
    title: "Database-Driven Applications",
    description: "Architecting structured MongoDB and PostgreSQL data layers with proper indexing, caching, and integrity validation.",
    iconName: "Database",
    deliverables: ["Data Modeling & Schemas", "Query Optimization", "Data Migration Scripts", "CRUD Functionality"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the problem, users, and goals.",
    details: "I start by diving deep into the product objectives, user expectations, performance requirements, and technical scope.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Define the architecture, features, and development approach.",
    details: "I select the optimal tech stack, map out API endpoints, data models, UI component structures, and design tokens.",
  },
  {
    step: "03",
    title: "Build",
    description: "Develop the product with clean, scalable code.",
    details: "I write strongly-typed TypeScript code, modular React components, clean CSS/Tailwind styles, and efficient backend logic.",
  },
  {
    step: "04",
    title: "Test & Refine",
    description: "Test, improve performance, and refine the experience.",
    details: "I test across browsers and devices, optimize bundle size, verify accessibility compliance, and polish micro-interactions.",
  },
  {
    step: "05",
    title: "Deploy",
    description: "Deploy and maintain the finished product.",
    details: "I configure continuous deployment on Vercel, set up domain records, monitor telemetry, and provide post-launch maintenance.",
  },
];
