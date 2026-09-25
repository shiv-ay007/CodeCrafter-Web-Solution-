import React from "react";
import { Link } from "react-router-dom";
import { FileCheck, Handshake, Vault, Globe } from "lucide-react";

const SecurityIpProtection = () => {
  const securityPillars = [
    {
      title: "100% Source Code & IP Transfer",
      icon: <FileCheck className="w-6 h-6 text-[#004658]" />,
      desc: "Upon final milestone delivery, 100% of the intellectual property, copyright, patent rights, and source code repository ownership is legally transferred to your organization.",
      details: ["Full Master Repo Transfer", "Zero Vendor Lock-in or Royalty Fees", "Custom Patent & Code Rights Assignment", "Complete Asset Handover Documents"]
    },
    {
      title: "Comprehensive Bilateral NDA",
      icon: <Handshake className="w-6 h-6 text-[#004658]" />,
      desc: "Before any project discussions, code reviews, or document exchanges take place, we sign an enforceable Non-Disclosure Agreement protecting your business ideas and trade secrets.",
      details: ["Pre-Discovery Execution", "Enforceable Non-Compete Clauses", "Confidential Trade Secret Protection", "Strict Employee & Partner Backing"]
    },
    {
      title: "Isolated Dedicated Workspaces",
      icon: <Vault className="w-6 h-6 text-[#004658]" />,
      desc: "Each client project runs in a strictly isolated environment with role-based access control (RBAC), branch protection, and encrypted developer workstations.",
      details: ["MFA Enforceable Access", "Granular Branch Permission Gates", "Encrypted Developer Workstations", "Audit Logs & Activity Tracking"]
    },
    {
      title: "GDPR & Data Privacy Compliance",
      icon: <Globe className="w-6 h-6 text-[#004658]" />,
      desc: "We adhere strictly to international privacy frameworks including GDPR, HIPAA, and CCPA, implementing privacy-by-design architecture across all data pipelines.",
      details: ["AES-256 Data Encryption at Rest", "TLS 1.3 Encrypted Transit", "Zero Unauthorized Telemetry", "Data Anonymization Protocols"]
    }
  ];

  const securitySpecs = [
    { category: "Data Encryption", detail: "AES-256 bit encryption for databases & storage; TLS 1.3 with strict HSTS for all web API traffic." },
    { category: "Identity & Access", detail: "Mandatory Multi-Factor Authentication (MFA), SSO integration, and fine-grained role-based permissions." },
    { category: "Vulnerability Scanning", detail: "Continuous automated static & dynamic security scans (SAST/DAST) with Dependabot and Snyk integration." },
    { category: "Network Infrastructure", detail: "AWS/GCP VPC isolation, WAF firewalls, DDoS protection via Cloudflare Enterprise." },
    { category: "Penetration Testing", detail: "Regular OWASP Top 10 security audits and vulnerability assessments conducted before major releases." }
  ];

  const processFlow = [
    { step: "01", name: "Mutual NDA Signed", text: "We sign a legal bilateral NDA before receiving any technical specs or credentials." },
    { step: "02", name: "Secure Workspace Setup", text: "Provisioning isolated git repositories, SSO access keys, and encrypted environments." },
    { step: "03", name: "Compliant Sprint Execution", text: "Developers write code under strict security linting rules and vulnerability checks." },
    { step: "04", name: "Security Audit Signoff", text: "Complete penetration testing and static vulnerability scan report delivered." },
    { step: "05", name: "Final IP Transfer", text: "Legal copyright & repository ownership master keys handed over to your team." }
  ];

  return (
    <div className="w-full bg-[#FBFDFD] pt-32 sm:pt-40 pb-24 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Radial Light Effect */}
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
          <span>🛡️ Enterprise Security & Legal IP Guarantee</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Complete IP Ownership &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Defense-In-Depth Security
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We protect your code, trade secrets, and customer data with legally binding non-disclosure agreements, SOC2-ready practices, and 100% intellectual property transfer.
        </p>

        {/* Hero Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-xl sm:text-2xl font-bold text-[#004658] font-['Outfit',sans-serif]">100%</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">IP Transfer</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-xl sm:text-2xl font-bold text-[#004658] font-['Outfit',sans-serif]">Bilateral</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">NDA Signed First</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-xl sm:text-2xl font-bold text-[#004658] font-['Outfit',sans-serif]">AES-256</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Data Encryption</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-center">
            <p className="text-xl sm:text-2xl font-bold text-[#004658] font-['Outfit',sans-serif]">SOC2-Ready</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Operational Rigor</p>
          </div>
        </div>
      </div>

      {/* 4 Pillars Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif]">
            Our IP & Security Commitments
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">Legal safeguards and architectural security controls built to safeguard enterprise assets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {securityPillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-lg shadow-[#004658]/5 hover:shadow-xl hover:border-[#004658]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#004658]/10 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">{pillar.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">{pillar.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-[#004658] mb-3">Enforceable Guarantees</p>
                <div className="grid grid-cols-2 gap-2">
                  {pillar.details.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Controls Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#002B34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mb-10">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-2">Technical Security Architecture</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif]">
              Cybersecurity & Infrastructure Controls
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">Every web application and API engineered by CodeCrafter undergoes multi-layered defense auditing.</p>
          </div>

          <div className="space-y-4">
            {securitySpecs.map((spec, index) => (
              <div key={index} className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-center gap-3 w-full md:w-1/3 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4EF0C5]" />
                  <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit',sans-serif]">{spec.category}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{spec.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5-Step IP Onboarding Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif]">
            5-Step IP & Security Workflow
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">How we protect your intellectual property from the first conversation to final code delivery.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {processFlow.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-left">
              <span className="text-2xl font-extrabold text-[#004658]/30 font-['Outfit',sans-serif] block mb-1">{item.step}</span>
              <h4 className="text-base font-bold text-slate-900 mb-1.5 font-['Outfit',sans-serif]">{item.name}</h4>
              <p className="text-xs text-slate-600 leading-normal">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">
            Need a Custom NDA Before Sharing Specs?
          </h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            We are ready to execute your custom non-disclosure agreement or provide our standard mutual NDA immediately.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/schedule-consultation"
              className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all shadow-lg"
            >
              Request Mutual NDA
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 transition-all"
            >
              Contact Security Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityIpProtection;
