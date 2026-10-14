import React from 'react'
import { motion } from 'framer-motion'
import { Check, ShieldCheck, MapPin, Search, Star, Award } from 'lucide-react'

const localSteps = [
  {
    step: '01',
    title: 'Google Business Profile Audit & Category Alignment',
    desc: 'Deep audit of primary & secondary GMB categories, attributes, profile completeness, geo-tagged photos, and keyword-rich business descriptions.',
    badge: 'Step 1: Audit'
  },
  {
    step: '02',
    title: '150+ Authority Citation & NAP Sync',
    desc: 'Auditing and fixing existing duplicate or inconsistent citations. Syncing exact Name, Address, and Phone number across top local directories.',
    badge: 'Step 2: Citation Sync'
  },
  {
    step: '03',
    title: 'Automated 5-Star Review Generation Funnel',
    desc: 'Integrating automated SMS & email review acquisition campaigns that continuously collect verified positive Google reviews from happy clients.',
    badge: 'Step 3: Review Engine'
  },
  {
    step: '04',
    title: 'Geo-Targeted Landing Pages & Map Grid Domination',
    desc: 'Building localized landing pages embedded with Google Maps Schema and tracking rank movement across target city neighborhood grids.',
    badge: 'Step 4: Map Domination'
  }
]

const LocalSeoSteps = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto select-none" id="local-blueprint">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Local Ranking Blueprint</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          How We Put Your Business At The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] to-[#00D8FF]">Top Of Google Maps</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Our proven 4-step framework guarantees that whenever anyone searches nearby for your services, your business is the very first one they call.
        </p>
      </motion.div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {localSteps.map((s, idx) => (
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
              <span>Execution Guaranteed</span>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default LocalSeoSteps
