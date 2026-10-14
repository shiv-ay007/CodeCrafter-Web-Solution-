import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Briefcase, 
  MessageSquare, 
  Building2,
  CalendarCheck,
  Send
} from 'lucide-react'
import LinkedInIcon from './LinkedInIcon'

const HeroLinkedInLeadGen = () => {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto overflow-hidden select-none">
      
      {/* Soft Radial Ambient Glow */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(10, 102, 194, 0.35) 0%, rgba(0, 70, 88, 0.2) 50%, rgba(0, 216, 255, 0.15) 75%)'
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: Hero Copy & Value Props */}
        <motion.div 
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-left"
        >
          {/* Glass Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20 text-[#0A66C2] text-xs font-black uppercase tracking-wider mb-6 shadow-2xs">
            <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2] fill-current" />
            <span>LinkedIn B2B Lead Generation & Account-Based Marketing (ABM)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08] mb-6">
            Predictable B2B Pipeline. <br />
            Convert Decision-Makers On <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#0A66C2] to-[#00D8FF]">LinkedIn.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
            Stop relying on cold emails that land in spam. We engineer high-converting LinkedIn outreach funnels, C-level executive positioning, and account-based marketing that book qualified discovery calls with actual budget holders.
          </p>

          {/* Key Metrics Quick Pill Row */}
          <div className="grid grid-cols-3 gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-[#004658]/15 shadow-sm mb-8">
            <div className="text-left">
              <span className="text-2xl sm:text-3xl font-black text-[#0A66C2] block tracking-tight">45%+</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">Decision-Maker Accept Rate</span>
            </div>
            <div className="text-left border-l border-slate-200 pl-3.5">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 block tracking-tight">3.8x</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">Pipeline Value Growth</span>
            </div>
            <div className="text-left border-l border-slate-200 pl-3.5">
              <span className="text-2xl sm:text-3xl font-black text-[#004658] block tracking-tight">100%</span>
              <span className="text-xs font-bold text-slate-900 mt-0.5 block">ICP Verified Leads</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] hover:bg-[#003442] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:-translate-y-0.5 transition-all duration-300 gap-2"
            >
              <span>Build My B2B Pipeline</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://www.linkedin.com/company/code-crafter-web-solutions/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold text-[#0A66C2] bg-blue-50 border border-blue-200/80 hover:bg-blue-100/70 rounded-xl px-6 py-3.5 text-sm transition-all duration-300 gap-2"
            >
              <LinkedInIcon className="w-4 h-4 fill-current" />
              <span>Visit LinkedIn Company</span>
            </a>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% LinkedIn Safe & Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0A66C2]" />
              <span>Pre-Vetted B2B C-Suite Target Lists</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CalendarCheck className="w-4 h-4 text-[#004658]" />
              <span>Direct Calendar Meeting Bookings</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive LinkedIn Outreach Engine Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-7 text-white border border-slate-800 shadow-2xl overflow-hidden w-full max-w-lg">
            
            {/* Window Top Bar */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-xs font-mono text-[#0A66C2] font-bold flex items-center gap-1.5">
                  <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                  B2B OUTREACH ENGINE
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                ● LIVE PIPELINE
              </span>
            </div>

            {/* Simulated Prospect Card */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#004658] to-[#0A66C2] flex items-center justify-center font-bold text-white text-sm shadow-md">
                    CC
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      CodeCrafter Web Solutions
                      <span className="px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-400 text-[10px]">Verified</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Enterprise Engineering & Growth Studio</div>
                  </div>
                </div>
              </div>

              {/* InMail Pitch Simulated Preview */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                <div className="text-[#00D8FF] font-semibold text-[11px] flex items-center gap-1.5">
                  <Send className="w-3 h-3 text-[#00D8FF]" />
                  <span>Personalized InMail Sequence • Step 2</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  "Hi [Founder_Name], noticed you're scaling your tech stack. We helped enterprise SaaS teams cut delivery time by 50% with our dedicated React & cloud engineering squads..."
                </p>
                <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                  <span className="text-emerald-400 font-mono font-bold">✓ Reply Received: "Let's talk this Thursday"</span>
                  <span className="text-slate-500 font-mono">10:42 AM</span>
                </div>
              </div>
            </div>

            {/* Campaign Telemetry Dashboard */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-left">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Response Rate</div>
                <div className="text-lg font-black text-cyan-400 mt-0.5">38.6%</div>
                <div className="text-[10px] text-slate-500 mt-0.5">vs 4% industry avg</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-left">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Booked Discovery Calls</div>
                <div className="text-lg font-black text-emerald-400 mt-0.5">24 / mo</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Direct to calendar</div>
              </div>
            </div>

            {/* Company Profile Link Card */}
            <a 
              href="https://www.linkedin.com/company/code-crafter-web-solutions/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between group hover:bg-blue-900/30 transition-all duration-200"
            >
              <div className="flex items-center gap-2.5">
                <LinkedInIcon className="w-5 h-5 text-[#0A66C2] fill-current" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                    CodeCrafter Official LinkedIn
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Connect with our engineering company page
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroLinkedInLeadGen
