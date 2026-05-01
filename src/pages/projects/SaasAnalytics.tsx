import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const SaasAnalyticsPage = () => {
  const project = projects.find((p) => p.id === "saas-analytics");

  if (!project) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative">
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
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
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
              <div className="p-5 sm:p-6 rounded-2xl bg-card border border-border/50">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Role</div>
                <div className="mt-2 text-sm sm:text-base font-medium">{project.role}</div>
                <div className="mt-5 text-xs uppercase tracking-wide text-muted-foreground">Duration</div>
                <div className="mt-2 text-sm sm:text-base font-medium">{project.duration}</div>
                <div className="mt-5 text-xs uppercase tracking-wide text-muted-foreground">Tools</div>
                <div className="mt-2 text-sm sm:text-base font-medium">{project.tools.join(", ")}</div>
              </div>
              <div
                className={`mt-4 w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-2xl bg-gradient-to-br ${project.color} border border-border/40`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="font-display font-bold text-2xl sm:text-3xl">Problem</h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-display font-bold text-2xl sm:text-3xl">Approach</h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>

              <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-card border border-border/50">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Key decisions</div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-secondary/30">
                    <div className="font-semibold text-sm sm:text-base">Progressive disclosure</div>
                    <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                      Surface just enough context for the current job.
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/30">
                    <div className="font-semibold text-sm sm:text-base">Role-based views</div>
                    <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                      Tailor dashboards for different teams and workflows.
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/30">
                    <div className="font-semibold text-sm sm:text-base">Information architecture</div>
                    <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                      Reduce learning curve with strong hierarchy.
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/30">
                    <div className="font-semibold text-sm sm:text-base">Design system</div>
                    <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                      Consistency across complex reporting surfaces.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16">
            <h2 className="font-display font-bold text-2xl sm:text-3xl">Outcome</h2>
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

export default SaasAnalyticsPage;
