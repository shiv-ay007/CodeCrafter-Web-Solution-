import { Link } from 'react-router-dom'
import React from 'react'

const domainData = [
  { tld: '.com', registration: '$9.99', renewal: '$12.99', transfer: '$9.99', badge: 'Standard' },
  { tld: '.ai', registration: '$69.99', renewal: '$69.99', transfer: '$69.99', badge: 'AI & Startups' },
  { tld: '.io', registration: '$34.99', renewal: '$39.99', transfer: '$34.99', badge: 'Developer Favorite' },
  { tld: '.in', registration: '$6.99', renewal: '$9.99', transfer: '$6.99', badge: 'India Regional' },
  { tld: '.dev', registration: '$14.99', renewal: '$16.99', transfer: '$14.99', badge: 'Enforced HTTPS' },
  { tld: '.org', registration: '$11.99', renewal: '$13.99', transfer: '$11.99', badge: 'Organizations' },
  { tld: '.net', registration: '$10.99', renewal: '$13.99', transfer: '$10.99', badge: 'Network Infra' },
  { tld: '.co', registration: '$12.99', renewal: '$24.99', transfer: '$12.99', badge: 'Company / Brand' }
]

const DomainPricingTable = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1200px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Transparent TLD Matrix
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Popular Domain Extensions & Renewal Pricing
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          No hidden renewal fees. All domains include free WHOIS identity protection and Anycast DNS.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-black uppercase tracking-wider text-slate-600">
                <th className="p-4 sm:p-5">Domain Extension</th>
                <th className="p-4 sm:p-5">Category / Use Case</th>
                <th className="p-4 sm:p-5">New Registration</th>
                <th className="p-4 sm:p-5">Annual Renewal</th>
                <th className="p-4 sm:p-5">Transfer Rate</th>
                <th className="p-4 sm:p-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {domainData.map((d, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 sm:p-5 font-mono font-black text-base text-[#004658]">
                    {d.tld}
                  </td>
                  <td className="p-4 sm:p-5">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#004658]/8 text-[#004658] text-xs font-bold">
                      {d.badge}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 font-mono font-bold text-slate-900">
                    {d.registration}/yr
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-slate-600">
                    {d.renewal}/yr
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-slate-600">
                    {d.transfer}
                  </td>
                  <td className="p-4 sm:p-5 text-right">
                    <Link
                      to="/contact"
                      className="px-3.5 py-1.5 rounded-lg bg-[#004658] text-white text-xs font-bold hover:bg-[#003442] transition-colors inline-block"
                    >
                      Register
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default DomainPricingTable
