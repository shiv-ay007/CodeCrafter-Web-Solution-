import React from "react";
import { Link } from "react-router-dom";

const BackendDevelopment = () => {
  const specs = [
    { title: "Microservices & Distributed Systems", desc: "Decoupled domain services communicating via high-throughput gRPC or RESTful JSON protocols." },
    { title: "High Concurrency & Database Tuning", desc: "PostgreSQL & MySQL connection pooling, Redis caching layers, and optimized indexes handling 10,000+ requests/sec." },
    { title: "Asynchronous Queue Workers", desc: "RabbitMQ and BullMQ background task processing for email sending, video rendering, and financial reporting." },
    { title: "Enterprise Security & RBAC", desc: "OAuth 2.0, JWT authentication, rate limiting, and encrypted database backups." }
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
          We architect fault-tolerant server backends, microservices, and high-concurrency databases with Node.js, Go, Python, and PostgreSQL.
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

      {/* Backend Specs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((item, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">{item.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
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
