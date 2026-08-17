import React from 'react'

const devSteps = [
  {
    num: '01',
    title: 'Architecture & System Design',
    desc: 'Database schema modeling (PostgreSQL / MongoDB), REST & GraphQL API specifications, and cloud infrastructure mapping.',
    badge: 'System Design',
    icon: '📐'
  },
  {
    num: '02',
    title: 'Component Engineering & UI',
    desc: 'Modular React 19 / Next.js component system with strict TypeScript type safety, fluid layouts, and accessible UI interactions.',
    badge: 'Frontend',
    icon: '💻'
  },
  {
    num: '03',
    title: 'Microservices & API Integration',
    desc: 'Sub-second serverless edge functions, asynchronous background workers, Redis cache layers, and webhooks.',
    badge: 'Backend',
    icon: '⚡'
  },
  {
    num: '04',
    title: 'Automated CI/CD & Cloud Launch',
    desc: 'Docker containerization, automated unit & integration test suites, and zero-downtime deployment pipelines.',
    badge: 'DevOps',
    icon: '🚀'
  }
]

const WebDevProcess = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Software Engineering Lifecycle
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          How We Architect Scalable Web Applications
        </h2>
        <p className="text-base text-slate-600">
          From the initial architectural blueprint to automated zero-downtime deployment, our process guarantees enterprise reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {devSteps.map((s, idx) => (
          <div
            key={idx}
            className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/50 hover:shadow-xl hover:shadow-[#004658]/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black text-[#004658]/20 group-hover:text-[#004658] transition-colors">
                  {s.num}
                </span>
                <span className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {s.icon}
                </span>
              </div>

              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#004658]/8 text-[#004658] text-[10px] font-bold uppercase tracking-wider mb-3">
                {s.badge}
              </span>

              <h3 className="text-lg font-black text-slate-900 mb-2.5 group-hover:text-[#004658] transition-colors">
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

export default WebDevProcess
