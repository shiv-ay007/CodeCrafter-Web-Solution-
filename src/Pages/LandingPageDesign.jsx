
import React from "react";
import { Link } from "react-router-dom";

const LandingPageDesign = () => {
  const metrics = [
    { title: "+240%", label: "Average Conversion Increase" },
    { title: "< 1.0s", label: "Page Load Speed" },
    { title: "100%", label: "Mobile Responsive" },
    { title: "A/B Tested", label: "Copy & CTA Placement" },
  ];

  const pillars = [
    {
      title: "Value Proposition Above the Fold",
      desc: "Clear, compelling headline messaging that captures user interest within seconds.",
    },
    {
      title: "High-Trust Social Proof",
      desc: "Strategic placement of client logos, testimonials and verified case metrics.",
    },
    {
      title: "Frictionless Conversion Funnels",
      desc: "Streamlined lead forms, consultation booking and optimized checkout journeys.",
    },
    {
      title: "Core Web Vitals Optimization",
      desc: "Performance-focused development for faster loading and a smoother user experience.",
    },
  ];

  const funnel = [
    {
      step: "01",
      icon: "◎",
      title: "Attract Visitors",
      desc: "SEO-friendly pages and campaign-focused messaging.",
    },
    {
      step: "02",
      icon: "◈",
      title: "Build Engagement",
      desc: "Clear benefits, visual storytelling and social proof.",
    },
    {
      step: "03",
      icon: "↗",
      title: "Drive Conversions",
      desc: "Focused CTAs, frictionless forms and clear next steps.",
    },
  ];

  const features = [
    "Clear value proposition",
    "Strategic CTA placement",
    "Mobile-first experience",
    "Trust-building content",
    "Fast-loading interface",
    "Conversion-focused layout",
  ];

  return (
    <main className="relative w-full overflow-hidden bg-[#FBFDFD] pt-32 sm:pt-40 pb-24 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2
        w-[900px] h-[500px] rounded-full blur-[130px]
        opacity-40 pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(0,168,204,.18), transparent 70%)",
        }}
      />

      {/* 01. HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00A8CC] animate-pulse" />
            🚀 High-Converting Landing Page Design
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-6 font-['Outfit',sans-serif]">
            Convert Traffic into Customers with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#00758D] to-[#00A8CC]">
              High-Impact Landing Pages
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We design ultra-fast, persuasive landing pages optimized
            for lead generation, product signups and campaign performance.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              to="/schedule-consultation"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#004658] text-white font-bold shadow-lg hover:bg-[#006174] hover:-translate-y-1 transition-all"
            >
              Get a Free Design Proposal <span>↗</span>
            </Link>

            <a
              href="#landing-workflow"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-200 bg-white text-[#004658] font-bold hover:border-[#004658] transition-all"
            >
              Explore Our Process <span>↓</span>
            </a>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">
                  {metric.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-2">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02. GRAPHICAL LANDING PAGE MOCKUP */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-[28px] border border-slate-200 bg-white p-3 sm:p-5 shadow-xl shadow-[#004658]/10">
          {/* Browser bar */}
          <div className="flex items-center justify-between px-3 py-3 border-b border-slate-100 mb-4">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[10px] sm:text-xs text-slate-400">
              preview.codecrafter.in
            </span>
            <span className="text-slate-400">↗</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 items-center p-3 sm:p-7">
            <div className="py-3">
              <span className="text-[10px] font-bold tracking-[.18em] text-[#00869A] uppercase">
                A better digital first impression
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 leading-tight mt-4 mb-5 font-['Outfit',sans-serif]">
                Grow Your Business with{" "}
                <span className="text-[#00869A]">Smarter Digital Solutions.</span>
              </h2>

              <p className="text-sm sm:text-base leading-7 text-slate-600 mb-6">
                Turn your visitors into valuable leads with clear messaging,
                purposeful design and conversion-focused experiences.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/schedule-consultation"
                  className="px-5 py-3 rounded-lg bg-[#004658] text-white text-sm font-bold hover:bg-[#006174] transition-colors"
                >
                  Get Started ↗
                </Link>
                <a
                  href="#landing-workflow"
                  className="px-5 py-3 rounded-lg border border-slate-200 text-[#004658] text-sm font-bold"
                >
                  Our Process
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-slate-100">
                {[
                  ["01", "Strategy"],
                  ["02", "Design"],
                  ["03", "Launch"],
                ].map(([num, title]) => (
                  <div key={num}>
                    <span className="text-xs text-[#00869A] font-bold">{num}</span>
                    <p className="text-xs sm:text-sm font-bold mt-1">{title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard illustration */}
            <div className="relative rounded-3xl bg-[#EAF5F5] p-4 sm:p-7 min-h-[320px] flex items-center">
              <div className="absolute top-4 right-5 w-24 h-24 bg-[#4EF0C5]/30 rounded-full blur-2xl" />

              <div className="relative w-full rounded-2xl bg-white border border-white shadow-xl p-4 sm:p-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                      Performance overview
                    </span>
                    <h3 className="font-bold text-slate-900 mt-1">
                      Campaign Dashboard
                    </h3>
                  </div>
                  <span className="rounded-lg bg-[#E5FAF4] text-[#00765E] px-2 py-1 text-xs font-bold">
                    Live Preview
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="rounded-xl bg-[#F4FAFA] p-3">
                    <p className="text-xs text-slate-500">Visitors</p>
                    <p className="text-2xl font-extrabold text-[#004658] mt-1">12.4k</p>
                    <p className="text-[10px] text-slate-500 mt-1">
                      Illustrative sample
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#F4FAFA] p-3">
                    <p className="text-xs text-slate-500">Engagement</p>
                    <p className="text-2xl font-extrabold text-[#004658] mt-1">68%</p>
                    <p className="text-[10px] text-slate-500 mt-1">
                      Illustrative sample
                    </p>
                  </div>
                </div>

                {/* CSS chart */}
                <div className="mt-5 rounded-xl border border-slate-100 p-3">
                  <div className="flex justify-between text-xs font-semibold mb-4">
                    <span>Visitor activity</span>
                    <span className="text-[#00869A]">Sample chart</span>
                  </div>
                  <div className="h-24 flex items-end gap-2 border-b border-slate-200 pb-1">
                    {[32, 48, 38, 64, 53, 78, 61, 92, 73, 100, 82, 94].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-[#004658] to-[#4EF0C5]"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#004658] p-3 text-white">
                  <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                    ↗
                  </span>
                  <div>
                    <p className="text-sm font-bold">Built to convert</p>
                    <p className="text-[10px] text-white/70">
                      Strategy · Design · Development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. CONVERSION FUNNEL */}
      <section
        id="landing-workflow"
        className="py-20 bg-white border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs sm:text-sm font-bold tracking-[.18em] uppercase text-[#00869A]">
              Conversion strategy
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-4 font-['Outfit',sans-serif]">
              Every Section Has a Purpose
            </h2>
            <p className="text-slate-600 mt-4 leading-7">
              Guide your visitors from their first impression to a clear,
              meaningful action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {funnel.map((item, index) => (
              <article
                key={item.step}
                className="relative rounded-3xl border border-slate-200 p-6 sm:p-8 bg-[#FBFDFD] hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-7">
                  <span className="text-sm font-bold text-[#00869A]">
                    STEP {item.step}
                  </span>
                  <span className="w-14 h-14 rounded-2xl bg-[#DDFBF3] text-[#004658] text-3xl flex items-center justify-center">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-7">{item.desc}</p>
                <div className="mt-6 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#004658] to-[#4EF0C5]"
                    style={{ width: `${(index + 1) * 33.33}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04. BEFORE AND AFTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-bold tracking-[.18em] uppercase text-[#00869A]">
              Redesign that makes sense
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-4 mb-5 font-['Outfit',sans-serif]">
              From Cluttered to{" "}
              <span className="text-[#00869A]">Conversion-Focused.</span>
            </h2>
            <p className="text-slate-600 leading-7 mb-7">
              We replace confusing layouts with clear messaging, strong
              visual hierarchy and intentional calls to action.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#DDFBF3] text-[#006B58] font-bold">
                    ✓
                  </span>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Comparison mockups */}
          <div className="grid grid-cols-2 gap-4">
            <div className="min-w-0">
              <div className="inline-flex rounded-full bg-slate-200 text-slate-600 text-xs font-bold px-3 py-2 mb-3">
                Before
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm">
                <div className="h-2 w-20 bg-slate-200 rounded mb-4" />
                <div className="rounded-lg bg-slate-100 p-3 mb-3">
                  <div className="h-2 w-full bg-slate-300 rounded mb-2" />
                  <div className="h-2 w-3/4 bg-slate-300 rounded" />
                  <div className="h-16 bg-slate-200 rounded mt-3 flex items-center justify-center text-2xl text-slate-400">
                    ▧
                  </div>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded mb-2" />
                <div className="h-2 w-4/5 bg-slate-200 rounded mb-4" />
                <div className="h-8 bg-slate-300 rounded text-[10px] flex items-center justify-center text-slate-600">
                  Unclear CTA
                </div>
                <p className="text-xs text-slate-500 mt-4 leading-5">
                  Crowded layout · Weak hierarchy
                </p>
              </div>
            </div>

            <div className="min-w-0">
              <div className="inline-flex rounded-full bg-[#DDFBF3] text-[#006B58] text-xs font-bold px-3 py-2 mb-3">
                After
              </div>
              <div className="rounded-2xl border border-[#004658]/20 bg-white p-3 sm:p-4 shadow-xl shadow-[#004658]/10">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[9px] font-extrabold text-[#004658]">
                    YOUR BRAND
                  </span>
                  <span className="w-5 h-1 bg-[#004658] rounded" />
                </div>
                <h3 className="text-sm sm:text-lg font-extrabold leading-tight text-slate-900 mb-2">
                  Grow Your Business
                  <span className="block text-[#00869A]">With Better Design.</span>
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 leading-5 mb-4">
                  A clear message that focuses on customer needs.
                </p>
                <div className="h-16 sm:h-20 rounded-lg bg-gradient-to-br from-[#004658] to-[#00A8CC] flex items-center justify-center mb-4">
                  <div className="w-16 h-10 bg-white/15 rounded-lg border border-white/30 flex items-center justify-center text-white text-xl">
                    ↗
                  </div>
                </div>
                <div className="rounded-lg bg-[#004658] text-white text-[10px] sm:text-xs text-center font-bold py-3">
                  Get Started →
                </div>
                <p className="text-xs text-slate-500 mt-4 leading-5">
                  Clear hierarchy · Strong CTA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. RESPONSIVE DEVICE PREVIEW */}
      <section className="bg-[#EAF5F5] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-bold tracking-[.18em] uppercase text-[#00869A]">
              Responsive by design
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-4 font-['Outfit',sans-serif]">
              One Experience. Every Screen.
            </h2>
            <p className="text-slate-600 mt-4 leading-7">
              A consistent, touch-friendly experience across desktop,
              tablet and mobile devices.
            </p>
          </div>

          <div className="flex items-end justify-center gap-3 sm:gap-6 max-w-5xl mx-auto">
            {/* Desktop */}
            <div className="w-[57%] max-w-[520px]">
              <div className="rounded-t-xl border-[5px] sm:border-[8px] border-slate-800 bg-white p-2 sm:p-4 shadow-xl">
                <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-4">
                  <span className="text-[7px] sm:text-xs font-extrabold text-[#004658]">
                    CODE CRAFTER
                  </span>
                  <span className="text-[6px] sm:text-[10px] text-slate-500">
                    Home · Services · About
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-4 items-center">
                  <div>
                    <div className="h-2 sm:h-4 w-full bg-slate-800 rounded mb-2" />
                    <div className="h-2 sm:h-4 w-4/5 bg-[#00869A] rounded mb-3" />
                    <div className="h-1.5 w-full bg-slate-200 rounded mb-1" />
                    <div className="h-1.5 w-4/5 bg-slate-200 rounded mb-3" />
                    <div className="h-5 sm:h-8 w-4/5 rounded bg-[#004658]" />
                  </div>
                  <div className="h-20 sm:h-36 rounded-lg bg-gradient-to-br from-[#004658] to-[#4EF0C5] flex items-center justify-center">
                    <span className="text-white text-2xl sm:text-5xl">↗</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-5 sm:h-10 rounded bg-[#EAF5F5]" />
                  ))}
                </div>
              </div>
              <div className="h-2 sm:h-3 bg-slate-400 rounded-b-lg mx-[-4%]" />
              <p className="text-center text-xs font-bold text-[#004658] mt-3">
                Desktop
              </p>
            </div>

            {/* Tablet */}
            <div className="w-[23%] max-w-[170px]">
              <div className="rounded-xl border-[5px] sm:border-[7px] border-slate-800 bg-white p-2 sm:p-3 shadow-xl">
                <div className="h-2 w-10 bg-[#004658] rounded mb-3" />
                <div className="h-14 sm:h-24 rounded bg-gradient-to-br from-[#004658] to-[#4EF0C5] mb-3" />
                <div className="h-2 w-full bg-slate-200 rounded mb-2" />
                <div className="h-2 w-3/4 bg-slate-200 rounded mb-3" />
                <div className="h-5 rounded bg-[#004658]" />
              </div>
              <p className="text-center text-[10px] sm:text-xs font-bold text-[#004658] mt-3">
                Tablet
              </p>
            </div>

            {/* Mobile */}
            <div className="w-[17%] max-w-[110px]">
              <div className="rounded-2xl border-[4px] sm:border-[6px] border-slate-800 bg-white p-1.5 sm:p-2 shadow-xl">
                <div className="h-1.5 w-5 bg-slate-300 rounded mx-auto mb-3" />
                <div className="h-2 w-full bg-[#004658] rounded mb-2" />
                <div className="h-2 w-4/5 bg-[#00869A] rounded mb-3" />
                <div className="h-12 sm:h-16 rounded bg-gradient-to-br from-[#004658] to-[#4EF0C5] mb-3" />
                <div className="h-1.5 w-full bg-slate-200 rounded mb-2" />
                <div className="h-1.5 w-4/5 bg-slate-200 rounded mb-3" />
                <div className="h-5 rounded bg-[#004658] mb-2" />
              </div>
              <p className="text-center text-[10px] sm:text-xs font-bold text-[#004658] mt-3">
                Mobile
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06. PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mb-10">
          <span className="text-sm font-bold tracking-[.18em] uppercase text-[#00869A]">
            What makes it work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 font-['Outfit',sans-serif]">
            Designed Around Your Business Goals
          </h2>
          <p className="text-slate-600 mt-4 leading-7">
            Every landing page combines messaging, user experience and
            performance to support your business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item, index) => (
            <article
              key={item.title}
              className="group p-6 sm:p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-xl hover:border-[#00869A]/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EAF5F5] flex items-center justify-center text-[#004658] text-xl font-bold group-hover:bg-[#004658] group-hover:text-white transition-colors">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-5 mb-3 font-['Outfit',sans-serif]">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {item.desc}
              </p>
              <div className="w-12 h-1 rounded-full bg-[#4EF0C5] mt-5 group-hover:w-20 transition-all" />
            </article>
          ))}
        </div>
      </section>

      {/* 07. LEAD CAPTURE FORM MOCKUP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center rounded-[28px] border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
          <div>
            <span className="text-sm font-bold tracking-[.18em] uppercase text-[#00869A]">
              Lead generation experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 mb-5 font-['Outfit',sans-serif]">
              Make Taking the Next Step Easy.
            </h2>
            <p className="text-slate-600 leading-7 mb-7">
              Simple forms and prominent calls to action help visitors
              understand what to do next, without unnecessary friction.
            </p>

            <div className="space-y-4">
              {[
                "Short and focused forms",
                "Clear action-oriented buttons",
                "Responsive layouts and accessible inputs",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <span className="w-6 h-6 rounded-full bg-[#DDFBF3] text-[#006B58] flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#EAF5F5] p-4 sm:p-7">
            <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00869A]">
                  Start a project
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  Tell Us About Your Idea
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  A visual example of a landing page enquiry form.
                </p>
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#00869A] focus:ring-2 focus:ring-[#00869A]/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#00869A] focus:ring-2 focus:ring-[#00869A]/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white outline-none focus:border-[#00869A]"
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Landing Page Design</option>
                    <option>Website Design</option>
                    <option>UI/UX Design</option>
                    <option>Web Application</option>
                  </select>
                </div>

                <Link
                  to="/schedule-consultation"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#004658] text-white font-bold text-sm py-4 hover:bg-[#006174] transition-colors"
                >
                  Discuss Your Project <span>↗</span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 08. FINAL CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="relative overflow-hidden bg-[#002B34] text-white rounded-[28px] p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#00A8CC]/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#4EF0C5]/15 blur-3xl" />

          <div className="relative">
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#4EF0C5] mb-6">
              Your next big idea starts here
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold mb-5 font-['Outfit',sans-serif]">
              Ready to Turn More Visitors Into Customers?
            </h2>

            <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto mb-8 leading-7">
              Let's create a landing page that tells your story, builds
              trust and gives your audience a clear reason to take action.
            </p>

            <Link
              to="/schedule-consultation"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#4EF0C5] text-[#002B34] font-extrabold hover:bg-white hover:-translate-y-1 transition-all shadow-lg"
            >
              Schedule a Strategy Session <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPageDesign;
