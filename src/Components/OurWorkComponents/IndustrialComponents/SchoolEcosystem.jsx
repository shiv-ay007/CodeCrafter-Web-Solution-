import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Smartphone,
  Laptop,
  GraduationCap,
  ShieldAlert,
  CheckCircle2,
  Clock,
  Bus,
  CreditCard,
  BookOpen,
  Users,
  Bell,
  ArrowUpRight,
  Wifi,
  Sparkles,
  ChevronRight,
  Shield,
  FileText
} from 'lucide-react'

const stakeholderRoles = [
  {
    id: 'parent',
    title: 'Parent Mobile App',
    badge: 'iOS & Android Native',
    icon: Smartphone,
    color: 'teal',
    tagline: 'Peace of mind with live bus tracking, instant fee payments, and direct teacher dialogue.',
    bullets: [
      'Live GPS telemetry with geofence proximity alerts when bus is 500m away',
      '1-Tap UPI / Card fee settlement with automated WhatsApp receipts',
      'Daily attendance notification & exam report card download in 1 click',
      'Encrypted teacher-parent private messaging without personal numbers'
    ]
  },
  {
    id: 'teacher',
    title: 'Teacher & Gradebook Hub',
    badge: 'Tablet & Desktop Web',
    icon: Laptop,
    color: 'blue',
    tagline: 'Reclaim 12+ hours weekly from manual paperwork with automated attendance & grading.',
    bullets: [
      '1-Tap class biometric attendance recording (Present / Absent / Medical Leave)',
      'CBSE / ICSE automated CCE grading calculation & remarks generator',
      'Interactive homework assigner with attachment uploads & deadline timers',
      'Timetable sync with automated substitute teacher reallocation'
    ]
  },
  {
    id: 'student',
    title: 'Student Interactive LMS',
    badge: 'Web & Tablet App',
    icon: GraduationCap,
    color: 'cyan',
    tagline: 'Modern self-paced learning with recorded video classes, quizzes, and digital library.',
    bullets: [
      'Curriculum-aligned HD video lessons with chapter bookmarking',
      'Interactive anti-cheat practice quizzes with instant rank calculation',
      'Digital syllabus progress ring & subject-wise doubt clearing portal',
      'Encrypted e-library with over 5,000+ reference PDFs and past papers'
    ]
  },
  {
    id: 'management',
    title: 'Principal & Executive Suite',
    badge: 'Enterprise War Room',
    icon: Shield,
    color: 'purple',
    tagline: 'Total institutional governance, fee audit reconciliation, and compliance mastery.',
    bullets: [
      'Multi-campus consolidated revenue, expense, and fee collection ledger',
      'Staff biometric payroll calculation with automated EPF/ESI slips',
      'Inquiry-to-admission pipeline conversion tracker and merit list engine',
      '1-Click CBSE / State Education Board audit and compliance data exporter'
    ]
  }
]

