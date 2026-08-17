import React from "react";

const GoogleReviews = () => {
  return (
    <section className="w-full py-8 sm:py-10 lg:py-12 px-4 bg-[#ecf5f8] relative overflow-hidden" id="reviews">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
            <span>TESTIMONIALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-slate-950 leading-tight">
            What Our Clients Say<span className="text-[#004658]">.</span>
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed font-normal">
            See what global founders and engineering leaders say about partnering with CodeCrafter.
          </p>
        </div>

        {/* Elfsight Google Reviews */}
        <div
          className="elfsight-app-2be2d778-5981-4ba7-a2c9-205f0e19a66f"
          data-elfsight-app-lazy
        ></div>
      </div>

      {/* Bottom Smooth Curved Wave Transition into Contact */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -z-0">
        <svg className="relative block w-full h-8 sm:h-14 text-[#f3f7fb] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.31,200.72,110.15,241.81,103.6,281.33,74.4,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default GoogleReviews;