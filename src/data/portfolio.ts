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
    'Scrum Master',
    'Docs-as-Code',
    'API Documentation',
    'Video Content',
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
    { label: 'Authoring', value: 'DITA-XML, Structured Authoring, UX Writing' },
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
      'API documentation, configuration information, and developer-oriented content.',
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
      'Scrum, sprint planning, retrospectives, stakeholder coordination, backlog support, and process improvement.',
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
    tools: ['DITA-XML', 'Oxygen XML Editor', 'Arbortext Editor', 'Adobe FrameMaker', 'Adobe RoboHelp', 'HTML/CSS', 'Tridion Docs'],
  },
  {
    category: 'Project Collaboration',
    tools: ['Jira', 'Confluence', 'Wiki', 'SharePoint', 'Git', 'GitHub' ],
  },
  {
    category: 'Visual & Multimedia',
    tools: ['Adobe Photoshop', 'Figma', 'Microsoft Visio', 'Snagit', 'PowToon'],
  },
  {
    category: 'Publishing & Productivity',
    tools: ['WordPress', 'Microsoft Office', 'Git Bash'],
  },
  {
    category: 'AI-Assisted Documentation',
    tools: ['ChatGPT', 'Claude', 'Github Copilot', 'Prompt Engineering'],
  },
  {
    category: 'Methodologies',
    tools: ['Agile', 'Scrum', 'Kanban', 'SDLC', 'DDLC', 'Docs-as-Code'],
  },
];

export type PortfolioItem = {
  type: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  sampleUrl?: string;
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
    type: 'Saba Documentation',
    description:
      'Cornerstone Saba’s customizable suite helps companies thrive in an ever-changing world. This platform helps employees, customers, and partners complete important training, build skills, stay agile, and work smarter..',
    tags: ['Release Notes', 'Change Logs', 'Whats New'],
    icon: Code2,
    sampleUrl: 'https://help.sabacloud.com/sabacloud/index.html',
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
    type: 'Cornerstone Help Center',
    description:
      'Comprehensive documentation helping end users install, configure, and operate a product with task-based instructions.',
    tags: ['Single Architecture', 'Integration product', 'Cornerstone experience'],
    icon: FileText,
    sampleUrl: 'https://help.csod.com/helpcenter/',
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
    type: 'Avaya Workplace Client Notes',
    description:
      'Avaya Workplace Client is a soft phone application that provides access to Unified Communications (UC) and Over the Top (OTT) services. You can access Avaya Workplace Client on varios platforms.',
    tags: ['Release Notes', 'Change Logs', 'Communication'],
    icon: BookOpen,
    sampleUrl: 'https://documentation.avaya.com/en-us/home/bundle/avaya-communicator/avaya_ix_workplace_client_overview_specification_a/avaya-workplace-client-overview.html',
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
    type: 'Jd Omni Help Center (JustDial)',
    description:
      'Jd Omni is India’s leading eCommerce platform for growing businesses. Powerful technology makes it easy for everyone to get online with a stunning, professional, and functional web presence. This website builder enables you to create amazing, feature-rich websites that are perfectly suitable for desktop, tablet, and mobile. This help will take you through the basics of how to set up your store, add products, set up payment options, and how to customize your website.',
    tags: ['Configuration', 'Online Help', 'Procedures'],
    icon: AlertTriangle,
    sampleUrl: 'https://www.jdomni.com/support/getting-started',
      overview: '',
      audience: '',
      challenge: '',
      responsibilities: '',
      tools: '',
      approach: '',
      sample: 'https://www.jdomni.com/support/getting-started',
      outcome: '',
    },
  {
    type: 'Avaya Device Enrollment Services to Manage Endpoints',
    description:
      'Device Enrollment Services provides a mechanism for Avaya endpoints to be securely authenticated and redirected to the file server. By simplifying and automating the discovery of the provisioning server, Device Enrollment Services reduces the costs involved in deploying an out-of-the-box device..',
    tags: ['Video Script', 'Multimedia', 'UX Writing'],
    icon: PlayCircle,
    sampleUrl: 'https://documentation.avaya.com/en-us/home/bundle/device-enrollment-service/usingavayadeviceenrollmentservicestomanageendpoint/device-enrollment-services-overview.html',
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
  logo?: string;
  responsibilities: string[];
};


export const experience: ExperienceItem[] = [
  
  {
    company: 'Cornerstone OnDemand',
     logo: '/logos/cornerstone.png',
    title: 'Senior Technical Writer',
    period: 'Februray 2024 - Present',
    responsibilities: [
      'Lead end-to-end documentation for Saba quarterly product releases, ensuring comprehensive, accurate, and timely delivery of release documentation.',
      'Collaborate with the technical writing team to develop and standardize documentation practices, improving content consistency and quality control.',
      'Partner with the development team to support the design and implementation of an in-house documentation generation tool, contributing to documentation process automation.',
      'Oversee the renewal and maintenance of documentation-related software licenses to ensure uninterrupted access to essential authoring and publishing tools.',
    ],
  },

  {
    company: 'Avaya',
    logo: '/logos/avaya.png',
    title: 'Information Engineer I',
    period: 'March 2021 – February 2024',
    
responsibilities: [
  'Create and maintain product documentation, including user manuals, release notes, video scripts, and service information.',
  'Ensure documentation is accurate and complete for each release, improving content quality and reducing documentation overhead.',
  'Collaborate with subject-matter experts, development engineers, test engineers, and product managers.',
  'Document product features, configuration procedures, conceptual overviews, troubleshooting workflows, and planned maintenance information.',
  'Work with DITA, Confluence, Jira, test cases, and product interfaces.',
],

  },
  {
    company: 'HCL Technologies (Client: Avaya)',
    logo: '/logos/hcl.png',
    title: 'Senior Technical Writer',
    period: 'January 2018 – February 2021',
    responsibilities: [
      'Developed and maintained technical a comprehensive Book feature matric to track feature coverage.',
      'Collaborated with engineering, testing, product, and support teams.',
      'Facilitated Agile ceremonies, including daily stand-ups, sprint planning, retrospectives, demonstrations, and reviews.',
      'Supported backlog management, stakeholder communication, and resolution of delivery dependencies.',
    ],
  },
  {
    company: 'Justdial',
    logo: '/logos/justdial.png',
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
    title: 'Cornerstone Achievement Award',
    context: 'Cornerstine — Received twice (2025 and 2026)',
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
