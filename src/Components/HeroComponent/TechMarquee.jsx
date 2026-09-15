import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Row 1 Technologies (moving slowly to the right)
const row1Technologies = [
  {
    id: "react",
    name: "React",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="-11.5 -10.23174 23 20.46348">
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
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="#000000" />
        <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#next_grad_1)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#next_grad_2)" />
        <defs>
          <linearGradient id="next_grad_1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="next_grad_2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-xs" viewBox="0 0 128 128">
        <path fill="#3178c6" d="M1.5 1.5h125v125H1.5z" />
        <path fill="#fff" d="M28.7 88.3h-12V43.8h37.5v10.5H38.7v34zm42.7-27.8c3.2-3.1 7.4-4.7 12.6-4.7 4.5 0 8.4 1.2 11.5 3.5s4.7 5.7 4.7 10.1v27.2h-11.8v-6.3c-2.3 2.5-4.8 4.4-7.6 5.6-2.8 1.2-5.9 1.8-9.4 1.8-4.5 0-8.2-1.3-11-4-2.8-2.7-4.2-6.2-4.2-10.6 0-4.6 1.5-8.3 4.6-11 3.1-2.7 7.7-4.3 13.9-4.8l10.9-.9v-2.2c0-2.3-.7-4.1-2-5.4-1.3-1.3-3.2-1.9-5.7-1.9-2.3 0-4.2.5-5.6 1.6s-2.3 2.6-2.6 4.6l-11.8-1.6c.9-4.3 2.9-7.7 5.9-10.2zm17.2 21.6v-5.2l-8.6.8c-2.8.3-4.8 1-6.1 2.2-1.3 1.2-1.9 2.7-1.9 4.7 0 1.9.6 3.4 1.8 4.5 1.2 1.1 2.9 1.7 5 1.7 2.8 0 5.1-.8 6.9-2.5 1.9-1.6 2.9-3.7 2.9-6.2z" />
      </svg>
    )
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 256 288" fill="none">
        <path d="M128 0L249.2 69.9V209.9L128 279.8L6.8 209.9V69.9L128 0Z" fill="#339933" />
        <path d="M128 17.5L234 78.6V201.2L128 262.3L22 201.2V78.6L128 17.5Z" fill="#66CC33" />
        <path d="M128 65L185 98V164L128 197L71 164V98L128 65Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: "python",
    name: "Python",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 110 110" fill="none">
        <path d="M54.5 3C27.5 3 29.2 14.7 29.2 14.7L29.3 26.8H55V30.5H16.6C16.6 30.5 3 28.8 3 55.7C3 82.6 15 80.9 15 80.9H22.1V68.9C22.1 68.9 21.6 54.5 36.2 54.5H62.3C62.3 54.5 74.3 54.5 74.3 42.4V14.7C74.3 14.7 75.9 3 54.5 3ZM42.1 11.2C44.7 11.2 46.9 13.4 46.9 16C46.9 18.6 44.7 20.8 42.1 20.8C39.5 20.8 37.3 18.6 37.3 16C37.3 13.4 39.5 11.2 42.1 11.2Z" fill="#3776AB" />
        <path d="M55.5 107C82.5 107 80.8 95.3 80.8 95.3L80.7 83.2H55V79.5H93.4C93.4 79.5 107 81.2 107 54.3C107 27.4 95 29.1 95 29.1H87.9V41.1C87.9 41.1 88.4 55.5 73.8 55.5H47.7C47.7 55.5 35.7 55.5 35.7 67.6V95.3C35.7 95.3 34.1 107 55.5 107ZM67.9 98.8C65.3 98.8 63.1 96.6 63.1 94C63.1 91.4 65.3 89.2 67.9 89.2C70.5 89.2 72.7 91.4 72.7 94C72.7 96.6 70.5 98.8 67.9 98.8Z" fill="#FFD43B" />
      </svg>
    )
  },
  {
    id: "docker",
    name: "Docker",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zM23.978 10.94a1.868 1.868 0 00-.776-.816l-.28-.157-.183.257c-.445.626-1.127 1.01-1.87 1.05-.285.016-.57-.024-.842-.119l-.338-.118-.112.339c-.482 1.458-1.528 2.66-2.945 3.385l-.261.134.133.262c.706 1.385.663 3.018-.116 4.368-.962 1.666-2.73 2.723-4.664 2.784-5.908.187-10.742-3.14-11.83-8.32a.185.185 0 00-.18-.146H.185A.186.186 0 000 13.93c.188 1.13 1.053 5.485 5.568 8.01 3.992 2.23 9.408 2.378 13.918.397 3.52-1.545 5.67-4.898 5.753-8.977.01-.482-.08-.96-.26-1.42z" />
      </svg>
    )
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.3l7.5 4.1-3 1.7-4.5-2.5-4.5 2.5-3-1.7L12 4.3zM4 9.4l3 1.7v5.1l-3-1.7V9.4zm5 2.8l3-1.7 3 1.7-3 1.7-3-1.7zm1 6.7v-3.4l2 1.1 2-1.1v3.4l-2 1.1-2-1.1zm7-1.6v-5.1l3-1.7v5.1l-3 1.7z" fill="#326CE5" />
      </svg>
    )
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    )
  }
];

// Row 2 Technologies (moving slowly to the left)
const row2Technologies = [
  {
    id: "aws",
    name: "AWS Cloud",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <path d="M18.5 14.5c-.8.8-2 1.5-3.5 1.5-2.2 0-3.8-1.5-3.8-3.8 0-2.3 1.6-3.8 3.8-3.8 1.4 0 2.6.7 3.3 1.5l1.6-1.5C18.8 7.1 17 6.2 15 6.2 11.4 6.2 8.8 8.8 8.8 12.2s2.6 6 6.2 6c2.1 0 3.9-1 4.9-2.3l-1.4-1.4z" fill="#232F3E" />
        <path d="M4 17.5c4.5 3 11.5 3 16 0" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M19.5 16.5l1.5 2-2.5.5" fill="#FF9900" stroke="#FF9900" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#336791" />
      </svg>
    )
  },
  {
    id: "flutter",
    name: "Flutter",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <path d="M14.314 0L2.3 12 6.643 16.343 23 0z" fill="#47C5FB" />
        <path d="M14.186 13.971L8.514 19.643 12.857 24l9.843-9.843-8.514-.186z" fill="#02569B" />
        <path d="M8.514 13.971l4.343-4.342 4.343 4.342-4.343 4.343z" fill="#0175C2" />
      </svg>
    )
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 1.5s-4.5 5.5-4.5 10.5c0 3.5 2 6.5 4.5 8 2.5-1.5 4.5-4.5 4.5-8C16.5 7 12 1.5 12 1.5z" fill="#47A248" />
        <path d="M12 1.5v18.5c.2 0 .4-.1.6-.2 2.1-1.3 3.9-4.2 3.9-7.8C16.5 7 12 1.5 12 1.5z" fill="#499D4A" />
      </svg>
    )
  },
  {
    id: "figma",
    name: "Figma",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    )
  },
  {
    id: "graphql",
    name: "GraphQL",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 400 400" fill="none">
        <path d="M57.468 302.002l-23.77-13.724L200 40.505l166.302 247.773-23.77 13.724L200 87.72 57.468 302.002z" fill="#E10098" />
        <path d="M40 300h320v27.448H40z" fill="#E10098" />
        <circle cx="200" cy="54" r="32" fill="#E10098" />
        <circle cx="48" cy="314" r="32" fill="#E10098" />
        <circle cx="352" cy="314" r="32" fill="#E10098" />
        <circle cx="200" cy="200" r="24" fill="#E10098" />
      </svg>
    )
  },
  {
    id: "vuejs",
    name: "Vue.js",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 261 226" fill="none">
        <path d="M161.096 0L130.55 52.88L100.003 0H0L130.55 226.1L261.1 0H161.096Z" fill="#42B883" />
        <path d="M161.096 0L130.55 52.88L100.003 0H52.246L130.55 135.59L208.854 0H161.096Z" fill="#35495E" />
      </svg>
    )
  },
  {
    id: "redis",
    name: "Redis",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <path d="M2.5 7.5L12 3l9.5 4.5L12 12 2.5 7.5z" fill="#D82C20" />
        <path d="M2.5 12L12 16.5l9.5-4.5v3L12 19.5 2.5 15v-3z" fill="#A3241C" />
        <path d="M2.5 16.5L12 21l9.5-4.5v3L12 24 2.5 19.5v-3z" fill="#7A1B15" />
      </svg>
    )
  }
];

// Duplicate lists for seamless continuous marquee
const row1Marquee = [...row1Technologies, ...row1Technologies, ...row1Technologies, ...row1Technologies];
const row2Marquee = [...row2Technologies, ...row2Technologies, ...row2Technologies, ...row2Technologies];

const TechMarquee = () => {
  return (
    <section className="relative py-12 sm:py-14 lg:py-16 bg-[#EEF7FA] overflow-hidden select-none" id="technologies">
      
      {/* GPU Accelerated Keyframes for Butter-Smooth, Jitter-Free Slow Marquee */}
      <style>{`
        @keyframes marqueeRightSlow {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }
        @keyframes marqueeLeftSlow {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-right {
          animation: marqueeRightSlow 48s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .animate-marquee-left {
          animation: marqueeLeftSlow 48s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Soft Ambient Center Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] pointer-events-none rounded-full opacity-40 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(0, 70, 88, 0.16) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CENTERED HEADER & CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3.5 mb-10 sm:mb-12"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#022B32]/8 border border-[#022B32]/15 text-[#022B32] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#022B32] animate-pulse" />
            <span>FULL-STACK INTEGRATION</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-950 tracking-[-0.035em] leading-[1.12]">
            Seamless integration with your <span className="text-[#004658]">entire tech stack<span className="text-[#EA580C]">.</span></span>
          </h2>

          {/* Description Paragraph */}
          <p className="text-base sm:text-[17px] text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Easily integrate our engineering squads and cloud architectures with your existing tech stack, databases, and enterprise tools.
          </p>

          {/* Action Button & Info */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#022B32] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#022B32]/20 hover:bg-[#011c21] hover:scale-105 transition-all duration-200"
            >
              <span>Explore Full Repertoire</span>
              <span className="text-cyan-300 font-semibold">→</span>
            </Link>

            <div className="text-xs sm:text-[13px] font-medium text-slate-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>100+ Technologies Supported</span>
            </div>
          </div>
        </motion.div>

        {/* 2-ROW CURVED PILLS MARQUEE CONTAINER */}
        <div className="relative w-full overflow-hidden py-3 space-y-4 sm:space-y-5">
          
          {/* Left & Right Gradient Fade Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#EEF7FA] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#EEF7FA] to-transparent z-20 pointer-events-none" />

          {/* ROW 1: Moving smoothly to the RIGHT */}
          <div className="flex w-full overflow-hidden">
            <div className="flex items-center gap-3 sm:gap-4.5 w-max animate-marquee-right marquee-track">
              {row1Marquee.map((tech, index) => (
                <div
                  key={`r1-${tech.id}-${index}`}
                  className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#004658]/40 hover:scale-105 transition-all duration-200 shrink-0 cursor-pointer group"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {tech.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: Moving smoothly to the LEFT */}
          <div className="flex w-full overflow-hidden">
            <div className="flex items-center gap-3 sm:gap-4.5 w-max animate-marquee-left marquee-track">
              {row2Marquee.map((tech, index) => (
                <div
                  key={`r2-${tech.id}-${index}`}
                  className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#004658]/40 hover:scale-105 transition-all duration-200 shrink-0 cursor-pointer group"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {tech.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Smooth Curved Wave Transition into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -z-0">
        <svg className="relative block w-full h-8 sm:h-14 text-[#f5f8fc] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.31,200.72,110.15,241.81,103.6,281.33,74.4,321.39,56.44Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default TechMarquee;
