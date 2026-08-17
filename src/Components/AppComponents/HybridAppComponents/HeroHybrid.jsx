import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const HeroHybrid = () => {
  const [activePlatform, setActivePlatform] = useState('both')

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D8FF] animate-ping" />
            React Native & Expo Hybrid App Development
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            One Codebase. <br />
            Both iOS & Android. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">100% Native Speed.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Cut your development costs by 50% and launch twice as fast. We craft world-class cross-platform apps using React Native and Expo with native GPU bridge performance.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div>
              <span className="text-xl font-black text-[#004658] block">50% Faster</span>
              <span className="text-xs font-bold text-slate-900">Time-To-Market</span>
            </div>
            <div>
              <span className="text-xl font-black text-emerald-600 block">95%+</span>
              <span className="text-xs font-bold text-slate-900">Shared Code</span>
            </div>
            <div>
              <span className="text-xl font-black text-cyan-600 block">OTA</span>
              <span className="text-xs font-bold text-slate-900">Hot Code Push</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Build Hybrid App ➔
            </Link>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              Why Hybrid?
            </a>
          </div>
        </div>

        {/* Right Column: Dual Device Synchronized Simulator */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden w-full max-w-lg">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 font-bold">CROSS-PLATFORM SYNC ENGINE</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">REACT NATIVE 0.76</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* iOS Side */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-white">🍎 iOS Build</span>
                  <span className="text-emerald-400 font-mono text-[10px]">Swift Bridge</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] space-y-1">
                  <div className="text-cyan-300 font-bold">Hermes JS Engine</div>
                  <div className="text-slate-400">Zero startup lag • 60 FPS</div>
                </div>
              </div>

              {/* Android Side */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-white">🤖 Android Build</span>
                  <span className="text-emerald-400 font-mono text-[10px]">Kotlin JNI</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] space-y-1">
                  <div className="text-cyan-300 font-bold">TurboModules Active</div>
                  <div className="text-slate-400">Native thread execution</div>
                </div>
              </div>
            </div>

            {/* Over-The-Air Update Banner */}
            <div className="mt-4 p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-lg">⚡</span>
                <span className="text-xs text-cyan-200 font-bold">EAS Over-The-Air Instant Updates Enabled</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">No App Store Wait</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHybrid
