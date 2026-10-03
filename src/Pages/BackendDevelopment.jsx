import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Boxes,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe2,
  Layers,
  LockKeyhole,
  Network,
  Router,
  Server,
  ShieldCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import dssCrm1 from "../assets/images/backend-img1.webp";
import dssCrm2 from "../assets/images/project4.webp";
import dssCrm3 from "../assets/images/project2.webp";
import dssCrm4 from "../assets/images/project3.webp";
// ======================================================
// CORE BACKEND ARCHITECTURE DATA
// ======================================================

const backendCards = [
  {
    title: "Microservices & Distributed Systems",
    icon: Cpu,
    desc:
      "Decoupled domain services built with Node.js, Go, or .NET microservices, communicating via high-throughput gRPC or RESTful JSON protocols.",
  },
  {
    title: "High Concurrency & Database Tuning",
    icon: Database,
    desc:
      "PostgreSQL, MySQL & SQL Server connection pooling, Redis caching layers, and Entity Framework Core / Dapper query optimization handling 10,000+ requests/sec.",
  },
  {
    title: "Asynchronous Queue Workers",
    icon: Layers,
    desc:
      "RabbitMQ, BullMQ, and Azure Service Bus / Hangfire background task processing for email sending, video rendering, and financial reporting.",
  },
  {
    title: "Enterprise Security & RBAC",
    icon: ShieldCheck,
    desc:
      "OAuth 2.0, JWT authentication, .NET Identity & Azure AD integration, rate limiting, and encrypted database backups.",
  },
];


// ======================================================
// BACKEND STACK DATA
// ======================================================

const stackData = {
  node: {
    id: "node",
    label: "Node.js/Go/Python Ecosystem",
    headers: ["Runtime", "Database", "Messaging", "Testing"],
    rows: [
      {
        runtime: "Node.js & NestJS",
        db: "PostgreSQL",
        msg: "RabbitMQ/BullMQ",
        test: "Jest",
      },
      {
        runtime: "Go (Golang)",
        db: "MongoDB",
        msg: "Kafka",
        test: "Go Test",
      },
      {
        runtime: "Python & FastAPI",
        db: "Redis",
        msg: "WebSockets",
        test: "PyTest",
      },
    ],
  },

  dotnet: {
    id: "dotnet",
    label: ".NET Ecosystem",
    headers: ["Runtime", "Database", "Messaging", "Testing"],
    rows: [
      {
        runtime: "ASP.NET Core Web API",
        db: "SQL Server / PostgreSQL",
        msg: "Azure Service Bus",
        test: "xUnit",
      },
      {
        runtime: ".NET Minimal APIs",
        db: "Entity Framework Core",
        msg: "SignalR",
        test: "NUnit",
      },
      {
        runtime: "C# 13",
        db: "Redis Cache",
        msg: "MassTransit",
        test: "Moq",
      },
    ],
  },
};


// ======================================================
// DEVELOPMENT PROCESS
// ======================================================

const processSteps = [
  {
    num: "01",
    title: "API Design & Schema Planning",
    desc:
      "OpenAPI specifications, DB schema ERD normalization, and gRPC/REST contract definitions before writing code.",
  },
  {
    num: "02",
    title: "Microservices Development",
    desc:
      "Decoupled domain microservices engineered with strict type-safety, async I/O, and automated unit testing.",
  },
  {
    num: "03",
    title: "Load & Stress Testing",
    desc:
      "Simulating peak traffic spikes up to 10,000+ RPS to optimize query execution plans and connection pools.",
  },
  {
    num: "04",
    title: "Zero-Downtime Deployment",
    desc:
      "Containerized Docker & Kubernetes blue-green deployments with automated health check rollbacks.",
  },
];


// ======================================================
// NEW — BACKEND CAPABILITIES
// ======================================================

