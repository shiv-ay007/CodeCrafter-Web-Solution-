import { useEffect } from "react";

const LinkedInFeed = () => {
  useEffect(() => {
    // Load Elfsight script only once
    if (!document.querySelector("#elfsight-script")) {
      const script = document.createElement("script");

      script.id = "elfsight-script";
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;

      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background Glow */}
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            LinkedIn
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Connect With
            <span className="block text-blue-600">
              Our Professional Network
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
            Stay updated with our latest achievements, company news,
            projects, and professional insights.
          </p>

        </div>

        {/* LinkedIn Feed */}
        <div className="relative rounded-3xl border border-gray-200/80 bg-gray-50/50 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-6">

          <div
            className="elfsight-app-b4e7295b-f8e3-4f33-a365-809762310931"
            data-elfsight-app-lazy
          ></div>

        </div>

        {/* CTA */}
        <div className="mt-10 text-center">

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            Follow us on LinkedIn

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default LinkedInFeed;