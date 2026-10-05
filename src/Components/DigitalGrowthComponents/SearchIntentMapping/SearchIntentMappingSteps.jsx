import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Target, Layers, Compass } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Query Intent Extraction & Semantic Clustering',
    desc: 'Extracting seed search terms and analyzing SERP top-10 results to classify search intent into Informational, Commercial, and Transactional buckets.',
    badge: 'Phase 1: Extraction'
  },
  {
    step: '02',
    title: 'SERP Feature Analysis & Page Layout Blueprint',
    desc: 'Deconstructing what content formats (Tables, Video, How-Tos, Calculators) Google rewards for each query to design matching page blueprints.',
    badge: 'Phase 2: Layout Blueprint'
  },
  {
    step: '03',
    title: 'High-Converting Content & Funnel Creation',
    desc: 'Authoring hyper-relevant, intent-matched copy and friction-free landing page CTAs that fulfill the user search query in seconds.',
    badge: 'Phase 3: Content Creation'
  },
  {
    step: '04',
    title: 'Dwell Time Testing & Conversion Rate Optimization',
    desc: 'Continuously measuring dwell time, scroll depth, and conversion metrics to refine intent matching for maximum search engine rankings.',
    badge: 'Phase 4: CRO & Testing'
  }
]

const SearchIntentMappingSteps = () => {
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
          <span>4-Phase Intent Framework</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          How We Map & Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] to-[#00D8FF]">Search Intent</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Our systematic intent mapping process turns raw search engine impressions into engaged leads and immediate purchasing decisions.
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
              <span>Intent Optimized</span>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default SearchIntentMappingSteps
