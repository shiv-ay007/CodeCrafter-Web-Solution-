import React from 'react'

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden pt-36 sm:pt-44 pb-20 bg-[#FBFDFD]" id="hero">
      
      {/* Premium Apple-Style Radial Ambient Lighting */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none rounded-full opacity-60 blur-[120px] -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(0, 70, 88, 0.22) 0%, rgba(0, 134, 168, 0.08) 50%, rgba(251, 253, 253, 0) 80%)'
        }}
      />
      <div 
        className="absolute top-1/3 -right-20 w-[500px] h-[500px] pointer-events-none rounded-full opacity-30 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 134, 168, 0.2) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

        {/* Top Innovation Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#004658]/20 shadow-sm text-[#004658] text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-md hover:border-[#004658]/40 transition-colors cursor-pointer group">
          <span className="w-2 h-2 rounded-full bg-[#004658] animate-pulse shadow-[0_0_10px_#004658]" />
          <span>Next-Gen Web & Software Studio</span>
          <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">→</span>
        </div>

        {/* Display Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12] max-w-5xl mb-6">
          Engineering Digital Products <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#0086a8]">
            Built for Unmatched Scale
          </span>
        </h1>

        {/* Refined Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10 font-normal">
          We design and build bespoke web applications, enterprise software, and mobile studios tailored for ambitious brands worldwide.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#004658] text-white font-semibold text-base shadow-xl shadow-[#004658]/25 hover:bg-[#003442] hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#004658]/35 transition-all duration-200"
          >
            <span>Start Your Project</span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Secondary CTA */}
          <a
            href="#services"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/90 border border-[#004658]/20 text-[#004658] font-semibold text-base hover:bg-[#004658]/8 hover:border-[#004658]/35 hover:-translate-y-0.5 transition-all duration-200 shadow-sm backdrop-blur-md"
          >
            <span>Explore Services</span>
            <svg 
              className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Centerpiece Interactive Glass Studio Mockup */}
        <div className="relative w-full max-w-5xl mx-auto mb-16">
          
          {/* Main Glass Browser Mockup Card */}
          <div className="relative rounded-3xl border border-[#004658]/20 bg-white/80 shadow-[0_30px_70px_rgba(0,70,88,0.12)] backdrop-blur-2xl overflow-hidden p-3 sm:p-5 text-left">
            
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200/80 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>
              <div className="px-4 py-1 rounded-full bg-slate-100/90 text-[11px] font-mono text-slate-500 border border-slate-200/60 flex items-center gap-2">
                <svg className="w-3 h-3 text-[#004658]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>codecrafter.io/studio</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#004658]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="hidden sm:inline">System Live</span>
              </div>
            </div>

            {/* Mockup Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 sm:p-4">
              
              {/* Stat 1 */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#004658]/8 to-transparent border border-[#004658]/12 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-semibold text-[#004658] uppercase tracking-wider mb-2">
                  <span>Performance</span>
                  <span className="text-emerald-600 font-mono">+99.9%</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">Sub-Second</div>
                <p className="text-xs text-slate-500">Core Web Vitals & Instant Load</p>
              </div>

              {/* Stat 2 */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#004658]/8 to-transparent border border-[#004658]/12 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-semibold text-[#004658] uppercase tracking-wider mb-2">
                  <span>Architecture</span>
                  <span className="text-cyan-600 font-mono">100% Custom</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">Scalable Cloud</div>
                <p className="text-xs text-slate-500">Built for Millions of Users</p>
              </div>

              {/* Stat 3 */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#004658]/8 to-transparent border border-[#004658]/12 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-semibold text-[#004658] uppercase tracking-wider mb-2">
                  <span>User Experience</span>
                  <span className="text-teal-600 font-mono">Apple Style</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">Minimalist UI</div>
                <p className="text-xs text-slate-500">Human-Centered Product Design</p>
              </div>

            </div>

          </div>

          {/* Floating Glass Pill Badge Left */}
          <div className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-white/95 border border-[#004658]/20 shadow-2xl backdrop-blur-xl items-center gap-3 animate-bounce [animation-duration:4s]">
            <div className="w-9 h-9 rounded-xl bg-[#004658] text-white flex items-center justify-center font-bold text-sm shadow-md">
              ⚡
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">Ultra-Fast Loading</div>
              <div className="text-[10px] text-slate-500">60 FPS Smooth Motion</div>
            </div>
          </div>

          {/* Floating Glass Pill Badge Right */}
          <div className="hidden lg:flex absolute -right-6 top-1/3 p-4 rounded-2xl bg-white/95 border border-[#004658]/20 shadow-2xl backdrop-blur-xl items-center gap-3 animate-bounce [animation-duration:5s]">
            <div className="w-9 h-9 rounded-xl bg-[#004658]/10 text-[#004658] flex items-center justify-center font-bold text-sm">
              🛡️
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">Enterprise Security</div>
              <div className="text-[10px] text-slate-500">24/7 Monitored Architecture</div>
            </div>
          </div>

        </div>

        {/* Minimal Metrics Bar */}
        <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-12 px-8 py-4 bg-white/80 backdrop-blur-md border border-[#004658]/15 rounded-full shadow-sm">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-[#004658] tracking-tight">99.9%</div>
            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Uptime & Speed</div>
          </div>
          <div className="hidden sm:block w-px h-7 bg-[#004658]/20" />
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-[#004658] tracking-tight">50+</div>
            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Products Launched</div>
          </div>
          <div className="hidden sm:block w-px h-7 bg-[#004658]/20" />
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-[#004658] tracking-tight">100%</div>
            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Custom Architecture</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero