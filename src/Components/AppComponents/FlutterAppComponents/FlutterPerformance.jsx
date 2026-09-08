import React from 'react'
import { motion } from 'framer-motion'

const stack = [
  {
    name: 'Flutter 3.27 & Dart 3',
    role: 'Language & SDK',
    desc: 'Sound null-safety, pattern matching, and record types.',
    icon: (
      <svg className="w-6 h-6 text-[#02569B]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zM6.002 15.698l5.657 5.656 3.699-3.7-5.657-5.656-3.699 3.7zm8.312-8.313l-3.699 3.7 5.657 5.656 3.699-3.7-5.657-5.656z" />
      </svg>
    ),
    badgeColor: 'from-[#02569B]/15 to-[#0175C2]/15 text-[#02569B] border-[#02569B]/30'
  },
  {
    name: 'Bloc / Riverpod',
    role: 'State Architecture',
    desc: 'Predictable unidirectional data flow and testability.',
    icon: (
      <svg className="w-6 h-6 text-[#00D8FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    badgeColor: 'from-[#00D8FF]/15 to-cyan-500/15 text-[#004658] border-[#00D8FF]/30'
  },
  {
    name: 'Dio & Retrofit Dart',
    role: 'Networking Engine',
    desc: 'Interceptors, automated token refresh, and request caching.',
    icon: (
      <svg className="w-6 h-6 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    badgeColor: 'from-[#EA580C]/15 to-amber-500/15 text-[#EA580C] border-[#EA580C]/30'
  },
  {
    name: 'Hive / Isar DB',
    role: 'Ultra-Fast Local Storage',
    desc: 'Sub-millisecond NoSQL database written in pure Dart/C++.',
    icon: (
      <svg className="w-6 h-6 text-[#059669]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    badgeColor: 'from-[#059669]/15 to-emerald-500/15 text-[#059669] border-[#059669]/30'
  }
]

const FlutterPerformance = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 rounded-3xl border border-slate-200/80 my-10 relative overflow-hidden shadow-sm">
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#02569B]/5 rounded-full blur-3xl pointer-events-none" />
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
          Flutter Architecture Standard
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Engineered For Enterprise Scale
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Proven cross-platform engineering trusted by BMW, Alibaba, Nubank, and Google Pay.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto relative z-10">
        {stack.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative p-6 sm:p-7 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/90 hover:border-[#02569B]/40 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_rgba(2,86,155,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#02569B]/30 to-transparent group-hover:from-[#02569B] group-hover:via-[#00D8FF] group-hover:to-[#02569B] transition-all duration-500 opacity-60 group-hover:opacity-100" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.badgeColor} border flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100/90 text-slate-600 border border-slate-200/80 group-hover:bg-[#02569B]/5 group-hover:text-[#02569B] group-hover:border-[#02569B]/20 transition-colors">
                  {item.role}
                </span>
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-1.5 group-hover:text-[#02569B] transition-colors">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 group-hover:text-[#02569B] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Cross-Platform
              </span>
              <span className="text-slate-300 group-hover:text-[#02569B]/60 group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FlutterPerformance
