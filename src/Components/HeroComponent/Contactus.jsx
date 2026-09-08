import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroVortexSwirl from '../../assets/hero_vortex_swirl.jpg'

const orbitServices = [
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "React & Next.js",
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200/80",
    path: "/web-development",
    position: "top-0 sm:top-2 left-1/2 -translate-x-1/2",
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: "ai-solutions",
    title: "AI & ML Systems",
    subtitle: "LLMs & Vectors",
    iconBg: "bg-purple-50 text-purple-600 border-purple-200/80",
    path: "/software/crm",
    position: "top-8 sm:top-12 right-0 sm:right-4 lg:right-2",
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
      </svg>
    )
  },
  {
    id: "dedicated-squads",
    title: "Dedicated Squads",
    subtitle: "Top 1% Engineers",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    path: "/team",
    position: "top-1/2 -translate-y-1/2 right-0 sm:-right-2 lg:-right-4",
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: "custom-software",
    title: "Custom Software",
    subtitle: "Enterprise SaaS",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200/80",
    path: "/software/erp",
    position: "bottom-8 sm:bottom-12 right-0 sm:right-4 lg:right-2",
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: "mobile-apps",
    title: "Mobile App Studio",
    subtitle: "iOS & Android",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    path: "/app-studio/flutter",
    position: "bottom-0 sm:bottom-2 left-1/3 -translate-x-1/2",
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
      </svg>
    )
  },
  {
    id: "uiux-design",
    title: "UI/UX Studio",
    subtitle: "Design Systems",
    iconBg: "bg-teal-50 text-teal-600 border-teal-200/80",
    path: "/web-design",
    position: "top-1/2 -translate-y-1/2 left-0 sm:-left-2 lg:-left-4",
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4c0-1.48.8-2.75 2-3.45V5a2 2 0 012-2h10a2 2 0 012 2v8.55c1.2.7 2 1.97 2 3.45a4 4 0 01-4 4H7z" />
      </svg>
    )
  }
];

