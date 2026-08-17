import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const tiers = [
  { vcpu: 2, ram: 4, nvme: 80, bandwidth: 4, price: 14.99, name: 'VPS Scale 1' },
  { vcpu: 4, ram: 8, nvme: 160, bandwidth: 8, price: 29.99, name: 'VPS Scale 2' },
  { vcpu: 8, ram: 16, nvme: 320, bandwidth: 16, price: 59.99, name: 'VPS Scale 3' },
  { vcpu: 16, ram: 32, nvme: 640, bandwidth: 32, price: 119.99, name: 'VPS Scale 4' },
]

const VpsConfigurator = () => {
  const [selectedTierIdx, setSelectedTierIdx] = useState(1)
  const current = tiers[selectedTierIdx]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto" id="configurator">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/10 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4">
          Live Spec Slider
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Configure Your Dedicated VPS Instance
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Adjust the compute power slider to match your application workload in real-time.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl">
        {/* Slider Input */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-slate-300">Select Hardware Profile:</span>
            <span className="px-3 py-1 rounded-lg bg-[#00D8FF] text-slate-950 font-black text-xs">
              {current.name}
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="3"
            step="1"
            value={selectedTierIdx}
            onChange={(e) => setSelectedTierIdx(Number(e.target.value))}
            className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00D8FF]"
          />

          <div className="flex justify-between text-xs font-mono text-slate-400 mt-3">
            <span>2 vCPU / 4GB</span>
            <span>4 vCPU / 8GB</span>
            <span>8 vCPU / 16GB</span>
            <span>16 vCPU / 32GB</span>
          </div>
        </div>

        {/* Spec Display Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-xs text-slate-400 block mb-1">Dedicated vCPU</span>
            <span className="text-2xl font-black text-white font-mono">{current.vcpu} Cores</span>
            <span className="text-[10px] text-cyan-400 block mt-1">AMD EPYC Gen4</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-xs text-slate-400 block mb-1">DDR5 ECC RAM</span>
            <span className="text-2xl font-black text-white font-mono">{current.ram} GB</span>
            <span className="text-[10px] text-emerald-400 block mt-1">High Bandwidth</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-xs text-slate-400 block mb-1">Pure NVMe SSD</span>
            <span className="text-2xl font-black text-white font-mono">{current.nvme} GB</span>
            <span className="text-[10px] text-teal-400 block mt-1">RAID-10 Mirrored</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-xs text-slate-400 block mb-1">Bandwidth</span>
            <span className="text-2xl font-black text-white font-mono">{current.bandwidth} TB</span>
            <span className="text-[10px] text-cyan-300 block mt-1">10 Gbps Port</span>
          </div>
        </div>

        {/* Pricing Summary & Checkout CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-800">
          <div>
            <span className="text-xs text-slate-400 block">Monthly Instance Price:</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-[#00D8FF] font-mono">${current.price}</span>
              <span className="text-xs text-slate-400">/ month (Billed hourly)</span>
            </div>
          </div>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-black text-sm bg-[#00D8FF] text-slate-950 hover:bg-cyan-300 transition-all text-center shadow-lg shadow-cyan-500/20"
          >
            Deploy Instance In 30 Seconds ➔
          </Link>
        </div>
      </div>
    </section>
  )
}

export default VpsConfigurator
