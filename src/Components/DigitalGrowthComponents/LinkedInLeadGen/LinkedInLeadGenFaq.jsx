import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const linkedinFaqs = [
  {
    q: "How does LinkedIn B2B Lead Generation differ from traditional cold emailing?",
    a: "Unlike cold email where domains frequently suffer spam-filter penalties, LinkedIn provides verified professional identities, live company data, and transparent credibility. Decision-makers can immediately see your past work, mutual connections, recommendations, and executive thought leadership before replying, yielding 5x higher response rates."
  },
  {
    q: "Will our LinkedIn profiles or company page be at risk of account suspension?",
    a: "Zero risk. We strictly adhere to LinkedIn's official commercial usage guidelines and algorithmic limits. We combine cloud-based dedicated IP proxies with randomized human-like delays, warm conversational copy, and strict connection caps per day to keep your profile 100% safe."
  },
  {
    q: "How quickly can we expect qualified sales meetings on our calendar?",
    a: "Campaign warm-up and ICP audience list verification take 7-10 days. Most clients start seeing connection acceptances and direct positive replies within week 2, with consistent qualified discovery calls booking from weeks 3 through 4 onwards."
  },
  {
    q: "Do we need an active LinkedIn Sales Navigator subscription?",
    a: "Yes, having LinkedIn Sales Navigator on the sending profile unlocks advanced search filters (headcount growth, technologies used, seniority levels, past funding) and provides dedicated monthly InMail credits for maximum reach."
  },
  {
    q: "How do you guarantee that leads are actual decision-makers with budget?",
    a: "Every single contact is manually cross-checked against your Ideal Customer Profile (ICP) criteria before any message is sent. We filter specifically by C-Suite, VP, Director, and Founder titles in companies meeting your exact revenue, industry, and employee thresholds."
  }
]

const LinkedInLeadGenFaq = () => {
  const [openIdx, setOpenIdx] = useState(0)

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#0A66C2]/20">
          <HelpCircle className="w-4 h-4" />
          <span>LinkedIn Lead Gen FAQs</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          Frequently Asked <span className="text-[#004658]">Questions</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 font-normal">
          Clear answers about our B2B outreach safety, targeting methodology, and pipeline handover process.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {linkedinFaqs.map((faq, idx) => {
          const isOpen = openIdx === idx
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? "bg-white border-[#0A66C2]/40 shadow-lg shadow-[#0A66C2]/5" 
                  : "bg-white/80 border-slate-200/90 hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 cursor-pointer"
              >
                <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {faq.q}
                </span>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? "bg-[#0A66C2] text-white rotate-180" : "bg-slate-100 text-slate-600"
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 sm:px-8 pb-6 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
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

export default LinkedInLeadGenFaq
