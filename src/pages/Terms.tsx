import { ArrowLeft, Scale, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <Navigation />

        <section className="pt-24 sm:pt-32 md:pt-40 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <AnimatedSection>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 sm:mb-12 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>

              <div className="max-w-3xl">
                <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm">
                  Legal
                </span>
                <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mt-4 leading-tight">
                  Terms of Service
                </h1>
                <div className="w-10 h-[3px] bg-primary mt-6 mb-8" />

                <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Welcome to <span className="text-foreground font-semibold">AMRG Projects</span>. By browsing and exploring the design case studies, interactive wireframes, and code repositories on this website, you acknowledge that you agree to be bound by these Terms of Service. This Site is provided solely for informational and professional review purposes, allowing potential collaborators and clients to evaluate my professional design and full-stack capabilities.
                  </p>

                  <p>
                    All original UI layouts, case study presentations, wireframes, user journey maps, brand tokens, and source code showcased on this Site are the copyrighted intellectual property of Amrg Gunaweera / AMRG Projects (unless licensed or credited otherwise). Certain case studies depict work delivered to corporate entities; to comply with strict Non-Disclosure Agreements (NDAs), all commercial metrics, internal data structures, and proprietary client software flows have been generalized or fully anonymized.
                  </p>

                  <p>
                    You agree not to misuse this Site, reverse-engineer its components, or perform network security attacks against its host infrastructure. For any licensing requests, collaborative inquiries, or permissions regarding the reproduction of portfolio assets, please reach out via email directly at <a href="mailto:amrgunaweera@gmail.com" className="text-primary hover:underline font-medium">amrgunaweera@gmail.com</a>.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;
