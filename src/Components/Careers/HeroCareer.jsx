import React, { useState } from 'react'

const careerHighlights = [
  {
    id: 1,
    icon: '⚡',
    title: '$2,500 Setup Stipend',
    desc: 'MacBook Pro, 4K display, and ergonomic furniture.',
    badge: 'Hardware Included'
  },
  {
    id: 2,
    icon: '🌍',
    title: '100% Async Freedom',
    desc: 'No mandatory fixed 9-to-5. Work in your deep flow.',
    badge: 'True Autonomy'
  },
  {
    id: 3,
    icon: '🚀',
    title: '7-Day Fast Hiring',
    desc: 'Human conversations. Zero boring LeetCode grinds.',
    badge: 'Fast Feedback'
  }
]

const HeroCareer = () => {
  const [activeHighlight, setActiveHighlight] = useState(0)

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden" id="careers">
      
      {/* Background Soft Glows */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.35) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />
      <div 
        className="absolute bottom-10 right-1/4 w-[500px] h-[350px] pointer-events-none rounded-full opacity-15 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 216, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      {/* Global CSS for Smooth Floating & Shimmer Animations */}
      <style>{`
        @keyframes float-smooth {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(8px);
          }
        }
        @keyframes shimmer-line {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-float-badge {
          animation: float-smooth 5s ease-in-out infinite;
        }
        .animate-float-badge-delayed {
          animation: float-reverse 6s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer-line 3s infinite linear;
        }
      `}</style>

      <div className="relative z-10">
        
        {/* Main 2-Column Responsive Layout: Top Aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading, Copy, Buttons + Animated Career Perks Widget */}
          <div className="lg:col-span-6 text-left pt-1 flex flex-col justify-between h-full">
            
            <div>
              {/* Main Heading (Top Aligned with Right Image) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-5">
                Build What’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00a8cc]">Next.</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
                Work with curious minds, solve meaningful problems, and build digital experiences that make an impact.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-9">
                <a
                  href="#open-roles"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#004658] text-white font-bold text-xs sm:text-sm hover:bg-[#003442] shadow-lg shadow-[#004658]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>View Open Positions</span>
                  <span className="text-base">→</span>
                </a>

                <a
                  href="#culture"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/90 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-50 hover:border-[#004658]/40 hover:text-[#004658] shadow-sm transition-all duration-200"
                >
                  <span>Our Culture</span>
                </a>
              </div>
            </div>

            {/* Left Bottom Animated Career Perks & Growth Widget */}
            <div className="mt-4 p-5 rounded-3xl bg-white/90 border border-slate-200/90 shadow-md shadow-[#004658]/5 relative overflow-hidden">
              
              {/* Animated Glowing Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#004658] via-cyan-400 to-[#004658] overflow-hidden">
                <div className="w-full h-full bg-white/40 animate-shimmer" />
              </div>

              {/* Header inside the widget */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                    Why Engineers Choose Crafter
                  </span>
                </div>

                <span className="text-[10.5px] font-mono font-semibold text-[#004658] bg-[#004658]/10 px-2 py-0.5 rounded-md">
                  ✨ Senior Studio
                </span>
              </div>

              {/* 3 Animated Interactive Perk Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3.5">
                {careerHighlights.map((item, index) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveHighlight(index)}
                    className={`p-3 rounded-2xl border transition-all duration-300 cursor-pointer text-left select-none ${
                      activeHighlight === index
                        ? 'bg-[#004658] text-white border-[#004658] shadow-md -translate-y-0.5'
                        : 'bg-slate-50/80 hover:bg-white text-slate-800 border-slate-200/80 hover:border-[#004658]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-base">{item.icon}</span>
                      <span
                        className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                          activeHighlight === index
                            ? 'bg-white/20 text-cyan-200'
                            : 'bg-slate-200/70 text-slate-600'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold leading-tight mb-0.5">
                      {item.title}
                    </h4>

                    <p
                      className={`text-[10.5px] leading-relaxed line-clamp-2 ${
                        activeHighlight === index ? 'text-slate-200' : 'text-slate-500'
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Mini Live Status Ticker */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Interview to Offer in <strong>7 Business Days</strong></span>
                </div>

                <a href="#open-roles" className="text-[#004658] font-bold hover:underline">
                  Explore Perks →
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Candid Image (Top Aligned with Heading) */}
          <div className="lg:col-span-6 relative">
            
            {/* Visual Container with Asymmetric Curve Cut */}
            <div className="group relative rounded-3xl rounded-bl-[48px] overflow-hidden bg-slate-950 border border-slate-200/80 shadow-2xl transition-all duration-700 aspect-[4/3.3] sm:aspect-[4/3.2]">
              
              {/* High-Resolution Candid Team Image */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="CodeCrafter Team Working Together"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
              />

              {/* Cinematic Vignette Wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Shimmer Light Reflection Sweep Animation on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              {/* Creative Floating Badge 1 (Top-Left): Code • Create • Collaborate (Smooth Floating Animation) */}
              <div className="absolute top-4 left-4 z-20 animate-float-badge">
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-white/25 shadow-xl flex items-center gap-2">
                  <span className="text-cyan-300 animate-pulse">⚡</span>
                  <span>Code • Create • Collaborate</span>
                </div>
              </div>

              {/* Creative Floating Badge 2 (Top-Right): Live Hiring Pulse (Radar Ping Animation) */}
              <div className="absolute top-4 right-4 z-20 animate-float-badge-delayed">
                <div className="px-3.5 py-1.5 rounded-full bg-emerald-950/85 backdrop-blur-md text-emerald-300 text-[10.5px] font-mono font-bold border border-emerald-500/40 shadow-xl flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>We're Hiring</span>
                </div>
              </div>

              {/* Creative Floating Badge 3 (Middle-Left Hover Reveal): Live Code Snippet Pill */}
              <div className="absolute top-16 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 hidden sm:block">
                <div className="px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-cyan-400/30 text-[10px] font-mono text-cyan-200 shadow-lg">
                  <span className="text-slate-400">const</span> impact = <span className="text-emerald-300">await</span> buildNext()
                </div>
              </div>

              {/* Floating Element 4 (Bottom Overlay Info Box with Live Open Roles Counter) */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <h4 className="text-sm font-extrabold text-white leading-tight">
                      Studio Engineering Culture
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-200 font-normal">
                    Senior designers, full-stack builders, and product thinkers.
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 font-mono text-[10.5px] text-cyan-200 font-bold bg-[#004658]/90 px-3 py-1 rounded-lg border border-cyan-400/40 shadow-sm">
                  <span>6+ Open Roles</span>
                </div>
              </div>

            </div>

            {/* Subtle Ambient Accent Glow Ring Behind Image */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-[#004658]/25 rounded-full blur-2xl -z-10 pointer-events-none" />

          </div>

        </div>

      </div>
    </section>
  )
}

export default HeroCareer