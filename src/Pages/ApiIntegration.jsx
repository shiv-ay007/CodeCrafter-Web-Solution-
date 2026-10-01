import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  KeyRound,
  Layers3,
  LockKeyhole,
  MessageSquare,
  Network,
  Server,
  ShieldCheck,
  Webhook,
  Zap,
} from "lucide-react";

const ApiIntegration = () => {
  const [activeEndpoint, setActiveEndpoint] = useState("payment");

  const endpoints = [
    {
      id: "payment",
      name: "POST /v1/payments/charge",
      status: "200 OK - 42ms",
      response: `{\n  "status": "success",\n  "transaction_id": "tx_9482019482",\n  "amount": 250.00,\n  "currency": "USD",\n  "gateway": "Stripe / Plaid Sync"\n}`
    },
    {
      id: "crm",
      name: "POST /v1/crm/lead-sync",
      status: "201 Created - 38ms",
      response: `{\n  "sync_status": "synced",\n  "lead_id": "lead_7739182",\n  "platform": "HubSpot & Salesforce",\n  "webhook_triggered": true\n}`
    },
    {
      id: "shipping",
      name: "GET /v1/logistics/rates",
      status: "200 OK - 55ms",
      response: `{\n  "carrier": "FedEx Express",\n  "estimated_delivery": "2026-09-26T10:00:00Z",\n  "tracking_enabled": true\n}`
    }
  ];

  const features = [
    { title: "RESTful & GraphQL API Architecture", desc: "Design clean, type-safe API schemas with OpenAPI 3.0 / Swagger and Apollo GraphQL servers." },
    { title: "Third-Party Payment & ERP Connectors", desc: "Seamlessly connect Stripe, PayPal, Salesforce, SAP, and custom legacy enterprise ERP systems." },
    { title: "Real-Time WebSockets & Event Streaming", desc: "Build low-latency live notification pipelines, chat applications, and real-time dashboard telemetry." },
    { title: "API Security & Rate Limiting", desc: "Enforce OAuth 2.0, API keys, JWT validation, and automated Cloudflare rate limiting rules." }
  ];

  const integrationCapabilities = [
    {
      title: "API Development",
      desc: "Build structured RESTful and GraphQL APIs designed to connect applications, databases and business platforms.",
      icon: Code2,
    },
    {
      title: "Microservices Integration",
      desc: "Connect independent services through clean APIs, event-driven communication and scalable service boundaries.",
      icon: Blocks,
    },
    {
      title: "Third-Party Integrations",
      desc: "Integrate payment gateways, CRM platforms, ERP systems, SaaS tools and external business services.",
      icon: Globe2,
    },
    {
      title: "Real-Time Communication",
      desc: "Enable live updates, notifications, dashboards and application events through WebSockets and event streaming.",
      icon: MessageSquare,
    },
    {
      title: "Webhook Automation",
      desc: "Trigger automated workflows between connected systems using secure and reliable webhook events.",
      icon: Webhook,
    },
    {
      title: "API Performance",
      desc: "Optimize API response times, caching, request handling and service communication for better performance.",
      icon: Zap,
    },
  ];

  const architectureLayers = [
    {
      title: "Client Applications",
      desc: "Web, Mobile & SaaS",
      icon: Globe2,
    },
    {
      title: "API Gateway",
      desc: "Routing & Access",
      icon: Network,
    },
    {
      title: "Microservices",
      desc: "Business Logic",
      icon: Layers3,
    },
    {
      title: "Data Layer",
      desc: "Database & Cache",
      icon: Database,
    },
    {
      title: "External Services",
      desc: "ERP, CRM & Payments",
      icon: Cloud,
    },
  ];

  const integrationProcess = [
    {
      number: "01",
      title: "Analyze",
      desc: "Understand your existing systems, APIs, data structures and integration requirements.",
      icon: GitBranch,
    },
    {
      number: "02",
      title: "Design",
      desc: "Define API contracts, service boundaries, authentication and communication patterns.",
      icon: Layers3,
    },
    {
      number: "03",
      title: "Integrate",
      desc: "Connect platforms, services, databases and third-party systems through secure APIs.",
      icon: Network,
    },
    {
      number: "04",
      title: "Monitor",
      desc: "Track API health, performance, failures and integration activity after deployment.",
      icon: Server,
    },
  ];

  const securityFeatures = [
    {
      title: "OAuth 2.0 & JWT",
      desc: "Secure API authentication and token-based authorization.",
      icon: KeyRound,
    },
    {
      title: "API Rate Limiting",
      desc: "Protect endpoints from excessive or unwanted traffic.",
      icon: ShieldCheck,
    },
    {
      title: "Encrypted Communication",
      desc: "Protect data exchanged between connected services.",
      icon: LockKeyhole,
    },
    {
      title: "Monitoring & Logging",
      desc: "Track requests, errors and integration health across services.",
      icon: Server,
    },
  ];

  return (
    <div className="w-full bg-[#FBFDFD] pt-32 sm:pt-40 pb-24 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none rounded-full opacity-50 blur-[130px] -z-10"
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(0, 70, 88, 0.22) 0%, rgba(0, 168, 204, 0.08) 50%, rgba(251, 253, 253, 0) 80%)"
        }}
      />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-[#004658] animate-pulse" />
          <span>🔌 API & Microservices Integration</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Connect Any System with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Robust API Architecture
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We engineer high-speed RESTful, GraphQL, and WebSocket APIs that seamlessly bridge software platforms, databases, and third-party SaaS tools.
        </p>
      </div>

      {/* Live API Inspector Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#002B34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-2">Interactive API Console</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif]">
              Test Integration Payloads
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Endpoints */}
            <div className="lg:col-span-5 space-y-3">
              {endpoints.map((ep) => (
                <button
                  key={ep.id}
                  onClick={() => setActiveEndpoint(ep.id)}
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer font-mono text-xs sm:text-sm ${activeEndpoint === ep.id
                      ? "bg-[#004658] border-[#4EF0C5] text-white shadow-lg"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                >
                  <p className="font-bold text-[#4EF0C5]">{ep.name}</p>
                </button>
              ))}
            </div>

            {/* Code Response Box */}
            <div className="lg:col-span-7 bg-[#001D25] border border-white/15 p-6 rounded-2xl font-mono text-xs sm:text-sm">
              {endpoints.map((ep) => {
                if (ep.id !== activeEndpoint) return null;
                return (
                  <div key={ep.id} className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-slate-400">Response Status:</span>
                      <span className="text-emerald-400 font-bold">{ep.status}</span>
                    </div>
                    <pre className="text-[#4EF0C5] leading-relaxed whitespace-pre-wrap">{ep.response}</pre>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
    API INTEGRATION CAPABILITIES
================================================== */}

      <section className="relative overflow-hidden bg-[#F5FAFB] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-200/30 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-sky-200/30 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full border border-[#004658]/20 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#004658] shadow-sm">
              API Integration Capabilities
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#0B1B2C] sm:text-5xl">
              Everything needed to{" "}
              <span className="bg-gradient-to-r from-[#004658] to-[#00A8CC] bg-clip-text text-transparent">
                connect your ecosystem.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Build connected digital systems with structured APIs, microservices,
              real-time communication and secure third-party integrations.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {integrationCapabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{ y: -7 }}
                  className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#004658]/20 hover:shadow-xl sm:p-7"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/8 text-[#004658] transition-all group-hover:bg-[#004658] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-[#0B1B2C]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#087F99]">
                    Integration ready
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>

                </motion.article>
              );
            })}

          </div>
        </div>
      </section>


      {/* ==================================================
    INTEGRATION ARCHITECTURE
================================================== */}

      <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        <div className="relative mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-[#004658]/20 bg-[#004658]/5 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#004658]">
              Integration Architecture
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#0B1B2C] sm:text-5xl">
              One architecture.{" "}
              <span className="text-[#087F99]">
                Multiple systems.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Connect applications, APIs, microservices, databases and external
              platforms through a structured integration layer.
            </p>

          </div>

          <div className="rounded-[32px] border border-[#004658]/15 bg-gradient-to-br from-[#F7FCFD] via-white to-[#EAF8FA] p-6 shadow-[0_25px_70px_rgba(16,58,73,0.08)] sm:p-10">

            <div className="grid gap-5 md:grid-cols-5">

              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon;

                return (
                  <React.Fragment key={layer.title}>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      whileHover={{ y: -6 }}
                      className="rounded-[24px] border border-slate-200 bg-white p-5 text-center shadow-sm"
                    >

                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#004658]/8 text-[#004658]">
                        <Icon size={23} />
                      </div>

                      <p className="mt-4 text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#087F99]">
                        Layer {index + 1}
                      </p>

                      <h3 className="mt-2 text-sm font-black text-[#0B1B2C] sm:text-base">
                        {layer.title}
                      </h3>

                      <p className="mt-2 text-[10px] text-slate-500">
                        {layer.desc}
                      </p>

                    </motion.div>

                    {index < architectureLayers.length - 1 && (
                      <div className="hidden items-center justify-center text-[#00A3C4] md:flex">
                        <ArrowRight size={18} />
                      </div>
                    )}

                  </React.Fragment>
                );
              })}

            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">

              <div className="flex flex-wrap justify-center gap-3">

                {[
                  "REST APIs",
                  "GraphQL",
                  "WebSockets",
                  "Webhooks",
                  "OAuth 2.0",
                  "JWT",
                  "API Gateway",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold text-[#315466]"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">{item.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ==================================================
    INTEGRATION WORKFLOW
================================================== */}

      <section className="relative overflow-hidden bg-[#F5FAFB] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        <div className="relative mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-[#004658]/20 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#004658] shadow-sm">
              Integration Workflow
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#0B1B2C] sm:text-5xl">
              From system analysis to{" "}
              <span className="text-[#087F99]">
                production.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              A structured engineering process for building reliable integrations
              across your digital ecosystem.
            </p>

          </div>

          <div className="relative">

            <div className="pointer-events-none absolute left-[10%] right-[10%] top-10 hidden h-px bg-[#BBDCE2] lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

              {integrationProcess.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="relative"
                  >

                    <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#004658]/15 bg-white shadow-lg">

                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#004658]/8 text-[#004658]">
                        <Icon size={22} />
                      </div>

                    </div>

                    <div className="mt-5 rounded-[26px] border border-slate-200 bg-white p-6 text-center shadow-sm">

                      <span className="font-mono text-xs font-black text-[#087F99]">
                        {step.number}
                      </span>

                      <h3 className="mt-2 text-xl font-black text-[#0B1B2C]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {step.desc}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
    API SECURITY & RELIABILITY
================================================== */}

      <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Left */}
            <div>

              <span className="inline-flex rounded-full border border-[#004658]/20 bg-[#004658]/5 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#004658]">
                Security & Reliability
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#0B1B2C] sm:text-5xl">
                APIs built for{" "}
                <span className="text-[#087F99]">
                  secure communication.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Protect connected systems with authentication, access control,
                rate limiting, encrypted communication and continuous API monitoring.
              </p>

              <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-[#004658]/10 bg-[#F5FAFB] px-5 py-4">

                <ShieldCheck className="text-[#087F99]" size={22} />

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Secure API Infrastructure
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Authentication • Protection • Monitoring
                  </p>
                </div>

              </div>

            </div>

            {/* Right */}
            <div className="grid gap-4 sm:grid-cols-2">

              {securityFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -5 }}
                    className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg"
                  >

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#004658]/8 text-[#004658]">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 font-black text-[#0B1B2C]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Need Custom API Integrations for Your Business?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Consult with our API Integration Specialists to connect your digital ecosystem.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule API Strategy Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApiIntegration;
