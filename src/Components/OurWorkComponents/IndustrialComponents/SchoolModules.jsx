import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const modules = [
  {
    icon: '💳',
    title: 'Automated Online Fee Collection',
    desc: 'Instant online fee payment gateway, automated receipts, installment plans, and overdue SMS alerts for parents.',
    target: '#school-ecosystem',
    badge: 'Real-time Gateway'
  },
  {
    icon: '📝',
    title: 'Examination & Digital Report Cards',
    desc: 'Automated grade calculation, GPA ranking, question bank management, and 1-click printable student report cards.',
    target: '#school-workflow',
    badge: 'NEP 2020 Compliant'
  },
  {
    icon: '🚌',
    title: 'Live GPS School Bus Tracking',
    desc: 'Real-time bus route telemetry for parents with proximity geofence notifications when the bus approaches student stops.',
    target: '#school-transport',
    badge: 'AIS-140 GPS'
  },
  {
    icon: '📚',
    title: 'Interactive LMS & Homework Portal',
    desc: 'Video lectures, interactive quizzes, homework submission grading, and teacher-parent direct messaging.',
    target: '#school-ecosystem',
    badge: 'Parent & Student App'
  }
]

const SchoolModules = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10" id="modules">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          Campus Automation Suite
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Integrated Modules For Modern Institutions
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Proven across K-12 private schools, international colleges, universities, and coaching academies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {modules.map((m, idx) => (
          <a
            key={idx}
            href={m.target}
            className="group p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#004658]/40 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 text-left"
          >
            <span className="text-3xl p-3.5 rounded-2xl bg-[#004658]/8 shrink-0 group-hover:scale-110 group-hover:bg-[#004658]/15 transition-all">
              {m.icon}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#004658] transition-colors">
                  {m.title}
                </h3>
                <span className="text-[10px] font-mono font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full shrink-0">
                  {m.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                {m.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#004658] group-hover:text-cyan-600 transition-colors">
                Inspect visual module
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default SchoolModules
