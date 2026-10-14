import React from 'react'
import { motion } from 'framer-motion'
import { Check, ShieldCheck, Target, Search, Users, CalendarCheck, ArrowRight } from 'lucide-react'
import LinkedInIcon from './LinkedInIcon'

const linkedinSteps = [
  {
    step: '01',
    title: 'ICP & TAM Account Mapping',
    desc: 'We define your highest-value buyer personas, filter key enterprise accounts by revenue & tech stack, and build verified contact lists with direct decision-maker profiles.',
    badge: 'Phase 1: Targeting'
  },
  {
    step: '02',
    title: 'Executive Profile Conversion Optimization',
    desc: 'Transforming key leadership and company LinkedIn profiles into high-converting sales landing pages with clear positioning, social proof, and clear calls-to-action.',
    badge: 'Phase 2: Positioning'
  },
  {
    step: '03',
    title: 'Multi-Touch Value-First Sequence Launch',
    desc: 'Deploying non-spammy, tailored outreach sequences combining profile visits, insightful post engagements, personalized connection notes, and value-packed InMails.',
    badge: 'Phase 3: Engagement'
  },
  {
    step: '04',
    title: 'Calendar Booking & CRM Pipeline Handover',
    desc: 'Handling responses, answering initial objections, and scheduling qualified prospective buyers directly onto your sales calendar with detailed background dossiers.',
    badge: 'Phase 4: Revenue Scale'
  }
]

const LinkedInLeadGenSteps = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto select-none" id="linkedin-framework">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#0A66C2]/20">
          <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
          <span>4-Phase Execution Framework</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          How We Fill Your Calendar With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#0A66C2] to-[#00D8FF]">Enterprise Clients</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          A systematic, battle-tested outbound architecture engineered to generate high-ticket B2B meetings on pure autopilot without burning brand reputation.
        </p>
      </motion.div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {linkedinSteps.map((s, idx) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0A66C2]/40 hover:shadow-xl hover:shadow-[#0A66C2]/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <span className="text-4xl font-black text-slate-200 group-hover:text-[#0A66C2] transition-colors block mb-4 font-mono">
                {s.step}
              </span>

              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0A66C2]/8 text-[#0A66C2] text-[10px] font-mono font-bold uppercase tracking-wider mb-3">
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
              <span>Full Pipeline Ownership</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default LinkedInLeadGenSteps
