import React from 'react'

const tools = [
  { name: 'Kotlin 2.0', role: 'Language & Coroutines', desc: 'Concise, null-safe native mobile code.' },
  { name: 'Jetpack Compose', role: 'Declarative UI Toolkit', desc: 'Dynamic stateful UI with reactive recomposition.' },
  { name: 'Hilt / Dagger', role: 'Dependency Injection', desc: 'Decoupled, modular, and easily testable components.' },
  { name: 'Retrofit & OkHttp', role: 'Network & REST Client', desc: 'Type-safe HTTP requests with certificate pinning.' },
  { name: 'Room SQLite', role: 'Local ORM Persistence', desc: 'Compile-time query verification and flow observation.' },
  { name: 'Google Play CI/CD', role: 'Automated Releases', desc: 'Fastlane & GitHub actions build and app bundle upload.' }
]

const AndroidTechStack = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
          Verified Android Stack
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Google-Recommended Android Architecture
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Built according to official Android Modern App Architecture guidelines (MVVM & Clean Architecture).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {tools.map((t, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-base font-black text-slate-900 mb-1">{t.name}</h3>
            <span className="text-xs font-mono text-[#004658] font-bold block mb-2">{t.role}</span>
            <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AndroidTechStack
