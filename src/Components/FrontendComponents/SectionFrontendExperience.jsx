import React from "react";
import { motion } from "framer-motion";
import featuredImg from "../../assets/images/featured-img.png";

const floatingBadges = [
  { text: "React 19", pos: "-top-3 -left-3 sm:-left-6" },
  { text: "Responsive UI", pos: "top-1/4 -right-4 sm:-right-8" },
  { text: "Interactive Design", pos: "-top-3 -right-3 sm:-right-6" },
  { text: "Component Based", pos: "bottom-1/3 -left-4 sm:-left-8" },
  { text: "Accessible", pos: "-bottom-3 -left-2 sm:left-6" },
  { text: "Fast Performance", pos: "-bottom-3 -right-2 sm:right-6" }
];

const SectionFrontendExperience = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden select-none bg-gradient-to-b from-[#F4F9FA] to-[#FBFDFD]">
      {/* Background Soft Aura & Dotted Texture */}
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
            "radial-gradient(circle, rgba(0, 216, 255, 0.25) 0%, rgba(0, 70, 88, 0.15) 50%, transparent 70%)",
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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Frontend Experience Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] font-['Outfit',sans-serif]"
          >
            Interfaces users can see. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#00738e] to-[#00a3c4]">
              Experiences they can feel.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl leading-relaxed"
          >
            Every interaction matters. We turn ideas and visual designs into intuitive, responsive and production-ready frontend experiences.
          </motion.p>
        </div>

        {/* Central Graphic Browser Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto group"
        >
          {/* Subtle Ambient Radial Lighting behind Browser */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#004658]/15 via-[#00D8FF]/20 to-[#004658]/15 rounded-[40px] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Main White Browser Window */}
          <div className="relative rounded-3xl border border-[#004658]/20 bg-white shadow-[0_25px_70px_rgba(0,70,88,0.12)] overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 p-3 sm:p-5">
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-3 bg-slate-50/90 rounded-2xl">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="px-4 py-1 rounded-full bg-white text-[10px] sm:text-xs font-mono text-slate-500 border border-slate-200/80 shadow-2xs">
                https://studio.codecrafter.io/frontend-experience
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#004658]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>60 FPS</span>
              </div>
            </div>

            {/* Featured Image inside Browser Frame */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 transition-transform duration-700 group-hover:scale-[1.01]">
              <img
                src={featuredImg}
                alt="Frontend Experience Showcase"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Floating Badges Around Browser */}
          {floatingBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className={`absolute ${badge.pos} px-3.5 py-1.5 rounded-full bg-white border border-[#004658]/20 shadow-lg text-[#004658] text-[11px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-md z-20`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" />
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFrontendExperience;
