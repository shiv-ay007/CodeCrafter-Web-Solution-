import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const processSteps = [
  {
    stepNumber: "STEP 1",
    title: "Join exploration call.",
    description:
      "Tell us more about your business on a discovery call. We'll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    stepNumber: "STEP 2",
    title: "Discuss solution and team setup.",
    description:
      "Our senior technical architects analyze requirements and assemble the ideal dedicated engineering squad, tailored to your exact tech stack and project velocity.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    )
  },
  {
    stepNumber: "STEP 3",
    title: "Fast-track onboarding and integration.",
    description:
      "Zero-friction setup. We integrate directly into your Jira, GitHub, and Slack workflows within 48 to 72 hours with unified communication channels.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    stepNumber: "STEP 4",
    title: "Iterative delivery & ongoing sprints.",
    description:
      "Bi-weekly sprint demos, automated CI/CD releases, clean code reviews, and continuous communication throughout the entire product build lifecycle.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
];

const Serve = () => {
  return (
    <section className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#ecf5f8] overflow-hidden" id="process">
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Wide Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-left mb-8 sm:mb-9"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
            <span>HOW WE WORK</span>
          </div>

          {/* Wide Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-[-0.03em] text-slate-950 leading-[1.1] max-w-3xl">
            Our process. Simple, seamless, <br className="hidden sm:inline" />
            streamlined<span className="text-[#004658]">.</span>
          </h2>
        </motion.div>

        {/* Vertical Connected Process Timeline */}
        <div className="relative pl-2 sm:pl-3 text-left">
          
          {/* Vertical Dotted Connector Line */}
          <div className="absolute left-[23px] sm:left-[25px] top-5 bottom-6 w-0.5 border-l-2 border-dashed border-slate-300 pointer-events-none" />

          {/* Process Steps */}
          <div className="space-y-8 sm:space-y-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative flex items-start gap-4 sm:gap-6 group"
              >
                {/* Circular Icon Marker */}
                <div className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#004658] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#004658]/25 group-hover:scale-105 group-hover:bg-[#003442] transition-all duration-300">
                  {step.icon}
                </div>

                {/* Step Text Information */}
                <div className="pt-0.5 space-y-1">
                  <div className="text-[10.5px] sm:text-xs font-mono font-bold text-[#004658] uppercase tracking-wider">
                    {step.stepNumber}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-950 tracking-tight leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* Bottom Smooth Organic Wave Transition into AssembleTeam */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -z-0">
        <svg className="relative block w-full h-8 sm:h-14 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.31,200.72,110.15,241.81,103.6,281.33,74.4,321.39,56.44Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default Serve;