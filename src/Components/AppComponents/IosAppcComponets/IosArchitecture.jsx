import React from 'react'
import { motion } from 'framer-motion'

const swiftStack = [
  {
    name: 'Swift 6 & Concurrency',
    role: 'Modern Type-Safe Code',
    desc: 'Actor isolation and async/await eliminating race conditions.',
    icon: (
      <svg className="w-6 h-6 text-[#F05138]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.94 15.69c-.06-.14-.23-.21-.38-.16-1.57.54-3.14.73-4.66.56 2.45-1.92 4.31-4.71 4.79-8.15.03-.2-.1-.38-.29-.42-.19-.04-.38.08-.43.27-.69 2.76-2.58 5.12-5.11 6.39-.77.39-1.57.69-2.38.9-.47-.56-.91-1.15-1.31-1.78C14.7 9.8 16.5 5.56 16.5 2c0-.18-.12-.34-.3-.38-.17-.04-.36.05-.43.21-1.04 2.5-2.82 4.67-5.06 6.18-.75.5-1.53.92-2.34 1.25C7.38 8.04 6.7 6.64 6.39 5.13c-.04-.19-.21-.32-.4-.3-.19.02-.34.18-.34.37.07 2.49 1.15 4.84 2.92 6.54-1.28.29-2.59.34-3.88.16-.19-.03-.37.1-.41.29-.04.19.08.37.27.42 2.37.58 4.8.44 7.07-.4.36.48.75.94 1.17 1.38-2.6 1.48-5.7 1.94-8.79 1.3-.2-.04-.39.09-.43.28-.04.19.08.38.28.43 3.65.75 7.37.17 10.39-1.63 1.11.95 2.39 1.7 3.8 2.21 1.76.64 3.61.85 5.43.62.2-.03.34-.19.33-.39-.01-.19-.17-.34-.36-.33z" />
      </svg>
    ),
    badgeColor: 'from-[#F05138]/15 to-orange-500/15 text-[#F05138] border-[#F05138]/30'
  },
  {
    name: 'SwiftUI & Combine',
    role: 'Reactive UI Architecture',
    desc: 'State-driven declarative user interface patterns.',
    icon: (
      <svg className="w-6 h-6 text-[#0071E3]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.36c.64-.78 1.08-1.86.96-2.95-1 .04-2.17.65-2.82 1.43-.58.67-1.08 1.78-.95 2.84 1.12.09 2.18-.54 2.81-1.32z" />
      </svg>
    ),
    badgeColor: 'from-[#0071E3]/15 to-[#00D8FF]/15 text-[#0071E3] border-[#0071E3]/30'
  },
  {
    name: 'MVVM-C Architecture',
    role: 'Modular Codebase',
    desc: 'Clean separation of business logic, presentation, and coordinator routing.',
    icon: (
      <svg className="w-6 h-6 text-[#00838F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    badgeColor: 'from-[#00838F]/15 to-teal-500/15 text-[#00838F] border-[#00838F]/30'
  },
  {
    name: 'TestFlight & App Store CI',
    role: 'Fastlane Automation',
    desc: 'Automated beta distribution, snapshot testing, and zero-rejection submissions.',
    icon: (
      <svg className="w-6 h-6 text-[#059669]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    badgeColor: 'from-[#059669]/15 to-emerald-500/15 text-[#059669] border-[#059669]/30'
  }
]

const IosArchitecture = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 rounded-3xl border border-slate-200/80 my-10 relative overflow-hidden shadow-sm">
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#0071E3]/5 rounded-full blur-3xl pointer-events-none" />
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
          Apple Quality Standard
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Clean Swift & Apple Silicon Optimization
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Engineered for Apple M-series chips and A18 Bionic processors for maximum battery efficiency.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto relative z-10">
        {swiftStack.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative p-6 sm:p-7 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/90 hover:border-[#0071E3]/40 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_rgba(0,113,227,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0071E3]/30 to-transparent group-hover:from-[#0071E3] group-hover:via-[#00D8FF] group-hover:to-[#0071E3] transition-all duration-500 opacity-60 group-hover:opacity-100" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.badgeColor} border flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100/90 text-slate-600 border border-slate-200/80 group-hover:bg-[#0071E3]/5 group-hover:text-[#0071E3] group-hover:border-[#0071E3]/20 transition-colors">
                  {item.role}
                </span>
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-1.5 group-hover:text-[#0071E3] transition-colors">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 group-hover:text-[#0071E3] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                iOS Standard
              </span>
              <span className="text-slate-300 group-hover:text-[#0071E3]/60 group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default IosArchitecture
