import { Button } from "./ui/button";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import resumePdf from "@/assets/cv/Mishan Gunaweera - UI UX Lead.pdf";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const heroRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<SVGGElement>(null);
  const ring2Ref = useRef<SVGGElement>(null);
  const ring3Ref = useRef<SVGGElement>(null);
  const coreRef = useRef<SVGGElement>(null);
  const panel1Ref = useRef<SVGGElement>(null);
  const panel2Ref = useRef<SVGGElement>(null);
  const panel3Ref = useRef<SVGGElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      // Spotlight coordinates
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      heroRef.current.style.setProperty("--mouse-x", `${x}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y}px`);

      // Parallax target
      targetX = (e.clientX - window.innerWidth / 2) * -0.03;
      targetY = (e.clientY - window.innerHeight / 2) * -0.03;
    };

    let rotation1 = 0;
    let rotation2 = 0;
    let rotation3 = 0;

    const animate = () => {
      // Smooth interpolation for parallax
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      // Continuous idle rotation
      rotation1 += 0.05; // Slow clockwise
      rotation2 -= 0.08; // Medium counter-clockwise
      rotation3 += 0.12; // Fast clockwise

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }

      // Parallax HUD Layers
      if (ring1Ref.current) ring1Ref.current.style.transform = `translate(${currentX * 0.5}px, ${currentY * 0.5}px) rotate(${rotation1 + currentX * 0.05}deg)`;
      if (ring2Ref.current) ring2Ref.current.style.transform = `translate(${currentX * 1.5}px, ${currentY * 1.5}px) rotate(${rotation2 + currentX * -0.1}deg)`;
      if (ring3Ref.current) ring3Ref.current.style.transform = `translate(${currentX * 2.5}px, ${currentY * 2.5}px) rotate(${rotation3 + currentX * 0.15}deg)`;
      if (coreRef.current) coreRef.current.style.transform = `translate(${currentX * 3.5}px, ${currentY * 3.5}px)`;

      // Static Panels (parallax only, no rotation)
      if (panel1Ref.current) panel1Ref.current.style.transform = `translate(${currentX * 0.5}px, ${currentY * 0.5}px)`;
      if (panel2Ref.current) panel2Ref.current.style.transform = `translate(${currentX * 1.5}px, ${currentY * 1.5}px)`;
      if (panel3Ref.current) panel3Ref.current.style.transform = `translate(${currentX * 2.5}px, ${currentY * 2.5}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-20 overflow-hidden"
    >
      {/* Interactive Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 600px at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.08), transparent 40%)`
        }}
      />

      {/* Animated & Parallax background elements */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="max-w-4xl">

              {/* Main heading */}
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-65xl lg:text-6xl xl:text-7xl leading-[1.05] py-1 tracking-tight animate-fade-up">
                <span className="block text-foreground">Where Strategy</span>
                <span className="block text-gradient animate-text-gradient">Meets Human</span>
                <span className="block text-foreground">Experience</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up-delay">
                UI/UX Lead specializing in scalable product design, intelligent user flows, and emotionally engaging experiences that align user needs with business vision.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up-delay-2">
                <Button variant="hero" size="lg" onClick={scrollToWork} className="w-full sm:w-auto">
                  Explore My Work
                </Button>
                <Button variant="outline_hero" size="lg" asChild className="w-full sm:w-auto">
                  <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 animate-fade-up-delay-2">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "200+", label: "Projects Delivered" },
                  { value: "100+", label: "Happy Clients" },
                  { value: "1000+", label: "Current Users" },
                ].map((stat, index) => (
                  <div key={index} className="text-center md:text-left">
                    <div className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-gradient">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Holographic Parallax Composition */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-center items-center relative h-[500px] xl:h-[600px] w-full" style={{ perspective: '1200px' }}>

            {/* Background Particles / Bokeh */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/40 rounded-full blur-[2px] animate-pulse" />
              <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary/40 rounded-full blur-[2px] animate-float" />
              <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-accent/30 rounded-full blur-[3px] animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white/60 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-primary/20 rounded-full blur-[4px] animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="absolute w-[120%] sm:w-[600px] xl:w-[800px] aspect-square flex items-center justify-center pointer-events-none origin-center right-[-10%] xl:right-[-20%]">
              {/* SVG HUD centered with drop shadow */}
              <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" className="overflow-visible drop-shadow-[0_0_20px_rgba(var(--primary),0.6)] scale-110 lg:scale-[1.15] xl:scale-[1.25]">
                <defs>
                  <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="glowLineReverse" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <style>
                  {`
                    @keyframes flow {
                      to { stroke-dashoffset: -2000; }
                    }
                    @keyframes flowReverse {
                      to { stroke-dashoffset: 2000; }
                    }
                    .circuit-path {
                      stroke-dasharray: 150 1500;
                      animation: flow 6s linear infinite;
                    }
                    .circuit-path-slow {
                      stroke-dasharray: 200 1800;
                      animation: flowReverse 8s linear infinite;
                    }
                    .circuit-path-fast {
                      stroke-dasharray: 100 1000;
                      animation: flow 4s linear infinite;
                    }
                  `}
                </style>

                {/* Background Track Lines */}
                <g stroke="hsl(var(--primary))" strokeWidth="0.25" opacity="0.3">
                  <path d="M 0 100 L 150 100 L 250 200 L 400 200 L 500 100 L 800 100" fill="none" />
                  <path d="M 0 500 L 200 500 L 300 600 L 600 600 L 700 500 L 800 500" fill="none" />
                  <path d="M 100 0 L 100 150 L 200 250 L 200 400 L 300 500 L 300 800" fill="none" />
                  <path d="M 600 0 L 600 200 L 500 300 L 500 500 L 600 600 L 600 800" fill="none" />
                  <path d="M 0 300 L 100 300 L 150 250 L 350 250 L 400 300 L 800 300" fill="none" />
                  <path d="M 200 800 L 200 600 L 300 500 L 500 500 L 600 400 L 800 400" fill="none" />
                  <path d="M 300 0 L 300 100 L 400 200 L 600 200 L 700 100 L 800 100" fill="none" />
                  <path d="M 0 700 L 100 700 L 200 600 L 400 600 L 500 700 L 800 700" fill="none" />
                </g>

                {/* Nodes / Junctions */}
                <g fill="hsl(var(--primary))" opacity="0.4">
                  <circle cx="150" cy="100" r="1.5" />
                  <circle cx="250" cy="200" r="2" />
                  <circle cx="400" cy="200" r="1.5" />
                  <circle cx="500" cy="100" r="2.5" />

                  <circle cx="200" cy="500" r="2" />
                  <circle cx="300" cy="600" r="2.5" />
                  <circle cx="600" cy="600" r="1.5" />
                  <circle cx="700" cy="500" r="2" />

                  <circle cx="200" cy="250" r="2" />
                  <circle cx="300" cy="500" r="3" />
                  <circle cx="500" cy="300" r="2" />

                  <circle cx="100" cy="700" r="1.5" />
                  <circle cx="500" cy="700" r="2" />
                  <circle cx="400" cy="600" r="1.5" />
                </g>

                {/* Parallax Group 1 (Deep Background - Heavily Blurred) */}
                <g className="blur-[6px]">
                  <path className="circuit-path-slow" stroke="url(#glowLine)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" d="M 100 0 L 100 150 L 200 250 L 200 400 L 300 500 L 300 800" />
                  <path className="circuit-path" stroke="url(#glowLineReverse)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" d="M 600 0 L 600 200 L 500 300 L 500 500 L 600 600 L 600 800" />
                  <path className="circuit-path-slow" stroke="url(#glowLine)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" d="M 300 0 L 300 100 L 400 200 L 600 200 L 700 100 L 800 100" />
                </g>

                {/* Parallax Group 2 (Midground) */}
                <g className="blur-[2px]">
                  <path className="circuit-path" stroke="url(#glowLine)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" d="M 0 100 L 150 100 L 250 200 L 400 200 L 500 100 L 800 100" />
                  <path className="circuit-path-slow" stroke="url(#glowLineReverse)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" d="M 0 500 L 200 500 L 300 600 L 600 600 L 700 500 L 800 500" />
                </g>

                {/* Parallax Group 3 (Foreground - Sharpest & Fastest) */}
                <g className="blur-[0.5px]">
                  <path className="circuit-path-fast" stroke="#fff" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" d="M 0 300 L 100 300 L 150 250 L 350 250 L 400 300 L 800 300" />
                  <path className="circuit-path-fast" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" d="M 200 800 L 200 600 L 300 500 L 500 500 L 600 400 L 800 400" />
                  <path className="circuit-path-fast" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" d="M 0 700 L 100 700 L 200 600 L 400 600 L 500 700 L 800 700" />

                  {/* Glowing active nodes */}
                  <circle cx="350" cy="250" r="2.5" fill="#fff" className="animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  <circle cx="500" cy="500" r="2" fill="#fff" className="animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ animationDelay: '0.5s' }} />
                  <circle cx="400" cy="300" r="3" fill="#fff" className="animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ animationDelay: '1s' }} />
                  <circle cx="200" cy="600" r="2.5" fill="#fff" className="animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ animationDelay: '0.3s' }} />
                  <circle cx="600" cy="200" r="2.5" fill="#fff" className="animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ animationDelay: '0.7s' }} />
                </g>

                {/* --- FLOATING UI ELEMENTS (Mouse Parallax) --- */}

                {/* Deep floating UI */}
                <g ref={panel1Ref} className="origin-center will-change-transform blur-[4px]">
                  <g transform="translate(150, 150) scale(0.8)" opacity="0.6">
                    <rect x="0" y="0" width="120" height="50" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="2 4" />
                    <text x="10" y="20" fill="hsl(var(--primary))" fontSize="10" fontFamily="monospace">CORE.DATA_STREAM</text>
                    <line x1="10" y1="30" x2="100" y2="30" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
                    <line x1="10" y1="38" x2="60" y2="38" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
                  </g>
                  <g transform="translate(600, 600) scale(0.7)" opacity="0.4">
                    <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="#fff" strokeWidth="1" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="2 2" />
                    <circle cx="50" cy="50" r="3" fill="#fff" />
                  </g>
                </g>

                {/* Mid floating UI */}
                <g ref={panel2Ref} className="origin-center will-change-transform blur-[2px]">
                  <g transform="translate(550, 200) scale(0.9)" opacity="0.7">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#ffb347" strokeWidth="0.5" strokeDasharray="5 5" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#fff" strokeWidth="0.5" strokeDasharray="1 3" />
                    <line x1="50" y1="0" x2="50" y2="100" stroke="#ffb347" strokeWidth="0.5" opacity="0.5" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="#ffb347" strokeWidth="0.5" opacity="0.5" />
                    <text x="55" y="45" fill="#fff" fontSize="8" fontFamily="monospace">TARGET: LOCK</text>
                    <circle cx="50" cy="50" r="2" fill="#fff" className="animate-pulse" />
                  </g>

                  <g transform="translate(100, 600) scale(0.8)" opacity="0.5">
                    <rect x="0" y="0" width="80" height="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                    <path d="M 0 20 L 80 20" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                    <path d="M 0 40 L 80 40" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                    <path d="M 0 60 L 80 60" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                    <path d="M 20 0 L 20 80" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                    <path d="M 40 0 L 40 80" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                    <path d="M 60 0 L 60 80" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                  </g>
                </g>

                {/* Foreground floating UI (Sharpest) */}
                <g ref={panel3Ref} className="origin-center will-change-transform blur-[0.5px]">
                  <g transform="translate(250, 650)" opacity="0.8">
                    <path d="M 0 0 L 20 20 L 120 20" fill="none" stroke="#fff" strokeWidth="1" opacity="0.6" />
                    <circle cx="0" cy="0" r="3" fill="#fff" />
                    <text x="30" y="15" fill="#fff" fontSize="12" fontFamily="monospace">NODE.ACTIVE // 99.8%</text>
                    <rect x="30" y="25" width="80" height="2" fill="hsl(var(--primary))" />
                    <rect x="30" y="25" width="60" height="2" fill="#fff" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToWork}
        className="absolute right-4 sm:right-8 lg:right-12 bottom-12 sm:bottom-16 flex flex-col items-center gap-6 group cursor-pointer z-20 hidden md:flex animate-fade-up-delay-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300" style={{ writingMode: 'vertical-rl' }}>
          Scroll to explore
        </span>
        <div className="relative w-[1px] h-16 sm:h-24 bg-border/50 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary animate-scroll-line" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
