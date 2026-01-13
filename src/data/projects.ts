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
    id: "fintech-dashboard",
    title: "Fintech Dashboard",
    category: "Product Design",
    description: "A comprehensive financial management platform with intuitive data visualization and seamless user flows.",
    fullDescription: "Designed and led the UX strategy for a modern fintech dashboard that helps users manage their investments, track spending, and achieve financial goals through intuitive interfaces and actionable insights.",
    tags: ["UI Design", "UX Research", "Design System"],
    color: "from-primary/20 to-accent/20",
    role: "Lead Product Designer",
    duration: "6 months",
    tools: ["Figma", "Principle", "Maze", "Hotjar"],
    challenge: "Users struggled with complex financial data, leading to low engagement and frequent support requests. The existing interface was cluttered and didn't prioritize key information. Our research revealed that 78% of users felt overwhelmed within the first 5 minutes of using the platform, and the average session duration was under 3 minutes.",
    solution: "Implemented a card-based modular dashboard with progressive disclosure, allowing users to customize their view. Created a robust design system for consistency across 50+ screens. We introduced a guided onboarding flow, smart notifications, and AI-powered insights that surfaced relevant information based on user behavior patterns.",
    outcome: "Increased user engagement by 65% and reduced support tickets by 40%. The design system cut development time by 30% for new features. Average session duration increased to 12 minutes, and user satisfaction scores rose from 3.2 to 4.6 out of 5.",
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
    title: "Healthcare App",
    category: "Mobile Experience",
    description: "Patient-centered mobile application focusing on accessibility and ease of appointment booking.",
    fullDescription: "Led the complete redesign of a healthcare mobile app, focusing on accessibility standards and creating a stress-free experience for patients managing their health journey.",
    tags: ["Mobile UI", "Accessibility", "User Testing"],
    color: "from-accent/20 to-primary/20",
    role: "Senior UX Designer",
    duration: "4 months",
    tools: ["Figma", "ProtoPie", "UserTesting", "Lookback"],
    challenge: "The app had poor accessibility scores and users, especially elderly patients, found it difficult to book appointments and access medical records.",
    solution: "Redesigned the entire user flow with WCAG 2.1 AA compliance. Introduced voice navigation, larger touch targets, and a simplified 3-step booking process.",
    outcome: "Achieved 98% accessibility score. App store rating improved from 3.2 to 4.7 stars. Appointment booking completion rate increased by 85%.",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    category: "Web Design",
    description: "End-to-end shopping experience redesign that increased conversion rates by 40%.",
    fullDescription: "Spearheaded the complete overhaul of a major e-commerce platform, reimagining the shopping experience from product discovery to checkout.",
    tags: ["Conversion Optimization", "UI/UX", "A/B Testing"],
    color: "from-primary/20 to-accent/10",
    role: "UX Lead",
    duration: "8 months",
    tools: ["Figma", "Optimizely", "FullStory", "Amplitude"],
    challenge: "High cart abandonment rate of 78% and users complained about a confusing checkout process with too many steps.",
    solution: "Introduced a single-page checkout, guest checkout option, and smart product recommendations. Designed micro-interactions to guide users and reduce friction.",
    outcome: "Reduced cart abandonment to 45%, increased conversion by 40%, and boosted average order value by 25% through strategic cross-selling.",
  },
  {
    id: "saas-analytics",
    title: "SaaS Analytics",
    category: "Enterprise UX",
    description: "Complex data analytics tool simplified through thoughtful information architecture and visual hierarchy.",
    fullDescription: "Transformed a complex B2B analytics platform into an intuitive tool that empowers teams to derive insights without extensive training.",
    tags: ["Enterprise", "Data Viz", "Design System"],
    color: "from-accent/10 to-primary/20",
    role: "Principal Designer",
    duration: "10 months",
    tools: ["Figma", "Storybook", "D3.js", "Mixpanel"],
    challenge: "Enterprise users needed weeks of training to use the platform. The interface was overwhelming with hundreds of features competing for attention.",
    solution: "Created a role-based dashboard system with progressive feature disclosure. Built a comprehensive design system with 200+ components and established clear data visualization guidelines.",
    outcome: "Reduced onboarding time from 3 weeks to 3 days. User satisfaction scores increased by 60%. Won 'Best Enterprise UX' at SaaS Design Awards.",
  },
];
