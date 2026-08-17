import React from 'react'

const features = [
  {
    icon: '⚡',
    title: 'Automated 1-Click Payroll & Tax Filing',
    desc: 'Automatic salary calculations with statutory PF, ESI, TDS tax deductions, and automated direct bank account disbursement.'
  },
  {
    icon: '📍',
    title: 'Geo-Fencing & Biometric Attendance',
    desc: 'Clock-in via fingerprint scanners, facial recognition kiosks, or mobile GPS geo-tagged check-ins for field reps.'
  },
  {
    icon: '📱',
    title: 'Employee Self-Service (ESS) Mobile Portal',
    desc: 'Employees can download payslips, apply for leaves, submit reimbursement receipts, and check tax statements.'
  },
  {
    icon: '🎯',
    title: 'Performance Appraisals & OKR Tracking',
    desc: 'Set quarterly milestones, conduct 360-degree reviews, and track employee career progression metrics.'
  }
]

const HrmsFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10" id="features">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Complete Workforce Management
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Everything Modern People Teams Need
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Eliminate error-prone spreadsheets with automated, compliant human resource software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((f, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <span className="text-3xl p-3 rounded-2xl bg-[#004658]/8 shrink-0">{f.icon}</span>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{f.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HrmsFeatures
