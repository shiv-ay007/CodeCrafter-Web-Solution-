import React from 'react'

const hybridStack = [
  { name: 'React Native 0.76+', role: 'Core Framework', desc: 'New Architecture with Fabric rendering and TurboModules.' },
  { name: 'Expo SDK 52', role: 'Development Ecosystem', desc: 'Universal native APIs, OTA updates, and managed build cloud.' },
  { name: 'TypeScript', role: 'Strict Type System', desc: 'Enterprise reliability across both iOS and Android platforms.' },
  { name: 'Zustand & TanStack Query', role: 'State & Cache Engine', desc: 'Optimistic UI updates with offline data hydration.' }
]

const HybridShowcase = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
          Engineered Tech Stack
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          React Native & Expo Ecosystem
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Proven across global Fortune 500 apps including Shopify, Discord, Coinbase, and Instagram.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {hybridStack.map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-base font-black text-slate-900 mb-1">{item.name}</h3>
            <span className="text-xs font-mono text-[#004658] font-bold block mb-2">{item.role}</span>
            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HybridShowcase
