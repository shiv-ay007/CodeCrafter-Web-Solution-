import React from 'react'

const steps = [
  {
    step: '01',
    title: 'Full Technical & UX Audit',
    desc: 'We analyze your Core Web Vitals, conversion drop-offs, accessibility compliance, and code bottlenecks with deep diagnostic tooling.',
    badge: 'Diagnostic',
    tags: ['Lighthouse 360', 'Heatmaps', 'SEO Preservation'],
    icon: '🔍'
  },
  {
    step: '02',
    title: 'Modern Architecture & UI Blueprint',
    desc: 'Bespoke design systems, interactive prototypes in Figma, fluid typography tokens, and crystal clear brand visual identity.',
    badge: 'Design Sprint',
    tags: ['Tailwind CSS', 'Figma Systems', 'Conversion Layouts'],
    icon: '🎨'
  },
  {
    step: '03',
    title: 'High-Performance Re-Engineering',
    desc: 'Rebuilding on Next.js 15, React 19, and cloud-native microservices. Clean decoupled backend, edge caching, and instant static generation.',
    badge: 'Development',
    tags: ['Next.js 15', 'Sub-second API', 'Mobile-First'],
    icon: '⚡'
  },
  {
    step: '04',
    title: 'Zero-Downtime Migration & Launch',
    desc: 'Complete 301 redirect mapping, link equity preservation, DNS propagation testing, and live automated smoke tests before seamless go-live.',
    badge: 'Deployment',
    tags: ['Zero SEO Loss', 'SSL Hardening', 'Automated CI/CD'],
    icon: '🚀'
  }
]

const RedesignProcess = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="process">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Engineered Framework
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Our 4-Phase Website Re-Engineering Process
        </h2>
        <p className="text-base text-slate-600">
          A battle-tested modernization roadmap that protects your organic Google rankings while multiplying your sales conversions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="group relative p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/50 hover:shadow-xl hover:shadow-[#004658]/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black text-[#004658]/20 group-hover:text-[#004658] transition-colors">
                  {item.step}
                </span>
                <span className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-800 text-[10px] font-bold uppercase tracking-wider mb-3">
                {item.badge}
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-2.5 group-hover:text-[#004658] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {item.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
              {item.tags.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RedesignProcess
