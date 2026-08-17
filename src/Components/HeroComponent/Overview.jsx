import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const showcaseTabs = [
  {
    id: "who-we-are",
    tabNumber: "01",
    tabTitle: "Who We Are",
    badge: "GLOBAL SOFTWARE STUDIO",
    headline: "Engineering excellence meets strategic product design.",
    description: "We engineer high-performance web platforms, custom cloud applications, and dedicated engineering squads for fast-growing companies.",
    points: [
      {
        icon: "⚡",
        title: "Top 1% Senior Engineers",
        desc: "Pre-vetted architects & senior developers."
      },
      {
        icon: "🌍",
        title: "Global Timezone Sync",
        desc: "Aligned delivery across India, USA & UK hubs."
      },
      {
        icon: "🎯",
        title: "Outcome-Driven ROI",
        desc: "Focused on high throughput and user adoption."
      }
    ],
    metrics: [
      { value: "150+", label: "Products Shipped" },
      { value: "99.4%", label: "On-Time Delivery" },
      { value: "5+ Yrs", label: "Industry Expertise" }
    ],
    ctaText: "Explore Our Story",
    ctaLink: "/about",
    visual: {
      tag: "AGENCY DNA",
      title: "Craftsmanship at Scale",
      items: [
        { label: "Architecture", val: "Clean, Zero-Debt Codebases" },
        { label: "Ownership", val: "100% IP & Source Code Transfer" },
        { label: "Retention", val: "94% Long-Term Client Partnerships" },
        { label: "Sync", val: "Direct Slack Channels & Daily Standups" }
      ]
    }
  },
  {
    id: "how-we-build",
    tabNumber: "02",
    tabTitle: "How We Build",
    badge: "AGILE SPRINT CADENCE",
    headline: "Transparent sprints with continuous weekly delivery.",
    description: "We eliminate outsourcing friction through two-week sprints, live staging previews, automated QA, and daily transparency.",
    points: [
      {
        icon: "📋",
        title: "2-Week Sprint Cadence",
        desc: "Milestone planning & live weekly demos."
      },
      {
        icon: "🧪",
        title: "Automated QA Testing",
        desc: "Zero-defect releases with 98%+ test coverage."
      },
      {
        icon: "🚀",
        title: "Cloud Auto-Scaling",
        desc: "Serverless & Kubernetes edge architectures."
      }
    ],
    metrics: [
      { value: "2 Wks", label: "Sprint Cycles" },
      { value: "98.8%", label: "Test Coverage" },
      { value: "< 50ms", label: "Edge Latency" }
    ],
    ctaText: "See Our Process",
    ctaLink: "/web-development",
    visual: {
      tag: "BUILD PIPELINE",
      title: "Continuous Delivery SLA",
      items: [
        { label: "CI/CD Status", val: "Automated Builds Passing" },
        { label: "Security", val: "SOC-2 & Zero-Vulnerability Audited" },
        { label: "Performance", val: "Sub-50ms Global Edge Response" },
        { label: "Previews", val: "Instant Live Staging URLs" }
      ]
    }
  },
  {
    id: "why-choose-us",
    tabNumber: "03",
    tabTitle: "Why Choose Us",
    badge: "FOUNDER-FIRST ADVANTAGE",
    headline: "Built for velocity, predictability, and enterprise scale.",
    description: "We act as your dedicated co-innovation tech squad, helping you de-risk technology choices and launch 3.5x faster.",
    points: [
      {
        icon: "⏱️",
        title: "48-Hour Squad Setup",
        desc: "Onboard matched engineers in 2 days."
      },
      {
        icon: "🛡️",
        title: "100% IP Ownership",
        desc: "Complete asset & repository handover."
      },
      {
        icon: "🔒",
        title: "Strict NDA & Security",
        desc: "Enterprise confidentiality & ISO standards."
      }
    ],
    metrics: [
      { value: "48 Hrs", label: "Squad Setup" },
      { value: "3.5x", label: "Faster to Market" },
      { value: "40%", label: "Cloud Cost Saved" }
    ],
    ctaText: "Schedule Discovery Call",
    ctaLink: "/contact",
    visual: {
      tag: "GUARANTEED SLAS",
      title: "Predictable & Risk-Free",
      items: [
        { label: "Trial Period", val: "2-Week Risk-Free Trial Onboarding" },
        { label: "SLA Guarantee", val: "99.99% Uptime & 2-Hour Response" },
        { label: "Flexibility", val: "Scale Squad with 1-Week Notice" },
        { label: "Billing", val: "Predictable Monthly Flat-Rate" }
      ]
    }
  }
];

const Overview = () => {
  const [activeTab, setActiveTab] = useState(showcaseTabs[0]);

  return (
    <section className="w-full relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#edf6f9] border-b border-cyan-200/50 overflow-hidden" id="overview">
      
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none rounded-full opacity-35 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.15) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10 w-full max-w-[1360px] mx-auto space-y-6 sm:space-y-7">
        
        {/* Section Header (Minimalist & Clean) */}
        <div className="flex flex-col items-center text-center w-full max-w-3xl mx-auto">
          
          {/* Eyebrow Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
            <span>ABOUT CODECRAFTER</span>
          </div>

          {/* Main Wide Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-slate-950 tracking-[-0.03em] leading-[1.1] mb-2.5">
            Transforming visionary ideas into <br className="hidden sm:inline" />
            <span className="text-[#004658]">market-leading digital realities<span className="text-[#EA580C]">.</span></span>
          </h2>

          <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 font-normal leading-relaxed max-w-xl">
            A next-generation software studio and dedicated engineering partner for high-growth companies.
          </p>
        </div>

        {/* 3-STEP INTERACTIVE NAVIGATION TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl mx-auto">
          {showcaseTabs.map((tab) => {
            const isActive = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#004658] text-white shadow-md shadow-[#004658]/25 scale-102 ring-2 ring-[#004658]/20"
                    : "bg-white text-slate-700 hover:text-slate-950 border border-slate-200/90 shadow-2xs hover:shadow-xs"
                }`}
              >
                <span className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded ${
                  isActive ? "bg-white/20 text-cyan-200" : "bg-slate-100 text-[#004658]"
                }`}>
                  {tab.tabNumber}
                </span>
                <span>{tab.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* DYNAMIC TAB CONTENT DISPLAY CONTAINER */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="bg-white rounded-2xl p-5 sm:p-7 lg:p-8 border border-slate-200/90 shadow-xl shadow-slate-300/30 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch text-left"
            >
              
              {/* LEFT SIDE: Narrative Story, Value Points & Metrics (lg:col-span-7) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#004658] text-[10.5px] font-mono font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" />
                    <span>{activeTab.badge}</span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-950 tracking-tight leading-snug">
                    {activeTab.headline}
                  </h3>

                  {/* Short Crisp Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {activeTab.description}
                  </p>

                  {/* 3 Minimalist Value Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    {activeTab.points.map((pt, idx) => (
                      <div key={idx} className="bg-slate-50/90 p-3 sm:p-3.5 rounded-xl border border-slate-200/90 space-y-1 hover:bg-white hover:border-[#004658]/30 transition-all duration-200 shadow-2xs">
                        <div className="text-lg mb-0.5">{pt.icon}</div>
                        <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-950 leading-snug">{pt.title}</h4>
                        <p className="text-[11px] text-slate-500 font-normal leading-relaxed">{pt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Large Live Counters & CTA Button */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* 3 Metrics */}
                  <div className="flex items-center gap-5 sm:gap-7">
                    {activeTab.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#004658] tracking-tight">{m.value}</div>
                        <div className="text-[10.5px] sm:text-xs font-bold text-slate-500 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={activeTab.ctaLink}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#004658] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:scale-105 transition-all duration-200 shrink-0"
                  >
                    <span>{activeTab.ctaText}</span>
                    <span className="text-cyan-300 font-bold">→</span>
                  </Link>

                </div>

              </div>

              {/* RIGHT SIDE: Interactive Visual Studio Preview Card (lg:col-span-5) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#004658] via-[#003c4b] to-[#002630] text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-[#004658]/20 border border-teal-800/40">
                
                {/* Top Subtle Ambient Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-400/10 rounded-full blur-xl pointer-events-none" />

                {/* Visual Header */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-cyan-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-white/10">
                      {activeTab.visual.tag}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Live Verified
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-black text-white leading-snug">
                    {activeTab.visual.title}
                  </h4>
                </div>

                {/* Visual Items List */}
                <div className="relative z-10 space-y-2.5 my-4">
                  {activeTab.visual.items.map((item, vIdx) => (
                    <div key={vIdx} className="bg-white/10 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-white/10 flex flex-col gap-0.5">
                      <span className="text-[10px] font-mono text-cyan-200/80 uppercase tracking-wider font-semibold">
                        {item.label}
                      </span>
                      <span className="text-xs sm:text-[13px] font-bold text-white leading-snug">
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Trust Stamp */}
                <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-semibold text-white/80">
                  <span className="text-cyan-200">ISO 27001 &amp; GDPR Compliant</span>
                  <span>100% NDA Protected</span>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Bottom Smooth Curved Wave Transition into Services */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -z-0">
        <svg className="relative block w-full h-8 sm:h-14 text-[#f4f7fa] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.31,200.72,110.15,241.81,103.6,281.33,74.4,321.39,56.44Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default Overview;