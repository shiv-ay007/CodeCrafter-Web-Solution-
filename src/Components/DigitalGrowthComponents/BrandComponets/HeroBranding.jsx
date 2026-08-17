import { Link } from 'react-router-dom'
import React from 'react'

const HeroBranding = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden">
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.35) 0%, rgba(0, 216, 255, 0.15) 70%)'
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D8FF] animate-ping" />
            Complete Brand Identity Systems & Visual Design
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Iconic Logos. <br />
            Timeless Design Tokens. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Memorable Identity.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            We craft complete corporate brand identities, vector logos, responsive design tokens, typography pairing guidelines, and pitch decks that command market respect.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div>
              <span className="text-xl font-black text-[#004658] block">Vector</span>
              <span className="text-xs font-bold text-slate-900">Infinite Scaling</span>
            </div>
            <div>
              <span className="text-xl font-black text-emerald-600 block">Complete</span>
              <span className="text-xs font-bold text-slate-900">Style Guidelines</span>
            </div>
            <div>
              <span className="text-xl font-black text-cyan-600 block">100%</span>
              <span className="text-xs font-bold text-slate-900">Trademark Ready</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Create Brand Identity ➔
            </Link>
            <a
              href="#deliverables"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              View Deliverables
            </a>
          </div>
        </div>

        {/* Right Column: Brand Style Guide Mockup */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden font-sans">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 font-bold">BRAND IDENTITY GUIDELINE</span>
              <span className="text-[10px] text-slate-400">VERSION 2.0</span>
            </div>

            <div className="space-y-4">
              {/* Color Swatch Tokens */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-300">Design Token Palette</div>
                <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                  <div className="p-2.5 rounded-xl bg-[#004658] text-white">#004658<br /><span className="text-[9px] opacity-70">Teal Core</span></div>
                  <div className="p-2.5 rounded-xl bg-[#00D8FF] text-slate-950 font-bold">#00D8FF<br /><span className="text-[9px] opacity-70">Electric Cyan</span></div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">#0F172A<br /><span className="text-[9px] opacity-70">Slate Dark</span></div>
                  <div className="p-2.5 rounded-xl bg-white text-slate-900 font-bold">#FFFFFF<br /><span className="text-[9px] opacity-70">Pure White</span></div>
                </div>
              </div>

              {/* Typography Preview */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Typography Scale</div>
                  <div className="text-sm font-bold text-white">Inter & Plus Jakarta Sans</div>
                </div>
                <span className="text-xs text-cyan-400 font-mono">Aa Bb Gg 123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBranding
