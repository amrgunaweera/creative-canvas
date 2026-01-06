import { Figma, Palette, Users, Lightbulb, Layers, Zap } from "lucide-react";

const skills = [
  {
    icon: Figma,
    title: "UI Design",
    description: "Creating visually stunning interfaces with attention to every pixel, typography, and color choice.",
  },
  {
    icon: Users,
    title: "UX Research",
    description: "Deep user research methodologies including interviews, surveys, and usability testing.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description: "Building scalable component libraries and design tokens that ensure consistency at scale.",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "Aligning design decisions with business objectives and measurable outcomes.",
  },
  {
    icon: Palette,
    title: "Prototyping",
    description: "Bringing ideas to life through interactive prototypes and micro-interactions.",
  },
  {
    icon: Zap,
    title: "Leadership",
    description: "Mentoring teams, establishing design culture, and driving cross-functional collaboration.",
  },
];

const tools = [
  "Figma",
  "Framer",
  "Principle",
  "Adobe XD",
  "Sketch",
  "Miro",
  "Notion",
  "Webflow",
  "React",
  "Tailwind",
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-card/50 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Expertise
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mt-4">
            Skills & Capabilities
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools marquee */}
        <div className="mt-24 overflow-hidden">
          <h3 className="text-center font-display font-semibold text-lg mb-8 text-muted-foreground">
            Tools I Work With
          </h3>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...tools, ...tools].map((tool, index) => (
              <span
                key={index}
                className="mx-8 text-2xl md:text-3xl font-display font-bold text-foreground/20 hover:text-primary transition-colors duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
