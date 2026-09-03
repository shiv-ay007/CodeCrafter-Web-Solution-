import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    id: "software-dev",
    title: "Software Development",
    description: "Develop secure, scalable full-stack applications and high-performance backend systems.",
    iconBg: "bg-gradient-to-br from-[#EA580C] to-[#C2410C]",
    iconGlow: "group-hover:shadow-[#EA580C]/25",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M4 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM9 21h6" />
      </svg>
    ),
    tags: ["Full-Stack", "React", "Node.js", "Python", ".NET", "Next.js"],
    link: "/software/erp"
  },
  {
    id: "uiux-design",
    title: "UI/UX & Product Design",
    description: "Create human-centered UI design systems, responsive wireframes, and interactive prototypes.",
    iconBg: "bg-gradient-to-br from-[#1E293B] to-[#0F172A]",
    iconGlow: "group-hover:shadow-[#0F172A]/25",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4c0-1.48.8-2.75 2-3.45V5a2 2 0 012-2h10a2 2 0 012 2v8.55c1.2.7 2 1.97 2 3.45a4 4 0 01-4 4H7z" />
      </svg>
    ),
    tags: ["UI/UX", "Figma", "Design Systems", "Wireframing", "Prototyping"],
    link: "/web-design"
  },
  {
    id: "ai-ml",
    title: "AI and Machine Learning",
    description: "Deploy trustworthy AI solutions that create real business value.",
    iconBg: "bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]",
    iconGlow: "group-hover:shadow-[#1D4ED8]/25",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
      </svg>
    ),
    tags: ["AI", "Machine Learning", "Data Science", "LLMs", "Generative AI", "Python"],
    link: "/software/crm"
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Craft native iOS and Android apps engineered for fluid 60 FPS performance.",
    iconBg: "bg-gradient-to-br from-[#04434E] to-[#022B32]",
    iconGlow: "group-hover:shadow-[#022B32]/25",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
      </svg>
    ),
    tags: ["iOS", "Android", "Flutter", "React Native", "Kotlin", "Swift"],
    link: "/app-studio/flutter"
  },
  {
    id: "qa-testing",
    title: "QA Testing & Automation",
    description: "Eliminate bugs and optimize speed with automated test suites and load testing.",
    iconBg: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]",
    iconGlow: "group-hover:shadow-[#6D28D9]/25",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    tags: ["QA Automation", "Selenium", "Cypress", "Jest", "Load Testing"],
    link: "/web-development"
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Engineering",
    description: "Architect secure, auto-scaling infrastructure with automated CI/CD deployments.",
    iconBg: "bg-gradient-to-br from-[#38BDF8] to-[#0284C7]",
    iconGlow: "group-hover:shadow-[#0284C7]/25",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Cloud"],
    link: "/hosting/cloud"
  }
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive items per view detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCards = servicesData.length;
  const maxIndex = Math.max(0, totalCards - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const progressPercentage = maxIndex === 0 ? 100 : (currentIndex / maxIndex) * 100;

  return (
    <section 
      className="relative py-10 sm:py-12 lg:py-16 bg-[#F7F7F7] overflow-hidden select-none" 
      id="services"
    >
      {/* Background Subtle Transparent Code Snippet Watermarks */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden font-mono text-[13px] sm:text-[14px] leading-relaxed text-slate-900/[0.035] select-none">
        <div className="absolute top-6 left-8 sm:left-16 whitespace-pre">
          {`class default {\n  const function init() {\n    soloe iamper>\n  };\n  default {\n`}
        </div>
        <div className="absolute top-12 right-12 sm:right-28 whitespace-pre">
          {`import <cold>\nimport <sold>;\n\nfunc inp execution() {\n  const impact = new dara.get_serrind();\n  <script src="coverage.js">\n  System.out.println("modifications/come");\n}`}
        </div>
        <div className="absolute bottom-16 left-12 whitespace-pre">
          {`if (colin i) {\n  headers in +x miata;\n  headers.ind > cw;\n}`}
        </div>
        <div className="absolute bottom-8 right-20 whitespace-pre">
          {`return <CodeCrafterSDLC coverage="full" execution="unblocked" />;`}
        </div>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-Stack Coverage Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-8"
        >
          {/* Main 2-Line Headline */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.035em] text-slate-950 leading-[1.14]">
              Get full-stack coverage. <br />
              <span className="text-[#004658]">
                Unblock execution across the SDLC<span className="text-[#EA580C]">.</span>
              </span>
            </h2>
          </div>

          {/* Right Action Link */}
          <div className="shrink-0 pb-1 text-left md:text-right">
            <Link
              to="/web-development"
              className="text-xs sm:text-[13.5px] font-bold text-slate-950 hover:text-[#022B32] border-b-2 border-slate-950 hover:border-[#022B32] pb-0.5 transition-all inline-flex items-center gap-1.5 group"
            >
              <span>Everything we do</span>
              <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>

        {/* Horizontal Slider Viewport */}
        <div className="relative overflow-hidden py-3">
          <motion.div
            className="flex gap-5 sm:gap-6"
            animate={{
              x: `-${currentIndex * (100 / visibleCount + (visibleCount > 1 ? (currentIndex > 0 ? 0.8 : 0) : 0))}%`
            }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            style={{ width: `${(totalCards / visibleCount) * 100}%` }}
          >
            {servicesData.map((item) => (
              <div
                key={item.id}
                style={{ width: `${100 / totalCards}%` }}
                className="px-0.5 shrink-0"
              >
                <Link
                  to={item.link}
                  className="group relative flex flex-col justify-between h-full min-h-[390px] sm:min-h-[420px] bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(2,43,50,0.05),0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_22px_45px_-12px_rgba(2,43,50,0.13),0_2px_6px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:border-[#022B32]/35 transition-all duration-300 overflow-hidden text-left"
                >
                  {/* Elegant Top Ambient Highlight Line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#022B32] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Section */}
                  <div>
                    {/* Header Row: Icon & Top-Right Arrow */}
                    <div className="flex items-center justify-between mb-6">
                      {/* Squircle Icon with Rich Gradient and Shadow */}
                      <div className={`w-13 h-13 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-md ${item.iconGlow} group-hover:scale-108 transition-all duration-300 shrink-0`}>
                        {item.icon}
                      </div>

                      {/* Clean Minimalist Corner Arrow Pill */}
                      <div className="w-8 h-8 rounded-full bg-slate-100/90 text-slate-400 group-hover:bg-[#022B32] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shadow-2xs">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                    </div>

                    {/* Bold Service Title */}
                    <h3 className="text-xl sm:text-[22px] font-bold text-slate-950 tracking-tight mb-2.5 leading-snug group-hover:text-[#022B32] transition-colors">
                      {item.title}
                    </h3>

                    {/* Refined Description */}
                    <p className="text-[13.5px] sm:text-[14px] text-slate-600 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Tag Pills Section with Ambient Glow */}
                  <div className="relative pt-6 mt-4 border-t border-slate-100/90">
                    {/* Soft Deep Teal (#022B32) Radial Glow Behind Tag Pills */}
                    <div 
                      className="absolute -inset-x-2 -bottom-2 h-20 bg-[radial-gradient(ellipse_at_bottom,rgba(2,43,50,0.11)_0%,rgba(2,43,50,0.02)_55%,transparent_75%)] pointer-events-none rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Upgraded Premium Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/90 bg-slate-50/80 text-[#022B32] font-semibold text-[11.5px] sm:text-xs tracking-tight shadow-2xs group-hover:border-[#022B32]/35 group-hover:bg-white hover:!bg-[#022B32] hover:!text-white hover:!border-[#022B32] hover:scale-105 transition-all duration-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#022B32]/35 group-hover:bg-[#022B32] transition-colors" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Bottom Horizontal Slider Track & Navigation Controls */}
        <div className="mt-8 sm:mt-10 max-w-[840px] mx-auto flex items-center gap-4 sm:gap-6 px-2">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-[#022B32] hover:bg-slate-50 hover:border-[#022B32]/40 active:scale-95 transition-all cursor-pointer disabled:opacity-25 disabled:pointer-events-none shrink-0"
            aria-label="Slide Left"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Clean Thin Translucent Light-Grey Slider Track */}
          <div className="flex-1 bg-slate-200/70 h-1.5 sm:h-2 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-[#022B32]/70 rounded-full"
              initial={{ width: "33%" }}
              animate={{
                width: `${100 / (maxIndex + 1)}%`,
                x: `${progressPercentage * (maxIndex / (maxIndex + 1))}%`
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-[#022B32] hover:bg-slate-50 hover:border-[#022B32]/40 active:scale-95 transition-all cursor-pointer disabled:opacity-25 disabled:pointer-events-none shrink-0"
            aria-label="Slide Right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Minimalist Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-3.5">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === dotIdx
                  ? "w-4 h-2 bg-[#022B32] rounded-full"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;