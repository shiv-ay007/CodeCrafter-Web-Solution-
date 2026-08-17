import React from 'react'

const features = [
  {
    icon: '🚀',
    title: 'NVMe Gen4 Solid State Storage',
    desc: 'Up to 20x faster read/write disk throughput compared to traditional SATA SSDs, resulting in near-instant page rendering.'
  },
  {
    icon: '🔒',
    title: 'Automated Let’s Encrypt SSL',
    desc: 'Free, automated SSL encryption on all domains and subdomains with automatic 90-day renewal cycle.'
  },
  {
    icon: '📦',
    title: 'Free Website Migration',
    desc: 'Our hosting engineers will migrate your existing website, database, and email accounts with zero downtime at no extra cost.'
  },
  {
    icon: '⚡',
    title: 'LiteSpeed Web Server',
    desc: 'Equipped with server-level LiteSpeed Cache (LSCache) that handles high-traffic spikes effortlessly.'
  }
]

const SharedFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10" id="features">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Hardware & Network Specs
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Why CodeCrafter Shared Hosting Outperforms
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Enterprise infrastructure tuned specifically for high-speed WordPress, PHP, and modern web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feat, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <span className="text-3xl p-3 rounded-2xl bg-[#004658]/8 shrink-0">{feat.icon}</span>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SharedFeatures
