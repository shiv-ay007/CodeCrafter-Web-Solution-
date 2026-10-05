import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Search, Star, Share2, Globe, FileText, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

const localCapabilities = [
  {
    id: 1,
    title: "Google Business Profile 360° Optimization",
    desc: "Complete optimization of your Google Business Profile (GBP) including primary & secondary categories, attributes, business hours, and geotagged HD photo uploads.",
    icon: MapPin,
    badge: "GBP Domination",
    color: "from-teal-500/10 via-cyan-500/5 to-transparent",
    border: "border-teal-500/30"
  },
  {
    id: 2,
    title: "150+ Authority Local Citation Building",
    desc: "Syncing your exact Name, Address, and Phone number (NAP) across Apple Maps, Bing Places, Yelp, JustDial, Sulekha, and 150+ high-DA niche directories.",
    icon: Globe,
    badge: "100% NAP Consistency",
    color: "from-blue-500/10 via-cyan-500/5 to-transparent",
    border: "border-blue-500/30"
  },
  {
    id: 3,
    title: "Automated 5-Star Review Generation Funnel",
    desc: "Deploying automated SMS and Email review collection workflows that convert happy customers into verified 5-star Google recommendations effortlessly.",
    icon: Star,
    badge: "Reputation Engine",
    color: "from-amber-500/10 via-yellow-500/5 to-transparent",
    border: "border-amber-500/30"
  },
  {
    id: 4,
    title: "Geo-Targeted Neighborhood Landing Pages",
    desc: "Creating localized landing pages with embedded Google Maps schema, local customer testimonials, localized service keywords, and regional FAQs.",
    icon: FileText,
    badge: "Hyper-Local Content",
    color: "from-purple-500/10 via-indigo-500/5 to-transparent",
    border: "border-purple-500/30"
  },
  {
    id: 5,
    title: "Geo-Grid Rank Tracking & Heatmap Audits",
    desc: "Tracking your Google Maps ranking position mile-by-mile with interactive 3D rank heatmaps across your target city and surrounding pincodes.",
    icon: Search,
    badge: "Geo-Grid Analytics",
    color: "from-emerald-500/10 via-teal-500/5 to-transparent",
    border: "border-emerald-500/30"
  },
  {
    id: 6,
    title: "Local Competitor Map Pack Hijack",
    desc: "Analyzing competitor citation gaps, identifying spammy or fake competitor listings for removal, and outranking local market leaders.",
    icon: Zap,
    badge: "Competitor Hijack",
    color: "from-rose-500/10 via-pink-500/5 to-transparent",
    border: "border-rose-500/30"
  }
]

const LocalSeoServicesGrid = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto relative select-none">
      
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
          <span>Local SEO Engineering Stack</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          Everything You Need To <span className="text-[#004658]">Rule Your Local Market</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Our data-driven local SEO framework ensures high visibility in Google Maps 3-pack, building trust with local buyers and generating high-converting calls.
        </p>
      </motion.div>

      {/* 6-Grid Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {localCapabilities.map((item, idx) => {
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
                <span>Verified Deliverable</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </motion.div>
          )
        })}
      </div>

    </section>
  )
}

export default LocalSeoServicesGrid
