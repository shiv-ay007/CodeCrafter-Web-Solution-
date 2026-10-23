import React from "react";

const highlights = [
  {
    number: "01",
    title: "Strategy-Led",
    description: "Every piece of content starts with a clear business goal.",
    icon: "strategy",
  },
  {
    number: "02",
    title: "SEO-Focused",
    description: "Create useful content around search intent and relevance.",
    icon: "search",
  },
  {
    number: "03",
    title: "Human-Reviewed",
    description: "Prioritize clarity, accuracy, and a consistent brand voice.",
    icon: "check",
  },
  {
    number: "04",
    title: "Conversion-Aware",
    description: "Guide readers toward meaningful next steps.",
    icon: "growth",
  },
];

const icons = {
  strategy: (
    <>
      <path d="M12 3v3" />
      <path d="M5.6 6.6 7.7 8.7" />
      <path d="M3 13h3" />
      <path d="M18 13h3" />
      <path d="M16.3 8.7l2.1-2.1" />
      <circle cx="12" cy="13" r="5" />
      <path d="m10 13 1.4 1.4L14.5 11" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4 4" />
      <path d="M7.5 10.5h6" />
      <path d="M10.5 7.5v6" />
    </>
  ),
  check: (
    <>
      <path d="M12 3 19 6v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  growth: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 14 4-4 3 2 5-6" />
      <path d="M14 6h5v5" />
    </>
  ),
};

const ContentPerformanceStrip = () => {
  return (
    <section
      aria-label="Content marketing approach"
      className="relative z-10 w-full bg-[#FBFDFD] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-[#004658]/15 bg-white shadow-[0_12px_40px_rgba(0,70,88,0.06)]">
          <div className="grid grid-cols-1 divide-y divide-[#004658]/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="group relative flex gap-4 p-6 transition-colors duration-300 hover:bg-[#F3FAFB] sm:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#004658]/10 bg-[#004658]/5 text-[#004658] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#004658] group-hover:text-white">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    {icons[item.icon]}
                  </svg>
                </div>

                <div className="min-w-0">
                  <span className="mb-1 block text-xs font-bold tracking-[0.16em] text-[#00A8CC]">
                    {item.number}
                  </span>

                  <h3 className="mb-2 font-['Outfit',sans-serif] text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPerformanceStrip;