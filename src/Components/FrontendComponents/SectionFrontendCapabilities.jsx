import React from "react";
import { motion } from "framer-motion";
import { Monitor, Cpu, MousePointerClick, Layout, Sparkles, Eye } from "lucide-react";

const SectionFrontendCapabilities = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden select-none bg-[#FBFDFD]">
      {/* Background Micro-Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#004658 1.4px, transparent 1.4px)`,
          backgroundSize: "28px 28px",
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
            <span>Frontend Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] font-['Outfit',sans-serif]"
          >
            Everything your interface needs.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl leading-relaxed"
          >
            From responsive layouts to interactive experiences, we build the frontend layer that makes digital products usable and engaging.
          </motion.p>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* LARGE BENTO CARD: Responsive Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 p-7 rounded-3xl bg-gradient-to-br from-white to-[#F4F9FA] border border-[#004658]/20 shadow-lg hover:shadow-xl hover:border-[#004658]/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-[#004658] flex items-center justify-center font-bold">
                  <Monitor className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#004658]/8 text-[#004658] text-[10.5px] font-mono font-bold uppercase tracking-wider">
                  Core Discipline
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-3 font-['Outfit',sans-serif]">
                Responsive Web Development
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6 max-w-xl">
                Layouts that adapt naturally across desktop, tablet and mobile screens — engineered with fluid breakpoints and touch-first usability.
              </p>
            </div>

            {/* Mini Responsive Graphical Diagram */}
            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Desktop (1440px)</span>
                <span className="text-slate-300">→</span>
                <span>Tablet (768px)</span>
                <span className="text-slate-300">→</span>
                <span>Mobile (375px)</span>
              </div>
            </div>
          </motion.div>

          {/* MEDIUM CARD 1: React Development */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-7 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-xl hover:border-[#004658]/30 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-[#004658] flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 mb-3 font-['Outfit',sans-serif]">
                React Development
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Reusable components and scalable frontend architecture with strict type safety and modular state management.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-[#004658]">
              React 19 & Next.js
            </div>
          </motion.div>

          {/* MEDIUM CARD 2: Interactive UI */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-7 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-xl hover:border-[#004658]/30 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-[#004658] flex items-center justify-center mb-6">
                <MousePointerClick className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 mb-3 font-['Outfit',sans-serif]">
                Interactive UI
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Menus, forms, filters, modals, sliders and dynamic interactions built for instant user feedback.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-[#004658]">
              Dynamic Controls
            </div>
          </motion.div>

          {/* SMALL CARD 1: UI Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-7 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-xl hover:border-[#004658]/30 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-[#004658] flex items-center justify-center mb-6">
                <Layout className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 mb-3 font-['Outfit',sans-serif]">
                UI Implementation
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Turning visual designs into clean, accurate and functional interfaces with 1:1 design fidelity.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-[#004658]">
              Figma to Browser
            </div>
          </motion.div>

          {/* SMALL CARD 2: Motion & Animation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-7 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-xl hover:border-[#004658]/30 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 text-[#004658] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 mb-3 font-['Outfit',sans-serif]">
                Motion & Animation
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Subtle animations and micro-interactions that enhance usability without cluttering performance.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-[#004658]">
              60 FPS Kinetic UI
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionFrontendCapabilities;
