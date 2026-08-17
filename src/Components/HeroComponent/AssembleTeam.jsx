import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const teamRoles = [
  {
    line1: "Software",
    line2: "developers",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=800&q=80",
    path: "/team"
  },
  {
    line1: "QA",
    line2: "engineers",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=800&q=80",
    path: "/team"
  },
  {
    line1: "UX",
    line2: "designers",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=800&q=80",
    path: "/web-design"
  },
  {
    line1: "Data",
    line2: "scientists",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=800&q=80",
    path: "/software/crm"
  },
  {
    line1: "Project",
    line2: "managers",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&h=800&q=80",
    path: "/contact"
  }
];

const AssembleTeam = () => {
  return (
    <section className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto overflow-hidden bg-white text-center">
      
      {/* 5 Squad Members Visual Lineup */}
      <div className="relative max-w-[1240px] mx-auto mb-8 sm:mb-9">
        
        {/* Subtle Horizontal Ribbon */}
        <div className="absolute top-14 sm:top-20 lg:top-24 left-0 right-0 h-24 sm:h-32 lg:h-40 bg-gradient-to-r from-slate-100 via-slate-200/80 to-slate-100 rounded-2xl -z-0 border border-slate-200/70" />

        {/* 5 Team Personas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 relative z-10 items-end">
          {teamRoles.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <Link to={member.path} className="flex flex-col items-center w-full">
                
                {/* Portrait Frame */}
                <div className="relative w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[240px] h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden mb-3.5 flex items-end justify-center rounded-2xl shadow-xs group-hover:shadow-lg group-hover:shadow-[#004658]/10 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={`${member.line1} ${member.line2}`}
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] group-hover:scale-105 transition-transform duration-400 rounded-2xl"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-b-2xl" />
                </div>

                {/* 2-Line Role Title */}
                <h4 className="text-sm sm:text-[15px] font-semibold text-slate-800 group-hover:text-[#004658] transition-colors leading-[1.2] tracking-tight">
                  <span className="block">{member.line1}</span>
                  <span className="block">{member.line2}</span>
                </h4>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Main Headline & Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="max-w-2xl mx-auto"
      >
        <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-slate-950 tracking-tight mb-5 leading-tight">
          Let’s assemble your team<span className="text-[#004658]">.</span>
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#004658] text-white font-semibold text-xs sm:text-sm shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Talk to Us</span>
            <span>→</span>
          </Link>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-all duration-200"
          >
            <span>Learn More About Squads</span>
          </Link>
        </div>
      </motion.div>

      {/* Bottom Smooth Curved Wave Transition into TechMarquee */}
      <div className="w-full overflow-hidden leading-none mt-8 sm:mt-12 pointer-events-none -mb-1">
        <svg className="relative block w-full h-8 sm:h-14 text-[#eef7fa] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default AssembleTeam;
