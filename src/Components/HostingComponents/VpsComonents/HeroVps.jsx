import { Link } from 'react-router-dom'
import React from 'react'

const HeroVps = () => {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D8FF] animate-ping" />
            Dedicated KVM Cloud VPS Servers
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Full Root Access. <br />
            Dedicated Resources. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Extreme Compute.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Experience unmetered bandwidth, dedicated AMD EPYC / Intel Xeon processors, high-performance NVMe storage, and 10 Gbps redundant uplink ports.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div>
              <span className="text-xl font-black text-[#004658] block">KVM</span>
              <span className="text-xs font-bold text-slate-900">Virtualization</span>
            </div>
            <div>
              <span className="text-xl font-black text-emerald-600 block">10 Gbps</span>
              <span className="text-xs font-bold text-slate-900">Uplink Port</span>
            </div>
            <div>
              <span className="text-xl font-black text-cyan-600 block">&lt; 30s</span>
              <span className="text-xs font-bold text-slate-900">Instant Deploy</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#configurator"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Configure VPS Server ➔
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              Custom Spec Quote
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive SSH Root Terminal Console */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-slate-950 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden font-mono">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-slate-400 ml-2">root@vps-node-01:~</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-[#00D8FF] text-[10px] font-bold">SSH: 22 CONNECTED</span>
            </div>

            <div className="space-y-2 text-xs leading-relaxed text-slate-300">
              <div className="text-slate-500"># System Resource Diagnostics</div>
              <div className="text-emerald-400 font-bold">$ neofetch --stdout</div>
              <div className="pl-2 border-l border-slate-800 space-y-1 text-[11px]">
                <div><span className="text-cyan-400 font-bold">OS:</span> Ubuntu 24.04 LTS x86_64</div>
                <div><span className="text-cyan-400 font-bold">Host:</span> KVM Virtual Machine Gen4</div>
                <div><span className="text-cyan-400 font-bold">CPU:</span> AMD EPYC 9654 (8 Dedicated vCPU)</div>
                <div><span className="text-cyan-400 font-bold">Memory:</span> 3.2 GB / 32.0 GB (DDR5 ECC)</div>
                <div><span className="text-cyan-400 font-bold">Disk:</span> 640 GB NVMe Gen4 (RAID-10 Protected)</div>
                <div><span className="text-cyan-400 font-bold">Network:</span> 10 Gbps Redundant Bandwidth</div>
              </div>

              <div className="pt-2 text-emerald-400">$ systemctl status docker nginx</div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400">● docker.service - Active (running) since 182 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroVps
