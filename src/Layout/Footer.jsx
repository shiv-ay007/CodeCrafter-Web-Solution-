import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/CodeCrafterlogo.webp"

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#e3edf2] via-[#dbe7ed] to-[#d2e1e8] text-slate-800 pt-10 sm:pt-12 lg:pt-14 border-t-2 border-slate-300/80 overflow-hidden">
      
      {/* Background Soft Ambient Radial Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] pointer-events-none rounded-full opacity-35 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 70, 88, 0.18) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer 5-Column High-Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12">
          
          {/* Column 1: Logo, Brand Text, Presence & Badges (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5 text-left">
            <Link to="/" className="inline-block group">
              {logo ? (
                <img 
                  src={logo} 
                  alt="CodeCrafter Logo" 
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" 
                />
              ) : (
                <div className="flex items-center gap-2 font-black text-[#004658] text-lg uppercase tracking-tight">
                  <div className="w-8 h-8 rounded-xl bg-[#004658] text-white flex items-center justify-center font-black text-xs">
                    CC
                  </div>
                  <span>CODECRAFTER</span>
                </div>
              )}
            </Link>

            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium max-w-sm">
              We engineer mission-critical digital products, dedicated squads, and high-performance cloud architectures.
            </p>

            {/* Global Regional Presence Badges */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/80 border border-slate-300 text-slate-700 text-[11px] font-bold shadow-2xs">
                <span>🇮🇳</span> India Hub
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/80 border border-slate-300 text-slate-700 text-[11px] font-bold shadow-2xs">
                <span>🇺🇸</span> USA
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/80 border border-slate-300 text-slate-700 text-[11px] font-bold shadow-2xs">
                <span>🇬🇧</span> UK
              </span>
            </div>

            {/* Schedule a Free Call Pill Button */}
            <div className="pt-1">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2.5 p-1.5 pr-4 rounded-xl bg-white border border-slate-300 shadow-2xs hover:border-[#004658] hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#004658] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#003442] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-[#004658] flex items-center gap-1">
                  <span>Schedule a Free Call</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation & Company (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#004658] border-b border-[#004658]/20 pb-1">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] font-semibold text-slate-700">
              <li><Link to="/" className="hover:text-[#004658] transition-colors">Home Overview</Link></li>
              <li><Link to="/about" className="hover:text-[#004658] transition-colors">About Agency</Link></li>
              <li><Link to="/team" className="hover:text-[#004658] transition-colors">Leadership &amp; Squads</Link></li>
              <li>
                <Link to="/careers" className="hover:text-[#004658] transition-colors inline-flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-extrabold uppercase">Hiring</span>
                </Link>
              </li>
              <li><Link to="/about" className="hover:text-[#004658] transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-[#004658] transition-colors">Client Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-[#004658] transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions & Services with Chevrons (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#004658] border-b border-[#004658]/20 pb-1">
              SOLUTIONS &amp; SERVICES
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] font-semibold text-slate-700">
              <li>
                <Link to="/web-development" className="flex items-center justify-between group hover:text-[#004658] transition-colors">
                  <span>Web App Development</span>
                  <span className="text-slate-400 group-hover:text-[#004658] group-hover:translate-x-0.5 transition-all text-xs font-bold">›</span>
                </Link>
              </li>
              <li>
                <Link to="/web-design" className="flex items-center justify-between group hover:text-[#004658] transition-colors">
                  <span>UI/UX &amp; Product Design</span>
                  <span className="text-slate-400 group-hover:text-[#004658] group-hover:translate-x-0.5 transition-all text-xs font-bold">›</span>
                </Link>
              </li>
              <li>
                <Link to="/e-commerce" className="flex items-center justify-between group hover:text-[#004658] transition-colors">
                  <span>Enterprise SaaS &amp; ERP</span>
                  <span className="text-slate-400 group-hover:text-[#004658] group-hover:translate-x-0.5 transition-all text-xs font-bold">›</span>
                </Link>
              </li>
              <li>
                <Link to="/app-studio/android" className="flex items-center justify-between group hover:text-[#004658] transition-colors">
                  <span>Mobile Apps (iOS &amp; Android)</span>
                  <span className="text-slate-400 group-hover:text-[#004658] group-hover:translate-x-0.5 transition-all text-xs font-bold">›</span>
                </Link>
              </li>
              <li>
                <Link to="/web-development" className="flex items-center justify-between group hover:text-[#004658] transition-colors">
                  <span>AI &amp; Machine Learning</span>
                  <span className="text-slate-400 group-hover:text-[#004658] group-hover:translate-x-0.5 transition-all text-xs font-bold">›</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-booster/seo" className="flex items-center justify-between group hover:text-[#004658] transition-colors">
                  <span>Cloud DevOps &amp; Security</span>
                  <span className="text-slate-400 group-hover:text-[#004658] group-hover:translate-x-0.5 transition-all text-xs font-bold">›</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-booster/seo" className="flex items-center justify-between group hover:text-[#004658] transition-colors">
                  <span>SEO &amp; Growth Marketing</span>
                  <span className="text-slate-400 group-hover:text-[#004658] group-hover:translate-x-0.5 transition-all text-xs font-bold">›</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Core Tech Stack (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#004658] border-b border-[#004658]/20 pb-1">
              TECH STACK
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-[12.5px] font-semibold text-slate-600">
              <li className="hover:text-[#004658] transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" /> React &amp; Next.js
              </li>
              <li className="hover:text-[#004658] transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" /> Node.js &amp; NestJS
              </li>
              <li className="hover:text-[#004658] transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" /> Python &amp; Django
              </li>
              <li className="hover:text-[#004658] transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" /> Flutter &amp; iOS Native
              </li>
              <li className="hover:text-[#004658] transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" /> PostgreSQL &amp; Redis
              </li>
              <li className="hover:text-[#004658] transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004658]" /> AWS, Docker &amp; K8s
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter & Social Connect (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#004658] border-b border-[#004658]/20 pb-1">
              STAY CONNECTED
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Subscribe for exclusive engineering playbooks &amp; tech updates.
            </p>

            {/* Newsletter Input Form */}
            <form onSubmit={handleSubscribe} className="space-y-1.5">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 pr-9 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#004658] focus:ring-1 focus:ring-[#004658] shadow-2xs"
                />
                <button
                  type="submit"
                  title="Subscribe"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-[#004658] text-white flex items-center justify-center text-xs hover:bg-[#003442] transition-colors cursor-pointer"
                >
                  →
                </button>
              </div>
              {subscribed && (
                <div className="text-[10.5px] text-emerald-800 font-bold">
                  ✓ Thank you for subscribing!
                </div>
              )}
            </form>

            {/* Circular Social Buttons */}
            <div className="flex items-center gap-2 pt-1">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-[#004658] hover:text-white hover:border-[#004658] transition-all shadow-2xs"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Twitter/X"
                className="w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-[#004658] hover:text-white hover:border-[#004658] transition-all shadow-2xs"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
                className="w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-[#004658] hover:text-white hover:border-[#004658] transition-all shadow-2xs"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram"
                className="w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-[#004658] hover:text-white hover:border-[#004658] transition-all shadow-2xs"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            <div className="pt-0.5">
              <Link 
                to="/contact" 
                className="text-xs font-bold text-[#004658] hover:text-[#002f3c] flex items-center gap-1 group"
              >
                <span>Schedule Consultation</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Solid High-Contrast Dark Bottom Strip */}
      <div className="bg-[#003442] text-slate-300 py-4 sm:py-4.5 border-t border-teal-900/40">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium">
          <div>
            © {new Date().getFullYear()} <span className="font-bold text-white">Codecrafter WEB Solution</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-slate-300">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer