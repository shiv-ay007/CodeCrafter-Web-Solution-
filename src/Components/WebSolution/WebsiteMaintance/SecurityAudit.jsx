import React from 'react'

const securityChecks = [
  {
    icon: '🛡️',
    title: 'Daily Deep Vulnerability Scans',
    desc: 'Automated scanning for zero-day exploits, SQL injection vectors, malware injections, and outdated library vulnerabilities.'
  },
  {
    icon: '💾',
    title: 'Multi-Region Encrypted Backups',
    desc: 'Daily snapshots stored across multiple AWS geographic regions with 1-click restore functionality in case of accidental deletions.'
  },
  {
    icon: '⚡',
    title: 'Continuous Performance Tuning',
    desc: 'Database bloat cleanup, asset minification, image compression, and cache hit ratio optimization to maintain 95+ Core Web Vitals.'
  },
  {
    icon: '🚨',
    title: 'Real-Time Intrusion Prevention',
    desc: 'Web Application Firewall (WAF) integration with IP rate limiting, bot protection, and automated brute-force attack neutralization.'
  }
]

const SecurityAudit = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
          Enterprise Security Standard
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          How We Protect Your Digital Infrastructure
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Our defense-in-depth architecture ensures your website stays secure, fast, and always accessible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {securityChecks.map((check, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4"
          >
            <span className="text-3xl p-3 rounded-2xl bg-[#004658]/8 shrink-0">{check.icon}</span>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{check.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{check.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SecurityAudit
