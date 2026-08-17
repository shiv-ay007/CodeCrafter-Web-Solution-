import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const HeroRedesign = () => {
  const [activeTab, setActiveTab] = useState('modern')

  const metrics = [
    { label: 'Avg Speed Boost', value: '4.8x Faster', desc: 'From 8.2s down to 0.9s load time' },
    { label: 'Conversion Lift', value: '+142%', desc: 'Optimized checkout & funnel UX' },
    { label: 'Mobile Score', value: '99/100', desc: 'Google Core Web Vitals validated' },
  ]

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden">
      {/* Background Soft Glows */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.35) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />
      <div 
        className="absolute bottom-10 right-1/4 w-[500px] h-[350px] pointer-events-none rounded-full opacity-15 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 216, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D8FF] animate-ping" />
            Website Modernization & UX Re-engineering
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Transform Outdated Websites Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">High-Converting</span> Powerhouses.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Is your existing website slow, non-responsive, or failing to convert? We rebuild sluggish legacy platforms into lightning-fast, visually stunning web experiences engineered for 2026.
          </p>

          {/* Metrics Highlight Strip */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            {metrics.map((m, idx) => (
              <div key={idx} className="border-r border-slate-100 last:border-none pr-2">
                <span className="text-lg sm:text-xl font-black text-[#004658] block tracking-tight">{m.value}</span>
                <span className="text-xs font-bold text-slate-900 block">{m.label}</span>
                <span className="text-[10px] text-slate-500 hidden sm:block mt-0.5">{m.desc}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Free Website Audit ➔
            </Link>
            <a
              href="#process"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              See Redesign Process
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Before vs Modern UI Showcase */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00D8FF]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Toggle Switch */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-slate-400 ml-2">codecrafter-audit.live</span>
              </div>

              <div className="flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700">
                <button
                  onClick={() => setActiveTab('legacy')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    activeTab === 'legacy' ? 'bg-rose-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Legacy State
                </button>
                <button
                  onClick={() => setActiveTab('modern')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    activeTab === 'modern' ? 'bg-[#00D8FF] text-slate-950 font-black shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Modernized ✨
                </button>
              </div>
            </div>

            {/* Interactive Screen Preview */}
            {activeTab === 'legacy' ? (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <div className="text-sm font-bold text-rose-300">Outdated Architecture Detected</div>
                      <div className="text-xs text-rose-400/80">Lighthouse Score: 32/100 • 8.4s TTFB</div>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-rose-900/60 text-rose-300 text-[10px] font-mono">High Bounce Rate</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3 opacity-60">
                  <div className="h-4 w-1/3 bg-slate-800 rounded" />
                  <div className="h-20 w-full bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center text-xs text-slate-500">
                    Cluttered layout, bloated scripts, broken mobile view
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 bg-slate-800 rounded-lg" />
                    <div className="h-10 bg-slate-800 rounded-lg" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <div className="text-sm font-bold text-emerald-300">Modern Next.js 15 & Tailwind Architecture</div>
                      <div className="text-xs text-emerald-400/80">Lighthouse Score: 99/100 • 0.3s Sub-second Paint</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">100% Core Vitals</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/90 border border-cyan-500/30 space-y-3 shadow-lg shadow-cyan-500/10">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-1/2 bg-gradient-to-r from-[#00D8FF] to-teal-400 rounded-full" />
                    <span className="text-[10px] font-mono text-[#00D8FF] font-bold">60 FPS Motion</span>
                  </div>
                  <div className="h-24 w-full rounded-xl bg-slate-900 border border-slate-800 p-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-bold">Conversion-Optimized Hero & CTA</span>
                      <span className="text-emerald-400 font-bold">+184% Leads</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#004658] to-[#00D8FF] h-full w-[94%]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-bold">Zero-Downtime</div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-bold">SEO Preserved</div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-cyan-400 font-bold">Fluid Responsive</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroRedesign
