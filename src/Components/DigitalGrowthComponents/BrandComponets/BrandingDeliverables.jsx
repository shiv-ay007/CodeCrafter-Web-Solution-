import React from 'react'

const deliverables = [
  {
    icon: '✨',
    title: 'Primary Vector Logo & Marks',
    desc: 'Scalable SVG, EPS, and PNG master assets with dark, light, monochrome, and horizontal/stacked variations.'
  },
  {
    icon: '🎨',
    title: 'Color Palette & Design Tokens',
    desc: 'HEX, RGB, HSL, and Tailwind CSS configuration tokens with contrast accessibility scoring.'
  },
  {
    icon: '🔤',
    title: 'Typography & Pairing Rules',
    desc: 'Carefully chosen Google & web fonts with precise line-height, kerning, and hierarchy guidelines.'
  },
  {
    icon: '📄',
    title: 'Brand Book & Stationery Kit',
    desc: 'Comprehensive PDF brand guidelines, business cards, email signatures, letterheads, and presentation decks.'
  }
]

const BrandingDeliverables = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto bg-slate-50/60 rounded-3xl border border-slate-200/80 my-10" id="deliverables">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
          Brand System Deliverables
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Everything You Need To Launch Your Brand
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          A turnkey corporate identity package built for digital products, physical merchandising, and investor pitches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {deliverables.map((d, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <span className="text-3xl p-3 rounded-2xl bg-[#004658]/8 shrink-0">{d.icon}</span>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{d.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrandingDeliverables
