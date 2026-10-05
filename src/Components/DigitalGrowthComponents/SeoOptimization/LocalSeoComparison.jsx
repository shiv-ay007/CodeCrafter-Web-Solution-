import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const comparisonData = [
  {
    feature: "Search Target Intent",
    localSeo: "High-Intent Local Buyers Searching 'Near Me' or City Name",
    traditionalSeo: "Generic National / Global Informational Searchers",
    isWinner: true
  },
  {
    feature: "Google Maps 3-Pack Prominence",
    localSeo: "Prime Top #1-#3 Position above Organic Text Results",
    traditionalSeo: "Buried below Ads, Maps Pack, and Snippets",
    isWinner: true
  },
  {
    feature: "Conversion Action Trigger",
    localSeo: "Direct Phone Calls, Driving Directions & Immediate Bookings",
    traditionalSeo: "Blog Reads, Casual Clicks & Lower Intent Visits",
    isWinner: true
  },
  {
    feature: "Time to First Rank Results",
    localSeo: "Rapid Visibility within 30 to 60 Days",
    traditionalSeo: "Requires 6 to 12 Months of Heavy Link Building",
    isWinner: true
  },
  {
    feature: "Reputation & Review Proof",
    localSeo: "Integrated Verified 5-Star Google Review Ratings",
    traditionalSeo: "No Star Rating Preview on Organic Snippets",
    isWinner: true
  }
]

const LocalSeoComparison = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto select-none">
      
      {/* Container */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-[#004658]/40 rounded-3xl p-6 sm:p-10 lg:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
        
        {/* Top Glow Background */}
        <div 
          className="absolute -top-24 right-0 w-[500px] h-[350px] pointer-events-none rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 216, 255, 0.4) 0%, rgba(0, 70, 88, 0.1) 70%)'
          }}
        />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider inline-block mb-3">
            Why Local SEO Converts 5X Faster
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Local SEO vs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Traditional SEO</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal mt-3">
            See why ranking on Google Maps 3-Pack drives direct phone calls and high-margin local customers faster than standard organic SEO.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto relative z-10">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-800 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-4 px-4">Feature / Metric</th>
                <th className="py-4 px-4 text-emerald-400 bg-emerald-950/30 rounded-t-xl border-t border-x border-emerald-500/30">
                  <span className="flex items-center gap-1.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    CodeCrafter Local SEO
                  </span>
                </th>
                <th className="py-4 px-4 text-slate-400">Traditional Organic SEO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/60 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-200">{row.feature}</td>
                  <td className="py-4 px-4 font-semibold text-emerald-300 bg-emerald-950/20 border-x border-emerald-500/20 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{row.localSeo}</span>
                  </td>
                  <td className="py-4 px-4 text-slate-400">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                      <span>{row.traditionalSeo}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Guaranteed White-Hat Google Guidelines & NAP Consistency</span>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#004658] to-[#006680] text-white font-bold text-xs hover:from-[#003442] hover:to-[#004658] shadow-lg shadow-[#004658]/30 transition-all duration-300 cursor-pointer"
          >
            <span>Start Local Domination Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

    </section>
  )
}

export default LocalSeoComparison
