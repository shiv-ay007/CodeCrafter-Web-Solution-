import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  BriefcaseBusiness,
  GraduationCap,
  WifiOff,
  Wifi,
  Database,
  RefreshCw,
  Zap,
  ShieldCheck,
  Palette,
  Code2,
  Search,
  Rocket,
  CheckCircle2,
  Smartphone,
  Globe,
  Layers3,
} from "lucide-react";

const PwaApp = () => {
  const [installed, setInstalled] = useState(false);

  const features = [
    {
      title: "Installable Desktop & Mobile App",
      desc: "Users can install your web app directly to their home screen or desktop without a traditional app store download.",
      icon: Smartphone,
    },
    {
      title: "Service Worker Offline Caching",
      desc: "Cache essential assets and selected content to provide faster repeat visits and useful offline experiences.",
      icon: Database,
    },
    {
      title: "Web Push Notifications",
      desc: "Re-engage users through browser push notifications when they grant permission and the platform supports them.",
      icon: Zap,
    },
    {
      title: "Single Codebase for Web & Mobile",
      desc: "Maintain one responsive web application that can work across supported desktop and mobile browsers.",
      icon: Layers3,
    },
  ];

  const projects = [
    {
      number: "01",
      name: "ShopLite",
      category: "E-COMMERCE PWA",
      subtitle: "Shopping, simplified.",
      description:
        "A sample shopping PWA concept with product discovery, a mobile-friendly cart, saved items, and an installable browsing experience.",
      icon: ShoppingBag,
      accent: "#00A8CC",
      light: "#E4F9FC",
      features: ["Product catalog", "Shopping cart", "Installable interface"],
      preview: "shop",
    },
    {
      number: "02",
      name: "FlowDesk",
      category: "BUSINESS PWA",
      subtitle: "Your work, in one place.",
      description:
        "A sample business dashboard concept for viewing tasks, organizing workflows, and accessing key information from different devices.",
      icon: BriefcaseBusiness,
      accent: "#087F8C",
      light: "#E5F7F5",
      features: ["Task overview", "Activity dashboard", "Responsive layout"],
      preview: "business",
    },
    {
      number: "03",
      name: "LearnSphere",
      category: "EDUCATION PWA",
      subtitle: "Learning that moves with you.",
      description:
        "A sample learning platform concept with course discovery, saved learning material, and offline access to previously cached content.",
      icon: GraduationCap,
      accent: "#3683B8",
      light: "#EAF4FC",
      features: ["Course catalog", "Saved content", "Offline-ready pages"],
      preview: "learn",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "Understand your business goals, user needs, and the right features for your progressive web application.",
      icon: Search,
    },
    {
      number: "02",
      title: "UI/UX Design",
      description:
        "Create responsive layouts and intuitive interactions for mobile, tablet, and desktop users.",
      icon: Palette,
    },
    {
      number: "03",
      title: "PWA Engineering",
      description:
        "Configure the web app manifest, service worker, caching strategy, and application integrations.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description:
        "Test installation, supported offline flows, browser compatibility, accessibility, and performance.",
      icon: ShieldCheck,
    },
    {
      number: "05",
      title: "Launch & Improvement",
      description:
        "Deploy over HTTPS, monitor real-world performance, and improve the experience based on feedback.",
      icon: Rocket,
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#FBFDFD] pt-32 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 sm:pt-40">

      {/* Background decoration */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[600px] w-[1100px] max-w-full -translate-x-1/2 rounded-full opacity-50 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(0,70,88,0.22) 0%, rgba(0,168,204,0.08) 50%, rgba(251,253,253,0) 80%)",
        }}
      />

      {/* =====================================================
          1. EXISTING HERO SECTION
      ====================================================== */}
      <section className="relative">
        <div className="mx-auto mb-16 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-[#004658]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#004658] sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#004658]" />
            <span>⚡ Progressive Web Apps (PWA)</span>
          </div>

          <h1 className="mx-auto mb-6 max-w-5xl font-['Outfit',sans-serif] text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-950 sm:text-6xl">
            Native Mobile Experience{" "}
            <span className="bg-gradient-to-r from-[#004658] via-[#005A72] to-[#00A8CC] bg-clip-text text-transparent">
              Delivered via the Web
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-base font-normal leading-relaxed text-slate-600 sm:text-xl">
            We engineer installable Progressive Web Apps with offline service
            workers, web push notifications, and optimized user experiences.
          </p>
        </div>
      </section>

      {/* =====================================================
          2. EXISTING INSTALLATION SIMULATOR
      ====================================================== */}
      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#002B34] p-6 text-white shadow-2xl sm:p-10">
          <div className="mb-8 max-w-3xl">
            <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-[#4EF0C5]">
              Interactive PWA Simulator
            </span>
            <h2 className="font-['Outfit',sans-serif] text-2xl font-bold sm:text-3xl">
              Test Home Screen Installation
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Preview how an installable application could appear to your
              visitors.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#001D25] p-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#4EF0C5] bg-[#004658] text-xl font-bold text-[#4EF0C5]">
                PWA
              </div>
              <div>
                <p className="text-sm font-bold text-white sm:text-base">
                  CodeCrafter App
                </p>
                <p className="text-xs text-slate-400">
                  Home Screen Installation Preview
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setInstalled((previous) => !previous)}
              className={`cursor-pointer rounded-full px-6 py-3 text-xs font-bold shadow-lg transition-all sm:text-sm ${
                installed
                  ? "bg-emerald-400 text-slate-950"
                  : "bg-[#4EF0C5] text-[#002B34] hover:bg-[#7FF7D8]"
              }`}
            >
              {installed
                ? "✓ Preview State: Installed"
                : "Add to Home Screen"}
            </button>
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-400">
            Demo only: this button changes the preview state. It does not
            install an actual application on your device.
          </p>
        </div>
      </section>

      {/* =====================================================
          3. EXISTING FEATURES SECTION
      ====================================================== */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-[#004658]/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658]">
            <Zap size={14} />
            Core Capabilities
          </span>

          <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Powerful Features for{" "}
            <span className="text-[#00A8CC]">Modern Web Apps</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Combine web reach with useful app-like capabilities to deliver a
            smoother experience across supported devices.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-[#004658]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-xl hover:shadow-[#004658]/[0.06] sm:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A8CC]/10 text-[#007F9B] transition-colors group-hover:bg-[#004658] group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mb-3 font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          4. NEW PROJECTS & USE CASES SECTION
      ====================================================== */}
      <section
        id="pwa-projects"
        className="relative border-y border-slate-100 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00A8CC]/20 bg-[#00A8CC]/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#007F9B]">
              <Layers3 size={15} />
              PWA Projects & Use Cases
            </span>

            <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              One Web Platform.
              <span className="text-[#00A8CC]"> Many Possibilities.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore sample concepts showing how progressive web apps can
              support commerce, business operations, and digital learning.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.number}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#00A8CC]/40 hover:shadow-2xl hover:shadow-[#004658]/[0.07]"
                >
                  {/* Custom app preview */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white p-5 sm:p-6">
                    <div
                      className="absolute -right-10 -top-12 h-40 w-40 rounded-full opacity-70 blur-3xl"
                      style={{ backgroundColor: project.light }}
                    />

                    <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <div
                            className="flex h-9 w-9 items-center justify-center rounded-xl"
                            style={{
                              color: project.accent,
                              backgroundColor: project.light,
                            }}
                          >
                            <Icon size={19} />
                          </div>
                          <div>
                            <p className="text-xs font-extrabold text-slate-900">
                              {project.name}
                            </p>
                            <p className="mt-0.5 text-[9px] text-slate-400">
                              Sample PWA Interface
                            </p>
                          </div>
                        </div>

                        <Globe size={16} className="text-slate-400" />
                      </div>

                      {project.preview === "shop" && (
                        <>
                          <div
                            className="rounded-xl p-4"
                            style={{ backgroundColor: project.light }}
                          >
                            <p
                              className="text-[10px] font-bold uppercase tracking-wider"
                              style={{ color: project.accent }}
                            >
                              DISCOVER MORE
                            </p>
                            <p className="mt-2 text-xl font-extrabold text-slate-900">
                              Shop your way.
                            </p>
                            <div className="mt-3 flex items-center justify-between">
                              <span className="rounded-full bg-white px-3 py-2 text-[10px] font-bold text-slate-700">
                                Explore products
                              </span>
                              <ShoppingBag
                                size={32}
                                style={{ color: project.accent }}
                              />
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-2 gap-3">
                            {["Popular products", "New arrivals"].map((item) => (
                              <div
                                key={item}
                                className="rounded-xl border border-slate-100 p-3"
                              >
                                <div
                                  className="mb-2 flex h-12 items-center justify-center rounded-lg"
                                  style={{ backgroundColor: project.light }}
                                >
                                  <ShoppingBag
                                    size={20}
                                    style={{ color: project.accent }}
                                  />
                                </div>
                                <p className="text-[10px] font-bold text-slate-700">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {project.preview === "business" && (
                        <>
                          <div className="rounded-xl bg-[#002B34] p-4 text-white">
                            <p className="text-[10px] text-[#4EF0C5]">
                              WORKSPACE OVERVIEW
                            </p>
                            <p className="mt-2 text-xl font-extrabold">
                              Dashboard
                            </p>
                            <div className="mt-4 grid grid-cols-2 gap-3">
                              <div className="rounded-lg bg-white/10 p-3">
                                <p className="text-[9px] text-slate-300">
                                  Active tasks
                                </p>
                                <p className="mt-1 text-lg font-bold">24</p>
                              </div>
                              <div className="rounded-lg bg-white/10 p-3">
                                <p className="text-[9px] text-slate-300">
                                  Projects
                                </p>
                                <p className="mt-1 text-lg font-bold">08</p>
                              </div>
                            </div>
                          </div>

                          {["Review project progress", "Organize team tasks"].map(
                            (item) => (
                              <div
                                key={item}
                                className="mt-3 flex items-center gap-2 rounded-lg border border-slate-100 p-3"
                              >
                                <CheckCircle2
                                  size={15}
                                  className="text-[#00A878]"
                                />
                                <span className="text-[10px] font-medium text-slate-700">
                                  {item}
                                </span>
                              </div>
                            )
                          )}
                        </>
                      )}

                      {project.preview === "learn" && (
                        <>
                          <div
                            className="rounded-xl p-4"
                            style={{ backgroundColor: project.light }}
                          >
                            <p
                              className="text-[10px] font-bold uppercase tracking-wider"
                              style={{ color: project.accent }}
                            >
                              KEEP LEARNING
                            </p>
                            <p className="mt-2 text-xl font-extrabold text-slate-900">
                              Grow your skills.
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                              <span className="rounded-full bg-white px-3 py-2 text-[10px] font-bold text-slate-700">
                                View courses
                              </span>
                              <GraduationCap
                                size={32}
                                style={{ color: project.accent }}
                              />
                            </div>
                          </div>

                          <div className="mt-3 rounded-xl border border-slate-100 p-4">
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-bold text-slate-800">
                                Saved learning
                              </p>
                              <Database size={15} className="text-slate-400" />
                            </div>
                            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className="h-full w-2/3 rounded-full"
                                style={{ backgroundColor: project.accent }}
                              />
                            </div>
                            <p className="mt-2 text-[10px] text-slate-500">
                              Sample progress indicator
                            </p>
                          </div>
                        </>
                      )}

                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="text-[9px] font-semibold text-slate-400">
                          MOBILE + DESKTOP
                        </span>
                        <span
                          className="text-[9px] font-bold"
                          style={{ color: project.accent }}
                        >
                          PWA CONCEPT
                        </span>
                      </div>
                    </div>

                    <span className="absolute right-7 top-7 rounded-full border border-white bg-white/90 px-3 py-1.5 text-[9px] font-bold text-slate-600 shadow-sm">
                      {project.number}
                    </span>
                  </div>

                  <div className="p-6">
                    <span
                      className="inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wider"
                      style={{
                        backgroundColor: project.light,
                        color: project.accent,
                      }}
                    >
                      {project.category}
                    </span>

                    <h3 className="mt-4 font-['Outfit',sans-serif] text-2xl font-extrabold text-slate-950">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#004658]">
                      {project.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-5 space-y-3">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2.5"
                        >
                          <CheckCircle2
                            size={16}
                            style={{ color: project.accent }}
                          />
                          <span className="text-xs font-medium text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-500">
                        <Layers3 size={15} />
                        Illustrative concept — not a live project
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          5. NEW OFFLINE-FIRST EXPERIENCE SECTION
      ====================================================== */}
      <section
        id="pwa-offline"
        className="relative overflow-hidden bg-[#F1F8FA] py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#00A8CC]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Left content */}
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658]">
              <WifiOff size={15} />
              Offline-First Experience
            </span>

            <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Stay Useful,
              <span className="text-[#00A8CC]"> Even When Offline.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              With a carefully designed service worker and caching strategy,
              a PWA can keep selected parts of the experience available when
              a user temporarily loses connectivity.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  title: "Cache essential resources",
                  desc: "Prepare key assets and fallback pages for repeat visits.",
                },
                {
                  title: "Support selected offline tasks",
                  desc: "Let users access previously cached content where appropriate.",
                },
                {
                  title: "Reconnect gracefully",
                  desc: "Refresh data when connectivity returns and handle sync safely.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#008EAC] shadow-sm">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="rounded-3xl bg-[#002B34] p-5 text-white shadow-2xl sm:p-8">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#4EF0C5]">
                  Connectivity Overview
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Resilient Web Experience
                </h3>
              </div>
              <Wifi size={27} className="text-[#4EF0C5]" />
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  icon: Database,
                  title: "Cached App Resources",
                  desc: "Previously stored assets",
                  status: "AVAILABLE",
                },
                {
                  icon: WifiOff,
                  title: "Offline Fallback",
                  desc: "Useful offline information",
                  status: "CONFIGURABLE",
                },
                {
                  icon: RefreshCw,
                  title: "Reconnect & Refresh",
                  desc: "Update data when online",
                  status: "WHEN SUPPORTED",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#001D25] p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#004658] text-[#4EF0C5]">
                      <Icon size={21} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                    <span className="text-right text-[9px] font-bold text-[#4EF0C5]">
                      {item.status}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-xl border border-[#4EF0C5]/20 bg-[#4EF0C5]/[0.06] p-4">
              <p className="text-xs leading-6 text-slate-300">
                Offline access depends on what has been cached and how the
                application is implemented. Not every API or feature works
                offline automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          6. NEW PERFORMANCE SECTION
      ====================================================== */}
      <section
        id="pwa-performance"
        className="relative bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00A8CC]/20 bg-[#00A8CC]/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#007F9B]">
              <Zap size={15} />
              Performance Engineering
            </span>

            <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Fast by Design.
              <span className="text-[#00A8CC]"> Built for the Web.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              We focus on measurable performance improvements that help
              visitors navigate your application with less friction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Smart Asset Loading",
                desc: "Optimize images, fonts, scripts, and other resources to reduce unnecessary page weight.",
                icon: Zap,
              },
              {
                number: "02",
                title: "Core Web Vitals",
                desc: "Measure loading, visual stability, and responsiveness using real performance data.",
                icon: CheckCircle2,
              },
              {
                number: "03",
                title: "Efficient Caching",
                desc: "Choose caching rules that improve repeat visits while keeping important data fresh.",
                icon: Database,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-xl hover:shadow-[#004658]/[0.06] sm:p-8"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A8CC]/10 text-[#007F9B] transition-colors group-hover:bg-[#004658] group-hover:text-white">
                      <Icon size={23} />
                    </div>
                    <span className="text-2xl font-extrabold text-slate-200">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-[#00A8CC]/15 bg-[#F1FAFC] p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#007F9B] shadow-sm">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  Performance backed by measurement
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We evaluate actual application performance rather than
                  promising fixed loading times or scores before testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          7. NEW SECURITY & COMPATIBILITY SECTION
      ====================================================== */}
      <section
        id="pwa-security"
        className="relative overflow-hidden bg-[#F1F8FA] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658]">
              <ShieldCheck size={15} />
              Security & Compatibility
            </span>

            <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              A Reliable Experience Across{" "}
              <span className="text-[#00A8CC]">Supported Browsers</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Build trust through secure connections, appropriate permissions,
              and testing on the devices your customers actually use.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Secure by Default",
                description:
                  "Use HTTPS, protect sensitive endpoints, validate inputs, and manage authentication securely.",
                icon: ShieldCheck,
                tags: ["HTTPS", "Secure APIs", "Access Control"],
              },
              {
                title: "Browser Compatibility",
                description:
                  "Check installation, caching, notifications, and other capabilities on the target browsers and devices.",
                icon: Globe,
                tags: ["Chrome", "Edge", "Safari testing"],
              },
              {
                title: "Responsible Permissions",
                description:
                  "Request notification and device permissions only when needed and explain their value to users.",
                icon: Smartphone,
                tags: ["User consent", "Permissions", "Privacy"],
              },
              {
                title: "Release Validation",
                description:
                  "Validate the manifest, service worker lifecycle, fallback behavior, and production deployment.",
                icon: CheckCircle2,
                tags: ["Manifest", "Service Worker", "QA"],
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#00A8CC]/40 hover:shadow-lg sm:p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A8CC]/10 text-[#007F9B]">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          8. NEW DEVELOPMENT PROCESS SECTION
      ====================================================== */}
      <section
        id="pwa-development-process"
        className="relative overflow-hidden bg-white py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#00A8CC]/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00A8CC]/20 bg-[#00A8CC]/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#007F9B]">
              <Layers3 size={15} />
              Our Development Process
            </span>

            <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              From First Idea to{" "}
              <span className="text-[#00A8CC]">PWA Launch</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
              A structured approach to designing, engineering, testing, and
              deploying your progressive web application.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[#00A8CC]/50 to-transparent lg:block" />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#00A8CC]/50 hover:shadow-xl hover:shadow-[#004658]/[0.06]"
                  >
                    <div className="relative z-10 mb-7 flex items-center justify-between">
                      <span className="text-sm font-extrabold tracking-widest text-[#007F9B]">
                        STEP {step.number}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#004658] transition-colors group-hover:border-[#00A8CC] group-hover:bg-[#00A8CC] group-hover:text-white">
                        <Icon size={22} />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <span className="text-xs font-semibold text-[#007F9B]">
                        PWA DEVELOPMENT
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#002B34] p-7 sm:p-9 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#4EF0C5]">
                Ready to get started?
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                Let's build your next web experience.
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Discuss your goals, required features, and the right PWA
                strategy for your business.
              </p>
            </div>

            <Link
              to="/schedule-consultation"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#4EF0C5] px-6 py-4 text-sm font-bold text-[#002B34] transition-all hover:bg-[#7FF7D8]"
            >
              Discuss Your Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          9. EXISTING CTA SECTION — PRESERVED
      ====================================================== */}
      <section className="relative mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6 sm:pb-24 lg:px-8">
        <div className="rounded-3xl bg-[#004658] p-8 text-center text-white shadow-xl sm:p-12">
          <h2 className="mb-4 font-['Outfit',sans-serif] text-2xl font-bold sm:text-4xl">
            Want to Turn Your Web App into a PWA?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            Consult with our team about service workers, offline caching,
            installation, and a responsive app experience.
          </p>

          <Link
            to="/schedule-consultation"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#004658] shadow-lg transition-all hover:bg-slate-100 sm:text-base"
          >
            Schedule PWA Architecture Session
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PwaApp;
