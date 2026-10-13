
import React from "react";
import { NavLink } from "react-router-dom";

import appScreen1 from "../../../assets/images/dss.jpeg";
import appScreen2 from "../../../assets/images/kaashkart.jpeg";
import appScreen3 from "../../../assets/images/mds.jpeg";

const appScreens = [
  {
    number: "01",
    title: "Intuitive User Interface",
    category: "UI DESIGN",
    description:
      "Clean layouts and intuitive navigation that make every interaction effortless.",
    image: appScreen1,
  },
  {
    number: "02",
    title: "Seamless User Experience",
    category: "UX EXPERIENCE",
    description:
      "Thoughtfully designed app experiences focused on usability and user engagement.",
    image: appScreen2,
  },
  {
    number: "03",
    title: "Powerful App Features",
    category: "APP EXPERIENCE",
    description:
      "Well-structured screens that help users access important features with ease.",
    image: appScreen3,
  },
];

const AndroidUIShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-10 sm:mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#004658]/15 bg-[#EAF7F7] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#004658]">
            Designed Around Your Users
          </span>

          <h2 className="mt-6 font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
            Beautiful Interfaces.
            <span className="mt-2 block bg-gradient-to-r from-[#004658] to-[#00A8CC] bg-clip-text text-transparent">
              Better Experiences.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            We combine thoughtful design, intuitive navigation and
            user-focused experiences to create Android applications
            people enjoy using.
          </p>
        </div>

        {/* UI Showcase Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {appScreens.map((screen) => (
            <article
              key={screen.number}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#00A8CC]/40 hover:shadow-[0_24px_60px_rgba(0,70,88,0.12)]"
            >
              {/* Image */}
              <div className="relative flex h-[360px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#EAF7F7] via-[#F8FCFC] to-[#E5F4F8] p-5 sm:h-[400px]">
                <span className="absolute left-5 top-5 z-10 rounded-full border border-white/80 bg-white/90 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-[#004658] shadow-sm">
                  SCREEN / {screen.number}
                </span>

                <img
                  src={screen.image}
                  alt={screen.title}
                  loading="lazy"
                  className="h-full w-full rounded-xl object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#EAF7F7]/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <p className="text-[11px] font-extrabold tracking-[0.18em] text-[#00869A]">
                  {screen.category}
                </p>

                <h3 className="mt-3 font-['Outfit',sans-serif] text-xl font-bold text-slate-950 sm:text-2xl">
                  {screen.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {screen.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#004658]">
                  <span className="h-2 w-2 rounded-full bg-[#00A8CC]" />
                  Android App Design
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-between gap-6 rounded-[28px] bg-[#003B48] px-6 py-8 text-center text-white sm:px-10 md:flex-row md:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#83E5E5]">
              Your Idea, Our Design
            </p>

            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Let's design your next app.
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Create an experience your users will love.
            </p>
          </div>

          <NavLink
            to="/schedule-consultation"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#004658] transition hover:bg-[#DDFBF3]"
          >
            Discuss Your App
            <span>↗</span>
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default AndroidUIShowcase;
