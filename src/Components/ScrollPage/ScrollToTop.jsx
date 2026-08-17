import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ScrollToTop Component
 * 1. Automatically scrolls to top on route navigation.
 * 2. Renders a round floating button on bottom-right when user scrolls down.
 * 3. Shows an animated circular SVG progress ring tracking scroll depth.
 * 4. Touch/Click smoothly scrolls user back to the top with framer-motion physics.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // Track window scroll position and progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);

      if (scrollTop > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // Circular progress calculation
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center group"
          initial={{ opacity: 0, scale: 0.4, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, y: 30 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
        >
          {/* Outer Tooltip on Hover */}
          <div className="absolute -top-9 right-1/2 translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-bold font-mono tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md border border-slate-800">
            Back to Top ↑
          </div>

          {/* Main Floating Button */}
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#004658] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(0,70,88,0.35)] hover:shadow-[0_15px_35px_rgba(0,216,255,0.4)] cursor-pointer focus:outline-none overflow-hidden transition-shadow duration-300"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
          >
            {/* Ambient Pulse Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#004658] to-[#00D8FF] opacity-90 group-hover:opacity-100 transition-opacity" />

            {/* Circular SVG Scroll Progress Indicator Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5" viewBox="0 0 52 52">
              <circle
                cx="26"
                cy="26"
                r={radius}
                className="stroke-white/20"
                strokeWidth="3"
                fill="transparent"
              />
              <circle
                cx="26"
                cy="26"
                r={radius}
                className="stroke-[#00D8FF] transition-all duration-150"
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            {/* Upward Arrow Icon */}
            <svg
              className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:-translate-y-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;