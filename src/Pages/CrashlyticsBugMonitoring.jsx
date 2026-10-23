
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  AlertTriangle,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BellRing,
  Bug,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Code2,
  Cpu,
  Database,
  Fingerprint,
  Gauge,
  GitBranch,
  HeartPulse,
  Layers3,
  MonitorSmartphone,
  Radio,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Users,
  Zap,
} from "lucide-react";

const specs = [
  {
    icon: Activity,
    title: "Real-Time Crash Stack Trace Alerts",
    desc: "Get notified about production crashes with detailed stack traces to help your team identify and resolve issues faster.",
    tag: "Real-time alerts",
  },
  {
    icon: Smartphone,
    title: "ANR & Frozen Frame Monitoring",
    desc: "Track Android App Not Responding events and iOS frozen frames to identify performance bottlenecks.",
    tag: "App performance",
  },
  {
    icon: Fingerprint,
    title: "User Breadcrumb & Environment Logging",
    desc: "Capture relevant user actions, OS versions, device models, and app context leading up to a crash.",
    tag: "Context tracking",
  },
  {
    icon: Zap,
    title: "Automated Bug Triage & Hotfixes",
    desc: "Prioritize critical issues, streamline debugging, and support faster releases through your deployment workflow.",
    tag: "Faster resolution",
  },
];

const workflow = [
  {
    number: "01",
    icon: Radio,
    title: "Detect",
    desc: "Capture application crashes, exceptions, and performance issues.",
  },
  {
    number: "02",
    icon: Search,
    title: "Diagnose",
    desc: "Analyze stack traces, affected devices, and error context.",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Prioritize",
    desc: "Identify critical issues based on impact and frequency.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Resolve",
    desc: "Implement fixes, release updates, and verify stability.",
  },
];

const integrations = [
  {
    name: "Firebase Crashlytics",
    category: "Crash reporting",
    icon: Activity,
    color: "#F59E0B",
  },
  {
    name: "Sentry",
    category: "Error monitoring",
    icon: ShieldCheck,
    color: "#6C5CE7",
  },
  {
    name: "Slack",
    category: "Team notifications",
    icon: BellRing,
    color: "#159B76",
  },
  {
    name: "PagerDuty",
    category: "Incident alerts",
    icon: Radio,
    color: "#E34D59",
  },
];

const faqs = [
  {
    question: "What is Firebase Crashlytics?",
    answer:
      "Firebase Crashlytics is a crash reporting tool that helps developers identify, prioritize, and troubleshoot application crashes using detailed reports and stack traces.",
  },
  {
    question: "Can you monitor both Android and iOS apps?",
    answer:
      "Yes. We can help configure crash reporting and diagnostic workflows for supported Android and iOS applications, depending on your app architecture and SDK setup.",
  },
  {
    question: "Can we receive alerts when a critical crash occurs?",
    answer:
      "Yes. We can configure supported notification integrations and alert rules so your team can respond to important production issues quickly.",
  },
  {
    question: "Do you provide automatic bug fixes?",
    answer:
      "Monitoring tools identify and help diagnose problems; they do not automatically fix every bug. Our workflow can include investigation, code fixes, testing, and deployment support.",
  },
  {
    question: "How do we get started?",
    answer:
      "Schedule a consultation with our team. We will review your mobile application, existing monitoring setup, diagnostic requirements, and the most suitable implementation plan.",
  },
];

const dashboardMetrics = [
  {
    label: "Crash-free sessions",
    value: "99.92%",
    icon: ShieldCheck,
    note: "Illustrative metric",
    color: "#008C83",
  },
  {
    label: "Open issues",
    value: "24",
    icon: Bug,
    note: "Sample count",
    color: "#D97706",
  },
  {
    label: "Affected users",
    value: "156",
    icon: Users,
    note: "Sample count",
    color: "#1685A0",
  },
  {
    label: "ANR issues",
    value: "08",
    icon: Activity,
    note: "Sample count",
    color: "#7654BD",
  },
];

