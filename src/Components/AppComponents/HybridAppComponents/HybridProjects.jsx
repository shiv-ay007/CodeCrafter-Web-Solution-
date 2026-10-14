
import React from "react";
import {
  ArrowUpRight,
  ShoppingBag,
  BriefcaseBusiness,
  Compass,
  CheckCircle2,
  Smartphone,
  Layers3,
} from "lucide-react";

const projects = [
  {
    id: "01",
    name: "KaashKart Mobile",
    category: "E-COMMERCE",
    subtitle: "Shopping made effortless.",
    description:
      "A concept shopping application for discovering products, managing carts, tracking orders, and enjoying a seamless mobile shopping experience.",
    icon: ShoppingBag,
    accent: "#00A8CC",
    light: "#E7F9FC",
    label: "SHOPPING APP",
    stats: [
      { value: "24/7", label: "Product access" },
      { value: "1-Tap", label: "Shopping flow" },
    ],
    features: ["Product discovery", "Cart & checkout", "Order tracking"],
    tags: ["React Native", "Expo", "REST APIs"],
    previewType: "shop",
  },
  {
    id: "02",
    name: "FlowDesk CRM",
    category: "BUSINESS & PRODUCTIVITY",
    subtitle: "Your business, in your pocket.",
    description:
      "A concept CRM application for tracking leads, scheduling follow-ups, managing tasks, and monitoring business activity from anywhere.",
    icon: BriefcaseBusiness,
    accent: "#087F8C",
    light: "#E4F6F5",
    label: "BUSINESS APP",
    stats: [
      { value: "Live", label: "Activity overview" },
      { value: "Smart", label: "Follow-ups" },
    ],
    features: ["Lead management", "Task tracking", "Analytics dashboard"],
    tags: ["React Native", "Node.js", "MongoDB"],
    previewType: "crm",
  },
 
];

