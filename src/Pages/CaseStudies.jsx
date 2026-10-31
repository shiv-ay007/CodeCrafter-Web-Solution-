
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  ShieldCheck,
  TrendingUp,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Case Studies" },
    { id: "fintech", label: "Fintech & SaaS" },
    { id: "ecommerce", label: "E-Commerce & Retail" },
    { id: "enterprise", label: "Healthcare & Enterprise" },
    { id: "mobile", label: "Mobile & AI" },
  ];

  const caseStudiesData = [
    {
      id: 1,
      category: "fintech",
      client: "NovaPay Financial",
      badge: "Fintech Platform",
      cta: "Build Your Fintech Platform",
      title:
        "Engineered high-concurrency payment gateway processing $12M daily with 99.999% uptime.",
      summary:
        "NovaPay required a fault-tolerant microservices gateway capable of handling 5,000+ transactions per second without database bottlenecks.",
      impact: [
        "+300% TPS Scalability",
        "99.999% System Availability",
        "Sub-45ms Transaction Latency",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS Lambda", "Docker"],
    },
    {
      id: 2,
      category: "enterprise",
      client: "HealthPulse Global",
      badge: "Healthcare & Telehealth",
      cta: "Build Your Healthcare Solution",
      title:
        "Built HIPAA-compliant telehealth & electronic medical record system for 50+ clinics.",
      summary:
        "Streamlined online patient onboarding, encrypted video consultations, and automated doctor scheduling across multi-location healthcare networks.",
      impact: [
        "500k+ Active Patients",
        "75% Faster Onboarding",
        "100% HIPAA & GDPR Compliant",
      ],
      tech: [
        "Flutter",
        "FastAPI",
        "Python",
        "WebRTC",
        "PostgreSQL",
        "Kubernetes",
      ],
    },
    {
      id: 3,
      category: "ecommerce",
      client: "LuxeCraft Apparel",
      badge: "E-Commerce Portal",
      cta: "Build Your E-Commerce Store",
      title:
        "Headless e-commerce rebuild yielding 45% increase in checkout conversions & 0.4s load speed.",
      summary:
        "Migrated a legacy e-commerce store to a ultra-fast headless React setup with edge caching and instant page transitions.",
      impact: [
        "0.4s Core Web Vitals",
        "+45% Checkout Conversions",
        "2M+ Monthly Visitors",
      ],
      tech: [
        "Next.js",
        "Shopify API",
        "Tailwind CSS",
        "GraphQL",
        "Cloudflare Edge",
      ],
    },
    {
      id: 4,
      category: "enterprise",
      client: "OmniLogistics ERP",
      badge: "Supply Chain & Logistics",
      cta: "Build Your Logistics Platform",
      title:
        "Real-time fleet tracking and automated warehouse management portal for 10,000+ daily assets.",
      summary:
        "Developed an enterprise ERP dashboard aggregating real-time GPS telemetry, inventory dispatch, and automated driver payout workflows.",
      impact: [
        "38% Operational Cost Reduction",
        "10x Scalability under Load",
        "Real-Time Telemetry Tracking",
      ],
      tech: ["React", "Go Microservices", "PostgreSQL", "MQTT", "Docker", "GCP"],
    },
    {
      id: 5,
      category: "mobile",
      client: "Aura AI Assistant",
      badge: "Mobile & AI Studio",
      cta: "Build Your AI-Powered App",
      title:
        "Cross-platform mobile AI app delivering 60 FPS smooth interactions and real-time voice synthesis.",
      summary:
        "Built a native iOS and Android AI companion app utilizing Flutter and custom C++ audio processing engines.",
      impact: [
        "4.9★ App Store Rating",
        "100k+ Downloads in Month 1",
        "Sub-100ms Voice Response",
      ],
      tech: [
        "Flutter",
        "Dart",
        "Python OpenAI API",
        "WebSockets",
        "Firebase",
      ],
    },
    {
      id: 6,
      category: "fintech",
      client: "CrediFlow SaaS",
      badge: "B2B Credit & Invoicing",
      cta: "Build Your SaaS Platform",
      title:
        "Automated B2B credit scoring and recurring invoicing engine for global SaaS enterprises.",
      summary:
        "Automated invoice reconciliations, payment reminders, and multi-tenant ledger management for high-volume SaaS platforms.",
      impact: [
        "$50M+ Invoices Processed",
        "85% Less Manual Accounting",
        "SOC2 Type II Certified",
      ],
      tech: ["React", "TypeScript", "Node.js", "Stripe API", "PostgreSQL"],
    },
  ];

  const impactMetrics = [
    {
      industry: "Fintech & Payments",
      stat: "99.999%",
      statLabel: "Uptime Availability SLA",
      icon: <Zap className="h-6 w-6 text-[#4EF0C5]" />,
      points: [
        "Sub-45ms P99 Latency",
        "5,000+ TPS Capacity",
        "SOC2 & PCI Compliant",
      ],
    },
    {
      industry: "Healthcare & Telehealth",
      stat: "500k+",
      statLabel: "Active Patient Records",
      icon: <ShieldCheck className="h-6 w-6 text-[#4EF0C5]" />,
      points: [
        "100% HIPAA Compliance",
        "Encrypted WebRTC Video",
        "75% Faster Onboarding",
      ],
    },
    {
      industry: "E-Commerce & Retail",
      stat: "+45%",
      statLabel: "Checkout Conversion Lift",
      icon: <TrendingUp className="h-6 w-6 text-[#4EF0C5]" />,
      points: [
        "0.4s Core Web Vitals",
        "2M+ Monthly Visitors",
        "Headless React Architecture",
      ],
    },
    {
      industry: "Logistics & Enterprise",
      stat: "10,000+",
      statLabel: "Real-time GPS Assets",
      icon: <Activity className="h-6 w-6 text-[#4EF0C5]" />,
      points: [
        "38% Cost Reduction",
        "Real-time Telemetry",
        "10x Concurrency Peak Load",
      ],
    },
  ];

  const filteredStudies =
    activeCategory === "all"
      ? caseStudiesData
      : caseStudiesData.filter(
          (item) => item.category === activeCategory
        );

  const cardThemes = [
    {
      top: "from-[#D9F0F0] to-[#EDF7F5]",
      icon: "bg-[#DDF0EE] text-[#006477]",
      accent: "bg-[#008B96]",
    },
    {
      top: "from-[#E5E5F8] to-[#F2F0FA]",
      icon: "bg-[#E9E7F8] text-[#6256A0]",
      accent: "bg-[#7669B2]",
    },
    {
      top: "from-[#F5EADB] to-[#FBF5EA]",
      icon: "bg-[#F7EBDD] text-[#95652E]",
      accent: "bg-[#B78343]",
    },
    {
      top: "from-[#DDECF5] to-[#EDF5F8]",
      icon: "bg-[#DCECF4] text-[#326B88]",
      accent: "bg-[#397D9D]",
    },
    {
      top: "from-[#E4F0E8] to-[#F1F7F0]",
      icon: "bg-[#E1F0E5] text-[#3D8058]",
      accent: "bg-[#4D9567]",
    },
    {
      top: "from-[#F1E8F2] to-[#F8F2F7]",
      icon: "bg-[#F1E5F1] text-[#895E8B]",
      accent: "bg-[#9B6D9E]",
    },
  ];

  return (
    <main className="relative w-full overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] text-slate-800">

      {/* ==================================================
          01. HERO SECTION
      ================================================== */}

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#E5F1F3] via-[#E7F5F5] to-[#EAEFF6] px-4 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-40 lg:px-8 lg:pt-44">

        <div className="pointer-events-none absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 top-10 h-[450px] w-[450px] rounded-full bg-teal-300/20 blur-[110px]" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[700px] -translate-x-1/2 rounded-full bg-white/50 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658] shadow-sm backdrop-blur-md sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#008B9F]" />
            <span>📊 Proven Client Impact & Case Studies</span>
          </div>

          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl font-['Outfit',sans-serif]">
            Real Production Impact for{" "}
            <span className="bg-gradient-to-r from-[#004658] via-[#00748A] to-[#00A8CC] bg-clip-text text-transparent">
              World-Class Brands
            </span>
          </h1>

          <p className="mx-auto mb-11 max-w-3xl text-base font-normal leading-relaxed text-slate-600 sm:text-xl">
            Explore how CodeCrafter helped fast-growing startups and
            enterprises engineer scalable platforms, double conversions,
            and eliminate technical debt.
          </p>

          {/* Hero Quick Stat Metrics */}

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">

            {[
              ["100+", "Production Apps Shipped"],
              ["$50M+", "Client Revenue Scaled"],
              ["99.99%", "Average Uptime"],
              ["4.9 / 5", "Client Rating"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl border border-white bg-white/80 p-4 shadow-[0_10px_30px_rgba(0,70,88,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(0,70,88,0.12)] sm:p-5"
              >
                <div
                  className={`absolute left-0 top-0 h-1 w-full ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-[#004658] to-[#00A8CC]"
                      : "bg-gradient-to-r from-[#7A75B8] to-[#B5A8DB]"
                  }`}
                />

                <p className="text-2xl font-extrabold text-[#004658] sm:text-3xl font-['Outfit',sans-serif]">
                  {value}
                </p>

                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ==================================================
          02. FILTER TABS
      ================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#E4EFF0] via-[#EFF5F4] to-[#E8EEF5] px-4 py-8 sm:px-6 lg:px-8">

        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-1/4 top-0 h-32 w-32 rounded-full bg-cyan-200 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-32 w-32 rounded-full bg-violet-200 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="mb-5 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#52717B]">
              Explore Our Work
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`cursor-pointer rounded-full px-5 py-3 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  activeCategory === cat.id
                    ? "bg-[#004658] text-white shadow-[0_8px_20px_rgba(0,70,88,0.22)]"
                    : "border border-white bg-white/75 text-slate-700 shadow-sm backdrop-blur-sm hover:-translate-y-1 hover:border-[#00869B]/40 hover:text-[#004658]"
                }`}
              >
                {cat.label}
              </button>
            ))}

          </div>
        </div>
      </section>


      {/* ==================================================
          03. CASE STUDIES GRID
      ================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-[#EFF5F5] via-[#F8F9F7] to-[#EDF2F6] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-100/70 blur-[110px]" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-100/60 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00869B]">
                Client Success Stories
              </span>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl font-['Outfit',sans-serif]">
                Projects That Deliver Results
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              Showing {filteredStudies.length} case studies
            </span>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">

            {filteredStudies.map((study) => {
              const theme = cardThemes[(study.id - 1) % cardThemes.length];

              return (
                <article
                  key={study.id}
                  className="group relative flex flex-col overflow-hidden rounded-[26px] border border-white bg-white shadow-[0_12px_35px_rgba(0,50,65,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#B8D9DC] hover:shadow-[0_24px_50px_rgba(0,50,65,0.13)]"
                >

                  {/* Card Top Accent */}

                  <div className={`relative h-3 bg-gradient-to-r ${theme.top}`} />

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">

                    <div>

                      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#004658]">
                          {study.client}
                        </span>

                        <span className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${theme.icon}`}>
                          {study.badge}
                        </span>

                      </div>

                      <h3 className="mb-4 text-lg font-bold leading-snug text-slate-950 transition-colors group-hover:text-[#005D70] sm:text-xl font-['Outfit',sans-serif]">
                        {study.title}
                      </h3>

                      <p className="mb-6 text-xs leading-7 text-slate-600 sm:text-sm">
                        {study.summary}
                      </p>

                      {/* Key Impact Badges */}

                      <div className="mb-7 space-y-3">

                        {study.impact.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 text-xs font-semibold text-slate-800 sm:text-sm"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                              <CheckCircle2 size={14} />
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}

                      </div>

                    </div>

                    <div>

                      {/* Tech Stack Pills */}

                      <div className="mb-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">

                        {study.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="rounded-md border border-slate-100 bg-[#F3F6F7] px-2.5 py-1 text-[10px] font-medium text-slate-600 transition-colors hover:border-[#A9D3D7] hover:bg-[#E8F4F4] hover:text-[#004658]"
                          >
                            {t}
                          </span>
                        ))}

                      </div>

                      <Link
                        to="/schedule-consultation"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#004658] transition-all hover:gap-3 hover:text-[#0093A8] sm:text-sm"
                      >
                        <span>{study.cta}</span>
                        <ArrowUpRight size={17} />
                      </Link>

                    </div>
                  </div>

                  <div className={`absolute bottom-0 left-0 h-1 w-0 ${theme.accent} transition-all duration-500 group-hover:w-full`} />

                </article>
              );
            })}

          </div>

          {filteredStudies.length === 0 && (
            <div className="rounded-3xl border border-white bg-white/80 p-12 text-center shadow-sm">
              <p className="text-lg font-semibold text-slate-700">
                No case studies found.
              </p>
            </div>
          )}

        </div>
      </section>


      {/* ==================================================
          04. INDUSTRY PERFORMANCE BENCHMARKS
      ================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#E5EEEE] via-[#EFF4F2] to-[#E6EDF3] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[30px] border border-[#0C5660]/30 bg-gradient-to-br from-[#003C48] via-[#002D38] to-[#001C27] p-7 text-white shadow-[0_25px_65px_rgba(0,40,50,0.18)] sm:rounded-[36px] sm:p-10 lg:p-12">

            {/* Ambient background */}

            <div className="pointer-events-none absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-[#00B9C9]/15 blur-[120px]" />

            <div className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-[#4EF0C5]/10 blur-[110px]" />

            <div className="pointer-events-none absolute right-10 top-10 h-56 w-56 rounded-full border border-white/5" />

            <div className="relative z-10 mb-12 max-w-3xl">

              <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4EF0C5]">
                <Sparkles size={15} />
                Performance Benchmarks
              </span>

              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl font-['Outfit',sans-serif]">
                Measurable Business Impact Across Industries
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Every production release delivers proven quantitative results
                — from sub-50ms API response times to multi-million dollar
                conversion scaling.
              </p>

            </div>

            <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {impactMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#4EF0C5]/40 hover:bg-white/[0.10]"
                >

                  <div>

                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#4EF0C5]/20 bg-[#4EF0C5]/10 transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>

                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#4EF0C5]">
                      {item.industry}
                    </span>

                    <p className="mb-1 text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
                      {item.stat}
                    </p>

                    <p className="mb-6 text-xs font-semibold text-slate-300">
                      {item.statLabel}
                    </p>

                  </div>

                  <div className="space-y-3 border-t border-white/10 pt-5">

                    {item.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center gap-2 text-xs font-medium text-slate-300"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4EF0C5]" />
                        <span>{pt}</span>
                      </div>
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          05. FEATURED SPOTLIGHT
      ================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F1EDE5] via-[#F7F4EE] to-[#EAF1F2] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-amber-200/30 blur-[110px]" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#003D49] via-[#002D38] to-[#001B26] p-7 text-white shadow-[0_25px_65px_rgba(0,40,50,0.18)] sm:rounded-[36px] sm:p-10 lg:p-12">

            <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-cyan-300/10" />

            <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-7">

                <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4EF0C5]">
                  <Sparkles size={15} />
                  Flagship Case Spotlight
                </span>

                <h2 className="mb-5 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl font-['Outfit',sans-serif]">
                  NovaPay: Scaling Payment Gateway to $12M Daily Volume
                </h2>

                <p className="mb-7 text-sm leading-7 text-slate-300 sm:text-base">
                  "CodeCrafter re-engineered our core transaction processing
                  engine from scratch. Their team delivered sub-50ms API
                  latency, zero downtime during high-concurrency flash sales,
                  and flawless compliance documentation."
                </p>

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#4EF0C5] bg-[#006071] text-lg font-bold text-white">
                    NP
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Chief Technology Officer
                    </p>

                    <p className="mt-1 text-xs text-[#4EF0C5]">
                      NovaPay Financial Global
                    </p>
                  </div>

                </div>

              </div>


              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm lg:col-span-5">

                <div className="mb-6 flex items-center justify-between">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#4EF0C5]">
                    Project Snapshot
                  </h4>

                  <span className="rounded-full border border-[#4EF0C5]/20 bg-[#4EF0C5]/10 px-3 py-1 text-[10px] font-bold text-[#4EF0C5]">
                    COMPLETED
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">

                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <span className="text-slate-400">Architecture:</span>
                    <span className="text-right font-semibold text-white">
                      Event-Driven Microservices
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <span className="text-slate-400">Database:</span>
                    <span className="text-right font-semibold text-white">
                      PostgreSQL + Redis Cluster
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <span className="text-slate-400">Throughput:</span>
                    <span className="text-right font-semibold text-white">
                      5,000+ Transactions / Sec
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-400">Delivery Timeline:</span>
                    <span className="text-right font-semibold text-[#4EF0C5]">
                      12 Weeks On-Time
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ==================================================
          06. FINAL CTA SECTION
      ================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#E1EFF1] via-[#EFF5F4] to-[#E9EEF5] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">

        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-[100px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-teal-300/20 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#004B59] via-[#003D49] to-[#002A35] px-6 py-12 text-center text-white shadow-[0_25px_60px_rgba(0,40,50,0.20)] sm:rounded-[36px] sm:px-12 sm:py-14 lg:px-16">

            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-cyan-300/10" />

            <div className="pointer-events-none absolute -left-20 -bottom-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px]" />

            <div className="relative z-10">

              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#4EF0C5]/20 bg-[#4EF0C5]/10 text-[#4EF0C5]">
                <TrendingUp size={25} />
              </div>

              <span className="mb-4 inline-block rounded-full border border-[#4EF0C5]/20 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#4EF0C5] sm:text-xs">
                Let's Build Something Great
              </span>

              <h3 className="mx-auto max-w-3xl text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl font-['Outfit',sans-serif]">
                Ready to Become Our Next Success Story?
              </h3>

              <p className="mx-auto mb-8 mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Let's discuss your product goals, technical architecture,
                and roadmap with our Lead Engineers.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">

                <Link
                  to="/schedule-consultation"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#004658] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#4EF0C5] sm:w-auto sm:px-8"
                >
                  Schedule Consultation Call
                  <ArrowUpRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:px-8"
                >
                  Contact Sales Team
                  <ArrowUpRight size={17} />
                </Link>

              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-300">

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#4EF0C5]" />
                  Scalable Solutions
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#4EF0C5]" />
                  Reliable Engineering
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#4EF0C5]" />
                  Business-Focused Results
                </span>

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default CaseStudies;
