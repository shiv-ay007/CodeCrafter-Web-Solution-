import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: "How do you uncover competitor paid ad strategies and spend?",
    a: "We leverage enterprise intelligence software to track competitor Google Search & Social ad creatives, historical bidding keywords, estimated monthly budgets, and high-converting landing page designs."
  },
  {
    q: "Is competitor market analysis legal and white-hat?",
    a: "Yes, 100%! All data is gathered from public search engine indexes, ad registries, SERP rankings, backlink archives, and ethical market research tools according to standard industry practices."
  },
  {
    q: "What is a 'Keyword Gap Analysis' and how does it help my business?",
    a: "A keyword gap analysis identifies high-volume, high-converting search terms that your competitors rank for on page 1, but your website currently misses. We target these exact gaps for rapid ranking gains."
  },
  {
    q: "How often should competitor market analysis be conducted?",
    a: "We recommend continuous real-time monitoring. Competitors frequently change ad copies, launch new landing pages, or publish new content. Monthly audits ensure you stay ahead of market shifts."
  },
  {
    q: "What deliverable will I receive from this audit?",
    a: "You receive a comprehensive Competitor Action Plan including an interactive keyword gap matrix, backlink opportunity list, ad copy insights, UX recommendations, and a 90-day execution roadmap."
  }
]

const CompetitorAnalysisFaq = () => {
  const [openIdx, setOpenIdx] = useState(0)

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1200px] mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#004658]/20">
          <HelpCircle className="w-4 h-4" />
          <span>Competitor Intelligence FAQs</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          Competitor Analysis <span className="text-[#004658]">FAQs</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 font-normal">
          Clear answers to common questions about competitor reverse-engineering, backlink hijacking, and market gap analysis.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen ? 'bg-white border-[#004658] shadow-lg shadow-[#004658]/10' : 'bg-slate-50/80 border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? 'bg-[#004658] text-white rotate-180' : 'bg-slate-200 text-slate-700'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default CompetitorAnalysisFaq
