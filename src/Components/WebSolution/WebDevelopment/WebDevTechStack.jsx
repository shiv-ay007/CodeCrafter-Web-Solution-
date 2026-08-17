import React from 'react'

const techCategories = [
  {
    category: 'Frontend & UI Frameworks',
    items: [
      { name: 'React 19', desc: 'Latest server actions & concurrent rendering' },
      { name: 'Next.js 15', desc: 'App router, dynamic ISR & edge rendering' },
      { name: 'Tailwind CSS 4', desc: 'Ultra-fast utility architecture' },
      { name: 'TypeScript', desc: 'Strict static types & zero runtime crashes' }
    ]
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'Node.js & Express', desc: 'High-throughput asynchronous I/O' },
      { name: 'Python & FastAPI', desc: 'High-speed AI microservices & data pipelines' },
      { name: 'Go (Golang)', desc: 'Ultra-low latency concurrency engines' },
      { name: 'GraphQL & REST', desc: 'Strict typed API schema federation' }
    ]
  },
  {
    category: 'Databases & Caching',
    items: [
      { name: 'PostgreSQL & Supabase', desc: 'ACID compliant relational storage & RLS' },
      { name: 'MongoDB', desc: 'Flexible NoSQL JSON document store' },
      { name: 'Redis Edge', desc: 'Sub-millisecond in-memory caching' },
      { name: 'Prisma & Drizzle', desc: 'Type-safe ORM data access layers' }
    ]
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'AWS & Cloudflare', desc: 'Global CDN edge compute & serverless' },
      { name: 'Docker & Kubernetes', desc: 'Automated container orchestration' },
      { name: 'GitHub Actions', desc: 'Automated continuous integration & release' },
      { name: 'Datadog & Sentry', desc: 'Real-time telemetry & error monitoring' }
    ]
  }
]

const WebDevTechStack = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/70 rounded-3xl border border-slate-200 my-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Tech Stack Matrix
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Modern Full-Stack Engineering Stack
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          We leverage proven, bleeding-edge frameworks designed for ultra-low latency and seamless vertical scaling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techCategories.map((cat, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-sm font-black text-[#004658] uppercase tracking-wider pb-2 border-b border-slate-100">
              {cat.category}
            </h3>
            <div className="space-y-3">
              {cat.items.map((item, iIdx) => (
                <div key={iIdx} className="space-y-0.5">
                  <div className="text-sm font-bold text-slate-900">{item.name}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WebDevTechStack
