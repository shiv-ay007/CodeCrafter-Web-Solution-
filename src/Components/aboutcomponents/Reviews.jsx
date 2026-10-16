
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
  { image: review4, name: "Monika Pandey", rotate: 4 },
  { image: review5, name: "Eqra Nasir", rotate: -4 },
  { image: review6, name: "Rahul Kumar", rotate: 3 },
  { image: review7, name: "Ariz Niyaz", rotate: -4 },
  { image: review8, name: "Shivam Yadav", rotate: 3 },
];

const Reviews = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5fafb] py-12 sm:py-14 lg:py-16" id="reviews">
      {/* CCWS ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-teal-200/25 blur-3xl" />
      </div>

      <div className="relative isolate max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="relative z-10 mx-auto mb-9 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#004658]">
            <span className="h-[2px] w-6 rounded-full bg-[#004658]" />
            Words From Our Clients
            <span className="h-[2px] w-6 rounded-full bg-[#004658]" />
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Real Feedback,{" "}
            <span className="text-[#004658]">Real Impact</span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore genuine feedback shared by our clients on Google.
          </p>
        </header>

        {/* Overlapping Review Wall */}
        <div className="relative z-10 mx-auto w-full max-w-[1360px]">
          <div className="grid grid-cols-1 items-center gap-y-5 sm:grid-cols-2 sm:gap-x-0 sm:gap-y-0 lg:grid-cols-4">
            {reviews.map((review, index) => (
              <a
                key={review.name}
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${review.name}'s Google review`}
                className="
                  review-card group relative mx-auto block w-full
                  max-w-[350px] cursor-pointer
                  rounded-xl focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-[#004658]
                  focus-visible:ring-offset-4
                "
                style={{
                  "--rotation": `${review.rotate}deg`,
                  "--hover-scale": "1.10",
                  zIndex: index + 1,
                }}
              >
                <div
                  className="
                    relative overflow-hidden rounded-xl
                    border border-slate-200/90 bg-white
                    shadow-[0_9px_24px_rgba(0,50,65,0.12)]
                    transition-[border-color,box-shadow]
                    duration-300
                    group-hover:border-[#00a6bd]
                    group-hover:shadow-[0_20px_45px_rgba(0,70,88,0.24)]
                  "
                >
                  <img
                    src={review.image}
                    alt={`Google review screenshot by ${review.name}`}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full"
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/60 transition-all duration-300 group-hover:ring-[#00a6bd]/50" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <p className="relative z-10 mt-8 text-center text-xs text-slate-500 sm:mt-10 sm:text-sm">
          Hover over a review to highlight it · Click to view Google Reviews
        </p>
      </div>

      {/* Scoped animation styles */}
      <style>{`
        .review-card {
          transform: rotate(var(--rotation)) scale(1);
          transform-origin: center center;
          transition:
            transform 350ms cubic-bezier(0.2, 0.8, 0.2, 1),
            filter 350ms ease;
          -webkit-tap-highlight-color: transparent;
        }

        @media (min-width: 640px) {
          .review-card {
            margin-bottom: -16px;
          }
        }

        @media (min-width: 1024px) {
          .review-card {
            margin-bottom: -22px;
          }

          .review-card:nth-child(4n + 2),
          .review-card:nth-child(4n + 4) {
            margin-left: -8px;
          }

          .review-card:nth-child(4n + 3) {
            margin-left: -14px;
          }

          .review-card:hover,
          .review-card:focus-visible {
            z-index: 100 !important;
            transform: rotate(0deg) scale(var(--hover-scale));
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .review-card:hover,
          .review-card:focus-visible {
            z-index: 100 !important;
            transform: rotate(0deg) scale(1.06);
          }
        }

        @media (max-width: 639px) {
          .review-card {
            transform: rotate(0deg);
          }

          .review-card:active {
            transform: scale(1.02);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .review-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Reviews;
