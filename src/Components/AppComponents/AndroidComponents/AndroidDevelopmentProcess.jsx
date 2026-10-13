
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Lightbulb,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We understand your business goals, target audience and app requirements to create a clear development roadmap.",
    icon: Lightbulb,
    duration: "DEFINE THE VISION",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "We create intuitive layouts, user journeys and interactive designs for a smooth and engaging mobile experience.",
    icon: Palette,
    duration: "DESIGN THE EXPERIENCE",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "We build your Android application, integrate APIs and test functionality, performance and compatibility.",
    icon: Code2,
    duration: "BUILD WITH QUALITY",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We prepare your app for release, assist with deployment and help you plan future improvements.",
    icon: Rocket,
    duration: "LAUNCH WITH CONFIDENCE",
  },
];

const AndroidDevelopmentProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFB] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-10 sm:mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#004658]/15 bg-[#EAF7F7] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#004658]">
            Our Development Journey
          </span>

          <h2 className="mt-6 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-[#004658] to-[#00A8CC] bg-clip-text text-transparent">
              App Launch
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A clear, collaborative process that turns your app idea into
            a reliable mobile experience, one step at a time.
          </p>
        </div>

        {/* Process Cards */}
        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative rounded-[26px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#00A8CC]/40 hover:shadow-xl sm:p-7"
              >
                {/* Number and Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-['Outfit',sans-serif] text-4xl font-extrabold text-slate-200 transition-colors group-hover:text-[#B5E8EB]">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7F7] text-[#004658] transition-all duration-300 group-hover:bg-[#004658] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <p className="mt-7 text-[10px] font-extrabold tracking-[0.16em] text-[#00869A]">
                  {step.duration}
                </p>

                <h3 className="mt-3 font-['Outfit',sans-serif] text-xl font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                {/* Bottom Detail */}
                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs font-semibold text-slate-400">
                    STEP {step.number}
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="text-[#004658] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {/* Step connector for desktop */}
                {index !== processSteps.length - 1 && (
                  <div className="absolute -right-4 top-12 z-10 hidden h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-[#00869A] lg:flex">
                    <ArrowUpRight size={14} />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-8 sm:mt-10 flex flex-col gap-5 rounded-[26px] bg-[#003B48] p-6 text-white sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#83E5E5]">
              <ShieldCheck size={25} />
            </div>

            <div>
              <h3 className="text-lg font-bold sm:text-xl">
                Quality at Every Stage
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-300">
                Thoughtful planning, careful testing and a focus on
                performance throughout the development journey.
              </p>
            </div>
          </div>

          <NavLink
            to="/schedule-consultation"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#004658] transition hover:bg-[#DDFBF3]"
          >
            Start Your Project
            <ArrowUpRight size={17} />
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default AndroidDevelopmentProcess;
