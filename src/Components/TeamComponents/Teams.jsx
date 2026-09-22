import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

// Import all local team member images from assets/images
import abhayImg from '../../assets/images/Abhay Vishwakarma.png'
import amanImg from '../../assets/images/Aman kumar.png'
import ankurImg from '../../assets/images/Ankur Patel.png'
import ayushiImg from '../../assets/images/Ayushi Srivastava.jpeg'
import irshadImg from '../../assets/images/Irshad Ali.jpeg'
import arzaanImg from '../../assets/images/MD Arzaan.png'
import nirbhayImg from '../../assets/images/Nirbhay.png'
import priyankaImg from '../../assets/images/Priyanka Gupta.png'
import shivamImg from '../../assets/images/Shivam Yadav.png'
import shwetaImg from '../../assets/images/Shweta.png'
import sureshImg from '../../assets/images/Suresh Kumar.jpeg'

const teamMembers = [
  {
    id: 1,
    name: 'Diksha Tiwari',
    role: 'Business Operations Lead',
    category: 'Leadership',
    tag: 'Operations Lead',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85',
    tagline: 'Strategic Operations, Client Delivery & Business Expansion',
    skills: ['Operations', 'Strategy', 'Client Success', 'Agile']
  },
  {
    id: 2,
    name: 'Suresh Kumar',
    role: 'Senior Software Developer',
    category: 'Engineering',
    tag: 'Senior Backend Lead',
    img: sureshImg,
    tagline: 'Enterprise Cloud Architectures & Microservices Engineering',
    skills: ['React', 'Node.js', 'System Design', 'PostgreSQL']
  },
  {
    id: 3,
    name: 'Irshad Ali',
    role: 'Software Developer',
    category: 'Engineering',
    tag: 'Full-Stack Dev',
    img: irshadImg,
    tagline: 'High-Performance Web Applications & Scalable API Integrations',
    skills: ['React', 'JavaScript', 'Node.js', 'REST APIs']
  },
  {
    id: 4,
    name: 'Abhay Vishwakarma',
    role: 'Software Developer',
    category: 'Engineering',
    tag: 'Full-Stack Dev',
    img: abhayImg,
    tagline: 'Full-Stack Engineering, Next.js & Frontend Architecture',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind']
  },
  {
    id: 5,
    name: 'Shivam Yadav',
    role: 'Associate Software Developer',
    category: 'Engineering',
    tag: 'Frontend Dev',
    img: shivamImg,
    tagline: 'Modern Component Systems & Intuitive User Interfaces',
    skills: ['React', 'JavaScript', 'HTML5/CSS3', 'Tailwind']
  },
  {
    id: 6,
    name: 'Ankur Patel',
    role: 'Associate Software Developer',
    category: 'Engineering',
    tag: 'Web Dev',
    img: ankurImg,
    tagline: 'Interactive Web Applications & State Management Workflows',
    skills: ['React', 'Next.js', 'JavaScript', 'Git']
  },
  {
    id: 7,
    name: 'Ayushi Srivastava',
    role: 'Associate Software Developer',
    category: 'Engineering',
    tag: 'Software Dev',
    img: ayushiImg,
    tagline: 'Clean Code, High-Speed Interfaces & Feature Delivery',
    skills: ['React', 'JavaScript', 'Web Apps', 'CSS3']
  },
  {
    id: 8,
    name: 'Aman Kumar',
    role: 'Mobile App Developer',
    category: 'Engineering',
    tag: 'Mobile Studio',
    img: amanImg,
    tagline: 'Fluid 60 FPS Native iOS & Android Cross-Platform Apps',
    skills: ['Flutter', 'Dart', 'React Native', 'Mobile UI']
  },
  {
    id: 9,
    name: 'Shweta Sharma',
    role: 'Social Media Executive',
    category: 'Marketing',
    tag: 'Social Growth',
    img: shwetaImg,
    tagline: 'Viral Content Formats, Audience Strategy & Feed Optimization',
    skills: ['Content Strategy', 'Social Media', 'Reels', 'Campaigns']
  },
  {
    id: 11,
    name: 'Nirbhay',
    role: 'Software Developer Intern',
    category: 'Engineering',
    tag: 'Software Intern',
    img: nirbhayImg,
    tagline: 'Frontend Feature Building, State Handling & Code Optimization',
    skills: ['React', 'JavaScript', 'Web Dev', 'Git']
  },
  {
    id: 12,
    name: 'MD Arzaan',
    role: 'Software Developer Intern',
    category: 'Engineering',
    tag: 'Software Intern',
    img: arzaanImg,
    tagline: 'Backend Logic, Database Queries & API Integrations',
    skills: ['Node.js', 'JavaScript', 'Databases', 'Git']
  },
  {
    id: 13,
    name: 'Priyanka Gupta',
    role: 'Software Developer Intern',
    category: 'Engineering',
    tag: 'Software Intern',
    img: priyankaImg,
    tagline: 'Responsive UI Architecture & Dynamic Component Engineering',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'UI Layouts']
  }
];

