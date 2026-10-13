
import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We understand your business goals, target audience, and app requirements to create a clear development roadmap.",
    features: [
      "Business analysis",
      "Feature planning",
      "Project roadmap",
    ],
    icon: Search,
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "We create intuitive, elegant interfaces following Apple's design principles for a seamless user experience.",
    features: [
      "User journey mapping",
      "Wireframes & prototypes",
      "Apple-style interface",
    ],
    icon: Palette,
  },
  {
    number: "03",
    title: "Native App Development",
    description:
      "We build reliable iOS applications using modern Apple technologies, clean architecture, and scalable code.",
    features: [
      "Swift & SwiftUI",
      "API integration",
      "Backend connectivity",
    ],
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description:
      "We thoroughly test the application to improve stability, performance, security, and compatibility.",
    features: [
      "Functional testing",
      "Performance optimization",
      "Bug fixing",
    ],
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We prepare your application for App Store submission and help you maintain it after launch.",
    features: [
      "App Store preparation",
      "Release assistance",
      "Ongoing improvements",
    ],
    icon: Rocket,
  },
];

const IosDevelopmentProcess = () => {
  return (
    <section
      id="ios-development-process"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle cyan background decoration */}
      <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-[#00A8CC]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#00A8CC]/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00A8CC]/20 bg-[#00A8CC]/[0.07] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#00A8CC]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#096b81]">
              Our Development Process
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#101828] sm:text-4xl lg:text-5xl">
            From Your Idea to an{" "}
            <span className="text-[#004658]">iOS App</span>
            <br className="hidden sm:block" /> Built for Excellence
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A transparent, step-by-step process that transforms your vision
            into a polished, reliable, and user-focused iOS application.
          </p>
        </div>

        {/* Development timeline */}
        <div className="relative">

          {/* Connecting line on desktop */}
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[#00A8CC]/50 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#00A8CC]/50 hover:shadow-xl hover:shadow-[#00A8CC]/[0.08]"
                >
                  {/* Step number and icon */}
                  <div className="relative z-10 mb-7 flex items-center justify-between">
                    <span className="text-sm font-extrabold tracking-widest text-[#008EAC]">
                      STEP {step.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#263445] transition-all duration-300 group-hover:border-[#00A8CC] group-hover:bg-[#00A8CC] group-hover:text-white">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold leading-snug text-[#101828]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 flex-grow text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>

                  {/* Features */}
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

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 origin-left scale-x-0 bg-[#00A8CC] transition-transform duration-300 group-hover:scale-x-100" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#008EAC]">
              Have an App Idea?
            </p>

            <h3 className="text-2xl font-bold text-[#101828] sm:text-3xl">
              Let's build something exceptional.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Tell us about your project and let's plan your next iOS
              application together.
            </p>
          </div>

          <Link
            to="/schedule-consultation"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#003B46] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#005466] hover:shadow-lg hover:shadow-[#003B46]/20"
          >
            Discuss Your Project
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default IosDevelopmentProcess;
