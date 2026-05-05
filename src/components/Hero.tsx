import { Button } from "./ui/button";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const heroRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

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

    const animate = () => {
      // Smooth interpolation for parallax
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
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
        <div className="max-w-5xl">

          {/* Main heading */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] py-1 tracking-tight animate-fade-up">
            <span className="block text-foreground">Crafting</span>
            <span className="block text-gradient animate-text-gradient">Digital</span>
            <span className="block text-foreground">Experiences</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up-delay">
            UI/UX Lead specializing in creating meaningful digital experiences
            that bridge the gap between business goals and human needs.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up-delay-2">
            <Button variant="hero" size="lg" onClick={scrollToWork} className="w-full sm:w-auto">
              Explore My Work
            </Button>
            <Button variant="outline_hero" size="lg" className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 animate-fade-up-delay-2">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "200+", label: "Projects Delivered" },
              { value: "100+", label: "Happy Clients" },
              { value: "12", label: "Design Awards" },
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
