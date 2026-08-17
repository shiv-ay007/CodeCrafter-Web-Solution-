import React from 'react'

const socialSteps = [
  {
    step: '01',
    title: 'Brand Voice & Audience Profiling',
    desc: 'Identify what triggers your target audience, analyze competitor content gaps, and define viral hook frameworks.',
    badge: 'Strategy'
  },
  {
    step: '02',
    title: 'High-Impact Creative Production',
    desc: 'Scripting, motion design, video reel editing, and educational infographics designed to maximize shares and saves.',
    badge: 'Production'
  },
  {
    step: '03',
    title: 'Strategic Publishing & Distribution',
    desc: 'Data-driven scheduling during peak engagement windows with tailored hashtag clusters and community comment moderation.',
    badge: 'Distribution'
  },
  {
    step: '04',
    title: 'Conversion Funnel Monetization',
    desc: 'Turn social followers into paying clients with high-converting link-in-bio lead magnets, webinars, and DM automation.',
    badge: 'Revenue'
  }
]

const SocialGrowthProcess = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="process">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Organic Social Flywheel
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          How We Turn Social Attention Into Brand Revenue
        </h2>
        <p className="text-base text-slate-600">
          A repeatable system for continuous organic traction, brand loyalty, and direct inbound client leads.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {socialSteps.map((s, idx) => (
          <div
            key={idx}
            className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/50 hover:shadow-xl hover:shadow-[#004658]/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl font-black text-[#004658]/20 group-hover:text-[#004658] transition-colors block mb-4">
                {s.step}
              </span>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#004658]/8 text-[#004658] text-[10px] font-bold uppercase tracking-wider mb-3">
                {s.badge}
              </span>
              <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#004658] transition-colors">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SocialGrowthProcess
