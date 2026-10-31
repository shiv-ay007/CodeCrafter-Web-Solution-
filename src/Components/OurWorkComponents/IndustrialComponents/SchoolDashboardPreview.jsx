import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  GraduationCap,
  CreditCard,
  Bus,
  Users,
  CheckCircle2,
  TrendingUp,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Smartphone,
  Calendar,
  BarChart3,
  QrCode,
  FileText,
  Activity,
  Layers,
  Sparkles,
  ChevronRight
} from 'lucide-react'

const dashboardTabs = [
  { id: 'fees', label: 'Fee & Revenue Hub', icon: CreditCard },
  { id: 'academics', label: 'Academics & Attendance', icon: GraduationCap },
  { id: 'transport', label: 'Live GPS Fleet Telemetry', icon: Bus },
  { id: 'communication', label: 'Parent & Communication', icon: Smartphone },
]

const feeStats = [
  { label: 'Term Fee Realized', value: '₹58.4 Lakhs', change: '+14.8%', note: '96.4% collected vs target', trend: 'up' },
  { label: 'Pending Overdue', value: '₹2.1 Lakhs', change: '-28.5%', note: 'Automated SMS sent', trend: 'down' },
  { label: 'Online UPI / Card Share', value: '88.2%', change: '+19.4%', note: 'Zero physical queue', trend: 'up' },
  { label: 'Instant Receipts Issued', value: '2,640', change: '+100%', note: 'Auto-synced to GST ledger', trend: 'up' },
]

const academicStats = [
  { label: 'Today Student Attendance', value: '96.2%', change: '+2.1%', note: '2,741 / 2,850 present', trend: 'up' },
  { label: 'Faculty Check-ins', value: '118 / 120', change: '98.3%', note: 'Biometric gate sync', trend: 'up' },
  { label: 'Active Smart Classrooms', value: '32 Rooms', change: 'Live', note: 'Interactive LMS connected', trend: 'up' },
  { label: 'Exam Progress (Term 1)', value: '100% Graded', change: '1-Click', note: 'CBSE / ICSE CCE compliant', trend: 'up' },
]

const transportStats = [
  { label: 'Active GPS Fleet', value: '16 Buses', change: '100% Online', note: 'All routes tracked live', trend: 'up' },
  { label: 'Average On-Time Rate', value: '98.7%', change: '+4.2%', note: 'Minimal traffic deviation', trend: 'up' },
  { label: 'Geofence Stop Alerts Sent', value: '1,420', change: 'Instant', note: 'Sent via Parent App & SMS', trend: 'up' },
  { label: 'Speed Limit Violations', value: '0 Alert', change: 'Safe', note: 'Strict < 40 km/h governor', trend: 'up' },
]

const communicationStats = [
  { label: 'Parent App Engagement', value: '94.6%', change: '+8.4%', note: 'Daily active parent logins', trend: 'up' },
  { label: 'Broadcast Delivery Rate', value: '99.8%', change: '< 2 secs', note: 'WhatsApp & App push notices', trend: 'up' },
  { label: 'PTM Slots Booked', value: '482 / 500', change: '96.4%', note: 'Paperless time allocation', trend: 'up' },
  { label: 'Teacher-Parent Inquiries', value: '100% Resolved', change: '4.8★', note: 'Direct encrypted messaging', trend: 'up' },
]

const feeChartData = [
  { month: 'Apr', collected: 92, target: 100 },
  { month: 'May', collected: 88, target: 95 },
  { month: 'Jun', collected: 76, target: 80 },
  { month: 'Jul', collected: 98, target: 100 },
  { month: 'Aug', collected: 95, target: 98 },
  { month: 'Sep', collected: 99, target: 100 },
  { month: 'Oct', collected: 94, target: 98 },
  { month: 'Nov', collected: 91, target: 95 },
  { month: 'Dec', collected: 89, target: 92 },
  { month: 'Jan', collected: 97, target: 100 },
  { month: 'Feb', collected: 95, target: 98 },
  { month: 'Mar', collected: 100, target: 100 },
]

const liveActivityFeed = [
  {
    time: '10:42 AM',
    badge: 'Fee Paid',
    color: 'emerald',
    text: 'Aarav Sharma (Class IX-A) paid ₹14,500 Term Fee via UPI. Auto-receipt #CC-8821 dispatched.',
  },
  {
    time: '10:38 AM',
    badge: 'GPS Fleet',
    color: 'cyan',
    text: 'Bus #07 reached Sector 62 Crossing. 42 proximity geofence alerts pushed to parents.',
  },
  {
    time: '10:25 AM',
    badge: 'Biometric Gate',
    color: 'blue',
    text: 'Class X-B Attendance consolidated: 39 Present, 1 Excused Leave. Synchronized with SMS gateway.',
  },
  {
    time: '10:10 AM',
    badge: 'Report Card',
    color: 'purple',
    text: 'Physics Unit Test 2 grades published by Dr. Mehra. 1-Click digital report cards available.',
  },
]

const SchoolDashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('fees')

  const getActiveStats = () => {
    switch (activeTab) {
      case 'fees':
        return feeStats
      case 'academics':
        return academicStats
      case 'transport':
        return transportStats
      case 'communication':
        return communicationStats
      default:
        return feeStats
    }
  }

  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto overflow-hidden" id="school-dashboard">
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 216, 255, 0.35) 0%, rgba(0, 70, 88, 0.2) 70%)'
        }}
      />

      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          Interactive Institutional Telemetry Simulator
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
          Campus Intelligence & <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">
            Real-Time School ERP Console
          </span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Experience how principals, teachers, accountants, and transport managers command every academic and operational touchpoint in a single unified dashboard.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        {dashboardTabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 shadow-sm ${
                isActive
                  ? 'bg-[#004658] text-white shadow-[#004658]/25 shadow-lg scale-[1.02]'
                  : 'bg-white text-slate-700 hover:bg-slate-100/90 border border-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-300' : 'text-slate-500'}`} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Main Graphical Simulator Console */}
      <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl p-4 sm:p-7 lg:p-9 text-white overflow-hidden relative">
        {/* Console Top Window Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-7 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="h-4 w-[1px] bg-slate-800 mx-1 hidden sm:block" />
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              PORTAL: {activeTab.toUpperCase()} ENGINE v4.8
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              2,850 Biometric Records Synced
            </div>
            <span className="text-xs font-mono text-slate-400 hidden md:inline">
              Session 2026-27 | CBSE Board ID: #9042
            </span>
          </div>
        </div>

        {/* 4 Graphical KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
          {getActiveStats().map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D8FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-slate-400">{stat.label}</span>
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                  stat.trend === 'up'
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                    : 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-black text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                {stat.note}
              </div>
            </div>
          ))}
        </div>

        {/* Graphical Split: Visual Analytics Chart & Live Operational Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Chart Area: Graphical Bar Analytics */}
          <div className="lg:col-span-7 p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  Monthly Fee Realization & Collection Efficiency (%)
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Automated Razorpay/PayU payment gateway reconciliations
                </p>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-mono">
                <span className="inline-flex items-center gap-1 text-cyan-400">
                  <span className="w-2.5 h-2.5 rounded bg-cyan-400" /> Collected
                </span>
                <span className="inline-flex items-center gap-1 text-slate-500">
                  <span className="w-2.5 h-2.5 rounded bg-slate-700" /> Target
                </span>
              </div>
            </div>

            {/* Pictorial SVG / CSS Bar Chart */}
            <div className="pt-4 pb-2">
              <div className="h-44 sm:h-52 flex items-end justify-between gap-1.5 sm:gap-2 px-1">
                {feeChartData.map((d, index) => {
                  const heightPercent = d.collected
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2 group relative">
                      {/* Tooltip on hover */}
                      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-slate-800 text-white text-[10px] font-mono px-2 py-1 rounded shadow-lg border border-slate-700 whitespace-nowrap z-20">
                        {d.month}: {d.collected}%
                      </div>

                      <div className="w-full max-w-[28px] h-full flex items-end justify-center rounded-t-md bg-slate-800/40 relative overflow-hidden">
                        {/* Target line indicator */}
                        <div
                          className="absolute w-full border-t border-dashed border-slate-600/70"
                          style={{ bottom: `${d.target}%` }}
                        />
                        {/* Realized bar */}
                        <div
                          className="w-full rounded-t-md bg-gradient-to-t from-[#004658] via-cyan-500 to-[#00D8FF] transition-all duration-500 group-hover:brightness-125"
                          style={{ height: `${heightPercent}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 font-semibold">
                        {d.month}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                98.4% On-Time Realization Rate
              </span>
              <span>Average Settlement: Realtime (T+0 IMPS/NEFT)</span>
            </div>
          </div>

          {/* Right Area: Interactive Operational Mockup Feed */}
          <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  Live Campus Operational Telemetry
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  REAL-TIME
                </span>
              </div>

              {/* Feed Items */}
              <div className="space-y-3">
                {liveActivityFeed.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                      <span className="text-slate-400">{item.time}</span>
                      <span className={`px-2 py-0.2 rounded text-[10px] font-bold ${
                        item.color === 'emerald'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : item.color === 'cyan'
                          ? 'bg-cyan-500/20 text-cyan-300'
                          : item.color === 'blue'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-purple-500/20 text-purple-300'
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-snug">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Simulation Badge */}
            <div className="mt-5 p-3 rounded-xl bg-gradient-to-r from-[#004658]/40 to-cyan-950/40 border border-cyan-800/40 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <QrCode className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="text-left">
                  <span className="text-xs font-bold text-white block">Digital Fee Challan Generator</span>
                  <span className="text-[10px] text-slate-400 block">UPI QR auto-embossed on student IDs</span>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-cyan-400/20 text-cyan-300 shrink-0">
                ENABLED
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA / Routing Bar inside Simulator */}
        <div className="mt-7 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
            Ready to test live ERP modules tailored for your school, college, or coaching chain?
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-cyan-500/20"
            >
              Request Live ERP Demo
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/schedule-consultation"
              className="inline-flex items-center gap-1 font-bold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-4 py-2.5 rounded-xl transition-colors"
            >
              Book System Walkthrough
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SchoolDashboardPreview
