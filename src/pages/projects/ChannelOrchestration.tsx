import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Layers, MessageSquare, Mic, Code2, Zap, Globe, BarChart3, Users, Bot, Workflow, Smartphone, Mail, Phone, CheckCircle2, Sparkles, Cog, TrendingUp, Shield, Lightbulb, Palette, X, ChevronLeft, ChevronRight, Play, Bell, Folder, Home, FileText, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

import wireframe1 from "@/assets/images/projects/contact-center/wireframes/Home.jpg";
import wireframe2 from "@/assets/images/projects/contact-center/wireframes/Autopilot.jpg";
import wireframe3 from "@/assets/images/projects/contact-center/wireframes/Call Insights.jpg";
import composeLogo from "@/assets/images/projects/compose/Compose-logo-usage.jpg";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const composeImagesRaw = import.meta.glob('@/assets/images/projects/compose/screens/*.png', { eager: true, import: 'default' });
const hifiScreens = Object.entries(composeImagesRaw).map(([path, src]: [string, any]) => {
  const filename = path.split('/').pop()?.replace('.png', '') || '';
  const parts = filename.split(' - ');
  const label = parts.length > 2 ? parts.slice(1, -1).join(' - ') : (parts[1] || filename);
  return { src: src as string, label };
});

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
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="lg:col-span-6">
                <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm">{project.category}</span>
                <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">{project.title}</h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">{project.fullDescription}</p>
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

              {/* Right Column - Floating Canvas Composition matching the user's reference image */}
              <div className="lg:col-span-6 hidden lg:block">
                <div className="relative w-full h-[580px] flex items-center justify-center animate-fade-up-delay-2" style={{ perspective: '1600px' }}>
                  
                  {/* Backdrop glowing ambient circles */}
                  <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[80px] pointer-events-none animate-pulse-slow" />
                  <div className="absolute bottom-1/4 right-1/4 w-[280px] h-[280px] rounded-full bg-primary/10 blur-[90px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

                  {/* Main Isometric/Tilted Laptop Canvas Frame */}
                  <div 
                    className="absolute w-[520px] h-[370px] rounded-2xl bg-card border border-border/80 shadow-2xl overflow-hidden animate-float-slow transition-all duration-500 hover:rotate-y-[6deg]"
                    style={{ 
                      transform: 'rotateY(-12deg) rotateX(10deg) rotateZ(-3deg) scale(0.98)', 
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 40px 80px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    {/* Top Window Bar */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
                      <div className="flex items-center gap-6">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        {/* Title bar elements */}
                        <div className="flex items-center gap-2 text-white/50 text-[10px] font-semibold">
                          <ArrowLeft className="w-3 h-3 text-white/40" />
                          <span>Professional</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-500/80 animate-ping" />
                        <span className="text-[9px] text-orange-500/80 font-bold uppercase tracking-wider">Live Workspace</span>
                      </div>
                    </div>

                    {/* Window Workspace Body */}
                    <div className="flex h-[325px]">
                      {/* Sidebar */}
                      <div className="w-12 border-r border-border bg-muted/10 py-5 flex flex-col items-center gap-5 shrink-0">
                        <div className="w-7 h-7 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 shadow-sm shadow-orange-500/10 border border-orange-500/20">
                          <Home className="w-3.5 h-3.5" />
                        </div>
                        <div className="w-7 h-7 rounded-xl bg-white/[0.02] flex items-center justify-center text-white/40 border border-transparent hover:border-white/10 hover:text-white/70 transition-all cursor-pointer">
                          <FileText className="w-3.5 h-3.5" />
                        </div>
                        <div className="w-7 h-7 rounded-xl bg-white/[0.02] flex items-center justify-center text-white/40 border border-transparent hover:border-white/10 hover:text-white/70 transition-all cursor-pointer">
                          <MessageSquare className="w-3.5 h-3.5" />
                        </div>
                        <div className="w-7 h-7 rounded-xl bg-white/[0.02] flex items-center justify-center text-white/40 border border-transparent hover:border-white/10 hover:text-white/70 transition-all cursor-pointer">
                          <Folder className="w-3.5 h-3.5" />
                        </div>
                        <div className="w-7 h-7 rounded-xl bg-white/[0.02] flex items-center justify-center text-white/40 border border-transparent hover:border-white/10 hover:text-white/70 transition-all cursor-pointer">
                          <Globe className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Main Canvas Area (Grid Background) */}
                      <div className="flex-1 p-5 relative overflow-hidden bg-[#0a0f18]/30" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
                        
                        {/* "Scennhers" Top Node Box */}
                        <div className="w-[180px] p-3 rounded-xl bg-card/60 backdrop-blur-md border border-border/80 shadow-md space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-white/80 tracking-wide uppercase">Subscriber Flow</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          </div>
                          
                          {/* Mini Avatar and Waveform */}
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 relative overflow-hidden">
                              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" className="w-full h-full object-cover" />
                              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-amber-500 border border-card" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="h-1.5 w-16 bg-white/10 rounded" />
                              <div className="h-1 w-10 bg-white/5 rounded" />
                            </div>
                          </div>

                          {/* Action Slider */}
                          <div className="space-y-1 pt-1">
                            <div className="h-1 w-full bg-white/10 rounded-full relative">
                              <div className="absolute top-1/2 -translate-y-1/2 left-[30%] w-2 h-2 rounded-full bg-blue-500 shadow shadow-blue-500/50" />
                              <div className="absolute top-1/2 -translate-y-1/2 left-[70%] w-1.5 h-1.5 rounded-full bg-blue-400" />
                            </div>
                          </div>
                        </div>

                        {/* "Mvurplains" Bottom Node Box */}
                        <div className="absolute bottom-5 left-5 w-[160px] p-3 rounded-xl bg-card/60 backdrop-blur-md border border-border/80 shadow-md space-y-2 pt-2.5">
                          <div className="h-1.5 w-12 bg-white/30 rounded" />
                          <div className="h-1 w-20 bg-white/10 rounded" />
                          <div className="flex items-center justify-between pt-1">
                            <div className="h-4 w-12 rounded bg-white/5 border border-white/10" />
                            <div className="px-2 py-1 rounded bg-blue-500 text-[8px] font-bold text-white shadow shadow-blue-500/30 flex items-center justify-center">
                              Run
                            </div>
                          </div>
                        </div>

                        {/* Canvas Flow Connection Path */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                          <path d="M 120 70 Q 180 70, 200 120 T 260 160" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
                          <path d="M 90 120 Q 90 220, 220 220" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Overlapping Dark Flow Map Card (Back Center) */}
                  <div 
                    className="absolute w-[220px] h-[160px] rounded-xl bg-slate-950/90 backdrop-blur-xl border border-white/5 shadow-2xl p-4 animate-float-reverse transition-all duration-300 hover:scale-105"
                    style={{ 
                      transform: 'translate3d(-20px, 40px, 60px) rotateY(-8deg) rotateX(10deg) rotateZ(-2deg)', 
                      transformStyle: 'preserve-3d',
                      zIndex: 20
                    }}
                  >
                    <div className="flex items-center gap-1.5 mb-2.5 pb-1.5 border-b border-white/5">
                      <Workflow className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-[9px] font-bold text-white/50 tracking-wider uppercase">Orchestration Graph</span>
                    </div>

                    {/* Nodes map preview */}
                    <div className="relative w-full h-[90px] rounded-lg bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center">
                      <div className="absolute top-3 left-4 w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-blue-400" />
                      </div>
                      <div className="absolute top-12 left-16 w-3 h-3 rounded-full bg-violet-500/20 border border-violet-500/50 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-violet-400" />
                      </div>
                      <div className="absolute bottom-3 right-5 w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-emerald-400" />
                      </div>

                      {/* Connection Graph Lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <line x1="22" y1="18" x2="68" y2="54" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
                        <line x1="76" y1="54" x2="152" y2="78" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1" />
                        <path d="M 22 18 Q 70 10, 152 78" fill="none" stroke="rgba(251, 191, 36, 0.2)" strokeWidth="1" strokeDasharray="2 2" />
                      </svg>

                      {/* Status pill */}
                      <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[7px] text-blue-400 font-bold uppercase tracking-wider">
                        Active Node
                      </div>
                    </div>
                  </div>

                  {/* Overlapping White Dialog/Modal Card (Front Center) - EXACT MATCH */}
                  <div 
                    className="absolute w-[290px] h-[190px] rounded-xl bg-white border border-slate-200 shadow-2xl p-4 animate-float-medium transition-all duration-300 hover:scale-105"
                    style={{ 
                      transform: 'translate3d(60px, 30px, 120px) rotateY(-12deg) rotateX(12deg) rotateZ(-3deg)', 
                      transformStyle: 'preserve-3d',
                      zIndex: 30,
                      animationDelay: '1.2s'
                    }}
                  >
                    {/* Title Header */}
                    <div className="flex items-center gap-1.5 mb-3.5 text-slate-800">
                      <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center">
                        <Bot className="w-2.5 h-2.5 text-slate-600" />
                      </div>
                      <span className="text-[10px] font-bold tracking-tight text-slate-700">AI Prompt Config</span>
                    </div>

                    <div className="flex gap-4">
                      {/* Left Side: Mock Forms, Slider & Buttons */}
                      <div className="flex-1 space-y-2.5">
                        {/* Mock Text Fields */}
                        <div className="space-y-1">
                          <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                          <div className="h-1.5 w-[85%] bg-slate-100 rounded-full" />
                          <div className="h-1.5 w-[60%] bg-slate-100 rounded-full" />
                        </div>

                        {/* Custom Slider */}
                        <div className="py-1">
                          <div className="h-1 w-full bg-slate-100 rounded-full relative">
                            <div className="absolute top-1/2 -translate-y-1/2 left-[60%] w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm border border-white cursor-pointer" />
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-2 pt-2.5">
                          <button className="flex-1 py-1 px-2 rounded-md bg-blue-600 hover:bg-blue-700 text-[8px] font-bold text-white shadow-sm shadow-blue-500/20 transition-all">
                            Configure
                          </button>
                          <button className="flex-1 py-1 px-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-[8px] font-bold text-white shadow-sm shadow-emerald-500/20 transition-all">
                            Active
                          </button>
                        </div>
                      </div>

                      {/* Right Side: Portrait Image */}
                      <div className="w-[85px] shrink-0">
                        <div className="w-[85px] h-[95px] rounded-lg overflow-hidden border border-slate-100 bg-slate-50 shadow-sm relative group/avatar">
                          <img 
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" 
                            alt="AI Persona" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/avatar:scale-110" 
                          />
                          <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Play Button Accent Card (Top Center) */}
                  <div 
                    className="absolute w-[95px] h-[65px] rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-2xl p-2 animate-float-fast flex flex-col justify-between"
                    style={{ 
                      transform: 'translate3d(-80px, -110px, 90px) rotateY(-8deg) rotateX(10deg) rotateZ(-1deg)',
                      zIndex: 25,
                      animationDelay: '0.4s'
                    }}
                  >
                    <div className="h-1 w-8 bg-white/20 rounded" />
                    <div className="flex items-center justify-center py-1">
                      <div className="w-7 h-7 rounded-full bg-blue-500 hover:bg-blue-600 transition-all shadow-md shadow-blue-500/40 flex items-center justify-center cursor-pointer">
                        <Play className="w-3.5 h-3.5 fill-white text-white translate-x-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Connected Logic Nodes (Right Side of Overlay Card) */}
                  
                  {/* Notification bubble (White background card) */}
                  <div
                    className="absolute w-[130px] rounded-lg bg-white border border-slate-200/90 shadow-xl p-2.5 animate-float-slow flex items-start gap-2"
                    style={{ 
                      transform: 'translate3d(230px, -60px, 80px) rotateY(-10deg) rotateX(8deg) rotateZ(-2deg)', 
                      zIndex: 35,
                      animationDelay: '1.6s'
                    }}
                  >
                    <div className="w-6 h-6 rounded-md bg-amber-100 flex items-center justify-center shrink-0 relative">
                      <Bell className="w-3 h-3 text-amber-600" />
                      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping" />
                    </div>
                    <div className="flex-1 min-w-0 space-y-0.5">
                      <div className="text-[7.5px] font-bold text-slate-800 uppercase tracking-wider">Alert Trigger</div>
                      <div className="text-[6.5px] text-slate-400 truncate">Escalated to voice</div>
                    </div>
                  </div>

                  {/* Blue Star Node Badge */}
                  <div
                    className="absolute w-8 h-8 rounded-lg bg-blue-500/10 backdrop-blur-md border border-blue-500/30 shadow-lg flex items-center justify-center animate-float-medium"
                    style={{ 
                      transform: 'translate3d(230px, 50px, 50px) rotateY(-8deg)', 
                      zIndex: 22,
                      animationDelay: '0.8s'
                    }}
                  >
                    <Star className="w-4 h-4 text-blue-400 fill-blue-400" />
                  </div>

                  {/* Red Square Badge with Shape */}
                  <div
                    className="absolute w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-500 to-orange-500 border border-white/20 shadow-xl flex items-center justify-center animate-float-fast hover:scale-110 transition-transform cursor-pointer"
                    style={{ 
                      transform: 'translate3d(280px, 120px, 40px) rotateY(-10deg) rotateZ(5deg)', 
                      zIndex: 23,
                      animationDelay: '2.1s'
                    }}
                  >
                    <Zap className="w-4 h-4 text-white fill-white" />
                  </div>

                  {/* Yellow key/icon badge */}
                  <div
                    className="absolute w-7 h-7 rounded-lg bg-amber-500 border border-white/20 shadow-xl flex items-center justify-center animate-float-reverse cursor-pointer"
                    style={{ 
                      transform: 'translate3d(220px, 160px, 30px) rotateY(-8deg) rotateZ(-3deg)', 
                      zIndex: 21,
                      animationDelay: '1.4s'
                    }}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>

                  {/* Animated Connecting lines on the right side of the canvas */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 15 }}>
                    {/* Connection between Dialog and Notification Alert */}
                    <path d="M 330 260 C 370 240, 420 180, 440 180" fill="none" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
                    {/* Connection between Dialog and Blue Star */}
                    <path d="M 330 290 Q 380 290, 430 300" fill="none" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.2" />
                    {/* Connection between Blue Star and Red Badge */}
                    <path d="M 445 320 L 485 365" fill="none" stroke="rgba(244, 63, 94, 0.4)" strokeWidth="1.2" />
                    {/* Connection between Blue Star and Yellow Badge */}
                    <path d="M 445 320 L 420 380" fill="none" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>

                </div>
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
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-orange-500" />
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

      {/* Omnichannel & AI Automation */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Omnichannel & AI Engine</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Unified Channels & AI Automation</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Unifying legacy communications with digital channels and powering them with state-of-the-art conversational voice and text AI.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left side: Channel Integration Grid */}
            <AnimatedSection className="lg:col-span-6 h-full flex flex-col">
              <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/50 h-full flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-xl sm:text-2xl mb-2">Seamless Channel Integration</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Connect legacy protocols with modern chat networks to route interactions dynamically.
                  </p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {[
                    { icon: MessageSquare, label: "SMS", color: "bg-orange-500/10 text-orange-500" },
                    { icon: Phone, label: "USSD", color: "bg-orange-500/10 text-orange-500" },
                    { icon: Mic, label: "IVR", color: "bg-orange-500/10 text-orange-500" },
                    { icon: Mail, label: "Email", color: "bg-orange-500/10 text-orange-500" },
                    { icon: MessageSquare, label: "Live Chat", color: "bg-orange-500/10 text-orange-500" },
                    { icon: Globe, label: "Webchat", color: "bg-orange-500/10 text-orange-500" },
                    { icon: MessageSquare, label: "WhatsApp", color: "bg-orange-500/10 text-orange-500" },
                    { icon: MessageSquare, label: "Messenger", color: "bg-orange-500/10 text-orange-500" },
                    { icon: MessageSquare, label: "Telegram", color: "bg-orange-500/10 text-orange-500" },
                    { icon: MessageSquare, label: "Viber", color: "bg-orange-500/10 text-orange-500" },
                    { icon: MessageSquare, label: "Instagram", color: "bg-orange-500/10 text-orange-500" },
                    { icon: Layers, label: "Custom API", color: "bg-orange-500/10 text-orange-500" },
                  ].map((ch, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-secondary/30 border border-border/40 flex flex-col items-center gap-2 hover:border-orange-500/40 hover:bg-secondary/50 hover:shadow-sm transition-all group cursor-default">
                      <div className={`w-9 h-9 rounded-lg ${ch.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        <ch.icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-foreground text-center truncate w-full">{ch.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
 
            {/* Right side: Voice & Text AI Cards */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Voice Card */}
              <AnimatedSection delay={50} className="flex-1 flex flex-col h-full">
                <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/50 relative overflow-hidden group hover:shadow-lg transition-all h-full flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -mr-8 -mt-8" />
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                        <Mic className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-display font-bold text-xl sm:text-2xl">Voice Automation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      Advanced voice AI agents that handle natural conversations, customer interruptions, and seamless handoffs with empathy and context.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {["Context-aware interruption", "Emotional tone detection", "Seamless call-to-digital"].map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span className="text-[12px] font-medium text-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
 
              {/* Text Card */}
              <AnimatedSection delay={100} className="flex-1 flex flex-col h-full">
                <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/50 relative overflow-hidden group hover:shadow-lg transition-all h-full flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -mr-8 -mt-8" />
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-display font-bold text-xl sm:text-2xl">Text Automation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      Dynamic text conversations powered by LLM agents that listen, understand intent, and deliver personalized responses across your customer's favorite apps.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {["Natural language understanding", "Personalized responses", "Cross-channel threading"].map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span className="text-[12px] font-medium text-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
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
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Unify customer experience</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Deploy flows without IT delay</span></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Pain Points</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Fragmented management tools</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Slow time-to-market</span></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">System Helps</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Drag-and-drop builder</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Unified analytics dashboard</span></li>
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
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Connect legacy systems securely</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Maintain system reliability</span></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Pain Points</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Custom integrations for each app</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>API maintenance overhead</span></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">System Helps</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Single orchestration API layer</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Pre-built channel connectors</span></li>
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
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Resolve issues on first contact</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Use preferred channels (WhatsApp/Web)</span></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Pain Points</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Repeating info when switching channels</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Inconsistent bot interactions</span></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">System Helps</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Seamless context preservation</span></li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" /><span>Intelligent, human-like AI responses</span></li>
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
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-orange-500" />
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
                    <path d="M 80 24 Q 160 24, 240 16 Q 320 8, 400 12 Q 480 16, 560 8 Q 640 4, 720 4" stroke="currentColor" className="text-orange-500/40" strokeWidth="2" strokeDasharray="6 4" fill="none" />
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
                            <action.icon className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
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

      {/* ── Key Features Designed ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 bg-secondary/5 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
          <AnimatedSection className="mb-16 max-w-3xl">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Architectural Blueprint</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6">Key Features Designed</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We translated Global WaveNet's robust AI Orchestration and Digital Channel Integration capabilities into high-fidelity user flows, focusing on developer speed, real-time analytics, and visual low-code logic.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1: Low-Code AI Builder */}
            <AnimatedSection className="group relative bg-card border border-border/50 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/5 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Workflow className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-orange-500 transition-colors">Low-Code AI Orchestrator</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Designed a drag-and-drop visual logic canvas enabling teams to orchestrate and deploy complex AI workflows without writing extensive code, dramatically speeding up time-to-market.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Visual Nodes</span>
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Draggable Canvas</span>
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Zero-Code Deploy</span>
              </div>
            </AnimatedSection>

            {/* Feature 2: Omnichannel Channel Integration */}
            <AnimatedSection className="group relative bg-card border border-border/50 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/5 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between" delay={100}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-orange-500 transition-colors">Unified Omnichannel Connectivity</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Structured interfaces to bridge legacy channels (SMS, USSD, IVR, Email) with modern messaging channels (WhatsApp, Live Chat, Telegram, Instagram, Messenger, Viber) in one cohesive workspace.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Legacy + Digital</span>
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Unified Inbox</span>
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Multi-Channel Routing</span>
              </div>
            </AnimatedSection>

            {/* Feature 3: Conversational Voice & Text AI */}
            <AnimatedSection className="group relative bg-card border border-border/50 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/5 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between" delay={200}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-orange-500 transition-colors">Voice & Text Automation</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Crafted UX flows for advanced voice and text AI agents that maintain conversational continuity, handle interruptions with empathy, and deliver highly contextual, personalized responses.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">NLP Engine</span>
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Interrupt Handling</span>
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Empathy-Aware</span>
              </div>
            </AnimatedSection>

            {/* Feature 4: Centralized Orchestration Dashboard */}
            <AnimatedSection className="group relative bg-card border border-border/50 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/5 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between" delay={300}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-orange-500 transition-colors">Real-Time Analytics Dashboard</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Designed real-time monitoring interfaces for API health, system resource usage, developer activity logs, and unified customer journey analytics across disparate communication nodes.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">API Monitoring</span>
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Customer Journeys</span>
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Live Diagnostics</span>
              </div>
            </AnimatedSection>

            {/* Feature 5: AI Workflow Automation */}
            <AnimatedSection className="group relative bg-card border border-border/50 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/5 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between" delay={400}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-orange-500 transition-colors">AI Workflow Automation</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Automated repetitive operations like API generation, microservice configuration, and deployments to achieve 5x faster development cycles and minimize developer overhead.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Auto-API Generation</span>
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Microservices</span>
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Continuous Sync</span>
              </div>
            </AnimatedSection>

            {/* Feature 6: Pre-Built Use Case Templates */}
            <AnimatedSection className="group relative bg-card border border-border/50 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/5 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between" delay={500}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-orange-500 transition-colors">Ready-to-Use Templates</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Created an extensive system of UI templates for common telco and customer service use cases (e.g. self-service, ticketing, upselling campaigns) that boost time-to-market by 3x.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Pre-Configured Flows</span>
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Multi-Language NLP</span>
                <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full text-foreground/80 font-medium">Instant Spin Up</span>
              </div>
            </AnimatedSection>
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
                {/* Logo & Branding */}
                <AnimatedSection>
                  <div className="flex items-center gap-4 mb-8 border-b border-border/50 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-orange-500" />
                    </div>
                    <h4 className="font-display font-bold text-2xl text-foreground">Logo & Branding</h4>
                  </div>
                  
                  <div className="grid md:grid-cols-12 gap-8 items-center bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-colors">
                    <div className="md:col-span-5">
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">Identity</div>
                      <h5 className="font-display text-3xl font-bold text-foreground mb-4">The Compose Logo</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        The Compose visual identity represents omnichannel fluidity, connection, and low-code simplicity. The logo uses geometric precision and consistent spacing guidelines to maintain integrity across print, web, and UI applications.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                           <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                          <span>Strict exclusion zone guidelines</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                           <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                          <span>Optimized for dark mode background environments</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                           <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                          <span>Scalable SVG and pixel-perfect fallback options</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-7 rounded-2xl overflow-hidden border border-border/40 bg-background/50 p-2">
                      <img 
                        src={composeLogo} 
                        alt="Compose Logo Usage Guide" 
                        className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  </div>
               </AnimatedSection>
 
               {/* Typography */}
               <AnimatedSection>
                  <div className="flex items-center gap-4 mb-8 border-b border-border/50 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      <span className="font-serif italic text-orange-500 text-xl">T</span>
                    </div>
                    <h4 className="font-display font-bold text-2xl text-foreground">Typography System</h4>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-colors">
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Display / Headings</div>
                      <div className="font-display text-5xl sm:text-6xl text-foreground mb-4">Work Sans</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Used for primary headings, section titles, and key metric displays. Provides a clean, modern geometric structure that maintains legibility at large sizes.
                      </p>
                    </div>
                    <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-colors">
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Interface / Body</div>
                      <div className="font-sans text-5xl sm:text-6xl text-foreground mb-4">Geist</div>
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
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                        <Palette className="w-5 h-5 text-orange-500" />
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

               {/* Iconography */}
               <AnimatedSection>
                  <div className="flex items-center gap-4 mb-8 border-b border-border/50 pb-4 mt-8">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-orange-500" />
                    </div>
                    <h4 className="font-display font-bold text-2xl text-foreground">Iconography</h4>
                  </div>
                  
                  <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col lg:flex-row gap-10 items-center">
                      <div className="lg:w-1/3 w-full">
                        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">Icon Library</div>
                        <h5 className="font-display text-3xl font-bold text-foreground mb-4">Tabler Icons</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          The platform utilizes the Tabler Icons library to ensure visual consistency and clarity across all interfaces. The icons are drawn on a 24x24 grid with a consistent 2px stroke width, providing a clean, modern, and scalable visual language that pairs perfectly with our typography.
                        </p>
                      </div>
                      <div className="lg:w-2/3 w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                        {[
                          { icon: Layers, name: "Layers" },
                          { icon: Users, name: "Users" },
                          { icon: Cog, name: "Settings" },
                          { icon: Workflow, name: "Workflow" },
                          { icon: MessageSquare, name: "Message" },
                          { icon: Bot, name: "Bot" },
                          { icon: Phone, name: "Phone" },
                          { icon: Globe, name: "Globe" },
                          { icon: BarChart3, name: "Analytics" },
                          { icon: Smartphone, name: "Mobile" },
                          { icon: Shield, name: "Security" },
                          { icon: Zap, name: "Triggers" }
                        ].map((item, i) => (
                           <div key={i} className="flex flex-col items-center justify-center gap-3 p-4 bg-background rounded-2xl border border-border/50 hover:border-orange-500/50 hover:shadow-sm transition-all group">
                             <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-orange-500 transition-colors stroke-[1.5px]" />
                             <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">{item.name}</span>
                           </div>
                        ))}
                      </div>
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
         </div>
            
         <div className="w-full px-4 sm:px-8 lg:px-12 pb-8 overflow-hidden">
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
      </section>

      {/* ── Testing & Feedback ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="grid lg:grid-cols-12 gap-8 lg:gap-16">

            {/* Left: Section Header */}
            <div className="lg:col-span-4 mt-2">
              <span className="text-orange-500 font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                Validation
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Testing &<br />Feedback
              </h3>
              <div className="w-10 h-[3px] bg-orange-500 mt-6 mb-6" />
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pr-4">
                Every design decision was validated through structured UAT sessions, real operator pilots, and continuous feedback loops with telecom teams — ensuring the platform genuinely improves CX workflows at scale.
              </p>
            </div>

            {/* Right: Testing Cards */}
            <div className="lg:col-span-8 space-y-6">

              {/* UAT Sessions */}
              <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground">Operator UAT Sessions</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Conducted structured user acceptance testing with CX teams and contact center supervisors from three tier-1 telecom operators. Sessions uncovered friction in flow authoring, channel-switching latency expectations, and AI confidence display requirements that directly shaped the final node canvas design.
                    </p>
                    <div className="mt-4 grid sm:grid-cols-3 gap-3">
                      {[
                        { metric: "3", label: "Telecom Operators" },
                        { metric: "40+", label: "CX Agents Tested" },
                        { metric: "6 Weeks", label: "Pilot Duration" },
                      ].map((s, i) => (
                        <div key={i} className="bg-secondary/30 rounded-xl px-4 py-3 border border-border/30 text-center">
                          <div className="text-lg font-display font-bold text-orange-500">{s.metric}</div>
                          <div className="text-xs text-muted-foreground">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stakeholder Feedback Loop */}
              <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-foreground">Stakeholder Feedback Themes</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Feedback from product owners, CX directors, and integration engineers was synthesised into three core design improvement themes:
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { label: "Flow Readability", detail: "Supervisors needed to scan complex AI flows at a glance — we redesigned node labels, grouping, and minimap density." },
                        { label: "Channel Context", detail: "Agents switching from voice to chat expected preserved intent — we added cross-channel context inheritance to the AI engine." },
                        { label: "Confidence Transparency", detail: "Teams wanted to know why the AI chose a response — we exposed confidence scores and intent reasoning inline." },
                      ].map((item, i) => (
                        <div key={i} className="bg-secondary/30 rounded-xl p-4 border border-border/30">
                          <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Design Iterations */}
              <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground">Key Design Iterations</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Based on UAT insights, we shipped three major design iterations before go-live:
                    </p>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-2" />
                        <span><strong className="text-foreground">Canvas Node Redesign</strong> — Replaced generic connector blocks with labelled, colour-coded channel nodes after testing revealed agents couldn't distinguish SMS from WhatsApp paths in complex flows.</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-2" />
                        <span><strong className="text-foreground">AI Response Preview Panel</strong> — Introduced a live response simulator in the flow editor after QA teams reported deploying untested bot responses to production environments.</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-2" />
                        <span><strong className="text-foreground">Role-Based Dashboard Defaults</strong> — Rebuilt the analytics home screen with persona-specific defaults after discovering supervisors and agents had conflicting metric priorities.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </AnimatedSection>
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
              <AnimatedSection key={i} delay={i * 100} className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-orange-500/30 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform">
                  <uc.icon className="w-5 h-5 text-orange-500" />
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
            <Lightbulb className="w-10 h-10 text-orange-500 mx-auto mb-6" />
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
          
          <button 
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setWireframeIndex(wireframeIndex === 0 ? wireframes.length - 1 : wireframeIndex - 1);
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setWireframeIndex(wireframeIndex === wireframes.length - 1 ? 0 : wireframeIndex + 1);
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="relative max-w-7xl w-full max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={wireframes[wireframeIndex].src} 
              alt={wireframes[wireframeIndex].label}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
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
          
          <button 
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setHifiIndex(hifiIndex === 0 ? hifiScreens.length - 1 : hifiIndex - 1);
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setHifiIndex(hifiIndex === hifiScreens.length - 1 ? 0 : hifiIndex + 1);
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="relative max-w-7xl w-full max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={hifiScreens[hifiIndex].src} 
              alt={hifiScreens[hifiIndex].label}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChannelOrchestrationPage;