const chartData = {
  "7D": [72, 58, 65, 42, 48, 30, 35],
  "14D": [78, 68, 73, 60, 65, 49, 53, 41, 45, 32, 39, 27, 31, 20],
  "30D": [82, 73, 78, 65, 70, 59, 62, 52, 57, 43, 48, 39, 44, 33, 36],
};

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${
          light ? "text-cyan-300" : "text-[#008DA8]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function CrashDashboard() {
  const [range, setRange] = useState("7D");
  const data = chartData[range];

  const points = data
    .map((value, index) => {
      const x = 8 + (index * 284) / (data.length - 1);
      const y = 94 - value * 0.8;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPath = `M 8,100 L ${points} L 292,100 Z`;

  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visibility into every crash"
          title="Your App Health, At a Glance"
          description="Understand crash trends, identify recurring issues, and get a clearer view of application stability with a centralized monitoring dashboard."
        />

        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(0,70,88,0.09)]">
          <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#004658]/10 text-[#004658]">
                <HeartPulse size={23} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Mobile App Health
                </h3>
                <p className="text-xs text-slate-500">
                  Crash and stability overview
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {["7D", "14D", "30D"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setRange(item)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                    range === item
                      ? "bg-[#004658] text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-[#00A8CC] hover:text-[#004658]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 bg-[#F7FAFB] p-5 sm:grid-cols-2 sm:p-7 xl:grid-cols-4">
            {dashboardMetrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/50 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">
                      {metric.label}
                    </span>

                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${metric.color}14`,
                        color: metric.color,
                      }}
                    >
                      <Icon size={20} />
                    </span>
                  </div>

                  <p className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950">
                    {metric.value}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    {metric.note}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-6 p-5 sm:p-8 lg:grid-cols-[1.7fr_1fr]">
            <div className="rounded-2xl border border-slate-200 p-4 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h4 className="font-bold text-slate-900">
                    Crash Activity Trend
                  </h4>
                  <p className="mt-1 text-xs text-slate-500">
                    Illustrative activity across the selected period
                  </p>
                </div>

                <span className="flex items-center gap-2 rounded-full bg-[#00A8CC]/10 px-3 py-1.5 text-xs font-semibold text-[#004658]">
                  <span className="h-2 w-2 rounded-full bg-[#00A8CC]" />
                  Crash activity
                </span>
              </div>

              <div className="mt-6">
                <svg
                  viewBox="0 0 300 115"
                  className="h-auto w-full overflow-visible"
                  role="img"
                  aria-label="Illustrative crash activity line chart"
                >
                  {[18, 40, 62, 84, 106].map((y) => (
                    <line
                      key={y}
                      x1="8"
                      y1={y}
                      x2="292"
                      y2={y}
                      stroke="#E2E8F0"
                      strokeDasharray="4 5"
                    />
                  ))}

                  <path d={areaPath} fill="#00A8CC" opacity="0.12" />

                  <polyline
                    points={points}
                    fill="none"
                    stroke="#008DA8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {data.map((value, index) => {
                    const x = 8 + (index * 284) / (data.length - 1);
                    const y = 94 - value * 0.8;

                    return (
                      <circle
                        key={`${range}-${index}`}
                        cx={x}
                        cy={y}
                        r="3.2"
                        fill="#008DA8"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    );
                  })}
                </svg>
              </div>

              <div className="mt-2 flex justify-between text-[11px] text-slate-400">
                <span>Start</span>
                <span>Middle</span>
                <span>Latest</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5 sm:p-6">
              <h4 className="font-bold text-slate-900">
                Monitoring Priorities
              </h4>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Example issue categories for your monitoring workflow.
              </p>

              <div className="mt-6 space-y-5">
                {[
                  {
                    label: "Fatal crashes",
                    percent: 78,
                    color: "#DC5555",
                  },
                  {
                    label: "ANR events",
                    percent: 48,
                    color: "#D99036",
                  },
                  {
                    label: "Handled exceptions",
                    percent: 34,
                    color: "#1685A0",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between gap-3 text-sm">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-bold text-slate-800">
                        {item.percent}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.percent}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-800">
                Example visualization only. Connect real reporting data before
                using these values for operational decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MonitoringWorkflow() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our monitoring process"
          title="From Crash Detection to Resolution"
          description="A structured workflow that helps your engineering team investigate issues and improve application reliability."
        />

        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {workflow.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-[#00A8CC]/50 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#004658]/10 text-[#004658] transition group-hover:bg-[#004658] group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <span className="text-4xl font-black text-[#004658]/10">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008DA8]">
                  Step {index + 1}
                  {index < workflow.length - 1 && (
                    <ArrowRight size={14} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CrashReportSection() {
  return (
    <section className="overflow-hidden bg-[#F3F8FA] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#008DA8]">
            Deep diagnostics
          </p>

          <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Go Beyond the Error. Find the Root Cause.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Useful diagnostic information helps developers understand what
            happened before a crash, which devices were affected, and where to
            begin debugging.
          </p>

          <div className="mt-8 space-y-5">
            {[
              {
                icon: Code2,
                title: "Readable stack traces",
                desc: "Trace errors to relevant code locations when symbols and mapping files are configured.",
              },
              {
                icon: MonitorSmartphone,
                title: "Device and app context",
                desc: "Review operating system, device model, and app version details.",
              },
              {
                icon: Clock3,
                title: "Event history",
                desc: "Inspect available event breadcrumbs and diagnostic context around an issue.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#004658] shadow-sm">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[36px] bg-[#00A8CC]/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-[#101923] shadow-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#182632] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <span className="flex items-center gap-2 text-xs text-slate-300">
                <Terminal size={15} />
                crash-report.log
              </span>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-red-300">
                    Fatal exception
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                    NullPointerException
                  </h3>
                </div>

                <span className="rounded-lg border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-xs font-semibold text-red-300">
                  High severity
                </span>
              </div>

              <div className="mt-7 space-y-4 font-mono text-xs leading-6 sm:text-sm">
                <div className="flex gap-4">
                  <span className="select-none text-slate-600">01</span>
                  <span className="text-cyan-300">
                    FATAL EXCEPTION: main
                  </span>
                </div>

                <div className="flex gap-4">
                  <span className="select-none text-slate-600">02</span>
                  <span className="break-all text-slate-300">
                    java.lang.NullPointerException
                  </span>
                </div>

                <div className="flex gap-4">
                  <span className="select-none text-slate-600">03</span>
                  <span className="break-all text-amber-200">
                    at com.example.app.HomeActivity
                  </span>
                </div>

                <div className="flex gap-4">
                  <span className="select-none text-slate-600">04</span>
                  <span className="break-all text-slate-300">
                    at android.app.Activity.performCreate
                  </span>
                </div>

                <div className="flex gap-4">
                  <span className="select-none text-slate-600">05</span>
                  <span className="break-all text-slate-300">
                    at android.app.ActivityThread.handleLaunchActivity
                  </span>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-semibold text-slate-400">
                  DIAGNOSTIC CONTEXT
                </p>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Platform</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Android
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">App version</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      2.4.1
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-500">
                Illustrative diagnostic report. Actual fields and stack traces
                depend on the monitoring SDK and application configuration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StabilitySection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Business impact"
          title="Turn Error Data Into Better App Experiences"
          description="Use crash reporting and performance diagnostics to help your team make informed engineering decisions."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: Gauge,
              title: "Measure Stability",
              desc: "Track crash-free sessions, issue frequency, and affected users using your actual reporting data.",
            },
            {
              icon: Layers3,
              title: "Focus on Critical Bugs",
              desc: "Group recurring errors and prioritize issues that have the greatest impact on your users.",
            },
            {
              icon: Zap,
              title: "Improve Response Time",
              desc: "Build a repeatable workflow for investigating, fixing, and validating production issues.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-xl sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#004658]/10 text-[#004658] group-hover:bg-[#004658] group-hover:text-white transition">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl bg-[#004658] p-6 text-white sm:p-9">
          <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Continuous improvement
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Better visibility. Smarter fixes.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">
                Establish a baseline, monitor changes after releases, and
                measure improvements with real application telemetry.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                <ArrowDownRight className="text-cyan-300" size={24} />
                <p className="mt-3 font-bold">Crash trends</p>
                <p className="mt-1 text-xs text-slate-300">
                  Track over time
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                <ArrowUpRight className="text-cyan-300" size={24} />
                <p className="mt-3 font-bold">App stability</p>
                <p className="mt-1 text-xs text-slate-300">
                  Verify improvements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <section className="bg-[#F5F9FA] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Connected workflow"
          title="Monitoring Tools That Work Together"
          description="Choose suitable tools for crash reporting, issue investigation, and incident notifications based on your application requirements."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.name}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    color: tool.color,
                    backgroundColor: `${tool.color}14`,
                  }}
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {tool.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {tool.category}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#008DA8]">
                  Integration option
                  <ChevronRight size={15} />
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-slate-500">
          Integrations depend on account access, SDK support, plan limitations,
          and implementation requirements.
        </p>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#008DA8]">
            Frequently asked questions
          </p>

          <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Everything You Need to Know
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Learn how crash monitoring works, which platforms we support, and
            how to get started with your mobile application.
          </p>

          <Link
            to="/schedule-consultation"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#004658] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#00657B]"
          >
            Talk to Our Team
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-[#00A8CC]/40 bg-[#F5FAFB]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-bold leading-6 text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-[#004658] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6">
                    <p className="border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const CrashlyticsBugMonitoring = () => {
  return (
    <main className="relative w-full overflow-hidden bg-[#FBFDFD] pt-28 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 sm:pt-32">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[520px] w-[1000px] max-w-full -translate-x-1/2 rounded-full opacity-50 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(0,70,88,0.20) 0%, rgba(0,168,204,0.08) 50%, rgba(251,253,253,0) 80%)",
        }}
      />

      {/* 1. HERO */}
      <section className="relative z-10 px-4 pb-8 pt-12 text-center sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-[#004658]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#004658] sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#008DA8]" />
            <Search size={15} />
            Firebase Crashlytics & Bug Monitoring
          </div>

          <h1 className="mx-auto mb-6 max-w-5xl font-['Outfit',sans-serif] text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Maintain a 99.9% Crash-Free{" "}
            <span className="bg-gradient-to-r from-[#004658] via-[#006B82] to-[#00A8CC] bg-clip-text text-transparent">
              Mobile User Session Rate
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We help integrate Firebase Crashlytics and Sentry to monitor
            production mobile crashes, track ANRs, and diagnose bugs before
            they affect your users.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/schedule-consultation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#004658] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#004658]/15 transition hover:-translate-y-0.5 hover:bg-[#00657B]"
            >
              Schedule a Consultation
              <ArrowRight size={17} />
            </Link>

            <a
              href="#monitoring-features"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition hover:border-[#00A8CC] hover:text-[#004658]"
            >
              Explore Features
              <ChevronDown size={17} />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500 sm:text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#008DA8]" />
              Android & iOS
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#008DA8]" />
              Crash Diagnostics
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#008DA8]" />
              Issue Prioritization
            </span>
          </div>
        </div>
      </section>

      {/* 2. GRAPHICAL ANALYTICS DASHBOARD */}
      <CrashDashboard />

      {/* 3. MONITORING WORKFLOW */}
      <MonitoringWorkflow />

      {/* 4. ORIGINAL FEATURE CARDS, ENHANCED */}
      <section
        id="monitoring-features"
        className="bg-[#F5F9FA] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core capabilities"
            title="Complete Visibility Into Mobile App Issues"
            description="Monitor critical events, understand error context, and build a more reliable mobile application with a practical diagnostic workflow."
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {specs.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-[#004658]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-xl sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#004658]/10 text-[#004658] transition group-hover:bg-[#004658] group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <span className="rounded-full bg-[#F0F7F9] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#004658] sm:text-xs">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-['Outfit',sans-serif] text-xl font-bold text-slate-950 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008DA8]">
                    Monitoring capability
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CRASH REPORT VISUALIZATION */}
      <CrashReportSection />

      {/* 6. STABILITY & BENEFITS */}
      <StabilitySection />

      {/* 7. TOOLS & INTEGRATIONS */}
      <IntegrationsSection />

      {/* 8. FAQ ACCORDION */}
      <FAQSection />

      {/* 9. FINAL CTA */}
      <section className="bg-white px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#004658] px-6 py-14 text-center shadow-[0_25px_60px_rgba(0,70,88,0.18)] sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 -left-16 h-80 w-80 rounded-full border border-white/10"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-300">
              <Sparkles size={27} />
            </div>

            <h2 className="mt-6 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Experiencing Production App Crashes?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              Let our team help configure crash reporting, improve diagnostic
              visibility, and establish a monitoring workflow tailored to your
              mobile application.
            </p>

            <Link
              to="/schedule-consultation"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#004658] shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-50 sm:px-9 sm:text-base"
            >
              Schedule Crashlytics Setup
              <ArrowRight size={17} />
            </Link>

            <p className="mt-5 text-xs text-slate-300">
              Start with a review of your existing app monitoring setup.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CrashlyticsBugMonitoring;
