import React from 'react'

const benefits = [
  {
    icon: '⚡',
    title: '99.99% Enterprise Uptime SLA',
    desc: 'Contractual uptime guarantees with multi-zone geographic redundancy across leading cloud providers.'
  },
  {
    icon: '💰',
    title: 'Up To 40% Cloud Cost Optimization',
    desc: 'We audit server footprints, right-size instance types, and set up spot instance pools to dramatically reduce monthly cloud spend.'
  },
  {
    icon: '🔄',
    title: 'Automated CI/CD Release Pipelines',
    desc: 'Push code to GitHub and see automated builds, unit tests, and canary releases deploy to the cloud in minutes.'
  },
  {
    icon: '📊',
    title: 'Full-Stack Observability & Telemetry',
    desc: 'Real-time Datadog and Prometheus metrics tracking CPU, memory, error rates, and API latencies with instant alerts.'
  }
]

const CloudBenefits = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
          Strategic Cloud Value
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Why Enterprises Choose Our Cloud Services
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Proven cloud engineering that turns infrastructure into a competitive advantage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {benefits.map((b, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <span className="text-3xl p-3 rounded-2xl bg-[#004658]/8 shrink-0">{b.icon}</span>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{b.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CloudBenefits
