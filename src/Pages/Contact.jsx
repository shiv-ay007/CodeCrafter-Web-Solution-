import React from 'react'
import { motion } from 'framer-motion'
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

      {/* Quick Direct Contacts Strip with Smooth Framer Motion & Glow Animations */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto select-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* CARD 1: Email Us Directly */}
          <motion.a
            href="mailto:contact@codecrafter.io"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[26px] bg-gradient-to-b from-white via-white/95 to-slate-50/80 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:border-[#004658]/40 hover:shadow-[0_20px_40px_-12px_rgba(0,70,88,0.18)] transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Top Accent Glowing Highlight Line */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#004658] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Ambient Background Corner Glow */}
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#004658]/10 blur-2xl group-hover:bg-[#004658]/20 transition-all duration-500 pointer-events-none" />

            <div>
              {/* Header: Icon + Status Pill */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200/80 text-[#004658] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100/90 text-slate-700 text-[10px] font-mono font-bold border border-slate-200/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
                  <span>&lt; 2 HR RESPONSE</span>
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-black text-slate-900 group-hover:text-[#004658] transition-colors mb-1">
                Email Us Directly
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4">
                For RFPs, partnerships, custom architecture & general inquiries.
              </p>
            </div>

            {/* Bottom Contact Anchor & Action Pill */}
            <div className="pt-4 border-t border-slate-100/90 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-mono font-bold text-[#004658] tracking-tight group-hover:underline">
                contact@codecrafter.io
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#004658] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </motion.a>

          {/* CARD 2: Direct WhatsApp Chat */}
          <motion.a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[26px] bg-gradient-to-b from-white via-white/95 to-slate-50/80 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(16,185,129,0.06)] hover:border-emerald-500/40 hover:shadow-[0_20px_40px_-12px_rgba(16,185,129,0.18)] transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Top Accent Glowing Highlight Line */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Ambient Background Corner Glow */}
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500 pointer-events-none" />

            <div>
              {/* Header: Icon + Status Pill */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/80 text-emerald-600 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>ONLINE &amp; READY</span>
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors mb-1">
                Direct WhatsApp Chat
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4">
                Instant real-time engineering support and squad alignment.
              </p>
            </div>

            {/* Bottom Contact Anchor & Action Pill */}
            <div className="pt-4 border-t border-slate-100/90 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-mono font-bold text-emerald-600 tracking-tight group-hover:underline">
                +91 (987) 654-3210
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </motion.a>

          {/* CARD 3: Emergency 24/7 SLA */}
          <motion.a
            href="mailto:sla-emergency@codecrafter.io"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[26px] bg-gradient-to-b from-white via-white/95 to-slate-50/80 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(234,88,12,0.06)] hover:border-amber-500/40 hover:shadow-[0_20px_40px_-12px_rgba(234,88,12,0.18)] transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Top Accent Glowing Highlight Line */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#EA580C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Ambient Background Corner Glow */}
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-amber-500/10 blur-2xl group-hover:bg-amber-500/20 transition-all duration-500 pointer-events-none" />

            <div>
              {/* Header: Icon + Status Pill */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 text-[#EA580C] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-[10px] font-mono font-bold border border-amber-200/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
                  <span>24/7 HOTLINE</span>
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-black text-slate-900 group-hover:text-[#EA580C] transition-colors mb-1">
                Emergency 24/7 SLA
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4">
                Rapid incident triage for mission-critical enterprise workloads.
              </p>
            </div>

            {/* Bottom Contact Anchor & Action Pill */}
            <div className="pt-4 border-t border-slate-100/90 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-mono font-bold text-[#EA580C] tracking-tight group-hover:underline">
                sla-emergency@codecrafter.io
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </motion.a>

        </div>
      </section>

      <Cta />
    </div>
  )
}

export default Contact
