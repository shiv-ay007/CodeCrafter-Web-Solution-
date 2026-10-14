
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Bug,
  Activity,
  Zap,
  Clock3,
  Smartphone,
  Server,
  CreditCard,
  RefreshCw,
  Search,
  Wrench,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  FileCheck,
  Headphones,
  Layers3,
  BellRing,
  ChartNoAxesCombined,
} from "lucide-react";

const MobileSlaSupport = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const slas = [
    {
      priority: "P1 - Critical Outage",
      level: "Critical",
      response: "< 15 Minutes",
      resolution: "< 2 Hours",
      desc: "Production app crash blocking critical user journeys or payments.",
    },
    {
      priority: "P2 - High Priority",
      level: "High",
      response: "< 1 Hour",
      resolution: "< 6 Hours",
      desc: "Major feature degradation affecting a subset of mobile users.",
    },
    {
      priority: "P3 - Normal Ticket",
      level: "Normal",
      response: "< 4 Hours",
      resolution: "< 24 Hours",
      desc: "Minor UI issues or non-critical feature adjustments.",
    },
  ];

  const coverage = [
    {
      icon: Smartphone,
      title: "Mobile App Crashes",
      desc: "Investigate startup failures, unexpected crashes and critical user-flow interruptions.",
    },
    {
      icon: Server,
      title: "API & Backend Issues",
      desc: "Troubleshoot API errors, connectivity failures and integration-related disruptions.",
    },
    {
      icon: CreditCard,
      title: "Payment Flow Support",
      desc: "Investigate checkout failures, payment callback issues and transaction-flow problems.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Access",
      desc: "Review authentication failures, session issues and suspicious application behaviour.",
    },
    {
      icon: Activity,
      title: "Performance Issues",
      desc: "Investigate slow screens, excessive resource usage and degraded app responsiveness.",
    },
    {
      icon: RefreshCw,
      title: "OS & Release Compatibility",
      desc: "Assess compatibility issues after supported OS updates and application releases.",
    },
  ];

  const incidentSteps = [
    {
      num: "01",
      icon: BellRing,
      title: "Report the Incident",
      desc: "Share the issue, affected users, app version and available error details.",
    },
    {
      num: "02",
      icon: Search,
      title: "Assess & Investigate",
      desc: "Determine severity, reproduce the issue and identify the likely cause.",
    },
    {
      num: "03",
      icon: Wrench,
      title: "Resolve & Verify",
      desc: "Implement an appropriate fix or mitigation and verify the affected flow.",
    },
    {
      num: "04",
      icon: FileCheck,
      title: "Report & Close",
      desc: "Document the outcome, relevant findings and recommended preventive actions.",
    },
  ];

  const maintenance = [
    {
      icon: ChartNoAxesCombined,
      title: "Crash & Performance Reviews",
      desc: "Review available crash analytics, error trends and performance indicators.",
    },
    {
      icon: RefreshCw,
      title: "Dependency & OS Updates",
      desc: "Assess relevant dependency updates and compatibility changes before deployment.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability Checks",
      desc: "Review critical user journeys, error handling and application stability.",
    },
    {
      icon: ClipboardIcon,
      title: "Release Health Reports",
      desc: "Summarise incidents, completed work, recurring issues and improvement areas.",
    },
  ];

  const plans = [
    {
      name: "Essential",
      subtitle: "For small applications",
      description:
        "A practical foundation for ongoing maintenance and non-critical issue support.",
      features: [
        "Business-hours support",
        "Bug investigation",
        "Routine maintenance",
        "Periodic status summary",
      ],
    },
    {
      name: "Business",
      subtitle: "For growing products",
      description:
        "Priority incident handling and proactive reliability reviews for active apps.",
      features: [
        "Priority incident triage",
        "Crash and performance reviews",
        "Regression testing support",
        "Scheduled maintenance reviews",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      subtitle: "For critical applications",
      description:
        "A tailored support arrangement with agreed escalation and coverage requirements.",
      features: [
        "Custom support coverage",
        "Defined escalation process",
        "Incident and RCA reporting",
        "Agreed response commitments",
      ],
    },
  ];

  const deliverables = [
    "Incident tracking and status updates",
    "Documented investigation findings",
    "Fix verification and regression results",
    "Root-cause analysis where applicable",
    "Maintenance and reliability summaries",
    "Recommended preventive improvements",
  ];

  const faqs = [
    {
      q: "What does 24/7 mobile SLA support mean?",
      a: "It means support coverage is available around the clock according to the agreed service contract. Exact coverage, escalation channels and response commitments should be confirmed before onboarding.",
    },
    {
      q: "What is the difference between response and resolution time?",
      a: "Response time is the time taken to acknowledge or begin handling a reported incident. Resolution time is the target for restoring service or resolving the issue; complex incidents may require a workaround or a separately agreed timeline.",
    },
    {
      q: "Do you support both iOS and Android apps?",
      a: "Support can cover iOS, Android and cross-platform applications depending on your technology stack, access arrangements and agreed scope.",
    },
    {
      q: "Can you fix critical production issues?",
      a: "The team can investigate critical issues, identify mitigation options and work towards a fix. Resolution depends on the root cause, system access, third-party dependencies and incident complexity.",
    },
    {
      q: "Do you provide root-cause analysis?",
      a: "Root-cause analysis can be included in the agreed support scope, particularly for major incidents. It documents the cause, impact, corrective actions and ways to reduce recurrence.",
    },
    {
      q: "Can we customise the SLA?",
      a: "Yes. Coverage hours, supported platforms, severity definitions, escalation procedures and response targets can be discussed and documented for your project.",
    },
  ];

  return (
    <main className="relative w-full overflow-hidden bg-[#FBFDFD] pt-28 pb-0 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 sm:pt-36">

      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[560px] w-[1000px] -translate-x-1/2 rounded-full opacity-40 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(0,70,88,0.20), rgba(0,168,204,0.08) 50%, transparent 80%)",
        }}
      />

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-[#004658]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#004658] sm:text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#00A8CC]" />
          <ShieldCheck size={16} />
          24/7 Enterprise Mobile SLA Support
        </div>

        <h1 className="mx-auto mb-6 max-w-5xl font-['Outfit',sans-serif] text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Reliable 24/7 Mobile SLA &{" "}
          <span className="bg-gradient-to-r from-[#004658] via-[#005A72] to-[#00A8CC] bg-clip-text text-transparent">
            Emergency Engineering Support
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-base leading-8 text-slate-600 sm:text-xl">
          Keep your mobile application dependable with incident
          response, production troubleshooting, ongoing maintenance
          and proactive reliability improvements.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/schedule-consultation"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#004658] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#004658]/15 transition hover:-translate-y-0.5 hover:bg-[#003844]"
          >
            Discuss Your SLA <ArrowRight size={17} />
          </Link>

          <a
            href="#sla-coverage"
            className="inline-flex items-center justify-center rounded-full border border-[#004658]/20 bg-white px-7 py-4 text-sm font-bold text-[#004658] transition hover:bg-[#004658]/5"
          >
            Explore Support
          </a>
        </div>

        {/* SLA TABLE */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-[#004658]/15 bg-white text-left shadow-xl shadow-[#004658]/5">
          <div className="border-b border-[#004658]/10 px-6 py-5 sm:px-8">
            <h2 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-950 sm:text-2xl">
              Incident Response Targets
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Example severity levels and service targets for an agreed SLA.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="bg-[#004658] text-xs uppercase tracking-wider text-white sm:text-sm">
                  <th className="px-6 py-4 font-bold">Severity Level</th>
                  <th className="px-6 py-4 font-bold text-[#4EF0C5]">Response SLA</th>
                  <th className="px-6 py-4 font-bold text-slate-200">Target Resolution</th>
                  <th className="px-6 py-4 font-bold">Scope Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {slas.map((sla) => (
                  <tr
                    key={sla.level}
                    className="transition-colors hover:bg-[#F0F7F8]"
                  >
                    <td className="px-6 py-5 font-bold text-slate-900">
                      {sla.priority}
                    </td>
                    <td className="px-6 py-5 font-bold text-[#004658]">
                      {sla.response}
                    </td>
                    <td className="px-6 py-5 font-semibold text-slate-700">
                      {sla.resolution}
                    </td>
                    <td className="px-6 py-5 leading-6 text-slate-600">
                      {sla.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="border-t border-[#004658]/10 bg-slate-50 px-6 py-4 text-xs leading-6 text-slate-500 sm:px-8">
            Response and resolution figures are illustrative targets.
            Actual commitments, coverage hours and exclusions must be
            defined in the signed SLA.
          </p>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section
        id="sla-coverage"
        className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0085A0]">
            Support Coverage
          </span>
          <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-5xl">
            Support for Your Most Critical App Issues
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            From production errors to compatibility concerns, get a
            structured approach to investigating and addressing mobile
            application issues.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coverage.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-[#004658]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-xl hover:shadow-[#004658]/5"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658] transition group-hover:bg-[#004658] group-hover:text-white">
                  <Icon size={23} strokeWidth={1.8} />
                </div>
                <h3 className="mb-3 font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* INCIDENT RESPONSE WORKFLOW */}
      <section className="border-y border-[#004658]/10 bg-[#F0F7F8] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0085A0]">
              Incident Management
            </span>
            <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-5xl">
              From Incident to Resolution
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A clear workflow helps your team understand what happens
              when an issue is reported and how progress is communicated.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {incidentSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.num}
                  className="rounded-3xl border border-[#004658]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-['Outfit',sans-serif] text-4xl font-extrabold text-[#00A8CC]/50">
                      {step.num}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#004658]/[0.07] text-[#004658]">
                      <Icon size={22} />
                    </div>
                  </div>
                  <div className="my-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#004658] to-[#00A8CC]" />
                  <h3 className="mb-3 font-['Outfit',sans-serif] text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    {step.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROACTIVE MAINTENANCE */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0085A0]">
              Proactive Maintenance
            </span>
            <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Find Potential Issues Before They Escalate
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Incident response is only one part of reliable mobile
              operations. Regular reviews can help identify recurring
              errors, compatibility risks and opportunities to improve
              stability.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Review crash and error trends",
                "Assess supported OS and dependency updates",
                "Validate critical application journeys",
                "Document recurring issues and improvements",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#0085A0]"
                  />
                  <span className="text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {maintenance.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-[#004658]/10 bg-white p-6 shadow-sm transition hover:shadow-lg"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#004658]/[0.07] text-[#004658]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-3 font-['Outfit',sans-serif] text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUPPORT PLANS */}
      <section className="border-y border-[#004658]/10 bg-[#F0F7F8] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0085A0]">
              Support Plans
            </span>
            <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-5xl">
              Support That Fits Your Application
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Discuss the coverage, escalation process and maintenance
              scope that best match your operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                  plan.featured
                    ? "border-[#00A8CC] ring-1 ring-[#00A8CC]/30"
                    : "border-[#004658]/10"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-[#004658] px-4 py-1.5 text-xs font-bold text-white">
                    Popular Choice
                  </span>
                )}

                <h3 className="font-['Outfit',sans-serif] text-2xl font-bold text-slate-950">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#0085A0]">
                  {plan.subtitle}
                </p>
                <p className="mt-4 min-h-[72px] text-sm leading-7 text-slate-600">
                  {plan.description}
                </p>

                <div className="my-6 h-px bg-[#004658]/10" />

                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#0085A0]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/schedule-consultation"
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition ${
                    plan.featured
                      ? "bg-[#004658] text-white hover:bg-[#003844]"
                      : "border border-[#004658]/20 text-[#004658] hover:bg-[#004658]/5"
                  }`}
                >
                  Discuss This Plan <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs leading-6 text-slate-500">
            Plans are illustrative service tiers, not active subscriptions.
            Final coverage and pricing are agreed during consultation.
          </p>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0085A0]">
              Reporting & Outcomes
            </span>
            <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Clear Updates. Actionable Findings.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Keep stakeholders informed with documented investigation
              results, remediation progress and practical recommendations
              based on your agreed support scope.
            </p>

            <Link
              to="/schedule-consultation"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#004658] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#003844]"
            >
              Discuss Reporting Needs <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-3xl border border-[#004658]/15 bg-white p-6 shadow-lg shadow-[#004658]/5 sm:p-9">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/10 text-[#004658]">
                <ClipboardIcon size={24} />
              </div>
              <div>
                <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                  Support Deliverables
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Based on the agreed engagement
                </p>
              </div>
            </div>

            <ul className="space-y-5">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#0085A0]"
                  />
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
            Mobile SLA Questions
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Understand the support process and service commitments.
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
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#004658] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
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

      {/* FINAL CTA */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#004658] px-6 py-12 text-center text-white shadow-xl shadow-[#004658]/15 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#00A8CC]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#00A8CC]/15 blur-3xl" />

          <div className="relative">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <Headphones size={27} className="text-[#72D8E9]" />
            </div>

            <h2 className="font-['Outfit',sans-serif] text-2xl font-extrabold sm:text-4xl">
              Protect Your Mobile App with Reliable Support
            </h2>

            <p className="mx-auto mb-8 mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              Let's discuss your application's critical workflows,
              support coverage and incident response requirements.
            </p>

            <Link
              to="/schedule-consultation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#004658] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#E7F7FA] sm:text-base"
            >
              Schedule SLA Support Call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

// Small icon alias used by the maintenance and deliverables sections.
const ClipboardIcon = ClipboardCheckIcon;

function ClipboardCheckIcon(props) {
  return <FileCheck {...props} />;
}

export default MobileSlaSupport;
