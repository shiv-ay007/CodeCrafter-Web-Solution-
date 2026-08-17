import React, { useState, useRef } from 'react'

/**
 * HeroDevelopMent - High-Impact Software Engineering & Full-Stack Cloud Hero Section
 * 
 * Features:
 * - Master 7XL Responsive Width (matches Technology & HeroWeb)
 * - Crystal Clear High-Contrast Typography (Headline: "Software engineering built for scale.")
 * - 3 Animated Interactive Full-Stack Development Feature Cards:
 *   1. Resilient Backend Systems (Live API Gateway Telemetry + JSON Stream Mockup)
 *   2. Sub-Second Performance (Kinetic 99.9% Lighthouse Gauge + Concurrent UI Engine)
 *   3. Bulletproof DevOps (Automated CI/CD Pipeline Flow + Zero-Downtime Deployment)
 * - Dual High-Conversion CTA Buttons & Production Telemetry Strip
 * - Signature Background: Clean Luminous Aurora Mesh & Dynamic Mouse Spotlight
 */

// 1. ANIMATED CARD 1: RESILIENT BACKEND SYSTEMS
const ResilientBackendCard = ({ isDarkMode }) => {
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

      {/* Interactive Animated Artwork: Live API Terminal & Gateway Stream */}
      <div
        className={`relative w-full h-36 sm:h-40 mb-6 rounded-2xl border flex items-center justify-center overflow-hidden ${
          isDarkMode
            ? 'bg-slate-950/60 border-slate-800/80'
            : 'bg-gradient-to-br from-cyan-500/5 via-slate-500/5 to-slate-100/50 border-slate-200/70'
        }`}
      >
        {/* Floating Mini Code Terminal Window */}
        <div
          className={`absolute w-52 sm:w-56 h-22 sm:h-24 rounded-2xl backdrop-blur-md border shadow-xl -rotate-1 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 p-3 flex flex-col justify-between ${
            isDarkMode
              ? 'bg-slate-900/90 border-slate-700/80 text-slate-300'
              : 'bg-white/95 border-slate-200/90 text-slate-800'
          }`}
        >
          {/* Header Window Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-[9px] font-mono font-bold text-cyan-600 dark:text-cyan-400 ml-2">API GATEWAY</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 text-[8px] font-mono font-bold">200 OK</span>
          </div>

          {/* Terminal Code Snippet Simulation */}
          <div className="font-mono text-[10px] space-y-1 mt-1">
            <div className="flex items-center justify-between text-slate-500">
              <span>GET /api/v1/stream</span>
              <span className="text-emerald-500 font-bold">4.2ms</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#004658] dark:text-cyan-400 font-bold">➔</span>
              <span className="text-slate-600 dark:text-slate-400 text-[9px] truncate">10k+ req/sec throughput</span>
            </div>
          </div>
        </div>

        {/* Floating Rotating Gateway Node */}
        <div className="absolute top-2.5 right-3 w-6 h-6 rounded-full bg-gradient-to-tr from-[#004658] to-[#00D8FF] flex items-center justify-center text-white text-[9px] font-bold shadow-md animate-pulse">
          ⚡
        </div>
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5 mb-2">
          <span className={`p-2 rounded-xl text-xs ${isDarkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-[#004658]/10 text-[#004658]'}`}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </span>
          <h3 className={`text-lg font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Resilient backend systems.
          </h3>
        </div>
        <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Distributed microservices, GraphQL/REST pipelines, and sub-10ms response latencies built for heavy enterprise loads.
        </p>
      </div>
    </div>
  )
}

// 2. ANIMATED CARD 2: SUB-SECOND PERFORMANCE
const SubSecondPerformanceCard = ({ isDarkMode }) => {
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

      {/* Interactive Animated Motion Artwork: Lighthouse 100 Score & Kinetic CPU Engine */}
      <div
        className={`relative w-full h-36 sm:h-40 mb-6 rounded-2xl border flex items-center justify-center overflow-hidden ${
          isDarkMode
            ? 'bg-slate-950/60 border-slate-800/80'
            : 'bg-gradient-to-br from-emerald-500/5 via-slate-500/5 to-slate-100/50 border-slate-200/70'
        }`}
      >
        {/* Kinetic Equalizer Speedometer */}
        <div className="flex items-center gap-4">
          {/* Circular SVG Gauge (Lighthouse 100%) */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-200 dark:text-slate-800"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-emerald-500 group-hover:text-cyan-400 transition-colors duration-500"
                strokeDasharray="100, 100"
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400 block">100</span>
            </div>
          </div>

          {/* Speed Telemetry Tags */}
          <div className="space-y-1.5 text-left">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">&lt; 16ms Frame Budget</span>
            </div>
            <div className="w-24 h-1.5 rounded-full bg-emerald-500/20 overflow-hidden">
              <div className="w-full h-full bg-emerald-500 rounded-full animate-[pulse_1.5s_infinite]" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 block">Concurrent React 19 Engine</span>
          </div>
        </div>

        {/* Floating Live Badge */}
        <div
          className={`absolute top-3 right-4 px-2.5 py-0.5 rounded-full border flex items-center gap-1 shadow-sm ${
            isDarkMode
              ? 'bg-slate-900/90 border-slate-700 text-emerald-400'
              : 'bg-white border-slate-200 text-emerald-700 font-bold'
          }`}
        >
          <span className="text-[10px] font-mono">0.08s LCP</span>
        </div>
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
            Sub-second performance.
          </h3>
        </div>
        <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Zero-runtime styles, edge-rendered hydration, and hyper-optimized assets guaranteeing 100/100 Core Web Vitals.
        </p>
      </div>
    </div>
  )
}

// 3. ANIMATED CARD 3: BULLETPROOF DEVOPS & CI/CD
const BulletproofDevOpsCard = ({ isDarkMode }) => {
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

      {/* Interactive Animated Artwork: CI/CD Pipeline Stages Flow */}
      <div
        className={`relative w-full h-36 sm:h-40 mb-6 rounded-2xl border flex items-center justify-center overflow-hidden ${
          isDarkMode
            ? 'bg-slate-950/60 border-slate-800/80'
            : 'bg-gradient-to-br from-purple-500/5 via-slate-500/5 to-slate-100/50 border-slate-200/70'
        }`}
      >
        {/* Pipeline Stage Nodes */}
        <div className="flex items-center gap-2 sm:gap-3 px-2">
          {/* Stage 1: Build */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xs font-mono font-bold shadow-xs">
              ✓
            </div>
            <span className="text-[9px] font-mono font-bold text-slate-500">BUILD</span>
          </div>

          <div className="w-6 h-0.5 bg-emerald-400 animate-pulse" />

          {/* Stage 2: Test */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-xl bg-cyan-500 text-white flex items-center justify-center text-xs font-mono font-bold shadow-xs">
              ✓
            </div>
            <span className="text-[9px] font-mono font-bold text-slate-500">TEST</span>
          </div>

          <div className="w-6 h-0.5 bg-cyan-400 animate-pulse" />

          {/* Stage 3: Deploy */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#004658] to-[#00D8FF] text-white flex items-center justify-center text-xs font-mono font-bold shadow-md group-hover:scale-110 transition-transform animate-pulse">
              ☁
            </div>
            <span className="text-[9px] font-mono font-bold text-[#004658] dark:text-cyan-400 font-black">DEPLOY</span>
          </div>
        </div>

        {/* Floating Telemetry Metric Tag */}
        <div
          className={`absolute top-3 right-4 px-3 py-1 rounded-full border flex items-center gap-1 shadow-sm ${
            isDarkMode
              ? 'bg-slate-900/90 border-slate-700 text-purple-300'
              : 'bg-white border-slate-200 text-purple-700 font-bold'
          }`}
        >
          <span className="text-[11px] font-mono font-black">99.99% Uptime</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5 mb-2">
          <span className={`p-2 rounded-xl text-xs ${isDarkMode ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-500/10 text-purple-700'}`}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </span>
          <h3 className={`text-lg font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Bulletproof DevOps.
          </h3>
        </div>
        <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Automated CI/CD pipelines, containerized micro-architectures, and self-healing cloud infrastructure on AWS & Vercel.
        </p>
      </div>
    </div>
  )
}

const HeroDevelopMent = () => {
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
      id="hero-development"
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
        
        {/* Top Engineering Pill Badge */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-mono font-bold mb-6 backdrop-blur-md shadow-xs ${
            isDarkMode
              ? 'bg-cyan-500/10 border-cyan-400/30 text-cyan-300'
              : 'bg-[#004658]/10 border-[#004658]/30 text-[#004658]'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#00D8FF] animate-ping" />
          <span>FULL-STACK SOFTWARE & CLOUD ARCHITECTURE</span>
          <span className="text-[10px] opacity-70">✦</span>
        </div>

        {/* Master Impressive Headline (High Contrast & Crystal Clear) */}
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.06] sm:leading-[1.02] mb-6 max-w-5xl ${
            isDarkMode ? 'text-white' : 'text-[#0D1B2A]'
          }`}
        >
          Software engineering <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#00738e] to-[#00a3c4]">
            built for scale.
            {/* High-visibility glowing accent underline */}
            <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#00D8FF] pointer-events-none" viewBox="0 0 300 12" fill="none">
              <path d="M2 9C75 3 225 3 298 9" stroke="#00D8FF" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Compelling Sub-Headline */}
        <p
          className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-8 sm:mb-10 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          We architect resilient distributed systems, sub-second API pipelines, and cloud-native applications engineered to handle millions of requests flawlessly.
        </p>

        {/* =========================================================================
            3. 3 FULL-WIDTH ANIMATED INTERACTIVE FEATURE CARDS (Max-7XL Span)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full my-6 sm:my-8 text-left">
          <ResilientBackendCard isDarkMode={isDarkMode} />
          <SubSecondPerformanceCard isDarkMode={isDarkMode} />
          <BulletproofDevOpsCard isDarkMode={isDarkMode} />
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
            <span>Build Your Product</span>
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
            href="#architecture"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-base font-bold border transition-all duration-300 cursor-pointer ${
              isDarkMode
                ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white'
                : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-950 shadow-sm'
            }`}
          >
            <span>Architecture Stack</span>
            <span className="text-sm font-mono opacity-70">↗</span>
          </a>

        </div>

        {/* =========================================================================
            5. BOTTOM PRODUCTION TELEMETRY STRIP (Max-7XL Span)
           ========================================================================= */}
        <div
          className={`mt-14 pt-6 border-t w-full flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-mono ${
            isDarkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              Active Production Pipelines for 2026
            </span>
          </div>

          <div className={`flex items-center gap-4 sm:gap-6 flex-wrap ${isDarkMode ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
            <span>✦ 99.99% Uptime SLA</span>
            <span>✦ Sub-10ms TTFB Latency</span>
            <span>✦ SOC-2 Certified Architecture</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroDevelopMent