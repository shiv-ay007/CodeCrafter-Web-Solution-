import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const HeroEcommerce = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD')

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden">
      {/* Glow Effects */}
      <div 
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.4) 0%, rgba(0, 216, 255, 0.1) 70%)'
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-black uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Headless & High-Conversion E-Commerce Architecture
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
            Engineered For Scale. <br />
            Built To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">Sell Millions.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
            Launch lightning-fast digital storefronts with sub-second checkout, automated global tax calculation, multi-currency settlement, and frictionless payment gateways.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            {['Shopify Plus', 'Headless Next.js', 'WooCommerce', 'Stripe & Razorpay', '1-Click Checkout'].map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-lg bg-white border border-[#004658]/15 text-xs font-bold text-slate-800 shadow-xs">
                ✓ {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl px-7 py-3.5 text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:-translate-y-0.5 transition-all duration-300"
            >
              Build Your Store ➔
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl px-6 py-3.5 text-sm transition-all duration-300"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Right Column: Live E-Commerce Store & Checkout Simulation */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-slate-950 p-6 sm:p-8 text-white border border-slate-800 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-slate-400 ml-2">store.codecrafter.io/checkout</span>
              </div>

              {/* Currency Selector Simulation */}
              <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800 text-xs">
                {['USD', 'EUR', 'INR'].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setSelectedCurrency(curr)}
                    className={`px-2 py-0.5 rounded font-bold transition-all ${
                      selectedCurrency === curr ? 'bg-[#00D8FF] text-slate-950 font-black' : 'text-slate-400'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Order Simulation Box */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#004658] to-[#00D8FF] flex items-center justify-center text-xl shadow-md">
                    🛍️
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">NextGen Kinetic Wireless Earbuds</div>
                    <div className="text-xs text-slate-400">SKU: CC-AUD-2026 • Color: Midnight Slate</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono font-bold text-[#00D8FF]">
                    {selectedCurrency === 'USD' ? '$189.00' : selectedCurrency === 'EUR' ? '€175.00' : '₹15,499'}
                  </span>
                  <span className="block text-[10px] text-emerald-400">In Stock (Instant Ship)</span>
                </div>
              </div>

              {/* Payment Methods Simulation */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span>Instant 1-Click Payment Rails</span>
                  <span className="text-emerald-400 text-[10px] font-mono">256-Bit SSL Encrypted</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {['Apple Pay', 'Google Pay', 'Stripe Card', 'UPI / NetBanking'].map((pay, pIdx) => (
                    <div key={pIdx} className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-center text-[10px] font-mono text-slate-300 hover:border-cyan-400 cursor-pointer transition-colors">
                      {pay}
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Conversion Metrics Badge */}
              <div className="grid grid-cols-3 gap-3 text-center pt-2">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-emerald-400 font-mono font-black text-sm block">99.8%</span>
                  <span className="text-[10px] text-slate-400">Payment Success</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-cyan-400 font-mono font-black text-sm block">0.4s</span>
                  <span className="text-[10px] text-slate-400">Checkout Time</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-teal-300 font-mono font-black text-sm block">+24%</span>
                  <span className="text-[10px] text-slate-400">AOV Boost</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroEcommerce
