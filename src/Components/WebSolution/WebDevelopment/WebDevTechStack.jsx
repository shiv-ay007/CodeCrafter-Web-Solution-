import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Server,
  Activity,
  Zap,
} from "lucide-react";


// ======================================================
// TECH STACK DATA
// ======================================================

const techCategories = [
  {
    number: "01",
    category: "Frontend & UI Frameworks",
    short: "FRONTEND",
    description:
      "Modern interface technologies for responsive, scalable and high-performance web experiences.",
    icon: Globe2,

    items: [
      {
        name: "React 19",
        desc: "Latest server actions & concurrent rendering",
      },
      {
        name: "Next.js 15",
        desc: "App router, dynamic ISR & edge rendering",
      },
      {
        name: "Tailwind CSS 4",
        desc: "Ultra-fast utility architecture",
      },
      {
        name: "TypeScript",
        desc: "Strict static types & zero runtime crashes",
      },
    ],
  },

  {
    number: "02",
    category: "Backend & APIs",
    short: "BACKEND",
    description:
      "Reliable server-side technologies for business logic, APIs, integrations and scalable applications.",
    icon: Server,

    items: [
      {
        name: "Node.js & Express",
        desc: "High-throughput asynchronous I/O",
      },
      {
        name: "Python & FastAPI",
        desc: "High-speed AI microservices & data pipelines",
      },
      {
        name: "Go (Golang)",
        desc: "Ultra-low latency concurrency engines",
      },
      {
        name: "GraphQL & REST",
        desc: "Strict typed API schema federation",
      },
    ],
  },

  {
    number: "03",
    category: "Databases & Caching",
    short: "DATA",
    description:
      "Data technologies designed to support reliable storage, fast access and scalable application workloads.",
    icon: Database,

    items: [
      {
        name: "PostgreSQL & Supabase",
        desc: "ACID compliant relational storage & RLS",
      },
      {
        name: "MongoDB",
        desc: "Flexible NoSQL JSON document store",
      },
      {
        name: "Redis Edge",
        desc: "Sub-millisecond in-memory caching",
      },
      {
        name: "Prisma & Drizzle",
        desc: "Type-safe ORM data access layers",
      },
    ],
  },

  {
    number: "04",
    category: "DevOps & Cloud",
    short: "INFRASTRUCTURE",
    description:
      "Cloud and delivery tools that support deployment, automation, monitoring and scalable infrastructure.",
    icon: Cloud,

    items: [
      {
        name: "AWS & Cloudflare",
        desc: "Global CDN edge compute & serverless",
      },
      {
        name: "Docker & Kubernetes",
        desc: "Automated container orchestration",
      },
      {
        name: "GitHub Actions",
        desc: "Automated continuous integration & release",
      },
      {
        name: "Datadog & Sentry",
        desc: "Real-time telemetry & error monitoring",
      },
    ],
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

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 45,
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

const WebDevTechStack = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFC] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#004658 1.2px, transparent 1.2px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="pointer-events-none absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-cyan-300/15 blur-[130px]" />

      <div className="pointer-events-none absolute -right-48 bottom-10 h-[450px] w-[450px] rounded-full bg-cyan-200/20 blur-[140px]" />


      {/* =================================================
          CONTAINER
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-[1280px]">


        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mb-16 max-w-4xl text-center lg:mb-20"
        >

          {/* Eyebrow */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-white px-4 py-2 shadow-sm">

            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00D8FF]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#004658] sm:text-[11px]">
              Tech Stack Matrix
            </span>

          </div>


          {/* Heading */}

          <h2 className="text-4xl font-black leading-[1.04] tracking-[-2px] text-[#0B1B2C] sm:text-5xl lg:text-6xl">

            Modern Full-Stack{" "}

            <span className="bg-gradient-to-r from-[#004658] via-[#007F99] to-[#00A3C4] bg-clip-text text-transparent">
              Engineering Stack
            </span>

          </h2>


          {/* Description */}

          <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base lg:text-[17px]">
            We leverage proven, bleeding-edge frameworks designed for
            ultra-low latency and seamless vertical scaling.
          </p>

        </motion.div>


        {/* =================================================
            FULL STACK ARCHITECTURE VISUAL
        ================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="relative mb-10 overflow-hidden rounded-[30px] border border-[#004658]/15 bg-gradient-to-br from-white via-[#F8FCFD] to-[#EAF8FA] p-6 shadow-[0_20px_60px_rgba(16,58,73,0.06)] sm:p-8 lg:p-10"
        >

          {/* Glow */}

          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-cyan-200/30 blur-[100px]" />


          <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">

            {/* Left text */}

            <div className="lg:col-span-4">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#004658]">
                <Layers3 size={13} />
                Full-Stack Architecture
              </div>

              <h3 className="text-2xl font-black tracking-[-1px] text-[#0B1B2C] sm:text-3xl">

                One stack.
                <br />

                <span className="text-[#087F99]">
                  Every layer connected.
                </span>

              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                From the interface your users interact with to the cloud
                infrastructure behind it, every technology layer works
                together as one system.
              </p>

            </div>


            {/* Architecture Flow */}

            <div className="lg:col-span-8">

              <div className="relative">

                {/* Connecting line */}

                <div className="absolute left-[8%] right-[8%] top-[37px] hidden h-px bg-gradient-to-r from-[#004658]/10 via-[#00A3C4]/60 to-[#004658]/10 md:block" />


                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                  {[
                    {
                      title: "Frontend",
                      icon: Code2,
                      tech: "React / Next.js",
                    },
                    {
                      title: "Backend",
                      icon: Server,
                      tech: "Node / Python",
                    },
                    {
                      title: "Data",
                      icon: Database,
                      tech: "Mongo / SQL",
                    },
                    {
                      title: "Cloud",
                      icon: Cloud,
                      tech: "AWS / Edge",
                    },
                  ].map((item) => {

                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{
                          y: -5,
                        }}
                        className="relative z-10 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:border-[#004658]/20 hover:shadow-lg"
                      >

                        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#004658]/8 text-[#004658]">
                          <Icon size={18} />
                        </div>

                        <h4 className="mt-3 text-sm font-extrabold text-[#0B1B2C]">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-[9px] font-medium text-slate-500">
                          {item.tech}
                        </p>

                      </motion.div>
                    );
                  })}

                </div>

              </div>

            </div>

          </div>


          {/* Bottom architecture benefits */}

          <div className="relative mt-8 flex flex-wrap gap-3 border-t border-slate-200/80 pt-6">

            {[
              {
                icon: Zap,
                text: "Performance Focused",
              },
              {
                icon: ShieldIcon,
                text: "Secure Infrastructure",
              },
              {
                icon: Activity,
                text: "Observable Systems",
              },
              {
                icon: GitBranch,
                text: "Continuous Delivery",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[9px] font-bold uppercase tracking-wider text-[#315466]"
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

        </motion.div>


        {/* =================================================
            TECHNOLOGY CATEGORIES
        ================================================= */}

        <div className="grid gap-5 md:grid-cols-2">

          {techCategories.map((category, index) => {

            const Icon = category.icon;

            return (
              <motion.article
                key={category.category}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(16,58,73,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#004658]/20 hover:shadow-[0_25px_65px_rgba(16,58,73,0.10)] sm:p-7"
              >

                {/* Background Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-100/50 blur-3xl transition-all duration-500 group-hover:bg-cyan-200/70" />


                {/* Decorative Grid */}

                <div
                  className="pointer-events-none absolute bottom-0 right-0 h-36 w-36 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#004658 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  }}
                />


                {/* =================================================
                    CARD HEADER
                ================================================= */}

                <div className="relative z-10 flex items-start justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/8 text-[#004658] transition-all duration-300 group-hover:bg-[#004658] group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <div>

                      <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#07819A]">
                        {category.short}
                      </p>

                      <h3 className="mt-1 text-lg font-black text-[#0B1B2C] sm:text-xl">
                        {category.category}
                      </h3>

                    </div>

                  </div>


                  {/* Number */}

                  <span className="font-mono text-sm font-black text-[#004658]/20 transition-colors duration-300 group-hover:text-[#004658]">
                    {category.number}
                  </span>

                </div>


                {/* Description */}

                <p className="relative z-10 mt-5 max-w-xl text-sm leading-6 text-slate-600">
                  {category.description}
                </p>


                {/* Divider */}

                <div className="my-6 h-px bg-slate-100" />


                {/* =================================================
                    TECH ITEMS
                ================================================= */}

                <div className="relative z-10 grid gap-3 sm:grid-cols-2">

                  {category.items.map((item, itemIndex) => (

                    <motion.div
                      key={item.name}
                      whileHover={{
                        x: 4,
                      }}
                      className="group/item rounded-2xl border border-slate-100 bg-[#FBFDFD] p-4 transition-all duration-300 hover:border-[#004658]/15 hover:bg-[#F4FAFB]"
                    >

                      <div className="flex items-start justify-between gap-3">

                        <div>

                          <h4 className="text-sm font-extrabold text-slate-900 transition-colors duration-300 group-hover/item:text-[#004658]">
                            {item.name}
                          </h4>

                          <p className="mt-1 text-[10px] leading-5 text-slate-500">
                            {item.desc}
                          </p>

                        </div>


                        <ArrowRight
                          size={14}
                          className="mt-0.5 shrink-0 text-[#00A3C4] opacity-0 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:opacity-100"
                        />

                      </div>

                    </motion.div>

                  ))}

                </div>


                {/* Bottom Accent */}

                <div className="relative z-10 mt-6 flex items-center gap-2">

                  <div className="h-1 w-10 rounded-full bg-[#004658]" />

                  <div className="h-1 w-6 rounded-full bg-[#00A3C4]" />

                  <div className="h-1 w-3 rounded-full bg-cyan-200" />

                </div>

              </motion.article>
            );
          })}

        </div>


        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mt-12 max-w-3xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white px-4 py-2 shadow-sm">

            <Code2
              size={14}
              className="text-[#087F99]"
            />

            <span className="text-[10px] font-bold uppercase tracking-wider text-[#315466]">
              Built around your product requirements
            </span>

          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Technology choices are aligned with the application's goals,
            expected scale, performance requirements and deployment strategy.
          </p>

        </motion.div>

      </div>

    </section>
  );
};


// ======================================================
// SMALL LOCAL ICON COMPONENT
// ======================================================

const ShieldIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3 5 6v5c0 4.6 2.9 8.4 7 10 4.1-1.6 7-5.4 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default WebDevTechStack;