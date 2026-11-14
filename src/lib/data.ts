export interface Profile {
  name: string;
  firstName: string;
  initials: string;
  role: string;
  headline: string;
  location: string;
  phone: string;
  phoneHref: string;
  email: string;
  resumeSummary: string;
  quote: string;
  status: string;
  behance: string;
  behancePortfolio: string;
  pinterest: string;
  instagram: string;
  resumePath: string;
  github: string;
  linkedin: string;
}

export interface NavItem {
  label: string;
  href: string;
  num: string;
}

export type SkillCategory = "Design" | "Tools" | "AI Tools" | "Process";

export interface Skill {
  atomicNumber: number;
  symbol: string;
  name: string;
  category: SkillCategory;
  isBrand: boolean;
  brandKey?: string;
  description?: string;
  projects: string[];
  footerLine?: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  github?: string;
  uiType: "dashboard" | "mobile" | "marketplace" | "atlas" | "video" | "saas";
}

export interface ExperienceItem {
  period: string;
  year: string;
  role: string;
  company: string;
  location: string;
  type: "experience" | "education";
  bullets: string[];
  skills?: string[];
  isPresent?: boolean;
}

export interface Achievement {
  index: string;
  numberDisplay: string;
  targetNumber: number;
  prefix?: string;
  suffix?: string;
  label: string;
  caption: string;
  detail: string;
  platform: string;
  platformKey: string;
}

export const PROFILE: Profile = {
  name: "Gurpreet Kaur",
  firstName: "GURPREET",
  initials: "GK",
  role: "Senior UI/UX & Graphic Designer",
  headline: "Websites, Mobile Apps, SaaS & eCommerce",
  location: "Chandigarh, India",
  phone: "+91 98142 75335",
  phoneHref: "tel:+919814275335",
  email: "creativehead.gk@gmail.com",
  resumeSummary:
    "Senior UI/UX & Graphic Designer with 9+ years of experience and 10+ live products. I design websites, dashboards, mobile apps, and eCommerce flows, plus the logos, brand identities, social creatives, and pitch decks that go with them.",
  quote:
    "Designing intuitive, human-centered systems across mobile and web—bridging research, craft, and engineering.",
  status: "Open to Remote / Hybrid / Full-Time UI/UX Roles",
  behance: "https://www.behance.net/designsbykaur",
  behancePortfolio: "https://www.behance.net/gallery/233576423/Portfolio",
  pinterest: "http://in.pinterest.com/designedbykaur",
  instagram: "https://www.instagram.com/smarttoonkids/",
  resumePath: "/resume.pdf",
  github: "",
  linkedin: "https://www.linkedin.com/in/gurpreet-kaur-uiux-designer",
};

export const NAV: NavItem[] = [
  { label: "About", href: "#about", num: "01" },
  { label: "Skills", href: "#skills", num: "02" },
  { label: "Work", href: "#work", num: "03" },
  { label: "Experience", href: "#experience", num: "04" },
  { label: "Achievements", href: "#achievements", num: "05" },
  { label: "Contact", href: "#contact", num: "06" },
];

