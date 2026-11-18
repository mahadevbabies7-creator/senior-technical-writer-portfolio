import type { LucideIcon } from 'lucide-react';
import {
  BookOpen,
  Layers,
  Code2,
  HelpCircle,
  Video,
  Users,
  Mail,
  Linkedin,
  MapPin,
  FileText,
  AlertTriangle,
  PlayCircle,
  Award,
  GraduationCap,
  BadgeCheck,
  Lightbulb,
  Trophy,
  Briefcase,
} from 'lucide-react';

export const profile = {
  name: 'Suntul Mahadik',
  role: 'Senior Technical Writer',
  eyebrow: 'Senior Technical Writer',
  headline: 'Making Complex Technology Easy to Understand.',
  tagline:
    'Creating clear, structured, and user-focused technical documentation that connects technology with people.',
  introduction:
    "I'm Suntul Mahadik, a Senior Technical Writer with 10+ years of experience developing technical documentation for software and hardware products. I specialize in DITA-based authoring, user guides, release notes, API documentation, and cross-functional collaboration.",
  expertise: [
    'Technical Documentation',
    'DITA-XML',
    'Information Engineering',
    'Agile Collaboration',
  ],
  location: 'Pune, Maharashtra, India',
  highlights: [
    { title: '10+ Years of Experience', icon: Briefcase },
    { title: 'Structured Technical Documentation', icon: Layers },
    { title: 'Agile & Cross-Functional Collaboration', icon: Users },
  ],
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
];

export const resumeReady = false;
export const resumeUrl = '/resume/Suntul_Mahadik_Resume.pdf';

export const about = {
  heading: 'Making Technical Information Clear, Useful, and Accessible.',
  paragraphs: [
    'I am a technical writing professional with extensive experience developing and maintaining documentation for complex software and hardware products.',
    'My work includes user guides, administration manuals, release notes, online help, troubleshooting content, API documentation, instructional video scripts, and service documentation.',
    'I collaborate closely with subject-matter experts, software developers, test engineers, product managers, and stakeholders to understand product functionality and translate technical concepts into clear, structured information.',
    'My expertise includes DITA-based authoring, documentation standards, content organization, and user-centered communication.',
    'In addition to technical writing, I bring two years of Scrum Master experience, supporting Agile ceremonies, stakeholder coordination, team collaboration, and continuous improvement.',
    'I believe effective documentation is not simply about describing a product. It is about helping people understand and use technology with confidence.',
  ],
  summary: [
    { label: 'Core Focus', value: 'Technical Documentation & Information Engineering' },
    { label: 'Authoring', value: 'DITA-XML, Structured Authoring, Modular Content' },
    { label: 'Agile Experience', value: '2 years as Scrum Master, cross-team coordination' },
    { label: 'Collaboration', value: 'SMEs, developers, QA, product, and stakeholders' },
    { label: 'Content Types', value: 'User guides, API docs, release notes, online help, video scripts' },
  ],
};

export type ExpertiseItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const expertise: ExpertiseItem[] = [
  {
    title: 'Product & Technical Documentation',
    description:
      'User manuals, administration guides, product overviews, specifications, quick reference guides, and release notes.',
    icon: BookOpen,
  },
  {
    title: 'Structured Authoring',
    description:
      'DITA-XML, reusable content, documentation standards, modular information architecture, and content consistency.',
    icon: Layers,
  },
  {
    title: 'API & Developer Documentation',
    description:
      'API documentation, technical concepts, configuration information, and developer-oriented content.',
    icon: Code2,
  },
  {
    title: 'Online Help & Troubleshooting',
    description:
      'Online help, maintenance information, troubleshooting procedures, and task-based instructions.',
    icon: HelpCircle,
  },
  {
    title: 'Visual & Multimedia Content',
    description:
      'Instructional video scripts, product demonstrations, screenshots, visual communication, and UX writing.',
    icon: Video,
  },
  {
    title: 'Agile & Cross-Functional Collaboration',
    description:
      'Scrum, Kanban, sprint planning, retrospectives, stakeholder coordination, backlog support, and process improvement.',
    icon: Users,
  },
];

