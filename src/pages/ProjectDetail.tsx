import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-4xl mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              {project.category}
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl mt-4 text-gradient">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/50">
            <div>
              <span className="text-sm text-muted-foreground uppercase tracking-wide">Role</span>
              <p className="font-medium mt-1">{project.role}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground uppercase tracking-wide">Duration</span>
              <p className="font-medium mt-1">{project.duration}</p>
            </div>
            <div className="col-span-2">
              <span className="text-sm text-muted-foreground uppercase tracking-wide">Tools</span>
              <p className="font-medium mt-1">{project.tools.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image Placeholder */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            className={`w-full h-[400px] md:h-[600px] rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
          >
            <span className="text-muted-foreground text-lg">Project Visuals</span>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Challenge */}
            <div>
              <h2 className="font-display font-bold text-3xl mb-6">The Challenge</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="font-display font-bold text-3xl mb-6">The Solution</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="py-12 border-y border-border/50">
                <h2 className="font-display font-bold text-3xl mb-8 text-center">Key Results</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
                        {metric.value}
                      </div>
                      <div className="text-muted-foreground text-sm mt-2">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process Steps */}
            {project.processSteps && project.processSteps.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-3xl mb-8">Design Process</h2>
                <div className="space-y-8">
                  {project.processSteps.map((step, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-3xl mb-8">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.keyFeatures.map((feature, index) => (
                    <div key={index} className="p-6 bg-card rounded-xl border border-border/50">
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcome */}
            <div>
              <h2 className="font-display font-bold text-3xl mb-6">The Outcome</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.outcome}
              </p>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div className="relative p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border/50">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                  "{project.testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{project.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{project.testimonial.role}</div>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-8 border-t border-border/50">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-8">
            <span className="text-muted-foreground text-sm uppercase tracking-wide">
              Next Project
            </span>
          </div>
          <Link to={`/project/${nextProject.id}`} className="group block">
            <div className="flex items-center justify-center gap-4">
              <h3 className="font-display font-bold text-4xl md:text-6xl group-hover:text-gradient transition-all duration-300">
                {nextProject.title}
              </h3>
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
