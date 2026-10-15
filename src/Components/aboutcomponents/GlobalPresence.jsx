
import React from "react";

import india from "../../assets/images/india.png";
import dubai from "../../assets/images/dubai.png";
import canada from "../../assets/images/cananda.png";
import america from "../../assets/images/america.png";
import california from "../../assets/images/california.png";
import washington from "../../assets/images/washington.png";
import saudiArabia from "../../assets/images/saudi.png";
import london from "../../assets/images/london.png";
import australia from "../../assets/images/australia1.png";

const locations = [
  { name: "India", image: india },
  { name: "Dubai", image: dubai },
  { name: "Canada", image: canada },
  { name: "America", image: america },
  { name: "California", image: california },
  { name: "Washington", image: washington },
  { name: "Saudi Arabia", image: saudiArabia },
  { name: "London", image: london },
  { name: "Australia", image: australia },
];

const GlobalPresence = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Subtle CCWS background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-slate-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#004658]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#004658]">
              Global Presence
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="text-[#004658]">
              International Footprint
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#004658] to-cyan-400" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Connecting businesses across borders through innovative digital
            solutions and technology partnerships.
          </p>
        </div>

        {/* Flag Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {locations.map((location) => (
            <div
              key={location.name}
              className="
                group relative flex min-h-[190px] flex-col
                items-center justify-center overflow-hidden
                rounded-2xl border border-slate-200/90
                bg-white px-4 py-7
                shadow-[0_5px_22px_rgba(0,70,88,0.05)]
                transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:border-[#004658]/40
                hover:shadow-[0_18px_38px_rgba(0,70,88,0.14)]
              "
            >
              {/* Subtle hover background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-50/0 via-white to-cyan-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Flag Image */}
              <div
                className="
                  relative flex h-[112px] w-[112px] items-center
                  justify-center rounded-full border border-slate-100
                  bg-white shadow-[0_5px_20px_rgba(0,70,88,0.08)]
                  transition-all duration-300 ease-out
                  group-hover:scale-110
                  group-hover:border-cyan-200
                  group-hover:shadow-[0_8px_26px_rgba(0,70,88,0.16)]
                "
              >
                <img
                  src={location.image}
                  alt={`${location.name} flag`}
                  loading="lazy"
                  decoding="async"
                  className="
                    h-[94px] w-[94px] rounded-full object-contain
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Country Name */}
              <h3
                className="
                  relative mt-5 text-center text-sm font-bold
                  text-slate-900 transition-colors duration-300
                  group-hover:text-[#004658] sm:text-base
                "
              >
                {location.name}
              </h3>

              {/* Animated Accent Line */}
              <span
                className="
                  relative mt-2 h-0.5 w-7 rounded-full
                  bg-cyan-500/80 transition-all duration-300
                  group-hover:w-14 group-hover:bg-[#004658]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
