import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Blocks,
  Cloud,
  Code2,
  Database,
  Globe2,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| PROJECT IMAGES
|--------------------------------------------------------------------------
| Replace these paths with your actual image filenames.
| Example:
| src/assets/images/ridgeline.png
| src/assets/images/upema.png
| src/assets/images/united-infracity.png
| src/assets/images/dss-infrabuild.png
|
*/

import ridgelineImg from "../../../assets/images/image.png";
import upemaImg from "../../../assets/images/image3.png";
import unitedInfraImg from "../../../assets/images/image2.png";
import dssImg from "../../../assets/images/image4.png";

/*
|--------------------------------------------------------------------------
| ANIMATIONS
|--------------------------------------------------------------------------
*/

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/*
|--------------------------------------------------------------------------
| PROJECT DATA
|--------------------------------------------------------------------------
*/

const projects = [
  {
    number: "01",
    category: "E-COMMERCE WEB EXPERIENCE",
    title: "Ridgeline Leather",
    subtitle: "Premium E-Commerce Website",
    description:
      "A polished commerce experience built to present products with a clean interface, responsive layouts and a smooth customer journey across devices.",
    image: ridgelineImg,
    technologies: [
      "React",
      "Responsive UI",
      "E-Commerce",
      "API Ready",
    ],
    link: "https://ridgeline-leather.vercel.app/",
  },

  {
    number: "02",
    category: "DIGITAL PLATFORM",
    title: "UPEMA",
    subtitle: "Professional Association Website",
    description:
      "A structured digital platform designed to present organizational information, services and content through a modern and responsive web experience.",
    image: upemaImg,
    technologies: [
      "React",
      "Responsive Design",
      "Content UI",
      "Deployment",
    ],
    link: "https://upema.vercel.app/",
  },

  {
    number: "03",
    category: "REAL ESTATE WEB PLATFORM",
    title: "United Infracity",
    subtitle: "Real Estate Digital Experience",
    description:
      "A modern real-estate experience focused on project presentation, visual storytelling and clear navigation for property-focused audiences.",
    image: unitedInfraImg,
    technologies: [
      "React",
      "Real Estate UI",
      "Responsive",
      "Web Experience",
    ],
    link: "https://united-infracity.vercel.app/",
  },

  {
    number: "04",
    category: "CORPORATE WEB EXPERIENCE",
    title: "DSS Infrabuild",
    subtitle: "Infrastructure Company Website",
    description:
      "A corporate website built to communicate infrastructure capabilities, projects and services through a professional digital presence.",
    image: dssImg,
    technologies: [
      "React",
      "Corporate UI",
      "Responsive",
      "Cloud Deployment",
    ],
    link: "https://dss-infrabuild-pvt-ltd.vercel.app/",
  },
];

/*
|--------------------------------------------------------------------------
| BROWSER MOCKUP
|--------------------------------------------------------------------------
*/

const BrowserMockup = ({ image, title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative overflow-hidden rounded-[24px] border border-[#0A5364]/15 bg-white shadow-[0_30px_80px_rgba(13,64,80,0.12)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_40px_100px_rgba(13,64,80,0.18)]">

        {/* Browser Topbar */}
        <div className="flex h-11 items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 sm:h-12 sm:px-5">

          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>

          <div className="flex h-7 flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-3 text-[9px] font-medium text-slate-400 sm:text-[10px]">
            {title.toLowerCase().replace(/\s+/g, "-")}.vercel.app
          </div>

          <ArrowUpRight
            size={15}
            className="text-[#087F99]"
          />

        </div>

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#EEF7F8]">

          <img
            src={image}
            alt={`${title} web development project`}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#063F4C]/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">

            <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#063F4C] shadow-xl">
              View Live Project
              <ArrowUpRight size={17} />
            </div>

          </div>

        </div>

      </div>
    </a>
  );
};

/*
|--------------------------------------------------------------------------
| MAIN COMPONENT
|--------------------------------------------------------------------------
*/

const FeaturedProjects = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFC] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#004658 1.2px, transparent 1.2px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-cyan-300/15 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-cyan-200/20 blur-[130px]" />


      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px]">


        {/* ========================================================
            HEADER
        ========================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >

          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-white px-4 py-2 shadow-sm">

            <span className="h-2 w-2 rounded-full bg-[#00CFE8]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#004658] sm:text-[11px]">
              FEATURED WEB PROJECTS
            </span>

          </div>


          {/* Heading */}

          <h2 className="text-4xl font-black leading-[1.04] tracking-[-2px] text-[#0B1B2C] sm:text-5xl lg:text-6xl">

            Web solutions built for{" "}

            <span className="bg-gradient-to-r from-[#004658] via-[#007F99] to-[#00A3C4] bg-clip-text text-transparent">
              real businesses.
            </span>

          </h2>


          {/* Description */}

          <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base lg:text-[17px]">

            Explore selected websites and digital experiences engineered
            with modern interfaces, scalable architecture and production-ready
            web technologies.

          </p>

        </motion.div>


        {/* ========================================================
            PROJECTS
        ========================================================= */}

        <div className="space-y-28 lg:space-y-36">

          {projects.map((project, index) => {

            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={project.number}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-20"
              >

                {/* =================================================
                    PROJECT IMAGE
                ================================================= */}

                <motion.div
                  variants={reverse ? fadeRight : fadeLeft}
                  className={`relative lg:col-span-7 ${
                    reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >

                  {/* Number */}

                  <div className="absolute -right-3 -top-5 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#063F4C] text-xs font-black text-white shadow-[0_16px_35px_rgba(3,63,76,0.25)] sm:-right-4 sm:-top-6 sm:h-16 sm:w-16">

                    {project.number}

                  </div>


                  {/* Browser */}

                  <BrowserMockup
                    image={project.image}
                    title={project.title}
                    link={project.link}
                  />

                </motion.div>


                {/* =================================================
                    PROJECT CONTENT
                ================================================= */}

                <motion.div
                  variants={reverse ? fadeLeft : fadeRight}
                  className={`lg:col-span-5 ${
                    reverse ? "lg:order-1" : "lg:order-2"
                  }`}
                >

                  {/* Category */}

                  <div className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#087F99] sm:text-[11px]">
                    {project.category}
                  </div>


                  {/* Title */}

                  <h3 className="text-4xl font-black tracking-[-1.5px] text-[#0B1B2C] sm:text-5xl">
                    {project.title}
                  </h3>


                  {/* Subtitle */}

                  <p className="mt-3 text-base font-semibold text-[#345164] sm:text-lg">
                    {project.subtitle}
                  </p>


                  {/* Description */}

                  <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {project.description}
                  </p>


                  {/* Tech */}

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#D6E4E8] bg-white px-3 py-2 text-[10px] font-bold text-[#315466] shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>


                  {/* Live Link */}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#006D84]"
                  >

                    <span>View Live Project</span>

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />

                  </a>

                </motion.div>

              </motion.article>
            );
          })}

        </div>


        {/* ========================================================
            FULL-STACK STRIP
        ========================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 overflow-hidden rounded-[30px] border border-[#004658]/15 bg-white shadow-[0_20px_60px_rgba(16,58,73,0.06)]"
        >

          <div className="relative p-6 sm:p-8 lg:p-10">

            {/* Glow */}

            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-64 w-64 rounded-full bg-cyan-200/30 blur-[100px]" />


            {/* Header */}

            <div className="relative mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <div>

                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EAF7F8] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#004658]">
                  <Blocks size={13} />
                  Complete Web Architecture
                </div>

                <h3 className="text-2xl font-black tracking-[-1px] text-[#0B1B2C] sm:text-3xl">
                  More than a website.
                  <span className="text-[#087F99]">
                    {" "}A complete web solution.
                  </span>
                </h3>

              </div>


              <p className="max-w-md text-sm leading-6 text-slate-500">
                We connect the interface users interact with to the systems,
                data and infrastructure that power the experience.
              </p>

            </div>


            {/* Architecture */}

            <div className="relative">

              <div className="hidden h-px bg-[#CFE5E9] lg:absolute lg:left-[9%] lg:right-[9%] lg:top-[34px] lg:block" />

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

                {[
                  {
                    title: "Web Interface",
                    text: "React / Next.js",
                    icon: Globe2,
                  },
                  {
                    title: "API Layer",
                    text: "REST / GraphQL",
                    icon: Code2,
                  },
                  {
                    title: "Backend",
                    text: "Node / Python",
                    icon: Server,
                  },
                  {
                    title: "Database",
                    text: "MongoDB / SQL",
                    icon: Database,
                  },
                  {
                    title: "Cloud",
                    text: "AWS / Vercel",
                    icon: Cloud,
                  },
                ].map((item) => {

                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -6 }}
                      className="relative z-10 rounded-2xl border border-slate-200 bg-[#FBFDFD] p-5 text-center transition-all duration-300 hover:border-[#004658]/20 hover:shadow-lg"
                    >

                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#004658]/8 text-[#004658]">
                        <Icon size={20} />
                      </div>

                      <h4 className="mt-4 text-sm font-extrabold text-[#0B1B2C]">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-[10px] font-medium text-slate-500">
                        {item.text}
                      </p>

                    </motion.div>
                  );
                })}

              </div>

            </div>


            {/* Bottom Benefits */}

            <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-7">

              {[
                {
                  icon: Zap,
                  text: "Performance Focused",
                },
                {
                  icon: ShieldCheck,
                  text: "Secure Architecture",
                },
                {
                  icon: Blocks,
                  text: "Scalable Systems",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold text-[#315466]"
                  >
                    <Icon size={14} className="text-[#087F99]" />
                    {item.text}
                  </div>
                );
              })}

            </div>

          </div>

        </motion.div>


        {/* ========================================================
            CTA
        ========================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-16 max-w-4xl text-center"
        >

          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#07819A]">
            Have a web project in mind?
          </p>

          <h3 className="mt-3 text-2xl font-black tracking-tight text-[#0B1B2C] sm:text-3xl">
            Let's turn your idea into a complete digital solution.
          </h3>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#063F4C] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_15px_35px_rgba(3,63,76,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087F99]"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </a>

        </motion.div>

      </div>

    </section>
  );
};

export default FeaturedProjects;