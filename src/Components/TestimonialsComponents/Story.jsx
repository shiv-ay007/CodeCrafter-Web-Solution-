import React, { useState } from 'react'

const projectStories = [
  {
    id: 'novapulse',
    client: 'NovaPulse FinTech',
    industry: 'High-Concurrency SaaS',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    reviewer: 'David Sterling',
    role: 'Chief Technology Officer',
    quote: '“CodeCrafter didn’t just write code; they completely re-engineered our telemetry pipeline so we could handle 50k+ concurrent traders without breaking a sweat.”',
    kpi: '<45ms Global Latency',
    kpiSub: 'Down from 820ms bottleneck',
    tags: ['React', 'Next.js 14', 'TypeScript', 'Tailwind', 'Redis'],
    challenge: {
      title: 'The Challenge',
      desc: 'NovaPulse was suffering from heavy database locks, WebSocket disconnects during market spikes, and a sluggish 800ms+ telemetry lag that frustrated high-frequency institutional traders.'
    },
    approach: {
      title: 'The Approach',
      desc: 'CodeCrafter migrated their monolithic state into an asynchronous, distributed event pipeline with edge-caching and optimized React 19 concurrent rendering for sub-millisecond UI updates.'
    },
    outcome: {
      title: 'The Outcome',
      desc: 'Latency dropped to sub-45ms globally, zero dropouts during major market openings, and server compute infrastructure costs were reduced by 44%.'
    }
  },
  {
    id: 'aurapay',
    client: 'Aura Mobile Wallet',
    industry: 'Consumer Fintech',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    reviewer: 'Sarah Chen',
    role: 'VP of Product Engineering',
    quote: '“We needed an app that felt like Apple and Stripe had a baby. CodeCrafter delivered a fluid 60 FPS mobile experience with instant biometric payments.”',
    kpi: '4.9★ App Rating',
    kpiSub: '2.4M+ Active iOS/Android Users',
    tags: ['Flutter', 'React Native', 'Swift', 'REST APIs', 'Biometrics'],
    challenge: {
      title: 'The Challenge',
      desc: 'High onboarding friction, fragmented native iOS/Android codebases, and frequent animation jank that led to a 38% user dropout rate during KYC verification.'
    },
    approach: {
      title: 'The Approach',
      desc: 'Rebuilt the core wallet using a unified high-performance cross-platform engine with 60fps micro-interactions, single-tap biometric authorization, and smart offline caching.'
    },
    outcome: {
      title: 'The Outcome',
      desc: 'KYC completion jumped by +84%, onboarding time dropped from 6 minutes to under 90 seconds, and user retention hit an all-time industry high.'
    }
  },
  {
    id: 'apexcloud',
    client: 'Apex Distributed Core',
    industry: 'Enterprise Cloud Logistics',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    reviewer: 'Marcus Vance',
    role: 'Principal Cloud Architect',
    quote: '“Their distributed systems expertise is world-class. They built a fault-tolerant backend that effortlessly manages 10,000+ real-time vehicle dispatch nodes.”',
    kpi: '99.999% Fault Tolerance',
    kpiSub: 'Zero unplanned downtime across 12 months',
    tags: ['.NET Core', 'C#', 'AWS', 'Kubernetes', 'PostgreSQL'],
    challenge: {
      title: 'The Challenge',
      desc: 'Legacy server timeouts, data race conditions across regional nodes, and brittle database migrations that forced emergency maintenance windows during peak fleet hours.'
    },
    approach: {
      title: 'The Approach',
      desc: 'Designed a self-healing microservice architecture on .NET Core with multi-region failover, Redis caching clusters, and automated blue-green zero-downtime deployment pipelines.'
    },
    outcome: {
      title: 'The Outcome',
      desc: 'Achieved 99.999% uptime for 14 straight months, eliminated dispatch queuing lag, and scaled from 2,000 to 10,000+ active logistics endpoints seamlessly.'
    }
  },
  {
    id: 'luxestore',
    client: 'LuxeStore Global Commerce',
    industry: 'Headless E-Commerce',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    reviewer: 'Elena Rostova',
    role: 'Head of Digital Experience',
    quote: '“Our checkout conversion spiked immediately after CodeCrafter deployed our headless storefront. It is blisteringly fast, elegant, and perfectly customized.”',
    kpi: '+142% Checkout Conversion',
    kpiSub: 'Page load speed reduced to 0.4s',
    tags: ['Next.js', 'Stripe Orchestration', 'MongoDB', 'Node.js'],
    challenge: {
      title: 'The Challenge',
      desc: 'A bloated monolithic Shopify frontend with 4.8s page load times, severe cart abandonment on mobile, and inflexible product customization workflows.'
    },
    approach: {
      title: 'The Approach',
      desc: 'Constructed an ultra-lean headless Next.js architecture with instant edge prefetching, customized 3D product previews, and a frictionless 2-click Stripe checkout flow.'
    },
    outcome: {
      title: 'The Outcome',
      desc: 'Cart abandonment dropped by 58%, mobile checkout conversion surged by +142%, and organic Google search ranking rose to #1 in their luxury category.'
    }
  }
]

