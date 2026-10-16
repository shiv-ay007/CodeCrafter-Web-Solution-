import React from 'react'
import { Link } from 'react-router-dom'
import teamWorkspace from "../../assets/images/aboutstory.jpg";
const AboutMe = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto overflow-hidden" id="about">
      
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 -left-24 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.25) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Story & Stats Text */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-8 text-left">
          <div>
            {/* Tag / Category Line */}
            <div className="flex items-center gap-2.5 text-[#004658] font-bold text-xs uppercase tracking-widest mb-4">
              <span className="w-6 h-[2px] bg-[#004658] inline-block rounded-full" />
              <span>OUR STORY</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-6">
             Building Digital  <br />
              <span className="text-[#004658]">— Excellence Since 2019</span>
            </h2>

            {/* Main Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-5">
              We are a passionate team of designers, developers, and strategists creating digital products with simplicity, speed, and quality.
            </p>

            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
              Our commitment to craftsmanship, clean architecture, and client success has made us a trusted technology partner for growing businesses worldwide.
            </p>
          </div>

          {/* Bottom Stats Counters Bar */}
          <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl sm:text-4xl font-extrabold text-[#004658] tracking-tight">2023</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Founded</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-extrabold text-[#004658] tracking-tight">500</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-extrabold text-[#004658] tracking-tight">300+</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Projects Delivered</div>
            </div>
          </div>

        </div>

        {/* Right Column: Premium Rounded Image Showcase */}
       <div className="lg:col-span-6 relative">
  <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#004658]/15 shadow-2xl bg-slate-900 group">
    <img
      src={teamWorkspace}
      alt="Codecrafter Team Workspace"
      className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
    />
  </div>
  </div>

      </div>
    </section>
  )
}

export default AboutMe