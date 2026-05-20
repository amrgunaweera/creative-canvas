import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import {
  ArrowLeft, Cloud, Server, Package, Globe, Mic,
  Workflow, Coins, Store, Network, Box, Layers, Users, ChevronRight,
  ShieldCheck, LayoutDashboard, MessageSquareText, Search, Database, 
  ClipboardCheck, TrendingUp, Sparkles, Cog, Headset, CheckCircle2, 
  Briefcase, Bell, FileSearch, MessageCircle, GraduationCap, 
  PhoneForwarded, Trophy, Lightbulb, Award, Type, Palette, Phone,
  AlertCircle, BarChart3, FileText, X, ArrowRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { projects } from "@/data/projects";
import wireframeCatalog from "@/assets/images/projects/ecommerce/wireframes/catalog.png";
import wireframeBundling from "@/assets/images/projects/ecommerce/wireframes/bundling.png";
import wireframeVendor from "@/assets/images/projects/ecommerce/wireframes/vendor.png";

import hifiCatalog from "@/assets/images/projects/ecommerce/hifi/catalog.png";
import hifiBundling from "@/assets/images/projects/ecommerce/hifi/bundling.png";
import hifiVendor from "@/assets/images/projects/ecommerce/hifi/vendor.png";
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

  const hifiScreens = [
    { src: hifiCatalog, label: "Catalog Interface" },
    { src: hifiBundling, label: "Bundling Workflow" },
    { src: hifiVendor, label: "Vendor Analytics Dashboard" },
  ];
  
  if (!project) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* ── Hero ── */}
      <section ref={heroRef} className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 relative overflow-hidden bg-background text-foreground">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 sm:mb-12">
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>

            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 xl:col-span-7">
                <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm">{project.category}</span>
                <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-4 leading-none">{project.title}</h1>
                <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">{project.fullDescription}</p>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Role", value: project.role },
                    { label: "Duration", value: project.duration },
                    { label: "Focus", value: "Telecom UX" },
                  ].map((m) => (
                    <div key={m.label} className="p-4 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-bold">{m.label}</div>
                      <div className="text-sm font-semibold text-foreground">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-secondary rounded-full text-xs sm:text-sm text-muted-foreground border border-border/40">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Right Hero Visual (Abstract) */}
              <div className="lg:col-span-5 xl:col-span-5 hidden lg:flex flex-col justify-center">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/5 rounded-full blur-3xl animate-pulse" />
                  <div className="relative z-10 w-full h-full border border-border/50 bg-card/30 backdrop-blur-xl rounded-[2.5rem] p-8 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
                     <Globe className="w-24 h-24 text-primary/40 mb-6" />
                     <div className="text-center space-y-4 w-full">
                       <div className="h-2 w-1/3 bg-primary/20 rounded-full mx-auto" />
                       <div className="h-2 w-1/2 bg-foreground/10 rounded-full mx-auto" />
                       <div className="h-2 w-2/5 bg-foreground/10 rounded-full mx-auto" />
                     </div>
                     
                     {/* Orbiting elements */}
                     <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-card border border-border/50 rounded-xl shadow-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '100ms' }}>
                        <Cloud className="w-5 h-5 text-blue-400" />
                     </div>
                     <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-card border border-border/50 rounded-xl shadow-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '300ms' }}>
                        <Package className="w-5 h-5 text-indigo-400" />
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Challenge ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative overflow-hidden bg-gradient-to-br from-secondary/40 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4 mt-2">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Problem Space</span>
              <h3 className="font-display font-bold text-4xl sm:text-5xl leading-tight">Monetize<br/>Beyond APIs</h3>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              {[
                { icon: Network, title: "Fragmented Ecosystems", desc: "Telecoms struggle with disconnected platforms for APIs, physical goods, and digital services." },
                { icon: Store, title: "Limited Monetization", desc: "Traditional systems are often limited to basic API calls, missing out on massive XaaS (Everything-as-a-Service) opportunities." },
                { icon: Server, title: "Multi-Cloud Complexity", desc: "No native support for seamless multi-cloud orchestration and cloud commerce reselling." },
                { icon: Users, title: "Partner Friction", desc: "Lengthy onboarding processes for vendors and disjointed journeys for enterprise customers." },
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
              We conducted extensive interviews with telecom operators, enterprise buyers, and independent vendors to understand the friction points in existing API and B2B monetization models.
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
                        <li>Over-reliance on API traffic</li>
                        <li>Stagnant revenue streams</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                        <li>Missed XaaS opportunities</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2 items-start">
                         <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                         <span className="text-sm font-medium text-foreground">Cloud reselling & dynamic bundling</span>
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
                        <li>Lengthy onboarding</li>
                        <li>Lack of independent stores</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                        <li>Slow time-to-market</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2 items-start">
                         <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                         <span className="text-sm font-medium text-foreground">Dedicated vendor portals</span>
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
                        <li>Disjointed shopping experiences</li>
                        <li>Fragmented billing</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                        <li>Poor customer experience</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2 items-start">
                         <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                         <span className="text-sm font-medium text-foreground">Unified catalog and single invoice</span>
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
                { icon: ShieldCheck, name: "Alex, Telecom Admin", role: "Service Provider Admin", color: "from-primary/10 to-primary/5", border: "border-primary/20", traits: ["Manages high-volume catalogs", "Oversees partner onboarding", "Tracks global revenue KPIs"], goal: "Streamline the orchestration of multi-asset digital services across regions." },
                { icon: Users, name: "Sarah, Partner Lead", role: "Independent Vendor / Reseller", color: "from-indigo-500/10 to-indigo-500/5", border: "border-indigo-500/20", traits: ["Sells third-party cloud apps", "Needs real-time billing clarity", "Seeks fast time-to-market"], goal: "Onboard new digital assets quickly and manage sales independently via a dedicated portal." },
                { icon: LayoutDashboard, name: "David, IT Procurement", role: "Enterprise B2B Buyer", color: "from-green-500/10 to-green-500/5", border: "border-green-500/20", traits: ["Procures cloud & IoT solutions", "Demands consolidated invoicing", "Values zero-touch provisioning"], goal: "Discover, bundle, and pay for diverse telecom and cloud assets through a single checkout." },
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
                We mapped the B2B buyer's journey to ensure a frictionless transition from product discovery to automated provisioning.
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
                         { actions: [{ icon: LayoutDashboard, text: "Access disparate legacy portals" }, { icon: Network, text: "Fragmented service discovery" }] },
                         { actions: [{ icon: FileSearch, text: "Search across multiple vendors" }, { icon: Layers, text: "Difficult to compare pricing" }] },
                         { actions: [{ icon: Package, text: "Struggle to bundle cloud + telco" }, { icon: AlertCircle, text: "Unclear compatibility" }] },
                         { actions: [{ icon: Search, text: "Intelligent search across catalog" }, { icon: Sparkles, text: "AI curates optimal services" }] },
                         { actions: [{ icon: Store, text: "Single cart for multiple vendors" }, { icon: Coins, text: "Pay with wallet & loyalty points" }] },
                         { actions: [{ icon: Cloud, text: "Automated cloud orchestration" }, { icon: Workflow, text: "No manual IT provisioning" }] },
                         { actions: [{ icon: FileText, text: "Consolidated single invoice" }, { icon: BarChart3, text: "Real-time usage tracking" }] },
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
                                                   { label: "Smart Discovery", desc: "Reduces product discovery time by 70%" },
                         { label: "Zero-Touch", desc: "Automated cloud and asset provisioning" },
                         { label: "Unified Checkout", desc: "Single invoice across multiple vendors" },
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
                         { label: "Fragmented Catalogs", desc: "Replaced by unified multi-vendor storefront" },
                         { label: "Manual Provisioning", desc: "Replaced by instant cloud orchestration" },
                         { label: "Complex Billing", desc: "Replaced by converged billing and wallet payments" },
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
                Based on our journey maps, we developed detailed wireframes focusing on the most critical interfaces. Each screen went through multiple rounds of iteration informed by stakeholder feedback.
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
               <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6">High-Fidelity Screens</h3>
               <p className="text-muted-foreground text-lg leading-relaxed">
                 The final visual layer brings the platform to life. We focused on clear data visualization, intuitive interactions, and a clean layout that lets the products shine, using the defined design system.
               </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {hifiScreens.map((screen, index) => (
                <AnimatedSection 
                  key={index} 
                  className={index === 0 ? 'md:col-span-12' : 'md:col-span-6'}
                >
                  <div 
                    className={`group relative rounded-[2rem] overflow-hidden border border-border/50 bg-card cursor-zoom-in ${
                      index === 0 ? 'aspect-[16/9]' : 'aspect-video'
                    }`}
                    onClick={() => setHifiIndex(index)}
                  >
                    <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={screen.src} 
                      alt={screen.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                      <h4 className="text-white font-display font-bold text-xl sm:text-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {screen.label}
                      </h4>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
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
                 Iterative validation with global telecom partners refined every layer of the marketplace — from pricing models to vendor autonomy.
               </p>
            </AnimatedSection>

            {/* Timeline cards */}
            <div className="space-y-6 max-w-4xl mx-auto">
               {[
                 {
                   num: "01",
                   icon: Coins,
                   title: "Monetization Strategy Validation",
                   insight: "Flexibility drives adoption",
                   body: "Testing various monetization models (subscription, pay-per-use) with global telecoms confirmed that flexibility is key to digital growth. We optimized the platform to support end-to-end monetization, allowing providers to tailor pricing strategies to specific market segments and partner needs.",
                 },
                 {
                   num: "02",
                   icon: Box,
                   title: "Multi-Asset & Cloud Bundling",
                   insight: "Unified catalog, diverse assets",
                   body: "Initial feedback from telecom partners on the EaaS model highlighted the need for intuitive bundling of diverse assets. We refined the subscription and content manager, allowing seamless grouping of digital services (APIs, Cloud, VPNs) with physical assets (IoT devices, Routers) and multi-cloud solutions into unified offerings.",
                 },
                 {
                   num: "03",
                   icon: Store,
                   title: "Vendor & Partner Ecosystem",
                   insight: "Autonomy within unity",
                   body: "Testing multi-store capabilities showed that vendors needed more autonomy while maintaining a unified shopping experience for end-users. We enhanced the reseller and admin portals, streamlining partner onboarding and providing advanced invoicing and consolidated cloud service payment systems.",
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
                  { value: "12+", label: "Telecom partners" },
                  { value: "40+", label: "Iterations shipped" },
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
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Platform Architecture</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Full-stack integration framework</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6 mx-auto" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Monetize beyond APIs with a multi-asset marketplace featuring a unified catalog of digital and physical goods &mdash; supported by a robust ecosystem for agile monetization.
            </p>
          </AnimatedSection>

          {/* Asset strip — numbered horizontal cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 rounded-3xl overflow-hidden mb-12">
            {[
              { icon: Box, num: "01", title: "Digital assets", desc: "FTTH, Data Centers, IoT Platforms, SDN, Gateways, Firewalls." },
              { icon: Layers, num: "02", title: "Digital services", desc: "LBS, VPNs, Cloud Services, Mobile Apps, Video Streaming." },
              { icon: Package, num: "03", title: "Physical assets", desc: "IoT Devices, Mobile Phones, Routers, Switches, and more." },
              { icon: Cloud, num: "04", title: "Cloud orchestration", desc: "Monetize Data Center and Public Cloud reselling." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80} className="bg-card p-8 flex flex-col group hover:bg-secondary/30 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-display text-3xl font-bold text-border/80 group-hover:text-primary/20 transition-colors">{item.num}</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>

          {/* Business System Portals */}
          <AnimatedSection delay={400} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Service provider admin portal", desc: "Full control over marketplace configuration, security, and compliance." },
              { icon: Users, title: "Reseller portal", desc: "Empower partners to manage their own sub-catalogs and sales channels." },
              { icon: LayoutDashboard, title: "Customer admin portal", desc: "Self-service management for enterprise buyers and subscriptions." },
            ].map((portal, i) => (
              <div key={i} className="flex items-start gap-5 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <portal.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{portal.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{portal.desc}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>

        </div>
      </section>

      {/* ── Core Capabilities ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left intro */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Core Capabilities</span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl leading-tight">Discover Wavenet's full-stack B2B/B2B2X Marketplace</h3>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
              <p className="text-muted-foreground leading-relaxed">
                Dynamic bundling, multi-asset monetization, and seamless integration to scale and grow new revenue streams.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                { icon: Package, title: "Advanced bundling", desc: "Intuitive subscription and content management tools to bundle digital services and physical assets." },
                { icon: Users, title: "Partner ecosystem", desc: "Streamlined partner onboarding to expand your sales channels through reseller networks." },
                { icon: Store, title: "Multi-store ready", desc: "Enable vendors to sell independently while maintaining a unified shopping experience." },
                { icon: Coins, title: "Invoicing & payments", desc: "Powerful self-service billing with integrated wallet payments and loyalty points." },
                { icon: Cloud, title: "Cloud monetization", desc: "Create new revenue streams by reselling multi-cloud services (AWS, Azure, GCP)." },
                { icon: Workflow, title: "API Marketplace", desc: "Full-service developer portal with flexible monetization strategies and usage tracking." },
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

            {/* Stat strip */}
            <AnimatedSection>
              <div className="grid grid-cols-2 md:grid-cols-4 border border-border/50 rounded-3xl overflow-hidden mb-16">
                {project.metrics?.map((metric, i) => (
                  <div key={i} className={`p-8 sm:p-10 text-center ${i < (project.metrics?.length ?? 0) - 1 ? 'border-b md:border-b-0 md:border-r border-border/50' : ''}`}>
                    <div className="font-display text-4xl sm:text-5xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Outcome narrative */}
            <AnimatedSection delay={200} className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-5">
                <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Outcomes</span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl leading-tight">Measurable Business Impact</h3>
                <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.outcome}
                </p>
              </div>

              <div className="lg:col-span-7 grid gap-6">
                {[
                  { label: "XaaS Enabled", desc: "Transitioned from simple APIs to full Everything-as-a-Service capabilities, enabling telecoms to monetize any digital or physical asset through a single unified platform." },
                  { label: "Multi-Cloud Commerce", desc: "Resell AWS, Azure, and Google Cloud through built-in orchestration, minimizing infrastructure costs while opening entirely new revenue streams." },
                  { label: "Zero-Touch Delivery", desc: "Fully automated onboarding, provisioning, and billing workflows — reducing operational overhead and accelerating time-to-revenue." },
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
