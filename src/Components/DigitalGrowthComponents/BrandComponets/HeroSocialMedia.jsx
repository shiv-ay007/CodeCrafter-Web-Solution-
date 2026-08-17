import { Link } from 'react-router-dom'
import React from 'react'

const HeroSocialMedia = () => {
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
            Viral Social Media Growth & Brand Traction
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Build Cult Brand Status. <br />
            Ignite <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Viral Growth.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Transform your company into an industry authority on LinkedIn, Instagram, X (Twitter), and YouTube with scroll-stopping video reels, thought-leadership carousels, and engaged community building.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div>
              <span className="text-xl font-black text-[#004658] block">10M+</span>
              <span className="text-xs font-bold text-slate-900">Organic Impressions</span>
            </div>
            <div>
              <span className="text-xl font-black text-emerald-600 block">4.2x</span>
              <span className="text-xs font-bold text-slate-900">Engagement Lift</span>
            </div>
            <div>
              <span className="text-xl font-black text-cyan-600 block">Weekly</span>
              <span className="text-xs font-bold text-slate-900">Viral Short Videos</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Scale Social Reach ➔
            </Link>
            <a
              href="#process"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              View Content Strategy
            </a>
          </div>
        </div>

        {/* Right Column: Multi-Channel Social Feed Preview */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 font-bold">OMNI-CHANNEL SOCIAL SYNC</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">LIVE METRICS</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">📸 Instagram Growth</span>
                  <span className="text-[10px] text-emerald-400 font-mono">+12.4k followers</span>
                </div>
                <div className="h-16 rounded-xl bg-gradient-to-tr from-purple-600/30 to-rose-600/30 border border-slate-800 flex items-center justify-center text-xs text-slate-300">
                  Viral Reels: 240k Views
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">💼 LinkedIn B2B</span>
                  <span className="text-[10px] text-cyan-400 font-mono">+48 B2B Leads</span>
                </div>
                <div className="h-16 rounded-xl bg-gradient-to-tr from-blue-600/30 to-cyan-600/30 border border-slate-800 flex items-center justify-center text-xs text-slate-300">
                  Executive Carousels
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSocialMedia
