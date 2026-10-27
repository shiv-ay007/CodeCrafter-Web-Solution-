import React from "react";
import {
  UserRoundPlus, Clock3, CalendarCheck,
  Wallet, FileText, ArrowDown
} from "lucide-react";

const steps = [
  {
    no: "01",
    title: "Onboard",
    desc: "Create employee profiles and organize joining documents.",
    icon: UserRoundPlus,
  },
  {
    no: "02",
    title: "Track time",
    desc: "Record attendance and review working-hour summaries.",
    icon: Clock3,
  },
  {
    no: "03",
    title: "Manage leave",
    desc: "Review leave requests and maintain leave balances.",
    icon: CalendarCheck,
  },
  {
    no: "04",
    title: "Process payroll",
    desc: "Prepare salary calculations using configured pay rules.",
    icon: Wallet,
  },
  {
    no: "05",
    title: "Generate payslips",
    desc: "Prepare payslips and organize payroll reports.",
    icon: FileText,
  },
];

const HrmsWorkflow = () => {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              The employee lifecycle
            </p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              From first day
              <span className="block text-teal-700">to payday.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-slate-600 md:justify-self-end sm:text-base">
            Connect everyday HR activities through a clear process that helps
            teams keep information organized at every stage.
          </p>
        </div>

        <div className="mt-14 border-y border-slate-200">
          {steps.map(({ no, title, desc, icon: Icon }, index) => (
            <div
              key={no}
              className="group grid gap-4 border-b border-slate-200 py-7 last:border-b-0 sm:grid-cols-[70px_1fr_1.3fr_40px] sm:items-center sm:gap-6 sm:py-9"
            >
              <span className="text-sm font-bold tracking-widest text-teal-700">
                {no}
              </span>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf5f1] text-teal-800 transition group-hover:bg-teal-800 group-hover:text-white">
                  <Icon size={23} />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                  {title}
                </h3>
              </div>

              <p className="max-w-lg text-sm leading-7 text-slate-600">
                {desc}
              </p>

              <span className="hidden text-slate-300 sm:block">
                {index === steps.length - 1 ? (
                  <FileText size={22} />
                ) : (
                  <ArrowDown size={22} />
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-[#f4f7f5] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p className="max-w-2xl text-sm leading-7 text-slate-700">
            <strong className="text-slate-900">One connected process.</strong>{" "}
            Configure workflows around your organization's policies and
            approval requirements.
          </p>
          <span className="w-fit rounded-full bg-white px-4 py-2 text-xs font-bold text-teal-800">
            5 connected stages
          </span>
        </div>
      </div>
    </section>
  );
};

export default HrmsWorkflow;