const Story = () => {
  const [selectedStoryId, setSelectedStoryId] = useState('novapulse')
  const story = projectStories.find((s) => s.id === selectedStoryId) || projectStories[0]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden" id="stories">
      
      {/* Background Soft Glows */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.35) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10">
        
        {/* Minimalist Centered Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] font-mono font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>⭐ STORIES BEHIND THE PROJECTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Stories Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00a8cc]">The Projects</span>
          </h2>
          
          <p className="mt-3.5 text-xs sm:text-sm text-slate-600 font-medium max-w-2xl leading-relaxed">
            Real engineering journeys — detailing the deep technical challenges, our custom architectural approach, and measurable business outcomes.
          </p>

          {/* Interactive Project Switcher Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100/90 border border-slate-200 rounded-2xl shadow-2xs">
            {projectStories.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedStoryId(item.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  selectedStoryId === item.id
                    ? 'bg-[#004658] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span>{item.client}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Master Case Study Card Container */}
        <div className="bg-white border border-slate-200/90 rounded-3xl rounded-bl-[48px] p-6 sm:p-9 lg:p-12 shadow-xl relative overflow-hidden transition-all duration-500">
          
          {/* Top Row: Executive Reviewer Spotlight + Key Metric Card */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            
            {/* Left: Client Executive Info & Industry */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#004658]/30 shadow-md shrink-0">
                <img
                  src={story.avatar}
                  alt={story.reviewer}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    {story.reviewer}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#004658]/8 text-[#004658] text-[10px] font-mono font-bold">
                    {story.industry}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {story.role} • <strong className="text-[#004658]">{story.client}</strong>
                </p>
              </div>
            </div>

            {/* Right: Key KPI Badge */}
            <div className="flex items-center gap-3 bg-[#004658]/5 border border-[#004658]/20 px-5 py-3 rounded-2xl shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="text-base sm:text-lg font-black text-[#004658] leading-tight">
                  {story.kpi}
                </div>
                <div className="text-[10.5px] font-mono text-slate-500 font-semibold">
                  {story.kpiSub}
                </div>
              </div>
            </div>

          </div>

          {/* Featured Executive Quote Strip */}
          <div className="py-6 border-b border-slate-100">
            <p className="text-base sm:text-lg text-slate-800 font-semibold italic leading-relaxed text-left">
              {story.quote}
            </p>
          </div>

          {/* The 3 Deep-Dive Story Pillars (Challenge, Approach, Outcome) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8 text-left">
            
            {/* Pillar 1: The Challenge (Red / Amber accent) */}
            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-800 text-[10.5px] font-mono font-bold uppercase mb-3">
                  <span>🔴 {story.challenge.title}</span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-2">
                  What was holding them back?
                </h4>
                <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed">
                  {story.challenge.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-rose-200/60 text-[11px] font-mono font-bold text-rose-700">
                Bottleneck Identified ✓
              </div>
            </div>

            {/* Pillar 2: The Approach (Teal / Cyan accent) */}
            <div className="p-6 rounded-2xl bg-[#004658]/5 border border-[#004658]/20 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004658]/15 text-[#004658] text-[10.5px] font-mono font-bold uppercase mb-3">
                  <span>🔵 {story.approach.title}</span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-2">
                  How CodeCrafter solved it
                </h4>
                <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed">
                  {story.approach.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#004658]/20 text-[11px] font-mono font-bold text-[#004658]">
                Custom Architecture Built ✓
              </div>
            </div>

            {/* Pillar 3: The Outcome (Emerald / Green accent) */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10.5px] font-mono font-bold uppercase mb-3">
                  <span>🟢 {story.outcome.title}</span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-2">
                  Measurable Business Impact
                </h4>
                <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed">
                  {story.outcome.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-200 text-[11px] font-mono font-bold text-emerald-700">
                Performance Guaranteed ✓
              </div>
            </div>

          </div>

          {/* Bottom Tech Stack Tags + Action Link */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono font-bold text-slate-500 mr-2">Technologies Used:</span>
              {story.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-[10.5px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#004658] hover:underline shrink-0"
            >
              <span>Build A Similar Solution For Your Company</span>
              <span>→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Story