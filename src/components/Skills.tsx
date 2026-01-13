import { Lightbulb, Palette, Code, Layers, Users, Zap } from "lucide-react";

const skills = [
  {
    icon: Lightbulb,
    title: "Strategy & Research",
    description:
      "Deep user research and strategic thinking to create products that truly resonate with audiences.",
  },
  {
    icon: Palette,
    title: "Visual Design",
    description:
      "Crafting beautiful interfaces with attention to typography, color, and visual hierarchy.",
  },
  {
    icon: Code,
    title: "Design Systems",
    description:
      "Building scalable design systems that ensure consistency across products and platforms.",
  },
  {
    icon: Layers,
    title: "Prototyping",
    description:
      "Creating interactive prototypes to test ideas quickly and iterate based on feedback.",
  },
  {
    icon: Users,
    title: "User Testing",
    description:
      "Conducting usability testing and A/B experiments to validate design decisions.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing designs for speed and efficiency without compromising visual quality.",
  },
];

const tools = [
  "Figma",
  "Framer",
  "Adobe XD",
  "Sketch",
  "After Effects",
  "Principle",
  "Webflow",
  "React",
  "Tailwind",
  "TypeScript",
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 bg-card/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
            Expertise
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 max-w-3xl">
            Skills & Capabilities
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 md:p-8 bg-background rounded-xl sm:rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                {skill.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools marquee */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <h3 className="text-center text-base sm:text-lg font-medium text-muted-foreground mb-6 sm:mb-8">
            Tools I Work With
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap gap-4 sm:gap-6 md:gap-8">
              {[...tools, ...tools].map((tool, index) => (
                <span
                  key={index}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-secondary rounded-full text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
