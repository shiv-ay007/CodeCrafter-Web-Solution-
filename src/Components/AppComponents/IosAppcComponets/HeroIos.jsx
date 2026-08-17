import { Link } from 'react-router-dom'
import React from 'react'

const HeroIos = () => {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D8FF] animate-ping" />
            Swift 6 & SwiftUI iOS App Engineering
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Ultra-Premium iOS Apps <br />
            Crafted For The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Apple Ecosystem.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Bespoke iOS, iPadOS, and watchOS applications built with Swift 6 and SwiftUI. Master Apple Human Interface Guidelines with haptic feedback, Face ID, Apple Pay, and CoreML.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div>
              <span className="text-xl font-black text-[#004658] block">SwiftUI</span>
              <span className="text-xs font-bold text-slate-900">Apple Native</span>
            </div>
            <div>
              <span className="text-xl font-black text-emerald-600 block">120 Hz</span>
              <span className="text-xs font-bold text-slate-900">ProMotion Fluidity</span>
            </div>
            <div>
              <span className="text-xl font-black text-cyan-600 block">100%</span>
              <span className="text-xs font-bold text-slate-900">App Store Approval</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Build iOS App ➔
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              Explore iOS Features
            </a>
          </div>
        </div>

        {/* Right Column: iPhone 16 Pro Dynamic Island Frame */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-72 sm:w-80 h-[530px] bg-slate-950 rounded-[52px] p-3.5 border-4 border-slate-700 shadow-2xl shadow-cyan-500/10 flex flex-col justify-between overflow-hidden">
            {/* Dynamic Island Pill */}
            <div className="flex justify-between items-center px-4 pt-1">
              <span className="text-[11px] text-white font-mono font-bold">9:41</span>
              <div className="w-20 h-5 rounded-full bg-black flex items-center justify-between px-2 text-[9px] text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[8px] text-slate-400">Connected</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-white">
                <span>5G</span>
                <span>🔋</span>
              </div>
            </div>

            {/* iOS App UI Screen */}
            <div className="flex-1 my-3 bg-slate-900/90 backdrop-blur-xl rounded-3xl p-4 flex flex-col justify-between border border-slate-800">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-white uppercase tracking-wider">AI Studio Assistant</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#00D8FF]/20 text-[#00D8FF] text-[9px] font-bold">CoreML</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white space-y-1.5">
                  <div className="text-[10px] text-cyan-300 font-bold">Neural Engine Analytics</div>
                  <div className="text-lg font-mono font-black">99.4% Accuracy</div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#00D8FF] to-teal-400 h-full w-[94%]" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span>🍎</span>
                    <span className="text-xs font-bold text-white">Apple Pay One-Touch</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold">Ready</span>
                </div>
              </div>

              {/* iOS Bottom Navigation Bar */}
              <div className="flex justify-around pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                <span className="text-[#00D8FF] font-bold">✦ AI Flow</span>
                <span>Insight</span>
                <span>AppleID</span>
              </div>
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="w-32 h-1 bg-white/70 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroIos
