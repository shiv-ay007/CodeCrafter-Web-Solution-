
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ExternalLink,
  Globe,
} from "lucide-react";

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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col overflow-hidden rounded-[26px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#00A8CC]/40 hover:shadow-[0_24px_60px_rgba(0,70,88,0.12)]"
            >
              {/* Project Image */}
              <div className="relative flex h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#EAF7F7] via-white to-[#E5F4F8] p-5 sm:h-[310px]">
                <span className="absolute left-5 top-5 z-10 rounded-full border border-white bg-white/95 px-3 py-2 text-[10px] font-bold tracking-widest text-[#004658] shadow-sm">
                  PROJECT / {project.number}
                </span>

                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  loading="lazy"
                  className="max-h-full max-w-full rounded-xl object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#004658] shadow-md">
                  <Globe size={19} />
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-[10px] font-extrabold tracking-[0.16em] text-[#00869A]">
                  {project.category}
                </p>

                <h3 className="mt-3 font-['Outfit',sans-serif] text-xl font-extrabold leading-snug text-slate-950 sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#EAF5F5] px-3 py-1.5 text-xs font-semibold text-[#004658]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Live Website Button */}
                <div className="mt-auto pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#004658] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#006174]"
                  >
                    {project.linkLabel}
                    <ArrowUpRight size={17} />
                  </a>
                </div>
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
