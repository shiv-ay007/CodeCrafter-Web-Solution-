import React from 'react'

const features = [
  {
    icon: '🧾',
    title: 'Automated GST & Multi-Tax Invoices',
    desc: 'Generate compliant tax invoices with HSN/SAC codes, dynamic currency conversion, and automated PDF delivery.'
  },
  {
    icon: '🔁',
    title: 'Recurring Subscriptions & Retainers',
    desc: 'Automate monthly and annual client billing with auto-debit credit card charges and automated receipt dispatch.'
  },
  {
    icon: '📱',
    title: 'WhatsApp & SMS Overdue Reminders',
    desc: 'Polite, automated payment reminder drip campaigns via WhatsApp with 1-click UPI and credit card pay links.'
  },
  {
    icon: '📊',
    title: 'Real-Time Financial P&L Reports',
    desc: 'Track revenue run rates, outstanding receivables, sales by product, and cash flow projections in real-time.'
  }
]

const BillingFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10" id="features">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Financial Automation Engine
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Get Paid Faster With Zero Manual Hassle
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Customized billing architecture tailored for agencies, wholesalers, freelancers, and service providers.
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

export default BillingFeatures
