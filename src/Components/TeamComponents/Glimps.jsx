import React, { useState } from 'react'

const galleryMoments = [
  {
    id: 1,
    title: 'Collaborative Product Reviews',
    category: 'Discussions',
    subtitle: 'Cross-functional debates on UX flows and edge cases.',
    tag: 'Team Discussion',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'lg:col-span-4 h-[300px] sm:h-[340px]',
    highlight: 'Sprint Standup'
  },
  {
    id: 2,
    title: 'Deep Focus Coding Sprints',
    category: 'Coding & Sprints',
    subtitle: 'Refining type-safe schemas & real-time event queues.',
    tag: 'Engineering',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'lg:col-span-2 h-[300px] sm:h-[340px]',
    highlight: 'Architecture'
  },
  {
    id: 3,
    title: 'Whiteboard Strategy Sessions',
    category: 'Brainstorming',
    subtitle: 'Mapping distributed microservices & database schemas.',
    tag: 'Brainstorming',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'lg:col-span-2 h-[300px] sm:h-[340px]',
    highlight: 'System Logic'
  },
  {
    id: 4,
    title: 'Transparent Client Alignment',
    category: 'Discussions',
    subtitle: 'Demonstrating live staging builds every 14 days.',
    tag: 'Meetings',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'lg:col-span-4 h-[300px] sm:h-[340px]',
    highlight: 'Sprint Demo'
  },
  {
    id: 5,
    title: 'Pixel Perfection & QA Checks',
    category: 'Coding & Sprints',
    subtitle: 'Inspecting typography scale, contrast, and 60fps motion.',
    tag: 'Design QA',
    img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'lg:col-span-3 h-[280px] sm:h-[320px]',
    highlight: 'Figma to Code'
  },
  {
    id: 6,
    title: 'Studio Culture & Espresso Breaks',
    category: 'Studio Life',
    subtitle: 'Recharging over coffee and creative product brainstorming.',
    tag: 'Office Moments',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'lg:col-span-3 h-[280px] sm:h-[320px]',
    highlight: 'Studio Vibes'
  }
]

const categories = ['All Moments', 'Discussions', 'Coding & Sprints', 'Brainstorming', 'Studio Life']

const Glimps = () => {
  const [activeCategory, setActiveCategory] = useState('All Moments')
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const filteredMoments = activeCategory === 'All Moments'
    ? galleryMoments
    : galleryMoments.filter((m) => m.category === activeCategory)

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden" id="glimpse">
      
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.3) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10">
        
        {/* Minimalist Centered Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>📸 A GLIMPSE BEHIND THE SCENES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            How We Build & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00a8cc]">Collaborate</span>
          </h2>
          
          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium max-w-xl">
            Candid moments from team discussions, deep engineering flow, whiteboard sessions, and studio energy.
          </p>

          {/* Minimalist Filter Tabs */}
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

        {/* 100% Full-Width Balanced Bento Grid (Zero Empty Space on Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-14">
          {filteredMoments.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/80 shadow-md hover:border-[#004658]/40 hover:shadow-2xl hover:shadow-[#004658]/15 hover:-translate-y-1.5 transition-all duration-700 ease-out cursor-pointer select-none flex flex-col justify-between ${
                activeCategory === 'All Moments' ? item.gridClass : 'lg:col-span-3 h-[300px] sm:h-[340px]'
              }`}
            >
              {/* High-Definition Candid Visual Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
              />

              {/* Cinematic Vignette Overlay (Dark Gradient for Maximum Readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20 group-hover:from-slate-950/95 group-hover:via-slate-950/40 transition-all duration-500 pointer-events-none" />

              {/* Top Floating Glass Badges */}
              <div className="relative top-4 left-4 right-4 flex items-center justify-between z-10 px-0">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-white/20 shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{item.tag}</span>
                </span>

                <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/20 shadow-md">
                  {item.highlight}
                </span>
              </div>

              {/* Bottom Caption & Detail Reveal on Hover */}
              <div className="relative bottom-0 left-0 right-0 p-5 z-10 text-left">
                <span className="text-[10.5px] font-mono font-bold text-cyan-300 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>

                <h3 className="text-lg sm:text-xl font-black text-white leading-tight mb-1 group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[12.5px] text-slate-300 font-normal leading-relaxed line-clamp-1">
                  {item.subtitle}
                </p>

                {/* Subtle Click to Inspect Indicator */}
                <div className="mt-2.5 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] font-bold text-slate-300 group-hover:text-cyan-300 transition-colors">
                  <span>View Studio Snapshot</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Minimalist Bottom Culture Strip */}
        <div className="p-6 sm:p-7 bg-white/90 border border-slate-200/90 rounded-3xl rounded-bl-[40px] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-black text-slate-900 mb-1">
              Want to experience our engineering sprints firsthand?
            </h4>
            <p className="text-xs text-slate-600 max-w-xl font-normal">
              Join our weekly demo calls or invite our architects to co-design your next digital breakthrough.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#004658] text-white font-bold text-xs hover:bg-[#003442] shadow-md shadow-[#004658]/20 hover:scale-105 transition-all duration-200 shrink-0"
          >
            <span>Book A Studio Tour</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Modal Lightbox for Instant Full Photo Inspection */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedPhoto(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.img}
                alt={selectedPhoto.title}
                className="w-full max-h-[70vh] object-cover"
              />
              <div className="p-6 sm:p-7 text-left text-white bg-slate-950">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#004658] text-cyan-200 text-xs font-mono font-bold">
                    {selectedPhoto.tag}
                  </span>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center transition-colors cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold mb-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {selectedPhoto.subtitle}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default Glimps