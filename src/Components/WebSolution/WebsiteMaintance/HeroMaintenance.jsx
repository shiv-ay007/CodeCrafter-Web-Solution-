import { Link } from 'react-router-dom'
import React from 'react'

const HeroMaintenance = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden">
      {/* Background Soft Glows */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.35) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            24/7 Proactive Security & Continuous Optimization
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Zero Downtime. <br />
            100% Peace of Mind. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">24/7 Care.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Never worry about broken plugins, server crashes, security exploits, or outdated scripts. Our dedicated engineering team monitors, updates, and optimizes your platform 24/7/365.
          </p>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div>
              <span className="text-xl font-black text-emerald-600 block">99.99%</span>
              <span className="text-xs font-bold text-slate-900">Uptime SLA</span>
            </div>
            <div>
              <span className="text-xl font-black text-[#004658] block">&lt; 15 Mins</span>
              <span className="text-xs font-bold text-slate-900">Emergency SLA</span>
            </div>
            <div>
              <span className="text-xl font-black text-cyan-600 block">Daily</span>
              <span className="text-xs font-bold text-slate-900">Cloud Backups</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#plans"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              View Care Plans ➔
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              Get Emergency Support
            </Link>
          </div>
        </div>

        {/* Right Column: Live Security & SLA Telemetry Console */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400 font-bold">LIVE TELEMETRY: HEALTHY</span>
              </div>
              <span className="text-xs font-mono text-slate-400">Node: us-east-edge</span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Security Threat Shield</span>
                  <span className="text-emerald-400 font-mono font-bold">Active & Hardened</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <span>🛡️ 0 Vulnerabilities Detected</span>
                </div>
                <div className="text-[11px] text-slate-400">Automated firewall active • SSL Certificate valid (Auto-renewed)</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Last Cloud Backup</span>
                  <span className="text-sm font-mono font-bold text-cyan-400">Today at 03:00 AM</span>
                  <span className="text-[10px] text-slate-500 block mt-1">Encrypted on AWS S3 Glacier</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Server Response (TTFB)</span>
                  <span className="text-sm font-mono font-bold text-emerald-400">142ms Avg</span>
                  <span className="text-[10px] text-slate-500 block mt-1">Edge Redis Cache Hit 98.4%</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🔄</span>
                  <div>
                    <div className="text-xs font-bold text-white">Framework & Core Updates</div>
                    <div className="text-[10px] text-slate-400">React 19, Next.js security patch applied</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px]">Auto-Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroMaintenance
