import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import {
  ArrowLeft, Cloud, Server, Package, Globe, Mic,
  Workflow, Coins, Store, Network, Box, Layers, Users, ChevronRight,
  ShieldCheck, LayoutDashboard, MessageSquareText, Search, Database,
  ClipboardCheck, TrendingUp, Sparkles, Cog, Headset, CheckCircle2,
  Briefcase, Bell, FileSearch, MessageCircle, GraduationCap,
  PhoneForwarded, Trophy, Lightbulb, Award, Type, Palette, Phone,
  AlertCircle, BarChart3, FileText, X, ArrowRight, ShoppingCart, ArrowDown
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { projects } from "@/data/projects";
import wireframeCatalog from "@/assets/images/projects/ecommerce/wireframes/catalog.png";
import wireframeBundling from "@/assets/images/projects/ecommerce/wireframes/bundling.png";
import wireframeVendor from "@/assets/images/projects/ecommerce/wireframes/vendor.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import hypermartLogo from "@/assets/images/projects/ecommerce/Wavenet-hypermart-logo-usage.jpg";


const EcommercePlatformPage = () => {
  const project = projects.find((p) => p.id === "ecommerce-platform");
  const heroRef = useRef<HTMLElement>(null);
  const [wireframeIndex, setWireframeIndex] = useState<number | null>(null);
  const [hifiIndex, setHifiIndex] = useState<number | null>(null);

  const [activeBrandColor, setActiveBrandColor] = useState({
    name: "Standard Blue",
    primary: "#1e88e5",
    secondary: "#1565c0",
    accent: "#64b5f6",
    focus: "#1976D2"
  });

  const customerThemes = [
    { name: "Standard Blue", primary: "#1e88e5", secondary: "#1565c0", accent: "#64b5f6", focus: "#1976D2" },
    { name: "Energy Orange", primary: "#fb8c00", secondary: "#ef6c00", accent: "#ffb74d", focus: "#e65100" },
    { name: "Enterprise Purple", primary: "#8e24aa", secondary: "#6a1b9a", accent: "#ba68c8", focus: "#4a148c" },
    { name: "Modern Green", primary: "#43a047", secondary: "#2e7d32", accent: "#81c784", focus: "#1b5e20" },
  ];

  const wireframes = [
    { src: wireframeCatalog, label: "Catalog View" },
    { src: wireframeBundling, label: "Bundling Workflow" },
    { src: wireframeVendor, label: "Vendor Dashboard" },
  ];
  const ecommerceImagesRaw = import.meta.glob('@/assets/images/projects/ecommerce/hifi/*.png', { eager: true, import: 'default' });
  const hifiScreens = Object.entries(ecommerceImagesRaw).map(([path, src]: [string, any]) => {
    const filename = path.split('/').pop()?.replace('.png', '') || '';
    const parts = filename.split(' - ');
    const label = parts.length > 2 ? parts.slice(1, -1).join(' - ') : (parts[1] || filename);
    return { src: src as string, label };
  });

  if (!project) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* ── Hero ── */}
      <section ref={heroRef} className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-32 relative overflow-hidden bg-background text-foreground min-h-[90vh] flex items-center">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-primary/20 blur-[120px] animate-blob mix-blend-screen" />
          <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-500/20 blur-[120px] animate-blob mix-blend-screen" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/10 blur-[120px] animate-blob mix-blend-screen" style={{ animationDelay: '4s' }} />

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_10%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: Content */}
            <div className="lg:col-span-6 xl:col-span-5 relative z-20">
              <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 sm:mb-10 animate-fade-up">
                <ArrowLeft className="w-4 h-4" />
                Back to Work
              </Link>

              <div className="animate-fade-up-delay">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  {project.category}
                </div>

                <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/70">
                  {project.title}
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
                  {project.fullDescription}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Role", value: project.role },
                    { label: "Duration", value: project.duration },
                    { label: "Tools", value: project.tools.join(", ") },
                  ].map((m) => (
                    <div key={m.label} className="flex flex-col gap-1 border-l-2 border-primary/30 pl-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{m.label}</span>
                      <span className="text-sm font-semibold text-foreground">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-secondary/50 backdrop-blur-md rounded-full text-xs font-medium text-foreground border border-border/40 hover:border-primary/40 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Creative Animated Visuals */}
            <div className="lg:col-span-6 xl:col-span-7 hidden lg:block relative h-[600px] w-full [perspective:1000px] animate-fade-up-delay-2">
              <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">

                {/* Center Main Dashboard Mockup */}
                <div className="relative z-20 w-[480px] h-[320px] bg-card/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden animate-float-slow">
                  {/* Glass Header */}
                  <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-mono text-muted-foreground">hypermart.app</div>
                  </div>
                  {/* Dashboard Content */}
                  <div className="p-6 grid grid-cols-12 gap-4 h-[calc(100%-3rem)]">
                    {/* Sidebar */}
                    <div className="col-span-3 flex flex-col gap-3 border-r border-white/5 pr-4">
                      <div className="w-full h-8 bg-white/5 rounded-lg animate-pulse" />
                      <div className="w-3/4 h-4 bg-white/5 rounded mt-4" />
                      <div className="w-full h-4 bg-white/5 rounded" />
                      <div className="w-5/6 h-4 bg-white/5 rounded" />
                      <div className="w-full h-4 bg-white/5 rounded" />
                    </div>
                    {/* Main Area */}
                    <div className="col-span-9 flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <div className="w-32 h-6 bg-primary/20 rounded-md" />
                        <div className="w-8 h-8 bg-white/10 rounded-full" />
                      </div>
                      {/* Graph Area */}
                      <div className="flex-1 bg-gradient-to-t from-primary/10 to-transparent rounded-xl border border-primary/20 relative overflow-hidden flex items-end p-4">
                        <TrendingUp className="absolute top-4 right-4 w-6 h-6 text-primary opacity-50" />
                        <div className="w-full flex items-end gap-2 h-20">
                          {[40, 65, 45, 80, 55, 90, 75, 100].map((h, i) => (
                            <div key={i} className="flex-1 bg-primary/40 rounded-t-sm transition-all duration-1000 hover:bg-primary" style={{ height: `${h}%`, animation: `pulse-slow ${2 + i * 0.2}s infinite` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Element 1: Revenue Card */}
                <div className="absolute z-30 -right-4 top-12 w-64 p-4 bg-card/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl animate-float-medium group hover-lift cursor-pointer">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium">Total Revenue</div>
                      <div className="text-lg font-bold text-foreground">$124,592.00</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-green-400 font-medium">
                    <TrendingUp className="w-3 h-3" />
                    +14.5% this week
                  </div>
                </div>

                {/* Floating Element 2: Sales Notification */}
                <div className="absolute z-30 left-0 bottom-24 w-56 p-3 bg-card/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl animate-float-fast group hover-lift cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center relative overflow-hidden">
                      <ShoppingCart className="w-5 h-5 text-blue-400 relative z-10" />
                      <div className="absolute inset-0 bg-blue-400/20 animate-pulse-slow" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">New Order</div>
                      <div className="text-xs text-muted-foreground">Cloud Bundle Pro</div>
                    </div>
                    <div className="ml-auto text-xs font-bold text-blue-400">
                      $499
                    </div>
                  </div>
                </div>

                {/* Floating Element 3: Product Card */}
                <div className="absolute z-10 left-12 top-0 w-48 p-4 bg-card/40 backdrop-blur-lg border border-white/5 rounded-3xl shadow-lg animate-float-reverse transform -rotate-6">
                  <div className="w-full h-24 rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 mb-3 flex items-center justify-center">
                    <Layers className="w-8 h-8 text-indigo-300" />
                  </div>
                  <div className="w-24 h-3 bg-white/10 rounded mb-2" />
                  <div className="w-16 h-3 bg-white/5 rounded" />
                </div>

                {/* Connecting Lines / Accents */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ transform: 'translateZ(-10px)' }}>
                  <path d="M 150 200 Q 250 100 350 250 T 550 150" fill="none" stroke="url(#primary-gradient)" strokeWidth="2" strokeDasharray="6 6" className="opacity-30" />
                  <defs>
                    <linearGradient id="primary-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Particles */}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-primary/50 animate-pulse-dot" style={{ animationDelay: '0s' }} />
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-blue-400/50 animate-pulse-dot" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-indigo-400/50 animate-pulse-dot" style={{ animationDelay: '2s' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Challenge ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative overflow-hidden bg-gradient-to-br from-secondary/40 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4 mt-2">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Problem Space</span>
              <h3 className="font-display font-bold text-4xl sm:text-5xl leading-tight">Fragmented<br />Experiences</h3>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              {[
                { icon: Network, title: "Siloed Interfaces", desc: "Each product line — APIs, cloud, physical goods — lived in its own disconnected portal with inconsistent navigation, branding, and interaction patterns." },
                { icon: Store, title: "Broken Buyer Journeys", desc: "Enterprise customers had to navigate multiple storefronts, compare pricing across disjointed systems, and manage separate checkouts for bundled services." },
                { icon: Server, title: "No Unified Catalog UX", desc: "Operators lacked a single browsable catalog that surfaces digital assets, physical goods, and cloud services with coherent filtering and search." },
                { icon: Users, title: "Vendor Onboarding Friction", desc: "Partners had no self-service portal. Onboarding required manual coordination, slowing time-to-market and creating inconsistent vendor experiences." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                  <item.icon className="w-6 h-6 text-primary mb-4 relative z-10" />
                  <h4 className="font-bold text-lg mb-2 text-foreground relative z-10">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Research & Discovery ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Deep Dive</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Research & Discovery</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conducted contextual interviews with telecom admins, enterprise procurement teams, and independent vendors across APAC, EMEA, and Latin America. Mapped existing workflows, audited competitor marketplace UIs, and ran card-sorting exercises to validate information architecture for the unified catalog.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-8 pt-8">
            <h4 className="font-display font-bold text-2xl mb-6 text-foreground">Stakeholder Pain Points</h4>
            <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm">
              <div className="hidden lg:grid grid-cols-4 gap-6 p-5 bg-secondary/30 border-b border-border/50 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <div>Stakeholder</div>
                <div>Pain Point</div>
                <div>Impact</div>
                <div className="text-primary">Hypermart Solution</div>
              </div>

              <div className="divide-y divide-border/50">
                <div className="grid lg:grid-cols-4 gap-6 p-5 sm:p-6 hover:bg-secondary/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-base mb-1">Telecom Executives</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                      <li>Multiple disconnected dashboards</li>
                      <li>No unified product catalog UI</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                      <li>Slow onboarding of new asset types</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-start">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">Unified admin dashboard with multi-asset catalog</span>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-6 p-5 sm:p-6 hover:bg-secondary/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-base mb-1">Vendors & Resellers</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                      <li>No self-service portal for product listing</li>
                      <li>Manual onboarding with inconsistent UX</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                      <li>Weeks to list new products</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-start">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">Self-service vendor portal with guided onboarding</span>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-6 p-5 sm:p-6 hover:bg-secondary/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <Store className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-base mb-1">Enterprise Buyers</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                      <li>Multiple checkout flows for bundled services</li>
                      <li>Inconsistent pricing and billing views</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                      <li>Cart abandonment and purchase confusion</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-start">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">Unified cart, single checkout, and consolidated invoice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── User Personas ── */}
      <section className="py-16 sm:py-24 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Audience</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">User Personas</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, name: "Alex, Telecom Admin", role: "Service Provider Admin", color: "from-primary/10 to-primary/5", border: "border-primary/20", traits: ["Manages multi-asset catalogs daily", "Configures white-label storefronts", "Monitors partner and revenue KPIs"], goal: "A single admin dashboard to orchestrate catalogs, onboard partners, and track performance across all asset types without switching tools." },
              { icon: Users, name: "Sarah, Partner Lead", role: "Independent Vendor / Reseller", color: "from-indigo-500/10 to-indigo-500/5", border: "border-indigo-500/20", traits: ["Lists and manages third-party products", "Needs real-time sales visibility", "Demands fast self-service onboarding"], goal: "A dedicated vendor portal with guided onboarding, independent storefront management, and transparent billing — without relying on admin support." },
              { icon: LayoutDashboard, name: "David, IT Procurement", role: "Enterprise B2B Buyer", color: "from-green-500/10 to-green-500/5", border: "border-green-500/20", traits: ["Procures bundled cloud & IoT solutions", "Expects unified cart and checkout", "Values zero-touch provisioning"], goal: "A single storefront to discover, compare, bundle, and pay for diverse telecom and cloud assets — with one checkout and one invoice." },
            ].map((p, i) => (
              <AnimatedSection key={i} delay={i * 100} className={`rounded-3xl p-6 sm:p-8 bg-gradient-to-br ${p.color} border ${p.border}`}>
                <div className="w-12 h-12 rounded-full bg-background/60 flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h5 className="font-bold text-lg text-foreground">{p.name}</h5>
                <p className="text-sm text-muted-foreground mb-4">{p.role}</p>
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Key traits</div>
                  <ul className="space-y-1">
                    {p.traits.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Goal</div>
                <p className="text-sm font-medium text-foreground">{p.goal}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ideation & Design Process (Journey Map) ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Process</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Ideation & Design Process</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mapped the enterprise buyer's end-to-end journey — from product discovery to zero-touch provisioning — to pinpoint UX friction and design intentional moments of delight.
            </p>
          </AnimatedSection>

          <AnimatedSection className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-secondary/10 border border-border/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-foreground">B2B Buyer Journey Map</h4>
                  <p className="text-sm text-muted-foreground mt-1">Tracking the emotional arc of an Enterprise Buyer through the Hypermart</p>
                </div>
              </div>

              <div className="overflow-x-auto pb-4 -mx-2 px-2">
                <div className="grid grid-cols-7 gap-3 min-w-[900px]">
                  {[
                    { title: "Onboarding", emoji: "😐", color: "amber" },
                    { title: "Catalog Search", emoji: "😟", color: "red" },
                    { title: "Bundling", emoji: "😰", color: "red" },
                    { title: "Smart Search", emoji: "😊", color: "green" },
                    { title: "Unified Cart", emoji: "😊", color: "green" },
                    { title: "Zero-Touch", emoji: "😁", color: "green" },
                    { title: "Management", emoji: "😁", color: "green" },
                  ].map((stage, i) => (
                    <div key={i} className="group/stage">
                      <div className="bg-primary/5 border border-primary/20 text-foreground rounded-xl px-3 py-2.5 text-center mb-4">
                        <span className="font-bold text-xs sm:text-sm leading-tight block">{stage.title}</span>
                      </div>
                      <div className="flex justify-center mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-sm border-2 transition-transform group-hover/stage:scale-110 ${stage.color === 'green' ? 'bg-green-100 border-green-300' :
                          stage.color === 'red' ? 'bg-red-100 border-red-300' :
                            'bg-amber-100 border-amber-300'
                          }`}>
                          {stage.emoji}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative min-w-[900px] h-8 my-2">
                  <svg className="w-full h-full" viewBox="0 0 900 32" fill="none" preserveAspectRatio="none">
                    <path d="M 64 16 Q 128 20, 192 24 Q 256 28, 320 28 Q 384 24, 448 12 Q 512 8, 576 6 Q 640 4, 704 4 Q 768 2, 836 2" stroke="currentColor" className="text-primary/40" strokeWidth="2" strokeDasharray="6 4" fill="none" />
                  </svg>
                </div>

                <div className="grid grid-cols-7 gap-3 min-w-[900px]">
                  {[
                    { actions: [{ icon: LayoutDashboard, text: "Navigate separate legacy portals" }, { icon: Network, text: "No unified entry point for services" }] },
                    { actions: [{ icon: FileSearch, text: "Browse disconnected vendor catalogs" }, { icon: Layers, text: "Inconsistent product detail pages" }] },
                    { actions: [{ icon: Package, text: "Manual cross-referencing for bundles" }, { icon: AlertCircle, text: "No compatibility or pairing guidance" }] },
                    { actions: [{ icon: Search, text: "AI-powered search across unified catalog" }, { icon: Sparkles, text: "Contextual recommendations surface" }] },
                    { actions: [{ icon: Store, text: "Single cart for multi-vendor items" }, { icon: Coins, text: "Wallet and loyalty payments integrated" }] },
                    { actions: [{ icon: Cloud, text: "Automated cloud provisioning on checkout" }, { icon: Workflow, text: "Zero manual IT configuration" }] },
                    { actions: [{ icon: FileText, text: "One consolidated invoice" }, { icon: BarChart3, text: "Real-time usage and spend tracking" }] },
                  ].map((stage, i) => (
                    <div key={i} className="space-y-3">
                      {stage.actions.map((act, j) => (
                        <div key={j} className="bg-card rounded-xl p-3 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200">
                          <div className="flex items-start gap-2">
                            <act.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs font-medium text-muted-foreground leading-snug">{act.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                  <h5 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-green-600" />
                    Hypermart Impact Points
                  </h5>
                  <ul className="space-y-3">
                    {[
                      { label: "Unified Catalog", desc: "Single browsable interface for all asset types" },
                      { label: "Zero-Touch Flows", desc: "Automated provisioning eliminates manual steps" },
                      { label: "Single Checkout", desc: "One cart, one invoice across all vendors" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
                        <span><span className="font-semibold text-foreground">{item.label}:</span> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                  <h5 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600" />
                    Pain Points Eliminated
                  </h5>
                  <ul className="space-y-3">
                    {[
                      { label: "Siloed Portals", desc: "Replaced by a unified multi-portal design system" },
                      { label: "Manual Onboarding", desc: "Replaced by guided self-service vendor flows" },
                      { label: "Fragmented Checkout", desc: "Replaced by single-cart, single-invoice experience" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                        <span><span className="font-semibold text-foreground">{item.label}:</span> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Wireframes & Prototyping ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Prototyping</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Wireframes & Prototyping</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Translated journey map insights into detailed wireframes for the most critical user flows — catalog browsing, dynamic bundling, and vendor dashboard management. Each screen went through multiple iteration cycles informed by stakeholder workshops and usability testing.
            </p>
          </AnimatedSection>

          <AnimatedSection className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-card border border-border/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-foreground">Core Workflows</h4>
                  <p className="text-sm text-muted-foreground mt-1">Iterative design cycles for the marketplace</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {wireframes.map((item, i) => (
                  <div key={i} className={`group/wf relative flex flex-col cursor-pointer`} onClick={() => setWireframeIndex(i)}>
                    <div className="w-full h-[250px] md:h-[300px] rounded-2xl border border-border/60 bg-secondary/20 overflow-hidden relative hover:border-primary/40 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5">
                      <img
                        src={item.src}
                        alt={item.label}
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover/wf:opacity-100 transition-transform duration-700 group-hover/wf:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover/wf:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/wf:opacity-100 transition-opacity duration-300 translate-y-4 group-hover/wf:translate-y-0">
                          <Search className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 text-xs font-semibold bg-background/90 backdrop-blur-md border border-border/50 rounded-full text-foreground shadow-sm flex items-center gap-2">
                          <Search className="w-3 h-3 text-primary" />
                          {item.label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Visual Design (Typography & Colors) ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">UI & Aesthetics</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Visual Design</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              The design system was built to reflect a modern, premium telecom enterprise application, utilizing high-contrast data visualizations and a trust-inspiring color palette.
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {/* Logo & Branding */}
            <AnimatedSection>
              <h4 className="font-display font-bold text-2xl mb-8 text-foreground flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                Logo & Branding
              </h4>

              <div className="grid md:grid-cols-12 gap-8 items-center bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-colors">
                <div className="md:col-span-5">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">Identity</div>
                  <h5 className="font-display text-3xl font-bold text-foreground mb-4">The Hypermart Identity</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    The WaveNet Hypermart visual identity is crafted to inspire trust, authority, and unified scalability. The logo rules establish strict guidelines for margins, minimum size, and co-branding lockups with telecommunication providers.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Clear space and placement instructions</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Standardized color specs for digital display</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Co-branding hierarchy guidelines</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 rounded-2xl overflow-hidden border border-border/40 bg-background/50 p-2">
                  <img
                    src={hypermartLogo}
                    alt="Hypermart Logo Usage Guide"
                    className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Typography */}
            <AnimatedSection>
              <h4 className="font-display font-bold text-2xl mb-8 text-foreground flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Type className="w-5 h-5 text-primary" />
                </div>
                Typography
              </h4>
              <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 hover:border-primary/50 transition-all mb-8">
                <div className="flex justify-between items-end mb-6 pb-4 border-b border-border/50">
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5">Universal Interface Font</div>
                    <div className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>Poppins</div>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl text-foreground/80 break-words leading-relaxed group-hover:text-primary transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                </div>
              </div>

              {/* Type Scale Card */}
              <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 hover:border-primary/50 transition-all group">
                <div className="flex justify-between items-end mb-8 pb-4 border-b border-border/50">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Type Scale</div>
                  <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">1.2 Minor Third</div>
                </div>
                <div className="space-y-6">
                  {[
                    { label: 'Display', size: '47.78px', rem: '2.986rem', weight: 'Bold' },
                    { label: 'Heading 1', size: '39.81px', rem: '2.488rem', weight: 'Bold' },
                    { label: 'Heading 2', size: '33.18px', rem: '2.074rem', weight: 'Semibold' },
                    { label: 'Heading 3', size: '27.65px', rem: '1.728rem', weight: 'Semibold' },
                    { label: 'Heading 4', size: '23.04px', rem: '1.440rem', weight: 'Medium' },
                    { label: 'Heading 5', size: '19.20px', rem: '1.200rem', weight: 'Medium' },
                    { label: 'Body', size: '16.00px', rem: '1.000rem', weight: 'Regular' },
                    { label: 'Caption', size: '13.33px', rem: '0.833rem', weight: 'Regular' },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/20 pb-4 last:border-0 last:pb-0 gap-3">
                      <div className="flex-1 overflow-hidden">
                        <div className="text-foreground truncate leading-none" style={{
                          fontSize: item.size,
                          fontWeight: item.weight === 'Bold' ? 700 : item.weight === 'Semibold' ? 600 : item.weight === 'Medium' ? 500 : 400,
                          fontFamily: "'Poppins', sans-serif"
                        }}>
                          {item.label}
                        </div>
                      </div>
                      <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-muted-foreground shrink-0 items-center">
                        <span className="w-20 text-foreground">{item.weight}</span>
                        <span className="w-20">{item.size}</span>
                        <span className="w-20 text-primary text-right">{item.rem}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Colors */}
            <AnimatedSection>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                <h4 className="font-display font-bold text-2xl text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Palette className="w-5 h-5 text-primary" />
                  </div>
                  Color Architecture
                </h4>
                {/* Theme Switcher */}
                <div className="flex items-center gap-2 p-2 bg-card border border-border/60 rounded-2xl shadow-sm">
                  <span className="text-xs font-semibold px-2 text-muted-foreground hidden sm:block">Customer Theme</span>
                  <div className="w-px h-5 bg-border/60 hidden sm:block" />
                  {customerThemes.map((theme) => (
                    <button
                      key={theme.name}
                      onClick={() => setActiveBrandColor(theme)}
                      title={theme.name}
                      className={`relative w-9 h-9 rounded-xl transition-all duration-300 flex items-center justify-center ${activeBrandColor.name === theme.name ? 'ring-2 ring-offset-2 ring-offset-card scale-110' : 'hover:scale-105 opacity-70 hover:opacity-100'}`}
                      style={{ backgroundColor: theme.primary, ['--tw-ring-color' as string]: theme.primary }}
                    >
                      {activeBrandColor.name === theme.name && (
                        <div className="w-2.5 h-2.5 rounded-full bg-white/90 shadow-sm" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

                {/* Hero Swatch — large */}
                <div className="lg:col-span-5 relative overflow-hidden rounded-3xl min-h-[320px] flex flex-col justify-between p-8 shadow-lg group">
                  <div className="absolute inset-0 transition-all duration-700" style={{ background: `linear-gradient(145deg, ${activeBrandColor.secondary} 0%, ${activeBrandColor.primary} 55%, ${activeBrandColor.accent} 100%)` }} />
                  {/* decorative circle */}
                  <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full opacity-20 transition-all duration-700" style={{ backgroundColor: activeBrandColor.accent }} />
                  <div className="relative z-10">
                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.25em]">Active Theme</span>
                    <div className="text-white text-2xl font-bold mt-1">{activeBrandColor.name}</div>
                  </div>
                  <div className="relative z-10">
                    <div className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Brand Palette</div>
                    <div className="flex gap-3">
                      {[activeBrandColor.primary, activeBrandColor.accent, activeBrandColor.focus, activeBrandColor.secondary].map((c, i) => (
                        <div key={i} className="w-10 h-10 rounded-xl border-2 border-white/30 shadow-md" style={{ backgroundColor: c }} title={c} />
                      ))}
                    </div>
                    <div className="font-mono text-white/80 text-sm mt-4 uppercase">{activeBrandColor.primary}</div>
                  </div>
                </div>

                {/* Right column: 3 stacked colour cards */}
                <div className="lg:col-span-7 grid grid-rows-3 gap-5">
                  {[
                    { label: "Core Brand Primary", role: "Buttons, links, CTAs", grad: `linear-gradient(135deg, ${activeBrandColor.secondary} 0%, ${activeBrandColor.primary} 100%)`, hex: activeBrandColor.primary },
                    { label: "Highlight / Accent", role: "Badges, highlights, icons", grad: `linear-gradient(135deg, ${activeBrandColor.primary} 0%, ${activeBrandColor.accent} 100%)`, hex: activeBrandColor.accent },
                    { label: "Primary Focus", role: "Hover, active & focus states", grad: `linear-gradient(135deg, ${activeBrandColor.focus} 0%, ${activeBrandColor.secondary} 100%)`, hex: activeBrandColor.focus },
                  ].map((card, i) => (
                    <div key={i} className="relative overflow-hidden rounded-2xl flex items-center gap-5 p-5 shadow-sm group hover:shadow-lg transition-all duration-500" style={{ background: card.grad }}>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300" />
                      <div className="w-12 h-12 rounded-xl border-2 border-white/30 shrink-0 shadow-md" style={{ backgroundColor: card.hex }} />
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-bold text-sm truncate">{card.label}</div>
                        <div className="text-white/70 text-xs mt-0.5 truncate">{card.role}</div>
                      </div>
                      <div className="font-mono text-white/80 text-sm uppercase shrink-0 hidden sm:block">{card.hex}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom row: Border & Text color palettes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                {[
                  {
                    label: "Border Colors",
                    swatches: [
                      { name: "Light", hex: "#F8FAFC" },
                      { name: "Medium", hex: "#E2E8F0" },
                      { name: "Dark", hex: "#94A3B8" },
                    ]
                  },
                  {
                    label: "Text Colors",
                    swatches: [
                      { name: "Headings", hex: "#1E293B" },
                      { name: "Paragraph", hex: "#334155" },
                      { name: "Muted", hex: "#94A3B8" },
                    ]
                  }
                ].map((group, gi) => (
                  <div key={gi} className="bg-card border border-border/50 rounded-3xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-5">{group.label}</div>
                    <div className="flex gap-3">
                      {group.swatches.map((s, si) => (
                        <div key={si} className="flex-1 group/swatch cursor-default">
                          <div
                            className="w-full h-16 rounded-xl border border-border/60 mb-3 group-hover/swatch:scale-105 group-hover/swatch:-translate-y-1 transition-all duration-300 shadow-sm"
                            style={{ backgroundColor: s.hex }}
                          />
                          <div className="text-xs font-semibold text-foreground truncate">{s.name}</div>
                          <div className="text-[10px] font-mono text-muted-foreground uppercase">{s.hex}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── High-Fidelity Screens ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="mb-12 md:mb-16 max-w-2xl">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Final UI</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6">High-Fidelity Developed Screens</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The final visual layer brings the marketplace to life. Every screen was crafted using the Poppins-based design system with white-label theming, ensuring consistency across operator brands while maintaining clear data visualization and intuitive interaction patterns.
            </p>
          </AnimatedSection>

          <div className="w-full pb-8 overflow-hidden">
            <AnimatedSection>
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full relative"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {hifiScreens.map((screen, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                      <div className="p-1">
                        <div
                          className="group relative rounded-[2rem] overflow-hidden border border-border/50 bg-card cursor-zoom-in aspect-[16/9] shadow-sm hover:shadow-md transition-shadow"
                          onClick={() => setHifiIndex(index)}
                        >
                          <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                          <img
                            src={screen.src}
                            alt={screen.label}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                            <h4 className="text-white font-display font-bold text-lg sm:text-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                              {screen.label}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-background/80 hover:bg-background border-border shadow-md" />
                <CarouselNext className="right-4 bg-background/80 hover:bg-background border-border shadow-md" />
              </Carousel>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Testing & Feedback ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

          {/* Header */}
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Validation</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Testing & Feedback</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6 mx-auto" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Iterative usability testing with global telecom partners refined every design layer — from catalog navigation patterns to vendor portal autonomy and checkout flow optimization.
            </p>
          </AnimatedSection>

          {/* Timeline cards */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                num: "01",
                icon: Coins,
                title: "Catalog & Discovery UX Validation",
                insight: "Search patterns drive adoption",
                body: "Usability testing of the unified catalog revealed that enterprise buyers relied heavily on filtering by asset type and provider. We redesigned the search and filter architecture to support faceted browsing across APIs, cloud services, and physical goods — reducing product discovery time by 70% and significantly improving task completion rates.",
              },
              {
                num: "02",
                icon: Box,
                title: "Bundling Workflow Iteration",
                insight: "Visual pairing reduces confusion",
                body: "Initial testing of the dynamic bundling engine showed that users struggled to understand compatibility between digital services and physical assets. We introduced visual compatibility indicators, guided bundling wizards, and contextual pairing suggestions — reducing bundle configuration errors and streamlining the path from selection to checkout.",
              },
              {
                num: "03",
                icon: Store,
                title: "Vendor Portal Autonomy",
                insight: "Self-service is non-negotiable",
                body: "Testing the multi-store capabilities with reseller partners showed that vendors required full autonomy over their storefronts while maintaining visual consistency with the operator brand. We enhanced the vendor portal with self-service product listing, independent analytics dashboards, and role-based access — all wrapped in the white-label design system.",
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 120} className="group">
                <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 hover:border-primary/30 hover:shadow-lg transition-all relative overflow-hidden">
                  {/* Background number */}
                  <span className="absolute top-6 right-8 font-display text-[5rem] sm:text-[7rem] font-bold text-border/30 leading-none pointer-events-none select-none group-hover:text-primary/10 transition-colors">{card.num}</span>

                  <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{card.title}</h4>
                        <span className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">{card.insight}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{card.body}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Summary stat strip */}
          <AnimatedSection delay={500} className="mt-14">
            <div className="grid grid-cols-3 border border-border/50 rounded-2xl overflow-hidden max-w-3xl mx-auto">
              {[
                { value: "3", label: "Validation rounds" },
                { value: "5+", label: "Telecom partners" },
                { value: "50+", label: "Iterations shipped" },
              ].map((stat, i) => (
                <div key={i} className={`p-6 sm:p-8 text-center ${i < 2 ? 'border-r border-border/50' : ''}`}>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ── Solution: Full Stack & Integration ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

          {/* Centered header */}
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Information Architecture</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Multi-portal design framework</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6 mx-auto" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Structured the marketplace into four distinct yet cohesive portals — each designed for specific user workflows while sharing a unified design system, navigation patterns, and visual language.
            </p>
          </AnimatedSection>

          {/* Architecture Flow Diagram (Desktop) */}
          <AnimatedSection delay={200} className="relative max-w-5xl mx-auto mb-20 hidden md:block py-8 mt-12">
            <div className="absolute inset-0 flex flex-col items-center justify-between py-20 pointer-events-none z-0">
              <div className="w-px h-32 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />
              <div className="w-px h-32 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />
            </div>

            {/* Level 1: Portals */}
            <div className="grid grid-cols-3 gap-6 mb-16 relative z-10">
              {[
                { icon: ShieldCheck, title: "Service Provider Portal", desc: "Global catalog management, compliance & revenue KPIs", color: "text-primary", border: "border-primary/30", bg: "bg-primary/5", line: "bg-primary" },
                { icon: Users, title: "Reseller Portal", desc: "Self-service storefront & independent product listing", color: "text-indigo-500", border: "border-indigo-500/30", bg: "bg-indigo-500/5", line: "bg-indigo-500" },
                { icon: LayoutDashboard, title: "Customer Portal", desc: "Unified discovery, bundling & single checkout", color: "text-green-500", border: "border-green-500/30", bg: "bg-green-500/5", line: "bg-green-500" },
              ].map((portal, i) => (
                <div key={i} className={`bg-card border ${portal.border} rounded-2xl p-6 text-center shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform`}>
                  <div className={`absolute top-0 left-0 w-full h-1 ${portal.line} opacity-80`} />
                  <div className={`w-12 h-12 mx-auto rounded-full ${portal.bg} flex items-center justify-center mb-4`}>
                    <portal.icon className={`w-6 h-6 ${portal.color}`} />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{portal.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{portal.desc}</p>
                </div>
              ))}
            </div>

            {/* Down Connector */}
            <div className="flex justify-center mb-6 relative z-0 -mt-10">
              <div className="w-[66%] h-12 border-b-2 border-l-2 border-r-2 border-primary/20 rounded-b-2xl" />
            </div>
            <div className="flex justify-center mb-6 relative z-0 -mt-8">
              <ArrowDown className="w-6 h-6 text-primary/50 animate-bounce" />
            </div>

            {/* Level 2: Core Engine */}
            <div className="bg-card border border-primary/30 rounded-3xl p-8 text-center max-w-2xl mx-auto mb-16 relative z-10 shadow-[0_0_40px_-15px_rgba(var(--primary),0.3)]">
              <div className="flex justify-center gap-6 mb-5">
                <Database className="w-8 h-8 text-primary" />
                <Workflow className="w-8 h-8 text-primary" />
                <Coins className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-display font-bold text-2xl mb-3 text-foreground">Unified Marketplace Engine</h4>
              <p className="text-sm text-muted-foreground px-8">Single multi-asset catalog, dynamic bundling logic, converged billing integration, and multi-cloud orchestration.</p>
            </div>

            {/* Down Connector */}
            <div className="flex justify-center mb-6 relative z-0 -mt-10">
              <ArrowDown className="w-6 h-6 text-primary/50 animate-bounce" />
            </div>
            <div className="flex justify-center mb-6 relative z-0 -mt-12">
              <div className="w-[75%] h-12 border-t-2 border-l-2 border-r-2 border-primary/20 rounded-t-2xl" />
            </div>

            {/* Level 3: Assets */}
            <div className="grid grid-cols-4 gap-4 relative z-10 -mt-8">
              {[
                { icon: Box, title: "Digital Assets", label: "APIs, FTTH, SDN" },
                { icon: Layers, title: "Digital Services", label: "VPNs, Video, Apps" },
                { icon: Package, title: "Physical Assets", label: "IoT, Routers, Hardware" },
                { icon: Cloud, title: "Cloud Services", label: "AWS, Azure, GCP" },
              ].map((asset, i) => (
                <div key={i} className="bg-background border border-border/50 rounded-xl p-5 flex flex-col items-center text-center hover:border-primary/30 transition-colors">
                  <asset.icon className="w-6 h-6 text-muted-foreground mb-3" />
                  <span className="font-semibold text-sm mb-1 text-foreground">{asset.title}</span>
                  <span className="text-[10px] text-muted-foreground">{asset.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Mobile Fallback (Cards) */}
          <div className="md:hidden space-y-6 mb-12">
            <AnimatedSection>
              <h4 className="font-display font-bold text-lg mb-4 text-foreground border-b border-border/50 pb-2">1. Access Portals</h4>
              <div className="grid gap-3">
                {[
                  { icon: ShieldCheck, title: "Service Provider Portal", desc: "Global catalog management & compliance" },
                  { icon: Users, title: "Reseller Portal", desc: "Self-service storefront & product listing" },
                  { icon: LayoutDashboard, title: "Customer Portal", desc: "Unified discovery & checkout" },
                ].map((portal, i) => (
                  <div key={i} className="bg-card border border-border/50 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <portal.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-foreground mb-1">{portal.title}</h5>
                      <p className="text-xs text-muted-foreground">{portal.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex justify-center py-2">
              <ArrowDown className="w-5 h-5 text-primary/50" />
            </AnimatedSection>

            <AnimatedSection>
              <h4 className="font-display font-bold text-lg mb-4 text-foreground border-b border-border/50 pb-2">2. Marketplace Engine</h4>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center shadow-inner">
                <Database className="w-6 h-6 text-primary mx-auto mb-3" />
                <h5 className="font-bold text-sm text-foreground mb-2">Unified Engine</h5>
                <p className="text-xs text-muted-foreground">Single multi-asset catalog, dynamic bundling, and converged billing.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex justify-center py-2">
              <ArrowDown className="w-5 h-5 text-primary/50" />
            </AnimatedSection>

            <AnimatedSection>
              <h4 className="font-display font-bold text-lg mb-4 text-foreground border-b border-border/50 pb-2">3. Managed Assets</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Box, title: "Digital Assets", label: "APIs, FTTH" },
                  { icon: Layers, title: "Digital Services", label: "VPNs, Video" },
                  { icon: Package, title: "Physical Assets", label: "IoT, Routers" },
                  { icon: Cloud, title: "Cloud Services", label: "AWS, Azure" },
                ].map((asset, i) => (
                  <div key={i} className="bg-card border border-border/50 rounded-xl p-3 flex flex-col items-center text-center">
                    <asset.icon className="w-5 h-5 text-muted-foreground mb-2" />
                    <span className="font-semibold text-xs mb-1 text-foreground">{asset.title}</span>
                    <span className="text-[10px] text-muted-foreground">{asset.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

        </div>
      </section>

      {/* ── Core Capabilities ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left intro */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Design Solutions</span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl leading-tight">Key UX capabilities designed for Hypermart</h3>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
              <p className="text-muted-foreground leading-relaxed">
                Each feature was designed with specific user workflows in mind — enabling intuitive bundling, seamless onboarding, and cohesive multi-vendor experiences.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                { icon: Package, title: "Dynamic bundling UX", desc: "Designed guided wizards with visual compatibility indicators for bundling digital services, cloud, and physical assets." },
                { icon: Users, title: "Partner onboarding flows", desc: "Created step-by-step self-service onboarding with progress tracking and contextual help for new vendors." },
                { icon: Store, title: "Multi-store architecture", desc: "Designed vendor storefronts with brand customization while maintaining marketplace-wide navigation consistency." },
                { icon: Coins, title: "Unified checkout & billing", desc: "Single-cart experience with integrated wallet payments, loyalty points, and consolidated invoicing." },
                { icon: Cloud, title: "Cloud provisioning dashboard", desc: "Real-time provisioning status views with automated orchestration for AWS, Azure, and GCP services." },
                { icon: Workflow, title: "AI voice navigation", desc: "Industry-first conversational interface guiding customers from product discovery through checkout and support." },
              ].map((feature, i) => (
                <AnimatedSection key={i} delay={i * 80} className="p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-md transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox Modal for Wireframes */}
      {wireframeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 sm:p-8 transition-opacity duration-300"
          onClick={() => setWireframeIndex(null)}
        >
          <button
            className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors text-foreground shadow-lg z-[101]"
            onClick={() => setWireframeIndex(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors text-foreground shadow-lg z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setWireframeIndex((prev) => prev !== null ? (prev > 0 ? prev - 1 : wireframes.length - 1) : null);
            }}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors text-foreground shadow-lg z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setWireframeIndex((prev) => prev !== null ? (prev < wireframes.length - 1 ? prev + 1 : 0) : null);
            }}
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <img
            key={wireframeIndex}
            src={wireframes[wireframeIndex].src}
            alt={wireframes[wireframeIndex].label}
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain border border-border/50 animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Lightbox Modal for HiFi Screens */}
      {hifiIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 sm:p-8 transition-opacity duration-300"
          onClick={() => setHifiIndex(null)}
        >
          <button
            className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors text-foreground shadow-lg z-[101]"
            onClick={() => setHifiIndex(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors text-foreground shadow-lg z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setHifiIndex((prev) => prev !== null ? (prev > 0 ? prev - 1 : hifiScreens.length - 1) : null);
            }}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors text-foreground shadow-lg z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setHifiIndex((prev) => prev !== null ? (prev < hifiScreens.length - 1 ? prev + 1 : 0) : null);
            }}
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <img
            key={hifiIndex}
            src={hifiScreens[hifiIndex].src}
            alt={hifiScreens[hifiIndex].label}
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain border border-border/50 animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── Outcomes / Impact ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

          {/* Outcome narrative */}
          <AnimatedSection delay={200} className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-16">
            <div className="lg:col-span-5">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Outcomes</span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl leading-tight">Impact & Results</h3>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.outcome}
              </p>
            </div>

            <div className="lg:col-span-7 grid gap-6">
              {[
                { label: "Unified Multi-Portal Experience", desc: "Designed four cohesive portals (admin, vendor, reseller, buyer) sharing a single design system — ensuring brand consistency while serving distinct user workflows across global telecom operators." },
                { label: "White-Label Design System", desc: "Built a scalable, token-based design system with Poppins typography and modular components that adapts to any operator brand, enabling 3x faster deployment for new marketplace instances." },
                { label: "Zero-Touch Provisioning UX", desc: "Designed fully automated onboarding and provisioning flows that eliminate manual configuration steps — reducing operational overhead and delivering instant service activation at checkout." },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={(i + 3) * 100} className="flex gap-5 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item.label}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommercePlatformPage;