const categories = ['All Members', 'Engineering', 'Design', 'Marketing', 'Leadership']

const Teams = () => {
  const [activeCategory, setActiveCategory] = useState('All Members')

  const filteredMembers = activeCategory === 'All Members'
    ? teamMembers
    : teamMembers.filter((m) => m.category === activeCategory)

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden select-none" id="team">
      
      {/* Background Ambient Soft Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.25) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10">
        
        {/* Centered Minimalist Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] font-mono font-bold uppercase tracking-wider mb-3.5">
            <span className="w-1.5 h-1.5 rounded-sm bg-[#004658] animate-pulse" />
            Leadership & Core Team
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Crafting Digital Futures <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#0086a8]">Together</span>
          </h2>

          {/* Minimalist Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100/90 border border-slate-200 rounded-xl shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#004658] text-white shadow-md shadow-[#004658]/25 scale-102'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Unique Minimalist HD Portrait Grid with Smooth Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-slate-950 border border-slate-200/90 shadow-sm hover:border-[#004658]/40 hover:shadow-2xl hover:shadow-[#004658]/20 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between p-6 select-none text-left"
              >
                {/* Full HD Background Portrait with Bright Hover Effect */}
                <img
                  src={member.img}
                  alt={`${member.name} - ${member.role} at CodeCrafter`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] saturate-[1.05] group-hover:brightness-[1.18] group-hover:contrast-[1.08] group-hover:saturate-[1.12] group-hover:scale-106 transition-all duration-500 ease-out pointer-events-none"
                />

                {/* Natural Gradient Overlay (Softens on Hover for Bright Crystal-Clear Illumination) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/20 to-transparent group-hover:from-slate-950/85 group-hover:via-transparent group-hover:to-white/10 transition-all duration-500 pointer-events-none" />

                {/* Top Subtle Specular Light on Hover */}
                <div className="absolute inset-0 bg-radial from-white/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Floating Glass Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/45 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/20 shadow-md flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{member.tag}</span>
                  </span>

                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/20">
                    CodeCrafter
                  </span>
                </div>

                {/* Bottom Typography & Specs */}
                <div className="relative z-10">
                  <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                    {member.role}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-1.5">
                    {member.name}
                  </h3>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed mb-3 line-clamp-2">
                    {member.tagline}
                  </p>

                  {/* Skills Pill Row */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/15">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10.5px] font-medium bg-white/15 backdrop-blur-sm text-slate-200 border border-white/20 group-hover:border-cyan-400/40 group-hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Minimalist Bottom Banner */}
        <div className="p-6 sm:p-8 bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
              Want to collaborate with our engineering team?
            </h3>
            <p className="text-xs text-slate-600 max-w-lg font-normal">
              We engineer scalable software, custom design systems, and cloud infrastructure for fast-growing businesses.
            </p>
          </div>

          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#004658] text-white font-bold text-xs hover:bg-[#003442] shadow-md shadow-[#004658]/20 hover:scale-105 transition-all duration-200 shrink-0 cursor-pointer"
          >
            <span>Schedule A Call</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Teams;