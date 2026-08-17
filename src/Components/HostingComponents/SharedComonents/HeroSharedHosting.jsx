import React from 'react'

const HeroSharedHosting = () => {
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
            High-Speed NVMe Shared Web Hosting
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Blazing Fast Hosting. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">99.9% Uptime</span> Guaranteed.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Turbocharge your website with pure NVMe SSD storage, cPanel control, free SSL certificates, automated daily backups, and 1-click WordPress installation.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            {['Free SSL Included', 'Pure NVMe SSD', 'Unlimited Bandwidth', 'Free Domain 1-Yr', 'cPanel & 1-Click Apps'].map((badge, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-white border border-[#004658]/15 text-xs font-bold text-slate-800 shadow-xs">
                ⚡ {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#plans"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started From $2.99/mo ➔
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              Compare Plans
            </a>
          </div>
        </div>

        {/* Right Column: Interactive cPanel & Server Dashboard Mockup */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-slate-400 ml-2">cpanel.codecrafter.host:2083</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">NVMe ACTIVE</span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">NVMe Disk Usage</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-mono font-bold text-cyan-400">12.4 GB / 50 GB</span>
                    <span className="text-xs text-slate-500">24%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-[#00D8FF] h-full w-[24%]" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Monthly Bandwidth</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-mono font-bold text-emerald-400">Unmetered</span>
                    <span className="text-xs text-emerald-500">Active</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[100%]" />
                  </div>
                </div>
              </div>

              {/* 1-Click Apps Quick Panel */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-300">1-Click Auto Installers</div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {['WordPress', 'Node.js', 'Laravel', 'Python'].map((app, aIdx) => (
                    <div key={aIdx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-bold text-slate-300 hover:border-cyan-400 cursor-pointer transition-colors">
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSharedHosting
