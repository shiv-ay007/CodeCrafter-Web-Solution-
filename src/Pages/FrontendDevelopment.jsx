import React from "react";
import { Link } from "react-router-dom";

const FrontendDevelopment = () => {
  const scores = [
    { label: "Performance", score: "100", color: "text-emerald-500" },
    { label: "Accessibility", score: "100", color: "text-emerald-500" },
    { label: "Best Practices", score: "100", color: "text-emerald-500" },
    { label: "SEO", score: "100", color: "text-emerald-500" }
  ];

  const features = [
    { title: "React 19 & Next.js 15 SSR", desc: "Server-side rendering, streaming HTML, and React Server Components for near-instant page loads." },
    { title: "Tailwind CSS & Design Systems", desc: "Utility-first modular styling, zero runtime CSS overhead, and strict dark/light design token support." },
    { title: "60 FPS Framer Motion Animations", desc: "Hardware-accelerated layout transitions, micro-interactions, and fluid scroll triggers." },
    { title: "TypeScript Type Safety", desc: "Strict end-to-end interface contracts preventing runtime JavaScript crashes." }
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
          <span>⚡ Next-Gen Front-end Engineering</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Pixel-Perfect, Lightning-Fast{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Front-End Development
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We craft ultra-responsive web interfaces with React, Next.js, and Tailwind CSS designed for flawless 60 FPS performance across all devices.
        </p>

        {/* Lighthouse Score Card */}
        <div className="bg-white border border-[#004658]/15 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-xl">
          <p className="text-xs font-bold text-[#004658] uppercase tracking-wider mb-4">Google Lighthouse Benchmark Target</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {scores.map((s, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <div className={`w-14 h-14 rounded-full border-4 border-emerald-500 flex items-center justify-center font-extrabold text-xl mx-auto mb-2 ${s.color}`}>
                  {s.score}
                </div>
                <p className="text-xs font-bold text-slate-700">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, idx) => (
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
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Need a Ultra-Fast Front-End Architecture?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Talk to our Senior Front-End Leads to upgrade your Web UI stack.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule Front-End Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrontendDevelopment;
