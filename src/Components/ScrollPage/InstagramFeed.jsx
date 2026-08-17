import { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    // Prevent loading the Elfsight script multiple times
    if (!document.querySelector("#elfsight-script")) {
      const script = document.createElement("script");

      script.id = "elfsight-script";
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;

      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-20 md:py-28">
      
      {/* Background Decoration */}
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            Instagram
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Follow Our
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
            Discover our latest work, creative moments and
            behind-the-scenes updates on Instagram.
          </p>

        </div>

        {/* Instagram Feed */}
        <div className="relative rounded-3xl border border-gray-200/80 bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-6">

          <div
            className="elfsight-app-ada1fa33-9650-48fc-b69d-225b4b66cf38"
            data-elfsight-app-lazy
          ></div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl"
          >
            Follow us on Instagram

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default InstagramFeed;