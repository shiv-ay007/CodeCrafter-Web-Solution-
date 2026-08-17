import React, { useState, useEffect } from 'react'

const superPowers = [
  {
    id: 1,
    step: '01',
    sysId: 'SYS.01 // LOGIC',
    title: 'Problem Solvers',
    description: 'We find smarter ways to solve complex challenges.',
    discipline: 'Algorithmic Strategy',
    impact: 'Root-Cause Resolution',
    highlight: 'Deep Engineering Logic',
    metric: '<100ms Logic',
    status: 'ACTIVE RESOLUTION',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 2,
    step: '02',
    sysId: 'SYS.02 // PIXEL',
    title: 'Pixel Perfectionists',
    description: 'We care about every detail, from layout to interaction.',
    discipline: 'Human Interface Design',
    impact: 'Micro-Interaction Polish',
    highlight: '60 FPS Fluid Motion',
    metric: '0px Alignment Error',
    status: 'PIXEL PERFECT',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 3,
    step: '03',
    sysId: 'SYS.03 // PRODUCT',
    title: 'Product Thinkers',
    description: "We don't just build features—we think about the whole experience.",
    discipline: 'Holistic Ecosystem',
    impact: 'Client Value Delivery',
    highlight: 'Full Lifecycle Vision',
    metric: '100% User Centric',
    status: 'SYSTEM DESIGN',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 4,
    step: '04',
    sysId: 'SYS.04 // CODE',
    title: 'Code Craftsmen',
    description: 'Clean, maintainable and purposeful code is our standard.',
    discipline: 'Type-Safe Engineering',
    impact: 'Automated CI/CD Tests',
    highlight: 'Zero Technical Debt',
    metric: '99.9% Clean Standard',
    status: 'STRICT STANDARDS',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 5,
    step: '05',
    sysId: 'SYS.05 // ART',
    title: 'Creative Minds',
    description: 'We turn ordinary ideas into memorable digital experiences.',
    discipline: 'Visual Storytelling',
    impact: 'Atmospheric Aesthetics',
    highlight: 'Unforgettable Brand',
    metric: '10x Distinctive Look',
    status: 'DYNAMIC CREATIVE',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4 5 5 0 014-4h4a4 4 0 014 4v4a4 4 0 01-4 4H7zM14 3h7v7h-7V3z" />
      </svg>
    )
  },
  {
    id: 6,
    step: '06',
    sysId: 'SYS.06 // SCALE',
    title: 'Future Builders',
    description: "We build with scalability, adaptability and what's next in mind.",
    discipline: 'Distributed Systems',
    impact: 'Cloud-Native Ready',
    highlight: 'Infinite Scalability',
    metric: '10M+ Request Scale',
    status: 'FUTURE PROOF',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
]

const SuperPower = () => {
  const [activeId, setActiveId] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  // Smooth progress bar and auto-cycle animation
  useEffect(() => {
    if (isPaused) return

    const interval = 50 // ms
    const totalDuration = 4000 // 4 seconds per node

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveId((curr) => (curr % superPowers.length) + 1)
          return 0
        }
        return prev + (interval / totalDuration) * 100
      })
    }, interval)

    return () => clearInterval(timer)
  }, [isPaused, activeId])

  const activeItem = superPowers.find((p) => p.id === activeId) || superPowers[0]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden" id="superpowers">
      
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.3) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10">
        
        {/* Centered Minimalist Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>⭐ OUR SUPERPOWERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            The Collective <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00a8cc]">DNA</span>
          </h2>
          
          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium max-w-xl">
            An interconnected engineering circuit engineered to transform raw ambition into production-ready digital excellence.
          </p>
        </div>

        {/* Unique Split Bento Architecture: Live Stage + Interconnected Chain Rail */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left: Interactive Animated Spotlight Stage (Cinematic Luxury Dark Aesthetic) */}
          <div className="lg:col-span-5 relative rounded-3xl rounded-bl-[48px] bg-slate-950 text-white p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-2xl border border-slate-800">
            
            {/* Animated Rotating Conic Light Mesh in Background */}
            <div 
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none animate-spin"
              style={{
                background: 'conic-gradient(from 0deg, #00D8FF, #004658, #00D8FF)',
                animationDuration: '14s'
              }}
            />
            
            {/* Soft Ambient Radial Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />

            {/* Stage Top Bar with Live Pulsing Signals & Cycle Progress Bar */}
            <div className="relative z-10 flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                {/* Live Waveform Indicator */}
                <div className="flex items-end gap-0.5 h-3.5">
                  <span className="w-1 bg-cyan-400 rounded-full animate-[bounce_1s_infinite_100ms] h-full" />
                  <span className="w-1 bg-cyan-400 rounded-full animate-[bounce_1s_infinite_300ms] h-2/3" />
                  <span className="w-1 bg-cyan-400 rounded-full animate-[bounce_1s_infinite_200ms] h-4/5" />
                </div>

                <span className="font-mono text-xs font-bold text-cyan-300 tracking-wider">
                  {activeItem.sysId}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-white/15">
                  Node {activeItem.step} of 06
                </span>
              </div>
            </div>

            {/* Top Auto-Cycle Progress Indicator Bar */}
            <div className="relative z-10 w-full h-1 bg-slate-800 rounded-full overflow-hidden mb-6">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-[#0086a8] transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Active Superpower Showcase Hero (Smooth State Transitions) */}
            <div key={activeItem.id} className="relative z-10 my-auto py-2 transition-all duration-500 animate-fadeIn">
              
              {/* Glowing Hologram Icon Box */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#004658] to-[#002731] border border-cyan-400/40 text-cyan-200 flex items-center justify-center mb-6 shadow-xl shadow-[#004658]/50 ring-4 ring-cyan-500/10">
                {activeItem.icon}
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20 text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest mb-2.5">
                {activeItem.discipline}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3.5 tracking-tight">
                {activeItem.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                "{activeItem.description}"
              </p>
            </div>

            {/* Stage Telemetry Grid */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-1">
                  Standard Metric
                </span>
                <span className="text-sm font-black text-cyan-300 font-mono">
                  {activeItem.metric}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-1">
                  Live Status
                </span>
                <span className="text-sm font-black text-emerald-400 truncate block">
                  {activeItem.status}
                </span>
              </div>
            </div>

          </div>

          {/* Right: The 6 Clear, Sharp & Solid Connected Interactive Chain Tiles */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            
            {superPowers.map((item) => {
              const isActive = item.id === activeId

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveId(item.id)
                    setProgress(0)
                  }}
                  className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer select-none flex flex-col justify-between border ${
                    isActive
                      ? 'bg-white border-[#004658] ring-2 ring-[#004658]/30 shadow-xl shadow-[#004658]/15 -translate-y-1'
                      : 'bg-white border-slate-300/80 hover:border-[#004658] hover:shadow-lg hover:shadow-[#004658]/10 hover:-translate-y-0.5'
                  }`}
                >
                  <div>
                    {/* Top Row: Connected Step Pill & Telemetry */}
                    <div className="relative z-10 flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg font-mono font-black text-xs flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-[#004658] text-white shadow-md'
                            : 'bg-slate-100 text-slate-800 border border-slate-200 group-hover:bg-[#004658] group-hover:text-white'
                        }`}>
                          {item.step}
                        </div>

                        <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                          isActive ? 'text-[#004658]' : 'text-slate-500 group-hover:text-[#004658]'
                        }`}>
                          {item.discipline.split(' ')[0]}
                        </span>
                      </div>

                      {/* Active Status Pulse Dot */}
                      <span className={`w-2.5 h-2.5 rounded-full transition-all ${
                        isActive ? 'bg-[#004658] ring-4 ring-[#004658]/20 scale-125' : 'bg-slate-300 group-hover:bg-[#004658]/40'
                      }`} />
                    </div>

                    {/* Solid Dark Crisp Title (100% Readable & Sharp) */}
                    <h4 className={`text-base sm:text-lg font-extrabold leading-tight mb-2 transition-colors ${
                      isActive ? 'text-[#004658]' : 'text-slate-900 group-hover:text-[#004658]'
                    }`}>
                      {item.title}
                    </h4>

                    {/* High-Contrast Clear Description */}
                    <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Chain Link Track */}
                  <div className="relative z-10 mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono font-bold">
                    <span className={`px-2 py-0.5 rounded ${
                      isActive ? 'bg-[#004658]/10 text-[#004658]' : 'bg-slate-100 text-slate-700 group-hover:text-[#004658]'
                    }`}>
                      {item.metric}
                    </span>

                    <span className={`flex items-center gap-1 transition-transform ${
                      isActive ? 'text-[#004658] translate-x-1' : 'text-slate-600 group-hover:text-[#004658]'
                    }`}>
                      <span>{isActive ? 'Active' : 'Connect'}</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              )
            })}

          </div>

        </div>

        {/* Minimalist Bottom Chain Summary Strip */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl rounded-bl-[36px] shadow-sm flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#004658] animate-pulse" />
            <span>Click any superpower node on the right to inspect live collective engineering disciplines</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-slate-600 font-bold">
            <span>• 6 Synchronized Superpowers</span>
            <span>• 100% Quality Assurance</span>
            <span>• Zero Legacy Debt</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SuperPower