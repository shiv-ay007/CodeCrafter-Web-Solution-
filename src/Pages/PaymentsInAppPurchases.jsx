import React, { useState } from "react";
import { Link } from "react-router-dom";

const PaymentsInAppPurchases = () => {
  const [selectedPlan, setSelectedPlan] = useState("annual");

  const plans = {
    monthly: { price: "$9.99 / Month", badge: "Flexible Monthly Billing" },
    annual: { price: "$69.99 / Year", badge: "Save 40% (Most Popular)" }
  };

  const features = [
    { title: "StoreKit 2 & Google Play Billing", desc: "Native integration with Apple App Store and Google Play billing APIs ensuring 100% store guideline compliance." },
    { title: "RevenueCat & Subscriptions", desc: "Cross-platform subscription state management with real-time entitlement validation and receipt verification." },
    { title: "Stripe & Credit Card Native SDKs", desc: "Embed sleek, PCI-compliant Stripe PaymentSheets for direct credit card, Apple Pay, and Google Pay checkouts." },
    { title: "Paywall A/B Testing & Dynamic Pricing", desc: "Remotely update paywall designs, promotional offers, and localized pricing without releasing app updates." }
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
          <span>💳 Payments & In-App Purchases</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Monetize Mobile Apps with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Seamless Payment SDKs
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We integrate Apple In-App Purchases, Google Play Billing, RevenueCat, and Stripe for seamless subscription revenue models.
        </p>
      </div>

      {/* Interactive Paywall Simulator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#002B34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-1">Mobile Paywall Preview</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif]">Test Subscription Tier Entitlement</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <button
              onClick={() => setSelectedPlan("monthly")}
              className={`p-6 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedPlan === "monthly" ? "bg-[#004658] border-[#4EF0C5] text-white shadow-lg" : "bg-white/5 border-white/10 text-slate-300"
              }`}
            >
              <p className="text-xs font-bold text-[#4EF0C5] uppercase mb-1">{plans.monthly.badge}</p>
              <p className="text-xl font-bold">{plans.monthly.price}</p>
            </button>
            <button
              onClick={() => setSelectedPlan("annual")}
              className={`p-6 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedPlan === "annual" ? "bg-[#004658] border-[#4EF0C5] text-white shadow-lg" : "bg-white/5 border-white/10 text-slate-300"
              }`}
            >
              <p className="text-xs font-bold text-[#4EF0C5] uppercase mb-1">{plans.annual.badge}</p>
              <p className="text-xl font-bold">{plans.annual.price}</p>
            </button>
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
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Ready to Monetize Your Mobile App?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Discuss StoreKit 2 & Google Play Billing setup with our Mobile Monetization Engineers.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule Payment SDK Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentsInAppPurchases;