const Contactus = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    natureOfBusiness: '',
    serviceRequired: 'Custom Web & SaaS Development',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Log form data to console as requested
    console.log('=== Codecrafter WEB Solution - New Contact Form Submission ===')
    console.log(formData)
    
    setIsSubmitted(true)

    // Reset success message after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        natureOfBusiness: '',
        serviceRequired: 'Custom Web & SaaS Development',
        message: ''
      })
    }, 4000)
  }

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#f3f7fb] overflow-hidden" id="contact">
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 -left-32 w-[500px] h-[500px] pointer-events-none rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.15) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-8 sm:mb-9"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.035em] text-slate-950 leading-[1.14] max-w-2xl mb-2.5">
            Let's build something <br className="hidden sm:block" />
            <span className="text-[#004658]">extraordinary together<span className="text-[#EA580C]">.</span></span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg font-normal leading-relaxed">
            Have a project in mind? Share your goals and our engineering team will get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Main Grid: Form Left, Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 lg:p-8 border border-slate-200/90 shadow-xl shadow-slate-300/30 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-950 mb-1">
                Start A Conversation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-5 sm:mb-6 font-normal">
                Tell us about your project goals and business requirements.
              </p>

              {isSubmitted && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[10px]">✓</div>
                  <div>
                    <span className="font-semibold block">Message Sent Successfully!</span>
                    <span className="text-[11px] text-emerald-700">Check browser console for submitted data.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="rahul@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Nature of Business Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                      Business Type *
                    </label>
                    <input
                      type="text"
                      name="natureOfBusiness"
                      value={formData.natureOfBusiness}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Fintech, SaaS, Healthcare"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all"
                    />
                  </div>
                </div>

                {/* Service of Interest */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Required *
                  </label>
                  <select
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all"
                  >
                    <option>Custom Web &amp; SaaS Development</option>
                    <option>UI/UX &amp; Product Design</option>
                    <option>Dedicated Squad / Staff Augmentation</option>
                    <option>Mobile App Development (iOS &amp; Android)</option>
                    <option>Enterprise ERP &amp; Cloud Migration</option>
                    <option>Digital Marketing &amp; SEO Growth</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                    Project Overview *
                  </label>
                  <textarea
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Briefly describe your project requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-[#004658] text-white font-semibold text-xs sm:text-sm shadow-md shadow-[#004658]/25 hover:bg-[#003442] hover:shadow-lg hover:-translate-y-0.5 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <span className="text-cyan-300 font-semibold">→</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Side: Combined Circular Diagram (Directly placed without background card) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex items-center justify-center relative select-none w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] py-4 lg:py-0"
          >
            {/* Soft Ambient Radial Glow */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full blur-2xl pointer-events-none opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(0, 70, 88, 0.22) 0%, rgba(234, 88, 12, 0.1) 45%, transparent 70%)'
              }}
            />

            {/* Circular Orbit Canvas */}
            <div className="relative w-[300px] h-[300px] xs:w-[340px] xs:h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] flex items-center justify-center max-w-full">
              
              {/* Outer Dashed Orbit Guideline Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 sm:inset-4 rounded-full border border-dashed border-[#004658]/20 pointer-events-none"
              />

              {/* Inner Subtle Orbit Ring */}
              <div className="absolute inset-10 sm:inset-14 rounded-full border border-slate-300/60 pointer-events-none" />

              {/* Moving Satellite Particles on Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 sm:inset-4 pointer-events-none"
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#EA580C] shadow-[0_0_10px_#EA580C]" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#004658] shadow-[0_0_8px_#004658]" />
              </motion.div>

              {/* 3D Vortex Swirl Image Layer (From 2nd Image) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute w-[190px] h-[190px] xs:w-[220px] xs:h-[220px] sm:w-[270px] sm:h-[270px] rounded-full overflow-hidden shadow-lg shadow-cyan-900/10 pointer-events-none"
              >
                <img
                  src={heroVortexSwirl}
                  alt="3D Interactive Swirl"
                  className="w-full h-full object-cover filter brightness-[1.05] contrast-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* CENTER CONVERSION DISC: SCALE TECH SQUADS */}
              <div
                className="relative z-20 w-36 h-36 xs:w-40 xs:h-40 sm:w-46 sm:h-46 rounded-full bg-white/95 backdrop-blur-xl border-2 sm:border-3 border-white shadow-[0_15px_40px_rgba(0,70,88,0.15)] flex flex-col items-center justify-center p-2.5 sm:p-3 text-center"
              >
                {/* Center Icon */}
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#004658] text-white flex items-center justify-center shadow-md shadow-[#004658]/30 mb-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-[10px] xs:text-[11px] sm:text-[12.5px] font-bold text-slate-950 tracking-tight leading-tight uppercase mb-0.5">
                  SCALE TECH SQUADS
                </h3>

                {/* Subtitle */}
                <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] font-semibold text-[#004658] uppercase tracking-wider mb-1.5 block">
                  ✦ DEDICATED SENIOR LEADS
                </span>

                {/* Action Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#004658] text-white text-[9px] xs:text-[10px] sm:text-xs font-semibold shadow-md shadow-[#004658]/25 hover:bg-[#003442] hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <span>Book Discovery Call</span>
                  <span className="text-cyan-300 font-bold">→</span>
                </Link>
              </div>

              {/* 6 Orbit Floating Service Badges (From 2nd Image) */}
              {orbitServices.map((badge) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className={`absolute ${badge.position} z-30 scale-85 xs:scale-90 sm:scale-100 origin-center`}
                >
                  <Link
                    to={badge.path}
                    className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:border-[#004658] hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg ${badge.iconBg} border flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform`}>
                      {badge.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="text-[11px] sm:text-[13px] font-semibold text-slate-950 leading-tight group-hover:text-[#004658] transition-colors">
                        {badge.title}
                      </h4>
                      <p className="text-[9px] sm:text-[10px] text-slate-500 font-normal hidden xs:block">
                        {badge.subtitle}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Smooth Curved Wave Transition into CTA */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -z-0">
        <svg className="relative block w-full h-8 sm:h-14 text-[#edf6f9] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  )
}

export default Contactus