import React from "react";
import { motion } from "framer-motion";
import { Layout, Component, MousePointerClick, Smartphone, Eye } from "lucide-react";
import featuredImg2 from "../../assets/images/featured-img2.png";

const SectionEverythingUsersSee = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden select-none bg-[#FBFDFD]">
      {/* Background Soft Mesh & Dotted Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#004658 1.4px, transparent 1.4px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 70, 88, 0.25) 0%, rgba(0, 168, 204, 0.1) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5 shadow-2xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
            <span>Frontend Anatomy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] font-['Outfit',sans-serif]"
          >
            Everything users see, touch & experience.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl leading-relaxed"
          >
            Frontend is where design becomes interaction — from navigation and layouts to animations, forms and responsive experiences.
          </motion.p>
        </div>

        {/* Large Visual Browser Anatomy Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Browser Frame */}
          <div className="rounded-3xl border border-[#004658]/20 bg-white shadow-[0_25px_60px_rgba(0,70,88,0.1)] overflow-hidden backdrop-blur-xl p-3 sm:p-5">
            {/* Top Window Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-3 bg-slate-50/80 rounded-t-2xl">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="px-4 py-1 rounded-full bg-white text-[10px] sm:text-xs font-mono text-slate-500 border border-slate-200/80 shadow-2xs">
                codecrafter.io/ui-anatomy
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#004658]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="hidden sm:inline">Active UI Engine</span>
              </div>
            </div>

            {/* Featured Image inside Browser Frame */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 transition-transform duration-700 group-hover:scale-[1.01]">
              <img
                src={featuredImg2}
                alt="Frontend Anatomy Showcase"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Floating Anatomy Label Badges with Connecting Lines */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex absolute -top-4 -left-12 px-3.5 py-2 rounded-xl bg-white border border-[#004658]/20 shadow-xl items-center gap-2 text-xs font-bold text-[#004658]"
          >
            <Layout className="w-4 h-4 text-[#004658]" />
            <span>Navigation</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex absolute top-1/4 -right-12 px-3.5 py-2 rounded-xl bg-white border border-[#004658]/20 shadow-xl items-center gap-2 text-xs font-bold text-[#004658]"
          >
            <Component className="w-4 h-4 text-[#004658]" />
            <span>Components</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:flex absolute bottom-1/3 -left-12 px-3.5 py-2 rounded-xl bg-white border border-[#004658]/20 shadow-xl items-center gap-2 text-xs font-bold text-[#004658]"
          >
            <MousePointerClick className="w-4 h-4 text-[#004658]" />
            <span>Interaction</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden lg:flex absolute -bottom-4 -right-10 px-3.5 py-2 rounded-xl bg-white border border-[#004658]/20 shadow-xl items-center gap-2 text-xs font-bold text-[#004658]"
          >
            <Smartphone className="w-4 h-4 text-[#004658]" />
            <span>Responsive</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hidden lg:flex absolute -bottom-4 left-1/3 px-3.5 py-2 rounded-xl bg-white border border-[#004658]/20 shadow-xl items-center gap-2 text-xs font-bold text-[#004658]"
          >
            <Eye className="w-4 h-4 text-[#004658]" />
            <span>Accessibility</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionEverythingUsersSee;
