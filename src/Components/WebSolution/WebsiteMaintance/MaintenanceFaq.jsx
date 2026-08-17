import React, { useState } from 'react'

const faqs = [
  {
    q: 'How fast do you respond if my website goes down?',
    a: 'For our Pro and Enterprise SLA plans, our automated alerts notify engineers immediately and we have a guaranteed incident response time of under 15 minutes.'
  },
  {
    q: 'Are minor design and text edits included in the monthly maintenance?',
    a: 'Yes! Our Growth Pro and Enterprise plans include dedicated monthly development hours that you can use for banner updates, new blog pages, styling tweaks, or custom feature additions.'
  },
  {
    q: 'Do you test updates before pushing them to our live website?',
    a: 'Always. We create an isolated staging environment, run automated visual regression and functionality smoke tests, and only deploy to production once everything passes.'
  },
  {
    q: 'Can I cancel or change my plan anytime?',
    a: 'Yes, our maintenance agreements are monthly with no long-term contracts. You can upgrade, downgrade, or cancel anytime with a simple notification.'
  }
]

const MaintenanceFaq = () => {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1000px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
          Maintenance & SLA FAQs
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Frequently asked questions about our 24/7 web management services.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-[#004658]"
            >
              <span>{faq.q}</span>
              <span className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-black transition-transform ${openIdx === idx ? 'rotate-180 bg-[#004658] text-white' : 'text-slate-600'}`}>
                ▼
              </span>
            </button>
            {openIdx === idx && (
              <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default MaintenanceFaq
