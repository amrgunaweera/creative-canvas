import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8 line-reveal animate-slide-in"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-3xl animate-fade-up">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
              Legal
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 sm:mt-4">
              Terms of Service
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
              This is sample terms content for a portfolio site. Replace this text with your actual terms.
            </p>

            <div className="mt-8 sm:mt-10 space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-display font-semibold text-lg sm:text-xl text-foreground mb-2">
                  Use of the site
                </h2>
                <p>
                  You may browse and share links to this site for personal and informational purposes. Do not misuse or attempt to disrupt the site.
                </p>
              </div>

              <div>
                <h2 className="font-display font-semibold text-lg sm:text-xl text-foreground mb-2">
                  Intellectual property
                </h2>
                <p>
                  All content on this site (unless otherwise noted) is owned by the site owner and may not be copied or redistributed without permission.
                </p>
              </div>

              <div>
                <h2 className="font-display font-semibold text-lg sm:text-xl text-foreground mb-2">
                  Disclaimer
                </h2>
                <p>
                  This site is provided “as is” without warranties of any kind. We are not liable for any damages arising from use of the site.
                </p>
              </div>

              <div>
                <h2 className="font-display font-semibold text-lg sm:text-xl text-foreground mb-2">
                  Contact
                </h2>
                <p>
                  Questions about these terms? Contact us at <span className="text-foreground">hello@example.com</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;
