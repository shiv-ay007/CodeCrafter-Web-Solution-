import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState("architecture");

  const pillars = [
    {
      id: "architecture",
      title: "Clean Architecture & SOLID Principles",
      icon: <Layers className="w-6 h-6 text-[#004658]" />,
      description: "We enforce strict separation of concerns, domain-driven design, and modular codebases that ensure new features can be added without introducing regressions or code bloat.",
      highlights: ["Domain-Driven Design (DDD)", "Decoupled Business Logic", "Zero Spaghetti Dependencies", "Strict SOLID Enforcement"]
    },
    {
      id: "testing",
      title: "Automated Testing & CI/CD Pipelines",
      icon: <ShieldCheck className="w-6 h-6 text-[#004658]" />,
      description: "Every pull request passes through automated unit tests, integration suites, and static analysis gates before reaching production.",
      highlights: ["90%+ Code Coverage Target", "Automated Cypress & Playwright E2E", "GitHub Actions & GitLab CI", "Zero-Downtime Blue-Green Deployments"]
    },
    {
      id: "performance",
      title: "High Performance & Low Latency",
      icon: <Zap className="w-6 h-6 text-[#004658]" />,
      description: "From sub-millisecond database queries to optimized JS bundles and CDN caching, we optimize every layer of the application for ultra-fast response times.",
      highlights: ["Sub-50ms P99 API Latency", "Redis & Edge Caching", "Database Index & Query Tuning", "Lighthouse 95+ Core Web Vitals"]
    },
    {
      id: "security",
      title: "Static Code Analysis & Peer Reviews",
      icon: <Code2 className="w-6 h-6 text-[#004658]" />,
      description: "No code enters main without a mandatory double-peer review by Senior Engineers and automated SonarQube static analysis scans.",
      highlights: ["Double-Peer Code Signoff", "SonarQube & Snyk Vulnerability Scans", "Strict ESLint & Prettier Formatting", "Dependency Audit Checks"]
    }
  ];

  const comparisonData = [
    {
      feature: "Architecture & Codebase",
      crafter: "Modular, Domain-Driven, 100% Type-Safe TypeScript",
      typical: "Monolithic, untyped JavaScript with tightly coupled code"
    },
    {
      feature: "Automated Testing",
      crafter: "Continuous Unit, Integration & E2E Test Suite on CI",
      typical: "Manual testing right before production deploy"
    },
    {
      feature: "Database & Performance",
      crafter: "Indexed queries, Connection Pooling, Sub-50ms Latency",
      typical: "Unindexed N+1 queries causing server lag under load"
    },
    {
      feature: "Security & Auditing",
      crafter: "Automated SAST/DAST scanning & OWASP Top 10 compliance",
      typical: "Basic SSL setup without dependency audit"
    },
    {
      feature: "Documentation & Handoff",
      crafter: "OpenAPI Spec, Storybook UI Components, Full System Docs",
      typical: "Minimal documentation, high developer lock-in"
    }
  ];

  const workflowSteps = [
    { num: "01", title: "Architecture RFC", desc: "Detailed technical blueprint, DB schema design, and API specification before writing a single line of code." },
    { num: "02", title: "Type-Safe Development", desc: "Strictly typed components and backend controllers with automated unit test coverage." },
    { num: "03", title: "Double-Peer Review Gate", desc: "Two Senior Tech Leads review performance, security, and cleanliness of every pull request." },
    { num: "04", title: "Automated CI/CD Build", desc: "Build passes through security scanners, regression tests, and isolated staging environments." },
    { num: "05", title: "Load & Stress Testing", desc: "Simulated traffic spikes to verify P99 latency and database stability before production." },
    { num: "06", title: "Zero-Downtime Rollout", desc: "Blue-green container deployment with automated health check rollbacks." }
  ];

  return (
    <div className="w-full bg-[#FBFDFD] pt-32 sm:pt-40 pb-24 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Radial Light Effect */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none rounded-full opacity-50 blur-[130px] -z-10"
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(0, 70, 88, 0.22) 0%, rgba(0, 168, 204, 0.08) 50%, rgba(251, 253, 253, 0) 80%)"
        }}
      />

      {/* Hero Header */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-[#004658] animate-pulse" />
          <span>✦ CodeCrafter Engineering Manifesto</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Software Engineering Standards &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Architectural Excellence
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We don't just write code — we build resilient, zero-tech-debt digital products engineered for long-term scalability, speed, and enterprise reliability.
        </p>

        {/* Hero Quick Stat Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto pt-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">99.99%</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Uptime Target</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">&lt;50ms</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Average P99 Latency</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">100%</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Automated CI/CD</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">Zero</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Critical Security Flaws</p>
          </div>
        </div>
      </div>

      {/* Core Engineering Pillars Section */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif]">
            The 4 Pillars of Our Engineering Rigor
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">Every line of code delivered by CodeCrafter adheres to these strict standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-lg shadow-[#004658]/5 hover:shadow-xl hover:border-[#004658]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-[#004658] mb-3">Key Benchmarks</p>
                <div className="grid grid-cols-2 gap-2">
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code Standards Comparison Matrix */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-[#003442] to-[#001D25] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-2">Architectural Comparison</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] leading-tight">
              CodeCrafter Standards vs Industry Standard
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">See how our software engineering standards elevate your product above typical development agencies.</p>
          </div>

          {/* Mobile Horizontal Scroll Indicator */}
          <div className="sm:hidden flex items-center justify-between text-xs text-slate-300 mb-3 px-1 font-medium bg-white/5 py-2 px-3 rounded-lg border border-white/10">
            <span>Scroll table to see full comparison</span>
            <span className="flex items-center gap-1 text-[#4EF0C5] font-semibold">Swipe →</span>
          </div>

          <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/15 text-xs sm:text-sm text-slate-300 uppercase tracking-wider">
                  <th className="py-3.5 px-3.5 sm:py-4 sm:px-4 font-semibold w-[28%]">Engineering Area</th>
                  <th className="py-3.5 px-3.5 sm:py-4 sm:px-4 font-semibold text-[#4EF0C5] w-[36%]">CodeCrafter Standard</th>
                  <th className="py-3.5 px-3.5 sm:py-4 sm:px-4 font-semibold text-slate-400 w-[36%]">Typical Dev Vendor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm md:text-base">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors align-top">
                    <td className="py-3.5 px-3.5 sm:py-4 sm:px-4 font-semibold text-white align-top">{row.feature}</td>
                    <td className="py-3.5 px-3.5 sm:py-4 sm:px-4 text-[#4EF0C5] font-medium align-top">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-[#4EF0C5] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-snug">{row.crafter}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3.5 sm:py-4 sm:px-4 text-slate-300 leading-snug align-top">{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 6-Step Delivery Lifecycle */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif]">
            Our 6-Step Engineering Pipeline
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">A predictable, highly structured development lifecycle built for speed and software correctness.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-[#004658]/15 shadow-sm hover:border-[#004658]/30 transition-all">
              <span className="text-3xl font-extrabold text-[#004658]/30 font-['Outfit',sans-serif] block mb-2">{step.num}</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit',sans-serif]">{step.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      
      {/* Production Quality Section */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#003442] to-[#001D25] text-white shadow-2xl">
          {/* Decorative accents */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-cyan-300/10" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-cyan-300/10" />

          <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:p-14">
            {/* Left content */}
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
                  <span className="block text-white/60">What’s Next.</span>
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

            {/* Right quality checklist */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              {[
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
              ].map((item, index, items) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className={`group p-5 transition-colors duration-300 hover:bg-white/[0.06] sm:p-6 ${
                      index !== items.length - 1
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

          {/* Bottom strip */}
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
      </section>


      {/* CTA Section */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">
            Want to Inspect Our Engineering Blueprint?
          </h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Schedule a technical deep dive with our Lead Software Architect to review code architecture, test setups, and performance benchmarks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/schedule-consultation"
              className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all shadow-lg"
            >
              Book Technical Consultation
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 transition-all"
            >
              Request Code Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringStandards;
