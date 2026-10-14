import React from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  PenTool, 
  Video, 
  Image, 
  Zap, 
  BarChart3, 
  CheckCircle2, 
  Sparkles,
  Play
} from 'lucide-react'
import YouTubeIcon from './YouTubeIcon'

const youtubeCapabilities = [
  {
    id: 1,
    title: "YouTube SEO & Search Ranking",
    desc: "We perform deep keyword research, optimize titles, metadata tags, transcriptions, and timestamp chapters to rank your videos permanently at the top of Google & YouTube search.",
    icon: Search,
    badge: "Search Dominance",
    color: "from-teal-500/10 via-cyan-500/5 to-transparent",
    border: "border-teal-500/30"
  },
  {
    id: 2,
    title: "High-Retention Video Scriptwriting",
    desc: "Engineering 3-second psychological hooks, story-driven pacing, and clear retention loops that keep viewers glued to the screen past the critical 60% mark.",
    icon: PenTool,
    badge: "Audience Retention",
    color: "from-blue-500/10 via-teal-500/5 to-transparent",
    border: "border-blue-500/30"
  },
  {
    id: 3,
    title: "Cinematic Editing & Motion Graphics",
    desc: "Studio-grade post-production: sound design, color grading, kinetic typography, code-walkthrough screen animations, and branded graphical visual effects.",
    icon: Video,
    badge: "Studio 4K Quality",
    color: "from-cyan-500/10 via-blue-500/5 to-transparent",
    border: "border-cyan-500/30"
  },
  {
    id: 4,
    title: "High-CTR Custom Thumbnail Design",
    desc: "Surgical visual psychology: color contrast, high-expression framing, curiosity gaps, and typography optimized for mobile screens to deliver 10%+ click-through rates.",
    icon: Image,
    badge: "Click Science",
    color: "from-[#004658]/10 via-cyan-500/5 to-transparent",
    border: "border-[#004658]/30"
  },
  {
    id: 5,
    title: "Viral YouTube Shorts & Repurposing",
    desc: "Extracting high-impact moments from long-form tutorials, webinars, and founder podcasts into fast-paced vertical Shorts that rack up millions of algorithmic views.",
    icon: Zap,
    badge: "Viral Micro-Content",
    color: "from-emerald-500/10 via-teal-500/5 to-transparent",
    border: "border-emerald-500/30"
  },
  {
    id: 6,
    title: "Targeted YouTube Ads & In-Stream Funnels",
    desc: "Deploying high-intent TrueView In-Stream, Video Action Campaigns, and custom audience retargeting to drive corporate demo bookings at minimum CPA.",
    icon: BarChart3,
    badge: "Paid Video Ads",
    color: "from-indigo-500/10 via-cyan-500/5 to-transparent",
    border: "border-indigo-500/30"
  }
]

const YouTubeMarketingGrid = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto relative select-none" id="youtube-pillars">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#004658]/20">
          <YouTubeIcon className="w-3.5 h-3.5 text-red-600 fill-current" />
          <span>Full-Spectrum Video Growth System</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          6 Pillars Of High-Performance <span className="text-[#004658]">YouTube Marketing</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          From algorithmic search keyword ranking to viral shorts and studio post-production, we give your business an unfair advantage on the world's second-largest search engine.
        </p>
      </motion.div>

      {/* 6-Grid Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {youtubeCapabilities.map((item, idx) => {
          const IconComp = item.icon
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 hover:${item.border} hover:shadow-2xl hover:shadow-[#004658]/10 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#004658]/8 text-[#004658] group-hover:bg-[#004658] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-bold tracking-wide group-hover:bg-[#004658]/10 group-hover:text-[#004658] transition-colors">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#004658] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#004658] transition-colors relative z-10">
                <span>Enterprise Production</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default YouTubeMarketingGrid
