
import React from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Activity,
  Database,
  GitBranch,
  Check,
  ArrowUpRight,
} from "lucide-react";

const EngineeringStandards = () => {
  const pillars = [
    {
      id: "architecture",
      title: "Clean Architecture & SOLID Principles",
      icon: <Layers className="w-6 h-6 text-[#004658]" />,
      description:
        "We enforce strict separation of concerns, domain-driven design, and modular codebases that ensure new features can be added without introducing regressions or code bloat.",
      highlights: [
        "Domain-Driven Design (DDD)",
        "Decoupled Business Logic",
        "Zero Spaghetti Dependencies",
        "Strict SOLID Enforcement",
      ],
    },
    {
      id: "testing",
      title: "Automated Testing & CI/CD Pipelines",
      icon: <ShieldCheck className="w-6 h-6 text-[#004658]" />,
      description:
        "Every pull request passes through automated unit tests, integration suites, and static analysis gates before reaching production.",
      highlights: [
        "90%+ Code Coverage Target",
        "Automated Cypress & Playwright E2E",
        "GitHub Actions & GitLab CI",
        "Zero-Downtime Blue-Green Deployments",
      ],
    },
    {
      id: "performance",
      title: "High Performance & Low Latency",
      icon: <Zap className="w-6 h-6 text-[#004658]" />,
      description:
        "From sub-millisecond database queries to optimized JS bundles and CDN caching, we optimize every layer of the application for ultra-fast response times.",
      highlights: [
        "Sub-50ms P99 API Latency",
        "Redis & Edge Caching",
        "Database Index & Query Tuning",
        "Lighthouse 95+ Core Web Vitals",
      ],
    },
    {
      id: "security",
      title: "Static Code Analysis & Peer Reviews",
      icon: <Code2 className="w-6 h-6 text-[#004658]" />,
      description:
        "No code enters main without a mandatory double-peer review by Senior Engineers and automated SonarQube static analysis scans.",
      highlights: [
        "Double-Peer Code Signoff",
        "SonarQube & Snyk Vulnerability Scans",
        "Strict ESLint & Prettier Formatting",
        "Dependency Audit Checks",
      ],
    },
  ];

  const comparisonData = [
    {
      feature: "Architecture & Codebase",
      crafter: "Modular, Domain-Driven, 100% Type-Safe TypeScript",
      typical: "Monolithic, untyped JavaScript with tightly coupled code",
    },
    {
      feature: "Automated Testing",
      crafter: "Continuous Unit, Integration & E2E Test Suite on CI",
      typical: "Manual testing right before production deploy",
    },
    {
      feature: "Database & Performance",
      crafter: "Indexed queries, Connection Pooling, Sub-50ms Latency",
      typical: "Unindexed N+1 queries causing server lag under load",
    },
    {
      feature: "Security & Auditing",
      crafter: "Automated SAST/DAST scanning & OWASP Top 10 compliance",
      typical: "Basic SSL setup without dependency audit",
    },
    {
      feature: "Documentation & Handoff",
      crafter: "OpenAPI Spec, Storybook UI Components, Full System Docs",
      typical: "Minimal documentation, high developer lock-in",
    },
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Architecture RFC",
      desc: "Detailed technical blueprint, DB schema design, and API specification before writing a single line of code.",
    },
    {
      num: "02",
      title: "Type-Safe Development",
      desc: "Strictly typed components and backend controllers with automated unit test coverage.",
    },
    {
      num: "03",
      title: "Double-Peer Review Gate",
      desc: "Two Senior Tech Leads review performance, security, and cleanliness of every pull request.",
    },
    {
      num: "04",
      title: "Automated CI/CD Build",
      desc: "Build passes through security scanners, regression tests, and isolated staging environments.",
    },
    {
      num: "05",
      title: "Load & Stress Testing",
      desc: "Simulated traffic spikes to verify P99 latency and database stability before production.",
    },
    {
      num: "06",
      title: "Zero-Downtime Rollout",
      desc: "Blue-green container deployment with automated health check rollbacks.",
    },
  ];

  const qualityItems = [
    {
      title: "Security by Design",
      desc: "Consider access controls, input validation, and dependency risks throughout development.",
      detail: "Secure foundations",
      icon: ShieldCheck,
    },
    {
      title: "Reliability Under Load",
      desc: "Evaluate performance bottlenecks and test important workflows under realistic conditions.",
      detail: "Performance & resilience",
      icon: Activity,
    },
    {
      title: "Data Integrity",
      desc: "Use thoughtful schema design and validation to keep business-critical data consistent.",
      detail: "Consistent data",
      icon: Database,
    },
    {
      title: "Maintainable Releases",
      desc: "Keep code reviewable and deployments controlled so software remains easier to evolve.",
      detail: "Quality through delivery",
      icon: GitBranch,
    },
  ];

  return (
    <main className="w-full overflow-hidden text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* =====================================================
          01. HERO SECTION
      ===================================================== */}

      <section className="relative isolate overflow-hidden px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 lg:pb-24 pt-36 sm:pt-40 lg:pt-44 bg-gradient-to-br from-[#E1EFF2] via-[#E6F3F5] to-[#DCEBED]">

        {/* Background Decorations */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-cyan-300/20 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 w-[450px] h-[450px] rounded-full bg-teal-300/20 blur-[100px]" />

        <div className="relative z-10 max-w-[1360px] mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#004658]/20 text-[#004658] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00A8CC] animate-pulse" />
            ✦ CodeCrafter Engineering Manifesto
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.12] max-w-5xl mx-auto mb-6 font-['Outfit',sans-serif]">
            Software Engineering Standards &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#00748A] to-[#00A8CC]">
              Architectural Excellence
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            We don't just write code — we build resilient, zero-tech-debt digital
            products engineered for long-term scalability, speed, and enterprise
            reliability.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 max-w-4xl mx-auto">

            {[
              { value: "99.99%", label: "Uptime Target" },
              { value: "<50ms", label: "Average P99 Latency" },
              { value: "100%", label: "Automated CI/CD" },
              { value: "Zero", label: "Critical Security Flaws" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group p-4 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-white shadow-[0_10px_30px_rgba(0,70,88,0.07)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-10 flex justify-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#004658]/70">
              <span className="w-8 h-px bg-[#004658]/30" />
              Built with engineering discipline
              <span className="w-8 h-px bg-[#004658]/30" />
            </span>
          </div>

        </div>
      </section>


      {/* =====================================================
          02. ENGINEERING PILLARS
      ===================================================== */}

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#EAF2EE] via-[#F0F6F2] to-[#E3EFEB]">

        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -left-32 top-20 w-80 h-80 rounded-full bg-emerald-200/30 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-10 w-96 h-96 rounded-full bg-teal-200/30 blur-[110px]" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12 sm:mb-16">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#004658]/15 text-[#004658] text-xs font-bold uppercase tracking-widest mb-4">
              Our Foundation
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-['Outfit',sans-serif]">
              The 4 Pillars of Our Engineering Rigor
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Every line of code delivered by CodeCrafter adheres to these
              strict standards.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

            {pillars.map((pillar, index) => (
              <article
                key={pillar.id}
                className="group relative p-6 sm:p-8 lg:p-9 rounded-3xl bg-white border border-[#BBD8D0]/70 shadow-[0_12px_35px_rgba(0,70,88,0.06)] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,70,88,0.12)] hover:border-[#00A8CC]/50 transition-all duration-300 flex flex-col justify-between"
              >

                <div className="absolute top-6 right-7 text-5xl font-extrabold text-[#004658]/[0.05] font-['Outfit',sans-serif]">
                  0{index + 1}
                </div>

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DCEEEF] to-[#EAF5F1] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-7">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#E5EEEA]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#004658] mb-4">
                    Key Benchmarks
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pillar.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <Check
                          size={16}
                          className="text-[#008C85] shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-[#004658] to-[#00A8CC] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              </article>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          03. COMPARISON MATRIX
      ===================================================== */}

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#F3F7F7]">

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#003442] via-[#003B46] to-[#001D25] p-6 sm:p-10 lg:p-12 text-white shadow-[0_25px_70px_rgba(0,40,50,0.20)]">

            {/* Decorative Circles */}
            <div className="pointer-events-none absolute -right-32 -top-40 w-96 h-96 rounded-full border border-cyan-300/10" />
            <div className="pointer-events-none absolute -right-20 -top-28 w-72 h-72 rounded-full border border-cyan-300/10" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative z-10">

              <div className="max-w-3xl mb-10 sm:mb-12">

                <span className="inline-flex items-center gap-2 text-[#4EF0C5] text-xs font-bold uppercase tracking-widest mb-4">
                  <span className="w-7 h-px bg-[#4EF0C5]" />
                  Architectural Comparison
                </span>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-['Outfit',sans-serif] leading-tight">
                  CodeCrafter Standards{" "}
                  <span className="text-[#4EF0C5]">vs</span> Industry Standard
                </h2>

                <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                  See how our software engineering standards elevate your
                  product above typical development agencies.
                </p>

              </div>

              <div className="sm:hidden flex items-center justify-between text-xs text-slate-300 mb-3 px-3 py-3 rounded-xl border border-white/10 bg-white/5">
                <span>Scroll table to see full comparison</span>
                <span className="text-[#4EF0C5] font-bold">Swipe →</span>
              </div>

              <div className="overflow-x-auto pb-3">
                <table className="w-full text-left border-collapse min-w-[650px]">

                  <thead>
                    <tr className="border-b border-white/15 text-xs sm:text-sm text-slate-300 uppercase tracking-wider">
                      <th className="py-5 px-4 font-semibold w-[28%]">
                        Engineering Area
                      </th>

                      <th className="py-5 px-4 font-semibold text-[#4EF0C5] w-[36%]">
                        CodeCrafter Standard
                      </th>

                      <th className="py-5 px-4 font-semibold text-slate-400 w-[36%]">
                        Typical Dev Vendor
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-white/10 text-xs sm:text-sm md:text-base">

                    {comparisonData.map((row, index) => (
                      <tr
                        key={index}
                        className="group hover:bg-white/[0.06] transition-colors align-top"
                      >
                        <td className="py-5 px-4 font-semibold text-white align-top">
                          {row.feature}
                        </td>

                        <td className="py-5 px-4 text-[#4EF0C5] font-medium align-top">
                          <div className="flex items-start gap-2">
                            <Check
                              size={18}
                              className="shrink-0 mt-0.5"
                            />
                            <span className="leading-relaxed">
                              {row.crafter}
                            </span>
                          </div>
                        </td>

                        <td className="py-5 px-4 text-slate-300 leading-relaxed align-top">
                          {row.typical}
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#4EF0C5]" />
                Quality-focused engineering approach
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          04. ENGINEERING PIPELINE
      ===================================================== */}

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#EDECF5] via-[#F4F4F8] to-[#E5EDF3]">

        <div className="pointer-events-none absolute -left-32 top-10 w-96 h-96 rounded-full bg-indigo-200/20 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 w-96 h-96 rounded-full bg-cyan-200/25 blur-[110px]" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12 sm:mb-16">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#004658]/15 text-[#004658] text-xs font-bold uppercase tracking-widest mb-4">
              Our Development Process
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-['Outfit',sans-serif]">
              Our 6-Step Engineering Pipeline
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              A predictable, highly structured development lifecycle built
              for speed and software correctness.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">

            {workflowSteps.map((step, idx) => (
              <article
                key={step.num}
                className="group relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-white border border-[#D7D9E8] shadow-[0_10px_30px_rgba(40,45,90,0.06)] hover:-translate-y-2 hover:border-[#00A8CC]/50 hover:shadow-[0_18px_40px_rgba(40,45,90,0.12)] transition-all duration-300"
              >

                <div className="flex items-center justify-between mb-7">

                  <span className="text-4xl sm:text-5xl font-extrabold text-[#004658]/25 font-['Outfit',sans-serif] group-hover:text-[#00A8CC] transition-colors duration-300">
                    {step.num}
                  </span>

                  <span className="w-10 h-10 rounded-full bg-[#EAF2F5] flex items-center justify-center text-[#004658] group-hover:bg-[#004658] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={19} />
                  </span>

                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>

                <div className="mt-7 h-1 w-12 rounded-full bg-gradient-to-r from-[#004658] to-[#00A8CC] group-hover:w-full transition-all duration-500" />

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          05. PRODUCTION QUALITY
      ===================================================== */}

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#F3F7F7]">

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#003442] via-[#003B46] to-[#001D25] text-white shadow-[0_25px_70px_rgba(0,40,50,0.18)]">

            {/* Decorative accents */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-cyan-300/10" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-cyan-300/10" />
            <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative z-10 grid gap-10 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:p-14">

              {/* Left Content */}
              <div className="flex flex-col justify-between">

                <div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-cyan-200 sm:text-xs">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Beyond the code
                  </span>

                  <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl xl:text-5xl font-['Outfit',sans-serif]">
                    Built for
                    <span className="block text-[#4EF0C5]">Production.</span>
                    Ready for
                    <span className="block text-white/60">What's Next.</span>
                  </h2>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                    Great engineering goes beyond making features work. We
                    consider how software performs, protects data, and evolves
                    as your business grows.
                  </p>

                </div>

                <div className="mt-8 border-t border-white/10 pt-6 lg:mt-12">

                  <p className="text-xs font-bold uppercase tracking-widest text-[#4EF0C5]">
                    Our engineering mindset
                  </p>

                  <p className="mt-3 text-lg font-semibold leading-7 sm:text-xl">
                    Make thoughtful decisions early.
                    <span className="block text-slate-400">
                      Keep improving after launch.
                    </span>
                  </p>

                </div>
              </div>

              {/* Right Quality Checklist */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">

                {qualityItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className={`group p-5 transition-colors duration-300 hover:bg-white/[0.06] sm:p-6 ${
                        index !== qualityItems.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }`}
                    >

                      <div className="flex items-start gap-4">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.08] text-cyan-200 transition-colors group-hover:bg-[#4EF0C5] group-hover:text-[#002f3a]">
                          <Icon size={21} strokeWidth={1.8} />
                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex items-start justify-between gap-3">

                            <h3 className="text-base font-bold text-white sm:text-lg font-['Outfit',sans-serif]">
                              {item.title}
                            </h3>

                            <span className="font-mono text-xs text-cyan-300/60">
                              0{index + 1}
                            </span>

                          </div>

                          <p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm">
                            {item.desc}
                          </p>

                          <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold text-[#4EF0C5]">
                            <Check size={14} />
                            {item.detail}
                          </span>

                        </div>

                        <ArrowUpRight
                          size={17}
                          className="hidden shrink-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200 sm:block"
                        />

                      </div>
                    </article>
                  );
                })}

              </div>

            </div>

            {/* Bottom Strip */}
            <div className="relative flex flex-col gap-3 border-t border-white/10 bg-black/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">

              <p className="text-xs leading-6 text-slate-300 sm:text-sm">
                Architecture. Quality. Reliability. Long-term thinking.
              </p>

              <span className="inline-flex items-center gap-2 text-xs font-bold text-cyan-200">
                Engineering with intent
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          06. FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#E1EFF2] via-[#F2F8F8] to-[#DCEBED]">

        <div className="pointer-events-none absolute -left-32 bottom-0 w-80 h-80 rounded-full bg-cyan-300/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 top-0 w-96 h-96 rounded-full bg-teal-300/20 blur-[100px]" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden bg-gradient-to-br from-[#004658] to-[#002F3A] text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-16 text-center shadow-[0_25px_60px_rgba(0,55,70,0.22)]">

            {/* Decorative elements */}
            <div className="pointer-events-none absolute -top-24 -right-20 w-72 h-72 rounded-full border border-cyan-300/15" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-cyan-400/10 blur-[90px]" />

            <div className="relative z-10">

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-cyan-200 text-xs font-bold uppercase tracking-widest mb-6">
                Let's Build Something Reliable
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-['Outfit',sans-serif] mb-5 leading-tight">
                Want to Inspect Our
                <span className="block text-[#4EF0C5]">
                  Engineering Blueprint?
                </span>
              </h2>

              <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-9 leading-relaxed">
                Schedule a technical deep dive with our Lead Software Architect
                to review code architecture, test setups, and performance
                benchmarks.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                <Link
                  to="/schedule-consultation"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-[#4EF0C5] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  Book Technical Consultation
                  <ArrowUpRight size={17} className="inline ml-2" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
                >
                  Request Code Audit
                  <ArrowUpRight size={17} className="inline ml-2" />
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default EngineeringStandards;
