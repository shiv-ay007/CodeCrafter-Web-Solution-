import React, { useState } from "react";
import { Link } from "react-router-dom";

const WireframingPrototyping = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    { title: "Stage 01: Low-Fi Wireframe Blueprints", desc: "Mapping core information architecture, page layouts, and content hierarchy without visual distraction." },
    { title: "Stage 02: Interactive Clickable Prototypes", desc: "Simulating user journeys, micro-interactions, modal popups, and navigation flows in Figma." },
    { title: "Stage 03: Usability Testing & Iteration", desc: "Testing real user interactions, identifying conversion friction, and refining UX before writing code." }
  ];

  const highlights = [
    { title: "Rapid Product Discovery", desc: "Validate app concepts and features in days rather than waiting weeks for full UI renders." },
    { title: "Figma & Adobe XD Native", desc: "Collaborate directly with our design leads in real-time with comment-based feedback loops." },
    { title: "Zero Developer Wasted Hours", desc: "Identify UX bottlenecks early so engineers build the exact approved specification." },
    { title: "Responsive Layout Mapping", desc: "Simultaneous wireframing for Mobile (iOS/Android), Tablet, and Desktop resolutions." }
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
          <span>📐 UX Wireframing & Prototyping</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Visualize Your App Before Writing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            A Single Line of Code
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We transform product concepts into interactive Figma wireframes and clickable prototypes to test user flows and eliminate product risk.
        </p>
      </div>

      {/* Interactive Wireframing Process Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#002B34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-2">Prototyping Methodology</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif]">
              The 3 Stages of UX Validation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              {stages.map((stg, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    activeStage === idx
                      ? "bg-[#004658] border-[#4EF0C5] text-white shadow-lg"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <p className="font-bold text-sm sm:text-base">{stg.title}</p>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-[#001D25] border border-white/15 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-[#4EF0C5] mb-3 font-['Outfit',sans-serif]">{stages[activeStage].title}</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{stages[activeStage].desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
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
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Ready to Wireframe Your Next Application?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Schedule a UX discovery session with our Lead Product Designers.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule UX Discovery Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WireframingPrototyping;
