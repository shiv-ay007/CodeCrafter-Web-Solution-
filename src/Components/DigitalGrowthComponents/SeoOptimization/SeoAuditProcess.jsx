import React from 'react'

const seoPillars = [
  {
    step: '01',
    title: 'Technical SEO & Core Web Vitals',
    desc: 'Fix crawl errors, optimize TTFB, eliminate layout shifts (CLS), and implement schema structured data (JSON-LD).',
    badge: 'Technical'
  },
  {
    step: '02',
    title: 'High-Intent Semantic Keyword Clusters',
    desc: 'In-depth search intent mapping to identify commercial, transactional, and high-volume long-tail keywords.',
    badge: 'Content Strategy'
  },
  {
    step: '03',
    title: 'On-Page Optimization & Internal Linking',
    desc: 'Optimized meta tags, heading hierarchies, dynamic XML sitemaps, robots.txt, and link equity distribution.',
    badge: 'On-Page'
  },
  {
    step: '04',
    title: 'High-Authority Backlink Acquisition',
    desc: 'White-hat digital PR, editorial guest mentions, and contextual tier-1 backlinks that build unstoppable domain rating (DR).',
    badge: 'Off-Page Authority'
  }
]

const SeoAuditProcess = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="process">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Holistic SEO Strategy
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Our 4-Pillar Organic Growth Framework
        </h2>
        <p className="text-base text-slate-600">
          Sustainable, algorithmic search visibility that turns your website into an automated lead generation machine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {seoPillars.map((p, idx) => (
          <div
            key={idx}
            className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/50 hover:shadow-xl hover:shadow-[#004658]/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl font-black text-[#004658]/20 group-hover:text-[#004658] transition-colors block mb-4">
                {p.step}
              </span>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#004658]/8 text-[#004658] text-[10px] font-bold uppercase tracking-wider mb-3">
                {p.badge}
              </span>
              <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#004658] transition-colors">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SeoAuditProcess
