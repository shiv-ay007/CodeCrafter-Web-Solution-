import React from 'react'

const vpsPerks = [
  {
    icon: '⚡',
    title: 'KVM Virtualization Isolation',
    desc: 'Guaranteed dedicated resource allocation with zero noisy neighbor interference and custom kernel support.'
  },
  {
    icon: '🛡️',
    title: '1.2 Tbps DDoS Shield Protection',
    desc: 'Automated Layer 3/4 and Layer 7 traffic scrubbing filters out volumetric attacks without adding network latency.'
  },
  {
    icon: '💿',
    title: 'Custom OS & 1-Click Images',
    desc: 'Deploy Ubuntu 24.04, Debian 12, Rocky Linux, AlmaLinux, Windows Server, or upload your own custom ISO.'
  },
  {
    icon: '🌐',
    title: 'Dedicated IPv4 & IPv6 Subnet',
    desc: 'Each instance comes with a dedicated static IPv4 address and a routed /64 IPv6 subnet for seamless networking.'
  }
]

const VpsFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Enterprise Bare-Metal Hypervisor
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Engineered For Devs, Sysadmins & Scaling Apps
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Complete control over your cloud environment with automated snapshots, private networking, and API management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {vpsPerks.map((p, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <span className="text-3xl p-3 rounded-2xl bg-[#004658]/8 shrink-0">{p.icon}</span>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{p.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VpsFeatures
