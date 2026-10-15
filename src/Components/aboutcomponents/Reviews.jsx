
import React from "react";

import review1 from "../../assets/images/review1.png";
import review2 from "../../assets/images/review2.png";
import review3 from "../../assets/images/review3.png";
import review4 from "../../assets/images/review4.png";
import review5 from "../../assets/images/review5.png";
import review6 from "../../assets/images/reviews6.png";
import review7 from "../../assets/images/review9.png";
import review8 from "../../assets/images/review8.png";

const GOOGLE_REVIEWS_URL =
  "https://maps.app.goo.gl/CZADrx1bTFs5b5R47";

const reviews = [
  { image: review1, name: "Ayushi Srivastava", rotate: -5 },
  { image: review2, name: "Access Authority", rotate: 4 },
  { image: review3, name: "Diksha Sibu", rotate: -3 },
  { image: review4, name: "Monika Pandey", rotate: 5 },
  { image: review5, name: "Eqra Nasir", rotate: -4 },
  { image: review6, name: "Rahul Kumar", rotate: 3 },
  { image: review7, name: "Ariz Niyaz", rotate: -5 },
  { image: review8, name: "Shivam Yadav", rotate: 4 },
];

const Reviews = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6fafb]">
      <section className="relative mx-auto max-w-[1360px] px-5 py-20 sm:px-8 lg:px-10">
        {/* Background decoration */}
        <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-0 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />

        {/* Heading */}
        <div className="relative mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#004658]">
            Client Experiences
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Words From Our{" "}
            <span className="text-[#004658]">Clients</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-slate-600">
            Explore genuine feedback shared by our clients on Google.
          </p>
        </div>

        {/* Overlapping Screenshot Wall */}
        <div className="relative mx-auto max-w-[1180px]">
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-0 sm:gap-y-14 lg:grid-cols-3 lg:gap-y-16">
            {reviews.map((review, index) => (
              <a
                key={index}
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${review.name}'s review on Google`}
                className="
                  group relative block cursor-pointer
                  transition-all duration-500 ease-out
                  hover:z-50 hover:scale-[1.12]
                  focus-visible:z-50 focus-visible:scale-105
                  focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-[#004658]
                "
                style={{
                  transform: `rotate(${review.rotate}deg)`,
                  zIndex: index + 1,
                }}
              >
                <div
                  className="
                    relative mx-auto w-full max-w-[370px]
                    overflow-hidden rounded-2xl border
                    border-[#004658]/10 bg-white
                    shadow-[0_12px_35px_rgba(0,40,55,0.14)]
                    transition-all duration-500
                    group-hover:shadow-[0_25px_65px_rgba(0,70,88,0.28)]
                    group-focus-visible:shadow-[0_25px_65px_rgba(0,70,88,0.28)]
                  "
                >
                  <img
                    src={review.image}
                    alt={`Google review screenshot by ${review.name}`}
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <p className="relative mt-20 text-center text-sm text-slate-500">
          Hover to highlight a review. Click to view our Google listing.
        </p>
      </section>
    </main>
  );
};

export default Reviews;
