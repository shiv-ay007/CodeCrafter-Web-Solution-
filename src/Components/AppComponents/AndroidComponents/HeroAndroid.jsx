import { Link } from 'react-router-dom'
import React from 'react'

const HeroAndroid = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden">
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.35) 0%, rgba(0, 216, 255, 0.15) 70%)'
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-black uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Native Kotlin & Jetpack Compose Android Apps
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Native Android Apps <br />
            Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">3 Billion Devices.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            We engineer high-performance native Android applications with Jetpack Compose, Kotlin Coroutines, offline-first Room DB, and seamless Google Play Store compliance.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div>
              <span className="text-xl font-black text-[#004658] block">Kotlin 2.0</span>
              <span className="text-xs font-bold text-slate-900">Modern Architecture</span>
            </div>
            <div>
              <span className="text-xl font-black text-emerald-600 block">60 / 120 FPS</span>
              <span className="text-xs font-bold text-slate-900">Fluid Compose UI</span>
            </div>
            <div>
              <span className="text-xl font-black text-cyan-600 block">Offline-First</span>
              <span className="text-xs font-bold text-slate-900">SQLite / Room</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Build Your Android App ➔
            </Link>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              Explore Capabilities
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Android Device Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-72 sm:w-80 h-[520px] bg-slate-950 rounded-[48px] p-4 border-4 border-slate-800 shadow-2xl shadow-cyan-500/10 flex flex-col justify-between overflow-hidden">
            {/* Top Speaker / Camera Punch Hole */}
            <div className="flex justify-between items-center px-4 pt-1">
              <span className="text-[10px] text-slate-400 font-mono">09:41</span>
              <div className="w-3.5 h-3.5 rounded-full bg-slate-800 border border-slate-700" />
              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <span>5G</span>
                <span>🔋</span>
              </div>
            </div>

            {/* App UI Screen Simulation */}
            <div className="flex-1 my-3 bg-slate-900 rounded-3xl p-4 flex flex-col justify-between border border-slate-800/80">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">CodeCrafter Wallet</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="p-3 rounded-2xl bg-gradient-to-tr from-[#004658] to-[#00D8FF] text-white">
                  <span className="text-[10px] opacity-80 block">Portfolio Balance</span>
                  <span className="text-xl font-black font-mono">$48,290.40</span>
                  <span className="text-[10px] text-emerald-300 font-bold block mt-1">▲ +18.4% this month</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <span className="text-xs block">🚀 Send</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <span className="text-xs block">📥 Receive</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300 flex justify-between items-center">
                  <span>Biometric Face Auth</span>
                  <span className="text-emerald-400 font-bold">Enabled</span>
                </div>
              </div>

              {/* Bottom Nav Bar */}
              <div className="flex justify-around pt-2 border-t border-slate-800 text-xs text-slate-400">
                <span className="text-[#00D8FF] font-bold">Home</span>
                <span>Cards</span>
                <span>Stats</span>
                <span>Profile</span>
              </div>
            </div>

            {/* Bottom Gesture Navigation Bar */}
            <div className="w-28 h-1 bg-slate-600 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAndroid
