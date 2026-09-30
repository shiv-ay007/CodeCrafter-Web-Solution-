import React from "react";
import { motion } from "framer-motion";
import { Palette, Layers, Code2, LayoutGrid, Sparkles, Rocket } from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    label: "FIGMA",
    title: "Visual Design",
    desc: "Precision design tokens & UI specs",
    icon: <Palette className="w-5 h-5 text-[#004658]" />
  },
  {
    step: "02",
    label: "COMPONENTS",
    title: "Reusable UI",
    desc: "Atomic & accessible primitives",
    icon: <Layers className="w-5 h-5 text-[#004658]" />
  },
  {
    step: "03",
    label: "REACT",
    title: "Frontend Architecture",
    desc: "Type-safe reactive state logic",
    icon: <Code2 className="w-5 h-5 text-[#004658]" />
  },
  {
    step: "04",
    label: "RESPONSIVE UI",
    title: "Every Screen",
    desc: "Fluid layouts for desktop & mobile",
    icon: <LayoutGrid className="w-5 h-5 text-[#004658]" />
  },
  {
    step: "05",
    label: "INTERACTIONS",
    title: "Motion & Feedback",
    desc: "60 FPS animations & micro-gestures",
    icon: <Sparkles className="w-5 h-5 text-[#004658]" />
  },
  {
    step: "06",
    label: "PRODUCTION",
    title: "Optimized Experience",
    desc: "Sub-second edge build deployment",
    icon: <Rocket className="w-5 h-5 text-[#004658]" />
  }
];

const SectionDesignToBrowser = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden select-none bg-gradient-to-b from-[#F4F9FA] to-[#FBFDFD]">
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
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span>Design to Code Pipeline</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] font-['Outfit',sans-serif]"
          >
            From design to a living interface.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl leading-relaxed"
          >
            We transform visual concepts into reusable components, responsive layouts and production-ready frontend experiences.
          </motion.p>
        </div>

        {/* Connected Workflow Nodes Grid */}
        <div className="relative">
          {/* Animated Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-[#004658]/20 via-[#004658] to-[#00a8cc] -translate-y-6 -z-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
            {workflowSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-5 rounded-2xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-xl hover:border-[#004658]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-black text-[#004658] px-2 py-0.5 rounded bg-[#004658]/8">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#004658]/10 flex items-center justify-center group-hover:bg-[#004658] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {item.label}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-1 font-['Outfit',sans-serif]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDesignToBrowser;
