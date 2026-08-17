import React from 'react'

const strategies = [
  {
    icon: '🎯',
    title: 'High-Intent Search Ads',
    desc: 'Capture users actively searching for your solutions with precision keyword matching, negative keyword filtering, and persuasive ad copy.'
  },
  {
    icon: '🤖',
    title: 'Performance Max (PMax) AI',
    desc: 'Leverage Google’s machine learning algorithms to serve responsive ads across YouTube, Search, Display, Discover, and Gmail.'
  },
  {
    icon: '🔁',
    title: 'High-Conversion Dynamic Remarketing',
    desc: 'Re-engage lost website visitors with dynamic personalized offers and product reminders to close abandoned purchases.'
  },
  {
    icon: '🧪',
    title: 'Scientific Landing Page A/B Testing',
    desc: 'Continuously split test headlines, CTA buttons, and form layouts to maximize conversion rate and drop cost-per-lead.'
  }
]

const AdsStrategies = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10" id="strategies">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Precision Ad Channels
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Engineered For Maximum Return On Ad Spend
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          We combine data analytics with psychology-driven ad creatives to scale revenue profitably.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {strategies.map((s, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <span className="text-3xl p-3 rounded-2xl bg-[#004658]/8 shrink-0">{s.icon}</span>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{s.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdsStrategies
