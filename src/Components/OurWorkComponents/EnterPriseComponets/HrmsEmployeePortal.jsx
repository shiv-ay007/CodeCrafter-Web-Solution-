import React from "react";
import {
  UserRound, CalendarDays, Wallet, FileText,
  ArrowUpRight, CheckCircle2, Clock3
} from "lucide-react";

const HrmsEmployeePortal = () => {
  const features = [
    {
      icon: Clock3,
      title: "Attendance at a glance",
      desc: "Review attendance summaries and working hours.",
    },
    {
      icon: CalendarDays,
      title: "Simpler leave requests",
      desc: "Submit requests and review leave balances.",
    },
    {
      icon: Wallet,
      title: "Payslips in one place",
      desc: "Access available salary statements securely.",
    },
    {
      icon: UserRound,
      title: "Personal information",
      desc: "Review employee profile information and details.",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#f3f6f2] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Portal mockup */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-teal-200/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Employee portal
                </p>
                <h3 className="mt-1 text-lg font-extrabold text-slate-900">
                  My workspace
                </h3>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                <UserRound size={22} />
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="rounded-2xl bg-[#e9f3ed] p-5 sm:p-6">
                <p className="text-sm text-slate-600">Welcome back</p>
                <h4 className="mt-1 text-2xl font-extrabold text-slate-900">
                  Your work, organized.
                </h4>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-teal-800">
                    Employee access
                  </span>
                  <span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-600">
                    Self-service
                  </span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <Clock3 size={21} className="text-teal-700" />
                  <p className="mt-4 text-xs text-slate-500">Attendance</p>
                  <p className="mt-1 font-extrabold text-slate-900">View record</p>
                  <CheckCircle2 size={15} className="mt-3 text-emerald-600" />
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <CalendarDays size={21} className="text-teal-700" />
                  <p className="mt-4 text-xs text-slate-500">Leave balance</p>
                  <p className="mt-1 font-extrabold text-slate-900">View balance</p>
                  <ArrowUpRight size={15} className="mt-3 text-teal-700" />
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-800">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">My payslips</p>
                    <p className="mt-1 text-xs text-slate-500">Available documents</p>
                  </div>
                </div>
                <ArrowUpRight size={19} className="text-slate-500" />
              </div>
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-slate-500">
            Illustrative portal mockup — not a live employee account.
          </p>
        </div>

        {/* Feature list */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            Designed for employees
          </p>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Give your people
            <span className="block text-teal-700">more control.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Make everyday HR tasks easier with a self-service experience that
            helps employees access the information they need.
          </p>

          <div className="mt-9 divide-y divide-slate-200">
            {features.map(({ icon: Icon, title, desc }, index) => (
              <div key={title} className="flex gap-4 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-teal-800 shadow-sm">
                  <Icon size={21} />
                </span>
                <div>
                  <h3 className="font-extrabold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HrmsEmployeePortal;