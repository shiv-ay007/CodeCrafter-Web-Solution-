import React from "react";
import { Link } from "react-router-dom";

const WebPerformanceOptimization = () => {
  const benchmarks = [
    { metric: "Largest Contentful Paint (LCP)", before: "4.2s (Poor)", after: "0.8s (Good)" },
    { metric: "Interaction to Next Paint (INP)", before: "280ms (Slow)", after: "35ms (Instant)" },
    { metric: "Cumulative Layout Shift (CLS)", before: "0.25 (Shifted)", after: "0.00 (Perfect)" },
    { metric: "JavaScript Bundle Size", before: "3.8 MB", after: "340 KB (Gzipped)" }
  ];

  const tactics = [
    { title: "Dynamic Code-Splitting & Tree-Shaking", desc: "Eliminate unused JavaScript and CSS, loading only the critical assets needed for the current viewport." },
    { title: "Edge CDN & Global Cache Routing", desc: "Cache static HTML and media assets at edge nodes worldwide with Cloudflare Enterprise & Vercel Edge." },
    { title: "Image & Media Compression Pipelines", desc: "Convert images to next-gen AVIF/WebP formats with responsive srcsets and lazy loading." },
    { title: "Database Query & API Caching", desc: "Implement Redis memory caching and SQL query index tuning to reduce server response time (TTFB)." }
  ];

  return (
    <div className="w-full bg-[#FBFDFD] pt-32 sm:pt-40 pb-24 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Gradient */}
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
          <span>⚡ Web Performance Optimization</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Supercharge Your Website to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Sub-Second Load Speeds
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We optimize Core Web Vitals, reduce bundle sizes, and tune edge servers to boost conversion rates and search engine rankings.
        </p>
      </div>

      {/* Before / After Benchmark Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#002B34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-2">Empirical Performance Gains</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif]">
              Average Optimization Impact
            </h2>
          </div>

          <div className="space-y-3">
            {benchmarks.map((b, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
                <span className="font-bold text-white w-1/2">{b.metric}</span>
                <div className="flex items-center gap-6">
                  <span className="text-rose-400 font-semibold line-through">{b.before}</span>
                  <span className="text-[#4EF0C5] font-bold text-base">{b.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tactics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tactics.map((item, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">{item.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Want a Free Website Speed Audit?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Our Engineers will run a comprehensive Lighthouse & Core Web Vitals diagnostic on your site.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Request Free Performance Audit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebPerformanceOptimization;
