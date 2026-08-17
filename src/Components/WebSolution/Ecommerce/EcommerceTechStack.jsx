import React from 'react'

const stacks = [
  {
    name: 'Shopify Plus & Liquid',
    role: 'Enterprise Scaled Storefronts',
    desc: 'Custom themes, checkout extensibility apps, and headless storefront connectors.',
    color: '#95BF47'
  },
  {
    name: 'Next.js 15 & Commerce',
    role: 'Ultra-Fast Headless Frontend',
    desc: 'Edge-rendered product catalogs, instant optimistic carts, and sub-second page transitions.',
    color: '#00D8FF'
  },
  {
    name: 'WooCommerce & WordPress',
    role: 'Custom Flexible CMS Commerce',
    desc: 'High-performance bespoke WooCommerce setups with Redis object caching and high-concurrency DB optimization.',
    color: '#0073AA'
  },
  {
    name: 'Medusa.js & Node.js',
    role: 'Modular Open Headless Engine',
    desc: 'Custom business logic, automated multi-vendor marketplaces, and decoupled commerce microservices.',
    color: '#7C3AED'
  }
]

const EcommerceTechStack = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-900 text-white rounded-3xl my-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D8FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D8FF]/15 text-[#00D8FF] text-xs font-bold uppercase tracking-wider mb-4">
          Tech Stack Flexibility
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
          We Build On World-Class E-Commerce Engines
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Pick the best architecture for your brand's volume, custom features, and scaling roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stacks.map((s, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-3 h-3 rounded-full mb-4" style={{ backgroundColor: s.color }} />
              <h3 className="text-lg font-bold text-white mb-1">{s.name}</h3>
              <span className="text-xs font-mono text-cyan-400 block mb-3">{s.role}</span>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EcommerceTechStack
