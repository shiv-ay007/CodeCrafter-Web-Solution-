import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Code2,
  Sparkles,
  Share2,
  Search,
  Smartphone,
  PenTool,
  Palette,
  Users,
  ArrowRight,
  TrendingUp,
  Flame,
  Layers,
  Heart
} from 'lucide-react'
import heroVortexSwirl from '../../assets/hero_vortex_swirl.jpg'

// 8 Rich Ecosystem Orbit Badges (Tech Stack + Branding & Marketing Combined)
const orbitServices = [
  {
    id: "web-dev",
    title: "Web & SaaS",
    subtitle: "React & Next.js",
    iconBg: "bg-cyan-500/10 text-cyan-600 border-cyan-200/90 group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-white",
    glowColor: "hover:shadow-[0_8px_25px_rgba(6,182,212,0.35)]",
    path: "/web-development",
    position: "top-0 left-1/2 -translate-x-1/2",
    icon: <Code2 size={18} strokeWidth={2.2} />
  },
  {
    id: "ai-solutions",
    title: "AI & ML Systems",
    subtitle: "LLMs & Vectors",
    iconBg: "bg-purple-500/10 text-purple-600 border-purple-200/90 group-hover:border-purple-500 group-hover:bg-purple-500 group-hover:text-white",
    glowColor: "hover:shadow-[0_8px_25px_rgba(168,85,247,0.35)]",
    path: "/software/crm",
    position: "top-[11%] right-[1%] sm:right-[3%] lg:right-[2%]",
    icon: <Sparkles size={18} strokeWidth={2.2} />
  },
  {
    id: "social-growth",
    title: "Social & Viral",
    subtitle: "Reels & Formats",
    iconBg: "bg-pink-500/10 text-pink-600 border-pink-200/90 group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white",
    glowColor: "hover:shadow-[0_8px_25px_rgba(236,72,153,0.35)]",
    path: "/digital-booster/social-media",
    position: "top-1/2 -translate-y-1/2 right-[-8px] sm:right-[-12px] lg:right-[-10px]",
    icon: <Share2 size={18} strokeWidth={2.2} />
  },
  {
    id: "seo-ads",
    title: "SEO & Paid Ads",
    subtitle: "Organic & ROAS",
    iconBg: "bg-blue-500/10 text-blue-600 border-blue-200/90 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white",
    glowColor: "hover:shadow-[0_8px_25px_rgba(59,130,246,0.35)]",
    path: "/digital-booster/seo",
    position: "bottom-[11%] right-[1%] sm:right-[3%] lg:right-[2%]",
    icon: <Search size={18} strokeWidth={2.2} />
  },
  {
    id: "mobile-apps",
    title: "Mobile Studio",
    subtitle: "iOS & Android",
    iconBg: "bg-indigo-500/10 text-indigo-600 border-indigo-200/90 group-hover:border-indigo-500 group-hover:bg-indigo-500 group-hover:text-white",
    glowColor: "hover:shadow-[0_8px_25px_rgba(99,102,241,0.35)]",
    path: "/app-studio/flutter",
    position: "bottom-0 left-1/2 -translate-x-1/2",
    icon: <Smartphone size={18} strokeWidth={2.2} />
  },
  {
    id: "graphic-3d",
    title: "3D & Motion",
    subtitle: "Renders & Graphics",
    iconBg: "bg-orange-500/10 text-[#EA580C] border-orange-200/90 group-hover:border-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white",
    glowColor: "hover:shadow-[0_8px_25px_rgba(234,88,12,0.35)]",
    path: "/web-design",
    position: "bottom-[11%] left-[1%] sm:left-[3%] lg:left-[2%]",
    icon: <PenTool size={18} strokeWidth={2.2} />
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    subtitle: "Strategy & Systems",
    iconBg: "bg-teal-500/10 text-[#004658] border-teal-200/90 group-hover:border-[#004658] group-hover:bg-[#004658] group-hover:text-white",
    glowColor: "hover:shadow-[0_8px_25px_rgba(0,70,88,0.35)]",
    path: "/digital-booster/branding",
    position: "top-1/2 -translate-y-1/2 left-[-8px] sm:left-[-12px] lg:left-[-10px]",
    icon: <Palette size={18} strokeWidth={2.2} />
  },
  {
    id: "dedicated-squads",
    title: "Dedicated Squads",
    subtitle: "Top 1% Engineers",
    iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200/90 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white",
    glowColor: "hover:shadow-[0_8px_25px_rgba(16,185,129,0.35)]",
    path: "/team",
    position: "top-[11%] left-[1%] sm:left-[3%] lg:left-[2%]",
    icon: <Users size={18} strokeWidth={2.2} />
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
    
    console.log('=== Codecrafter WEB Solution - New Contact Form Submission ===')
    console.log(formData)
    
    setIsSubmitted(true)

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
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#f3f7fb] overflow-hidden select-none" id="contact">
      {/* Multi-Color Ambient Glow */}
      <div 
        className="absolute top-1/2 -left-32 w-[600px] h-[600px] pointer-events-none rounded-full opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.3) 0%, rgba(236, 72, 153, 0.15) 40%, rgba(255, 255, 255, 0) 70%)'
        }}
      />
      <div 
        className="absolute top-1/3 -right-32 w-[600px] h-[600px] pointer-events-none rounded-full opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(234, 88, 12, 0.25) 0%, rgba(139, 92, 246, 0.15) 40%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-[-0.035em] text-slate-950 leading-[1.12] max-w-2xl mb-3">
            Let's build something <br className="hidden sm:block" />
            <span className="text-[#004658]">extraordinary together<span className="text-[#EA580C]">.</span></span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg font-normal leading-relaxed">
            Have a project in mind? Share your goals and our engineering team will get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Main Grid: Sleek Form Left (5 Cols), Large Rich Circular Diagram Right (7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Side: Compact Contact Form (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 lg:p-8 border border-slate-200/90 shadow-xl shadow-slate-300/30 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                    Start A Conversation
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-0.5">
                    Tell us about your project goals & requirements.
                  </p>
                </div>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
              </div>

              {isSubmitted && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[10px]">✓</div>
                  <div>
                    <span className="font-semibold block">Message Sent Successfully!</span>
                    <span className="text-[11px] text-emerald-700">We will respond within 24 hours.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5" aria-label="Contact and project inquiry form">
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-fullName" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    id="contact-fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    autoComplete="name"
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="contact-email" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    autoComplete="email"
                    placeholder="rahul@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all"
                  />
                </div>

                {/* Phone & Business Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="contact-phone" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-business" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Business Type *
                    </label>
                    <input
                      id="contact-business"
                      type="text"
                      name="natureOfBusiness"
                      value={formData.natureOfBusiness}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      autoComplete="organization"
                      placeholder="e.g. Fintech, SaaS"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all"
                    />
                  </div>
                </div>

                {/* Service of Interest */}
                <div>
                  <label htmlFor="contact-service" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Service Required *
                  </label>
                  <select
                    id="contact-service"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    aria-required="true"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all"
                  >
                    <option>Custom Web &amp; SaaS Development</option>
                    <option>Brand Identity &amp; Digital Marketing</option>
                    <option>UI/UX Design &amp; 3D Motion</option>
                    <option>AI &amp; Machine Learning Systems</option>
                    <option>Dedicated Squad / Staff Augmentation</option>
                    <option>Mobile App Development (iOS &amp; Android)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Project Overview *
                  </label>
                  <textarea
                    id="contact-message"
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="Briefly describe your project requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#004658] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#004658]/25 hover:bg-[#003442] hover:shadow-lg hover:-translate-y-0.5 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-1"
                >
                  <span>Submit Inquiry</span>
                  <span className="text-cyan-300 font-bold">→</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Side: Larger, Richer & Colorful Circular Diagram (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 flex items-center justify-center relative select-none w-full min-h-[500px] sm:min-h-[580px] lg:min-h-[620px] py-6 lg:py-0 overflow-visible"
          >
            {/* Soft Ambient Multi-Color Radial Glow */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl pointer-events-none opacity-45"
              style={{
                background: 'radial-gradient(circle, rgba(0, 70, 88, 0.3) 0%, rgba(236, 72, 153, 0.18) 35%, rgba(234, 88, 12, 0.15) 60%, transparent 80%)'
              }}
            />

            {/* Circular Orbit Canvas (Expanded Size) */}
            <div className="relative w-[340px] h-[340px] xs:w-[390px] xs:h-[390px] sm:w-[500px] sm:h-[500px] lg:w-[560px] lg:h-[560px] xl:w-[600px] xl:h-[600px] flex items-center justify-center max-w-full">
              
              {/* Outer Dashed Orbit Guideline Ring with Gradient Glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
                className="absolute inset-1 sm:inset-3 rounded-full border border-dashed border-[#004658]/25 pointer-events-none"
              />

              {/* Middle Colorful Orbit Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 sm:inset-12 rounded-full border border-slate-300/80 pointer-events-none"
              />

              {/* Moving Satellite Colored Particles on Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-1 sm:inset-3 pointer-events-none"
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#EA580C] shadow-[0_0_12px_#EA580C]" />
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#004658] shadow-[0_0_10px_#004658]" />
                <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              </motion.div>

              {/* 3D Vortex Swirl Image Layer (Enlarged) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                className="absolute w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[330px] sm:h-[330px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-2xl shadow-cyan-950/20 pointer-events-none"
              >
                <img
                  src={heroVortexSwirl}
                  alt="3D Interactive Tech & Marketing Squad Orbit - CodeCrafter Web Solution"
                  loading="lazy"
                  decoding="async"
                  width="380"
                  height="380"
                  className="w-full h-full object-cover filter brightness-[1.05] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* CENTER CONVERSION DISC: LUXURY & AESTHETIC FULL-STACK ECOSYSTEM */}
              <div
                className="relative z-20 w-38 h-38 xs:w-44 xs:h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full bg-gradient-to-b from-white via-[#f7fbfa] to-[#e8f4f7] backdrop-blur-2xl border-3 sm:border-4 border-white ring-4 sm:ring-6 ring-white/60 shadow-[0_24px_60px_-10px_rgba(0,70,88,0.3),0_0_35px_rgba(234,88,12,0.12)] flex flex-col items-center justify-center p-3 sm:p-4 text-center group cursor-pointer hover:scale-104 transition-all duration-400"
              >
                {/* Jewel-like Gradient Center Icon */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-[#004658] via-[#024353] to-[#EA580C] text-white flex items-center justify-center shadow-lg shadow-[#004658]/35 mb-1.5 p-0.5 group-hover:rotate-6 transition-transform duration-300">
                  <div className="w-full h-full rounded-[14px] bg-[#004658]/30 backdrop-blur-xs flex items-center justify-center">
                    <Sparkles size={17} className="text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                  </div>
                </div>

                {/* Aesthetic Gradient Headline */}
                <h3 className="text-[11px] xs:text-[12.5px] sm:text-[14px] font-black tracking-tight leading-tight uppercase mb-0.5 bg-gradient-to-r from-slate-950 via-[#004658] to-[#EA580C] bg-clip-text text-transparent">
                  FULL ECOSYSTEM
                </h3>

                {/* Subtitle Pill */}
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#004658]/8 border border-[#004658]/15 text-[#004658] text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-bold tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
                  <span>TECH · BRAND · GROWTH</span>
                </div>

                {/* Premium High-Gloss Action Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4.5 sm:py-2 rounded-full bg-gradient-to-r from-[#004658] via-[#013542] to-[#004658] text-white text-[9.5px] xs:text-[10.5px] sm:text-xs font-bold shadow-[0_4px_16px_rgba(0,70,88,0.35)] hover:shadow-[0_8px_25px_rgba(0,70,88,0.45)] hover:scale-105 transition-all duration-300 border border-cyan-300/30"
                >
                  <span>Book Strategy Call</span>
                  <span className="text-cyan-300 font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
              </div>

              {/* 8 Orbit Floating Service Badges (Combining Tech, Branding & Marketing) */}
              {orbitServices.map((badge) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className={`absolute ${badge.position} z-30 scale-85 xs:scale-90 sm:scale-95 lg:scale-100 origin-center`}
                >
                  <Link
                    to={badge.path}
                    className={`flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-sm ${badge.glowColor} transition-all duration-300 cursor-pointer group hover:border-transparent`}
                  >
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl ${badge.iconBg} border flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-all duration-300`}>
                      {badge.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="text-[11px] sm:text-[12.5px] font-bold text-slate-950 leading-tight group-hover:text-[#004658] transition-colors whitespace-nowrap">
                        {badge.title}
                      </h4>
                      <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium hidden xs:block whitespace-nowrap">
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