import React from "react";
import kashcartImage from "../../../assets/images/kashcart.png";
import shanyaImage from "../../../assets/images/ShanyasScan.png";

const projects = [
  {
    id: "kaashtkart",
    name: "KaashtKart",
    category: "E-Commerce & Agri-Marketplace",
    image: kashcartImage,
  },
  {
    id: "shanya-scans",
    name: "Shanya Scans & Theranostics",
    category: "Healthcare & Diagnostic Platform",
    image: shanyaImage,
  },
];

const EcommerceProjects = () => {
  return (
    <section className="relative overflow-hidden bg-[#f3f7fb] py-14 sm:py-16 lg:py-20">
      {/* Subtle brand-colored ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#00A8CC]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#004658]/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/15 text-[#004658] text-xs font-bold uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A8CC] animate-pulse" />
            Featured Work
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Recent Projects & Storefronts
          </h2>
        </div>

        {/* Projects Grid: 2 Columns, Compact & Fully Visible */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-3xl bg-white border border-slate-200/90 p-3.5 sm:p-4 shadow-sm hover:border-[#004658]/35 hover:shadow-xl hover:shadow-[#004658]/8 transition-all duration-300 flex flex-col"
            >
              {/* Project Image Frame - Zero Cut / Full Aspect Ratio */}
              <div className="relative w-full overflow-hidden rounded-2xl bg-slate-50 border border-slate-200/80">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-auto block object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>

              {/* Project Name and Badge */}
              <div className="pt-3.5 pb-1 px-1.5 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00869A] block mb-0.5">
                    {project.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#004658] transition-colors">
                    {project.name}
                  </h3>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-semibold shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Live Platform
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceProjects;
