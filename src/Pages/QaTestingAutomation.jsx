import React, { useState } from "react";
import { Link } from "react-router-dom";

const QaTestingAutomation = () => {
  const [activeTest, setActiveTest] = useState("e2e");
  const [activeFaq, setActiveFaq] = useState(null);

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

  const qaSuiteModules = [
    {
      num: "01",
      title: "Unit & Component Isolation",
      desc: "Jest, Vitest, and React Testing Library suites verifying zero component state regressions.",
      tag: "Coverage 100%",
      badge: "Core Logic"
    },
    {
      num: "02",
      title: "API & Microservice Validation",
      desc: "Contract testing, payload sanitization, REST/GraphQL schema checks, and authentication guards.",
      tag: "< 20ms Latency",
      badge: "API Security"
    },
    {
      num: "03",
      title: "Visual Regression Testing",
      desc: "Automated Percy and Storybook visual diffing catching subtle UI displacement before release.",
      tag: "Pixel Perfect",
      badge: "UI Consistency"
    },
    {
      num: "04",
      title: "Load & Security Audits",
      desc: "Artillery & k6 traffic simulation testing server resilience under 10k+ concurrent requests.",
      tag: "10k+ Req/Sec",
      badge: "High Scale"
    }
  ];

  const pipelineSteps = [
    {
      step: "01",
      title: "Pull Request Trigger",
      desc: "GitHub Actions workflow triggers automated test runner instantly on code commit."
    },
    {
      step: "02",
      title: "Parallel Execution",
      desc: "Parallelized E2E & Unit tests execute across 8 isolated worker containers for speed."
    },
    {
      step: "03",
      title: "Visual & Video Audit",
      desc: "Cypress video recordings and visual diff artifacts attached to the pull request log."
    },
    {
      step: "04",
      title: "Production Gate",
      desc: "Automated merge allowed only if 100% test suite passes all strict quality gates."
    }
  ];

  const faqs = [
    {
      q: "What frameworks do you use for QA automation?",
      a: "We primary use Cypress, Playwright, Jest, Vitest, k6, and Postman depending on whether we are testing UI, APIs, or system performance."
    },
    {
      q: "Can automated tests run automatically on every code push?",
      a: "Yes! We integrate test suites directly into your CI/CD pipeline (GitHub Actions, GitLab CI, or Vercel) so tests run on every Pull Request."
    },
    {
      q: "Do you offer manual QA alongside automated testing?",
      a: "Yes, we combine automated regression suites with explorative human QA testing for complex edge cases."
    },
    {
      q: "How fast do automated E2E tests execute?",
      a: "By parallelizing test suites across cloud containers, full end-to-end regression suites typically run in under 2 minutes."
    }
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

        {/* Hero CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            to="/schedule-consultation"
            className="px-8 py-3.5 rounded-full bg-[#004658] text-white font-bold text-sm sm:text-base hover:bg-[#003442] shadow-xl shadow-[#004658]/20 hover:-translate-y-0.5 transition-all"
          >
            Schedule QA Strategy Session →
          </Link>
          <Link
            to="/case-studies"
            className="px-8 py-3.5 rounded-full bg-white border border-[#004658]/25 text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-50 transition-all shadow-sm"
          >
            View QA Case Studies →
          </Link>
        </div>

        {/* Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto p-4 rounded-2xl bg-white/80 border border-[#004658]/15 shadow-sm backdrop-blur-md">
          <div className="text-center p-3">
            <div className="text-xl sm:text-2xl font-extrabold text-[#004658]">0%</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Production Regressions</div>
          </div>
          <div className="text-center p-3 border-l border-slate-200">
            <div className="text-xl sm:text-2xl font-extrabold text-[#004658]">99.99%</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Uptime Guarantee</div>
          </div>
          <div className="text-center p-3 border-l border-slate-200">
            <div className="text-xl sm:text-2xl font-extrabold text-[#004658]">100%</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">CI/CD Gate Automated</div>
          </div>
          <div className="text-center p-3 border-l border-slate-200">
            <div className="text-xl sm:text-2xl font-extrabold text-[#004658]">&lt; 1 sec</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">API Suite Execution</div>
          </div>
        </div>
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

      {/* NEW PREMIUM SECTION 1: QA TESTING SPECTRUM MODULES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004658] block mb-2">FULL QA SPECTRUM</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">Complete Quality Assurance Coverage</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qaSuiteModules.map((mod, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-mono font-bold text-[#004658]">{mod.num}</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#004658]/8 text-[#004658] text-[10px] font-mono font-bold">{mod.badge}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit',sans-serif]">{mod.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{mod.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-emerald-700 bg-emerald-50/80 px-3 py-1.5 rounded-xl border border-emerald-200/60">
                <span>Metric</span>
                <span>{mod.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pillars Grid */}
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

      {/* NEW PREMIUM SECTION 2: CI/CD PIPELINE WORKFLOW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#002B34] text-white rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-2">AUTOMATED PIPELINE</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif]">Continuous Integration Quality Pipeline</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineSteps.map((stp, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#001D25] border border-white/15 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#4EF0C5] uppercase block mb-2">Step {stp.step}</span>
                  <h3 className="text-lg font-bold text-white mb-2 font-['Outfit',sans-serif]">{stp.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{stp.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-[#4EF0C5]">
                  Automated Gate ✓
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004658] block mb-2">QUESTIONS & ANSWERS</span>
          <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-[#004658]/15 rounded-2xl bg-white overflow-hidden shadow-xs">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <span className="text-[#004658] text-xl">{activeFaq === idx ? "−" : "+"}</span>
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Want Zero-Defect Releases for Your Software?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Consult with our QA Automation Leads to implement end-to-end testing pipelines.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
              Schedule QA Strategy Session
            </Link>
            <Link to="/contact" className="px-8 py-3.5 rounded-full bg-white/10 border border-white/30 text-white font-bold text-sm sm:text-base hover:bg-white/20 transition-all inline-block">
              Talk to QA Lead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QaTestingAutomation;