export type ToolCategory = {
  category: string;
  tools: string[];
};

export const tools: ToolCategory[] = [
  {
    category: 'Structured Authoring',
    tools: ['DITA-XML', 'Oxygen XML Editor', 'Arbortext Editor', 'Adobe FrameMaker', 'Adobe RoboHelp'],
  },
  {
    category: 'Project Collaboration',
    tools: ['Jira', 'Confluence', 'SharePoint'],
  },
  {
    category: 'Visual & Multimedia',
    tools: ['Adobe Photoshop', 'Adobe Premiere Pro', 'Figma', 'Microsoft Visio', 'Snagit', 'PowToon'],
  },
  {
    category: 'Publishing & Productivity',
    tools: ['WordPress', 'Microsoft Office'],
  },
  {
    category: 'Methodologies',
    tools: ['Agile', 'Scrum', 'Kanban', 'SDLC', 'DDLC'],
  },
];

export type PortfolioItem = {
  type: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  caseStudy: {
    overview: string;
    audience: string;
    challenge: string;
    responsibilities: string;
    tools: string;
    approach: string;
    sample: string;
    outcome: string;
  };
};

export const portfolio: PortfolioItem[] = [
  {
    type: 'API Documentation',
    description:
      'Developer-facing reference covering endpoints, parameters, request and response examples, and integration guidance.',
    tags: ['API Docs', 'Developer Content', 'Reference'],
    icon: Code2,
    caseStudy: {
      overview: '',
      audience: '',
      challenge: '',
      responsibilities: '',
      tools: '',
      approach: '',
      sample: '',
      outcome: '',
    },
  },
  {
    type: 'User Guide',
    description:
      'Comprehensive documentation helping end users install, configure, and operate a product with task-based instructions.',
    tags: ['User Guide', 'Task-Based', 'DITA-XML'],
    icon: FileText,
    caseStudy: {
      overview: '',
      audience: '',
      challenge: '',
      responsibilities: '',
      tools: '',
      approach: '',
      sample: '',
      outcome: '',
    },
  },
  {
    type: 'Release Notes',
    description:
      'Per-release summaries of new features, enhancements, fixes, and known issues for customers and internal teams.',
    tags: ['Release Notes', 'Change Logs', 'Communication'],
    icon: BookOpen,
    caseStudy: {
      overview: '',
      audience: '',
      challenge: '',
      responsibilities: '',
      tools: '',
      approach: '',
      sample: '',
      outcome: '',
    },
  },
  {
    type: 'Troubleshooting Guide',
    description:
      'Diagnostic procedures and resolution workflows that help users identify and resolve common and edge-case issues.',
    tags: ['Troubleshooting', 'Online Help', 'Procedures'],
    icon: AlertTriangle,
    caseStudy: {
      overview: '',
      audience: '',
      challenge: '',
      responsibilities: '',
      tools: '',
      approach: '',
      sample: '',
      outcome: '',
    },
  },
  {
    type: 'Instructional Video Script',
    description:
      'Narration and on-screen action scripts for short product demonstrations and walkthroughs that complement written docs.',
    tags: ['Video Script', 'Multimedia', 'UX Writing'],
    icon: PlayCircle,
    caseStudy: {
      overview: '',
      audience: '',
      challenge: '',
      responsibilities: '',
      tools: '',
      approach: '',
      sample: '',
      outcome: '',
    },
  },
];

