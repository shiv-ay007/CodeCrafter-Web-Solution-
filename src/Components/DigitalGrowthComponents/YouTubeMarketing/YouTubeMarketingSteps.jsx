import React from 'react'
import { motion } from 'framer-motion'
import { Check, ShieldCheck, Target, Search, Video, Sliders, ArrowRight } from 'lucide-react'
import YouTubeIcon from './YouTubeIcon'

const youtubeSteps = [
  {
    step: '01',
    title: 'Search Demand & Topic Mapping',
    desc: 'We analyze high-intent search queries, evaluate competitor video performance, and engineer a 90-day editorial calendar targeting untapped keyword opportunities.',
    badge: 'Phase 1: Research & Strategy'
  },
  {
    step: '02',
    title: 'Scripting & Studio Production',
    desc: 'Crafting hook-heavy scripts with psychological retention anchors, followed by guided remote recording or studio editing with 4K color grading and sound design.',
    badge: 'Phase 2: Production'
  },
  {
    step: '03',
    title: 'CTR & Algorithm Packaging',
    desc: 'Designing 3-5 high-contrast custom thumbnail variations for A/B testing, crafting curiosity-driven titles, and configuring complete timestamp chapters & tags.',
    badge: 'Phase 3: Optimization'
  },
  {
    step: '04',
    title: 'Shorts Repurposing & Funnel Capture',
    desc: 'Clipping golden nuggets into viral vertical Shorts, syndicating across platforms, and channeling viewers to consultation booking funnels in the video description.',
    badge: 'Phase 4: Scale & Monetization'
  }
]

const YouTubeMarketingSteps = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto select-none" id="youtube-framework">
      
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
          <span>4-Phase Video Scaling Framework</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          How We Build Channels That <span className="text-[#004658]">Print Qualified Leads</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          A proven, repeatable video production pipeline engineered to turn unknown tech brands into undisputed industry category leaders on YouTube.
        </p>
      </motion.div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {youtubeSteps.map((s, idx) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/40 hover:shadow-xl hover:shadow-[#004658]/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <span className="text-4xl font-black text-slate-200 group-hover:text-[#004658] transition-colors block mb-4 font-mono">
                {s.step}
              </span>

              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#004658]/8 text-[#004658] text-[10px] font-mono font-bold uppercase tracking-wider mb-3">
                {s.badge}
              </span>

              <h3 className="text-lg font-black text-slate-900 mb-3 group-hover:text-[#004658] transition-colors leading-snug">
                {s.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {s.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
              <Check className="w-4 h-4 shrink-0" />
              <span>Full Production Handled</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default YouTubeMarketingSteps
