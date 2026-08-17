import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const comparisons = [
  {
    title: 'Fintech SaaS Platform',
    oldMetrics: { load: '7.4s', bounce: '64%', score: '38/100' },
    newMetrics: { load: '0.6s', bounce: '19%', score: '100/100' },
    lift: '+210% User Signups',
    summary: 'Complete migration from legacy WordPress monorepo to React 19 Next.js edge-rendered architecture with Stripe checkout.'
  },
  {
    title: 'Global Manufacturing Portal',
    oldMetrics: { load: '9.1s', bounce: '71%', score: '29/100' },
    newMetrics: { load: '0.8s', bounce: '22%', score: '98/100' },
    lift: '+165% Quote Requests',
    summary: 'Redesigned 400+ product catalog with instant client-side search, multi-language CAD downloads, and mobile responsiveness.'
  },
  {
    title: 'D2C E-Commerce Brand',
    oldMetrics: { load: '6.2s', bounce: '58%', score: '44/100' },
    newMetrics: { load: '0.7s', bounce: '18%', score: '99/100' },
    lift: '+188% Revenue Growth',
    summary: 'Headless Shopify rebuild featuring custom 3D product previews, 1-click checkout, and instant page transitions.'
  }
]

const BeforeAfterShowcase = () => {
  const [selectedCase, setSelectedCase] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
          Proven Transformation Metrics
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
          Real Before & After Impact
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Check the verified performance and revenue uplift achieved by CodeCrafter redesign projects.
        </p>
      </div>

      {/* Case Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {comparisons.map((c, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCase(idx)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedCase === idx
                ? 'bg-[#004658] text-white shadow-md shadow-[#004658]/20 scale-105'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      {/* Comparison Grid */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {comparisons[selectedCase].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {comparisons[selectedCase].summary}
            </p>
          </div>
          <div className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-700 font-black text-sm border border-emerald-500/20 whitespace-nowrap">
            {comparisons[selectedCase].lift}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Legacy Card */}
          <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200/80">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-rose-700">Before (Legacy)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-rose-200 text-rose-800 font-bold">Slow & Fragile</span>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between pb-2 border-b border-rose-100">
                <span className="text-slate-600">Page Load Time:</span>
                <span className="font-bold text-rose-600">{comparisons[selectedCase].oldMetrics.load}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-rose-100">
                <span className="text-slate-600">Bounce Rate:</span>
                <span className="font-bold text-rose-600">{comparisons[selectedCase].oldMetrics.bounce}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Lighthouse Health:</span>
                <span className="font-bold text-rose-600">{comparisons[selectedCase].oldMetrics.score}</span>
              </div>
            </div>
          </div>

          {/* CodeCrafter Modern Card */}
          <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-800">After (CodeCrafter)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold">High Speed ⚡</span>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between pb-2 border-b border-emerald-100">
                <span className="text-slate-600">Page Load Time:</span>
                <span className="font-bold text-emerald-600">{comparisons[selectedCase].newMetrics.load}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-emerald-100">
                <span className="text-slate-600">Bounce Rate:</span>
                <span className="font-bold text-emerald-600">{comparisons[selectedCase].newMetrics.bounce}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Lighthouse Health:</span>
                <span className="font-bold text-emerald-600">{comparisons[selectedCase].newMetrics.score}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-bold text-[#004658] hover:text-[#002832] text-sm group"
          >
            Want similar results for your website? 
            <span className="group-hover:translate-x-1 transition-transform">Schedule an Audit ➔</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterShowcase
