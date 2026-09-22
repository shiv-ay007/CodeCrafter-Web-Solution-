import React from 'react'
import { Compass, Radio, Terminal } from 'lucide-react'

const Vision = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden" id="vision">
      
      {/* Background Soft Ambient Lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none rounded-full opacity-15 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 216, 255, 0.25) 0%, rgba(0, 70, 88, 0.15) 50%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Centered Minimal Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2.5 text-[#004658] font-bold text-xs uppercase tracking-widest mb-4">
            <span className="w-6 h-[2px] bg-[#004658] inline-block rounded-full" />
            <span>OUR PURPOSE</span>
            <span className="w-6 h-[2px] bg-[#004658] inline-block rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4">
            Vision, Mission & <span className="text-[#004658]">Values</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
            The purpose and principle that guide everything we build.
          </p>
        </div>

        {/* Ultra-Premium Dark Navy Dashboard Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#011219] via-[#021824] to-[#010c13] border border-cyan-500/20 p-8 sm:p-12 text-white shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(0,70,88,0.2)] backdrop-blur-2xl overflow-hidden group hover:border-cyan-400/35 transition-all duration-500">
          
          {/* Subtle Corner Radial Glows */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#004658]/30 blur-3xl pointer-events-none" />

          {/* Minimalist Dashboard Header Status Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 sm:mb-10 border-b border-white/10 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono font-semibold tracking-widest text-white uppercase">
                  STRATEGIC DIRECTIVES
                </div>
                <div className="text-[10px] font-mono text-cyan-300/70">
                  SYS://VISION-MISSION-CORE
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>CORE PURPOSE</span>
            </div>
          </div>

          {/* Grid Layout: Left Side Vision & Mission Text | Right Side Minimal Animated Circular Graphic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Side: Vision & Mission Text */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Our Vision */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-semibold tracking-widest uppercase">
                    OUR VISION
                  </span>
                  <span className="text-slate-400 text-xs font-mono">Future Oriented</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight leading-snug">
                  Shaping Digital Future
                </h3>
                <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                  To become the go-to engineering partner for ambitious brands building the next generation of digital products — where speed, quality, and craftsmanship are never a trade-off.
                </p>
              </div>

              {/* Sleek Gradient Divider */}
              <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/30 via-slate-700/50 to-transparent my-6" />

              {/* Our Mission */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-semibold tracking-widest uppercase">
                    OUR MISSION
                  </span>
                  <span className="text-slate-400 text-xs font-mono">Action Driven</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight leading-snug">
                  Empowering Growth
                </h3>
                <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                  We help founders and enterprises ship production-grade software faster, by pairing elite engineering squads with predictable sprint cycles and full transparency — from architecture to deployment.
                </p>
              </div>

            </div>

            {/* Right Side: Sleek Minimal Animated Circular Compass/Radar Graphic (NO TEXT) */}
            <div className="lg:col-span-5 flex items-center justify-center pt-6 lg:pt-0">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                
                {/* Ambient Radial Soft Aura */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-[#004658]/30 to-transparent rounded-full blur-3xl opacity-60 animate-pulse" />

                {/* Outer Delicate Rotating Ring */}
                <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-[spin_35s_linear_infinite]" />

                {/* Orbiting Cyan Glow Satellite Dot */}
                <div className="absolute inset-0 animate-[spin_18s_linear_infinite]">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#00D8FF] -top-1.2 left-1/2 -translate-x-1/2 absolute" />
                </div>

                {/* Middle Rotating Dashed Ring */}
                <div className="absolute inset-6 rounded-full border border-dashed border-cyan-500/25 animate-[spin_24s_linear_infinite_reverse]" />

                {/* Radar Pulse Wave Animation */}
                <div className="absolute inset-14 rounded-full border border-cyan-400/35 animate-ping [animation-duration:3.5s]" />

                {/* Inner Concentric Circle with Thin Grid Lines */}
                <div className="absolute inset-10 rounded-full border border-cyan-500/25 bg-[#011925]/60 backdrop-blur-md flex items-center justify-center">
                  <div className="absolute w-full h-[1px] bg-cyan-500/15" />
                  <div className="absolute h-full w-[1px] bg-cyan-500/15" />
                </div>

                {/* Center Minimal Glass Core with Pulsing Compass Icon (NO TEXT) */}
                <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#022836] via-[#011824] to-[#001017] border border-cyan-400/40 shadow-[0_0_30px_rgba(0,216,255,0.25)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  
                  {/* Subtle Glow Ring around Compass */}
                  <div className="absolute inset-2 rounded-full border border-cyan-400/20 animate-pulse" />

                  {/* Pulsing Compass Icon */}
                  <div className="relative flex items-center justify-center">
                    <Compass className="w-12 h-12 sm:w-14 sm:h-14 text-cyan-300 animate-pulse drop-shadow-[0_0_15px_rgba(0,216,255,0.6)]" />
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Vision