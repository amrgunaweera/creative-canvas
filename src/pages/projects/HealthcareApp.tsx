import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const HealthcareAppPage = () => {
  const project = projects.find((p) => p.id === "healthcare-app");

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

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-6">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
                {project.category}
              </span>
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4">
                {project.title}
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>

              <div className="mt-7 sm:mt-8 grid grid-cols-2 gap-4">
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

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className={`h-[360px] sm:h-[420px] rounded-2xl bg-gradient-to-br ${project.color} border border-border/40`}
                />
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-card border border-border/50">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Accessibility</div>
                    <div className="mt-2 text-sm sm:text-base font-medium">WCAG 2.1 AA</div>
                    <div className="mt-1 text-xs sm:text-sm text-muted-foreground">Large touch targets, voice navigation</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-border/50">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Primary Goal</div>
                    <div className="mt-2 text-sm sm:text-base font-medium">Simplify appointments</div>
                    <div className="mt-1 text-xs sm:text-sm text-muted-foreground">Reduce stress and confusion</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-border/50">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Experience</div>
                    <div className="mt-2 text-sm sm:text-base font-medium">Mobile-first</div>
                    <div className="mt-1 text-xs sm:text-sm text-muted-foreground">Clear hierarchy and spacing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="font-display font-bold text-2xl sm:text-3xl">What we fixed</h2>
              <div className="mt-5 space-y-3">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Appointment booking reduced to a simple, guided flow
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Accessibility-first UI with larger tap targets
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Clear language and reduced cognitive load
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-5 sm:p-6 md:p-8 rounded-2xl bg-card border border-border/50">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Challenge</div>
                <p className="mt-3 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>

                <div className="mt-6 text-xs uppercase tracking-wide text-muted-foreground">Solution</div>
                <p className="mt-3 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>

                <div className="mt-6 text-xs uppercase tracking-wide text-muted-foreground">Outcome</div>
                <p className="mt-3 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 flex flex-wrap gap-2">
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
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareAppPage;
