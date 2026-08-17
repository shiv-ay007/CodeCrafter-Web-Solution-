import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const insightsData = [
  {
    id: 1,
    title: "Software Outsourcing Explained: Costs, Models & Best Practices",
    category: "Software Strategy",
    readTime: "6 min read",
    gradient: "from-blue-600 via-indigo-600 to-blue-500",
    link: "/about",
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center p-3.5 sm:p-4 gap-2 sm:gap-2.5 overflow-hidden">
        {/* Left Dark Squircle with < / > Code Braces */}
        <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-300">
          <span className="font-mono text-emerald-400 text-2xl sm:text-3xl font-bold">&lt;/&gt;</span>
        </div>

        {/* Middle Wireframe Map Panel */}
        <div className="flex-1 h-20 sm:h-24 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col justify-between p-2 shrink-0">
          <div className="w-full h-1.5 rounded bg-cyan-300/40" />
          <div className="space-y-1">
            <div className="w-3/4 h-1 rounded bg-white/40" />
            <div className="w-1/2 h-1 rounded bg-white/30" />
          </div>
          <div className="w-full h-6 rounded bg-cyan-500/20 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-pulse" />
          </div>
        </div>

        {/* Right Data Grid Panel */}
        <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl bg-slate-900/60 backdrop-blur-sm border border-white/15 p-1.5 grid grid-cols-3 gap-1 shrink-0">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className={`rounded-xs ${i % 2 === 0 ? "bg-cyan-400/40" : "bg-blue-400/20"}`} />
          ))}
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Software Development Services: A Strategic Guide to Modern SDLC",
    category: "Engineering Architecture",
    readTime: "8 min read",
    gradient: "from-[#004658] via-[#006077] to-[#0D9488]",
    link: "/web-development",
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center p-3.5 sm:p-4 gap-2.5 sm:gap-3 overflow-hidden">
        {/* 3x3 Matrix Blocks Panel */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 p-2.5 grid grid-cols-3 gap-1 items-center justify-items-center shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-300">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${i === 4 ? "bg-emerald-400 shadow-xs shadow-emerald-400" : "bg-slate-100/90"}`}
            />
          ))}
        </div>

        {/* Sprint Dashboard Cards */}
        <div className="flex-1 h-20 sm:h-24 flex flex-col justify-between p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
          </div>
          <div className="space-y-1">
            <div className="w-full h-2.5 rounded bg-white/25 flex items-center px-1">
              <div className="w-1/3 h-1 rounded bg-emerald-400" />
            </div>
            <div className="w-4/5 h-2.5 rounded bg-white/20 flex items-center px-1">
              <div className="w-2/3 h-1 rounded bg-cyan-300" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Staff Augmentation: How to Scale High-Velocity Engineering Squads",
    category: "Talent & Scaling",
    readTime: "5 min read",
    gradient: "from-[#4A0E4E] via-[#6B21A8] to-[#9333EA]",
    link: "/team",
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center p-3.5 sm:p-4 gap-2.5 sm:gap-3 overflow-hidden">
        {/* Center Team Collaboration Hub */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-11 h-11 flex items-center justify-center">
            <div className="absolute w-10 h-10 rounded-full border-2 border-purple-300/40" />
            <div className="w-3.5 h-3.5 rounded-full bg-purple-300" />
            <div className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-cyan-300" />
            <div className="absolute -bottom-1 w-2.5 h-2.5 rounded-full bg-emerald-300" />
            <div className="absolute -left-1 w-2.5 h-2.5 rounded-full bg-amber-300" />
            <div className="absolute -right-1 w-2.5 h-2.5 rounded-full bg-pink-300" />
          </div>
        </div>

        {/* Right Talent Cards Matrix */}
        <div className="flex-1 h-20 sm:h-24 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-2 flex flex-col justify-between">
          <div className="w-full h-2.5 rounded bg-purple-300/30 flex items-center px-1">
            <div className="w-1/2 h-1 rounded bg-white" />
          </div>
          <div className="grid grid-cols-4 gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-3 rounded bg-white/20" />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "AI-Powered Code Engineering: Transforming Enterprise Velocity",
    category: "AI & Innovation",
    readTime: "7 min read",
    gradient: "from-[#EA580C] via-[#C2410C] to-[#D97706]",
    link: "/software/erp",
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center p-3.5 sm:p-4 gap-2.5 sm:gap-3 overflow-hidden">
        {/* Neural Network Center Hub */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-300">
          <svg className="w-9 h-9 sm:w-10 sm:h-10 text-amber-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        {/* Vector Embeddings Stream */}
        <div className="flex-1 h-20 sm:h-24 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-2 flex flex-col justify-between">
          <div className="w-full h-1.5 rounded bg-amber-300/50" />
          <div className="space-y-1">
            <div className="w-full h-1.5 rounded bg-white/30" />
            <div className="w-3/4 h-1.5 rounded bg-white/20" />
          </div>
          <div className="w-1/2 h-1.5 rounded bg-amber-400" />
        </div>
      </div>
    )
  }
];

