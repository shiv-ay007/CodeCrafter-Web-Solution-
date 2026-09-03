import React from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  UserPlus,
  Zap,
  RefreshCw,
  Activity
} from "lucide-react";

const processNodes = [
  {
    stepNumber: "STEP 1",
    title: "Join exploration call.",
    description:
      "Tell us more about your business on a discovery call. We'll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help.",
    icon: PhoneCall,
    staggerClass: "lg:mt-24 xl:mt-28",
    nodePhase: "DISCOVERY & SIZING"
  },
  {
    stepNumber: "STEP 2",
    title: "Discuss solution and team setup.",
    description:
      "Our senior technical architects analyze requirements and assemble the ideal dedicated engineering squad, tailored to your exact tech stack and project velocity.",
    icon: UserPlus,
    staggerClass: "lg:-mt-6 xl:-mt-8",
    nodePhase: "ARCHITECT & SQUAD ASSEMBLY"
  },
  {
    stepNumber: "STEP 3",
    title: "Fast-track onboarding and integration.",
    description:
      "Zero-friction setup. We integrate directly into your Jira, GitHub, and Slack workflows within 48 to 72 hours with unified communication channels.",
    icon: Zap,
    staggerClass: "lg:mt-28 xl:mt-32",
    nodePhase: "48-HR SPRINT INTEGRATION"
  },
  {
    stepNumber: "STEP 4",
    title: "Iterative delivery & ongoing sprints.",
    description:
      "Bi-weekly sprint demos, automated CI/CD releases, clean code reviews, and continuous communication throughout the entire product build lifecycle.",
    icon: RefreshCw,
    staggerClass: "lg:-mt-4 xl:-mt-6",
    nodePhase: "CONTINUOUS DELIVERY & SLA"
  }
];

