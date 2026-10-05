import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Star, CheckCircle, ShieldCheck, TrendingUp, Navigation, Search } from 'lucide-react'

const HeroLocalSeo = () => {
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
          {/* Glass Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-black uppercase tracking-wider mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Google Business Profile & Map Pack Domination</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08] mb-6">
            Dominate Local Search. <br />
            Capture Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Nearby Customer.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
            Rank in the top 3 on Google Maps when high-intent local customers search for your services in your city. Drive direct phone calls, store footfall, and high-converting local inquiries.
          </p>

          {/* Key Metrics Quick Pill Row */}
          <div className="grid grid-cols-3 gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div className="text-left">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 block tracking-tight">#1 Rank</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">Google Maps 3-Pack</span>
            </div>
            <div className="text-left border-l border-slate-200 pl-3.5">
              <span className="text-2xl sm:text-3xl font-black text-[#004658] block tracking-tight">+340%</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">Direct Phone Calls</span>
            </div>
            <div className="text-left border-l border-slate-200 pl-3.5">
              <span className="text-2xl sm:text-3xl font-black text-cyan-600 block tracking-tight">100%</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">NAP Citation Accuracy</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>Get Free Local Audit</span>
              <Navigation className="w-4 h-4" />
            </Link>

            <a
              href="#local-blueprint"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300 cursor-pointer"
            >
              Explore Local Blueprint ➔
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Live Google Maps 3-Pack Preview Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-3xl bg-slate-950 p-6 sm:p-7 text-white border border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Top Browser / Map Header */}
            <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-cyan-400 font-bold ml-2">GOOGLE MAPS 3-PACK PREVIEW</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10.5px] font-mono font-bold flex items-center gap-1 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>#1 POSITION</span>
              </span>
            </div>

            {/* Simulated Google Search Bar */}
            <div className="mb-5 p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono text-slate-200">best software & web company near me</span>
              </div>
              <span className="text-[10.5px] bg-cyan-950 text-cyan-300 font-mono px-2 py-0.5 rounded border border-cyan-800">Lucknow</span>
            </div>

            {/* Featured #1 Local Map Pack Listing Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#004658]/30 border-2 border-emerald-500/50 space-y-3 mb-4 relative group shadow-lg">
              
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>CodeCrafter Web Solutions</span>
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold mt-1">
                    <span>★★★★★ 5.0</span>
                    <span className="text-slate-300 font-normal">(98 Google Reviews)</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-cyan-400 font-medium">Software Studio</span>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-4.5 h-4.5 font-bold" />
                </div>
              </div>

              {/* Attributes & Timing */}
              <div className="text-xs text-slate-300 space-y-1 pt-1 border-t border-slate-800/80">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-semibold text-emerald-400">Open 24 Hours</span>
                  <span className="text-slate-400">• Hazratganj, Lucknow</span>
                </p>
                <p className="text-slate-400">Online appointments & On-site consultation available</p>
              </div>

              {/* Geo-Grid Rank Heatmap Pill */}
              <div className="flex items-center justify-between text-[11px] font-mono pt-2 text-slate-400">
                <span>Geo-Grid Radius Coverage:</span>
                <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">10 KM (Rank 1-3)</span>
              </div>

            </div>

            {/* Local Citations & Review Proof Footer Bar */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Geo-Citations: 150+ Directories Synced</span>
              </span>
              <span className="text-emerald-400 font-mono font-bold">100% NAP Matched</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroLocalSeo
