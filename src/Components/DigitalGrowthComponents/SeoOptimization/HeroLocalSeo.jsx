import { Link } from 'react-router-dom'
import React from 'react'

const HeroLocalSeo = () => {
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
            Google Business Profile & Local 3-Pack Optimization
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Dominate Local Search. <br />
            Capture Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Nearby Customer.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Rank in the top 3 on Google Maps when high-intent local customers search for services in your city. Drive phone calls, store footfall, and local website inquiries.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div>
              <span className="text-xl font-black text-emerald-600 block">Top 3</span>
              <span className="text-xs font-bold text-slate-900">Google Maps Pack</span>
            </div>
            <div>
              <span className="text-xl font-black text-[#004658] block">+260%</span>
              <span className="text-xs font-bold text-slate-900">Direct Phone Calls</span>
            </div>
            <div>
              <span className="text-xl font-black text-cyan-600 block">100%</span>
              <span className="text-xs font-bold text-slate-900">NAP Consistency</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Dominate Local Rankings ➔
            </Link>
            <a
              href="#steps"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Right Column: Google Maps 3-Pack Visual Preview */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 font-bold">GOOGLE MAPS LOCAL 3-PACK</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">#1 PROMINENCE</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border-2 border-emerald-500/40 space-y-2 mb-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                    <span>📍 CodeCrafter Web Studio</span>
                    <span className="text-emerald-400 text-xs">✓ Verified</span>
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-bold mt-0.5">
                    <span>★★★★★ 5.0 (86 Reviews)</span>
                    <span className="text-slate-400 font-normal">• Software Company</span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded bg-emerald-600 text-white text-[10px] font-bold">Call Now</span>
              </div>
              <p className="text-xs text-slate-400">Open 24 Hours • Offers Online Consultations & In-Person Specs</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Geo-Targeted Citations: 150+ Directories Synced</span>
              <span className="text-emerald-400 font-bold">100% Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroLocalSeo
