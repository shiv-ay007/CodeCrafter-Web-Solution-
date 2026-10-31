import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const comparisons = [
  {
    title: 'Fintech SaaS Platform',
    oldMetrics: { load: '7.4s', bounce: '64%', score: '38/100' },
    newMetrics: { load: '0.6s', bounce: '19%', score: '100/100' },
    impactMetrics: {
      metric1: { label: 'Conversion Lift', value: '+210%' },
      metric2: { label: 'Server Cost Savings', value: '-45%' },
      metric3: { label: 'Estimated ROI', value: '4.8x' }
    },
    impactBadge: 'Verified ROI 📈',
    lift: '+210% User Signups',
    summary: 'Complete migration from legacy WordPress monorepo to React 19 Next.js edge-rendered architecture with Stripe checkout.'
  },
  {
    title: 'Global Manufacturing Portal',
    oldMetrics: { load: '9.1s', bounce: '71%', score: '29/100' },
    newMetrics: { load: '0.8s', bounce: '22%', score: '98/100' },
    impactMetrics: {
      metric1: { label: 'Quote / RFQ Uplift', value: '+165%' },
      metric2: { label: 'Catalog Search Latency', value: '<80ms' },
      metric3: { label: 'Mobile Engagement', value: '+140%' }
    },
    impactBadge: 'Global Scale 🌐',
    lift: '+165% Quote Requests',
    summary: 'Redesigned 400+ product catalog with instant client-side search, multi-language CAD downloads, and mobile responsiveness.'
  },
  {
    title: 'D2C E-Commerce Brand',
    oldMetrics: { load: '6.2s', bounce: '58%', score: '44/100' },
    newMetrics: { load: '0.7s', bounce: '18%', score: '99/100' },
    impactMetrics: {
      metric1: { label: 'Checkout Conversion', value: '+188%' },
      metric2: { label: 'Cart Abandonment Drop', value: '-44%' },
      metric3: { label: 'Monthly Revenue Lift', value: '+$480k' }
    },
    impactBadge: 'Revenue Velocity 💰',
    lift: '+188% Revenue Growth',
    summary: 'Headless Shopify rebuild featuring custom 3D product previews, 1-click checkout, and instant page transitions.'
  }
]

const BeforeAfterShowcase = () => {
  const [selectedCase, setSelectedCase] = useState(0)

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F0F6FA] to-[#EAF7FA] py-24 sm:py-28 border-y border-slate-200/60">
      {/* Ambient Depth Elements */}
      <div 
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[350px] rounded-full bg-[#00A8CC]/8 blur-[120px] -z-10" 
      />
      <div 
        className="pointer-events-none absolute bottom-6 right-10 w-[450px] h-[300px] rounded-full bg-[#004658]/6 blur-[110px] -z-10" 
      />
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(#004658 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#004658]/15 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Proven Transformation Metrics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight mb-4 font-['Outfit',sans-serif]">
            Real Before & After Impact
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Check the verified performance and revenue uplift achieved by CodeCrafter redesign projects.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {comparisons.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCase(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                selectedCase === idx
                  ? 'bg-[#004658] text-white shadow-lg shadow-[#004658]/25 scale-[1.02]'
                  : 'bg-white text-slate-700 border border-slate-200/90 hover:border-[#004658]/40 hover:bg-[#F0F6FA] shadow-2xs'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Comparison Showcase Container - Width aligned with CTA (max-w-[1360px]) */}
        <div className="w-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#004658]/12 shadow-[0_12px_45px_rgba(0,70,88,0.07)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Outfit',sans-serif]">
                {comparisons[selectedCase].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {comparisons[selectedCase].summary}
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-700 font-black text-sm border border-emerald-500/20 whitespace-nowrap shadow-2xs">
              {comparisons[selectedCase].lift}
            </div>
          </div>

          {/* 3-Card Grid: Before, After & Business Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* 1. Legacy Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-rose-50/70 to-rose-50/20 border border-rose-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-black uppercase tracking-wider text-rose-700">Before (Legacy)</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-rose-200/80 text-rose-800 font-bold">Slow & Fragile</span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between pb-2.5 border-b border-rose-100/80">
                    <span className="text-slate-600 font-sans text-xs sm:text-sm">Page Load Time:</span>
                    <span className="font-bold text-rose-600">{comparisons[selectedCase].oldMetrics.load}</span>
                  </div>
                  <div className="flex justify-between pb-2.5 border-b border-rose-100/80">
                    <span className="text-slate-600 font-sans text-xs sm:text-sm">Bounce Rate:</span>
                    <span className="font-bold text-rose-600">{comparisons[selectedCase].oldMetrics.bounce}</span>
                  </div>
                  <div className="flex justify-between pt-0.5">
                    <span className="text-slate-600 font-sans text-xs sm:text-sm">Lighthouse Health:</span>
                    <span className="font-bold text-rose-600">{comparisons[selectedCase].oldMetrics.score}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. CodeCrafter Modern Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-teal-50/20 border border-emerald-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-800">After (CodeCrafter)</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-200/80 text-emerald-900 font-bold">High Speed ⚡</span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between pb-2.5 border-b border-emerald-100/80">
                    <span className="text-slate-600 font-sans text-xs sm:text-sm">Page Load Time:</span>
                    <span className="font-bold text-emerald-600">{comparisons[selectedCase].newMetrics.load}</span>
                  </div>
                  <div className="flex justify-between pb-2.5 border-b border-emerald-100/80">
                    <span className="text-slate-600 font-sans text-xs sm:text-sm">Bounce Rate:</span>
                    <span className="font-bold text-emerald-600">{comparisons[selectedCase].newMetrics.bounce}</span>
                  </div>
                  <div className="flex justify-between pt-0.5">
                    <span className="text-slate-600 font-sans text-xs sm:text-sm">Lighthouse Health:</span>
                    <span className="font-bold text-emerald-600">{comparisons[selectedCase].newMetrics.score}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Business Impact Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#EAF7FA] to-[#d6eff5]/50 border border-[#00A8CC]/35 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#004658]">Impact (Business ROI)</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-[#004658]/10 text-[#004658] font-bold">
                    {comparisons[selectedCase].impactBadge}
                  </span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between pb-2.5 border-b border-cyan-100/80">
                    <span className="text-slate-600 font-sans text-xs sm:text-sm">{comparisons[selectedCase].impactMetrics.metric1.label}:</span>
                    <span className="font-bold text-[#004658]">{comparisons[selectedCase].impactMetrics.metric1.value}</span>
                  </div>
                  <div className="flex justify-between pb-2.5 border-b border-cyan-100/80">
                    <span className="text-slate-600 font-sans text-xs sm:text-sm">{comparisons[selectedCase].impactMetrics.metric2.label}:</span>
                    <span className="font-bold text-[#004658]">{comparisons[selectedCase].impactMetrics.metric2.value}</span>
                  </div>
                  <div className="flex justify-between pt-0.5">
                    <span className="text-slate-600 font-sans text-xs sm:text-sm">{comparisons[selectedCase].impactMetrics.metric3.label}:</span>
                    <span className="font-bold text-[#004658]">{comparisons[selectedCase].impactMetrics.metric3.value}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-bold text-[#004658] hover:text-[#002832] text-sm group transition-colors"
            >
              <span>Want similar results for your website?</span>
              <span className="text-[#00A8CC] font-bold group-hover:translate-x-1 transition-transform">Schedule an Audit ➔</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterShowcase
