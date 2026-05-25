import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, BarChart3, Search, MessageSquareText, Database, ClipboardCheck, TrendingUp, ArrowRight, Sparkles, Users, Cog, Headset, ShieldCheck, Briefcase, CheckCircle2, CircleUser, Phone, Bell, FileSearch, MessageCircle, GraduationCap, PhoneForwarded, Trophy, Lightbulb, Award, Type, Palette, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import senseAILaptop from "@/assets/images/projects/contact-center/pca-mockup.png";
import personasImage from "@/assets/images/projects/contact-center/personas.png";
import painPointsImage from "@/assets/images/projects/contact-center/pain-points.png";
import userJourneyImage from "@/assets/images/projects/contact-center/user-journey.png";
import screen1 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 1.jpg";
import screen2 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 2.jpg";
import screen3 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 3.jpg";
import screen4 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 4.jpg";
import screen5 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 5.jpg";
import screen6 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 6.jpg";
import screen7 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 7.jpg";
import screen8 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 8.jpg";
import screen9 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 9.jpg";
import screen10 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 10.jpg";
import screen11 from "@/assets/images/projects/contact-center/screens/Post Call Analyser 11.jpg";
import wireframeHome from "@/assets/images/projects/contact-center/wireframes/Home.jpg";
import wireframeCallInsights from "@/assets/images/projects/contact-center/wireframes/Call Insights.jpg";
import wireframeAgentInsights from "@/assets/images/projects/contact-center/wireframes/Agent Evaluation - Agent Insights.jpg";
import wireframeSingleCall from "@/assets/images/projects/contact-center/wireframes/Agent Evaluation - Agent Insights - Single call destails.jpg";
import wireframeAutopilot from "@/assets/images/projects/contact-center/wireframes/Autopilot.jpg";
import wireframeContentUpload from "@/assets/images/projects/contact-center/wireframes/Content Upload 2 - file select.jpg";
import wireframeHome1 from "@/assets/images/projects/contact-center/wireframes/Home-1.jpg";
import wireframeLogin from "@/assets/images/projects/contact-center/wireframes/Login.jpg";

