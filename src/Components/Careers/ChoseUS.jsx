import React, { useState } from 'react'

const valuePillars = [
  {
    id: '01',
    title: 'Learn Without Limits',
    badge: 'Continuous R&D',
    kpi: '100% Funded Upskilling',
    tagline: 'Expand your craft beyond boundaries.',
    description: 'Work directly alongside Principal Architects, master bleeding-edge cloud & AI frameworks, and access a dedicated quarterly R&D stipend for books, labs, and conferences.',
    bullets: [
      'Weekly tech deep-dives & architecture teardowns',
      'Full sponsorship for cloud & engineering certifications',
      'Dedicated 20% innovation time for experimental tools'
    ],
    accent: 'from-[#004658]/20 to-cyan-500/10'
  },
  {
    id: '02',
    title: 'Own Your Work',
    badge: 'True Autonomy',
    kpi: 'Zero Micro-Management',
    tagline: 'Direct accountability from blueprint to production.',
    description: 'No unnecessary middlemen, rigid silos, or endless approval chains. You have the freedom to architect solutions, pick modern tools, and make direct impact from day one.',
    bullets: [
      'Direct ownership of module architecture & databases',
      'Freedom to propose and champion tech stack upgrades',
      'Async-first culture: we value outcomes, not desk hours'
    ],
    accent: 'from-emerald-500/15 to-[#004658]/20'
  },
  {
    id: '03',
    title: 'Build Real Things',
    badge: 'Mission-Critical Scale',
    kpi: '50M+ Global Requests',
    tagline: 'Engineering that powers real-world enterprises.',
    description: 'Say goodbye to throwaway dummy projects. You will build high-throughput microservices, sub-second financial apps, and scalable web platforms for global brands.',
    bullets: [
      'High-concurrency systems engineered for 99.99% uptime',
      'Zero legacy technical debt: modern, clean repositories',
      'Real user telemetry and sub-50ms performance metrics'
    ],
    accent: 'from-blue-600/15 to-cyan-400/20'
  },
  {
    id: '04',
    title: 'Grow Together',
    badge: 'Collective Wealth',
    kpi: 'Accelerated Leadership',
    tagline: 'Shared success, transparent equity, and mentorship.',
    description: 'We believe when the company scales, every engineer scales. Enjoy transparent career ladders, performance bonuses, and a high-trust collective where everyone wins.',
    bullets: [
      'Transparent milestone-based compensation reviews',
      'Direct partner & leadership mentorship pathways',
      'Annual international retreats and team co-working hubs'
    ],
    accent: 'from-cyan-500/20 to-[#004658]/20'
  }
]

const ChoseUS = () => {
  const [activePillar, setActivePillar] = useState(0)

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden" id="why-choose-us">
      
      {/* Background Soft Glows (Enterprise HCL/TCS Ambient Lighting) */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.35) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10">
        
        {/* Enterprise Centered Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] font-mono font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>🌐 GLOBAL CRAFTSMANSHIP & CULTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Why Build Your Career At <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00a8cc]">CodeCrafter?</span>
          </h2>
          
          <p className="mt-3.5 text-xs sm:text-sm text-slate-600 font-medium max-w-2xl leading-relaxed">
            A modern engineering collective built for senior problem solvers who thrive on autonomy, continuous learning, and crafting digital systems that matter.
          </p>
        </div>

        {/* 4 Unique Value Pillars Grid (Enterprise Architectural Matrix) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 mb-14">
          {valuePillars.map((pillar, index) => (
            <div
              key={pillar.id}
              onMouseEnter={() => setActivePillar(index)}
              className={`group relative rounded-3xl p-6 sm:p-8 bg-white border transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between overflow-hidden select-none ${
                activePillar === index
                  ? 'border-[#004658] shadow-2xl shadow-[#004658]/12 -translate-y-1.5'
                  : 'border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Subtle Top-Right Ambient Gradient Wash */}
              <div 
                className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${pillar.accent} blur-2xl transition-opacity duration-500 pointer-events-none opacity-60 group-hover:opacity-100`} 
              />

              <div>
                {/* Card Top Row: Index Number + Floating Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl sm:text-3xl font-mono font-black text-[#004658] tracking-tight">
                    {pillar.id}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10.5px] font-mono font-bold bg-[#004658]/8 text-[#004658] border border-[#004658]/20 shadow-2xs">
                      {pillar.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10.5px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-300/40">
                      {pillar.kpi}
                    </span>
                  </div>
                </div>

                {/* Pillar Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#004658] transition-colors leading-tight mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-[13px] font-bold text-[#004658] mb-3">
                  {pillar.tagline}
                </p>

                {/* Pillar Main Description */}
                <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Enterprise Checklist Points */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {pillar.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <span className="w-4 h-4 rounded-full bg-[#004658]/10 text-[#004658] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Enterprise Indicator */}
              <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#004658]">
                <span className="group-hover:underline underline-offset-4">Explore Our Engineering Standards</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>

            </div>
          ))}
        </div>

        {/* Enterprise Bottom Trust & Career Strip (HCL/TCS Style Corporate Bar) */}
        <div className="p-7 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-950 to-[#004658] rounded-3xl text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/10 text-cyan-300 text-[10.5px] font-mono font-bold uppercase mb-2">
              <span>🚀 JOIN 50+ SENIOR CRAFTSMEN</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black mb-1">
              Ready to do the best engineering work of your life?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Explore our transparent open roles across architecture, full-stack development, and product design.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#careers"
              className="px-6 py-3 rounded-xl bg-white text-[#004658] font-bold text-xs sm:text-sm hover:bg-slate-100 shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>View Open Roles</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer"
            >
              <span>Talk to an Architect</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ChoseUS