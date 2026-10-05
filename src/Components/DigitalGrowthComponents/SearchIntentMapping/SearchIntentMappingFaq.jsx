import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: "What is search intent and why is it more important than keyword volume?",
    a: "Search intent is the ultimate goal or motivation behind a user's search query. A keyword with 10,000 monthly searches is useless if your landing page doesn't fulfill what the user wanted. Matching intent eliminates bounce rates and boosts Google rankings."
  },
  {
    q: "What are the 4 main types of search intent?",
    a: "1) Informational ('how to build a website'), 2) Navigational ('CodeCrafter login'), 3) Commercial Investigation ('best web design company in Lucknow'), and 4) Transactional ('hire React developer now')."
  },
  {
    q: "What happens if a landing page has mismatched search intent?",
    a: "If a user searches for 'best CRM software comparison' and lands on a hard-sell checkout page, they will immediately click back (bounce). Google detects this short dwell time and drops your rankings."
  },
  {
    q: "How does Search Intent Mapping improve conversion rates?",
    a: "By aligning landing page CTAs, content structure, pricing tables, and headlines with the exact stage of the buyer journey, users find immediate answers and convert 4X faster."
  },
  {
    q: "How do SERP features (Featured Snippets, PAA) factor into Intent Mapping?",
    a: "Google displays specific SERP features based on query intent. If a query triggers a table snippet, we structure your content as an HTML table so Google awards you Position #0."
  }
]

const SearchIntentMappingFaq = () => {
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
          <span>Search Intent FAQs</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          Search Intent Mapping <span className="text-[#004658]">FAQs</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 font-normal">
          Clear answers to common questions about SERP intent matching, topical authority, and conversion rate optimization.
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

export default SearchIntentMappingFaq
