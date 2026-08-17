import React from 'react'

const Values = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden" id="values">
      
      {/* Background Soft Glow (Apple Ambient Lighting) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.28) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Centered Minimal Header (Matching Vision/Mission Header) */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2.5 text-[#004658] font-bold text-xs uppercase tracking-widest mb-4">
            <span className="w-6 h-[2px] bg-[#004658] inline-block rounded-full" />
            <span>OUR VALUES</span>
            <span className="w-6 h-[2px] bg-[#004658] inline-block rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4">
            Principles Built for <span className="text-[#004658]">Impact</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
            Driven by clarity, engineered with precision, and built for lasting impact.
          </p>
        </div>

        {/* 3-Column Cards Grid (Identical Card Design to Vision/Mission) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Quality */}
          <div className="group relative p-8 sm:p-10 rounded-3xl bg-white/80 border border-[#004658]/15 shadow-sm hover:shadow-2xl hover:border-[#004658]/35 hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-[#004658] flex items-center justify-center text-2xl font-bold group-hover:bg-[#004658] group-hover:text-white transition-colors duration-300 shadow-sm">
                  ⚡
                </div>
                <span className="px-3 py-1 rounded-full bg-[#004658]/8 text-[#004658] text-[11px] font-semibold uppercase tracking-wider">
                  Value 01
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Uncompromised Quality
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Writing modular, scalable software with sub-second response times, clean architecture, and 99.9% enterprise reliability.
              </p>
            </div>

            <div className="mt-10 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#004658]">
              <span>Excellence First</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </div>

          {/* Card 2: Transparency */}
          <div className="group relative p-8 sm:p-10 rounded-3xl bg-white/80 border border-[#004658]/15 shadow-sm hover:shadow-2xl hover:border-[#004658]/35 hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-[#004658] flex items-center justify-center text-2xl font-bold group-hover:bg-[#004658] group-hover:text-white transition-colors duration-300 shadow-sm">
                  🤝
                </div>
                <span className="px-3 py-1 rounded-full bg-[#004658]/8 text-[#004658] text-[11px] font-semibold uppercase tracking-wider">
                  Value 02
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Radical Transparency
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Clear communication, honest estimates, and direct collaboration from initial blueprint to final product deployment.
              </p>
            </div>

            <div className="mt-10 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#004658]">
              <span>Trust Driven</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </div>

          {/* Card 3: Innovation */}
          <div className="group relative p-8 sm:p-10 rounded-3xl bg-white/80 border border-[#004658]/15 shadow-sm hover:shadow-2xl hover:border-[#004658]/35 hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-[#004658] flex items-center justify-center text-2xl font-bold group-hover:bg-[#004658] group-hover:text-white transition-colors duration-300 shadow-sm">
                  🚀
                </div>
                <span className="px-3 py-1 rounded-full bg-[#004658]/8 text-[#004658] text-[11px] font-semibold uppercase tracking-wider">
                  Value 03
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Continuous Innovation
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Pushing boundaries with modern tech stacks, cloud-native architecture, and future-proof design principles.
              </p>
            </div>

            <div className="mt-10 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#004658]">
              <span>Future Ready</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Values