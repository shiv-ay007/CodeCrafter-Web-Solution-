import React from 'react'
import { Link } from 'react-router-dom'
import {
  FileText,
  UserCheck,
  Calendar,
  CreditCard,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react'

const lifecycleSteps = [
  {
    step: '01',
    title: 'Paperless Digital Admission & Verification',
    badge: 'Stage 1: Onboarding',
    icon: FileText,
    desc: 'Eliminate physical paperwork with customized online registration forms, instant document OCR scanning, automated merit ranking, and fee-locked seat confirmations.',
    tags: ['Aadhaar / Document OCR', 'Online Registration Portal', 'Instant Merit Engine', 'Fee Deposit Link']
  },
  {
    step: '02',
    title: 'Biometric RFID & Smart Campus Access',
    badge: 'Stage 2: Daily Operations',
    icon: UserCheck,
    desc: 'Smart RFID cards and facial recognition readers at campus gates and bus doors instantly log student entry and send parents automated push notifications in under 2 seconds.',
    tags: ['UHF RFID Turnstiles', 'Facial Recognition Sync', '< 2s Parent SMS Alert', 'Automatic Absentee Roster']
  },
  {
    step: '03',
    title: 'AI Timetable, Smart Class & Interactive LMS',
    badge: 'Stage 3: Academics',
    icon: Calendar,
    desc: 'Generate conflict-free faculty schedules in seconds, conduct interactive smartboard classes, upload recorded lectures, and assign auto-graded homework exercises.',
    tags: ['Conflict-Free Timetable', 'Smartboard Lecture Sync', 'Anti-Cheat Online Quizzes', 'Digital Library PDFs']
  },
  {
    step: '04',
    title: 'Automated Fee Vault & Split Ledger',
    badge: 'Stage 4: Revenue & Finance',
    icon: CreditCard,
    desc: 'Collect tuition, transport, and lab fees through integrated UPI QR codes and netbanking. Set automated WhatsApp reminders for overdue balances and generate GST receipts.',
    tags: ['UPI / Card Gateways', 'Zero-Bounce Reminders', 'Automated GST Invoices', 'Installment Vault']
  },
  {
    step: '05',
    title: '1-Click Board-Compliant Digital Report Cards',
    badge: 'Stage 5: Evaluation',
    icon: Award,
    desc: 'Automate complex CCE, GPA, and NEP 2020 grading algorithms with single-click grade calculation, personalized teacher remarks, and tamper-proof QR-verified report cards.',
    tags: ['NEP 2020 & CBSE Ready', 'Automated CCE Grading', 'QR Transcripts', 'Direct Parent App Delivery']
  }
]

const SchoolWorkflow = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto bg-white" id="school-workflow">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs font-black uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          The Automated Student Lifecycle
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
          From First Inquiry to Graduation. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#006680] to-[#00D8FF]">
            Fully Connected Campus Workflows.
          </span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Remove fragmentation between departments. Follow the five-stage automated pipeline powering modern digital institutions.
        </p>
      </div>

      {/* Visual Roadmap Steps */}
      <div className="relative max-w-5xl mx-auto">
        {/* Continuous Connecting Line for Desktop */}
        <div className="hidden lg:block absolute left-[39px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#004658] via-cyan-400 to-emerald-400 opacity-30" />

        <div className="space-y-6 sm:space-y-8">
          {lifecycleSteps.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="group relative rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-[#004658]/40 hover:bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#004658]/5 flex flex-col lg:flex-row items-start gap-6"
              >
                {/* Step Number Circle */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center group-hover:border-[#004658] group-hover:bg-[#004658] transition-all duration-300">
                    <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-cyan-300 transition-colors">
                      STAGE
                    </span>
                    <span className="text-xl font-mono font-black text-[#004658] group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#004658]/8 text-[#004658] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-700 bg-cyan-100/70 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-400 font-mono">
                      Step {index + 1} of 5
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#004658] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Feature Tag Chips */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-white border border-slate-200/80 px-3 py-1 rounded-lg"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Connected Guarantee Banner */}
      <div className="mt-14 max-w-5xl mx-auto rounded-3xl bg-slate-950 p-7 sm:p-9 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">
              ZERO SYSTEM DOWNTIME • ISO & NEP 2020 COMPLIANT
            </span>
            <span className="text-base sm:text-lg font-black text-white block mt-0.5">
              Ready to modernize your institution's complete lifecycle?
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/schedule-consultation"
            className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 px-5 py-3 rounded-xl transition-all duration-300 shadow-md shadow-cyan-500/20"
          >
            Schedule Consultation
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            to="/engineering-standards"
            className="inline-flex items-center gap-1 font-bold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl transition-colors"
          >
            Engineering Standards
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SchoolWorkflow
