import { Link } from 'react-router-dom'
import React from 'react'

const HeroErp = () => {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-black uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Full-Suite Enterprise Resource Planning (ERP) Solutions
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Unified Operations. <br />
            Real-Time Inventory. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Custom ERP Software.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Integrate procurement, multi-warehouse inventory, manufacturing pipelines, accounting ledgers, and logistics into a single centralized cloud platform.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div>
              <span className="text-xl font-black text-[#004658] block">Real-Time</span>
              <span className="text-xs font-bold text-slate-900">Inventory Sync</span>
            </div>
            <div>
              <span className="text-xl font-black text-emerald-600 block">Automated</span>
              <span className="text-xs font-bold text-slate-900">GST / Tax Invoicing</span>
            </div>
            <div>
              <span className="text-xl font-black text-cyan-600 block">Multi-Branch</span>
              <span className="text-xs font-bold text-slate-900">Centralized DB</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request ERP Consultation ➔
            </Link>
            <a
              href="#modules"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              Explore Modules
            </a>
          </div>
        </div>

        {/* Right Column: ERP Inventory & Ledger Simulator */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden font-sans">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 font-bold">ENTERPRISE ERP DASHBOARD</span>
              <span className="text-xs font-mono text-emerald-400 font-bold">ALL SYSTEMS HEALTHY</span>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Multi-Warehouse Stock Value</div>
                  <div className="text-xl font-mono font-bold text-white">$2,418,900.00</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">4 Hubs Synced</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block">Active Purchase Orders</span>
                  <span className="text-base font-mono font-bold text-cyan-400 block mt-1">42 Processing</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block">Manufacturing Line</span>
                  <span className="text-base font-mono font-bold text-emerald-400 block mt-1">99.2% Efficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroErp
