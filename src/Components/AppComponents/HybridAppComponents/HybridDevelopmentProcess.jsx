
import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Palette,
  Code2,
  Smartphone,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    subtitle: "Define the vision",
    description:
      "We understand your business goals, target users, and essential features before defining the right cross-platform strategy.",
    features: ["Requirements analysis", "Feature roadmap", "Platform planning"],
    icon: Search,
  },
  {
    number: "02",
    title: "UI/UX Design",
    subtitle: "Design the experience",
    description:
      "We create intuitive mobile interfaces that feel familiar, look polished, and adapt to both iOS and Android.",
    features: ["Wireframes", "Interactive prototypes", "Responsive layouts"],
    icon: Palette,
  },
  {
    number: "03",
    title: "App Development",
    subtitle: "Build with React Native",
    description:
      "We develop shared application logic, reusable components, API integrations, and platform-specific functionality.",
    features: ["React Native & Expo", "API integration", "Reusable components"],
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing & Refinement",
    subtitle: "Make it reliable",
    description:
      "We test on target devices, resolve bugs, and refine performance to deliver a consistent cross-platform experience.",
    features: ["Device testing", "Performance checks", "Bug fixing"],
    icon: Smartphone,
  },
  {
    number: "05",
    title: "Launch & Growth",
    subtitle: "Ready for the world",
    description:
      "We prepare production builds, assist with app store submissions, and support improvements after launch.",
    features: ["Release preparation", "Store submission support", "Post-launch updates"],
    icon: Rocket,
  },
];

const HybridDevelopmentProcess = () => {
  return (
    <section
      id="hybrid-development-process"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Brand-colored background accents */}
      <div className="pointer-events-none absolute -left-36 top-20 h-80 w-80 rounded-full bg-[#00A8CC]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-10 h-80 w-80 rounded-full bg-[#003B46]/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00A8CC]/20 bg-[#00A8CC]/[0.07] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#00A8CC]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#007F9B]">
              Our Development Journey
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#101828] sm:text-4xl lg:text-5xl">
            From Concept to
            <span className="text-[#00A8CC]"> Cross-Platform Launch</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A structured development process designed to turn your idea into
            a reliable mobile application for iOS and Android.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connector */}
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[#00A8CC]/50 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#00A8CC]/50 hover:shadow-xl hover:shadow-[#003B46]/[0.07]"
                >
                  {/* Step icon and number */}
                  <div className="relative z-10 mb-7 flex items-center justify-between">
                    <span className="text-sm font-extrabold tracking-widest text-[#008EAC]">
                      STEP {step.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#263445] transition-all duration-300 group-hover:border-[#00A8CC] group-hover:bg-[#00A8CC] group-hover:text-white">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Step text */}
                  <p className="mb-2 text-xs font-semibold text-[#008EAC]">
                    {step.subtitle}
                  </p>

                  <h3 className="mb-3 text-xl font-bold leading-snug text-[#101828]">
                    {step.title}
                  </h3>

                  <p className="mb-6 flex-grow text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>

                  {/* Feature list */}
                  <div className="space-y-3 border-t border-slate-100 pt-5">
                    {step.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[#00A8CC]"
                        />

                        <span className="text-xs font-medium leading-5 text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom hover accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 origin-left scale-x-0 bg-[#00A8CC] transition-transform duration-300 group-hover:scale-x-100" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Shared codebase banner */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#102B3B] p-7 sm:p-9 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#39D5F2]">
              One Team. One Shared Codebase.
            </p>

            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Your next app starts with a conversation.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
              Let's plan your features, choose the right architecture, and
              map out the journey from idea to launch.
            </p>
          </div>

          <Link
            to="/schedule-consultation"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#00A8CC] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0092B4] hover:shadow-lg hover:shadow-[#00A8CC]/20"
          >
            Plan Your App
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
          <CheckCircle2 size={15} className="shrink-0 text-[#00A8CC]" />
          <span>Designed for a consistent experience across iOS and Android.</span>
          <ArrowRight size={14} className="hidden sm:block" />
        </div>
      </div>
    </section>
  );
};

export default HybridDevelopmentProcess;