export const SKILL_GROUPS: Skill[] = [
  // 1. Design Category
  {
    atomicNumber: 1,
    symbol: "UX",
    name: "UI/UX Design",
    category: "Design",
    isBrand: false,
    projects: [
      "OOH Audit",
      "Eikaebana",
      "Machine Dalal",
      "Brand Manager",
      "Moshpit",
      "Fangorn Ops",
      "Retitrak",
      "EIkeabana",
    ],
    footerLine: "From first wireframe to final handoff.",
  },
  {
    atomicNumber: 2,
    symbol: "DV",
    name: "Data Visualization",
    category: "Design",
    isBrand: false,
    projects: [
      "Election Atlas",
      "Meradesh Platform",
      "portal.meridianapi.com",
      "Fangorn",
    ],
    footerLine: "From first wireframe to final handoff.",
  },
  {
    atomicNumber: 3,
    symbol: "DD",
    name: "Dashboard Design",
    category: "Design",
    isBrand: false,
    projects: ["OOH Audit", "Retibazaar", "Fangorn", "Machine Dalal"],
    footerLine: "From first wireframe to final handoff.",
  },
  {
    atomicNumber: 4,
    symbol: "DS",
    name: "Design Systems",
    category: "Design",
    isBrand: false,
    projects: [
      "OOH Audit",
      "Eikaebana",
      "Machine Dalal",
      "Brand Manager",
      "Moshpit",
      "Fangorn Ops",
      "Retitrak",
      "EIkeabana",
    ],
    footerLine: "From first wireframe to final handoff.",
  },
  {
    atomicNumber: 5,
    symbol: "RS",
    name: "Responsive Design",
    category: "Design",
    isBrand: false,
    projects: [
      "OOH Audit",
      "Eikaebana",
      "Machine Dalal",
      "Brand Manager",
      "Moshpit",
      "Fangorn Ops",
      "Retitrak",
      "EIkeabana",
    ],
    footerLine: "From first wireframe to final handoff.",
  },
  {
    atomicNumber: 6,
    symbol: "MF",
    name: "Mobile-First",
    category: "Design",
    isBrand: false,
    projects: [
      "Moshpit",
      "Machine Dalal",
      "Brand Manager",
      "Eikaebana",
      "Retitrak",
    ],
    footerLine: "From first wireframe to final handoff.",
  },

  // 2. Tools Category
  {
    atomicNumber: 7,
    symbol: "FG",
    name: "Figma",
    category: "Tools",
    isBrand: true,
    brandKey: "figma",
    projects: [
      "OOH Audit",
      "Eikaebana",
      "Machine Dalal",
      "Brand Manager",
      "Moshpit",
      "Fangorn Ops",
      "Retitrak",
      "EIkeabana",
    ],
    footerLine: "From first wireframe to final handoff.",
  },
  {
    atomicNumber: 8,
    symbol: "XD",
    name: "Adobe XD",
    category: "Tools",
    isBrand: true,
    brandKey: "xd",
    projects: ["Mobile App Prototypes", "Wireframes"],
  },
  {
    atomicNumber: 9,
    symbol: "PS",
    name: "Photoshop",
    category: "Tools",
    isBrand: true,
    brandKey: "photoshop",
    projects: ["Eikaebana", "Marketing Creatives", "Brand Identity"],
  },
  {
    atomicNumber: 10,
    symbol: "AI",
    name: "Illustrator",
    category: "Tools",
    isBrand: true,
    brandKey: "illustrator",
    projects: ["Election Atlas Infographics", "Logos & Vector Assets"],
  },
  {
    atomicNumber: 11,
    symbol: "EX",
    name: "Adobe Express",
    category: "Tools",
    isBrand: true,
    brandKey: "express",
    projects: ["Social Media Assets", "Rapid Collateral"],
  },
  {
    atomicNumber: 12,
    symbol: "FF",
    name: "Adobe Firefly",
    category: "Tools",
    isBrand: true,
    brandKey: "firefly",
    projects: ["SmartToonKids Assets", "Generative Visuals"],
  },
  {
    atomicNumber: 13,
    symbol: "CV",
    name: "Canva",
    category: "Tools",
    isBrand: true,
    brandKey: "canva",
    projects: ["Pitch Decks", "Investor Presentations"],
  },
  {
    atomicNumber: 14,
    symbol: "KN",
    name: "Keynote",
    category: "Tools",
    isBrand: true,
    brandKey: "keynote",
    projects: ["Investor Pitch Decks", "Client Presentations"],
  },

  // 3. AI Tools Category
  {
    atomicNumber: 15,
    symbol: "CG",
    name: "ChatGPT",
    category: "AI Tools",
    isBrand: true,
    brandKey: "chatgpt",
    projects: ["UX Copywriting", "Scripting SmartToonKids", "User Personas", "Edge Case Discovery"],
  },
  {
    atomicNumber: 16,
    symbol: "CL",
    name: "Claude",
    category: "AI Tools",
    isBrand: true,
    brandKey: "claude",
    projects: ["Research Synthesis", "UX Strategy & Flow Ideation", "Design Spec Audits"],
  },
  {
    atomicNumber: 17,
    symbol: "GE",
    name: "Gemini",
    category: "AI Tools",
    isBrand: true,
    brandKey: "gemini",
    projects: ["Multimodal UI Analysis", "SmartToonKids Concepts", "Asset Generation Ideas"],
  },
  {
    atomicNumber: 18,
    symbol: "ME",
    name: "Meta AI",
    category: "AI Tools",
    isBrand: true,
    brandKey: "meta",
    projects: ["Social Creative Ideation", "Visual Prompt Research", "Audience Engagement Trends"],
  },
  {
    atomicNumber: 19,
    symbol: "ST",
    name: "Stitch",
    category: "AI Tools",
    isBrand: true,
    brandKey: "stitch",
    projects: ["AI Workflow Acceleration", "Asset Prototyping", "Design-to-Code Layouts"],
  },
  {
    atomicNumber: 20,
    symbol: "AG",
    name: "Antigravity",
    category: "AI Tools",
    isBrand: true,
    brandKey: "antigravity",
    projects: ["Agentic AI Workflows", "Automated Frontend Sync", "Rapid Prototyping Loops"],
  },
  {
    atomicNumber: 21,
    symbol: "NB",
    name: "Nano Banana",
    category: "AI Tools",
    isBrand: true,
    brandKey: "nanobanana",
    projects: ["Generative Visual Assets", "Character Exploration", "Creative Campaign Visuals"],
  },

  // 4. Process Category
  {
    atomicNumber: 22,
    symbol: "UR",
    name: "User Research",
    category: "Process",
    isBrand: false,
    projects: ["OOH Audit Field Studies", "Machine Dalal Buyer Interviews"],
  },
  {
    atomicNumber: 23,
    symbol: "WF",
    name: "Wireframing",
    category: "Process",
    isBrand: false,
    projects: ["OOH Audit", "Eikaebana", "Retibazaar"],
  },
  {
    atomicNumber: 24,
    symbol: "PR",
    name: "Prototyping",
    category: "Process",
    isBrand: false,
    projects: ["Interactive Figma Prototypes", "Developer Previews"],
  },
  {
    atomicNumber: 25,
    symbol: "UF",
    name: "User Flows",
    category: "Process",
    isBrand: false,
    projects: ["eCommerce Checkout Funnels", "B2B Deal-Making Paths"],
  },
  {
    atomicNumber: 26,
    symbol: "DH",
    name: "Developer Handoff",
    category: "Process",
    isBrand: false,
    projects: ["Design Token Specs", "Reusable Component Libraries"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ooh-audit",
    index: "01",
    title: "OOH Audit Platform",
    kicker: "Enterprise Web Platform & Analytics Dashboard",
    description:
      "Designed an enterprise web platform and analytics dashboard for real-time campaign tracking, proof verification, and media intelligence across national outdoor advertising networks.",
    features: [
      "Web-based executive monitoring dashboards",
      "Real-time geo-tagged audit proof logs & reporting",
      "Enterprise media asset tracking & operational visibility",
      "Accelerated audit review cycles by ~30%",
    ],
    tech: ["Figma", "Web Design", "Design Systems", "Data Visualization"],
    liveUrl: "https://oohaudit.com/",
    caseStudyUrl:
      "https://www.behance.net/gallery/251451983/OOH-Audit-Tamper-Proof-Field-Verification-Ecosystem",
    uiType: "dashboard",
  },
  {
    id: "eikaebana",
    index: "02",
    title: "Eikaebana",
    kicker: "eCommerce Mobile App & Web",
    description:
      "E-commerce app for artificial flowers and luxury home décor, engineered with an intuitive catalog browsing experience and frictionless checkout.",
    features: [
      "Optimized eCommerce browsing & checkout flows",
      "Raised transaction conversion rates by ~15–20%",
      "Curated visual aesthetics with high-res product galleries",
      "Native cross-platform experience across iOS and Android",
    ],
    tech: ["Figma", "UI/UX Design", "eCommerce", "User Flows"],
    liveUrl: "https://shop.eikaebana.com/",
    appStoreUrl: "https://apps.apple.com/in/app/eikaebana/id1640209271",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.hashbrown.eikaebana&hl=en_IN",
    uiType: "mobile",
  },
  {
    id: "machine-dalal",
    index: "03",
    title: "Machine Dalal",
    kicker: "B2B Industrial Marketplace",
    description:
      "Designed a B2B marketplace connecting machinery buyers, sellers, and financing partners—enabling discovery, deal-making, and logistics for industrial equipment trade.",
    features: [
      "Heavy industrial machinery directory & spec comparisons",
      "Direct buyer-to-seller deal-making negotiations",
      "Integrated financing, inspection and logistics inquiry flows",
      "Multi-currency, internationalized search & discovery",
    ],
    tech: ["Figma", "Dashboard Design", "User Research", "Wireframing"],
    liveUrl: "https://www.machinedalal.com/",
    appStoreUrl: "https://apps.apple.com/gm/app/machine-dalal/id1071517063",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=machinedalal.hashbrown.com.machinedalal&hl=en_IN",
    uiType: "marketplace",
  },
  {
    id: "brand-manager",
    index: "04",
    title: "Brand Manager App",
    kicker: "Executive Monitoring & Audit Verification App",
    description:
      "Designed the Brand Manager mobile application empowering brand leaders and executives with live campaign monitoring, real-time audit approvals, and proof-of-performance analytics.",
    features: [
      "Live executive campaign monitoring and audit logs",
      "Real-time proof verification and inspection approvals",
      "Instant push notifications for campaign milestones",
      "Seamless cross-platform deployment on iOS and Android",
    ],
    tech: ["iOS", "Android", "UI/UX Design", "Data Visualization"],
    caseStudyUrl:
      "https://www.behance.net/gallery/251451983/OOH-Audit-Tamper-Proof-Field-Verification-Ecosystem",
    appStoreUrl: "https://apps.apple.com/gm/app/brand-manager/id1670056821",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=app.brand.platform.hashbrown&hl=en_IN",
    uiType: "dashboard",
  },
  {
    id: "moshpit-app",
    index: "05",
    title: "Moshpit App",
    kicker: "Tamper-Proof Field Verification App",
    description:
      "Designed Moshpit, a tamper-proof mobile application for field auditors to capture geo-tagged proof of performance, monitor live campaign sites, and accelerate field workflows.",
    features: [
      "Tamper-proof field proof with geo-tagged logs & timestamps",
      "Offline-first camera capture for low-connectivity zones",
      "Automated sync with Brand Manager executive dashboards",
      "Seamless cross-platform deployment on iOS and Android",
    ],
    tech: ["iOS", "Android", "Mobile App", "UI/UX Design"],
    caseStudyUrl:
      "https://www.behance.net/gallery/251451983/OOH-Audit-Tamper-Proof-Field-Verification-Ecosystem",
    appStoreUrl: "https://apps.apple.com/us/app/moshpit-app/id1438508518",
    playStoreUrl:
      "https://play.google.com/store/search?q=moshpit&c=apps&hl=en_IN",
    uiType: "mobile",
  },
  {
    id: "smarttoonkids",
    index: "06",
    title: "SmartToonKids",
    kicker: "AI & 2D Animated Video Production",
    description:
      "Original 2D animated educational series conceptualized, scripted, voiced, and animated from scratch—driving 45K+ organic views and 100K+ reach across social channels.",
    features: [
      "Original 2D animation, storyboarding & character design",
      "Scriptwriting, narrative pacing & child-friendly storytelling",
      "Voiceover direction, audio synchronization & sound effects",
      "Surpassed 45K+ organic views & 100K+ impressions",
    ],
    tech: ["2D Animation", "Storyboarding", "Character Design", "Photoshop", "AI Tools"],
    liveUrl: "https://www.instagram.com/smarttoonkids/",
    uiType: "video",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Apr 2024 – Present · 2 yrs 8 mos",
    year: "Apr 2024 – Present",
    role: "Sr. UI/UX Designer",
    company: "Hashbrown Systems Pvt. Ltd.",
    location: "Chandigarh, India",
    type: "experience",
    isPresent: true,
    skills: ["Figma", "UI/UX Design", "Design Systems", "Prototyping", "User Flows", "SaaS Dashboards"],
    bullets: [
      "Lead UI/UX & Product Designer for web applications, mobile apps, SaaS products, dashboards, and enterprise platforms.",
      "Spearheaded design system architecture in Figma with modular components, tokens, and auto-layout, accelerating developer handoff by 40%.",
      "Designed data-dense analytics visualizations and workflows that improved task completion times by ~30%.",
      "Engineered high-converting checkout flows and mobile shopping experiences across iOS and Android.",
    ],
  },
  {
    period: "Apr 2019 – Apr 2024 · 5 yrs 1 mo",
    year: "Apr 2019 – Apr 2024",
    role: "Senior Graphic Designer",
    company: "Hashbrown Systems Pvt. Ltd.",
    location: "Chandigarh, India",
    type: "experience",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Brand Identity", "Visual Design", "Pitch Decks", "Marketing"],
    bullets: [
      "Directed end-to-end visual identities, brand systems, corporate collateral, marketing campaigns, and client pitch decks.",
      "Designed iconography sets, digital illustration assets, and product marketing graphics across multi-channel digital touchpoints.",
      "Collaborated directly with founders, product managers, and client stakeholders to translate business goals into memorable brand experiences.",
    ],
  },
  {
    period: "Feb 2017 – Apr 2019 · 2 yrs 3 mos",
    year: "Feb 2017 – Apr 2019",
    role: "Graphic Designer",
    company: "Hashbrown Systems Pvt. Ltd.",
    location: "Chandigarh, India",
    type: "experience",
    skills: ["Graphic Design", "Wireframing", "Social Media", "Print Media", "Vector Art"],
    bullets: [
      "Designed foundational digital creatives, website layouts, wireframes, social campaigns, infographics, and corporate presentations.",
      "Ensured brand alignment, typography consistency, and visual polish across client deliverables and early product launches.",
    ],
  },
  {
    period: "2011 – 2014",
    year: "2011 – 2014",
    role: "B.Tech, Computer Science & Engineering",
    company: "Punjab Technical University",
    location: "Punjab, India",
    type: "education",
    bullets: [
      "Focused on foundational computing, software architecture, user interface principles, and web technologies.",
    ],
  },
  {
    period: "2008 – 2011",
    year: "2008 – 2011",
    role: "Diploma, Computer Science",
    company: "State Board of Technical Education",
    location: "Punjab, India",
    type: "education",
    bullets: [
      "Grounding in algorithmic problem-solving, graphic programming, and digital systems.",
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    index: "01 / 06",
    numberDisplay: "9+",
    targetNumber: 9,
    suffix: "Yrs",
    label: "Design Experience",
    caption: "UI/UX Leadership",
    detail:
      "Leading design for mobile apps, responsive websites, and enterprise SaaS platforms from concept to handoff.",
    platform: "Hashbrown Systems",
    platformKey: "hashbrown",
  },
  {
    index: "02 / 06",
    numberDisplay: "10+",
    targetNumber: 10,
    suffix: "Apps",
    label: "Live Products",
    caption: "Shipped at Scale",
    detail:
      "Cross-sector portfolio spanning eCommerce, B2B marketplaces, SaaS, and outdoor advertising networks.",
    platform: "Production",
    platformKey: "production",
  },
  {
    index: "03 / 06",
    numberDisplay: "~30%",
    targetNumber: 30,
    prefix: "~",
    suffix: "%",
    label: "Task Completion Boost",
    caption: "Analytics Dashboards",
    detail:
      "Measured ~30% faster task execution through redesigned data visualization and operational dashboards.",
    platform: "OOH Audit",
    platformKey: "oohaudit",
  },
  {
    index: "04 / 06",
    numberDisplay: "45K+",
    targetNumber: 45,
    suffix: "K+",
    label: "Video Views",
    caption: "SmartToonKids 2D Animation",
    detail:
      "Original 2D animation, storyboarding, character design, and sound direction driving 45K+ organic views and 100K+ reach.",
    platform: "SmartToonKids",
    platformKey: "smarttoonkids",
  },
  {
    index: "05 / 06",
    numberDisplay: "7+",
    targetNumber: 7,
    suffix: "+",
    label: "AI Tools Integrated",
    caption: "Next-Gen Design Workflow",
    detail:
      "Daily integration of ChatGPT, Claude, Gemini, Antigravity, Meta AI, Stitch, and Nano Banana.",
    platform: "AI Suite",
    platformKey: "ai",
  },
  {
    index: "06 / 06",
    numberDisplay: "100%",
    targetNumber: 100,
    suffix: "%",
    label: "Developer Alignment",
    caption: "Design System Specs",
    detail:
      "Production-ready design tokens, responsive Figma variants, and seamless developer handoff.",
    platform: "Figma",
    platformKey: "figma",
  },
];

export const CERTIFICATIONS: never[] = [];
