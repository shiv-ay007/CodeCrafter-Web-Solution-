import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,  
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Globe2,
  Layers3,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites designed to communicate your brand, services and business value with clarity.",
    icon: BriefcaseBusiness,
    tag: "CORPORATE & BUSINESS",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Interactive dashboards, portals, management systems and workflow-driven web applications.",
    icon: Globe2,
    tag: "APPLICATIONS",
    size: "lg:col-span-1",
  },
  {
    number: "03",
    title: "E-Commerce",
    description:
      "Modern online stores with product discovery, catalogues, customer flows and scalable architecture.",
    icon: ShoppingCart,
    tag: "COMMERCE",
    size: "lg:col-span-1",
  },
  {
    number: "04",
    title: "SaaS & Digital Platforms",
    description:
      "Scalable web platforms built for teams, customers, workflows and long-term product growth.",
    icon: Layers3,
    tag: "DIGITAL PRODUCTS",
    size: "lg:col-span-2",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
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

const WhatWeBuild = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFC] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#004658 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-300/15 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-cyan-200/20 blur-[130px]" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px]">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-16 max-w-4xl text-center lg:mb-20"
        >

          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#00D8FF]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#004658] sm:text-[11px]">
              WHAT WE BUILD
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-black leading-[1.05] tracking-[-2px] text-slate-900 sm:text-5xl lg:text-6xl">
            Web solutions built around{" "}
            <span className="bg-gradient-to-r from-[#004658] via-[#00738E] to-[#00A3C4] bg-clip-text text-transparent">
              your business.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base lg:text-[17px]">
            From business websites and digital platforms to powerful web
            applications and e-commerce experiences, we build complete web
            solutions designed for real-world needs.
          </p>

        </motion.div>


        {/* =================================================
            BENTO GRID
        ================================================= */}

        <div className="grid auto-rows-[190px] gap-5 lg:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
                className={`group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(16,58,73,0.05)] transition-all duration-300 hover:border-[#004658]/20 hover:shadow-[0_25px_60px_rgba(16,58,73,0.10)] lg:p-7 ${service.size}`}
              >

                {/* Background Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-100/60 blur-3xl transition-all duration-500 group-hover:bg-cyan-200/70" />

                {/* Small Decorative Line */}

                <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#004658] to-[#00A3C4] transition-all duration-500 group-hover:w-full" />

                {/* =================================================
                    TOP ROW
                ================================================= */}

                <div className="relative z-10 flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/8 text-[#004658] transition-all duration-300 group-hover:bg-[#004658] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <span className="font-mono text-xs font-bold tracking-widest text-[#004658]/30">
                    {service.number}
                  </span>

                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative z-10 mt-8">

                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#07819A]">
                    {service.tag}
                  </span>

                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                </div>

                {/* =================================================
                    LARGE CARD VISUAL
                ================================================= */}

                {index === 0 && (
                  <div className="pointer-events-none absolute bottom-6 right-6 hidden lg:block">

                    <div className="flex items-end gap-3">

                      {/* Desktop */}

                      <div className="w-40 rounded-2xl border border-slate-200 bg-[#F3F9FA] p-2 shadow-sm">

                        <div className="rounded-xl bg-white p-3">

                          <div className="flex items-center justify-between">
                            <div className="h-2 w-16 rounded-full bg-[#004658]" />
                            <div className="h-4 w-4 rounded-full bg-cyan-100" />
                          </div>

                          <div className="mt-4 h-2 w-[85%] rounded-full bg-slate-200" />
                          <div className="mt-2 h-2 w-[65%] rounded-full bg-slate-200" />

                          <div className="mt-4 grid grid-cols-3 gap-2">

                            <div className="h-12 rounded-lg bg-[#E9F7F9]" />
                            <div className="h-12 rounded-lg bg-[#F4F8F9]" />
                            <div className="h-12 rounded-lg bg-[#EEF8F9]" />

                          </div>

                        </div>
                      </div>

                      {/* Mobile */}

                      <div className="w-14 rounded-[15px] border border-slate-200 bg-[#F3F9FA] p-1.5 shadow-sm">

                        <div className="rounded-[10px] bg-white p-1.5">

                          <div className="mx-auto mb-2 h-1 w-4 rounded-full bg-slate-300" />

                          <div className="h-2 w-full rounded-full bg-[#004658]" />

                          <div className="mt-2 h-2 w-[75%] rounded-full bg-slate-200" />

                          <div className="mt-3 h-9 rounded-md bg-[#EAF7F8]" />

                          <div className="mt-2 h-7 rounded-md bg-slate-100" />

                        </div>

                      </div>

                    </div>

                  </div>
                )}

                {/* =================================================
                    SMALL ARROW
                ================================================= */}

                <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#004658] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#004658]">
                  <ArrowUpRight size={17} />
                </div>

              </motion.article>
            );
          })}

        </div>


        {/* =====================================================
            FULL-STACK FLOW VISUAL
        ====================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 overflow-hidden rounded-[30px] border border-[#004658]/15 bg-gradient-to-br from-white to-[#ECF8FA] p-6 shadow-[0_20px_60px_rgba(16,58,73,0.06)] sm:p-8 lg:p-10"
        >

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">

            {/* Left */}

            <div className="lg:col-span-4">

              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#004658]">
                <Sparkles size={12} />
                Complete Web Solutions
              </div>

              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                From interface to{" "}
                <span className="text-[#087F99]">
                  infrastructure.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                A complete web solution connects the experience your users see
                with the systems running behind it.
              </p>

            </div>


            {/* Right */}

            <div className="lg:col-span-8">

              <div className="grid items-center gap-3 sm:grid-cols-2 lg:grid-cols-5">

                {[
                  {
                    title: "Web UI",
                    icon: Globe2,
                    tech: "React / Next.js",
                  },
                  {
                    title: "API",
                    icon: Layers3,
                    tech: "REST / GraphQL",
                  },
                  {
                    title: "Backend",
                    icon: BarChart3,
                    tech: "Node / Python",
                  },
                  {
                    title: "Database",
                    icon: Layers3,
                    tech: "MongoDB / SQL",
                  },
                  {
                    title: "Cloud",
                    icon: Sparkles,
                    tech: "AWS / Vercel",
                  },
                ].map((item, index) => {
                  const ItemIcon = item.icon;

                  return (
                    <React.Fragment key={item.title}>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                      >
                        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#004658]/8 text-[#004658]">
                          <ItemIcon size={19} />
                        </div>

                        <h4 className="mt-3 text-sm font-extrabold text-slate-900">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-[9px] font-medium text-slate-500">
                          {item.tech}
                        </p>
                      </motion.div>

                      {index < 4 && (
                        <div className="hidden items-center justify-center text-[#00A3C4] lg:flex">
                          <ArrowRight size={17} />
                        </div>
                      )}

                    </React.Fragment>
                  );
                })}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default WhatWeBuild;