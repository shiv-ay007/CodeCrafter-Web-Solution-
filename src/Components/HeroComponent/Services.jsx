import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// 6 Core SDLC Offerings matching BairesDev reference cards
const servicesData = [
  {
    id: "software-dev",
    title: "Software Development",
    description: "Develop secure, scalable full-stack applications and high-performance backend systems.",
    iconBg: "bg-[#D85C38]", // Terracotta / Coral Orange squircle
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
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
    iconBg: "bg-[#1E293B]", // Dark Charcoal / Slate squircle
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
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
    iconBg: "bg-[#1D4ED8]", // Deep Royal Blue squircle
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
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
    iconBg: "bg-[#004658]", // Deep Teal squircle
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
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
    iconBg: "bg-[#7C3AED]", // Purple / Violet squircle
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
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
    iconBg: "bg-[#0284C7]", // Sky Blue squircle
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Cloud"],
    link: "/hosting/cloud"
  }
];

const Services = () => {
  return (
    <section className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#f4f7fa] overflow-hidden" id="services">
      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* Full-Stack Coverage Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8"
        >
          {/* Main 2-Line Headline */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-slate-950 leading-[1.12]">
              Get full-stack coverage. <br />
              Unblock execution across the SDLC<span className="text-[#004658]">.</span>
            </h2>
          </div>

          {/* Right Action Link */}
          <div className="shrink-0 pb-0.5 text-left md:text-right">
            <Link
              to="/web-development"
              className="text-xs sm:text-sm font-semibold text-slate-950 hover:text-[#004658] border-b border-slate-950 hover:border-[#004658] pb-0.5 transition-colors inline-flex items-center gap-1"
            >
              <span>Everything we do</span>
              <span>→</span>
            </Link>
          </div>
        </motion.div>

        {/* 6 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {servicesData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              className="h-full"
            >
              <Link
                to={item.link}
                className="group bg-white hover:bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-[#004658]/40 transition-all duration-300 flex flex-col justify-between h-full text-left cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[#004658]/8 hover:-translate-y-0.5"
              >
                <div>
                  {/* Top Squircle Icon */}
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0`}>
                    {item.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-[22px] font-semibold text-slate-950 tracking-tight mb-2 leading-snug group-hover:text-[#004658] transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm sm:text-[14.5px] text-slate-600 font-normal leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-700 font-medium text-xs shadow-2xs group-hover:border-sky-400 group-hover:bg-white group-hover:text-[#004658] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Smooth Curved Wave Transition into Process Timeline */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -z-0">
        <svg className="relative block w-full h-8 sm:h-14 text-[#ecf5f8] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default Services;