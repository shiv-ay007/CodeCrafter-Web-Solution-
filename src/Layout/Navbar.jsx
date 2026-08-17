import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/CodeCrafterlogo.webp";

// Navigation menu data structure with exact BairesDev mega-menu layout
const menuItems = [
  {
    title: "About Crafter",
    key: "about",
    sidebarTitle: "About Us",
    sidebarDesc: "We engineer high-performance web applications, enterprise software, and scalable digital solutions built around your exact goals.",
    sidebarLinks: [
      { name: "Staff Augmentation", path: "/about" },
      { name: "Dedicated Tech Teams", path: "/team" },
      { name: "Software Outsourcing", path: "/about" },
      { name: "Digital Engineering Studio", path: "/team" }
    ],
    proofTitle: "Trusted by 50+ Global Brands",
    proofDesc: "Delivered 100+ production software projects with 99.9% uptime. Read case studies.",
    proofLink: "/about",
    topHeading: "COMPANY & LEADERSHIP",
    topCol1: [
      { name: "About CodeCrafter", path: "/about" },
      { name: "Our Engineering Team", path: "/team" },
      { name: "Careers & Openings", path: "/careers", badge: "Hiring" },
      { name: "Client Testimonials", path: "/testimonials" },
      { name: "Culture & Values", path: "/about" },
      { name: "Brand & Media Assets", path: "/about" },
      { name: "Security & IP Protection", path: "/about" },
      { name: "Schedule a Consultation", path: "/contact" }
    ],
    topCol2: [
      { name: "Agile Sprint Cycles", path: "/about" },
      { name: "Global Delivery Process", path: "/about" },
      { name: "Code Review Standards", path: "/web-development" },
      { name: "Automated CI/CD Pipelines", path: "/hosting/cloud" },
      { name: "Architecture Roadmaps", path: "/web-development" },
      { name: "SOC-2 & GDPR Compliance", path: "/website-maintenance" },
      { name: "Dedicated Tech Leads", path: "/team" },
      { name: "Engineering Blog", path: "/testimonials" }
    ],
    enterpriseHeading: "ENGINEERING STANDARDS",
    enterpriseCol: [
      { name: "Sub-50ms TTFB Speed", path: "/web-development" },
      { name: "Zero-Downtime Releases", path: "/hosting/cloud" },
      { name: "Microservices Architecture", path: "/software/erp" },
      { name: "Clean Code & Refactoring", path: "/website-redesign" },
      { name: "End-to-End QA Testing", path: "/software/crm" },
      { name: "Cloud Infrastructure", path: "/hosting/cloud" },
      { name: "24/7 SLA Technical Support", path: "/website-maintenance" },
      { name: "Disaster Recovery & Backup", path: "/website-maintenance" }
    ],
    allLinkText: "All About CodeCrafter →",
    allLinkPath: "/about"
  },
  {
    title: "UX & Web Services",
    key: "web-services",
    sidebarTitle: "Services",
    sidebarDesc: "Get custom software development services, built around your exact business needs:",
    sidebarLinks: [
      { name: "Staff Augmentation", path: "/contact" },
      { name: "Dedicated Teams", path: "/team" },
      { name: "Software Outsourcing", path: "/web-development" },
      { name: "AI Transformation", path: "/web-design" }
    ],
    proofTitle: "Enterprise Engineering",
    proofDesc: "We build ultra-fast responsive web portals and automated cloud backends. Read case studies.",
    proofLink: "/web-development",
    topHeading: "TOP SERVICES",
    topCol1: [
      { name: "AI Development", path: "/software/crm" },
      { name: "Back-end Development", path: "/software/erp" },
      { name: "CMS Development", path: "/web-development" },
      { name: "API & Microservices", path: "/software/erp" },
      { name: "Front-end Development", path: "/web-development" },
      { name: "Machine Learning Solutions", path: "/software/crm" },
      { name: "QA Testing & Automation", path: "/web-development" },
      { name: "UX/UI Design", path: "/web-design" }
    ],
    topCol2: [
      { name: "Android App Development", path: "/app-studio/android" },
      { name: "Business Intelligence", path: "/software/erp" },
      { name: "Data Engineering", path: "/software/crm" },
      { name: "eCommerce Development", path: "/e-commerce" },
      { name: "iOS App Development", path: "/app-studio/ios" },
      { name: "Mobile App Development", path: "/app-studio/flutter" },
      { name: "SaaS Development", path: "/software/erp" },
      { name: "Web Development", path: "/web-development" }
    ],
    enterpriseHeading: "ENTERPRISE FOCUSED",
    enterpriseCol: [
      { name: "Backup Solutions", path: "/website-maintenance" },
      { name: "Big Data Pipelines", path: "/software/crm" },
      { name: "Cloud Applications", path: "/hosting/cloud" },
      { name: "CRM Systems", path: "/software/crm" },
      { name: "Cybersecurity & SSL", path: "/website-maintenance" },
      { name: "DevOps & CI/CD", path: "/hosting/cloud" },
      { name: "Digital Transformation", path: "/digital-booster/seo" },
      { name: "ERP Development", path: "/software/erp" }
    ],
    allLinkText: "All Services →",
    allLinkPath: "/web-development"
  },
  {
    title: "App Studio",
    key: "app-studio",
    sidebarTitle: "App Studio",
    sidebarDesc: "Custom iOS and Android applications engineered for speed, smooth 60 FPS animations, and native UX.",
    sidebarLinks: [
      { name: "Native Mobile Engineering", path: "/app-studio/android" },
      { name: "Cross-Platform Frameworks", path: "/app-studio/flutter" },
      { name: "App Store Launch & QA", path: "/app-studio/ios" },
      { name: "Mobile Architecture Consulting", path: "/contact" }
    ],
    proofTitle: "Multi-Platform Power",
    proofDesc: "Building unified iOS & Android codebases with Flutter & React Native. Read case studies.",
    proofLink: "/app-studio/flutter",
    topHeading: "MOBILE PLATFORMS",
    topCol1: [
      { name: "Android App Development", path: "/app-studio/android" },
      { name: "iOS App Development", path: "/app-studio/ios" },
      { name: "Flutter Multi-Platform", path: "/app-studio/flutter", badge: "Popular" },
      { name: "React Native Hybrid Apps", path: "/app-studio/hybrid" },
      { name: "Tablet & iPad Optimizations", path: "/app-studio/ios" },
      { name: "PWA Progressive Web Apps", path: "/web-development" },
      { name: "Wearable & Smart Device Apps", path: "/app-studio/android" },
      { name: "Mobile UI Design Systems", path: "/web-design" }
    ],
    topCol2: [
      { name: "Offline-First Sync Engine", path: "/app-studio/android" },
      { name: "Push Notifications Hub", path: "/app-studio/flutter" },
      { name: "In-App Purchases & Stripe", path: "/e-commerce" },
      { name: "Biometric Auth (Face/Touch)", path: "/app-studio/ios" },
      { name: "Real-Time Chat & Sockets", path: "/software/crm" },
      { name: "Mapbox & Geo-Tracking", path: "/app-studio/flutter" },
      { name: "Camera & Sensor Integration", path: "/app-studio/android" },
      { name: "Automated Mobile QA Testing", path: "/app-studio/ios" }
    ],
    enterpriseHeading: "STORE & OPERATIONS",
    enterpriseCol: [
      { name: "Google Play Store Launch", path: "/app-studio/android" },
      { name: "Apple App Store Review", path: "/app-studio/ios" },
      { name: "App Performance Profiling", path: "/app-studio/flutter" },
      { name: "Crashlytics & Bug Monitoring", path: "/website-maintenance" },
      { name: "App Version Upgrades", path: "/website-maintenance" },
      { name: "Backend API Connectors", path: "/software/erp" },
      { name: "Cloud Sync Database", path: "/hosting/cloud" },
      { name: "24/7 Mobile SLA Support", path: "/website-maintenance" }
    ],
    allLinkText: "All Mobile Services →",
    allLinkPath: "/app-studio/flutter"
  },
  {
    title: "Digital Growth",
    key: "digital-growth",
    sidebarTitle: "Growth",
    sidebarDesc: "Data-driven SEO, performance marketing, and creative brand positioning to scale your customer acquisition pipeline.",
    sidebarLinks: [
      { name: "Search Engine Domination", path: "/digital-booster/seo" },
      { name: "High-ROI Paid Acquisition", path: "/digital-booster/google-ads" },
      { name: "Brand Voice & Visuals", path: "/digital-booster/branding" },
      { name: "Conversion Rate Sprints", path: "/digital-booster/seo" }
    ],
    proofTitle: "Proven Growth Funnels",
    proofDesc: "Generated 300%+ organic traffic and lead conversions for clients. Read case studies.",
    proofLink: "/digital-booster/seo",
    topHeading: "GROWTH SERVICES",
    topCol1: [
      { name: "SEO Optimization", path: "/digital-booster/seo" },
      { name: "Google Ads (PPC Campaigns)", path: "/digital-booster/google-ads" },
      { name: "Social Media Strategy", path: "/digital-booster/social-media" },
      { name: "Technical Content Marketing", path: "/digital-booster/content-marketing" },
      { name: "Brand Identity & Guidelines", path: "/digital-booster/branding" },
      { name: "Local SEO & Google Maps", path: "/digital-booster/seo" },
      { name: "Conversion Rate Optimization", path: "/web-design" },
      { name: "Technical Website SEO Audit", path: "/digital-booster/seo" }
    ],
    topCol2: [
      { name: "Meta & Instagram Ads", path: "/digital-booster/social-media" },
      { name: "LinkedIn B2B Lead Gen", path: "/digital-booster/social-media" },
      { name: "YouTube Video Marketing", path: "/digital-booster/content-marketing" },
      { name: "Email Marketing Sequences", path: "/digital-booster/social-media" },
      { name: "Influencer Marketing Ops", path: "/digital-booster/social-media" },
      { name: "High-Converting Landing Pages", path: "/web-design" },
      { name: "Competitor Market Analysis", path: "/digital-booster/seo" },
      { name: "Google Analytics 4 & Tag Mgr", path: "/digital-booster/google-ads" }
    ],
    enterpriseHeading: "STRATEGY & AUDITS",
    enterpriseCol: [
      { name: "Growth Strategy Roadmap", path: "/digital-booster/seo" },
      { name: "Search Intent Mapping", path: "/digital-booster/seo" },
      { name: "Ad Spend ROI Optimization", path: "/digital-booster/google-ads" },
      { name: "PR & Media Outreach", path: "/digital-booster/branding" },
      { name: "Reputation Management", path: "/digital-booster/branding" },
      { name: "Retargeting Funnels", path: "/digital-booster/google-ads" },
      { name: "Monthly Performance Reports", path: "/contact" },
      { name: "Dedicated Growth Manager", path: "/contact" }
    ],
    allLinkText: "All Growth Solutions →",
    allLinkPath: "/digital-booster/seo"
  },
  {
    title: "Our Work",
    key: "our-work",
    sidebarTitle: "Software",
    sidebarDesc: "Custom CRM, ERP, and enterprise software platforms engineered with high availability and automated workflows.",
    sidebarLinks: [
      { name: "Custom Enterprise Software", path: "/software/erp" },
      { name: "Cloud SaaS Architecture", path: "/software/crm" },
      { name: "Multi-Location Workflows", path: "/software/billing" },
      { name: "Legacy Platform Migration", path: "/website-redesign" }
    ],
    proofTitle: "Enterprise Proven",
    proofDesc: "Managing payroll, inventory, and sales pipelines across 10,000+ daily active users. Read case studies.",
    proofLink: "/software/erp",
    topHeading: "ENTERPRISE SOFTWARE",
    topCol1: [
      { name: "CRM Software Systems", path: "/software/crm" },
      { name: "ERP Enterprise Platforms", path: "/software/erp" },
      { name: "HRMS & Payroll Portals", path: "/software/hrms" },
      { name: "Custom SaaS Development", path: "/software/erp" },
      { name: "Lead Pipeline Automation", path: "/software/crm" },
      { name: "Inventory & Warehouse POS", path: "/software/billing" },
      { name: "Multi-Tenant Cloud Apps", path: "/software/erp" },
      { name: "Workflow Automation Engines", path: "/software/crm" }
    ],
    topCol2: [
      { name: "Billing & Invoicing Software", path: "/software/billing" },
      { name: "GST Tax Invoicing Engines", path: "/software/billing" },
      { name: "School Management System", path: "/software/school-management" },
      { name: "Student & LMS Portals", path: "/software/school-management" },
      { name: "Hospital Management ERP", path: "/software/hospital-management" },
      { name: "OPD/IPD Queue Management", path: "/software/hospital-management" },
      { name: "Pharmacy & Stock Tracking", path: "/software/hospital-management" },
      { name: "Custom B2B Client Portals", path: "/software/erp" }
    ],
    enterpriseHeading: "CUSTOM SOLUTIONS",
    enterpriseCol: [
      { name: "Payment Gateway APIs", path: "/software/billing" },
      { name: "SMS & WhatsApp Notifiers", path: "/software/crm" },
      { name: "Role-Based Access Control", path: "/software/erp" },
      { name: "Real-Time Analytics Dashboards", path: "/software/crm" },
      { name: "High-Security Cloud Backups", path: "/hosting/cloud" },
      { name: "Custom Database Migration", path: "/software/erp" },
      { name: "Multi-Branch Data Sync", path: "/software/erp" },
      { name: "Enterprise 24/7 SLA Support", path: "/website-maintenance" }
    ],
    allLinkText: "All Software Solutions →",
    allLinkPath: "/software/crm"
  }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [hoveredMenuKey, setHoveredMenuKey] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu & reset hovered menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setHoveredMenuKey(null);
  }, [location.pathname]);

  // Scroll detection for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeMegaMenu = menuItems.find((m) => m.key === hoveredMenuKey);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm transition-all duration-300"
      onMouseLeave={() => setHoveredMenuKey(null)}
    >
      {/* Main Navbar Bar */}
      <nav className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        
        {/* Prominent Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group shrink-0"
        >
          {logo ? (
            <img
              src={logo}
              alt="CodeCrafter Logo"
              className={`w-auto object-contain transition-all duration-300 origin-left group-hover:scale-105 ${
                scrolled 
                  ? "h-9 sm:h-10 md:h-11" 
                  : "h-10 sm:h-11 md:h-12 lg:h-13"
              }`}
            />
          ) : (
            <div className="flex items-center gap-2.5 font-bold text-[#004658] tracking-tight shrink-0">
              <div
                className={`rounded-xl bg-[#004658] text-white flex items-center justify-center font-bold shadow-md shadow-[#004658]/20 transition-all duration-300 ${
                  scrolled ? "w-8 h-8 text-sm" : "w-10 h-10 text-base"
                }`}
              >
                CC
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#004658] uppercase whitespace-nowrap">
                CODECRAFTER
              </span>
            </div>
          )}
        </Link>

        {/* Desktop Menu Items - Crisp & Balanced */}
        <ul className="hidden lg:flex items-center gap-2 xl:gap-5 font-bold text-slate-950 text-[14px] xl:text-[14.5px] flex-1 justify-end mr-3 xl:mr-5 tracking-tight">
          {menuItems.map((menu) => {
            const isMenuHovered = hoveredMenuKey === menu.key;
            return (
              <li 
                key={menu.key} 
                className="relative py-2"
                onMouseEnter={() => setHoveredMenuKey(menu.key)}
              >
                <button className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer font-bold whitespace-nowrap ${
                  isMenuHovered ? "text-[#004658] bg-[#004658]/8" : "text-slate-950 hover:text-[#004658]"
                }`}>
                  <span>{menu.title}</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isMenuHovered ? "text-[#004658] rotate-180" : "text-slate-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA Action Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center font-extrabold text-white bg-[#004658] rounded-xl shadow-md shadow-[#004658]/20 hover:bg-[#003442] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 px-6 py-2.5 text-[13.5px] xl:text-[14px] whitespace-nowrap"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 text-[#004658] hover:bg-[#004658] hover:text-white flex items-center justify-center shrink-0 shadow-xs active:scale-95 transition-all cursor-pointer focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* EXACT BAIRESDEV-STYLE FULL-WIDTH MEGA MENU CONTAINER */}
      {activeMegaMenu && (
        <div 
          className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-t border-b border-slate-200 shadow-[0_25px_60px_rgba(0,0,0,0.12)] z-50 animate-in fade-in slide-in-from-top-1 duration-150 font-['Plus_Jakarta_Sans',sans-serif]"
          onMouseEnter={() => setHoveredMenuKey(activeMegaMenu.key)}
          onMouseLeave={() => setHoveredMenuKey(null)}
        >
          <div className="max-w-[1360px] mx-auto px-6 sm:px-8 py-6 flex gap-8 items-stretch">
            
            {/* Left Sidebar Box */}
            <div className="w-[260px] shrink-0 pr-6 border-r border-slate-200/80 flex flex-col justify-between text-left">
              <div>
                <h3 className="text-2xl sm:text-[26px] font-black text-slate-950 tracking-[-0.03em] mb-1.5 leading-tight font-['Outfit',sans-serif]">
                  {activeMegaMenu.sidebarTitle}
                  <span className="text-[#EA580C]">.</span>
                </h3>
                <p className="text-[13px] text-slate-600 font-medium leading-relaxed mb-4">
                  {activeMegaMenu.sidebarDesc}
                </p>

                <div className="space-y-1 pt-0.5">
                  {activeMegaMenu.sidebarLinks.map((sLink, sIdx) => {
                    const isActive = location.pathname === sLink.path;
                    return (
                      <Link
                        key={sIdx}
                        to={sLink.path}
                        className={`group/slink flex items-center justify-between px-3 py-1.5 rounded-xl transition-all ${
                          isActive 
                            ? "bg-[#004658]/8 text-[#004658] font-black" 
                            : "text-slate-950 font-black hover:bg-[#004658]/6 hover:text-[#004658]"
                        }`}
                      >
                        <span className="text-[14.5px] sm:text-[15px] font-black tracking-[-0.015em] group-hover/slink:translate-x-1 transition-transform">
                          {sLink.name}
                        </span>
                        <svg
                          className={`w-4 h-4 text-[#004658] transition-all duration-200 ${
                            isActive 
                              ? "opacity-100 translate-x-0" 
                              : "opacity-0 -translate-x-1 group-hover/slink:opacity-100 group-hover/slink:translate-x-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Proof Section */}
              <div className="pt-3.5 mt-3.5 border-t border-slate-200/80">
                <div className="text-[11.5px] font-extrabold uppercase tracking-wider text-[#004658] mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" />
                  <span>{activeMegaMenu.proofTitle}</span>
                </div>
                <p className="text-[12px] text-slate-500 leading-snug mb-1.5 font-normal">
                  {activeMegaMenu.proofDesc}
                </p>
                <Link
                  to={activeMegaMenu.proofLink}
                  className="group/proof inline-flex items-center text-[12px] font-bold text-[#004658] hover:underline"
                >
                  <span>Learn more</span>
                  <span className="ml-1 group-hover/proof:translate-x-0.5 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Right Multi-Column Content Area (3 Columns) */}
            <div className="flex-1 flex flex-col justify-between text-left">
              <div className="grid grid-cols-3 gap-6 sm:gap-8">
                
                {/* Column 1: Top Services Left */}
                <div>
                  <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-200">
                    <span className="w-2 h-2 rounded-xs bg-[#EA580C]" />
                    <h4 className="text-[11.5px] font-extrabold tracking-[0.14em] text-slate-500 uppercase">
                      {activeMegaMenu.topHeading}
                    </h4>
                  </div>
                  <div className="space-y-0.5">
                    {activeMegaMenu.topCol1.map((item, idx) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={idx}
                          to={item.path}
                          className={`group/link flex items-center justify-between px-3 py-1.5 rounded-xl transition-all ${
                            isActive
                              ? "bg-[#004658]/8 text-[#004658] font-bold"
                              : "text-slate-900 font-bold hover:bg-[#004658]/6 hover:text-[#004658]"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <svg
                              className={`w-3.5 h-3.5 text-[#004658] transition-all duration-200 shrink-0 ${
                                isActive
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0"
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-[14px] sm:text-[14.5px] font-bold tracking-[-0.015em] truncate group-hover/link:translate-x-0.5 transition-transform">
                              {item.name}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: Top Services Right */}
                <div>
                  <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-200 opacity-0 pointer-events-none">
                    <span className="w-2 h-2 rounded-xs bg-[#EA580C]" />
                    <h4 className="text-[11.5px] font-extrabold tracking-[0.14em] text-slate-500 uppercase">
                      {activeMegaMenu.topHeading}
                    </h4>
                  </div>
                  <div className="space-y-0.5">
                    {activeMegaMenu.topCol2.map((item, idx) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={idx}
                          to={item.path}
                          className={`group/link flex items-center justify-between px-3 py-1.5 rounded-xl transition-all ${
                            isActive
                              ? "bg-[#004658]/8 text-[#004658] font-bold"
                              : "text-slate-900 font-bold hover:bg-[#004658]/6 hover:text-[#004658]"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <svg
                              className={`w-3.5 h-3.5 text-[#004658] transition-all duration-200 shrink-0 ${
                                isActive
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0"
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-[14px] sm:text-[14.5px] font-bold tracking-[-0.015em] truncate group-hover/link:translate-x-0.5 transition-transform">
                              {item.name}
                            </span>
                          </div>
                          {item.badge && (
                            <span className="text-[9.5px] font-extrabold tracking-wide uppercase px-2 py-0.5 rounded-full bg-[#004658]/10 text-[#004658] shrink-0 ml-1.5">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3: Enterprise Focused */}
                <div>
                  <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-200">
                    <span className="w-2 h-2 rounded-xs bg-[#EA580C]" />
                    <h4 className="text-[11.5px] font-extrabold tracking-[0.14em] text-slate-500 uppercase">
                      {activeMegaMenu.enterpriseHeading}
                    </h4>
                  </div>
                  <div className="space-y-0.5">
                    {activeMegaMenu.enterpriseCol.map((item, idx) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={idx}
                          to={item.path}
                          className={`group/link flex items-center justify-between px-3 py-1.5 rounded-xl transition-all ${
                            isActive
                              ? "bg-[#004658]/8 text-[#004658] font-bold"
                              : "text-slate-900 font-bold hover:bg-[#004658]/6 hover:text-[#004658]"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <svg
                              className={`w-3.5 h-3.5 text-[#004658] transition-all duration-200 shrink-0 ${
                                isActive
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0"
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-[14px] sm:text-[14.5px] font-bold tracking-[-0.015em] truncate group-hover/link:translate-x-0.5 transition-transform">
                              {item.name}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Bottom "All Services →" Link */}
              <div className="pt-3.5 mt-3 border-t border-slate-100">
                <Link
                  to={activeMegaMenu.allLinkPath}
                  className="group/all inline-flex items-center gap-2 text-[14.5px] sm:text-[15px] font-black text-slate-950 hover:text-[#004658] transition-colors"
                >
                  <span>{activeMegaMenu.allLinkText}</span>
                  <span className="group-hover/all:translate-x-1.5 transition-transform font-bold">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 max-h-[80vh] overflow-y-auto px-5 py-4 space-y-3">
          <ul className="space-y-1.5">
            {menuItems.map((menu) => (
              <li key={menu.key} className="border-b border-slate-100 last:border-none pb-1.5">
                <button
                  onClick={() =>
                    setActiveMobileSubmenu(activeMobileSubmenu === menu.key ? null : menu.key)
                  }
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-bold text-slate-900 hover:bg-[#004658]/5 text-left text-base cursor-pointer"
                >
                  <span>{menu.title}</span>
                  <svg
                    className={`w-4 h-4 text-[#004658] transition-transform ${
                      activeMobileSubmenu === menu.key ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeMobileSubmenu === menu.key && (
                  <div className="pl-3 pr-2 py-2 space-y-2.5 bg-[#004658]/5 rounded-xl my-1 border border-[#004658]/10">
                    <div className="space-y-1">
                      <span className="text-xs font-black uppercase text-[#EA580C] tracking-wider block px-2.5 py-1">
                        {menu.topHeading}
                      </span>
                      {[...menu.topCol1, ...menu.topCol2, ...menu.enterpriseCol].slice(0, 10).map((sub, idx) => (
                        <Link
                          key={idx}
                          to={sub.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2.5 p-2 rounded-lg text-slate-900 font-bold hover:bg-white hover:text-[#004658] transition-colors"
                        >
                          <span className="text-[16px] font-bold block">{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="pt-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-3.5 font-bold text-white bg-[#004658] rounded-xl text-base shadow-lg hover:bg-[#003442]"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;