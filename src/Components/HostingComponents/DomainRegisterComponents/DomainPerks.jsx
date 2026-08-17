import React from 'react'

const perks = [
  {
    icon: '🕵️',
    title: 'Free WHOIS Privacy Protection',
    desc: 'Keep your personal email, phone number, and address hidden from spammers and data scrapers for lifetime.'
  },
  {
    icon: '⚡',
    title: 'Global Anycast DNS Management',
    desc: 'High-speed DNS resolution with sub-10ms response times worldwide, reducing initial website connection latency.'
  },
  {
    icon: '✉️',
    title: 'Free Professional Email Forwarding',
    desc: 'Create custom branded aliases (e.g. contact@yourbrand.com) and forward them directly to your existing inbox.'
  },
  {
    icon: '🔒',
    title: 'DNSSEC & Domain Lock Security',
    desc: 'Prevent unauthorized domain transfers and DNS hijacking with 2-factor authentication locks.'
  }
]

const DomainPerks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
          Included With Every Domain
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Premium Features At Zero Extra Cost
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Unlike other domain registrars, we don’t charge extra for privacy, DNS management, or email forwarding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {perks.map((p, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <span className="text-3xl p-3 rounded-2xl bg-[#004658]/8 shrink-0">{p.icon}</span>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{p.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DomainPerks
