export interface ProcessStep {
  title: string;
  description: string;
}

export interface KeyFeature {
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: string[];
  color: string;
  role: string;
  duration: string;
  tools: string[];
  challenge: string;
  solution: string;
  outcome: string;
  processSteps?: ProcessStep[];
  keyFeatures?: KeyFeature[];
  metrics?: Metric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: "contact-center",
    title: "Contact Center Solution",
    category: "Product Design & UI Development",
    description: "A comprehensive financial management platform with intuitive data visualization and seamless user flows.",
    fullDescription: "This project transforms customer interactions into actionable insights using AI-powered analytics. By analyzing voice and messaging data in real time and post-interaction, it helps improve customer satisfaction, optimize operations, and enhance agent performance all within a unified platform designed to drive efficiency and deliver consistent, high-quality experiences.",
    tags: ["UI Design", "UX Research", "Design System", "UI Development"],
    color: "from-primary/20 to-accent/20",
    role: "Lead UI/UX",
    duration: "18 months",
    tools: ["Figma", "Loveable", "Claude", "React"],
    challenge: "Traditional contact centers relied heavily on manual support, leading to slow response times, high call volumes, and inconsistent customer experiences. Customers often lacked effective self-service options, and agents had to manage repetitive tasks without intelligent tools or automated workflows.",
    solution: "Implemented an AI-assisted self-service experience that guided customers to relevant answers through natural language interactions. Designed an intelligent agent workspace with automated ticket handling, contextual information surfaces, and unified communication channels. Built a scalable design system to ensure consistency across the entire platform, including dashboards, chat interfaces, and workflow tools.",
    outcome: "Increased self-service adoption and reduced repetitive support tickets. The modular design system accelerated development of new features. Average resolution time for customer inquiries improved, and overall customer satisfaction rose significantly.",
    processSteps: [
      {
        title: "Discovery & Research",
        description: "Conducted 25+ user interviews, analyzed 6 months of support tickets, and performed competitive analysis of 12 fintech platforms to identify pain points and opportunities."
      },
      {
        title: "Information Architecture",
        description: "Restructured the navigation and created a new hierarchy based on user mental models. Developed user flows for 8 key tasks and validated with card sorting exercises."
      },
      {
        title: "Design & Prototyping",
        description: "Created low-fidelity wireframes, iterated through 3 rounds of usability testing, and developed high-fidelity prototypes with micro-interactions using Principle."
      },
      {
        title: "Design System",
        description: "Built a comprehensive design system with 200+ components, documented usage guidelines, and established a token-based theming system for scalability."
      },
      {
        title: "Validation & Handoff",
        description: "Conducted A/B testing with 5,000 users, refined designs based on analytics, and collaborated closely with engineering for pixel-perfect implementation."
      }
    ],
    keyFeatures: [
      {
        title: "Smart Dashboard",
        description: "Customizable widget-based layout that adapts to user preferences and displays personalized insights based on financial goals."
      },
      {
        title: "Unified Portfolio View",
        description: "Consolidated view of all investments, accounts, and assets with real-time syncing and interactive visualizations."
      },
      {
        title: "Intelligent Alerts",
        description: "Context-aware notifications that surface important information without overwhelming users, powered by behavioral analysis."
      },
      {
        title: "Goal Tracking",
        description: "Visual progress indicators for savings goals with predictive analytics showing projected completion dates."
      }
    ],
    metrics: [
      { value: "65%", label: "Increase in Engagement" },
      { value: "40%", label: "Reduction in Support Tickets" },
      { value: "4.6★", label: "User Satisfaction Score" },
      { value: "12min", label: "Avg. Session Duration" }
    ],
    testimonial: {
      quote: "The redesigned dashboard transformed how our users interact with their finances. The intuitive design and smart features have made complex financial management accessible to everyone.",
      author: "Sarah Chen",
      role: "VP of Product, FinanceFlow"
    }
  },
  {
    id: "healthcare-app",
    title: "MediWave",
    category: "Emergency Response UX",
    description: "Integrated Emergency Response Suite digitally transforming pre-hospital care with AI, Mixed Reality, and IoMT.",
    fullDescription: "Led the end-to-end UX design of MediWave — Mediwave's flagship Emergency Response Suite. The platform connects paramedics in the field with hospital physicians in real time using AI, Microsoft HoloLens Mixed Reality, and 5G, fundamentally transforming care delivery during the critical Golden Hour.",
    tags: ["Product Design", "UX Research", "Design System", "Emergency Tech", "AI/AR Integration"],
    color: "from-accent/20 to-primary/20",
    role: "Lead UX Designer",
    duration: "12 months",
    tools: ["Figma", "UserTesting", "Angular"],
    challenge: "Emergency Medical Services relied on manual paperwork, fragmented communication, and delayed dispatch decisions. Paramedics spent up to 3–5 hours daily on documentation instead of patient care, while hospitals received no advance patient data before ambulance arrival.",
    solution: "Designed an integrated suite — Connected Ambulance, ERMS, ePCR, and Smart EMS — giving paramedics AI-powered tools, AR-guided care, and real-time hospital connectivity. Every interaction was optimised for high-stress, gloves-on, moving-vehicle use contexts.",
    outcome: "Deployed across 322+ ambulances in Sri Lanka, achieving an average response time of 15 minutes 32 seconds — surpassing many developed nations. Daily documentation time cut by 3–5 hours per EMS staff member. Now active in Sri Lanka, Australia, Malaysia, and in POC in the United States.",
  },
  {
    id: "ecommerce-platform",
    title: "Hypermart Marketplace",
    category: "Telecom Monetization",
    description: "Led the end-to-end UX design of Hypermart — a full-stack B2B/B2B2X marketplace enabling telecoms to monetize digital assets, services, and physical goods beyond APIs.",
    fullDescription: "Owned the complete design vision for Hypermart — a next-generation multi-asset marketplace where telecom operators monetize APIs, digital services, cloud solutions, and physical goods through a single unified experience. Designed end-to-end user journeys across service provider, vendor, reseller, and enterprise buyer portals, delivering seamless checkout, dynamic bundling, and industry-first AI voice navigation.",
    tags: ["B2B Marketplace", "API Monetization", "Marketplace UX"],
    color: "from-primary/20 to-accent/20",
    role: "Lead UI/UX",
    duration: "24 months",
    tools: ["Figma", "Prototyping", "Angular"],
    challenge: "Telecom operators relied on fragmented, legacy systems to manage APIs, digital products, and cloud services — each with its own UI, onboarding flow, and billing experience. Enterprise buyers faced disjointed shopping journeys, while vendors lacked self-service portals for independent selling. The absence of a unified multi-asset marketplace led to slow time-to-market, partner friction, and missed Everything-as-a-Service (XaaS) revenue opportunities.",
    solution: "Designed a unified marketplace experience with a white-labeled storefront, comprehensive API catalog, dynamic bundling engine, and multi-cloud orchestration. Created distinct yet cohesive portals for service provider admins, resellers, and enterprise customers — each tailored to specific workflows. Introduced AI-powered customer journeys with voice navigation for product discovery, and built a scalable design system (Poppins typography, modular components, white-label theming) that adapts across operator brands.",
    outcome: "Delivered a coherent, multi-portal marketplace experience trusted by global telecoms including Tigo, Hutch, Cellcard, and True. The design system enabled 3x faster time-to-market for new operators. Zero-touch provisioning flows eliminated manual onboarding friction, and the unified catalog reduced product discovery time by 70%. The platform became the foundation for both API-only and full-stack B2B2X deployments.",
  },
  {
    id: "channel-orchestration",
    title: "Compose",
    category: "Channel Orchestration & AI Platform",
    description: "AI-powered low-code platform for building and deploying omnichannel CX applications with seamless digital and legacy channel integration.",
    fullDescription: "Led the end-to-end UX design of Compose — a next-generation channel orchestration platform that empowers telecoms to build, deploy, and scale AI-powered customer experience applications. The platform unifies legacy systems (SMS, IVR, USSD) with modern digital channels (WhatsApp, Messenger, Telegram, Viber, Instagram) through a low-code development environment with in-built AI orchestration capabilities.",
    tags: ["Product Design", "AI Orchestration", "Omnichannel CX", "Low-Code Platform", "Telecom"],
    color: "from-accent/20 to-primary/20",
    role: "Lead UI/UX Designer",
    duration: "14 months",
    tools: ["Figma", "Prototyping", "UX Research", "Design System"],
    challenge: "Telecoms struggled with fragmented customer touchpoints across 12+ channels, with no unified orchestration layer. Building CX applications required extensive engineering effort, and existing platforms lacked native AI capabilities for personalization and intelligent routing.",
    solution: "Designed a unified low-code platform with drag-and-drop workflow builder, pre-built AI templates, and seamless integration across all digital and legacy channels. The platform enables multi-channel AI deployment with real-time analytics and multilingual NLP support.",
    outcome: "Enabled telecom operators to deploy CX applications 3x faster with intelligent automation. Unified 12+ customer channels under a single orchestration dashboard, reducing development costs while delivering personalized, context-aware customer experiences at scale.",
    metrics: [
      { value: "3x", label: "Faster App Deployment" },
      { value: "12+", label: "Channels Unified" },
      { value: "60%", label: "Reduced Dev Costs" },
      { value: "100%", label: "Context Preservation" }
    ],
  },
];
