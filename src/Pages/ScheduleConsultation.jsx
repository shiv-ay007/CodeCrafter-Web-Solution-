
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

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#008DA5] focus:ring-2 focus:ring-[#008DA5]/15 transition-all";

  const labelClass =
    "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2";

  return (
    <main className="w-full overflow-hidden bg-[#F3F8F9] text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#EAF6F7_0%,#DFF1F2_48%,#EAF3F7_100%)] pt-32 sm:pt-40 pb-20">

        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#6CCBD1]/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[450px] h-[350px] rounded-full bg-[#008DA5]/10 blur-[110px]" />
        </div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-[#004658]/15 text-[#004658] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm mb-7 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00A8CC] animate-pulse" />
            <span>⚡ 1-on-1 Architecture & Strategy Session</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-slate-950 tracking-tight leading-[1.12] max-w-5xl mx-auto mb-7 font-['Outfit',sans-serif]">
            Schedule a Free Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#007D91] to-[#00A8CC]">
              Consultation Call
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Book a 30-minute discovery call with our Senior Solutions Architect. We'll analyze your product scope, suggest stack recommendations, and outline an action plan.
          </p>

          <div className="flex justify-center mt-10">
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#004658] to-[#00A8CC]" />
          </div>
        </div>
      </section>

      {/* FORM & BENEFITS SECTION */}
      <section className="relative py-20 sm:py-24 bg-[linear-gradient(180deg,#F3F8F9_0%,#EDF5F6_100%)]">

        <div className="absolute top-0 left-0 w-72 h-72 bg-[#00A8CC]/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#004658]/5 blur-[110px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 items-start">

            {/* BENEFITS HEADING */}
            <div className="lg:col-span-5">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#008DA5] mb-3">
                WHY CODECRAFTER
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">
                Why Book a Strategy Call With CodeCrafter?
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Get high-level technical clarity before spending a single dollar on software development.
              </p>
            </div>

            <div className="hidden lg:block lg:col-span-7" />

            {/* BENEFITS CARDS */}
            <div className="lg:col-span-5 space-y-6">

              <div className="space-y-4">
                {benefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="group p-5 rounded-2xl bg-white border border-[#004658]/10 shadow-[0_5px_20px_rgba(0,70,88,0.04)] hover:shadow-[0_12px_30px_rgba(0,70,88,0.10)] hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E5F3F4] border border-[#008DA5]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#004658] transition-colors duration-300">
                      <svg className="w-5 h-5 text-[#004658] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
                        {b.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* DIRECT EMAIL */}
              <div className="relative overflow-hidden p-7 rounded-3xl bg-[#002F3A] text-white space-y-3 shadow-xl shadow-[#002F3A]/10">

                <div className="absolute -right-12 -top-16 w-48 h-48 rounded-full border border-white/10" />
                <div className="absolute -right-5 -top-9 w-32 h-32 rounded-full border border-white/10" />

                <div className="relative flex items-center gap-2 text-[#4EF0C5] text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#4EF0C5] animate-pulse" />
                  <span>Prefer Direct Email?</span>
                </div>

                <p className="relative text-sm text-slate-200 leading-relaxed">
                  You can also email your RFP or project specs directly to our engineering team at:
                </p>

                <a
                  href="mailto:codecrafter73@gmail.com"
                  className="relative inline-block text-base font-bold text-[#4EF0C5] hover:underline"
                >
                  codecrafter73@gmail.com
                </a>
              </div>
            </div>

            {/* BOOKING FORM */}
            <div className="lg:col-span-7 bg-white rounded-[28px] p-6 sm:p-10 border border-[#004658]/10 shadow-[0_15px_50px_rgba(0,70,88,0.09)]">

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                    Consultation Request Received!
                  </h3>

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

                  <div className="border-b border-slate-100 pb-5">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#008DA5]">
                      LET'S DISCUSS YOUR PROJECT
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit',sans-serif] mt-2 mb-1">
                      Book Your Discovery Session
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500">
                      Fill in the quick details below to reserve your 30-min strategy call.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Company / Org</label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className={labelClass}>Primary Interest</label>
                      <select
                        value={formData.serviceCategory}
                        onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option>Web App Development</option>
                        <option>Mobile App Studio</option>
                        <option>Enterprise ERP / SaaS</option>
                        <option>UI/UX Product Design</option>
                        <option>Dedicated Squad Setup</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option>&lt; $10,000</option>
                        <option>$10,000 - $25,000</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Target Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option>Immediate (&lt; 1 Month)</option>
                        <option>1-2 Months</option>
                        <option>3+ Months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Project Overview / Notes</label>
                    <textarea
                      rows="4"
                      placeholder="Briefly describe your application goals, target audience, or current tech stack..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#004658] to-[#007D91] text-white font-bold text-base shadow-lg shadow-[#004658]/20 hover:from-[#003442] hover:to-[#006477] hover:shadow-xl transition-all cursor-pointer"
                  >
                    Confirm & Schedule Consultation
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="relative py-20 sm:py-24 bg-[linear-gradient(135deg,#E5F2F4_0%,#EDF6F7_50%,#E5EFF4_100%)]">

        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A8CC]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#008DA5]">
              SIMPLE & TRANSPARENT
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif] mt-3">
              What Happens Next?
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-3">
              A clear 3-step roadmap after submitting your consultation request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden p-7 sm:p-8 rounded-3xl bg-white border border-[#004658]/10 shadow-[0_8px_25px_rgba(0,70,88,0.05)] hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(0,70,88,0.10)] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#004658] to-[#00A8CC] opacity-70 group-hover:opacity-100 transition-opacity" />

                <span className="text-4xl font-extrabold text-[#008DA5]/25 font-['Outfit',sans-serif] block mb-5">
                  {step.num}
                </span>

                <h4 className="text-lg font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative py-20 sm:py-24 bg-[#F5F8F8]">

        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00A8CC]/5 blur-[110px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#008DA5]">
              HAVE QUESTIONS?
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit',sans-serif] mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-[#004658]/10 shadow-[0_5px_20px_rgba(0,70,88,0.035)] hover:border-[#008DA5]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#E5F3F4] text-[#004658] flex items-center justify-center shrink-0 text-sm font-bold">
                    ?
                  </span>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 font-['Outfit',sans-serif]">
                      {faq.q}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default ScheduleConsultation;
