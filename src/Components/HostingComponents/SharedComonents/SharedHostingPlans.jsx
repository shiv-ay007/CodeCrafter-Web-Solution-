import { Link } from 'react-router-dom'
import React from 'react'

const plans = [
  {
    name: 'Starter NVMe',
    desc: 'Ideal for personal websites, portfolios, and new startups.',
    price: '$2.99',
    period: '/ month',
    features: [
      '1 Hosted Website',
      '20 GB Pure NVMe SSD Storage',
      'Unmetered Bandwidth',
      'Free SSL Certificate for Lifetime',
      '5 Custom Email Accounts',
      'cPanel Control & 1-Click WordPress'
    ],
    popular: false
  },
  {
    name: 'Turbo Plus',
    desc: 'Our best-selling plan for growing business sites and high traffic.',
    price: '$5.99',
    period: '/ month',
    features: [
      'Unlimited Hosted Websites',
      '100 GB Pure NVMe SSD Storage',
      'Free Domain Name (1st Year)',
      'Free Unlimited SSL Certificates',
      'Unlimited Professional Emails',
      'LiteSpeed Web Server with LSCache',
      'Daily Automated Offsite Backups'
    ],
    popular: true
  },
  {
    name: 'Business Pro',
    desc: 'Maximum CPU and RAM allocation for e-commerce and agency portals.',
    price: '$11.99',
    period: '/ month',
    features: [
      'Unlimited Websites & Subdomains',
      '250 GB Ultra NVMe Storage',
      'Free Domain + Dedicated IP Address',
      '4x More CPU & RAM Allocation',
      'Premium Malware Firewall & Imunify360',
      'Priority 24/7 Phone & Ticket Support',
      'Free Staging & Git Version Control'
    ],
    popular: false
  }
]

const SharedHostingPlans = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="plans">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          NVMe SSD Pricing
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Simple, Affordable Shared Hosting Plans
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          30-day money-back guarantee with instant server setup and free automated website migration.
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
                Most Popular
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
              Order Now ➔
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SharedHostingPlans
