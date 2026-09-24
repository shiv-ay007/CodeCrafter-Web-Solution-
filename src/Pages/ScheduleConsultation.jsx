import React, { useState } from "react";
import { Link } from "react-router-dom";

const ScheduleConsultation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceCategory: "Web Development",
    budget: "$10k - $25k",
    timeline: "1-2 Months",
    projectDetails: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setSubmitted(true);
    }
  };

  const benefits = [
    { title: "Direct Tech Lead Access", desc: "Speak directly with Senior Architects and Lead Developers — no pushy sales reps." },
    { title: "Free Code & Architecture Audit", desc: "We review your existing codebase or wireframes to identify optimization opportunities." },
    { title: "Transparent Pricing & Scope", desc: "Receive a granular milestone-based project cost and timeline breakdown." },
    { title: "100% Guaranteed Confidentiality", desc: "Your project details are protected under our automatic mutual NDA agreement." }
  ];

  const steps = [
    { num: "01", title: "Discovery Call", desc: "30-minute video session to analyze your technical requirements, goals, and constraints." },
    { num: "02", title: "Architectural Blueprint", desc: "Within 48 hours, receive a detailed spec proposal, stack selection, and milestone roadmap." },
    { num: "03", title: "Sprint Kickoff", desc: "Onboarding call with your dedicated engineering team and project manager." }
  ];

  const faqs = [
    { q: "Is the consultation call completely free?", a: "Yes, 100% free with no obligation. Our goal is to understand your technical requirements and provide clear architectural guidance." },
    { q: "Do I need a detailed spec document before calling?", a: "Not at all. Whether you have a 50-page spec or just an idea on a napkin, our architects will help refine your scope." },
    { q: "Can we sign an NDA before the call?", a: "Absolutely. We are happy to execute your custom NDA or provide our standard mutual NDA prior to our meeting." },
    { q: "How fast can we start after the call?", a: "Our dedicated engineering squads can usually kick off sprint work within 3 to 7 business days." }
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
          <span>⚡ 1-on-1 Architecture & Strategy Session</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Schedule a Free Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Consultation Call
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          Book a 30-minute discovery call with our Senior Solutions Architect. We'll analyze your product scope, suggest stack recommendations, and outline an action plan.
        </p>
      </div>

      {/* Form & Benefits Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Benefits & Trust Points */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 font-['Outfit',sans-serif]">
                Why Book a Strategy Call With CodeCrafter?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Get high-level technical clarity before spending a single dollar on software development.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((b, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-[#004658]/15 shadow-sm flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#004658]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#004658]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">{b.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact Callout */}
            <div className="p-6 rounded-3xl bg-[#002B34] text-white space-y-3">
              <div className="flex items-center gap-2 text-[#4EF0C5] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#4EF0C5] animate-ping" />
                <span>Prefer Direct Email?</span>
              </div>
              <p className="text-sm text-slate-200">
                You can also email your RFP or project specs directly to our engineering team at:
              </p>
              <a href="mailto:contact@codecrafter.io" className="inline-block text-base font-bold text-[#4EF0C5] hover:underline">
                contact@codecrafter.io
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#004658]/15 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-['Outfit',sans-serif]">Consultation Request Received!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Our Senior Lead Architect will contact you at <strong>{formData.email}</strong> within 24 hours with session calendar invite details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#004658] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#003442] transition-colors"
                >
                  Schedule Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit',sans-serif] mb-1">
                    Book Your Discovery Session
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">Fill in the quick details below to reserve your 30-min strategy call.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#004658] focus:ring-2 focus:ring-[#004658]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#004658] focus:ring-2 focus:ring-[#004658]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#004658] focus:ring-2 focus:ring-[#004658]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Company / Org</label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#004658] focus:ring-2 focus:ring-[#004658]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Primary Interest</label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#004658] focus:ring-2 focus:ring-[#004658]/20 transition-all bg-white"
                    >
                      <option>Web App Development</option>
                      <option>Mobile App Studio</option>
                      <option>Enterprise ERP / SaaS</option>
                      <option>UI/UX Product Design</option>
                      <option>Dedicated Squad Setup</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#004658] focus:ring-2 focus:ring-[#004658]/20 transition-all bg-white"
                    >
                      <option>&lt; $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Target Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#004658] focus:ring-2 focus:ring-[#004658]/20 transition-all bg-white"
                    >
                      <option>Immediate (&lt; 1 Month)</option>
                      <option>1-2 Months</option>
                      <option>3+ Months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Project Overview / Notes</label>
                  <textarea
                    rows="3"
                    placeholder="Briefly describe your application goals, target audience, or current tech stack..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#004658] focus:ring-2 focus:ring-[#004658]/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#004658] text-white font-bold text-base shadow-lg shadow-[#004658]/20 hover:bg-[#003442] hover:shadow-xl transition-all cursor-pointer"
                >
                  Confirm & Schedule Consultation
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* 3-Step Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif]">
            What Happens Next?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">A clear 3-step roadmap after submitting your consultation request.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-[#004658]/15 shadow-sm text-left">
              <span className="text-3xl font-extrabold text-[#004658]/30 font-['Outfit',sans-serif] block mb-2">{step.num}</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit',sans-serif]">{step.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit',sans-serif]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-base font-bold text-slate-900 mb-2 font-['Outfit',sans-serif]">{faq.q}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleConsultation;
