import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Image/Visual side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-gradient-to-br from-card to-secondary rounded-2xl sm:rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 right-4 sm:top-8 sm:left-8 sm:right-8">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary/60" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-accent/60" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-foreground/20" />
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4 sm:p-8">
                  <div className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient opacity-30">
                    UX
                  </div>
                  <div className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground/20 -mt-2 sm:-mt-4">
                    LEAD
                  </div>
                </div>
              </div>

              {/* Quote card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-background/90 backdrop-blur-xl rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border/50">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-3" />
                <p className="text-xs sm:text-sm text-muted-foreground italic">
                  "Design is not just what it looks like. Design is how it works."
                </p>
                <p className="mt-1.5 sm:mt-2 text-xs text-primary font-medium">
                  — My guiding principle
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full font-display font-semibold text-sm sm:text-base animate-float">
              8+ Years
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
              About Me
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 leading-tight">
              Designing with purpose, <span className="text-gradient">building with passion</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              As a UI/UX Lead with over 8 years of experience, I've had the
              privilege of working with startups and Fortune 500 companies
              alike. My approach combines strategic thinking with creative
              execution to deliver experiences that not only look beautiful but
              drive real business results.
            </p>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              I believe in the power of design to solve complex problems and
              create meaningful connections between brands and their audiences.
            </p>

            <Link to="/about">
              <Button variant="hero" size="lg" className="mt-6 sm:mt-8 w-full sm:w-auto">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: "Design Systems", value: "Expert" },
                { label: "User Research", value: "Advanced" },
                { label: "Prototyping", value: "Expert" },
                { label: "Leadership", value: "8+ Years" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 bg-secondary/50 rounded-lg sm:rounded-xl border border-border/50"
                >
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="font-display font-semibold text-base sm:text-lg mt-1">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
