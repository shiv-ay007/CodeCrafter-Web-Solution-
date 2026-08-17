import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroVortexSwirl from "../../assets/hero_vortex_swirl.jpg";

const orbitingServices = [
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "React & Next.js",
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200/80",
    position: "top-0 sm:top-2 left-1/2 -translate-x-1/2",
    centerTitle: "HIRE WEB DEVELOPERS",
    centerBadge: "48-HR SQUAD ONBOARDING",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: "ai-solutions",
    title: "AI & ML Systems",
    subtitle: "LLMs & Vectors",
    iconBg: "bg-purple-50 text-purple-600 border-purple-200/80",
    position: "top-10 sm:top-14 right-2 sm:right-6 lg:right-10",
    centerTitle: "DEPLOY AI SOLUTIONS",
    centerBadge: "CUSTOM LLMS & WORKFLOWS",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
      </svg>
    )
  },
  {
    id: "dedicated-squads",
    title: "Dedicated Squads",
    subtitle: "Top 1% Engineers",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    position: "top-1/2 -translate-y-1/2 right-0 sm:-right-4 lg:-right-6",
    centerTitle: "SCALE TECH SQUADS",
    centerBadge: "DEDICATED SENIOR LEADS",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: "custom-software",
    title: "Custom Software",
    subtitle: "Enterprise SaaS",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200/80",
    position: "bottom-10 sm:bottom-12 right-2 sm:right-8 lg:right-12",
    highlight: true,
    centerTitle: "BUILD CUSTOM SAAS",
    centerBadge: "HIGH-THROUGHPUT ARCHITECTURE",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: "mobile-apps",
    title: "Mobile App Studio",
    subtitle: "iOS & Android",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    position: "bottom-0 sm:bottom-2 left-1/3 -translate-x-1/2",
    centerTitle: "NATIVE MOBILE APPS",
    centerBadge: "60 FPS FLUID PERFORMANCE",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
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
    position: "top-1/2 -translate-y-1/2 left-0 sm:-left-4 lg:-left-6",
    centerTitle: "PRODUCT UI/UX DESIGN",
    centerBadge: "INTERACTIVE FIGMA SYSTEMS",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4c0-1.48.8-2.75 2-3.45V5a2 2 0 012-2h10a2 2 0 012 2v8.55c1.2.7 2 1.97 2 3.45a4 4 0 01-4 4H7z" />
      </svg>
    )
  }
];

const Cta = () => {
  const [activeCenterText, setActiveCenterText] = useState({
    title: "START YOUR PROJECT",
    badge: "FREE 45-MIN CONSULTATION"
  });

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden" id="cta">
      
      {/* Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none rounded-full opacity-30 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.18) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-6 sm:mb-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
            <span>START SCALING TODAY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-slate-950 tracking-[-0.03em] leading-tight mb-2.5">
            Ready to accelerate your next <br className="hidden sm:inline" />
            <span className="text-[#004658]">digital engineering milestone<span className="text-[#EA580C]">?</span></span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
            Get a tailored architecture blueprint, dedicated squad matching, and transparent project estimation within 24 hours.
          </p>
        </motion.div>
      </div>

      {/* 3D VORTEX SWIRL CTA ORBIT CONTAINER */}
      <div className="relative max-w-[620px] mx-auto h-[360px] sm:h-[440px] lg:h-[480px] flex items-center justify-center">
        
        {/* Outer Fine Orbit Guideline Ring */}
        <div className="absolute inset-3 sm:inset-6 border border-dashed border-slate-300/80 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]" />

        {/* 3D Vortex Swirl Image Layer */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-xl shadow-cyan-900/15"
        >
          <img
            src={heroVortexSwirl}
            alt="3D Interactive Swirl"
            className="w-full h-full object-cover filter brightness-[1.05] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* CENTER CONVERSION DISC & CTA BUTTON */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="absolute z-20 w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full bg-white/95 backdrop-blur-xl border-3 border-white shadow-[0_20px_50px_rgba(0,70,88,0.15)] flex flex-col items-center justify-center p-4 text-center"
        >
          {/* Rocket / Bolt Icon */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#004658] text-white flex items-center justify-center shadow-md shadow-[#004658]/30 mb-1.5">
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          {/* Dynamic Active CTA Action Title */}
          <h3 className="text-xs sm:text-sm lg:text-[15px] font-black text-slate-950 tracking-tight leading-tight mb-0.5">
            {activeCenterText.title}
          </h3>

          {/* Dynamic Offer Badge */}
          <span className="text-[9.5px] sm:text-[10.5px] font-bold text-[#004658] uppercase tracking-wider mb-2.5 block">
            ✦ {activeCenterText.badge}
          </span>

          {/* High-Converting Primary Action Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#004658] text-white text-[11px] sm:text-xs font-bold shadow-md shadow-[#004658]/25 hover:bg-[#003442] hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            <span>Book Discovery Call</span>
            <span className="text-cyan-300">→</span>
          </Link>

          <span className="text-[9px] text-slate-500 font-medium mt-1">
            No commitment • NDA signed
          </span>
        </motion.div>

        {/* 6 ORBITING SERVICE OFFERING BADGES */}
        {orbitingServices.map((badge) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.06, y: -3 }}
            onMouseEnter={() => {
              setActiveCenterText({
                title: badge.centerTitle,
                badge: badge.centerBadge
              });
            }}
            className={`absolute ${badge.position} z-30`}
          >
            <div className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/95 backdrop-blur-xl border ${badge.highlight ? "border-[#004658] ring-1 ring-[#004658]/20 shadow-md" : "border-slate-200/90 shadow-sm"} flex items-center gap-2 cursor-pointer hover:border-[#004658] transition-all duration-300`}>
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${badge.iconBg} border flex items-center justify-center shrink-0 shadow-2xs`}>
                {badge.icon}
              </div>
              <div className="text-left">
                <h4 className="text-[11px] sm:text-xs font-black text-slate-950 leading-tight">
                  {badge.title}
                </h4>
                <p className="text-[9.5px] sm:text-[10px] text-slate-500 font-medium">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Bottom Trust Highlights */}
      <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-4 sm:gap-7 text-xs font-bold text-slate-600">
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px]">✓</span>
          <span>48-Hour Dedicated Squad Setup</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-[10px]">✓</span>
          <span>Free Architecture Roadmap</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px]">✓</span>
          <span>100% IP & Source Code Ownership</span>
        </div>
      </div>

      {/* Bottom Smooth Curved Wave Transition into Footer */}
      <div className="w-full overflow-hidden leading-none mt-10 pointer-events-none -mb-1">
        <svg className="relative block w-full h-8 sm:h-14 text-[#e3edf2] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default Cta;