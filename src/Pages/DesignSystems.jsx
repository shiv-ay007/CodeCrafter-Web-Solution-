import React, { useState } from "react";
import { Link } from "react-router-dom";

const DesignSystems = () => {
  const [activeTheme, setActiveTheme] = useState("crafter");

  const themes = {
    crafter: { primary: "bg-[#004658]", text: "text-[#004658]", accent: "bg-[#4EF0C5]", border: "border-[#004658]" },
    emerald: { primary: "bg-emerald-700", text: "text-emerald-700", accent: "bg-emerald-400", border: "border-emerald-700" },
    indigo: { primary: "bg-indigo-700", text: "text-indigo-700", accent: "bg-indigo-400", border: "border-indigo-700" }
  };

  const current = themes[activeTheme];

  const pillars = [
    { title: "Design Tokens & Variables", desc: "Centralized color palettes, typography scales, spacing units, and border-radii defined as reusable Figma & CSS variables." },
    { title: "Reusable Component Libraries", desc: "Modular, accessible (WCAG 2.1) React component library documented with Storybook." },
    { title: "Single Source of Truth", desc: "Align designers and developers with synced Figma token pipelines and automated NPM package releases." },
    { title: "Multi-Brand & Dark Mode", desc: "Support multiple brand themes, dark/light modes, and white-label enterprise products seamlessly." }
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
          <span>🎨 Enterprise Design Systems</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Scale UI Consistency with a Unified{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Design System Blueprint
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We engineer tokenized UI libraries and Storybook component systems that bridge the gap between design teams and frontend engineers.
        </p>
      </div>

      {/* Interactive Token Theme Sandbox */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#002B34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-1">Design Token Simulator</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif]">Live Component Token Switcher</h2>
            </div>

            <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-1.5 rounded-full">
              <button
                onClick={() => setActiveTheme("crafter")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTheme === "crafter" ? "bg-[#4EF0C5] text-[#002B34]" : "text-slate-300"
                }`}
              >
                Crafter Teal
              </button>
              <button
                onClick={() => setActiveTheme("emerald")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTheme === "emerald" ? "bg-emerald-400 text-slate-950" : "text-slate-300"
                }`}
              >
                Emerald
              </button>
              <button
                onClick={() => setActiveTheme("indigo")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTheme === "indigo" ? "bg-indigo-400 text-slate-950" : "text-slate-300"
                }`}
              >
                Indigo
              </button>
            </div>
          </div>

          <div className="bg-[#001D25] border border-white/10 p-8 rounded-2xl flex flex-wrap items-center justify-around gap-6">
            <button className={`px-6 py-3 rounded-xl font-bold text-white transition-all shadow-lg ${current.primary}`}>
              Primary Button
            </button>
            <div className={`px-4 py-2 rounded-lg border font-semibold ${current.border} ${current.text}`}>
              Token Badge
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-4 h-4 rounded-full ${current.accent}`} />
              <span className="text-xs font-mono text-slate-300">var(--color-primary-accent)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item, idx) => (
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
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Ready to Build a Scalable Design System?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Talk to our Design Systems Architects to unify your UI token pipeline.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule Design Systems Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignSystems;
