import { Link } from 'react-router-dom'
import React from 'react'

const plans = [
  {
    name: 'Essential Care',
    desc: 'For small business websites and blogs requiring solid security & updates.',
    price: '$99',
    period: '/ month',
    features: [
      '24/7 Server Uptime Monitoring',
      'Daily Automated Offsite Backups',
      'Weekly Core, Theme & Plugin Updates',
      'Malware & Security Firewall Scanning',
      'SSL Certificate Monitoring & Renewal',
      'Email Support (24-Hour SLA)'
    ],
    popular: false
  },
  {
    name: 'Growth Pro SLA',
    desc: 'For high-traffic portals and e-commerce stores requiring active optimization.',
    price: '$249',
    period: '/ month',
    features: [
      'Everything in Essential Care',
      '1-Hour Emergency Incident Response SLA',
      'Database Cleanup & Redis Query Optimization',
      'Monthly Lighthouse & SEO Health Audit',
      '5 Hours of Custom Development / Content Edits',
      'Dedicated Slack / WhatsApp Channel',
      'Staging Test Before Any Production Update'
    ],
    popular: true
  },
  {
    name: 'Enterprise Mission-Critical',
    desc: 'For high-revenue enterprise platforms demanding round-the-clock DevOps engineering.',
    price: '$599',
    period: '/ month',
    features: [
      'Everything in Growth Pro',
      '15-Minute Critical Severity SLA 24/7',
      'Multi-Zone Cloud Load Balancing & Failover',
      'Unlimited Minor Technical & UI Tweaks',
      'Automated CI/CD Rollback Pipeline',
      'Dedicated Principal DevOps Engineer',
      'Quarterly Executive Architecture Review'
    ],
    popular: false
  }
]

const MaintenancePlans = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="plans">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Predictable Monthly Care
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Maintenance & SLA Support Plans
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          No long-term lock-in. Cancel or upgrade anytime with guaranteed service level agreements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((p, idx) => (
          <div
            key={idx}
            className={`relative p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
              p.popular
                ? 'bg-slate-900 text-white border-[#00D8FF] shadow-2xl shadow-cyan-500/10 scale-105 z-10'
                : 'bg-white text-slate-900 border-slate-200 shadow-md'
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00D8FF] text-slate-950 text-xs font-black uppercase tracking-wider shadow-sm">
                Most Recommended
              </span>
            )}

            <div>
              <h3 className="text-2xl font-black mb-2">{p.name}</h3>
              <p className={`text-xs sm:text-sm mb-6 ${p.popular ? 'text-slate-400' : 'text-slate-600'}`}>
                {p.desc}
              </p>

              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <span className="text-4xl font-black tracking-tight">{p.price}</span>
                <span className={`text-xs font-bold ${p.popular ? 'text-slate-400' : 'text-slate-500'}`}>{p.period}</span>
              </div>

              <div className="space-y-3 mb-8">
                {p.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span className={p.popular ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`w-full py-3.5 rounded-xl font-black text-center text-sm transition-all block ${
                p.popular
                  ? 'bg-[#00D8FF] text-slate-950 hover:bg-cyan-300'
                  : 'bg-[#004658] text-white hover:bg-[#003442]'
              }`}
            >
              Choose {p.name} ➔
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MaintenancePlans
