import React from 'react'

const swiftStack = [
  { name: 'Swift 6 & Concurrency', role: 'Modern Type-Safe Code', desc: 'Actor isolation and async/await eliminating race conditions.' },
  { name: 'SwiftUI & Combine', role: 'Reactive UI Architecture', desc: 'State-driven declarative user interface patterns.' },
  { name: 'MVVM-C Architecture', role: 'Modular Codebase', desc: 'Clean separation of business logic, presentation, and coordinator routing.' },
  { name: 'TestFlight & App Store CI', role: 'Fastlane Automation', desc: 'Automated beta distribution, snapshot testing, and zero-rejection submissions.' }
]

const IosArchitecture = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
          Apple Quality Standard
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Clean Swift & Apple Silicon Optimization
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Engineered for Apple M-series chips and A18 Bionic processors for maximum battery efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {swiftStack.map((item, idx) => (
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

export default IosArchitecture
