import React, { useState } from 'react'

const faqs = [
  {
    q: 'Will redesigning my website hurt my existing Google search rankings?',
    a: 'Absolutely not. We implement strict 1-to-1 301 URL redirect maps, canonical link matching, metadata inheritance, and structured schema tags to ensure zero link juice is lost during the migration.'
  },
  {
    q: 'How long does a full website redesign typically take?',
    a: 'A typical business website redesign takes between 2 to 4 weeks depending on the number of pages, custom interactive features, and CMS integrations required.'
  },
  {
    q: 'Will my current website experience any downtime while you work?',
    a: 'Zero downtime. We develop and stage your new platform in an isolated private cloud environment. The switch happens seamlessly in seconds once everything is tested and approved.'
  },
  {
    q: 'Can you migrate our existing content, blog posts, and database?',
    a: 'Yes. We build automated data parsers and migration scripts that export your existing articles, customer records, and product inventory directly into the modern database structure.'
  }
]

const RedesignFaq = () => {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1000px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Everything you need to know about modernizing your platform with CodeCrafter.
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

export default RedesignFaq
