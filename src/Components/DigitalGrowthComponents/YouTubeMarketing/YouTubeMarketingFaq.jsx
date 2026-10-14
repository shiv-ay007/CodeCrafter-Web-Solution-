import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import YouTubeIcon from './YouTubeIcon'

const youtubeFaqs = [
  {
    q: "How long does it take for a new corporate YouTube channel to gain traction?",
    a: "Unlike social media platforms where content disappears after 24 hours, YouTube is an evergreen search engine. Through strategic keyword targeting and high-retention video packaging, most clients see initial search impressions and organic views within 2 to 4 weeks, with compound algorithmic traffic and inbound leads ramping significantly between months 3 and 6."
  },
  {
    q: "Do we need an expensive in-house camera studio, or can we record remotely?",
    a: "You do not need a multi-thousand dollar studio. A high-quality 4K webcam or mirrorless camera with good microphone audio and natural lighting is plenty. Our post-production team handles all the heavy lifting: color grading, noise reduction, cinematic sound design, motion graphics, and animated screen overlays."
  },
  {
    q: "What works better for B2B tech companies: YouTube Shorts or Long-Form videos?",
    a: "Both serve a symbiotic purpose. YouTube Shorts generate massive top-of-funnel reach, quick brand impressions, and subscriber velocity. Long-form videos (8–20 minutes) establish deep authority, build strong personal connection, and drive qualified discovery calls. We employ a hybrid strategy: filming long-form masterclasses and slicing them into 3–5 viral Shorts."
  },
  {
    q: "How do you ensure videos rank on both YouTube and Google Search results?",
    a: "Google displays YouTube video carousels directly on page 1 of search results for high-intent 'how-to', 'comparison', and 'architecture' queries. We research these exact keywords, craft keyword-optimized chapters, provide full timestamped transcripts, and structure metadata schemas to win both YouTube search and Google Video Rich Snippets."
  },
  {
    q: "How do YouTube viewers actually convert into paying clients?",
    a: "We engineer dedicated conversion funnels directly into each video: verbal calls-to-action placed right after value delivery, pinned comments linking to free architecture audits or whitepapers, and description links straight to your Calendly or CRM booking page."
  }
]

const YouTubeMarketingFaq = () => {
  const [openIdx, setOpenIdx] = useState(0)

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto select-none" id="youtube-faqs">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#004658]/20">
          <HelpCircle className="w-4 h-4" />
          <span>YouTube Marketing FAQs</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          Frequently Asked <span className="text-[#004658]">Questions</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 font-normal">
          Answers to common questions regarding channel production, algorithmic search reach, and lead generation.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {youtubeFaqs.map((faq, idx) => {
          const isOpen = openIdx === idx
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? "bg-white border-[#004658]/40 shadow-lg shadow-[#004658]/5" 
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
                  isOpen ? "bg-[#004658] text-white rotate-180" : "bg-slate-100 text-slate-600"
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

export default YouTubeMarketingFaq
