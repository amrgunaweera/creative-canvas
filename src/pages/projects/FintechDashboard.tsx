import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const FintechDashboardPage = () => {
  const project = projects.find((p) => p.id === "fintech-dashboard");

  if (!project) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
                {project.category}
              </span>
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-3 sm:mt-4">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4 sm:mt-6 leading-relaxed">
                {project.fullDescription}
              </p>

              <div className="mt-7 sm:mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary rounded-full text-xs sm:text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className={`w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-2xl bg-gradient-to-br ${project.color} border border-border/40`}
              />
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border/50">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Role</div>
                  <div className="mt-1 text-sm sm:text-base font-medium">{project.role}</div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/50">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Duration</div>
                  <div className="mt-1 text-sm sm:text-base font-medium">{project.duration}</div>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-card border border-border/50">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Tools</div>
                <div className="mt-1 text-sm sm:text-base font-medium">{project.tools.join(", ")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="font-display font-bold text-2xl sm:text-3xl">The Challenge</h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-display font-bold text-2xl sm:text-3xl">The Solution</h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-10 sm:mt-12 md:mt-16">
              <div className="flex items-end justify-between gap-4">
                <h3 className="font-display font-bold text-xl sm:text-2xl">Key Results</h3>
                <div className="text-xs sm:text-sm text-muted-foreground">Selected outcomes</div>
              </div>
              <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 sm:p-5 rounded-xl bg-card border border-border/50"
                  >
                    <div className="font-display font-bold text-2xl sm:text-3xl">{metric.value}</div>
                    <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.processSteps && project.processSteps.length > 0 && (
            <div className="mt-10 sm:mt-12 md:mt-16">
              <h3 className="font-display font-bold text-xl sm:text-2xl">Process Highlights</h3>
              <div className="mt-6 space-y-5 sm:space-y-6">
                {project.processSteps.map((step, idx) => (
                  <div key={step.title} className="flex gap-4 sm:gap-5">
                    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-base sm:text-lg">{step.title}</div>
                      <div className="mt-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 sm:mt-12 md:mt-16">
            <h3 className="font-display font-bold text-xl sm:text-2xl">Outcome</h3>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FintechDashboardPage;
