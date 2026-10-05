import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Search, Target, Zap } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Competitor Landscape & Rival Identification',
    desc: 'Identifying direct, indirect, and SERP-based organic competitors who are currently capturing your target keyword impression share.',
    badge: 'Phase 1: Discovery'
  },
  {
    step: '02',
    title: 'Deep Multi-Layer Data Extraction & Gap Audit',
    desc: 'Extracting competitor backlink networks, top-traffic pages, high-ROI paid ad keywords, conversion triggers, and UX speed bottlenecks.',
    badge: 'Phase 2: Data Audit'
  },
  {
    step: '03',
    title: 'Strategic Counter-Positioning Blueprint',
    desc: 'Crafting a customized blueprint that targets rival weaknesses, captures unserved keyword gaps, and builds superior content pillars.',
    badge: 'Phase 3: Blueprint'
  },
  {
    step: '04',
    title: 'Execution & Continuous Real-Time Tracking',
    desc: 'Deploying optimized campaigns, monitoring competitor rank changes, and adjusting counter-strategies in real time for sustained domination.',
    badge: 'Phase 4: Monitoring'
  }
]

const CompetitorAnalysisSteps = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto select-none">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-900 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-cyan-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span>4-Phase Execution Framework</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          How We Outposition <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] to-[#00D8FF]">Your Rivals</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Our systematic 4-phase competitor deconstruction process ensures your brand systematically captures traffic, rankings, and market share.
        </p>
      </motion.div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/40 hover:shadow-xl hover:shadow-[#004658]/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-[#004658]/25 group-hover:text-[#004658] transition-colors font-mono">
                  {s.step}
                </span>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#004658]/8 text-[#004658] text-[10px] font-mono font-bold uppercase tracking-wider">
                  {s.badge}
                </span>
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-2.5 group-hover:text-[#004658] transition-colors leading-snug">
                {s.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {s.desc}
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#004658]">
              <span>Data Verified</span>
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default CompetitorAnalysisSteps
