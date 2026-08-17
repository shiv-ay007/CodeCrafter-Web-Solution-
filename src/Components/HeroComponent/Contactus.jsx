import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contactus = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessType: '',
    projectDetails: ''
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
        businessType: '',
        projectDetails: ''
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-[-0.03em] text-slate-950 leading-tight max-w-2xl mb-2.5">
            Let's build something <br className="hidden sm:block" />
            extraordinary <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#0086a8]">together</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
            Have a project in mind or want to discuss custom software solutions? Fill out the form and our engineering team will get back to you within 24 hours.
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-1">
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
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
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
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
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
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
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
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nature of Business
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all"
                    >
                      <option value="">Select industry vertical</option>
                      <option value="startup">Tech Startup / Scaleup</option>
                      <option value="enterprise">Enterprise / Corporate</option>
                      <option value="ecommerce">E-Commerce &amp; Retail</option>
                      <option value="healthcare">Healthcare &amp; MedTech</option>
                      <option value="fintech">Fintech &amp; Banking</option>
                      <option value="other">Other Domain</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Project Details / Requirements *
                  </label>
                  <textarea
                    name="projectDetails"
                    rows="3"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                    placeholder="Briefly describe your goals, required technologies, or timeline..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#004658] focus:bg-white focus:ring-2 focus:ring-[#004658]/10 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-[#004658] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-[#004658]/25 hover:bg-[#003442] hover:shadow-lg hover:-translate-y-0.5 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <span className="text-cyan-300 font-bold">→</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Side: High-End Visual Card & Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#004658] via-[#003c4c] to-[#002732] text-white rounded-2xl overflow-hidden shadow-xl shadow-[#004658]/20 flex flex-col justify-between relative border border-teal-800/40"
          >
            {/* Image Banner Container */}
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="Codecrafter Office & Studio"
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004658] via-[#004658]/40 to-transparent" />
              
              <div className="absolute bottom-3 left-4 right-4">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider">
                  HQ & Digital Studio
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">Codecrafter Web Solutions</h4>
              </div>
            </div>

            {/* Contact Details Content */}
            <div className="p-4 sm:p-5 space-y-4 flex-1 flex flex-col justify-center">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-sm">
                  ✉️
                </div>
                <div>
                  <span className="text-[10px] text-white/60 font-medium uppercase tracking-wider block">Official Email</span>
                  <a href="mailto:contact@codecrafter.web" className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-200 transition-colors">
                    contact@codecrafter.web
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-sm">
                  📞
                </div>
                <div>
                  <span className="text-[10px] text-white/60 font-medium uppercase tracking-wider block">Direct Line</span>
                  <a href="tel:+919876543210" className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-200 transition-colors">
                    +91 98765 43210 / +91 87654 32109
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-sm">
                  📍
                </div>
                <div>
                  <span className="text-[10px] text-white/60 font-medium uppercase tracking-wider block">Development Hub</span>
                  <p className="text-xs sm:text-sm font-medium text-white/90 leading-snug">
                    Gomti Nagar Lucknow, India
                  </p>
                </div>
              </div>

              {/* Response SLA */}
              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-white/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Average Response: &lt; 2 Hours
                </span>
                <span>24/7 Support</span>
              </div>
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