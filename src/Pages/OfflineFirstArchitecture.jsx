import React, { useState } from "react";
import { Link } from "react-router-dom";

const OfflineFirstArchitecture = () => {
  const [isOnline, setIsOnline] = useState(false);

  const pillars = [
    { title: "Local Embedded Database", desc: "Utilize SQLite, WatermelonDB, or Realm on device for instant local read/write access with 0ms database lag." },
    { title: "Optimistic UI Updates", desc: "User actions update the UI immediately without waiting for server network confirmation." },
    { title: "Background Sync Workers", desc: "When network connectivity drops, mutations are queued locally and automatically synced when reconnected." },
    { title: "Conflict Resolution Protocol", desc: "Server-side timestamp & vector clock algorithms to resolve simultaneous offline edits seamlessly." }
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
          <span>⚡ Offline-First Mobile Architecture</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Apps That Work Seamlessly{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            With or Without Internet
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We architect resilient mobile apps with local database persistence, background sync queues, and zero-latency optimistic UI.
        </p>
      </div>

      {/* Interactive Network Simulator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#002B34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-1">Interactive Network Simulator</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif]">Test Offline Data Persistence</h2>
            </div>

            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-lg ${
                isOnline ? "bg-emerald-400 text-slate-950" : "bg-rose-500 text-white"
              }`}
            >
              {isOnline ? "🌐 Network Connected (Online)" : "✈️ Flight Mode (Offline)"}
            </button>
          </div>

          <div className="bg-[#001D25] border border-white/10 p-6 rounded-2xl space-y-4 font-mono text-xs sm:text-sm">
            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-slate-400">Local Database (SQLite / Realm):</span>
              <span className="text-emerald-400 font-bold">ACTIVE & PERSISTED (0ms Read/Write)</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-slate-400">Background Sync Queue:</span>
              <span className={isOnline ? "text-[#4EF0C5]" : "text-amber-400"}>
                {isOnline ? "Pushed 4 pending mutations to server → Synced!" : "Queueing 4 mutations locally..."}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars Grid */}
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
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Build a Zero-Lag Offline App Today</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Discuss local database architecture with our Senior Mobile Systems Architects.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule Offline App Strategy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfflineFirstArchitecture;
