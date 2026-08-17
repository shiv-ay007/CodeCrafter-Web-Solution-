import React from 'react'

const features = [
  {
    icon: '✨',
    title: 'SwiftUI & ProMotion Animations',
    desc: 'Fluid 120Hz micro-interactions, responsive geometry effects, and native dark/light mode transition aesthetics.'
  },
  {
    icon: '🧠',
    title: 'On-Device CoreML & Apple Vision',
    desc: 'Run local machine learning models, object detection, and natural language processing without external cloud latency.'
  },
  {
    icon: '💳',
    title: 'Apple Pay & In-App Purchases (StoreKit 2)',
    desc: 'Frictionless one-tap biometric checkout, subscription management, and auto-renewable entitlement verification.'
  },
  {
    icon: '🛡️',
    title: 'Strict Apple Privacy & Security',
    desc: 'App Tracking Transparency compliance, Keychain cryptographic storage, and Secure Enclave biometrics.'
  }
]

const IosFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="features">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Apple Ecosystem Mastery
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Native iOS Capabilities Engineered For Excellence
        </h2>
        <p className="text-base text-slate-600">
          We leverage Apple’s deepest hardware APIs to build unforgettable experiences across iPhone, iPad, Mac, and Apple Watch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/50 hover:shadow-xl hover:shadow-[#004658]/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <span className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-2xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6">
                {f.icon}
              </span>
              <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#004658] transition-colors">
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default IosFeatures
