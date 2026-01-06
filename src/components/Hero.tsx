import { Button } from "./ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="animate-fade-up mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              Available for new projects
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight animate-fade-up">
            <span className="block text-foreground">Crafting</span>
            <span className="block text-gradient">Digital</span>
            <span className="block text-foreground">Experiences</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up-delay">
            UI/UX Lead specializing in creating intuitive, user-centered designs
            that bridge the gap between business goals and human needs.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap gap-4 animate-fade-up-delay-2">
            <Button variant="hero" size="xl" onClick={scrollToWork}>
              Explore My Work
            </Button>
            <Button variant="outline_hero" size="xl">
              Download Resume
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up-delay-2">
            {[
              { value: "8+", label: "Years Experience" },
              { value: "50+", label: "Projects Delivered" },
              { value: "30+", label: "Happy Clients" },
              { value: "12", label: "Design Awards" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="font-display font-bold text-3xl md:text-4xl text-gradient">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
        <button
          onClick={scrollToWork}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
