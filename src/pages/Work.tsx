import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8 line-reveal animate-slide-in"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-10 sm:mb-12 md:mb-16 animate-fade-up">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
              Work
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 max-w-4xl">
              All projects
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Explore the full list of projects and case studies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
                className={`group relative bg-card rounded-xl sm:rounded-2xl overflow-hidden hover-lift cursor-pointer block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  index === 0
                    ? "animate-fade-up"
                    : index === 1
                      ? "animate-fade-up-delay"
                      : index === 2
                        ? "animate-fade-up-delay-2"
                        : "animate-fade-up"
                }`}
                aria-label={`View project details for ${project.title}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                />

                <div className="relative p-5 sm:p-8 md:p-12 min-h-[280px] sm:min-h-[350px] md:min-h-[400px] flex flex-col justify-between">
                  <div>
                    <span className="text-primary text-xs sm:text-sm font-medium tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl mt-2 sm:mt-3 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-end justify-between mt-6 sm:mt-8 gap-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkPage;
