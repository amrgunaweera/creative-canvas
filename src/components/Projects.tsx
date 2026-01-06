import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "Product Design",
    description: "A comprehensive financial management platform with intuitive data visualization and seamless user flows.",
    tags: ["UI Design", "UX Research", "Design System"],
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Healthcare App",
    category: "Mobile Experience",
    description: "Patient-centered mobile application focusing on accessibility and ease of appointment booking.",
    tags: ["Mobile UI", "Accessibility", "User Testing"],
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "E-commerce Platform",
    category: "Web Design",
    description: "End-to-end shopping experience redesign that increased conversion rates by 40%.",
    tags: ["Conversion Optimization", "UI/UX", "A/B Testing"],
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "SaaS Analytics",
    category: "Enterprise UX",
    description: "Complex data analytics tool simplified through thoughtful information architecture and visual hierarchy.",
    tags: ["Enterprise", "Data Viz", "Design System"],
    color: "from-accent/10 to-primary/20",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-20">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Selected Work
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mt-4 max-w-3xl">
            Projects that define my craft
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden hover-lift cursor-pointer"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
                <div>
                  <span className="text-primary text-sm font-medium tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl md:text-3xl mt-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-end justify-between mt-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
