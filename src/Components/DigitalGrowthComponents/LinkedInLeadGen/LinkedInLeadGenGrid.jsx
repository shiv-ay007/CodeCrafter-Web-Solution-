import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Target, 
  Sparkles, 
  Mail, 
  CalendarCheck, 
  Layers, 
  BarChart3, 
  FileText, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react'
import LinkedInIcon from './LinkedInIcon'

const linkedinCapabilities = [
  {
    id: 1,
    title: "Executive Personal Branding & Content",
    desc: "We ghostwrite high-authority thought-leadership carousels, technical breakdown posts, and founder stories that position your leadership as industry visionaries.",
    icon: Sparkles,
    badge: "Authority Engine",
    color: "from-blue-500/10 via-cyan-500/5 to-transparent",
    border: "border-blue-500/30"
  },
  {
    id: 2,
    title: "Account-Based Marketing (ABM) Prospecting",
    desc: "Hyper-targeted prospect list building using Sales Navigator & proprietary data scraping—filtering by company ARR, tech stack, funding stage, and exact C-level titles.",
    icon: Target,
    badge: "Precision ICP",
    color: "from-teal-500/10 via-cyan-500/5 to-transparent",
    border: "border-teal-500/30"
  },
  {
    id: 3,
    title: "Multi-Touch Conversational Outreach",
    desc: "Human-crafted, value-first messaging sequences. No pushy generic templates. We build rapport, ask insightful industry questions, and nurture warm replies.",
    icon: Mail,
    badge: "High-Response InMail",
    color: "from-emerald-500/10 via-teal-500/5 to-transparent",
    border: "border-emerald-500/30"
  },
  {
    id: 4,
    title: "Sponsored Content & Document InMail Ads",
    desc: "Running targeted LinkedIn Sponsored Content, Lead Gen Forms, and Thought Leadership ads that put your case studies directly in front of vetted buying committees.",
    icon: BarChart3,
    badge: "Paid B2B Ads",
    color: "from-purple-500/10 via-indigo-500/5 to-transparent",
    border: "border-purple-500/30"
  },
  {
    id: 5,
    title: "High-Ticket B2B Lead Magnet Funnels",
    desc: "Engineering high-value technical whitepapers, system architecture checklists, and ROI calculators that capture verified corporate emails and intent data.",
    icon: FileText,
    badge: "Lead Magnets",
    color: "from-amber-500/10 via-yellow-500/5 to-transparent",
    border: "border-amber-500/30"
  },
  {
    id: 6,
    title: "Direct Calendar Booking & CRM Integration",
    desc: "Seamlessly routing warm interested prospects to your Calendly or CRM (HubSpot, Salesforce) with complete context, company profile notes, and meeting agendas.",
    icon: CalendarCheck,
    badge: "Qualified Meetings",
    color: "from-rose-500/10 via-pink-500/5 to-transparent",
    border: "border-rose-500/30"
  }
]

const LinkedInLeadGenGrid = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto relative select-none" id="linkedin-pillars">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#0A66C2]/20">
          <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
          <span>Complete B2B Acquisition Infrastructure</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          6 Core Pillars Of <span className="text-[#004658]">LinkedIn Client Acquisition</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          We combine executive branding, surgical audience targeting, and value-first conversational copywriting to build you an unstoppable enterprise sales pipeline.
        </p>
      </motion.div>

      {/* 6-Grid Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {linkedinCapabilities.map((item, idx) => {
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
                  <div className="w-12 h-12 rounded-2xl bg-[#004658]/8 text-[#004658] group-hover:bg-[#0A66C2] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-bold tracking-wide group-hover:bg-[#0A66C2]/10 group-hover:text-[#0A66C2] transition-colors">
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#0A66C2] transition-colors relative z-10">
                <span>Enterprise Grade</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default LinkedInLeadGenGrid
