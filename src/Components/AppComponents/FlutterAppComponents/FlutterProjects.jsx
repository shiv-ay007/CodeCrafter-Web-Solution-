
import React from "react";
import { ArrowUpRight, ExternalLink, Layers3, ShoppingBag } from "lucide-react";

import kaashtkartImage from "../../../assets/images/kashcart.png";
import dssImage from "../../../assets/images/DSS.png";

const projects = [
  {
    number: "01",
    category: "E-COMMERCE & AGRITECH",
    title: "KaashtKart",
    subtitle: "Connecting farms with everyday needs.",
    description:
      "An agriculture-focused e-commerce platform designed to connect customers with farm products, fresh essentials, and products from farming communities.",
    image: kaashtkartImage,
    imageAlt: "KaashtKart e-commerce project preview",
    icon: ShoppingBag,
    tags: ["E-Commerce", "Product Catalog", "Online Shopping"],
    link: "https://www.kaashtkart.com/",
    linkText: "Explore Project",
  },
  {
    number: "02",
    category: "ENTERPRISE SOFTWARE",
    title: "DSS Infra CRM",
    subtitle: "Smarter workflows. Better visibility.",
    description:
      "A CRM solution for managing leads, follow-ups, project tracking, suppliers, and payments through organized workflows and data-driven dashboards.",
    image: dssImage,
    imageAlt: "DSS Infra CRM project preview",
    icon: Layers3,
    tags: ["CRM Dashboard", "Project Tracking", "Lead Management"],
    link: "https://crm.dssinfra.in/",
    linkText: "Explore CRM",
  },
];

const FlutterProjects = () => {
  return (
    <section
      id="flutter-projects"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle brand-colored background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#00A8CC]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#003B46]/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00A8CC]/20 bg-[#00A8CC]/[0.07] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#00A8CC]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#007F9B]">
              Selected Projects
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#101828] sm:text-4xl lg:text-5xl">
            Digital Solutions Built
            <span className="text-[#00A8CC]"> for Real Needs</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore selected digital projects focused on seamless shopping
            experiences, streamlined business operations, and practical
            technology solutions.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-2xl hover:shadow-[#003B46]/[0.08]"
              >
                {/* Image area */}
                <div className="relative overflow-hidden bg-slate-100">
                  <div className="w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="w-full h-auto block object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Image overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071827]/50 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-[#071827]/70 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <Icon size={15} />
                    {project.category}
                  </div>

                  <span className="absolute bottom-4 right-5 text-4xl font-bold tracking-tight text-white/80 sm:text-5xl">
                    {project.number}
                  </span>
                </div>

                {/* Project information */}
                <div className="p-6 sm:p-8">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-1 w-8 rounded-full bg-[#00A8CC]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#008EAC]">
                      Featured Work
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#101828] transition-colors duration-300 group-hover:text-[#007F9B] sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#003B46] sm:text-base">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technology and feature tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project link */}
                  <div className="mt-7 border-t border-slate-100 pt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-xl bg-[#003B46] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#005466] hover:shadow-lg hover:shadow-[#003B46]/20"
                    >
                      {project.linkText}
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-[#00A8CC]/15 bg-[#00A8CC]/[0.04] p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#008EAC] shadow-sm ring-1 ring-[#00A8CC]/15">
            <Layers3 size={24} />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#101828]">
              Have a project in mind?
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Let's discuss how we can turn your idea into a reliable,
              user-friendly digital product.
            </p>
          </div>

          <a
            href="/schedule-consultation"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#007F9B] transition-colors hover:text-[#003B46]"
          >
            Let's Talk
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlutterProjects;
