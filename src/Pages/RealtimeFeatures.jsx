
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  BellRing,
  MapPin,
  Activity,
  CheckCheck,
  ShieldCheck,
  Zap,
  Smartphone,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Wifi,
  RefreshCw,
  LockKeyhole,
  Send,
  CheckCircle2,
  CircleDot,
  Radio,
} from "lucide-react";

const RealtimeFeatures = () => {
  const [messages, setMessages] = useState([
    {
      sender: "User",
      text: "Is the real-time notification live?",
    },
    {
      sender: "CodeCrafter Bot",
      text: "⚡ Yes! This demo illustrates instant messaging experiences.",
    },
  ]);

  const [input, setInput] = useState("");
  const [notificationType, setNotificationType] = useState("message");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "You", text: input.trim() },
    ]);

    setInput("");
  };

  const features = [
    {
      title: "WebSocket Live Chat Engines",
      desc: "Build responsive peer-to-peer or group chat interfaces with message delivery receipts, typing indicators, and media attachments.",
      icon: MessageCircle,
      number: "01",
    },
    {
      title: "Push Notifications (FCM & APNs)",
      desc: "Deliver targeted push notifications with deep links, action buttons, and personalized user campaigns.",
      icon: BellRing,
      number: "02",
    },
    {
      title: "Real-Time GPS Telemetry",
      desc: "Build live driver, delivery, and order tracking experiences with map integrations and permission controls.",
      icon: MapPin,
      number: "03",
    },
    {
      title: "Live Activity & Status Updates",
      desc: "Show changing progress, active tasks, and meaningful status information across supported mobile interfaces.",
      icon: Activity,
      number: "04",
    },
  ];

  const notificationExamples = {
    message: {
      title: "New message received",
      description: "Your support team has sent you a new reply.",
      label: "MESSAGE ALERT",
      icon: MessageCircle,
    },
    order: {
      title: "Order status updated",
      description: "Your order has moved to the next processing stage.",
      label: "ORDER UPDATE",
      icon: BellRing,
    },
    reminder: {
      title: "Reminder notification",
      description: "Your scheduled activity is coming up soon.",
      label: "SMART REMINDER",
      icon: Clock3,
    },
  };

  const activeNotification = notificationExamples[notificationType];
  const NotificationIcon = activeNotification.icon;

  return (
    <div className="relative w-full overflow-hidden bg-[#FBFDFD] pt-32 pb-24 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 sm:pt-40">

      {/* Ambient Background */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[600px] w-[1100px] -translate-x-1/2 rounded-full opacity-50 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(0,70,88,0.18) 0%, rgba(0,168,204,0.08) 50%, rgba(251,253,253,0) 80%)",
        }}
      />

      {/* 1. HERO SECTION - EXISTING */}
      <section className="relative z-10">
        <div className="mx-auto mb-16 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004658]/20 bg-[#004658]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#004658] sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#004658]" />
            <span>💬 Real-Time Mobile Features</span>
          </div>

          <h1 className="mx-auto mb-6 max-w-5xl font-['Outfit',sans-serif] text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Engage Mobile Users with{" "}
            <span className="bg-gradient-to-r from-[#004658] via-[#005a72] to-[#00a8cc] bg-clip-text text-transparent">
              Real-Time Push & Chat
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-base font-normal leading-relaxed text-slate-600 sm:text-xl">
            Integrate high-speed WebSockets, Firebase Push Notifications, and
            live GPS tracking into your iOS and Android applications.
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE CHAT SIMULATOR - EXISTING */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#002B34] p-6 text-white shadow-2xl sm:p-10">
          <div className="mb-8 max-w-3xl">
            <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-[#4EF0C5]">
              Interactive Telemetry Console
            </span>

            <h2 className="font-['Outfit',sans-serif] text-2xl font-bold sm:text-3xl">
              Test the Chat Experience
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Send a sample message and see how a messaging interface can
              display conversations.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/10 bg-[#001D25] p-4 sm:p-6">
            <div
              aria-live="polite"
              className="max-h-64 space-y-3 overflow-y-auto"
            >
              {messages.map((message, index) => (
                <div
                  key={`${message.sender}-${index}`}
                  className={`flex flex-col gap-2 rounded-xl border border-white/10 p-3 sm:flex-row sm:items-start sm:justify-between ${
                    message.sender === "You"
                      ? "bg-[#004658]/60"
                      : "bg-white/[0.04]"
                  }`}
                >
                  <span className="shrink-0 text-xs font-bold text-[#4EF0C5] sm:text-sm">
                    {message.sender}
                  </span>

                  <span className="text-xs leading-5 text-slate-200 sm:text-sm sm:text-right">
                    {message.text}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={sendMessage} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Type a sample message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Sample chat message"
                className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#4EF0C5]"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4EF0C5] px-5 py-3 text-sm font-bold text-[#002B34] transition hover:bg-[#3be0b5]"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>

            <p className="text-xs text-slate-500">
              Demo only: messages are stored in this page's React state.
            </p>
          </div>
        </div>
      </section>

      {/* 3. NEW: REAL-TIME EXPERIENCE SHOWCASE */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-[#004658]/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658]">
            <Zap size={15} />
            Real-Time Experience Showcase
          </span>

          <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Make Every Interaction{" "}
            <span className="bg-gradient-to-r from-[#004658] to-[#00A8CC] bg-clip-text text-transparent">
              Feel Instant.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Design connected mobile experiences that keep users informed,
            engaged, and up to date.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              icon: MessageCircle,
              title: "Connected Conversations",
              desc: "Messaging interfaces with delivery indicators, online presence, and typing feedback.",
              tag: "LIVE CHAT",
              points: ["Message status", "Typing indicators", "Conversation updates"],
            },
            {
              icon: BellRing,
              title: "Contextual Notifications",
              desc: "Useful alerts that help users act on messages, reminders, and order changes.",
              tag: "PUSH EVENTS",
              points: ["Event-based alerts", "Notification actions", "Deep-link support"],
            },
            {
              icon: MapPin,
              title: "Location-Aware Apps",
              desc: "Tracking interfaces for deliveries, field teams, bookings, and location-based services.",
              tag: "LIVE TRACKING",
              points: ["Map integration", "Location permissions", "Tracking states"],
            },
            {
              icon: Activity,
              title: "Live Activity Updates",
              desc: "Keep changing information visible with clear progress and status indicators.",
              tag: "LIVE STATUS",
              points: ["Progress states", "Activity indicators", "Reconnect handling"],
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8CC]/40 hover:shadow-xl sm:p-8"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658] transition-all group-hover:bg-[#004658] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <span className="rounded-full border border-slate-200 px-3 py-1.5 text-[10px] font-bold tracking-wider text-slate-500">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-950 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>

                <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[#008BA5]"
                      />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between rounded-xl bg-[#FBFDFD] px-4 py-3">
                  <span className="text-xs font-semibold text-slate-500">
                    Capability {String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowRight
                    size={17}
                    className="text-[#004658] transition-transform group-hover:translate-x-1"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. EXISTING FEATURES GRID */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#008BA5]">
            Core Capabilities
          </span>

          <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Real-Time Features Built for Your Product
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Select the capabilities that make your application more responsive
            and useful for its audience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group rounded-3xl border border-[#004658]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658]/[0.07] text-[#004658] transition-colors group-hover:bg-[#004658] group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-[#008BA5]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mb-3 font-['Outfit',sans-serif] text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* 5. NEW: INTERACTIVE NOTIFICATION CENTER */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-[#004658]/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658]">
              <BellRing size={15} />
              Notification Experience
            </span>

            <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              The Right Update,{" "}
              <span className="bg-gradient-to-r from-[#004658] to-[#00A8CC] bg-clip-text text-transparent">
                at the Right Moment.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Explore sample notification types for messaging, order
              management, and scheduled reminders. Switch between examples
              to preview the experience.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Zap,
                  title: "Context-aware updates",
                  desc: "Present useful information based on application events.",
                },
                {
                  icon: ShieldCheck,
                  title: "User-focused controls",
                  desc: "Respect notification preferences and device permissions.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-ready experience",
                  desc: "Design alerts for supported mobile platforms and devices.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#004658]/[0.07] text-[#004658]">
                      <Icon size={19} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Preview */}
          <div className="rounded-3xl bg-[#002B34] p-5 text-white shadow-2xl sm:p-8">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#4EF0C5]">
                  Interactive Preview
                </p>
                <h3 className="mt-2 font-['Outfit',sans-serif] text-xl font-bold sm:text-2xl">
                  Notification Center
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#4EF0C5]/20 bg-[#4EF0C5]/10 text-[#4EF0C5]">
                <BellRing size={23} />
              </div>
            </div>

            <div className="mb-6 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-[#001D25] p-1.5">
              {[
                ["message", "Messages"],
                ["order", "Orders"],
                ["reminder", "Reminders"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setNotificationType(value)}
                  className={`rounded-xl px-2 py-3 text-xs font-bold transition-all ${
                    notificationType === value
                      ? "bg-[#4EF0C5] text-[#002B34]"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#001D25] p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#4EF0C5]">
                  {activeNotification.label}
                </span>
                <span className="text-[10px] text-slate-500">
                  Sample preview
                </span>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#004658] text-[#4EF0C5]">
                  <NotificationIcon size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-base font-bold text-white">
                    {activeNotification.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {activeNotification.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-[#4EF0C5]">
                    <CheckCircle2 size={15} />
                    Preview updated successfully
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              This is an interactive UI preview. Real push delivery requires
              the relevant platform services and backend integration.
            </p>
          </div>
        </div>
      </section>

      {/* 6. NEW: HOW REAL-TIME TECHNOLOGY WORKS */}
      <section className="relative z-10 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-[#004658]/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#004658]">
              <Radio size={15} />
              Connected Architecture
            </span>

            <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold text-slate-950 sm:text-4xl lg:text-5xl">
              From User Action to{" "}
              <span className="bg-gradient-to-r from-[#004658] to-[#00A8CC] bg-clip-text text-transparent">
                Instant Updates.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              A simplified view of how a real-time feature can communicate
              between a mobile app, backend services, and connected users.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              {
                icon: Smartphone,
                number: "01",
                title: "User Action",
                desc: "A user sends a message or performs an action in the app.",
              },
              {
                icon: Radio,
                number: "02",
                title: "Realtime Service",
                desc: "WebSockets or event services carry the relevant event.",
              },
              {
                icon: Activity,
                number: "03",
                title: "Backend Processing",
                desc: "The backend validates, processes, and routes the event.",
              },
              {
                icon: BellRing,
                number: "04",
                title: "Device Update",
                desc: "Connected clients update their UI or receive supported push alerts.",
              },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <React.Fragment key={step.number}>
                  <article className="relative rounded-3xl border border-slate-200 bg-[#FBFDFD] p-6 transition-all hover:border-[#00A8CC]/40 hover:shadow-lg sm:p-7">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004658] text-[#4EF0C5]">
                        <Icon size={22} />
                      </div>
                      <span className="text-sm font-bold tracking-widest text-[#008BA5]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.desc}
                    </p>

                    {index < 3 && (
                      <ArrowRight
                        size={19}
                        className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#008BA5] md:block"
                      />
                    )}
                  </article>
                </React.Fragment>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-[#004658]/10 bg-[#004658]/[0.04] p-5 sm:p-6">
            <p className="text-center text-sm leading-7 text-slate-600">
              <span className="font-bold text-[#004658]">
                Architecture note:
              </span>{" "}
              WebSockets support persistent, bidirectional connections.
              Push notifications use platform services and may be delayed or
              unavailable depending on device settings and connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* 7. NEW: RELIABILITY & SECURITY */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-3xl bg-[#002B34] p-6 text-white shadow-2xl sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4EF0C5]/20 bg-[#4EF0C5]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#4EF0C5]">
                <ShieldCheck size={15} />
                Reliability & Security
              </span>

              <h2 className="font-['Outfit',sans-serif] text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Real-Time Experiences Need a{" "}
                <span className="text-[#4EF0C5]">Reliable Foundation.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                A dependable implementation accounts for connectivity changes,
                permissions, event validation, and the protection of user data.
              </p>

              <Link
                to="/schedule-consultation"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#4EF0C5] px-6 py-3.5 text-sm font-bold text-[#002B34] transition hover:bg-[#3be0b5]"
              >
                Discuss Your Requirements
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  icon: LockKeyhole,
                  title: "Secure Connections",
                  desc: "Use encrypted transport and server-side authorization.",
                },
                {
                  icon: RefreshCw,
                  title: "Reconnect Handling",
                  desc: "Recover gracefully when connectivity changes.",
                },
                {
                  icon: CheckCheck,
                  title: "Event Validation",
                  desc: "Validate incoming events and manage delivery states.",
                },
                {
                  icon: Wifi,
                  title: "Network Awareness",
                  desc: "Design clear loading, offline, and connection states.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#4EF0C5]/30 hover:bg-white/[0.07]"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EF0C5]/10 text-[#4EF0C5]">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-400">
                      {item.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. EXISTING CTA */}
      <section className="relative z-10 mx-auto max-w-[1360px] px-4 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#004658] p-8 text-center text-white shadow-xl sm:p-12">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#4EF0C5]">
            <CircleDot size={14} />
            Let's Build Together
          </span>

          <h2 className="mb-4 font-['Outfit',sans-serif] text-2xl font-bold sm:text-4xl">
            Want Real-Time Chat & Push in Your App?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            Talk to our mobile engineering team about messaging, notifications,
            live tracking, and real-time application experiences.
          </p>

          <Link
            to="/schedule-consultation"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#004658] shadow-lg transition hover:bg-[#EAFBFA]"
          >
            Schedule Real-Time Feature Call
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RealtimeFeatures;
