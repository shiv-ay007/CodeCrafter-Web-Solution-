import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const localFaqs = [
  {
    q: "How fast can my business rank in the Google Maps 3-Pack?",
    a: "Initial map movement typically occurs within 30 to 45 days after Google Business Profile category alignment, citation cleanup, and NAP synchronization. Highly competitive cities may take 60-90 days for #1 rank stability."
  },
  {
    q: "What is NAP consistency and why is it crucial for Google Maps?",
    a: "NAP stands for Name, Address, and Phone Number. If your business details differ across directories (e.g. 'St.' vs 'Street' or wrong phone digits), Google loses trust. We ensure 100% exact matching across 150+ directories."
  },
  {
    q: "Can Local SEO help if my business has multiple office locations?",
    a: "Yes! We build location-specific landing pages and dedicated Google Business Profiles for each branch, ensuring every location ranks #1 in its respective city or neighborhood radius."
  },
  {
    q: "How do you help us get more 5-star Google Reviews automatically?",
    a: "We set up automated review collection funnels via SMS & Email. Satisfied clients receive direct 1-click review links, drastically increasing your monthly positive Google ratings."
  },
  {
    q: "What happens if a competitor posts fake negative reviews on our profile?",
    a: "Our team reports and petitions Google policy teams to remove illegal, fraudulent, or policy-violating competitor reviews through official Google Merchant & Map Support channels."
  }
]

const LocalSeoFaq = () => {
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
          <span>Frequently Asked Questions</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          Local SEO & Google Maps <span className="text-[#004658]">FAQs</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 font-normal">
          Clear answers to common questions about Google Maps 3-Pack rankings, citations, and local search acquisition.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {localFaqs.map((faq, idx) => {
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

export default LocalSeoFaq
