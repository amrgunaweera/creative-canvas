import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Layers, MessageSquare, Mic, Code2, Zap, Globe, BarChart3, Users, Bot, Workflow, Smartphone, Mail, Phone, CheckCircle2, Sparkles, Cog, TrendingUp, Shield, Lightbulb, Palette, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

import wireframe1 from "@/assets/images/projects/contact-center/wireframes/Home.jpg";
import wireframe2 from "@/assets/images/projects/contact-center/wireframes/Autopilot.jpg";
import wireframe3 from "@/assets/images/projects/contact-center/wireframes/Call Insights.jpg";

import hifi1 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 1.jpg";
import hifi2 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 2.jpg";
import hifi3 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 3.jpg";

const ChannelOrchestrationPage = () => {
  const project = projects.find((p) => p.id === "channel-orchestration");
  
  const [wireframeIndex, setWireframeIndex] = useState<number | null>(null);
  const [hifiIndex, setHifiIndex] = useState<number | null>(null);

  const [activeBrandColor, setActiveBrandColor] = useState({
    name: "Compose Blue",
    primary: "#3b82f6",
    secondary: "#2563eb",
    accent: "#60a5fa",
    focus: "#1d4ed8"
  });

  const customerThemes = [
    { name: "Compose Blue", primary: "#3b82f6", secondary: "#2563eb", accent: "#60a5fa", focus: "#1d4ed8" },
    { name: "Telecom Orange", primary: "#f97316", secondary: "#ea580c", accent: "#fb923c", focus: "#c2410c" },
    { name: "Enterprise Purple", primary: "#8b5cf6", secondary: "#7c3aed", accent: "#a78bfa", focus: "#6d28d9" },
  ];

  const wireframes = [
    { src: wireframe1, label: "Omnichannel Dashboard" },
    { src: wireframe2, label: "AI Flow Builder" },
    { src: wireframe3, label: "Channel Configuration" },
  ];

  const hifiScreens = [
    { src: hifi1, label: "Analytics Overview" },
    { src: hifi2, label: "Drag-and-Drop Workflow" },
    { src: hifi3, label: "Unified Agent Workspace" },
  ];

  if (!project) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 sm:mb-12 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Work
            </Link>
            <div className="max-w-3xl">
              <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm">{project.category}</span>
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">{project.title}</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed max-w-2xl">{project.fullDescription}</p>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center bg-card/80 backdrop-blur-xl rounded-3xl sm:rounded-full border border-border/50 shadow-lg max-w-fit overflow-hidden">
                <div className="px-6 sm:px-8 py-5">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">Role</div>
                  <div className="text-sm font-semibold text-foreground whitespace-nowrap">{project.role}</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border/50" />
                <div className="block sm:hidden w-full h-px bg-border/50" />
                <div className="px-6 sm:px-8 py-5">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">Duration</div>
                  <div className="text-sm font-semibold text-foreground whitespace-nowrap">{project.duration}</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border/50" />
                <div className="block sm:hidden w-full h-px bg-border/50" />
                <div className="px-6 sm:px-8 py-5">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">Tools</div>
                  <div className="text-sm font-semibold text-foreground leading-snug">{project.tools.join(", ")}</div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-secondary/50 backdrop-blur-md border border-border/50 rounded-full text-xs sm:text-sm text-foreground font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-border/50 relative overflow-hidden bg-gradient-to-br from-secondary/80 via-background to-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4 mt-12">
              <h3 className="font-display font-bold text-5xl uppercase tracking-tight leading-none">Challenge</h3>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Telecoms struggle with fragmented customer touchpoints across legacy and digital channels, resulting in disjointed experiences and slow time-to-market for new CX applications.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                { icon: Layers, num: "01", title: "Fragmented Channel Silos", desc: "Customer interactions scattered across SMS, IVR, WhatsApp, web chat, and email with no unified orchestration layer." },
                { icon: Code2, num: "02", title: "High Development Overhead", desc: "Building CX applications required extensive engineering effort with no low-code tooling for rapid prototyping." },
                { icon: Bot, num: "03", title: "Limited AI Integration", desc: "Existing platforms lacked native AI capabilities for personalization, NLP, and intelligent routing." },
                { icon: Globe, num: "04", title: "Legacy System Lock-in", desc: "Valuable legacy infrastructure (IVR, USSD) couldn't be extended to modern digital channels without costly rewrites." },
                { icon: Users, num: "05", title: "Inconsistent CX Across Channels", desc: "Customers experienced different service quality depending on which channel they used to reach support." },
                { icon: BarChart3, num: "06", title: "No Real-Time Analytics", desc: "Lack of unified monitoring across channels made it impossible to measure CX performance holistically." },
              ].map((item) => (
                <div key={item.num} className="relative p-6 sm:p-7 rounded-2xl bg-secondary/50 border border-border/40 overflow-hidden group hover:bg-secondary/80 transition-colors">
                  <span className="absolute top-3 right-4 font-display font-bold text-6xl sm:text-7xl text-foreground/[0.04] leading-none select-none">{item.num}</span>
                  <item.icon className="w-5 h-5 text-primary mb-4" />
                  <h4 className="font-semibold text-base sm:text-lg leading-snug">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Goals & Objectives */}
      <section className="py-16 sm:py-24 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4 mt-2">
              <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight">Goals &<br />Objectives</h2>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-foreground mb-8">
                Design a unified channel orchestration platform that empowers telecoms to build, deploy, and scale AI-powered CX applications across every customer touchpoint — from a single low-code environment.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {[
                  { num: "01", text: "Unify legacy and digital channels (SMS, IVR, WhatsApp, Messenger, Telegram, Viber, Email, Webchat) under a single orchestration dashboard with seamless context handoff." },
                  { num: "02", text: "Provide a low-code AI builder with pre-built templates, enabling rapid deployment of CX applications 3x faster while reducing engineering costs." },
                ].map((item) => (
                  <div key={item.num} className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <span className="font-bold text-primary">{item.num}</span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed relative z-10">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Deep Dive</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Research & Discovery</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We conducted extensive stakeholder interviews with telecom CX directors, platform engineers, and channel managers to understand how legacy and digital systems could be unified without disrupting existing service delivery.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Sparkles, title: "Omnichannel Unification", desc: "Connect SMS, USSD, IVR, Email, WhatsApp, Messenger, Telegram, Viber, Instagram, and Webchat from one platform with full context preservation." },
              { icon: Cog, title: "Low-Code AI Builder", desc: "Enable business teams to build and deploy CX applications using drag-and-drop workflows, pre-built templates, and embedded AI orchestration." },
              { icon: Users, title: "Seamless CX Continuity", desc: "Customers can start a conversation on chat, continue via email, and resolve over voice — without repeating themselves or losing context." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100} className="p-6 rounded-2xl bg-secondary/30 border border-border/40 hover:bg-secondary/60 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>

          {/* Platform Capabilities */}
          <AnimatedSection className="mt-16 bg-secondary/20 rounded-3xl p-8 sm:p-12 border border-border/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
              <div className="lg:col-span-4">
                <h4 className="font-display font-bold text-2xl sm:text-3xl leading-tight mb-4">Platform Capabilities</h4>
                <div className="w-8 h-[2px] bg-primary mb-6" />
                <p className="text-base text-muted-foreground leading-relaxed">
                  A comprehensive suite of AI-powered development tools designed for rapid CX application delivery across every customer channel.
                </p>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: Workflow, title: "AI Workflow Automation", desc: "Automate API generation, microservice configuration, and deployment pipelines for faster, more efficient builds." },
                  { icon: Smartphone, title: "Multi-Channel Deployment", desc: "Orchestrate AI-powered CX apps across chatbots, voice assistants, messaging platforms, and web portals seamlessly." },
                  { icon: BarChart3, title: "Real-Time Analytics", desc: "Monitor API performance, user engagement, and system health in real time with AI-powered actionable insights." },
                  { icon: Globe, title: "Multilingual NLP Support", desc: "Equip CX apps with accurate, automated support in multiple languages using advanced natural language processing." },
                ].map((item, i) => (
                  <div key={i} className={`bg-card hover:bg-card/80 transition-colors rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md group ${i % 2 === 1 ? 'sm:mt-8' : ''}`}>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <strong className="text-foreground block text-lg mb-2">{item.title}</strong>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Channel Integration Map */}
      <section className="py-16 sm:py-24 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Integration</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Seamless Channel Integration</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A unified approach connecting legacy systems with cutting-edge digital applications, enabling rapid transformation without losing existing investments.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { icon: MessageSquare, label: "SMS", color: "bg-blue-500/10 text-blue-500" },
                { icon: Phone, label: "USSD", color: "bg-purple-500/10 text-purple-500" },
                { icon: Mic, label: "IVR", color: "bg-amber-500/10 text-amber-500" },
                { icon: Mail, label: "Email", color: "bg-red-500/10 text-red-500" },
                { icon: MessageSquare, label: "Live Chat", color: "bg-green-500/10 text-green-500" },
                { icon: Globe, label: "Webchat", color: "bg-cyan-500/10 text-cyan-500" },
                { icon: MessageSquare, label: "WhatsApp", color: "bg-emerald-500/10 text-emerald-500" },
                { icon: MessageSquare, label: "Messenger", color: "bg-blue-600/10 text-blue-600" },
                { icon: MessageSquare, label: "Telegram", color: "bg-sky-500/10 text-sky-500" },
                { icon: MessageSquare, label: "Viber", color: "bg-violet-500/10 text-violet-500" },
                { icon: MessageSquare, label: "Instagram", color: "bg-pink-500/10 text-pink-500" },
                { icon: Layers, label: "Custom API", color: "bg-primary/10 text-primary" },
              ].map((ch, i) => (
                <div key={i} className="p-5 rounded-2xl bg-card border border-border/50 flex flex-col items-center gap-3 hover:border-primary/40 hover:shadow-md transition-all group">
                  <div className={`w-12 h-12 rounded-xl ${ch.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <ch.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{ch.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Voice & Text AI */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">AI Capabilities</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Voice & Text AI Automation</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection className="p-8 rounded-3xl bg-card border border-border/50 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Mic className="w-7 h-7 text-blue-500" />
              </div>
              <h4 className="font-display font-bold text-2xl mb-4">Voice Automation</h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Advanced voice AI agents that deliver seamless communication across channels. Built to handle customer interruptions with context and empathy, ensuring smooth transitions and effortlessly resuming previous conversations.
              </p>
              <div className="space-y-3">
                {["Context-aware interruption handling", "Emotional tone detection", "Seamless call-to-digital handoff"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="text-sm font-medium text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100} className="p-8 rounded-3xl bg-card border border-border/50 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-emerald-500" />
              </div>
              <h4 className="font-display font-bold text-2xl mb-4">Text Automation</h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dynamic, human-like text conversations powered by AI agents that intuitively listen, understand context, and deliver personalized responses tailored to individual needs across preferred channels.
              </p>
              <div className="space-y-3">
                {["Natural language understanding", "Personalized response generation", "Cross-channel conversation threading"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-16 sm:py-24 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">User Focus</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">User Personas</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We developed personas based on the key users interacting with the platform and the customers experiencing the end service, ensuring both developer efficiency and seamless CX.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Persona 1 */}
            <AnimatedSection delay={100} className="bg-card rounded-3xl border border-border/50 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
              <div className="p-6 sm:p-8 pb-4">
                <div className="flex items-center gap-4 mb-6 relative z-10 border-b border-border/50 pb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-primary/20 shadow-sm">
                    <img src="https://i.pravatar.cc/150?img=5" alt="Sarah Jenkins" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-foreground leading-snug">Sarah Jenkins</h5>
                    <div className="text-sm font-medium text-primary mb-0.5">CX Operations Manager</div>
                    <div className="text-xs font-medium text-muted-foreground">Age: 35 | Exp: 8+ years</div>
                  </div>
                </div>
                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Goals</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Unify customer experience</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Deploy flows without IT delay</span></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Pain Points</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Fragmented management tools</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Slow time-to-market</span></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">System Helps</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Drag-and-drop builder</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Unified analytics dashboard</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Persona 2 */}
            <AnimatedSection delay={200} className="bg-card rounded-3xl border border-border/50 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
              <div className="p-6 sm:p-8 pb-4">
                <div className="flex items-center gap-4 mb-6 relative z-10 border-b border-border/50 pb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-primary/20 shadow-sm">
                    <img src="https://i.pravatar.cc/150?img=11" alt="David Chen" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-foreground leading-snug">David Chen</h5>
                    <div className="text-sm font-medium text-primary mb-0.5">Integration Engineer</div>
                    <div className="text-xs font-medium text-muted-foreground">Age: 28 | Exp: 5+ years</div>
                  </div>
                </div>
                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Goals</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Connect legacy systems securely</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Maintain system reliability</span></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Pain Points</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Custom integrations for each app</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>API maintenance overhead</span></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">System Helps</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Single orchestration API layer</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Pre-built channel connectors</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Persona 3 */}
            <AnimatedSection delay={300} className="bg-card rounded-3xl border border-border/50 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
              <div className="p-6 sm:p-8 pb-4">
                <div className="flex items-center gap-4 mb-6 relative z-10 border-b border-border/50 pb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-primary/20 shadow-sm">
                    <img src="https://i.pravatar.cc/150?img=9" alt="Elena Rodriguez" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-foreground leading-snug">Elena Rodriguez</h5>
                    <div className="text-sm font-medium text-primary mb-0.5">End Customer</div>
                    <div className="text-xs font-medium text-muted-foreground">Age: 42 | Telecom Subscriber</div>
                  </div>
                </div>
                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Goals</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Resolve issues on first contact</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Use preferred channels (WhatsApp/Web)</span></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Pain Points</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Repeating info when switching channels</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Inconsistent bot interactions</span></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">System Helps</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Seamless context preservation</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>Intelligent, human-like AI responses</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Journey Map */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative overflow-hidden bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Process</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Omnichannel Customer Journey</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We mapped the customer journey to illustrate how Compose preserves context across multiple touchpoints, ensuring a frictionless experience from webchat to voice and finally to messaging.
            </p>
          </AnimatedSection>

          <AnimatedSection className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-card border border-border/40 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-foreground">Cross-Channel Context Handoff</h4>
                  <p className="text-sm text-muted-foreground mt-1">Tracking a complex support interaction powered by Compose AI</p>
                </div>
              </div>

              {/* Journey Stages */}
              <div className="overflow-x-auto pb-4 -mx-2 px-2">
                <div className="grid grid-cols-5 gap-3 min-w-[800px]">
                  {[
                    { title: "Initiation", emoji: "😟", color: "amber" },
                    { title: "Webchat AI", emoji: "😐", color: "amber" },
                    { title: "Voice Escalation", emoji: "😊", color: "green" },
                    { title: "Resolution", emoji: "😁", color: "green" },
                    { title: "Follow-Up", emoji: "😍", color: "green" },
                  ].map((stage, i) => (
                    <div key={i} className="group/stage">
                      <div className="bg-secondary/50 rounded-xl px-3 py-2.5 text-center mb-4 border border-border/50">
                        <span className="font-bold text-xs sm:text-sm leading-tight block text-foreground">{stage.title}</span>
                      </div>
                      <div className="flex justify-center mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-sm border-2 transition-transform group-hover/stage:scale-110 ${stage.color === 'green' ? 'bg-green-100 border-green-300' : 'bg-amber-100 border-amber-300'}`}>
                          {stage.emoji}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Connecting Line */}
                <div className="relative min-w-[800px] h-8 my-2">
                  <svg className="w-full h-full" viewBox="0 0 800 32" fill="none" preserveAspectRatio="none">
                    <path d="M 80 24 Q 160 24, 240 16 Q 320 8, 400 12 Q 480 16, 560 8 Q 640 4, 720 4" stroke="currentColor" className="text-primary/40" strokeWidth="2" strokeDasharray="6 4" fill="none" />
                  </svg>
                </div>

                {/* Details */}
                <div className="grid grid-cols-5 gap-3 min-w-[800px]">
                  {[
                    { actions: [{ icon: Smartphone, text: "Customer faces billing issue" }, { icon: MessageSquare, text: "Opens webchat on portal" }] },
                    { actions: [{ icon: Bot, text: "Compose AI handles intent" }, { icon: Layers, text: "Issue requires human auth" }] },
                    { actions: [{ icon: Phone, text: "Seamless transfer to IVR" }, { icon: Zap, text: "Agent sees full chat history" }] },
                    { actions: [{ icon: CheckCircle2, text: "Agent resolves without repeating info" }, { icon: Mic, text: "AI analyzes voice sentiment" }] },
                    { actions: [{ icon: MessageSquare, text: "Automated WhatsApp summary" }, { icon: BarChart3, text: "CSAT score recorded (5/5)" }] },
                  ].map((stage, i) => (
                    <div key={i} className="space-y-3">
                      {stage.actions.map((action, j) => (
                        <div key={j} className="bg-background rounded-xl p-3 border border-border/50 shadow-sm">
                          <div className="flex items-start gap-2">
                            <action.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs font-medium text-muted-foreground leading-snug">{action.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Wireframes & Prototyping ── */}
      <section className="py-16 sm:py-24 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="mb-12 max-w-3xl">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Structure</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6">Wireframes & Prototyping</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We mapped out the core user flows, focusing on the low-code builder and analytics dashboard. The goal was to simplify complex orchestration logic into intuitive visual nodes.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wireframes.map((wf, index) => (
              <AnimatedSection key={index} delay={index * 100} className="group">
                <div 
                  className="rounded-3xl overflow-hidden border border-border/50 bg-secondary/20 aspect-video cursor-zoom-in relative"
                  onClick={() => setWireframeIndex(index)}
                >
                  <img 
                    src={wf.src} 
                    alt={wf.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm text-sm">View Details</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-semibold text-foreground">{wf.label}</h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visual Design & UI System ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-background">
         <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
         <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <AnimatedSection className="mb-16 max-w-3xl">
               <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Aesthetics</span>
               <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6">Visual Design System</h3>
               <p className="text-muted-foreground text-lg leading-relaxed">
                 The Compose platform uses a sleek, dark-mode native design system built for prolonged use. It features high-contrast data visualizations, distinct semantic colors for different channels, and scalable typography.
               </p>
            </AnimatedSection>

            <div className="space-y-16">
               {/* Typography */}
               <AnimatedSection>
                  <div className="flex items-center gap-4 mb-8 border-b border-border/50 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="font-serif italic text-primary text-xl">T</span>
                    </div>
                    <h4 className="font-display font-bold text-2xl text-foreground">Typography System</h4>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-colors">
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Display / Headings</div>
                      <div className="font-display text-5xl sm:text-6xl text-foreground mb-4">Inter</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Used for primary headings, section titles, and key metric displays. Provides a clean, modern geometric structure that maintains legibility at large sizes.
                      </p>
                    </div>
                    <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-colors">
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Interface / Body</div>
                      <div className="font-sans text-5xl sm:text-6xl text-foreground mb-4">Roboto</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        The workhorse of the UI. Used for dense data tables, node configurations, and general interface text where readability at small sizes is critical.
                      </p>
                    </div>
                  </div>
               </AnimatedSection>

               {/* Colors */}
               <AnimatedSection>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 border-b border-border/50 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Palette className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-display font-bold text-2xl text-foreground">Color Architecture</h4>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-card border border-border/60 rounded-2xl shadow-sm">
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

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-5 relative overflow-hidden rounded-3xl min-h-[320px] flex flex-col justify-between p-8 shadow-lg group">
                      <div className="absolute inset-0 transition-all duration-700" style={{ background: `linear-gradient(145deg, ${activeBrandColor.secondary} 0%, ${activeBrandColor.primary} 55%, ${activeBrandColor.accent} 100%)` }} />
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

      {/* Use Cases */}
      <section className="py-16 sm:py-24 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Real-World Impact</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Use Cases</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: MessageSquare, title: "Omnichannel Support Tickets", desc: "A customer initiates a support request via chat and continues the conversation through email or voice, without losing context, all within a unified ticketing system." },
              { icon: Smartphone, title: "Self-Service Portal", desc: "Empower customers to manage accounts, view billing statements, update personal details, and troubleshoot service issues through an omnichannel self-service portal." },
              { icon: TrendingUp, title: "Personalized Upsell Campaigns", desc: "Send personalized upgrade offers based on customer usage or behavior via email, SMS, in-app messages, or push notifications driven by AI insights." },
              { icon: Shield, title: "Real-Time Order Tracking", desc: "Provide real-time order updates across channels (email, SMS, mobile app, WhatsApp), allowing customers to track shipments or report issues seamlessly." },
            ].map((uc, i) => (
              <AnimatedSection key={i} delay={i * 100} className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform">
                  <uc.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{uc.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      {project.metrics && (
        <section className="py-16 sm:py-24 border-t border-border/50 bg-gradient-to-br from-secondary/50 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <AnimatedSection className="text-center mb-12">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">Results</span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl mt-3">Impact & Outcomes</h3>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.metrics.map((m, i) => (
                <AnimatedSection key={i} delay={i * 100} className="text-center p-6 rounded-2xl bg-card border border-border/50">
                  <div className="font-display font-bold text-3xl sm:text-4xl text-primary mb-2">{m.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{m.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-24 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <Lightbulb className="w-10 h-10 text-primary mx-auto mb-6" />
            <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-4">Interested in this project?</h3>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how unified channel orchestration and AI-driven CX platforms can transform your customer engagement strategy.
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />

      {/* Wireframe Modal */}
      {wireframeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/90 backdrop-blur-sm" onClick={() => setWireframeIndex(null)}>
          <button 
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setWireframeIndex(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-7xl w-full max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={wireframes[wireframeIndex].src} 
              alt={wireframes[wireframeIndex].label}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-center translate-y-full">
              <h3 className="text-white font-display text-2xl font-bold">{wireframes[wireframeIndex].label}</h3>
            </div>
          </div>
        </div>
      )}

      {/* HiFi Modal */}
      {hifiIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/90 backdrop-blur-sm" onClick={() => setHifiIndex(null)}>
          <button 
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setHifiIndex(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-7xl w-full max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={hifiScreens[hifiIndex].src} 
              alt={hifiScreens[hifiIndex].label}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-center translate-y-full">
              <h3 className="text-white font-display text-2xl font-bold">{hifiScreens[hifiIndex].label}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChannelOrchestrationPage;
