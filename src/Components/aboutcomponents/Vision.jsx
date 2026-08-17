import React from 'react'

const Vision = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden" id="vision">
      
      {/* Background Soft Glow (Apple Ambient Lighting) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.28) 0%, rgba(255, 255, 255, 0) 70%)'
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
            Driven by clarity, engineered with precision, and built for lasting impact.
          </p>
        </div>

        {/* 3-Column Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Our Vision */}
          <div className="group relative p-8 rounded-3xl bg-white/80 border border-[#004658]/15 shadow-sm hover:shadow-2xl hover:border-[#004658]/35 hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-[#004658] flex items-center justify-center text-2xl font-bold group-hover:bg-[#004658] group-hover:text-white transition-colors duration-300 shadow-sm">
                  👁️
                </div>
                <span className="px-3 py-1 rounded-full bg-[#004658]/8 text-[#004658] text-[11px] font-semibold uppercase tracking-wider">
                  Our Vision
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                Shaping Digital Future
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                To be a global technology studio recognized for building ultra-fast, human-centered digital products that transform businesses.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#004658]">
              <span>Future Oriented</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </div>

          {/* Card 2: Our Mission */}
          <div className="group relative p-8 rounded-3xl bg-white/80 border border-[#004658]/15 shadow-sm hover:shadow-2xl hover:border-[#004658]/35 hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-[#004658] flex items-center justify-center text-2xl font-bold group-hover:bg-[#004658] group-hover:text-white transition-colors duration-300 shadow-sm">
                  🎯
                </div>
                <span className="px-3 py-1 rounded-full bg-[#004658]/8 text-[#004658] text-[11px] font-semibold uppercase tracking-wider">
                  Our Mission
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                Empowering Growth
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                To craft modern web platforms, mobile apps, and custom software with sub-second speed, clean architecture, and precision.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#004658]">
              <span>Action Driven</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </div>

          {/* Card 3: Our Values */}
          <div className="group relative p-8 rounded-3xl bg-white/80 border border-[#004658]/15 shadow-sm hover:shadow-2xl hover:border-[#004658]/35 hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-[#004658] flex items-center justify-center text-2xl font-bold group-hover:bg-[#004658] group-hover:text-white transition-colors duration-300 shadow-sm">
                  💎
                </div>
                <span className="px-3 py-1 rounded-full bg-[#004658]/8 text-[#004658] text-[11px] font-semibold uppercase tracking-wider">
                  Our Values
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                Uncompromising Quality
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Rooted in technical excellence, client transparency, and human-centered design principles that put your success first.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#004658]">
              <span>Excellence First</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Vision