const LatestInsights = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#f5f8fc] overflow-hidden" id="insights">
      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          
          {/* Main Headline */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
              <span>ENGINEERING PLAYBOOK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-[-0.03em] text-slate-950 leading-tight">
              Our latest insights<span className="text-[#EA580C]">.</span>
            </h2>
          </div>

          {/* Right Action Link with Underline */}
          <div className="shrink-0 pb-0.5 text-left md:text-right flex items-center gap-4">
            <Link
              to="/about"
              className="text-xs sm:text-sm font-bold text-slate-950 hover:text-[#004658] border-b border-slate-950 hover:border-[#004658] pb-0.5 transition-colors inline-flex items-center gap-1"
            >
              <span>Over 1,100 articles on technology and talent</span>
              <span>→</span>
            </Link>

            {/* Slider Navigation Arrow Buttons (Visible on Mobile/Tablet) */}
            <div className="flex lg:hidden items-center gap-1.5">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous Insights"
                className="w-8 h-8 rounded-full border border-slate-300 text-slate-700 hover:border-slate-950 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer text-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => scroll("right")}
                aria-label="Next Insights"
                className="w-8 h-8 rounded-full border border-[#EA580C]/40 text-[#EA580C] hover:bg-[#EA580C] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs text-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Responsive Grid on Desktop / Smooth Slider on Mobile & Tablet */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-4 gap-5 sm:gap-6 overflow-x-auto lg:overflow-x-visible no-scrollbar scroll-smooth pb-3 pt-0.5 select-none"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {insightsData.map((item) => (
            <motion.div
              key={item.id}
              className="w-[280px] sm:w-[310px] lg:w-auto shrink-0 lg:shrink"
              style={{ scrollSnapAlign: "start" }}
            >
              <Link to={item.link} className="group block text-left h-full">
                
                {/* Visual Artwork Thumbnail Banner */}
                <div className={`relative h-44 sm:h-48 lg:h-48 xl:h-50 w-full rounded-2xl bg-gradient-to-br ${item.gradient} overflow-hidden mb-3.5 shadow-xs group-hover:shadow-lg group-hover:shadow-black/10 group-hover:-translate-y-0.5 transition-all duration-300`}>
                  {item.artwork}
                  
                  {/* Subtle Gradient Shine */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Article Title */}
                <h3 className="text-base sm:text-[17px] font-bold text-slate-950 group-hover:text-[#004658] transition-colors leading-snug tracking-tight mb-1.5">
                  {item.title}
                </h3>

                {/* Metadata */}
                <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                  <span className="text-[#004658] font-bold">{item.category}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Smooth Curved Wave Transition into Reviews */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -z-0">
        <svg className="relative block w-full h-8 sm:h-14 text-[#ecf5f8] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default LatestInsights;
