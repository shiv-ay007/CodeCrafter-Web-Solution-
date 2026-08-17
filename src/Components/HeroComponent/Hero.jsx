import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import vortexSwirlImg from "../../assets/hero_vortex_swirl.jpg";

// Services and capabilities showcase items
const orbitServices = [
  {
    id: "uiux",
    title: "UI/UX",
    subtitle: "Design",
    centerTitle: "UI/UX & DESIGN",
    spec: "✦ TOUCH SPEC",
    iconType: "palette",
    badgeColor: "bg-teal-500",
    iconBg: "bg-teal-50 text-teal-600",
    path: "/web-design",
    pos: "top-[4%] left-[36%] sm:left-[38%]",
    desc: "Human-centered UI design, Figma component architecture & micro-animations."
  },
  {
    id: "ai",
    title: "AI",
    subtitle: "Solutions",
    centerTitle: "AI & AUTOMATION",
    spec: "✦ SMART ENGINE",
    iconType: "brain",
    badgeColor: "bg-purple-600",
    iconBg: "bg-purple-50 text-purple-600",
    path: "/software/crm",
    pos: "top-[14%] right-[3%] sm:right-[5%]",
    desc: "LLM chatbots, automated workflows, and high-throughput predictive AI models."
  },
  {
    id: "react",
    title: "React",
    subtitle: "Development",
    centerTitle: "REACT & NEXT.JS",
    spec: "✦ SUB-50MS SPEED",
    iconType: "react",
    badgeColor: "bg-blue-500",
    iconBg: "bg-blue-50 text-blue-600",
    path: "/web-development",
    pos: "top-[46%] right-[-2%] sm:right-[1%]",
    desc: "Lightning-fast SPA web portals with SSR and fluid layout transitions."
  },
  {
    id: "nodejs",
    title: "Node.js",
    subtitle: "Backend",
    centerTitle: "NODE.JS & APIS",
    spec: "✦ 10K+ REQ/SEC",
    iconType: "bolt",
    badgeColor: "bg-amber-500",
    iconBg: "bg-amber-50 text-amber-600",
    path: "/software/erp",
    pos: "bottom-[11%] right-[6%] sm:right-[10%]",
    desc: "Robust microservices, WebSockets, REST & GraphQL API infrastructure."
  },
  {
    id: "flutter",
    title: "Flutter",
    subtitle: "Apps",
    centerTitle: "FLUTTER & MOBILE",
    spec: "✦ 60 FPS NATIVE",
    iconType: "mobile",
    badgeColor: "bg-indigo-600",
    iconBg: "bg-indigo-50 text-indigo-600",
    path: "/app-studio/flutter",
    pos: "bottom-[12%] left-[14%] sm:left-[18%]",
    desc: "Cross-platform iOS & Android mobile applications with native speed."
  },
  {
    id: "cloud",
    title: "Cloud",
    subtitle: "Services",
    centerTitle: "CLOUD & DEVOPS",
    spec: "✦ 99.99% UPTIME",
    iconType: "cloud",
    badgeColor: "bg-sky-500",
    iconBg: "bg-sky-50 text-sky-600",
    path: "/hosting/cloud",
    pos: "top-[44%] left-[-2%] sm:left-[1%]",
    desc: "Automated CI/CD deployment, zero-downtime server scaling & security."
  }
];

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
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [metricSlide, setMetricSlide] = useState(0);
  const [isMetricHovered, setIsMetricHovered] = useState(false);

  const activeItem = orbitServices[activeServiceIndex];

  // Auto-cycle through the orbital capabilities unless user is hovering
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % orbitServices.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Auto-rotate metrics banner
  useEffect(() => {
    if (isMetricHovered) return;
    const timer = setInterval(() => {
      setMetricSlide((prev) => (prev + 1) % metricSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isMetricHovered]);

  return (
    <section className="w-full relative overflow-hidden pt-20 sm:pt-24 lg:pt-26 pb-4 sm:pb-6 bg-white">
      
      {/* Background Soft Glow Ambience */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 216, 255, 0.25) 0%, rgba(0, 70, 88, 0.12) 40%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Grid with Balanced Columns */}
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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/90 text-[#004658] text-[11px] sm:text-xs font-semibold tracking-wide mb-4 sm:mb-5 shadow-xs"
            >
              <span className="text-cyan-600 font-bold text-xs sm:text-sm">✦</span>
              <span className="uppercase tracking-wider">Advanced Web & Software Engineering Studio</span>
            </motion.div>

            {/* Scaled Hero Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[54px] xl:text-[62px] font-bold tracking-[-0.03em] text-slate-950 leading-[1.08] mb-4 sm:mb-5">
              We craft digital <br className="hidden sm:block" />
              solutions that <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#0086a8]">
                elevate your brand
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base lg:text-[16.5px] text-slate-600 max-w-xl leading-relaxed mb-6 sm:mb-7 font-normal">
              High-performance web applications, modern UI/UX design, and bespoke software solutions crafted with clarity, speed, and precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-7 sm:mb-8">
              <Link
                to="/software/crm"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#004658] text-white font-bold text-sm sm:text-[15px] shadow-lg shadow-[#004658]/25 hover:bg-[#003442] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Our Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white text-[#004658] font-bold text-sm sm:text-[15px] border border-slate-200 shadow-xs hover:border-[#004658]/40 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Schedule a Call</span>
                <svg className="w-4 h-4 text-[#004658]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </Link>
            </div>

            {/* Social Proof / Client Trust Avatars */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-0.5">
              {/* Overlapping Avatars */}
              <div className="flex items-center -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" alt="Client 1" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" alt="Client 2" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80" alt="Client 3" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80" alt="Client 4" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs" />
                <div className="w-9 h-9 rounded-full bg-[#004658] border-2 border-white text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                  50+
                </div>
              </div>

              {/* Text & Rating Stars */}
              <div className="text-left">
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Trusted by 50+ clients worldwide
                </p>
                <div className="flex items-center gap-0.5 mt-0.5 text-amber-400 text-xs tracking-wider">
                  {"★★★★★"}
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: 3D Vortex Swirl with Circular Core & Orbiting Cards */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-center justify-center relative select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            {/* Circular Visual Canvas (Scaled Proportions) */}
            <div className="relative w-[300px] h-[300px] xs:w-[340px] xs:h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] xl:w-[460px] xl:h-[460px] flex items-center justify-center">
              
              {/* 3D Ethereal Vortex Fluid Wave Image */}
              <div className="absolute inset-3 sm:inset-4 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,70,88,0.12)]">
                <motion.img
                  src={vortexSwirlImg}
                  alt="3D Fluid Vortex Wave"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full object-cover scale-110 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/40" />
              </div>

              {/* Gentle Outer Dashed Orbit Track */}
              <div className="absolute inset-1 sm:inset-2 rounded-full border border-dashed border-[#004658]/20 animate-spin [animation-duration:80s]" />
              
              {/* Secondary Soft Glow Ring */}
              <div className="absolute inset-8 sm:inset-10 rounded-full border border-white/60 bg-white/10 backdrop-blur-[1px]" />

              {/* CENTER CORE DISC */}
              <motion.div 
                className="z-20 w-32 h-32 xs:w-36 xs:h-36 sm:w-44 sm:h-44 rounded-full bg-white ring-4 sm:ring-6 ring-white/70 shadow-[0_15px_40px_rgba(0,70,88,0.15)] flex flex-col items-center justify-center p-2.5 text-center transition-transform duration-300"
                whileHover={{ scale: 1.04 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col items-center"
                  >
                    {/* Center Icon Badge */}
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#004658] text-white flex items-center justify-center text-lg sm:text-xl font-bold shadow-md shadow-[#004658]/30 mb-1.5">
                      <HeroServiceIcon type={activeItem.iconType} />
                    </div>

                    {/* Center Category Title */}
                    <span className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-950 tracking-tight uppercase">
                      {activeItem.centerTitle}
                    </span>

                    {/* Center Interactive Spec Tag */}
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#004658] tracking-widest uppercase mt-0.5">
                      {activeItem.spec}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* 6 ORBITING FLOATING CARDS */}
              {orbitServices.map((item, index) => {
                const isActive = index === activeServiceIndex;
                return (
                  <motion.div
                    key={item.id}
                    className={`absolute z-30 ${item.pos}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.08 + 0.2 }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setActiveServiceIndex(index)}
                      onMouseEnter={() => setActiveServiceIndex(index)}
                      className={`flex items-center gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-xl ${
                        isActive
                          ? "bg-white text-slate-900 shadow-[0_10px_25px_rgba(0,70,88,0.2)] border-2 border-[#004658] scale-105 ring-2 ring-[#004658]/10"
                          : "bg-white/95 text-slate-900 border border-slate-100/90 shadow-sm hover:bg-white hover:border-[#004658]/30 hover:shadow-md"
                      }`}
                    >
                      {/* Left Icon Pill */}
                      <div className={`w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 rounded-lg ${item.iconBg} flex items-center justify-center text-xs sm:text-sm shrink-0 shadow-2xs`}>
                        <HeroServiceIcon type={item.iconType} />
                      </div>

                      {/* Card Text */}
                      <div className="text-left">
                        <div className="text-[11px] sm:text-xs font-bold text-slate-950 leading-tight">
                          {item.title}
                        </div>
                        <div className="text-[9.5px] sm:text-[10.5px] font-semibold text-slate-500 leading-tight">
                          {item.subtitle}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>

        {/* BOTTOM METRICS BANNER WITH DYNAMIC SHUFFLING CAROUSEL */}
        <div 
          onMouseEnter={() => setIsMetricHovered(true)}
          onMouseLeave={() => setIsMetricHovered(false)}
          className="mt-6 sm:mt-8 lg:mt-10 w-full bg-gradient-to-r from-slate-100/95 via-cyan-50/60 to-slate-100/95 rounded-2xl border border-[#004658]/15 shadow-[0_10px_30px_rgba(0,70,88,0.06)] p-4 sm:p-5 lg:p-6 relative overflow-hidden group"
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
                    <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-950 tracking-tight flex items-baseline leading-none">
                      <NumberShuffleCounter 
                        value={stat.num} 
                        suffix={stat.suffix} 
                        triggerKey={`${metricSlide}-${idx}`}
                      />
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-slate-600 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Bottom Smooth Curved Wave Transition to Overview */}
      <div className="w-full overflow-hidden leading-none mt-8 sm:mt-12 pointer-events-none -mb-1">
        <svg className="relative block w-full h-8 sm:h-14 text-[#edf6f9] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
};

// SVG Icon Helper for Hero Services
const HeroServiceIcon = ({ type }) => {
  const props = { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" };

  switch (type) {
    case "palette":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4c0-1.48.8-2.75 2-3.45V5a2 2 0 012-2h10a2 2 0 012 2v8.55c1.2.7 2 1.97 2 3.45a4 4 0 01-4 4H7z" />
        </svg>
      );
    case "brain":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "react":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      );
  }
};

export default Hero;