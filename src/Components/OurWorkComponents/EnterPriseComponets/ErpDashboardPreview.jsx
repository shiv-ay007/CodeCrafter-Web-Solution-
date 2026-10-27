import React, { useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  ChartNoAxesCombined,
  CircleDollarSign,
  PackageCheck,
  ShoppingCart,
  TrendingUp,
  Wallet,
} from "lucide-react";

const dashboardData = {
  Overview: [
    {
      label: "Inventory Value",
      value: "$2.41M",
      change: "+12.8%",
      trend: "up",
      icon: Boxes,
      color: "cyan",
    },
    {
      label: "Active Orders",
      value: "1,284",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
      color: "blue",
    },
    {
      label: "Total Revenue",
      value: "$184.6K",
      change: "+16.4%",
      trend: "up",
      icon: CircleDollarSign,
      color: "emerald",
    },
    {
      label: "Fulfillment Rate",
      value: "98.4%",
      change: "+3.1%",
      trend: "up",
      icon: PackageCheck,
      color: "violet",
    },
  ],
  Inventory: [
    {
      label: "Total Stock Value",
      value: "$2.41M",
      change: "+12.8%",
      trend: "up",
      icon: Boxes,
      color: "cyan",
    },
    {
      label: "Active SKUs",
      value: "8,420",
      change: "+4.2%",
      trend: "up",
      icon: PackageCheck,
      color: "blue",
    },
    {
      label: "Low Stock Items",
      value: "24",
      change: "-8.4%",
      trend: "down",
      icon: Activity,
      color: "amber",
    },
    {
      label: "Warehouses",
      value: "12",
      change: "+2 new",
      trend: "up",
      icon: Boxes,
      color: "violet",
    },
  ],
  Finance: [
    {
      label: "Total Revenue",
      value: "$184.6K",
      change: "+16.4%",
      trend: "up",
      icon: CircleDollarSign,
      color: "emerald",
    },
    {
      label: "Receivables",
      value: "$42.8K",
      change: "+5.2%",
      trend: "up",
      icon: Wallet,
      color: "blue",
    },
    {
      label: "Operating Cost",
      value: "$68.2K",
      change: "-3.4%",
      trend: "down",
      icon: Activity,
      color: "amber",
    },
    {
      label: "Invoices Paid",
      value: "964",
      change: "+11.6%",
      trend: "up",
      icon: PackageCheck,
      color: "violet",
    },
  ],
};

const chartData = [
  { month: "Jan", value: 38 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 43 },
  { month: "Apr", value: 70 },
  { month: "May", value: 58 },
  { month: "Jun", value: 82 },
  { month: "Jul", value: 64 },
  { month: "Aug", value: 94 },
  { month: "Sep", value: 74 },
  { month: "Oct", value: 88 },
  { month: "Nov", value: 68 },
  { month: "Dec", value: 100 },
];

const statusData = [
  {
    label: "Inventory synchronization",
    status: "Healthy",
    value: 96,
    color: "bg-cyan-400",
  },
  {
    label: "Order processing",
    status: "On track",
    value: 82,
    color: "bg-emerald-400",
  },
  {
    label: "Finance operations",
    status: "Healthy",
    value: 91,
    color: "bg-violet-400",
  },
];

const iconColors = {
  cyan: "bg-cyan-400/10 text-cyan-300",
  blue: "bg-blue-400/10 text-blue-300",
  emerald: "bg-emerald-400/10 text-emerald-300",
  violet: "bg-violet-400/10 text-violet-300",
  amber: "bg-amber-400/10 text-amber-300",
};

