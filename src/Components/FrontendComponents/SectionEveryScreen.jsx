import React from "react";
import { motion } from "framer-motion";
import { Monitor, Tablet, Smartphone, Sparkles, Check } from "lucide-react";
import featuredImg3 from "../../assets/images/featured-img1.png";
import featuredImg5 from "../../assets/images/featured-img6.png";
import featuredImg6 from "../../assets/images/featured-img5.png";

const SectionEveryScreen = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden select-none bg-[#FBFDFD]">
      {/* Background Soft Orbital & Dotted Graphics */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#004658 1.4px, transparent 1.4px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 70, 88, 0.25) 0%, rgba(0, 216, 255, 0.15) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5 shadow-2xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
            <span>Responsive Engineering</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] font-['Outfit',sans-serif]"
          >
            One interface. Every screen.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl leading-relaxed"
          >
            A great frontend experience should feel consistent whether your users are on desktop, tablet or mobile.
          </motion.p>
        </div>

        {/* Device Composition Presentation */}
        <div className="relative max-w-5xl mx-auto pt-6 pb-12 flex items-center justify-center">
          
          {/* Floating Tags Around Devices */}
          <div className="absolute top-0 left-4 sm:left-12 px-3 py-1 rounded-full bg-white border border-[#004658]/20 shadow-md text-[11px] font-mono font-bold text-[#004658] z-20 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-500" /> Responsive
          </div>

          <div className="absolute top-0 right-4 sm:right-12 px-3 py-1 rounded-full bg-white border border-[#004658]/20 shadow-md text-[11px] font-mono font-bold text-[#004658] z-20 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-500" /> Mobile First
          </div>

          <div className="absolute bottom-2 left-8 sm:left-24 px-3 py-1 rounded-full bg-white border border-[#004658]/20 shadow-md text-[11px] font-mono font-bold text-[#004658] z-20 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-500" /> Adaptive Layout
          </div>

          <div className="absolute bottom-2 right-8 sm:right-24 px-3 py-1 rounded-full bg-white border border-[#004658]/20 shadow-md text-[11px] font-mono font-bold text-[#004658] z-20 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-500" /> Touch Friendly
          </div>

          {/* 1. DESKTOP BROWSER (Centered, Largest, Behind) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-3xl rounded-3xl border border-[#004658]/20 bg-white shadow-2xl overflow-hidden p-3 relative z-10"
          >
            {/* Desktop Window Bar */}
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-100 mb-2.5 bg-slate-50/80 rounded-t-xl">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 font-bold flex items-center gap-1">
                <Monitor className="w-3 h-3 text-[#004658]" /> DESKTOP (1920px)
              </span>
            </div>

            {/* Desktop Image Content */}
            <div className="rounded-xl overflow-hidden border border-slate-100">
              <img
                src={featuredImg3}
                alt="Responsive Engineering Showcase"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </motion.div>

          {/* 2. TABLET MOCKUP (Overlapping from Left - featured-img6) */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="absolute -left-2 sm:left-4 bottom-6 w-44 sm:w-56 rounded-2xl border border-slate-200 bg-white shadow-2xl p-2 z-20 -rotate-3 hover:rotate-0 transition-transform duration-500"
          >
            <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-slate-100 text-[9px] font-mono text-slate-500 font-bold">
              <span className="flex items-center gap-1">
                <Tablet className="w-3 h-3 text-[#004658]" /> TABLET
              </span>
              <span className="text-emerald-600">768px</span>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-100">
              <img
                src={featuredImg6}
                alt="Tablet Layout Preview"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </motion.div>

          {/* 3. MOBILE MOCKUP (Overlapping from Right - featured-img5) */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="absolute -right-2 sm:right-4 bottom-4 w-28 sm:w-36 rounded-3xl border-2 border-slate-800 bg-white shadow-2xl p-1.5 z-30 rotate-6 hover:rotate-0 transition-transform duration-500"
          >
            <div className="w-8 h-1 bg-slate-800 rounded-full mx-auto mb-1" />
            <div className="flex items-center justify-between text-[8px] font-mono font-bold text-slate-500 mb-1 px-0.5">
              <span className="flex items-center gap-0.5">
                <Smartphone className="w-2.5 h-2.5 text-[#004658]" /> MOBILE
              </span>
              <span className="text-emerald-600">375px</span>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-100">
              <img
                src={featuredImg5}
                alt="Mobile Layout Preview"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionEveryScreen;
