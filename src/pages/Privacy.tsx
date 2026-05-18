import { ArrowLeft, Shield, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const PrivacyPage = () => {
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
                  Privacy Policy
                </h1>
                <div className="w-10 h-[3px] bg-primary mt-6 mb-8" />
                
                <div className="inline-flex items-center gap-1.5 bg-secondary/50 border border-border/50 px-3.5 py-1.5 rounded-full font-medium text-xs sm:text-sm text-muted-foreground mb-8">
                  <Calendar className="w-4 h-4 text-primary" />
                  Last Updated: May 18, 2026
                </div>

                <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At <span className="text-foreground font-semibold">AMRG Projects</span>, hosted and operated by Amrg Gunaweera, I respect your privacy and am committed to protecting your personal data. This portfolio website functions strictly as a showcase of my UI/UX design achievements, case studies, and engineering prototypes, and does not require user registration, passwords, or transaction accounts of any kind.
                  </p>
                  
                  <p>
                    I only process minimal, basic information when you voluntarily initiate contact (such as your name, email address, and message details sent directly to <a href="mailto:amrgunaweera@gmail.com" className="text-primary hover:underline font-medium">amrgunaweera@gmail.com</a>). Anonymized technical log data (including browser operating systems, page load times, and landing page visits) is collected natively by the host infrastructure solely to optimize this Site's visual performance and loading times.
                  </p>
                  
                  <p>
                    Under no circumstances is your information sold, distributed, or shared with commercial advertising engines. If you have any inquiries regarding your data, or would like to request the complete erasure of your professional correspondence from my records, please contact me directly at <span className="text-foreground font-medium">amrgunaweera@gmail.com</span>.
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

export default PrivacyPage;
