
import React, { useState } from "react";

const CAREERS_EMAIL = "hr@codecrafter.com";
// Replace this with your real recruitment email.

const positions = [
    {
        id: "01",
        title: "Business Development Executive",
        department: "Business & Partnerships",
        type: "Full-time",
        level: "Executive",
        description:
            "Build meaningful client relationships, identify new business opportunities, and help turn conversations into long-term partnerships.",
        responsibilities: [
            "Identify and connect with potential clients through relevant channels.",
            "Understand client requirements and coordinate proposals with the team.",
            "Maintain lead pipelines, follow-ups, and client communication.",
        ],
        idealFor:
            "Someone who communicates confidently, enjoys relationship-building, and is motivated by business growth.",
        accent: "from-cyan-400 to-teal-500",
    },
    {
        id: "02",
        title: "Online Bidder",
        department: "Sales & Client Acquisition",
        type: "Full-time",
        level: "Executive",
        description:
            "Discover relevant projects, create tailored proposals, and connect client requirements with the right digital solutions.",
        responsibilities: [
            "Research suitable projects on freelancing and bidding platforms.",
            "Write clear, personalized proposals based on project requirements.",
            "Coordinate with technical teams and manage client follow-ups.",
        ],
        idealFor:
            "Someone with strong written communication, attention to detail, and an interest in web and software projects.",
        accent: "from-blue-400 to-cyan-500",
    },
    {
        id: "03",
        title: "Digital Marketing Specialist",
        department: "Digital Growth",
        type: "Full-time",
        level: "Specialist",
        description:
            "Strengthen digital visibility through thoughtful campaigns, search optimization, content strategy, and performance analysis.",
        responsibilities: [
            "Plan and execute SEO, content, and digital marketing activities.",
            "Monitor campaign performance and identify improvement opportunities.",
            "Collaborate on content calendars, keyword research, and reporting.",
        ],
        idealFor:
            "Someone who combines creative thinking with analytical skills and enjoys improving measurable marketing outcomes.",
        accent: "from-teal-400 to-emerald-500",
    },
];

const OpenPositions = () => {
    const [activePosition, setActivePosition] = useState("01");

    const handleApply = (position) => {
        const subject = `Application for ${position.title}`;

        const body = `Hello CodeCrafter Team,

I am interested in applying for the ${position.title} position.

Please find my resume attached.

Thank you for your consideration.

Regards,
[Your Name]
[Your Contact Number]`;

        const mailtoLink =
            `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <section
            id="open-positions"
            className="relative overflow-hidden bg-[#f5fafb] py-16 sm:py-20 lg:py-24"
        >
            {/* Soft background accents */}
            <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />

            <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#004658] shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            Join the team
                        </div>

                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                            Find your place.
                            <span className="block text-[#006477]">
                                Make your mark.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                            Bring your ideas, build meaningful relationships, and help
                            create digital experiences that make a difference.
                        </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-4 self-start rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm md:self-auto">
                        <span className="text-4xl font-extrabold tracking-tight text-[#004658]">
                            03
                        </span>
                        <div>
                            <p className="text-sm font-bold text-slate-900">
                                Open positions
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                                Explore your next move
                            </p>
                        </div>
                    </div>
                </div>

                {/* Positions panel */}
                <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(0,50,65,0.07)]">
                    {/* Panel header */}
                    <div className="flex flex-col gap-2 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#007185]">
                                Current opportunities
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                                Find the role that fits your strengths.
                            </p>
                        </div>

                        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Applications welcome
                        </span>
                    </div>

                    {/* Job rows */}
                    <div className="divide-y divide-slate-100">
                        {positions.map((position) => {
                            const isActive = activePosition === position.id;

                            return (
                                <article
                                    key={position.id}
                                    className={`relative transition-colors duration-300 ${isActive ? "bg-[#f7fbfc]" : "bg-white"
                                        }`}
                                >
                                    {/* Role summary */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActivePosition(isActive ? null : position.id)
                                        }
                                        aria-expanded={isActive}
                                        className="group flex w-full items-center gap-4 px-5 py-6 text-left sm:gap-6 sm:px-8 sm:py-7"
                                    >
                                        <span
                                            className={`hidden h-12 w-1 shrink-0 rounded-full bg-gradient-to-b sm:block ${position.accent} ${isActive ? "opacity-100" : "opacity-30"
                                                }`}
                                        />

                                        <span
                                            className={`w-9 shrink-0 text-sm font-bold ${isActive ? "text-[#007185]" : "text-slate-400"
                                                }`}
                                        >
                                            {position.id}
                                        </span>

                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#006477] sm:text-xl">
                                                {position.title}
                                            </h3>

                                            <p className="mt-1.5 text-xs text-slate-500 sm:text-sm">
                                                {position.department}
                                            </p>

                                            <div className="mt-3 flex flex-wrap gap-2">
                                                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600">
                                                    {position.type}
                                                </span>
                                                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600">
                                                    {position.level}
                                                </span>
                                            </div>
                                        </div>

                                        <span
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isActive
                                                    ? "rotate-45 border-[#004658] bg-[#004658] text-white"
                                                    : "border-slate-200 bg-white text-[#004658] group-hover:border-[#004658]"
                                                }`}
                                            aria-hidden="true"
                                        >
                                            <span className="text-2xl font-light leading-none">
                                                +
                                            </span>
                                        </span>
                                    </button>

                                    {/* Expandable details */}
                                    <div
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isActive
                                                ? "grid-rows-[1fr]"
                                                : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-5 pb-7 sm:pl-[6.5rem] sm:pr-8">
                                                <p className="max-w-3xl text-sm leading-7 text-slate-600">
                                                    {position.description}
                                                </p>

                                                <div className="mt-6 grid gap-7 md:grid-cols-2">
                                                    <div>
                                                        <h4 className="text-sm font-bold text-slate-900">
                                                            What you’ll do
                                                        </h4>

                                                        <ul className="mt-3 space-y-3">
                                                            {position.responsibilities.map(
                                                                (responsibility) => (
                                                                    <li
                                                                        key={responsibility}
                                                                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                                                                    >
                                                                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e6f4f6] text-xs font-bold text-[#006477]">
                                                                            ✓
                                                                        </span>
                                                                        <span>{responsibility}</span>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>

                                                    <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#dcecef] bg-white p-5">
                                                        <div>
                                                            <h4 className="text-sm font-bold text-slate-900">
                                                                You might be a good fit if…
                                                            </h4>
                                                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                                                {position.idealFor}
                                                            </p>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => handleApply(position)}
                                                            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#004658] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#003744] hover:shadow-lg"
                                                        >
                                                            Apply for this role
                                                            <span aria-hidden="true">↗</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {/* Panel footer */}
                    <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50/70 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                        <p className="text-xs leading-5 text-slate-500 sm:text-sm">
                            Not sure which role fits? Start with the one that matches your
                            strongest skills.
                        </p>

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpenPositions;
