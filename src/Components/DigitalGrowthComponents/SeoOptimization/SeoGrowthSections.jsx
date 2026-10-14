
import React, { useState } from "react";
import {
  Search,
  Gauge,
  Code2,
  FileSearch,
  Link2,
  ChartNoAxesCombined,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Target,
  Layers3,
  ClipboardCheck,
  RefreshCw,
  Globe,
  MousePointerClick,
} from "lucide-react";

const SeoGrowthSections = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const technicalChecks = [
    {
      icon: Search,
      title: "Crawlability & Indexing",
      desc: "Identify crawl errors, indexing issues, blocked pages and sitemap problems.",
      tag: "Technical foundation",
    },
    {
      icon: Gauge,
      title: "Core Web Vitals",
      desc: "Review loading performance, interaction responsiveness and visual stability.",
      tag: "Performance",
    },
    {
      icon: Code2,
      title: "Structured Data",
      desc: "Check relevant schema markup and identify opportunities for enhanced search results.",
      tag: "Search appearance",
    },
    {
      icon: Link2,
      title: "Internal Linking",
      desc: "Find broken links, orphan pages and opportunities to improve site navigation.",
      tag: "Site structure",
    },
    {
      icon: FileSearch,
      title: "Metadata & On-Page SEO",
      desc: "Review title tags, meta descriptions, headings and page-level optimization.",
      tag: "Page optimization",
    },
    {
      icon: Globe,
      title: "Mobile & URL Health",
      desc: "Check mobile usability, redirects, canonical tags and URL consistency.",
      tag: "Technical quality",
    },
  ];

  const keywordSteps = [
    {
      number: "01",
      title: "Discover",
      desc: "Research relevant keywords, audience needs and search opportunities.",
    },
    {
      number: "02",
      title: "Understand Intent",
      desc: "Separate informational, commercial and transactional search intent.",
    },
    {
      number: "03",
      title: "Build Clusters",
      desc: "Group related keywords into useful topics and landing page opportunities.",
    },
    {
      number: "04",
      title: "Map & Prioritize",
      desc: "Match topics to relevant pages and prioritize work by business value.",
    },
  ];

  const contentServices = [
    {
      icon: FileSearch,
      title: "On-Page Optimization",
      desc: "Improve page titles, descriptions, headings, content structure and search relevance.",
    },
    {
      icon: Layers3,
      title: "Content Gap Analysis",
      desc: "Identify useful topics your existing pages may not cover adequately.",
    },
    {
      icon: Link2,
      title: "Internal Link Strategy",
      desc: "Connect related pages with relevant links and descriptive anchor text.",
    },
    {
      icon: Target,
      title: "Conversion-Focused Content",
      desc: "Align landing page content with visitor intent and clear calls to action.",
    },
  ];

  const kpis = [
    {
      icon: MousePointerClick,
      label: "Organic Clicks",
      desc: "Visitors arriving from unpaid search results.",
    },
    {
      icon: Search,
      label: "Search Impressions",
      desc: "How often your pages appear in search results.",
    },
    {
      icon: ChartNoAxesCombined,
      label: "Click-Through Rate",
      desc: "The percentage of impressions that generate clicks.",
    },
    {
      icon: TrendingUp,
      label: "Search Position",
      desc: "Changes in average search visibility for target queries.",
    },
  ];

  const reportingSteps = [
    "Review organic search performance",
    "Monitor important landing pages",
    "Track technical issues and fixes",
    "Evaluate content opportunities",
    "Prioritize the next optimization tasks",
    "Document progress and recommendations",
  ];

  const faqs = [
    {
      q: "What is included in an SEO audit?",
      a: "An SEO audit can include technical health, crawlability, indexing, Core Web Vitals, metadata, content quality, internal links and prioritized recommendations. The exact scope depends on your website.",
    },
    {
      q: "How long does SEO take to show results?",
      a: "SEO results vary according to competition, website condition, content quality and implementation. Meaningful improvements can take several weeks or months, and rankings cannot be guaranteed.",
    },
    {
      q: "Do you provide keyword research?",
      a: "Yes. Keyword research can include search intent, topic clusters, competitor content gaps and mapping target queries to relevant pages.",
    },
    {
      q: "How do you measure SEO performance?",
      a: "Common indicators include organic clicks, impressions, click-through rate, indexed pages, search visibility and relevant conversions. Google Search Console and analytics data can help evaluate progress.",
    },
    {
      q: "Can you optimize an existing website?",
      a: "Yes. An existing website can be reviewed for technical problems, content opportunities, site structure and on-page improvements before prioritizing changes.",
    },
    {
      q: "Do you guarantee first-page rankings?",
      a: "No ethical SEO service can guarantee a specific ranking. The focus should be on improving technical quality, content relevance and measurable organic search performance.",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#FBFDFD] font-['Plus_Jakarta_Sans',sans-serif] text-slate-800">

      {/* 1. TECHNICAL SEO AUDIT */}
      <section
        id="technical-seo-audit"
        className="relative py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute right-0 top-20 -z-0 h-72 w-72 rounded-full bg-[#00A8CC]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-[#004658]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#004658] sm:text-sm">
              <Search size={15} />
              Technical SEO Audit
            </span>

            <h2 className="mt-5 font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Build a Stronger Foundation for Organic Growth
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Identify technical barriers, improve website accessibility
              for search engines and create a clear roadmap for better
              search performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technicalChecks.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-[#004658]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-xl hover:shadow-[#004658]/5 sm:p-7"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658] transition group-hover:bg-[#004658] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="font-['Outfit',sans-serif] text-2xl font-extrabold text-[#004658]/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0085A0]">
                    {item.tag}
                  </span>

                  <h3 className="mb-3 mt-2 font-['Outfit',sans-serif] text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. KEYWORD RESEARCH */}
      <section
        id="keyword-research"
        className="border-y border-[#004658]/10 bg-[#F0F7F8] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0085A0] sm:text-sm">
                Keyword Intelligence
              </span>

              <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
                Target the Searches That Matter to Your Business
              </h2>

              <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
                Build a keyword strategy around customer needs, relevant
                search intent and the pages most likely to support your
                business goals.
              </p>

              <a
                href="#seo-performance"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#004658] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#003844]"
              >
                Explore SEO Metrics <ArrowRight size={17} />
              </a>
            </div>

            <div className="rounded-3xl border border-[#004658]/10 bg-white p-6 shadow-lg shadow-[#004658]/5 sm:p-8">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/10 text-[#004658]">
                  <Target size={25} />
                </div>

                <div>
                  <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-950">
                    Keyword Strategy Workflow
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    From research to implementation
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {keywordSteps.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#004658] font-['Outfit',sans-serif] text-sm font-bold text-white">
                      {step.number}
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CONTENT OPTIMIZATION */}
      <section
        id="content-optimization"
        className="py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0085A0] sm:text-sm">
              Content & On-Page SEO
            </span>

            <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-5xl">
              Turn Useful Content into Search Opportunities
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              Improve page structure, connect related content and help
              visitors find information that matches their needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {contentServices.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex gap-5 rounded-3xl border border-[#004658]/10 bg-white p-6 shadow-sm transition hover:border-[#00A8CC]/40 hover:shadow-lg sm:p-8"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658]">
                    <Icon size={23} />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-[#0085A0]">
                      0{index + 1} / OPTIMIZATION
                    </span>

                    <h3 className="mb-3 mt-2 font-['Outfit',sans-serif] text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SEO PERFORMANCE DASHBOARD */}
      <section
        id="seo-performance"
        className="bg-[#071525] py-20 text-white sm:py-24"
      >
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#4EF0C5]/20 bg-[#4EF0C5]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#4EF0C5]">
                <ChartNoAxesCombined size={15} />
                Performance Tracking
              </span>

              <h2 className="mt-5 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight sm:text-5xl">
                Measure Progress. Make Smarter SEO Decisions.
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
                Track meaningful organic search indicators to understand
                what is improving, where opportunities exist and which
                tasks deserve attention next.
              </p>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#4EF0C5]" size={20} />
                <p className="text-sm leading-6 text-slate-300">
                  Actual metrics can be connected through Google Search
                  Console, analytics tools or your reporting system.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0D2033] p-5 sm:p-8">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-['Outfit',sans-serif] text-xl font-bold">
                    SEO Performance Overview
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Key metrics to monitor
                  </p>
                </div>

                <span className="rounded-full border border-[#4EF0C5]/20 bg-[#4EF0C5]/10 px-3 py-1.5 text-xs font-semibold text-[#4EF0C5]">
                  KPI TRACKING
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {kpis.map((kpi) => {
                  const Icon = kpi.icon;

                  return (
                    <div
                      key={kpi.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#4EF0C5]/30"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EF0C5]/10 text-[#4EF0C5]">
                        <Icon size={21} />
                      </div>

                      <h4 className="font-bold text-white">
                        {kpi.label}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {kpi.desc}
                      </p>

                      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#0085A0] to-[#4EF0C5]" />
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-500">
                Illustrative interface only. Progress bars do not
                represent actual website performance or live analytics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. REPORTING & CONTINUOUS IMPROVEMENT */}
      <section
        id="seo-reporting"
        className="border-b border-[#004658]/10 bg-[#F0F7F8] py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0085A0] sm:text-sm">
              Continuous Improvement
            </span>

            <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              SEO Is an Ongoing Process, Not a One-Time Fix
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              Search performance changes over time. Regular monitoring,
              prioritized fixes and content improvements help keep your
              SEO strategy aligned with business goals.
            </p>

            <a
              href="#seo-faq"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#004658] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#003844]"
            >
              Read Common Questions <ArrowRight size={17} />
            </a>
          </div>

          <div className="rounded-3xl border border-[#004658]/10 bg-white p-6 shadow-lg shadow-[#004658]/5 sm:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/10 text-[#004658]">
                <ClipboardCheck size={24} />
              </div>

              <div>
                <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-950">
                  SEO Review Checklist
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Example recurring review tasks
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {reportingSteps.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#0085A0]"
                  />
                  <span className="text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-[#004658]/[0.05] p-4">
              <div className="flex items-start gap-3">
                <RefreshCw size={19} className="mt-0.5 shrink-0 text-[#004658]" />
                <p className="text-sm leading-6 text-slate-600">
                  Review frequency should match your website, available
                  data, project scope and business priorities.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. INTERACTIVE FAQ */}
      <section
        id="seo-faq"
        className="py-20 sm:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-[#004658]/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658] sm:text-sm">
              <Search size={15} />
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-5xl">
              Questions About SEO Optimization?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Learn more about our SEO approach, reporting and
              optimization process.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-[#004658]/15 bg-white transition hover:border-[#00A8CC]/40"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-semibold leading-6 text-slate-900">
                      {faq.q}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#004658] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6">
                      {faq.a}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SeoGrowthSections;
