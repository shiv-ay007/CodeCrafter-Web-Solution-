import React from 'react'

const capabilities = [
  {
    icon: '📱',
    title: 'Jetpack Compose Declarative UI',
    desc: 'State-of-the-art modern Android UI toolkit that accelerates development and eliminates boilerplate XML.'
  },
  {
    icon: '🔋',
    title: 'Hardware & Sensor Integration',
    desc: 'Full access to Bluetooth Low Energy (BLE), NFC, CameraX, GPS location tracking, and Biometric fingerprint/face unlock.'
  },
  {
    icon: '💾',
    title: 'Offline-First Room & WorkManager',
    desc: 'Seamless data synchronization with local SQLite / Room DB caching and background scheduled sync workers.'
  },
  {
    icon: '🔔',
    title: 'Firebase Push Notifications (FCM)',
    desc: 'High-delivery targeted push messaging, deep link navigation, analytics telemetry, and Crashlytics error tracing.'
  }
]

const AndroidCapabilities = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="capabilities">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Android Engineering Core
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Native Android Architecture Built For Peak Performance
        </h2>
        <p className="text-base text-slate-600">
          Crafted to run flawlessly across flagship phones, budget smartphones, tablets, and foldable devices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((c, idx) => (
          <div
            key={idx}
            className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/50 hover:shadow-xl hover:shadow-[#004658]/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <span className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-2xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6">
                {c.icon}
              </span>
              <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#004658] transition-colors">
                {c.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AndroidCapabilities
