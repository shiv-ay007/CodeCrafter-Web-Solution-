import React, { useState, useRef } from 'react'

/**
 * HeroWeb - High-Impact & Crystal Clear Web Design Studio Hero Section
 * 
 * Features:
 * - Master 7XL Responsive Width (matches Technology & other main sections)
 * - Crystal Clear High-Contrast Typography (No invisible/faded text)
 * - Headline: "Digital experiences built to impress."
 * - 3 Full-Width Animated Interactive Feature Cards:
 *   1. Beautiful interfaces (Multi-Layer Glass UI Mockup + Orbiting Palette Tokens)
 *   2. Seamless interactions (60 FPS Kinetic Wave Motion + Pulsing Ripple Physics)
 *   3. Real business results (Glowing Climbing ROI Curve + Live Telemetry)
 * - Dual High-Conversion CTA Buttons & Live Project Status Ticker
 * - Signature Background: Clean Luminous Aurora Mesh & Dynamic Mouse Spotlight
 */

// 1. ANIMATED CARD 1: BEAUTIFUL INTERFACES
const BeautifulInterfacesCard = ({ isDarkMode }) => {
  return (
    <div
      className={`group relative p-6 sm:p-7 rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer ${
        isDarkMode
          ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10'
          : 'bg-white/95 border-slate-200/90 hover:border-[#004658]/40 hover:bg-white hover:shadow-xl hover:shadow-[#004658]/10'
      } hover:-translate-y-2`}
    >
      {/* Top Ambient Glow Wash */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

      {/* Interactive Animated Artwork Display */}
      <div className={`relative w-full h-36 sm:h-40 mb-6 rounded-2xl border flex items-center justify-center overflow-hidden ${
        isDarkMode 
          ? 'bg-slate-950/60 border-slate-800/80' 
          : 'bg-gradient-to-br from-cyan-500/5 via-slate-500/5 to-slate-100/50 border-slate-200/70'
      }`}>
        
        {/* Floating Mini Glass UI Window Layer */}
        <div className={`absolute w-48 sm:w-52 h-20 sm:h-22 rounded-2xl backdrop-blur-md border shadow-xl -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 p-3 flex flex-col justify-between ${
          isDarkMode 
            ? 'bg-slate-900/90 border-slate-700/80' 
            : 'bg-white/90 border-slate-200/90'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <div className={`w-14 h-2 rounded-full ml-1.5 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`} />
            </div>
            <span className={`text-[9px] font-mono font-bold ${isDarkMode ? 'text-cyan-400' : 'text-[#004658]'}`}>DESIGN SYSTEM</span>
          </div>
          
          <div className="flex items-center justify-between gap-3 mt-1">
            <div className="space-y-1.5 flex-1">
              <div className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`} />
              <div className={`w-2/3 h-2 rounded-full ${isDarkMode ? 'bg-cyan-500/40' : 'bg-[#004658]/30'}`} />
            </div>
            <div className="w-8 h-6 rounded-lg bg-gradient-to-tr from-[#004658] to-[#00D8FF] flex items-center justify-center text-white text-[10px] font-bold shadow-xs animate-pulse">
              ✦
            </div>
          </div>
        </div>

        {/* Floating Orbiting Color Swatch Circles */}
        <div className="absolute top-3 right-4 w-7 h-7 rounded-full bg-gradient-to-tr from-[#004658] to-[#00D8FF] shadow-md animate-[spin_8s_linear_infinite] group-hover:scale-125 transition-transform duration-500" />
        <div className="absolute bottom-3 left-5 w-5 h-5 rounded-full bg-purple-500 shadow-md animate-bounce group-hover:scale-125 transition-transform duration-500" />
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5 mb-2">
          <span className={`p-2 rounded-xl text-xs ${isDarkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-[#004658]/10 text-[#004658]'}`}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          <h3 className={`text-lg font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Beautiful interfaces.
          </h3>
        </div>
        <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Pixel-perfect visual hierarchy, bespoke typography, and modular design systems tailored to your brand identity.
        </p>
      </div>
    </div>
  )
}

// 2. ANIMATED CARD 2: SEAMLESS INTERACTIONS
const SeamlessInteractionsCard = ({ isDarkMode }) => {
  return (
    <div
      className={`group relative p-6 sm:p-7 rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer ${
        isDarkMode
          ? 'bg-slate-900/90 border-slate-800 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/10'
          : 'bg-white/95 border-slate-200/90 hover:border-[#004658]/40 hover:bg-white hover:shadow-xl hover:shadow-[#004658]/10'
      } hover:-translate-y-2`}
    >
      {/* Top Ambient Glow Wash */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-400/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

      {/* Interactive Animated Motion Artwork */}
      <div className={`relative w-full h-36 sm:h-40 mb-6 rounded-2xl border flex items-center justify-center overflow-hidden ${
        isDarkMode 
          ? 'bg-slate-950/60 border-slate-800/80' 
          : 'bg-gradient-to-br from-emerald-500/5 via-slate-500/5 to-slate-100/50 border-slate-200/70'
      }`}>
        
        {/* Kinetic Wave Canvas with Moving Particle Bars */}
        <div className="flex items-end gap-2 h-16">
          <div className="w-2.5 rounded-full bg-emerald-500/70 animate-[pulse_1s_ease-in-out_infinite] h-6 group-hover:h-12 transition-all duration-300" />
          <div className="w-2.5 rounded-full bg-emerald-500 animate-[pulse_1.4s_ease-in-out_infinite] h-11 group-hover:h-16 transition-all duration-300" />
          <div className="w-2.5 rounded-full bg-cyan-500 animate-[pulse_0.9s_ease-in-out_infinite] h-8 group-hover:h-14 transition-all duration-300" />
          <div className="w-2.5 rounded-full bg-emerald-600 animate-[pulse_1.2s_ease-in-out_infinite] h-14 group-hover:h-16 transition-all duration-300" />
          <div className="w-2.5 rounded-full bg-emerald-500/70 animate-[pulse_1.6s_ease-in-out_infinite] h-5 group-hover:h-10 transition-all duration-300" />
        </div>

        {/* Interactive Floating 60 FPS Badge */}
        <div className={`absolute top-3 right-4 px-3 py-1 rounded-full border flex items-center gap-1.5 shadow-sm ${
          isDarkMode 
            ? 'bg-slate-900/90 border-slate-700 text-emerald-400' 
            : 'bg-white border-slate-200 text-emerald-700 font-bold'
        }`}>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[11px] font-mono">60 FPS Native</span>
        </div>

        {/* Animated Ripple Ring behind motion */}
        <div className="absolute w-28 h-28 rounded-full border border-emerald-400/30 animate-ping opacity-40 pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5 mb-2">
          <span className={`p-2 rounded-xl text-xs ${isDarkMode ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-500/10 text-emerald-700'}`}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          <h3 className={`text-lg font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Seamless interactions.
          </h3>
        </div>
        <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Silky smooth 60 FPS physics, responsive gesture controls, and tactile micro-interactions that feel completely alive.
        </p>
      </div>
    </div>
  )
}

// 3. ANIMATED CARD 3: REAL BUSINESS RESULTS
const RealBusinessResultsCard = ({ isDarkMode }) => {
  return (
    <div
      className={`group relative p-6 sm:p-7 rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer ${
        isDarkMode
          ? 'bg-slate-900/90 border-slate-800 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10'
          : 'bg-white/95 border-slate-200/90 hover:border-[#004658]/40 hover:bg-white hover:shadow-xl hover:shadow-[#004658]/10'
      } hover:-translate-y-2`}
    >
      {/* Top Ambient Glow Wash */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

      {/* Interactive Animated Growth Chart Artwork */}
      <div className={`relative w-full h-36 sm:h-40 mb-6 rounded-2xl border flex items-center justify-center overflow-hidden ${
        isDarkMode 
          ? 'bg-slate-950/60 border-slate-800/80' 
          : 'bg-gradient-to-br from-purple-500/5 via-slate-500/5 to-slate-100/50 border-slate-200/70'
      }`}>
        
        {/* Climbing Animated Line Chart SVG */}
        <svg className="w-full h-24 px-4" viewBox="0 0 100 40" fill="none">
          <path
            d="M 5 35 Q 25 30, 45 20 T 95 6 L 95 40 L 5 40 Z"
            className="fill-purple-500/20 group-hover:fill-purple-500/35 transition-colors"
          />
          <path
            d="M 5 35 Q 25 30, 45 20 T 95 6"
            stroke="#9333EA"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="group-hover:stroke-cyan-400 transition-colors duration-500"
          />
          <circle cx="95" cy="6" r="4" fill="#9333EA" className="animate-ping" />
          <circle cx="95" cy="6" r="3.5" fill="#FFFFFF" />
        </svg>

        {/* Floating Telemetry Metric Tag */}
        <div className={`absolute top-3 right-4 px-3 py-1 rounded-full border flex items-center gap-1 shadow-sm ${
          isDarkMode 
            ? 'bg-slate-900/90 border-slate-700 text-purple-300' 
            : 'bg-white border-slate-200 text-purple-700 font-bold'
        }`}>
          <span className="text-[11px] font-mono font-black">+148% Conversion</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5 mb-2">
          <span className={`p-2 rounded-xl text-xs ${isDarkMode ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-500/10 text-purple-700'}`}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </span>
          <h3 className={`text-lg font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Real business results.
          </h3>
        </div>
        <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          High-performance web architecture, lightning load speeds, and measurable revenue growth for your company.
        </p>
      </div>
    </div>
  )
}

const HeroWeb = () => {
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

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
      className={`relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 py-20 pt-28 sm:pt-32 overflow-hidden transition-colors duration-700 select-none ${
        isDarkMode 
          ? 'bg-[#080C14] text-white' 
          : 'bg-gradient-to-b from-[#F0F7F9] via-[#F6FAFB] to-[#FBFDFD] text-slate-900'
      }`}
      id="hero-web"
    >
      {/* =========================================================================
          1. SUBTLE ANIMATED BACKGROUND GRADIENT & MESH
         ========================================================================= */}
      
      {/* Precision Micro-Dot Matrix Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none -z-20"
        style={{
          backgroundImage: `radial-gradient(${isDarkMode ? '#38BDF8' : '#004658'} 1.4px, transparent 1.4px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Primary Animated Aurora Glow Spheres */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full blur-[140px] opacity-35 animate-pulse"
          style={{
            background: isDarkMode
              ? 'radial-gradient(circle, rgba(0, 216, 255, 0.45) 0%, rgba(0, 70, 88, 0.25) 50%, transparent 80%)'
              : 'radial-gradient(circle, rgba(0, 70, 88, 0.25) 0%, rgba(0, 216, 255, 0.2) 50%, transparent 80%)'
          }}
        />

        <div
          className="absolute top-1/3 -left-28 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 animate-[spin_24s_linear_infinite]"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(0, 70, 88, 0.15) 70%, transparent 100%)'
          }}
        />

        <div
          className="absolute top-1/2 -right-28 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 animate-[spin_30s_linear_infinite_reverse]"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(0, 216, 255, 0.15) 70%, transparent 100%)'
          }}
        />
      </div>

      {/* Dynamic Cursor Spotlight Radial Glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none -inset-px transition-opacity duration-300 opacity-100 -z-5"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${
              isDarkMode ? 'rgba(0, 216, 255, 0.08)' : 'rgba(0, 70, 88, 0.06)'
            }, transparent 80%)`
          }}
        />
      )}

      {/* Top Floating Aesthetic Switcher */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          title="Toggle Clean Light / Obsidian Black Theme"
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold border backdrop-blur-md transition-all duration-300 cursor-pointer shadow-xs ${
            isDarkMode
              ? 'bg-slate-900/90 border-slate-700 text-slate-200 hover:bg-slate-800'
              : 'bg-white/90 border-slate-200 text-slate-700 hover:bg-white hover:border-[#004658]/30'
          }`}
        >
          <span>{isDarkMode ? '☀️ Clean Light' : '🌙 Obsidian Black'}</span>
        </button>
      </div>

      {/* =========================================================================
          2. CORE HERO CONTENT (Full Width Max-7XL Responsive Architecture)
         ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Top Innovation Pill Badge */}
        <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-mono font-bold mb-6 backdrop-blur-md shadow-xs ${
          isDarkMode 
            ? 'bg-cyan-500/10 border-cyan-400/30 text-cyan-300' 
            : 'bg-[#004658]/10 border-[#004658]/30 text-[#004658]'
        }`}>
          <span className="w-2 h-2 rounded-full bg-[#00D8FF] animate-ping" />
          <span>ENGINEERED FOR UNRIVALED IMPACT</span>
          <span className="text-[10px] opacity-70">✦</span>
        </div>

        {/* Master Impressive Headline (High Contrast & Crystal Clear) */}
        <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.06] sm:leading-[1.02] mb-6 max-w-5xl ${
          isDarkMode ? 'text-white' : 'text-[#0D1B2A]'
        }`}>
          Digital experiences <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#00738e] to-[#00a3c4]">
            built to impress.
            {/* High-visibility glowing accent underline */}
            <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#00D8FF] pointer-events-none" viewBox="0 0 300 12" fill="none">
              <path d="M2 9C75 3 225 3 298 9" stroke="#00D8FF" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Compelling Sub-Headline (Solid High-Contrast Readable Text) */}
        <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-8 sm:mb-10 ${
          isDarkMode ? 'text-slate-300' : 'text-slate-700'
        }`}>
          We engineer blazing-fast, high-converting digital products and bespoke design systems that captivate audiences and accelerate business growth.
        </p>

        {/* =========================================================================
            3. 3 FULL-WIDTH ANIMATED INTERACTIVE FEATURE CARDS (Max-7XL Span)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full my-6 sm:my-8 text-left">
          <BeautifulInterfacesCard isDarkMode={isDarkMode} />
          <SeamlessInteractionsCard isDarkMode={isDarkMode} />
          <RealBusinessResultsCard isDarkMode={isDarkMode} />
        </div>

        {/* =========================================================================
            4. DUAL HIGH-CONVERSION CALL-TO-ACTION BUTTONS
           ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto justify-center">
          
          {/* Primary Action Button */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#004658] to-[#00738e] hover:from-[#003442] hover:to-[#005a72] shadow-xl shadow-[#004658]/25 hover:shadow-2xl hover:shadow-[#004658]/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>Start a Project</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Secondary Action Button */}
          <a
            href="#work"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-base font-bold border transition-all duration-300 cursor-pointer ${
              isDarkMode
                ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white'
                : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-950 shadow-sm'
            }`}
          >
            <span>Explore Work</span>
            <span className="text-sm font-mono opacity-70">↗</span>
          </a>

        </div>

        {/* =========================================================================
            5. BOTTOM TRUST & TELEMETRY STRIP (Max-7XL Span)
           ========================================================================= */}
        <div
          className={`mt-14 pt-6 border-t w-full flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-mono ${
            isDarkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              Accepting New Projects for 2026
            </span>
          </div>

          <div className={`flex items-center gap-4 sm:gap-6 flex-wrap ${isDarkMode ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
            <span>✦ Top 1% Digital Craft</span>
            <span>✦ 100% On-Time Delivery</span>
            <span>✦ 50+ Global Accolades</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroWeb