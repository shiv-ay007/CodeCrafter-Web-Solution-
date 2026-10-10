import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Users, TrendingUp, Sparkles, Quote } from 'lucide-react'
import ceoImg from '../../assets/images/ceo-img.png'

const valueCards = [
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Creating better solutions.',
    icon: Lightbulb
  },
  {
    id: 'people',
    title: 'People',
    description: 'Building stronger teams.',
    icon: Users
  },
  {
    id: 'growth',
    title: 'Growth',
    description: 'Empowering businesses.',
    icon: TrendingUp
  }
]

const CEOSpotlight = () => {
  return (
    <section className="relative py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto select-none overflow-hidden" id="ceo-spotlight">
      
      {/* Soft Ambient Background Glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.25) 0%, rgba(0, 216, 255, 0.12) 50%, rgba(255, 255, 255, 0) 75%)'
        }}
      />

      {/* Main Premium Editorial Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-100/70 p-6 sm:p-8 lg:p-10 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Side: Refined Portrait with Decorative Cyan Shape & Overlapping Badge (~42% width) */}
          <div className="lg:col-span-5 relative max-w-sm sm:max-w-md mx-auto lg:max-w-none w-full">
            
            {/* Subtle Light-Cyan Decorative Shape Behind Portrait */}
            <div 
              className="absolute -top-3 -bottom-3 -left-3 -right-3 sm:-top-4 sm:-bottom-4 sm:-left-4 sm:-right-4 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#e0f4f7] via-[#e9f7fa] to-[#d4f0f6] border border-cyan-100/70 shadow-sm -rotate-2 -z-10 transition-transform duration-500 hover:rotate-0" 
            />

            {/* Refined Rounded-Rectangle Portrait Frame */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-slate-100 group">
              <img
                src={ceoImg}
                alt="Aksa Nasir - Founder & CEO CodeCrafter Web Solutions"
                className="w-full h-full object-cover object-top hover:scale-104 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent opacity-50" />
            </div>

            {/* Floating CEO Profile Card Overlapping Portrait's Bottom Edge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute -bottom-3 left-4 sm:-bottom-4 sm:left-6 z-20 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-3.5 shadow-lg shadow-slate-900/10 border border-slate-200/90 flex items-center gap-3 max-w-[260px] sm:max-w-[290px]"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#004658] text-white flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 shadow-sm">
                AN
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                  Aksa Nasir
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#004658] bg-[#004658]/8 px-2 py-0.5 rounded-md inline-block w-fit mt-0.5">
                  Woman Entrepreneur · CodeCrafter
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Editorial Content & Compact Value Cards (~58% width) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left pt-2 lg:pt-0">
            
            {/* Leadership Badge */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] font-extrabold uppercase tracking-widest mb-3.5 sm:mb-4 w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#004658]" />
              <span>LEADERSHIP / OUR VISION</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-5"
            >
              <span className="text-slate-900">Building Technology </span>
              <span className="text-[#004658]">With Purpose</span>
            </motion.h2>

            {/* Leadership Quote with Oversized Quote Icon & Teal Accent Line */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="relative mb-6 sm:mb-7 pl-4 sm:pl-5 border-l-3 border-[#004658]"
            >
              <Quote className="w-6 h-6 text-[#004658]/20 absolute -top-2 left-3 pointer-events-none -z-10" />
              
              <blockquote className="text-sm sm:text-base lg:text-lg font-medium text-slate-700 italic leading-relaxed mb-3">
                “We believe in using technology to create opportunities, solve real problems, and build a better tomorrow.”
              </blockquote>
              
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  Aksa Nasir
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  Woman Entrepreneur · CodeCrafter Web Solutions
                </p>
              </div>
            </motion.div>

            {/* Three Compact Value Cards */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5"
            >
              {valueCards.map((card) => {
                const IconComponent = card.icon
                return (
                  <div
                    key={card.id}
                    className="group relative bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-[#004658]/30 rounded-xl p-3.5 shadow-2xs hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-[#004658] group-hover:bg-[#004658] group-hover:text-white transition-colors duration-300 mb-2">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-0.5 group-hover:text-[#004658] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-snug font-normal">
                      {card.description}
                    </p>
                  </div>
                )
              })}
            </motion.div>

          </div>

        </div>
      </motion.div>

    </section>
  )
}

export default CEOSpotlight
