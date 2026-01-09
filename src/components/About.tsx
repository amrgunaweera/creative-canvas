import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-card to-secondary rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 right-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-foreground/20" />
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-display font-bold text-8xl text-gradient opacity-30">
                    UX
                  </div>
                  <div className="font-display font-bold text-6xl text-foreground/20 -mt-4">
                    LEAD
                  </div>
                </div>
              </div>

              {/* Quote card */}
              <div className="absolute bottom-8 left-8 right-8 bg-background/90 backdrop-blur-xl rounded-xl p-6 border border-border/50">
                <Quote className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm text-muted-foreground italic">
                  "Design is not just what it looks like. Design is how it works."
                </p>
                <p className="mt-2 text-xs text-primary font-medium">
                  — My guiding principle
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-display font-semibold animate-float">
              8+ Years
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              About Me
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight">
              Designing with purpose, leading with empathy
            </h2>

            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a UI/UX Lead with over 8 years of experience crafting digital
                products that people love to use. My approach combines strategic
                thinking with creative problem-solving to deliver experiences that
                drive real business results.
              </p>
              <p>
                Throughout my career, I've led design teams at startups and
                enterprises, building design systems, conducting user research,
                and shipping products used by millions. I believe great design
                is invisible—it just works.
              </p>
              <p>
                When I'm not pushing pixels, you'll find me mentoring aspiring
                designers, speaking at conferences, or exploring the intersection
                of technology and human behavior.
              </p>
            </div>

            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/about">
                Learn More About Me
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            {/* Highlights */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { label: "Based in", value: "San Francisco, CA" },
                { label: "Specialization", value: "Product Design" },
                { label: "Current Role", value: "Design Lead" },
                { label: "Education", value: "HCI Masters" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="mt-1 font-display font-semibold text-foreground">
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
