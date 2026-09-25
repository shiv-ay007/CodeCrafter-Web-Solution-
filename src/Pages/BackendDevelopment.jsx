import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Database, Layers, ShieldCheck } from "lucide-react";

const BackendDevelopment = () => {
  const [activeTab, setActiveTab] = useState("node");

  const cards = [
    {
      title: "Microservices & Distributed Systems",
      icon: <Cpu className="w-6 h-6 text-[#004658]" />,
      desc: "Decoupled domain services built with Node.js, Go, or .NET microservices, communicating via high-throughput gRPC or RESTful JSON protocols."
    },
    {
      title: "High Concurrency & Database Tuning",
      icon: <Database className="w-6 h-6 text-[#004658]" />,
      desc: "PostgreSQL, MySQL & SQL Server connection pooling, Redis caching layers, and Entity Framework Core / Dapper query optimization handling 10,000+ requests/sec."
    },
    {
      title: "Asynchronous Queue Workers",
      icon: <Layers className="w-6 h-6 text-[#004658]" />,
      desc: "RabbitMQ, BullMQ, and Azure Service Bus / Hangfire background task processing for email sending, video rendering, and financial reporting."
    },
    {
      title: "Enterprise Security & RBAC",
      icon: <ShieldCheck className="w-6 h-6 text-[#004658]" />,
      desc: "OAuth 2.0, JWT authentication, .NET Identity & Azure AD integration, rate limiting, and encrypted database backups."
    }
  ];

  const stackData = {
    node: {
      id: "node",
      label: "Node.js/Go/Python Ecosystem",
      headers: ["Runtime", "Database", "Messaging", "Testing"],
      rows: [
        { runtime: "Node.js & NestJS", db: "PostgreSQL", msg: "RabbitMQ/BullMQ", test: "Jest" },
        { runtime: "Go (Golang)", db: "MongoDB", msg: "Kafka", test: "Go Test" },
        { runtime: "Python & FastAPI", db: "Redis", msg: "WebSockets", test: "PyTest" }
      ]
    },
    dotnet: {
      id: "dotnet",
      label: ".NET Ecosystem",
      headers: ["Runtime", "Database", "Messaging", "Testing"],
      rows: [
        { runtime: "ASP.NET Core Web API", db: "SQL Server / PostgreSQL", msg: "Azure Service Bus", test: "xUnit" },
        { runtime: ".NET Minimal APIs", db: "Entity Framework Core", msg: "SignalR", test: "NUnit" },
        { runtime: "C# 13", db: "Redis Cache", msg: "MassTransit", test: "Moq" }
      ]
    }
  };

  const processSteps = [
    { num: "01", title: "API Design & Schema Planning", desc: "OpenAPI specifications, DB schema ERD normalization, and gRPC/REST contract definitions before writing code." },
    { num: "02", title: "Microservices Development", desc: "Decoupled domain microservices engineered with strict type-safety, async I/O, and automated unit testing." },
    { num: "03", title: "Load & Stress Testing", desc: "Simulating peak traffic spikes up to 10,000+ RPS to optimize query execution plans and connection pools." },
    { num: "04", title: "Zero-Downtime Deployment", desc: "Containerized Docker & Kubernetes blue-green deployments with automated health check rollbacks." }
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
          <span>⚙️ High-Performance Back-End Architecture</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Scalable, Secure & Resilient{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Back-End Systems
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We architect fault-tolerant server backends, microservices, and high-concurrency databases with Node.js, Go, Python, and .NET.
        </p>

        {/* System Latency Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">&lt;20ms</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">P99 DB Latency</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">10,000+</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Req / Sec Capacity</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">99.99%</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Server Availability</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#004658] font-['Outfit',sans-serif]">Zero</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Single Points of Failure</p>
          </div>
        </div>
      </div>

      {/* Backend Specs Grid (4 Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif] mb-3">
            Core Backend Architecture
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Engineered for ultra-low latency, multi-region scalability, and zero downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((item, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-md hover:border-[#004658]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Engineering Stack Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif] mb-3">
            Backend Engineering Stack
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Our comprehensive technical stack across modern open-source and enterprise .NET environments.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab("node")}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "node"
                ? "bg-[#004658] text-white shadow-lg shadow-[#004658]/20"
                : "bg-white border border-slate-200 text-slate-700 hover:border-[#004658]/40 hover:text-[#004658]"
            }`}
          >
            Node.js/Go/Python Ecosystem
          </button>
          <button
            onClick={() => setActiveTab("dotnet")}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "dotnet"
                ? "bg-[#004658] text-white shadow-lg shadow-[#004658]/20"
                : "bg-white border border-slate-200 text-slate-700 hover:border-[#004658]/40 hover:text-[#004658]"
            }`}
          >
            .NET Ecosystem
          </button>
        </div>

        {/* Ecosystem Table View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="max-w-7xl mx-auto bg-white rounded-3xl border border-[#004658]/15 p-6 sm:p-8 shadow-xl overflow-x-auto"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#004658] font-['Outfit',sans-serif] mb-6">
              {stackData[activeTab].label}
            </h3>

            <table className="w-full text-left border-collapse min-w-[550px]">
              <thead>
                <tr className="border-b border-[#004658]/15 bg-[#004658]/5 text-xs sm:text-sm text-[#004658] uppercase tracking-wider">
                  {stackData[activeTab].headers.map((h, i) => (
                    <th key={i} className="py-3.5 px-4 font-bold rounded-t-lg">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm md:text-base">
                {stackData[activeTab].rows.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">{row.runtime}</td>
                    <td className="py-4 px-4 text-slate-700 font-medium">{row.db}</td>
                    <td className="py-4 px-4 text-slate-700 font-medium">{row.msg}</td>
                    <td className="py-4 px-4 text-emerald-600 font-semibold">{row.test}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4-Step Process Section: How We Build Scalable Backends */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-[#004658] text-xs font-bold uppercase tracking-widest block mb-2">Development Lifecycle</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif]">
            How We Build Scalable Backends (4-Step Process)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Our structured engineering pipeline ensures high availability, security, and effortless maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-[#004658]/15 shadow-sm hover:border-[#004658]/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold text-[#004658]/30 font-['Outfit',sans-serif] block mb-2">{step.num}</span>
                <h4 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit',sans-serif]">{step.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Ready to Scale Your API Infrastructure?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Consult with our Backend Architects on database optimization and microservices migration.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule Backend Strategy Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackendDevelopment;
