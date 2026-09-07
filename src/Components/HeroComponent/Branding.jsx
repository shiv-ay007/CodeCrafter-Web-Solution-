import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  Search,
  PenTool,
  Palette,
  FileText,
  Megaphone,
  ArrowUpRight,
  Sparkles,
  Layers,
  Flame,
  CheckCircle2,
  Heart,
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  MousePointerClick,
  MessageCircle,
  Activity,
  Sliders,
  Check
} from "lucide-react";

/**
 * 6 Interactive Orbit Nodes Configuration mapped directly to verified CCWS Routes
 */
const orbitNodes = [
  {
    id: "seo",
    label: "SEO",
    fullName: "Search Optimization",
    icon: Search,
    color: "#2563EB",
    glowColor: "rgba(37, 99, 235, 0.35)",
    angle: 0, // 12 o'clock (Top)
    path: "/digital-booster/seo",
    desc: "+380% Organic Visibility"
  },
  {
    id: "branding",
    label: "Branding",
    fullName: "Brand Identity",
    icon: Palette,
    color: "#004658",
    glowColor: "rgba(0, 70, 88, 0.45)",
    angle: 60, // 2 o'clock (Top-Right)
    path: "/digital-booster/branding",
    desc: "Iconic Visual Systems"
  },
  {
    id: "campaigns",
    label: "Campaigns",
    fullName: "Digital Campaigns",
    icon: Megaphone,
    color: "#EA580C",
    glowColor: "rgba(234, 88, 12, 0.45)",
    angle: 120, // 4 o'clock (Bottom-Right)
    path: "/digital-booster/google-ads",
    desc: "4.8x High-ROI Paid Acquisition"
  },
  {
    id: "design",
    label: "Graphic Design",
    fullName: "Graphic & 3D Design",
    icon: PenTool,
    color: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.45)",
    angle: 180, // 6 o'clock (Bottom)
    path: "/web-design",
    desc: "High-Craft Art Direction"
  },
  {
    id: "content",
    label: "Content Strategy",
    fullName: "Content Strategy",
    icon: FileText,
    color: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.45)",
    angle: 240, // 8 o'clock (Bottom-Left)
    path: "/digital-booster/content-marketing",
    desc: "High-Converting Narratives"
  },
  {
    id: "social",
    label: "Social Media",
    fullName: "Social Amplification",
    icon: Share2,
    color: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.45)",
    angle: 300, // 10 o'clock (Top-Left)
    path: "/digital-booster/social-media",
    desc: "Viral Community Growth"
  }
];

const marqueeItems = [
  "SOCIAL MEDIA AMPLIFICATION",
  "SEO & ORGANIC VISIBILITY",
  "BRAND IDENTITY & SYSTEMS",
  "HIGH-CRAFT GRAPHIC DESIGN",
  "EDITORIAL CONTENT STRATEGY",
  "PERFORMANCE DIGITAL CAMPAIGNS",
  "CONVERSION RATE OPTIMIZATION",
  "OMNICHANNEL MEDIA BUYING"
];

