import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import all local team member images from assets/images
import abhayImg from "../../assets/images/Abhay Vishwakarma.png";
import amanImg from "../../assets/images/Aman kumar.png";
import ankurImg from "../../assets/images/Ankur Patel.png";
import ayushiImg from "../../assets/images/Ayushi Srivastava.jpeg";
import irshadImg from "../../assets/images/Irshad Ali.jpeg";
import arzaanImg from "../../assets/images/MD Arzaan.png";
import nirbhayImg from "../../assets/images/Nirbhay.png";
import priyankaImg from "../../assets/images/Priyanka Gupta.png";
import shivamImg from "../../assets/images/Shivam Yadav.png";
import shwetaImg from "../../assets/images/Shweta.png";
import sureshImg from "../../assets/images/Suresh Kumar.jpeg";

const teamMembers = [
  {
    name: "Diksha Tiwari",
    role: "Business Operations Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=800&q=80",
    path: "/team"
  },
  {
    name: "Suresh Kumar",
    role: "Senior Software Developer",
    image: sureshImg,
    path: "/team"
  },
  {
    name: "Irshad Ali",
    role: "Software Developer",
    image: irshadImg,
    path: "/team"
  },
  {
    name: "Abhay Vishwakarma",
    role: "Software Developer",
    image: abhayImg,
    path: "/team"
  },
  {
    name: "Shivam Yadav",
    role: "Associate Software Developer",
    image: shivamImg,
    path: "/team"
  },
  {
    name: "Ankur Patel",
    role: "Associate Software Developer",
    image: ankurImg,
    path: "/team"
  },
  {
    name: "Ayushi Srivastava",
    role: "Associate Software Developer",
    image: ayushiImg,
    path: "/team"
  },
  {
    name: "Aman Kumar",
    role: "Mobile App Developer",
    image: amanImg,
    path: "/team"
  },
  {
    name: "Shweta Sharma",
    role: "Social Media Executive",
    image: shwetaImg,
    path: "/team"
  },
  {
    name: "Nirbhay",
    role: "Software Developer Intern",
    image: nirbhayImg,
    path: "/team"
  },
  {
    name: "MD Arzaan",
    role: "Software Developer Intern",
    image: arzaanImg,
    path: "/team"
  },
  {
    name: "Priyanka Gupta",
    role: "Software Developer Intern",
    image: priyankaImg,
    path: "/team"
  }
];

const AssembleTeam = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full relative py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white text-center select-none" id="team">
      
      {/* Top Header & Scroll Controls */}
      <div className="max-w-[1360px] mx-auto mb-6 sm:mb-8 flex items-center justify-between px-2 sm:px-4">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/15 text-[#004658] text-[11px] font-bold uppercase tracking-wider mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
            <span>Dedicated Squads</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Meet the innovators driving your project forward.
          </p>
        </div>

        {/* Scroll Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll("left")}
            aria-label="Scroll team left"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#004658] flex items-center justify-center shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={18} strokeWidth={2.2} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            aria-label="Scroll team right"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#004658] flex items-center justify-center shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ChevronRight size={18} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {/* Team Members Horizontal Slider */}
      <div className="relative max-w-[1360px] mx-auto mb-10 sm:mb-12">
        
        {/* Subtle Horizontal Ribbon Background */}
        <div className="absolute top-16 sm:top-20 lg:top-24 left-0 right-0 h-28 sm:h-36 lg:h-44 bg-gradient-to-r from-slate-100 via-slate-200/80 to-slate-100 rounded-3xl -z-0 border border-slate-200/70" />

        {/* Horizontal Scroll Track */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 sm:gap-5 relative z-10 items-end pb-4 pt-2 px-2 no-scrollbar snap-x scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="w-[170px] xs:w-[190px] sm:w-[210px] md:w-[230px] lg:w-[240px] shrink-0 flex flex-col items-center group cursor-pointer snap-start text-center"
            >
              <Link to={member.path} className="flex flex-col items-center w-full">
                
                {/* Portrait Frame */}
                <div className="relative w-full h-48 xs:h-54 sm:h-60 md:h-68 lg:h-74 overflow-hidden mb-3 flex items-end justify-center rounded-2xl shadow-xs group-hover:shadow-xl group-hover:shadow-[#004658]/15 transition-all duration-300 bg-slate-100 border border-slate-200/80">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at CodeCrafter`}
                    loading="lazy"
                    decoding="async"
                    width="240"
                    height="296"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02] group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none rounded-b-2xl" />
                </div>

                {/* Team Member Name & Role */}
                <h4 className="text-xs sm:text-[14.5px] font-bold text-slate-900 group-hover:text-[#004658] transition-colors leading-tight tracking-tight">
                  {member.name}
                </h4>
                <p className="text-[11px] sm:text-[12px] text-slate-500 font-medium mt-0.5 leading-snug">
                  {member.role}
                </p>
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
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-950 tracking-[-0.035em] mb-5 leading-[1.14]">
          Let’s assemble <span className="text-[#004658]">your dedicated team<span className="text-[#EA580C]">.</span></span>
        </h2>

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
