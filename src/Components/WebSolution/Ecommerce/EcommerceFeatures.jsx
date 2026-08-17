import React from 'react'

const features = [
  {
    icon: '⚡',
    title: 'Headless Sub-Second Speed',
    desc: 'Decoupled frontend built with React 19 and Next.js ensures instant page loads, preventing cart abandonment and driving higher conversion rates.',
    badge: 'Performance'
  },
  {
    icon: '💳',
    title: 'Multi-Gateway Global Checkout',
    desc: 'Seamless integration with Stripe, PayPal, Razorpay, Apple Pay, Google Pay, and localized regional payment providers with smart fallback routing.',
    badge: 'Payments'
  },
  {
    icon: '📦',
    title: 'Automated Inventory & ERP Sync',
    desc: 'Real-time multi-warehouse stock synchronization, automated low-inventory alerts, and instant barcode/SKU tracking integration.',
    badge: 'Automation'
  },
  {
    icon: '🌐',
    title: 'Multi-Currency & Global Tax',
    desc: 'Automatic geo-location currency detection, localized pricing, dynamic VAT/GST tax calculation, and customs compliance support.',
    badge: 'Global Scale'
  },
  {
    icon: '🎯',
    title: 'AI Product Recommendations',
    desc: 'Intelligent upsell and cross-sell engine that analyzes shopper browsing behaviors to increase Average Order Value (AOV) by over 25%.',
    badge: 'AI Engine'
  },
  {
    icon: '🛡️',
    title: 'PCI-DSS Level 1 Security',
    desc: 'Bank-grade tokenized payments, DDoS protection, fraud detection with AI risk scoring, and automated customer data encryption.',
    badge: 'Security'
  }
]

const EcommerceFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="features">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Enterprise Commerce Capabilities
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Everything Your Store Needs To Dominate Modern Retail
        </h2>
        <p className="text-base text-slate-600">
          Built for high-volume D2C brands, B2B wholesale portals, and global e-commerce powerhouses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feat, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#004658]/40 hover:shadow-xl hover:shadow-[#004658]/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-14 h-14 rounded-2xl bg-[#004658]/10 text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feat.icon}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#004658]/8 text-[#004658] text-xs font-bold font-mono">
                  {feat.badge}
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#004658] transition-colors">
                {feat.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {feat.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#004658]">
              <span>Learn Architecture Specs</span>
              <span>➔</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EcommerceFeatures
