import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "../../assets/images/hero1.png";

// Number Shuffle & Count-up Animation Component
const NumberShuffleCounter = ({ value, suffix = "", duration = 1200, triggerKey }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const target = parseInt(value, 10) || 0;
    const steps = 24;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayValue(target);
        clearInterval(timer);
      } else {
        const progress = currentStep / steps;
        // Ease-out cubic curve
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.round(target * easedProgress);
        // Subtle random number shuffling jitter
        const jitter = Math.floor(Math.random() * (target > 50 ? 4 : 2));
        setDisplayValue(Math.min(target, Math.max(0, currentVal + (currentStep < steps - 2 ? jitter : 0))));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, duration, triggerKey]);

  return (
    <span className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
};

const metricSlides = [
  {
    id: "slide-1",
    tag: "Core Impact Metrics",
    stats: [
      {
        num: 100,
        suffix: "+",
        label: "Projects Delivered",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        iconBg: "border-cyan-200/80 text-cyan-600 bg-white"
      },
      {
        num: 50,
        suffix: "+",
        label: "Happy Clients",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        iconBg: "border-emerald-200/80 text-emerald-600 bg-white"
      },
      {
        num: 99,
        suffix: "%",
        label: "Client Satisfaction",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        iconBg: "border-teal-200/80 text-teal-600 bg-white"
      },
      {
        num: 5,
        suffix: "+",
        label: "Years Experience",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        iconBg: "border-sky-200/80 text-sky-600 bg-white"
      }
    ]
  },
  {
    id: "slide-2",
    tag: "Engineering Standards",
    stats: [
      {
        num: 48,
        suffix: " Hrs",
        label: "Squad Matching",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        iconBg: "border-purple-200/80 text-purple-600 bg-white"
      },
      {
        num: 100,
        suffix: "%",
        label: "IP & Code Ownership",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        iconBg: "border-blue-200/80 text-blue-600 bg-white"
      },
      {
        num: 50,
        suffix: "ms",
        label: "Average TTFB Latency",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        iconBg: "border-amber-200/80 text-amber-600 bg-white"
      },
      {
        num: 24,
        suffix: "/7",
        label: "DevOps & SLA Support",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        ),
        iconBg: "border-rose-200/80 text-rose-600 bg-white"
      }
    ]
  }
];

