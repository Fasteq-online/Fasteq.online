export interface NavLink { label: string; href: string; }

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export const ADVANTAGES = [
  {
    title: "Precision Engineering",
    desc: "We architect systems with mathematical precision and edge-case resilience.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Future-Proof AI",
    desc: "Integrated AI agents that learn and evolve with your business workflows.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Luxury Performance",
    desc: "Luxury-grade speed that keeps your users engaged and converting.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
  }
];

export const STATS = [
  { label: "Uptime SLA", value: 99.9, suffix: "%", prefix: "" },
  { label: "Projects Delivered", value: 50, suffix: "+", prefix: "" },
  { label: "Global Clients", value: 25, suffix: "+", prefix: "" },
  { label: "Lines of Code", value: 1.2, suffix: "M", prefix: "" },
];

export const CLIENT_LOGOS = ["TechFlow", "Aether", "Luminary", "Vertex", "Oasis", "Nexus", "Quantum", "Apex"];

export const SERVICES = [
  { title: "Product Design", description: "Minimalist interfaces built with Inter and high-end UX principles.", icon: "M12 2L2 7l10 5 10-5-10-5z" },
  { title: "AI Engineering", description: "Intelligent systems that automate complexity and drive growth.", icon: "M21 16V8a2 2 0 00-1-1.73l-7-4" },
  { title: "Core Systems", description: "Scalable, resilient architecture for the modern web era.", icon: "M12 22C17.52 22 22 17.52 22 12" },
];

export const DETAILED_SERVICES = [
  { category: "Development", title: "Next.js Enterprise Systems", description: "We build scalable, high-performance web applications using the latest Next.js features.", features: ["Server-Side Rendering", "API Infrastructure", "Microservices Architecture", "Real-time Data"], color: "bg-[#0D2E2F]" },
  { category: "Intelligence", title: "Custom AI & Automation", description: "Integrating LLMs and custom AI agents into your business workflows.", features: ["Custom GPT Agents", "Workflow Automation", "Data Analysis AI", "Chatbot Ecosystems"], color: "bg-[#C87D4F]" },
  { category: "Design", title: "Luxury UI/UX Strategy", description: "Aesthetic interfaces designed for premium branding and user conversion.", features: ["Brand Identity", "Interactive Prototypes", "High-Fidelity UI", "User Psychology"], color: "bg-[#144243]" }
];

export const TEAM = [
  { name: "Hamid Mushtaq", role: "Co-Founder & CTO", bio: "Systems architect driving FASTEQ's technical vision and engineering excellence." },
  { name: "Alex Sterling", role: "Founder & CEO", bio: "Visionary architect with 15+ years in digital engineering, bridging human intuition and AI.", isCEO: true },
  { name: "Fatima Tuz Zahra", role: "Head of Design", bio: "Crafting premium digital experiences that merge luxury aesthetics with intuitive UX." },
  { name: "Sarah Chen", role: "Head of AI", bio: "Leading our LLM and automation research division." },
  { name: "Marcus Vane", role: "Lead Developer", bio: "Expert in scalable Next.js and cloud architectures." },
];

export const PROJECTS = [
  { title: "Linear Sync", category: "App Design", year: "2024" },
  { title: "Stripe Flow", category: "Fintech", year: "2024" },
  { title: "Atlas AI", category: "Core Dev", year: "2023" },
  { title: "Prism OS", category: "Interface", year: "2024" },
];

export const DETAILED_PROJECTS = [
  { title: "Aether OS", category: "Software Engineering", description: "A custom operating system interface built for cloud-native workflows.", tags: ["Next.js", "WebSockets"], year: "2024", color: "bg-[#0D2E2F]" },
  { title: "Quantum Ledger", category: "Fintech & AI", description: "AI-driven financial management platform.", tags: ["OpenAI", "React"], year: "2023", color: "bg-[#C87D4F]" },
  { title: "Oasis Luxury", category: "E-Commerce", description: "High-end retail experience for a luxury watch brand.", tags: ["Shopify", "Three.js"], year: "2024", color: "bg-[#144243]" },
  { title: "Nexus Protocol", category: "Infrastructure", description: "Decentralized node management system.", tags: ["Web3", "Next.js"], year: "2024", color: "bg-slate-900" }
];

export const COMPANY_VISION = {
  title: "Engineering the Unimaginable.",
  description: "At FASTEQ, we don't just build websites. We architect digital legacies. Our mission is to merge high-end engineering with the soul of premium design.",
  ceo_vision: "My vision is to bridge the gap between human intuition and artificial intelligence."
};

export const PRICING_PLANS = [
  { name: "Starter", price: "2,500", description: "High-end landing page.", features: ["Single Page Next.js", "Tailwind v4"], isPopular: false },
  { name: "Professional", price: "7,500", description: "Full digital ecosystems.", features: ["Multi-page Web App", "Sanity CMS"], isPopular: true },
  { name: "Enterprise", price: "Custom", description: "Large scale systems.", features: ["Cloud Architecture", "Dedicated Support"], isPopular: false },
];