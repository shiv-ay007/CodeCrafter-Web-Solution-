import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Phone, ExternalLink, HelpCircle, ChevronDown } from 'lucide-react'
import Contactus from '../Components/HeroComponent/Contactus'

const contactFaqs = [
  {
    q: "What are the official working hours and office timings of Code Crafter?",
    a: "Our development center operates Monday to Saturday from 9:30 AM to 6:30 PM IST. Sunday is our weekly holiday (with emergency SLA support available for active servers). Clients and visitors are always welcome to schedule in-person visits during operational hours."
  },
  {
    q: "When are job vacancies announced, and how can candidates apply for jobs?",
    a: "We continuously recruit talented engineers, designers, and marketers as we scale! Active openings for Full-Stack Developers (React/Node), Mobile App Engineers, UI/UX Designers, and SEO Specialists are posted on our Careers page. You can also send your resume directly to hr.codecrafter@gmail.com or via WhatsApp at +91 93369 69289."
  },
  {
    q: "Can freshers and college students apply for internships or industrial training?",
    a: "Yes, absolutely! We welcome passionate freshers and final-year students for live project internships and hands-on industrial training across MERN stack development, modern UI/UX design, and AI integrations. Selected candidates work directly under senior engineers."
  },
  {
    q: "Where is Code Crafter Web Solutions located, and can we visit your office in person?",
    a: "Our office is located at 2nd Floor, D-20, Sarvodaya Nagar, Indira Nagar, Lucknow, Uttar Pradesh 226016. Clients, partners, and applicants are always welcome to visit our development hub for in-person meetings."
  },
  {
    q: "What core services and software solutions does Code Crafter provide?",
    a: "We provide end-to-end digital engineering services including Custom Web Development (React, Next.js, Node.js), Mobile App Development (Android & iOS), SaaS Product Architecture, UI/UX Design, and Digital Booster (SEO, Performance Marketing, and Paid Ads)."
  },
  {
    q: "How can someone quickly contact the team for an inquiry or support?",
    a: "You can reach us instantly via WhatsApp or phone call at +91 93369 69289, email us at info@codecrafter.co.in or codecrafter73@gmail.com, or submit your details in the contact form above. We respond to all queries within 2 hours."
  },
  {
    q: "Does Code Crafter work with startups, local businesses, and international clients?",
    a: "Yes! We work with early-stage startup founders building MVPs, local enterprises looking to digitize operations, as well as established international businesses across the USA, UK, Canada, Australia, and the Middle East."
  },
  {
    q: "How can I get an estimated cost quotation or project timeline?",
    a: "Simply send us your requirements via our website form, email, or WhatsApp. Our technical team reviews your scope and shares a transparent, milestone-based quotation and delivery roadmap within 24 to 48 hours."
  }
]

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(0)

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

      {/* Quick Direct Contacts Strip with Smooth Framer Motion & Glow Animations */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto select-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* CARD 1: Email Us Directly */}
          <motion.a
            href="mailto:info@codecrafter.co.in,codecrafter73@gmail.com"
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
                For RFPs, partnerships, custom architecture &amp; general inquiries.
              </p>
            </div>

            {/* Bottom Contact Anchor & Action Pill */}
            <div className="pt-4 border-t border-slate-100/90 flex items-center justify-between">
              <div className="flex flex-col gap-0.5 text-left">
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#004658] tracking-tight group-hover:underline">
                  codecrafter73@gmail.com
                </span>
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#004658] tracking-tight group-hover:underline">
                  info@codecrafter.co.in
                </span>
              </div>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#004658] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </motion.a>

          {/* CARD 2: Direct WhatsApp Chat */}
          <motion.a
            href="https://wa.me/919336969289"
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
                +91 93369 69289
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
            href="tel:+919336969289"
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
              <div className="flex flex-col gap-0.5 text-left">
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#EA580C] tracking-tight group-hover:underline">
                  hr.codecrafter@gmail.com
                </span>
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#EA580C] tracking-tight group-hover:underline">
                  +91 93369 69289
                </span>
              </div>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </motion.a>

        </div>
      </section>

      {/* Main Contact Us Form Section */}
      <Contactus />

      {/* Location and Interactive Map Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#004658]" />
            <span>Our Location &amp; Headquarters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Development Center</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Drop by our headquarters for in-person technical architecture reviews, project strategy sessions, or to meet our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Location & Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between gap-5"
          >
            {/* Card 1: Registered Office Address */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:border-[#004658]/40 transition-all duration-300 relative overflow-hidden group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 text-[#004658] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6 text-[#004658]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200/70 inline-block mb-1.5">
                    HEADQUARTERS
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-1">
                    Code Crafter Web Solutions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    2nd Floor, D-20, Sarvodaya Nagar, Indira Nagar, Lucknow, Uttar Pradesh 226016
                  </p>
                  <a
                    href="https://maps.app.goo.gl/94KCdgQSosChk7ky6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#004658] text-white text-xs font-bold hover:bg-[#003442] shadow-sm hover:shadow transition-all group/btn"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Operating Hours */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:border-[#004658]/40 transition-all duration-300 relative overflow-hidden group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200/70 inline-block mb-1.5">
                    WORKING HOURS
                  </span>
                  <h3 className="text-base font-black text-slate-900 mb-1">
                    Operating Schedule
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    <strong className="text-slate-800">Mon - Sat:</strong> 9:30 AM – 6:30 PM IST
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    <strong className="text-slate-700">Sunday:</strong> Prior appointment &amp; emergency SLA
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Quick Direct Hotline */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:border-[#004658]/40 transition-all duration-300 relative overflow-hidden group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/70 inline-block mb-1.5">
                    CALL / WHATSAPP
                  </span>
                  <h3 className="text-base font-black text-slate-900 mb-1">
                    Direct Team Connect
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                    <a
                      href="tel:+919336969289"
                      className="font-mono font-bold text-[#004658] hover:underline"
                    >
                      +91 93369 69289
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href="mailto:info@codecrafter.co.in"
                      className="font-mono font-bold text-[#004658] hover:underline"
                    >
                      info@codecrafter.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative w-full h-full min-h-[420px] sm:min-h-[480px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(0,70,88,0.12)] bg-slate-100">
              <iframe
                title="Code Crafter Web Solutions Location Map"
                src="https://maps.google.com/maps?q=26.8816387,80.9694048&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[420px] sm:min-h-[480px] border-0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Pin Badge */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200/80 shadow-md flex items-center gap-3 pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <p className="text-xs font-black text-slate-900 leading-tight">Code Crafter Web Solutions</p>
                  <p className="text-[10px] text-slate-500">Sarvodaya Nagar, Lucknow</p>
                </div>
              </div>

              {/* Floating Open Full Map Button */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href="https://maps.app.goo.gl/94KCdgQSosChk7ky6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/95 hover:bg-white text-slate-800 text-xs font-bold shadow-md hover:shadow-lg border border-slate-200 backdrop-blur-md transition-all group/pop"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/pop:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company & General FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto border-t border-slate-100">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#004658]" />
            <span>Company &amp; General FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Frequently asked questions regarding our office hours, job vacancies, internship programs, services, and how to reach Code Crafter Web Solutions.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#004658] shadow-[0_8px_30px_rgba(0,70,88,0.08)]'
                    : 'bg-white/90 border-slate-200/90 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-[#004658]' : 'text-slate-900'
                  }`}>
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#004658] text-white rotate-180 shadow-xs'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Help Card Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-50/80 via-cyan-50/50 to-white border border-teal-200/70 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              Have a custom requirement or an unlisted query?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Speak directly with our technical lead — we reply within 2 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919336969289"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:info@codecrafter.co.in"
              className="px-5 py-2.5 rounded-xl bg-[#004658] hover:bg-[#003442] text-white text-xs sm:text-sm font-bold shadow-xs transition-all"
            >
              Email Us Directly
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Contact
