import React from 'react'

const features = [
  {
    icon: '📊',
    title: 'Visual Drag-and-Drop Deal Pipelines',
    desc: 'Customize stages, track deal probabilities, and get real-time revenue forecast telemetry.'
  },
  {
    icon: '💬',
    title: 'WhatsApp & Email Omni-Channel Sync',
    desc: 'Send proposals, receive client replies, and log interactions automatically in a unified activity timeline.'
  },
  {
    icon: '🤖',
    title: 'AI Lead Scoring & Task Automation',
    desc: 'Automatically assign leads to reps based on territory and score conversion likelihood with smart rules.'
  },
  {
    icon: '🔒',
    title: 'Role-Based Access & Data Privacy',
    desc: 'Granular permissions for sales reps, managers, and executives with encrypted customer databases.'
  }
]

const CrmFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10" id="features">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Bespoke CRM Modules
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Tailored Directly To Your Company's Sales DNA
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Own your CRM software permanently with zero recurring per-user monthly subscription fees.
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

export default CrmFeatures
