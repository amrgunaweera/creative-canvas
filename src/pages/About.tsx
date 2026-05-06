import { Quote, Award, Users, Lightbulb, Target, Mail, Linkedin, Twitter, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const experiences = [
    {
      role: "Design Lead",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description: "Leading a team of 8 designers, establishing design systems, and driving product strategy for enterprise SaaS solutions.",
    },
    {
      role: "Senior UX Designer",
      company: "StartupHub",
      period: "2018 - 2021",
      description: "Redesigned core product experience resulting in 40% increase in user engagement and 25% reduction in churn.",
    },
    {
      role: "UX Designer",
      company: "Digital Agency Co.",
      period: "2016 - 2018",
      description: "Crafted experiences for Fortune 500 clients across fintech, healthcare, and e-commerce sectors.",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "User-Centered",
      description: "Every decision starts with understanding the people who will use the product.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries while staying grounded in practical, achievable solutions.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Design isn't just aesthetics—it's about measurable business impact.",
    },
  ];

  const awards = [
    { title: "Design Excellence Award", org: "AIGA", year: "2023" },
    { title: "Best Mobile Experience", org: "Webby Awards", year: "2022" },
    { title: "UX Design of the Year", org: "Awwwards", year: "2021" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8 line-reveal animate-slide-in"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1 animate-fade-up-delay">
              <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-gradient-to-br from-card to-secondary rounded-2xl sm:rounded-3xl overflow-hidden relative hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />

                <div className="absolute top-4 left-4 right-4 sm:top-8 sm:left-8 sm:right-8">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary/60" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-accent/60" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-foreground/20" />
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/ux_lead_graphic.png"
                    alt="UX Lead Graphic"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-background/90 backdrop-blur-xl rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border/50">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-3" />
                  <p className="text-xs sm:text-sm text-muted-foreground italic">
                    "Design is not just what it looks like. Design is how it works."
                  </p>
                  <p className="mt-1.5 sm:mt-2 text-xs text-primary font-medium">
                    — My guiding principle
                  </p>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full font-display font-semibold text-sm sm:text-base animate-float">
                15+ Years
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 animate-fade-up">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
                About Me
              </span>
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 leading-tight animate-fade-up">
                Designing with purpose, leading with empathy
              </h1>

              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg animate-fade-up-delay">
                <p>
                  I'm a UI/UX Lead with over 15 years of experience crafting digital
                  products that people love to use. My approach combines strategic
                  thinking with creative problem-solving to deliver experiences that
                  drive real business results.
                </p>
                <p>
                  Throughout my career, I've led design teams at startups and
                  enterprises, building design systems, conducting user research,
                  and shipping products used by millions.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up-delay-2">
                <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                  <a href="mailto:hello@example.com">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Get in Touch
                  </a>
                </Button>
                <Button variant="outline_hero" size="lg" asChild className="w-full sm:w-auto">
                  <a href="/resume.pdf" target="_blank">
                    Download Resume
                  </a>
                </Button>
              </div>

              <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 animate-fade-up-delay-2">
                <a href="#" className="p-2.5 sm:p-3 rounded-full bg-card border border-border hover:border-primary transition-colors">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hover:text-primary" />
                </a>
                <a href="#" className="p-2.5 sm:p-3 rounded-full bg-card border border-border hover:border-primary transition-colors">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { label: "Based in", value: "San Francisco, CA" },
              { label: "Specialization", value: "Product Design" },
              { label: "Current Role", value: "Design Lead" },
              { label: "Education", value: "HCI Masters" },
            ].map((item, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="mt-1 sm:mt-2 font-display font-semibold text-sm sm:text-base md:text-lg text-foreground">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 animate-fade-up">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
              My Approach
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mt-3 sm:mt-4">
              Design Philosophy
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
              The principles that guide every project I take on
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover-lift"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg sm:text-xl mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
                Career Journey
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mt-3 sm:mt-4">
                Work Experience
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 sm:pl-8 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[7px] sm:-left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary" />
                  <div className="pb-6 sm:pb-8">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                      <h3 className="font-display font-semibold text-lg sm:text-xl">
                        {exp.role}
                      </h3>
                      <span className="text-primary">@</span>
                      <span className="text-sm sm:text-base text-muted-foreground">{exp.company}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                      {exp.period}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 animate-fade-up">
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
              Recognition
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mt-3 sm:mt-4">
              Awards & Honors
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="font-display font-semibold text-base sm:text-lg mb-1">
                  {award.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {award.org} • {award.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
