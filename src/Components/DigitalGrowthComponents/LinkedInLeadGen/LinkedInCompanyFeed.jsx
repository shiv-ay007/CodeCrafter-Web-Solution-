import React, { useEffect } from 'react'
import { ArrowRight, Building2, Users, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react'
import LinkedInIcon from './LinkedInIcon'

const LinkedInCompanyFeed = () => {
  useEffect(() => {
    // Load Elfsight script only once if available
    if (!document.querySelector("#elfsight-script")) {
      const script = document.createElement("script");
      script.id = "elfsight-script";
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto select-none" id="linkedin-community">
      <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-[#0A192F] to-[#0A66C2]/30 p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
        
        {/* Background Ambient Glow */}
        <div 
          className="absolute -top-32 right-0 w-[500px] h-[350px] pointer-events-none rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(10, 102, 194, 0.5) 0%, rgba(0, 216, 255, 0.2) 60%, transparent 80%)'
          }}
        />

        {/* Section Header */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 pb-8 border-b border-slate-800/80">
          <div className="lg:col-span-8 text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <LinkedInIcon className="w-3.5 h-3.5 fill-current text-blue-400" />
              <span>Official Company Presence</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
              Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">CodeCrafter Web Solutions</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl">
              Follow our official company page for weekly enterprise architecture case studies, tech stack benchmarks, product engineering insights, and career updates.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href="https://www.linkedin.com/company/code-crafter-web-solutions/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-[#0A66C2] hover:bg-[#084e96] text-white px-7 py-4 text-sm font-bold shadow-lg shadow-blue-900/40 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <LinkedInIcon className="w-5 h-5 fill-current" />
              <span>Follow On LinkedIn</span>
              <ExternalLink className="w-4 h-4 text-blue-200 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Feed or Interactive Company Card Showcase */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-left">
            <div className="flex items-center gap-2 text-[#00D8FF] text-xs font-mono font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>THOUGHT LEADERSHIP</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">Tech Insights & Architecture</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              In-depth articles covering Next.js, Node.js microservices, AI agents, and cross-platform mobile frameworks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-left">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold mb-2">
              <Building2 className="w-4 h-4" />
              <span>COMPANY MILESTONES</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">Production Case Studies</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Real metrics from client projects: 99.99% uptime, 50% cost reductions, and sub-second load times.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-left">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-bold mb-2">
              <Users className="w-4 h-4" />
              <span>TALENT & CULTURE</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">Engineering Squad Updates</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Behind the scenes of our elite engineering squads, culture, and team accomplishments.
            </p>
          </div>
        </div>

        {/* Live Elfsight Feed Embed Widget */}
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur-md">
          <div
            className="elfsight-app-b4e7295b-f8e3-4f33-a365-809762310931"
            data-elfsight-app-lazy
          ></div>

          <div className="pt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3 border-t border-white/10 mt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Official Company Page • CodeCrafter Web Solutions</span>
            </div>
            <a 
              href="https://www.linkedin.com/company/code-crafter-web-solutions/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00D8FF] hover:underline font-bold flex items-center gap-1"
            >
              <span>linkedin.com/company/code-crafter-web-solutions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default LinkedInCompanyFeed
