import { Link } from "react-router-dom";
import {
  ArrowLeft, Activity, Radio, Map, FileText, Mic2, Ambulance,
  ShieldCheck, TrendingUp, CheckCircle2, Search, BarChart3,
  Zap, Globe, Clock, Users, Layers, Wifi, BrainCircuit, Target,
  Pen, Layout, Smartphone, Monitor, Stethoscope,
  HeartPulse, Phone, Bell, Navigation2, ClipboardCheck, Lightbulb,
  ArrowRight, Palette, Type, Eye, Grid3X3, Contrast,
} from "lucide-react";
import healthcareMockup from "@/assets/images/projects/healthcare/Mockup.jpg";
import mediwaveLogo from "@/assets/images/projects/healthcare/mediwave-logo-usage.jpg";
import Navigation from "@/components/Navigation";

import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

const HealthcareAppPage = () => {
  const project = projects.find((p) => p.id === "healthcare-app");
  if (!project) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* ── Hero ── */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 relative overflow-hidden bg-background text-foreground">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-red-500/8 blur-[120px]" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 sm:mb-12">
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>

            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 xl:col-span-6">
                <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm">{project.category}</span>
                <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-4 leading-none">{project.title}</h1>
                <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">{project.fullDescription}</p>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Role", value: project.role },
                    { label: "Duration", value: project.duration },
                    { label: "Tools", value: project.tools.join(", ") },
                  ].map((m) => (
                    <div key={m.label} className="p-4 rounded-2xl bg-card border border-border/50">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{m.label}</div>
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

              {/* Right bento */}
              <div className="lg:col-span-5 xl:col-span-6 grid grid-cols-2 gap-4 content-start">
                <div className="col-span-2 h-48 rounded-3xl bg-gradient-to-br from-red-500/15 via-primary/15 to-primary/5 border border-border/40 flex items-center justify-center relative overflow-hidden">
                  <Ambulance className="w-20 h-20 text-primary/25" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/40" />
                  <div className="absolute bottom-4 left-5">
                    <div className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Mediwave · MediRescue</div>
                    <div className="text-sm font-semibold text-foreground mt-0.5">Transforming the Golden Hour</div>
                  </div>
                </div>
                {[
                  { icon: Ambulance, label: "Ambulances", value: "322+" },
                  { icon: Clock, label: "Avg Response", value: "15m 32s" },
                  { icon: TrendingUp, label: "Lives Impacted", value: "2M+" },
                  { icon: Globe, label: "Global Reach", value: "GLOMO '24" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-2xl bg-card border border-border/50 flex flex-col gap-2">
                    <item.icon className="w-5 h-5 text-primary" />
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</div>
                    <div className="text-lg font-bold text-foreground">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Challenge ── */}
      <section className="py-12 sm:py-16 border-t border-border/50 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Problem Space</span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none mb-4">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: FileText, num: "01", title: "Documentation Overload", desc: "Paramedics spent 3–5 hours daily on manual paperwork, diverting focus from patient care." },
              { icon: Radio, num: "02", title: "Fragmented Comms", desc: "No reliable channel between field responders and emergency departments caused critical gaps." },
              { icon: Clock, num: "03", title: "The Golden Hour", desc: "Delayed response and resource dispatch decisions put patients at risk in the first 60 minutes." },
              { icon: Map, num: "04", title: "Inefficient Dispatch", desc: "Manual ambulance coordination led to suboptimal routing and uneven fleet utilization." },
              { icon: Activity, num: "05", title: "No Advance Data", desc: "Hospitals received patients with no prior clinical info, slowing emergency triage." },
              { icon: Wifi, num: "06", title: "Disconnected Teams", desc: "EMS practitioners lacked remote specialist support for complex cases outside hospitals." },
            ].map((item, i) => (
              <AnimatedSection key={item.num} delay={i * 50} className="p-4 sm:p-5 rounded-2xl bg-secondary/30 border border-border/40 flex gap-4 items-start group hover:bg-secondary/60 hover:border-primary/30 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-background border border-border/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-muted-foreground/50 tracking-wider">{item.num}</span>
                    <h4 className="font-bold text-sm text-foreground">{item.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Goals & Objectives ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left side: Heading */}
            <AnimatedSection className="lg:col-span-5">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Strategy</span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">Goals &<br />Objectives</h3>
              <div className="w-12 h-[3px] bg-primary mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                To address the critical breakdowns in the pre-hospital care journey, we defined a clear set of primary objectives aimed at restoring focus to patient care and significantly reducing the golden hour delays.
              </p>
            </AnimatedSection>

            {/* Right side: Goals Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Zap, title: "Zero Data Entry", desc: "Eliminate manual form-filling for paramedics through AI-driven voice transcription, saving 3+ hours daily." },
                { icon: Radio, title: "Real-time Connectivity", desc: "Bridge the communication gap by providing live audio-visual feeds from the field to ED specialists." },
                { icon: TrendingUp, title: "Optimised Dispatch", desc: "Reduce average ambulance dispatch and response times through automated, GIS-based fleet coordination." },
                { icon: ShieldCheck, title: "Clinical Readiness", desc: "Ensure emergency departments receive structured patient data prior to arrival for immediate triage." },
              ].map((goal, i) => (
                <AnimatedSection key={goal.title} delay={i * 100} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <Target className="w-24 h-24 text-primary" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors relative z-10">
                    <goal.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-foreground relative z-10">{goal.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{goal.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Research & Discovery ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">

          <AnimatedSection className="mb-12 max-w-3xl">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Discovery</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Research & Discovery</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              We embedded with paramedics, EMS coordinators, and emergency physicians across Sri Lanka and Australia to map the real pressures and breakdowns in pre-hospital care delivery.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: Search, title: "Field Research", stat: "40+", statLabel: "EMS practitioners shadowed", desc: "Rode with paramedics and observed dispatch coordinators to understand workflows, stressors, and moments where information gaps led to poor outcomes." },
              { icon: BarChart3, title: "Process Audits", stat: "3–5h", statLabel: "Daily doc time wasted", desc: "Audited documentation workflows across multiple EMS agencies. Quantified the documentation burden as the single largest drag on clinical productivity." },
              { icon: Users, title: "Stakeholder Interviews", stat: "60+", statLabel: "Interviews conducted", desc: "Spoke with EMTs, paramedics, ED physicians, EMS directors, and national health ministry representatives to align on system-wide goals and constraints." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100} className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-display font-bold text-primary mb-1">{item.stat}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">{item.statLabel}</div>
                <h4 className="font-bold text-lg mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>

          {/* Stakeholder Pain Points */}
          <AnimatedSection className="mt-16 pt-12 border-t border-border/50">
            <div className="max-w-3xl mb-10">
              <h4 className="font-display font-bold text-2xl mb-4 text-foreground">Stakeholder Pain Points</h4>
              <p className="text-muted-foreground leading-relaxed">Our research uncovered systemic inefficiencies that compromised patient outcomes and staff productivity across the emergency ecosystem.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: FileText, title: "Documentation Friction", desc: "Paramedics were forced to use paper forms in moving vehicles, leading to incomplete or illegible medical records and hours of wasted post-shift work." },
                { icon: Radio, title: "Communication Gaps", desc: "Voice-only radio communication led to critical information being lost or misunderstood during high-stress transfers between field and hospital." },
                { icon: Activity, title: "Data Blindness", desc: "ER teams operated with no advance knowledge of incoming patients, resulting in delays of life-saving treatments as they triaged upon arrival." },
                { icon: BarChart3, title: "Operational Opacity", desc: "A lack of centralized tracking meant response times were unauditable and fleet distribution was often suboptimal for regional coverage." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2 text-foreground">{item.title}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* User Personas */}
          <AnimatedSection className="mt-16 pt-12 border-t border-border/50">
            <div className="max-w-3xl mb-10">
              <h4 className="font-display font-bold text-2xl mb-4 text-foreground">User Personas</h4>
              <p className="text-muted-foreground leading-relaxed">Three core user archetypes shaped every design decision — each operating in vastly different environments and under different pressure profiles.</p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: Ambulance, name: "Marcus, EMT", role: "Field Paramedic", color: "from-red-500/10 to-red-500/5", border: "border-red-500/20", traits: ["Works in moving vehicle", "Gloves on during documentation", "Needs one-handed operation"], goal: "Document patient vitals and care actions hands-free without slowing treatment" },
              { icon: Map, name: "Priya, EMS Director", role: "Dispatch Coordinator", color: "from-primary/10 to-primary/5", border: "border-primary/20", traits: ["Monitors 50+ active units", "Makes real-time dispatch decisions", "Tracks response time KPIs"], goal: "Assign the nearest available ambulance to an incident within seconds" },
              { icon: Activity, name: "Dr. Rajan, ED Lead", role: "Emergency Physician", color: "from-amber-500/10 to-amber-500/5", border: "border-amber-500/20", traits: ["Receives patients from field", "Needs advance medical history", "Connects with paramedics remotely"], goal: "View incoming patient vitals before ambulance arrival to prepare the ED" },
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

          {/* ── Ideation & Design Process ── */}
          <AnimatedSection className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t border-border/50">
            <div className="mb-10 sm:mb-14 max-w-3xl">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                Process
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Ideation & Design Process
              </h3>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                From field observations to production-ready interfaces, our design process was built around rapid iteration cycles grounded in real-world EMS workflows. We mapped critical user journeys and validated every screen in the back of moving ambulances.
              </p>
            </div>
          </AnimatedSection>




          {/* Paramedic Response Journey Map */}
          <div className="space-y-10">
            <AnimatedSection className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-secondary/10 border border-border/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Map className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-bold text-foreground">Paramedic Response Journey Map</h4>
                    <p className="text-sm text-muted-foreground mt-1">Tracking the emotional arc of an EMT through a MediRescue-powered response</p>
                  </div>
                </div>

                {/* Journey Stages */}
                <div className="overflow-x-auto pb-4 -mx-2 px-2">
                  <div className="grid grid-cols-7 gap-3 min-w-[900px]">
                    {[
                      { title: "Dispatch Alert", emoji: "😐", color: "amber" },
                      { title: "En Route", emoji: "😟", color: "red" },
                      { title: "On Scene", emoji: "😰", color: "red" },
                      { title: "Voice Capture", emoji: "😊", color: "green" },
                      { title: "AR Guidance", emoji: "😊", color: "green" },
                      { title: "Pre-Arrival Data", emoji: "😁", color: "green" },
                      { title: "Handoff", emoji: "😁", color: "green" },
                    ].map((stage, i) => (
                      <div key={i} className="group/stage">
                        <div className="bg-red-400 text-red-900 rounded-xl px-3 py-2.5 text-center mb-4">
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

                  {/* Connecting Sentiment Line */}
                  <div className="relative min-w-[900px] h-8 my-2">
                    <svg className="w-full h-full" viewBox="0 0 900 32" fill="none" preserveAspectRatio="none">
                      <path d="M 64 16 Q 128 20, 192 24 Q 256 28, 320 28 Q 384 24, 448 12 Q 512 8, 576 6 Q 640 4, 704 4 Q 768 2, 836 2" stroke="currentColor" className="text-primary/40" strokeWidth="2" strokeDasharray="6 4" fill="none" />
                    </svg>
                  </div>

                  {/* Stage Details */}
                  <div className="grid grid-cols-7 gap-3 min-w-[900px]">
                    {[
                      {
                        actions: [
                          { icon: Bell, text: "ERMS assigns nearest ambulance" },
                          { icon: Navigation2, text: "GIS routing calculates optimal path" },
                        ]
                      },
                      {
                        actions: [
                          { icon: Clock, text: "Countdown to golden hour begins" },
                          { icon: Radio, text: "Limited patient info from dispatch" },
                        ]
                      },
                      {
                        actions: [
                          { icon: Stethoscope, text: "Assess patient vitals & condition" },
                          { icon: FileText, text: "Paper forms in moving vehicle" },
                        ]
                      },
                      {
                        actions: [
                          { icon: Mic2, text: "Smart EMS captures verbal notes" },
                          { icon: ClipboardCheck, text: "SOAP/CHART report auto-generated" },
                        ]
                      },
                      {
                        actions: [
                          { icon: Monitor, text: "HoloLens connects to ED specialist" },
                          { icon: HeartPulse, text: "Real-time vitals streamed to hospital" },
                        ]
                      },
                      {
                        actions: [
                          { icon: Wifi, text: "ePCR transmitted to receiving ED" },
                          { icon: Activity, text: "ED begins pre-arrival triage prep" },
                        ]
                      },
                      {
                        actions: [
                          { icon: Ambulance, text: "Seamless patient handoff" },
                          { icon: TrendingUp, text: "Golden hour: response in 11m 38s" },
                        ]
                      },
                    ].map((stage, i) => (
                      <div key={i} className="space-y-3">
                        {stage.actions.map((action, j) => (
                          <div key={j} className="bg-card rounded-xl p-3 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200">
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

                {/* Bottom Summary Cards */}
                <div className="grid md:grid-cols-2 gap-6 mt-10">
                  <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                    <h5 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-green-600" />
                      MediRescue Impact Points
                    </h5>
                    <ul className="space-y-3">
                      {[
                        { label: "Voice Capture", desc: "Eliminates 3–5 hrs daily documentation" },
                        { label: "Pre-Arrival Data", desc: "ED receives vitals before ambulance arrives" },
                        { label: "AR Guidance", desc: "Specialist-level care from the field" },
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
                      <Clock className="w-5 h-5 text-red-600" />
                      Pain Points Eliminated
                    </h5>
                    <ul className="space-y-3">
                      {[
                        { label: "Paper Forms", desc: "Replaced by hands-free voice transcription" },
                        { label: "Radio-Only Comms", desc: "AR video consultation with specialists" },
                        { label: "Blind Arrivals", desc: "Structured ePCR data sent ahead" },
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

            {/* Information Architecture */}
            <AnimatedSection className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-card border border-border/50 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-bold text-foreground">Information Architecture</h4>
                    <p className="text-sm text-muted-foreground mt-1">Mapping the four product pillars into a unified ecosystem</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  Each product in the MediRescue suite was designed to serve a specific persona while sharing a common data layer. This architecture ensures that clinical data flows seamlessly from the ambulance to the emergency department.
                </p>

                {/* Architecture Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      product: "Smart EMS",
                      icon: Mic2,
                      persona: "Marcus, EMT",
                      tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
                      screens: ["Voice Recording Interface", "SOAP Report Generator", "CHART Format Preview", "Offline Sync Manager"],
                    },
                    {
                      product: "Connected Ambulance",
                      icon: Wifi,
                      persona: "Marcus, EMT + Dr. Rajan",
                      tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
                      screens: ["HoloLens AR Overlay", "Video Consultation View", "Vital Signs Dashboard", "Remote Instruction Panel"],
                    },
                    {
                      product: "ePCR",
                      icon: FileText,
                      persona: "Marcus, EMT → Dr. Rajan",
                      tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
                      screens: ["Patient Intake Form", "Vitals Entry (one-handed)", "Pre-Arrival Summary", "Offline Data Queue"],
                    },
                    {
                      product: "ERMS",
                      icon: Map,
                      persona: "Priya, EMS Director",
                      tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
                      screens: ["GIS Fleet Map", "Dispatch Assignment Panel", "Incident Monitor", "KPI Analytics Dashboard"],
                    },
                  ].map((item, i) => (
                    <AnimatedSection key={i} delay={i * 80} className="bg-secondary/30 rounded-2xl p-6 border border-border/40 hover:border-primary/30 transition-all group">
                      <div className="flex items-start gap-4 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-bold text-lg text-foreground">{item.product}</h5>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${item.tagColor}`}>{item.persona}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {item.screens.map((screen, j) => (
                          <div key={j} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/60 border border-border/30">
                            <Smartphone className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                            <span className="text-xs text-muted-foreground font-medium">{screen}</span>
                          </div>
                        ))}
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                {/* Shared Data Layer */}
                <div className="mt-6 bg-primary/5 rounded-2xl p-5 border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <BrainCircuit className="w-5 h-5 text-primary" />
                    <h5 className="font-bold text-sm text-foreground">Shared Data Layer</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Patient Records", "Vital Signs Stream", "GPS & Fleet Data", "Voice Transcripts", "Clinical Reports", "Incident Logs", "HIPAA Encryption", "Offline Sync Queue"].map((item) => (
                      <span key={item} className="px-3 py-1.5 rounded-full bg-background/60 border border-border/40 text-xs text-muted-foreground font-medium">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Wireframes & Prototyping ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="mb-12 max-w-3xl">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Prototyping</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Wireframes & Prototyping</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              From low-fidelity sketches to interactive prototypes, every screen was iterated and validated with real EMS practitioners — tested in the back of moving ambulances and hospital corridors.
            </p>
          </AnimatedSection>

          {/* Design Fidelity Timeline */}
          <AnimatedSection className="mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stage: "01", title: "Lo-Fi Sketches", desc: "Rapid paper wireframes exploring layout patterns for glove-friendly, one-handed use.", color: "from-red-500/10 to-red-500/5", border: "border-red-500/20", icon: Pen },
                { stage: "02", title: "Mid-Fi Wireframes", desc: "Structured screen layouts validated with paramedics and EMS coordinators in-context.", color: "from-primary/10 to-primary/5", border: "border-primary/20", icon: Layout },
                { stage: "03", title: "Hi-Fi Designs", desc: "Pixel-perfect interfaces with the full design system, dark/light modes, and accessibility.", color: "from-amber-500/10 to-amber-500/5", border: "border-amber-500/20", icon: Monitor },
                { stage: "04", title: "Interactive Prototypes", desc: "Clickable prototypes with micro-interactions tested in live ambulance ride-alongs.", color: "from-green-500/10 to-green-500/5", border: "border-green-500/20", icon: Smartphone },
              ].map((item, i) => (
                <AnimatedSection key={item.stage} delay={i * 80} className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${item.color} border ${item.border} group hover:shadow-lg transition-all relative overflow-hidden`}>
                  <div className="absolute top-3 right-3 text-4xl font-display font-bold text-foreground/[0.04] select-none">{item.stage}</div>
                  <div className="w-10 h-10 rounded-xl bg-background/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-foreground mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Wireframe Screens — Code-based representations */}
          <AnimatedSection className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-card border border-border/50 shadow-xl relative overflow-hidden mb-10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Layout className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-foreground">Key Screen Wireframes</h4>
                  <p className="text-sm text-muted-foreground mt-1">Critical interfaces designed for high-stress emergency contexts</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                Each wireframe was designed with 48px minimum touch targets, high-contrast readability, and one-handed operation in mind. Below are the core screens across the MediRescue suite.
              </p>

              {/* Wireframe Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    product: "Smart EMS",
                    screen: "Voice Recording",
                    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
                    elements: [
                      { type: "header", label: "Active Recording" },
                      { type: "waveform", label: "Audio Waveform" },
                      { type: "badge", label: "SOAP Format" },
                      { type: "text", label: "Real-time Transcription" },
                    ],
                    span: "lg:col-span-1",
                  },
                  {
                    product: "Connected Ambulance",
                    screen: "AR Consultation",
                    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
                    elements: [
                      { type: "header", label: "Live Video Feed" },
                      { type: "video", label: "HoloLens AR Overlay" },
                      { type: "vitals", label: "Vitals Stream" },
                      { type: "badge", label: "5G Connected" },
                    ],
                    span: "lg:col-span-2",
                  },
                  {
                    product: "ePCR",
                    screen: "Patient Intake",
                    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
                    elements: [
                      { type: "header", label: "Patient Record" },
                      { type: "form", label: "Vitals Entry" },
                      { type: "form", label: "Medications" },
                      { type: "badge", label: "Offline Ready" },
                    ],
                    span: "lg:col-span-1",
                  },
                  {
                    product: "ERMS",
                    screen: "Fleet Dashboard",
                    tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
                    elements: [
                      { type: "header", label: "Dispatch Control" },
                      { type: "map", label: "GIS Fleet Map" },
                      { type: "list", label: "Active Incidents" },
                      { type: "badge", label: "322 Units" },
                    ],
                    span: "lg:col-span-2",
                  },
                  {
                    product: "Smart EMS",
                    screen: "Report Preview",
                    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
                    elements: [
                      { type: "header", label: "Generated Report" },
                      { type: "text", label: "CHART Summary" },
                      { type: "form", label: "Clinical Notes" },
                      { type: "badge", label: "Auto-filled" },
                    ],
                    span: "lg:col-span-1",
                  },
                  {
                    product: "ePCR",
                    screen: "Pre-Arrival Summary",
                    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
                    elements: [
                      { type: "header", label: "Transmission Ready" },
                      { type: "vitals", label: "Patient Vitals" },
                      { type: "text", label: "ETA & Condition" },
                      { type: "badge", label: "HIPAA Encrypted" },
                    ],
                    span: "lg:col-span-1",
                  },
                  {
                    product: "ERMS",
                    screen: "KPI Analytics",
                    tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
                    elements: [
                      { type: "header", label: "Analytics" },
                      { type: "chart", label: "Response Times" },
                      { type: "list", label: "Regional Stats" },
                      { type: "badge", label: "Real-time" },
                    ],
                    span: "lg:col-span-1",
                  },
                ].map((wf, i) => (
                  <AnimatedSection key={i} delay={i * 60} className={`${wf.span} group`}>
                    <div className="h-full rounded-2xl border border-border/60 bg-secondary/20 p-4 sm:p-5 hover:border-primary/40 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden">
                      {/* Top bar */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${wf.tagColor}`}>{wf.product}</span>
                        <span className="text-[10px] text-muted-foreground/60 font-mono uppercase tracking-wider">{wf.screen}</span>
                      </div>

                      {/* Wireframe skeleton elements */}
                      <div className="space-y-3">
                        {wf.elements.map((el, j) => (
                          <div key={j}>
                            {el.type === "header" && (
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                  <div className="w-4 h-4 rounded bg-primary/30" />
                                </div>
                                <div>
                                  <div className="h-2.5 w-24 bg-foreground/15 rounded-full" />
                                  <div className="h-1.5 w-16 bg-foreground/8 rounded-full mt-1.5" />
                                </div>
                              </div>
                            )}
                            {el.type === "waveform" && (
                              <div className="flex items-end gap-[3px] h-10 px-2">
                                {Array.from({ length: 20 }).map((_, k) => (
                                  <div key={k} className="flex-1 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors" style={{ height: `${Math.random() * 100}%`, minHeight: '4px' }} />
                                ))}
                              </div>
                            )}
                            {el.type === "video" && (
                              <div className="h-24 sm:h-32 rounded-xl bg-gradient-to-br from-blue-500/10 to-primary/5 border border-border/30 flex items-center justify-center relative">
                                <Monitor className="w-8 h-8 text-primary/20" />
                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                <span className="absolute bottom-2 left-3 text-[10px] text-muted-foreground/60">{el.label}</span>
                              </div>
                            )}
                            {el.type === "vitals" && (
                              <div className="flex gap-2">
                                {["HR", "SpO₂", "BP"].map((v) => (
                                  <div key={v} className="flex-1 bg-background/60 rounded-lg p-2 border border-border/30 text-center">
                                    <div className="text-[9px] text-muted-foreground/60 uppercase">{v}</div>
                                    <div className="text-xs font-bold text-foreground/60 mt-0.5">{v === "HR" ? "88" : v === "SpO₂" ? "97%" : "120/80"}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                            {el.type === "form" && (
                              <div className="space-y-2">
                                <div className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">{el.label}</div>
                                <div className="h-7 rounded-lg bg-background/40 border border-border/30 px-2 flex items-center">
                                  <div className="h-1.5 w-2/3 bg-foreground/8 rounded-full" />
                                </div>
                              </div>
                            )}
                            {el.type === "map" && (
                              <div className="h-28 sm:h-36 rounded-xl bg-gradient-to-br from-green-500/5 to-primary/5 border border-border/30 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20">
                                  {Array.from({ length: 6 }).map((_, k) => (
                                    <div key={k} className="absolute w-2 h-2 rounded-full bg-primary animate-pulse" style={{ top: `${20 + Math.random() * 60}%`, left: `${10 + Math.random() * 80}%`, animationDelay: `${k * 0.5}s` }} />
                                  ))}
                                </div>
                                <Navigation2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary/15" />
                                <span className="absolute bottom-2 left-3 text-[10px] text-muted-foreground/60">{el.label}</span>
                              </div>
                            )}
                            {el.type === "chart" && (
                              <div className="flex items-end gap-2 h-16 px-1">
                                {[40, 65, 50, 80, 70, 90, 60, 75].map((h, k) => (
                                  <div key={k} className="flex-1 bg-primary/15 rounded-t group-hover:bg-primary/30 transition-colors" style={{ height: `${h}%` }} />
                                ))}
                              </div>
                            )}
                            {el.type === "list" && (
                              <div className="space-y-1.5">
                                {[1, 2, 3].map((n) => (
                                  <div key={n} className="flex items-center gap-2 p-1.5 rounded-lg bg-background/40 border border-border/20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                                    <div className="h-1.5 rounded-full bg-foreground/8" style={{ width: `${50 + Math.random() * 40}%` }} />
                                  </div>
                                ))}
                              </div>
                            )}
                            {el.type === "text" && (
                              <div className="space-y-1.5 px-1">
                                <div className="h-1.5 w-full bg-foreground/8 rounded-full" />
                                <div className="h-1.5 w-4/5 bg-foreground/6 rounded-full" />
                                <div className="h-1.5 w-3/5 bg-foreground/4 rounded-full" />
                              </div>
                            )}
                            {el.type === "badge" && (
                              <div className="flex justify-end pt-1">
                                <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary/60">{el.label}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Design Iteration Summary */}
          <AnimatedSection className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Pen, metric: "120+", label: "Screens Designed", desc: "Across all four products" },
              { icon: Users, metric: "3 Rounds", label: "Usability Testing", desc: "In real ambulance contexts" },
              { icon: Target, metric: "48px", label: "Min Touch Target", desc: "Glove-friendly interactions" },
              { icon: ArrowRight, metric: "6 Sprints", label: "Design Iterations", desc: "From lo-fi to production" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80} className="bg-card rounded-2xl p-5 sm:p-6 border border-border/50 text-center hover:border-primary/30 hover:shadow-lg transition-all group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-display font-bold text-primary mb-1">{item.metric}</div>
                <div className="font-semibold text-sm text-foreground mb-1">{item.label}</div>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Product Suite ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 bg-gradient-to-br from-secondary/40 via-background to-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">

          <AnimatedSection className="mb-12 max-w-3xl">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Solution</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">The MediRescue Suite</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: Wifi,
                title: "Connected Ambulance",
                tag: "Mixed Reality · 5G",
                tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
                desc: "First-of-its-kind solution using Microsoft HoloLens and 5G connectivity to link field EMTs with remote hospital physicians. Paramedics receive AR-guided clinical instructions overlaid on their visual field, enabling specialist-level care from the ambulance.",
                features: ["Live AR guidance from ED physicians", "Real-time patient vital sign streaming", "Hands-free HoloLens interface", "5G low-latency video consultation"],
              },
              {
                icon: Map,
                title: "ERMS",
                tag: "Emergency Response Management",
                tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
                desc: "A unified platform for incident monitoring, live fleet tracking, and AI-powered ambulance dispatch. GIS mapping with real-time unit positioning ensures the closest available responder is always dispatched first.",
                features: ["Automated ambulance dispatch algorithm", "Live GIS fleet tracking across 322+ units", "Incident monitoring dashboard", "Performance analytics & KPI tracking"],
              },
              {
                icon: FileText,
                title: "ePCR",
                tag: "Electronic Patient Care Record",
                tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
                desc: "A digital patient care reporting tool that captures clinical data during the response and transmits it to the receiving hospital before the ambulance arrives. Designed for one-handed mobile use with offline synchronisation.",
                features: ["Pre-arrival data transmission to ED", "Offline sync for low-connectivity areas", "Mobile-first, one-handed interaction model", "HIPAA-compliant encrypted storage"],
              },
              {
                icon: Mic2,
                title: "Smart EMS",
                tag: "AI Voice Transcription",
                tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
                desc: "An AI-powered voice transcriber that converts paramedic speech into structured SOAP and CHART format medical reports, eliminating manual data entry entirely. Saves 3–5 hours of documentation time per staff member per day.",
                features: ["SOAP & CHART format auto-generation", "Multi-medical format support", "Real-time voice-to-structured-text conversion", "Accent-aware medical vocabulary model"],
              },
            ].map((product, i) => (
              <AnimatedSection key={i} delay={i * 80} className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-foreground">{product.title}</h4>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${product.tagColor}`}>{product.tag}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{product.desc}</p>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>

          {/* Design principles */}
          <AnimatedSection className="mt-12 bg-secondary/30 border border-border/50 rounded-3xl p-8 sm:p-10">
            <h4 className="font-display font-bold text-xl mb-6 text-foreground">Design Principles for Emergency Contexts</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: "Speed First", desc: "Every interaction optimised for sub-3-second completion. No unnecessary taps, no hidden menus." },
                { icon: Layers, title: "Glove-Friendly", desc: "Minimum 48px touch targets, high-contrast UI readable in bright sunlight and low-light conditions." },
                { icon: ShieldCheck, title: "HIPAA Compliant", desc: "Advanced encryption, local data processing, and strict access controls on all patient data." },
                { icon: BrainCircuit, title: "AI-Augmented", desc: "Machine learning reduces cognitive load by surfacing the right information at the right moment." },
              ].map((p, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h5 className="font-bold text-sm text-foreground">{p.title}</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Visual Design ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="mb-12 max-w-3xl">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">UI & Aesthetics</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Visual Design</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              The MediRescue design system was engineered for extreme environments — high-contrast readability in bright sunlight and low-light conditions, glove-friendly touch targets, and a visual language that communicates urgency without inducing panic.
            </p>
          </AnimatedSection>

          {/* Logo & Branding */}
          <AnimatedSection className="mb-12">
            <h4 className="font-display font-bold text-2xl mb-8 text-foreground flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-primary" />
              </div>
              Logo & Branding
            </h4>
            
            <div className="grid md:grid-cols-12 gap-8 items-center bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-colors">
              <div className="md:col-span-5">
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">Identity</div>
                <h5 className="font-display text-3xl font-bold text-foreground mb-4">The MediWave Identity</h5>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  The MediWave branding is engineered to communicate urgency, safety, and clinical excellence. The logo guidelines define strict exclusion zones, secondary lockups, and high-visibility color choices for sirens and emergency screens.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Urgent care color specifications (hex / RGB)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Exclusion zones to prevent crowding by other UI elements</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Consistent scaling guidelines for physical hardware decals</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 rounded-2xl overflow-hidden border border-border/40 bg-background/50 p-2">
                <img 
                  src={mediwaveLogo} 
                  alt="MediWave Logo Usage Guide" 
                  className="w-full h-auto rounded-xl object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Typography */}
          <AnimatedSection className="mb-10">
            <h4 className="font-display font-bold text-2xl mb-8 text-foreground flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Type className="w-5 h-5 text-primary" />
              </div>
              Typography
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border/50 rounded-3xl p-5 sm:p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 pb-3 border-b border-border/50 gap-4">
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5">Display / Headlines</div>
                    <div className="font-display text-2xl font-bold text-foreground">Syne</div>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-xs font-medium text-muted-foreground mb-1">Weights</div>
                    <div className="text-[10px] font-semibold text-foreground bg-secondary/50 px-2 py-0.5 rounded-full border border-border/50 inline-block">500, 600, 700, 800</div>
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl text-foreground/80 break-words leading-tight group-hover:text-primary transition-colors font-display">
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-3xl p-5 sm:p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 pb-3 border-b border-border/50 gap-4">
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5">Body / Interface</div>
                    <div className="text-2xl font-semibold text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>Inter</div>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-xs font-medium text-muted-foreground mb-1">Weights</div>
                    <div className="text-[10px] font-semibold text-foreground bg-secondary/50 px-2 py-0.5 rounded-full border border-border/50 inline-block">300, 400, 500, 600, 700</div>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl text-foreground/80 break-words leading-relaxed group-hover:text-primary transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                </div>
              </div>
            </div>

            {/* Type Scale */}
            <div className="mt-6 bg-card border border-border/50 rounded-3xl p-5 sm:p-6 hover:border-primary/50 transition-all">
              <div className="flex justify-between items-end mb-5 pb-3 border-b border-border/50">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Type Scale</div>
                <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">1.25 Major Third</div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Display", size: "48px", rem: "3.000rem", weight: "Bold" },
                  { label: "Heading 1", size: "38.4px", rem: "2.400rem", weight: "Bold" },
                  { label: "Heading 2", size: "30.7px", rem: "1.920rem", weight: "Semibold" },
                  { label: "Heading 3", size: "24.6px", rem: "1.536rem", weight: "Semibold" },
                  { label: "Body Large", size: "19.6px", rem: "1.229rem", weight: "Medium" },
                  { label: "Body", size: "16px", rem: "1.000rem", weight: "Regular" },
                  { label: "Caption", size: "12.8px", rem: "0.800rem", weight: "Medium" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/20 pb-4 last:border-0 last:pb-0 gap-3">
                    <div className="flex-1 overflow-hidden">
                      <div className="text-foreground truncate leading-none" style={{
                        fontSize: item.size,
                        fontWeight: item.weight === "Bold" ? 700 : item.weight === "Semibold" ? 600 : item.weight === "Medium" ? 500 : 400,
                        fontFamily: i < 4 ? "var(--font-display)" : "'Inter', sans-serif",
                      }}>
                        {item.label}
                      </div>
                    </div>
                    <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-muted-foreground shrink-0 items-center">
                      <span className="w-20 text-foreground">{item.weight}</span>
                      <span className="w-16">{item.size}</span>
                      <span className="w-20 text-primary text-right">{item.rem}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Color Architecture */}
          <AnimatedSection className="mb-10">
            <h4 className="font-display font-bold text-2xl mb-8 text-foreground flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Palette className="w-5 h-5 text-primary" />
              </div>
              Color Architecture
            </h4>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Primary Brand Color */}
              <div className="lg:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-card border border-border/50 p-8 sm:p-10 min-h-[280px] sm:min-h-[320px] flex flex-col justify-end shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: "linear-gradient(135deg, #1A3A6E 0%, #0D47A1 50%, #1565C0 100%)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/15 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                <div className="relative z-10 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div>
                    <div className="text-white/80 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-3">Core Brand</div>
                    <h5 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-none tracking-tight">MediBlue</h5>
                  </div>
                  <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 w-fit">
                    <div className="font-mono text-xl sm:text-2xl font-medium tracking-wide">#0D47A1</div>
                    <div className="text-white/70 text-xs sm:text-sm text-right mt-1 font-medium">RGB 13, 71, 161</div>
                  </div>
                </div>
              </div>

              {/* Emergency Accent */}
              <div className="lg:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-card border border-border/50 p-8 sm:p-10 min-h-[280px] sm:min-h-[320px] flex flex-col justify-end shadow-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: "linear-gradient(135deg, #C62828 0%, #E53935 100%)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="relative z-10 text-white flex flex-col justify-between h-full">
                  <div className="text-white/80 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">Critical / Alert</div>
                  <div className="mt-auto">
                    <h5 className="font-display text-4xl sm:text-5xl font-bold mb-5 tracking-tight">Emergency</h5>
                    <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 inline-block">
                      <div className="font-mono text-lg font-medium">#C62828</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Accent Colors */}
              <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Smart EMS", color: "#F59E0B", hex: "#F59E0B", textDark: true },
                  { name: "Connected Amb.", color: "#2196F3", hex: "#2196F3", textDark: false },
                  { name: "ePCR", color: "#7C3AED", hex: "#7C3AED", textDark: false },
                  { name: "ERMS", color: "#10B981", hex: "#10B981", textDark: false },
                ].map((c, i) => (
                  <AnimatedSection key={i} delay={i * 80} className="group relative overflow-hidden rounded-2xl border border-border/50 p-5 sm:p-6 flex flex-col justify-between min-h-[140px] shadow-sm hover:shadow-xl transition-all duration-300" style={{ backgroundColor: c.color }}>
                    <div className={`${c.textDark ? "text-neutral-900" : "text-white"} relative z-10`}>
                      <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Product</div>
                      <div className="font-display text-lg sm:text-xl font-bold">{c.name}</div>
                    </div>
                    <div className={`font-mono text-xs sm:text-sm relative z-10 bg-black/10 w-fit px-3 py-1.5 rounded-lg ${c.textDark ? "text-neutral-700" : "text-white/80"}`}>
                      {c.hex}
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Functional States & Accessibility */}
              <div className="lg:col-span-12 bg-card border border-border/50 rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" style={{ background: "linear-gradient(135deg, #0D47A1 0%, #C62828 100%)" }} />
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 grid md:grid-cols-2 gap-10">
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-5">Functional States</div>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: "Stable", color: "#4CAF50" },
                        { name: "Caution", color: "#FFC107" },
                        { name: "Critical", color: "#F44336" },
                        { name: "Dispatch", color: "#2196F3" },
                        { name: "Offline", color: "#9E9E9E" },
                        { name: "Transfer", color: "#00BCD4" },
                      ].map((c, i) => (
                        <div key={i} className="flex items-center gap-3 bg-background border border-border/60 rounded-full py-2 pl-2 pr-4 hover:border-primary/40 hover:shadow-md transition-all cursor-default group">
                          <div className="w-6 h-6 rounded-full shadow-inner group-hover:scale-110 transition-transform" style={{ backgroundColor: c.color }} />
                          <span className="text-sm font-medium text-foreground">{c.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-5">Accessibility Standards</div>
                    <div className="space-y-3">
                      {[
                        { icon: Eye, label: "WCAG 2.1 AA Contrast", detail: "All text meets 4.5:1 minimum" },
                        { icon: Contrast, label: "Sunlight Readability", detail: "Tested at 10,000+ lux brightness" },
                        { icon: Grid3X3, label: "48px Touch Targets", detail: "Operable with medical gloves" },
                      ].map((a, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/30">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <a.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-foreground">{a.label}</div>
                            <div className="text-xs text-muted-foreground">{a.detail}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Platform Mockup Showcase */}
          <AnimatedSection className="mb-10 p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[3rem] bg-secondary/20 border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h4 className="font-display font-bold text-2xl text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  High-Fidelity Platform Screens
                </h4>
                <p className="text-sm text-muted-foreground max-w-xs">Connected Ambulance vitals monitoring, live camera feeds, and patient care record interfaces.</p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-secondary/30 overflow-hidden relative shadow-lg hover:shadow-xl transition-all">
                <img
                  src={healthcareMockup}
                  alt="MediRescue Platform — Connected Ambulance vitals dashboard, live camera feeds, and ePCR patient details interface"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* UI Component Patterns */}
          <AnimatedSection>
            <h4 className="font-display font-bold text-2xl mb-8 text-foreground flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Grid3X3 className="w-5 h-5 text-primary" />
              </div>
              Emergency UX Patterns
            </h4>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Zap, title: "One-Tap Actions", desc: "Critical actions like 'Start Recording' or 'Send to ED' require a single tap with no confirmation dialogs in the golden path.", color: "from-amber-500/10 to-amber-500/5", border: "border-amber-500/20" },
                { icon: HeartPulse, title: "Live Vitals Strip", desc: "Continuously streaming ECG, SpO₂, and NIBP waveforms displayed in high-contrast color bands for instant readability.", color: "from-red-500/10 to-red-500/5", border: "border-red-500/20" },
                { icon: Mic2, title: "Voice-First Input", desc: "All forms support voice transcription as the primary input method, with touch as fallback for noisy environments.", color: "from-purple-500/10 to-purple-500/5", border: "border-purple-500/20" },
                { icon: Navigation2, title: "Contextual Maps", desc: "GIS fleet maps auto-zoom to active incidents. Color-coded ambulance markers show availability, ETA, and current status.", color: "from-green-500/10 to-green-500/5", border: "border-green-500/20" },
                { icon: Bell, title: "Progressive Alerts", desc: "Three-tier alert system — subtle badge for routine, modal overlay for urgent, and full-screen takeover for critical events.", color: "from-blue-500/10 to-blue-500/5", border: "border-blue-500/20" },
                { icon: Wifi, title: "Offline Resilience", desc: "All data entry works offline with local encryption. Sync queue visualised as a status bar so users always know data state.", color: "from-cyan-500/10 to-cyan-500/5", border: "border-cyan-500/20" },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 80} className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${item.color} border ${item.border} group hover:shadow-lg transition-all`}>
                  <div className="w-10 h-10 rounded-xl bg-background/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h5 className="font-bold text-sm sm:text-base text-foreground mb-2">{item.title}</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Testing & Feedback ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4 mt-2">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                Validation
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Testing &<br />Feedback
              </h3>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pr-4">
                Every interface was validated through rigorous field testing — in moving ambulances, hospital corridors, and dispatch centers — ensuring designs genuinely serve life-saving workflows under extreme pressure.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {/* Ambulance Ride-Along Testing */}
              <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Ambulance className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground">Ambulance Ride-Along Testing</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      We conducted in-field usability testing by riding with paramedics during live emergency responses across Sri Lanka and Australia. Testing in a moving vehicle revealed critical insights — motion sickness affected tap accuracy, bright sunlight washed out low-contrast elements, and medical gloves required significantly larger touch targets than standard mobile guidelines suggest.
                    </p>
                    <div className="mt-4 grid sm:grid-cols-3 gap-3">
                      {[
                        { metric: "12", label: "Ride-Along Sessions" },
                        { metric: "30+", label: "EMTs Observed" },
                        { metric: "3 Countries", label: "Testing Locations" },
                      ].map((s, i) => (
                        <div key={i} className="bg-secondary/30 rounded-xl px-4 py-3 border border-border/30 text-center">
                          <div className="text-lg font-display font-bold text-primary">{s.metric}</div>
                          <div className="text-xs text-muted-foreground">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stakeholder Feedback Loop */}
              <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-foreground">Stakeholder Feedback Loop</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Feedback from paramedics, EMS directors, ED physicians, and ministry stakeholders was synthesized into three core improvement themes:
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { label: "Hands-Free Priority", detail: "Paramedics needed complete voice-first workflows — any screen requiring two hands was redesigned." },
                        { label: "Glanceable Vitals", detail: "ED physicians wanted patient data visible within 2 seconds of screen load — no scrolling, no tabs." },
                        { label: "Offline Confidence", detail: "Rural EMTs needed clear visual indicators that data was saved locally and would sync when connectivity returned." },
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

              {/* Design Iterations */}
              <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground">Key Design Iterations</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Based on field testing insights, we shipped three major design iterations before final deployment:
                    </p>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span><strong className="text-foreground">Voice-First ePCR Redesign</strong> — Rebuilt the entire patient care record workflow around voice transcription as the primary input, reducing documentation time from 25 minutes to under 3 minutes per patient encounter.</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span><strong className="text-foreground">High-Contrast Vitals Overhaul</strong> — Redesigned the Connected Ambulance vitals dashboard with WCAG AAA contrast ratios and color-blind-safe palettes after sunlight testing revealed critical readability failures.</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span><strong className="text-foreground">One-Handed Dispatch UX</strong> — Restructured the ERMS dispatch assignment panel so coordinators could assign ambulances with a single thumb, after observing that managers often held a phone in one hand during dispatch.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Validation Metrics Strip */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { icon: Search, metric: "92%", label: "Task Success Rate", desc: "Across all usability tests" },
                  { icon: Clock, metric: "<3s", label: "Avg Task Time", desc: "For critical golden-path actions" },
                  { icon: CheckCircle2, metric: "4.7/5", label: "SUS Score", desc: "System Usability Scale" },
                  { icon: Activity, metric: "Zero", label: "Critical Errors", desc: "In final round of testing" },
                ].map((item, i) => (
                  <AnimatedSection key={i} delay={i * 80} className="bg-card rounded-2xl p-4 sm:p-5 border border-border/50 text-center hover:border-primary/30 hover:shadow-lg transition-all group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-xl font-display font-bold text-primary mb-0.5">{item.metric}</div>
                    <div className="font-semibold text-xs text-foreground mb-0.5">{item.label}</div>
                    <p className="text-[10px] text-muted-foreground">{item.desc}</p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Impact & Results ── */}
      <section className="py-16 sm:py-24 border-t border-border/50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[250px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">Measurable Outcomes</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Impact & Results</h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6 mx-auto" />
            <p className="text-lg text-muted-foreground leading-relaxed">{project.outcome}</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Ambulance, metric: "322+", desc: "Ambulances powered by MediRescue across Sri Lanka's 1990 Suwa Seriya fleet" },
              { icon: Clock, metric: "15m 32s", desc: "Average island-wide response time — faster than many developed nations" },
              { icon: Users, metric: "2M+", desc: "Total patients transported and treated across the MediRescue global footprint" },
              { icon: Globe, metric: "GLOMO '24", desc: "Global Mobile Awards Finalist for Best Mobile Innovation for Connected Health" },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="relative bg-card border border-border/50 rounded-3xl p-6 sm:p-8 text-center hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all relative z-10 mx-auto">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-3xl mb-2 relative z-10 text-foreground">{item.metric}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed relative z-10">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>

          {/* Testimonial */}
          <AnimatedSection className="mt-12 bg-secondary/30 border border-border/50 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <div className="text-4xl text-primary mb-4 font-serif leading-none">"</div>
              <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed mb-6">
                This technology, coupled with AI, frees practitioners from the burden of paperwork, enabling them to focus on what they do best — save lives.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Donnie Woodyard Jr.</div>
                  <div className="text-sm text-muted-foreground">30-year veteran paramedic · EMS Advisor</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Learnings */}
          <AnimatedSection className="mt-8 grid lg:grid-cols-2 gap-8">
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
              <h4 className="font-display font-bold text-xl mb-4 text-foreground">Key Design Learnings</h4>
              <ul className="space-y-3">
                {[
                  "Designing for extreme stress contexts demands radical simplicity — every unnecessary element costs lives.",
                  "Field testing in real ambulances revealed motion sickness as a factor affecting tap accuracy, changing our touch target specifications.",
                  "EMS practitioners trusted the system faster when it gave them AI assistance without replacing their clinical judgment.",
                  "Cross-functional alignment with hospital IT, ministry procurement, and field paramedics was as important as the UX itself.",
                ].map((l, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/30 border border-border/50 rounded-3xl p-8">
              <h4 className="font-display font-bold text-xl mb-4 text-foreground">Platform Reach</h4>
              <div className="space-y-4">
                {[
                  { country: "Sri Lanka", detail: "322 ambulances · 1990 Suwa Seriya national service", status: "Live" },
                  { country: "Australia", detail: "EMS agency deployments across multiple states", status: "Live" },
                  { country: "Malaysia", detail: "Full platform launch", status: "Launched" },
                  { country: "United States", detail: "Proof of Concept phase", status: "POC" },
                ].map((r) => (
                  <div key={r.country} className="flex items-start justify-between gap-4 py-3 border-b border-border/40 last:border-0">
                    <div>
                      <div className="font-semibold text-foreground text-sm">{r.country}</div>
                      <div className="text-xs text-muted-foreground">{r.detail}</div>
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary shrink-0">{r.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareAppPage;
