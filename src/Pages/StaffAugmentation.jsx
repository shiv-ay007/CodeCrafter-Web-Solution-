import React, { useState } from "react";
import { Link } from "react-router-dom";

const StaffAugmentation = () => {
  const [selectedRole, setSelectedRole] = useState("React / Next.js Lead");
  const [squadSize, setSquadSize] = useState(3);

  const roleOptions = [
    { title: "React / Next.js Lead", level: "Senior (6+ Yrs)", speed: "48 Hours Onboarding" },
    { title: "Full-Stack Node/Python", level: "Senior (7+ Yrs)", speed: "48 Hours Onboarding" },
    { title: "DevOps & Cloud Specialist", level: "Lead (8+ Yrs)", speed: "72 Hours Onboarding" },
    { title: "Mobile Flutter/Native", level: "Senior (5+ Yrs)", speed: "48 Hours Onboarding" },
    { title: "QA Automation Engineer", level: "Mid-Senior (4+ Yrs)", speed: "24 Hours Onboarding" }
  ];

  const highlights = [
    { title: "Top 1% Vetted Talent", desc: "Rigorous 5-stage technical vetting assessing algorithm depth, clean architecture, and soft skills." },
    { title: "Zero Hiring Overhead", desc: "Skip recruiting fees, payroll taxes, benefits, and device logistics — pay only productive hours." },
    { title: "100% Time-Zone Sync", desc: "Our engineers overlap seamlessly with US EST/PST, European, and Asian working hours." },
    { title: "7-Day Risk-Free Trial", desc: "Evaluate your augmented engineer in production before making a long-term commitment." }
  ];

  return (
    <div className="w-full bg-[#FBFDFD] pt-32 sm:pt-40 pb-24 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Ambient Gradient Background */}
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
          <span>⚡ High-Velocity Staff Augmentation</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Scale Your Engineering Team with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Top 1% Vetted Talent
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Embed senior software engineers, UI/UX designers, and DevOps specialists directly into your existing sprints in as little as 48 hours.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">48 Hours</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Average Onboarding</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">Top 1%</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Vetted Engineers</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">0%</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Recruitment Fees</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">100%</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Time Zone Sync</p>
          </div>
        </div>
      </div>

      {/* Interactive Talent Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-[#003442] to-[#001D25] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-2">Interactive Squad Estimator</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif]">
              Configure Your Augmented Developer Squad
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">Select developer roles and squad size to instantly estimate onboarding timeline.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Role Selectors */}
            <div className="lg:col-span-7 space-y-3">
              <label className="text-xs font-bold text-[#4EF0C5] uppercase tracking-wider block">Choose Required Specialization:</label>
              <div className="space-y-2">
                {roleOptions.map((role, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedRole(role.title)}
                    className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      selectedRole === role.title
                        ? "bg-[#004658] border-[#4EF0C5] text-white shadow-lg"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-sm sm:text-base">{role.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{role.level}</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#4EF0C5]/20 text-[#4EF0C5]">
                      {role.speed}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Squad Summary Card */}
            <div className="lg:col-span-5 bg-white/10 border border-white/15 p-6 rounded-2xl space-y-6">
              <h4 className="text-base font-bold text-white font-['Outfit',sans-serif] border-b border-white/10 pb-3">
                Squad Deployment Summary
              </h4>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs sm:text-sm mb-2">
                    <span className="text-slate-300">Number of Engineers:</span>
                    <span className="font-bold text-[#4EF0C5]">{squadSize} Engineers</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={squadSize}
                    onChange={(e) => setSquadSize(parseInt(e.target.value))}
                    className="w-full accent-[#4EF0C5] cursor-pointer"
                  />
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Primary Role:</span>
                    <span className="font-semibold text-white">{selectedRole}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Onboarding SLA:</span>
                    <span className="font-semibold text-[#4EF0C5]">48 - 72 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Trial Period:</span>
                    <span className="font-semibold text-emerald-400">7-Day Risk Free</span>
                  </div>
                </div>
              </div>

              <Link
                to="/schedule-consultation"
                className="w-full block text-center py-3.5 rounded-xl bg-[#4EF0C5] text-[#002B34] font-bold text-sm hover:bg-[#3be0b5] transition-all shadow-lg"
              >
                Hire Selected Developers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif]">
            Why Engineering Teams Choose CodeCrafter Augmentation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">{item.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Ready to Expand Your Engineering Bandwidth?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Interview our vetted senior developers today and start sprinting this week.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule Talent Onboarding Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StaffAugmentation;
