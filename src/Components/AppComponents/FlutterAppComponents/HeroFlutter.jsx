import { Link } from 'react-router-dom'
import React from 'react'

const HeroFlutter = () => {
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
            Google Flutter 3.27 & Dart Multi-Platform Apps
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Pixel-Perfect Flutter Apps. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">120 FPS Impeller Speed.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Google’s revolutionary UI framework compiled to native ARM machine code. Deliver silky smooth, identical visual experiences across iOS, Android, Web, and Desktop.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div>
              <span className="text-xl font-black text-[#004658] block">Impeller</span>
              <span className="text-xs font-bold text-slate-900">GPU Graphics Engine</span>
            </div>
            <div>
              <span className="text-xl font-black text-emerald-600 block">120 FPS</span>
              <span className="text-xs font-bold text-slate-900">Silky Physics</span>
            </div>
            <div>
              <span className="text-xl font-black text-cyan-600 block">Multi-Screen</span>
              <span className="text-xs font-bold text-slate-900">Mobile + Web</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Build Flutter App ➔
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              Flutter Highlights
            </a>
          </div>
        </div>

        {/* Right Column: Flutter Widget Tree Graphic */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden w-full max-w-lg">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <span className="text-xs font-mono text-[#00D8FF] font-bold">FLUTTER NATIVE COMPILATION</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">ARM64 AOT</span>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#00D8FF] flex items-center justify-center text-xl font-bold">
                    🎯
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Impeller GPU Rendering Engine</div>
                    <div className="text-[10px] text-slate-400">Pre-compiled Vulkan & Metal shaders (Zero Jank)</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold">120.0 FPS</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Code Reusability Ratio</span>
                  <span className="text-[#00D8FF] font-mono font-bold">98% Across Platforms</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#004658] to-[#00D8FF] h-full w-[98%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroFlutter
