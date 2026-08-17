import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const technologies = [
  {
    id: "react",
    name: "React.js",
    category: "Frontend UI",
    icon: (
      <svg className="w-8 h-8" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Full-stack Framework",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="#000000" />
        <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#paint0_linear)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend Engine",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 256 288" fill="none">
        <path d="M128 0L249.2 69.9V209.9L128 279.8L6.8 209.9V69.9L128 0Z" fill="#339933" />
        <path d="M128 17.5L234 78.6V201.2L128 262.3L22 201.2V78.6L128 17.5Z" fill="#66CC33" />
        <path d="M128 65L185 98V164L128 197L71 164V98L128 65Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: "python",
    name: "Python",
    category: "AI & Backend",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 110 110" fill="none">
        <path d="M54.5 3C27.5 3 29.2 14.7 29.2 14.7L29.3 26.8H55V30.5H16.6C16.6 30.5 3 28.8 3 55.7C3 82.6 15 80.9 15 80.9H22.1V68.9C22.1 68.9 21.6 54.5 36.2 54.5H62.3C62.3 54.5 74.3 54.5 74.3 42.4V14.7C74.3 14.7 75.9 3 54.5 3ZM42.1 11.2C44.7 11.2 46.9 13.4 46.9 16C46.9 18.6 44.7 20.8 42.1 20.8C39.5 20.8 37.3 18.6 37.3 16C37.3 13.4 39.5 11.2 42.1 11.2Z" fill="#3776AB" />
        <path d="M55.5 107C82.5 107 80.8 95.3 80.8 95.3L80.7 83.2H55V79.5H93.4C93.4 79.5 107 81.2 107 54.3C107 27.4 95 29.1 95 29.1H87.9V41.1C87.9 41.1 88.4 55.5 73.8 55.5H47.7C47.7 55.5 35.7 55.5 35.7 67.6V95.3C35.7 95.3 34.1 107 55.5 107ZM67.9 98.8C65.3 98.8 63.1 96.6 63.1 94C63.1 91.4 65.3 89.2 67.9 89.2C70.5 89.2 72.7 91.4 72.7 94C72.7 96.6 70.5 98.8 67.9 98.8Z" fill="#FFD43B" />
      </svg>
    )
  },
  {
    id: "aws",
    name: "AWS Cloud",
    category: "Infrastructure",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M18.5 14.5c-.8.8-2 1.5-3.5 1.5-2.2 0-3.8-1.5-3.8-3.8 0-2.3 1.6-3.8 3.8-3.8 1.4 0 2.6.7 3.3 1.5l1.6-1.5C18.8 7.1 17 6.2 15 6.2 11.4 6.2 8.8 8.8 8.8 12.2s2.6 6 6.2 6c2.1 0 3.9-1 4.9-2.3l-1.4-1.4z" fill="#232F3E" />
        <path d="M4 17.5c4.5 3 11.5 3 16 0" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M19.5 16.5l1.5 2-2.5.5" fill="#FF9900" stroke="#FF9900" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: "docker",
    name: "Docker",
    category: "Containers",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zM23.978 10.94a1.868 1.868 0 00-.776-.816l-.28-.157-.183.257c-.445.626-1.127 1.01-1.87 1.05-.285.016-.57-.024-.842-.119l-.338-.118-.112.339c-.482 1.458-1.528 2.66-2.945 3.385l-.261.134.133.262c.706 1.385.663 3.018-.116 4.368-.962 1.666-2.73 2.723-4.664 2.784-5.908.187-10.742-3.14-11.83-8.32a.185.185 0 00-.18-.146H.185A.186.186 0 000 13.93c.188 1.13 1.053 5.485 5.568 8.01 3.992 2.23 9.408 2.378 13.918.397 3.52-1.545 5.67-4.898 5.753-8.977.01-.482-.08-.96-.26-1.42z" />
      </svg>
    )
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "Database",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#336791" />
      </svg>
    )
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "Mobile Apps",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M14.314 0L2.3 12 6.643 16.343 23 0z" fill="#47C5FB" />
        <path d="M14.186 13.971L8.514 19.643 12.857 24l9.843-9.843-8.514-.186z" fill="#02569B" />
        <path d="M8.514 13.971l4.343-4.342 4.343 4.342-4.343 4.343z" fill="#0175C2" />
      </svg>
    )
  }
];

const TechMarquee = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#eef7fa] overflow-hidden" id="technologies">
      
      {/* Subtle Glow */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none rounded-full opacity-30 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.18) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Layout: Left Text, Right Rotating Tech Orbit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Clean Typography & Description (lg:col-span-6) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 text-left space-y-4"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
              <span>FULL-STACK INTEGRATION</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-950 tracking-[-0.03em] leading-[1.1]">
              Seamless integration with your entire tech stack<span className="text-[#EA580C]">.</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-lg">
              Businesses can seamlessly integrate our custom engineering squads, cloud-native architectures, and software solutions with their preferred platforms, databases, and enterprise tooling.
            </p>

            {/* Action Highlights & CTA */}
            <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#004658] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:scale-105 transition-all duration-200"
              >
                <span>Explore Full Repertoire</span>
                <span className="text-cyan-300 font-bold">→</span>
              </Link>

              <div className="text-[11px] sm:text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>100+ Technologies Supported</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Circular Orbit Animation (lg:col-span-6) */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[340px] sm:min-h-[400px]">
            
            {/* Orbit Container with Smooth Continuous Rotation */}
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] flex items-center justify-center">
              
              {/* Outer Orbit Guideline */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#004658]/20 pointer-events-none" />
              
              {/* Secondary Outer Orbit Ring */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-slate-300/40 pointer-events-none" />

              {/* CENTER CIRCLE CORE */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#004658] via-[#003d4c] to-[#002732] flex flex-col items-center justify-center p-2.5 text-center shadow-xl shadow-[#004658]/30 border-2 border-white/80 cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center mb-0.5 text-cyan-300 font-bold text-xs">
                  CC
                </div>
                <span className="text-white text-[11px] sm:text-xs font-bold tracking-tight leading-tight">
                  {hoveredTech ? hoveredTech.name : "CodeCrafter"}
                </span>
                <span className="text-[9px] sm:text-[10px] text-cyan-200 font-medium mt-0.5">
                  {hoveredTech ? hoveredTech.category : "Core Engine"}
                </span>
              </motion.div>

              {/* CONTINUOUS ROTATING ORBIT WHEEL */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full pointer-events-auto"
              >
                {technologies.map((tech, index) => {
                  const total = technologies.length;
                  const angle = (index * 360) / total;
                  const radius = 135; // Compact Orbit Radius in px
                  const radian = (angle * Math.PI) / 180;
                  
                  // Small decorative dot angle halfway between badges
                  const dotAngle = angle + 360 / (total * 2);
                  const dotRadian = (dotAngle * Math.PI) / 180;

                  return (
                    <React.Fragment key={tech.id}>
                      {/* 1. Circular Tech Badge */}
                      <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          transform: `translate(${Math.cos(radian) * radius}px, ${Math.sin(radian) * radius}px)`
                        }}
                      >
                        {/* Counter-rotate to keep logo upright */}
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                          whileHover={{ scale: 1.2, zIndex: 40 }}
                          onMouseEnter={() => setHoveredTech(tech)}
                          onMouseLeave={() => setHoveredTech(null)}
                          className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-white shadow-md shadow-slate-400/20 border border-slate-100 flex items-center justify-center p-2 sm:p-2.5 cursor-pointer hover:border-[#004658] hover:shadow-lg transition-all duration-200 group"
                        >
                          <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            {tech.icon}
                          </div>
                        </motion.div>
                      </div>

                      {/* 2. Smaller Decorative Orbit Dot */}
                      <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        style={{
                          transform: `translate(${Math.cos(dotRadian) * radius}px, ${Math.sin(dotRadian) * radius}px)`
                        }}
                      >
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow-2xs border border-slate-200/80" />
                      </div>
                    </React.Fragment>
                  );
                })}
              </motion.div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Smooth Curved Wave Transition into Insights */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -z-0">
        <svg className="relative block w-full h-8 sm:h-14 text-[#f5f8fc] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.31,200.72,110.15,241.81,103.6,281.33,74.4,321.39,56.44Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default TechMarquee;