export type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'Avaya',
    title: 'Information Engineer I',
    period: 'March 2021 – Present',
    responsibilities: [
      'Create and maintain product documentation, including user manuals, release notes, video scripts, and service information.',
      'Collaborate with subject-matter experts, development engineers, test engineers, and product managers.',
      'Document product features, configuration procedures, conceptual overviews, troubleshooting workflows, and planned maintenance information.',
      'Work with DITA, Confluence, Jira, test cases, and product interfaces.',
    ],
  },
  {
    company: 'HCL Technologies (Client: Avaya)',
    title: 'Senior Technical Writer',
    period: 'January 2018 – February 2021',
    responsibilities: [
      'Developed and maintained technical product documentation.',
      'Collaborated with engineering, testing, product, and support teams.',
      'Facilitated Agile ceremonies, including daily stand-ups, sprint planning, retrospectives, demonstrations, and reviews.',
      'Coordinated a cross-functional team of more than 12 members.',
      'Supported backlog management, stakeholder communication, and resolution of delivery dependencies.',
    ],
  },
  {
    company: 'Justdial',
    title: 'Senior Technical Writer',
    period: 'November 2016 – January 2018',
    responsibilities: [
      'Managed and trained 17 junior content writers.',
      'Collaborated with testers, developers, and product managers on application enhancements.',
      'Supported customer training, requirement gathering, and product update communication.',
      'Produced instructional product videos using Adobe Premiere and PowToon.',
      'Supported daily stand-ups and team coordination.',
    ],
  },
  {
    company: 'Central India NDT Engineer Pvt. Ltd.',
    title: 'NDT Engineer',
    period: 'June 2016 – October 2016',
    responsibilities: [
      'Created and maintained engineering documentation, workshop procedures, and safety data sheets.',
      'Prepared Maintenance Organisation Exposition documentation.',
      'Coordinated with stakeholders and developed training presentations.',
    ],
  },
];

export type Credential = {
  title: string;
  issuer: string;
  type: 'certification' | 'course';
  icon: LucideIcon;
};

export const certifications: Credential[] = [
  {
    title: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    type: 'certification',
    icon: BadgeCheck,
  },
  {
    title: 'Advanced Technical Writing',
    issuer: 'Professional Course',
    type: 'course',
    icon: BookOpen,
  },
  {
    title: 'Agile Foundations',
    issuer: 'LinkedIn',
    type: 'course',
    icon: Lightbulb,
  },
  {
    title: "A Beginner's Guide to Writing User Stories",
    issuer: 'LinkedIn',
    type: 'course',
    icon: Lightbulb,
  },
  {
    title: 'Scrum Advanced',
    issuer: 'LinkedIn',
    type: 'course',
    icon: Lightbulb,
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  year: string;
  icon: LucideIcon;
};

export const education: EducationItem[] = [
  {
    degree: 'Post Graduate Diploma in Business Analytics (Operations)',
    institution: 'MIT School of Distance Education, Pune',
    year: '2019',
    icon: GraduationCap,
  },
  {
    degree: 'Aircraft Maintenance Engineering (Mechanical)',
    institution: 'Hindustan Aerospace and Engineering, Pune',
    year: '2011',
    icon: GraduationCap,
  },
];

export type AwardItem = {
  title: string;
  context: string;
  description: string;
  icon: LucideIcon;
};

export const awards: AwardItem[] = [
  {
    title: 'The Excellence Experience Award',
    context: 'Avaya — Received twice',
    description: 'Recognition for teamwork and commitment.',
    icon: Trophy,
  },
  {
    title: 'Champion Award',
    context: 'HCL Technologies — 2020',
    description: 'Recognition for performance and achievement.',
    icon: Award,
  },
  {
    title: "Mother's Day Poem Competition",
    context: 'HCL Technologies — 2019',
    description: 'Recognition for writing.',
    icon: Lightbulb,
  },
];

export const contact = {
  heading: "Let's Connect and Collaborate.",
  supporting:
    'Interested in technical documentation, information engineering, or opportunities to collaborate? I\'d be happy to connect.',
  location: 'Pune, Maharashtra, India',
  email: 'suntul777@gmail.com',
  linkedin: 'https://www.linkedin.com/in/suntulmahadik/',
};

export const contactIcons = { MapPin, Mail, Linkedin };