export default function ErpDashboardPreview() {
  const [activeTab, setActiveTab] = useState("Overview");
  const stats = dashboardData[activeTab];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-800">
            <ChartNoAxesCombined size={15} />
            Your Business. One View.
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Complete visibility.
            <span className="mt-2 block text-teal-700">
              Smarter decisions.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
            Bring your operations, inventory and financial performance into
            one centralized business dashboard.
          </p>
        </div>

        {/* Dashboard frame */}
        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-[#101a30] text-white shadow-2xl shadow-slate-900/15 sm:rounded-3xl">
          {/* Top navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-7 lg:px-9">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
                <ChartNoAxesCombined size={23} />
              </div>

              <div>
                <h3 className="text-base font-extrabold tracking-wide">
                  Crafter ERP
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Business intelligence
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-slate-300">
                Sample dashboard
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-7 lg:p-9">
            {/* Dashboard welcome */}
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Business Overview
                </p>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Performance at a glance
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Your business metrics in one convenient view.
                </p>
              </div>

              <span className="w-fit rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                Illustrative data
              </span>
            </div>

            {/* Interactive tabs */}
            <div
              className="mb-6 flex flex-wrap gap-2"
              role="tablist"
              aria-label="Dashboard category"
            >
              {Object.keys(dashboardData).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-lg border px-4 py-2.5 text-xs font-bold transition duration-200 sm:text-sm ${
                    activeTab === tab
                      ? "border-cyan-400 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-950/20"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/50 hover:bg-white/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => {
                const Icon = item.icon;
                const TrendIcon =
                  item.trend === "down" ? ArrowDownRight : ArrowUpRight;

                return (
                  <div
                    key={item.label}
                    className="group rounded-2xl border border-white/10 bg-[#17243a] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-black/10"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-xs font-medium leading-5 text-slate-400 sm:text-sm">
                        {item.label}
                      </span>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconColors[item.color]}`}
                      >
                        <Icon size={20} />
                      </span>
                    </div>

                    <p className="mt-5 break-words text-3xl font-extrabold tracking-tight text-white">
                      {item.value}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-300">
                        <TrendIcon size={15} />
                        {item.change}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        vs. previous period
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Charts and operations */}
            <div className="mt-5 grid gap-5 xl:grid-cols-[1.45fr_1fr]">
              {/* Revenue chart */}
              <div className="min-w-0 rounded-2xl border border-white/10 bg-[#17243a] p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Business activity
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Illustrative monthly performance
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    Activity
                  </span>
                </div>

                <div className="relative mt-8 h-52">
                  {/* Horizontal chart lines */}
                  <div className="absolute inset-0 bottom-7 flex flex-col justify-between">
                    {[0, 1, 2, 3].map((line) => (
                      <div
                        key={line}
                        className="w-full border-t border-dashed border-slate-600/50"
                      />
                    ))}
                  </div>

                  {/* Chart bars */}
                  <div className="absolute inset-0 flex items-stretch justify-between gap-1.5 sm:gap-2">
                    {chartData.map((item) => (
                      <div
                        key={item.month}
                        className="flex min-w-0 flex-1 flex-col items-center justify-end gap-2"
                      >
                        <div className="flex h-full w-full items-end justify-center">
                          <div
                            title={`${item.month}: illustrative activity`}
                            className="w-full max-w-6 rounded-t-md bg-gradient-to-t from-teal-700 to-cyan-300 transition-all duration-300 hover:brightness-125"
                            style={{ height: `${item.value}%` }}
                          />
                        </div>

                        <span className="text-[9px] text-slate-400 sm:text-[10px]">
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs leading-5 text-slate-400">
                  <TrendingUp size={16} className="shrink-0 text-cyan-300" />
                  Sample visualization for your ERP dashboard.
                </div>
              </div>

              {/* Operations status */}
              <div className="rounded-2xl border border-white/10 bg-[#17243a] p-5 sm:p-6">
                <div>
                  <h4 className="text-base font-bold text-white">
                    Operations status
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Illustrative system overview
                  </p>
                </div>

                <div className="mt-7 space-y-7">
                  {statusData.map((item) => (
                    <div key={item.label}>
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <span className="text-xs leading-5 text-slate-300 sm:text-sm">
                          {item.label}
                        </span>
                        <span className="shrink-0 text-[11px] font-bold text-emerald-300">
                          {item.status}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                        <div
                          className={`h-full rounded-full ${item.color}`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>

                      <div className="mt-2 text-right text-[10px] text-slate-500">
                        {item.value}% illustrative progress
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-start gap-3 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <Activity
                    size={19}
                    className="mt-0.5 shrink-0 text-cyan-300"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-200">
                      Connected operations
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      A unified view of your business processes and information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs leading-5 text-slate-500">
          Dashboard figures and charts are illustrative demo data, not live
          business records.
        </p>
      </div>
    </section>
  );
}