const Serve = () => {
  return (
    <section
      className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] overflow-hidden"
      id="process"
      aria-label="CodeCrafter Workflow and Engineering Process Roadmap"
    >
      {/* ─────────────────────────────────────────────────────────────
          DIRECTIONAL LIGHTING & FIBER-OPTIC AMBIENT CANVAS
      ─────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        
        {/* Soft Directional Ambient Light Top-Left */}
        <div 
          className="absolute -top-24 -left-24 w-[700px] h-[700px] rounded-full opacity-60 blur-[130px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(78, 240, 197, 0.15) 0%, rgba(2, 43, 50, 0.08) 50%, transparent 80%)"
          }}
        />

        {/* Left Radiating Fiber Optic Ray Fan (Matching Reference) */}
        <div className="absolute top-[48%] -left-12 -translate-y-1/2 w-[380px] h-[380px] opacity-45 blur-3xl pointer-events-none">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-[#4EF0C5]/40 via-[#022B32]/25 to-transparent" />
        </div>

        <svg
          className="absolute left-0 top-[38%] -translate-y-1/2 w-48 sm:w-64 h-72 opacity-30 pointer-events-none"
          viewBox="0 0 200 300"
          fill="none"
        >
          {[...Array(14)].map((_, i) => (
            <path
              key={i}
              d={`M 0 150 Q 80 ${40 + i * 16} 200 ${20 + i * 20}`}
              stroke="#4EF0C5"
              strokeWidth="1.2"
              strokeOpacity={0.25 + (i % 3) * 0.25}
            />
          ))}
        </svg>

        {/* Bottom Central Radiating Fiber Fan Flare */}
        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[700px] h-[340px] opacity-45 blur-2xl pointer-events-none">
          <div className="w-full h-full rounded-full bg-gradient-to-t from-[#4EF0C5]/35 via-[#022B32]/15 to-transparent" />
        </div>

        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-40 opacity-35 pointer-events-none"
          viewBox="0 0 800 200"
          fill="none"
        >
          {[...Array(18)].map((_, i) => (
            <path
              key={i}
              d={`M 400 200 Q ${200 + i * 24} 90 ${i * 45} 0`}
              stroke="#4EF0C5"
              strokeWidth="1.2"
              strokeOpacity={0.2 + (i % 4) * 0.22}
            />
          ))}
        </svg>

        {/* Delicate Engineering Grid Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#022B32 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          WORKFLOW SECTION INTRODUCTION (Top-Left Quadrant)
      ─────────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto mb-8 sm:mb-10 lg:mb-12 text-left">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 max-w-3xl"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#022B32]/8 border border-[#022B32]/20 text-[#022B32] text-xs font-semibold uppercase tracking-wider shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4EF0C5] shadow-[0_0_8px_#4EF0C5] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs">HOW WE WORK</span>
          </div>

          {/* Main Large Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-[-0.035em] text-slate-950 leading-[1.12] font-display">
            Our process. Simple, seamless,{" "}
            <br className="hidden sm:inline" />
            <span className="text-[#004658]">
              streamlined<span className="text-[#EA580C]">.</span>
            </span>
          </h2>
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          DIGITAL WORKFLOW HIGHWAY & INTERCONNECTED GLASSMORPHIC CARDS
      ─────────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto min-h-0 lg:min-h-[620px]">

        
        {/* ═══════════════════════════════════════════════════════════
            MULTI-LANE DIGITAL HIGHWAY ROADWAY (SVG BACKBONE)
        ════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none -z-0">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1440 680"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              {/* High-intensity Mint Glow Filter */}
              <filter id="highway-mint-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="blur1" />
                <feGaussianBlur stdDeviation="2" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur1" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Data Trail Linear Gradient */}
              <linearGradient id="highway-stream-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4EF0C5" stopOpacity="0.4" />
                <stop offset="35%" stopColor="#4EF0C5" stopOpacity="1" />
                <stop offset="70%" stopColor="#00d8ff" stopOpacity="1" />
                <stop offset="100%" stopColor="#4EF0C5" stopOpacity="0.6" />
              </linearGradient>

              {/* Soft Drop Shadow for Highway Elevation */}
              <filter id="road-elevation" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#022B32" floodOpacity="0.18" />
              </filter>
            </defs>

            {/* ───────────────────────────────────────────────────────────
                1. PRIMARY ROAD BED: Thick Multi-lane Dark Teal (#022B32) Asphalt
            ──────────────────────────────────────────────────────────── */}
            <path
              d="M -40 450 L 160 450 C 210 450 240 430 240 380 L 240 220 C 240 170 270 150 320 150 L 560 150 C 610 150 640 170 640 220 L 640 470 C 640 520 670 540 720 540 L 960 540 C 1010 540 1040 520 1040 470 L 1040 220 C 1040 170 1070 150 1120 150 L 1480 150"
              stroke="#022B32"
              strokeWidth="42"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#road-elevation)"
            />

            {/* ───────────────────────────────────────────────────────────
                2. INNER ROAD CHANNEL: Deep Core Surface Bed (#011519)
            ──────────────────────────────────────────────────────────── */}
            <path
              d="M -40 450 L 160 450 C 210 450 240 430 240 380 L 240 220 C 240 170 270 150 320 150 L 560 150 C 610 150 640 170 640 220 L 640 470 C 640 520 670 540 720 540 L 960 540 C 1010 540 1040 520 1040 470 L 1040 220 C 1040 170 1070 150 1120 150 L 1480 150"
              stroke="#011519"
              strokeWidth="28"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* ───────────────────────────────────────────────────────────
                3. MULTI-LANE MICRO-LINES (Parallel Lane Dividing Guides)
            ──────────────────────────────────────────────────────────── */}
            <path
              d="M -40 450 L 160 450 C 210 450 240 430 240 380 L 240 220 C 240 170 270 150 320 150 L 560 150 C 610 150 640 170 640 220 L 640 470 C 640 520 670 540 720 540 L 960 540 C 1010 540 1040 520 1040 470 L 1040 220 C 1040 170 1070 150 1120 150 L 1480 150"
              stroke="#004658"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-60"
            />

            {/* ───────────────────────────────────────────────────────────
                4. CONTINUOUS SLOW-MOVING MINT-GREEN DATA LIGHT TRAIL
            ──────────────────────────────────────────────────────────── */}
            <path
              d="M -40 450 L 160 450 C 210 450 240 430 240 380 L 240 220 C 240 170 270 150 320 150 L 560 150 C 610 150 640 170 640 220 L 640 470 C 640 520 670 540 720 540 L 960 540 C 1010 540 1040 520 1040 470 L 1040 220 C 1040 170 1070 150 1120 150 L 1480 150"
              stroke="url(#highway-stream-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#highway-mint-glow)"
              strokeDasharray="40 160"
              className="animate-data-flow"
            />

            {/* Secondary High-Speed Data Packet Pulse Stream */}
            <path
              d="M -40 450 L 160 450 C 210 450 240 430 240 380 L 240 220 C 240 170 270 150 320 150 L 560 150 C 610 150 640 170 640 220 L 640 470 C 640 520 670 540 720 540 L 960 540 C 1010 540 1040 520 1040 470 L 1040 220 C 1040 170 1070 150 1120 150 L 1480 150"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#highway-mint-glow)"
              strokeDasharray="16 260"
              className="animate-data-flow-fast opacity-95"
            />

            {/* ───────────────────────────────────────────────────────────
                5. EXPANDED NODAL HUBS & CARD JUNCTION BEACONS
            ──────────────────────────────────────────────────────────── */}
            {/* Node 1 Junction */}
            <g transform="translate(240, 300)">
              <circle r="14" fill="#022B32" stroke="#4EF0C5" strokeWidth="2" />
              <circle r="8" fill="#4EF0C5" filter="url(#highway-mint-glow)" className="animate-pulse" />
              <circle r="4" fill="#ffffff" />
            </g>

            {/* Node 2 Junction */}
            <g transform="translate(640, 345)">
              <circle r="14" fill="#022B32" stroke="#4EF0C5" strokeWidth="2" />
              <circle r="8" fill="#4EF0C5" filter="url(#highway-mint-glow)" className="animate-pulse" />
              <circle r="4" fill="#ffffff" />
            </g>

            {/* Node 3 Junction */}
            <g transform="translate(1040, 345)">
              <circle r="14" fill="#022B32" stroke="#4EF0C5" strokeWidth="2" />
              <circle r="8" fill="#4EF0C5" filter="url(#highway-mint-glow)" className="animate-pulse" />
              <circle r="4" fill="#ffffff" />
            </g>

          </svg>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            4 INTERCONNECTED GLASSMORPHIC CARDS (Staggered Flow Grid)
        ════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 xl:gap-8 items-start relative z-10">
          {processNodes.map((node, index) => {
            const IconComponent = node.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`relative group ${node.staggerClass}`}
              >
                {/* Glowing Light Pulse Uplink from Highway Node to Card */}
                <div className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-gradient-to-b from-[#4EF0C5]/40 to-transparent rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Soft Card Ambient Outer Glow on Hover */}
                <div className="absolute -inset-2.5 bg-gradient-to-br from-[#4EF0C5]/25 via-[#022B32]/10 to-[#00d8ff]/15 rounded-[36px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

                {/* Glassmorphic Node Card (Hovering Above Highway Node) */}
                <div className="relative rounded-[28px] sm:rounded-[32px] bg-white/90 backdrop-blur-2xl border border-white/90 p-6 sm:p-7 xl:p-8 shadow-[0_20px_45px_-5px_rgba(2,43,50,0.08)] hover:shadow-[0_28px_60px_-10px_rgba(2,43,50,0.18)] hover:bg-white hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[300px] sm:min-h-[330px]">
                  
                  {/* Top Bar: Icon + Step Badge */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    
                    {/* Deep Teal Icon Container with glowing mint icon & rotation hover */}
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#022B32] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#022B32]/25 group-hover:scale-105 group-hover:bg-[#003745] transition-all duration-300">
                      <IconComponent
                        className="w-5 h-5 sm:w-6 sm:h-6 text-[#4EF0C5] transition-transform duration-300 group-hover:rotate-6"
                        strokeWidth={2}
                      />
                    </div>

                    {/* Glowing STEP Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50/90 border border-emerald-300/60 shadow-[0_0_15px_rgba(78,240,197,0.35)] text-[#022B32] font-mono text-[11px] font-bold tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4EF0C5] shadow-[0_0_6px_#4EF0C5]" />
                      <span>{node.stepNumber}</span>
                    </div>

                  </div>

                  {/* Node Content Body */}
                  <div className="space-y-2.5 text-left flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#022B32] transition-colors duration-200 font-display">
                      {node.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-slate-600 font-normal leading-relaxed">
                      {node.description}
                    </p>
                  </div>

                  {/* Bottom Processing Phase Circuit Telemetry */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <span className="w-1 h-1 rounded-full bg-[#4EF0C5]" />
                      <span>{node.nodePhase}</span>
                    </span>
                    <span className="text-[#022B32] font-semibold flex items-center gap-1">
                      <Activity className="w-2.5 h-2.5 text-[#4EF0C5] animate-pulse" />
                      <span>STAGE 0{index + 1}</span>
                    </span>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default Serve;
