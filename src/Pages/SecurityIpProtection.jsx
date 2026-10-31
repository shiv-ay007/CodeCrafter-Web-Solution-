
import React from "react";
import { Link } from "react-router-dom";
import {
  FileCheck,
  Handshake,
  Vault,
  Globe,
  ShieldCheck,
  LockKeyhole,
  Fingerprint,
  Server,
  Check,
  ArrowUpRight,
  Shield,
  KeyRound,
  ScanEye,
  FileKey,
} from "lucide-react";

const SecurityIpProtection = () => {
  const securityPillars = [
    {
      title: "100% Source Code & IP Transfer",
      icon: FileCheck,
      desc: "Upon final milestone delivery, 100% of the intellectual property, copyright, patent rights, and source code repository ownership is legally transferred to your organization.",
      details: [
        "Full Master Repo Transfer",
        "Zero Vendor Lock-in or Royalty Fees",
        "Custom Patent & Code Rights Assignment",
        "Complete Asset Handover Documents",
      ],
      number: "01",
    },
    {
      title: "Comprehensive Bilateral NDA",
      icon: Handshake,
      desc: "Before any project discussions, code reviews, or document exchanges take place, we sign an enforceable Non-Disclosure Agreement protecting your business ideas and trade secrets.",
      details: [
        "Pre-Discovery Execution",
        "Enforceable Non-Compete Clauses",
        "Confidential Trade Secret Protection",
        "Strict Employee & Partner Backing",
      ],
      number: "02",
    },
    {
      title: "Isolated Dedicated Workspaces",
      icon: Vault,
      desc: "Each client project runs in a strictly isolated environment with role-based access control (RBAC), branch protection, and encrypted developer workstations.",
      details: [
        "MFA Enforceable Access",
        "Granular Branch Permission Gates",
        "Encrypted Developer Workstations",
        "Audit Logs & Activity Tracking",
      ],
      number: "03",
    },
    {
      title: "GDPR & Data Privacy Compliance",
      icon: Globe,
      desc: "We adhere strictly to international privacy frameworks including GDPR, HIPAA, and CCPA, implementing privacy-by-design architecture across all data pipelines.",
      details: [
        "AES-256 Data Encryption at Rest",
        "TLS 1.3 Encrypted Transit",
        "Zero Unauthorized Telemetry",
        "Data Anonymization Protocols",
      ],
      number: "04",
    },
  ];

  const securitySpecs = [
    {
      category: "Data Encryption",
      detail:
        "AES-256 bit encryption for databases & storage; TLS 1.3 with strict HSTS for all web API traffic.",
      icon: LockKeyhole,
    },
    {
      category: "Identity & Access",
      detail:
        "Mandatory Multi-Factor Authentication (MFA), SSO integration, and fine-grained role-based permissions.",
      icon: Fingerprint,
    },
    {
      category: "Vulnerability Scanning",
      detail:
        "Continuous automated static & dynamic security scans (SAST/DAST) with Dependabot and Snyk integration.",
      icon: ScanEye,
    },
    {
      category: "Network Infrastructure",
      detail:
        "AWS/GCP VPC isolation, WAF firewalls, DDoS protection via Cloudflare Enterprise.",
      icon: Server,
    },
    {
      category: "Penetration Testing",
      detail:
        "Regular OWASP Top 10 security audits and vulnerability assessments conducted before major releases.",
      icon: ShieldCheck,
    },
  ];

  const processFlow = [
    {
      step: "01",
      name: "Mutual NDA Signed",
      text: "We sign a legal bilateral NDA before receiving any technical specs or credentials.",
      icon: FileCheck,
      color: "bg-cyan-100 text-cyan-800",
    },
    {
      step: "02",
      name: "Secure Workspace Setup",
      text: "Provisioning isolated git repositories, SSO access keys, and encrypted environments.",
      icon: Vault,
      color: "bg-violet-100 text-violet-800",
    },
    {
      step: "03",
      name: "Compliant Sprint Execution",
      text: "Developers write code under strict security linting rules and vulnerability checks.",
      icon: ShieldCheck,
      color: "bg-teal-100 text-teal-800",
    },
    {
      step: "04",
      name: "Security Audit Signoff",
      text: "Complete penetration testing and static vulnerability scan report delivered.",
      icon: ScanEye,
      color: "bg-blue-100 text-blue-800",
    },
    {
      step: "05",
      name: "Final IP Transfer",
      text: "Legal copyright & repository ownership master keys handed over to your team.",
      icon: KeyRound,
      color: "bg-emerald-100 text-emerald-800",
    },
  ];

  const protectionTimeline = [
    {
      number: "01",
      title: "Before Project Kick-off",
      label: "CONFIDENTIALITY",
      description:
        "Agree on confidentiality requirements and clarify how business information, technical documents, and credentials will be handled.",
      points: [
        "NDA where agreed",
        "Defined information-sharing rules",
      ],
      icon: FileCheck,
    },
    {
      number: "02",
      title: "During Development",
      label: "CONTROLLED ACCESS",
      description:
        "Organize project repositories and permissions so team members can access the resources required for their responsibilities.",
      points: [
        "Repository permissions",
        "Secure credential handling",
      ],
      icon: LockKeyhole,
    },
    {
      number: "03",
      title: "Before Release",
      label: "SECURITY REVIEW",
      description:
        "Review relevant code changes, dependencies, and configuration to identify issues within the agreed scope before release.",
      points: [
        "Code review",
        "Dependency and configuration checks",
      ],
      icon: ShieldCheck,
    },
    {
      number: "04",
      title: "At Project Handover",
      label: "OWNERSHIP & DOCUMENTATION",
      description:
        "Document agreed deliverables, repository access, and intellectual property transfer requirements for a clear handover.",
      points: [
        "Handover documentation",
        "Agreed ownership terms",
      ],
      icon: FileKey,
    },
  ];

  const stats = [
    { value: "100%", label: "IP Transfer", icon: FileCheck },
    { value: "Bilateral", label: "NDA Signed First", icon: Handshake },
    { value: "AES-256", label: "Data Encryption", icon: LockKeyhole },
    { value: "SOC2-Ready", label: "Operational Rigor", icon: ShieldCheck },
  ];

  return (
    <main className="w-full overflow-hidden bg-[#F5F8F8] text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* ==================================================
          01. HERO SECTION
      ================================================== */}

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#E3F1F3] via-[#DDF4F5] to-[#E6EEF5] pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">

        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-teal-300/20 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658] shadow-sm sm:text-sm">
            <Shield size={15} />
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
            Enterprise Security & Legal IP Guarantee
          </div>

          <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl font-['Outfit',sans-serif]">
            Complete IP Ownership &
            <span className="block bg-gradient-to-r from-[#004658] via-[#00748A] to-[#00A8CC] bg-clip-text text-transparent">
              Defense-In-Depth Security
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
            We protect your code, trade secrets, and customer data with legally
            binding non-disclosure agreements, SOC2-ready practices, and 100%
            intellectual property transfer.
          </p>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-white bg-white/85 p-4 shadow-[0_10px_30px_rgba(0,70,88,0.07)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6"
                >
                  <Icon
                    size={22}
                    className="mx-auto mb-3 text-[#00869B] transition-transform group-hover:scale-110"
                  />

                  <p className="text-xl font-extrabold text-[#004658] sm:text-2xl font-['Outfit',sans-serif]">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#004658]/60">
            <span className="h-px w-10 bg-[#004658]/30" />
            Your assets deserve protection
            <span className="h-px w-10 bg-[#004658]/30" />
          </div>

        </div>
      </section>


      {/* ==================================================
          02. IP & SECURITY COMMITMENTS
      ================================================== */}

      <section className="relative overflow-hidden bg-[#F1F0E9] py-16 sm:py-20 lg:py-24">

        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-amber-200/20 blur-[110px]" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-teal-200/25 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div className="max-w-2xl">
              <span className="mb-4 inline-flex rounded-full border border-[#004658]/15 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#004658]">
                Our Commitments
              </span>

              <h2 className="text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl font-['Outfit',sans-serif]">
                Our IP & Security
                <span className="block text-[#00748A]">
                  Commitments
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              Legal safeguards and architectural security controls built to
              safeguard enterprise assets.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">

            {securityPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.number}
                  className="group relative overflow-hidden rounded-[26px] border border-white bg-white/90 p-6 shadow-[0_12px_35px_rgba(0,50,65,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,50,65,0.12)] sm:p-8"
                >

                  <div className="relative z-10">

                    <div className="mb-6 flex items-center justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E0F0F1] to-[#EAF3F2] text-[#004658] transition-transform duration-300 group-hover:scale-110">
                        <Icon size={26} strokeWidth={1.8} />
                      </div>

                      <span className="rounded-full border border-[#004658]/10 bg-[#F2F7F6] px-3 py-1.5 text-[10px] font-bold tracking-widest text-[#004658]">
                        SECURITY {pillar.number}
                      </span>

                    </div>

                    <h3 className="mb-3 max-w-lg text-xl font-bold text-slate-900 sm:text-2xl font-['Outfit',sans-serif]">
                      {pillar.title}
                    </h3>

                    <p className="mb-7 text-sm leading-7 text-slate-600 sm:text-base">
                      {pillar.desc}
                    </p>

                    <div className="border-t border-slate-100 pt-5">

                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#00748A]">
                        Enforceable Guarantees
                      </p>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                        {pillar.details.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 text-xs font-medium leading-5 text-slate-700 sm:text-sm"
                          >
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E0F1ED] text-[#008A7B]">
                              <Check size={11} strokeWidth={3} />
                            </span>
                            {item}
                          </div>
                        ))}

                      </div>
                    </div>

                  </div>

                  <div className="absolute bottom-0 left-8 right-8 h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#004658] to-[#00A8CC] transition-transform duration-500 group-hover:scale-x-100" />

                </article>
              );
            })}

          </div>
        </div>
      </section>


      {/* ==================================================
          03. TECHNICAL SECURITY CONTROLS
      ================================================== */}

      <section className="relative overflow-hidden bg-[#F5F8F8] py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#002D38] via-[#003E49] to-[#00232E] p-6 text-white shadow-[0_25px_70px_rgba(0,40,50,0.18)] sm:rounded-[36px] sm:p-10 lg:p-14">

            <div className="pointer-events-none absolute -right-28 -top-40 h-96 w-96 rounded-full border border-cyan-300/10" />

            <div className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 rounded-full border border-cyan-300/10" />

            <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">

              <div>

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-[#4EF0C5]">
                  <ShieldCheck size={29} />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4EF0C5]">
                  Technical Security Architecture
                </span>

                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl font-['Outfit',sans-serif]">
                  Cybersecurity &
                  <span className="block text-[#4EF0C5]">
                    Infrastructure Controls
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                  Every web application and API engineered by CodeCrafter
                  undergoes multi-layered defense auditing.
                </p>

                <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#4EF0C5]">
                    Defense in depth
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Multiple security controls work together to protect
                    application infrastructure and business data.
                  </p>
                </div>

              </div>

              <div className="space-y-3">

                {securitySpecs.map((spec, index) => {
                  const Icon = spec.icon;

                  return (
                    <article
                      key={spec.category}
                      className="group rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition-all duration-300 hover:border-[#4EF0C5]/40 hover:bg-white/[0.10] sm:p-6"
                    >

                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

                        <div className="flex shrink-0 items-center gap-4">

                          <span className="font-mono text-sm font-bold text-[#4EF0C5]/50">
                            0{index + 1}
                          </span>

                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4EF0C5]/10 text-[#4EF0C5]">
                            <Icon size={21} />
                          </div>

                        </div>

                        <div className="flex-1">

                          <h3 className="text-base font-bold text-white sm:text-lg font-['Outfit',sans-serif]">
                            {spec.category}
                          </h3>

                          <p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm">
                            {spec.detail}
                          </p>

                        </div>

                        <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#4EF0C5]/20 text-[#4EF0C5] transition-all group-hover:bg-[#4EF0C5] group-hover:text-[#002D38] sm:flex">
                          <Check size={16} />
                        </div>

                      </div>

                    </article>
                  );
                })}

              </div>

            </div>

            <div className="relative z-10 mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
              <span className="text-xs font-medium text-slate-400">
                Security-focused development practices
              </span>

              <span className="flex items-center gap-2 text-xs font-bold text-[#4EF0C5]">
                <span className="h-2 w-2 rounded-full bg-[#4EF0C5]" />
                Layered Protection Approach
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          04. 5-STEP IP SECURITY WORKFLOW
      ================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#ECECF6] via-[#F3F3F9] to-[#E5EEF4] py-16 sm:py-20 lg:py-24">

        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-violet-200/30 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-200/25 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

          <div className="mb-14 text-center">

            <span className="mb-4 inline-flex rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#004658]">
              A Clear Protection Process
            </span>

            <h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl lg:text-5xl font-['Outfit',sans-serif]">
              5-Step IP & Security Workflow
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              How we protect your intellectual property from the first
              conversation to final code delivery.
            </p>

          </div>

          <div className="relative">

            <div className="absolute left-8 top-10 hidden h-1 w-[calc(100%-64px)] rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300 lg:block" />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

              {processFlow.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.step}
                    className="group relative rounded-3xl border border-white bg-white/85 p-6 shadow-[0_12px_35px_rgba(40,45,90,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(40,45,90,0.12)]"
                  >

                    <div className="mb-7 flex items-center justify-between">

                      <span className="text-4xl font-extrabold text-slate-300 transition-colors group-hover:text-[#00748A] font-['Outfit',sans-serif]">
                        {item.step}
                      </span>

                      <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl ${item.color} transition-transform group-hover:scale-110`}>
                        <Icon size={22} />
                      </div>

                    </div>

                    <h3 className="mb-3 text-lg font-bold leading-snug text-slate-900 font-['Outfit',sans-serif]">
                      {item.name}
                    </h3>

                    <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                      {item.text}
                    </p>

                    <div className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-[#004658] to-[#00A8CC] transition-all duration-500 group-hover:w-full" />

                  </article>
                );
              })}

            </div>
          </div>

        </div>
      </section>


      {/* ==================================================
          05. IP PROTECTION IN PRACTICE
      ================================================== */}

      <section className="relative overflow-hidden bg-[#F5F8F8] py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

          <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

            <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#003E4A] to-[#002631] p-7 text-white shadow-[0_20px_50px_rgba(0,40,50,0.15)] sm:p-9 lg:sticky lg:top-28 lg:p-10">

              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-cyan-300/10" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[80px]" />

              <div className="relative z-10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-[#4EF0C5]">
                  <ShieldCheck size={28} />
                </div>

                <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#4EF0C5] sm:text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Our Approach
                </span>

                <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl font-['Outfit',sans-serif]">
                  How We Keep Your
                  <span className="block text-[#4EF0C5]">
                    IP Protected
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Protecting your intellectual property takes more than a
                  policy. It requires clear responsibilities, appropriate
                  access controls, and a documented process throughout the
                  project lifecycle.
                </p>

                <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:p-6">

                  <div className="flex items-center gap-3">
                    <LockKeyhole size={19} className="text-[#4EF0C5]" />
                    <p className="text-sm font-bold text-white">
                      Our working principle
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Confidential information is handled according to agreed
                    project requirements, access permissions, and applicable
                    contractual terms.
                  </p>

                </div>

                <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-cyan-200">
                  <span className="h-px w-8 bg-cyan-300/50" />
                  Protection at every stage
                </div>

              </div>
            </div>


            <div className="relative space-y-5">

              <div className="mb-7">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00869B]">
                  Project Lifecycle
                </span>

                <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl font-['Outfit',sans-serif]">
                  Security from Start to Handover
                </h3>
              </div>

              {protectionTimeline.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group relative rounded-[24px] border border-[#DCE8E8] bg-white p-5 shadow-[0_8px_25px_rgba(0,50,65,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/50 hover:shadow-[0_16px_35px_rgba(0,70,88,0.10)] sm:p-7"
                  >

                    <div className="flex items-start gap-4 sm:gap-5">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E4F0F1] text-[#004658] transition-colors group-hover:bg-[#004658] group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">

                          <span className="text-[10px] font-bold tracking-[0.15em] text-[#008BA5] sm:text-xs">
                            {item.label}
                          </span>

                          <span className="font-mono text-xs font-bold text-slate-300">
                            {item.number} / 04
                          </span>

                        </div>

                        <h3 className="text-lg font-bold text-slate-900 sm:text-xl font-['Outfit',sans-serif]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">

                          {item.points.map((point) => (
                            <span
                              key={point}
                              className="inline-flex items-center gap-2 rounded-full border border-[#DCE8E8] bg-[#F5F9F8] px-3 py-2 text-xs font-medium text-slate-700"
                            >
                              <Check size={13} className="text-[#008B7C]" />
                              {point}
                            </span>
                          ))}

                        </div>
                      </div>
                    </div>

                    {index !== protectionTimeline.length - 1 && (
                      <div className="absolute -bottom-5 left-10 hidden h-5 w-px bg-[#BBD7D9] sm:block" />
                    )}

                  </article>
                );
              })}

            </div>
          </div>


          <div className="mt-12 flex flex-col gap-6 rounded-[26px] border border-[#DCE8E8] bg-gradient-to-r from-[#E5F1F1] to-[#EFF4F7] p-6 sm:p-8 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#00869B]">
                Clear from day one
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl font-['Outfit',sans-serif]">
                Your project. Clearly defined responsibilities.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Discuss confidentiality, access requirements, and ownership
                expectations with our team before your project begins.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#004658] px-6 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#006477]"
            >
              Discuss Your Requirements
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>
      </section>


      {/* ==================================================
          06. FINAL CTA - COMPACT VERSION
      ================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#E4F0F2] via-[#F1F7F7] to-[#E4EEF4] py-8 sm:py-10">

        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-[100px]" />

        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-teal-300/20 blur-[100px]" />

        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#003E4A] via-[#004B59] to-[#002D38] px-6 py-8 sm:px-10 sm:py-9 lg:px-12 lg:py-10 text-center text-white shadow-[0_20px_50px_rgba(0,40,50,0.18)]">

            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-cyan-300/15" />

            <div className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full border border-cyan-300/15" />

            <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px]" />

            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#4EF0C5] backdrop-blur-sm mb-3">
                <Shield size={13} className="text-[#4EF0C5]" />
                <span>Secure Your Intellectual Property</span>
              </div>

              <h2 className="mx-auto max-w-3xl text-2xl font-extrabold leading-tight sm:text-3xl lg:text-[34px] font-['Outfit',sans-serif]">
                Need a Custom NDA Before Sharing Specs?
              </h2>

              <p className="mx-auto mt-2.5 max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
                We are ready to execute your custom non-disclosure agreement
                or provide our standard mutual NDA immediately.
              </p>

              <div className="mt-5 sm:mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">

                <Link
                  to="/schedule-consultation"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-2.5 text-xs sm:text-sm font-bold text-[#004658] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#4EF0C5] sm:w-auto sm:px-8 sm:py-3"
                >
                  Request Mutual NDA
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:px-8 sm:py-3"
                >
                  Contact Security Team
                  <ArrowUpRight size={16} />
                </Link>

              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium text-slate-300 sm:text-xs">

                <span className="flex items-center gap-2">
                  <Check size={13} className="text-[#4EF0C5]" />
                  Confidentiality
                </span>

                <span className="flex items-center gap-2">
                  <Check size={13} className="text-[#4EF0C5]" />
                  Controlled Access
                </span>

                <span className="flex items-center gap-2">
                  <Check size={13} className="text-[#4EF0C5]" />
                  IP Ownership
                </span>

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default SecurityIpProtection;
