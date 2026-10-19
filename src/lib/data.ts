export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  resumeSummary: string;
  shortBio: string;
  quote: string;
  github: string;
  linkedin: string;
  portfolioUrl: string;
  resumePath: string;
  degree: string;
  university: string;
  graduationYear: string;
  dept: string;
  idNumber: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type SkillFamily =
  | 'Languages'
  | 'Frameworks'
  | 'State & Data'
  | 'UI & Styling'
  | 'Testing & Tooling'
  | 'Concepts';

export interface SkillItem {
  number: number;
  symbol: string;
  name: string;
  family: SkillFamily;
  category: string;
  brandKey?: string;
  projects: string[];
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
}

export interface CertificationItem {
  index: string;
  title: string;
  issuer: string;
}

export interface ExperienceItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  organization: string;
  location: string;
  period: string;
  year: string;
  bullets: string[];
}

export interface AchievementItem {
  index: string;
  platform: string;
  logo: string;
  number: number;
  suffix?: string;
  label: string;
  caption: string;
  detail: string;
}

export const PROFILE: Profile = {
  name: 'Muskan Bansal',
  firstName: 'MUSKAN',
  lastName: 'BANSAL',
  role: 'Frontend Engineer',
  email: 'work.muskanbansal01@gmail.com',
  phone: '+91 8618148191',
  phoneHref: 'tel:+918618148191',
  location: 'Pune, India',
  resumeSummary:
    'Frontend Engineer specializing in performance-critical, accessible web apps for fintech platforms. Led rendering optimizations that lifted Lighthouse scores from 72 to 96+ across production applications serving 1,500+ users, while driving design-system adoption via Storybook and Radix UI. Focused on shipping fast, resilient, and inclusive user experiences at scale. Experienced with owning features end-to-end, from component architecture to production monitoring.',
  shortBio:
    'Experienced with owning features end-to-end, from component architecture to production monitoring.',
  quote:
    'Focused on shipping fast, resilient, and inclusive user experiences at scale.',
  github: 'https://github.com/muskanbansal1609',
  linkedin: 'https://www.linkedin.com/in/muskan-bansal16/',
  portfolioUrl: 'https://muskan-bansal-portfolio.netlify.app/home',
  resumePath: '/Muskan_Bansal_Resume.pdf',
  degree: 'B.Tech in Computer Science & Engineering',
  university: 'PES University - Bangalore',
  graduationYear: '2023',
  dept: 'Computer Science & Eng.',
  idNumber: 'MB-2023-FE',
};

export const NAV: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const SKILL_FAMILIES: SkillFamily[] = [
  'Languages',
  'Frameworks',
  'State & Data',
  'UI & Styling',
  'Testing & Tooling',
  'Concepts',
];

