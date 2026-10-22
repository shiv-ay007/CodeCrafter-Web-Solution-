import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import doctorImg from "../../../assets/images/doctor.png";
import encoreImg from "../../../assets/images/encore.png";
import perfectAirImg from "../../../assets/images/perfect-air.png";
import retdImg from "../../../assets/images/retd-imag.png";
import upemaImg from "../../../assets/images/image3.webp";
import ridgelineImg from "../../../assets/images/image.webp";

const projects = [
  {
    id: "doctor",
    number: "01",
    title: "Doctor",
    image: doctorImg,
  },
  {
    id: "encore",
    number: "02",
    title: "Encore",
    image: encoreImg,
  },
  {
    id: "perfect-air",
    number: "03",
    title: "Perfect Air",
    image: perfectAirImg,
  },
  {
    id: "retd",
    number: "04",
    title: "RETD",
    image: retdImg,
  },
  {
    id: "upema",
    number: "05",
    title: "UPEMA",
    image: upemaImg,
  },
  {
    id: "ridgeline",
    number: "06",
    title: "Ridgeline Leather",
    image: ridgelineImg,
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const WebDesignProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(null);

  // Auto-advance slide every 5 seconds (paused on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleDotClick = (idx) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const currentProject = projects[currentIndex];

  return (
    <section
      id="work"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FBFDFD] overflow-hidden select-none border-t border-slate-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient Glow Orbs */}
      <div
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 70, 88, 0.3) 0%, rgba(0, 216, 255, 0.15) 50%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 216, 255, 0.25) 0%, rgba(0, 70, 88, 0.15) 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D8FF] animate-pulse" />
            <span>FEATURED UI/UX PROJECTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 font-['Outfit',sans-serif]">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Project Showcase</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A curated collection of web applications, e-commerce storefronts, and brand interfaces engineered with precision UI/UX.
          </p>
        </div>

        {/* Main Project Slide Card - Enlarged Frame */}
        <div
          className="max-w-6xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-6 lg:p-7 overflow-hidden transition-all duration-300">
            {/* Top Browser Mockup Window Bar */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="hidden sm:inline-flex items-center gap-1.5 ml-3 px-3 py-1 rounded-full bg-slate-100 text-[11px] font-mono text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>https://codecrafter.co.in/projects/{currentProject.id}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#004658]/8 text-[#004658] text-xs font-mono font-bold">
                  {currentProject.number} / 0{projects.length}
                </span>
              </div>
            </div>

            {/* Sliding Image & Content with AnimatePresence */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                {/* Enlarged Project Image Frame - Zero Buttons/Overlays */}
                <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.2] lg:aspect-[16/8] min-h-[300px] sm:min-h-[460px] lg:min-h-[540px] max-h-[640px] overflow-hidden rounded-2xl bg-slate-50 border border-slate-200/80 group">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                </div>

                {/* Only Project Name Under Image (Clean & Bold) */}
                <div className="pt-5 pb-2 px-1 text-center">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
                    {currentProject.title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Navigation Buttons Below (Small Slide Button) */}
          <div className="mt-6 flex items-center justify-center gap-4">
            {/* Prev Slide Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Project"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#004658] hover:border-[#004658]/40 hover:bg-slate-50 active:scale-90 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Slide Dots Indicator */}
            <div className="flex items-center gap-2">
              {projects.map((proj, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={proj.id}
                    onClick={() => handleDotClick(idx)}
                    aria-label={`Go to slide ${idx + 1}: ${proj.title}`}
                    className={`transition-all duration-300 cursor-pointer rounded-full ${
                      isActive
                        ? "w-8 h-2.5 bg-[#004658] shadow-xs"
                        : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                );
              })}
            </div>

            {/* Next Slide Button */}
            <button
              onClick={handleNext}
              aria-label="Next Project"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#004658] hover:border-[#004658]/40 hover:bg-slate-50 active:scale-90 transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignProjects;
