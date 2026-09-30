import React from "react";
import { motion } from "framer-motion";
import { Zap, Clock, Activity, Gauge, CheckCircle2, ShieldCheck, Sparkles, Cpu } from "lucide-react";

const SectionFastFeelsBetter = () => {
  const performanceMetrics = [
    {
      title: "Page Load Speed",
      metric: "Sub-Second LCP",
      description: "Instant content paint through asset compression, SSR, and intelligent chunking.",
      progress: 96,
      icon: <Clock className="w-5 h-5 text-[#004658]" />,
      color: "from-[#004658] to-[#00A8CC]",
      highlights: ["Optimized Core Web Vitals", "Edge Cache Delivery", "Zero-Layout-Shift (CLS)"]
    },
    {
      title: "User Interaction",
      metric: "Sub-50ms Response",
      description: "Immediate visual feedback on clicks, touches, and input transitions.",
      progress: 98,
      icon: <Zap className="w-5 h-5 text-[#004658]" />,
      color: "from-[#005A72] to-[#00D8FF]",
      highlights: ["Low-Latency Event Loop", "Optimistic State Updates", "Non-Blocking Render"]
    },
    {
      title: "UI Responsiveness",
      metric: "60 FPS Animations",
      description: "Silky smooth scrolling and gesture animations backed by hardware acceleration.",
      progress: 95,
      icon: <Activity className="w-5 h-5 text-[#004658]" />,
      color: "from-[#004658] to-[#0284C7]",
      highlights: ["GPU-Accelerated Layering", "Zero Dropped Frames", "Jank-Free Scroll Handling"]
    },
    {
      title: "Universal Accessibility",
      metric: "WCAG 2.1 Compliant",
      description: "Semantic HTML primitives and keyboard navigability for every user.",
      progress: 99,
      icon: <ShieldCheck className="w-5 h-5 text-[#004658]" />,
      color: "from-[#003442] to-[#004658]",
      highlights: ["Full Screen Reader Support", "Automated Contrast Ratios", "Keyboard Navigation"]
    }
  ];

  return (
    <section className="w-full bg-[#FBFDFD] py-16 sm:py-24 border-t border-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs font-semibold uppercase tracking-wider mb-4">
            <Gauge className="w-4 h-4 text-[#004658]" />
            <span>Speed & Efficiency</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4 font-['Outfit',sans-serif]">
            Fast feels <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] to-[#00A8CC]">better.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Performance is not just a technical metric — it is part of the user experience.
          </p>
        </div>

        {/* Conceptual Performance Progress Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {performanceMetrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#004658]/15 shadow-sm hover:shadow-xl hover:border-[#004658]/30 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Metric Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#004658]/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
                        {item.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#004658] uppercase tracking-wider">
                        {item.metric}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                      {item.progress}%
                    </span>
                    <p className="text-[11px] text-slate-500 font-medium">Efficiency</p>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Progress Bar Container */}
                <div className="space-y-2 mb-6">
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + idx * 0.1 }}
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#004658] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Engineering Insights Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-[#004658] via-[#005A72] to-[#003442] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#00D8FF]" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif] mb-2">
                Engineered for Zero Latency
              </h4>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-2xl">
                By stripping non-critical bundles, leveraging server side streaming, and optimizing critical CSS paths, we guarantee high-speed responsiveness that keeps users engaged.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#00D8FF]">
              ⚡ Fast Interactive UI
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFastFeelsBetter;
