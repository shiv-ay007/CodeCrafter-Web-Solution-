import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    category: "THOUGHT LEADERSHIP",
    title: "Technical Blog Articles",
    description:
      "Publish insightful, well-researched articles that explain complex technologies and build credibility with your target audience.",
    tags: ["SEO Writing", "Industry Insights"],
    icon: "blog",
  },
  {
    number: "02",
    category: "IN-DEPTH RESEARCH",
    title: "Technical Whitepapers",
    description:
      "Turn technical knowledge, research, and industry expertise into structured resources that help prospects make informed decisions.",
    tags: ["Research", "B2B Content"],
    icon: "paper",
  },
  {
    number: "03",
    category: "PROOF & CREDIBILITY",
    title: "Case Studies",
    description:
      "Present project challenges, solutions, and measurable outcomes through compelling customer success stories.",
    tags: ["Project Stories", "Business Impact"],
    icon: "case",
  },
  {
    number: "04",
    category: "AUDIENCE ENGAGEMENT",
    title: "Email Newsletters",
    description:
      "Keep your audience engaged with useful updates, product insights, educational content, and relevant email campaigns.",
    tags: ["Email Campaigns", "Lead Nurturing"],
    icon: "email",
  },
  {
    number: "05",
    category: "CONVERSION COPY",
    title: "Landing Page Content",
    description:
      "Communicate your value proposition clearly with benefit-led messaging, persuasive copy, and focused calls to action.",
    tags: ["UX Copy", "Conversion Focus"],
    icon: "landing",
  },
  {
    number: "06",
    category: "PRODUCT EDUCATION",
    title: "Technical Documentation",
    description:
      "Make products easier to understand with organized guides, feature explanations, onboarding content, and tutorials.",
    tags: ["Product Guides", "Documentation"],
    icon: "docs",
  },
];

const ServiceIcon = ({ type }) => {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const paths = {
    blog: (
      <>
        <path d="M6 3.5h8l4 4V20H6z" />
        <path d="M14 3.5v4h4" />
        <path d="M9 12h6M9 15.5h6" />
      </>
    ),
    paper: (
      <>
        <path d="M5 4h11l3 3v13H5z" />
        <path d="M16 4v4h3M8 12h8M8 15h8M8 18h5" />
      </>
    ),
    case: (
      <>
        <rect x="3.5" y="7" width="17" height="13" rx="2" />
        <path d="M8 7V4h8v3M3.5 12h17M10 12v2h4v-2" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    landing: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18M7 6h.01M10 6h.01M7 12h6M7 15h4" />
      </>
    ),
    docs: (
      <>
        <path d="M5 3.5h10l4 4V20H5z" />
        <path d="M15 3.5v4h4M8 12h8M8 15h8M8 18h5" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7"
      {...common}
    >
      {paths[type]}
    </svg>
  );
};

const ContentServicesShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#00A8CC]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-[#004658]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#004658]">
            <span className="h-2 w-2 rounded-full bg-[#00A8CC]" />
            What We Create
          </span>

          <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Content That Educates,
            <span className="mt-1 block bg-gradient-to-r from-[#004658] to-[#00A8CC] bg-clip-text text-transparent">
              Engages & Converts
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            From technical storytelling to conversion-focused copy, we create
            content that helps your brand communicate expertise and connect
            with the right audience.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#004658]/10 bg-[#FBFDFD] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/50 hover:bg-white hover:shadow-[0_18px_45px_rgba(0,70,88,0.10)] sm:p-8"
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#004658] to-[#00A8CC] transition-all duration-300 group-hover:w-full" />

              <div className="mb-7 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#004658]/5 text-[#004658] transition-all duration-300 group-hover:bg-[#004658] group-hover:text-white">
                  <ServiceIcon type={service.icon} />
                </div>

                <span className="font-['Outfit',sans-serif] text-3xl font-extrabold text-[#004658]/15 transition-colors duration-300 group-hover:text-[#00A8CC]/50">
                  {service.number}
                </span>
              </div>

              <span className="mb-3 text-[10px] font-bold tracking-[0.16em] text-[#0087A3]">
                {service.category}
              </span>

              <h3 className="mb-3 font-['Outfit',sans-serif] text-xl font-bold text-slate-900 sm:text-2xl">
                {service.title}
              </h3>

              <p className="flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#004658]/10 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-[#004658]/10 pt-5">
                <Link
                  to="/schedule-consultation"
                  aria-label={`Discuss ${service.title}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#004658] transition-colors hover:text-[#00A8CC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A8CC]"
                >
                  Discuss Your Project
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#004658]/10 bg-[#F3FAFB] p-6 text-center sm:flex-row sm:text-left sm:p-8">
          <div>
            <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-slate-900 sm:text-xl">
              Need content tailored to your industry?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Let's build a content plan around your audience, product, and
              business objectives.
            </p>
          </div>

          <Link
            to="/schedule-consultation"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#004658] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#005A72] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A8CC]"
          >
            Plan My Content
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentServicesShowcase;