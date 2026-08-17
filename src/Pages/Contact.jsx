import React from 'react'
import Contactus from '../Components/HeroComponent/Contactus'
import Cta from '../Components/HeroComponent/Cta'

const Contact = () => {
  return (
    <div className="pt-24 sm:pt-28">
      {/* Contact Header */}
      <section className="relative pt-12 pb-8 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00D8FF] animate-ping" />
          Direct Access To Principal Software Engineers
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4">
          Let’s Architect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Next Big Project.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Have an idea, need a custom software quote, or want to modernize an existing application? Schedule a free 30-minute technical discovery call with our team.
        </p>
      </section>

      {/* Main Contact Us Form Section */}
      <Contactus />

      {/* Quick Direct Contacts Strip */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="text-3xl p-3 rounded-2xl bg-[#004658]/8 inline-block mb-3">📧</span>
            <h3 className="text-base font-bold text-slate-900 mb-1">Email Us Directly</h3>
            <p className="text-xs text-slate-500 mb-3">For RFPs, partnerships & inquiries</p>
            <span className="text-sm font-bold text-[#004658] font-mono">contact@codecrafter.io</span>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="text-3xl p-3 rounded-2xl bg-emerald-500/10 inline-block mb-3">💬</span>
            <h3 className="text-base font-bold text-slate-900 mb-1">Direct WhatsApp Chat</h3>
            <p className="text-xs text-slate-500 mb-3">Instant response from engineers</p>
            <span className="text-sm font-bold text-emerald-600 font-mono">+91 (987) 654-3210</span>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="text-3xl p-3 rounded-2xl bg-cyan-500/10 inline-block mb-3">⚡</span>
            <h3 className="text-base font-bold text-slate-900 mb-1">Emergency 24/7 SLA</h3>
            <p className="text-xs text-slate-500 mb-3">For mission-critical production bugs</p>
            <span className="text-sm font-bold text-cyan-600 font-mono">sla-emergency@codecrafter.io</span>
          </div>
        </div>
      </section>

      <Cta />
    </div>
  )
}

export default Contact
