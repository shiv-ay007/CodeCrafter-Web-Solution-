import React from 'react'

const Timeline = () => {
  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      desc: "Started as a small team of 5 engineers with a vision to build world-class digital solutions.",
      badge: "Inception",
      icon: "🌱"
    },
    {
      year: "2021",
      title: "50+ Enterprise Clients",
      desc: "Expanded into healthcare, fintech, and e-commerce, delivering robust web & mobile products.",
      badge: "Expansion",
      icon: "🚀"
    },
    {
      year: "2023",
      title: "SaaS & Custom Architecture",
      desc: "Launched proprietary cloud software frameworks and sub-second web performance architectures.",
      badge: "Innovation",
      icon: "⚡"
    },
    {
      year: "2025",
      title: "Global Client Footprint",
      desc: "Grown to 25+ expert crafters serving over 120+ happy clients across 15+ global industries.",
      badge: "Scale",
      icon: "🌍"
    },
    {
      year: "2026",
      title: "Next-Gen Tech Studio",
      desc: "Pioneering AI-driven web apps, mobile studios, and enterprise software built for the future.",
      badge: "Present",
      icon: "✨",
      highlight: true
    }
  ]

  return (
    <section className="relative py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden" id="timeline">
      
      {/* Background Soft Glow (Apple Ambient Light) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.28) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10">
        
        {/* Minimal Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2.5 text-[#004658] font-bold text-xs uppercase tracking-widest mb-4">
            <span className="w-6 h-[2px] bg-[#004658] inline-block rounded-full" />
            <span>OUR JOURNEY</span>
            <span className="w-6 h-[2px] bg-[#004658] inline-block rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4">
            Company <span className="text-[#004658]">Timeline</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
            From our founding in 2019 to an industry-leading digital studio in 2026.
          </p>
        </div>

        {/* Responsive Horizontal Connected Timeline Cards Grid */}
        <div className="relative">
          
          {/* Connecting Background Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-[2px] bg-gradient-to-r from-[#004658]/20 via-[#004658] to-[#0086a8] -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {milestones.map((item, idx) => (
              <div 
                key={idx}
                className={`group relative p-6 rounded-3xl border transition-all duration-300 backdrop-blur-xl flex flex-col justify-between ${
                  item.highlight
                    ? "bg-gradient-to-b from-[#004658] to-[#003442] text-white border-[#004658] shadow-2xl shadow-[#004658]/30 -translate-y-2 lg:-translate-y-3"
                    : "bg-white/85 text-slate-900 border-[#004658]/15 shadow-sm hover:shadow-xl hover:border-[#004658]/35 hover:-translate-y-1"
                }`}
              >
                <div>
                  {/* Top Timeline Node Year Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-2xl font-extrabold tracking-tight ${
                      item.highlight ? "text-cyan-300" : "text-[#004658]"
                    }`}>
                      {item.year}
                    </span>

                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      item.highlight 
                        ? "bg-white/15 text-white backdrop-blur-md"
                        : "bg-[#004658]/8 text-[#004658]"
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon & Milestone Title */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{item.icon}</span>
                    <h3 className={`text-base font-bold tracking-tight ${
                      item.highlight ? "text-white" : "text-slate-900"
                    }`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className={`text-xs leading-relaxed font-normal ${
                    item.highlight ? "text-slate-200" : "text-slate-600"
                  }`}>
                    {item.desc}
                  </p>
                </div>

                {/* Card Footer Step Marker */}
                <div className={`mt-6 pt-3 border-t text-[11px] font-semibold flex items-center justify-between ${
                  item.highlight ? "border-white/15 text-cyan-300" : "border-slate-100 text-[#004658]"
                }`}>
                  <span>Phase 0{idx + 1}</span>
                  {item.highlight ? (
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  ) : (
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">Done ✓</span>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Timeline