import { Link } from 'react-router-dom'
import React from 'react'

const plans = [
  {
    name: 'Growth D2C Store',
    desc: 'Perfect for ambitious direct-to-consumer brands scaling online sales.',
    features: [
      'Custom Responsive UI / UX Store Theme',
      'Up to 1,000 Products Catalog Setup',
      'Stripe / PayPal / Razorpay Integration',
      'Automated Inventory & Abandoned Cart Email',
      'Basic SEO & Google Shopping Feed',
      '30 Days Post-Launch Support'
    ],
    popular: false,
    cta: 'Launch Store'
  },
  {
    name: 'High-Volume Pro Store',
    desc: 'Engineered for high-traffic retailers with multi-currency & omni-channel needs.',
    features: [
      'Headless Next.js 15 Fast Storefront',
      'Unlimited Products & Variant Filtering',
      'Multi-Currency & Regional Tax Automated',
      'ERP / Barcode Inventory Auto-Sync',
      'AI Product Recommendation Engine',
      'Sub-second Edge Server Caching',
      '90 Days Dedicated Priority SLA'
    ],
    popular: true,
    cta: 'Build Pro Store'
  },
  {
    name: 'Enterprise Custom Commerce',
    desc: 'Bespoke commerce infrastructure, B2B wholesale portals & microservices.',
    features: [
      'Custom Decoupled Microservices / Medusa',
      'B2B Wholesale Tiered Pricing & Invoicing',
      'Custom ERP, CRM & Logistics API Bridges',
      'Multi-Vendor Marketplace Capabilities',
      'Dedicated Cloud DevOps & Auto-Scaling',
      '24/7 SLA Uptime Guarantee'
    ],
    popular: false,
    cta: 'Consult Enterprise Architect'
  }
]

const EcommercePricing = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Transparent Store Packages
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Tailored E-Commerce Solutions
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Choose the right development package engineered for your product catalog and revenue targets.
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

              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800 mb-8">
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
              {p.cta} ➔
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EcommercePricing
