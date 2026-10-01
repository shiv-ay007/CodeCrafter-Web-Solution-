import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  Boxes,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Network,
  Rocket,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

// ======================================================
// PROCESS DATA
// ======================================================

const devSteps = [
  {
    num: "01",
    title: "Architecture & System Design",
    desc:
      "Database schema modeling (PostgreSQL / MongoDB), REST & GraphQL API specifications, and cloud infrastructure mapping.",
    badge: "System Design",
    icon: Layers3,
    accent: "Architecture",
  },
  {
    num: "02",
    title: "Component Engineering & UI",
    desc:
      "Modular React 19 / Next.js component system with strict TypeScript type safety, fluid layouts, and accessible UI interactions.",
    badge: "Frontend",
    icon: Boxes,
    accent: "Product Engineering",
  },
  {
    num: "03",
    title: "Microservices & API Integration",
    desc:
      "Sub-second serverless edge functions, asynchronous background workers, Redis cache layers, and webhooks.",
    badge: "Backend",
    icon: Network,
    accent: "API & Data",
  },
  {
    num: "04",
    title: "Automated CI/CD & Cloud Launch",
    desc:
      "Docker containerization, automated unit & integration test suites, and zero-downtime deployment pipelines.",
    badge: "DevOps",
    icon: Rocket,
    accent: "Deployment",
  },
];

// ======================================================
// ANIMATIONS
// ======================================================

const headerAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// ======================================================
// MAIN COMPONENT
// ======================================================

const WebDevProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#FBFDFD] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage:
            "radial-gradient(#004658 1.2px, transparent 1.2px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-[15%] h-[430px] w-[430px] rounded-full bg-cyan-200/20 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[10%] h-[430px] w-[430px] rounded-full bg-cyan-300/15 blur-[130px]" />


      {/* ==================================================
          CONTAINER
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px]">


        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          variants={headerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-white px-4 py-2 shadow-sm">

            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00D8FF]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#004658] sm:text-[11px]">
              Software Engineering Lifecycle
            </span>

          </div>


          <h2 className="text-4xl font-black leading-[1.05] tracking-[-2px] text-[#0B1B2C] sm:text-5xl lg:text-6xl">
            How We Build{" "}

            <span className="bg-gradient-to-r from-[#004658] via-[#007F99] to-[#00A3C4] bg-clip-text text-transparent">
              Scalable Web Applications
            </span>
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base lg:text-[17px]">
            From the initial architectural blueprint to automated zero-downtime
            deployment, our process guarantees enterprise reliability.
          </p>

        </motion.div>


        {/* ==================================================
            PROCESS TIMELINE
        ================================================== */}

        <div className="relative">


          {/* ==================================================
              CONNECTING LINE — DESKTOP ONLY
          ================================================== */}

          <div className="pointer-events-none absolute left-[10%] right-[10%] top-[39px] hidden lg:block">

            {/* Base line */}

            <div className="h-px w-full bg-[#BFDDE2]" />

            {/* Animated line */}

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-[#004658] via-[#007F99] to-[#00D8FF]"
            />

          </div>


          {/* ==================================================
              STEP GRID

              IMPORTANT:
              Numbers are ABSOLUTE.
              Cards are in normal document flow.
              This prevents overlap.
          ================================================== */}

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">

            {devSteps.map((step, index) => {

              const Icon = step.icon;

              return (
                <motion.article
                  key={step.num}
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="relative pt-16 lg:pt-20"
                >

                  {/* ==================================================
                      NUMBER NODE

                      This is ABSOLUTE so it does not affect card
                      height or flow.
                  ================================================== */}

                  <div className="absolute left-1/2 top-0 z-20 flex -translate-x-1/2 items-center justify-center">

                    <motion.div
                      whileHover={{
                        scale: 1.06,
                      }}
                      className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#004658]/15 bg-white shadow-[0_12px_30px_rgba(16,58,73,0.10)]"
                    >

                      <div className="absolute inset-[6px] rounded-full border border-[#00A3C4]/25 transition-all duration-500" />

                      <span className="relative z-10 font-mono text-lg font-black text-[#004658]">
                        {step.num}
                      </span>

                    </motion.div>

                  </div>


                  {/* ==================================================
                      CARD
                  ================================================== */}

                  <div className="group relative min-h-[395px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(16,58,73,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#004658]/20 hover:shadow-[0_25px_65px_rgba(16,58,73,0.12)] sm:p-7">

                    {/* Glow */}

                    <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-100/50 blur-3xl transition-all duration-500 group-hover:bg-cyan-200/70" />


                    {/* Decorative Grid */}

                    <div
                      className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 opacity-[0.035]"
                      style={{
                        backgroundImage:
                          "radial-gradient(#004658 1px, transparent 1px)",
                        backgroundSize: "12px 12px",
                      }}
                    />


                    {/* Top area */}

                    <div className="relative z-10 flex items-start justify-between">

                      <motion.div
                        whileHover={{
                          rotate: 5,
                          scale: 1.08,
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/8 text-[#004658] transition-colors duration-300 group-hover:bg-[#004658] group-hover:text-white"
                      >
                        <Icon size={22} />
                      </motion.div>


                      <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                        {step.accent}
                      </span>

                    </div>


                    {/* Badge */}

                    <div className="relative z-10 mt-7">

                      <span className="inline-flex items-center gap-2 rounded-full bg-[#004658]/6 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.13em] text-[#004658]">

                        <span className="h-1.5 w-1.5 rounded-full bg-[#00A3C4]" />

                        {step.badge}

                      </span>

                    </div>


                    {/* Title */}

                    <h3 className="relative z-10 mt-3 text-xl font-black leading-tight tracking-[-0.5px] text-[#0B1B2C] transition-colors duration-300 group-hover:text-[#004658] sm:text-[22px]">
                      {step.title}
                    </h3>


                    {/* Description */}

                    <p className="relative z-10 mt-4 text-sm leading-7 text-slate-600">
                      {step.desc}
                    </p>


                    {/* Bottom Accent */}

                    <div className="absolute bottom-7 left-7 flex items-center gap-2">

                      <div className="h-1.5 w-10 rounded-full bg-[#004658]" />
                      <div className="h-1.5 w-6 rounded-full bg-[#00A3C4]" />
                      <div className="h-1.5 w-3 rounded-full bg-cyan-200" />

                    </div>

                  </div>

                </motion.article>
              );
            })}

          </div>


          {/* ==================================================
              LARGE FIXED GAP BEFORE ENGINEERING FLOW
          ================================================== */}

          <div className="h-16 lg:h-20" />


          {/* ==================================================
              ENGINEERING FLOW VISUAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
            }}
            className="relative overflow-hidden rounded-[30px] border border-[#004658]/15 bg-gradient-to-br from-white via-[#F7FCFD] to-[#EAF8FA] p-6 shadow-[0_20px_60px_rgba(16,58,73,0.06)] sm:p-8 lg:p-10"
          >

            {/* Glow */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-200/35 blur-[100px]" />


            <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12">


              {/* ==================================================
                  LEFT CONTENT
              ================================================== */}

              <div className="lg:col-span-4">

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#004658]">
                  <GitBranch size={13} />
                  Engineering Flow
                </div>


                <h3 className="text-2xl font-black tracking-[-1px] text-[#0B1B2C] sm:text-3xl">
                  From blueprint to{" "}
                  <span className="text-[#087F99]">
                    production.
                  </span>
                </h3>


                <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
                  Each stage builds on the previous one to create a complete,
                  reliable and scalable web application.
                </p>

              </div>


              {/* ==================================================
                  RIGHT FLOW

                  FIX:
                  Use 4 cards in a flex row.
                  Arrows are inside each item instead of becoming
                  separate grid items.
              ================================================== */}

              <div className="lg:col-span-8">

                <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:gap-3">

                  {[
                    {
                      icon: Layers3,
                      title: "Plan",
                      text: "Architecture",
                    },
                    {
                      icon: Code2,
                      title: "Build",
                      text: "Components",
                    },
                    {
                      icon: Server,
                      title: "Connect",
                      text: "APIs & Data",
                    },
                    {
                      icon: Cloud,
                      title: "Launch",
                      text: "Cloud Deploy",
                    },
                  ].map((item, index) => {

                    const ItemIcon = item.icon;

                    return (
                      <React.Fragment key={item.title}>

                        <motion.div
                          whileHover={{
                            y: -5,
                          }}
                          className="flex min-h-[118px] flex-1 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:border-[#004658]/15 hover:shadow-lg"
                        >

                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#004658]/8 text-[#004658]">
                            <ItemIcon size={18} />
                          </div>

                          <h4 className="mt-3 text-sm font-extrabold text-[#0B1B2C]">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-[9px] font-medium text-slate-500">
                            {item.text}
                          </p>

                        </motion.div>


                        {/* Arrow */}

                        {index < 3 && (
                          <div className="hidden shrink-0 items-center justify-center text-[#00A3C4] lg:flex">
                            <ArrowRight size={16} />
                          </div>
                        )}

                      </React.Fragment>
                    );
                  })}

                </div>

              </div>

            </div>


            {/* ==================================================
                ENGINEERING FOCUS
            ================================================== */}

            <div className="relative mt-8 flex flex-wrap items-center gap-3 border-t border-slate-200/80 pt-6">

              <span className="mr-1 text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                Engineering Focus
              </span>


              {[
                {
                  icon: Database,
                  text: "Data",
                },
                {
                  icon: ShieldCheck,
                  text: "Security",
                },
                {
                  icon: Zap,
                  text: "Performance",
                },
                {
                  icon: Rocket,
                  text: "Deployment",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <span
                    key={item.text}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[9px] font-bold text-[#315466]"
                  >
                    <Icon
                      size={12}
                      className="text-[#087F99]"
                    />

                    {item.text}
                  </span>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default WebDevProcess;