
import React from "react";
import { Link, NavLink } from "react-router-dom";

import dssCrmImage from "../../../assets/images/dss.jpeg";
import kaashtkartImage from "../../../assets/images/kaashkart.jpeg";

const projects = [
  {
    number: "01",
    category: "BUSINESS & ENTERPRISE",
    title: "DSS Infra CRM",
    description:
      "A business CRM platform for lead management, project tracking, follow-ups and role-based access.",
    image: dssCrmImage,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://dss-infra-crm.vercel.app/",
    linkLabel: "View Live Project",
  },
  {
  number: "02",
  category: "AGRI-ECOMMERCE",
  title: "KaashtKart App",
  description:
    "An agriculture-focused shopping experience for discovering farm products, groceries, dry fruits and other essentials.",
  image: kaashtkartImage,
  technologies: ["E-Commerce", "Shopping", "Mobile App"],
  link: "https://www.kaashtkart.com/",
  secondaryLink:
    "https://play.google.com/store/apps/details?id=com.kaashtkart.kaashtkart",
  linkLabel: "View Project",
},
];

const AndroidProjects = () => {
  return (
    <section
      id="android-projects"
      className="relative overflow-hidden bg-[#FBFDFD] py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-10 sm:mb-12 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#004658]/10 bg-[#DDFBF3] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#004658]">
            Featured Digital Products
          </span>

          <h2 className="mt-6 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
            Products Built for{" "}
            <span className="bg-gradient-to-r from-[#004658] to-[#00A8CC] bg-clip-text text-transparent">
              Real-World Impact
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore business platforms and mobile shopping experiences
            designed to make everyday workflows simpler.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#EAF7F7] via-white to-[#E5F4F8] p-5 sm:min-h-[360px]">
                <span className="absolute left-6 top-6 z-10 rounded-full bg-white/90 px-3 py-2 text-[10px] font-bold tracking-widest text-[#004658] shadow-sm">
                  PROJECT / {project.number}
                </span>

                <img
                  src={project.image}
                  alt={`${project.title} application preview`}
                  loading="lazy"
                  className="max-h-[330px] max-w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8">
                <p className="text-xs font-extrabold tracking-[0.16em] text-[#00869A]">
                  {project.category}
                </p>

                <h3 className="mt-3 font-['Outfit',sans-serif] text-2xl font-extrabold text-slate-950 sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  {project.description}
                </p>

                {/* Technology Tags */}
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

               {/* Project Links */}
{(project.link || project.secondaryLink) && (
  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#004658] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#006174]"
      >
        {project.linkLabel || "View Live Project"}
        <span>↗</span>
      </a>
    )}

    {project.secondaryLink && (
      <a
        href={project.secondaryLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-[#004658] bg-white px-5 py-3 text-sm font-bold text-[#004658] transition hover:bg-[#EAF7F7]"
      >
        View on Play Store
        <span>↗</span>
      </a>
    )}
  </div>
)}
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10 sm:mt-12 rounded-[28px] bg-[#003B48] px-6 py-8 sm:py-10 text-center text-white sm:px-12">
          <h3 className="font-['Outfit',sans-serif] text-2xl font-extrabold sm:text-4xl">
            Have an App Idea?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
            Let's plan your next mobile application with the right
            user experience and scalable technology.
          </p>

          <NavLink
            to="/schedule-consultation"
            className="mt-6 sm:mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#004658] transition hover:bg-[#EAF7F7]"
          >
            Discuss Your App Idea ↗
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default AndroidProjects;