const backendCapabilities = [
  {
    title: "API Engineering",
    desc:
      "REST and GraphQL APIs designed for applications, integrations, authentication and business workflows.",
    icon: Router,
    tag: "APIs",
  },
  {
    title: "Database Architecture",
    desc:
      "Structured schemas, indexing, query optimization and storage strategies for reliable data systems.",
    icon: Database,
    tag: "DATA",
  },
  {
    title: "Authentication & Security",
    desc:
      "JWT, OAuth, role-based access and protected resources for secure application environments.",
    icon: LockKeyhole,
    tag: "SECURITY",
  },
  {
    title: "Microservices",
    desc:
      "Independent backend services designed for maintainability, scalability and clear domain boundaries.",
    icon: Network,
    tag: "SERVICES",
  },
  {
    title: "Background Processing",
    desc:
      "Queues, workers and asynchronous jobs for email delivery, reports, processing and scheduled workloads.",
    icon: Workflow,
    tag: "ASYNC",
  },
  {
    title: "Caching & Performance",
    desc:
      "Redis, caching layers, optimized queries and efficient service communication for responsive systems.",
    icon: Zap,
    tag: "PERFORMANCE",
  },
];


// ======================================================
// NEW — DATA FLOW
// ======================================================

const dataFlow = [
  {
    step: "01",
    title: "Client",
    desc: "Request",
    icon: Globe2,
  },
  {
    step: "02",
    title: "API Layer",
    desc: "Routing & Auth",
    icon: Router,
  },
  {
    step: "03",
    title: "Services",
    desc: "Business Logic",
    icon: Server,
  },
  {
    step: "04",
    title: "Data Layer",
    desc: "Cache & Database",
    icon: Database,
  },
  {
    step: "05",
    title: "Response",
    desc: "Result / Event",
    icon: Activity,
  },
];

// ======================================================
// BACKEND PROJECT SHOWCASE
// ======================================================

