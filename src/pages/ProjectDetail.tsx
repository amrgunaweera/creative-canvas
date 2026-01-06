import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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

            {/* Outcome */}
            <div>
              <h2 className="font-display font-bold text-3xl mb-6">The Outcome</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.outcome}
              </p>
            </div>

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
