import React from 'react'
import { motion } from 'framer-motion'

const tools = [
  {
    name: 'Kotlin 2.0',
    role: 'Language & Coroutines',
    desc: 'Concise, null-safe native mobile code.',
    icon: (
      <svg className="w-6 h-6 text-[#7F52FF]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 24H0V0h24L12 12Z" />
      </svg>
    ),
    badgeColor: 'from-[#7F52FF]/15 to-[#C711E1]/15 text-[#7F52FF] border-[#7F52FF]/30'
  },
  {
    name: 'Jetpack Compose',
    role: 'Declarative UI Toolkit',
    desc: 'Dynamic stateful UI with reactive recomposition.',
    icon: (
      <svg className="w-6 h-6 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13.5h8v8H3v-8zm0-11h8v8H3V2.5zm10 0h8v8h-8V2.5zm0 11h8v8h-8v-8z" />
      </svg>
    ),
    badgeColor: 'from-[#4285F4]/15 to-[#00D8FF]/15 text-[#004658] border-[#4285F4]/30'
  },
  {
    name: 'Hilt / Dagger',
    role: 'Dependency Injection',
    desc: 'Decoupled, modular, and easily testable components.',
    icon: (
      <svg className="w-6 h-6 text-[#00838F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    badgeColor: 'from-[#00838F]/15 to-emerald-500/15 text-[#00838F] border-[#00838F]/30'
  },
  {
    name: 'Retrofit & OkHttp',
    role: 'Network & REST Client',
    desc: 'Type-safe HTTP requests with certificate pinning.',
    icon: (
      <svg className="w-6 h-6 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
        <path d="M19 12H5" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    badgeColor: 'from-[#EA580C]/15 to-amber-500/15 text-[#EA580C] border-[#EA580C]/30'
  },
  {
    name: 'Room SQLite',
    role: 'Local ORM Persistence',
    desc: 'Compile-time query verification and flow observation.',
    icon: (
      <svg className="w-6 h-6 text-[#059669]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    badgeColor: 'from-[#059669]/15 to-teal-500/15 text-[#059669] border-[#059669]/30'
  },
  {
    name: 'Google Play CI/CD',
    role: 'Automated Releases',
    desc: 'Fastlane & GitHub actions build and app bundle upload.',
    icon: (
      <svg className="w-6 h-6 text-[#34A853]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-1.638V3.452c0-.629.23-1.218.609-1.638zm11.246 11.248l2.25 2.25-11.83 6.647 9.58-8.897zm0-2.124L5.275 2.041l11.83 6.647-2.25 2.25zm1.488 1.488l3.195 1.796c.928.522.928 1.372 0 1.894l-3.195 1.796-2.023-2.023 2.023-2.023z" />
      </svg>
    ),
    badgeColor: 'from-[#34A853]/15 to-emerald-500/15 text-[#34A853] border-[#34A853]/30'
  }
]

const AndroidTechStack = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 rounded-3xl border border-slate-200/80 my-10 relative overflow-hidden shadow-sm">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#004658]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#00D8FF]/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-2xl mx-auto mb-14 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Verified Android Stack
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Google-Recommended Android Architecture
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Built according to official Android Modern App Architecture guidelines (MVVM & Clean Architecture).
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
        {tools.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative p-6 sm:p-7 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/90 hover:border-[#004658]/40 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_rgba(0,70,88,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Accent Gradient Line on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#004658]/30 to-transparent group-hover:from-[#004658] group-hover:via-[#00D8FF] group-hover:to-[#004658] transition-all duration-500 opacity-60 group-hover:opacity-100" />

            <div>
              {/* Icon & Category Badge Header */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.badgeColor} border flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                  {t.icon}
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100/90 text-slate-600 border border-slate-200/80 group-hover:bg-[#004658]/5 group-hover:text-[#004658] group-hover:border-[#004658]/20 transition-colors">
                  {t.role}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-black text-slate-900 mb-1.5 group-hover:text-[#004658] transition-colors">
                {t.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.desc}
              </p>
            </div>

            {/* Subtle card bottom telemetry/indicator */}
            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 group-hover:text-[#004658] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Production Ready
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

export default AndroidTechStack
