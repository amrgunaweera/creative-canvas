import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, Search, MessageSquareText, Database, ClipboardCheck, TrendingUp, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import senseaiLogin from "@/assets/images/projects/contact-center/sense-ai-login.jpg";
import personasImage from "@/assets/images/projects/contact-center/personas.png";
import painPointsImage from "@/assets/images/projects/contact-center/pain points.png";
import userJourneyImage from "@/assets/images/projects/contact-center/user journey.png";

const ContactCenterPage = () => {
  const project = projects.find((p) => p.id === "contact-center");

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
              <img
                src={senseaiLogin}
                alt="SenseAI Login Interface"
                className="w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-2xl object-cover object-top border border-border/40"
              />
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border/50">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    Role
                  </div>
                  <div className="mt-1 text-sm sm:text-base font-medium">
                    {project.role}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/50">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    Duration
                  </div>
                  <div className="mt-1 text-sm sm:text-base font-medium">
                    {project.duration}
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-card border border-border/50">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">
                  Tools
                </div>
                <div className="mt-1 text-sm sm:text-base font-medium">
                  {project.tools.join(", ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Challenge Section */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4 mt-12">
              <div>
                <h3 className="font-display font-bold text-5xl uppercase tracking-tight leading-none">
                  Challenge
                </h3>
                <div className="w-10 h-[3px] bg-primary mt-6 mb-6" />
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Only 2% of calls are analyzed due to limited capacity and manual effort, leading to a catastrophic loss of actionable intelligence.
                </p>
                {/* <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-8 text-xs sm:text-sm font-semibold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  View Full Report
                  <ArrowRight className="w-4 h-4" />
                </a> */}
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                { icon: BarChart3, num: "01", title: "Limited Analysis Coverage", desc: "Manual effort limits capacity to a mere 2% sample rate." },
                { icon: Search, num: "02", title: "Misclassified Call Intents", desc: "Vague intent detection leads to poor routing and resource waste." },
                { icon: MessageSquareText, num: "03", title: "Lack of Sentiment Visibility", desc: "Inability to track customer frustration or delight at scale." },
                { icon: Database, num: "04", title: "Data Gaps", desc: "Fragmented insights prevent a holistic view of the customer journey." },
                { icon: ClipboardCheck, num: "05", title: "Weak Quality Assurance", desc: "Inconsistent QA processes result in unmonitored agent performance." },
                { icon: TrendingUp, num: "06", title: "Product Optimization Issues", desc: "Missed opportunities to iterate products based on direct feedback." },
              ].map((item) => (
                <div
                  key={item.num}
                  className="relative p-6 sm:p-7 rounded-2xl bg-secondary/50 border border-border/40 overflow-hidden group hover:bg-secondary/80 transition-colors"
                >
                  <span className="absolute top-3 right-4 font-display font-bold text-6xl sm:text-7xl text-foreground/[0.04] leading-none select-none">
                    {item.num}
                  </span>
                  <item.icon className="w-5 h-5 text-primary mb-4" />
                  <h4 className="font-semibold text-base sm:text-lg leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Goals and Objectives Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4 mt-12">
              <h2 className="font-display font-bold text-5xl leading-tight">
                Goals and
                <br />
                Objectives
              </h2>
              <div className="w-10 h-[3px] bg-primary mt-4" />
            </div>
            <div className="lg:col-span-8 sm:grid-cols-2 gap-4 sm:gap-5">
              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-foreground">
                Sense AI Post Call Analyzer provided a robust, automated system for analyzing calls, addressing key issues such as misclassification of intents and limited data visibility.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6 sm:gap-8">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  It enabled real-time sentiment analysis, ensuring a clearer understanding of customer satisfaction, while also optimizing the product mix with data-driven insights.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  By automating quality assurance and providing actionable feedback for agents, overall efficiency and accuracy was elevated.
                </p>
              </div>
            </div>
          </div>

          

          <div className="mt-10 sm:mt-12 md:mt-16">
            <h3 className="font-display font-bold text-xl sm:text-2xl">
              Process Highlights
            </h3>
            <div className="mt-6 space-y-5 sm:space-y-6">
              <div className="flex gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-base sm:text-lg">
                    Research & Discovery
                  </div>
                  <div className="mt-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <div className="space-y-4">
                      <p>
                        The global BFSI sector is facing rising customer
                        expectations, increasing competition, and an explosion
                        of data from multiple channels. Financial institutions
                        struggle with fragmented data, delayed insights, and
                        limited personalization, which impacts customer
                        retention, cross-selling opportunities, and operational
                        efficiency.
                      </p>

                      <div>
                        <strong>Sense AI Solution:</strong>
                        <ul className="mt-2 space-y-1 list-disc list-inside">
                          <li>
                            <strong>Unified Customer View:</strong> Consolidates
                            data from all channels for a single, 360° customer
                            profile.
                          </li>
                          <li>
                            <strong>Predictive Analytics:</strong> Leverages AI
                            to anticipate customer behavior, detect churn risks,
                            and identify growth opportunities.
                          </li>
                          <li>
                            <strong>Personalized Engagement:</strong> Enables
                            tailored recommendations, offers, and communications
                            at scale.
                          </li>
                          <li>
                            <strong>Operational Efficiency:</strong> Automates
                            reporting, trend analysis, and performance tracking
                            for faster, data-driven decisions.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <strong>Global Impact:</strong>
                        <p className="mt-1">
                          Sense AI empowers BFSI organizations worldwide to
                          enhance customer satisfaction, improve loyalty, and
                          drive revenue growth, while reducing manual analytics
                          effort and enabling proactive strategic decisions.
                        </p>
                      </div>
                    </div>

                    <img
                      src={painPointsImage}
                      alt="Pain points"
                      className="mt-2 rounded-lg max-w-full h-auto"
                    />

                    <ul className="space-y-1 mt-10">
                      <li>
                        <h4 className="font-semibold text-base sm:text-lg mt-4 mb-0">
                          User Personas
                        </h4>
                        <img
                          src={personasImage}
                          alt="User persona"
                          className="rounded-lg max-w-full h-auto"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-base sm:text-lg">
                    Ideation & Prototyping
                  </div>
                  <div className="mt-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <ul className="space-y-1">
                      <li>
                        <h5 className="font-semibold text-base sm:text-md mt-6 mb-2">
                          Mapping user journeys
                        </h5>

                        <img
                          src={userJourneyImage}
                          alt="User journey"
                          className="rounded-lg max-w-full h-auto"
                        />
                      </li>
                      <li>
                        Wireframes: post-call dashboards, KPI reports, sentiment
                        trackers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-base sm:text-lg">
                    Key features designed
                  </div>
                  <div className="mt-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <ul className="space-y-1">
                      <li>
                        Speech-to-text conversion → accurate transcripts for
                        compliance
                      </li>
                      <li>
                        Sentiment analysis → gauge customer satisfaction in
                        real-time
                      </li>
                      <li>
                        Call categorization & summarization → reduce manual QA
                        effort
                      </li>
                      <li>
                        KPI extraction → resolution time, satisfaction scores,
                        agent performance
                      </li>
                      <li>
                        Trends & root cause analysis → identify recurring issues
                      </li>
                      <li>
                        Case classification → prioritize high-impact cases
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-base sm:text-lg">
                    Visual Design
                  </div>
                  <div className="mt-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <ul className="space-y-1">
                      <li>Dashboard UI for BFSI executives (KPIs, trends)</li>
                      <li>
                        Agent performance view (personalized training insights)
                      </li>
                      <li>Color-coded sentiment indicators</li>
                      <li>
                        Design system aligned with BFSI trust, security, and
                        clarity
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-base sm:text-lg">
                    Testing & Feedback
                  </div>
                  <div className="mt-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <ul className="space-y-1">
                      <li>Usability testing with agents & supervisors</li>
                      <li>
                        Feedback loop: simplified dashboards, clearer sentiment
                        visuals, faster navigation
                      </li>
                      <li>
                        Iterations: added proactive call summarization, improved
                        KPI visibility
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-base sm:text-lg">
                    Final Solution
                  </div>
                  <div className="mt-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <ul className="space-y-1">
                      <li>
                        Unified AI-powered platform that integrates
                        speech-to-text, analytics, and dashboards
                      </li>
                      <li>
                        Tailored for BFSI operations — compliance-friendly,
                        secure, multi-language support
                      </li>
                      <li>Scalable across voice + messaging channels</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-10 sm:mt-12 md:mt-16">
              <div className="flex items-end justify-between gap-4">
                <h3 className="font-display font-bold text-xl sm:text-2xl">
                  Key Results
                </h3>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Selected outcomes
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 sm:p-5 rounded-xl bg-card border border-border/50"
                  >
                    <div className="font-display font-bold text-2xl sm:text-3xl">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 sm:mt-12 md:mt-16">
            <h3 className="font-display font-bold text-xl sm:text-2xl">
              Outcome
            </h3>
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

export default ContactCenterPage;
