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
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] bg-gradient-to-br from-card to-secondary rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                
                <div className="absolute top-8 left-8 right-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                    <div className="w-3 h-3 rounded-full bg-accent/60" />
                    <div className="w-3 h-3 rounded-full bg-foreground/20" />
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="font-display font-bold text-8xl text-gradient opacity-30">
                      UX
                    </div>
                    <div className="font-display font-bold text-6xl text-foreground/20 -mt-4">
                      LEAD
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 bg-background/90 backdrop-blur-xl rounded-xl p-6 border border-border/50">
                  <Quote className="w-8 h-8 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground italic">
                    "Design is not just what it looks like. Design is how it works."
                  </p>
                  <p className="mt-2 text-xs text-primary font-medium">
                    — My guiding principle
                  </p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-display font-semibold animate-float">
                8+ Years
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                About Me
              </span>
              <h1 className="font-display font-bold text-4xl md:text-6xl mt-4 leading-tight">
                Designing with purpose, leading with empathy
              </h1>

              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  I'm a UI/UX Lead with over 8 years of experience crafting digital
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

              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:hello@example.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Get in Touch
                  </a>
                </Button>
                <Button variant="outline_hero" size="lg" asChild>
                  <a href="/resume.pdf" target="_blank">
                    Download Resume
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors">
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </a>
                <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors">
                  <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                <div className="mt-2 font-display font-semibold text-lg text-foreground">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              My Approach
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-4">
              Design Philosophy
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide every project I take on
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Career Journey
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl mt-4">
                Work Experience
              </h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="pb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-display font-semibold text-xl">
                        {exp.role}
                      </h3>
                      <span className="text-primary">@</span>
                      <span className="text-muted-foreground">{exp.company}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">
                      {exp.period}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
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
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Recognition
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-4">
              Awards & Honors
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all duration-300"
              >
                <Award className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg mb-1">
                  {award.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
