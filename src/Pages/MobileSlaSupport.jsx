import React from "react";
import { Link } from "react-router-dom";

const MobileSlaSupport = () => {
  const slas = [
    { priority: "P1 - Critical Outage", response: "< 15 Minutes", resolution: "< 2 Hours", desc: "Production app crash blocking 100% of user logins or payment checkouts." },
    { priority: "P2 - High Priority", response: "< 1 Hour", resolution: "< 6 Hours", desc: "Major feature degradation affecting a subset of mobile users." },
    { priority: "P3 - Normal Ticket", response: "< 4 Hours", resolution: "< 24 Hours", desc: "Minor UI glitch or non-critical feature adjustment." }
  ];

  return (
    <div className="w-full bg-[#FBFDFD] pt-32 sm:pt-40 pb-24 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Gradient */}
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
          <span>🛡️ 24/7 Enterprise Mobile SLA Support</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Guaranteed 24/7 Mobile SLA &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Emergency Engineering Support
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We provide round-the-clock mobile app maintenance, emergency outage response, and proactive OS compatibility updates.
        </p>
      </div>

      {/* SLA Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl border border-[#004658]/15 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#004658] text-white text-xs sm:text-sm uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Severity Level</th>
                  <th className="py-4 px-6 font-bold text-[#4EF0C5]">Response SLA</th>
                  <th className="py-4 px-6 font-bold text-slate-300">Target Resolution</th>
                  <th className="py-4 px-6 font-bold">Scope Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {slas.map((s, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">{s.priority}</td>
                    <td className="py-4 px-6 font-bold text-[#004658]">{s.response}</td>
                    <td className="py-4 px-6 font-semibold text-slate-700">{s.resolution}</td>
                    <td className="py-4 px-6 text-slate-600">{s.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Protect Your Mobile App with 24/7 SLA</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Choose an SLA support tier to keep your production app online round the clock.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule SLA Support Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileSlaSupport;
