import React from 'react'
import { motion } from 'framer-motion'

const hybridStack = [
  {
    name: 'React Native 0.76+',
    role: 'Core Framework',
    desc: 'New Architecture with Fabric rendering and TurboModules.',
    icon: (
      <svg className="w-6 h-6 text-[#00D8FF]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.11c1.57 0 2.84 1.27 2.84 2.84 0 1.57-1.27 2.84-2.84 2.84a2.845 2.845 0 0 1-2.84-2.84c0-1.57 1.27-2.84 2.84-2.84m0-1.89c-2.61 0-4.73 2.12-4.73 4.73s2.12 4.73 4.73 4.73 4.73-2.12 4.73-4.73-2.12-4.73-4.73-4.73M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
    badgeColor: 'from-[#00D8FF]/15 to-[#004658]/15 text-[#004658] border-[#00D8FF]/30'
  },
  {
    name: 'Expo SDK 52',
    role: 'Development Ecosystem',
    desc: 'Universal native APIs, OTA updates, and managed build cloud.',
    icon: (
      <svg className="w-6 h-6 text-[#000000]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L1 21h22L12 2zm0 4.2L19.5 19h-15L12 6.2z" />
      </svg>
    ),
    badgeColor: 'from-slate-800/15 to-slate-950/15 text-slate-800 border-slate-400/30'
  },
  {
    name: 'TypeScript',
    role: 'Strict Type System',
    desc: 'Enterprise reliability across both iOS and Android platforms.',
    icon: (
      <svg className="w-6 h-6 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.744 15.748v1.944a5.83 5.83 0 0 1-2.484.536c-2.316 0-3.66-1.284-3.66-3.48v-4.572h-1.62v-1.68h1.62V6.012h2.244v2.484h3.048v1.68h-3.048v4.32c0 .984.516 1.5 1.488 1.5.54 0 .972-.084 1.404-.248zm10.236-4.008c0 3.864-2.58 6.468-6.42 6.468-1.536 0-2.88-.42-3.864-1.2l1.248-1.74c.828.624 1.8 1.008 2.676 1.008 2.304 0 3.96-1.56 3.96-4.536 0-2.844-1.632-4.404-3.924-4.404-.96 0-1.872.36-2.652.996L12.3 6.648a5.952 5.952 0 0 1 3.792-1.356c3.78 0 6.396 2.544 6.396 6.448z" />
      </svg>
    ),
    badgeColor: 'from-[#3178C6]/15 to-blue-500/15 text-[#3178C6] border-[#3178C6]/30'
  },
  {
    name: 'Zustand & TanStack Query',
    role: 'State & Cache Engine',
    desc: 'Optimistic UI updates with offline data hydration.',
    icon: (
      <svg className="w-6 h-6 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
    badgeColor: 'from-[#EA580C]/15 to-amber-500/15 text-[#EA580C] border-[#EA580C]/30'
  }
]

const HybridShowcase = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 rounded-3xl border border-slate-200/80 my-10 relative overflow-hidden shadow-sm">
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#00D8FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#004658]/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-2xl mx-auto mb-14 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Engineered Tech Stack
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          React Native & Expo Ecosystem
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Proven across global Fortune 500 apps including Shopify, Discord, Coinbase, and Instagram.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto relative z-10">
        {hybridStack.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative p-6 sm:p-7 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/90 hover:border-[#00D8FF]/40 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_rgba(0,70,88,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#004658]/30 to-transparent group-hover:from-[#004658] group-hover:via-[#00D8FF] group-hover:to-[#004658] transition-all duration-500 opacity-60 group-hover:opacity-100" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.badgeColor} border flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100/90 text-slate-600 border border-slate-200/80 group-hover:bg-[#004658]/5 group-hover:text-[#004658] group-hover:border-[#004658]/20 transition-colors">
                  {item.role}
                </span>
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-1.5 group-hover:text-[#004658] transition-colors">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 group-hover:text-[#004658] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Hybrid Standard
              </span>
              <span className="text-slate-300 group-hover:text-[#004658]/60 group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HybridShowcase
