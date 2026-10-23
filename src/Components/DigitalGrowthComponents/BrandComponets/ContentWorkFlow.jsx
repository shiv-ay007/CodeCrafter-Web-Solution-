import React from "react";

const workflowSteps = [
  {
    number: "01",
    title: "Research",
    label: "DISCOVER",
    description:
      "Understand your audience, industry trends, competitors, and search intent before creating content.",
    icon: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 4 4" />
        <path d="M8 10.5h5" />
      </>
    ),
  },
  {
    number: "02",
    title: "Strategy & Planning",
    label: "PLAN",
    description:
      "Build topic clusters, define content objectives, and organize an editorial calendar.",
    icon: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16M8 14h3M8 17h6" />
      </>
    ),
  },
  {
    number: "03",
    title: "Writing",
    label: "CREATE",
    description:
      "Turn research into clear, useful, technically accurate content that reflects your brand voice.",
    icon: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
      </>
    ),
  },
  {
    number: "04",
    title: "Editing & Review",
    label: "REFINE",
    description:
      "Review structure, readability, factual accuracy, on-page SEO, and consistency before publishing.",
    icon: (
      <>
        <path d="m5 12 4 4L19 6" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
  },
  {
    number: "05",
    title: "Publishing",
    label: "LAUNCH",
    description:
      "Publish content with suitable formatting, metadata, internal links, and relevant calls to action.",
    icon: (
      <>
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
        <path d="M5 14v5h14v-5" />
      </>
    ),
  },
  {
    number: "06",
    title: "Measure & Optimize",
    label: "IMPROVE",
    description:
      "Review performance data and refresh content to improve relevance, engagement, and conversions.",
    icon: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="m7 14 4-4 3 2 5-6" />
        <path d="M14 6h5v5" />
      </>
    ),
  },
];

const ContentWorkflow = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4FAFB] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#00A8CC]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#004658]">
            <span className="h-2 w-2 rounded-full bg-[#00A8CC]" />
            Our Content Process
          </span>

          <h2 className="mt-6 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            From First Idea to
            <span className="block bg-gradient-to-r from-[#004658] to-[#00A8CC] bg-clip-text text-transparent">
              Published Impact
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A structured content creation process that combines research,
            strategic thinking, quality writing, and continuous improvement.
          </p>
        </div>

        {/* Workflow cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <article
              key={step.number}
              className="group relative rounded-3xl border border-[#004658]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-[0_18px_45px_rgba(0,70,88,0.09)] sm:p-8"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#004658]/5 text-[#004658] transition-all duration-300 group-hover:bg-[#004658] group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-7 w-7"
                  >
                    {step.icon}
                  </svg>
                </div>

                <span className="font-['Outfit',sans-serif] text-4xl font-extrabold text-[#004658]/10 transition-colors group-hover:text-[#00A8CC]/40">
                  {step.number}
                </span>
              </div>

              <span className="text-[10px] font-bold tracking-[0.18em] text-[#0087A3]">
                {step.label}
              </span>

              <h3 className="mt-2 font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                {step.description}
              </p>

              {/* Progress indicator */}
              <div className="mt-7 h-1 overflow-hidden rounded-full bg-[#004658]/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#004658] to-[#00A8CC] transition-all duration-500 group-hover:w-full"
                  style={{ width: `${((index + 1) / 6) * 100}%` }}
                />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#004658] p-7 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7DE5F5]">
              A process built around your goals
            </p>

            <h3 className="mt-3 font-['Outfit',sans-serif] text-2xl font-bold sm:text-3xl">
              Let's plan your next content project.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/75">
              Start with your business objectives, and build a content
              roadmap that supports them.
            </p>
          </div>

          <a
            href="/schedule-consultation"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#004658] transition-colors hover:bg-[#E7F8FB]"
          >
            Discuss Your Project <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentWorkflow;