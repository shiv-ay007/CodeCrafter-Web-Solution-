import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import shanyaImage from "../../../assets/images/shanyascan.png";
import kaashtkartImage from "../../../assets/images/kaashkart.jpeg";
import mdsImage from "../../../assets/images/mds.jpeg";

const projects = [
  {
    number: "01",
    category: "HEALTHCARE & DIAGNOSTICS",
    title: "Shanya Scans & Theranostics",
    description:
      "A healthcare website presenting diagnostic services, advanced medical imaging, pathology testing and patient-focused healthcare information.",
    image: shanyaImage,
    technologies: ["Healthcare", "Service Website", "Responsive UI"],
    link: "https://www.shanyascans.com/",
    linkLabel: "View Live Website",
  },
  {
    number: "02",
    category: "AGRI-ECOMMERCE",
    title: "KaashtKart",
    description:
      "An agricultural e-commerce platform connecting farmers and rural businesses with customers looking for farm products, groceries and natural essentials.",
    image: kaashtkartImage,
    technologies: ["E-Commerce", "Product Catalog", "Online Shopping"],
    link: "https://www.kaashtkart.com/",
    linkLabel: "Explore Website",
  },
  {
    number: "03",
    category: "LIVE RESULTS PLATFORM",
    title: "MDS Results",
    description:
      "A live results information platform featuring city-wise updates, result listings and convenient access to information across devices.",
    image: mdsImage,
    technologies: ["Live Updates", "Web Platform", "Responsive UI"],
    link: "https://mdsresults.com/",
    linkLabel: "View Live Website",
  },
];

const IosProjects = () => {
  return (
    <section
      id="ios-projects"
      className="relative overflow-hidden bg-[#F7FAFB] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#004658]/15 bg-[#EAF7F7] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#004658]">
            Our Selected Work
          </span>

          <h2 className="mt-6 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
            Digital Experiences
            <span className="mt-2 block bg-gradient-to-r from-[#004658] to-[#00A8CC] bg-clip-text text-transparent">
              Built for Real-World Needs
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore digital platforms across healthcare, agriculture
            and live information experiences, designed around different
            business and user needs.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group grid grid-cols-1 items-stretch overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl md:grid-cols-12"
            >
              {/* Project Image (Left Side) */}
              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#EAF7F7] via-white to-[#E5F4F8] p-4 sm:p-6 md:col-span-5 md:min-h-[460px] lg:col-span-5 lg:min-h-[500px]">
                <span className="absolute left-6 top-6 z-10 rounded-full bg-white/95 px-3 py-2 text-[10px] font-bold tracking-widest text-[#004658] shadow-sm backdrop-blur-sm">
                  PROJECT / {project.number}
                </span>

                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  loading="lazy"
                  className="h-[340px] w-auto max-w-full rounded-2xl object-contain shadow-[0_20px_40px_rgba(0,70,88,0.14)] border border-slate-200/80 transition-transform duration-500 group-hover:scale-[1.03] sm:h-[400px] md:h-[420px] lg:h-[460px]"
                />
              </div>

              {/* Project Details (Right Side) */}
              <div className="flex flex-col justify-center p-6 sm:p-8 md:col-span-7 md:p-8 lg:col-span-7 lg:p-12">
                <p className="text-xs font-extrabold tracking-[0.16em] text-[#00869A]">
                  {project.category}
                </p>

                <h3 className="mt-3 font-['Outfit',sans-serif] text-2xl font-extrabold text-slate-950 sm:text-3xl lg:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#EAF5F5] px-3.5 py-1.5 text-xs font-semibold text-[#004658]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                {project.link && (
                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#004658] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#006174]"
                    >
                      {project.linkLabel || "View Live Website"}
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[28px] bg-[#003B48] px-6 py-9 text-center text-white sm:px-10 md:flex-row md:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#83E5E5]">
              Have a Project in Mind?
            </p>

            <h3 className="mt-3 font-['Outfit',sans-serif] text-2xl font-extrabold sm:text-3xl">
              Let's build your next digital experience.
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Let's discuss your requirements and turn your idea into reality.
            </p>
          </div>

          <Link
            to="/schedule-consultation"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#004658] transition hover:bg-[#DDFBF3]"
          >
            Discuss Your Project
            <ArrowUpRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default IosProjects;