const dssProjectImages = [
  {
    src: dssCrm1,
    label: "Lead Dashboard",
  },
  {
    src: dssCrm2,
    label: "CRM Workspace",
  },
  {
    src: dssCrm3,
    label: "Project Management",
  },
  {
    src: dssCrm4,
    label: "Admin Operations",
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

const BackendDevelopment = () => {
  const [activeTab, setActiveTab] = useState("node");
  const [activeProjectImage, setActiveProjectImage] = useState(0);

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

      <section className="relative">

        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 text-center">

          {/* Badge */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-[#004658]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#004658]"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#004658]" />
            <span>⚙️ High-Performance Back-End Architecture</span>
          </motion.div>


          {/* Heading */}

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-6 max-w-5xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 font-['Outfit',sans-serif] sm:text-6xl"
          >
            Scalable, Secure & Resilient{" "}

            <span className="bg-gradient-to-r from-[#004658] via-[#005A72] to-[#00A8CC] bg-clip-text text-transparent">
              Back-End Systems
            </span>
          </motion.h1>


          {/* Description */}

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-10 max-w-3xl text-base font-normal leading-relaxed text-slate-600 sm:text-xl"
          >
            We architect fault-tolerant server backends, microservices, and
            high-concurrency databases with Node.js, Go, Python, and .NET.
          </motion.p>


          {/* Metrics */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4"
          >

            {[
              {
                value: "<20ms",
                label: "P99 DB Latency",
              },
              {
                value: "10,000+",
                label: "Req / Sec Capacity",
              },
              {
                value: "99.99%",
                label: "Server Availability",
              },
              {
                value: "Zero",
                label: "Single Points of Failure",
              },
            ].map((metric) => (
              <motion.div
                key={metric.label}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-[#004658]/15 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <p className="text-2xl font-extrabold text-[#004658] font-['Outfit',sans-serif] sm:text-3xl">
                  {metric.value}
                </p>

                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  {metric.label}
                </p>
              </motion.div>
            ))}

          </motion.div>

        </div>

      </section>


      {/* ==================================================
          NEW SECTION 01 — BACKEND CAPABILITIES
      ================================================== */}

      <section className="relative mt-20 overflow-hidden bg-[#F5FAFB] py-24 lg:py-32">

        {/* Background grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#004658 1.2px, transparent 1.2px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-200/25 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-cyan-200/20 blur-[130px]" />


        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

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
                Backend Capabilities
              </span>

            </div>


            <h2 className="text-4xl font-black leading-[1.04] tracking-[-2px] text-[#0B1B2C] sm:text-5xl lg:text-6xl">

              Everything behind{" "}

              <span className="bg-gradient-to-r from-[#004658] via-[#007F99] to-[#00A3C4] bg-clip-text text-transparent">
                the experience.
              </span>

            </h2>


            <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base lg:text-[17px]">
              We engineer the systems that power applications — from APIs and
              databases to authentication, background processing and performance.
            </p>

          </motion.div>


          {/* Capability Grid */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {backendCapabilities.map((item, index) => {

              const Icon = item.icon;

              const isLarge =
                index === 0 || index === 3;

              return (
                <motion.article
                  key={item.title}
                  variants={index % 2 === 0 ? fadeLeft : fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ y: -7 }}
                  className={`group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(16,58,73,0.05)] transition-all duration-500 hover:border-[#004658]/20 hover:shadow-[0_25px_65px_rgba(16,58,73,0.11)] ${
                    isLarge ? "lg:col-span-2" : "lg:col-span-1"
                  }`}
                >

                  {/* Glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-100/60 blur-3xl transition-all duration-500 group-hover:bg-cyan-200/80" />


                  {/* Decorative dots */}

                  <div
                    className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "radial-gradient(#004658 1px, transparent 1px)",
                      backgroundSize: "12px 12px",
                    }}
                  />


                  {/* Top */}

                  <div className="relative z-10 flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/8 text-[#004658] transition-all duration-300 group-hover:bg-[#004658] group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#07819A]">
                      {item.tag}
                    </span>

                  </div>


                  {/* Content */}

                  <div className="relative z-10 mt-8">

                    <h3 className="text-xl font-black tracking-tight text-[#0B1B2C]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                      {item.desc}
                    </p>

                  </div>


                  {/* Large card mini graphic */}

                  {isLarge && (
                    <div className="relative z-10 mt-8 hidden items-center gap-3 lg:flex">

                      <div className="flex-1 rounded-xl border border-slate-200 bg-[#F7FBFC] p-3">

                        <div className="mb-3 flex items-center gap-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-[#004658]" />
                          <div className="h-2 w-24 rounded-full bg-slate-200" />
                        </div>

                        <div className="space-y-2">
                          <div className="h-2 rounded-full bg-[#DDEEF1]" />
                          <div className="h-2 w-[75%] rounded-full bg-[#DDEEF1]" />
                          <div className="h-2 w-[55%] rounded-full bg-[#DDEEF1]" />
                        </div>

                      </div>

                      <ArrowRight
                        size={18}
                        className="shrink-0 text-[#00A3C4]"
                      />

                      <div className="w-28 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">

                        <div className="flex items-center gap-2">
                          <Server
                            size={15}
                            className="text-[#004658]"
                          />

                          <span className="text-[9px] font-bold text-[#004658]">
                            SERVICE
                          </span>
                        </div>

                        <div className="mt-3 h-2 rounded-full bg-emerald-100" />

                      </div>

                    </div>
                  )}

                </motion.article>
              );
            })}

          </div>


          {/* Bottom strip */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 rounded-[26px] border border-[#004658]/15 bg-white p-5 shadow-sm sm:p-6"
          >

            <div className="flex flex-wrap items-center gap-3">

              <span className="mr-2 text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                Backend Focus
              </span>

              {[
                "API Design",
                "Data Architecture",
                "Security",
                "Scalability",
                "Async Processing",
                "Performance",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-[#FBFDFD] px-3 py-1.5 text-[9px] font-bold text-[#315466]"
                >
                  {item}
                </span>
              ))}

            </div>

          </motion.div>

        </div>

      </section>


      {/* ==================================================
          EXISTING CORE BACKEND ARCHITECTURE
      ================================================== */}

      <section className="relative py-24 lg:py-28">

        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >

            <h2 className="text-3xl font-bold text-slate-900 font-['Outfit',sans-serif] sm:text-4xl">
              Core Backend Architecture
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              Engineered for ultra-low latency, multi-region scalability, and zero downtime.
            </p>

          </motion.div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {backendCards.map((item, idx) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: idx * 0.07,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[28px] border border-[#004658]/15 bg-white p-6 shadow-[0_15px_40px_rgba(16,58,73,0.05)] transition-all duration-300 hover:border-[#004658]/25 hover:shadow-[0_25px_60px_rgba(16,58,73,0.10)] sm:p-8"
                >

                  <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-100/50 blur-3xl opacity-70 transition-all duration-500 group-hover:bg-cyan-200/70" />

                  <div className="relative z-10">

                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/10 text-[#004658]">
                      <Icon size={23} />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.desc}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* ==================================================
          NEW SECTION 02 — HOW DATA MOVES
      ================================================== */}

      <section className="relative overflow-hidden bg-[#F4FAFB] py-24 lg:py-32">

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#004658 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/25 blur-[140px]" />


        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

          {/* Header */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-16 max-w-4xl text-center"
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-white px-4 py-2 shadow-sm">

              <GitBranch
                size={13}
                className="text-[#087F99]"
              />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#004658]">
                Request / Response Architecture
              </span>

            </div>


            <h2 className="text-4xl font-black leading-[1.04] tracking-[-2px] text-[#0B1B2C] sm:text-5xl lg:text-6xl">

              How your application{" "}

              <span className="text-[#087F99]">
                moves data.
              </span>

            </h2>


            <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
              Every request follows a carefully designed path through the API,
              services, cache and database before returning a response or event.
            </p>

          </motion.div>


          {/* Data Flow Diagram */}

          <div className="relative mx-auto max-w-6xl">

            {/* Desktop connecting line */}

            <div className="pointer-events-none absolute left-[9%] right-[9%] top-[57px] hidden h-px bg-[#BBDCE2] lg:block" />

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "82%",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-[9%] top-[56px] hidden h-[2px] bg-gradient-to-r from-[#004658] via-[#00A3C4] to-[#004658] lg:block"
            />


            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

              {dataFlow.map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.step}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="relative"
                  >

                    {/* Node */}

                    <div className="relative z-10 mx-auto mb-5 flex h-[84px] w-[84px] items-center justify-center rounded-full border border-[#004658]/15 bg-white shadow-[0_12px_30px_rgba(16,58,73,0.10)]">

                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#004658]/8 text-[#004658]">

                        <Icon size={22} />

                      </div>

                    </div>


                    {/* Card */}

                    <motion.div
                      whileHover={{ y: -6 }}
                      className="rounded-[24px] border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:border-[#004658]/20 hover:shadow-xl"
                    >

                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#087F99]">
                        {item.step}
                      </span>

                      <h3 className="mt-2 text-base font-black text-[#0B1B2C]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[10px] font-medium text-slate-500">
                        {item.desc}
                      </p>

                    </motion.div>


                    {/* Mobile arrow */}

                    {index < dataFlow.length - 1 && (
                      <div className="flex justify-center py-3 lg:hidden">
                        <ArrowDown
                          size={17}
                          className="text-[#00A3C4]"
                        />
                      </div>
                    )}

                  </motion.div>
                );
              })}

            </div>

          </div>


          {/* Architecture summary */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-12 max-w-5xl rounded-[28px] border border-[#004658]/15 bg-white p-5 shadow-sm sm:p-7"
          >

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">

              {[
                "Routing",
                "Authentication",
                "Business Logic",
                "Caching",
                "Database",
                "Response",
              ].map((item, index) => (
                <React.Fragment key={item}>

                  <span className="rounded-full border border-slate-200 bg-[#FBFDFD] px-3 py-2 text-[9px] font-bold text-[#315466] sm:px-4">
                    {item}
                  </span>

                  {index < 5 && (
                    <ArrowRight
                      size={13}
                      className="hidden text-[#00A3C4] sm:block"
                    />
                  )}

                </React.Fragment>
              ))}

            </div>

          </motion.div>

        </div>

      </section>


     {/* ==================================================
    BACKEND PROJECT SHOWCASE
================================================== */}

<section className="relative overflow-hidden bg-[#FBFDFD] py-24 lg:py-32">

  {/* Background */}

  <div
    className="pointer-events-none absolute inset-0 opacity-[0.025]"
    style={{
      backgroundImage:
        "radial-gradient(#004658 1.2px, transparent 1.2px)",
      backgroundSize: "30px 30px",
    }}
  />

  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-200/20 blur-[130px]" />

  <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-cyan-300/15 blur-[130px]" />


  <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

    {/* ==================================================
        SECTION HEADER
    ================================================== */}

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="mx-auto mb-16 max-w-4xl text-center"
    >

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-white px-4 py-2 shadow-sm">

        <span className="h-2 w-2 rounded-full bg-[#00D8FF]" />

        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#004658] sm:text-[11px]">
          Backend Engineering In Action
        </span>

      </div>


      <h2 className="text-4xl font-black leading-[1.04] tracking-[-2px] text-[#0B1B2C] sm:text-5xl lg:text-6xl">

        A real backend system,
        <br />

        <span className="bg-gradient-to-r from-[#004658] via-[#007F99] to-[#00A3C4] bg-clip-text text-transparent">
          built for real workflows.
        </span>

      </h2>


      <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base lg:text-[17px]">
        Explore DSS Infra CRM — a business-focused platform built around
        structured data, authentication, workflows, API integration and
        operational management.
      </p>

    </motion.div>


    {/* ==================================================
        PROJECT CASE STUDY
    ================================================== */}

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="overflow-hidden rounded-[32px] border border-[#004658]/15 bg-white shadow-[0_25px_80px_rgba(16,58,73,0.08)]"
    >

      <div className="grid lg:grid-cols-12">


        {/* ==================================================
            LEFT — IMAGE GALLERY
        ================================================== */}

        <div className="relative bg-[#EDF7F8] p-5 sm:p-7 lg:col-span-7 lg:p-8">

          {/* Browser shell */}

          <div className="overflow-hidden rounded-[24px] border border-[#004658]/10 bg-white shadow-[0_25px_60px_rgba(16,58,73,0.12)]">

            {/* Browser top bar */}

            <div className="flex h-11 items-center gap-3 border-b border-slate-200 bg-slate-50 px-4">

              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="flex h-7 flex-1 items-center justify-center rounded-full border border-slate-200 bg-white text-[9px] font-medium text-slate-400 sm:text-[10px]">
                dss-infra-crm.vercel.app
              </div>

              <span className="h-2 w-2 rounded-full bg-emerald-400" />

            </div>


            {/* Main image */}

            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900/5">

              <AnimatePresence mode="wait">

                <motion.img
                  key={activeProjectImage}
                  src={dssProjectImages[activeProjectImage].src}
                  alt={`DSS Infra CRM - ${dssProjectImages[activeProjectImage].label}`}
                  initial={{
                    opacity: 0,
                    scale: 1.02,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="h-full w-full object-contain p-1"
                />

              </AnimatePresence>


              {/* Overlay label */}

              <div className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-[#004658] shadow-lg backdrop-blur">
                {dssProjectImages[activeProjectImage].label}
              </div>

            </div>

          </div>


          {/* ==================================================
              THUMBNAILS
          ================================================== */}

          <div className="mt-4 grid grid-cols-4 gap-3">

            {dssProjectImages.map((image, index) => (

              <button
                key={image.label}
                type="button"
                onClick={() => setActiveProjectImage(index)}
                className={`group relative overflow-hidden rounded-xl border bg-slate-50 transition-all duration-300 ${
                  activeProjectImage === index
                    ? "border-[#004658] shadow-md"
                    : "border-slate-200 hover:border-[#004658]/30"
                }`}
              >

                <img
                  src={image.src}
                  alt={image.label}
                  className="aspect-[16/10] w-full object-contain p-0.5 transition-transform duration-300 group-hover:scale-105"
                />

                {activeProjectImage === index && (
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-[#00A3C4]" />
                )}

              </button>

            ))}

          </div>


          {/* Project URL */}

          <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#004658]/10 bg-white px-4 py-3">

            <div className="flex items-center gap-2">

              <Globe2
                size={15}
                className="text-[#087F99]"
              />

              <span className="text-xs font-semibold text-slate-600">
                DSS Infra CRM
              </span>

            </div>

            <span className="text-[9px] font-bold uppercase tracking-wider text-[#07819A]">
              CRM Platform
            </span>

          </div>

        </div>


        {/* ==================================================
            RIGHT — PROJECT INFORMATION
        ================================================== */}

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-10">


          {/* Category */}

          <div className="mb-4 flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-[#00A3C4]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#087F99]">
              Enterprise CRM Platform
            </span>

          </div>


          {/* Title */}

          <h3 className="text-3xl font-black tracking-[-1px] text-[#0B1B2C] sm:text-4xl">

            DSS Infra CRM

          </h3>


          <p className="mt-3 text-base font-semibold text-[#315466]">
            Lead, Project & Business Operations Platform
          </p>


          {/* Overview */}

          <p className="mt-5 text-sm leading-7 text-slate-600">
            A centralized CRM solution designed to manage leads, projects,
            sales workflows and operational information through a connected
            web-based system.
          </p>


          {/* ==================================================
              BACKEND HIGHLIGHTS
          ================================================== */}

          <div className="mt-7">

            <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
              Backend Highlights
            </p>


            <div className="grid grid-cols-2 gap-3">

              {[
                {
                  icon: Code2,
                  title: "REST APIs",
                  text: "API-driven workflows",
                },
                {
                  icon: LockKeyhole,
                  title: "Authentication",
                  text: "Secure access control",
                },
                {
                  icon: Users,
                  title: "RBAC",
                  text: "Role-based permissions",
                },
                {
                  icon: Database,
                  title: "MongoDB",
                  text: "Data management",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-slate-200 bg-[#FBFDFD] p-4 transition-all duration-300 hover:border-[#004658]/15 hover:shadow-md"
                  >

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#004658]/8 text-[#004658]">
                      <Icon size={17} />
                    </div>

                    <h4 className="mt-3 text-xs font-extrabold text-[#0B1B2C] sm:text-sm">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-[9px] leading-4 text-slate-500">
                      {item.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>


          {/* ==================================================
              TECH STACK
          ================================================== */}

          <div className="mt-7">

            <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">

              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "JWT",
                "REST API",
                "Cloudinary",
              ].map((tech) => (

                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[9px] font-bold text-[#315466]"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>


          {/* ==================================================
              ARCHITECTURE MINI FLOW
          ================================================== */}

          <div className="mt-7 rounded-2xl border border-[#004658]/10 bg-[#F5FAFB] p-4">

            <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#087F99]">
              Backend Architecture
            </p>


            <div className="flex flex-wrap items-center gap-2">

              {[
                "Client",
                "API",
                "Auth",
                "Business Logic",
                "MongoDB",
              ].map((item, index) => (

                <React.Fragment key={item}>

                  <span className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-[9px] font-bold text-[#315466]">
                    {item}
                  </span>

                  {index < 4 && (
                    <ArrowRight
                      size={12}
                      className="text-[#00A3C4]"
                    />
                  )}

                </React.Fragment>

              ))}

            </div>

          </div>


          {/* ==================================================
              PROJECT STATS
          ================================================== */}

          <div className="mt-7 grid grid-cols-3 gap-3 border-t border-slate-100 pt-6">

            {[
              {
                value: "CRM",
                label: "Platform",
              },
              {
                value: "API",
                label: "Driven",
              },
              {
                value: "RBAC",
                label: "Access",
              },
            ].map((stat) => (

              <div key={stat.label}>

                <p className="text-lg font-black text-[#004658]">
                  {stat.value}
                </p>

                <p className="mt-1 text-[9px] font-medium uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </motion.div>


    {/* ==================================================
        BOTTOM NOTE
    ================================================== */}

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="mx-auto mt-8 flex max-w-4xl items-center justify-center gap-2 text-center"
    >

      <CheckCircle2
        size={15}
        className="shrink-0 text-emerald-500"
      />

      <p className="text-xs font-medium text-slate-500">
        A production-oriented backend foundation connecting users,
        workflows, data and business operations.
      </p>

    </motion.div>

  </div>

</section>


      {/* ==================================================
          EXISTING BACKEND ENGINEERING STACK
      ================================================== */}

      <section className="relative py-24 lg:py-28">

        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-8 max-w-3xl text-center"
          >

            <h2 className="text-3xl font-bold text-slate-900 font-['Outfit',sans-serif] sm:text-4xl">
              Backend Engineering Stack
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              Our comprehensive technical stack across modern open-source and enterprise .NET environments.
            </p>

          </motion.div>


          {/* Tabs */}

          <div className="mb-8 flex items-center justify-center gap-3">

            <button
              onClick={() => setActiveTab("node")}
              className={`cursor-pointer rounded-full px-6 py-3 text-xs font-bold transition-all sm:text-sm ${
                activeTab === "node"
                  ? "bg-[#004658] text-white shadow-lg shadow-[#004658]/20"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-[#004658]/40 hover:text-[#004658]"
              }`}
            >
              Node.js/Go/Python Ecosystem
            </button>


            <button
              onClick={() => setActiveTab("dotnet")}
              className={`cursor-pointer rounded-full px-6 py-3 text-xs font-bold transition-all sm:text-sm ${
                activeTab === "dotnet"
                  ? "bg-[#004658] text-white shadow-lg shadow-[#004658]/20"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-[#004658]/40 hover:text-[#004658]"
              }`}
            >
              .NET Ecosystem
            </button>

          </div>


          {/* Table */}

          <AnimatePresence mode="wait">

            <motion.div
              key={activeTab}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.25,
              }}
              className="overflow-x-auto rounded-[30px] border border-[#004658]/15 bg-white p-6 shadow-[0_20px_60px_rgba(16,58,73,0.06)] sm:p-8"
            >

              <h3 className="mb-6 text-lg font-bold text-[#004658] font-['Outfit',sans-serif] sm:text-xl">
                {stackData[activeTab].label}
              </h3>


              <table className="w-full min-w-[600px] border-collapse text-left">

                <thead>

                  <tr className="border-b border-[#004658]/15 bg-[#004658]/5 text-xs uppercase tracking-wider text-[#004658] sm:text-sm">

                    {stackData[activeTab].headers.map((header) => (
                      <th
                        key={header}
                        className="px-4 py-3.5 font-bold"
                      >
                        {header}
                      </th>
                    ))}

                  </tr>

                </thead>


                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm md:text-base">

                  {stackData[activeTab].rows.map((row, index) => (

                    <tr
                      key={index}
                      className="transition-colors hover:bg-slate-50"
                    >

                      <td className="px-4 py-4 font-bold text-slate-900">
                        {row.runtime}
                      </td>

                      <td className="px-4 py-4 font-medium text-slate-700">
                        {row.db}
                      </td>

                      <td className="px-4 py-4 font-medium text-slate-700">
                        {row.msg}
                      </td>

                      <td className="px-4 py-4 font-semibold text-emerald-600">
                        {row.test}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </motion.div>

          </AnimatePresence>

        </div>

      </section>


      {/* ==================================================
          EXISTING DEVELOPMENT LIFECYCLE
      ================================================== */}

      <section className="relative bg-[#F8FBFC] py-24 lg:py-28">

        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-12 max-w-4xl text-center"
          >

            <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-[#004658]">
              Development Lifecycle
            </span>

            <h2 className="text-3xl font-bold text-slate-900 font-['Outfit',sans-serif] sm:text-4xl">
              How We Build Scalable Backends (4-Step Process)
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              Our structured engineering pipeline ensures high availability,
              security, and effortless maintainability.
            </p>

          </motion.div>


          {/* Process Cards */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {processSteps.map((step, idx) => (

              <motion.div
                key={step.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: idx * 0.07,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group rounded-[28px] border border-[#004658]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#004658]/25 hover:shadow-xl sm:p-7"
              >

                <span className="mb-3 block text-3xl font-extrabold text-[#004658]/25 font-['Outfit',sans-serif] transition-colors duration-300 group-hover:text-[#004658]">
                  {step.num}
                </span>

                <h4 className="mb-3 text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
                  {step.title}
                </h4>

                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {step.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          EXISTING CTA
      ================================================== */}

      <section className="relative py-10 lg:py-16">

        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[30px] bg-[#004658] p-8 text-center text-white shadow-[0_30px_80px_rgba(0,70,88,0.20)] sm:p-12"
          >

            <h3 className="mb-4 text-2xl font-bold font-['Outfit',sans-serif] sm:text-4xl">
              Ready to Scale Your API Infrastructure?
            </h3>

            <p className="mx-auto mb-8 max-w-2xl text-sm text-slate-200 sm:text-base">
              Consult with our Backend Architects on database optimization
              and microservices migration.
            </p>

            <Link
              to="/schedule-consultation"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#004658] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 sm:text-base"
            >
              Schedule Backend Strategy Call
              <ArrowRight size={17} />
            </Link>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default BackendDevelopment;