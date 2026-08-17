import React from 'react'

const designPhases = [
  {
    step: '01',
    title: 'Brand DNA & User Research',
    desc: 'We unpack your audience psychology, analyze competitors, and define moodboards, color psychology, and tone of voice.',
    badge: 'Discovery'
  },
  {
    step: '02',
    title: 'Wireframes & Information Architecture',
    desc: 'High-conversion page hierarchy, user flow journey mapping, and low-fidelity prototypes to validate layouts before styling.',
    badge: 'UX Architecture'
  },
  {
    step: '03',
    title: 'High-Fidelity Visual Design Systems',
    desc: 'Pixel-perfect UI design in Figma with responsive component libraries, custom micro-interactions, dynamic illustrations, and dark mode.',
    badge: 'UI Design'
  },
  {
    step: '04',
    title: 'Interactive Prototype & Dev Handoff',
    desc: 'Interactive 60 FPS clickable prototypes, design token exports, and precision handoff specifications for developers.',
    badge: 'Handoff'
  }
]

const DesignProcess = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Human-Centered UX Design
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          How We Craft Unforgettable Digital Experiences
        </h2>
        <p className="text-base text-slate-600">
          A scientific blend of behavioral psychology, aesthetic visual balance, and modern design tokens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {designPhases.map((phase, idx) => (
          <div
            key={idx}
            className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/40 hover:shadow-xl hover:shadow-[#004658]/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl font-black text-[#004658]/20 group-hover:text-[#004658] transition-colors block mb-4">
                {phase.step}
              </span>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#004658]/8 text-[#004658] text-[10px] font-bold uppercase tracking-wider mb-3">
                {phase.badge}
              </span>
              <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#004658] transition-colors">
                {phase.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {phase.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DesignProcess
