import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const productsList = [
  {
    id: "flow-ai",
    category: "AI & LLM Agents",
    title: "Flow AI",
    badge: "AUTONOMOUS ENGINE",
    description: "Deploy bespoke autonomous agents, vector search embeddings, and intelligent LLM workflows with multi-agent orchestration.",
    actionText: "Explore AI Lab",
    link: "/software/crm",
    videoPoster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-31912-large.mp4",
    cardBg: "from-[#002732] via-[#003846] to-[#001820]",
    accentColor: "#4EF0C5"
  },
  {
    id: "pulse-design",
    category: "UI/UX & Product Design",
    title: "Pulse Studio",
    badge: "DESIGN SYSTEMS",
    description: "Human-centered design systems, responsive Figma tokens, micro-interactions, and 60 FPS fluid mobile app interfaces.",
    actionText: "See Design Studio",
    link: "/web-design",
    videoPoster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-rotating-earth-network-technology-30043-large.mp4",
    cardBg: "from-[#021f26] via-[#004658] to-[#011419]",
    accentColor: "#00d8ff"
  },
  {
    id: "nexus-cloud",
    category: "Cloud & Microservices",
    title: "Nexus Core",
    badge: "CLOUD ARCHITECTURE",
    description: "Scalable multi-region cloud edge architectures engineered for sub-38ms global latency, automated CI/CD, and 99.99% uptime.",
    actionText: "View Cloud Matrix",
    link: "/hosting/cloud",
    videoPoster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-matrix-style-code-running-down-39995-large.mp4",
    cardBg: "from-[#011822] via-[#002d38] to-[#001017]",
    accentColor: "#38bdf8"
  },
  {
    id: "quantum-saas",
    category: "Enterprise SaaS",
    title: "Quantum Stack",
    badge: "FULL-STACK PLATFORM",
    description: "Battle-tested TypeScript & Next.js SaaS foundations with automated testing suites, clean code reviews, and SOC-2 compliance.",
    actionText: "Launch SaaS Engine",
    link: "/software/erp",
    videoPoster: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-laptop-42996-large.mp4",
    cardBg: "from-[#02242c] via-[#003d4c] to-[#01161b]",
    accentColor: "#a855f7"
  }
];

const categories = ["All Products", "AI & LLM Agents", "UI/UX & Product Design", "Cloud & Microservices", "Enterprise SaaS"];

const ProductsShowcase = () => {
  const [activeId, setActiveId] = useState("flow-ai");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const filteredProducts = selectedCategory === "All Products"
    ? productsList
    : productsList.filter((p) => p.category === selectedCategory);

  const activeProduct = productsList.find((p) => p.id === activeId) || productsList[0];
  const activeIndex = productsList.findIndex((p) => p.id === activeId);

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % productsList.length;
    setActiveId(productsList[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + productsList.length) % productsList.length;
    setActiveId(productsList[prevIdx].id);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden" id="innovations">
      {/* Background Subtle Gradient */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(0, 70, 88, 0.25) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Top Header & Google-Style Category Pill Tabs */}
        <div className="text-center mb-10 sm:mb-14">
          
          {/* Top Pill Navigation Tabs Bar */}
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-slate-100/90 border border-slate-200/90 shadow-2xs mb-6 max-w-full overflow-x-auto no-scrollbar">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCategory(cat);
                  const matching = productsList.find((p) => cat === "All Products" || p.category === cat);
                  if (matching) setActiveId(matching.id);
                }}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-[#004658] shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Eyebrow Badge */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
              <span>CODECRAFTER LABS & EXPERIMENTS</span>
            </div>
          </div>

          {/* Unified Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-[-0.035em] text-slate-950 leading-[1.12] max-w-3xl mx-auto">
            Try new AI products and{" "}
            <span className="text-[#004658]">
              engineering experiments<span className="text-[#EA580C]">.</span>
            </span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Explore our proprietary digital frameworks, autonomous AI tools, and next-generation software prototypes.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            GOOGLE PRODUCTS REFERENCE: INTERACTIVE EXPANDABLE CARDS GRID
        ════════════════════════════════════════════════════════════ */}
        <div className="relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            
            {/* 1. EXPANDED ACTIVE FEATURED SPLIT CARD (Left 60% on desktop) */}
            <motion.div
              layout
              className="lg:col-span-7 xl:col-span-7 rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 shadow-[0_15px_40px_-5px_rgba(0,70,88,0.12)] overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[420px] sm:min-h-[440px]"
            >
              {/* Left Side Video Stage */}
              <div className="md:col-span-6 relative bg-slate-950 overflow-hidden flex items-center justify-center min-h-[260px] md:min-h-full group">
                <video
                  ref={videoRef}
                  src={activeProduct.videoUrl}
                  poster={activeProduct.videoPoster}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                {/* Video Play / Pause Floating Controls */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 pointer-events-auto cursor-pointer shadow-lg opacity-80 group-hover:opacity-100"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
                  </button>
                </div>

                {/* Sound Mute Toggle in Corner */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/70 transition-all cursor-pointer shadow-xs"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                {/* Category Badge on Video */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-wider">
                  {activeProduct.badge}
                </div>
              </div>

              {/* Right Side Clean White Info Details */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between text-left bg-white">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#004658]">
                    {activeProduct.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                    {activeProduct.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {activeProduct.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <Link
                    to={activeProduct.link}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#004658] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:scale-105 transition-all duration-200"
                  >
                    <span>{activeProduct.actionText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 2. PREVIEW CARDS (Right 40% on desktop) */}
            <div className="lg:col-span-5 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
              {productsList
                .filter((p) => p.id !== activeId)
                .slice(0, 2)
                .map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    onClick={() => setActiveId(product.id)}
                    className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 min-h-[300px] sm:min-h-[440px] flex flex-col justify-between p-6 text-white text-left"
                  >
                    {/* Background Poster Image */}
                    <img
                      src={product.videoPoster}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] group-hover:scale-105 group-hover:brightness-[0.7] transition-all duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Top Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10.5px] font-mono tracking-wider">
                        {product.badge}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-all">
                        <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                      </div>
                    </div>

                    {/* Bottom Preview Content */}
                    <div className="relative z-10 space-y-1.5">
                      <span className="text-[11px] text-cyan-300 font-mono block">
                        {product.category}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-200 transition-colors">
                        {product.title}
                      </h4>
                      <p className="text-xs text-slate-300 line-clamp-2 font-normal leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>

          </div>

          {/* Bottom Controls: Next & Prev Arrows + Dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-[#004658] hover:text-white transition-all cursor-pointer active:scale-95"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {productsList.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeId === p.id
                      ? "w-6 h-2 bg-[#004658]"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Select product ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-[#004658] hover:text-white transition-all cursor-pointer active:scale-95"
              aria-label="Next product"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>

      {/* Bottom Smooth Curved Wave Transition into Contact */}
      <div className="w-full overflow-hidden leading-none mt-10 pointer-events-none -mb-1">
        <svg className="relative block w-full h-8 sm:h-14 text-[#f3f7fb] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default ProductsShowcase;
