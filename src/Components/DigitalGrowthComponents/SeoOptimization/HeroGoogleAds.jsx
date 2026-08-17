import { Link } from 'react-router-dom'
import React from 'react'

const HeroGoogleAds = () => {
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
            Google Ads & High-ROAS Performance Marketing
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Maximized Ad ROI. <br />
            Targeted Intent. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Scale High ROAS.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Stop burning budget on irrelevant clicks. We design high-converting PPC campaigns, Google Search Ads, Performance Max, and remarketing funnels that deliver measurable revenue returns.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div>
              <span className="text-xl font-black text-emerald-600 block">4.8x Avg</span>
              <span className="text-xs font-bold text-slate-900">Return On Ad Spend (ROAS)</span>
            </div>
            <div>
              <span className="text-xl font-black text-[#004658] block">-42%</span>
              <span className="text-xs font-bold text-slate-900">Cost Per Acquisition</span>
            </div>
            <div>
              <span className="text-xl font-black text-cyan-600 block">100%</span>
              <span className="text-xs font-bold text-slate-900">Conversion Tracking</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Launch High-ROAS Campaign ➔
            </Link>
            <a
              href="#strategies"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              Our PPC Strategy
            </a>
          </div>
        </div>

        {/* Right Column: Google Ads Dashboard Telemetry */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden font-sans">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 font-bold">GOOGLE ADS CONVERSION TELEMETRY</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">OPTIMIZED (PMAX)</span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Ad Spend / Month</span>
                  <span className="text-xl font-mono font-bold text-white">$10,000</span>
                  <span className="text-[10px] text-slate-500 block mt-1">Daily Budget: $333</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Generated Revenue</span>
                  <span className="text-xl font-mono font-bold text-emerald-400">$48,500</span>
                  <span className="text-[10px] text-emerald-500 font-bold block mt-1">4.85x ROAS Factor</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Conversion Rate (Landing Page)</span>
                  <span className="text-cyan-400 font-mono font-bold">8.4% (Industry Avg: 2.1%)</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#004658] to-[#00D8FF] h-full w-[84%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroGoogleAds
