import React from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'Alex Rivera',
    role: 'Lead Architect',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    tag: 'Full-Stack'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'UI/UX Director',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    tag: 'Design'
  },
  {
    id: 3,
    name: 'Marcus Vance',
    role: 'Backend Specialist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    tag: '.NET & Node'
  },
  {
    id: 4,
    name: 'Elena Rostova',
    role: 'Cloud & DevOps',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    tag: 'AWS & Firebase'
  }
]

const TeamHero = () => {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden" id="team-hero">
      
      {/* Background Soft Glows (Teal Ambient Lighting) */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.35) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[500px] h-[350px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 216, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Minimal Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/15 text-[#004658] font-bold text-xs uppercase tracking-widest mb-6">
              <span className="text-sm">👨‍💻</span>
              <span>Meet Our Team</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
              The Innovators & <br className="hidden sm:inline" />
              <span className="text-[#004658] relative inline-block">
                Crafters
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#004658]/20" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span> Behind CodeCrafter
            </h1>

            {/* Short Minimalist Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              The passionate designers, developers, and innovators behind CodeCrafter, dedicated to building exceptional digital experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#careers"
                className="px-7 py-3.5 rounded-full bg-[#004658] text-white font-semibold text-sm hover:bg-[#003442] shadow-lg shadow-[#004658]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Join Us</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-white/90 border border-[#004658]/20 text-slate-800 font-semibold text-sm hover:text-[#004658] hover:border-[#004658]/40 hover:bg-slate-50 transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-2"
              >
                <span>Contact Team</span>
                <svg className="w-4 h-4 text-slate-400 group-hover:text-[#004658]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>

            {/* Quick Team Stats Pill */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 flex items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-semibold text-slate-800">25+ Tech Experts</span>
              </div>
              <span className="text-slate-300">•</span>
              <div>
                <span className="font-semibold text-slate-800">100% Remote-First</span>
              </div>
              <span className="text-slate-300">•</span>
              <div>
                <span className="font-semibold text-slate-800">Global Mindset</span>
              </div>
            </div>

          </div>

          {/* Right Side Avatar & Group Collage */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Outer Decorative Ring */}
            <div className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full border border-dashed border-[#004658]/20 animate-[spin_60s_linear_infinite]" />

            {/* Main Collage Container */}
            <div className="relative w-full max-w-md p-4">
              
              {/* Central Group Image Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white/90 border border-[#004658]/15 shadow-2xl backdrop-blur-xl group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="CodeCrafter Team Collaboration"
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider block">Culture & Synergy</span>
                    <h3 className="text-base font-bold">Building Digital Excellence</h3>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                    Worldwide
                  </span>
                </div>
              </div>

              {/* Top Floating Badge Card */}
              <div className="absolute -top-3 -right-2 sm:-right-4 p-3.5 rounded-2xl bg-white/95 border border-[#004658]/15 shadow-xl backdrop-blur-xl flex items-center gap-3 animate-[bounce_4s_infinite]">
                <div className="flex -space-x-2.5 overflow-hidden">
                  {teamMembers.map((m) => (
                    <img
                      key={m.id}
                      src={m.avatar}
                      alt={m.name}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <span className="block text-xs font-extrabold text-[#004658]">Joined Forces</span>
                  <span className="block text-[10px] text-slate-500 font-medium">+18 Specialists</span>
                </div>
              </div>

              {/* Bottom Floating Status Badge */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 p-3.5 rounded-2xl bg-white/95 border border-[#004658]/15 shadow-xl backdrop-blur-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#004658]/10 text-[#004658] flex items-center justify-center font-bold text-sm">
                  ⚡
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-900">Agile & Driven</span>
                  <span className="block text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Always Innovating
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default TeamHero