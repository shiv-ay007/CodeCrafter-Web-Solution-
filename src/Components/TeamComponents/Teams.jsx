import React, { useState } from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'Alex Vance',
    role: 'Lead Architect & Full-Stack',
    category: 'Engineering',
    tag: 'Full-Stack Lead',
    exp: '8+ Yrs Exp',
    projects: '45+ Projects',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
    tagline: 'High-Performance React & Cloud Microservices',
    skills: ['React', 'Next.js 14', 'Node.js', 'PostgreSQL']
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'UI/UX Director & Design Lead',
    category: 'Design',
    tag: 'Design System',
    exp: '6+ Yrs Exp',
    projects: '60+ Designs',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85',
    tagline: 'Human-Centered Interfaces & Figma Systems',
    skills: ['Figma', 'UI/UX', 'Design Systems', 'Tailwind']
  },
  {
    id: 3,
    name: 'Marcus Sterling',
    role: 'Principal Backend Engineer',
    category: 'Engineering',
    tag: '.NET & Microservices',
    exp: '7+ Yrs Exp',
    projects: '38+ Backends',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85',
    tagline: 'Enterprise .NET Core & Distributed APIs',
    skills: ['.NET Core', 'C#', 'Express', 'MongoDB']
  },
  {
    id: 4,
    name: 'Elena Rostova',
    role: 'Cloud & DevOps Architect',
    category: 'Cloud',
    tag: 'AWS & DevOps',
    exp: '9+ Yrs Exp',
    projects: '50+ Deployments',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1000&q=85',
    tagline: 'Automated CI/CD & 99.99% Cloud Scalability',
    skills: ['AWS', 'Firebase', 'Docker', 'Kubernetes']
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Senior Mobile Engineer',
    category: 'Engineering',
    tag: 'Mobile Studio',
    exp: '5+ Yrs Exp',
    projects: '30+ Apps',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85',
    tagline: 'Fluid 60 FPS Native iOS & Flutter Apps',
    skills: ['Flutter', 'React Native', 'Swift', 'REST APIs']
  },
  {
    id: 6,
    name: 'Sophia Patel',
    role: 'Product Strategist & Lead',
    category: 'Design',
    tag: 'Product Lead',
    exp: '7+ Yrs Exp',
    projects: '40+ Sprints',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85',
    tagline: 'Agile Product Roadmap & Iterative Delivery',
    skills: ['Agile', 'Scrum', 'User Research', 'Strategy']
  }
]

const categories = ['All Leaders', 'Engineering', 'Design', 'Cloud']

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('All Leaders')

  const filteredMembers = activeCategory === 'All Leaders'
    ? teamMembers
    : teamMembers.filter((m) => m.category === activeCategory)

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden" id="team">
      
      {/* Background Ambient Soft Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.25) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10">
        
        {/* Centered Minimalist Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
            <span className="w-1.5 h-1.5 rounded-sm bg-[#004658] animate-pulse" />
            Leadership & Core Team
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Crafting Digital Futures <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#0086a8]">Together</span>
          </h2>

          {/* Minimalist Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100/90 border border-slate-200 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
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

        {/* Unique Minimalist HD Portrait Grid (Full-Bleed High-Definition Aesthetic) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl overflow-hidden aspect-[3/3.8] sm:aspect-[3/3.9] bg-slate-950 border border-slate-200/80 shadow-sm hover:border-[#004658]/40 hover:shadow-2xl hover:shadow-[#004658]/20 hover:-translate-y-2.5 transition-all duration-700 ease-out cursor-pointer flex flex-col justify-between p-6 select-none text-left"
            >
              {/* Full HD Background Portrait (Edge-to-Edge Crystal Clear) */}
              <img
                src={member.img}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
              />

              {/* Natural Dark Gradient Overlay for Maximum Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20 group-hover:from-slate-950/95 group-hover:via-slate-950/40 transition-all duration-500 pointer-events-none" />

              {/* Top Floating Glass Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/20 shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{member.tag}</span>
                </span>

                <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/20">
                  {member.exp}
                </span>
              </div>

              {/* Bottom Minimalist Typography & Specs */}
              <div className="relative z-10">
                <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-widest block mb-1">
                  {member.role}
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-1.5">
                  {member.name}
                </h3>

                <p className="text-xs text-slate-300 font-normal leading-relaxed mb-3 line-clamp-2">
                  {member.tagline}
                </p>

                {/* Skills Pill Row */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/15">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10.5px] font-medium bg-white/15 backdrop-blur-sm text-slate-200 border border-white/20 group-hover:border-cyan-400/40 group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Minimalist Bottom Banner */}
        <div className="p-6 sm:p-8 bg-white/80 backdrop-blur-xl border border-slate-200/90 rounded-2xl rounded-bl-[40px] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
              Want to collaborate with our engineering team?
            </h3>
            <p className="text-xs text-slate-600 max-w-lg font-normal">
              We engineer scalable software, custom design systems, and cloud infrastructure for fast-growing businesses.
            </p>
          </div>

          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#004658] text-white font-bold text-xs hover:bg-[#003442] shadow-md shadow-[#004658]/20 hover:scale-105 transition-all duration-200 shrink-0"
          >
            <span>Schedule A Call</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Team;