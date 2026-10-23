
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Code2,
  Download,
  GitBranch,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Zap,
  CircleCheck,
  CircleDot,
} from "lucide-react";

const AppVersionUpgrades = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [activePlatform, setActivePlatform] = useState("React Native");

  const features = [
    {
      icon: Zap,
      title: "OTA Hotfix Deployment",
      desc: "Deploy eligible JavaScript bundle and asset updates to supported React Native applications without waiting for a full store release.",
      tag: "Faster releases",
    },
    {
      icon: RefreshCw,
      title: "Smart Update Prompts",
      desc: "Guide users through optional or required updates with clear in-app messaging and appropriate store links.",
      tag: "Better UX",
    },
    {
      icon: Layers3,
      title: "Safe Database Migrations",
      desc: "Plan SQLite and Realm schema changes with migration checks, backups where supported, and data integrity safeguards.",
      tag: "Data safety",
    },
    {
      icon: ShieldCheck,
      title: "OS & SDK Compatibility",
      desc: "Review platform requirements, dependencies, permissions, and build configurations before releasing an upgraded app.",
      tag: "Compatibility",
    },
  ];

  const updateSteps = [
    {
      number: "01",
      title: "Audit Your App",
      desc: "Review the existing framework, dependencies, SDK versions, and technical risks.",
      icon: MonitorSmartphone,
    },
    {
      number: "02",
      title: "Plan the Upgrade",
      desc: "Choose compatible versions and prepare a migration and rollback strategy.",
      icon: GitBranch,
    },
    {
      number: "03",
      title: "Test & Validate",
      desc: "Run functional, device compatibility, regression, and release checks.",
      icon: CheckCircle2,
    },
    {
      number: "04",
      title: "Release & Monitor",
      desc: "Deploy through the appropriate channel and monitor the rollout for issues.",
      icon: Rocket,
    },
  ];

  const benefits = [
    {
      icon: Clock3,
      title: "Reduced Release Delays",
      desc: "Use suitable update channels to deliver eligible fixes more efficiently.",
    },
    {
      icon: LockKeyhole,
      title: "Security Improvements",
      desc: "Keep dependencies and platform configurations aligned with security requirements.",
    },
    {
      icon: Smartphone,
      title: "Wider Device Support",
      desc: "Test upgrades across supported OS versions, screen sizes, and device configurations.",
    },
    {
      icon: CircleCheck,
      title: "Reliable User Experience",
      desc: "Validate releases before rollout and reduce avoidable update-related disruptions.",
    },
  ];

  const faqs = [
    {
      question: "What are Over-The-Air (OTA) updates?",
      answer:
        "OTA updates deliver supported app content changes, such as JavaScript bundles and assets, over the network. What can be updated depends on the framework, deployment service, and platform policies.",
    },
    {
      question: "Do all app updates require store approval?",
      answer:
        "Not every eligible content update requires a new store submission. However, native code changes, certain SDK upgrades, and updates that fall outside platform policies may require a new app build and store review.",
    },
    {
      question: "Can an app update affect existing user data?",
      answer:
        "It can if database or local storage changes are not handled correctly. We plan migrations, test upgrade paths, and use appropriate safeguards to reduce the risk of data loss.",
    },
    {
      question: "Do you support React Native and Flutter?",
      answer:
        "We can help assess and upgrade React Native and Flutter projects. The exact upgrade approach depends on your current framework version, native dependencies, and release requirements.",
    },
    {
      question: "How long does an app version upgrade take?",
      answer:
        "The timeline depends on the app's complexity, outdated dependencies, native integrations, testing requirements, and the number of issues discovered during the initial audit.",
    },
  ];

  const platforms = {
    "React Native": {
      version: "Framework & dependencies",
      desc: "Review React Native versions, native modules, JavaScript bundles, and Android/iOS build compatibility.",
      items: ["Dependency audit", "Native build validation", "Eligible OTA updates"],
    },
    Flutter: {
      version: "Flutter & Dart",
      desc: "Review Flutter and Dart versions, plugins, platform SDKs, and build configurations.",
      items: ["Package compatibility", "iOS/Android build checks", "Release validation"],
    },
    Android: {
      version: "Android SDK",
      desc: "Review target SDK requirements, Gradle, Kotlin, permissions, and device compatibility.",
      items: ["SDK compatibility", "Build configuration", "Device testing"],
    },
    iOS: {
      version: "iOS toolchain",
      desc: "Review iOS deployment targets, Xcode requirements, native dependencies, and signing settings.",
      items: ["Xcode compatibility", "Signing checks", "App Store readiness"],
    },
  };

  return (
    <main className="relative w-full overflow-hidden bg-[#FBFDFD] pt-28 sm:pt-36 pb-20 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -z-0 h-[430px] w-[900px] max-w-full -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,168,204,.17), rgba(0,70,88,.08) 48%, transparent 75%)",
        }}
      />

      {/* 1. Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-[#004658]/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658] sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00A8CC]" />
            <Sparkles size={15} />
            App Version Upgrades & OTA Updates
          </div>

          <h1 className="mb-6 font-['Outfit',sans-serif] text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Continuous Mobile Upgrades &{" "}
            <span className="bg-gradient-to-r from-[#004658] via-[#007B95] to-[#00A8CC] bg-clip-text text-transparent">
              Instant Over-The-Air Patches
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Keep your mobile app up to date with planned framework upgrades,
            compatible SDK migrations, safer releases, and supported OTA
            content updates.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/schedule-consultation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#004658] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#004658]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#005A70]"
            >
              Discuss Your App Upgrade
              <ArrowRight size={17} />
            </Link>

            <a
              href="#upgrade-process"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition-all hover:border-[#00A8CC] hover:text-[#004658]"
            >
              Explore Our Process
              <ChevronRight size={17} />
            </a>
          </div>

          {/* Hero visual: lightweight SVG dashboard */}
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[26px] border border-[#004658]/15 bg-white p-3 shadow-[0_24px_80px_-35px_rgba(0,70,88,0.30)] sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#004658] text-white">
                  <Terminal size={20} />
                </div>
                <div className="text-left">
                  <h2 className="font-['Outfit',sans-serif] font-bold text-slate-900">
                    Release Overview
                  </h2>
                  <p className="text-xs text-slate-500">
                    Illustrative update workflow
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Example release status
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-[#F8FBFC] p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Current version
                  </span>
                  <Code2 className="text-[#007B95]" size={19} />
                </div>
                <div className="text-3xl font-extrabold text-slate-900">
                  2.4.0
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Illustrative version
                </p>
              </div>

              <div className="rounded-2xl border border-[#00A8CC]/20 bg-[#F1FBFD] p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Target version
                  </span>
                  <ArrowUpRight className="text-[#007B95]" size={19} />
                </div>
                <div className="text-3xl font-extrabold text-[#004658]">
                  2.5.0
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Illustrative release target
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-[#F8FBFC] p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Release checklist
                  </span>
                  <ShieldCheck className="text-[#007B95]" size={19} />
                </div>
                <div className="flex items-center gap-2 text-2xl font-extrabold text-slate-900">
                  <CheckCircle2 className="text-emerald-600" size={23} />
                  Test first
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Validate before production
                </p>
              </div>
            </div>

            {/* SVG release progress chart */}
            <div className="mt-5 rounded-2xl border border-slate-100 p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Release readiness
                  </h3>
                  <p className="text-xs text-slate-500">
                    Illustrative checklist completion
                  </p>
                </div>
                <span className="text-sm font-bold text-[#007B95]">
                  4 stages
                </span>
              </div>

              <svg
                viewBox="0 0 700 100"
                className="h-auto w-full"
                role="img"
                aria-label="Four stages of an app upgrade workflow"
              >
                <line
                  x1="50"
                  y1="30"
                  x2="650"
                  y2="30"
                  stroke="#DCE9ED"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <line
                  x1="50"
                  y1="30"
                  x2="250"
                  y2="30"
                  stroke="#00A8CC"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                {[50, 250, 450, 650].map((x, i) => (
                  <g key={x}>
                    <circle
                      cx={x}
                      cy="30"
                      r="13"
                      fill={i === 0 ? "#004658" : "#FFFFFF"}
                      stroke={i === 0 ? "#004658" : "#00A8CC"}
                      strokeWidth="3"
                    />
                    {i === 0 && (
                      <path
                        d={`M ${x - 5} 30 l 4 4 l 7 -8`}
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    <text
                      x={x}
                      y="65"
                      textAnchor="middle"
                      fill="#334155"
                      fontSize="12"
                      fontWeight="600"
                    >
                      {["Audit", "Plan", "Test", "Release"][i]}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Existing features, upgraded */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-[#007B95]">
            What we help you with
          </span>
          <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Everything Your App Needs to Stay Current
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Practical upgrade services designed to improve compatibility,
            simplify releases, and protect the user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((item, idx) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-[#004658]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/50 hover:shadow-xl hover:shadow-[#004658]/[0.07] sm:p-8"
              >
                <div className="mb-6 flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7F9] text-[#004658] transition-colors group-hover:bg-[#004658] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <span className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mb-3 font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="leading-7 text-slate-600">{item.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#007B95]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EAF7F9]">
                    <Check size={14} />
                  </span>
                  Planned around your app
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. Update process timeline */}
      <section
        id="upgrade-process"
        className="border-y border-slate-100 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#007B95]">
              Our approach
            </span>
            <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-4xl">
              From Outdated Code to a Tested Release
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A clear, step-by-step process that helps teams understand the
              upgrade, testing, and deployment journey.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {updateSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative rounded-3xl border border-slate-200 bg-[#FBFDFD] p-6 transition-all hover:border-[#00A8CC]/50 hover:shadow-lg"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-['Outfit',sans-serif] text-4xl font-extrabold text-[#CDECF1]">
                      {step.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#004658] text-white">
                      <Icon size={23} />
                    </div>
                  </div>
                  <h3 className="mb-3 font-['Outfit',sans-serif] text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    {step.desc}
                  </p>

                  {index !== updateSteps.length - 1 && (
                    <ChevronRight
                      className="absolute -right-4 top-10 z-10 hidden text-[#00A8CC] lg:block"
                      size={25}
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Smartphone update preview */}
      <section className="overflow-hidden py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#007B95]">
              Better update experience
            </span>
            <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
              Make App Updates Feel Simple for Users
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              A clear update journey helps users understand what is changing
              and what action they need to take. Preview a sample update
              screen below.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Clear update messages and next steps",
                "Appropriate optional or mandatory update flows",
                "Store links for releases that require a new build",
                "Compatibility checks before rollout",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E5F6F8] text-[#007B95]">
                    <Check size={15} />
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[450px] items-center justify-center rounded-[32px] border border-[#004658]/10 bg-gradient-to-br from-[#EAF8FA] via-white to-[#F3FBFC] p-6 sm:p-10">
            <div
              aria-hidden="true"
              className="absolute right-5 top-8 h-32 w-32 rounded-full border border-[#00A8CC]/20"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-6 left-5 h-24 w-24 rounded-full bg-[#00A8CC]/10 blur-xl"
            />

            <div className="relative w-[240px] rounded-[34px] border-[7px] border-slate-800 bg-slate-800 p-1.5 shadow-2xl">
              <div className="overflow-hidden rounded-[25px] bg-white">
                <div className="relative flex h-8 items-center justify-center bg-white">
                  <div className="h-1.5 w-14 rounded-full bg-slate-800" />
                </div>

                <div className="px-4 pb-5 pt-5 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E6F7FA] text-[#004658]">
                    <Download size={30} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#007B95]">
                    App update
                  </p>
                  <h3 className="mt-2 font-['Outfit',sans-serif] text-xl font-extrabold text-slate-900">
                    A new version is ready
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    Enjoy improvements and the latest supported features.
                  </p>

                  <div className="mt-5 rounded-xl bg-[#F1FAFB] p-3 text-left">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">
                        Version 2.5.0
                      </span>
                      <span className="text-[#007B95]">New</span>
                    </div>
                    <p className="mt-1 text-[10px] leading-4 text-slate-500">
                      Example preview — release details depend on your app.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="mt-5 w-full rounded-full bg-[#004658] px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-[#00677D]"
                    onClick={() =>
                      document
                        .getElementById("platform-compatibility")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Explore Compatibility
                  </button>

                  <p className="mt-3 text-[10px] text-slate-400">
                    Sample UI concept
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute left-4 top-10 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-lg sm:flex">
              <ShieldCheck size={17} className="text-emerald-600" />
              Compatibility checks
            </div>
            <div className="absolute bottom-10 right-4 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-lg sm:flex">
              <RefreshCw size={17} className="text-[#007B95]" />
              Update guidance
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive platform compatibility */}
      <section
        id="platform-compatibility"
        className="bg-[#F1F8FA] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-[#007B95]">
              Platform readiness
            </span>
            <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Upgrade for Your Technology Stack
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Select a platform to explore the types of checks and upgrade
              activities that may apply to your application.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-3">
              {Object.keys(platforms).map((platform) => (
                <button
                  type="button"
                  key={platform}
                  onClick={() => setActivePlatform(platform)}
                  aria-pressed={activePlatform === platform}
                  className={`flex items-center justify-between rounded-2xl border p-5 text-left transition-all ${
                    activePlatform === platform
                      ? "border-[#004658] bg-[#004658] text-white shadow-lg shadow-[#004658]/15"
                      : "border-white bg-white text-slate-800 hover:border-[#00A8CC]/50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Code2 size={21} />
                    <span className="font-bold">{platform}</span>
                  </span>
                  <ChevronRight size={19} />
                </button>
              ))}
            </div>

            <div
              aria-live="polite"
              className="rounded-3xl border border-[#004658]/10 bg-white p-6 sm:p-9"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E5F6F8] text-[#004658]">
                <MonitorSmartphone size={27} />
              </div>
              <p className="mt-6 text-sm font-semibold text-[#007B95]">
                Selected platform
              </p>
              <h3 className="mt-2 font-['Outfit',sans-serif] text-2xl font-extrabold text-slate-950">
                {activePlatform}
              </h3>
              <p className="mt-2 font-medium text-slate-500">
                {platforms[activePlatform].version}
              </p>
              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                {platforms[activePlatform].desc}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {platforms[activePlatform].items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-[#F6FAFB] p-3 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#007B95]"
                    />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                to="/schedule-consultation"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#007B95] hover:text-[#004658]"
              >
                Discuss this platform
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Release workflow illustration */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#007B95]">
              Release pipeline
            </span>
            <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Every Upgrade Deserves a Safe Release
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A release workflow helps teams identify problems before they
              affect more users.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#004658]/10 bg-white p-5 shadow-sm sm:p-9">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {[
                {
                  title: "Code Changes",
                  desc: "Review changes and dependencies.",
                  icon: Code2,
                  color: "bg-blue-50 text-blue-700",
                },
                {
                  title: "Test Build",
                  desc: "Run automated and manual checks.",
                  icon: Terminal,
                  color: "bg-violet-50 text-violet-700",
                },
                {
                  title: "Staged Rollout",
                  desc: "Release gradually where supported.",
                  icon: GitBranch,
                  color: "bg-amber-50 text-amber-700",
                },
                {
                  title: "Monitor",
                  desc: "Review issues and release health.",
                  icon: ShieldCheck,
                  color: "bg-emerald-50 text-emerald-700",
                },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="relative">
                    <div className="h-full rounded-2xl border border-slate-100 bg-[#FBFDFD] p-5">
                      <div className="mb-5 flex items-center justify-between">
                        <span className="text-xs font-extrabold tracking-widest text-slate-400">
                          STEP 0{index + 1}
                        </span>
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.color}`}
                        >
                          <Icon size={22} />
                        </span>
                      </div>
                      <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {step.desc}
                      </p>
                    </div>
                    {index < 3 && (
                      <ArrowRight
                        size={20}
                        className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#00A8CC] md:block"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#00A8CC]/20 bg-[#F1FAFB] p-4">
              <CircleDot
                size={20}
                className="mt-0.5 shrink-0 text-[#007B95]"
              />
              <p className="text-sm leading-6 text-slate-600">
                Rollout controls, automatic rollback, and monitoring depend
                on the deployment tools and infrastructure configured for
                your application. They are not enabled automatically by
                this website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Benefits */}
      <section className="border-y border-slate-100 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#007B95]">
              Why upgrade?
            </span>
            <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Build a Better Long-Term App Experience
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A well-planned upgrade strategy helps maintainability,
              compatibility, and confidence in future releases.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/50 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F6F8] text-[#004658]">
                    <Icon size={23} />
                  </div>
                  <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FAQ accordion */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#007B95]">
              FAQs
            </span>
            <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Questions About App Upgrades?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Understand OTA updates, platform compatibility, and the
              upgrade process before getting started.
            </p>
            <Link
              to="/schedule-consultation"
              className="mt-6 inline-flex items-center gap-2 font-bold text-[#007B95] hover:text-[#004658]"
            >
              Talk to our team
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-[#00A8CC]/40 bg-white shadow-sm"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setActiveFaq(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="font-['Outfit',sans-serif] font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#007B95] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] bg-[#004658] px-6 py-12 text-center text-white shadow-xl shadow-[#004658]/15 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-16 h-80 w-80 rounded-full bg-[#00A8CC]/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
              <Rocket size={27} />
            </div>

            <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Ready to Modernize Your Mobile App?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-200">
              Let's review your current app version, platform requirements,
              and release workflow to plan the right upgrade strategy.
            </p>

            <Link
              to="/schedule-consultation"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#004658] shadow-lg transition-all hover:-translate-y-1 hover:bg-[#EAF8FA]"
            >
              Schedule App Upgrade Session
              <ArrowRight size={18} />
            </Link>

            <p className="mt-5 text-xs text-slate-300">
              Upgrade planning • Compatibility checks • Release guidance
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppVersionUpgrades;
