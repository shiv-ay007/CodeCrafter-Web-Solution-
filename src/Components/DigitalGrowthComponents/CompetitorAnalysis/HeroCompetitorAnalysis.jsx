import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Eye, TrendingUp, ShieldAlert, Target, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

const HeroCompetitorAnalysis = () => {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden select-none">
      
      {/* Soft Radial Ambient Glow */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.35) 0%, rgba(0, 216, 255, 0.15) 70%)'
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: Hero Copy & Value Props */}
        <motion.div 
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-left"
        >
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-900 text-xs font-black uppercase tracking-wider mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <span>Competitor Market Intelligence & Gap Analysis</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08] mb-6">
            Deconstruct Competitors. <br />
            Capture Their <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Market Share.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
            Reverse-engineer your top competitors' SEO rankings, paid ad campaigns, backlink profiles, content strategies, and pricing funnels. Uncover hidden market gaps and outposition rival brands.
          </p>

          {/* Key Metrics Quick Pill Row */}
          <div className="grid grid-cols-3 gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div className="text-left">
              <span className="text-2xl sm:text-3xl font-black text-[#004658] block tracking-tight">100%</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">Strategy Deconstructed</span>
            </div>
            <div className="text-left border-l border-slate-200 pl-3.5">
              <span className="text-2xl sm:text-3xl font-black text-cyan-600 block tracking-tight">5X</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">Faster Keyword Ranking</span>
            </div>
            <div className="text-left border-l border-slate-200 pl-3.5">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 block tracking-tight">0%</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">Wasted Ad Budget</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>Get Free Competitor Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#competitor-grid"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300 cursor-pointer"
            >
              View Analysis Framework ➔
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Live Competitor Matrix & Intelligence Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-3xl bg-slate-950 p-6 sm:p-7 text-white border border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Top Window Header */}
            <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-cyan-400 font-bold ml-2">MARKET INTELLIGENCE MATRIX</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[10.5px] font-mono font-bold flex items-center gap-1 border border-cyan-500/30">
                <Eye className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span>LIVE REVERSE-ENGINEER</span>
              </span>
            </div>

            {/* Competitor Benchmarking Grid */}
            <div className="space-y-3 mb-4">
              
              {/* Row 1: Keyword Overlap */}
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 font-mono block text-[10.5px]">ORGANIC KEYWORD GAP</span>
                  <span className="text-white font-bold text-sm">1,480 High-Intent Keywords</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold border border-emerald-500/30">
                  Opportunity Identified
                </span>
              </div>

              {/* Row 2: Backlink Profile Intersect */}
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 font-mono block text-[10.5px]">BACKLINK AUTHORITY SOURCES</span>
                  <span className="text-white font-bold text-sm">340 High-DA Authority Domains</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono font-bold border border-cyan-500/30">
                  Ready To Hijack
                </span>
              </div>

              {/* Row 3: Paid Ads Budget & Copy */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#004658]/30 border-2 border-cyan-500/40 flex items-center justify-between text-xs">
                <div>
                  <span className="text-cyan-400 font-mono block text-[10.5px]">COMPETITOR PPC AD COPIES</span>
                  <span className="text-white font-bold text-sm">Top 12 High-Converting Funnels</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono font-bold border border-amber-500/30">
                  Ad Spend Uncovered
                </span>
              </div>

            </div>

            {/* Intelligence Footer Bar */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>Market Share Shift Projection:</span>
              </span>
              <span className="text-emerald-400 font-mono font-bold">+35% Share of Voice</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroCompetitorAnalysis
