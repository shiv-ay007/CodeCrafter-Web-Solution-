import React, { useState } from "react";
import { Link } from "react-router-dom";

const RealtimeFeatures = () => {
  const [messages, setMessages] = useState([
    { sender: "User", text: "Is the real-time notification live?" },
    { sender: "CodeCrafter Bot", text: "⚡ Yes! WebSockets & FCM push notifications connected instantly." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { sender: "You", text: input }]);
      setInput("");
    }
  };

  const features = [
    { title: "WebSocket Live Chat Engines", desc: "Build sub-50ms peer-to-peer or group chat interfaces with message delivery receipts, typing indicators, and media attachments." },
    { title: "Push Notifications (FCM & APNs)", desc: "Targeted push notifications with deep links, action buttons, and segmented user campaigns." },
    { title: "Real-Time GPS Telemetry", desc: "Live driver & order tracking on interactive Mapbox & Google Maps views." },
    { title: "Live Activity Badges (iOS Dynamic Island)", desc: "Support for iOS Live Activities and Android Status Bar ongoing notifications." }
  ];

  return (
    <div className="w-full bg-[#FBFDFD] pt-32 sm:pt-40 pb-24 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Gradient */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none rounded-full opacity-50 blur-[130px] -z-10"
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(0, 70, 88, 0.22) 0%, rgba(0, 168, 204, 0.08) 50%, rgba(251, 253, 253, 0) 80%)"
        }}
      />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004658]/10 border border-[#004658]/20 text-[#004658] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-[#004658] animate-pulse" />
          <span>💬 Real-Time Mobile Features</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 font-['Outfit',sans-serif]">
          Engage Mobile Users with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc]">
            Real-Time Push & Chat
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Integrate high-speed WebSockets, Firebase Push Notifications, and live GPS tracking into your iOS and Android apps.
        </p>
      </div>

      {/* Interactive Push & Chat Simulator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#002B34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[#4EF0C5] text-xs font-bold uppercase tracking-widest block mb-1">Interactive Telemetry Console</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif]">Test Live WebSocket Chat Stream</h2>
          </div>

          <div className="bg-[#001D25] border border-white/10 p-6 rounded-2xl space-y-4">
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {messages.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm flex justify-between">
                  <span className="font-bold text-[#4EF0C5]">{m.sender}:</span>
                  <span className="text-slate-200 font-medium">{m.text}</span>
                </div>
              ))}
            </div>

            <form onSubmit={sendMessage} className="flex gap-2">
              <input
                type="text"
                placeholder="Type a real-time test message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-[#4EF0C5]"
              />
              <button type="submit" className="px-5 py-2.5 rounded-xl bg-[#4EF0C5] text-[#002B34] font-bold text-xs sm:text-sm hover:bg-[#3be0b5] cursor-pointer">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#004658]/15 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit',sans-serif]">{item.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#004658] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] mb-4">Want Real-Time Chat & Push in Your App?</h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">Talk to our Mobile Real-Time Architecture Leads today.</p>
          <Link to="/schedule-consultation" className="px-8 py-3.5 rounded-full bg-white text-[#004658] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all inline-block shadow-lg">
            Schedule Real-Time Feature Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RealtimeFeatures;