const Branding = () => {
  const [activeOrbit, setActiveOrbit] = useState("branding");
  const [autoRotate, setAutoRotate] = useState(true);

  // Auto-cycle active orbit node when user is not actively hovering
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveOrbit((prev) => {
        const currentIndex = orbitNodes.findIndex((n) => n.id === prev);
        const nextIndex = (currentIndex + 1) % orbitNodes.length;
        return orbitNodes[nextIndex].id;
      });
    }, 3800);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const activeNodeData = orbitNodes.find((n) => n.id === activeOrbit) || orbitNodes[1];

  return (
    <section 
      className="relative overflow-hidden bg-[#FAFAF8] py-20 sm:py-24 lg:py-32 select-none"
      id="branding-marketing"
    >
      {/* ─────────────────────────────────────────────────────────────
          AMBIENT BACKGROUND LIGHTING & SUBTLE DECORATIVE ELEMENTS
      ─────────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft Multi-color Ambient Radial Blobs */}
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[520px] rounded-full blur-3xl opacity-25"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0, 70, 88, 0.45) 0%, rgba(234, 88, 12, 0.18) 45%, transparent 70%)"
          }}
        />
        <div 
          className="absolute top-1/3 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, transparent 65%)"
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-32 w-[580px] h-[580px] rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.45) 0%, transparent 65%)"
          }}
        />

        {/* Subtle Architectural Dot Matrix Grid */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.85) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />

        {/* Subtle Floating Code / Spec Watermarks */}
        <div className="absolute top-12 left-8 font-mono text-[12px] text-slate-900/[0.035] select-none">
          {`// CCWS.Brand.Engine.v4.2\nconst identity = createBrandSystem({\n  resonance: "infinite",\n  growthFactor: 4.8\n});`}
        </div>
        <div className="absolute bottom-16 right-10 font-mono text-[12px] text-slate-900/[0.035] select-none">
          {`return <BrandResonance impact="maximum" reach="global" />;`}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

        {/* ─────────────────────────────────────────────────────────────
            HERO / INTRO AREA
        ─────────────────────────────────────────────────────────────── */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.25fr_0.75fr] mb-16 sm:mb-20">
          {/* Main Title & Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Sleek Eyebrow Pill */}
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/85 px-4 py-1.5 shadow-2xs backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA580C] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EA580C]" />
              </span>
              <span className="text-[11.5px] font-bold uppercase tracking-[0.22em] text-[#004658]">
                Branding & Marketing
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-[-0.035em] text-slate-950 leading-[1.08]">
              Make your brand <br />
              <span className="text-[#004658] relative inline-block">
                impossible to ignore
                <span className="text-[#EA580C]">.</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#004658] via-[#EA580C]/70 to-transparent rounded-full opacity-35" />
              </span>
            </h2>
          </motion.div>

          {/* Right Description & Action CTA */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:pb-1 flex flex-col justify-end"
          >
            <p className="max-w-md text-[15px] sm:text-[16px] leading-relaxed text-slate-600 font-normal">
              We combine deep brand strategy, bespoke visual design, and high-impact digital campaigns to create brands that connect emotionally and scale exponentially.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                to="/digital-booster/branding"
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-[#004658] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,70,88,0.25)] hover:bg-[#022B32] hover:shadow-[0_8px_25px_rgba(0,70,88,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Explore Creative Services</span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-xs font-bold text-slate-800 hover:border-[#004658] hover:bg-slate-50 transition-all duration-200"
              >
                <Sparkles size={13} className="text-[#EA580C]" />
                <span>Book Discovery Call</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            BRAND ORBIT VISUAL (6 ORBITS AROUND CCWS CENTER)
        ─────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto my-12 sm:my-16 lg:my-20 flex h-[350px] sm:h-[400px] max-w-4xl items-center justify-center"
          onMouseEnter={() => setAutoRotate(false)}
          onMouseLeave={() => setAutoRotate(true)}
        >
          {/* Subtle Outer Atmospheric Glow */}
          <div 
            className="absolute h-80 w-80 rounded-full blur-2xl transition-all duration-700 pointer-events-none opacity-40"
            style={{ background: activeNodeData.glowColor }}
          />

          {/* Outer Dashed Orbit Ring (Slow continuous rotation) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="absolute h-[320px] w-[320px] sm:h-[370px] sm:w-[370px] rounded-full border border-dashed border-slate-300/85 pointer-events-none"
          />

          {/* Inner Solid Orbit Ring */}
          <div className="absolute h-[220px] w-[220px] sm:h-[250px] sm:w-[250px] rounded-full border border-slate-200/90 pointer-events-none" />

          {/* Orbit Dynamic Radial Gradient Ring */}
          <div className="absolute h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] rounded-full border border-slate-200/40 bg-gradient-to-tr from-transparent via-slate-100/40 to-transparent pointer-events-none" />

          {/* Moving Satellite Particles on Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute h-[320px] w-[320px] sm:h-[370px] sm:w-[370px] pointer-events-none"
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#EA580C] shadow-[0_0_12px_#EA580C]" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#004658] shadow-[0_0_10px_#004658]" />
          </motion.div>

          {/* Center CCWS Core Node */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            {/* Pulsing Back Ring */}
            <motion.div 
              animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-28 w-28 sm:h-32 sm:w-32 rounded-full border border-[#004658]/30 bg-[#004658]/5 pointer-events-none"
            />

            {/* CCWS Hub Badge */}
            <Link
              to="/about"
              className="relative flex h-20 w-20 sm:h-24 sm:w-24 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#004658] to-[#022B32] text-white shadow-[0_12px_35px_rgba(0,70,88,0.35)] border-2 border-white/20 backdrop-blur-md hover:scale-105 transition-all duration-300 cursor-pointer group"
              title="Learn about CCWS Studio Core"
            >
              <span className="text-base sm:text-lg font-black tracking-wider text-white">CCWS</span>
              <span className="text-[8px] font-semibold uppercase tracking-widest text-slate-300">CORE</span>
            </Link>
          </div>

          {/* 6 Orbit Floating Nodes */}
          {orbitNodes.map((node) => {
            const Icon = node.icon;
            const isActive = activeOrbit === node.id;
            const angleRad = (node.angle - 90) * (Math.PI / 180);
            const radius = typeof window !== "undefined" && window.innerWidth < 640 ? 125 : 160;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <div
                key={node.id}
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
                className="absolute z-30 transition-transform duration-300"
              >
                <Link
                  to={node.path}
                  onClick={() => setActiveOrbit(node.id)}
                  onMouseEnter={() => setActiveOrbit(node.id)}
                  className={`group flex items-center gap-2 rounded-full border px-3.5 py-2 sm:px-4 sm:py-2.5 transition-all duration-300 cursor-pointer shadow-sm ${
                    isActive
                      ? "bg-white border-slate-900/40 shadow-[0_10px_25px_rgba(0,0,0,0.12)] scale-110 -translate-y-1"
                      : "bg-white/90 hover:bg-white border-slate-200/90 hover:border-slate-400 hover:scale-105"
                  }`}
                  aria-label={`Navigate to ${node.fullName}`}
                >
                  {/* Icon Indicator with Accent Background */}
                  <div
                    className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110 shrink-0"
                    style={{ backgroundColor: node.color }}
                  >
                    <Icon size={13} strokeWidth={2.3} />
                  </div>

                  {/* Label */}
                  <span className={`text-xs sm:text-[13px] font-bold tracking-tight transition-colors ${
                    isActive ? "text-slate-950" : "text-slate-700 group-hover:text-slate-950"
                  }`}>
                    {node.label}
                  </span>

                  {/* Active Indicator Dot */}
                  {isActive && (
                    <span 
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: node.color }}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            BENTO-STYLE SERVICE CARDS GRID
        ─────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 mt-12 sm:mt-16">

          {/* ═════════════════════════════════════════════════════════════
              CARD 1: SOCIAL MEDIA AMPLIFICATION (Large Bento - 7 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 sm:p-9 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(236,72,153,0.15)] hover:border-pink-500/35 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/8 via-purple-500/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/25 group-hover:scale-108 transition-all duration-300 shrink-0">
                    <Share2 size={22} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full border border-pink-200">
                      VIRAL AMPLIFICATION
                    </span>
                  </div>
                </div>

                <Link
                  to="/digital-booster/social-media"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45 shadow-2xs"
                  aria-label="View Social Media Services"
                >
                  <ArrowUpRight size={16} strokeWidth={2.3} />
                </Link>
              </div>

              <h3 className="text-2xl sm:text-[26px] font-bold text-slate-950 tracking-tight mb-3 group-hover:text-pink-600 transition-colors">
                Social Media Growth & Creative Content
              </h3>
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-normal leading-relaxed max-w-xl">
                Build an undeniable social footprint with high-retention video formats, bespoke visual aesthetics, algorithmic feed optimization, and active audience engagement.
              </p>

              {/* Interactive Social Media Visual Widget */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-100 text-pink-600 shrink-0">
                    <Heart size={18} className="fill-pink-500 text-pink-500 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Avg Engagement</div>
                    <div className="text-sm font-bold text-slate-900">+340% Growth Rate</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-600 shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Viral Formats</div>
                    <div className="text-sm font-bold text-slate-900">Reels & Short-Form</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-5 mt-6 border-t border-slate-100 flex flex-wrap gap-2">
              {["Short-Form Video", "Creator Strategy", "Community Mgmt", "Trend Jacking", "Influencer Collabs"].map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/90 bg-slate-50 text-slate-700 font-semibold text-xs group-hover:border-pink-300 group-hover:bg-white transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 2: SEARCH ENGINE OPTIMIZATION (Medium Bento - 5 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 sm:p-9 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(37,99,235,0.15)] hover:border-blue-500/35 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-cyan-500/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/25 group-hover:scale-108 transition-all duration-300 shrink-0">
                    <Search size={22} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      ORGANIC TRAFFIC
                    </span>
                  </div>
                </div>

                <Link
                  to="/digital-booster/seo"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45 shadow-2xs"
                  aria-label="View SEO Services"
                >
                  <ArrowUpRight size={16} strokeWidth={2.3} />
                </Link>
              </div>

              <h3 className="text-2xl sm:text-[26px] font-bold text-slate-950 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                SEO & Search Dominance
              </h3>
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-normal leading-relaxed">
                Dominate high-intent search queries with technical SEO audits, semantic topical clusters, backlink outreach, and core web vitals speed optimization.
              </p>

              {/* Interactive SEO Search & Upward Graph Widget */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between px-3 py-2 bg-white rounded-xl border border-slate-200 shadow-2xs text-xs font-mono text-slate-700">
                  <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                    <Search size={13} className="text-blue-500 shrink-0" />
                    <span>google.com/search?q="best+agency"</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">#1 SERP</span>
                </div>

                <div className="flex items-end justify-between gap-2 h-16 pt-2 px-2">
                  <div className="flex-1 bg-blue-100 rounded-t-md h-[40%]" />
                  <div className="flex-1 bg-blue-200 rounded-t-md h-[55%]" />
                  <div className="flex-1 bg-blue-300 rounded-t-md h-[70%]" />
                  <div className="flex-1 bg-blue-400 rounded-t-md h-[85%]" />
                  <div className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t-md h-[100%] relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-blue-600 whitespace-nowrap">+380%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-5 mt-6 border-t border-slate-100 flex flex-wrap gap-2">
              {["Technical SEO", "Topic Clusters", "Core Web Vitals", "Link Building"].map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/90 bg-slate-50 text-slate-700 font-semibold text-xs group-hover:border-blue-300 group-hover:bg-white transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 3: BRAND IDENTITY & DESIGN SYSTEMS (Bento - 4 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(0,70,88,0.18)] hover:border-[#004658]/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#004658]/8 via-teal-500/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#004658] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#004658] to-[#022B32] text-white shadow-md shadow-[#004658]/25 group-hover:scale-108 transition-all duration-300 shrink-0">
                  <Palette size={20} strokeWidth={2.2} />
                </div>
                <Link
                  to="/digital-booster/branding"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-[#004658] group-hover:text-white transition-all duration-300 group-hover:rotate-45"
                  aria-label="View Brand Identity Services"
                >
                  <ArrowUpRight size={15} strokeWidth={2.3} />
                </Link>
              </div>

              <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#004658] bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 inline-block mb-2.5">
                VISUAL IDENTITY
              </span>

              <h3 className="text-xl sm:text-[22px] font-bold text-slate-950 tracking-tight mb-2.5 group-hover:text-[#004658] transition-colors">
                Brand Identity & Strategy
              </h3>
              <p className="text-[14px] text-slate-600 font-normal leading-relaxed">
                Iconic logomarks, typography rules, color tokens, and comprehensive style guides that differentiate your business.
              </p>

              {/* Color Swatch & Typography Widget */}
              <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                <div className="flex -space-x-1.5">
                  <span className="w-6 h-6 rounded-full bg-[#004658] border-2 border-white shadow-sm" title="#004658 Deep Teal" />
                  <span className="w-6 h-6 rounded-full bg-[#EA580C] border-2 border-white shadow-sm" title="#EA580C Radiant Orange" />
                  <span className="w-6 h-6 rounded-full bg-[#0F172A] border-2 border-white shadow-sm" title="#0F172A Obsidian" />
                  <span className="w-6 h-6 rounded-full bg-cyan-400 border-2 border-white shadow-sm" title="#22D3EE Cyan" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-serif font-bold text-slate-900">Aa · Brand Spec</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
              {["Logo Design", "Style Guide", "Brand Voice", "Design Tokens"].map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-full border border-slate-200/90 bg-slate-50 text-slate-700 font-medium text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 4: GRAPHIC & MOTION DESIGN (Bento - 4 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(234,88,12,0.18)] hover:border-[#EA580C]/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#EA580C]/8 via-amber-500/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#EA580C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] text-white shadow-md shadow-[#EA580C]/25 group-hover:scale-108 transition-all duration-300 shrink-0">
                  <PenTool size={20} strokeWidth={2.2} />
                </div>
                <Link
                  to="/web-design"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-[#EA580C] group-hover:text-white transition-all duration-300 group-hover:rotate-45"
                  aria-label="View Graphic Design Services"
                >
                  <ArrowUpRight size={15} strokeWidth={2.3} />
                </Link>
              </div>

              <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#EA580C] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200 inline-block mb-2.5">
                ART DIRECTION
              </span>

              <h3 className="text-xl sm:text-[22px] font-bold text-slate-950 tracking-tight mb-2.5 group-hover:text-[#EA580C] transition-colors">
                Graphic & 3D Design
              </h3>
              <p className="text-[14px] text-slate-600 font-normal leading-relaxed">
                Stop-the-scroll 3D product renders, custom vector illustrations, marketing collateral, and dynamic motion graphics.
              </p>

              {/* Vector Bezier & Layer Mockup Widget */}
              <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-orange-100 text-[#EA580C]">
                    <Layers size={14} />
                  </span>
                  <span className="text-xs font-semibold text-slate-800">4K Vector Layers</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#EA580C]">60 FPS Motion</span>
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
              {["3D Renders", "Motion Assets", "Illustrations", "Print & Ads"].map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-full border border-slate-200/90 bg-slate-50 text-slate-700 font-medium text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 5: CONTENT STRATEGY & COPYWRITING (Bento - 4 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(139,92,246,0.18)] hover:border-purple-500/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-purple-500/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-md shadow-violet-500/25 group-hover:scale-108 transition-all duration-300 shrink-0">
                  <FileText size={20} strokeWidth={2.2} />
                </div>
                <Link
                  to="/digital-booster/content-marketing"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45"
                  aria-label="View Content Strategy Services"
                >
                  <ArrowUpRight size={15} strokeWidth={2.3} />
                </Link>
              </div>

              <span className="text-[10.5px] font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-200 inline-block mb-2.5">
                NARRATIVE ENGINE
              </span>

              <h3 className="text-xl sm:text-[22px] font-bold text-slate-950 tracking-tight mb-2.5 group-hover:text-violet-600 transition-colors">
                Content Strategy & Copy
              </h3>
              <p className="text-[14px] text-slate-600 font-normal leading-relaxed">
                Persuasive editorial storylines, conversion-focused landing page copy, case studies, and automated lead nurturing funnels.
              </p>

              {/* Interactive Editorial Funnel Widget */}
              <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">Editorial Funnel</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">High-Intent</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-600 h-full w-[85%] rounded-full" />
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
              {["Conversion Copy", "Editorial Engine", "Lead Magnets", "Storytelling"].map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-full border border-slate-200/90 bg-slate-50 text-slate-700 font-medium text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 6: DIGITAL CAMPAIGNS & PAID MEDIA (Hero Bento - 12 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-12 group relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 sm:p-10 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_26px_60px_-15px_rgba(0,70,88,0.2)] hover:border-[#004658]/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#004658]/8 via-purple-500/5 to-[#EA580C]/8 opacity-80 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#004658] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details Column */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[#004658] to-[#04434E] text-white shadow-md shadow-[#004658]/25 group-hover:scale-108 transition-all duration-300 shrink-0">
                    <Megaphone size={22} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#004658] bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 inline-flex items-center gap-1.5">
                      <Flame size={13} className="text-[#EA580C]" />
                      ROI-DRIVEN PERFORMANCE
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3 group-hover:text-[#004658] transition-colors">
                  Digital Campaigns & Paid Acquisition
                </h3>
                <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-normal leading-relaxed max-w-xl">
                  Scale profitable customer acquisition across Google Ads, Meta Ads Manager, LinkedIn B2B, and TikTok with algorithmic budget scaling, multivariate ad creative testing, and sub-dollar CPA targets.
                </p>

                {/* Channel Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Google Search & Shopping", "Meta Performance 5", "LinkedIn B2B Ads", "TikTok Spark Ads", "Retargeting DSP"].map((channel, cIdx) => (
                    <span
                      key={cIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/90 bg-slate-50 text-slate-800 font-semibold text-xs group-hover:border-[#004658]/30 group-hover:bg-white transition-all"
                    >
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Campaign Dashboard Mockup - Minimal, Elegant & Unique Glass Console */}
              <div className="lg:col-span-5 relative">
                {/* Subtle Ambient Glow Behind Card */}
                <div 
                  className="absolute -inset-1 rounded-3xl opacity-30 blur-xl pointer-events-none -z-10"
                  style={{
                    background: "radial-gradient(circle, rgba(0,70,88,0.2) 0%, rgba(234,88,12,0.12) 60%, transparent 80%)"
                  }}
                />

                <div className="relative overflow-hidden rounded-[24px] border border-[#004658]/15 bg-gradient-to-b from-[#FAFDFE] via-white to-[#F4F9FB] p-5 sm:p-6 shadow-[0_12px_36px_-8px_rgba(0,70,88,0.12)]">
                  
                  {/* Top Header: Live Status & Benchmark */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4.5">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-800">
                        Live Performance Engine
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/18 text-[#004658] text-[11px] font-bold">
                      <TrendingUp size={12} className="text-[#004658]" />
                      <span>4.8x Avg ROAS</span>
                    </div>
                  </div>

                  {/* Minimal High-Impact Metric Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-4.5">
                    <div className="rounded-xl border border-slate-200/80 bg-white/95 p-3.5 shadow-2xs transition-all hover:border-[#004658]/30 hover:shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-medium text-slate-500">Conversion Rate</span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200/60">
                          +34.8%
                        </span>
                      </div>
                      <div className="text-xl font-extrabold text-slate-900 tracking-tight">
                        12.4%
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200/80 bg-white/95 p-3.5 shadow-2xs transition-all hover:border-[#004658]/30 hover:shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-medium text-slate-500">Cost Per Lead</span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200/60">
                          -42.0%
                        </span>
                      </div>
                      <div className="text-xl font-extrabold text-slate-900 tracking-tight">
                        $4.20
                      </div>
                    </div>
                  </div>

                  {/* Multi-Channel Allocation & Efficiency Bar */}
                  <div className="rounded-xl border border-slate-200/70 bg-slate-50/80 p-3.5 space-y-2.5 mb-4">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                        <Activity size={12} className="text-[#004658]" />
                        <span>Algorithmic Funnel Efficiency</span>
                      </span>
                      <span className="font-mono font-bold text-[#004658]">94.2% Optimal</span>
                    </div>

                    {/* Segmented Stacked Progress Bar */}
                    <div className="h-2 w-full bg-slate-200/80 rounded-full overflow-hidden flex gap-0.5">
                      <div className="bg-[#004658] h-full rounded-l-full" style={{ width: "46%" }} title="Google Search & Shopping (46%)" />
                      <div className="bg-[#0284C7] h-full" style={{ width: "32%" }} title="Meta Performance 5 (32%)" />
                      <div className="bg-[#EA580C] h-full rounded-r-full" style={{ width: "22%" }} title="LinkedIn B2B & DSP (22%)" />
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-medium text-slate-500 pt-0.5">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" /> Google 46%
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" /> Meta 32%
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" /> Other 22%
                      </span>
                    </div>
                  </div>

                  {/* Bottom Minimal Footer CTA */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                      <Zap size={13} className="text-[#EA580C]" />
                      <span>Smart Auto-Bidding</span>
                    </div>

                    <Link
                      to="/digital-booster/google-ads"
                      className="group/btn inline-flex items-center gap-1.5 rounded-full bg-[#004658] px-3.5 py-1.5 text-[11.5px] font-bold text-white shadow-2xs hover:bg-[#022B32] hover:shadow-xs transition-all duration-200"
                    >
                      <span>Launch Campaign</span>
                      <ArrowUpRight size={12} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            SEAMLESS INFINITE BOTTOM MARQUEE
        ─────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 sm:mt-20 lg:mt-24 overflow-hidden border-y border-slate-200/90 py-5 bg-white/60 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xs group"
        >
          <div className="animate-marquee-left items-center gap-8 whitespace-nowrap">
            {/* Double the marquee items list to ensure seamless zero-gap infinite looping */}
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-slate-600 hover:text-[#004658] transition-colors cursor-default">
                  {item}
                </span>
                <span className="text-xs text-[#EA580C] font-bold">✦</span>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Branding;