import React, { useState } from "react";
import { Link } from "react-router-dom";

const QaTestingAutomation = () => {
  const [activeTest, setActiveTest] = useState("e2e");

  const testSuites = [
    {
      id: "e2e",
      name: "Cypress E2E User Journey Test",
      logs: [
        "✓ [PASS] User Authentication & MFA login flow (142ms)",
        "✓ [PASS] Shopping Cart item addition & coupon code validation (210ms)",
        "✓ [PASS] Stripe Payment Gateway checkout sandbox transaction (412ms)",
        "✓ [PASS] Order Confirmation email & DB record creation (180ms)",
        "--- ALL 24 END-TO-END TESTS PASSED IN 0.94 SECONDS ---"
      ]
    },
    {
      id: "api",
      name: "Playwright API Integration & Load Test",
      logs: [
        "✓ [PASS] GET /api/v1/users - HTTP 200 OK (18ms)",
        "✓ [PASS] POST /api/v1/orders - Rate limiting & Payload Sanitization (24ms)",
        "✓ [PASS] 1,000 Concurrent User Simulation - 0% Error Rate (450ms)",
        "--- API LOAD TEST PASSED WITHOUT REGRESSION ---"
      ]
    }
  ];

  const pillars = [
    { title: "Automated Cypress & Playwright E2E", desc: "Simulate real user clicks, form submissions, and multi-step checkout funnels on every pull request." },
    { title: "Cross-Browser & Device Matrix", desc: "Automated visual regression testing across Chrome, Safari, Firefox, Edge, iOS Safari, and Android Chrome." },
    { title: "API Stress & Performance Testing", desc: "Simulate peak traffic spikes to ensure database connection pools and servers don't crash under load." },
    { title: "Continuous CI/CD Quality Gates", desc: "Block broken code from ever reaching production with strict GitHub Actions test enforcement." }
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
          <span>🧪 QA Testing & Automation Services</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Zero-Defect Software Releases with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Automated QA Testing
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We build robust automated testing pipelines that catch bugs, performance regressions, and security vulnerabilities before your users ever see them.
        </p>
      </div>

      {/* Interactive Terminal Test Runner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#002B34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-2">Automated QA Console</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif]">
              Live Automated Test Runner
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Test Suite Selector */}
            <div className="lg:col-span-5 space-y-3">
              {testSuites.map((ts) => (
                <button
                  key={ts.id}
                  onClick={() => setActiveTest(ts.id)}
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer font-bold text-xs sm:text-sm ${
                    activeTest === ts.id
                      ? "bg-[#004658] border-[#4EF0C5] text-white shadow-lg"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {ts.name}
                </button>
              ))}
            </div>

            {/* Terminal Window */}
            <div className="lg:col-span-7 bg-[#001D25] border border-white/15 p-6 rounded-2xl font-mono text-xs sm:text-sm">
              {testSuites.map((ts) => {
                if (ts.id !== activeTest) return null;
                return (
                  <div key={ts.id} className="space-y-3">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-slate-400">
                      <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                      <span className="ml-2 text-xs">cypress run --spec "cypress/e2e/workflow.cy.js"</span>
                    </div>
                    <div className="space-y-2 text-emerald-400">
                      {ts.logs.map((log, idx) => (
                        <p key={idx} className="leading-relaxed">{log}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item, idx) => (
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
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Want Zero-Defect Releases for Your Software?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Consult with our QA Automation Leads to implement end-to-end testing pipelines.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule QA Strategy Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QaTestingAutomation;
