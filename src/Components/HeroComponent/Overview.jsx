import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Workflow,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Terminal,
  Globe2
} from "lucide-react";

/**
 * Animated Stat with smooth RequestAnimationFrame count-up
 */
const AnimatedStat = ({ value, label, subtext }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric portion and suffix/prefix
    const match = value.match(/([\d.]+)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice(match.index + match[1].length);
    const isDecimal = match[1].includes(".");
    const decimals = isDecimal ? match[1].split(".")[1].length : 0;

    const startTime = performance.now();
    const duration = 1800; // ms

    let animationFrameId;

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Premium easeOutExpo curve
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = targetNum * ease;

      setDisplayValue(`${prefix}${current.toFixed(decimals)}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col space-y-1.5">
      <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-[-0.03em] leading-none font-display">
        {displayValue}
      </div>
      <div className="text-xs sm:text-sm font-semibold text-slate-700 tracking-tight">
        {label}
      </div>
      {subtext && (
        <div className="text-[11px] sm:text-xs text-slate-400 font-normal">
          {subtext}
        </div>
      )}
    </div>
  );
};

/**
 * Engineering Capability Progress Indicator with moving light sweep & glowing dot
 */
const EngineeringCapability = ({ label, targetPercent, displayMetric, detail, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className="space-y-2 group/metric">
      {/* Label and Metric Value */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_6px_#00d8ff]" />
          <span className="font-medium text-slate-200 tracking-wide">{label}</span>
        </div>
        <div className="font-mono text-[11px] font-semibold text-cyan-300 tracking-wider">
          {displayMetric}
        </div>
      </div>

      {/* Progress Track & Animated Line */}
      <div className="relative h-1.5 w-full bg-slate-900/90 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${targetPercent}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full bg-gradient-to-r from-[#004658] via-[#00a8cc] to-[#00d8ff] rounded-full"
        >
          {/* Traveling Light Sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-24 animate-light-sweep" />
          
          {/* Glowing Beacon Dot at tip */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#00d8ff]" />
        </motion.div>
      </div>

      {/* Micro Status Detail */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <span>{detail}</span>
        <span className="text-emerald-400/90 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block" />
          ACTIVE
        </span>
      </div>
    </div>
  );
};

const Overview = () => {
  const containerRef = useRef(null);

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const panelVariants = {
    hidden: { opacity: 0, x: 28, y: 10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
    }
  };

  return (
    <section
      ref={containerRef}
      id="overview"
      className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff] text-slate-900 overflow-hidden border-b border-slate-100"
      aria-label="About CodeCrafter Enterprise Software Studio"
    >
      {/* Calm & Subtle Ambient Background Canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Very Slow Floating Blurred Gradient 1 */}
        <div
          className="absolute -top-[15%] -left-[10%] w-[680px] h-[680px] rounded-full opacity-[0.06] blur-[120px] animate-ambient-drift"
          style={{
            background: "radial-gradient(circle, #004658 0%, rgba(0, 216, 255, 0.4) 60%, transparent 100%)"
          }}
        />

        {/* Very Slow Floating Blurred Gradient 2 */}
        <div
          className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[130px] animate-ambient-drift"
          style={{
            animationDelay: "-6s",
            background: "radial-gradient(circle, #00d8ff 0%, #004658 60%, transparent 100%)"
          }}
        />

        {/* Engineering Micro-Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#004658 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* TWO-COLUMN GRID: 60% Left / 40% Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* LEFT COLUMN: 60% (lg:col-span-7) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8 sm:space-y-10 text-left"
          >
            
            {/* Section Header Block */}
            <div className="space-y-5">
              
              {/* Minimal Section Label */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#004658] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#004658]" />
                </span>
                <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-[#004658] uppercase">
                  ABOUT CODECRAFTER
                </span>
              </motion.div>

              {/* Large Typography-Focused Headline */}
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-slate-950 tracking-[-0.035em] leading-[1.12] max-w-2xl font-display"
              >
                Transforming visionary ideas into{" "}
                <span className="text-[#004658]">
                  market-leading digital realities
                  <span className="text-[#EA580C]">.</span>
                </span>
              </motion.h2>

              {/* Short Supporting Paragraph */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl"
              >
                We are a next-generation software studio and dedicated engineering partner for ambitious companies. We blend architectural rigor, modern cloud scale, and strategic design to ship resilient digital products with zero friction.
              </motion.p>

            </div>

            {/* THREE SIMPLE CAPABILITY ROWS (NOT CARDS) */}
            <motion.div variants={itemVariants} className="space-y-5 pt-2">
              
              {/* Capability 1 */}
              <div className="group flex items-start gap-4 sm:gap-5 pb-5 border-b border-slate-200/70 cursor-default transition-all duration-300">
                <div className="p-2.5 rounded-lg bg-slate-100/90 text-[#004658] shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:bg-[#004658]/10">
                  <Cpu className="w-5 h-5 transition-colors duration-300" strokeWidth={1.75} />
                </div>
                <div className="space-y-1 transition-all duration-300 group-hover:translate-x-1">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight group-hover:text-[#004658] transition-colors duration-200">
                    Elite Engineering Squads
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-500 font-normal leading-relaxed">
                    Pre-vetted software architects & senior engineers aligned directly with your stack, methodology, and timezone.
                  </p>
                </div>
              </div>

              {/* Capability 2 */}
              <div className="group flex items-start gap-4 sm:gap-5 pb-5 border-b border-slate-200/70 cursor-default transition-all duration-300">
                <div className="p-2.5 rounded-lg bg-slate-100/90 text-[#004658] shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:bg-[#004658]/10">
                  <Workflow className="w-5 h-5 transition-colors duration-300" strokeWidth={1.75} />
                </div>
                <div className="space-y-1 transition-all duration-300 group-hover:translate-x-1">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight group-hover:text-[#004658] transition-colors duration-200">
                    Predictable 2-Week Sprint Cadence
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-500 font-normal leading-relaxed">
                    Structured milestone delivery, live weekly staging demos, automated testing, and full transparent code visibility.
                  </p>
                </div>
              </div>

              {/* Capability 3 */}
              <div className="group flex items-start gap-4 sm:gap-5 pb-2 cursor-default transition-all duration-300">
                <div className="p-2.5 rounded-lg bg-slate-100/90 text-[#004658] shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:bg-[#004658]/10">
                  <ShieldCheck className="w-5 h-5 transition-colors duration-300" strokeWidth={1.75} />
                </div>
                <div className="space-y-1 transition-all duration-300 group-hover:translate-x-1">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight group-hover:text-[#004658] transition-colors duration-200">
                    100% IP Handover & SOC-2 Standards
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-500 font-normal leading-relaxed">
                    Zero IP encumbrance with full source ownership transfer, enterprise-grade NDAs, and continuous security audits.
                  </p>
                </div>
              </div>

            </motion.div>

            {/* Primary Action Button */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                to="/about"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#004658] text-white font-medium text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:shadow-lg hover:shadow-[#004658]/25 transition-all duration-200 overflow-hidden cursor-pointer"
              >
                <span>Explore Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>2-Week Risk-Free Onboarding Trial</span>
              </div>
            </motion.div>

          </motion.div>


          {/* RIGHT COLUMN: 40% (lg:col-span-5) */}
          {/* Premium Dark Engineering Dashboard Panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 relative group/panel"
          >
            {/* Soft Ambient Cyan/Teal Under-Glow on Panel Hover */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#004658]/30 via-cyan-500/20 to-[#00d8ff]/20 rounded-3xl blur-xl opacity-40 group-hover/panel:opacity-80 transition-opacity duration-700 pointer-events-none -z-10" />

            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#021319] via-[#011a24] to-[#010e13] border border-cyan-500/20 p-6 sm:p-7 text-white shadow-2xl backdrop-blur-xl space-y-6">
              
              {/* Dashboard Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Terminal className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-semibold tracking-wider text-white">
                      ENGINEERING DISPATCH
                    </div>
                    <div className="text-[9.5px] font-mono text-cyan-300/70">
                      SYS://CODECRAFTER-CORE
                    </div>
                  </div>
                </div>

                {/* Live Node Indicator */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SQUAD ACTIVE</span>
                </div>
              </div>

              {/* Engineering Capability Progress Meters */}
              <div className="space-y-4 pt-1">
                <EngineeringCapability
                  label="Production Pipeline Throughput"
                  targetPercent={99.8}
                  displayMetric="99.8% SLA"
                  detail="Zero-Debt TypeScript & Next.js Core"
                  delay={0.3}
                />

                <EngineeringCapability
                  label="Automated Test Coverage"
                  targetPercent={98.4}
                  displayMetric="98.4% PASS"
                  detail="Unit, Integration & E2E Suites"
                  delay={0.45}
                />

                <EngineeringCapability
                  label="Global Edge Latency"
                  targetPercent={94.5}
                  displayMetric="< 38ms"
                  detail="Multi-Region Cloud Edge Architecture"
                  delay={0.6}
                />
              </div>

              {/* Live Engineering Activity Telemetry Streamlet */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center justify-between">
                  <span>TELEMETRY STREAM</span>
                  <Activity className="w-3 h-3 text-cyan-400/80 animate-pulse" />
                </div>

                <div className="bg-[#000d11]/80 rounded-xl p-3 border border-cyan-500/10 space-y-2 font-mono text-[10.5px]">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>Architecture Audit</span>
                    </span>
                    <span className="text-cyan-300/80">VERIFIED</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>Security &amp; SOC-2</span>
                    </span>
                    <span className="text-emerald-400">PASSED</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>IP Ownership Transfer</span>
                    </span>
                    <span className="text-cyan-300/80">100% ASSIGNED</span>
                  </div>
                </div>
              </div>

              {/* Bottom Compliance Trust Bar */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10.5px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-cyan-200/90">
                  <Globe2 className="w-3 h-3" />
                  <span>ISO 27001 &amp; GDPR</span>
                </span>
                <span className="text-slate-400">24/7 DEDICATED SQUAD</span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* INTEGRATED SINGLE HORIZONTAL STATISTICS STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-12 lg:mt-14 pt-8 sm:pt-10 border-t border-slate-200/80"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            
            <AnimatedStat
              value="150+"
              label="Products Delivered"
              subtext="Shipped across 14+ global industries"
            />

            <AnimatedStat
              value="99.4%"
              label="Client Satisfaction"
              subtext="Measured across active enterprise contracts"
            />

            <AnimatedStat
              value="5+"
              label="Years Experience"
              subtext="Continuous software craftsmanship"
            />

            <AnimatedStat
              value="24/7"
              label="Engineering Support"
              subtext="Guaranteed critical SLA response time"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Overview;