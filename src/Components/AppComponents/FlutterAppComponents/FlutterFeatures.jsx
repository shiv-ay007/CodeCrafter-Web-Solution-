import React from 'react'

const features = [
  {
    icon: '🚀',
    title: 'Ahead-Of-Time (AOT) Machine Code',
    desc: 'Compiles directly to native ARM and x86 machine instructions for instant cold startup times and sub-millisecond frame rendering.'
  },
  {
    icon: '🎨',
    title: 'Custom Widget-Based UI Design',
    desc: 'Complete control over every single pixel on screen. Custom animations, gradients, glassmorphism, and responsive physics.'
  },
  {
    icon: '⚡',
    title: 'Stateful Hot Reload Velocity',
    desc: 'Iterate, design, and fix bugs in sub-second cycles without losing application state or restarting your simulator.'
  },
  {
    icon: '🌐',
    title: 'Multi-Screen Adaptive Layouts',
    desc: 'Effortlessly adapt between small smartwatch screens, standard smartphones, iPad tablets, foldables, and desktop web.'
  }
]

const FlutterFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="features">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Google Flutter Engineering
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Unrivaled Visual Freedom & Native Speed
        </h2>
        <p className="text-base text-slate-600">
          Build high-fidelity mobile applications with Google’s premier open-source UI software development kit.
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

export default FlutterFeatures
