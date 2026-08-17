import React from 'react'

const modules = [
  {
    icon: '🏥',
    title: 'OPD & IPD Bed Allocation',
    desc: 'Token queue management, ward/ICU bed occupancy tracking, discharge summary generation, and vitals monitoring.'
  },
  {
    icon: '📋',
    title: 'Electronic Health Records (EHR)',
    desc: 'Encrypted patient medical histories, prescription generation, allergy warnings, and multi-doctor consultation notes.'
  },
  {
    icon: '🧪',
    title: 'Pathology & Diagnostic Lab Management',
    desc: 'Barcode sample tracking, automated lab equipment test sync, and instant PDF report dispatch via SMS/WhatsApp.'
  },
  {
    icon: '💊',
    title: 'Hospital Pharmacy & Drug Inventory',
    desc: 'Batch expiry tracking, automated medicine reorders, prescription billing integration, and narcotic drug audit logs.'
  }
]

const HospitalModules = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10" id="modules">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
          Clinical Healthcare Architecture
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Engineered For Clinics, Diagnostic Labs & Multi-Specialty Hospitals
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          HIPAA & NABH compliant software designed to elevate patient care standards and speed up clinical workflows.
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

export default HospitalModules
