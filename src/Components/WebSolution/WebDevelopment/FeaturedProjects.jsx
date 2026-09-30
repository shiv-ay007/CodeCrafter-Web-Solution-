import React from "react";
import { motion } from "framer-motion";
import {
    Accessibility,
    ArrowRight,
    Boxes,
    Code2,
    Component,
    Layers3,
    Monitor,
    MousePointer2,
    Palette,
    PanelsTopLeft,
    Rocket,
    Smartphone,
    Sparkles,
    Tablet,
    TabletSmartphone,
    Zap,
} from "lucide-react";

// import frontendExperienceImg from "../../../assets/images/featured-img.png";


// ======================================================
// COMMON ANIMATION
// ======================================================

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

const scaleReveal = {
    hidden: {
        opacity: 0,
        scale: 0.94,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: "easeOut",
        },
    },
};


// ======================================================
// DATA
// ======================================================

const capabilities = [
    {
        title: "Responsive Web Development",
        description:
            "Layouts that adapt naturally across desktop, tablet and mobile screens.",
        icon: Monitor,
        className: "lg:col-span-2 lg:row-span-2",
    },
    {
        title: "React Development",
        description:
            "Reusable components and scalable frontend architecture.",
        icon: Code2,
        className: "lg:col-span-1",
    },
    {
        title: "Interactive UI",
        description:
            "Menus, modals, filters, forms and dynamic interactions.",
        icon: MousePointer2,
        className: "lg:col-span-1",
    },
    {
        title: "UI Implementation",
        description:
            "Turning visual designs into accurate and functional interfaces.",
        icon: Palette,
        className: "lg:col-span-1",
    },
    {
        title: "Motion & Animation",
        description:
            "Micro-interactions and subtle motion that improve usability.",
        icon: Sparkles,
        className: "lg:col-span-1",
    },
    {
        title: "Accessibility & Usability",
        description:
            "Interfaces designed to remain clear, intuitive and usable.",
        icon: Accessibility,
        className: "lg:col-span-2",
    },
];


// ======================================================
// MAIN COMPONENT
// ======================================================

const FeaturedProjects = () => {
    return (
        <div className="w-full overflow-hidden">

            {/* ==================================================
          SECTION 01
          EVERYTHING USERS SEE
      ================================================== */}

            <section className="relative bg-[#FBFDFD] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

                {/* Background */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "radial-gradient(#004658 1.3px, transparent 1.3px)",
                        backgroundSize: "30px 30px",
                    }}
                />

                <div className="absolute left-[-150px] top-[20%] h-[380px] w-[380px] rounded-full bg-cyan-300/15 blur-[120px]" />

                <div className="relative mx-auto max-w-[1360px]">

                    {/* Header */}

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto mb-16 max-w-4xl text-center"
                    >
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-[#004658]/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#004658]">
                            <span className="h-2 w-2 rounded-full bg-[#00D8FF]" />
                            Frontend Experience
                        </div>

                        <h2 className="text-4xl font-black leading-[1.05] tracking-[-1.8px] text-slate-900 sm:text-5xl lg:text-6xl">
                            Everything users{" "}
                            <span className="bg-gradient-to-r from-[#004658] via-[#00738e] to-[#00A3C4] bg-clip-text text-transparent">
                                see, touch & experience.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
                            Frontend is where design becomes interaction — from navigation
                            and layouts to animations, forms and responsive experiences.
                        </p>
                    </motion.div>


                    {/* Visual + Content */}

                    <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">

                        {/* LEFT VISUAL */}

                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="relative lg:col-span-7"
                        >

                            {/* Glow */}

                            <div className="absolute inset-0 -z-10 rounded-[40px] bg-cyan-300/20 blur-3xl" />

                            {/* Browser */}

                            <div className="overflow-hidden rounded-[28px] border border-[#004658]/15 bg-white shadow-[0_35px_90px_rgba(0,70,88,0.14)]">

                                {/* Browser Header */}

                                <div className="flex h-11 items-center justify-between border-b border-slate-200 bg-slate-50/90 px-4 sm:h-12 sm:px-5">

                                    <div className="flex gap-2">
                                        <span className="h-3 w-3 rounded-full bg-rose-400" />
                                        <span className="h-3 w-3 rounded-full bg-amber-400" />
                                        <span className="h-3 w-3 rounded-full bg-emerald-400" />
                                    </div>

                                    <div className="flex h-7 max-w-[300px] flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-[9px] font-mono text-slate-500 sm:text-[10px]">
                                        codecrafter.io/frontend
                                    </div>

                                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#004658] sm:text-[10px]">
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                                        LIVE UI
                                    </div>

                                </div>


                                {/* Main UI */}

                                <div className="relative aspect-[16/10] overflow-hidden bg-[#eef7f8]">

                                    <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f2fbfc] to-[#dff7fa]" />

                                    {/* Navigation */}

                                    <div className="absolute left-[6%] right-[6%] top-[7%] flex items-center justify-between">

                                        <div className="flex items-center gap-2">
                                            <div className="h-7 w-7 rounded-xl bg-[#004658]" />
                                            <div className="h-2 w-20 rounded-full bg-slate-300 sm:w-28" />
                                        </div>

                                        <div className="hidden gap-2 sm:flex">
                                            <span className="h-2 w-10 rounded-full bg-slate-300" />
                                            <span className="h-2 w-12 rounded-full bg-slate-300" />
                                            <span className="h-2 w-10 rounded-full bg-slate-300" />
                                        </div>

                                        <div className="h-8 w-20 rounded-full bg-[#004658]" />

                                    </div>


                                    {/* Hero */}

                                    <div className="absolute left-[7%] top-[26%] max-w-[48%]">

                                        <div className="mb-4 h-3 w-20 rounded-full bg-[#00A3C4]/40 sm:w-28" />

                                        <div className="space-y-2">
                                            <div className="h-5 w-full rounded-md bg-[#0b1b2c]" />
                                            <div className="h-5 w-[78%] rounded-md bg-[#00738e]" />
                                        </div>

                                        <div className="mt-5 h-3 w-[85%] rounded-full bg-slate-300" />
                                        <div className="mt-2 h-3 w-[70%] rounded-full bg-slate-300" />

                                        <div className="mt-6 flex gap-2">
                                            <div className="h-9 w-24 rounded-full bg-[#004658]" />
                                            <div className="h-9 w-24 rounded-full border border-slate-300 bg-white" />
                                        </div>

                                    </div>


                                    {/* Floating UI Panel */}

                                    <motion.div
                                        animate={{
                                            y: [0, -7, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute right-[7%] top-[27%] w-[30%] rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur-md"
                                    >

                                        <div className="mb-3 flex items-center justify-between">
                                            <div className="h-2 w-16 rounded-full bg-slate-300" />
                                            <Zap
                                                size={14}
                                                className="text-[#00A3C4]"
                                            />
                                        </div>

                                        <div className="h-2 w-full rounded-full bg-slate-100">
                                            <div className="h-full w-[84%] rounded-full bg-[#00B981]" />
                                        </div>

                                        <div className="mt-3 flex gap-2">
                                            <div className="h-5 flex-1 rounded-lg bg-[#E7F7F9]" />
                                            <div className="h-5 w-10 rounded-lg bg-[#004658]" />
                                        </div>

                                    </motion.div>


                                    {/* Component Cards */}

                                    <div className="absolute bottom-[8%] left-[7%] right-[7%] grid grid-cols-3 gap-2">

                                        {[1, 2, 3].map((item) => (
                                            <motion.div
                                                key={item}
                                                whileHover={{ y: -5 }}
                                                className="rounded-xl border border-white bg-white/85 p-3 shadow-sm backdrop-blur-sm"
                                            >
                                                <div className="mb-2 h-2 w-9 rounded-full bg-[#00A3C4]" />
                                                <div className="h-2 w-[75%] rounded-full bg-slate-300" />
                                                <div className="mt-2 h-2 w-[90%] rounded-full bg-slate-200" />
                                            </motion.div>
                                        ))}

                                    </div>

                                </div>
                            </div>


                            {/* Floating Tags */}

                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -left-3 top-[24%] flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold text-[#004658] shadow-lg sm:-left-5"
                            >
                                <Code2 size={13} />
                                React
                            </motion.div>


                            <motion.div
                                animate={{ y: [0, 5, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -right-3 top-[33%] flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold text-[#004658] shadow-lg sm:-right-5"
                            >
                                <MousePointer2 size={13} />
                                Interactive UI
                            </motion.div>


                            <motion.div
                                animate={{ y: [0, -4, 0] }}
                                transition={{
                                    duration: 3.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -bottom-4 left-[14%] flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold text-[#004658] shadow-lg"
                            >
                                <Boxes size={13} />
                                Component Based
                            </motion.div>

                        </motion.div>


                        {/* RIGHT CONTENT */}

                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="lg:col-span-5"
                        >

                            <div className="space-y-4">

                                {[
                                    {
                                        icon: PanelsTopLeft,
                                        title: "Web Interfaces",
                                        text: "Structured layouts designed for clarity and easy navigation.",
                                    },
                                    {
                                        icon: MousePointer2,
                                        title: "Interactive Experiences",
                                        text: "Menus, forms, sliders, modals and micro-interactions that feel natural.",
                                    },
                                    {
                                        icon: Component,
                                        title: "Reusable Components",
                                        text: "Modular UI building blocks that keep products consistent and scalable.",
                                    },
                                    {
                                        icon: TabletSmartphone,
                                        title: "Responsive Experiences",
                                        text: "Interfaces that adapt seamlessly across desktop, tablet and mobile.",
                                    },
                                ].map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            key={item.title}
                                            whileHover={{ x: 6 }}
                                            transition={{ duration: 0.25 }}
                                            className="group flex gap-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm"
                                        >
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#004658]/8 text-[#004658] transition-all duration-300 group-hover:bg-[#004658] group-hover:text-white">
                                                <Icon size={21} />
                                            </div>

                                            <div>
                                                <h3 className="text-base font-extrabold text-slate-900">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* ==================================================
          SECTION 02
          FRONTEND EXPERIENCE IMAGE
      ================================================== */}

            <section className="relative bg-[#F4F9FA] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

                <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-[140px]" />

                <div className="relative mx-auto max-w-[1250px]">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto mb-14 max-w-3xl text-center"
                    >

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#004658]">
                            <Sparkles size={13} />
                            Frontend Experience
                        </div>

                        <h2 className="text-4xl font-black tracking-[-1.7px] text-slate-900 sm:text-5xl lg:text-6xl">
                            Interfaces users can see.
                            <br />
                            <span className="bg-gradient-to-r from-[#004658] via-[#00738e] to-[#00A3C4] bg-clip-text text-transparent">
                                Experiences they can feel.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                            Every interaction matters. We turn ideas and visual designs into
                            intuitive, responsive and production-ready frontend experiences.
                        </p>

                    </motion.div>


                    {/* Main Generated Image */}

                    <motion.div
                        variants={scaleReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="relative mx-auto max-w-6xl"
                    >

                        <div className="absolute inset-0 -z-10 rounded-[40px] bg-cyan-300/25 blur-3xl" />

                        <div className="overflow-hidden rounded-[28px] border border-[#004658]/15 bg-white shadow-[0_35px_100px_rgba(0,70,88,0.15)]">

                           

                            <img
                                src="../../../assets/images/featured-img.png"
                                alt="Frontend development visualization showing UI, React and responsive design"
                                className="w-full h-auto object-contain"
                            />

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* ==================================================
          SECTION 03
          ONE INTERFACE. EVERY SCREEN.
      ================================================== */}

            <section className="relative bg-[#FBFDFD] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

                <div className="relative mx-auto max-w-[1360px]">

                    {/* Header */}

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto mb-20 max-w-4xl text-center"
                    >

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-[#004658]/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#004658]">
                            <TabletSmartphone size={14} />
                            Responsive Engineering
                        </div>

                        <h2 className="text-4xl font-black tracking-[-1.8px] text-slate-900 sm:text-5xl lg:text-6xl">
                            One interface.
                            <br />
                            <span className="text-[#087F99]">
                                Every screen.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                            A great frontend experience should feel consistent whether your
                            users are on a desktop, tablet or mobile device.
                        </p>

                    </motion.div>


                    {/* Device Composition */}

                    <div className="relative mx-auto max-w-6xl pb-10">

                        {/* Decorative Glow */}

                        <div className="absolute left-1/2 top-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-[120px]" />


                        {/* Desktop */}

                        <motion.div
                            variants={scaleReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative z-10 mx-auto w-[88%]"
                        >

                            <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_30px_70px_rgba(16,58,73,0.15)]">

                                {/* Top bar */}

                                <div className="flex h-10 items-center gap-2 border-b border-slate-200 bg-slate-50 px-4">

                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                                    <div className="ml-3 h-5 max-w-sm flex-1 rounded-full border border-slate-200 bg-white" />

                                </div>


                                {/* Desktop UI */}

                                <div className="aspect-[16/8] bg-gradient-to-br from-[#f4fbfc] to-[#e8f8fa] p-5 sm:p-8">

                                    <div className="grid h-full grid-cols-12 gap-4">

                                        <div className="col-span-3 rounded-2xl border border-white bg-white/80 p-4">
                                            <div className="mb-5 h-7 w-24 rounded-lg bg-[#004658]" />

                                            <div className="space-y-3">
                                                <div className="h-3 rounded-full bg-slate-200" />
                                                <div className="h-3 rounded-full bg-slate-200" />
                                                <div className="h-3 w-[80%] rounded-full bg-slate-200" />
                                                <div className="h-3 w-[70%] rounded-full bg-slate-200" />
                                            </div>
                                        </div>

                                        <div className="col-span-9 rounded-2xl border border-white bg-white/80 p-5">

                                            <div className="h-5 w-48 rounded-md bg-[#0b1b2c]" />

                                            <div className="mt-5 grid grid-cols-3 gap-3">
                                                {[1, 2, 3].map((item) => (
                                                    <div
                                                        key={item}
                                                        className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                                                    >
                                                        <div className="mb-4 h-2 w-12 rounded-full bg-[#00A3C4]" />
                                                        <div className="h-3 rounded-full bg-slate-300" />
                                                        <div className="mt-2 h-3 w-[75%] rounded-full bg-slate-200" />
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-4 h-20 rounded-xl border border-slate-200 bg-white" />

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Desktop label */}

                            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[#004658] shadow-lg">
                                <Monitor size={14} />
                                Desktop
                            </div>

                        </motion.div>


                        {/* Tablet */}

                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="absolute bottom-0 left-[3%] z-20 w-[29%] sm:left-[7%] sm:w-[25%]"
                        >

                            <div className="rounded-[22px] border-[7px] border-slate-800 bg-white shadow-[0_25px_55px_rgba(16,58,73,0.20)]">

                                <div className="overflow-hidden rounded-[13px] bg-gradient-to-br from-[#f3fbfc] to-[#dff7fa] p-3">

                                    <div className="mb-3 flex justify-between">
                                        <div className="h-2 w-14 rounded-full bg-[#004658]" />
                                        <div className="h-2 w-7 rounded-full bg-slate-300" />
                                    </div>

                                    <div className="rounded-lg bg-white p-3">

                                        <div className="h-3 w-[65%] rounded-full bg-[#0b1b2c]" />

                                        <div className="mt-3 h-2 rounded-full bg-slate-200" />
                                        <div className="mt-2 h-2 w-[70%] rounded-full bg-slate-200" />

                                        <div className="mt-4 grid grid-cols-2 gap-2">
                                            <div className="h-10 rounded-lg bg-[#E8F7F9]" />
                                            <div className="h-10 rounded-lg bg-[#F4F7F8]" />
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="mt-3 text-center text-[9px] font-bold uppercase tracking-widest text-[#004658]">
                                Tablet
                            </div>

                        </motion.div>


                        {/* Mobile */}

                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="absolute bottom-0 right-[4%] z-30 w-[16%] sm:right-[8%] sm:w-[14%]"
                        >

                            <div className="rounded-[24px] border-[6px] border-slate-800 bg-white p-1 shadow-[0_25px_55px_rgba(16,58,73,0.25)]">

                                <div className="overflow-hidden rounded-[17px] bg-gradient-to-b from-[#f5fcfd] to-[#e2f7f9]">

                                    <div className="mx-auto mt-2 h-1 w-7 rounded-full bg-slate-400" />

                                    <div className="px-2 pb-3 pt-4">

                                        <div className="h-3 w-[75%] rounded-full bg-[#0b1b2c]" />

                                        <div className="mt-3 h-2 rounded-full bg-slate-200" />
                                        <div className="mt-2 h-2 w-[80%] rounded-full bg-slate-200" />

                                        <div className="mt-4 h-12 rounded-lg bg-white" />
                                        <div className="mt-2 h-12 rounded-lg bg-white" />

                                    </div>

                                </div>

                            </div>

                            <div className="mt-3 text-center text-[8px] font-bold uppercase tracking-wider text-[#004658]">
                                Mobile
                            </div>

                        </motion.div>


                        {/* Floating Tags */}

                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute right-[10%] top-[10%] hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold text-[#004658] shadow-md sm:flex"
                        >
                            <Zap size={13} />
                            Responsive
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute left-[9%] top-[25%] hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold text-[#004658] shadow-md sm:flex"
                        >
                            <Smartphone size={13} />
                            Mobile First
                        </motion.div>

                    </div>


                    {/* Bottom Labels */}

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-20 flex flex-wrap items-center justify-center gap-3"
                    >

                        {[
                            "Responsive",
                            "Mobile First",
                            "Adaptive Layout",
                            "Touch Friendly",
                        ].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-[#004658]/15 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#004658] shadow-sm"
                            >
                                {item}
                            </span>
                        ))}

                    </motion.div>

                </div>

            </section>


            {/* ==================================================
          SECTION 04
          FROM DESIGN TO BROWSER
      ================================================== */}

            <section className="relative bg-[#F4F9FA] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

                <div className="relative mx-auto max-w-[1250px]">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto mb-16 max-w-3xl text-center"
                    >

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#004658]">
                            <Layers3 size={13} />
                            Frontend Workflow
                        </div>

                        <h2 className="text-4xl font-black tracking-[-1.7px] text-slate-900 sm:text-5xl lg:text-6xl">
                            From design to a{" "}
                            <span className="text-[#087F99]">
                                living interface.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                            We transform visual concepts into reusable components,
                            responsive layouts and production-ready frontend experiences.
                        </p>

                    </motion.div>


                    {/* Process */}

                    <div className="relative">

                        {/* Connecting line */}

                        <div className="absolute left-[7%] right-[7%] top-12 hidden h-px bg-gradient-to-r from-[#004658]/10 via-[#00A3C4]/60 to-[#004658]/10 lg:block" />


                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">

                            {[
                                {
                                    number: "01",
                                    title: "Figma",
                                    subtitle: "Visual Design",
                                    icon: Palette,
                                },
                                {
                                    number: "02",
                                    title: "Components",
                                    subtitle: "Reusable UI",
                                    icon: Boxes,
                                },
                                {
                                    number: "03",
                                    title: "React",
                                    subtitle: "Frontend Architecture",
                                    icon: Code2,
                                },
                                {
                                    number: "04",
                                    title: "Responsive",
                                    subtitle: "Every Screen",
                                    icon: TabletSmartphone,
                                },
                                {
                                    number: "05",
                                    title: "Interactions",
                                    subtitle: "Motion & Feedback",
                                    icon: Sparkles,
                                },
                                {
                                    number: "06",
                                    title: "Production",
                                    subtitle: "Optimized Experience",
                                    icon: Rocket,
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.number}
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.15 }}
                                        whileHover={{ y: -7 }}
                                        className="group relative z-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                                    >

                                        <div className="mb-5 flex items-center justify-between">

                                            <span className="font-mono text-xs font-bold text-[#004658]/35">
                                                {item.number}
                                            </span>

                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#004658]/8 text-[#004658] transition-all duration-300 group-hover:bg-[#004658] group-hover:text-white">
                                                <Icon size={18} />
                                            </div>

                                        </div>

                                        <h3 className="text-base font-extrabold text-slate-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-xs leading-5 text-slate-500">
                                            {item.subtitle}
                                        </p>

                                    </motion.div>
                                );
                            })}

                        </div>

                    </div>

                </div>

            </section>


            {/* ==================================================
          SECTION 05
          FRONTEND CAPABILITIES
      ================================================== */}

            <section className="relative bg-[#FBFDFD] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

                <div className="relative mx-auto max-w-[1250px]">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mb-14 max-w-3xl"
                    >

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-[#004658]/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#004658]">
                            <Component size={13} />
                            Frontend Capabilities
                        </div>

                        <h2 className="text-4xl font-black tracking-[-1.7px] text-slate-900 sm:text-5xl lg:text-6xl">
                            Everything your{" "}
                            <span className="text-[#087F99]">
                                interface needs.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                            From responsive layouts to interactive experiences, we build
                            the frontend layer that makes digital products usable and engaging.
                        </p>

                    </motion.div>


                    {/* Bento */}

                    <div className="grid auto-rows-[180px] gap-5 lg:grid-cols-4">

                        {capabilities.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.05,
                                    }}
                                    whileHover={{ y: -6 }}
                                    className={`group relative overflow-hidden rounded-[25px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#004658]/25 hover:shadow-[0_20px_50px_rgba(0,70,88,0.10)] ${item.className}`}
                                >

                                    {/* Glow */}

                                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-100/50 blur-3xl transition-all duration-500 group-hover:bg-cyan-200/60" />


                                    {/* Icon */}

                                    <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#004658]/8 text-[#004658] transition-all duration-300 group-hover:bg-[#004658] group-hover:text-white">
                                        <Icon size={21} />
                                    </div>


                                    <div className="relative">

                                        <h3 className="text-lg font-extrabold text-slate-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                                            {item.description}
                                        </p>

                                    </div>


                                    {/* Large card visual */}

                                    {index === 0 && (
                                        <div className="absolute bottom-5 right-5 hidden items-end gap-2 lg:flex">

                                            <div className="h-16 w-28 rounded-xl border border-slate-200 bg-[#F4FAFB] p-2">
                                                <div className="h-full rounded-lg bg-white p-2">
                                                    <div className="h-2 w-[70%] rounded-full bg-[#004658]" />
                                                    <div className="mt-2 h-2 rounded-full bg-slate-200" />
                                                    <div className="mt-2 h-2 w-[75%] rounded-full bg-slate-200" />
                                                </div>
                                            </div>

                                            <div className="h-20 w-12 rounded-xl border border-slate-200 bg-[#F4FAFB] p-1.5">
                                                <div className="h-full rounded-lg bg-white p-1.5">
                                                    <div className="h-2 w-full rounded-full bg-[#00A3C4]" />
                                                    <div className="mt-2 h-2 rounded-full bg-slate-200" />
                                                    <div className="mt-2 h-8 rounded-md bg-slate-100" />
                                                </div>
                                            </div>

                                        </div>
                                    )}

                                </motion.div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* ==================================================
          SECTION 06
          FAST FEELS BETTER
      ================================================== */}

            <section className="relative bg-[#F4F9FA] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

                <div className="relative mx-auto max-w-[1200px]">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto mb-16 max-w-3xl text-center"
                    >

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#004658]">
                            <Zap size={13} />
                            Performance & UX
                        </div>

                        <h2 className="text-4xl font-black tracking-[-1.7px] text-slate-900 sm:text-5xl lg:text-6xl">
                            Fast feels{" "}
                            <span className="text-[#087F99]">
                                better.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                            Performance is not just a technical metric — it is part of
                            the user experience.
                        </p>

                    </motion.div>


                    {/* Performance visual */}

                    <div className="grid items-center gap-8 lg:grid-cols-2">

                        {/* Left visual */}

                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="relative overflow-hidden rounded-[30px] border border-[#004658]/15 bg-white p-6 shadow-[0_25px_70px_rgba(16,58,73,0.10)] sm:p-8"
                        >

                            <div className="absolute right-[-70px] top-[-70px] h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl" />


                            <div className="relative">

                                <div className="mb-8 flex items-center justify-between">

                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#07819A]">
                                            Frontend Quality
                                        </p>

                                        <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                                            User Experience
                                        </h3>
                                    </div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/8 text-[#004658]">
                                        <Zap size={22} />
                                    </div>

                                </div>


                                {/* Ring */}

                                <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border-[18px] border-[#DDF5F7] sm:h-56 sm:w-56">

                                    <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-white shadow-inner sm:h-44 sm:w-44">

                                        <Zap
                                            size={25}
                                            className="text-[#00A3C4]"
                                        />

                                        <span className="mt-2 text-2xl font-black text-[#004658]">
                                            Fast
                                        </span>

                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                            Frontend
                                        </span>

                                    </div>

                                </div>


                                <div className="mt-8 grid grid-cols-2 gap-3">

                                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                            Load
                                        </p>
                                        <p className="mt-1 text-sm font-extrabold text-[#004658]">
                                            Optimized
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                            Interaction
                                        </p>
                                        <p className="mt-1 text-sm font-extrabold text-[#004658]">
                                            Smooth
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </motion.div>


                        {/* Right metrics */}

                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="space-y-4"
                        >

                            {[
                                {
                                    icon: Zap,
                                    title: "Fast Loading",
                                    text: "Lightweight interfaces that feel quick and responsive.",
                                },
                                {
                                    icon: MousePointer2,
                                    title: "Smooth Interaction",
                                    text: "Responsive feedback that keeps users engaged.",
                                },
                                {
                                    icon: Smartphone,
                                    title: "Mobile Ready",
                                    text: "Layouts that remain usable and clear on smaller screens.",
                                },
                                {
                                    icon: Accessibility,
                                    title: "Accessible Experience",
                                    text: "Clear interaction patterns designed with usability in mind.",
                                },
                            ].map((item, index) => {

                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        whileHover={{ x: 6 }}
                                        className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                    >

                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#004658]/8 text-[#004658] transition-all duration-300 group-hover:bg-[#004658] group-hover:text-white">
                                            <Icon size={19} />
                                        </div>

                                        <div className="flex-1">

                                            <div className="flex items-center justify-between gap-3">

                                                <h3 className="text-base font-extrabold text-slate-900">
                                                    {item.title}
                                                </h3>

                                                <span className="text-[9px] font-bold uppercase tracking-wider text-[#07819A]">
                                                    Focus
                                                </span>

                                            </div>

                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                {item.text}
                                            </p>

                                            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">

                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "88%" }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 1,
                                                        delay: index * 0.1,
                                                    }}
                                                    className="h-full rounded-full bg-gradient-to-r from-[#004658] to-[#00A3C4]"
                                                />

                                            </div>

                                        </div>

                                    </motion.div>
                                );
                            })}

                        </motion.div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default FeaturedProjects;