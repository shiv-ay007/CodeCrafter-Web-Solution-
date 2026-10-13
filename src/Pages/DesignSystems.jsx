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


      
      {/* Design System Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#00869A]">
              Built for consistency
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-4 mb-6 font-['Outfit',sans-serif]">
              One System.
              <span className="block text-[#007A91]">
                Every Experience.
              </span>
            </h2>

            <p className="text-slate-600 text-lg leading-8 mb-8">
              Create a unified design language that connects your
              brand, design tokens and reusable UI components across
              every digital product.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["01", "Design Tokens"],
                ["02", "UI Components"],
                ["03", "Documentation"],
                ["04", "Developer Handoff"],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-[#00869A]/50 transition-colors"
                >
                  <span className="text-sm font-bold text-[#00869A]">
                    {number}
                  </span>
                  <span className="font-semibold text-slate-800 text-sm">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual architecture illustration */}
          <div className="relative rounded-[2rem] bg-[#EAF5F5] p-5 sm:p-8 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#4EF0C5]/30 blur-3xl" />

            <div className="relative bg-white rounded-2xl p-5 shadow-sm border border-white">
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-slate-900">
                  System Architecture
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#4EF0C5]" />
              </div>

              <div className="bg-[#004658] text-white rounded-xl p-5 text-center shadow-lg">
                <span className="text-xs text-[#4EF0C5] uppercase tracking-widest">
                  Foundation
                </span>
                <h3 className="text-xl font-bold mt-1">
                  Design Tokens
                </h3>
                <p className="text-sm text-white/70 mt-1">
                  Colors · Type · Spacing · Radius
                </p>
              </div>

              <div className="flex justify-center h-10">
                <div className="w-px bg-[#00869A]" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Typography", "Aa"],
                  ["Color Palette", "◉"],
                  ["UI Components", "▦"],
                  ["Guidelines", "≡"],
                ].map(([title, symbol]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-slate-200 bg-[#FBFDFD] p-4"
                  >
                    <span className="text-xl font-bold text-[#00869A]">
                      {symbol}
                    </span>
                    <p className="text-sm font-semibold mt-2 text-slate-800">
                      {title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-[#EAF5F5] p-4 text-center">
                <p className="text-sm font-bold text-[#004658]">
                  Consistent Digital Experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design to Development Workflow */}
      <section className="bg-white border-y border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[#00869A]">
              Our workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3 font-['Outfit',sans-serif]">
              From Design to Production
            </h2>
            <p className="text-slate-600 mt-4 leading-7">
              A structured workflow helps designers and developers
              build, document and maintain consistent interfaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Design & Define",
                desc: "Establish visual foundations, design tokens and component specifications.",
                visual: "Aa",
                tag: "DESIGN FOUNDATIONS",
              },
              {
                step: "02",
                title: "Build & Reuse",
                desc: "Develop accessible React components with consistent styles and behaviour.",
                visual: "</>",
                tag: "REACT COMPONENTS",
              },
              {
                step: "03",
                title: "Document & Ship",
                desc: "Publish component guidelines, usage examples and implementation standards.",
                visual: "▤",
                tag: "DOCUMENTATION",
              },
            ].map((item) => (
              <article
                key={item.step}
                className="group rounded-3xl border border-slate-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-44 bg-[#EAF5F5] p-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute w-40 h-40 rounded-full border border-[#004658]/10" />
                  <div className="absolute w-28 h-28 rounded-full border border-[#004658]/15" />
                  <div className="relative w-24 h-24 rounded-2xl bg-[#004658] text-[#4EF0C5] flex items-center justify-center text-3xl font-bold shadow-xl group-hover:scale-105 transition-transform">
                    {item.visual}
                  </div>
                  <span className="absolute top-4 left-4 text-xs font-bold text-[#004658]">
                    STEP {item.step}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[10px] tracking-widest font-bold text-[#00869A]">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-6">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Component Library Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#00869A]">
              Component showcase
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 mb-5 font-['Outfit',sans-serif]">
              Every Component.
              <span className="block text-[#007A91]">
                One Language.
              </span>
            </h2>

            <p className="text-slate-600 leading-7 mb-6">
              Preview reusable interface elements built around
              shared design tokens. Keep every page visually
              consistent without rebuilding the same UI.
            </p>

            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "Consistent button variants",
                "Reusable form elements",
                "Standardized cards and tables",
                "Accessible interaction states",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#4EF0C5]/30 text-[#004658] flex items-center justify-center font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-[#002B34] p-5 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between gap-3 mb-6">
              <div>
                <p className="text-xs text-[#4EF0C5] uppercase tracking-widest">
                  Live preview
                </p>
                <h3 className="text-xl font-bold text-white mt-1">
                  UI Component Library
                </h3>
              </div>
              <span className="text-xs text-white/60 border border-white/15 rounded-lg px-3 py-2">
                v1.0
              </span>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-7 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                  Buttons
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="bg-[#004658] text-white px-5 py-3 rounded-lg text-sm font-bold hover:bg-[#006174] transition-colors">
                    Primary
                  </button>
                  <button className="border border-slate-300 text-slate-800 px-5 py-3 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">
                    Secondary
                  </button>
                  <button className="text-[#004658] px-5 py-3 rounded-lg text-sm font-bold hover:bg-[#EAF5F5] transition-colors">
                    Ghost
                  </button>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                  Form elements
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#00869A] focus:ring-2 focus:ring-[#00869A]/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Component type
                    </label>
                    <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm bg-white outline-none focus:border-[#00869A]">
                      <option>Buttons</option>
                      <option>Inputs</option>
                      <option>Cards</option>
                      <option>Tables</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-[#EAF5F5] rounded-xl p-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-[#004658] text-sm">
                    Components ready to reuse
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Consistent styles across your product
                  </p>
                </div>
                <span className="text-[#004658] text-xl font-bold">
                  ↗
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


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
