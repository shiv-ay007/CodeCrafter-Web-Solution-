import React, { useState } from "react";
import { Link } from "react-router-dom";

const DedicatedTeams = () => {
  const [activeRole, setActiveRole] = useState(0);

  const squadRoles = [
    { title: "Technical Product Manager", focus: "Sprint planning, backlog prioritization, stakeholder sync, and deliverable SLAs." },
    { title: "Lead Software Architect", focus: "System architecture, code reviews, DB schema design, and security benchmarks." },
    { title: "Senior Full-Stack Engineers", focus: "High-concurrency React/Next.js frontend & Node/Go/Python backend execution." },
    { title: "QA Automation Lead", focus: "Automated Cypress/Playwright regression testing, API stress testing, and quality gates." },
    { title: "UI/UX Product Designer", focus: "User flow mapping, Figma wireframes, clickable prototypes, and design system tokens." }
  ];

  const comparison = [
    { metric: "Management Overhead", dedicated: "Zero — Self-managed squad with dedicated PM", inhouse: "High — Requires internal managers & HR" },
    { metric: "Scaling Flexibility", dedicated: "Scale up or down in 7 days", inhouse: "Slow 3-6 month hiring process" },
    { metric: "Delivery Commitment", dedicated: "Guaranteed milestone SLAs & velocity targets", inhouse: "Variable team velocity" },
    { metric: "Cost Structure", dedicated: "Fixed monthly predictable rate (No benefits/logistics)", inhouse: "High fixed salaries, taxes & equipment costs" }
  ];

  return (
    <div className="w-full bg-[#FBFDFD] pt-32 sm:pt-40 pb-24 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Ambient Background */}
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
          <span>🚀 Dedicated Product Squads</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Autonomous Dedicated Engineering Squads Built to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Deliver Software Faster
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Get a complete, self-managed cross-functional team tailored to your product vision — complete with PM, Architects, Developers, and QA.
        </p>
      </div>

      {/* Squad Architecture Interactive Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#002B34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mb-10">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-2">Cross-Functional Team Blueprint</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif]">
              Anatomy of a CodeCrafter Dedicated Squad
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">Click any role below to explore their core responsibilities within your product lifecycle.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Roles Navigation */}
            <div className="lg:col-span-5 space-y-2">
              {squadRoles.map((role, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveRole(idx)}
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    activeRole === idx
                      ? "bg-[#004658] border-[#4EF0C5] text-white shadow-lg"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#4EF0C5]/20 text-[#4EF0C5] flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-sm sm:text-base">{role.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Role Detail Card */}
            <div className="lg:col-span-7 bg-white/10 border border-white/15 p-8 rounded-2xl">
              <span className="text-xs font-bold text-[#4EF0C5] uppercase tracking-wider block mb-2">Selected Role Responsibilities</span>
              <h3 className="text-2xl font-bold text-white font-['Outfit',sans-serif] mb-4">
                {squadRoles[activeRole].title}
              </h3>
              <p className="text-slate-200 text-base leading-relaxed mb-6">
                {squadRoles[activeRole].focus}
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Full-Time Commitment</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#4EF0C5]" /> Agile Jira / Slack Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif]">
            Dedicated Squad vs In-House Hiring
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-[#004658]/15 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#004658] text-white text-xs sm:text-sm uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Comparison Area</th>
                  <th className="py-4 px-6 font-bold text-[#4EF0C5]">CodeCrafter Dedicated Squad</th>
                  <th className="py-4 px-6 font-bold text-slate-300">Traditional In-House Hiring</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">{row.metric}</td>
                    <td className="py-4 px-6 font-semibold text-[#004658] flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                      <span>{row.dedicated}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.inhouse}</td>
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
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Build Your Custom Dedicated Squad Today</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Discuss your product roadmap with our Chief Technology Officer and assemble your team in days.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Assemble Dedicated Squad
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DedicatedTeams;
