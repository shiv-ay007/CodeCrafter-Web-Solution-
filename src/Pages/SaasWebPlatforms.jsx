import React from "react";
import { Link } from "react-router-dom";

const SaasWebPlatforms = () => {
  const saasFeatures = [
    { title: "Multi-Tenant Architecture", desc: "Isolated database & schema isolation ensuring complete data security between enterprise tenant accounts." },
    { title: "Subscription & Usage Billing", desc: "Automated Stripe, Chargebee, and PayPal integrations supporting tiered subscriptions, seat billing, and usage meters." },
    { title: "Role-Based Access Control (RBAC)", desc: "Granular admin, manager, and user permission gates with audit logs and SSO (SAML/Okta) login." },
    { title: "Real-Time Telemetry Dashboards", desc: "Interactive analytics reporting metrics, user activity, and automated PDF export reports." }
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
          <span>☁️ Enterprise SaaS Web Platforms</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Engineer High-Availability{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Cloud SaaS Platforms
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We architect multi-tenant SaaS products engineered for high availability, automated billing, and seamless enterprise user scaling.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {saasFeatures.map((item, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">{item.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      
      {/* SaaS Architecture Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DDFBF3] text-[#004658] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#00A8CC]" />
              Multi-Tenant SaaS Architecture
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-5 mb-5 font-['Outfit',sans-serif]">
              Scalable Architecture for{" "}
              <span className="text-[#00869A]">Modern SaaS</span>
            </h2>

            <p className="text-slate-600 leading-7 mb-7">
              Build secure, modular SaaS platforms with connected
              frontend applications, APIs, databases, authentication
              and subscription management.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "◈",
                  title: "Scalable Infrastructure",
                  desc: "Architecture designed for growing workloads.",
                },
                {
                  icon: "⌘",
                  title: "Secure Authentication",
                  desc: "Role-based access and protected resources.",
                },
                {
                  icon: "▤",
                  title: "Database Management",
                  desc: "Structured tenant and application data.",
                },
                {
                  icon: "₹",
                  title: "Billing Integration",
                  desc: "Subscription plans and usage tracking.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 p-4 rounded-2xl bg-white border border-[#004658]/10 hover:border-[#00869A]/40 hover:shadow-md transition-all"
                >
                  <span className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-[#DDFBF3] text-[#004658] text-xl font-bold">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-5 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Architecture Diagram */}
          <div className="relative bg-[#EAF5F5] rounded-[28px] p-4 sm:p-6 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#4EF0C5]/30 blur-3xl" />

            <div className="relative bg-white rounded-2xl border border-white shadow-sm p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3 mb-5">
                <div>
                  <p className="text-[10px] text-[#00869A] font-bold uppercase tracking-widest">
                    System Blueprint
                  </p>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                    SaaS Architecture
                  </h3>
                </div>
                <span className="w-10 h-10 rounded-xl bg-[#DDFBF3] text-[#004658] flex items-center justify-center text-xl">
                  ◈
                </span>
              </div>

              {/* Frontend */}
              <div className="rounded-xl border border-[#00869A]/20 bg-[#F0FBF9] p-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-white text-[#004658] flex items-center justify-center text-xl shadow-sm">
                    ▣
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Frontend Application
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      React · Responsive UI · User Dashboard
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center py-2">
                <span className="text-[#00869A] text-xl">↓</span>
                <span className="text-[10px] text-slate-500 font-semibold">
                  Secure API Requests
                </span>
                <span className="text-[#00869A] text-xl">↓</span>
              </div>

              {/* API Layer */}
              <div className="rounded-xl bg-[#004658] text-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl">
                    ⇄
                  </span>
                  <div>
                    <h4 className="font-bold">API & Backend Layer</h4>
                    <p className="text-xs text-white/70 mt-1">
                      Business Logic · Validation · Services
                    </p>
                  </div>
                </div>
              </div>

              {/* Connected services */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="rounded-xl border border-slate-200 p-3 bg-white">
                  <span className="text-xl text-[#00869A]">▤</span>
                  <h4 className="font-bold text-sm text-slate-900 mt-2">
                    Database
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-5 mt-1">
                    Tenant data · Queries · Backups
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-3 bg-white">
                  <span className="text-xl text-[#00869A]">♙</span>
                  <h4 className="font-bold text-sm text-slate-900 mt-2">
                    Auth & RBAC
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-5 mt-1">
                    Login · Roles · Permissions
                  </p>
                </div>
              </div>

              {/* Billing */}
              <div className="mt-3 rounded-xl border border-[#00869A]/20 bg-[#EAF5F5] p-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-white text-[#004658] flex items-center justify-center text-xl">
                    ₹
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#004658]">
                      Billing & Subscription Management
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Plans · Invoices · Usage Limits
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-center text-[10px] text-slate-400 mt-4">
                Illustrative architecture · Adapted to project requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Onboarding Workflow */}
      <section className="bg-white border-y border-slate-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DDFBF3] text-[#004658] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#00869A]" />
              SaaS Onboarding Workflow
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mt-5 font-['Outfit',sans-serif]">
              From Signup to a{" "}
              <span className="text-[#00869A]">Ready Workspace</span>
            </h2>

            <p className="text-slate-600 leading-7 mt-4">
              Create a smooth onboarding journey that helps users
              set up their accounts, configure their workspace and
              start using your SaaS product.
            </p>
          </div>

          {/* Four Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                icon: "♙",
                title: "Create Account",
                desc: "A simple registration process with clear form fields.",
              },
              {
                step: "02",
                icon: "✉",
                title: "Verify & Setup",
                desc: "Email verification and initial profile configuration.",
              },
              {
                step: "03",
                icon: "⚙",
                title: "Workspace Setup",
                desc: "Configure team members, preferences and organization.",
              },
              {
                step: "04",
                icon: "▦",
                title: "Access Dashboard",
                desc: "Reach the dashboard and start using product features.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-slate-200 bg-[#FBFDFD] p-5 sm:p-6 hover:-translate-y-1 hover:shadow-lg hover:border-[#00869A]/30 transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-extrabold text-[#00869A]">
                    {item.step}
                  </span>
                  <span className="w-11 h-11 rounded-xl bg-[#DDFBF3] text-[#004658] flex items-center justify-center text-xl">
                    {item.icon}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-6">
                  {item.desc}
                </p>

                <div className="mt-5 h-1 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#004658] to-[#4EF0C5]"
                    style={{ width: `${(index + 1) * 25}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Workspace Dashboard Preview */}
          <div className="mt-8 rounded-[28px] bg-[#EAF5F5] p-4 sm:p-7 overflow-hidden">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 items-center">
              <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00869A]">
                  Welcome aboard
                </span>
                <h3 className="text-2xl font-extrabold text-[#004658] mt-3 mb-5 font-['Outfit',sans-serif]">
                  Your workspace is ready.
                </h3>

                <div className="space-y-4">
                  {[
                    "Create your workspace",
                    "Invite team members",
                    "Configure your preferences",
                    "Explore product features",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 items-center">
                      <span className="w-6 h-6 rounded-full bg-[#DDFBF3] text-[#00765E] flex items-center justify-center text-sm font-bold">
                        ✓
                      </span>
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/schedule-consultation"
                  className="inline-flex items-center gap-2 mt-7 px-5 py-3 rounded-xl bg-[#004658] text-white text-sm font-bold hover:bg-[#006174] transition-colors"
                >
                  Build Your SaaS ↗
                </Link>
              </div>

              {/* Dashboard UI Mockup */}
              <div className="rounded-2xl bg-white border border-white shadow-xl overflow-hidden">
                <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#004658] text-white flex items-center justify-center text-xs font-bold">
                      S
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      SaaS Workspace
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    Overview
                  </span>
                </div>

                <div className="grid grid-cols-[78px_1fr] sm:grid-cols-[115px_1fr] min-h-[220px]">
                  <aside className="bg-[#002B34] p-3 space-y-4">
                    {["Dashboard", "Projects", "Team", "Billing", "Settings"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className={`text-[9px] sm:text-[11px] rounded-md px-2 py-2 ${
                            index === 0
                              ? "bg-white/15 text-[#4EF0C5]"
                              : "text-white/60"
                          }`}
                        >
                          {item}
                        </div>
                      )
                    )}
                  </aside>

                  <div className="p-3 sm:p-5 min-w-0">
                    <h4 className="text-sm sm:text-lg font-extrabold text-slate-900">
                      Dashboard Overview
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-1">
                      Your product activity at a glance
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
                      {[
                        ["Team Members", "24"],
                        ["Active Projects", "12"],
                        ["Usage", "68%"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-lg bg-[#F0F9F8] border border-[#E1F1EF] p-2 sm:p-3"
                        >
                          <p className="text-[9px] sm:text-[10px] text-slate-500">
                            {label}
                          </p>
                          <p className="text-lg sm:text-xl font-extrabold text-[#004658] mt-1">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Decorative chart */}
                    <div className="mt-4 border border-slate-100 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] sm:text-xs font-bold text-slate-700">
                          Workspace Activity
                        </span>
                        <span className="text-[9px] text-[#00869A]">
                          Sample data
                        </span>
                      </div>

                      <div className="h-16 sm:h-20 flex items-end gap-1.5 border-b border-slate-100 pb-1">
                        {[28, 45, 36, 63, 50, 75, 59, 92, 70, 85, 65, 96].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t-sm bg-gradient-to-t from-[#004658] to-[#4EF0C5]"
                              style={{ height: `${height}%` }}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Ready to Build Your SaaS Product?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Discuss multi-tenant architecture and subscription billing models with our Cloud Leads.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule SaaS Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SaasWebPlatforms;
