import React from 'react'

const localSteps = [
  {
    step: '01',
    title: 'Google Business Profile (GBP) Audit',
    desc: 'Category optimization, secondary keywords, high-resolution geo-tagged photo uploads, and business attribute verification.',
    badge: 'Profile Audit'
  },
  {
    step: '02',
    title: 'NAP Consistency & Citation Building',
    desc: 'Syncing your exact Name, Address, and Phone Number across 100+ premier local directories, Yelp, Apple Maps, and Bing Places.',
    badge: 'Citations'
  },
  {
    step: '03',
    title: 'Automated 5-Star Review Generation',
    desc: 'Automated SMS and email review collection funnels that turn satisfied clients into verified 5-star Google recommendations.',
    badge: 'Social Proof'
  },
  {
    step: '04',
    title: 'Geo-Targeted Local Landing Pages',
    desc: 'Localized service landing pages with embedded Google Maps schema, local customer testimonials, and localized keyword targeting.',
    badge: 'Localized UX'
  }
]

const LocalSeoSteps = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="steps">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Local Ranking Blueprint
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          How We Put Your Business At The Top Of Google Maps
        </h2>
        <p className="text-base text-slate-600">
          Our local search framework ensures that whenever anyone searches nearby, your business is the first one they call.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {localSteps.map((s, idx) => (
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

export default LocalSeoSteps
