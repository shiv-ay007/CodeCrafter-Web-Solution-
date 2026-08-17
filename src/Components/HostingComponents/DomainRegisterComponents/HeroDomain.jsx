import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const tlds = [
  { ext: '.com', price: '$9.99/yr', tag: 'Most Popular' },
  { ext: '.ai', price: '$69.99/yr', tag: 'Tech & AI' },
  { ext: '.io', price: '$34.99/yr', tag: 'Developers' },
  { ext: '.in', price: '$6.99/yr', tag: 'India Special' },
  { ext: '.dev', price: '$14.99/yr', tag: 'Google SSL' },
  { ext: '.org', price: '$11.99/yr', tag: 'Non-Profit' },
]

const HeroDomain = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searched, setSearched] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      setSearched(true)
    }
  }

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden text-center">
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.4) 0%, rgba(0, 216, 255, 0.2) 70%)'
        }}
      />

      <div className="max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-[#00D8FF] animate-ping" />
          ICANN Accredited Global Domain Registrar
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
          Lock Your Brand's Digital Identity With <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Instant Domain Registration.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
          Find and secure the perfect domain name in seconds. Includes free WHOIS privacy protection, premium DNS management, and seamless email setup.
        </p>
      </div>

      {/* Interactive Domain Search Input Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 p-2 bg-white rounded-2xl border-2 border-[#004658]/30 shadow-xl shadow-[#004658]/10">
          <input
            type="text"
            placeholder="Type your ideal domain name (e.g. mybrand)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-3.5 text-base text-slate-800 focus:outline-none rounded-xl font-medium"
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#004658] text-white font-black rounded-xl hover:bg-[#003442] transition-all shadow-md text-sm whitespace-nowrap cursor-pointer"
          >
            Check Availability ➔
          </button>
        </form>

        {searched && (
          <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center justify-between animate-in fade-in duration-300">
            <div className="flex items-center gap-2 font-bold text-sm">
              <span>🎉</span>
              <span><strong>{searchTerm.toLowerCase().replace(/[^a-z0-9]/g, '')}.com</strong> is available!</span>
            </div>
            <Link
              to="/contact"
              className="px-4 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors"
            >
              Claim for $9.99/yr
            </Link>
          </div>
        )}
      </div>

      {/* TLD Quick Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
        {tlds.map((t, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#004658]/50 hover:shadow-md transition-all text-center"
          >
            <span className="text-xl font-black text-slate-900 block font-mono">{t.ext}</span>
            <span className="text-sm font-black text-[#004658] block my-1">{t.price}</span>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{t.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeroDomain
