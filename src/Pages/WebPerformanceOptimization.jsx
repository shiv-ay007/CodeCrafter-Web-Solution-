
import React from "react";
import { Link } from "react-router-dom";

const WebPerformanceOptimization = () => {
  const benchmarks = [
    {
      metric: "Largest Contentful Paint (LCP)",
      before: "4.2s",
      after: "0.8s",
      note: "Illustrative example",
    },
    {
      metric: "Interaction to Next Paint (INP)",
      before: "280ms",
      after: "35ms",
      note: "Illustrative example",
    },
    {
      metric: "Cumulative Layout Shift (CLS)",
      before: "0.25",
      after: "0.00",
      note: "Illustrative example",
    },
    {
      metric: "JavaScript Bundle Size",
      before: "3.8 MB",
      after: "340 KB",
      note: "Illustrative example; compression basis may vary",
    },
  ];

  const tactics = [
    {
      number: "01",
      icon: "⌘",
      title: "Dynamic Code-Splitting & Tree-Shaking",
      desc: "Remove unused JavaScript and CSS, and load only the assets needed for the current page.",
      tags: ["Bundle Optimization", "Lazy Loading"],
    },
    {
      number: "02",
      icon: "◈",
      title: "Edge CDN & Global Caching",
      desc: "Cache eligible static assets close to users to reduce network latency and improve delivery speed.",
      tags: ["CDN", "Edge Caching"],
    },
    {
      number: "03",
      icon: "▧",
      title: "Image & Media Optimization",
      desc: "Use responsive images, modern formats such as WebP or AVIF, and lazy loading where appropriate.",
      tags: ["WebP / AVIF", "Responsive Images"],
    },
    {
      number: "04",
      icon: "⇄",
      title: "Database & API Optimization",
      desc: "Improve slow queries, review API requests, and introduce suitable caching to reduce response times.",
      tags: ["API Caching", "Query Tuning"],
    },
  ];

  const vitals = [
    {
      code: "LCP",
      title: "Loading Performance",
      target: "≤ 2.5 seconds",
      desc: "Measures how quickly the largest content element becomes visible.",
      width: "85%",
    },
    {
      code: "INP",
      title: "Interaction Responsiveness",
      target: "≤ 200 ms",
      desc: "Measures how quickly a page responds to user interactions.",
      width: "70%",
    },
    {
      code: "CLS",
      title: "Visual Stability",
      target: "≤ 0.1",
      desc: "Measures unexpected movement of page elements during loading.",
      width: "45%",
    },
  ];

  const workflow = [
    {
      step: "01",
      icon: "⌕",
      title: "Audit",
      desc: "Review Lighthouse reports, Core Web Vitals and loading bottlenecks.",
    },
    {
      step: "02",
      icon: "⌘",
      title: "Diagnose",
      desc: "Identify expensive scripts, large images, slow requests and layout shifts.",
    },
    {
      step: "03",
      icon: "⚡",
      title: "Optimize",
      desc: "Improve asset delivery, rendering, caching and application code.",
    },
    {
      step: "04",
      icon: "✓",
      title: "Validate",
      desc: "Retest the changes and compare results against the original baseline.",
    },
  ];

  return (
    <main className="relative w-full overflow-hidden bg-[#FBFDFD] pt-32 sm:pt-40 pb-24 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* Background Gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2
        w-[1100px] h-[600px] pointer-events-none rounded-full
        opacity-50 blur-[130px] -z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(0,70,88,.22) 0%, rgba(0,168,204,.08) 50%, rgba(251,253,253,0) 80%)",
        }}
      />

      {/* 01. HERO HEADER */}
      <section className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-[#004658] animate-pulse" />
          <span>⚡ Web Performance Optimization</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Supercharge Your Website to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Sub-Second Load Speeds
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
          We optimize Core Web Vitals, reduce bundle sizes, and improve
          asset delivery to create faster, smoother website experiences.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/schedule-consultation"
            className="inline-flex justify-center items-center gap-2 px-7 py-4 rounded-full bg-[#004658] text-white font-bold hover:bg-[#006174] transition-all shadow-lg"
          >
            Request Performance Audit ↗
          </Link>

          <a
            href="#optimization-process"
            className="inline-flex justify-center items-center gap-2 px-7 py-4 rounded-full border border-slate-200 bg-white text-[#004658] font-bold hover:border-[#00869A] transition-all"
          >
            Explore Our Process ↓
          </a>
        </div>
      </section>

      {/* 02. BEFORE / AFTER BENCHMARK */}
      <section className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#002B34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-2">
              Performance Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif]">
              See What Optimization Can Change
            </h2>
            <p className="text-sm text-slate-300 mt-3 leading-6">
              Example values for illustration only. Actual improvements
              depend on the website, device, network and measured baseline.
            </p>
          </div>

          <div className="space-y-3">
            {benchmarks.map((item) => (
              <div
                key={item.metric}
                className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] sm:items-center gap-3 sm:gap-6"
              >
                <span className="font-bold text-sm sm:text-base">
                  {item.metric}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Before</span>
                  <span className="text-rose-300 font-semibold line-through">
                    {item.before}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">After</span>
                  <span className="text-[#4EF0C5] font-bold">
                    {item.after}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. PERFORMANCE SCORE DASHBOARD */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#00869A]">
              Performance Overview
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 mb-5 font-['Outfit',sans-serif]">
              Understand Your Website's{" "}
              <span className="text-[#00869A]">Performance</span>
            </h2>

            <p className="text-slate-600 leading-7">
              A performance audit helps identify loading issues, interaction
              delays and opportunities to improve your website experience.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Core Web Vitals assessment",
                "Performance bottleneck analysis",
                "Mobile and desktop testing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#DDFBF3] text-[#006B58] flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#002B34] p-5 sm:p-8 text-white shadow-xl">
            <div className="flex items-center justify-between gap-3 mb-7">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#4EF0C5]">
                  Sample interface
                </p>
                <h3 className="text-xl font-bold mt-2">
                  Website Health Dashboard
                </h3>
              </div>
              <span className="text-xs border border-white/15 rounded-lg px-3 py-2">
                Demo UI
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                ["Performance", 96],
                ["Accessibility", 94],
                ["Best Practices", 98],
                ["SEO", 95],
              ].map(([label, score]) => (
                <div
                  key={label}
                  className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"
                >
                  <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center border-4 border-[#4EF0C5] text-[#4EF0C5] font-extrabold">
                    {score}
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-300 mt-3">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold">Core Web Vitals</span>
                <span className="text-xs text-[#4EF0C5]">Good thresholds</span>
              </div>

              {[
                ["LCP", "≤ 2.5s", "85%"],
                ["INP", "≤ 200ms", "70%"],
                ["CLS", "≤ 0.1", "45%"],
              ].map(([name, value, width]) => (
                <div key={name} className="mb-4 last:mb-0">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-300">{name}</span>
                    <span className="font-bold text-[#4EF0C5]">{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#4EF0C5]"
                      style={{ width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-slate-400 mt-4">
              Sample interface and illustrative scores, not a live audit.
            </p>
          </div>
        </div>
      </section>

      {/* 04. CORE WEB VITALS */}
      <section className="bg-white border-y border-slate-100 py-16 sm:py-20">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[#00869A]">
              Core Web Vitals
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-4 font-['Outfit',sans-serif]">
              Speed, Responsiveness & Stability
            </h2>
            <p className="text-slate-600 mt-4 leading-7">
              Understand the key metrics that help evaluate real-world
              website loading, responsiveness and visual stability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {vitals.map((item) => (
              <article
                key={item.code}
                className="rounded-3xl border border-slate-200 bg-[#FBFDFD] p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">
                    {item.code}
                  </span>
                  <span className="w-12 h-12 rounded-xl bg-[#DDFBF3] text-[#004658] flex items-center justify-center text-xl">
                    ↗
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-6 mt-3">
                  {item.desc}
                </p>

                <div className="mt-6 p-4 rounded-xl bg-white border border-slate-100">
                  <p className="text-xs text-slate-500 mb-2">
                    Good performance threshold
                  </p>
                  <p className="text-lg font-extrabold text-[#00856A]">
                    {item.target}
                  </p>
                  <div className="mt-4 h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#20A67A]"
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-xs text-slate-500 text-center mt-6">
            Google good thresholds: LCP ≤ 2.5s, INP ≤ 200ms and CLS ≤ 0.1.
            Progress bars are decorative.
          </p>
        </div>
      </section>

      {/* 05. OPTIMIZATION TACTICS */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-10">
          <span className="text-sm font-bold uppercase tracking-widest text-[#00869A]">
            Our Optimization Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 font-['Outfit',sans-serif]">
            Technical Improvements That Matter
          </h2>
          <p className="text-slate-600 leading-7 mt-4">
            Target the bottlenecks that affect loading, rendering and
            server response time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tactics.map((item) => (
            <article
              key={item.number}
              className="group p-6 sm:p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-xl hover:border-[#00869A]/40 transition-all"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-extrabold text-[#00869A]">
                  {item.number}
                </span>
                <span className="w-12 h-12 rounded-xl bg-[#DDFBF3] text-[#004658] flex items-center justify-center text-2xl group-hover:bg-[#004658] group-hover:text-white transition-colors">
                  {item.icon}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold text-[#004658] bg-[#EAF5F5] rounded-full px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 06. OPTIMIZATION WORKFLOW */}
      <section
        id="optimization-process"
        className="bg-white border-y border-slate-100 py-16 sm:py-20"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[#00869A]">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-4 font-['Outfit',sans-serif]">
              From Slow to Optimized
            </h2>
            <p className="text-slate-600 leading-7 mt-4">
              A structured workflow to identify bottlenecks, implement
              improvements and validate measurable results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-[#FBFDFD] p-6 hover:border-[#00869A]/40 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-extrabold text-[#00869A]">
                    STEP {item.step}
                  </span>
                  <span className="w-12 h-12 rounded-xl bg-[#DDFBF3] text-[#004658] text-2xl flex items-center justify-center">
                    {item.icon}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-6">
                  {item.desc}
                </p>

                <div className="mt-6 h-1 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#004658] to-[#4EF0C5]"
                    style={{ width: `${Number(item.step) * 25}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07. FREE AUDIT CTA */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="relative overflow-hidden bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <div className="absolute -top-16 -right-12 w-48 h-48 rounded-full bg-[#00A8CC]/20 blur-3xl" />

          <div className="relative">
            <span className="inline-block text-[#4EF0C5] text-xs font-bold uppercase tracking-widest mb-4">
              Let's improve your website
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">
              Want a Free Website Speed Audit?
            </h2>

            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-7">
              Request a performance review covering Lighthouse diagnostics,
              Core Web Vitals and practical optimization opportunities.
            </p>

            <Link
              to="/schedule-consultation"
              className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-[#DDFBF3] transition-all inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Request Free Performance Audit <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebPerformanceOptimization;
