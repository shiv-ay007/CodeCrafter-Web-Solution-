import React from 'react'
import { motion } from 'framer-motion'
import { Check, ShieldCheck, Compass, Palette, Layers, BookOpen, CheckCircle2 } from 'lucide-react'

const brandProcessSteps = [
  {
    step: '01',
    title: 'Audience & Market Positioning',
    desc: 'We dissect your competitive landscape, analyze customer emotional triggers, establish tone-of-voice guidelines, and formulate your core brand archetype.',
    badge: 'Phase 1: Strategy',
    icon: Compass
  },
  {
    step: '02',
    title: 'Vector Logos & Optical Marks',
    desc: 'Developing iconic logomarks, wordmarks, and responsive icon lockups engineered for razor-sharp rendering on both 4K retina displays and physical print.',
    badge: 'Phase 2: Visual Craft',
    icon: Palette
  },
  {
    step: '03',
    title: 'Color Science & Design Tokens',
    desc: 'Architecting WCAG AAA contrast-compliant palette scales, custom typography hierarchies, spacing grids, and Tailwind CSS design token configurations.',
    badge: 'Phase 3: Systematization',
    icon: Layers
  },
  {
    step: '04',
    title: 'Brand Bible & Asset Handoff',
    desc: 'Delivering a 50+ page corporate brand manual, stationery kits, presentation pitch decks, social media assets, and complete trademark-ready vector files.',
    badge: 'Phase 4: Deployment',
    icon: BookOpen
  }
]

const BrandDesignProcess = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto select-none" id="brand-process">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#004658]/20">
          <Layers className="w-3.5 h-3.5" />
          <span>Brand Architecture Framework</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          How We Build Iconic <span className="text-[#004658]">Brand Systems</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          A methodical, battle-tested 4-phase creative architecture designed to turn ambitious companies into industry-defining, instantly recognizable market leaders.
        </p>
      </motion.div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {brandProcessSteps.map((s, idx) => {
          const IconComp = s.icon
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/40 hover:shadow-xl hover:shadow-[#004658]/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-black text-slate-200 group-hover:text-[#004658] transition-colors font-mono">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#004658]/8 text-[#004658] flex items-center justify-center group-hover:bg-[#004658] group-hover:text-white transition-all shadow-2xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

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
                <span>100% Commercial IP Rights</span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default BrandDesignProcess
