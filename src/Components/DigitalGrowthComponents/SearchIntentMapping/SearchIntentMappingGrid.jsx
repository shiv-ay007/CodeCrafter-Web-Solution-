import React from 'react'
import { motion } from 'framer-motion'
import { Target, Search, ShoppingBag, BookOpen, Layers, CheckCircle2, Zap, ArrowDownRight } from 'lucide-react'

const intentCapabilities = [
  {
    id: 1,
    title: "4-Quadrant Intent Classification",
    desc: "Categorizing all seed keywords into Informational, Navigational, Commercial, and Transactional quadrants to map the exact user psychology behind every click.",
    icon: Target,
    badge: "Intent Quadrants",
    color: "from-teal-500/10 via-cyan-500/5 to-transparent",
    border: "border-teal-500/30"
  },
  {
    id: 2,
    title: "Transactional Landing Page UX Mapping",
    desc: "Designing conversion-optimized landing pages tailored specifically for high-intent 'buy', 'hire', or 'pricing' search terms with zero friction points.",
    icon: ShoppingBag,
    badge: "High-Intent UX",
    color: "from-blue-500/10 via-cyan-500/5 to-transparent",
    border: "border-blue-500/30"
  },
  {
    id: 3,
    title: "SERP Feature & Layout Reverse-Engineering",
    desc: "Analyzing Google SERP layouts (Featured Snippets, People Also Ask, Video Packs, Local 3-Pack) to build matching content layouts that win top snippets.",
    icon: Search,
    badge: "SERP Features",
    color: "from-amber-500/10 via-yellow-500/5 to-transparent",
    border: "border-amber-500/30"
  },
  {
    id: 4,
    title: "Commercial Evaluation & Comparison Funnels",
    desc: "Crafting in-depth product comparisons, 'Best vs Best' articles, and buyer guides that capture users right before they make a final purchasing decision.",
    icon: BookOpen,
    badge: "Comparison Funnels",
    color: "from-purple-500/10 via-indigo-500/5 to-transparent",
    border: "border-purple-500/30"
  },
  {
    id: 5,
    title: "Semantic Keyword Clustering & LSI Entities",
    desc: "Grouping related search queries into semantic topical clusters. Building total topical authority in Google’s Knowledge Graph for higher ranking stability.",
    icon: Layers,
    badge: "Topical Authority",
    color: "from-emerald-500/10 via-teal-500/5 to-transparent",
    border: "border-emerald-500/30"
  },
  {
    id: 6,
    title: "Bounce Rate & Dwell Time Optimization",
    desc: "Eliminating mismatched search intent that causes users to bounce. Structuring fast-loading page sections that hold user attention and maximize dwell time.",
    icon: Zap,
    badge: "Dwell Time Lift",
    color: "from-rose-500/10 via-pink-500/5 to-transparent",
    border: "border-rose-500/30"
  }
]

const SearchIntentMappingGrid = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto relative select-none" id="intent-grid">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#004658]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
          <span>Search Intent Capabilities</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          6 Core Pillars Of <span className="text-[#004658]">Search Intent Architecture</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          We bridge the gap between what users search and what your landing pages deliver, turning organic search traffic into active revenue.
        </p>
      </motion.div>

      {/* 6-Grid Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {intentCapabilities.map((item, idx) => {
          const IconComp = item.icon
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 hover:${item.border} hover:shadow-2xl hover:shadow-[#004658]/10 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#004658]/8 text-[#004658] group-hover:bg-[#004658] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-bold tracking-wide group-hover:bg-[#004658]/10 group-hover:text-[#004658] transition-colors">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#004658] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 relative z-10 flex items-center justify-between text-xs font-bold text-[#004658]">
                <span>Intent Matched</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </motion.div>
          )
        })}
      </div>

    </section>
  )
}

export default SearchIntentMappingGrid