function AppPreview({ project }) {
  const Icon = project.icon;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 sm:p-7">
      <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full blur-3xl opacity-50"
        style={{ backgroundColor: project.light }}
      />

      <div className="relative mx-auto max-w-sm rounded-[28px] border-[5px] border-[#142331] bg-white p-3 shadow-xl">
        {/* Phone status bar */}
        <div className="mb-5 flex items-center justify-between px-2 pt-1">
          <span className="text-[10px] font-bold text-slate-800">9:41</span>
          <div className="h-4 w-16 rounded-full bg-[#142331]" />
          <Smartphone size={13} className="text-slate-700" />
        </div>

        {/* App heading */}
        <div className="mb-5 flex items-center justify-between px-1">
          <div>
            <p className="text-[10px] text-slate-500">WELCOME BACK</p>
            <h4 className="mt-1 text-lg font-extrabold text-[#142331]">
              {project.name}
            </h4>
          </div>

          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ backgroundColor: project.light, color: project.accent }}
          >
            <Icon size={21} />
          </div>
        </div>

        {/* Dynamic preview */}
        {project.previewType === "shop" && (
          <div>
            <div
              className="rounded-2xl p-4"
              style={{ backgroundColor: project.light }}
            >
              <p className="text-xs font-semibold" style={{ color: project.accent }}>
                YOUR NEXT FAVOURITE
              </p>
              <h5 className="mt-2 text-xl font-extrabold text-[#142331]">
                Discover<br />something new.
              </h5>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-white px-3 py-2 text-[10px] font-bold text-slate-700">
                  Explore products
                </span>
                <ShoppingBag size={34} style={{ color: project.accent }} />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {["Everyday essentials", "Popular picks"].map((item, i) => (
                <div key={item} className="rounded-xl border border-slate-100 p-3">
                  <div
                    className="mb-3 flex h-14 items-center justify-center rounded-lg"
                    style={{ backgroundColor: project.light }}
                  >
                    <ShoppingBag size={23} style={{ color: project.accent }} />
                  </div>
                  <p className="text-[10px] font-bold text-slate-700">{item}</p>
                  <p className="mt-1 text-[9px] text-slate-400">
                    {i === 0 ? "Discover more" : "Shop favourites"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.previewType === "crm" && (
          <div>
            <div className="rounded-2xl bg-[#102B3B] p-4 text-white">
              <p className="text-[10px] text-cyan-200">BUSINESS OVERVIEW</p>
              <p className="mt-3 text-2xl font-extrabold">Dashboard</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-[9px] text-slate-300">Total leads</p>
                  <p className="mt-1 text-xl font-bold">128</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-[9px] text-slate-300">Follow-ups</p>
                  <p className="mt-1 text-xl font-bold">24</p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-slate-100 p-4">
              <p className="text-xs font-bold text-slate-800">Recent activity</p>
              {["New lead received", "Follow-up scheduled", "Project updated"].map(
                (item) => (
                  <div key={item} className="mt-3 flex items-center gap-2">
                    <CheckCircle2 size={15} style={{ color: project.accent }} />
                    <span className="text-[10px] text-slate-600">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {project.previewType === "travel" && (
          <div>
            <div
              className="relative flex h-36 items-end overflow-hidden rounded-2xl p-4"
              style={{
                background: `linear-gradient(145deg, ${project.accent}, #142331)`,
              }}
            >
              <div className="absolute right-5 top-5 opacity-30">
                <Compass size={70} color="white" />
              </div>
              <div className="relative text-white">
                <p className="text-[10px] font-semibold uppercase tracking-widest">
                  YOUR NEXT ADVENTURE
                </p>
                <h5 className="mt-2 text-2xl font-extrabold">Go explore.</h5>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-slate-100 p-4">
              <p className="text-xs font-bold text-slate-800">Plan your journey</p>
              {["Discover destinations", "Save favourite places", "Build your itinerary"].map(
                (item) => (
                  <div key={item} className="mt-3 flex items-center gap-2">
                    <CheckCircle2 size={15} style={{ color: project.accent }} />
                    <span className="text-[10px] text-slate-600">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Bottom navigation preview */}
        <div className="mt-5 flex justify-around border-t border-slate-100 pt-4">
          {["Home", "Explore", "Saved", "Profile"].map((item, i) => (
            <span
              key={item}
              className="text-[9px] font-semibold"
              style={{ color: i === 0 ? project.accent : "#94A3B8" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <span className="absolute bottom-5 right-5 rounded-full border border-white bg-white/90 px-3 py-2 text-[10px] font-bold text-slate-600 shadow-sm">
        CONCEPT PREVIEW
      </span>
    </div>
  );
}

const HybridProjects = () => {
  return (
    <section
      id="hybrid-projects"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#00A8CC]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#003B46]/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00A8CC]/20 bg-[#00A8CC]/[0.07] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#00A8CC]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#007F9B]">
              Hybrid App Portfolio
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#101828] sm:text-4xl lg:text-5xl">
            Ideas Transformed into
            <span className="text-[#00A8CC]"> Mobile Experiences</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore sample concepts showing how one shared React Native
            codebase can power engaging experiences across iOS and Android.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-2xl hover:shadow-[#003B46]/[0.07]"
              >
                <AppPreview project={project} />

                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="rounded-full px-3 py-2 text-[10px] font-bold tracking-wider"
                      style={{
                        color: project.accent,
                        backgroundColor: project.light,
                      }}
                    >
                      {project.category}
                    </span>
                    <span className="text-sm font-extrabold text-slate-300">
                      {project.id}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-[#101828] transition-colors group-hover:text-[#007F9B] sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-2 font-semibold text-[#003B46]">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 rounded-xl bg-slate-50 p-3"
                      >
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0"
                          style={{ color: project.accent }}
                        />
                        <span className="text-xs font-medium leading-5 text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-semibold text-slate-400">
                      SAMPLE PROJECT CONCEPT
                    </span>
                    {/* <span
                      className="inline-flex items-center gap-2 text-sm font-bold"
                      style={{ color: project.accent }}
                    >
                      Concept Preview
                      <ArrowUpRight size={17} />
                    </span> */}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Shared codebase banner */}
        <div className="mt-12 flex flex-col items-start gap-5 rounded-3xl bg-[#102B3B] p-7 sm:p-9 md:flex-row md:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#00A8CC]/15 text-[#39D5F2]">
            <Layers3 size={28} />
          </div>

          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#39D5F2]">
              One Codebase. Multiple Platforms.
            </p>
            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Build once. Deliver across iOS and Android.
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Create consistent mobile experiences while sharing application
              logic and reducing duplicated development effort.
            </p>
          </div>

          <a
            href="/schedule-consultation"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#00A8CC] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0092B4]"
          >
            Discuss Your App
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HybridProjects;