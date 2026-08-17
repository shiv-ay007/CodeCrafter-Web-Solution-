import React, { useState, useRef } from 'react'


const techPartners = [
  {
    id: 'react',
    name: 'React 19',
    role: 'UI Library',
    color: '#00D8FF',
    badge: 'Core UI',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="10" fill="#00D8FF" className="animate-pulse" />
        <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="5.5" />
        <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="5.5" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="5.5" transform="rotate(120 50 50)" />
      </svg>
    )
  },
  {
    id: 'nextjs',
    name: 'Next.js 15',
    role: 'Edge Framework',
    color: '#0F172A',
    badge: 'Full Stack',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#0F172A" />
        <path d="M42 42V86H50V56.5L81 94.5C83.5 92.5 86 90 88 87.5L47.5 38.5C44 39.5 42 42 42 42Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    role: 'Enterprise CMS',
    color: '#0073AA',
    badge: 'Custom CMS',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#0073AA" />
        <path d="M64 12C35.3 12 12 35.3 12 64C12 79.8 19.1 94 30.3 103.6L16.4 64.9C16.4 64.7 16.4 64.4 16.4 64.2C16.4 56.6 22 51.5 28.2 51.5C28.8 51.5 29.4 51.6 30 51.7L46.8 100.8C52.2 103.5 58 105 64 105C70.6 105 76.9 103.3 82.5 100.2L98.5 51.7C99.1 51.6 99.6 51.5 100.2 51.5C106 51.5 111.6 56.6 111.6 64.2C111.6 64.4 111.6 64.7 111.6 64.9L97.7 103.6C108.9 94 116 79.8 116 64C116 35.3 92.7 12 64 12ZM42.6 111.8L28.8 73.1C26.7 79 25.5 85.4 25.5 92C25.5 99.4 27.2 106.3 30.2 112.5L42.6 111.8ZM85.4 111.8L97.8 112.5C100.8 106.3 102.5 99.4 102.5 92C102.5 85.4 101.3 79 99.2 73.1L85.4 111.8Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'shopify',
    name: 'Shopify Plus',
    role: 'E-Commerce',
    color: '#95BF47',
    badge: 'High Scale',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <path d="M103.5 35.5L92 28.5L78.5 20L64.5 11.5L50.5 20L37 28.5L25.5 35.5L16 41.5L29 110.5L64.5 119.5L100 110.5L113 41.5L103.5 35.5Z" fill="#95BF47" />
        <path d="M64.5 11.5L50.5 20L37 28.5L25.5 35.5L16 41.5L29 110.5L64.5 119.5V11.5Z" fill="#5E8E3E" />
        <path d="M64.5 42C64.5 42 57.5 42 54 44C50.5 46 47 50.5 47 56C47 62 51 65.5 56 67.5L67 72C71 73.5 73 75.5 73 79C73 83.5 69.5 87 64.5 87C58.5 87 54.5 82.5 54.5 82.5L51 90C51 90 56.5 95 64.5 95C74 95 81.5 88 81.5 78.5C81.5 70.5 76 66.5 70 64L59.5 59.5C56.5 58 55.5 56.5 55.5 54.5C55.5 51.5 58 49.5 62 49.5C66.5 49.5 70 52 70 52L73.5 44C73.5 44 69.5 42 64.5 42Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'framer',
    name: 'Framer',
    role: 'Interactive Web',
    color: '#0055FF',
    badge: '60 FPS Motion',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <path d="M24 16H104V56H64L24 16Z" fill="#0055FF" />
        <path d="M24 56H64L104 96H24V56Z" fill="#0055FF" />
        <path d="M24 96H64V136L24 96Z" fill="#0055FF" />
      </svg>
    )
  },
  {
    id: 'figma',
    name: 'Figma',
    role: 'UI/UX Design',
    color: '#A259FF',
    badge: 'Design System',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <path d="M42 110C51.9411 110 60 101.941 60 92V74H42C32.0589 74 24 82.0589 24 92C24 101.941 32.0589 110 42 110Z" fill="#0ACF83" />
        <path d="M24 56C24 46.0589 32.0589 38 42 38H60V74H42C32.0589 74 24 65.9411 24 56Z" fill="#A259FF" />
        <path d="M24 20C24 10.0589 32.0589 2 42 2H60V38H42C32.0589 38 24 29.9411 24 20Z" fill="#F24E1E" />
        <path d="M60 2H78C87.9411 2 96 10.0589 96 20C96 29.9411 87.9411 38 78 38H60V2Z" fill="#FF7262" />
        <circle cx="78" cy="56" r="18" fill="#1ABCFE" />
      </svg>
    )
  },
  {
    id: 'webflow',
    name: 'Webflow',
    role: 'Visual Dev',
    color: '#146EF5',
    badge: 'Visual Code',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <path d="M124.6 36.4L86.8 91.6H58.4L44.2 60.8L30 91.6H1.6L39.4 36.4H67.8L82 67.2L96.2 36.4H124.6Z" fill="#146EF5" />
      </svg>
    )
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    role: 'Design Engine',
    color: '#06B6D4',
    badge: 'Zero Runtime',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <path d="M34 40C40 26.6667 52 20 70 20C97 20 100 40 112 44C120 46.6667 125.333 44 128 36C122 49.3333 110 56 92 56C65 56 62 36 50 32C42 29.3333 36.6667 32 34 40ZM0 80C6 66.6667 18 60 36 60C63 60 66 80 78 84C86 86.6667 91.3333 84 94 76C88 89.3333 76 96 58 96C31 96 28 76 16 72C8 69.3333 2.66667 72 0 80Z" fill="#06B6D4" />
      </svg>
    )
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    role: 'Type Safety',
    color: '#3178C6',
    badge: '100% Strict',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#3178C6" />
        <path d="M72 40H36V52H48V96H60V52H72V40Z" fill="#FFFFFF" />
        <path d="M74 84C77 91 84 96 95 96C105 96 112 89 112 80C112 70 103 66 94 63C86 60 81 58 81 54C81 50 85 47 91 47C96 47 100 50 102 55L111 49C107 43 100 38 91 38C80 38 71 44 71 54C71 64 79 68 89 72C98 75 102 77 102 82C102 87 97 89 91 89C84 89 79 84 77 78L74 84Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'stripe',
    name: 'Stripe Pay',
    role: 'Global Checkout',
    color: '#635BFF',
    badge: 'Payments',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#635BFF" />
        <path d="M58 54C58 50 62 48 68 48C74 48 81 50 86 53L89 42C83 39 76 38 68 38C52 38 43 46 43 56C43 72 65 70 65 80C65 84 60 86 54 86C46 86 38 83 32 79L29 90C36 94 45 96 54 96C71 96 81 88 81 77C81 60 58 63 58 54Z" fill="#FFFFFF" />
      </svg>
    )
  }
]

const Trusted = () => {
  const containerRef = useRef(null)
  const [activeTech, setActiveTech] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'marquee'

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#F0F7F9] via-[#F6FAFB] to-[#FBFDFD] text-slate-900 overflow-hidden select-none"
      id="trusted-technologies"
    >
      {/* 1. Precision Teal Dot Matrix Background */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none -z-20"
        style={{
          backgroundImage: 'radial-gradient(#004658 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* 2. Signature Animated Brand Aurora Glow Spheres (#004658 & #00D8FF) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] rounded-full blur-[110px] opacity-40 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 70, 88, 0.28) 0%, rgba(0, 216, 255, 0.2) 50%, transparent 80%)'
          }}
        />

        <div
          className="absolute top-1/2 -left-20 w-80 h-80 rounded-full blur-[100px] opacity-25 animate-[spin_20s_linear_infinite]"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(0, 70, 88, 0.15) 70%, transparent 100%)'
          }}
        />

        <div
          className="absolute top-1/2 -right-20 w-80 h-80 rounded-full blur-[100px] opacity-25 animate-[spin_24s_linear_infinite_reverse]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 216, 255, 0.25) 0%, rgba(0, 70, 88, 0.12) 70%, transparent 100%)'
          }}
        />
      </div>

      {/* 3. Interactive Cursor Spotlight */}
      {isHovered && (
        <div
          className="absolute pointer-events-none -inset-px transition-opacity duration-300 opacity-100 -z-5"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 70, 88, 0.08), transparent 80%)`
          }}
        />
      )}

      {/* 4. Master Frosted Glass Theme Container */}
      <div className="relative max-w-7xl mx-auto rounded-3xl bg-white/90 backdrop-blur-2xl border border-slate-200/90 p-6 sm:p-9 shadow-xl shadow-[#004658]/8 overflow-hidden">
        
        {/* Animated Brand Scanning Laser Accent Beam */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#004658] to-transparent opacity-60 animate-[pulse_3s_ease-in-out_infinite]" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-7 pb-4 border-b border-slate-100 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D8FF] animate-ping" />
              <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#004658] uppercase">
                TRUSTED TECHNOLOGIES & ECOSYSTEM
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Engineered with Silicon-Grade Precision
            </h3>
          </div>

          {/* Right Controls: View Switcher + Status Badge */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[11px] font-mono font-bold text-[#004658]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Zero Legacy Debt
            </span>

            {/* Mode Switcher */}
            <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200 shadow-2xs">
              <button
                onClick={() => setViewMode('grid')}
                title="Grid Matrix Mode"
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#004658] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('marquee')}
                title="Streaming Marquee Mode"
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  viewMode === 'marquee'
                    ? 'bg-[#004658] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Stream ⚡
              </button>
            </div>
          </div>
        </div>

        {/* 5. TECH LOGO DISPLAY (FULL-CARD WATERMARK BACKGROUND ON EVERY CARD) */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
            {techPartners.map((tech) => {
              const isCurrent = activeTech === tech.id

              return (
                <div
                  key={tech.id}
                  onMouseEnter={() => setActiveTech(tech.id)}
                  onMouseLeave={() => setActiveTech(null)}
                  className={`group relative rounded-2xl p-4 border transition-all duration-400 flex flex-col items-center justify-between text-center cursor-pointer select-none min-h-[135px] overflow-hidden ${
                    isCurrent
                      ? 'bg-white border-[#004658] ring-2 ring-[#004658]/25 shadow-xl shadow-[#004658]/12 -translate-y-1.5'
                      : 'bg-white/95 border-slate-200/90 hover:border-[#004658]/50 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-1'
                  }`}
                >
                  {/* FULL-CARD BACKGROUND WATERMARK SVG */}
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 sm:w-28 sm:h-28 opacity-[0.08] group-hover:opacity-[0.20] group-hover:scale-115 group-hover:-rotate-6 transition-all duration-500 pointer-events-none">
                    {tech.icon}
                  </div>

                  {/* Glowing Ambient Radial Wash on Hover */}
                  <div
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: tech.color }}
                  />

                  {/* Top Mini Badge & Colored Dot */}
                  <div className="relative z-10 w-full flex items-center justify-between text-[9px] font-mono text-slate-400 mb-1">
                    <span className="opacity-0 group-hover:opacity-100 text-[#004658] transition-opacity font-bold">
                      {tech.badge}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: tech.color }} />
                  </div>

                  {/* Foreground Mini Icon Container */}
                  <div className="relative z-10 my-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-9 h-9 rounded-xl bg-white/90 border border-slate-200/80 p-1.5 flex items-center justify-center shadow-xs">
                      {tech.icon}
                    </div>
                  </div>

                  {/* Tech Info */}
                  <div className="relative z-10 mt-1">
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#004658] transition-colors tracking-tight">
                      {tech.name}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-500 font-medium block mt-0.5">
                      {tech.role}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* INFINITE ANIMATED SMOOTH MARQUEE STREAM (With Full-Card Background Art) */
          <div className="relative w-full overflow-hidden py-3">
            {/* Left & Right Gradient Soft Faders */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused] w-max">
              {[...techPartners, ...techPartners].map((tech, index) => (
                <div
                  key={`${tech.id}-${index}`}
                  className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/95 border border-slate-200/90 hover:border-[#004658]/50 hover:shadow-lg hover:shadow-[#004658]/10 transition-all duration-300 min-w-[200px] overflow-hidden"
                >
                  {/* Background Full-Card Logo Watermark in Marquee item */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 opacity-[0.08] group-hover:opacity-[0.20] group-hover:scale-120 transition-all duration-500 pointer-events-none">
                    {tech.icon}
                  </div>

                  <div className="relative z-10 w-9 h-9 rounded-xl bg-slate-50 p-1.5 border border-slate-200/80 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <div className="relative z-10 text-left">
                    <span className="text-xs font-bold text-slate-900 group-hover:text-[#004658] transition-colors block">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 block">
                      {tech.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Footer Dot Strip */}
        <div className="mt-7 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center">
          <div className="flex items-center gap-2">
            <span className="text-[#004658] font-bold">⚡</span>
            <span>React 19 · Next.js · WordPress · Shopify · Framer · Figma · Webflow · Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span>• 100% Production-Ready</span>
            <span>• 60 FPS Native</span>
          </div>
        </div>

      </div>

      {/* Global CSS for Marquee Animation Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export default Trusted