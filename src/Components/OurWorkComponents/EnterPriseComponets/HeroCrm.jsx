import { Link } from 'react-router-dom'
import React from 'react'

const HeroCrm = () => {
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
            Custom Sales Pipeline & Customer Relationship Management (CRM)
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Close More Deals. <br />
            Automate Follow-Ups. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Custom CRM Software.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Escape generic, expensive SaaS tools. We engineer bespoke CRM platforms tailored exactly to your sales workflow, lead scoring, WhatsApp integration, and automated pipeline stages.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div>
              <span className="text-xl font-black text-[#004658] block">+45%</span>
              <span className="text-xs font-bold text-slate-900">Deal Win Rate</span>
            </div>
            <div>
              <span className="text-xl font-black text-emerald-600 block">WhatsApp</span>
              <span className="text-xs font-bold text-slate-900">Omni-Channel API</span>
            </div>
            <div>
              <span className="text-xl font-black text-cyan-600 block">Zero</span>
              <span className="text-xs font-bold text-slate-900">Per-User Fees</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Build Custom CRM ➔
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              CRM Modules
            </a>
          </div>
        </div>

        {/* Right Column: CRM Kanban Board Simulation */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden font-sans">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 font-bold">SALES PIPELINE KANBAN</span>
              <span className="text-xs font-mono text-emerald-400 font-bold">$184,500 Active</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {/* Column 1: Qualified Leads */}
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex justify-between text-[11px] font-bold text-slate-400">
                  <span>Leads (4)</span>
                  <span className="text-[#00D8FF]">$32k</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[10px] space-y-1">
                  <div className="font-bold text-white">Apex Logistics</div>
                  <div className="text-slate-400">Enterprise Web Portal</div>
                </div>
              </div>

              {/* Column 2: Proposal Sent */}
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex justify-between text-[11px] font-bold text-slate-400">
                  <span>Proposal (2)</span>
                  <span className="text-amber-400">$64k</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[10px] space-y-1">
                  <div className="font-bold text-white">Nova FinTech</div>
                  <div className="text-slate-400">React Native Hybrid App</div>
                </div>
              </div>

              {/* Column 3: Won Deals */}
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex justify-between text-[11px] font-bold text-slate-400">
                  <span>Won Deals (5)</span>
                  <span className="text-emerald-400">$88k</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[10px] space-y-1">
                  <div className="font-bold text-white">Solaris Energy</div>
                  <div className="text-emerald-400 font-bold">Contract Signed ✍️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCrm
