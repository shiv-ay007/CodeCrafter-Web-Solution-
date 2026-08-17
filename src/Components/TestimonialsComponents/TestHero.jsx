import React from 'react'

const TestHero = () => {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden" id="client-stories">
      
      {/* Background Soft Ambient Glows */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.35) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />
      <div 
        className="absolute bottom-10 right-1/4 w-[550px] h-[380px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 216, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      {/* Floating Badge CSS Animations */}
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
        .animate-float-card {
          animation: float-smooth 5s ease-in-out infinite;
        }
        .animate-float-card-delayed {
          animation: float-reverse 6s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10">
        
        {/* Main 2-Column Responsive Layout: Top Aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Premium & Minimalist Copy */}
          <div className="lg:col-span-6 text-left pt-1">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] font-mono font-bold uppercase tracking-wider mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CLIENT STORIES</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-5">
              Words That Speak For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00a8cc]">Our Work.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              Real experiences from the people and teams we've had the opportunity to build with.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#stories"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#004658] text-white font-bold text-xs sm:text-sm hover:bg-[#003442] shadow-lg shadow-[#004658]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Read Their Stories</span>
                <span className="text-base">↓</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/90 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-50 hover:border-[#004658]/40 hover:text-[#004658] shadow-sm transition-all duration-200"
              >
                <span>Schedule Partner Call</span>
              </a>
            </div>

            {/* Bottom Minimalist Client Metrics Strip */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <span className="text-amber-500">★★★★★</span>
                <span className="text-slate-900 font-bold">4.9 / 5.0</span>
                <span>Average Client Score</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" />
                <span>98% Multi-Year Retention</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Testimonial Spotlight & Floating Rating Card */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Visual Testimonial Card with Asymmetric Curve Cut */}
            <div className="group relative rounded-3xl rounded-bl-[48px] overflow-hidden bg-slate-950 border border-slate-200/90 shadow-2xl transition-all duration-700 p-7 sm:p-9 text-white flex flex-col justify-between min-h-[420px]">
              
              {/* Background Authentic Client Portrait (Subtle Dark Wash) */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
                alt="David Sterling, CTO"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
              />

              {/* Ambient Dark Gradient Wash for Maximum Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/60 pointer-events-none" />

              {/* Top Floating Rating Chip */}
              <div className="relative z-10 flex items-center justify-between gap-3 mb-6">
                <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-2">
                  <span className="text-amber-400 text-xs">★★★★★</span>
                  <span className="text-white text-[11px] font-mono font-bold">5.0 / 5.0</span>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#004658]/80 text-cyan-200 text-[10.5px] font-mono font-bold border border-cyan-400/30 shadow-md">
                  Verified Enterprise Review
                </span>
              </div>

              {/* Large Featured Executive Testimonial Quote */}
              <div className="relative z-10 my-auto">
                <svg className="w-8 h-8 text-cyan-400/40 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed italic">
                  “CodeCrafter engineered our real-time core architecture with sub-45ms response times. Their team thinks like founders and executes like elite architects.”
                </p>
              </div>

              {/* Bottom Client Metadata & Secondary Reviewer Pill */}
              <div className="relative z-10 pt-5 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-md shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                      alt="David Sterling"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white leading-tight">
                      David Sterling
                    </h4>
                    <p className="text-[11px] text-cyan-200 font-medium">
                      CTO & Co-Founder, NovaPulse FinTech
                    </p>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-[10.5px] font-mono text-slate-300 border border-white/15 shrink-0">
                  <span>FinTech SaaS Core</span>
                </div>
              </div>

            </div>

            {/* Floating Mini Testimonial Pill (Bottom Right Accent) */}
            <div className="absolute -bottom-5 right-4 z-20 animate-float-card hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl text-slate-900">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#004658]/30 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Sarah Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left pr-2">
                <div className="text-[11px] font-extrabold text-[#004658] leading-tight">
                  Sarah Chen • VP Product
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  “+142% Checkout Conversion Rate”
                </div>
              </div>
            </div>

            {/* Subtle Ambient Accent Glow Ring Behind Card */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-[#004658]/25 rounded-full blur-2xl -z-10 pointer-events-none" />

          </div>

        </div>

      </div>
    </section>
  )
}

export default TestHero