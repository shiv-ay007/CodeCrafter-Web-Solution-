import React, { useState } from 'react'

const lifeMoments = [
  {
    id: 1,
    title: 'Open Tech Campuses & Glass Pods',
    category: 'Collaborative Hubs',
    subtitle: 'Ergonomic standing desks, acoustic call booths, and open atrium debate lounges.',
    badge: 'Campus Life',
    kpi: '100% Ergonomic Setup',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'lg:col-span-4 h-[320px] sm:h-[360px]'
  },
  {
    id: 2,
    title: 'Deep Engineering Flow Zones',
    category: 'Deep Focus',
    subtitle: 'Quiet library-style concentration zones for uninterrupted architectural design.',
    badge: 'Deep Work',
    kpi: 'Zero Distractions',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'lg:col-span-2 h-[320px] sm:h-[360px]'
  },
  {
    id: 3,
    title: 'Global Townhalls & Demo Days',
    category: 'Townhalls',
    subtitle: 'Bi-weekly live transparent updates directly with executive architects.',
    badge: 'Executive Sync',
    kpi: 'Transparent Ops',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'lg:col-span-2 h-[320px] sm:h-[360px]'
  },
  {
    id: 4,
    title: 'Quarterly AI & Cloud Hackathons',
    category: 'Innovation Labs',
    subtitle: '48 hours of pure prototyping, experimental microservices, and product incubation.',
    badge: 'R&D Labs',
    kpi: '$10k Innovation Grants',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'lg:col-span-4 h-[320px] sm:h-[360px]'
  },
  {
    id: 5,
    title: 'Artisanal Barista & Chill Lounges',
    category: 'Wellness',
    subtitle: 'Recharging with single-origin pour-overs, casual chess matches, and peer chats.',
    badge: 'Recharge Hub',
    kpi: 'Unlimited Specialty Brews',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'lg:col-span-3 h-[300px] sm:h-[340px]'
  },
  {
    id: 6,
    title: 'Global Offsites & Team Retreats',
    category: 'Retreats',
    subtitle: 'Connecting beyond screens in mountain resorts and coastal hackaways.',
    badge: 'Global Culture',
    kpi: 'Annual Global Offsite',
    img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'lg:col-span-3 h-[300px] sm:h-[340px]'
  }
]

const categories = ['All Life Moments', 'Collaborative Hubs', 'Deep Focus', 'Townhalls', 'Innovation Labs', 'Wellness']

const LifeAtCode = () => {
  const [activeCategory, setActiveCategory] = useState('All Life Moments')
  const [selectedMoment, setSelectedMoment] = useState(null)

  const filteredMoments = activeCategory === 'All Life Moments'
    ? lifeMoments
    : lifeMoments.filter((m) => m.category === activeCategory)

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden" id="life-at-codecrafter">
      
      {/* Background Soft Glows */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.35) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10">
        
        {/* HCL/TCS Style Corporate Centered Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] font-mono font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>🏢 03 — LIFE AT CODECRAFTER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Where Technical Craft Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00a8cc]">Empowered Living</span>
          </h2>
          
          <p className="mt-3.5 text-xs sm:text-sm text-slate-600 font-medium max-w-2xl leading-relaxed">
            Step inside our modern tech campuses, asynchronous collaborative spaces, wellness lounges, and annual global hackaways.
          </p>

          {/* Minimalist Corporate Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100/90 border border-slate-200 rounded-xl shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#004658] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 100% Full-Width Balanced 6-Column Enterprise Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-14">
          {filteredMoments.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMoment(item)}
              className={`group relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/80 shadow-md hover:border-[#004658]/50 hover:shadow-2xl hover:shadow-[#004658]/15 hover:-translate-y-1.5 transition-all duration-700 ease-out cursor-pointer select-none flex flex-col justify-between ${
                activeCategory === 'All Life Moments' ? item.gridClass : 'lg:col-span-3 h-[320px] sm:h-[350px]'
              }`}
            >
              {/* High-Resolution Enterprise Photo */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
              />

              {/* Cinematic Vignette Wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20 group-hover:from-slate-950/95 group-hover:via-slate-950/40 transition-all duration-500 pointer-events-none" />

              {/* Top Floating Badges */}
              <div className="relative top-4 left-4 right-4 flex items-center justify-between z-10 px-0">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-white/20 shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{item.badge}</span>
                </span>

                <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30 shadow-md">
                  {item.kpi}
                </span>
              </div>

              {/* Bottom Caption & Detail Reveal */}
              <div className="relative bottom-0 left-0 right-0 p-5 sm:p-6 z-10 text-left">
                <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>

                <h3 className="text-lg sm:text-xl font-black text-white leading-tight mb-1 group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[12.5px] text-slate-300 font-normal leading-relaxed line-clamp-1">
                  {item.subtitle}
                </p>

                {/* Interactive Link */}
                <div className="mt-2.5 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] font-bold text-slate-300 group-hover:text-cyan-300 transition-colors">
                  <span>Explore Life at Crafter</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Corporate Trust Strip & Metrics (HCL/TCS Campus Pride Bar) */}
        <div className="p-7 sm:p-8 bg-white/90 border border-slate-200/90 rounded-3xl rounded-bl-[40px] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h4 className="text-base sm:text-lg font-black text-slate-900 mb-1">
              Ranked Top 1% in Engineering Culture & Work-Life Harmony
            </h4>
            <p className="text-xs text-slate-600 max-w-xl font-normal">
              Flexible hybrid hubs across San Francisco, London, Bangalore, and Berlin — built for makers, by makers.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-center shrink-0">
            <div className="border-r border-slate-200 pr-6">
              <span className="text-xl sm:text-2xl font-black text-[#004658] block">96%</span>
              <span className="text-[10.5px] font-mono text-slate-500 uppercase font-bold">Engineer Retention</span>
            </div>
            <div className="border-r border-slate-200 pr-6">
              <span className="text-xl sm:text-2xl font-black text-[#004658] block">4.9★</span>
              <span className="text-[10.5px] font-mono text-slate-500 uppercase font-bold">Glassdoor Rating</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-[#004658] block">100%</span>
              <span className="text-[10.5px] font-mono text-slate-500 uppercase font-bold">Async Friendly</span>
            </div>
          </div>
        </div>

        {/* Modal Lightbox for Full Inspection */}
        {selectedMoment && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedMoment(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedMoment.img}
                alt={selectedMoment.title}
                className="w-full max-h-[70vh] object-cover"
              />
              <div className="p-6 sm:p-7 text-left text-white bg-slate-950">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#004658] text-cyan-200 text-xs font-mono font-bold">
                    {selectedMoment.badge} • {selectedMoment.kpi}
                  </span>
                  <button
                    onClick={() => setSelectedMoment(null)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center transition-colors cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold mb-1">
                  {selectedMoment.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {selectedMoment.subtitle}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default LifeAtCode