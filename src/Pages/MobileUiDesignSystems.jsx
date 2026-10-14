import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  Layers3,
  Palette,
  Component,
  Accessibility,
  MonitorSmartphone,
  Sparkles,
  Search,
  PencilRuler,
  Code2,
  CheckCircle2,
  ChevronRight,
  MousePointer2,
  Type,
  Square,
  LayoutGrid,
} from "lucide-react";

// Automatically load images from: src/assets/emp/
const employeeImages = Object.entries(
  import.meta.glob("/src/assets/emp/*.{png,jpg,jpeg,webp,avif}", {
    eager: true,
    query: "?url",
    import: "default",
  })
)
  .map(([path, src]) => ({
    src,
    name: path.split("/").pop().replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const MobileUiDesignSystems = () => {
  const [activeTab, setActiveTab] = useState("ios");

  const platforms = {
    ios: {
      title: "iOS Human Interface Guidelines (HIG)",
      subtitle:
        "Fluid SF Symbols, native navigation headers, frosted glass effects, and thoughtful haptic feedback.",
      components: [
        "SF Pro Typography Scale",
        "Native Large Titles & Navigation",
        "Fluid Sheet Modals & Bottom Drawers",
        "Tactile Haptic Feedback Patterns",
      ],
      standards: ["Native feel", "Clear hierarchy", "Consistent spacing"],
    },
    android: {
      title: "Android Material 3 (Material You)",
      subtitle:
        "Dynamic color systems, expressive rounded shapes, predictable navigation, and consistent motion.",
      components: [
        "Material You Color Tokens",
        "Floating Action Buttons",
        "Predictive Back Navigation",
        "Adaptive Edge-to-Edge Layouts",
      ],
      standards: ["Adaptive layouts", "Dynamic color", "Consistent motion"],
    },
  };

  const current = platforms[activeTab];

  const designPrinciples = [
    {
      icon: LayoutGrid,
      number: "01",
      title: "Visual Consistency",
      description:
        "Reusable layouts, spacing scales, and component rules create a consistent experience across every screen.",
    },
    {
      icon: Accessibility,
      number: "02",
      title: "Accessible by Design",
      description:
        "Readable typography, meaningful labels, sufficient contrast, and touch-friendly controls help more people use your app.",
    },
    {
      icon: MonitorSmartphone,
      number: "03",
      title: "Responsive Interfaces",
      description:
        "Design flexible screen layouts that adapt to different mobile sizes, orientations, and platform conventions.",
    },
    {
      icon: Sparkles,
      number: "04",
      title: "Purposeful Interactions",
      description:
        "Thoughtful feedback, transitions, loading states, and motion make each interaction feel clear and intentional.",
    },
  ];

  const componentItems = [
    {
      icon: Component,
      title: "Reusable Components",
      description:
        "Buttons, cards, input fields, dialogs, and navigation elements designed to work together.",
      label: "COMPONENT LIBRARY",
    },
    {
      icon: Palette,
      title: "Color & Design Tokens",
      description:
        "Organized color palettes, semantic states, spacing values, borders, and elevation rules.",
      label: "DESIGN TOKENS",
    },
    {
      icon: Type,
      title: "Typography System",
      description:
        "Clear type scales for headings, body text, labels, captions, and accessibility settings.",
      label: "TYPE SCALE",
    },
    {
      icon: MousePointer2,
      title: "Interaction States",
      description:
        "Defined default, pressed, focused, disabled, loading, and error states for interface controls.",
      label: "INTERACTION PATTERNS",
    },
  ];

  const workflow = [
    {
      number: "01",
      icon: Search,
      title: "Research & Audit",
      description:
        "Understand the audience, product requirements, existing interfaces, and platform conventions.",
    },
    {
      number: "02",
      icon: PencilRuler,
      title: "Design & Prototype",
      description:
        "Build screen layouts, reusable components, visual tokens, and interactive prototypes.",
    },
    {
      number: "03",
      icon: Code2,
      title: "Build & Validate",
      description:
        "Review responsive behavior, accessibility, component states, and implementation consistency.",
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Document & Handoff",
      description:
        "Organize component specifications, usage rules, assets, and developer-ready design documentation.",
    },
  ];

  return (
    <main className="relative w-full overflow-hidden bg-[#FBFDFD] pt-32 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 sm:pt-40">

      {/* Ambient background */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[600px] w-[1100px] max-w-full -translate-x-1/2 rounded-full opacity-50 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(0,70,88,0.18) 0%, rgba(0,168,204,0.08) 50%, rgba(251,253,253,0) 80%)",
        }}
      />

      {/* ===================================================
          1. EXISTING HERO
      ==================================================== */}
      <section className="relative">
        <div className="mx-auto mb-16 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-[#004658]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#004658] sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#004658]" />
            <span>📱 Mobile UI/UX Design Systems</span>
          </div>

          <h1 className="mx-auto mb-6 max-w-5xl font-['Outfit',sans-serif] text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-950 sm:text-6xl">
            Native iOS & Android{" "}
            <span className="bg-gradient-to-r from-[#004658] via-[#005A72] to-[#00A8CC] bg-clip-text text-transparent">
              Mobile Design Systems
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-xl">
            We craft pixel-perfect mobile design tokens, component libraries,
            and gesture-driven UI kits tailored for iOS and Android platforms.
          </p>

          {/* Platform switcher */}
          <div className="mb-12 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#004658]/15 bg-white p-1.5 shadow-md">
            <button
              type="button"
              onClick={() => setActiveTab("ios")}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-xs font-bold transition-all sm:px-6 sm:text-sm ${
                activeTab === "ios"
                  ? "bg-[#004658] text-white shadow-md"
                  : "text-slate-600 hover:text-[#004658]"
              }`}
            >
              🍎 Apple iOS HIG
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("android")}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-xs font-bold transition-all sm:px-6 sm:text-sm ${
                activeTab === "android"
                  ? "bg-[#004658] text-white shadow-md"
                  : "text-slate-600 hover:text-[#004658]"
              }`}
            >
              🤖 Android Material 3
            </button>
          </div>
        </div>
      </section>

      {/* ===================================================
          2. EXISTING INTERACTIVE DESIGN SYSTEM
      ==================================================== */}
      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#002B34] p-6 text-white shadow-2xl sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <span className="block text-xs font-bold uppercase tracking-widest text-[#4EF0C5]">
                Design System Standards
              </span>

              <h2 className="font-['Outfit',sans-serif] text-2xl font-bold sm:text-4xl">
                {current.title}
              </h2>

              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                {current.subtitle}
              </p>

              <div className="space-y-3 pt-2">
                {current.components.map((component) => (
                  <div
                    key={component}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3 text-xs font-medium text-white sm:text-sm"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#4EF0C5]" />
                    {component}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {current.standards.map((standard) => (
                  <span
                    key={standard}
                    className="rounded-full border border-[#4EF0C5]/20 bg-[#4EF0C5]/[0.07] px-3 py-2 text-xs font-semibold text-[#4EF0C5]"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile preview */}
            <div className="flex justify-center lg:col-span-5">
              <div className="relative flex h-[440px] w-[245px] flex-col overflow-hidden rounded-[38px] border-[5px] border-slate-700 bg-slate-900 p-4 shadow-2xl sm:h-[480px] sm:w-[260px]">
                <div className="mx-auto mb-6 h-4 w-28 rounded-full bg-slate-800" />

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-4">
                    <p className="text-[10px] font-bold uppercase text-[#4EF0C5]">
                      UI COMPONENT TOKEN
                    </p>
                    <p className="mt-2 text-sm font-bold text-white">
                      Interactive Glass Card
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Clear hierarchy. Thoughtful spacing.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-xl bg-[#004658] p-3 text-xs font-bold text-white"
                  >
                    Primary CTA Button
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3 text-[10px] text-slate-300">
                      Segment A
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3 text-[10px] text-slate-300">
                      Segment B
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 p-3">
                    <div className="mb-3 flex items-center justify-between text-xs">
                      <span className="text-slate-300">Design tokens</span>
                      <span className="text-[#4EF0C5]">Active</span>
                    </div>
                    <div className="flex gap-2">
                      {["#004658", "#00A8CC", "#4EF0C5", "#FFFFFF"].map(
                        (color) => (
                          <div
                            key={color}
                            className="h-8 flex-1 rounded-lg border border-white/10"
                            style={{ backgroundColor: color }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-5">
                  <div className="mx-auto h-1 w-24 rounded-full bg-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          3. NEW: MOBILE UI IMAGE GALLERY
      ==================================================== */}
      <section
        id="mobile-ui-gallery"
        className="relative py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00A8CC]/20 bg-[#00A8CC]/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#007F9B]">
                <Smartphone size={15} />
                Mobile UI Showcase
              </span>

              <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Interfaces Made to{" "}
                <span className="text-[#005A72]">Feel Effortless.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Explore the mobile screens in our UI collection. Scroll
                horizontally to browse each screen individually.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-xs font-semibold text-[#004658]">
              <span className="h-2 w-2 rounded-full bg-[#005A72]" />
              {employeeImages.length} screens in your collection
            </div>
          </div>

          {employeeImages.length > 0 ? (
            <div
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
              style={{ scrollbarWidth: "thin" }}
            >
              {employeeImages.map((image, index) => (
                <article
                  key={image.src}
                  className="group w-[230px] shrink-0 snap-start sm:w-[255px]"
                >
                  <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#00A8CC]/40 group-hover:shadow-xl">
                    <div className="mb-3 flex items-center justify-between px-1">
                      <span className="text-xs font-bold text-[#004658]">
                        SCREEN {String(index + 1).padStart(2, "0")}
                      </span>
                      <Smartphone
                        size={16}
                        className="text-[#00A8CC]"
                      />
                    </div>

                    <div className="flex h-[350px] items-center justify-center overflow-hidden rounded-[20px] bg-[#F1F8FA] sm:h-[390px]">
                      <img
                        src={image.src}
                        alt={`Mobile UI screen ${image.name}`}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="px-2 pb-2 pt-4">
                      <h3 className="truncate text-sm font-bold capitalize text-slate-900">
                        {image.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        Mobile interface design
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#004658]/25 bg-white p-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A8CC]/10 text-[#007F9B]">
                <Smartphone size={27} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Add your mobile UI screenshots
              </h3>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-600">
                Place PNG, JPG, JPEG, WebP, or AVIF images inside
                <code className="mx-1 rounded bg-slate-100 px-1.5 py-1">
                  src/assets/emp/
                </code>
                and they will appear here automatically.
              </p>
            </div>
          )}

          <p className="mt-3 text-xs text-slate-500">
            Tip: Shift + mouse wheel may scroll horizontally on supported
            desktop browsers. On touch devices, swipe left or right.
          </p>
        </div>
      </section>

      {/* ===================================================
          4. NEW: DESIGN SYSTEM COMPONENTS
      ==================================================== */}
      <section
        id="design-system-components"
        className="border-y border-slate-100 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-[#004658]/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658]">
              <Component size={15} />
              Design System Building Blocks
            </span>

            <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-4xl lg:text-5xl">
              Every Detail.{" "}
              <span className="text-[#005A72]">One Consistent System.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              A reusable foundation for building cohesive mobile products,
              from typography and color to interactive components.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {componentItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-[#FBFDFD] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-xl sm:p-8"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658] transition-colors group-hover:bg-[#004658] group-hover:text-white">
                      <Icon size={23} />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-[#008BA5]">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  {/* Small visual sample */}
                  {item.title === "Reusable Components" && (
                    <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                      <button
                        type="button"
                        className="rounded-xl bg-[#004658] px-4 py-2.5 text-xs font-bold text-white"
                      >
                        Primary
                      </button>
                      <button
                        type="button"
                        className="rounded-xl border border-[#004658]/20 px-4 py-2.5 text-xs font-bold text-[#004658]"
                      >
                        Secondary
                      </button>
                    </div>
                  )}

                  {item.title === "Color & Design Tokens" && (
                    <div className="mt-6 flex gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                      {[
                        { color: "#004658", label: "Primary" },
                        { color: "#00A8CC", label: "Accent" },
                        { color: "#4EF0C5", label: "Highlight" },
                        { color: "#F1F8FA", label: "Surface" },
                      ].map((token) => (
                        <div key={token.label} className="min-w-0 flex-1">
                          <div
                            className="h-12 rounded-xl border border-slate-200"
                            style={{ backgroundColor: token.color }}
                          />
                          <p className="mt-2 truncate text-center text-[10px] font-medium text-slate-500">
                            {token.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.title === "Typography System" && (
                    <div className="mt-6 space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-xl font-extrabold text-slate-900">
                        Heading 01
                      </p>
                      <p className="text-sm font-semibold text-slate-700">
                        Heading 02
                      </p>
                      <p className="text-xs leading-5 text-slate-500">
                        Body text and supporting labels
                      </p>
                    </div>
                  )}

                  {item.title === "Interaction States" && (
                    <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="rounded-xl bg-[#004658] p-3 text-center text-xs font-bold text-white">
                        Default
                      </div>
                      <div className="rounded-xl bg-[#00A8CC]/10 p-3 text-center text-xs font-bold text-[#004658]">
                        Focused
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 text-center text-xs font-bold text-slate-600">
                        Outlined
                      </div>
                      <div className="rounded-xl bg-slate-100 p-3 text-center text-xs font-bold text-slate-400">
                        Disabled
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          5. NEW: DESIGN PRINCIPLES
      ==================================================== */}
      <section
        id="mobile-design-principles"
        className="bg-[#F1F8FA] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658]">
                <Sparkles size={15} />
                Our Design Philosophy
              </span>

              <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Beautiful Interfaces.{" "}
                <span className="text-[#005A72]">Thoughtful Experiences.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end">
              Premium mobile design is more than appearance. Every decision
              should help people understand the interface, complete tasks,
              and feel confident while using your product.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {designPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.number}
                  className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-lg sm:p-7"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658]">
                      <Icon size={23} />
                    </div>
                    <span className="text-xl font-extrabold text-slate-200">
                      {principle.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {principle.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#007F9B]">
                    <CheckCircle2 size={15} />
                    Design standard
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          6. NEW: DESIGN WORKFLOW
      ==================================================== */}
      <section
        id="mobile-design-workflow"
        className="bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00A8CC]/20 bg-[#00A8CC]/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#007F9B]">
              <Layers3 size={15} />
              Our Workflow
            </span>

            <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-4xl lg:text-5xl">
              From First Sketch to{" "}
              <span className="text-[#005A72]">Developer Handoff.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              A clear, collaborative process that turns product requirements
              into a reusable mobile design system.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-xl sm:p-7"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-sm font-extrabold tracking-widest text-[#007F9B]">
                      STEP {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658] transition-all group-hover:bg-[#004658] group-hover:text-white">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-semibold text-slate-500">
                      DESIGN SYSTEMS
                    </span>
                    <ChevronRight
                      size={17}
                      className="text-[#005A72] transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          7. EXISTING CTA — PRESERVED
      ==================================================== */}
      <section className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6 sm:pb-24 lg:px-8">
        <div className="rounded-3xl bg-[#004658] p-8 text-center text-white shadow-xl sm:p-12">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#4EF0C5]">
            <Sparkles size={15} />
            Let's Design Something Great
          </span>

          <h2 className="mb-4 font-['Outfit',sans-serif] text-2xl font-bold sm:text-4xl">
            Want a Native Mobile Design System for Your App?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            Talk to our Mobile UI/UX team about a cohesive, reusable, and
            developer-ready component library for your next app.
          </p>

          <Link
            to="/schedule-consultation"
            className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#004658] shadow-lg transition-all hover:bg-[#E9FAFC] sm:px-8 sm:text-base"
          >
            Schedule Mobile UI Session
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MobileUiDesignSystems;