const Hero = () => {
  const [metricSlide, setMetricSlide] = useState(0);
  const [isMetricHovered, setIsMetricHovered] = useState(false);

  // Auto-rotate metrics banner
  useEffect(() => {
    if (isMetricHovered) return;
    const timer = setInterval(() => {
      setMetricSlide((prev) => (prev + 1) % metricSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isMetricHovered]);

  return (
    <section 
      className="w-full relative overflow-hidden pt-20 sm:pt-22 lg:pt-24 pb-6 sm:pb-8"
    >
      {/* Background Image Layer: Perfectly Framed & Fitted */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <img
          src={heroBg}
          alt="CodeCrafter Workspace & Software Studio"
          className="w-full h-full object-cover object-right sm:object-center"
        />
        {/* Soft Multi-Stop Ambient & Readability Gradient Overlay matching Image 1 */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.75) 0%,
                rgba(255, 255, 255, 0.78) 28%,
                rgba(255, 255, 255, 0.52) 45%,
                rgba(255, 255, 255, 0.15) 62%,
                rgba(255, 255, 255, 0.00) 78%
              ),
              linear-gradient(
                180deg,
                rgba(237, 246, 249, 0.45) 0%,
                rgba(255, 255, 255, 0.00) 22%,
                rgba(255, 255, 255, 0.00) 78%,
                rgba(237, 246, 249, 0.35) 100%
              )
            `,
          }}
        />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Clean & Scaled Headline & Typography */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/90 text-[#004658] text-xs sm:text-[13px] font-medium tracking-wide mb-4 sm:mb-5 shadow-xs"
            >
              <span className="text-cyan-600 font-semibold text-sm">✦</span>
              <span className="uppercase tracking-wider">Advanced Web & Software Engineering Studio</span>
            </motion.div>

            {/* Scaled Hero Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[66px] font-bold tracking-[-0.035em] text-slate-950 leading-[1.08] sm:leading-[1.06] mb-4 sm:mb-5">
              We craft digital <br className="hidden sm:block" />
              solutions that <br className="hidden sm:block" />
              <span className="text-[#004658]">
                elevate your brand<span className="text-[#EA580C]">.</span>
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-lg lg:text-[18px] text-slate-600 max-w-xl leading-relaxed mb-6 sm:mb-7 font-normal">
              High-performance web apps, modern UI/UX design, and bespoke software engineered for ambitious brands.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 mb-7 sm:mb-8 w-full sm:w-auto">
              <Link
                to="/software/crm"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#004658] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#004658]/25 hover:bg-[#003442] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Our Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white text-[#004658] font-semibold text-sm sm:text-base border border-slate-200 shadow-xs hover:border-[#004658]/40 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Schedule a Call</span>
                <svg className="w-4 h-4 text-[#004658]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </Link>
            </div>

            {/* Social Proof / Client Trust Avatars */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-0.5">
              {/* Overlapping Avatars */}
              <div className="flex items-center -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" alt="Client Review - Enterprise Web Portal Project" width="36" height="36" loading="lazy" decoding="async" className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" alt="Client Review - Dedicated Engineering Squad" width="36" height="36" loading="lazy" decoding="async" className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80" alt="Client Review - Custom Software Architecture" width="36" height="36" loading="lazy" decoding="async" className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80" alt="Client Review - Mobile App Development" width="36" height="36" loading="lazy" decoding="async" className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs" />
                <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-[#004658] border-2 border-white text-white text-[10.5px] sm:text-[11px] font-semibold flex items-center justify-center shadow-xs">
                  50+
                </div>
              </div>

              {/* Text & Rating Stars */}
              <div className="text-left">
                <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
                  Trusted by 50+ clients worldwide
                </p>
                <div className="flex items-center gap-0.5 mt-0.5 text-amber-400 text-xs tracking-wider" aria-label="5 star rating">
                  {"★★★★★"}
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* BOTTOM METRICS BANNER WITH DYNAMIC SHUFFLING CAROUSEL */}
        <div 
          onMouseEnter={() => setIsMetricHovered(true)}
          onMouseLeave={() => setIsMetricHovered(false)}
          className="mt-4 sm:mt-6 w-full bg-white/80 backdrop-blur-md rounded-2xl border border-white/80 shadow-[0_10px_35px_rgba(0,70,88,0.08)] p-3.5 sm:p-4 lg:p-5 relative overflow-hidden group"
        >
          {/* Top Category Tag & Slide Controls */}
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#004658]/10 text-[11px] font-bold text-[#004658]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
              <span className="uppercase tracking-wider font-mono">
                {metricSlides[metricSlide].tag}
              </span>
            </div>

            {/* Slide Dots & Arrow Buttons */}
            <div className="flex items-center gap-2.5">
              {metricSlides.map((_, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setMetricSlide(sIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    metricSlide === sIdx ? "w-5 bg-[#004658]" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  title={`Slide ${sIdx + 1}`}
                />
              ))}

              <div className="flex items-center gap-1 ml-1.5">
                <button
                  onClick={() => setMetricSlide((prev) => (prev === 0 ? metricSlides.length - 1 : prev - 1))}
                  className="w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#004658] hover:text-white flex items-center justify-center text-xs transition-colors shadow-2xs cursor-pointer"
                  title="Previous metrics"
                >
                  ‹
                </button>
                <button
                  onClick={() => setMetricSlide((prev) => (prev + 1) % metricSlides.length)}
                  className="w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#004658] hover:text-white flex items-center justify-center text-xs transition-colors shadow-2xs cursor-pointer"
                  title="Next metrics"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Animated Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={metricSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center relative z-10"
            >
              {metricSlides[metricSlide].stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 sm:gap-3.5">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${stat.iconBg} border flex items-center justify-center shrink-0 shadow-xs`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-950 tracking-tight flex items-baseline leading-none">
                      <NumberShuffleCounter 
                        value={stat.num} 
                        suffix={stat.suffix} 
                        triggerKey={`${metricSlide}-${idx}`}
                      />
                    </div>
                    <div className="text-[11px] sm:text-xs font-medium text-slate-600 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};

export default Hero;