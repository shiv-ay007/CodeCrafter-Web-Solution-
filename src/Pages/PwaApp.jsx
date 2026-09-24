import React, { useState } from "react";
import { Link } from "react-router-dom";

const PwaApp = () => {
  const [installed, setInstalled] = useState(false);

  const features = [
    { title: "Installable Desktop & Mobile App", desc: "Users can install your web app directly to their home screen or desktop taskbar without going through app stores." },
    { title: "Service Worker Offline Caching", desc: "Cache static assets and API data locally to deliver offline usability and instant page loads." },
    { title: "Web Push Notifications", desc: "Send re-engaging push notifications directly to user browsers on Android, Windows, macOS, and Chrome." },
    { title: "Single Codebase for Web & Mobile", desc: "Save up to 60% in engineering costs by delivering a PWA that works natively across all platforms." }
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
          <span>⚡ Progressive Web Apps (PWA)</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Native Mobile Experience{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Delivered via the Web
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We engineer installable Progressive Web Apps with offline service workers, web push notifications, and 60 FPS UI performance.
        </p>
      </div>

      {/* Interactive PWA Install Banner Simulator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#002B34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-1">Interactive PWA Simulator</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif]">Test Home Screen Installation</h2>
          </div>

          <div className="bg-[#001D25] border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#004658] text-[#4EF0C5] font-bold flex items-center justify-center text-xl border border-[#4EF0C5]">
                PWA
              </div>
              <div>
                <p className="font-bold text-white text-sm sm:text-base">CodeCrafter App</p>
                <p className="text-xs text-slate-400">Install to Home Screen • Service Worker Ready</p>
              </div>
            </div>

            <button
              onClick={() => setInstalled(!installed)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-lg ${
                installed ? "bg-emerald-400 text-slate-950" : "bg-[#4EF0C5] text-[#002B34]"
              }`}
            >
              {installed ? "✓ App Installed on Device!" : "Add to Home Screen"}
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
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
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Want to Turn Your Web App into a PWA?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Consult with our PWA Architects to implement Service Workers and offline caching.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule PWA Architecture Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PwaApp;