const SchoolEcosystem = () => {
  const [activeRole, setActiveRole] = useState('parent')

  const current = stakeholderRoles.find(r => r.id === activeRole) || stakeholderRoles[0]

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto bg-slate-50/70 rounded-3xl border border-slate-200/90 my-12" id="school-ecosystem">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          360° Connected Campus Ecosystem
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
          One Institutional Backbone. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">
            Tailored Experiences For Every Stakeholder.
          </span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Schools thrive when parents, faculty, students, and administration communicate seamlessly. Switch roles below to inspect their dedicated interfaces.
        </p>
      </div>

      {/* Stakeholder Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
        {stakeholderRoles.map((role) => {
          const Icon = role.icon
          const isActive = activeRole === role.id
          return (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                isActive
                  ? 'bg-white border-[#004658] shadow-lg shadow-[#004658]/10 ring-2 ring-[#004658]/20 -translate-y-1'
                  : 'bg-white/60 hover:bg-white border-slate-200 text-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isActive ? 'bg-[#004658] text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  isActive ? 'bg-cyan-100 text-cyan-800' : 'bg-slate-100 text-slate-500'
                }`}>
                  {role.id}
                </span>
              </div>
              <div>
                <span className={`text-sm sm:text-base font-extrabold block leading-tight ${
                  isActive ? 'text-slate-900' : 'text-slate-700'
                }`}>
                  {role.title}
                </span>
                <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                  {role.badge}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Interactive Pictorial Mockup Showcase */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-9 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Details Column */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 text-xs font-black uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {current.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
              {current.tagline}
            </p>

            <div className="space-y-3.5 mb-8">
              {current.bullets.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 text-[#004658] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#004658]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 font-extrabold text-white bg-[#004658] hover:bg-[#003442] rounded-xl px-6 py-3 text-sm shadow-md shadow-[#004658]/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Schedule Module Demo
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/software/erp"
                className="inline-flex items-center gap-1 font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl px-5 py-3 text-sm transition-all duration-300"
              >
                Enterprise ERP Tech
              </Link>
            </div>
          </div>

          {/* Right Pictorial Mockup Frame */}
          <div className="lg:col-span-7">
            {activeRole === 'parent' && (
              /* Parent Mobile Phone Frame Mockup */
              <div className="relative mx-auto max-w-[340px] sm:max-w-[380px] rounded-[40px] bg-slate-900 p-4 shadow-2xl border-4 border-slate-800">
                {/* Phone Speaker Notch */}
                <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-900" />
                </div>

                <div className="rounded-[30px] bg-slate-950 p-4 sm:p-5 text-white overflow-hidden border border-slate-800">
                  {/* App Status bar */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-4 pb-2 border-b border-slate-800">
                    <span className="font-bold">09:41</span>
                    <span className="text-cyan-400">Greenwood High App</span>
                    <div className="flex items-center gap-1">
                      <Wifi className="w-3 h-3" />
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Student Card */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#004658] to-[#002630] border border-cyan-800/40 mb-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-cyan-300 uppercase font-mono tracking-wider block">Student Profile</span>
                      <span className="text-base font-extrabold text-white block">Aarav Verma</span>
                      <span className="text-xs text-slate-300 block">Class VII-A • Roll #14</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center font-bold text-cyan-300 text-sm">
                      AV
                    </div>
                  </div>

                  {/* Live GPS Bus Tile */}
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Bus className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold text-white">School Bus #04 Telemetry</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                        En Route
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800/80">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Next Stop</span>
                        <span className="font-bold text-white">Palm Heights Gate 2</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block">ETA</span>
                        <span className="font-bold font-mono text-cyan-400">3 Mins Away</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Fee Pay Action */}
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <CreditCard className="w-4 h-4 text-cyan-400" />
                      <div>
                        <span className="text-xs font-bold text-white block">Term 2 Tuition Fee</span>
                        <span className="text-[10px] text-emerald-400 font-mono">Paid: ₹16,500 (Receipt #802)</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg">
                      View Bill
                    </span>
                  </div>

                  {/* Today Attendance & Homework notification */}
                  <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-300">Biometric Gate Punch: <strong>07:54 AM</strong></span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">Present</span>
                  </div>
                </div>
              </div>
            )}

            {activeRole === 'teacher' && (
              /* Teacher Portal Dashboard Mockup */
              <div className="rounded-3xl bg-slate-900 p-5 sm:p-7 text-white border border-slate-800 shadow-2xl">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <Laptop className="w-5 h-5 text-cyan-400" />
                    <div>
                      <span className="text-xs font-mono text-cyan-400 block font-bold">FACULTY DIGITAL WORKSTATION</span>
                      <span className="text-sm font-bold text-white block">Class VIII-B • Mathematics</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full font-bold">
                    38 / 40 Present
                  </span>
                </div>

                {/* Gradebook Matrix Preview */}
                <div className="space-y-2.5 mb-5">
                  <div className="grid grid-cols-12 text-[11px] font-mono text-slate-400 px-3 py-1 bg-slate-950 rounded-lg">
                    <span className="col-span-4">Student</span>
                    <span className="col-span-3 text-center">Unit Test 1</span>
                    <span className="col-span-3 text-center">Mid-Term</span>
                    <span className="col-span-2 text-right">CCE Grade</span>
                  </div>

                  {[
                    { name: 'Ananya Deshmukh', ut: '24 / 25', mid: '94 / 100', grade: 'A1' },
                    { name: 'Devendra Patel', ut: '22 / 25', mid: '88 / 100', grade: 'A2' },
                    { name: 'Ishaani Roy', ut: '25 / 25', mid: '98 / 100', grade: 'A1' },
                    { name: 'Kabir Malhotra', ut: '19 / 25', mid: '79 / 100', grade: 'B1' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-12 items-center text-xs px-3 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                      <span className="col-span-4 font-bold text-white">{row.name}</span>
                      <span className="col-span-3 text-center font-mono text-slate-300">{row.ut}</span>
                      <span className="col-span-3 text-center font-mono text-slate-300">{row.mid}</span>
                      <span className="col-span-2 text-right font-mono font-bold text-cyan-400">{row.grade}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-300">Chapter 6 (Quadratic Equations) Homework Assigned</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
                    Due Tomorrow
                  </span>
                </div>
              </div>
            )}

            {activeRole === 'student' && (
              /* Student LMS Portal Mockup */
              <div className="rounded-3xl bg-slate-900 p-5 sm:p-7 text-white border border-slate-800 shadow-2xl">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="text-xs font-mono text-emerald-400 block font-bold">SMART LMS LEARNING HUB</span>
                      <span className="text-sm font-bold text-white block">Physics • Laws of Motion (Lecture 04)</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono bg-cyan-500/20 text-cyan-400 px-2.5 py-1 rounded-full font-bold">
                    HD Video 1080p
                  </span>
                </div>

                {/* Video Player Visual Simulator */}
                <div className="aspect-video w-full rounded-2xl bg-slate-950 border border-slate-800 p-4 flex flex-col justify-between mb-4 relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-300">
                      Chapter 3.4: Newton's Third Law Experiments
                    </span>
                    <span className="text-xs font-mono text-cyan-400">24:18 / 38:00</span>
                  </div>

                  <div className="text-center my-auto">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/30 border border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/20">
                      ▶
                    </div>
                  </div>

                  {/* Playback progress bar */}
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#004658] via-cyan-400 to-[#00D8FF] h-full w-[64%]" />
                  </div>
                </div>

                {/* Interactive Quiz Pill */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Practice Quiz #3</span>
                      <span className="text-xs font-bold text-white block">Score: 9/10 (90%)</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">Passed</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Reference Notes</span>
                      <span className="text-xs font-bold text-white block">Kinematics.pdf</span>
                    </div>
                    <FileText className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </div>
            )}

            {activeRole === 'management' && (
              /* Principal / Management Dashboard Mockup */
              <div className="rounded-3xl bg-slate-900 p-5 sm:p-7 text-white border border-slate-800 shadow-2xl">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <div>
                      <span className="text-xs font-mono text-purple-400 block font-bold">EXECUTIVE WAR ROOM</span>
                      <span className="text-sm font-bold text-white block">Campus Institutional Health</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-full font-bold">
                    Audit Certified
                  </span>
                </div>

                {/* Executive KPI Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Total Campus Enrollments</span>
                    <span className="text-2xl font-mono font-black text-white block mt-1">2,850</span>
                    <span className="text-[10px] text-emerald-400 font-mono">+12.4% Admissions YoY</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Fiscal Fee Realization</span>
                    <span className="text-2xl font-mono font-black text-cyan-400 block mt-1">₹4.12 Cr</span>
                    <span className="text-[10px] text-cyan-300 font-mono">98.2% Direct Bank Sync</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-slate-300">Staff Biometric Payroll: <strong>All 120 Payslips Auto-Generated</strong></span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">Today</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-slate-300">CBSE Affiliation Renewal File: <strong>Data Pre-Audited & Ready</strong></span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400">1-Click</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SchoolEcosystem
