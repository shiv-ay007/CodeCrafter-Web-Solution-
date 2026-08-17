import { Link } from 'react-router-dom'
import React from 'react'

const HeroSeo = () => {
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
            Data-Driven Organic Search Engine Optimization (SEO)
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Dominate Google Search. <br />
            Rank <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">#1 Organic.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Stop paying for every single click. We implement scientific technical SEO, high-authority backlink acquisition, and semantic content clustering that floods your website with qualified buyers.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div>
              <span className="text-xl font-black text-emerald-600 block">+380%</span>
              <span className="text-xs font-bold text-slate-900">Organic Traffic Lift</span>
            </div>
            <div>
              <span className="text-xl font-black text-[#004658] block">Top 3</span>
              <span className="text-xs font-bold text-slate-900">Target Keyword Pos</span>
            </div>
            <div>
              <span className="text-xl font-black text-cyan-600 block">100%</span>
              <span className="text-xs font-bold text-slate-900">White-Hat Methods</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Free SEO Audit ➔
            </Link>
            <a
              href="#process"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              Our SEO Framework
            </a>
          </div>
        </div>

        {/* Right Column: Google Search SERP Rank Simulator */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-base">🔍</span>
                <span className="text-xs font-mono text-slate-300">google.com/search?q=top+web+solutions</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">RANK #1 (FEATURED)</span>
            </div>

            {/* Simulated SERP Result #1 */}
            <div className="p-4 rounded-2xl bg-slate-950 border-2 border-emerald-500/50 space-y-2 mb-3 shadow-lg shadow-emerald-500/10">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-4 h-4 rounded-full bg-[#004658] flex items-center justify-center text-[9px] text-white font-bold">CC</span>
                <span>https://codecrafter.io</span>
                <span className="text-slate-600">› solutions</span>
              </div>
              <h3 className="text-base font-bold text-[#00D8FF] hover:underline cursor-pointer">
                CodeCrafter Web Solutions — Enterprise Web Development & Custom Software
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Award-winning software engineering studio building ultra-fast React, Next.js, and high-concurrency cloud applications. Sub-second load times and 100% Core Web Vitals...
              </p>
              <div className="flex gap-2 pt-1 text-[10px] text-emerald-400 font-mono">
                <span>★★★★★ 4.9 (120+ Reviews)</span>
                <span>• Sitelinks Active</span>
              </div>
            </div>

            {/* Keyword Tracking Metric */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Target Keyword: "custom web development studio"</span>
              <span className="text-emerald-400 font-mono font-bold">▲ +14 Positions (Rank 1)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSeo
