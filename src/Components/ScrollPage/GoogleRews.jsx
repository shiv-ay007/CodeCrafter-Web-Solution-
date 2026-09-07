import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const reviewsData = [
  {
    id: 1,
    name: "Access Authority",
    avatar: "https://ui-avatars.com/api/?name=Access+Authority&background=1a73e8&color=ffffff&size=128&bold=true",
    date: "1 month ago",
    rating: 5,
    role: "Verified Google Client",
    review:
      "I had a good experience working with Code Crafters. The team was responsive, understood my requirements clearly, and delivered the website on time. Communication was smooth throughout the project, and they were open to feedback and small revisions whenever needed. Overall, the process was straightforward."
  },
  {
    id: 2,
    name: "Shanya Scans",
    avatar: "https://ui-avatars.com/api/?name=Shanya+Scans&background=00897b&color=ffffff&size=128&bold=true",
    date: "4 months ago",
    rating: 5,
    role: "Healthcare Platform",
    review:
      "We are extremely satisfied with the services provided by Code Crafter. They developed our app and website with great professionalism, creativity, and timely delivery. The team understood our requirements perfectly and delivered beyond expectations. Highly recommended for anyone looking for quality digital solutions."
  },
  {
    id: 3,
    name: "Diksha Sibu",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=128&h=128&q=80",
    date: "1 year ago",
    rating: 5,
    role: "Product Founder",
    review:
      "Had a great experience with Code Crafter! They built us a clean, fast, and mobile-friendly website that looks amazing. Super easy to work with – responsive, creative, and professional. Highly recommended!"
  },
  {
    id: 4,
    name: "Monika Pandey",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80",
    date: "1 year ago",
    rating: 5,
    role: "Enterprise Client",
    review:
      "Highly skilled and professional team. They took time to understand my needs and accordingly designed my website. Have ample patience to design and redesign and alter the content according to the clients requirements... thank you Code Crafter Team."
  },
  {
    id: 5,
    name: "Ariz Niyaz",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128&q=80",
    date: "1 year ago",
    rating: 5,
    role: "Fintech & Algorithmic Trading",
    review:
      "Facilitated for making a financial software to automate my trading. The team is technically very sound, responsive, and delivers high-performance backend systems with sub-millisecond execution."
  },
  {
    id: 6,
    name: "Eqra Nasir",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80",
    date: "1 year ago",
    rating: 5,
    role: "E-Commerce Founder",
    review:
      "Best website design company in Lucknow. I created our main web platform from them and the modern design, fluid animations, and ultra-fast speed exceeded all our initial expectations."
  },
  {
    id: 7,
    name: "Aman Maurya",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80",
    date: "1 year ago",
    rating: 5,
    role: "Tech Entrepreneur",
    review:
      "The best tech company in the market. Transparent communication, bi-weekly sprint demos, and high quality scalable codebase delivered on schedule. Excellent support throughout."
  }
];

const GoogleReviews = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  const totalReviews = reviewsData.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalReviews);
  };

  // Continuous auto-slide carousel every 2.5 seconds non-stop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalReviews);
    }, 2500);
    return () => clearInterval(interval);
  }, [totalReviews]);

  return (
    <section 
      className="w-full py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 bg-[#EEF7FA] relative overflow-hidden select-none" 
      id="reviews"
    >
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none rounded-full opacity-35 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(0, 70, 88, 0.18) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Section Heading with Unified Theme */}
        <div className="text-center mb-6 sm:mb-8">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004658] animate-pulse" />
            <span>TESTIMONIALS</span>
          </div>

          {/* Unified Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.035em] text-slate-950 leading-[1.14]">
            What Our Clients <span className="text-[#004658]">Say<span className="text-[#EA580C]">.</span></span>
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
            See what founders, CTOs, and global engineering leaders say about partnering with CodeCrafter.
          </p>

          {/* Google 5.0 Rating Trust Badge Bar */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-700">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-xs">
              <span className="text-sm font-bold text-slate-900">5.0</span>
              <div className="flex text-amber-400 text-xs">
                {"★★★★★"}
              </div>
              <span className="text-slate-500 font-normal">29+ reviews on Google</span>
            </div>
            
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#004658] text-white hover:bg-[#003442] transition-colors text-xs font-semibold shadow-xs"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.24 10.285V13.8h6.887C18.2 16.15 15.65 18 12.24 18c-3.315 0-6-2.685-6-6s2.685-6 6-6c1.55 0 2.96.58 4.04 1.54l2.67-2.67C17.33 3.34 14.93 2.4 12.24 2.4 6.97 2.4 2.7 6.67 2.7 11.94s4.27 9.54 9.54 9.54c5.51 0 9.16-3.87 9.16-9.33 0-.63-.07-1.25-.19-1.865H12.24z"/>
              </svg>
              <span>Review us on Google</span>
            </a>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            PINTEREST REFERENCE 3D ANIMATED TESTIMONIALS CAROUSEL
        ════════════════════════════════════════════════════════════ */}
        <div className="relative max-w-[1100px] mx-auto py-2 sm:py-4">
          
          {/* Giant Watermark Quotation Icon in Container Background */}
          <div className="absolute top-0 left-4 sm:left-14 text-slate-300/35 font-serif text-[100px] sm:text-[180px] leading-none select-none pointer-events-none -z-0">
            “
          </div>

          {/* 3D Sliding Cards Stage */}
          <div className="relative h-[380px] sm:h-[430px] flex items-center justify-center overflow-hidden">
            {reviewsData.map((item, index) => {
              // Calculate offset relative to active index
              let offset = index - activeIndex;
              if (offset < -Math.floor(totalReviews / 2)) offset += totalReviews;
              if (offset > Math.floor(totalReviews / 2)) offset -= totalReviews;

              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // Responsive dynamic positioning, scaling and opacity for 3D depth
              const cardSpacing = windowWidth < 480 ? 190 : windowWidth < 768 ? 240 : 280;
              const translateX = offset * cardSpacing;
              const scale = isActive ? 1.05 : Math.abs(offset) === 1 ? 0.9 : 0.78;
              const opacity = isActive ? 1 : Math.abs(offset) === 1 ? (windowWidth < 480 ? 0.5 : 0.65) : 0.25;
              const zIndex = isActive ? 30 : 20 - Math.abs(offset) * 5;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className="absolute w-[265px] xs:w-[300px] sm:w-[350px] md:w-[380px] cursor-pointer"
                  initial={false}
                  animate={{
                    x: translateX,
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26
                  }}
                >
                  {/* Card Body */}
                  <div
                    className={`relative rounded-[28px] p-6 sm:p-7 transition-all duration-300 text-center flex flex-col justify-between min-h-[340px] sm:min-h-[360px] ${
                      isActive
                        ? "bg-white border-2 border-[#004658]/35 shadow-[0_20px_50px_-10px_rgba(0,70,88,0.22)]"
                        : "bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md hover:bg-white"
                    }`}
                  >
                    {/* Top User Profile Header */}
                    <div className="flex flex-col items-center">
                      {/* Avatar with Google Verified Ring */}
                      <div className="relative mb-3">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=004658&color=ffffff&size=128&bold=true`;
                          }}
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-3 ring-[#004658]/20 shadow-md"
                        />
                        {/* Verified Google Badge */}
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                          <svg className="w-3 h-3" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z" />
                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z" />
                            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z" />
                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" />
                          </svg>
                        </div>
                      </div>

                      {/* Reviewer Name */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                        {item.name}
                      </h3>

                      {/* Rating Stars */}
                      <div className="flex text-amber-400 text-xs sm:text-[13px] my-1">
                        {"★★★★★"}
                      </div>

                      {/* Sub-label */}
                      <span className="text-[11px] font-medium text-slate-400">
                        {item.role} • {item.date}
                      </span>
                    </div>

                    {/* Review Quote Text */}
                    <div className="relative my-3 flex-1 flex items-center justify-center">
                      <span className="text-slate-300 font-serif text-lg leading-none select-none mr-1 -mt-2">“</span>
                      <p className="text-xs sm:text-[13.5px] text-slate-600 font-normal leading-relaxed line-clamp-4">
                        {item.review}
                      </p>
                      <span className="text-slate-300 font-serif text-lg leading-none select-none ml-1 -mb-2">”</span>
                    </div>

                    {/* Bottom Status Dot */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[10.5px] font-mono text-[#004658] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>VERIFIED GOOGLE REVIEW</span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

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