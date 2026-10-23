import React from "react";

const metrics = [
  {
    label: "Organic Traffic",
    value: "Traffic trends",
    note: "Track visits from search",
    icon: "traffic",
  },
  {
    label: "Keyword Visibility",
    value: "Search presence",
    note: "Monitor target keywords",
    icon: "keyword",
  },
  {
    label: "Engagement",
    value: "Reader activity",
    note: "Understand content usage",
    icon: "engagement",
  },
  {
    label: "Conversions",
    value: "Goal completion",
    note: "Measure meaningful actions",
    icon: "conversion",
  },
];

const chartData = [
  { label: "Jan", value: 28 },
  { label: "Feb", value: 40 },
  { label: "Mar", value: 34 },
  { label: "Apr", value: 55 },
  { label: "May", value: 48 },
  { label: "Jun", value: 68 },
  { label: "Jul", value: 60 },
  { label: "Aug", value: 82 },
];

const ContentAnalytics = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#00A8CC]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-[#004658]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#004658]">
            <span className="h-2 w-2 rounded-full bg-[#00A8CC]" />
            Content Intelligence
          </span>

          <h2 className="mt-6 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Create Content.
            <span className="block bg-gradient-to-r from-[#004658] to-[#00A8CC] bg-clip-text text-transparent">
              Measure What Matters.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Understand how your content performs with a measurement approach
            focused on search visibility, audience engagement, and business
            outcomes.
          </p>
        </div>

        {/* Dashboard */}
        <div className="overflow-hidden rounded-3xl border border-[#004658]/15 bg-[#F8FBFC] shadow-[0_20px_60px_rgba(0,70,88,0.08)]">
          {/* Dashboard header */}
          <div className="flex flex-col gap-4 border-b border-[#004658]/10 bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0087A3]">
                Content Performance
              </p>
              <h3 className="mt-1 font-['Outfit',sans-serif] text-xl font-bold text-slate-900 sm:text-2xl">
                SEO & Engagement Overview
              </h3>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#004658]/10 bg-[#F3FAFB] px-3 py-2 text-xs font-semibold text-[#004658]">
              <span className="h-2 w-2 rounded-full bg-[#00A8CC]" />
              Illustrative dashboard
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 p-5 sm:p-8 lg:grid-cols-2">
            {/* Chart */}
            <div className="rounded-2xl border border-[#004658]/10 bg-white p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-['Outfit',sans-serif] text-lg font-bold text-slate-900">
                    Organic Traffic Trend
                  </h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Illustrative monthly search activity
                  </p>
                </div>

                <span className="rounded-lg bg-[#E8F8FB] px-3 py-1.5 text-xs font-bold text-[#004658]">
                  SEO
                </span>
              </div>

              <div
                className="mt-7 flex h-56 gap-3"
                role="img"
                aria-label="Illustrative bar chart showing varying organic traffic levels from January through August, not actual website data"
              >
                <div className="flex flex-col justify-between pb-7 text-[10px] text-slate-400">
                  <span>High</span>
                  <span>Mid</span>
                  <span>Low</span>
                </div>

                <div className="relative flex flex-1 items-end justify-between gap-2 border-b border-l border-[#004658]/10 px-2 pb-0">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-full">
                    <div className="absolute top-1/3 w-full border-t border-dashed border-[#004658]/10" />
                    <div className="absolute top-2/3 w-full border-t border-dashed border-[#004658]/10" />
                  </div>

                  {chartData.map((item, index) => (
                    <div
                      key={item.label}
                      className="relative z-10 flex h-full flex-1 flex-col items-center justify-end gap-2"
                    >
                      <div
                        className={`w-full max-w-8 rounded-t-lg transition-all duration-300 hover:opacity-70 ${
                          index === chartData.length - 1
                            ? "bg-[#00A8CC]"
                            : "bg-[#004658]"
                        }`}
                        style={{ height: `${item.value}%` }}
                        title={`${item.label}: illustrative value`}
                      />

                      <span className="absolute -bottom-6 text-[10px] text-slate-500">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-10 text-xs leading-5 text-slate-500">
                Example visualization only. Replace with verified analytics
                before publishing actual performance claims.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="group rounded-2xl border border-[#004658]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-slate-600">
                      {metric.label}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#004658]/5 text-[#004658] transition-colors group-hover:bg-[#004658] group-hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        {index === 0 && (
                          <>
                            <path d="M4 19V5M4 19h16" />
                            <path d="m7 14 4-4 3 2 5-6" />
                          </>
                        )}

                        {index === 1 && (
                          <>
                            <circle cx="10.5" cy="10.5" r="6.5" />
                            <path d="m15.5 15.5 4 4" />
                          </>
                        )}

                        {index === 2 && (
                          <>
                            <path d="M3 12s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6Z" />
                            <circle cx="12" cy="12" r="2.5" />
                          </>
                        )}

                        {index === 3 && (
                          <>
                            <path d="m5 12 4 4L19 6" />
                            <circle cx="12" cy="12" r="9" />
                          </>
                        )}
                      </svg>
                    </span>
                  </div>

                  <p className="mt-5 font-['Outfit',sans-serif] text-xl font-bold text-[#004658]">
                    {metric.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {metric.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard footer */}
          <div className="border-t border-[#004658]/10 bg-white px-5 py-5 sm:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-slate-800">
                Data-driven content decisions
              </p>
              <p className="text-xs leading-5 text-slate-500">
                Example UI · Not connected to live analytics
              </p>
            </div>
          </div>
        </div>

        {/* Supporting features */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              title: "Search Visibility",
              description:
                "Monitor keyword performance and opportunities to improve discoverability.",
            },
            {
              title: "Audience Engagement",
              description:
                "Review engagement signals to understand which content resonates.",
            },
            {
              title: "Business Outcomes",
              description:
                "Connect content activity with inquiries, sign-ups, and other defined goals.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#004658]/10 bg-white p-6 transition-all hover:border-[#00A8CC]/40 hover:shadow-md"
            >
              <span className="mb-4 block h-1 w-10 rounded-full bg-gradient-to-r from-[#004658] to-[#00A8CC]" />

              <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentAnalytics;