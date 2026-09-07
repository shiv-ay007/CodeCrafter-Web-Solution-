import React, { useState } from "react";
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
  Check,
  Compass,
  Eye,
  Globe
} from "lucide-react";

/**
 * Verified CCWS Digital Growth & Creative Disciplines
 */
const disciplines = [
  {
    id: "branding",
    category: "IDENTITY & DESIGN SYSTEM",
    title: "Brand Identity & Systems",
    tagline: "Iconic visual systems engineered for multi-decade brand recognition.",
    path: "/digital-booster/branding",
    icon: Palette,
    accentColor: "#004658",
    glowColor: "rgba(0, 70, 88, 0.25)",
    badge: "CORE ASSET",
    colSpan: "lg:col-span-7",
    metrics: { label: "Brand Recall", value: "+180%" }
  },
  {
    id: "social",
    category: "VIRAL AMPLIFICATION",
    title: "Social Media & Video Formats",
    tagline: "High-retention short-form video creative and algorithmic audience growth.",
    path: "/digital-booster/social-media",
    icon: Share2,
    accentColor: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.25)",
    badge: "VIRAL REACH",
    colSpan: "lg:col-span-5",
    metrics: { label: "Engagement", value: "340%" }
  },
  {
    id: "design",
    category: "3D & MOTION CRAFT",
    title: "Graphic & Motion Design",
    tagline: "Bespoke 3D product renders, dynamic motion graphics, and editorial art.",
    path: "/web-design",
    icon: PenTool,
    accentColor: "#EA580C",
    glowColor: "rgba(234, 88, 12, 0.25)",
    badge: "60 FPS CRAFT",
    colSpan: "lg:col-span-4",
    metrics: { label: "Visual Impact", value: "4K Crisp" }
  },
  {
    id: "seo",
    category: "SEARCH DOMINANCE",
    title: "SEO & Organic Engine",
    tagline: "Technical SEO audits, semantic topic clusters, and #1 SERP keyword rankings.",
    path: "/digital-booster/seo",
    icon: Search,
    accentColor: "#2563EB",
    glowColor: "rgba(37, 99, 235, 0.25)",
    badge: "ORGANIC #1",
    colSpan: "lg:col-span-4",
    metrics: { label: "Traffic Volume", value: "+380%" }
  },
  {
    id: "content",
    category: "EDITORIAL CONVERSION",
    title: "Content Strategy & Copy",
    tagline: "High-converting landing page narratives, case studies, and lead funnels.",
    path: "/digital-booster/content-marketing",
    icon: FileText,
    accentColor: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.25)",
    badge: "CONVERSION",
    colSpan: "lg:col-span-4",
    metrics: { label: "Conversion Lift", value: "+44%" }
  },
  {
    id: "campaigns",
    category: "PAID MEDIA SCALING",
    title: "Digital Campaigns & Performance Media",
    tagline: "Multi-channel media buying across Google, Meta & LinkedIn with algorithmic ROAS scaling.",
    path: "/digital-booster/google-ads",
    icon: Megaphone,
    accentColor: "#0284C7",
    glowColor: "rgba(2, 132, 199, 0.25)",
    badge: "4.8X ROAS",
    colSpan: "lg:col-span-12",
    metrics: { label: "Avg Return", value: "4.8x ROAS" }
  }
];

const marqueeItems = [
  "BRAND IDENTITY & SYSTEMS",
  "SOCIAL MEDIA AMPLIFICATION",
  "3D & MOTION GRAPHICS",
  "PERFORMANCE PAID CAMPAIGNS",
  "SEO & ORGANIC DOMINANCE",
  "CONVERSION CONTENT STRATEGY",
  "OMNICHANNEL MEDIA BUYING",
  "BESPOKE UI/UX CRAFT"
];

const Branding = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section 
      className="relative overflow-hidden bg-[#FAFAF8] py-20 sm:py-24 lg:py-32 select-none"
      id="branding-marketing"
    >
      {/* ─────────────────────────────────────────────────────────────
          AMBIENT BACKGROUND LIGHTING & SUBTLE FLOATING PARTICLES
      ─────────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft Multi-color Ambient Radial Blobs */}
        <div 
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[550px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0, 70, 88, 0.5) 0%, rgba(234, 88, 12, 0.2) 45%, transparent 70%)"
          }}
        />
        <div 
          className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, transparent 65%)"
          }}
        />
        <div 
          className="absolute bottom-10 -right-40 w-[650px] h-[650px] rounded-full blur-3xl opacity-15"
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
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

        {/* ─────────────────────────────────────────────────────────────
            HEADER AREA: MINIMAL, IMPACTFUL & EDITORIAL
        ─────────────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            {/* Sleek Top Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/90 px-4 py-1.5 shadow-2xs backdrop-blur-md mb-4">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA580C] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EA580C]" />
              </span>
              <span className="text-[11.5px] font-bold uppercase tracking-[0.22em] text-[#004658]">
                Creative Agency & Brand Studio
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-[-0.035em] text-slate-950 leading-[1.08]">
              Where bold ideas become <br />
              <span className="text-[#004658] relative inline-block">
                iconic digital brands
                <span className="text-[#EA580C]">.</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#004658] via-[#EA580C]/70 to-transparent rounded-full opacity-35" />
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-[#004658] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,70,88,0.25)] hover:bg-[#022B32] hover:shadow-[0_8px_25px_rgba(0,70,88,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <span>Start Brand Project</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </Link>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-50/80 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for New Projects</span>
            </div>
          </motion.div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            VISUAL BENTO SHOWROOM (RICH ANIMATIONS, MINIMAL TEXT)
        ─────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">

          {/* ═════════════════════════════════════════════════════════════
              CARD 1: BRAND IDENTITY (7 Cols - Interactive Studio Mockup)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 sm:p-9 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(0,70,88,0.18)] hover:border-[#004658]/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            {/* Luminous Gradient Aura */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#004658]/8 via-teal-500/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#004658] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#004658] to-[#022B32] text-white shadow-md shadow-[#004658]/25 group-hover:scale-108 transition-all duration-300 shrink-0">
                    <Palette size={22} strokeWidth={2.2} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#004658] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    IDENTITY & DESIGN SYSTEM
                  </span>
                </div>

                <Link
                  to="/digital-booster/branding"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-[#004658] group-hover:text-white transition-all duration-300 group-hover:rotate-45 shadow-2xs"
                  aria-label="View Brand Identity Services"
                >
                  <ArrowUpRight size={16} strokeWidth={2.3} />
                </Link>
              </div>

              <h3 className="text-2xl sm:text-[26px] font-bold text-slate-950 tracking-tight mb-2 group-hover:text-[#004658] transition-colors">
                Brand Identity & Design Systems
              </h3>
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-normal leading-relaxed max-w-lg mb-6">
                Iconic logomarks, design tokens, responsive typography rules, and multi-decade brand guidelines.
              </p>

              {/* Visual Interactive Graphic: Logo Geometry & Color Token Swatches */}
              <div className="p-5 rounded-2xl bg-slate-50/95 border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                {/* Visual Specimen Card */}
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col justify-between h-32 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#004658] uppercase">Grid Specimen</span>
                    <span className="text-[10px] font-mono text-slate-400">φ = 1.618</span>
                  </div>
                  <div className="text-3xl font-serif font-extrabold text-slate-950 tracking-tight">
                    Aa <span className="text-[#EA580C] font-sans text-xl">/ Studio</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#004658] border border-white shadow-2xs" />
                    <span className="w-5 h-5 rounded-full bg-[#EA580C] border border-white shadow-2xs" />
                    <span className="w-5 h-5 rounded-full bg-[#0F172A] border border-white shadow-2xs" />
                    <span className="w-5 h-5 rounded-full bg-cyan-400 border border-white shadow-2xs" />
                  </div>
                </div>

                {/* Micro Brand Architecture Pill List */}
                <div className="space-y-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200/70">
                    <span className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-500" /> Vector Logo Kit</span>
                    <span className="text-[10px] font-mono text-[#004658] bg-teal-50 px-2 py-0.5 rounded">SVG / EPS</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200/70">
                    <span className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-500" /> Design Tokens</span>
                    <span className="text-[10px] font-mono text-[#EA580C] bg-orange-50 px-2 py-0.5 rounded">Tailwind / CSS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="relative z-10 pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">Includes Full Styleguide & Trademark Asset Pack</span>
              <Link to="/digital-booster/branding" className="text-xs font-bold text-[#004658] hover:underline inline-flex items-center gap-1">
                <span>View Deliverables</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 2: SOCIAL MEDIA & SHORT-FORM (5 Cols - Live Pulse)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 sm:p-9 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(236,72,153,0.18)] hover:border-pink-500/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/8 via-purple-500/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/25 group-hover:scale-108 transition-all duration-300 shrink-0">
                    <Share2 size={22} strokeWidth={2.2} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-200">
                    VIRAL AMPLIFICATION
                  </span>
                </div>

                <Link
                  to="/digital-booster/social-media"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45 shadow-2xs"
                  aria-label="View Social Media Services"
                >
                  <ArrowUpRight size={16} strokeWidth={2.3} />
                </Link>
              </div>

              <h3 className="text-2xl sm:text-[26px] font-bold text-slate-950 tracking-tight mb-2 group-hover:text-pink-600 transition-colors">
                Social Media & Content
              </h3>
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-normal leading-relaxed mb-6">
                High-retention short-form creative, reels, creator strategy, and algorithmic reach.
              </p>

              {/* Interactive Social Media Visual Widget */}
              <div className="p-4 rounded-2xl bg-slate-50/95 border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <Heart size={18} className="text-pink-500 fill-pink-500 animate-pulse" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">48.2K Engagements</div>
                      <div className="text-[10px] text-slate-500">+340% Viral Lift</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full">Active</span>
                </div>

                {/* Mini Visual Waveform */}
                <div className="flex items-end justify-between gap-1.5 h-10 px-2">
                  {[40, 65, 30, 85, 95, 60, 100, 75, 90, 50, 80, 100].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-1 bg-gradient-to-t from-pink-500 to-purple-500 rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">Instagram, TikTok, YouTube & LinkedIn</span>
              <Link to="/digital-booster/social-media" className="text-xs font-bold text-pink-600 hover:underline inline-flex items-center gap-1">
                <span>View Strategy</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 3: GRAPHIC & 3D MOTION (4 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(234,88,12,0.18)] hover:border-[#EA580C]/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#EA580C]/8 via-amber-500/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#EA580C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] text-white shadow-md shadow-[#EA580C]/25 group-hover:scale-108 transition-all duration-300 shrink-0">
                  <PenTool size={20} strokeWidth={2.2} />
                </div>
                <Link
                  to="/web-design"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-[#EA580C] group-hover:text-white transition-all duration-300 group-hover:rotate-45"
                  aria-label="View Design Services"
                >
                  <ArrowUpRight size={15} strokeWidth={2.3} />
                </Link>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200 inline-block mb-2">
                ART DIRECTION
              </span>

              <h3 className="text-xl font-bold text-slate-950 tracking-tight mb-2 group-hover:text-[#EA580C] transition-colors">
                Graphic & 3D Design
              </h3>
              <p className="text-[13.5px] text-slate-600 font-normal leading-relaxed mb-4">
                3D product assets, vector illustrations, and high-impact motion creative.
              </p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers size={14} className="text-[#EA580C]" />
                  <span className="text-xs font-semibold text-slate-800">4K Vector Assets</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#EA580C]">60 FPS</span>
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500">UI/UX & Motion</span>
              <Link to="/web-design" className="text-xs font-bold text-[#EA580C] hover:underline">Explore ↗</Link>
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 4: SEARCH ENGINE OPTIMIZATION (4 Cols)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 group relative flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(37,99,235,0.18)] hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-cyan-500/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/25 group-hover:scale-108 transition-all duration-300 shrink-0">
                  <Search size={20} strokeWidth={2.2} />
                </div>
                <Link
                  to="/digital-booster/seo"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45"
                  aria-label="View SEO Services"
                >
                  <ArrowUpRight size={15} strokeWidth={2.3} />
                </Link>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 inline-block mb-2">
                SERP DOMINANCE
              </span>

              <h3 className="text-xl font-bold text-slate-950 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                SEO & Organic Growth
              </h3>
              <p className="text-[13.5px] text-slate-600 font-normal leading-relaxed mb-4">
                Technical audit engines, keyword clusters, and authority backlinks.
              </p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Search size={14} className="text-blue-600" />
                  <span className="text-xs font-semibold text-slate-800">#1 Google Rank</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-600">+380%</span>
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500">Semantic SEO</span>
              <Link to="/digital-booster/seo" className="text-xs font-bold text-blue-600 hover:underline">Explore ↗</Link>
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 5: CONTENT STRATEGY & COPYWRITING (4 Cols)
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
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-md shadow-violet-500/25 group-hover:scale-108 transition-all duration-300 shrink-0">
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

              <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-200 inline-block mb-2">
                EDITORIAL CONVERSION
              </span>

              <h3 className="text-xl font-bold text-slate-950 tracking-tight mb-2 group-hover:text-violet-600 transition-colors">
                Content & Copywriting
              </h3>
              <p className="text-[13.5px] text-slate-600 font-normal leading-relaxed mb-4">
                Conversion-focused landing page copy, case studies, and automated lead funnels.
              </p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-violet-600" />
                  <span className="text-xs font-semibold text-slate-800">Lead Funnels</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-violet-600">High-Intent</span>
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500">Sales Copy</span>
              <Link to="/digital-booster/content-marketing" className="text-xs font-bold text-violet-600 hover:underline">Explore ↗</Link>
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════════════════
              CARD 6: DIGITAL CAMPAIGNS & PAID MEDIA (12 Cols - Hero Banner)
          ═════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-12 group relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 sm:p-9 shadow-[0_4px_20px_-4px_rgba(0,70,88,0.06)] hover:shadow-[0_26px_60px_-15px_rgba(0,70,88,0.2)] hover:border-[#004658]/40 hover:-translate-y-1.5 transition-all duration-400"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#004658]/8 via-purple-500/5 to-[#EA580C]/8 opacity-80 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#004658] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#004658] to-[#04434E] text-white shadow-md shadow-[#004658]/25 group-hover:scale-108 transition-all duration-300 shrink-0">
                    <Megaphone size={22} strokeWidth={2.2} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#004658] bg-teal-50 px-3 py-1 rounded-full border border-teal-200 inline-flex items-center gap-1.5">
                    <Flame size={13} className="text-[#EA580C]" />
                    4.8X AVERAGE ROAS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-2.5 group-hover:text-[#004658] transition-colors">
                  Digital Campaigns & Paid Acquisition
                </h3>
                <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-normal leading-relaxed max-w-xl mb-5">
                  Profitable client acquisition across Google Ads, Meta, LinkedIn, and TikTok with automated budget scaling and sub-dollar CPA targets.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Google Search & Shopping", "Meta Ads", "LinkedIn B2B", "TikTok Spark Ads"].map((ch, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/90 bg-slate-50 text-slate-800 font-semibold text-xs group-hover:border-[#004658]/30 group-hover:bg-white transition-all">
                      <CheckCircle2 size={12} className="text-emerald-500" />
                      {ch}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Live Command Widget */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs">
                  <span className="font-bold flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Campaign Engine</span>
                  <span className="font-mono text-cyan-400">4.8x ROAS</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                    <span className="text-[10px] text-slate-400">Conversion Rate</span>
                    <div className="text-base font-bold text-white">12.4% <span className="text-[10px] text-emerald-400">↑ 34%</span></div>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                    <span className="text-[10px] text-slate-400">Cost Per Lead</span>
                    <div className="text-base font-bold text-white">$4.20 <span className="text-[10px] text-emerald-400">↓ 42%</span></div>
                  </div>
                </div>
                <Link
                  to="/digital-booster/google-ads"
                  className="w-full py-2 bg-[#004658] hover:bg-[#022B32] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Launch Performance Campaign</span>
                  <ArrowUpRight size={13} />
                </Link>
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
          className="mt-14 sm:mt-18 lg:mt-20 overflow-hidden border-y border-slate-200/90 py-5 bg-white/60 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xs group"
        >
          <div className="animate-marquee-left items-center gap-8 whitespace-nowrap">
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