export const SKILLS: SkillItem[] = [
  // Languages
  {
    number: 1,
    symbol: 'Js',
    name: 'JavaScript (ES6+)',
    family: 'Languages',
    category: 'Languages',
    brandKey: 'javascript',
    projects: ['Bill Generator', 'CineScout', 'Collaborative Dashboard'],
  },
  {
    number: 2,
    symbol: 'Ts',
    name: 'TypeScript',
    family: 'Languages',
    category: 'Languages',
    brandKey: 'typescript',
    projects: ['CineScout', 'Collaborative Dashboard', 'YouTube Clone', 'TIAA Proposal Engine'],
  },
  {
    number: 3,
    symbol: 'H5',
    name: 'HTML5',
    family: 'Languages',
    category: 'Languages',
    brandKey: 'html5',
    projects: ['All Projects', 'Accessible UI Standards'],
  },
  {
    number: 4,
    symbol: 'C3',
    name: 'CSS3',
    family: 'Languages',
    category: 'Languages',
    brandKey: 'css3',
    projects: ['Design System', 'Responsive Layouts'],
  },
  {
    number: 5,
    symbol: 'Sa',
    name: 'SASS',
    family: 'Languages',
    category: 'Languages',
    brandKey: 'sass',
    projects: ['Component Styles', 'Enterprise Platforms'],
  },
  {
    number: 6,
    symbol: 'Py',
    name: 'Python',
    family: 'Languages',
    category: 'Languages',
    brandKey: 'python',
    projects: ['Data Processing', 'Backend Scripting'],
  },

  // Frameworks
  {
    number: 7,
    symbol: 'Re',
    name: 'React.js',
    family: 'Frameworks',
    category: 'Frameworks',
    brandKey: 'react',
    projects: ['CineScout', 'Bill Generator', 'Collaborative Dashboard', 'YouTube Clone', 'TIAA Portal'],
  },
  {
    number: 8,
    symbol: 'Nx',
    name: 'Next.js (App Router)',
    family: 'Frameworks',
    category: 'Frameworks',
    brandKey: 'nextjs',
    projects: ['CineScout', 'Portfolio Platform'],
  },

  // State & Data
  {
    number: 9,
    symbol: 'Rx',
    name: 'Redux / Redux Toolkit',
    family: 'State & Data',
    category: 'State & Data',
    brandKey: 'redux',
    projects: ['Collaborative Dashboard', 'TIAA Proposal Engine'],
  },
  {
    number: 10,
    symbol: 'Tq',
    name: 'TanStack Query',
    family: 'State & Data',
    category: 'State & Data',
    brandKey: 'tanstackquery',
    projects: ['CineScout', 'Asynchronous Caching'],
  },
  {
    number: 11,
    symbol: 'Ra',
    name: 'REST APIs',
    family: 'State & Data',
    category: 'State & Data',
    brandKey: 'restapi',
    projects: ['Recruitment Portal', 'CineScout', 'TIAA Backend APIs'],
  },
  {
    number: 12,
    symbol: 'Gq',
    name: 'GraphQL',
    family: 'State & Data',
    category: 'State & Data',
    brandKey: 'graphql',
    projects: ['Production Data Layers'],
  },

  // UI & Styling
  {
    number: 13,
    symbol: 'Tw',
    name: 'Tailwind CSS',
    family: 'UI & Styling',
    category: 'UI & Styling',
    brandKey: 'tailwindcss',
    projects: ['Storybook Library', 'YouTube Clone', 'Modern Web UIs'],
  },
  {
    number: 14,
    symbol: 'Rx',
    name: 'Radix UI',
    family: 'UI & Styling',
    category: 'UI & Styling',
    brandKey: 'radixui',
    projects: ['Collaborative Dashboard', 'Accessible Component Library'],
  },
  {
    number: 15,
    symbol: 'Sb',
    name: 'Storybook',
    family: 'UI & Styling',
    category: 'UI & Styling',
    brandKey: 'storybook',
    projects: ['Reusable Component Library (15+ variants)'],
  },
  {
    number: 16,
    symbol: 'Cm',
    name: 'CSS Modules',
    family: 'UI & Styling',
    category: 'UI & Styling',
    brandKey: 'cssmodules',
    projects: ['Scoped Component Architecture'],
  },
  {
    number: 17,
    symbol: 'Rd',
    name: 'Responsive Design',
    family: 'UI & Styling',
    category: 'UI & Styling',
    brandKey: 'responsive',
    projects: ['Mobile-first Architecture', 'Advisor Portal'],
  },

  // Testing, Tooling & Practices
  {
    number: 18,
    symbol: 'Je',
    name: 'Jest',
    family: 'Testing & Tooling',
    category: 'Testing & Tooling',
    brandKey: 'jest',
    projects: ['210+ Unit & Integration Tests (80%+ coverage)'],
  },
  {
    number: 19,
    symbol: 'Tl',
    name: 'React Testing Library',
    family: 'Testing & Tooling',
    category: 'Testing & Tooling',
    brandKey: 'testinglibrary',
    projects: ['Regression Guard Tests', 'Component Integration'],
  },
  {
    number: 20,
    symbol: 'Vi',
    name: 'Vite',
    family: 'Testing & Tooling',
    category: 'Testing & Tooling',
    brandKey: 'vite',
    projects: ['Fast Frontend Tooling', 'YouTube Clone', 'Modern Bundling'],
  },
  {
    number: 21,
    symbol: 'Wp',
    name: 'Webpack',
    family: 'Testing & Tooling',
    category: 'Testing & Tooling',
    brandKey: 'webpack',
    projects: ['Code Splitting', 'Dynamic Imports Optimization'],
  },

  // Concepts & Architecture mentioned in Resume
  {
    number: 22,
    symbol: 'Lh',
    name: 'Lighthouse Performance',
    family: 'Concepts',
    category: 'Concepts',
    brandKey: 'lighthouse',
    projects: ['Lifted scores from 72 to 96+'],
  },
  {
    number: 23,
    symbol: 'Ws',
    name: 'WebSockets',
    family: 'Concepts',
    category: 'Concepts',
    brandKey: 'websocket',
    projects: ['Real-Time Collaborative Dashboard'],
  },
  {
    number: 24,
    symbol: 'Wv',
    name: 'Window Virtualization',
    family: 'Concepts',
    category: 'Concepts',
    brandKey: 'virtualization',
    projects: ['Smooth 60fps UI performance under bursts'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'cinescout',
    index: '01',
    title: 'CineScout',
    kicker: 'Media & Discovery Platform',
    description:
      'Built a high-performance streaming discovery platform with server-side rendering, dynamic routing, and instant search, modeled on production media catalog apps like Netflix and Prime Video.',
    features: [
      'Server-side rendering, dynamic routing, and instant search modeled on Netflix & Prime Video',
      'TanStack Query background caching and optimistic UI updates cutting redundant network requests by 70%',
      'Initial page load time improved by 1.2 seconds across catalog views',
      'End-to-end type safety with TypeScript and Next.js App Router architecture',
    ],
    tech: ['React', 'TypeScript', 'Next.js', 'TanStack Query'],
    github: 'https://github.com/muskanbansal1609/cinescout',
  },
  {
    id: 'bill-generator',
    index: '02',
    title: 'Bill Generator',
    kicker: 'Invoice Creation Tool',
    description:
      'Built a client-side invoice generator enabling users to add itemized line items, configure quantity, tax rates, and discounts, with real-time total calculation.',
    features: [
      'Itemized line-item management with configurable quantities, tax rates, and discounts',
      'Instant real-time total and balance calculations in client state',
      'Client-side PDF export using jsPDF converting canvas previews to downloadable PDFs without backend dependency',
      'Continuous delivery and production hosting on Netlify on every commit',
    ],
    tech: ['React', 'JavaScript', 'jsPDF', 'Netlify'],
    github: 'https://github.com/muskanbansal1609/bill-generator',
  },
  {
    id: 'collaborative-dashboard',
    index: '03',
    title: 'Real-Time Collaborative Dashboard',
    kicker: 'Multi-User Feed Platform',
    description:
      'Designed a real-time collaborative dashboard rendering live multi-user data feeds via WebSocket connections, inspired by concurrent-editing tools like Figma and Notion.',
    features: [
      'Live multi-user data feeds rendered seamlessly over low-latency WebSocket connections',
      'Concurrent-editing and activity mechanics inspired by collaborative tools like Figma & Notion',
      'Custom React hooks engineered for window virtualization and state batching',
      'Sustained smooth 60fps UI performance under heavy, high-frequency data bursts',
    ],
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'WebSockets', 'Radix UI'],
    github: 'https://github.com/muskanbansal1609/muskanbansalportfolio',
  },
  {
    id: 'youtube-clone',
    index: '04',
    title: 'YouTube Clone',
    kicker: 'Video Streaming & Discovery',
    description:
      'A modern, fast, and fully responsive YouTube Clone application built using React, TypeScript, Tailwind CSS, and React Router, connecting directly with the YouTube Data API to stream feeds, process live keyword searching, and render an immersive theater-mode playback environment.',
    features: [
      'Fluid 4-column responsive grid matching the exact layout of modern YouTube Web',
      'Global navigation header with reactive lookup system for real-time search strings',
      'Immersive theater media player (/video/:id) with 16:9 player frame and engagement metrics',
      'Auto-fetching up-next sidebar panel displaying related media content loops',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Netlify'],
    github: 'https://github.com/muskanbansal1609/youtube-clone',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    index: '01',
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
  },
  {
    index: '02',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta',
  },
  {
    index: '03',
    title: 'CI/CD Professional Certificate',
    issuer: 'Professional Certification',
  },
  {
    index: '04',
    title: 'Ultimate Advanced React Architecture',
    issuer: 'Udemy',
  },
];

export const EDUCATION: ExperienceItem[] = [
  {
    id: 'pes-university',
    type: 'education',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'PES University - Bangalore',
    location: 'Bangalore, India',
    period: '2019 - 2023',
    year: '2023',
    bullets: [
      'Graduated with Bachelor of Technology in Computer Science & Engineering.',
      'Core focus on frontend architecture, distributed systems, algorithms, and web engineering.',
    ],
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'tiaa-fulltime',
    type: 'work',
    title: 'Frontend Engineer',
    organization: 'TIAA',
    location: 'Pune, India',
    period: 'Jul 2023 - Present',
    year: '2023 - Present',
    bullets: [
      'Architected a multi-step, real-time asset Proposal engine (React 18, TypeScript, Redux Toolkit) from scratch, replacing a fully manual paperwork process and cutting proposal turnaround time 60% for financial advisors.',
      'Diagnosed and eliminated rendering bottlenecks across production applications via code splitting, dynamic imports, and memoization — lifting Lighthouse performance scores from 72 to 96+ and measurably improving load times for advisor-facing tools.',
      'Shipped 4 production financial applications end-to-end — including the Advisor Portal and Signup workflows — with mobile-first, responsive architecture, supporting 1,500+ active financial advisors.',
      'Engineered the frontend for an enterprise Pricing Exception platform used in compliance-sensitive pricing workflows, reducing manual review time 55% and giving sales, product, and compliance teams a single system of record.',
      'Established test coverage discipline across critical modules — authoring 210+ unit and integration tests (Jest, React Testing Library) to reach 80%+ coverage and reduce regression risk in production releases.',
      'Led the build out of a reusable, accessible component library (15+ variants in Storybook, built on Radix UI and Tailwind CSS), standardizing UI patterns org-wide and accelerating sprint velocity 35%.',
    ],
  },
  {
    id: 'tiaa-intern',
    type: 'work',
    title: 'Software Engineer Intern',
    organization: 'TIAA',
    location: 'Pune, India',
    period: 'June 2022 - Jul 2022',
    year: '2022',
    bullets: [
      'Engineered a centralized internal recruitment management portal (React, TypeScript, REST APIs) from the ground up, eliminating team-wide reliance on legacy Excel-based tracking and consolidating candidate data into a single system of record.',
      'Built an administrative dashboard with real-time debounced search and dynamic multi-filter capabilities, reducing candidate screening effort by 30% and accelerating recruiter turnaround on high-volume hiring cycles.',
    ],
  },
];

export const EXPERIENCE = WORK_EXPERIENCE;

export const SKILL_GROUPS = [
  {
    name: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 'Python'],
  },
  {
    name: 'Frameworks',
    skills: ['React.js', 'Next.js (App Router)'],
  },
  {
    name: 'State & Data',
    skills: ['Redux / Redux Toolkit', 'TanStack Query', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'UI & Styling',
    skills: ['Tailwind CSS', 'Radix UI', 'Storybook', 'CSS Modules', 'Responsive Design'],
  },
  {
    name: 'Testing, Tooling & Practices',
    skills: ['Jest', 'React Testing Library', 'Vite', 'Webpack'],
  },
];

// Unified chronological path for the Experience section (Education + Work)
export const TIMELINE: ExperienceItem[] = [
  ...EDUCATION,
  ...WORK_EXPERIENCE.slice().reverse(), // 2022 intern, then 2023 full-time
];

// In accordance with Non-Negotiable Rule 1:
// "If something isn't in the résumé, leave it out. Don't invent testimonials, clients, metrics, project screenshots or social links. If a section has no data, remove the section and its nav link."
// The résumé contains no separate Achievements/competitive coding section, so ACHIEVEMENTS is empty and omitted from navigation.
export const ACHIEVEMENTS: AchievementItem[] = [];