const ContactCenterPage = () => {
  const project = projects.find((p) => p.id === "contact-center");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [wireframeIndex, setWireframeIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const laptopRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let targetMoveX = 0;
    let targetMoveY = 0;
    let currentX = 0;
    let currentY = 0;
    let currentMoveX = 0;
    let currentMoveY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate rotation based on distance from center
      targetX = (e.clientY - centerY) * 0.002;
      targetY = (e.clientX - centerX) * -0.002;

      // Calculate translation based on distance from center
      targetMoveX = (e.clientX - centerX) * 0.01;
      targetMoveY = (e.clientY - centerY) * 0.01;
    };

    const animate = () => {
      // Smooth damping
      currentX += (targetX - currentX) * 0.03;
      currentY += (targetY - currentY) * 0.03;
      currentMoveX += (targetMoveX - currentMoveX) * 0.03;
      currentMoveY += (targetMoveY - currentMoveY) * 0.03;

      if (laptopRef.current) {
        // Combined with existing translate-y-1/2 logic and new parallax translation
        laptopRef.current.style.transform = `translateY(calc(-50% + ${currentMoveY}px)) translateX(${currentMoveX}px) perspective(1200px) rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const screens = [
    { src: screen1, label: "Post Call Analyzer View 1" },
    { src: screen2, label: "Post Call Analyzer View 2" },
    { src: screen3, label: "Post Call Analyzer View 3" },
    { src: screen4, label: "Post Call Analyzer View 4" },
    { src: screen5, label: "Post Call Analyzer View 5" },
    { src: screen6, label: "Post Call Analyzer View 6" },
    { src: screen7, label: "Post Call Analyzer View 7" },
    { src: screen8, label: "Post Call Analyzer View 8" },
    { src: screen9, label: "Post Call Analyzer View 9" },
    { src: screen10, label: "Post Call Analyzer View 10" },
    { src: screen11, label: "Post Call Analyzer View 11" },
  ];

  const wireframes = [
    { src: wireframeHome, label: "Home Dashboard" },
    { src: wireframeCallInsights, label: "Call Insights" },
    { src: wireframeAgentInsights, label: "Agent Insights" },
    { src: wireframeHome1, label: "Dashboard Overview" },
    { src: wireframeSingleCall, label: "Single Call Details" },
    { src: wireframeAutopilot, label: "Autopilot Mode" },
    { src: wireframeContentUpload, label: "Content Upload" },
    { src: wireframeLogin, label: "Login Screen" },
  ];

  if (!project) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section ref={heroRef} className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 relative overflow-hidden bg-background text-foreground">
        {/* Theme-matched gradient orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        {/* Desktop Background Image */}
        <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none" style={{ perspective: '1200px' }}>
          <img
            ref={laptopRef}
            src={senseAILaptop}
            alt="SenseAI Platform"
            className="absolute right-0 top-[60%] -translate-y-1/2 w-[70%] h-auto object-contain pr-10 xl:pr-16 drop-shadow-2xl will-change-transform"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mb-8 sm:mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>

            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 xl:col-span-6">
                <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm">
                  {project.category}
                </span>
                <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 leading-tight text-foreground">
                  {project.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed max-w-2xl">
                  {project.fullDescription}
                </p>

                <div className="mt-12 sm:mt-8 flex flex-col sm:flex-row sm:items-center bg-card/80 backdrop-blur-xl rounded-3xl sm:rounded-full border border-border/50 shadow-lg max-w-fit overflow-hidden">
                  <div className="px-6 sm:px-8 py-5">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">
                      Role
                    </div>
                    <div className="text-sm font-semibold text-foreground whitespace-nowrap">
                      {project.role}
                    </div>
                  </div>

                  <div className="hidden sm:block w-px h-12 bg-border/50"></div>
                  <div className="block sm:hidden w-full h-px bg-border/50"></div>

                  <div className="px-6 sm:px-8 py-5">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">
                      Duration
                    </div>
                    <div className="text-sm font-semibold text-foreground whitespace-nowrap">
                      {project.duration}
                    </div>
                  </div>

                  <div className="hidden sm:block w-px h-12 bg-border/50"></div>
                  <div className="block sm:hidden w-full h-px bg-border/50"></div>

                  <div className="px-6 sm:px-8 py-5">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">
                      Tools
                    </div>
                    <div className="text-sm font-semibold text-foreground leading-snug">
                      {project.tools.join(", ")}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-secondary/50 backdrop-blur-md border border-border/50 rounded-full text-xs sm:text-sm text-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile Image */}
              <div className="lg:hidden mt-4 mb-4">
                <img
                  src={senseAILaptop}
                  alt="SenseAI Platform"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 border-t border-border/50 relative overflow-hidden bg-gradient-to-br from-secondary/80 via-background to-background">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4 mt-12">
              <div>
                <h3 className="font-display font-bold text-5xl uppercase tracking-tight leading-none">
                  Challenge
                </h3>
                <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Only 2% of calls are analyzed due to limited capacity and manual effort, leading to a catastrophic loss of actionable intelligence.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                { icon: BarChart3, num: "01", title: "Limited Analysis Coverage", desc: "Manual effort limits capacity to a mere 2% sample rate." },
                { icon: Search, num: "02", title: "Misclassified Call Intents", desc: "Vague intent detection leads to poor routing and resource waste." },
                { icon: MessageSquareText, num: "03", title: "Lack of Sentiment Visibility", desc: "Inability to track customer frustration or delight at scale." },
                { icon: Database, num: "04", title: "Data Gaps", desc: "Fragmented insights prevent a holistic view of the customer journey." },
                { icon: ClipboardCheck, num: "05", title: "Weak Quality Assurance", desc: "Inconsistent QA processes result in unmonitored agent performance." },
                { icon: TrendingUp, num: "06", title: "Product Optimization Issues", desc: "Missed opportunities to iterate products based on direct feedback." },
              ].map((item) => (
                <div
                  key={item.num}
                  className="relative p-6 sm:p-7 rounded-2xl bg-secondary/50 border border-border/40 overflow-hidden group hover:bg-secondary/80 transition-colors"
                >
                  <span className="absolute top-3 right-4 font-display font-bold text-6xl sm:text-7xl text-foreground/[0.04] leading-none select-none">
                    {item.num}
                  </span>
                  <item.icon className="w-5 h-5 text-primary mb-4" />
                  <h4 className="font-semibold text-base sm:text-lg leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Goals and Objectives Section */}
      <section className="py-16 sm:py-24 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4 mt-2">
              <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight">
                Goals &
                <br />
                Objectives
              </h2>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-foreground mb-8">
                Sense AI Post Call Analyzer provided a robust, automated system for analyzing calls, addressing key issues such as misclassification of intents and limited data visibility.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <span className="font-bold text-primary">01</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed relative z-10">
                    It enabled real-time sentiment analysis, ensuring a clearer understanding of customer satisfaction, while also optimizing the product mix with data-driven insights.
                  </p>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <span className="font-bold text-primary">02</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed relative z-10">
                    By automating quality assurance and providing actionable feedback for agents, overall efficiency and accuracy was elevated.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* New Research & Discovery Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        {/* Decorative background gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">
              Deep Dive
            </span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              Research & Discovery
            </h3>
            <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Our research uncovered that harnessing AI-driven insights is key to elevating telecom interactions. By analyzing the entire customer journey, we identified crucial areas to empower teams and deliver outstanding results, directly informing the Post Call Analyzer's features.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Sparkles, title: "Enhanced CX", desc: "Use tailored recommendations and deep customer insights to craft personalized experiences, driving loyalty." },
              { icon: Users, title: "Empowered Agents", desc: "Refine agent training with detailed analytics, providing targeted feedback for consistent, high-quality interactions." },
              { icon: Cog, title: "Smarter Operations", desc: "Automate interaction analysis to reduce manual tasks, streamline processes, and allocate resources effectively." }
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

          <AnimatedSection className="mt-16 bg-secondary/20 rounded-3xl p-8 sm:p-12 border border-border/40 relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
              <div className="lg:col-span-4">
                <h4 className="font-display font-bold text-2xl sm:text-3xl leading-tight mb-4 text-foreground">
                  Actionable Intelligence Framework
                </h4>
                <div className="w-8 h-[2px] bg-primary mb-6" />
                <p className="text-base text-muted-foreground leading-relaxed">
                  A comprehensive suite of analytical tools designed to extract, categorize, and utilize every ounce of value from customer interactions.
                </p>
              </div>

              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-card hover:bg-card/80 transition-colors rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                    <MessageSquareText className="w-5 h-5 text-primary" />
                  </div>
                  <strong className="text-foreground block text-lg mb-2">Speech & Sentiment</strong>
                  <p className="text-sm text-muted-foreground leading-relaxed">Convert spoken conversations into structured text and gauge emotional tones to assess customer satisfaction or frustration.</p>
                </div>

                <div className="bg-card hover:bg-card/80 transition-colors rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md group sm:mt-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <strong className="text-foreground block text-lg mb-2">Categorization</strong>
                  <p className="text-sm text-muted-foreground leading-relaxed">Automatically categorize calls and generate concise summaries, saving time for managers to streamline follow-up actions.</p>
                </div>

                <div className="bg-card hover:bg-card/80 transition-colors rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <strong className="text-foreground block text-lg mb-2">KPI Extraction</strong>
                  <p className="text-sm text-muted-foreground leading-relaxed">Extract key metrics like resolution time, satisfaction scores, and agent performance on-demand to achieve targets.</p>
                </div>

                <div className="bg-card hover:bg-card/80 transition-colors rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md group sm:mt-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <strong className="text-foreground block text-lg mb-2">Trend Analysis</strong>
                  <p className="text-sm text-muted-foreground leading-relaxed">Detect recurring trends across calls, pinpointing bottlenecks, and apply root cause analysis for operational improvement.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="grid md:grid-cols-2 gap-8 mt-12 mb-4">
            <div className="bg-secondary/10 rounded-3xl p-6 sm:p-8 border border-border/40 md:col-span-2">
              <h4 className="font-display font-bold text-2xl mb-4 text-foreground">Stakeholder Pain Points in Call Analysis</h4>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                We conducted in-depth interviews with telecom executives, contact center managers, and QA teams to identify core pain points, particularly around fragmented data and manual QA constraints.
              </p>

              <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm">
                <div className="hidden lg:grid grid-cols-4 gap-6 p-5 bg-secondary/30 border-b border-border/50 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  <div>Stakeholder</div>
                  <div>Pain Point</div>
                  <div>Impact</div>
                  <div className="text-primary">Sense AI Solution</div>
                </div>

                <div className="divide-y divide-border/50">
                  {/* Row 1 */}
                  <div className="grid lg:grid-cols-4 gap-6 p-5 sm:p-6 hover:bg-secondary/20 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <Headset className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-base mb-1">Contact Center Agents</div>
                        <div className="text-xs font-medium text-muted-foreground">Age: 30 • Sri Lanka</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="lg:hidden text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Pain Point</div>
                      <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                        <li>Feedback is delayed or unclear</li>
                        <li>QA scores feel subjective</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="lg:hidden text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Impact</div>
                      <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                        <li>Hard to improve performance in real-time</li>
                        <li>Frustration, low morale</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="lg:hidden text-xs font-bold uppercase tracking-wider text-primary mb-2">Sense AI Solution</div>
                      <div className="flex flex-col gap-2.5">
                        <div className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground">Real-time call feedback with actionable insights</span>
                        </div>
                        <div className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground">AI-assisted call scoring</span>
                        </div>
                        <div className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground">Standardized metrics</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid lg:grid-cols-4 gap-6 p-5 sm:p-6 hover:bg-secondary/20 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-base mb-1">Supervisors / QA</div>
                        <div className="text-xs font-medium text-muted-foreground">Age: 38 • Sri Lanka</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="lg:hidden text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Pain Point</div>
                      <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                        <li>Manual, time-consuming call reviews</li>
                        <li>Inconsistent evaluations across agents</li>
                        <li>Limited self-insight into performance</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="lg:hidden text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Impact</div>
                      <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                        <li>Low efficiency, wasted time</li>
                        <li>Difficulty in fair coaching</li>
                        <li>Hard to plan training</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="lg:hidden text-xs font-bold uppercase tracking-wider text-primary mb-2">Sense AI Solution</div>
                      <div className="flex flex-col gap-2.5">
                        <div className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground">AI-assisted call scoring and automatic evaluation</span>
                        </div>
                        <div className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground">Aggregated insights and skill-gap detection</span>
                        </div>
                        <div className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground">Dashboards showing improvement</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid lg:grid-cols-4 gap-6 p-5 sm:p-6 hover:bg-secondary/20 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-base mb-1">Business Leaders</div>
                        <div className="text-xs font-medium text-muted-foreground">Age: 45 • Sri Lanka</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="lg:hidden text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Pain Point</div>
                      <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                        <li>Raw data overload, hard to derive insights</li>
                        <li>Difficulty linking call quality to business</li>
                        <li>Limited visibility into customer trends</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="lg:hidden text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Impact</div>
                      <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4">
                        <li>Decision-making delays</li>
                        <li>Reactive strategies</li>
                        <li>Missed opportunities for improvements</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="lg:hidden text-xs font-bold uppercase tracking-wider text-primary mb-2">Sense AI Solution</div>
                      <div className="flex flex-col gap-2.5">
                        <div className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground">High-level dashboards with actionable insights</span>
                        </div>
                        <div className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground">Predictive analytics for proactive decision-making</span>
                        </div>
                        <div className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground">Sentiment analytics & recurring issue detection</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-8 pt-12 border-t border-border/50">
            <div className="max-w-3xl mb-10">
              <h4 className="font-display font-bold text-2xl mb-4 text-foreground">User Personas</h4>
              <p className="text-muted-foreground leading-relaxed">
                Synthesizing our research, we developed detailed user personas representing the diverse roles interacting with the platform, ensuring features aligned with specific operational workflows.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Persona 1 */}
            <AnimatedSection delay={100} className="bg-card rounded-3xl border border-border/50 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              <div className="p-6 sm:p-8 pb-4">
                {/* Persona details... */}
                <div className="flex items-center gap-4 mb-6 relative z-10 border-b border-border/50 pb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-primary/20 shadow-sm">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Nimal Perera" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-foreground leading-snug">Nimal Perera</h5>
                    <div className="text-sm font-medium text-primary mb-0.5">Customer Support Agent</div>
                    <div className="text-xs font-medium text-muted-foreground">Age: 26 | Exp: 1-3 years</div>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Goals</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Improve QA Scores, Be More Efficient</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Needs</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Instant Feedback</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Clear Tips</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Pain Points</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Delayed Feedback</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>QA Pressure</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">System Helps</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>AI Call Feedback</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Performance Dashboard</span>
                      </li>
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
                    <img src="https://i.pravatar.cc/150?img=5" alt="Shalini Fernando" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-foreground leading-snug">Shalini Fernando</h5>
                    <div className="text-sm font-medium text-primary mb-0.5">Contact Center Supervisor</div>
                    <div className="text-xs font-medium text-muted-foreground">Age: 34 | Exp: 15+ years</div>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Goals</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Ensure Team Quality, Find Skill Gaps</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Needs</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Agent Insights</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Training Tools</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Pain Points</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Manual Reviews</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Inconsistent Performance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">System Helps</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>QA Analytics</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Coaching Insights</span>
                      </li>
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
                    <img src="https://i.pravatar.cc/150?img=8" alt="Ruwan Jayasinghe" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-foreground leading-snug">Ruwan Jayasinghe</h5>
                    <div className="text-sm font-medium text-primary mb-0.5">Head of Customer Experience</div>
                    <div className="text-xs font-medium text-muted-foreground">Age: 45 | Exp: 15+ years</div>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Goals</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Boost CSAT & NPS, Strategic Decisions</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Needs</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Trends & Sentiment</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Product Feedback</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">Pain Points</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Data Overload</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Slow Insights</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-3 border-b border-border/50 pb-2">System Helps</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Trend Reports</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Sentiment Analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Ideation & Design Process Section */}
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
                Transforming research into tangible solutions requires meticulous mapping and rapid prototyping. We focused on mapping out user journeys to ensure every touchpoint was intuitive before moving into high-fidelity wireframing.
              </p>
            </div>
          </AnimatedSection>

          {/* User Journey Map - Full Width */}
          <div className="space-y-10">
            <AnimatedSection className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-secondary/10 border border-border/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-bold text-foreground">Agent Experience Journey Map</h4>
                    <p className="text-sm text-muted-foreground mt-1">Tracking the emotional arc of a support agent through the Sense AI workflow</p>
                  </div>
                </div>

                {/* Journey Stages - Horizontal Scroll on Mobile */}
                <div className="overflow-x-auto pb-4 -mx-2 px-2">
                  <div className="grid grid-cols-7 gap-3 min-w-[900px]">
                    {/* Stage Headers */}
                    {[
                      { title: "Receive Call", emoji: "😐", mood: "neutral", color: "amber" },
                      { title: "Real-Time Alerts", emoji: "😊", mood: "positive", color: "green" },
                      { title: "Call Review", emoji: "😟", mood: "negative", color: "red" },
                      { title: "Feedback Review", emoji: "😞", mood: "low", color: "red" },
                      { title: "Coaching Session", emoji: "😐", mood: "neutral", color: "amber" },
                      { title: "Next Call", emoji: "😊", mood: "positive", color: "green" },
                      { title: "Score Trending Up", emoji: "😁", mood: "high", color: "green" },
                    ].map((stage, i) => (
                      <div key={i} className="group/stage">
                        {/* Header Bar */}
                        <div className="bg-amber-400 text-amber-900 rounded-xl px-3 py-2.5 text-center mb-4">
                          <span className="font-bold text-xs sm:text-sm leading-tight block">{stage.title}</span>
                        </div>

                        {/* Emoji Mood Indicator */}
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
                      <path d="M 64 20 Q 128 8, 192 8 Q 256 8, 320 24 Q 384 28, 448 28 Q 512 24, 576 16 Q 640 8, 704 8 Q 768 4, 836 4" stroke="currentColor" className="text-primary/40" strokeWidth="2" strokeDasharray="6 4" fill="none" />
                    </svg>
                  </div>

                  {/* Stage Details */}
                  <div className="grid grid-cols-7 gap-3 min-w-[900px]">
                    {[
                      {
                        actions: [
                          { icon: Phone, text: "Receive Call" },
                          { icon: Database, text: "Sense AI starts analyzing interaction" },
                        ]
                      },
                      {
                        actions: [
                          { icon: Bell, text: "Gets live feedback & alerts" },
                          { icon: Lightbulb, text: "Tip: Adjust your tone & slow down" },
                        ]
                      },
                      {
                        actions: [
                          { icon: FileSearch, text: "Views AI score & analysis" },
                          { icon: ClipboardCheck, text: "Sees call breakdown & transcripts" },
                        ]
                      },
                      {
                        actions: [
                          { icon: MessageCircle, text: "Feedback on tone and resolution" },
                          { icon: Lightbulb, text: "Checks specific suggestions from Sense AI" },
                        ]
                      },
                      {
                        actions: [
                          { icon: GraduationCap, text: "Soundbite: \"Try empathizing more.\"" },
                          { icon: TrendingUp, text: "Skill Trend: Average empathy below peers" },
                        ]
                      },
                      {
                        actions: [
                          { icon: PhoneForwarded, text: "Applies coaching to next interaction" },
                          { icon: Sparkles, text: "AI detects improved empathy signals" },
                        ]
                      },
                      {
                        actions: [
                          { icon: TrendingUp, text: "Employee ratings trending up" },
                          { icon: BarChart3, text: "Total Sales: $1,200 → +$1,500" },
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
                  {/* Improvement Insights */}
                  <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                    <h5 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-green-600" />
                      Improvement Insights
                    </h5>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
                        <span><span className="font-semibold text-foreground">Soundbite:</span> "Try empathizing more."</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
                        <span><span className="font-semibold text-foreground">Skill Trend:</span> Average empathy below peers</span>
                      </li>
                    </ul>
                  </div>

                  {/* Agent Experience Progress */}
                  <div className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/20">
                    <h5 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-amber-600" />
                      Agent Experience Progress
                    </h5>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          Improved Empathy Score
                        </span>
                        <span className="text-green-600 font-bold">↑</span>
                      </li>
                      <li className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <BarChart3 className="w-4 h-4 text-primary" />
                          Agent Leaderboard Rank
                        </span>
                        <span className="text-amber-600 font-bold">🏅</span>
                      </li>
                      <li className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Award className="w-4 h-4 text-amber-500" />
                          Performance Bonus Earned
                        </span>
                        <span className="text-amber-600 font-bold">🏆</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Wireframes & Prototyping */}
            <AnimatedSection className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-card border border-border/50 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ClipboardCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-bold text-foreground">Wireframes & Prototyping</h4>
                    <p className="text-sm text-muted-foreground mt-1">Iterative design cycles for the most critical interfaces</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  Based on our journey maps, we developed detailed wireframes focusing on the most critical interfaces. Each screen went through multiple rounds of iteration informed by stakeholder feedback.
                </p>

                {/* Wireframe Carousel */}
                <div className="w-full pb-4 overflow-hidden">
                  <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full relative"
                  >
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {[
                        { label: "Home Dashboard", src: wireframeHome },
                        { label: "Call Insights", src: wireframeCallInsights },
                        { label: "Agent Insights", src: wireframeAgentInsights },
                        { label: "Dashboard Overview", src: wireframeHome1 },
                        { label: "Single Call Details", src: wireframeSingleCall },
                        { label: "Autopilot Mode", src: wireframeAutopilot },
                        { label: "Content Upload", src: wireframeContentUpload },
                        { label: "Login Screen", src: wireframeLogin },
                      ].map((item, i) => (
                        <CarouselItem key={i} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/2">
                          <div className="p-1">
                            <div
                              className="group/wf relative rounded-[2rem] overflow-hidden border border-border/60 bg-card cursor-zoom-in aspect-video shadow-sm hover:shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                              onClick={() => setWireframeIndex(i)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  setWireframeIndex(i);
                                }
                              }}
                              role="button"
                              tabIndex={0}
                              aria-label={`View wireframe: ${item.label}`}
                            >

                              <img
                                src={item.src}
                                alt={item.label}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/wf:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                                <h4 className="text-white font-display font-bold text-base sm:text-lg translate-y-4 opacity-0 group-hover/wf:translate-y-0 group-hover/wf:opacity-100 transition-all duration-300">
                                  {item.label}
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
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Key Features Designed Section */}
          <AnimatedSection className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t border-border/50">
            <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                Capabilities
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Key Features Designed
              </h3>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-6 mx-auto" />
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                We engineered a suite of actionable intelligence features to transform raw telecommunications data into clear, operational advantages.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: MessageSquareText,
                title: "Speech-to-Text Conversion",
                desc: "Convert spoken conversations into accurate, structured text for detailed analysis, ensuring no crucial detail is overlooked."
              },
              {
                icon: BarChart3,
                title: "Sentiment Analysis",
                desc: "Gauge emotional tones to assess customer satisfaction, frustration, or engagement, enabling proactive issue resolution."
              },
              {
                icon: Search,
                title: "Categorization & Summarization",
                desc: "Automatically categorize calls and generate concise summaries, saving time for managers to streamline follow-up actions."
              },
              {
                icon: ClipboardCheck,
                title: "KPI Extraction",
                desc: "Extract key metrics like resolution time, satisfaction scores, and agent performance on-demand to achieve performance targets."
              },
              {
                icon: TrendingUp,
                title: "Trend & Root Cause Analysis",
                desc: "Detect recurring trends across calls, pinpointing common bottlenecks, and apply root cause analysis for continuous improvement."
              },
              {
                icon: Database,
                title: "Case Classification",
                desc: "Classify calls by context and intent for faster resolution, optimized resource allocation, and prioritized critical cases."
              }
            ].map((feature, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 hover:bg-secondary/20 hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-bold text-xl mb-3 text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </AnimatedSection>
            ))}
          </div>

          {/* Visual Design Section */}
          <AnimatedSection className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t border-border/50">
            <div className="mb-10 sm:mb-14 max-w-3xl">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                UI & Aesthetics
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Visual Design
              </h3>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                The interface was designed to communicate trust, clarity, and efficiency. We established a comprehensive design system tailored to the operational demands of telecom executives and contact center agents.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-10">
            {/* Typography & Colors */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 space-y-12 sm:space-y-16">
              {/* Typography */}
              <AnimatedSection>
                <h4 className="font-display font-bold text-2xl mb-8 text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Type className="w-5 h-5 text-primary" />
                  </div>
                  Typography
                </h4>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-card border border-border/50 rounded-3xl p-5 sm:p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group flex flex-col justify-start">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 pb-3 border-b border-border/50 gap-4">
                      <div>
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5">Primary Display</div>
                        <div className="font-display text-2xl font-bold text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>Montserrat</div>
                      </div>
                      <div className="sm:text-right">
                        <div className="text-xs font-medium text-muted-foreground mb-1">Weights</div>
                        <div className="text-[10px] font-semibold text-foreground bg-secondary/50 px-2 py-0.5 rounded-full border border-border/50 inline-block">400, 500, 600, 700, 800</div>
                      </div>
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl text-foreground/80 break-words leading-tight group-hover:text-primary transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                    </div>
                  </div>

                  <div className="bg-card border border-border/50 rounded-3xl p-5 sm:p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group flex flex-col justify-start">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 pb-3 border-b border-border/50 gap-4">
                      <div>
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5">Body Text</div>
                        <div className="text-2xl font-semibold text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Plus Jakarta Sans</div>
                      </div>
                      <div className="sm:text-right">
                        <div className="text-xs font-medium text-muted-foreground mb-1">Weights</div>
                        <div className="text-[10px] font-semibold text-foreground bg-secondary/50 px-2 py-0.5 rounded-full border border-border/50 inline-block">300, 400, 500, 600, 700</div>
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl text-foreground/80 break-words leading-relaxed group-hover:text-primary transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                    </div>
                  </div>
                </div>

                {/* Type Scale */}
                <div className="mt-8 bg-card border border-border/50 rounded-3xl p-5 sm:p-6 hover:border-primary/50 transition-all group">
                  <div className="flex justify-between items-end mb-5 pb-3 border-b border-border/50">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Type Scale</div>
                    <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">1.2 Minor Third</div>
                  </div>
                  <div className="space-y-4">
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
                            fontFamily: i < 6 ? "'Montserrat', sans-serif" : "'Plus Jakarta Sans', sans-serif"
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
                <h4 className="font-display font-bold text-2xl mb-8 text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Palette className="w-5 h-5 text-primary" />
                  </div>
                  Color Architecture
                </h4>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Primary Brand Color - Large Hero Card */}
                  <div className="lg:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-card border border-border/50 p-8 sm:p-10 min-h-[280px] sm:min-h-[320px] flex flex-col justify-end shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                    <div className="relative z-10 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                      <div>
                        <div className="text-white/80 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-3">Core Brand</div>
                        <h5 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-none tracking-tight">Primary</h5>
                      </div>
                      <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 w-fit">
                        <div className="font-mono text-xl sm:text-2xl font-medium tracking-wide">#2196F3</div>
                        <div className="text-white/70 text-xs sm:text-sm text-right mt-1 font-medium">RGB 33, 150, 243</div>
                      </div>
                    </div>
                  </div>

                  {/* Accent Color */}
                  <div className="lg:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-card border border-border/50 p-8 sm:p-10 min-h-[280px] sm:min-h-[320px] flex flex-col justify-end shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="relative z-10 text-white flex flex-col justify-between h-full">
                      <div className="text-white/80 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">Highlight</div>
                      <div className="mt-auto">
                        <h5 className="font-display text-4xl sm:text-5xl font-bold mb-5 tracking-tight">Accent</h5>
                        <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 inline-block">
                          <div className="font-mono text-lg font-medium">#9C27B0</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Background & Surface */}
                  <div className="lg:col-span-5 grid grid-cols-2 gap-6">
                    {[
                      { name: "Background", color: "#FFFFFF", hex: "#FFFFFF", darkText: true },
                      { name: "Surface", color: "#424242", hex: "#424242", darkText: false },
                    ].map((c, i) => (
                      <div key={i} className="group relative overflow-hidden rounded-[2.5rem] border border-border/50 p-6 sm:p-8 flex flex-col justify-between min-h-[200px] shadow-sm hover:shadow-xl transition-all duration-300" style={{ backgroundColor: c.color }}>
                        <div className={`absolute inset-0 bg-gradient-to-tr ${c.darkText ? 'from-black/5' : 'from-white/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                        <div className={`${c.darkText ? 'text-neutral-800' : 'text-white'} relative z-10`}>
                          <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Environment</div>
                          <div className="font-display text-xl sm:text-2xl font-bold">{c.name}</div>
                        </div>
                        <div className={`font-mono text-sm relative z-10 bg-black/5 w-fit px-3 py-1.5 rounded-lg ${c.darkText ? 'text-neutral-600' : 'text-neutral-300 bg-white/10'}`}>
                          {c.hex}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Gradient & Semantic Palette Container */}
                  <div className="lg:col-span-7 bg-card border border-border/50 rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[200px] shadow-sm hover:shadow-lg transition-all duration-300">
                    {/* Abstract Background Elements */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" style={{ background: 'linear-gradient(135deg, #2196F3 0%, #9C27B0 100%)' }} />
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#2196F3]/20 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#9C27B0]/20 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 mb-10">
                      <div className="flex justify-between items-end mb-4">
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Gradient DNA</div>
                      </div>
                      <div className="h-16 w-full rounded-2xl shadow-inner relative overflow-hidden" style={{ background: 'linear-gradient(to right, #2196F3, #9C27B0)' }}>
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 ease-in-out cursor-pointer" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-5">Functional States</div>
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        {[
                          { name: "Success", color: "#4CAF50" },
                          { name: "Warning", color: "#FFC107" },
                          { name: "Error", color: "#F44336" },
                          { name: "Info", color: "#00BCD4" },
                          { name: "Pending", color: "#9E9E9E" },
                          { name: "Muted", color: "#BDBDBD" },
                        ].map((c, i) => (
                          <div key={i} className="flex items-center gap-3 bg-background border border-border/60 rounded-full py-2 pl-2 pr-4 hover:border-primary/40 hover:shadow-md transition-all cursor-default group">
                            <div className="w-6 h-6 rounded-full shadow-inner group-hover:scale-110 transition-transform" style={{ backgroundColor: c.color }} />
                            <span className="text-sm font-medium text-foreground">{c.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Screenshot Gallery */}
            <AnimatedSection className="mt-16 sm:mt-20 p-8 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3rem] bg-secondary/20 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h4 className="font-display font-bold text-2xl text-foreground flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <ClipboardCheck className="w-5 h-5 text-primary" />
                    </div>
                    High-Fidelity Screens
                  </h4>
                  <p className="text-sm text-muted-foreground max-w-xs">A comprehensive view of the final platform interfaces across multiple workflows.</p>
                </div>
                <div className="w-full pb-4 overflow-hidden">
                  <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full relative"
                  >
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {screens.map((item, i) => (
                        <CarouselItem key={i} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/2">
                          <div className="p-1">
                            <div
                              className="group/vs relative rounded-[2rem] overflow-hidden border border-border/60 bg-card cursor-zoom-in aspect-video shadow-sm hover:shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                              onClick={() => setSelectedImageIndex(i)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  setSelectedImageIndex(i);
                                }
                              }}
                              role="button"
                              tabIndex={0}
                              aria-label={`View screenshot: ${item.label}`}
                            >

                              <img
                                src={item.src}
                                alt={item.label}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/vs:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                                <h4 className="text-white font-display font-bold text-base sm:text-lg translate-y-4 opacity-0 group-hover/vs:translate-y-0 group-hover/vs:opacity-100 transition-all duration-300">
                                  {item.label}
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
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Testing & Feedback Section */}
          <AnimatedSection className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t border-border/50">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-4 mt-2">
                <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                  Validation
                </span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                  Testing &
                  <br />
                  Feedback
                </h3>
                <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pr-4">
                  Every design decision was validated through rigorous usability testing with real users, ensuring the platform genuinely improves daily workflows.
                </p>
              </div>

              <div className="lg:col-span-8 space-y-6">
                {/* Usability Testing */}
                <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                  <div className="flex items-start gap-5 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Search className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">Usability Testing</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Conducted hands-on testing sessions with contact center agents and supervisors to observe real-world interaction patterns. This revealed critical friction points in navigation flow and data interpretation that informed our redesign priorities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feedback Loop */}
                <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                  <div className="flex items-start gap-5 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MessageSquareText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-foreground">Feedback Loop</h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        User feedback was synthesized into three core improvement themes that shaped the final product:
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {[
                          { label: "Simplified Dashboards", detail: "Reduced cognitive load with focused, role-specific data views." },
                          { label: "Clearer Sentiment Visuals", detail: "Refined color systems for instant emotional state recognition." },
                          { label: "Faster Navigation", detail: "Streamlined information architecture for quicker task completion." }
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

                {/* Iterations */}
                <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                  <div className="flex items-start gap-5 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">Design Iterations</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Based on testing insights, we shipped two major design iterations:
                      </p>
                      <ul className="mt-4 space-y-3">
                        <li className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          <span><strong className="text-foreground">Proactive Call Summarization</strong> — Auto-generated concise summaries surfaced immediately post-call, eliminating the need for manual note-taking and accelerating follow-up workflows.</span>
                        </li>
                        <li className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          <span><strong className="text-foreground">Improved KPI Visibility</strong> — Redesigned metric cards with trend indicators and contextual benchmarks, making performance data actionable at a glance.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Solution Section */}
          <AnimatedSection className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t border-border/50 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[250px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center mb-12 sm:mb-16">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                The Outcome
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                The Solution
              </h3>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-8 mx-auto" />
              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-foreground">
                Sense AI Post Call Analyzer provided a robust, automated system for analyzing calls, addressing key issues such as misclassification of intents and limited data visibility.
              </p>
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-card border border-border/50 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all relative z-10">
                  <BarChart3 className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display font-bold text-xl mb-3 relative z-10 text-foreground">Real-Time Sentiment Analysis</h4>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  Enabled a clearer understanding of customer satisfaction through dynamic emotional tone tracking across every interaction.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all relative z-10">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display font-bold text-xl mb-3 relative z-10 text-foreground">Data-Driven Product Mix</h4>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  Optimized the product mix with actionable, data-driven insights derived from comprehensive call intelligence and intent classification.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all relative z-10">
                  <ClipboardCheck className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display font-bold text-xl mb-3 relative z-10 text-foreground">Automated Quality Assurance</h4>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  Elevated overall efficiency and accuracy by automating QA processes and providing actionable, targeted feedback for every agent.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Impact & Results Section */}
          <AnimatedSection className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t border-border/50">
            <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                Measurable Outcomes
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Impact & Results
              </h3>
              <div className="w-10 h-[3px] bg-primary mt-6 mb-6 mx-auto" />
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                The Sense AI Post Call Analyzer delivered tangible, measurable improvements across the entire contact center operation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                {
                  metric: "Response Accuracy",
                  desc: "Precise intent classification eliminated misrouted calls and reduced repeat contacts.",
                  icon: ClipboardCheck
                },
                {
                  metric: "Faster Resolution",
                  desc: "Automated summarization and smart routing accelerated issue resolution cycles.",
                  icon: TrendingUp
                },
                {
                  metric: "Product Quality",
                  desc: "Data-driven insights from call intelligence directly informed product improvements.",
                  icon: BarChart3
                },
                {
                  metric: "Proactive Service",
                  desc: "Predictive sentiment tracking enabled agents to intervene before escalation.",
                  icon: MessageSquareText
                },
                {
                  metric: "High-Impact Focus",
                  desc: "Case classification prioritized critical interactions for immediate attention.",
                  icon: Search
                }
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 100} className="bg-card border border-border/50 rounded-2xl p-6 relative overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-8 -mt-8 transition-transform group-hover:scale-150" />
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all relative z-10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-base mb-2 relative z-10 text-foreground">{item.metric}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed relative z-10">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </section>

      <Footer />

      {/* Lightbox Modal for High-Fidelity Screens */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 sm:p-8 transition-opacity duration-300"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors text-foreground shadow-lg z-[101]"
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Close viewer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors text-foreground shadow-lg z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => prev !== null ? (prev > 0 ? prev - 1 : screens.length - 1) : null);
            }}
            aria-label="Previous image"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors text-foreground shadow-lg z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => prev !== null ? (prev < screens.length - 1 ? prev + 1 : 0) : null);
            }}
            aria-label="Next image"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <img
            key={selectedImageIndex}
            src={screens[selectedImageIndex].src}
            alt={screens[selectedImageIndex].label}
            className="max-w-full max-h-[95vh] rounded-xl shadow-2xl object-contain border border-border/50 animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Lightbox Modal for Wireframes */}
      {wireframeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 sm:p-8 transition-opacity duration-300"
          onClick={() => setWireframeIndex(null)}
        >
          <button
            className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors text-foreground shadow-lg z-[101]"
            onClick={() => setWireframeIndex(null)}
            aria-label="Close viewer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors text-foreground shadow-lg z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setWireframeIndex((prev) => prev !== null ? (prev > 0 ? prev - 1 : wireframes.length - 1) : null);
            }}
            aria-label="Previous image"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors text-foreground shadow-lg z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setWireframeIndex((prev) => prev !== null ? (prev < wireframes.length - 1 ? prev + 1 : 0) : null);
            }}
            aria-label="Next image"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <img
            key={wireframeIndex}
            src={wireframes[wireframeIndex].src}
            alt={wireframes[wireframeIndex].label}
            className="max-w-full max-h-[95vh] rounded-xl shadow-2xl object-contain border border-border/50 animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ContactCenterPage;
