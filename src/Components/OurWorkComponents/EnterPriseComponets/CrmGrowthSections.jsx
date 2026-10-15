
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BellRing,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  ClipboardList,
  Code2,
  Database,
  GitBranch,
  LockKeyhole,
  Mail,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const 
CrmGrowthSections = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeStage, setActiveStage] = useState("Proposal");

  const pipelineStages = [
    {
      name: "New Leads",
      count: "12",
      amount: "$24,000",
      color: "bg-sky-500",
      deals: [
        { name: "Northstar Labs", detail: "Website Development", value: "$8,000" },
        { name: "Vertex Systems", detail: "CRM Implementation", value: "$6,000" },
      ],
    },
    {
      name: "Qualified",
      count: "08",
      amount: "$36,000",
      color: "bg-cyan-500",
      deals: [
        { name: "BluePeak Group", detail: "Enterprise Software", value: "$18,000" },
        { name: "Nova Commerce", detail: "E-commerce Platform", value: "$12,000" },
      ],
    },
    {
      name: "Proposal",
      count: "05",
      amount: "$52,000",
      color: "bg-amber-500",
      deals: [
        { name: "Apex Logistics", detail: "Custom CRM", value: "$32,000" },
        { name: "Orbit Digital", detail: "Business Automation", value: "$20,000" },
      ],
    },
    {
      name: "Won Deals",
      count: "03",
      amount: "$28,000",
      color: "bg-emerald-500",
      deals: [
        { name: "Summit Retail", detail: "Sales Management", value: "$16,000" },
        { name: "Crest Solutions", detail: "Client Portal", value: "$12,000" },
      ],
    },
  ];

  const automationFeatures = [
    {
      icon: Users,
      title: "Automatic Lead Assignment",
      desc: "Route incoming leads to the right team members based on your business rules.",
    },
    {
      icon: BellRing,
      title: "Follow-Up Reminders",
      desc: "Create timely reminders for calls, meetings, pending proposals and overdue tasks.",
    },
    {
      icon: RefreshCw,
      title: "Status-Based Workflows",
      desc: "Trigger the next action when a lead changes stage or a deal reaches a milestone.",
    },
    {
      icon: CalendarCheck,
      title: "Task & Meeting Scheduling",
      desc: "Organize activities, deadlines and customer meetings in one consistent workflow.",
    },
  ];

  const integrations = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      desc: "Connect customer conversations and follow-up workflows using supported integrations.",
      tag: "Messaging",
    },
    {
      icon: Mail,
      title: "Email Systems",
      desc: "Coordinate customer communication, proposal updates and email activity.",
      tag: "Communication",
    },
    {
      icon: CalendarCheck,
      title: "Calendar Tools",
      desc: "Connect meeting schedules, reminders and sales activities.",
      tag: "Scheduling",
    },
    {
      icon: Code2,
      title: "Custom APIs",
      desc: "Connect your CRM with existing business applications and data services.",
      tag: "Connectivity",
    },
  ];

  const securityFeatures = [
    "Role-based permissions for different user types",
    "Controlled access to customer and sales records",
    "Secure authentication and session management",
    "Activity logging where configured",
    "Data backup and recovery planning",
    "Integration access controls and secret management",
  ];

  const developmentSteps = [
    {
      num: "01",
      title: "Discovery & Planning",
      desc: "Understand your sales process, team structure, reporting needs and existing tools.",
    },
    {
      num: "02",
      title: "Workflow & UI Design",
      desc: "Plan CRM screens, pipeline stages, user permissions and everyday workflows.",
    },
    {
      num: "03",
      title: "Development & Integration",
      desc: "Build the required modules, APIs, automation rules and system integrations.",
    },
    {
      num: "04",
      title: "Testing & Deployment",
      desc: "Validate workflows, test access permissions and prepare the system for launch.",
    },
  ];

  const faqs = [
    {
      q: "What is custom CRM software?",
      a: "Custom CRM software is designed around your company's customer management, lead tracking, sales pipeline, reporting and follow-up requirements instead of relying entirely on a generic solution.",
    },
    {
      q: "Can a CRM be customized for our sales process?",
      a: "Yes. Depending on your requirements, a CRM can include custom pipeline stages, lead fields, dashboards, permissions, task workflows and business-specific reports.",
    },
    {
      q: "Can you integrate WhatsApp and email?",
      a: "Integrations may be implemented through supported APIs and providers. Available features depend on the provider, account permissions and the integration scope.",
    },
    {
      q: "Can we migrate data from our existing CRM?",
      a: "Data migration can be planned for supported formats and systems. The process usually includes field mapping, data cleanup, validation and testing before switching over.",
    },
    {
      q: "How long does custom CRM development take?",
      a: "The timeline depends on the number of modules, complexity of workflows, integrations, data migration and testing requirements. A clear estimate can be provided after discovery.",
    },
    {
      q: "Is custom CRM software secure?",
      a: "Security depends on implementation and ongoing maintenance. Appropriate controls can include authentication, role-based access, secure API handling, backups, monitoring and regular updates.",
    },
    {
      q: "Can the CRM grow with our business?",
      a: "Yes. The architecture can be planned to accommodate additional users, modules, integrations and reporting needs as your business evolves.",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#FBFDFD] font-['Plus_Jakarta_Sans',sans-serif] text-slate-800">

      {/* 1. SALES PIPELINE */}
      <section
        id="crm-pipeline"
        className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-[#004658]/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658] sm:text-sm">
              <GitBranch size={16} />
              Sales Pipeline Management
            </span>

            <h2 className="mt-5 font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Every Lead Has a Next Step
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Organize opportunities, understand deal progress and help
              your sales team focus on the right conversations at the
              right stage.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#004658]/15 bg-[#0B1728] p-4 shadow-xl shadow-[#004658]/10 sm:p-7">
            <div className="mb-6 flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4EF0C5]">
                  CRM WORKSPACE
                </p>
                <h3 className="mt-2 font-['Outfit',sans-serif] text-xl font-bold text-white sm:text-2xl">
                  Sales Pipeline Overview
                </h3>
              </div>

              <div className="flex items-center gap-2 self-start rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-[#4EF0C5]" />
                Interactive Preview
              </div>
            </div>

            <div className="mb-5 flex gap-2 overflow-x-auto pb-2">
              {pipelineStages.map((stage) => (
                <button
                  type="button"
                  key={stage.name}
                  onClick={() => setActiveStage(stage.name)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                    activeStage === stage.name
                      ? "border-[#4EF0C5] bg-[#4EF0C5]/10 text-[#4EF0C5]"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/30"
                  }`}
                >
                  {stage.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {pipelineStages.map((stage) => (
                <div
                  key={stage.name}
                  className={`min-w-0 rounded-2xl border p-4 transition ${
                    activeStage === stage.name
                      ? "border-[#4EF0C5]/50 bg-white/[0.08]"
                      : "border-white/10 bg-white/[0.035]"
                  }`}
                >
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${stage.color}`} />
                      <h4 className="text-sm font-bold text-white">
                        {stage.name}
                      </h4>
                    </div>
                    <span className="text-xs text-slate-400">
                      {stage.count}
                    </span>
                  </div>

                  <p className="mb-4 font-['Outfit',sans-serif] text-xl font-bold text-[#4EF0C5]">
                    {stage.amount}
                  </p>

                  <div className="space-y-3">
                    {stage.deals.map((deal) => (
                      <div
                        key={deal.name}
                        className="rounded-xl border border-white/10 bg-[#07111F] p-3"
                      >
                        <p className="text-xs font-bold text-white">
                          {deal.name}
                        </p>
                        <p className="mt-1 text-[11px] leading-5 text-slate-400">
                          {deal.detail}
                        </p>
                        <p className="mt-3 text-xs font-semibold text-[#4EF0C5]">
                          {deal.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Illustrative sample data for the interface. These cards
              do not represent a connected or live CRM.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ANALYTICS */}
      <section
        id="crm-analytics"
        className="border-y border-[#004658]/10 bg-[#F0F7F8] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0085A0] sm:text-sm">
                Sales Intelligence
              </span>

              <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
                Turn Sales Activity into Actionable Insights
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                Bring sales activity, pipeline progress and follow-up
                performance into a unified reporting experience.
                Give managers better visibility into the sales process.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Pipeline visibility across deal stages",
                  "Lead conversion and follow-up reporting",
                  "Team activity and workload summaries",
                  "Custom reports based on business requirements",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#0085A0]"
                    />
                    <p className="text-sm leading-6 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#004658]/10 bg-white p-5 shadow-xl shadow-[#004658]/5 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-950">
                    Sales Analytics
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Example reporting dashboard
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#004658]/10 text-[#004658]">
                  <BarChart3 size={23} />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Open Opportunities",
                    value: "128",
                    icon: Target,
                  },
                  {
                    label: "Pending Follow-ups",
                    value: "24",
                    icon: CalendarCheck,
                  },
                  {
                    label: "Active Sales Reps",
                    value: "16",
                    icon: Users,
                  },
                  {
                    label: "Pipeline Value",
                    value: "$84.2k",
                    icon: CircleDollarSign,
                  },
                ].map((metric) => {
                  const Icon = metric.icon;

                  return (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-[#004658]/10 bg-[#FBFDFD] p-4 sm:p-5"
                    >
                      <Icon size={20} className="text-[#0085A0]" />
                      <p className="mt-4 break-words font-['Outfit',sans-serif] text-2xl font-extrabold text-slate-950">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {metric.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl bg-[#004658] p-5 text-white">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">
                      Sales Activity
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      Illustrative weekly overview
                    </p>
                  </div>
                  <TrendingUp size={22} className="text-[#4EF0C5]" />
                </div>

                <div className="mt-6 flex h-24 items-end gap-3">
                  {[35, 55, 42, 75, 60, 88, 70].map((height, index) => (
                    <div
                      key={index}
                      className="flex flex-1 items-end"
                      style={{ height: "100%" }}
                    >
                      <div
                        className="w-full rounded-t-md bg-gradient-to-t from-[#0085A0] to-[#4EF0C5]"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex justify-between text-[10px] text-slate-300">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => <span key={day}>{day}</span>
                  )}
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Sample dashboard values only. Connect your CRM data
                source to display actual metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AUTOMATION */}
      <section
        id="crm-automation"
        className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-[#004658]/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658]">
              <Zap size={15} />
              Workflow Automation
            </span>

            <h2 className="mt-5 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-5xl">
              Spend Less Time on Repetitive Sales Tasks
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              Design repeatable workflows that help your team respond
              faster, stay organized and maintain consistent follow-ups.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {automationFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-[#004658]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-xl hover:shadow-[#004658]/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658] transition group-hover:bg-[#004658] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 font-['Outfit',sans-serif] text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#0085A0]">
                    <Workflow size={15} />
                    Configurable workflow
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-3xl border border-[#004658]/10 bg-[#F0F7F8] p-6 sm:p-8">
            <div className="mb-7 text-center">
              <h3 className="font-['Outfit',sans-serif] text-2xl font-bold text-slate-950">
                Example Automated Workflow
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A visual example of how a CRM process can be organized.
              </p>
            </div>

            <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "New Lead", desc: "Lead enters the CRM", icon: Users },
                { title: "Assign Owner", desc: "Route to a team member", icon: GitBranch },
                { title: "Create Reminder", desc: "Plan the next follow-up", icon: BellRing },
                { title: "Track Progress", desc: "Update the lead status", icon: CheckCircle2 },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <React.Fragment key={step.title}>
                    <div className="rounded-2xl border border-[#004658]/10 bg-white p-5 text-center">
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#004658]/10 text-[#004658]">
                        <Icon size={22} />
                      </div>
                      <h4 className="mt-4 font-bold text-slate-900">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {step.desc}
                      </p>
                    </div>
                    {index < 3 && (
                      <div className="hidden justify-center text-[#0085A0] lg:flex">
                        <ArrowRight size={21} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTEGRATIONS */}
      <section
        id="crm-integrations"
        className="border-y border-[#004658]/10 bg-[#F0F7F8] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0085A0] sm:text-sm">
                Connected Business Systems
              </span>

              <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
                Bring Your Business Tools Together
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                Plan a connected customer experience by linking your
                CRM with the communication, scheduling and business
                systems your team already uses.
              </p>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#004658]/10 bg-white p-4">
                <Database className="mt-0.5 shrink-0 text-[#0085A0]" size={21} />
                <p className="text-sm leading-6 text-slate-600">
                  Integration options depend on provider APIs, access
                  permissions, subscription plans and technical scope.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {integrations.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-[#004658]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658]">
                        <Icon size={23} />
                      </div>

                      <span className="rounded-full bg-[#004658]/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#004658]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 font-['Outfit',sans-serif] text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.desc}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#0085A0]">
                      Integration-ready
                      <ArrowUpRight size={15} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECURITY */}
      <section
        id="crm-security"
        className="bg-[#071525] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#4EF0C5]/20 bg-[#4EF0C5]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#4EF0C5]">
              <ShieldCheck size={16} />
              Security & Access
            </span>

            <h2 className="mt-5 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight sm:text-5xl">
              Give Every Team Member the Right Level of Access
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
              Build a CRM around your team's responsibilities with
              appropriate permissions, controlled access and security
              practices that support your business requirements.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { icon: LockKeyhole, label: "Access Control" },
                { icon: ShieldCheck, label: "Secure Authentication" },
                { icon: ClipboardList, label: "Activity Auditing" },
                { icon: Database, label: "Data Protection" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <Icon size={20} className="shrink-0 text-[#4EF0C5]" />
                    <span className="text-sm font-medium text-slate-200">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0D2033] p-6 sm:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4EF0C5]/10 text-[#4EF0C5]">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="font-['Outfit',sans-serif] text-xl font-bold">
                  Security Checklist
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Example implementation considerations
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {securityFeatures.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#4EF0C5]"
                  />
                  <p className="text-sm leading-6 text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs leading-6 text-slate-400">
                Security features must be implemented, configured and
                tested in the actual product. This section describes
                capabilities, not a claim of existing certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT PROCESS */}
      <section
        id="crm-development-process"
        className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0085A0] sm:text-sm">
              From Idea to Implementation
            </span>

            <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-5xl">
              A Clear Process for Building Your CRM
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              A structured approach helps align CRM functionality,
              team workflows, integrations and deployment requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {developmentSteps.map((step, index) => (
              <article
                key={step.num}
                className="relative rounded-3xl border border-[#004658]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-['Outfit',sans-serif] text-4xl font-extrabold text-[#004658]/20">
                    {step.num}
                  </span>

                  {index === 0 ? (
                    <Target className="text-[#0085A0]" size={23} />
                  ) : index === 1 ? (
                    <Workflow className="text-[#0085A0]" size={23} />
                  ) : index === 2 ? (
                    <Code2 className="text-[#0085A0]" size={23} />
                  ) : (
                    <CheckCircle2 className="text-[#0085A0]" size={23} />
                  )}
                </div>

                <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.desc}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#004658] to-[#00A8CC]" />
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#F0F7F8] p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-950 sm:text-2xl">
                Have a unique sales workflow?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Discuss your CRM requirements and identify the right modules.
              </p>
            </div>

            <Link
              to="/schedule-consultation"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#004658] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#003844]"
            >
              Discuss Your CRM <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section
        id="crm-faq"
        className="border-t border-[#004658]/10 bg-[#F0F7F8] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658]">
              <ClipboardList size={15} />
              CRM FAQs
            </span>

            <h2 className="mt-5 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Everything you need to know before planning your CRM project.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-[#004658]/10 bg-white transition hover:border-[#00A8CC]/40"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-semibold leading-6 text-slate-900">
                      {faq.q}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#004658] transition-transform duration-300 ${
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
        </div>
      </section>

    </div>
  );
};

export default CrmGrowthSections;
