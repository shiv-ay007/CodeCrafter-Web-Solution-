import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Play, 
  ArrowRight, 
  TrendingUp, 
  Eye, 
  Clock, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Share2, 
  Sliders,
  Volume2
} from 'lucide-react'
import YouTubeIcon from './YouTubeIcon'

const HeroYouTubeMarketing = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto overflow-hidden select-none">
      
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.25) 0%, rgba(0, 216, 255, 0.15) 50%, transparent 75%)'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-6 shadow-2xs">
            <YouTubeIcon className="w-4 h-4 text-red-600 fill-current" />
            <span>YouTube Video Marketing & Enterprise Channel Growth</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08] mb-6">
            Dominate Search & Suggested. <br />
            Turn Viewers Into <span className="text-[#004658]">High-Value Clients.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
            Video is the highest-trust sales medium on the internet. We engineer high-retention video strategies, algorithmic YouTube SEO, custom thumbnail science, and lead conversion funnels that build long-term brand authority.
          </p>

          {/* Key Metrics Quick Pill Row */}
          <div className="grid grid-cols-3 gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div className="text-left">
              <span className="text-2xl sm:text-3xl font-black text-[#004658] block tracking-tight">4.2x</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">Average Watch Time Lift</span>
            </div>
            <div className="text-left border-l border-slate-200 pl-3.5">
              <span className="text-2xl sm:text-3xl font-black text-cyan-600 block tracking-tight">84%+</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">Target Search Dominance</span>
            </div>
            <div className="text-left border-l border-slate-200 pl-3.5">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 block tracking-tight">11.8%</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">Top-Tier Thumbnail CTR</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] hover:bg-[#003442] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:-translate-y-0.5 transition-all duration-300 gap-2"
            >
              <span>Scale My YouTube Channel</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://www.youtube.com/@CodeCrafterWebSolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold text-slate-800 bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-[#004658] rounded-xl px-6 py-3.5 text-sm transition-all duration-300 gap-2 group"
            >
              <YouTubeIcon className="w-4 h-4 text-red-600 fill-current group-hover:scale-110 transition-transform" />
              <span>Visit @CodeCrafterWebSolutions</span>
            </a>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Organic White-Hat Growth</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#004658]" />
              <span>Full Scriptwriting & 4K Production</span>
            </div>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Conversion-Focused Funnel Hooks</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Simulated YouTube Player / Engine Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative rounded-3xl bg-slate-900 p-5 sm:p-6 text-white border border-slate-800 shadow-2xl overflow-hidden w-full max-w-lg">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-xs font-mono text-[#00D8FF] font-bold flex items-center gap-1.5">
                  <YouTubeIcon className="w-3.5 h-3.5 text-red-500 fill-current" />
                  YOUTUBE GROWTH STUDIO
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                ● LIVE PIPELINE
              </span>
            </div>

            {/* Video Mockup Viewport */}
            <div className="relative rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 border border-slate-700/60 aspect-video overflow-hidden flex flex-col justify-between p-4 mb-4 group shadow-inner">
              
              {/* Top Viewport Overlay info */}
              <div className="flex items-center justify-between z-10">
                <span className="px-2 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono font-bold text-white flex items-center gap-1.5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span> 4K ULTRA HD
                </span>
                <span className="px-2 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10">
                  12:45 / 15:20
                </span>
              </div>

              {/* Central Play Interactive Icon */}
              <div className="flex items-center justify-center my-auto z-10">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg shadow-red-600/50 hover:scale-110 active:scale-95 transition-all cursor-pointer group/play"
                  aria-label="Play Video Preview"
                >
                  <Play className={`w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5 ${isPlaying ? 'scale-90 opacity-80' : ''}`} />
                </button>
              </div>

              {/* Bottom Video Progress Bar & Title */}
              <div className="z-10 space-y-2">
                <div className="text-left">
                  <span className="text-xs font-bold text-white drop-shadow block truncate">
                    Enterprise SaaS Architecture: Scaling to 1M+ Users
                  </span>
                </div>

                {/* Scrubber Bar */}
                <div className="w-full bg-slate-700/80 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-red-600 h-full w-[78%] rounded-full relative">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-sm"></span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-300 font-mono">
                  <span>Audience Retention: 78.4%</span>
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-3 h-3 text-slate-300" />
                    <span>HD 1080p</span>
                  </div>
                </div>
              </div>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
            </div>

            {/* Simulated Channel & Live Stats Bar */}
            <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#004658] via-teal-700 to-[#0A66C2] flex items-center justify-center font-black text-white text-xs shadow-md">
                    CC
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      CodeCrafter Web Solutions
                      <span className="px-1.5 py-0.2 rounded bg-teal-500/20 text-teal-300 text-[9px] font-bold">Official</span>
                    </div>
                    <div className="text-[10px] text-slate-400">@CodeCrafterWebSolutions</div>
                  </div>
                </div>

                <a
                  href="https://www.youtube.com/@CodeCrafterWebSolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-sm hover:scale-105 transition-all"
                >
                  Subscribe
                </a>
              </div>
            </div>

            {/* Campaign Telemetry Dashboard */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-left">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Search Impressions</div>
                <div className="text-lg font-black text-[#00D8FF] mt-0.5">850K+ / mo</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Rank #1 for 34 keywords</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-left">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Organic Pipeline</div>
                <div className="text-lg font-black text-emerald-400 mt-0.5">+320%</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Inbound consultation calls</div>
              </div>
            </div>

            {/* Official Channel Card Link */}
            <a 
              href="https://www.youtube.com/@CodeCrafterWebSolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between group hover:bg-slate-800/60 hover:border-[#004658]/60 transition-all duration-200"
            >
              <div className="flex items-center gap-2.5">
                <YouTubeIcon className="w-5 h-5 text-red-500 fill-current" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-[#00D8FF] transition-colors">
                    Official Channel: @CodeCrafterWebSolutions
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Watch our latest tech tutorials & case studies
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#00D8FF] group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroYouTubeMarketing
