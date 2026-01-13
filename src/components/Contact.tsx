import { Mail, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
            Get in Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-3 sm:mt-4 leading-tight">
            Let's create something{" "}
            <span className="text-gradient">amazing</span> together
          </h2>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Have a project in mind or just want to chat about design? I'm always
            excited to connect with fellow creators and innovators.
          </p>

          {/* Email CTA */}
          <div className="mt-8 sm:mt-12">
            <a
              href="mailto:hello@yourportfolio.com"
              className="group inline-flex items-center gap-2 sm:gap-4 font-display font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground hover:text-primary transition-colors duration-300 break-all sm:break-normal"
            >
              hello@yourportfolio.com
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 sm:mt-16 flex justify-center gap-3 sm:gap-4">
            {[
              { icon: Mail, label: "Email", href: "mailto:hello@yourportfolio.com" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>

          {/* Availability badge */}
          <div className="mt-10 sm:mt-16 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-secondary border border-border">
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">
              Currently available for freelance work
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
