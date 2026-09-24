import React, { useState } from "react";
import { Link } from "react-router-dom";

const AiTransformation = () => {
  const [activeWorkflow, setActiveWorkflow] = useState("rag");

  const workflows = [
    {
      id: "rag",
      title: "RAG & Proprietary Knowledge Base",
      desc: "Connect your enterprise PDFs, SQL databases, and internal Notion/Confluence docs to private LLMs with Pinecone vector search.",
      tech: ["OpenAI GPT-4o", "Pinecone Vector DB", "LangChain", "Python FastAPI"]
    },
    {
      id: "agents",
      title: "Autonomous AI Workflow Agents",
      desc: "Deploy AI agents capable of executing multi-step API calls, customer support triage, automated data entry, and PDF parsing.",
      tech: ["AutoGPT Framework", "CrewAI", "Node.js Webhooks", "Redis Queue"]
    },
    {
      id: "vision",
      title: "Computer Vision & OCR Automation",
      desc: "Extract structured data from scanned invoices, receipts, medical records, and manufacturing defect inspection cameras.",
      tech: ["PyTorch", "OpenCV", "AWS Textract", "TensorFlow"]
    }
  ];

  const aiCapabilities = [
    { title: "Custom LLM Fine-Tuning", desc: "Train open-source Llama 3 or Mistral models on your company data for complete data privacy." },
    { title: "Real-Time Voice AI Bots", desc: "Sub-100ms latency voice assistants for customer support and automated outbound scheduling." },
    { title: "AI-Powered Analytics Dashboards", desc: "Transform raw SQL databases into natural language query engines — ask questions in plain English." },
    { title: "Automated Content & Code Gen", desc: "Embed generative AI copilots directly into your enterprise software products." }
  ];

  return (
    <div className="w-full bg-[#00171F] pt-32 sm:pt-40 pb-24 text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Futuristic Glowing Ambient Gradient */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] pointer-events-none rounded-full opacity-40 blur-[150px] -z-10"
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(78, 240, 197, 0.25) 0%, rgba(0, 168, 204, 0.15) 50%, rgba(0, 23, 31, 0) 80%)"
        }}
      />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4EF0C5]/10 border border-[#4EF0C5]/30 text-[#4EF0C5] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-[#4EF0C5] animate-ping" />
          <span>🤖 AI Transformation & LLM Studio</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Supercharge Your Enterprise with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4EF0C5] via-[#00a8cc] to-emerald-400">
            Custom AI Agents & RAG
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Integrate cutting-edge Artificial Intelligence, fine-tuned LLMs, and automated workflow agents into your software applications.
        </p>
      </div>

      {/* Interactive AI Architecture Simulator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#002B34] border border-[#4EF0C5]/20 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-2">AI Architectural Sandbox</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif]">
              Select an AI Enterprise Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {workflows.map((wf) => (
                <button
                  key={wf.id}
                  onClick={() => setActiveWorkflow(wf.id)}
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    activeWorkflow === wf.id
                      ? "bg-[#004658] border-[#4EF0C5] text-white shadow-lg shadow-[#4EF0C5]/10"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <p className="font-bold text-sm sm:text-base">{wf.title}</p>
                </button>
              ))}
            </div>

            {/* Display Screen */}
            <div className="lg:col-span-7 bg-[#001D25] border border-white/10 p-8 rounded-2xl">
              {workflows.map((wf) => {
                if (wf.id !== activeWorkflow) return null;
                return (
                  <div key={wf.id} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <h3 className="text-xl font-bold text-[#4EF0C5] font-['Outfit',sans-serif]">{wf.title}</h3>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{wf.desc}</p>

                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">AI Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {wf.tech.map((t, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-[#4EF0C5]/10 border border-[#4EF0C5]/30 text-[#4EF0C5] text-xs font-semibold">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* AI Capabilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Outfit',sans-serif]">
            Enterprise AI Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiCapabilities.map((item, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-[#002B34]/60 border border-white/10 hover:border-[#4EF0C5]/40 transition-all">
              <h3 className="text-xl font-bold text-[#4EF0C5] mb-3 font-['Outfit',sans-serif]">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-gradient-to-r from-[#004658] to-[#002B34] border border-[#4EF0C5]/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Ready to Build Your Custom AI Agent?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Schedule a 1-on-1 AI Architecture consultation with our Machine Learning Leads.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-[#4EF0C5] text-[#00171F] font-bold text-sm sm:text-base hover:bg-[#3be0b5] transition-all inline-block shadow-lg">
            Schedule AI Strategy Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiTransformation;
