import React, { useState } from "react";
import { Link } from "react-router-dom";

const WireframingPrototyping = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const stages = [
    { 
      title: "Stage 01: Low-Fi Wireframe Blueprints", 
      desc: "Mapping core information architecture, page layouts, and content hierarchy without visual distraction to ensure flawless structural logic.",
      points: ["Content Hierarchy Mapping", "Layout Grid Systems", "User Flow Diagrams"]
    },
    { 
      title: "Stage 02: Interactive Clickable Prototypes", 
      desc: "Simulating real user journeys, micro-interactions, modal popups, and multi-page navigation flows directly in Figma.",
      points: ["Clickable Component Interactions", "Mobile & Desktop Transitions", "Live User Simulation"]
    },
    { 
      title: "Stage 03: Usability Testing & Iteration", 
      desc: "Testing real user interactions, identifying conversion friction, and refining UX specs before handing off to development engineers.",
      points: ["Usability Heatmaps & Testing", "Feedback Loop Iteration", "Developer Handoff Documentation"]
    }
  ];

  const highlights = [
    { title: "Rapid Product Discovery", desc: "Validate app concepts and features in days rather than waiting weeks for full UI renders.", icon: "⚡" },
    { title: "Figma & Adobe XD Native", desc: "Collaborate directly with our design leads in real-time with comment-based feedback loops.", icon: "🎨" },
    { title: "Zero Developer Wasted Hours", desc: "Identify UX bottlenecks early so engineers build the exact approved specification.", icon: "🎯" },
    { title: "Responsive Layout Mapping", desc: "Simultaneous wireframing for Mobile (iOS/Android), Tablet, and Desktop resolutions.", icon: "📱" }
  ];

  const deliverables = [
    {
      num: "01",
      title: "User Journey Maps",
      desc: "Visual flowchart diagrams mapping every path, decision node, and screen transition in your product."
    },
    {
      num: "02",
      title: "Low-Fi Screen Blueprints",
      desc: "Black-and-white structural layouts focusing 100% on content density, hierarchy, and CTA placement."
    },
    {
      num: "03",
      title: "Clickable Figma Prototypes",
      desc: "High-fidelity interactive prototype ready for stakeholder presentations and live user testing."
    },
    {
      num: "04",
      title: "Design Handoff Specs",
      desc: "Annotated UX specifications, spacing tokens, and component behavior rules for frontend developers."
    }
  ];

  const faqs = [
    {
      q: "How long does a wireframing & prototyping sprint take?",
      a: "Our typical wireframing sprint takes 3 to 7 business days, depending on product complexity and the number of core user flows."
    },
    {
      q: "Can we test the interactive prototype on actual mobile phones?",
      a: "Yes! Figma prototypes can be viewed live on iOS and Android devices via the Figma Mirror app or a clickable web preview link."
    },
    {
      q: "What happens after the wireframe is approved?",
      a: "Once wireframes and prototypes are signed off, we transition smoothly into High-Fidelity UI/UX Design or direct Frontend Development."
    },
    {
      q: "Do you provide developer handoff specifications?",
      a: "Absolutely. All prototypes include annotated user flows, design tokens, and spacing grids for seamless developer handoff."
    }
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

        {/* Hero CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            to="/schedule-consultation"
            className="px-8 py-3.5 rounded-full bg-[#004658] text-white font-bold text-sm sm:text-base hover:bg-[#003442] shadow-xl shadow-[#004658]/20 hover:-translate-y-0.5 transition-all"
          >
            Start Prototyping Sprint →
          </Link>
          <Link
            to="/web-design"
            className="px-8 py-3.5 rounded-full bg-white border border-[#004658]/25 text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-50 transition-all shadow-sm"
          >
            Explore UI/UX Design →
          </Link>
        </div>

        {/* Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto p-4 rounded-2xl bg-white/80 border border-[#004658]/15 shadow-sm backdrop-blur-md">
          <div className="text-center p-3">
            <div className="text-xl sm:text-2xl font-extrabold text-[#004658]">5 Days</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Average Prototype Sprint</div>
          </div>
          <div className="text-center p-3 border-l border-slate-200">
            <div className="text-xl sm:text-2xl font-extrabold text-[#004658]">60%+</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Development Cost Saved</div>
          </div>
          <div className="text-center p-3 border-l border-slate-200">
            <div className="text-xl sm:text-2xl font-extrabold text-[#004658]">100%</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Figma Native Tokens</div>
          </div>
          <div className="text-center p-3 border-l border-slate-200">
            <div className="text-xl sm:text-2xl font-extrabold text-[#004658]">0 Hours</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Wasted Developer Time</div>
          </div>
        </div>
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
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">{stages[activeStage].desc}</p>
              
              <div className="space-y-2 pt-4 border-t border-white/10">
                {stages[activeStage].points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-emerald-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4EF0C5]" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deliverables Suite */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004658] block mb-2">COMPLETE UX SUITE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">What You Receive in Our Prototyping Package</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((del, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <span className="text-2xl font-mono font-bold text-[#004658] block mb-4">{del.num}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit',sans-serif]">{del.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{del.desc}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-semibold text-[#004658]">
                Standard Deliverable ✓
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
              <span className="text-3xl p-3 rounded-2xl bg-[#004658]/8 text-[#004658] shrink-0">{item.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-['Outfit',sans-serif]">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004658] block mb-2">QUESTIONS & ANSWERS</span>
          <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-[#004658]/15 rounded-2xl bg-white overflow-hidden shadow-xs">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <span className="text-[#004658] text-xl">{activeFaq === idx ? "−" : "+"}</span>
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Ready to Wireframe Your Next Application?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Schedule a UX discovery session with our Lead Product Designers.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
              Schedule UX Discovery Call
            </Link>
            <Link to="/contact" className="px-8 py-3.5 rounded-full bg-white/10 border border-white/30 text-white font-bold text-sm sm:text-base hover:bg-white/20 transition-all inline-block">
              Contact UX Architect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WireframingPrototyping;
