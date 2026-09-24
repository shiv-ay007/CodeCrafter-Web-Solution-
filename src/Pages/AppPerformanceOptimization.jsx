import React from "react";
import { Link } from "react-router-dom";

const AppPerformanceOptimization = () => {
  const metrics = [
    { title: "60 FPS Guarantee", label: "Zero Jank Frame Budget (<16.6ms)" },
    { title: "35% Smaller APK/IPA", label: "ProGuard & Tree-Shaking Shrinking" },
    { title: "Sub-1.2s App Cold Start", label: "Optimized Native Warmup" },
    { title: "Zero Memory Leaks", label: "Profiled Memory Allocations" }
  ];

  const tactics = [
    { title: "Frame Budget & Thread Optimization", desc: "Offload heavy data processing and image decoding off the UI thread to maintain fluid 60 FPS animation physics." },
    { title: "Memory Leak Profiling", desc: "Detect unreleased Bitmaps, context leaks, and retain cycles using Xcode Instruments and Android Profiler." },
    { title: "Binary Size Reduction (ProGuard / R8)", desc: "Strip dead code, shrink resources, and apply native C++ bytecode obfuscation." },
    { title: "Battery & CPU Consumption Audits", desc: "Optimize background location tracking, network polling, and wake locks to conserve user battery life." }
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
          <span>⚡ Mobile App Performance Optimization</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Silky-Smooth 60 FPS &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Sub-Second Cold Starts
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We profile, benchmark, and optimize iOS and Android apps to eliminate UI frame drops, shrink app binary sizes, and stop memory leaks.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">{m.title}</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tactics Grid */}
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
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Is Your Mobile App Experiencing Frame Drops?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Consult with our Mobile Performance Engineers for a full Xcode & Android Studio profile audit.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule Mobile Performance Audit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppPerformanceOptimization;
