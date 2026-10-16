
import React from "react";
import {
  Compass,
  Layers3,
  Code2,
  Rocket,
  Headset,
  ArrowUpRight,
  Check,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand the Business",
    description:
      "We start by understanding your goals, audience, challenges, and what success looks like for your business.",
    icon: Compass,
    tag: "Discovery",
  },
  {
    number: "02",
    title: "Plan with Purpose",
    description:
      "We define the scope, priorities, user experience, technology, and a clear roadmap before development begins.",
    icon: Layers3,
    tag: "Strategy",
  },
  {
    number: "03",
    title: "Build & Collaborate",
    description:
      "Our team develops your solution in focused stages, shares progress, and incorporates feedback along the way.",
    icon: Code2,
    tag: "Execution",
  },
  {
    number: "04",
    title: "Launch with Confidence",
    description:
      "We test the experience, prepare for launch, and help your team move forward with a reliable digital product.",
    icon: Rocket,
    tag: "Delivery",
  },
  {
    number: "05",
    title: "Support What Comes Next",
    description:
      "After launch, we can help with improvements, maintenance, performance, and the next phase of your product.",
    icon: Headset,
    tag: "Ongoing support",
  },
];

const ClientProcess = () => {
  return (
    <section
      id="client-process"
      className="relative isolate overflow-hidden bg-[#f3f9fb] py-16 sm:py-20 lg:py-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-teal-200/30 blur-[100px]" />

      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#004658] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            The way we work
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Great Partnerships.
            <span className="block text-[#00758a]">
              Thoughtful Execution.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            From the first conversation to the next stage of growth, we keep
            your goals at the centre of every decision.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
          {/* Connected process */}
          <div className="relative">
            <div className="absolute bottom-10 left-[23px] top-10 w-px bg-gradient-to-b from-cyan-400 via-[#9ccbd3] to-transparent sm:left-[29px]" />

            <div className="space-y-3 sm:space-y-4">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="group relative grid grid-cols-[46px_minmax(0,1fr)] gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_5px_22px_rgba(0,50,65,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00758a]/35 hover:shadow-[0_14px_35px_rgba(0,70,88,0.09)] sm:grid-cols-[60px_minmax(0,1fr)] sm:gap-5 sm:rounded-3xl sm:p-6"
                  >
                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8edf0] bg-[#f0fafb] text-[#006477] transition-colors duration-300 group-hover:border-[#004658] group-hover:bg-[#004658] group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="text-[11px] font-extrabold tracking-[0.12em] text-[#008398]">
                          STEP {step.number}
                        </span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                          {step.tag}
                        </span>
                      </div>

                      <h3 className="mt-2 text-base font-bold tracking-tight text-slate-900 transition-colors group-hover:text-[#006477] sm:text-lg">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
                        {step.description}
                      </p>
                    </div>

                    {/* <span className="absolute right-4 top-4 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#00758a] sm:right-6 sm:top-6">
                      <ArrowUpRight size={18} />
                    </span> */}
                  </article>
                );
              })}
            </div>
          </div>

          {/* Partnership panel */}
          <aside className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#003744] via-[#004658] to-[#00677a] p-6 text-white shadow-[0_22px_60px_rgba(0,50,65,0.18)] sm:p-8 lg:sticky lg:top-28">
            <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-5 -top-5 h-32 w-32 rounded-full border border-white/10" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-100">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Built around you
              </span>

              <h3 className="mt-6 text-2xl font-extrabold leading-tight sm:text-3xl">
                Your goals.
                <span className="block text-cyan-300">
                  Our shared focus.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-200">
                We believe good technology starts with listening, grows through
                collaboration, and delivers value when it solves real problems.
              </p>

              <div className="my-7 h-px bg-white/15" />

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">
                What you can expect
              </p>

              <ul className="mt-4 space-y-4">
                {[
                  "Clear communication at every stage",
                  "Decisions guided by your business goals",
                  "Collaboration from planning to launch",
                  "A practical path for future improvements",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-white/90"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-cyan-200">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#004658] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Discuss Your Project
                <ArrowUpRight size={17} />
              </a>

              <p className="mt-4 text-center text-[11px] leading-5 text-cyan-100/75">
                Have a challenge in mind? Let’s talk about the right approach.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ClientProcess;
