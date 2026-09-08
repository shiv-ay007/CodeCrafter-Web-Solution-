import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden" id="cta">
      
      {/* Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none rounded-full opacity-30 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.18) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto text-center mb-6 sm:mb-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
            <span>START SCALING TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-950 tracking-[-0.035em] leading-tight mb-2.5">
            Ready to accelerate your next <br className="hidden sm:inline" />
            <span className="text-[#004658]">digital engineering milestone<span className="text-[#EA580C]">?</span></span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-lg mx-auto leading-relaxed mb-6">
            Get a custom architecture plan, dedicated squad matching, and project estimation within 24 hours.
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-7">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#004658] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#004658]/25 hover:bg-[#003442] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Book Discovery Call</span>
              <span className="text-cyan-300 font-semibold">→</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white text-[#004658] font-semibold text-sm sm:text-base border border-slate-200 shadow-xs hover:border-[#004658]/40 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Schedule a Call</span>
            </Link>
          </div>
        </motion.div>
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