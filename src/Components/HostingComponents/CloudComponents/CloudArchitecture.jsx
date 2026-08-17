import React from 'react'

const architecturePillars = [
  {
    step: '01',
    title: 'Containerization & Microservices',
    desc: 'Decouple monolithic code into lightweight Docker containers orchestrated with Kubernetes for zero-downtime rolling upgrades.',
    badge: 'Docker / K8s'
  },
  {
    step: '02',
    title: 'Automated Horizontal Auto-Scaling',
    desc: 'Traffic sensors detect sudden request surges and provision additional worker nodes in seconds, then scale back down during quiet hours.',
    badge: 'Cost Efficient'
  },
  {
    step: '03',
    title: 'Distributed Database Clusters',
    desc: 'Managed PostgreSQL & Redis multi-AZ replication with automatic primary failover and read replica distribution for sub-5ms queries.',
    badge: 'High Availability'
  },
  {
    step: '04',
    title: 'Global CDN & Web Application Firewall',
    desc: 'Static and cached dynamic payloads delivered from 300+ global edge locations with enterprise DDoS attack mitigation.',
    badge: 'Edge Compute'
  }
]

const CloudArchitecture = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="architecture">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Cloud Infrastructure Blueprint
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Engineered For Continuous Uptime & Global Scale
        </h2>
        <p className="text-base text-slate-600">
          Our cloud architecture ensures your business never experiences server crashes during high-traffic product launches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {architecturePillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/50 hover:shadow-xl hover:shadow-[#004658]/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl font-black text-[#004658]/20 group-hover:text-[#004658] transition-colors block mb-4">
                {pillar.step}
              </span>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#004658]/8 text-[#004658] text-[10px] font-bold uppercase tracking-wider mb-3">
                {pillar.badge}
              </span>
              <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#004658] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CloudArchitecture
