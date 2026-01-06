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
    challenge: "Users struggled with complex financial data, leading to low engagement and frequent support requests. The existing interface was cluttered and didn't prioritize key information.",
    solution: "Implemented a card-based modular dashboard with progressive disclosure, allowing users to customize their view. Created a robust design system for consistency across 50+ screens.",
    outcome: "Increased user engagement by 65% and reduced support tickets by 40%. The design system cut development time by 30% for new features.",
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
