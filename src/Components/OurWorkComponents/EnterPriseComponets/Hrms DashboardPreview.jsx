import React from "react";
import {
  Users, Clock3, Wallet, CalendarDays,
  ArrowUpRight, CheckCircle2, Circle
} from "lucide-react";

const HrmsDashboardPreview = () => {
  const stats = [
    { label: "Team members", value: "148", note: "Across all departments", icon: Users },
    { label: "Attendance", value: "96.8%", note: "Today's attendance", icon: Clock3 },
    { label: "Monthly payroll", value: "₹18.4L", note: "Illustrative amount", icon: Wallet },
    { label: "Leave requests", value: "12", note: "Awaiting review", icon: CalendarDays },
  ];

  const activities = [
    { title: "Payroll summary prepared", time: "09:30 AM", status: "Completed" },
    { title: "Leave request submitted", time: "10:15 AM", status: "In review" },
    { title: "Employee profile updated", time: "11:05 AM", status: "Completed" },
  ];

  return (
    <section className="bg-[#f7f8f4] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Your people, at a glance
            </p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Better people
              <span className="block font-medium text-teal-700">
                management starts here.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-600 lg:justify-self-end">
            Bring employee information, attendance and payroll summaries into
            one organized workspace designed for everyday HR decisions.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ label, value, note, icon: Icon }, i) => (
            <div
              key={label}
              className={`rounded-2xl border p-6 ${
                i === 0
                  ? "border-teal-800 bg-teal-800 text-white"
                  : "border-slate-200 bg-white text-slate-900"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-sm ${i === 0 ? "text-teal-100" : "text-slate-500"}`}>
                  {label}
                </span>
                <Icon size={21} className={i === 0 ? "text-teal-200" : "text-teal-700"} />
              </div>
              <p className="mt-8 text-4xl font-extrabold tracking-tight">{value}</p>
              <p className={`mt-2 text-xs ${i === 0 ? "text-teal-100" : "text-slate-500"}`}>
                {note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Recent HR activity
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  A sample of everyday HR operations
                </p>
              </div>
              <ArrowUpRight className="text-teal-700" />
            </div>

            <div className="mt-6 divide-y divide-slate-100">
              {activities.map((item) => (
                <div key={item.title} className="flex flex-wrap items-center justify-between gap-3 py-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={19} className="mt-0.5 text-teal-700" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-500">{item.time}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-800">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-[#e7f2ee] p-7 sm:p-9">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-teal-800">
                <Users size={24} />
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-widest text-teal-800">
                One connected workspace
              </p>
              <h3 className="mt-3 text-2xl font-extrabold leading-snug text-slate-900">
                Less paperwork. More time for people.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Organize routine HR tasks and make employee information easier
                for authorized teams to access.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-bold text-teal-800">
              <Circle size={9} fill="currentColor" />
              Designed around your team
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          Illustrative dashboard data only. Not connected to live HR records.
        </p>
      </div>
    </section>
  );
};

export default HrmsDashboardPreview;