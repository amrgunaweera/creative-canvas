import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const EcommercePlatformPage = () => {
  const project = projects.find((p) => p.id === "ecommerce-platform");

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

          <div className="max-w-5xl">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
              {project.category}
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-3 sm:mt-4">
              {project.title}
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {project.fullDescription}
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid lg:grid-cols-12 gap-6 sm:gap-8">
            <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-card border border-border/50">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">Role</div>
              <div className="mt-2 text-sm sm:text-base font-medium">{project.role}</div>
              <div className="mt-5 text-xs uppercase tracking-wide text-muted-foreground">Duration</div>
              <div className="mt-2 text-sm sm:text-base font-medium">{project.duration}</div>
              <div className="mt-5 text-xs uppercase tracking-wide text-muted-foreground">Tools</div>
              <div className="mt-2 text-sm sm:text-base font-medium">{project.tools.join(", ")}</div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 sm:p-6 rounded-2xl bg-card border border-border/50">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">Before</div>
                      <div className="mt-2 font-semibold text-base sm:text-lg">Friction-heavy checkout</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Too many steps, unclear progress, and lack of trust signals drove abandonment.
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-card border border-border/50">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">After</div>
                  <div className="mt-2 font-semibold text-base sm:text-lg">Single-page checkout</div>
                  <div className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Clear hierarchy, reduced form fields, and smarter defaults.
                  </div>
                </div>
              </div>

              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-card border border-border/50">
                  <div className="font-display font-bold text-2xl">40%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">Conversion lift</div>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border/50">
                  <div className="font-display font-bold text-2xl">-33%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">Fewer steps</div>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border/50">
                  <div className="font-display font-bold text-2xl">+25%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">Avg. order value</div>
                </div>
              </div>

              <div
                className={`mt-6 h-[240px] sm:h-[320px] md:h-[380px] rounded-2xl bg-gradient-to-br ${project.color} border border-border/40`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="font-display font-bold text-2xl sm:text-3xl">Challenge</h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-display font-bold text-2xl sm:text-3xl">Solution</h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
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

export default EcommercePlatformPage;
