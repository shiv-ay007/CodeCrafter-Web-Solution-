import React, { useState } from "react";
import { Link } from "react-router-dom";

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
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer font-mono text-xs sm:text-sm ${
                    activeEndpoint === ep.id
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
