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
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] py-24 sm:py-28 border-t border-slate-200/60">
      {/* Subtle Ambient Depth */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#00A8CC]/6 blur-[120px] -z-10" 
      />
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(#004658 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/15 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight mb-4 font-['Outfit',sans-serif]">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about modernizing your platform with CodeCrafter.
          </p>
        </div>

        {/* Full-width FAQ Accordion aligned with CTA (max-w-[1360px]) */}
        <div className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[#004658]/12 rounded-2xl bg-white shadow-xs hover:border-[#004658]/35 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-[#004658] transition-colors cursor-pointer"
              >
                <span className="font-['Outfit',sans-serif]">{faq.q}</span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 shrink-0 ${
                    openIdx === idx ? 'rotate-180 bg-[#004658] text-white shadow-xs' : 'bg-[#F0F6FA] text-[#004658]'
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-[#F8FAFC]/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RedesignFaq
