import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
                Branding & Creative Studio
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
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-300/80 mb-0.5">STUDIO</span>
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
            CREATIVE, FUN & MINIMAL BENTO SERVICE CARDS
        ─────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 mt-12 sm:mt-16">

          {/* ═════════════════════════════════════════════════════════════
              CARD 1: SOCIAL MEDIA (The "Viral Lab" Studio Canvas - 7 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 sm:p-9 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(236,72,153,0.18)] hover:border-pink-500/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            {/* Ambient Corner Glow & Top Ambient Accent Line */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              {/* Studio Card Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-lg border border-pink-200/80">
                    // 01 · VIRAL LAB
                  </span>
                  <div className="flex items-center gap-1 bg-slate-100/90 px-2 py-0.5 rounded-full text-[10.5px] font-semibold text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Reach</span>
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

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-[26px] font-bold text-slate-950 tracking-tight mb-2.5 group-hover:text-pink-600 transition-colors">
                Social Media & Viral Amplification
              </h3>
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-normal leading-relaxed max-w-xl">
                High-retention short-form creative, algorithmic feed optimization, and bespoke aesthetic direction that turns followers into loyal customers.
              </p>

              {/* Creative Social Studio Widget */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-pink-50/20 border border-slate-200/80">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/60">
                  {/* Floating Reactions Bar */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                      <Heart size={14} className="fill-pink-500 text-pink-500 animate-bounce" />
                      <span>48.2k</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-full border border-slate-200 shadow-2xs text-xs font-bold text-slate-700">
                      <MessageCircle size={13} className="text-blue-500" />
                      <span>1.9k</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-full border border-slate-200 shadow-2xs text-xs font-bold text-slate-700">
                      <Share2 size={13} className="text-purple-500" />
                      <span>9.4k</span>
                    </span>
                  </div>

                  {/* Audio Equalizer animation bars */}
                  <div className="flex items-end gap-1 h-5 px-2">
                    <span className="w-1 bg-pink-500 rounded-full h-3 animate-pulse" />
                    <span className="w-1 bg-pink-400 rounded-full h-5 animate-pulse" style={{ animationDelay: "150ms" }} />
                    <span className="w-1 bg-pink-600 rounded-full h-2 animate-pulse" style={{ animationDelay: "300ms" }} />
                    <span className="w-1 bg-pink-500 rounded-full h-4 animate-pulse" style={{ animationDelay: "450ms" }} />
                  </div>
                </div>

                <div className="pt-2.5 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium">Algorithm Match: <strong className="text-pink-600 font-bold">99.4% Peak</strong></span>
                  <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">+340% MoM</span>
                </div>
              </div>
            </div>

            {/* Bottom Tag Pills */}
            <div className="relative z-10 pt-5 mt-5 border-t border-slate-100 flex flex-wrap gap-2">
              {["📱 9:16 Short-Form", "🔥 Viral Hooks", "✨ Creator Collabs", "🎯 Audience Retargeting"].map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/90 bg-slate-50 text-slate-800 font-semibold text-xs group-hover:border-pink-300 group-hover:bg-white hover:scale-105 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 2: SEO & SEARCH (The "SERP Radar" Terminal - 5 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 sm:p-9 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(37,99,235,0.18)] hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200/80">
                  // 02 · SERP RADAR
                </span>

                <Link
                  to="/digital-booster/seo"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45 shadow-2xs"
                  aria-label="View SEO Services"
                >
                  <ArrowUpRight size={16} strokeWidth={2.3} />
                </Link>
              </div>

              <h3 className="text-2xl sm:text-[26px] font-bold text-slate-950 tracking-tight mb-2.5 group-hover:text-blue-600 transition-colors">
                SEO & Search Dominance
              </h3>
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-normal leading-relaxed">
                Capture high-intent organic demand with technical audits, semantic keyword clusters, and sub-second Core Web Vitals speed.
              </p>

              {/* Creative Search Console Terminal Widget */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-blue-50/20 border border-slate-200/80 space-y-3">
                {/* Search Bar with Pulse */}
                <div className="flex items-center justify-between px-3 py-2 bg-white rounded-xl border border-slate-200 shadow-2xs text-xs font-mono text-slate-800">
                  <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                    <Search size={13} className="text-blue-500 shrink-0" />
                    <span>search: "top digital studio"</span>
                  </div>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 shrink-0">#1 SERP 🚀</span>
                </div>

                {/* 3D-feel Stepped Bar Graph */}
                <div className="flex items-end justify-between gap-2 h-14 pt-1 px-1">
                  <div className="flex-1 bg-blue-100 rounded-t-lg h-[35%]" />
                  <div className="flex-1 bg-blue-200 rounded-t-lg h-[50%]" />
                  <div className="flex-1 bg-blue-300 rounded-t-lg h-[70%]" />
                  <div className="flex-1 bg-blue-400 rounded-t-lg h-[85%]" />
                  <div className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t-lg h-[100%] relative shadow-sm">
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-blue-600 whitespace-nowrap">+380%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-5 mt-5 border-t border-slate-100 flex flex-wrap gap-2">
              {["🌐 Topic Clusters", "⚡ Core Web Vitals", "🔗 Authority Outreach", "📈 Rank #1"].map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/90 bg-slate-50 text-slate-800 font-semibold text-xs group-hover:border-blue-300 group-hover:bg-white hover:scale-105 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 3: BRAND IDENTITY (The "Design System Canvas" - 4 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(0,70,88,0.18)] hover:border-[#004658]/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#004658]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#004658] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#004658] bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200/80">
                  // 03 · IDENTITY SYSTEM
                </span>
                <Link
                  to="/digital-booster/branding"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-[#004658] group-hover:text-white transition-all duration-300 group-hover:rotate-45"
                  aria-label="View Brand Identity Services"
                >
                  <ArrowUpRight size={15} strokeWidth={2.3} />
                </Link>
              </div>

              <h3 className="text-xl sm:text-[22px] font-bold text-slate-950 tracking-tight mb-2 group-hover:text-[#004658] transition-colors">
                Brand Identity & Strategy
              </h3>
              <p className="text-[14px] text-slate-600 font-normal leading-relaxed">
                Iconic logomarks, typography pairing, color tokens, and comprehensive style guides that differentiate your business.
              </p>

              {/* Creative Color Token & Specimen Box */}
              <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                <div className="flex -space-x-1.5">
                  <span className="w-7 h-7 rounded-full bg-[#004658] border-2 border-white shadow-sm hover:scale-115 transition-transform" title="#004658 Deep Teal" />
                  <span className="w-7 h-7 rounded-full bg-[#EA580C] border-2 border-white shadow-sm hover:scale-115 transition-transform" title="#EA580C Radiant Orange" />
                  <span className="w-7 h-7 rounded-full bg-[#0F172A] border-2 border-white shadow-sm hover:scale-115 transition-transform" title="#0F172A Obsidian" />
                  <span className="w-7 h-7 rounded-full bg-cyan-400 border-2 border-white shadow-sm hover:scale-115 transition-transform" title="#22D3EE Cyan" />
                </div>
                <span className="text-xs font-serif font-bold text-slate-900 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                  Aa · 1:1.618 Ratio
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
              {["✨ Iconic Monogram", "🎨 Design Tokens", "📖 Style Guide"].map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-full border border-slate-200/90 bg-slate-50 text-slate-700 font-semibold text-[11px] hover:border-teal-300 transition-all">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 4: GRAPHIC & 3D DESIGN (The "Vector Studio" - 4 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(245,158,11,0.18)] hover:border-amber-500/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/80">
                  // 04 · 3D & MOTION
                </span>
                <Link
                  to="/web-design"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 group-hover:rotate-45"
                  aria-label="View Graphic Design Services"
                >
                  <ArrowUpRight size={15} strokeWidth={2.3} />
                </Link>
              </div>

              <h3 className="text-xl sm:text-[22px] font-bold text-slate-950 tracking-tight mb-2 group-hover:text-amber-600 transition-colors">
                Graphic & 3D Design
              </h3>
              <p className="text-[14px] text-slate-600 font-normal leading-relaxed">
                Stop-the-scroll 3D product renders, custom vector illustrations, marketing collateral, and dynamic motion assets.
              </p>

              {/* Vector & Motion Canvas Widget */}
              <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 text-amber-600">
                    <Layers size={14} />
                  </span>
                  <span className="text-xs font-semibold text-slate-800">4K Vector Canvas</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-amber-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                  🎬 60 FPS
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
              {["💎 3D Glass Assets", "🎬 Motion Graphics", "✒️ Vector Art"].map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-full border border-slate-200/90 bg-slate-50 text-slate-700 font-semibold text-[11px] hover:border-amber-300 transition-all">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 5: CONTENT STRATEGY (The "Narrative Engine" - 4 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(139,92,246,0.18)] hover:border-purple-500/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-lg border border-violet-200/80">
                  // 05 · NARRATIVE ENGINE
                </span>
                <Link
                  to="/digital-booster/content-marketing"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45"
                  aria-label="View Content Strategy Services"
                >
                  <ArrowUpRight size={15} strokeWidth={2.3} />
                </Link>
              </div>

              <h3 className="text-xl sm:text-[22px] font-bold text-slate-950 tracking-tight mb-2 group-hover:text-violet-600 transition-colors">
                Content Strategy & Copy
              </h3>
              <p className="text-[14px] text-slate-600 font-normal leading-relaxed">
                Persuasive editorial storylines, conversion-focused landing page copy, case studies, and automated lead nurturing funnels.
              </p>

              {/* Storyboard & Highlighter Funnel Widget */}
              <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">Hook ➔ Value ➔ Action</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">⚡ High Intent</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-600 h-full w-[88%] rounded-full" />
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
              {["✍️ Conversion Copy", "📄 Lead Magnets", "⚡ Funnel Flow"].map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-full border border-slate-200/90 bg-slate-50 text-slate-700 font-semibold text-[11px] hover:border-purple-300 transition-all">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 6: DIGITAL CAMPAIGNS (The "Growth Machine" - 12 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-12 group relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 sm:p-10 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_26px_60px_-15px_rgba(0,70,88,0.2)] hover:border-[#004658]/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#004658]/10 via-[#EA580C]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#004658] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details Column */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="font-mono text-xs font-bold text-[#004658] bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200/80">
                    // 06 · GROWTH MACHINE
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200 inline-flex items-center gap-1">
                    <Flame size={13} className="text-[#EA580C]" />
                    4.8x AVERAGE ROAS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3 group-hover:text-[#004658] transition-colors">
                  Digital Campaigns & Paid Acquisition
                </h3>
                <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-normal leading-relaxed max-w-xl">
                  Omnichannel media buying across Google Ads, Meta Ads Manager, LinkedIn B2B, and TikTok with algorithmic budget scaling, multivariate ad creative testing, and sub-dollar CPA targets.
                </p>

                {/* Channel Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Google Search & Shopping", "Meta Performance 5", "LinkedIn B2B Ads", "TikTok Spark Ads", "Retargeting DSP"].map((channel, cIdx) => (
                    <span
                      key={cIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/90 bg-slate-50 text-slate-800 font-semibold text-xs group-hover:border-[#004658]/30 group-hover:bg-white hover:scale-105 transition-all"
                    >
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Campaign Dashboard Mockup */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Live Campaign Engine</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                    4.8x Avg ROAS
                  </span>
                </div>

                {/* Dashboard Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[11px] text-slate-400 font-medium">Conversion Rate</span>
                    <div className="text-lg font-bold text-white tracking-tight mt-0.5">12.4% <span className="text-[10px] text-emerald-400">↑ 34%</span></div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[11px] text-slate-400 font-medium">Cost Per Lead</span>
                    <div className="text-lg font-bold text-white tracking-tight mt-0.5">$4.20 <span className="text-[10px] text-emerald-400">↓ 42%</span></div>
                  </div>
                </div>

                {/* Mini Visual Pipeline */}
                <div className="space-y-1.5 text-xs font-mono text-slate-300">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Funnel Efficiency</span>
                    <span className="text-cyan-300">94.2% Optimal</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#004658] via-cyan-400 to-[#EA580C] h-full w-[92%] rounded-full" />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Auto-Bidding Machine</span>
                  <Link
                    to="/digital-booster/google-ads"
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-300 hover:text-white transition-colors"
                  >
                    <span>Launch Campaign</span>
                    <ArrowUpRight size={13} />
                  </Link>
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