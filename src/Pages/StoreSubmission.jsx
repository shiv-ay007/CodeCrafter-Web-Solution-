
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Apple,
  Smartphone,
  ShieldCheck,
  ClipboardCheck,
  SearchCheck,
  FileCheck2,
  Image as ImageIcon,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Globe,
  Rocket,
  RefreshCw,
  LockKeyhole,
  ListChecks,
} from "lucide-react";

const StoreSubmission = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const process = [
    {
      num: "01",
      title: "App Store Connect & Play Console Setup",
      desc: "Configure developer accounts, distribution certificates, signing credentials and required console settings.",
    },
    {
      num: "02",
      title: "ASO Metadata & Screenshots",
      desc: "Prepare store titles, descriptions, keywords, screenshots and preview assets for your target audience.",
    },
    {
      num: "03",
      title: "Privacy & Compliance Review",
      desc: "Review privacy disclosures, data safety information, permissions and applicable policy requirements.",
    },
    {
      num: "04",
      title: "Submission & Review Support",
      desc: "Submit the app, monitor review feedback and help resolve issues that require corrections or resubmission.",
    },
  ];

  const platforms = [
    {
      icon: Apple,
      title: "Apple App Store",
      label: "iOS & iPadOS",
      desc: "Prepare your iOS application for App Store Connect submission and Apple's review process.",
      points: [
        "App Store Connect configuration",
        "Metadata and screenshot preparation",
        "Privacy and permission review",
        "Review feedback assistance",
      ],
    },
    {
      icon: Smartphone,
      title: "Google Play Store",
      label: "Android",
      desc: "Organise your Android release assets and Play Console information for submission.",
      points: [
        "Play Console setup assistance",
        "Store listing and graphics",
        "Data safety declarations",
        "Testing and release-track checks",
      ],
    },
  ];

  const listingFeatures = [
    {
      icon: ImageIcon,
      title: "App Icon & Screenshots",
      desc: "Prepare platform-appropriate visual assets that clearly communicate your app's value.",
    },
    {
      icon: SearchCheck,
      title: "Metadata & Keywords",
      desc: "Structure titles, descriptions and relevant keywords to help users understand your app.",
    },
    {
      icon: Globe,
      title: "Localization Support",
      desc: "Adapt listing content for your selected languages and target markets.",
    },
    {
      icon: FileCheck2,
      title: "Listing Consistency",
      desc: "Check that store claims, screenshots and descriptions accurately reflect the app.",
    },
  ];

  const checklist = [
    "Developer account and app identifiers reviewed",
    "App icon, screenshots and store metadata prepared",
    "Privacy policy URL and data disclosures checked",
    "Required permissions and their purposes reviewed",
    "Sign-in and account access instructions prepared",
    "Build tested against applicable review requirements",
  ];

  const journey = [
    {
      num: "01",
      title: "Prepare",
      desc: "Collect app assets, account details and submission information.",
    },
    {
      num: "02",
      title: "Validate",
      desc: "Review the build, store listing, privacy disclosures and policy requirements.",
    },
    {
      num: "03",
      title: "Submit",
      desc: "Upload the release and complete the relevant store submission workflow.",
    },
    {
      num: "04",
      title: "Respond",
      desc: "Review platform feedback, address required changes and resubmit when appropriate.",
    },
  ];

  const faqs = [
    {
      q: "How long does app store approval take?",
      a: "Review times vary by platform, app complexity and submission details. Neither Apple nor Google guarantees a fixed approval timeline.",
    },
    {
      q: "Can you help if my app has been rejected?",
      a: "Yes. We can review the rejection feedback, identify potential issues, suggest corrections and assist with preparing a revised submission. The final decision belongs to the platform.",
    },
    {
      q: "Do I need my own developer account?",
      a: "Usually, your business or app owner should maintain ownership of its developer account. We can assist with the submission process using appropriately authorised access.",
    },
    {
      q: "What information is needed to submit an app?",
      a: "Requirements depend on the platform and app. Common items include a release build, store listing assets, privacy information, app access instructions and relevant declarations.",
    },
    {
      q: "Can you guarantee approval?",
      a: "No service can guarantee approval because Apple and Google make the final review decisions. Our focus is on improving submission readiness and helping address review feedback.",
    },
  ];

  return (
    <main className="relative w-full overflow-hidden bg-[#FBFDFD] pt-28 pb-0 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 sm:pt-36">

      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[520px] w-[1000px] -translate-x-1/2 rounded-full opacity-40 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(0,70,88,0.18), rgba(0,168,204,0.08) 50%, transparent 80%)",
        }}
      />

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-[#004658]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#004658] sm:text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#00A8CC]" />
          <Smartphone size={16} />
          Apple & Google Store Submission
        </div>

        <h1 className="mx-auto mb-6 max-w-5xl font-['Outfit',sans-serif] text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          App Store & Google Play{" "}
          <span className="bg-gradient-to-r from-[#004658] via-[#005A72] to-[#00A8CC] bg-clip-text text-transparent">
            Submission Support
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-base leading-8 text-slate-600 sm:text-xl">
          Prepare your mobile app for submission with structured store
          setup, listing optimisation, compliance checks and review
          feedback assistance.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/schedule-consultation"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#004658] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#004658]/15 transition hover:-translate-y-0.5 hover:bg-[#003844]"
          >
            Discuss Your Submission <ArrowRight size={17} />
          </Link>

          <a
            href="#submission-platforms"
            className="inline-flex items-center justify-center rounded-full border border-[#004658]/20 bg-white px-7 py-4 text-sm font-bold text-[#004658] transition hover:bg-[#004658]/5"
          >
            Explore Platforms
          </a>
        </div>

        {/* EXISTING PROCESS CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
          {process.map((item) => (
            <article
              key={item.num}
              className="group rounded-3xl border border-[#004658]/15 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-xl hover:shadow-[#004658]/5 sm:p-8"
            >
              <span className="mb-3 block font-['Outfit',sans-serif] text-2xl font-extrabold text-[#00A8CC]/70">
                {item.num}
              </span>
              <h3 className="mb-3 font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PLATFORM SUPPORT */}
      <section
        id="submission-platforms"
        className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0085A0]">
            Platform Support
          </span>
          <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-5xl">
            Two Major Stores. One Structured Workflow.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Get help organising the submission requirements for your
            target mobile platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <article
                key={platform.title}
                className="group rounded-3xl border border-[#004658]/15 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-9"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658] transition group-hover:bg-[#004658] group-hover:text-white">
                    <Icon size={27} />
                  </div>
                  <span className="rounded-full border border-[#004658]/15 bg-[#004658]/5 px-4 py-2 text-xs font-bold text-[#004658]">
                    {platform.label}
                  </span>
                </div>

                <h3 className="font-['Outfit',sans-serif] text-2xl font-bold text-slate-950">
                  {platform.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {platform.desc}
                </p>

                <ul className="mt-7 space-y-4">
                  {platform.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-[#0085A0]"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* STORE LISTING OPTIMISATION */}
      <section className="border-y border-[#004658]/10 bg-[#F0F7F8] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0085A0]">
              Store Listing
            </span>
            <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-5xl">
              Make Your Store Listing Launch-Ready
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Keep your listing clear, consistent and aligned with the
              actual features of your mobile application.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {listingFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-[#004658]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658]">
                    <Icon size={23} />
                  </div>
                  <h3 className="mb-3 font-['Outfit',sans-serif] text-lg font-bold text-slate-900">
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

      {/* COMPLIANCE CHECKLIST */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0085A0]">
              Release Readiness
            </span>
            <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Check the Essentials Before You Submit
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              A practical starting checklist for identifying missing
              information and common submission gaps before review.
              Exact requirements depend on the platform and app.
            </p>

            <Link
              to="/schedule-consultation"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#004658] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#003844]"
            >
              Review My App <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-3xl border border-[#004658]/15 bg-white p-6 shadow-lg shadow-[#004658]/5 sm:p-9">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/10 text-[#004658]">
                <ListChecks size={25} />
              </div>
              <div>
                <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                  Pre-Submission Checklist
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Essential areas to review
                </p>
              </div>
            </div>

            <ul className="space-y-5">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#0085A0]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SUBMISSION JOURNEY */}
      <section className="bg-[#003B49] py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#72D8E9]">
              How It Works
            </span>
            <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold sm:text-5xl">
              From Preparation to Submission
            </h2>
            <p className="mt-5 leading-8 text-slate-200">
              A clear workflow to help your team track the key stages
              involved in publishing a mobile application.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item) => (
              <article
                key={item.num}
                className="rounded-3xl border border-white/15 bg-white/[0.06] p-7 transition hover:bg-white/[0.1]"
              >
                <span className="font-['Outfit',sans-serif] text-4xl font-extrabold text-[#72D8E9]">
                  {item.num}
                </span>
                <div className="my-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#72D8E9] to-[#00A8CC]" />
                <h3 className="mb-3 font-['Outfit',sans-serif] text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-slate-200">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-28">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0085A0]">
            FAQs
          </span>
          <h2 className="mt-4 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-5xl">
            Store Submission Questions
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Understand the process before preparing your app for review.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;

            return (
              <article
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-[#004658]/15 bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#004658] transition-transform ${
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
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#004658] px-6 py-12 text-center text-white shadow-xl shadow-[#004658]/15 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#00A8CC]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#00A8CC]/15 blur-3xl" />

          <div className="relative">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <Rocket size={27} className="text-[#72D8E9]" />
            </div>

            <h2 className="font-['Outfit',sans-serif] text-2xl font-extrabold sm:text-4xl">
              Facing an App Store Rejection?
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              Let's review the feedback, identify potential submission
              gaps and plan the next steps for your app.
            </p>

            <Link
              to="/schedule-consultation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#004658] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#E7F7FA] sm:text-base"
            >
              Schedule Store Submission Help <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoreSubmission;
