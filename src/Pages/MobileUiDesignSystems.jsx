import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileUiDesignSystems = () => {
  const [activeTab, setActiveTab] = useState("ios");

  const platforms = {
    ios: {
      title: "iOS Human Interface Guidelines (HIG)",
      subtitle: "Fluid SF Symbols, native navigation headers, frosted glass blurs, and tactile haptic feedback.",
      components: ["SF Pro Typography Scale", "Native Large Titles & Navigation", "Fluid Sheet Modals & Bottom Drawers", "Tactile Haptic Engine Sync"]
    },
    android: {
      title: "Android Material 3 (Material You)",
      subtitle: "Dynamic color extraction, organic rounded shapes, predictable back gestures, and Material motion physics.",
      components: ["Material You Dynamic Color Tokens", "Floating Action Buttons (FAB)", "Predictive Back Navigation", "Edge-to-Edge Adaptive Layouts"]
    }
  };

  const current = platforms[activeTab];

  return (
    <div className="w-full bg-[#FBFDFD] pt-32 sm:pt-40 pb-24 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Ambient Background Gradient */}
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
          <span>📱 Mobile UI/UX Design Systems</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Native iOS & Android{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Mobile Design Systems
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We craft pixel-perfect mobile design tokens, component libraries, and 60 FPS gesture-driven UI kits tailored for iOS and Android platforms.
        </p>

        {/* Platform Switcher */}
        <div className="inline-flex items-center gap-2 bg-white p-1.5 rounded-full border border-[#004658]/15 shadow-md mb-12">
          <button
            onClick={() => setActiveTab("ios")}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "ios" ? "bg-[#004658] text-white shadow-sm" : "text-slate-600 hover:text-[#004658]"
            }`}
          >
            🍎 Apple iOS HIG
          </button>
          <button
            onClick={() => setActiveTab("android")}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "android" ? "bg-[#004658] text-white shadow-sm" : "text-slate-600 hover:text-[#004658]"
            }`}
          >
            🤖 Android Material 3
          </button>
        </div>
      </div>

      {/* Interactive Mobile Screen Visualizer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#002B34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block">Design System Standards</span>
              <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif]">
                {current.title}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {current.subtitle}
              </p>

              <div className="space-y-3 pt-2">
                {current.components.map((c, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#4EF0C5]" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Mobile Screen Mockup Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[260px] h-[480px] rounded-[40px] border-4 border-slate-700 bg-slate-900 p-4 relative shadow-2xl overflow-hidden flex flex-col justify-between">
                {/* Notch */}
                <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-4" />

                {/* Mockup Screen Elements */}
                <div className="space-y-3 text-left">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/15">
                    <p className="text-[10px] text-[#4EF0C5] font-bold uppercase">UI Component Token</p>
                    <p className="text-xs font-bold text-white mt-1">Interactive Glass Card</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#004658] text-white text-xs font-bold text-center shadow-lg">
                    Primary CTA Button
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[10px] text-slate-300">
                      Segment A
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[10px] text-slate-300">
                      Segment B
                    </div>
                  </div>
                </div>

                {/* Home Indicator Bar */}
                <div className="w-24 h-1 bg-white/40 rounded-full mx-auto mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Want a Native Mobile Design System for Your App?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Talk to our Mobile UI/UX Leads to design a fluid 60 FPS mobile component kit.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule Mobile UI Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileUiDesignSystems;
