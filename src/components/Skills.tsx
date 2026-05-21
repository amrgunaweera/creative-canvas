import { Lightbulb, Palette, Code, LayoutTemplate, GitMerge, Layers, ImagePlus, Users, Zap, Film, Clapperboard, PenTool, Layout, Terminal, Box, Globe, Smartphone, Monitor, Database, Settings, Sparkles, Bot } from "lucide-react";

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

const toolsRow1 = [
  { name: "Figma", icon: LayoutTemplate, type: "Design" },
  { name: "Framer", icon: Layout, type: "Prototyping" },
  { name: "React", icon: Code, type: "Frontend" },
  { name: "Adobe After Effect", icon: Clapperboard, type: "Animation" },
  { name: "Tailwind CSS", icon: Palette, type: "Styling" },
  { name: "Adobe Premiere Pro", icon: Film, type: "Video Editing" },
  { name: "Loveable AI", icon: Film, type: "Prototyping" },
];

const toolsRow2 = [
  { name: "Adobe Photoshop", icon: ImagePlus, type: "Design" },
  { name: "AI Agents", icon: Bot, type: "Automation" },
  { name: "Affinity", icon: Layers, type: "Design" },
  { name: "Angular", icon: Code, type: "Framework" },
  { name: "Adobe Illustrator", icon: PenTool, type: "Creative" },
  { name: "Git", icon: GitMerge, type: "Version Control" },
  { name: "Material Design", icon: Layers, type: "Design System" },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 py-16 sm:py-24 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
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
              className="group p-5 sm:p-6 md:p-8 bg-background rounded-xl sm:rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3 relative z-10">
                {skill.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed relative z-10">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools Section - Creative Dual Marquee */}
        <div className="mt-24 sm:mt-32 relative">
          <div className="flex flex-col items-center justify-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono text-primary tracking-wider uppercase">Arsenal</span>
            </div>
            <h3 className="text-center font-display text-2xl sm:text-3xl font-bold text-foreground">
              Tools I Work With
            </h3>
          </div>

          <div
            className="relative flex flex-col gap-4 sm:gap-6 overflow-hidden"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            {/* Row 1 - Moves Left */}
            <div className="flex w-[200%]">
              <div className="flex animate-marquee gap-4 sm:gap-6 min-w-full justify-around pr-4 sm:pr-6">
                {[...toolsRow1, ...toolsRow1].map((tool, index) => (
                  <div
                    key={`row1-${index}`}
                    className="flex-shrink-0 group flex items-center gap-4 px-5 py-3 sm:px-6 sm:py-4 bg-background/60 backdrop-blur-md border border-white/5 rounded-2xl hover:border-primary/40 hover:bg-card transition-all duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <tool.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-sm sm:text-base">{tool.name}</div>
                      <div className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{tool.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Moves Right */}
            <div className="flex w-[200%]">
              <div className="flex animate-marquee-reverse gap-4 sm:gap-6 min-w-full justify-around pr-4 sm:pr-6">
                {[...toolsRow2, ...toolsRow2].map((tool, index) => (
                  <div
                    key={`row2-${index}`}
                    className="flex-shrink-0 group flex items-center gap-4 px-5 py-3 sm:px-6 sm:py-4 bg-background/60 backdrop-blur-md border border-white/5 rounded-2xl hover:border-primary/40 hover:bg-card transition-all duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <tool.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-sm sm:text-base">{tool.name}</div>
                      <div className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{tool.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
