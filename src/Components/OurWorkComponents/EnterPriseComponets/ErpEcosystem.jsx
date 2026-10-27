import React, { useState } from "react";
import {
  Boxes,
  Calculator,
  Users,
  Factory,
  ShoppingCart,
  Truck,
  ArrowUpRight,
  Workflow,
  CheckCircle2,
  Network,
} from "lucide-react";

const modules = [
  {
    id: "inventory",
    title: "Inventory",
    subtitle: "Stock & Warehouses",
    description:
      "Monitor stock levels, manage multiple warehouses and maintain accurate inventory records across your business.",
    icon: Boxes,
    color: "teal",
    features: ["Real-time stock visibility", "Warehouse tracking", "Low-stock alerts"],
  },
  {
    id: "finance",
    title: "Finance",
    subtitle: "Accounts & Reporting",
    description:
      "Organize invoices, expenses, receivables and financial reports through a centralized finance workflow.",
    icon: Calculator,
    color: "blue",
    features: ["Invoice management", "Expense tracking", "Financial reporting"],
  },
  {
    id: "hr",
    title: "Human Resources",
    subtitle: "People & Payroll",
    description:
      "Centralize employee information, attendance, leave requests and payroll processes in one place.",
    icon: Users,
    color: "purple",
    features: ["Employee records", "Attendance management", "Payroll workflows"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    subtitle: "Production Planning",
    description:
      "Coordinate production schedules, work orders, materials and manufacturing operations.",
    icon: Factory,
    color: "orange",
    features: ["Production planning", "Material requirements", "Work-order tracking"],
  },
  {
    id: "sales",
    title: "Sales & Orders",
    subtitle: "Customers & Revenue",
    description:
      "Manage sales orders, customer information and order progress through connected business processes.",
    icon: ShoppingCart,
    color: "pink",
    features: ["Order management", "Customer records", "Sales reporting"],
  },
  {
    id: "supply",
    title: "Supply Chain",
    subtitle: "Procurement & Delivery",
    description:
      "Coordinate suppliers, purchasing, dispatches and shipment information across your supply chain.",
    icon: Truck,
    color: "cyan",
    features: ["Supplier tracking", "Purchase management", "Dispatch coordination"],
  },
];

const colorStyles = {
  teal: {
    icon: "bg-teal-50 text-teal-700",
    selected: "border-teal-500 ring-2 ring-teal-100",
    dot: "bg-teal-500",
  },
  blue: {
    icon: "bg-blue-50 text-blue-700",
    selected: "border-blue-500 ring-2 ring-blue-100",
    dot: "bg-blue-500",
  },
  purple: {
    icon: "bg-purple-50 text-purple-700",
    selected: "border-purple-500 ring-2 ring-purple-100",
    dot: "bg-purple-500",
  },
  orange: {
    icon: "bg-orange-50 text-orange-700",
    selected: "border-orange-500 ring-2 ring-orange-100",
    dot: "bg-orange-500",
  },
  pink: {
    icon: "bg-pink-50 text-pink-700",
    selected: "border-pink-500 ring-2 ring-pink-100",
    dot: "bg-pink-500",
  },
  cyan: {
    icon: "bg-cyan-50 text-cyan-700",
    selected: "border-cyan-500 ring-2 ring-cyan-100",
    dot: "bg-cyan-500",
  },
};

const positions = [
  "left-1/2 top-0 -translate-x-1/2",
  "right-0 top-[19%]",
  "bottom-[17%] right-0",
  "bottom-0 left-1/2 -translate-x-1/2",
  "bottom-[17%] left-0",
  "left-0 top-[19%]",
];

export default function ErpEcosystem() {
  const [selectedId, setSelectedId] = useState("inventory");

  const selected = modules.find((item) => item.id === selectedId) || modules[0];
  const SelectedIcon = selected.icon;
  const selectedColors = colorStyles[selected.color];

  return (
    <section className="relative isolate overflow-hidden bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-800 shadow-sm">
            <Network size={15} />
            One Connected Ecosystem
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Every Department.
            <span className="mt-2 block text-teal-700">
              Working as One.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
            Connect your business operations through one intelligent ERP
            platform. Bring teams, data and everyday workflows together.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual ecosystem */}
          <div className="relative mx-auto aspect-square w-full max-w-[540px]">
            {/* Orbit rings */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-teal-300" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300" />

            {/* Connectors */}
            <svg
              viewBox="0 0 500 500"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {[
                [250, 250, 250, 58],
                [250, 250, 425, 155],
                [250, 250, 425, 345],
                [250, 250, 250, 442],
                [250, 250, 75, 345],
                [250, 250, 75, 155],
              ].map(([x1, y1, x2, y2], index) => (
                <line
                  key={index}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#83B8C2"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                />
              ))}
            </svg>

            {/* Central ERP hub */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-[108px] w-[108px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full border-4 border-teal-100 bg-gradient-to-br from-slate-900 to-teal-900 text-white shadow-xl sm:h-36 sm:w-36 sm:border-[5px]">
              <Workflow size={25} className="text-cyan-300 sm:h-8 sm:w-8" />
              <span className="text-xs font-extrabold tracking-wider sm:text-base">
                CCWS ERP
              </span>
              <span className="text-[8px] font-bold tracking-[0.16em] text-cyan-200 sm:text-[9px]">
                CENTRAL HUB
              </span>
            </div>

            {/* Interactive module nodes */}
            {modules.map((module, index) => {
              const Icon = module.icon;
              const styles = colorStyles[module.color];
              const isSelected = selectedId === module.id;

              return (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => setSelectedId(module.id)}
                  aria-pressed={isSelected}
                  aria-label={`Explore ${module.title} module`}
                  className={`absolute z-20 flex min-h-[84px] w-[92px] flex-col items-center justify-center gap-2 rounded-2xl border bg-white p-2 text-center shadow-md transition-all duration-200 hover:border-teal-400 hover:shadow-xl sm:min-h-[104px] sm:w-[116px] sm:gap-3 sm:p-3 ${
                    positions[index]
                  } ${
                    isSelected
                      ? `${styles.selected} shadow-lg`
                      : "border-slate-200"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${styles.icon}`}
                  >
                    <Icon size={20} />
                  </span>

                  <span className="text-[10px] font-bold leading-tight text-slate-800 sm:text-xs">
                    {module.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected module details */}
          <div
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-9"
            aria-live="polite"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-800">
                Explore a Module
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Connected ecosystem
              </span>
            </div>

            <div
              className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${selectedColors.icon}`}
            >
              <SelectedIcon size={30} />
            </div>

            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {selected.title}
            </h3>

            <p className="mt-2 text-sm font-semibold text-teal-700">
              {selected.subtitle}
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              {selected.description}
            </p>

            <div className="mt-7 space-y-4">
              {selected.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-600"
                  />
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between gap-3 rounded-2xl border border-teal-100 bg-teal-50/80 p-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal-800 shadow-sm">
                  <Workflow size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Unified Business Operations
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    One platform. Connected teams.
                  </p>
                </div>
              </div>

              <ArrowUpRight size={21} className="shrink-0 text-teal-800" />
            </div>

            {/* Quick module selector */}
            <div className="mt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                Explore other modules
              </p>

              <div className="flex flex-wrap gap-2">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    type="button"
                    onClick={() => setSelectedId(module.id)}
                    className={`rounded-full border px-3 py-2 text-xs font-semibold transition ${
                      selectedId === module.id
                        ? "border-teal-800 bg-teal-800 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-teal-400 hover:text-teal-800"
                    }`}
                  >
                    {module.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom benefits */}
        <div className="mt-16 grid gap-5 border-t border-slate-200 pt-8 sm:grid-cols-3">
          {[
            {
              title: "Centralized Data",
              text: "Bring important business records together.",
            },
            {
              title: "Connected Workflows",
              text: "Help reduce disconnected processes between teams.",
            },
            {
              title: "Better Visibility",
              text: "Make informed decisions with organized information.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 rounded-xl p-3">
              <CheckCircle2
                size={21}
                className="mt-0.5 shrink-0 text-teal-700"
              />
              <div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
