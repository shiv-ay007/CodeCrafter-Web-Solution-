import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, CheckCircle2, Globe2, Stethoscope, Sparkles } from 'lucide-react'
import drShilpiImg from '../../../assets/images/dr-shilpi.png'
import drVinishImg from '../../../assets/images/dr-vinish.png'

const projects = [
  {
    id: 'dr-shilpi-chauhan',
    name: 'Dr. Shilpi Chauhan',
    subtitle: 'Best Gynecologist & Obstetrician in Lucknow',
    specialty: 'Gynecology & Obstetrics',
    badgeClass: 'bg-rose-50 text-rose-700 border-rose-200/80',
    description:
      'A dedicated patient-centric healthcare platform and clinical booking website designed for Dr. Shilpi Chauhan, providing patient care guidance, maternal health resources, and instant online consultation scheduling.',
    image: drShilpiImg,
    liveUrl: 'https://dr-shilpi-website.vercel.app/',
    displayUrl: 'dr-shilpi-website.vercel.app',
    tags: ['Doctor Portfolio', 'Appointment Booking', 'Maternal Care', 'Mobile Responsive']
  },
  {
    id: 'dr-vinish-singh',
    name: 'Dr. Vinish Kumar Singh',
    subtitle: 'Best Urologist in Lucknow | Laser Urology Specialist',
    specialty: 'Laser Urology Specialist',
    badgeClass: 'bg-cyan-50 text-[#004658] border-cyan-200/80',
    description:
      'A state-of-the-art clinical portal and appointment platform developed for Dr. Vinish Kumar Singh, featuring comprehensive surgical insights, laser procedure overviews, and direct OPD booking workflows.',
    image: drVinishImg,
    liveUrl: 'https://dr-vinish-singh-frontend.vercel.app/#book-appointment',
    displayUrl: 'dr-vinish-singh-frontend.vercel.app',
    tags: ['Laser Urology', 'Instant Appointment', 'OPD Booking', 'Patient Portal']
  }
]

const HospitalProjects = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden" id="projects">
      {/* Multi-Color Ambient Background Glow */}
      <div
        className="pointer-events-none absolute -top-10 left-1/3 w-[500px] h-[350px] rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 216, 255, 0.25) 0%, rgba(0, 70, 88, 0.15) 70%, transparent 100%)'
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[350px] rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(0, 70, 88, 0.1) 70%, transparent 100%)'
        }}
      />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#004658] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#00D8FF] animate-pulse" />
          <span>PROVEN CLINICAL DEPLOYMENTS</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
          Live Healthcare Portals Delivered For{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">
            Premier Specialists
          </span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          Explore production-grade healthcare websites and doctor appointment portals engineered by CodeCrafter with responsive layouts and patient-first digital experiences.
        </p>
      </div>

      {/* Projects Grid: 2 Showcase Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-[#004658]/10 transition-all duration-300 overflow-hidden"
          >
            <div>
              {/* Browser Mockup Frame with Full Visible Image */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit live website of ${project.name}`}
                className="block relative bg-slate-100 border-b border-slate-200/80 overflow-hidden group/screen cursor-pointer"
              >
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200/70 select-none">
                  {/* Traffic Light Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>

                  {/* Browser URL Bar */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-500 text-[11px] font-mono max-w-[240px] sm:max-w-xs truncate shadow-xs">
                    <Globe2 size={12} className="text-[#004658] shrink-0" />
                    <span className="truncate">{project.displayUrl}</span>
                  </div>

                  {/* Live Status Pill */}
                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="hidden sm:inline">LIVE</span>
                  </div>
                </div>

                {/* Full Uncropped Screenshot */}
                <div className="relative w-full bg-slate-50 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} - ${project.subtitle}`}
                    className="w-full h-auto block object-contain transition-transform duration-500 group-hover/screen:scale-[1.015]"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#004658]/30 backdrop-blur-[2px] opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#004658] font-bold text-xs sm:text-sm shadow-xl transform translate-y-2 group-hover/screen:translate-y-0 transition-transform duration-300">
                      <span>Visit Live Website</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </a>

              {/* Project Meta Details */}
              <div className="p-6 sm:p-7">
                {/* Badges Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${project.badgeClass}`}
                  >
                    <Stethoscope size={13} className="shrink-0" />
                    {project.specialty}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    Verified Healthcare
                  </span>
                </div>

                {/* Doctor Name & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1 group-hover:text-[#004658] transition-colors">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-2"
                  >
                    <span>{project.name}</span>
                    <ArrowUpRight size={18} className="text-[#004658] shrink-0 opacity-70 group-hover:opacity-100" />
                  </a>
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-[#004658] mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2 border-t border-slate-100">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-100/90 text-slate-700 text-[11px] sm:text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 font-extrabold text-white bg-[#004658] hover:bg-[#003442] rounded-xl px-5 py-3 text-sm shadow-md shadow-[#004658]/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Visit Live Website</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HospitalProjects
