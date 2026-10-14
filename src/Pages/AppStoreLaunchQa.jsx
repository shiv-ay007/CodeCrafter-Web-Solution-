
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Smartphone,
  ShieldCheck,
  Bug,
  Gauge,
  MonitorCheck,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Apple,
  Rocket,
  RefreshCw,
  FileCheck2,
  Layers3,
  Zap,
} from "lucide-react";

const AppStoreLaunchQa = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const steps = [
    {
      title: "TestFlight & Play Internal Beta",
      desc: "Distribute pre-release builds to internal stakeholders and external beta testers seamlessly.",
    },
    {
      title: "Automated Device Matrix Testing",
      desc: "Run automated E2E tests across supported physical iOS and Android devices.",
    },
    {
      title: "Pre-Release Store Guidelines Audit",
      desc: "Review Apple Human Interface Guidelines and Google Play policies before submission.",
    },
    {
      title: "Phased Rollout Strategy",
      desc: "Plan gradual releases and monitor app stability before expanding availability.",
    },
  ];

  const services = [
    {
      icon: Smartphone,
      title: "Functional Testing",
      desc: "Validate navigation, forms, authentication, payments and core user journeys.",
      tag: "Core validation",
    },
    {
      icon: MonitorCheck,
      title: "UI & Device Compatibility",
      desc: "Check layouts, touch interactions and responsive behaviour across screen sizes.",
      tag: "Cross-device",
    },
    {
      icon: Gauge,
      title: "Performance Testing",
      desc: "Evaluate startup time, responsiveness, memory usage and network behaviour.",
      tag: "App performance",
    },
    {
      icon: ShieldCheck,
      title: "Security Validation",
      desc: "Review authentication flows, permissions, session handling and sensitive data exposure.",
      tag: "Security checks",
    },
    {
      icon: Bug,
      title: "Regression Testing",
      desc: "Recheck existing features after fixes and updates to catch unexpected breakages.",
      tag: "Release stability",
    },
    {
      icon: ClipboardCheck,
      title: "Store Readiness Review",
      desc: "Review app metadata, permissions, screenshots and submission requirements.",
      tag: "Launch preparation",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Build Review",
      desc: "Understand your app, target audience, supported platforms and release goals.",
    },
    {
      number: "02",
      title: "Test Planning",
      desc: "Prepare test cases, device coverage and critical user journey checklists.",
    },
    {
      number: "03",
      title: "Test & Report",
      desc: "Execute tests, document reproducible bugs and prioritise issues by severity.",
    },
    {
      number: "04",
      title: "Release Readiness",
      desc: "Verify fixes and share findings to support an informed release decision.",
    },
  ];

  const platforms = [
    {
      icon: Apple,
      title: "Apple iOS",
      desc: "TestFlight builds, supported iPhone and iPad layouts, permissions and app behaviour.",
      points: ["iOS compatibility", "TestFlight workflow", "Interface validation"],
    },
    {
      icon: Smartphone,
      title: "Android",
      desc: "Android builds, screen variations, OS compatibility and Google Play readiness.",
      points: ["Android compatibility", "Screen-size checks", "Play Console preparation"],
    },
    {
      icon: Layers3,
      title: "Cross-Platform Apps",
      desc: "Consistent user journeys and interface behaviour across supported platforms.",
      points: ["Shared user journeys", "API integration checks", "Regression coverage"],
    },
  ];

  const deliverables = [
    "Functional and regression test results",
    "Documented bugs with reproduction steps",
    "Device and platform compatibility findings",
    "Performance and usability observations",
    "Store submission readiness checklist",
    "Final QA summary and recommended next steps",
  ];

  const faqs = [
    {
      q: "When should we start mobile app QA?",
      a: "Ideally, begin QA when a stable test build is available. Early testing helps identify issues before the final release deadline.",
    },
    {
      q: "Can you help with App Store rejection issues?",
      a: "A QA review can help identify common technical, usability and policy-related concerns. Final approval remains with Apple or Google.",
    },
    {
      q: "Do you test both iOS and Android apps?",
      a: "Yes. Testing scope can cover iOS, Android or cross-platform apps depending on your build, supported devices and project requirements.",
    },
    {
      q: "What will we receive after testing?",
      a: "You can receive documented findings, reproducible bug reports, regression results and a release-readiness summary based on the agreed scope.",
    },
  ];

  return (
    <main className="relative w-full overflow-hidden bg-[#FBFDFD] pt-28 sm:pt-36 pb-0 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-0 h-[480px] w-[1000px] -translate-x-1/2 rounded-full opacity-40 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,168,204,0.16), rgba(0,70,88,0.08), transparent 72%)",
        }}
      />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-[#004658]/10 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#004658]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#00A8CC]" />
          <Rocket size={16} />
          App Store Launch & Mobile QA
        </div>

        <h1 className="mx-auto mb-6 max-w-5xl font-['Outfit',sans-serif] text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Flawless Mobile Launches with{" "}
          <span className="bg-gradient-to-r from-[#004658] via-[#005A72] to-[#00A8CC] bg-clip-text text-transparent">
            Rigorous Pre-Release QA
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Validate functionality, performance and compatibility before
          your app reaches users. Prepare your mobile product for a
          confident, well-tested launch.
        </p>

        <div className="mb-16 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/schedule-consultation"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#004658] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#004658]/15 transition hover:-translate-y-0.5 hover:bg-[#003844]"
          >
            Discuss Your App <ArrowRight size={17} />
          </Link>

          <a
            href="#qa-services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#004658]/20 bg-white px-7 py-4 text-sm font-bold text-[#004658] transition hover:border-[#00A8CC] hover:bg-[#004658]/5"
          >
            Explore QA Services
          </a>
        </div>

        {/* Existing launch steps */}
        <div className="grid grid-cols-1 gap-5 text-left md:grid-cols-2">
          {steps.map((item, idx) => (
            <article
              key={item.title}
              className="group rounded-3xl border border-[#004658]/15 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/50 hover:shadow-xl hover:shadow-[#004658]/5 sm:p-8"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.2em] text-[#00A8CC]">
                  0{idx + 1}
                </span>
                <ArrowRight
                  size={19}
                  className="text-[#004658]/50 transition group-hover:translate-x-1 group-hover:text-[#00A8CC]"
                />
              </div>
              <h3 className="mb-3 font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="qa-services" className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 sm:py-28">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0085A0]">
            What We Test
          </span>
          <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Quality Checks for Every Release
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Find issues early, protect critical user journeys and deliver
            a consistent mobile experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-[#004658]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-xl hover:shadow-[#004658]/5"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658] transition group-hover:bg-[#004658] group-hover:text-white">
                  <Icon size={23} strokeWidth={1.8} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0085A0]">
                  {service.tag}
                </span>
                <h3 className="mb-3 mt-2 font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">
                  {service.desc}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-[#004658]/10 bg-[#F0F7F8] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0085A0]">
              Our Approach
            </span>
            <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-5xl">
              A Clear Path to Launch
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A structured QA workflow designed to make testing findings
              clear, actionable and easier to prioritise.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, idx) => (
              <article
                key={item.number}
                className="relative rounded-3xl border border-[#004658]/10 bg-white p-7 shadow-sm"
              >
                <span className="font-['Outfit',sans-serif] text-4xl font-extrabold text-[#00A8CC]/50">
                  {item.number}
                </span>
                <div className="my-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#004658] to-[#00A8CC]" />
                <h3 className="mb-3 font-['Outfit',sans-serif] text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
                {idx !== process.length - 1 && (
                  <ArrowRight className="absolute right-5 top-8 hidden text-[#004658]/20 lg:block" size={20} />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform coverage */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 sm:py-28">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0085A0]">
              Platform Coverage
            </span>
            <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Test Across the Devices Your Users Actually Use
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Define testing coverage around your target audience,
              supported OS versions, device sizes and business-critical
              app journeys.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Device and OS compatibility checks",
                "Critical journey and API validation",
                "Layout, permissions and usability review",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#0085A0]" size={20} />
                  <span className="text-sm leading-6 text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {platforms.map((platform, idx) => {
              const Icon = platform.icon;
              return (
                <article
                  key={platform.title}
                  className={`rounded-3xl border border-[#004658]/10 bg-white p-7 shadow-sm transition hover:shadow-lg ${
                    idx === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-3 font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                    {platform.title}
                  </h3>
                  <p className="mb-5 text-sm leading-7 text-slate-600">
                    {platform.desc}
                  </p>
                  <ul className="space-y-2">
                    {platform.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="shrink-0 text-[#0085A0]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-[#003B49] py-24 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#72D8E9]">
              Clear Outcomes
            </span>
            <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight sm:text-5xl">
              Know What Is Ready—and What Needs Attention
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-slate-200">
              Receive organised findings that help your team prioritise
              fixes, validate improvements and make better release decisions.
            </p>
            <Link
              to="/schedule-consultation"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#004658] transition hover:bg-[#E7F7FA]"
            >
              Discuss Your QA Scope <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00A8CC]/20 text-[#72D8E9]">
                <FileCheck2 size={23} />
              </div>
              <div>
                <h3 className="font-['Outfit',sans-serif] text-xl font-bold">
                  QA Deliverables
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Based on your agreed testing scope
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#72D8E9]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-28">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0085A0]">
            FAQs
          </span>
          <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-5xl">
            Common Questions
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Helpful details before planning your next mobile app release.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <article
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-[#004658]/15 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#004658] transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6">
                    {faq.a}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#004658] px-6 py-12 text-center text-white shadow-xl shadow-[#004658]/15 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#00A8CC]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#00A8CC]/15 blur-3xl" />

          <div className="relative">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <Zap size={27} className="text-[#72D8E9]" />
            </div>
            <h2 className="font-['Outfit',sans-serif] text-2xl font-extrabold sm:text-4xl">
              Preparing for an App Store Release?
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              Let our mobile QA team review your release plan and help
              identify potential issues before submission.
            </p>
            <Link
              to="/schedule-consultation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#004658] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#E7F7FA] sm:text-base"
            >
              Schedule Pre-Launch QA Session <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppStoreLaunchQa;
