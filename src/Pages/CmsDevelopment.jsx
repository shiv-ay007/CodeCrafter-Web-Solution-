import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Cloud,
  Code2,
  FileText,
  Globe2,
  Image,
  Languages,
  LockKeyhole,
  PenTool,
  RefreshCw,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

// ======================================================
// EXISTING CMS TYPES — CONTENT PRESERVED
// ======================================================

const cmsTypes = [
  {
    title: "Headless CMS (Strapi / Sanity / Contentful)",
    desc:
      "Decouple your content management from the frontend. Deliver content seamlessly to web, mobile apps, and smart devices via GraphQL APIs.",
  },
  {
    title: "Custom WordPress Development",
    desc:
      "Custom theme & plugin development with zero bloat, ACF Pro integration, and high security hardening.",
  },
  {
    title: "Multi-Lingual & Global Content Hubs",
    desc:
      "Manage multi-region localized content, translation workflows, and role-based editorial publishing permissions.",
  },
  {
    title: "Enterprise Content Migration",
    desc:
      "Seamlessly migrate legacy content databases into modern Headless platforms without losing SEO ranking or data integrity.",
  },
];

// ======================================================
// NEW — CMS CAPABILITIES
// ======================================================

const cmsCapabilities = [
  {
    title: "Content Modeling",
    desc:
      "Create structured content types, relationships and reusable fields that keep your content organized.",
    icon: Boxes,
    tag: "STRUCTURE",
  },
  {
    title: "Editorial Workflows",
    desc:
      "Move content through drafting, review and approval stages with clear publishing responsibilities.",
    icon: Workflow,
    tag: "WORKFLOW",
  },
  {
    title: "Roles & Permissions",
    desc:
      "Control who can create, review, edit and publish content across teams and environments.",
    icon: LockKeyhole,
    tag: "ACCESS",
  },
  {
    title: "Media Management",
    desc:
      "Organize images and digital assets with a clean media workflow built for day-to-day publishing.",
    icon: Image,
    tag: "MEDIA",
  },
  {
    title: "Multi-Language Content",
    desc:
      "Manage localized content and region-specific publishing workflows from a centralized system.",
    icon: Languages,
    tag: "LOCALIZATION",
  },
  {
    title: "API Content Delivery",
    desc:
      "Expose structured content through APIs for websites, applications and connected digital experiences.",
    icon: Code2,
    tag: "API",
  },
];

// ======================================================
// NEW — ARCHITECTURE LAYERS
// ======================================================

const architectureLayers = [
  {
    title: "Content Team",
    desc: "Create & manage",
    icon: PenTool,
  },
  {
    title: "CMS Layer",
    desc: "Structure & workflow",
    icon: Settings2,
  },
  {
    title: "API Layer",
    desc: "Deliver content",
    icon: Code2,
  },
  {
    title: "Digital Channels",
    desc: "Web • Mobile • Apps",
    icon: Globe2,
  },
];

// ======================================================
// NEW — PUBLISHING WORKFLOW
// ======================================================

const workflowSteps = [
  {
    number: "01",
    title: "Plan",
    desc: "Define content structure, fields and publishing requirements.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Create",
    desc: "Editors create and manage content through the CMS interface.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Review",
    desc: "Teams review content, permissions and publishing readiness.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Publish",
    desc: "Approved content is delivered through the configured channels.",
    icon: Rocket,
  },
];

// ======================================================
// ANIMATIONS
// ======================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

// ======================================================
// MAIN COMPONENT
// ======================================================

const CmsDevelopment = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#FBFDFD] pt-32 pb-24 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* ==================================================
          GLOBAL BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[800px] overflow-hidden">

        <div
          className="absolute left-1/2 top-0 h-[650px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(0, 70, 88, 0.20) 0%, rgba(0, 168, 204, 0.08) 48%, rgba(251, 253, 253, 0) 80%)",
          }}
        />

      </div>


      {/* ==================================================
          HERO — EXISTING CONTENT PRESERVED
      ================================================== */}

      <section className="relative px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl text-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-[#004658]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#004658] sm:text-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#004658]" />

            <span>📝 Headless & Custom CMS Engineering</span>
          </motion.div>


          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-6 max-w-5xl text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-950 font-['Outfit',sans-serif] sm:text-6xl"
          >
            Empower Your Content Teams with{" "}

            <span className="bg-gradient-to-r from-[#004658] via-[#005A72] to-[#00A8CC] bg-clip-text text-transparent">
              Modern Headless CMS
            </span>
          </motion.h1>


          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-10 max-w-3xl text-base font-normal leading-relaxed text-slate-600 sm:text-xl"
          >
            We build flexible, lightning-fast content management systems that
            empower marketing teams to publish without needing developer
            intervention.
          </motion.p>

        </div>

      </section>


      {/* ==================================================
          EXISTING CMS SOLUTIONS — CONTENT PRESERVED
      ================================================== */}

      <section className="relative px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >

            {cmsTypes.map((item, idx) => (

              <motion.article
                key={item.title}
                variants={idx % 2 === 0 ? fadeLeft : fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[28px] border border-[#004658]/15 bg-white p-6 shadow-[0_15px_40px_rgba(16,58,73,0.05)] transition-all duration-300 hover:border-[#004658]/25 hover:shadow-[0_25px_60px_rgba(16,58,73,0.10)] sm:p-8"
              >

                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-100/50 blur-3xl transition-all duration-500 group-hover:bg-cyan-200/70" />

                <div className="relative z-10">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/10 text-[#004658]">
                    <Globe2 size={22} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#087F99]">
                    Explore capability
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                </div>

              </motion.article>

            ))}

          </motion.div>

        </div>

      </section>


      {/* ==================================================
          NEW SECTION 01 — CMS CAPABILITIES
      ================================================== */}

      <section className="relative mt-16 overflow-hidden bg-[#F5FAFB] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        {/* Grid background */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#004658 1.2px, transparent 1.2px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-200/25 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-cyan-200/20 blur-[130px]" />


        <div className="relative mx-auto max-w-[1360px]">

          {/* Header */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-16 max-w-4xl text-center"
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-white px-4 py-2 shadow-sm">

              <span className="h-2 w-2 rounded-full bg-[#00D8FF]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#004658] sm:text-[11px]">
                CMS Capabilities
              </span>

            </div>


            <h2 className="text-4xl font-black leading-[1.04] tracking-[-2px] text-[#0B1B2C] sm:text-5xl lg:text-6xl">

              Everything your content{" "}

              <span className="bg-gradient-to-r from-[#004658] via-[#007F99] to-[#00A3C4] bg-clip-text text-transparent">
                team needs.
              </span>

            </h2>


            <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base lg:text-[17px]">
              Build, organize, review and distribute content through a CMS
              environment designed around your publishing workflow.
            </p>

          </motion.div>


          {/* Capabilities */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {cmsCapabilities.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={index % 2 === 0 ? fadeLeft : fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(16,58,73,0.05)] transition-all duration-500 hover:border-[#004658]/20 hover:shadow-[0_25px_65px_rgba(16,58,73,0.11)] sm:p-7"
                >

                  <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-100/60 blur-3xl transition-all duration-500 group-hover:bg-cyan-200/80" />


                  <div className="relative z-10">

                    <div className="flex items-start justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/8 text-[#004658] transition-all duration-300 group-hover:bg-[#004658] group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#07819A]">
                        {item.tag}
                      </span>

                    </div>


                    <h3 className="mt-7 text-xl font-black tracking-tight text-[#0B1B2C]">
                      {item.title}
                    </h3>


                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.desc}
                    </p>


                    <div className="mt-7 flex items-center gap-2">

                      <div className="h-1.5 w-10 rounded-full bg-[#004658]" />
                      <div className="h-1.5 w-6 rounded-full bg-[#00A3C4]" />
                      <div className="h-1.5 w-3 rounded-full bg-cyan-200" />

                    </div>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>

      </section>


      {/* ==================================================
          NEW SECTION 02 — HEADLESS CMS ARCHITECTURE
      ================================================== */}

      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/30 blur-[140px]" />


        <div className="relative mx-auto max-w-[1360px]">

          {/* Header */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-16 max-w-4xl text-center"
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-white px-4 py-2 shadow-sm">

              <Cloud
                size={14}
                className="text-[#087F99]"
              />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#004658]">
                Headless CMS Architecture
              </span>

            </div>


            <h2 className="text-4xl font-black leading-[1.04] tracking-[-2px] text-[#0B1B2C] sm:text-5xl lg:text-6xl">

              Create once.
              <br />

              <span className="text-[#087F99]">
                Deliver everywhere.
              </span>

            </h2>


            <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base lg:text-[17px]">
              A headless architecture separates content management from the
              presentation layer, allowing structured content to power multiple
              digital channels.
            </p>

          </motion.div>


          {/* Architecture Visual */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative overflow-hidden rounded-[32px] border border-[#004658]/15 bg-gradient-to-br from-white via-[#F8FCFD] to-[#EAF8FA] p-6 shadow-[0_25px_80px_rgba(16,58,73,0.08)] sm:p-8 lg:p-10"
          >

            {/* Browser-like content manager visual */}

            <div className="grid gap-8 lg:grid-cols-5">

              {architectureLayers.map((item, index) => {

                const Icon = item.icon;

                return (
                  <React.Fragment key={item.title}>

                    <motion.div
                      whileHover={{
                        y: -7,
                      }}
                      className="relative z-10 rounded-[24px] border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:border-[#004658]/20 hover:shadow-xl"
                    >

                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#004658]/8 text-[#004658]">
                        <Icon size={23} />
                      </div>

                      <p className="mt-4 text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#087F99]">
                        Layer {index + 1}
                      </p>

                      <h3 className="mt-2 text-base font-black text-[#0B1B2C]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[10px] font-medium text-slate-500">
                        {item.desc}
                      </p>

                    </motion.div>


                    {index < architectureLayers.length - 1 && (
                      <div className="hidden items-center justify-center text-[#00A3C4] lg:flex">

                        <ArrowRight size={18} />

                      </div>
                    )}

                  </React.Fragment>
                );
              })}

            </div>


            {/* Supporting technology strip */}

            <div className="mt-8 border-t border-slate-200/80 pt-6">

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">

                {[
                  {
                    icon: Server,
                    text: "Structured Content",
                  },
                  {
                    icon: Code2,
                    text: "API Delivery",
                  },
                  {
                    icon: ShieldCheck,
                    text: "Access Control",
                  },
                  {
                    icon: RefreshCw,
                    text: "Reusable Content",
                  },
                  {
                    icon: Zap,
                    text: "Fast Publishing",
                  },
                ].map((item) => {

                  const Icon = item.icon;

                  return (
                    <span
                      key={item.text}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[9px] font-bold text-[#315466]"
                    >
                      <Icon
                        size={13}
                        className="text-[#087F99]"
                      />

                      {item.text}
                    </span>
                  );
                })}

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ==================================================
          NEW SECTION 03 — CONTENT PUBLISHING WORKFLOW
      ================================================== */}

      <section className="relative overflow-hidden bg-[#F5FAFB] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#004658 1.2px, transparent 1.2px)",
            backgroundSize: "30px 30px",
          }}
        />


        <div className="relative mx-auto max-w-[1360px]">

          {/* Header */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-16 max-w-4xl text-center"
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-white px-4 py-2 shadow-sm">

              <Workflow
                size={14}
                className="text-[#087F99]"
              />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#004658]">
                Content Publishing Workflow
              </span>

            </div>


            <h2 className="text-4xl font-black leading-[1.04] tracking-[-2px] text-[#0B1B2C] sm:text-5xl lg:text-6xl">

              From draft to{" "}

              <span className="text-[#087F99]">
                published content.
              </span>

            </h2>


            <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
              Keep your editorial process organized with structured stages
              from content planning through review and publication.
            </p>

          </motion.div>


          {/* Workflow */}

          <div className="relative">

            {/* Desktop line */}

            <div className="pointer-events-none absolute left-[10%] right-[10%] top-[40px] hidden h-px bg-[#BBDCE2] lg:block" />

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "80%",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-[10%] top-[39px] hidden h-[2px] bg-gradient-to-r from-[#004658] via-[#00A3C4] to-[#004658] lg:block"
            />


            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

              {workflowSteps.map((step, index) => {

                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="relative pt-0 lg:pt-16"
                  >

                    {/* Node */}

                    <div className="relative z-10 mx-auto mb-5 flex h-[80px] w-[80px] items-center justify-center rounded-full border border-[#004658]/15 bg-white shadow-[0_12px_30px_rgba(16,58,73,0.10)]">

                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#004658]/8 text-[#004658]">

                        <Icon size={22} />

                      </div>

                    </div>


                    {/* Card */}

                    <motion.div
                      whileHover={{
                        y: -6,
                      }}
                      className="rounded-[26px] border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-[#004658]/20 hover:shadow-xl"
                    >

                      <span className="font-mono text-xs font-black text-[#087F99]">
                        {step.number}
                      </span>

                      <h3 className="mt-2 text-xl font-black text-[#0B1B2C]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {step.desc}
                      </p>

                    </motion.div>

                  </motion.article>
                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          EXISTING CTA — CONTENT PRESERVED
      ================================================== */}

      <section className="relative px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">

        <div className="mx-auto max-w-5xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[32px] bg-[#004658] p-8 text-center text-white shadow-[0_30px_80px_rgba(0,70,88,0.20)] sm:p-12 lg:p-16"
          >

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Cloud size={25} />
            </div>


            <h3 className="mb-4 text-2xl font-bold font-['Outfit',sans-serif] sm:text-4xl">
              Want to Upgrade Your Content Infrastructure?
            </h3>


            <p className="mx-auto mb-8 max-w-2xl text-sm text-slate-200 sm:text-base">
              Schedule a discovery call to learn how Headless CMS can
              accelerate your marketing publishing speed.
            </p>


            <Link
              to="/schedule-consultation"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#004658] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 sm:text-base"
            >
              Schedule CMS Consultation
              <ArrowRight size={17} />
            </Link>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default CmsDevelopment;