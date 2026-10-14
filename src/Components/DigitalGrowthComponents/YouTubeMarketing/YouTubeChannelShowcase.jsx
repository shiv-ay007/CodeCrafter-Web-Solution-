import React from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Clock, 
  Eye, 
  TrendingUp, 
  Layers, 
  ArrowRight 
} from 'lucide-react'
import YouTubeIcon from './YouTubeIcon'

const channelVideos = [
  {
    id: 1,
    title: "Next-Gen Web Architecture: Scaling React & Cloud Apps to 1M+ Users",
    category: "Software Engineering",
    duration: "18:24",
    views: "24K+ Views",
    badge: "Masterclass",
    desc: "A comprehensive breakdown of enterprise caching, microservices, and sub-second load times built for modern web platforms.",
    thumbnailBg: "from-slate-900 via-[#004658]/40 to-slate-950"
  },
  {
    id: 2,
    title: "How We Cut Cloud Infrastructure Costs by 45% With Microservices",
    category: "DevOps & Cloud",
    duration: "14:10",
    views: "19K+ Views",
    badge: "Case Study",
    desc: "Real telemetry and architectural refactoring strategies that saved enterprise clients thousands every month in AWS/GCP bills.",
    thumbnailBg: "from-slate-900 via-red-950/40 to-slate-950"
  },
  {
    id: 3,
    title: "Enterprise Custom CRM vs Off-The-Shelf SaaS: The Honest ROI Guide",
    category: "Business Tech",
    duration: "21:05",
    views: "31K+ Views",
    badge: "Strategy Guide",
    desc: "Comparing the lifetime cost, data ownership, and workflow automation of bespoke software versus expensive subscription seats.",
    thumbnailBg: "from-slate-900 via-[#0A192F] to-slate-950"
  }
]

const YouTubeChannelShowcase = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto select-none" id="official-channel-showcase">
      <div className="rounded-3xl bg-slate-950 p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
        
        {/* Background Soft Ambient Teal Glow */}
        <div 
          className="absolute -top-32 right-0 w-[550px] h-[380px] pointer-events-none rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 70, 88, 0.35) 0%, rgba(0, 216, 255, 0.1) 60%, transparent 80%)'
          }}
        />

        {/* Section Top Header */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 pb-8 border-b border-slate-800/80">
          <div className="lg:col-span-8 text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/30 border border-[#004658]/50 text-[#00D8FF] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <YouTubeIcon className="w-3.5 h-3.5 fill-current text-red-500" />
              <span>Official Channel: @CodeCrafterWebSolutions</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
              Watch Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-[#00D8FF]">Engineering Masterclasses</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl">
              Subscribe to <strong className="text-white">@CodeCrafterWebSolutions</strong> on YouTube for real-world software architecture walk-throughs, technical tutorials, SaaS scaling secrets, and digital marketing teardowns.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href="https://www.youtube.com/@CodeCrafterWebSolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white px-7 py-4 text-sm font-bold shadow-lg shadow-red-900/40 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
            >
              <YouTubeIcon className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
              <span>Subscribe On YouTube</span>
              <ExternalLink className="w-4 h-4 text-red-200 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Channel Banner Info Pill */}
        <div className="relative z-10 p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center font-black text-white text-base shadow-lg shadow-red-600/30">
              <YouTubeIcon className="w-6 h-6 fill-white" />
            </div>
            <div className="text-left">
              <div className="text-base font-bold text-white flex items-center gap-2">
                <span>CodeCrafter Web Solutions</span>
                <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px] font-mono font-bold">
                  @CodeCrafterWebSolutions
                </span>
              </div>
              <div className="text-xs text-slate-400">
                Weekly Tech Tutorials • Full-Stack Case Studies • Performance Engineering
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-300">
            <div className="text-center sm:text-right">
              <span className="text-white font-black text-base block font-mono">100% Free</span>
              <span className="text-[11px] text-slate-400">Open-Source Knowledge</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="text-center sm:text-right">
              <span className="text-emerald-400 font-black text-base block font-mono">Weekly</span>
              <span className="text-[11px] text-slate-400">New Deep-Dives</span>
            </div>
          </div>
        </div>

        {/* 3 Featured Video Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {channelVideos.map((video) => (
            <a
              key={video.id}
              href="https://www.youtube.com/@CodeCrafterWebSolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#004658]/60 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Simulated Thumbnail Frame */}
                <div className={`aspect-video rounded-xl bg-gradient-to-br ${video.thumbnailBg} border border-white/10 mb-4 relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform`}>
                  
                  {/* Badge */}
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono font-bold text-red-400 border border-white/10">
                    {video.badge}
                  </span>

                  {/* Duration Tag */}
                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-slate-200">
                    {video.duration}
                  </span>

                  {/* Center Play Button Glow */}
                  <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg shadow-red-600/40 group-hover:scale-110 group-hover:bg-red-600 transition-all">
                    <Play className="w-5 h-5 fill-white translate-x-0.5" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2">
                  <span className="text-[#00D8FF] font-bold">{video.category}</span>
                  <span>{video.views}</span>
                </div>

                <h3 className="text-base font-bold text-white text-left group-hover:text-[#00D8FF] transition-colors line-clamp-2 leading-snug mb-2">
                  {video.title}
                </h3>

                <p className="text-xs text-slate-400 text-left leading-relaxed line-clamp-2 font-normal">
                  {video.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-[#00D8FF] transition-colors">
                <span>Watch on YouTube</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Channel Strip */}
        <div className="relative z-10 pt-4 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-3 border-t border-white/10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>CodeCrafter Web Solutions • Official YouTube Channel Presence</span>
          </div>

          <a 
            href="https://www.youtube.com/@CodeCrafterWebSolutions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00D8FF] hover:text-white hover:underline font-bold flex items-center gap-1.5 transition-colors"
          >
            <span>youtube.com/@CodeCrafterWebSolutions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default YouTubeChannelShowcase
