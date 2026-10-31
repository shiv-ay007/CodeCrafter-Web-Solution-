import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Bus,
  ShieldCheck,
  MapPin,
  Clock,
  Radio,
  CheckCircle2,
  AlertTriangle,
  QrCode,
  Smartphone,
  ArrowUpRight,
  Sparkles,
  Wifi,
  Compass,
  Users
} from 'lucide-react'

const busStops = [
  { name: 'Depot / Campus Terminal', time: '07:15 AM', status: 'Departed', isPast: true },
  { name: 'City Center Metro Station', time: '07:32 AM', status: 'Completed', isPast: true },
  { name: 'Sector 62 Green Valley', time: '07:44 AM', status: 'Next Stop (2 Mins)', isCurrent: true },
  { name: 'Mayur Vihar Extension', time: '07:56 AM', status: 'Scheduled', isFuture: true },
  { name: 'Main High School Gate', time: '08:10 AM', status: 'Final Destination', isFuture: true },
]

const SchoolTransportAndSecurity = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('bus04')

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto bg-slate-900 text-white rounded-3xl border border-slate-800 my-12 overflow-hidden relative" id="school-transport">
      {/* Background ambient lighting */}
      <div 
        className="absolute -top-32 -left-32 w-[600px] h-[600px] pointer-events-none rounded-full opacity-25 blur-3xl -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0, 216, 255, 0.4) 0%, rgba(0, 70, 88, 0.2) 70%)'
        }}
      />
      <div 
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] pointer-events-none rounded-full opacity-20 blur-3xl -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(0, 70, 88, 0.1) 70%)'
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-black uppercase tracking-wider mb-4">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            Next-Gen Fleet Telemetry & Student Safety Hub
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
            Live GPS School Bus Telemetry & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              Campus Security Shield
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Protect every student during transit and inside campus with real-time GPS telemetry, geofence trigger notifications, and biometric gate verification.
          </p>
        </div>

        {/* Pictorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Visual GPS Transit Map & Route Telemetry */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Map Simulator Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                    <Bus className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 block font-bold">VEHICLE ROUTE #04</span>
                    <span className="text-base font-extrabold text-white block">Sector 62 ➔ Campus Express</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    LIVE TELEMETRY
                  </span>
                </div>
              </div>

              {/* Graphic Route Map Visualizer */}
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 mb-6 relative overflow-hidden">
                {/* Visual grid pattern */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#00D8FF 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800/80">
                    <span>Route Progress: 3 of 5 Stops Completed</span>
                    <span className="text-cyan-400 font-bold">Speed: 38 km/h</span>
                  </div>

                  {/* Route Timeline with Glowing Nodes */}
                  <div className="relative pl-6 space-y-4">
                    {/* Vertical Connecting Route Bar */}
                    <div className="absolute left-[9px] top-2 bottom-2 w-1 bg-gradient-to-b from-emerald-500 via-cyan-400 to-slate-700 rounded-full" />

                    {busStops.map((stop, sIdx) => (
                      <div key={sIdx} className="relative flex items-center justify-between text-xs group">
                        {/* Dot indicator */}
                        <div className={`absolute -left-[20px] w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          stop.isCurrent
                            ? 'bg-cyan-400 border-white shadow-lg shadow-cyan-400/50 scale-125'
                            : stop.isPast
                            ? 'bg-emerald-500 border-slate-900'
                            : 'bg-slate-800 border-slate-700'
                        }`}>
                          {stop.isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                        </div>

                        <div>
                          <span className={`font-bold block ${
                            stop.isCurrent ? 'text-cyan-300 font-extrabold text-sm' : stop.isPast ? 'text-slate-300' : 'text-slate-500'
                          }`}>
                            {stop.name}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Scheduled: {stop.time}
                          </span>
                        </div>

                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                          stop.isCurrent
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse'
                            : stop.isPast
                            ? 'bg-emerald-500/15 text-emerald-400'
                            : 'bg-slate-800 text-slate-500'
                        }`}>
                          {stop.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hardware Telemetry Diagnostics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block">Driver Status</span>
                  <span className="text-xs font-mono font-bold text-white block mt-1">Verified & Active</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block">Onboard CCTV</span>
                  <span className="text-xs font-mono font-bold text-emerald-400 block mt-1">4 / 4 Live Feeds</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block">Fuel Telemetry</span>
                  <span className="text-xs font-mono font-bold text-cyan-400 block mt-1">76% Full Tank</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block">SOS Guard Button</span>
                  <span className="text-xs font-mono font-bold text-emerald-400 block mt-1">Armed & Ready</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">
                Compatible with all standard AIS-140 GPS transponders & OBD-II trackers.
              </span>
              <span className="text-cyan-400 font-mono font-bold">
                Telemetry Frequency: 300ms Ping
              </span>
            </div>
          </div>

          {/* Right Column: Smart Campus Security & Parent Proximity Alert Box */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Geofence Alert Push Simulator */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-2.5 mb-4">
                <Smartphone className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Automated Parent Push Alert Simulator
                </span>
              </div>

              {/* Notification bubble mockup */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-cyan-500/30 shadow-xl mb-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    Proximity Geofence Triggered
                  </span>
                  <span>Just Now</span>
                </div>
                <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                  "Dear Parent, School Bus #04 is <strong>450 meters away</strong> from your student's stop (Green Valley Gate 2). Please arrive at the stop within <strong>2 minutes</strong>."
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800">
                  <span>Student: Aarav Verma</span>
                  <span className="text-emerald-400">Driver Call: Enabled</span>
                </div>
              </div>

              {/* Biometric Gate Security */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Visitor QR Gate Pass</span>
                      <span className="text-[10px] text-slate-400 block">Instant photo capture & OTP validation</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-purple-500/20 text-purple-300">
                    PAPERLESS
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">RFID UHF Turnstile Sync</span>
                      <span className="text-[10px] text-slate-400 block">2,850 student gates cleared in 12 mins</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-300">
                    AUTOMATED
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Inquire Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#004658] via-[#003442] to-slate-950 border border-cyan-800/50 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                  Full Turnkey Setup
                </span>
                <h4 className="text-lg font-black text-white mb-2">
                  Need GPS Hardware, RFID Cards & Biometric Devices?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  We supply, calibrate, and integrate ready-to-use GPS trackers, UHF RFID cards, and biometric terminals pre-configured to your institutional ERP cloud.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 font-bold text-xs text-slate-900 bg-cyan-400 hover:bg-cyan-300 px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-cyan-500/20"
                >
                  Inquire Hardware & ERP Setup
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/security-ip-protection"
                  className="inline-flex items-center gap-1 font-bold text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-3.5 py-2.5 rounded-xl transition-colors"
                >
                  Security Standards
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SchoolTransportAndSecurity
