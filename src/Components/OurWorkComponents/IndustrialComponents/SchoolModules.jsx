import React from 'react'

const modules = [
  {
    icon: '💳',
    title: 'Automated Online Fee Collection',
    desc: 'Instant online fee payment gateway, automated receipts, installment plans, and overdue SMS alerts for parents.'
  },
  {
    icon: '📝',
    title: 'Examination & Digital Report Cards',
    desc: 'Automated grade calculation, GPA ranking, question bank management, and 1-click printable student report cards.'
  },
  {
    icon: '🚌',
    title: 'Live GPS School Bus Tracking',
    desc: 'Real-time bus route telemetry for parents with proximity geofence notifications when the bus approaches student stops.'
  },
  {
    icon: '📚',
    title: 'Interactive LMS & Homework Portal',
    desc: 'Video lectures, interactive quizzes, homework submission grading, and teacher-parent direct messaging.'
  }
]

const SchoolModules = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10" id="modules">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
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
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <span className="text-3xl p-3 rounded-2xl bg-[#004658]/8 shrink-0">{m.icon}</span>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{m.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SchoolModules
