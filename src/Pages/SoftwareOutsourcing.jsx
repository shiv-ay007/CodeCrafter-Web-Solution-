import React from "react";
import { Link } from "react-router-dom";

const SoftwareOutsourcing = () => {
  const models = [
    { title: "Fixed Price & Fixed Scope", desc: "Ideal for well-defined product requirements with strict budgetary boundaries and milestone deliverables." },
    { title: "Time & Materials (T&M)", desc: "Perfect for evolving digital products, flexible sprint backlogs, and agile iterations." },
    { title: "Milestone-Based Delivery", desc: "Pay strictly upon successful demonstration and acceptance testing of pre-agreed feature releases." }
  ];

  const guarantees = [
    { metric: "40% OPEX Reduction", label: "Average client development cost savings compared to US/EU in-house dev teams." },
    { metric: "100% On-Time SLA", label: "Guaranteed milestone delivery dates enforced by contractual performance penalties." },
    { metric: "0 Risk Code Transfer", label: "Full intellectual property transfer with comprehensive documentation and video walkthroughs." }
  ];

  return (
    <div className="w-full bg-[#FBFDFD] pt-32 sm:pt-40 pb-24 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Radial Light Effect */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none rounded-full opacity-50 blur-[130px] -z-10"
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(0, 70, 88, 0.22) 0%, rgba(0, 168, 204, 0.08) 50%, rgba(251, 253, 253, 0) 80%)"
        }}
      />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-[#004658] animate-pulse" />
          <span>💼 Strategic Software Outsourcing</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          End-to-End Software Outsourcing with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Zero Delivery Risk
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Outsource your complex software engineering projects to CodeCrafter. We handle architecture, development, QA, and deployment while keeping you in total control.
        </p>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {guarantees.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
              <p className="text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">{item.metric}</p>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Models Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif]">
            Flexible Outsourcing Engagement Models
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">Choose the contract model that best fits your business goals and cash flow constraints.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((m, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-lg shadow-[#004658]/5 hover:border-[#004658]/30 transition-all flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-2xl bg-[#004658]/10 text-[#004658] font-bold flex items-center justify-center mb-6">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">{m.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{m.desc}</p>
              </div>
              <Link to="/schedule-consultation" className="text-xs font-bold text-[#004658] uppercase tracking-wider hover:underline">
                Explore Model →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Have an RFP or Project Specification Ready?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Send us your project brief for a complimentary architectural review and fixed-cost estimation.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Request Project Proposal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SoftwareOutsourcing;
