import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Case Studies" },
    { id: "fintech", label: "Fintech & SaaS" },
    { id: "ecommerce", label: "E-Commerce & Retail" },
    { id: "enterprise", label: "Healthcare & Enterprise" },
    { id: "mobile", label: "Mobile & AI" }
  ];

  const caseStudiesData = [
    {
      id: 1,
      category: "fintech",
      client: "NovaPay Financial",
      badge: "Fintech Platform",
      title: "Engineered high-concurrency payment gateway processing $12M daily with 99.999% uptime.",
      summary: "NovaPay required a fault-tolerant microservices gateway capable of handling 5,000+ transactions per second without database bottlenecks.",
      impact: ["+300% TPS Scalability", "99.999% System Availability", "Sub-45ms Transaction Latency"],
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS Lambda", "Docker"]
    },
    {
      id: 2,
      category: "enterprise",
      client: "HealthPulse Global",
      badge: "Healthcare & Telehealth",
      title: "Built HIPAA-compliant telehealth & electronic medical record system for 50+ clinics.",
      summary: "Streamlined online patient onboarding, encrypted video consultations, and automated doctor scheduling across multi-location healthcare networks.",
      impact: ["500k+ Active Patients", "75% Faster Onboarding", "100% HIPAA & GDPR Compliant"],
      tech: ["Flutter", "FastAPI", "Python", "WebRTC", "PostgreSQL", "Kubernetes"]
    },
    {
      id: 3,
      category: "ecommerce",
      client: "LuxeCraft Apparel",
      badge: "E-Commerce Portal",
      title: "Headless e-commerce rebuild yielding 45% increase in checkout conversions & 0.4s load speed.",
      summary: "Migrated a legacy e-commerce store to a ultra-fast headless React setup with edge caching and instant page transitions.",
      impact: ["0.4s Core Web Vitals", "+45% Checkout Conversions", "2M+ Monthly Visitors"],
      tech: ["Next.js", "Shopify API", "Tailwind CSS", "GraphQL", "Cloudflare Edge"]
    },
    {
      id: 4,
      category: "enterprise",
      client: "OmniLogistics ERP",
      badge: "Supply Chain & Logistics",
      title: "Real-time fleet tracking and automated warehouse management portal for 10,000+ daily assets.",
      summary: "Developed an enterprise ERP dashboard aggregating real-time GPS telemetry, inventory dispatch, and automated driver payout workflows.",
      impact: ["38% Operational Cost Reduction", "10x Scalability under Load", "Real-Time Telemetry Tracking"],
      tech: ["React", "Go Microservices", "PostgreSQL", "MQTT", "Docker", "GCP"]
    },
    {
      id: 5,
      category: "mobile",
      client: "Aura AI Assistant",
      badge: "Mobile & AI Studio",
      title: "Cross-platform mobile AI app delivering 60 FPS smooth interactions and real-time voice synthesis.",
      summary: "Built a native iOS and Android AI companion app utilizing Flutter and custom C++ audio processing engines.",
      impact: ["4.9★ App Store Rating", "100k+ Downloads in Month 1", "Sub-100ms Voice Response"],
      tech: ["Flutter", "Dart", "Python OpenAI API", "WebSockets", "Firebase"]
    },
    {
      id: 6,
      category: "fintech",
      client: "CrediFlow SaaS",
      badge: "B2B Credit & Invoicing",
      title: "Automated B2B credit scoring and recurring invoicing engine for global SaaS enterprises.",
      summary: "Automated invoice reconciliations, payment reminders, and multi-tenant ledger management for high-volume SaaS platforms.",
      impact: ["$50M+ Invoices Processed", "85% Less Manual Accounting", "SOC2 Type II Certified"],
      tech: ["React", "TypeScript", "Node.js", "Stripe API", "PostgreSQL"]
    }
  ];

  const filteredStudies = activeCategory === "all" 
    ? caseStudiesData 
    : caseStudiesData.filter(item => item.category === activeCategory);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-[#004658] animate-pulse" />
          <span>📊 Proven Client Impact & Case Studies</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Real Production Impact for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            World-Class Brands
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Explore how CodeCrafter helped fast-growing startups and enterprises engineer scalable platforms, double conversions, and eliminate technical debt.
        </p>

        {/* Hero Quick Stat Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">100+</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Production Apps Shipped</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">$50M+</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Client Revenue Scaled</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">99.99%</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Average Uptime</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">4.9 / 5</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Client Rating</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#004658] text-white shadow-md shadow-[#004658]/20"
                  : "bg-white border border-slate-200 text-slate-700 hover:border-[#004658]/40 hover:text-[#004658]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-lg shadow-[#004658]/5 hover:shadow-xl hover:border-[#004658]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#004658] uppercase tracking-wider">{study.client}</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-[11px] font-semibold">
                    {study.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug font-['Outfit',sans-serif]">
                  {study.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Key Impact Badges */}
                <div className="space-y-2 mb-6">
                  {study.impact.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mb-6">
                  {study.tech.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10.5px] font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to="/schedule-consultation"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#004658] hover:underline"
                >
                  <span>Build a Similar Product</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Spotlight Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-[#003442] to-[#00171F] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-2">Flagship Case Spotlight</span>
              <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">
                NovaPay: Scaling Payment Gateway to $12M Daily Volume
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                "CodeCrafter re-engineered our core transaction processing engine from scratch. Their team delivered sub-50ms API latency, zero downtime during high-concurrency flash sales, and flawless compliance documentation."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#004658] border border-[#4EF0C5] flex items-center justify-center font-bold text-white text-lg">
                  NP
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Chief Technology Officer</p>
                  <p className="text-xs text-[#4EF0C5]">NovaPay Financial Global</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
              <h4 className="text-sm font-bold text-[#4EF0C5] uppercase tracking-wider">Project Snapshot</h4>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Architecture:</span>
                  <span className="font-semibold text-white">Event-Driven Microservices</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Database:</span>
                  <span className="font-semibold text-white">PostgreSQL + Redis Cluster</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Throughput:</span>
                  <span className="font-semibold text-white">5,000+ Transactions / Sec</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Delivery Timeline:</span>
                  <span className="font-semibold text-[#4EF0C5]">12 Weeks On-Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">
            Ready to Become Our Next Success Story?
          </h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Let's discuss your product goals, technical architecture, and roadmap with our Lead Engineers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/schedule-consultation"
              className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all shadow-lg"
            >
              Schedule Consultation Call
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 transition-all"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
