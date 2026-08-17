import React from 'react'

const funnelStages = [
  {
    step: '01',
    title: 'Top-Of-Funnel (TOFU) Awareness',
    desc: 'SEO blog posts, industry glossaries, and viral infographics that attract massive organic search discovery.',
    badge: 'Discovery'
  },
  {
    step: '02',
    title: 'Middle-Of-Funnel (MOFU) Consideration',
    desc: 'In-depth comparison guides, technical whitepapers, and customer case studies that prove your superiority.',
    badge: 'Evaluation'
  },
  {
    step: '03',
    title: 'Bottom-Of-Funnel (BOFU) Conversion',
    desc: 'High-converting sales page copy, demo video scripts, ROI calculators, and friction-free consultation booking pages.',
    badge: 'Closing'
  },
  {
    step: '04',
    title: 'Retention & Email Lead Nurturing',
    desc: 'Automated drip email sequences, monthly product newsletters, and customer success stories that boost lifetime value.',
    badge: 'Retention'
  }
]

const ContentFunnel = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="funnel">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Strategic Copywriting Funnel
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Full-Funnel Content That Guides Prospects To "Yes"
        </h2>
        <p className="text-base text-slate-600">
          Every piece of copy is engineered with precise psychological triggers to move leads smoothly from initial curiosity to purchase.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {funnelStages.map((f, idx) => (
          <div
            key={idx}
            className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/50 hover:shadow-xl hover:shadow-[#004658]/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl font-black text-[#004658]/20 group-hover:text-[#004658] transition-colors block mb-4">
                {f.step}
              </span>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#004658]/8 text-[#004658] text-[10px] font-bold uppercase tracking-wider mb-3">
                {f.badge}
              </span>
              <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#004658] transition-colors">
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContentFunnel
