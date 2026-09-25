import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, Layers, Zap, Shield, Sparkles, LayoutGrid, Palette, Database, CheckCircle2, FileCheck } from "lucide-react";

const AnimatedLighthouseScore = ({ label, targetScore = 100 }) => {
  const [score, setScore] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const duration = 1400; // ms

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentScore = Math.floor(easeProgress * targetScore);
        
        setScore(currentScore);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, targetScore]);

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div ref={ref} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:bg-white hover:border-[#004658]/30">
      <div className="relative w-20 h-20 flex items-center justify-center mb-2">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r={radius}
            className="stroke-emerald-100"
            strokeWidth="4.5"
            fill="transparent"
          />
          <circle
            cx="32"
            cy="32"
            r={radius}
            className="stroke-emerald-500 transition-all duration-75 ease-out"
            strokeWidth="4.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <span className="absolute font-extrabold text-xl text-emerald-600 font-['Outfit',sans-serif]">
          {score}
        </span>
      </div>
      <p className="text-xs font-bold text-slate-700">{label}</p>
    </div>
  );
};

const FrontendDevelopment = () => {
  const [activeTab, setActiveTab] = useState("js");

  const scores = [
    { label: "Performance" },
    { label: "Accessibility" },
    { label: "Best Practices" },
    { label: "SEO" }
  ];

  const ecosystems = {
    js: {
      id: "js",
      label: "JavaScript Ecosystem",
      categories: [
        {
          category: "Frameworks & Rendering",
          icon: <LayoutGrid className="w-5 h-5 text-[#004658]" />,
          items: [
            { name: "React 19", detail: "Server Components, Concurrent Rendering" },
            { name: "Next.js 15", detail: "App Router, ISR, Edge Rendering" },
            { name: "Vite", detail: "Ultra-fast build tooling" }
          ]
        },
        {
          category: "Styling & UI",
          icon: <Palette className="w-5 h-5 text-[#004658]" />,
          items: [
            { name: "Tailwind CSS 4", detail: "Utility-first, zero runtime CSS" },
            { name: "Shadcn/UI & Radix", detail: "Accessible component primitives" },
            { name: "Design Tokens & Style Dictionary", detail: "" }
          ]
        },
        {
          category: "State & Data",
          icon: <Database className="w-5 h-5 text-[#004658]" />,
          items: [
            { name: "TypeScript", detail: "End-to-end type safety" },
            { name: "TanStack Query", detail: "Server-state management" },
            { name: "Zustand / Redux Toolkit", detail: "Client-state management" }
          ]
        },
        {
          category: "Animation & Interaction",
          icon: <Sparkles className="w-5 h-5 text-[#004658]" />,
          items: [
            { name: "Framer Motion", detail: "60 FPS micro-interactions" },
            { name: "GSAP", detail: "Complex scroll/timeline animations" },
            { name: "Lottie", detail: "Lightweight vector animations" }
          ]
        },
        {
          category: "Testing & Quality",
          icon: <CheckCircle2 className="w-5 h-5 text-[#004658]" />,
          items: [
            { name: "Playwright", detail: "E2E testing" },
            { name: "Vitest / Jest", detail: "Unit testing" },
            { name: "Storybook", detail: "Component documentation" }
          ]
        }
      ]
    },
    dotnet: {
      id: "dotnet",
      label: ".NET Ecosystem",
      categories: [
        {
          category: "Frameworks & Rendering",
          icon: <Cpu className="w-5 h-5 text-[#004658]" />,
          items: [
            { name: "Blazor WebAssembly & Server", detail: "C#-native SPA experience" },
            { name: "ASP.NET Core MVC", detail: "Enterprise web applications" },
            { name: "Razor Pages", detail: "Fast, page-focused development" }
          ]
        },
        {
          category: "Styling & UI",
          icon: <Layers className="w-5 h-5 text-[#004658]" />,
          items: [
            { name: "MudBlazor / Radzen", detail: "Enterprise-grade Blazor component libraries" },
            { name: "Bootstrap 5 Integration", detail: "Responsive layout framework" },
            { name: "Custom Design System Tokens", detail: "Enterprise theme consistency" }
          ]
        },
        {
          category: "Data & Architecture",
          icon: <Code2 className="w-5 h-5 text-[#004658]" />,
          items: [
            { name: "Entity Framework Core", detail: "ORM, type-safe database access" },
            { name: "C# 13", detail: "Latest language features, minimal APIs" },
            { name: "SignalR", detail: "Real-time updates, WebSocket communication" }
          ]
        },
        {
          category: "Performance & Security",
          icon: <Shield className="w-5 h-5 text-[#004658]" />,
          items: [
            { name: "Server-Side Rendering (SSR)", detail: "For SEO & speed" },
            { name: "Built-in Identity & Role-Based Auth", detail: "Secure authentication" },
            { name: "Native Azure/IIS Deployment Optimization", detail: "" }
          ]
        },
        {
          category: "Testing & Quality",
          icon: <FileCheck className="w-5 h-5 text-[#004658]" />,
          items: [
            { name: "xUnit / NUnit", detail: "Unit testing" },
            { name: "Selenium", detail: "Cross-browser E2E testing" },
            { name: "Swagger/OpenAPI", detail: "API documentation" }
          ]
        }
      ]
    }
  };

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
          <span>⚡ Next-Gen Front-end Engineering</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Pixel-Perfect, Lightning-Fast{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Front-End Development
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We craft ultra-responsive web interfaces with React, Next.js, or Blazor — engineered for flawless 60 FPS performance across all devices.
        </p>

        {/* Lighthouse Score Card with Circular Scroll Animation */}
        <div className="bg-white border border-[#004658]/15 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-xl">
          <p className="text-xs font-bold text-[#004658] uppercase tracking-wider mb-4">Google Lighthouse Benchmark Target</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {scores.map((s, idx) => (
              <AnimatedLighthouseScore key={idx} label={s.label} targetScore={100} />
            ))}
          </div>
        </div>
      </div>

      {/* Ecosystem Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif] mb-3">
            Front-End Technology Stacks
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our comprehensive engineering capabilities across modern JavaScript and enterprise .NET ecosystems.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("js")}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "js"
                ? "bg-[#004658] text-white shadow-lg shadow-[#004658]/20"
                : "bg-white border border-slate-200 text-slate-700 hover:border-[#004658]/40 hover:text-[#004658]"
            }`}
          >
            JavaScript Ecosystem
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

        {/* Active Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {ecosystems[activeTab].categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-md hover:border-[#004658]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-[#004658]/10 flex items-center justify-center shrink-0">
                      {cat.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004658] mt-2 shrink-0" />
                        <div>
                          <span className="font-bold text-slate-900">{item.name}</span>
                          {item.detail && (
                            <span className="text-slate-500 font-normal ml-1">
                              ({item.detail})
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Need a Ultra-Fast Front-End Architecture?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Talk to our Senior Front-End Leads to upgrade your Web UI stack.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule Front-End Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrontendDevelopment;
