import React from 'react'

const benefits = [
  {
    icon: '💰',
    title: '50% Cost & Time Reduction',
    desc: 'Write once, deploy everywhere. A single unified engineering team delivers your iOS and Android apps simultaneously.'
  },
  {
    icon: '⚡',
    title: 'Instant Over-The-Air (OTA) Updates',
    desc: 'Push critical bug fixes, UI tweaks, and promotional banners directly to user devices without waiting for App Store approval.'
  },
  {
    icon: '🔌',
    title: 'Native Hardware TurboModules',
    desc: 'Direct C++ bindings to Camera, Bluetooth, Biometrics, and Push notifications ensure zero performance compromise.'
  },
  {
    icon: '🔄',
    title: 'Shared React Web Codebase',
    desc: 'Reuse business logic, authentication hooks, and state management between your Web, iOS, and Android applications.'
  }
]

const HybridBenefits = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="benefits">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Strategic Hybrid Advantages
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Why Modern Startups & Scaleups Choose Hybrid
        </h2>
        <p className="text-base text-slate-600">
          Maximize your runway and capture both Apple App Store and Google Play markets with zero duplication of effort.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, idx) => (
          <div
            key={idx}
            className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/50 hover:shadow-xl hover:shadow-[#004658]/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <span className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-2xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6">
                {b.icon}
              </span>
              <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#004658] transition-colors">
                {b.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {b.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HybridBenefits
