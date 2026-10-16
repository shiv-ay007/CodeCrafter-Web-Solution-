import React from "react";
import { Link } from 'react-router-dom'

// Comprehensive, High-Fidelity Tech Stack Data (16 Enterprise Modules)
const techStackData = [
  {
    id: 'react',
    name: 'React 19',
    category: 'Frontend',
    type: 'Reactive UI Engine',
    tagline: 'Concurrent rendering, Suspense & Server Components',
    badge: 'Core UI',
    color: '#00D8FF',
    gradient: 'from-[#00D8FF]/15 via-[#00D8FF]/5 to-transparent',
    borderColor: 'hover:border-[#00D8FF]/60',
    metric: '< 16ms Frame Budget',
    version: 'v19.0.0',
    capabilities: ['Server Components', 'Concurrent Hooks', 'Virtual DOM Diffing', 'Transitions'],
    synergy: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    codeSnippet: `// Concurrent React 19 Engine
import { useTransition, useDeferredValue } from 'react'
export function CoreEngine({ telemetry }) {
  const [isPending, startTransition] = useTransition()
  return <ClientStream state={telemetry} pending={isPending} />
}`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#004658]/5 via-[#00D8FF]/10 to-transparent">
        <div className="absolute w-28 h-28 rounded-full border border-[#00D8FF]/20 animate-[spin_12s_linear_infinite]" />
        <div className="absolute w-36 h-36 rounded-full border border-dashed border-[#00D8FF]/15 animate-[spin_20s_linear_infinite_reverse]" />
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="10" fill="#00D8FF" className="animate-pulse" />
          <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="4.5" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="4.5" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="4.5" transform="rotate(120 50 50)" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="10" fill="#00D8FF" />
        <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="5" transform="rotate(0 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="5" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#00D8FF" strokeWidth="5" transform="rotate(120 50 50)" />
      </svg>
    )
  },
  {
    id: 'nextjs',
    name: 'Next.js 15',
    category: 'Frontend',
    type: 'Full-Stack Framework',
    tagline: 'Hybrid SSR, Turbopack & Edge streaming pipeline',
    badge: 'Edge Ready',
    color: '#0F172A',
    gradient: 'from-slate-900/15 via-slate-800/5 to-transparent',
    borderColor: 'hover:border-slate-800/60',
    metric: '99+ Lighthouse Score',
    version: 'v15.1.0',
    capabilities: ['App Router 2.0', 'Streaming SSR', 'Server Actions', 'Edge Middleware'],
    synergy: ['React', 'TypeScript', 'Node.js'],
    codeSnippet: `// Edge-Rendered Streaming Handler
export const runtime = 'edge'
export async function GET(req: Request) {
  return Response.json({ status: 'live', edgeLatency: '< 5ms' })
}`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900/5 via-slate-800/10 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="56" fill="#0F172A" />
          <path d="M42 42V86H50V56.5L81 94.5C83.5 92.5 86 90 88 87.5L47.5 38.5C44 39.5 42 42 42 42Z" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="56" fill="#0F172A" />
        <path d="M42 42V86H50V56.5L81 94.5C83.5 92.5 86 90 88 87.5L47.5 38.5C44 39.5 42 42 42 42Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    type: 'Strict Type System',
    tagline: 'Zero-runtime-error compile-time type verification',
    badge: 'Type-Safe',
    color: '#3178C6',
    gradient: 'from-[#3178C6]/15 via-[#3178C6]/5 to-transparent',
    borderColor: 'hover:border-[#3178C6]/60',
    metric: '100% Strict Typing',
    version: 'v5.7.2',
    capabilities: ['Generics & Unions', 'Type Narrowing', 'AST Transformations', 'Strict Nulls'],
    synergy: ['React', 'Node.js', 'Next.js'],
    codeSnippet: `// Strict Enterprise Schema Contract
export type DeepImmutable<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepImmutable<T[K]> : T[K]
}`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#3178C6]/10 via-blue-500/5 to-transparent">
        <div className="absolute font-mono text-[9px] text-[#3178C6]/30 font-bold top-2 left-3">{'type T = Promise<Data>'}</div>
        <div className="absolute font-mono text-[9px] text-[#3178C6]/30 font-bold bottom-2 right-3">{'readonly interface Contract'}</div>
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-lg rounded-2xl" viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="28" fill="#3178C6" />
          <path d="M72 40H36V52H48V96H60V52H72V40Z" fill="#FFFFFF" />
          <path d="M74 84C77 91 84 96 95 96C105 96 112 89 112 80C112 70 103 66 94 63C86 60 81 58 81 54C81 50 85 47 91 47C96 47 100 50 102 55L111 49C107 43 100 38 91 38C80 38 71 44 71 54C71 64 79 68 89 72C98 75 102 77 102 82C102 87 97 89 91 89C84 89 79 84 77 78L74 84Z" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#3178C6" />
        <path d="M72 40H36V52H48V96H60V52H72V40Z" fill="#FFFFFF" />
        <path d="M74 84C77 91 84 96 95 96C105 96 112 89 112 80C112 70 103 66 94 63C86 60 81 58 81 54C81 50 85 47 91 47C96 47 100 50 102 55L111 49C107 43 100 38 91 38C80 38 71 44 71 54C71 64 79 68 89 72C98 75 102 77 102 82C102 87 97 89 91 89C84 89 79 84 77 78L74 84Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    type: 'Atomic Styling Engine',
    tagline: 'High-speed utility CSS & fluid micro-interactions',
    badge: 'Design System',
    color: '#06B6D4',
    gradient: 'from-[#06B6D4]/15 via-[#06B6D4]/5 to-transparent',
    borderColor: 'hover:border-[#06B6D4]/60',
    metric: 'Zero Runtime Overhead',
    version: 'v4.0.0',
    capabilities: ['JIT Compiler', 'Arbitrary Tokens', 'Fluid Typography', 'CSS Animations'],
    synergy: ['React', 'Figma', 'Next.js'],
    codeSnippet: `@layer utilities {
  .glass-card {
    @apply bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-2xl;
  }
}`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#06B6D4]/10 via-cyan-400/5 to-transparent">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="w-48 h-20 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-xl animate-pulse" />
        </div>
        <svg className="w-18 h-18 relative z-10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 128 128" fill="none">
          <path d="M34 40C40 26.6667 52 20 70 20C97 20 100 40 112 44C120 46.6667 125.333 44 128 36C122 49.3333 110 56 92 56C65 56 62 36 50 32C42 29.3333 36.6667 32 34 40ZM0 80C6 66.6667 18 60 36 60C63 60 66 80 78 84C86 86.6667 91.3333 84 94 76C88 89.3333 76 96 58 96C31 96 28 76 16 72C8 69.3333 2.66667 72 0 80Z" fill="#06B6D4" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <path d="M34 40C40 26.6667 52 20 70 20C97 20 100 40 112 44C120 46.6667 125.333 44 128 36C122 49.3333 110 56 92 56C65 56 62 36 50 32C42 29.3333 36.6667 32 34 40ZM0 80C6 66.6667 18 60 36 60C63 60 66 80 78 84C86 86.6667 91.3333 84 94 76C88 89.3333 76 96 58 96C31 96 28 76 16 72C8 69.3333 2.66667 72 0 80Z" fill="#06B6D4" />
      </svg>
    )
  },
  {
    id: 'nodejs',
    name: 'Node.js 24',
    category: 'Backend & Enterprise',
    type: 'High-Throughput Runtime',
    tagline: 'Asynchronous event loop & non-blocking high-load I/O',
    badge: 'Core Runtime',
    color: '#339933',
    gradient: 'from-[#339933]/15 via-[#339933]/5 to-transparent',
    borderColor: 'hover:border-[#339933]/60',
    metric: '150k+ Concurrent Conn.',
    version: 'v24.2.0',
    capabilities: ['V8 TurboFan', 'Worker Threads', 'WebStreams API', 'Cluster Mode'],
    synergy: ['Express', 'MongoDB', 'Redis'],
    codeSnippet: `// Clustered High-Load Worker
import cluster from 'node:cluster'
import http from 'node:http'
import { cpus } from 'node:os'
if (cluster.isPrimary) cpus().forEach(() => cluster.fork())`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#339933]/10 via-emerald-500/5 to-transparent">
        <div className="absolute w-24 h-24 border border-emerald-500/20 rotate-45 animate-pulse" />
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 128 128" fill="none">
          <path d="M64 8L112 35.7V92.3L64 120L16 92.3V35.7L64 8Z" fill="#339933" />
          <path d="M64 24L96 42.5V79.5L64 98L32 79.5V42.5L64 24Z" fill="#000000" fillOpacity="0.15" />
          <path d="M64 48C57.4 48 52 53.4 52 60C52 69 64 71.5 64 77C64 79 61.5 80 58 80C52 80 48 76 48 76L44 83C44 83 49.5 88 58 88C67.5 88 74 83 74 76C74 66.5 62 64.5 62 59C62 57.5 63.5 56 67 56C71.5 56 75 59 75 59L78 51C78 51 73 48 64 48Z" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <path d="M64 8L112 35.7V92.3L64 120L16 92.3V35.7L64 8Z" fill="#339933" />
        <path d="M64 24L96 42.5V79.5L64 98L32 79.5V42.5L64 24Z" fill="#000000" fillOpacity="0.15" />
        <path d="M64 48C57.4 48 52 53.4 52 60C52 69 64 71.5 64 77C64 79 61.5 80 58 80C52 80 48 76 48 76L44 83C44 83 49.5 88 58 88C67.5 88 74 83 74 76C74 66.5 62 64.5 62 59C62 57.5 63.5 56 67 56C71.5 56 75 59 75 59L78 51C78 51 73 48 64 48Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Backend & Enterprise',
    type: 'Microservices Gateway',
    tagline: 'Minimalist RESTful APIs & middleware pipeline',
    badge: 'API Gateway',
    color: '#004658',
    gradient: 'from-[#004658]/15 via-[#004658]/5 to-transparent',
    borderColor: 'hover:border-[#004658]/60',
    metric: '< 4ms Middleware Trip',
    version: 'v5.0.1',
    capabilities: ['Middleware Routing', 'Rate Limiting', 'JWT Auth Pipeline', 'Error Boundary'],
    synergy: ['Node.js', 'MongoDB', 'Firebase'],
    codeSnippet: `// Production Middleware Guard
app.use('/api/v1', rateLimiter({ max: 1000 }), authGuard, router)`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#004658]/10 via-slate-800/5 to-transparent">
        <div className="absolute font-mono text-[9px] text-[#004658]/30 font-bold top-2 left-3">{'GET /api/v1/stream -> 200 OK'}</div>
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-md rounded-2xl" viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="28" fill="#111827" />
          <path d="M28 84L44 44H56L72 84H60L56.5 74H43.5L40 84H28ZM47 64H53L50 54.5L47 64Z" fill="#FFFFFF" />
          <path d="M72 58C72 49 79 44 88 44C97 44 103 49 103 57H92C92 53.5 90 52 88 52C85.5 52 83.5 54 83.5 57.5C83.5 61 85.5 62.5 90 64C97.5 66.5 104 69.5 104 77C104 85 97 89 87.5 89C77 89 71 83 71 74.5H82C82 78.5 84.5 80.5 88 80.5C91 80.5 93 79 93 76.5C93 73.5 90.5 72 86 70.5C78.5 68 72 65 72 58Z" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#111827" />
        <path d="M28 84L44 44H56L72 84H60L56.5 74H43.5L40 84H28ZM47 64H53L50 54.5L47 64Z" fill="#FFFFFF" />
        <path d="M72 58C72 49 79 44 88 44C97 44 103 49 103 57H92C92 53.5 90 52 88 52C85.5 52 83.5 54 83.5 57.5C83.5 61 85.5 62.5 90 64C97.5 66.5 104 69.5 104 77C104 85 97 89 87.5 89C77 89 71 83 71 74.5H82C82 78.5 84.5 80.5 88 80.5C91 80.5 93 79 93 76.5C93 73.5 90.5 72 86 70.5C78.5 68 72 65 72 58Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'dotnet',
    name: '.NET Core 9',
    category: 'Backend & Enterprise',
    type: 'Enterprise Framework',
    tagline: 'High-performance cloud microservices & gRPC',
    badge: 'Enterprise',
    color: '#512BD4',
    gradient: 'from-[#512BD4]/15 via-[#512BD4]/5 to-transparent',
    borderColor: 'hover:border-[#512BD4]/60',
    metric: 'Sub-millisecond gRPC',
    version: '.NET 9.0',
    capabilities: ['Native AOT', 'Kestrel Web Server', 'gRPC & WebSockets', 'Entity Framework'],
    synergy: ['C#', 'PostgreSQL', 'Docker'],
    codeSnippet: `// .NET 9 Minimal API with Native AOT
var builder = WebApplication.CreateSlimBuilder(args);
var app = builder.Build();
app.MapGet("/health", () => Results.Ok(new { status = "operational" }));`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#512BD4]/10 via-purple-500/5 to-transparent">
        <div className="absolute w-28 h-28 rounded-full border border-[#512BD4]/20 animate-spin" />
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-lg rounded-2xl" viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="28" fill="#512BD4" />
          <path d="M28 88V72H36V88H28ZM44 88L44 40H58C66 40 72 45 72 53C72 61 66 66 58 66H52V88H44ZM52 58H57C61 58 64 56 64 53C64 50 61 48 57 48H52V58ZM78 88V40H86V88H78ZM96 88V40H112V48H104V59H110V67H104V80H112V88H96Z" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#512BD4" />
        <path d="M28 88V72H36V88H28ZM44 88L44 40H58C66 40 72 45 72 53C72 61 66 66 58 66H52V88H44ZM52 58H57C61 58 64 56 64 53C64 50 61 48 57 48H52V58ZM78 88V40H86V88H78ZM96 88V40H112V48H104V59H110V67H104V80H112V88H96Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'csharp',
    name: 'C# 13',
    category: 'Backend & Enterprise',
    type: 'Compiled Language',
    tagline: 'Memory-safe, high-concurrency OOP architecture',
    badge: 'Heavy Logic',
    color: '#68217A',
    gradient: 'from-[#68217A]/15 via-[#68217A]/5 to-transparent',
    borderColor: 'hover:border-[#68217A]/60',
    metric: 'Zero-Allocation Spans',
    version: 'C# 13',
    capabilities: ['Pattern Matching', 'Async Channels', 'Span<T> Memory', 'Records Immutability'],
    synergy: ['.NET Core', 'Docker', 'PostgreSQL'],
    codeSnippet: `// High-Performance Zero-Allocation Parser
public readonly record struct TelemetryRecord(string NodeId, double Latency);
public static void ProcessBuffer(ReadOnlySpan<byte> buffer) { /* ... */ }`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#68217A]/10 via-purple-600/5 to-transparent">
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 128 128" fill="none">
          <path d="M64 8L112 35.7V92.3L64 120L16 92.3V35.7L64 8Z" fill="#68217A" />
          <path d="M64 24C44 24 32 38 32 64C32 90 44 104 64 104C74 104 83 99 88 92L78 82C75 86 70 89 64 89C51 89 45 78 45 64C45 50 51 39 64 39C70 39 75 42 78 46L88 36C83 29 74 24 64 24Z" fill="#FFFFFF" />
          <path d="M90 46H96L94.5 58H102.5L104 46H110L108.5 58H116V64H107.5L106 74H114V80H105.5L104 92H98L99.5 80H91.5L90 92H84L85.5 80H78V74H86.5L88 64H80V58H89.5L90 46ZM97.5 64L96 74H104L105.5 64H97.5Z" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <path d="M64 8L112 35.7V92.3L64 120L16 92.3V35.7L64 8Z" fill="#68217A" />
        <path d="M64 24C44 24 32 38 32 64C32 90 44 104 64 104C74 104 83 99 88 92L78 82C75 86 70 89 64 89C51 89 45 78 45 64C45 50 51 39 64 39C70 39 75 42 78 46L88 36C83 29 74 24 64 24Z" fill="#FFFFFF" />
        <path d="M90 46H96L94.5 58H102.5L104 46H110L108.5 58H116V64H107.5L106 74H114V80H105.5L104 92H98L99.5 80H91.5L90 92H84L85.5 80H78V74H86.5L88 64H80V58H89.5L90 46ZM97.5 64L96 74H104L105.5 64H97.5Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'Backend & Enterprise',
    type: 'Federated API Mesh',
    tagline: 'Declarative type-safe queries & real-time schema mesh',
    badge: 'API Mesh',
    color: '#E10098',
    gradient: 'from-[#E10098]/15 via-[#E10098]/5 to-transparent',
    borderColor: 'hover:border-[#E10098]/60',
    metric: 'Zero Over-fetching',
    version: 'v16.8.0',
    capabilities: ['Typed Subgraphs', 'Schema Stitching', 'Apollo Gateway', 'Live Subscriptions'],
    synergy: ['React', 'Node.js', 'TypeScript'],
    codeSnippet: `// Federated GraphQL Schema Query
export const GET_TELEMETRY = gql\`
  query GetEngineStatus($nodeId: ID!) {
    engine(id: $nodeId) { id status latency throughput }
  }
\``,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E10098]/10 via-pink-500/5 to-transparent">
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 128 128" fill="none">
          <path d="M64 12L110 38.5V91.5L64 118L18 91.5V38.5L64 12Z" stroke="#E10098" strokeWidth="8" />
          <circle cx="64" cy="12" r="10" fill="#E10098" />
          <circle cx="110" cy="38.5" r="10" fill="#E10098" />
          <circle cx="110" cy="91.5" r="10" fill="#E10098" />
          <circle cx="64" cy="118" r="10" fill="#E10098" />
          <circle cx="18" cy="91.5" r="10" fill="#E10098" />
          <circle cx="18" cy="38.5" r="10" fill="#E10098" />
          <path d="M64 12L110 91.5M110 38.5L18 91.5M110 91.5L18 38.5M18 91.5L64 12M64 118L110 38.5M64 118L18 38.5" stroke="#E10098" strokeWidth="4" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <path d="M64 12L110 38.5V91.5L64 118L18 91.5V38.5L64 12Z" stroke="#E10098" strokeWidth="8" />
        <circle cx="64" cy="12" r="10" fill="#E10098" />
        <circle cx="110" cy="38.5" r="10" fill="#E10098" />
        <circle cx="110" cy="91.5" r="10" fill="#E10098" />
        <circle cx="64" cy="118" r="10" fill="#E10098" />
        <circle cx="18" cy="91.5" r="10" fill="#E10098" />
        <circle cx="18" cy="38.5" r="10" fill="#E10098" />
        <path d="M64 12L110 91.5M110 38.5L18 91.5M110 91.5L18 38.5M18 91.5L64 12M64 118L110 38.5M64 118L18 38.5" stroke="#E10098" strokeWidth="5" />
      </svg>
    )
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Database & Cache',
    type: 'Distributed NoSQL',
    tagline: 'Flexible JSON schema & vector search indexing',
    badge: 'Scale DB',
    color: '#47A248',
    gradient: 'from-[#47A248]/15 via-[#47A248]/5 to-transparent',
    borderColor: 'hover:border-[#47A248]/60',
    metric: '10M+ Queries / sec',
    version: 'v8.0 Cluster',
    capabilities: ['Aggregation Pipeline', 'Vector Search', 'Replica Sets', 'Time Series'],
    synergy: ['Node.js', 'Express', 'Redis'],
    codeSnippet: `// Multi-Stage Aggregation Pipeline
await db.collection('transactions').aggregate([
  { $match: { status: 'cleared' } },
  { $group: { _id: '$region', total: { $sum: '$amount' } } }
])`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#47A248]/10 via-emerald-500/5 to-transparent">
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 128 128" fill="none">
          <path d="M64 12C64 12 36 48 36 78C36 94 48 116 64 116C80 116 92 94 92 78C92 48 64 12 64 12Z" fill="#47A248" />
          <path d="M64 12V116C78 116 88 94 88 78C88 48 64 12 64 12Z" fill="#3F9142" />
          <path d="M64 26V108C65.5 108 67 107 68 105C72 99 64 26 64 26Z" fill="#FFFFFF" fillOpacity="0.4" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <path d="M64 12C64 12 36 48 36 78C36 94 48 116 64 116C80 116 92 94 92 78C92 48 64 12 64 12Z" fill="#47A248" />
        <path d="M64 12V116C78 116 88 94 88 78C88 48 64 12 64 12Z" fill="#3F9142" />
        <path d="M64 26V108C65.5 108 67 107 68 105C72 99 64 26 64 26Z" fill="#FFFFFF" fillOpacity="0.4" />
      </svg>
    )
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database & Cache',
    type: 'Relational ACID Engine',
    tagline: 'Enterprise relational integrity, JSONB & pgvector',
    badge: 'ACID Strict',
    color: '#336791',
    gradient: 'from-[#336791]/15 via-[#336791]/5 to-transparent',
    borderColor: 'hover:border-[#336791]/60',
    metric: 'Zero Data Loss (ACID)',
    version: 'v17.2',
    capabilities: ['Complex Joins', 'pgvector AI', 'JSONB Indexing', 'Row-Level Security'],
    synergy: ['.NET Core', 'Prisma', 'TypeScript'],
    codeSnippet: `// Vector Similarity Query
SELECT id, title, 1 - (embedding <=> $1) AS similarity
FROM knowledge_base ORDER BY similarity DESC LIMIT 5;`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#336791]/10 via-blue-600/5 to-transparent">
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-md rounded-2xl" viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="28" fill="#336791" />
          <path d="M64 24C44 24 34 38 34 60C34 82 46 104 64 104C82 104 94 82 94 60C94 38 84 24 64 24ZM64 36C74 36 82 48 82 64C82 80 74 92 64 92C54 92 46 80 46 64C46 48 54 36 64 36Z" fill="#FFFFFF" />
          <circle cx="64" cy="64" r="10" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#336791" />
        <path d="M64 24C44 24 34 38 34 60C34 82 46 104 64 104C82 104 94 82 94 60C94 38 84 24 64 24ZM64 36C74 36 82 48 82 64C82 80 74 92 64 92C54 92 46 80 46 64C46 48 54 36 64 36Z" fill="#FFFFFF" />
        <circle cx="64" cy="64" r="10" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'Database & Cache',
    type: 'In-Memory Key-Value',
    tagline: 'Sub-millisecond cache, Pub/Sub & token buckets',
    badge: 'Ultra Fast',
    color: '#DC382D',
    gradient: 'from-[#DC382D]/15 via-[#DC382D]/5 to-transparent',
    borderColor: 'hover:border-[#DC382D]/60',
    metric: '< 1ms Response Time',
    version: 'v7.4 Stack',
    capabilities: ['In-Memory Speed', 'Pub/Sub Event Bus', 'Token Buckets', 'Distributed Locks'],
    synergy: ['Node.js', 'Express', 'MongoDB'],
    codeSnippet: `// Atomic Token-Bucket Rate Limiter
await redis.pipeline().incr(key).expire(key, 60).exec();`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#DC382D]/10 via-red-500/5 to-transparent">
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 128 128" fill="none">
          <path d="M64 16L112 40V88L64 112L16 88V40L64 16Z" fill="#DC382D" />
          <path d="M64 32L96 48V80L64 96L32 80V48L64 32Z" fill="#A3241C" />
          <circle cx="64" cy="64" r="12" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <path d="M64 16L112 40V88L64 112L16 88V40L64 16Z" fill="#DC382D" />
        <path d="M64 32L96 48V80L64 96L32 80V48L64 32Z" fill="#A3241C" />
        <circle cx="64" cy="64" r="12" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'Tools & Cloud',
    type: 'Cloud BaaS Platform',
    tagline: 'Realtime WebSocket sync, Edge Auth & Cloud Functions',
    badge: 'Realtime Cloud',
    color: '#FFCA28',
    gradient: 'from-[#FFCA28]/15 via-[#FFCA28]/5 to-transparent',
    borderColor: 'hover:border-[#FFCA28]/60',
    metric: 'Realtime Data Sync',
    version: 'Cloud Suite',
    capabilities: ['Firestore Sync', 'Edge Auth', 'Cloud Messaging', 'Serverless'],
    synergy: ['React', 'Next.js', 'Figma'],
    codeSnippet: `// Realtime Snapshot Listener
onSnapshot(doc(db, "telemetry", "active"), (snap) => {
  renderLiveTelemetry(snap.data())
})`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFCA28]/10 via-amber-500/5 to-transparent">
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 128 128" fill="none">
          <path d="M26 96L46 16L63 48L26 96Z" fill="#FFC107" />
          <path d="M26 96L80 18L64 47L26 96Z" fill="#FFA000" />
          <path d="M64 47L80 18L102 96L64 47Z" fill="#F57C00" />
          <path d="M26 96L64 118L102 96L64 47L26 96Z" fill="#FFCA28" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <path d="M26 96L46 16L63 48L26 96Z" fill="#FFC107" />
        <path d="M26 96L80 18L64 47L26 96Z" fill="#FFA000" />
        <path d="M64 47L80 18L102 96L64 47Z" fill="#F57C00" />
        <path d="M26 96L64 118L102 96L64 47L26 96Z" fill="#FFCA28" />
      </svg>
    )
  },
  {
    id: 'figma',
    name: 'Figma Studio',
    category: 'Tools & Cloud',
    type: 'UI/UX Design System',
    tagline: 'Precision design tokens, auto-layout & prototypes',
    badge: 'Design System',
    color: '#A259FF',
    gradient: 'from-[#A259FF]/15 via-[#A259FF]/5 to-transparent',
    borderColor: 'hover:border-[#A259FF]/60',
    metric: '1:1 Code Alignment',
    version: 'Design Tokens',
    capabilities: ['Atomic Tokens', 'Component Variants', 'Interaction Specs', 'Dev Mode'],
    synergy: ['Tailwind CSS', 'React', 'TypeScript'],
    codeSnippet: `// Figma Token Bridge Sync
export const designTokens = {
  colors: { brand: '#004658', surface: '#FBFDFD' },
  radii: { card: '24px', pill: '9999px' }
}`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#A259FF]/10 via-purple-500/5 to-transparent">
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 128 128" fill="none">
          <path d="M42 110C51.9411 110 60 101.941 60 92V74H42C32.0589 74 24 82.0589 24 92C24 101.941 32.0589 110 42 110Z" fill="#0ACF83" />
          <path d="M24 56C24 46.0589 32.0589 38 42 38H60V74H42C32.0589 74 24 65.9411 24 56Z" fill="#A259FF" />
          <path d="M24 20C24 10.0589 32.0589 2 42 2H60V38H42C32.0589 38 24 29.9411 24 20Z" fill="#F24E1E" />
          <path d="M60 2H78C87.9411 2 96 10.0589 96 20C96 29.9411 87.9411 38 78 38H60V2Z" fill="#FF7262" />
          <circle cx="78" cy="56" r="18" fill="#1ABCFE" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <path d="M42 110C51.9411 110 60 101.941 60 92V74H42C32.0589 74 24 82.0589 24 92C24 101.941 32.0589 110 42 110Z" fill="#0ACF83" />
        <path d="M24 56C24 46.0589 32.0589 38 42 38H60V74H42C32.0589 74 24 65.9411 24 56Z" fill="#A259FF" />
        <path d="M24 20C24 10.0589 32.0589 2 42 2H60V38H42C32.0589 38 24 29.9411 24 20Z" fill="#F24E1E" />
        <path d="M60 2H78C87.9411 2 96 10.0589 96 20C96 29.9411 87.9411 38 78 38H60V2Z" fill="#FF7262" />
        <circle cx="78" cy="56" r="18" fill="#1ABCFE" />
      </svg>
    )
  },
  {
    id: 'docker',
    name: 'Docker & DevOps',
    category: 'Tools & Cloud',
    type: 'Container Orchestration',
    tagline: 'Immutable images, reproducible builds & CI/CD pipeline',
    badge: 'Cloud Native',
    color: '#2496ED',
    gradient: 'from-[#2496ED]/15 via-[#2496ED]/5 to-transparent',
    borderColor: 'hover:border-[#2496ED]/60',
    metric: '100% Deterministic',
    version: 'Multi-Stage',
    capabilities: ['Multi-Stage Builds', 'Alpine Mini Footprint', 'Compose Cluster', 'Zero Drift'],
    synergy: ['.NET Core', 'Node.js', 'PostgreSQL'],
    codeSnippet: `# Multi-stage lightweight runner
FROM node:24-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/server.js"]`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2496ED]/10 via-blue-500/5 to-transparent">
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-md rounded-2xl" viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="28" fill="#2496ED" />
          <path d="M30 64H40V74H30V64ZM44 64H54V74H44V64ZM58 64H68V74H58V64ZM44 50H54V60H44V50ZM58 50H68V60H58V50ZM72 50H82V60H72V50ZM58 36H68V46H58V36ZM72 36H82V46H72V36ZM86 50H96V60H86V50Z" fill="#FFFFFF" />
          <path d="M106 64C102 60 94 60 92 64C86 64 80 68 80 74C80 84 94 92 108 92C116 92 120 86 120 82C116 82 110 80 106 74C106 70 106 66 106 64Z" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#2496ED" />
        <path d="M30 64H40V74H30V64ZM44 64H54V74H44V64ZM58 64H68V74H58V64ZM44 50H54V60H44V50ZM58 50H68V60H58V50ZM72 50H82V60H72V50ZM58 36H68V46H58V36ZM72 36H82V46H72V36ZM86 50H96V60H86V50Z" fill="#FFFFFF" />
        <path d="M106 64C102 60 94 60 92 64C86 64 80 68 80 74C80 84 94 92 108 92C116 92 120 86 120 82C116 82 110 80 106 74C106 70 106 66 106 64Z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'Tools & Cloud',
    type: 'Cluster Orchestrator',
    tagline: 'Auto-scaling container pods & self-healing service mesh',
    badge: 'K8s Cluster',
    color: '#326CE5',
    gradient: 'from-[#326CE5]/15 via-[#326CE5]/5 to-transparent',
    borderColor: 'hover:border-[#326CE5]/60',
    metric: '99.999% Self-Healing',
    version: 'v1.31 K8s',
    capabilities: ['Horizontal Pod Autoscaler', 'Ingress Mesh', 'Rolling Updates', 'Zero-Downtime'],
    synergy: ['Docker', '.NET Core', 'PostgreSQL'],
    codeSnippet: `# Production Auto-Scaling Ingress Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: core-engine-cluster
spec:
  replicas: 8
  strategy:
    type: RollingUpdate`,
    artwork: (
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#326CE5]/10 via-blue-600/5 to-transparent">
        <svg className="w-16 h-16 relative z-10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="48" stroke="#326CE5" strokeWidth="8" />
          <circle cx="64" cy="64" r="14" fill="#326CE5" />
          <path d="M64 16V50M64 78V112M16 64H50M78 64H112M30 30L54 54M74 74L98 98M98 30L74 54M54 74L30 98" stroke="#326CE5" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="48" stroke="#326CE5" strokeWidth="8" />
        <circle cx="64" cy="64" r="14" fill="#326CE5" />
        <path d="M64 16V50M64 78V112M16 64H50M78 64H112M30 30L54 54M74 74L98 98M98 30L74 54M54 74L30 98" stroke="#326CE5" strokeWidth="6" strokeLinecap="round" />
      </svg>
    )
  }
]

const categories = ['All', 'Frontend', 'Backend & Enterprise', 'Database & Cache', 'Tools & Cloud']

// Ultra-Aesthetic Premium Spotlight Card with Subtle Glassmorphism, Squircle Icons & Dynamic Glow
const SpotlightTechCard = ({ tech, isSelected, onClick, onSelect }) => {
  const cardRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        onClick(tech)
        onSelect(tech.id)
      }}
      className={`group relative rounded-[22px] overflow-hidden bg-white/90 backdrop-blur-xl border transition-all duration-400 ease-out cursor-pointer select-none flex flex-col justify-between p-4.5 sm:p-5 min-h-[185px] ${
        isSelected
          ? 'border-[#004658] ring-2 ring-[#004658]/20 shadow-[0_18px_38px_-8px_rgba(0,70,88,0.2)] -translate-y-1.5'
          : 'border-slate-200/85 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-slate-300 hover:shadow-[0_18px_40px_-10px_rgba(0,70,88,0.14)] hover:-translate-y-1.5'
      }`}
    >
      {/* 1. Top Radiant Accent Border on Hover */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-20"
        style={{
          background: `linear-gradient(90deg, transparent 5%, ${tech.color} 50%, transparent 95%)`
        }}
      />

      {/* 2. Ambient Background Glow & Tech Watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[22px]">
        {/* Soft Colored Radial Ambient Glow in Corner */}
        <div
          className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-15 group-hover:opacity-35 transition-all duration-500"
          style={{ backgroundColor: tech.color }}
        />
        {/* Subtle Watermark Icon Art */}
        <div 
          className="absolute -bottom-2.5 -right-2.5 w-24 h-24 sm:w-26 sm:h-26 opacity-[0.05] group-hover:opacity-[0.14] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 pointer-events-none"
          style={{ color: tech.color }}
        >
          {tech.icon}
        </div>
      </div>

      {/* 3. Interactive Cursor Spotlight Radial Glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none -inset-px transition-opacity duration-300 opacity-100 rounded-[22px] z-10"
          style={{
            background: `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, ${tech.color}15, transparent 70%)`
          }}
        />
      )}

      {/* 4. CARD HEADER (Squircle Icon Badge + Title + Minimal Status Pill) */}
      <div className="relative z-10 flex items-start justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-3">
          {/* Squircle Brand Icon Box */}
          <div
            className="w-10 h-10 rounded-[14px] bg-slate-50/90 border border-slate-200/80 p-2 flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:shadow-sm group-hover:border-slate-300 transition-all duration-300 shrink-0"
            style={{ color: tech.color }}
          >
            {tech.icon}
          </div>

          <div>
            <h3 className="text-[14.5px] sm:text-[15.5px] font-extrabold text-slate-900 group-hover:text-[#004658] transition-colors leading-tight tracking-tight">
              {tech.name}
            </h3>
            <span className="text-[10px] font-mono font-semibold text-[#004658] block mt-0.5 tracking-wide">
              {tech.type}
            </span>
          </div>
        </div>

        {/* Status Pill Badge */}
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50/90 text-slate-700 text-[9.5px] font-mono font-semibold border border-slate-200/70 shadow-2xs shrink-0 backdrop-blur-sm">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: tech.color }}
          />
          {tech.badge}
        </span>
      </div>

      {/* 5. CARD BODY (Tagline) */}
      <div className="relative z-10 my-1.5">
        <p className="text-[11.5px] sm:text-[12px] text-slate-600 font-normal leading-relaxed line-clamp-2">
          {tech.tagline}
        </p>
      </div>

      {/* 6. CARD FOOTER (Telemetry Metric Tag & Inspect Action) */}
      <div className="relative z-10 pt-3 mt-1.5 border-t border-slate-100/90 flex items-center justify-between text-xs">
        <span className="text-[10px] font-mono font-bold text-slate-700 bg-slate-100/80 border border-slate-200/60 px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-2xs group-hover:bg-slate-100 transition-colors">
          <span className="text-amber-500">⚡</span>
          <span>{tech.metric}</span>
        </span>

        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono font-bold text-[#004658] group-hover:text-[#003442] transition-colors">
          <span>Inspect</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </div>
  )
}

const Technology = () => {
  const technologies = techStackData;

  const TechItem = ({ tech }) => (
    <div
      className="group relative flex shrink-0 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-[0_4px_18px_rgba(0,70,88,0.05)] backdrop-blur-xl transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:border-[#004658]/30 hover:shadow-[0_10px_28px_rgba(0,70,88,0.15)] sm:gap-3.5 sm:px-5 sm:py-3.5"
      style={{ "--tech-color": tech.color }}
    >
      {/* Brand glow on hover */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${tech.color}18, transparent 75%)`,
        }}
      />

      {/* Technology icon */}
      <span
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white p-2 transition-all duration-300 group-hover:scale-110 group-hover:border-transparent sm:h-12 sm:w-12 sm:p-2.5"
        style={{
          boxShadow: `0 0 0 0 ${tech.color}00`,
        }}
      >
        <span
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            backgroundColor: `${tech.color}12`,
            boxShadow: `0 0 18px ${tech.color}25`,
          }}
        />
        <span className="relative block h-full w-full">
          {tech.icon}
        </span>
      </span>

      {/* Only technology name */}
      <span className="relative whitespace-nowrap text-sm font-bold tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-[#004658] sm:text-base">
        {tech.name}
      </span>

      {/* Small brand accent */}
      <span
        className="relative h-1.5 w-1.5 shrink-0 rounded-full opacity-60 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100"
        style={{ backgroundColor: tech.color }}
      />
    </div>
  );

  return (
    <section
      id="technology"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#f5fafb] to-white py-14 sm:py-16 lg:py-20"
    >
      <style>{`
        @keyframes tech-scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes tech-scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .tech-track-left {
          animation: tech-scroll-left 38s linear infinite;
        }

        .tech-track-right {
          animation: tech-scroll-right 42s linear infinite;
        }

        .tech-marquee:hover .tech-track-left,
        .tech-marquee:hover .tech-track-right {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-track-left,
          .tech-track-right {
            animation-play-state: paused;
          }
        }
      `}</style>

      {/* Ambient background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#004658 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-4xl px-5 text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004658]/15 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#004658] shadow-sm sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#004658]" />
            </span>
            Our Technology Ecosystem
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Engineered with
            <span className="block bg-gradient-to-r from-[#004658] via-[#00738e] to-cyan-400 bg-clip-text text-transparent">
              Silicon-Grade Precision
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            The technologies powering our modern digital experiences.
          </p>
        </div>

        {/* Two opposite-moving rows */}
        <div className="tech-marquee flex flex-col gap-4 overflow-hidden py-3 sm:gap-5 sm:py-4">
          {/* Row 1: moves left */}
          <div className="relative">
            <div className="tech-track-left flex w-max gap-3 px-3 sm:gap-4 sm:px-4">
              {[...technologies, ...technologies].map((tech, index) => (
                <TechItem key={`left-${tech.id}-${index}`} tech={tech} />
              ))}
            </div>
          </div>

          {/* Row 2: moves right */}
          <div className="relative">
            <div className="tech-track-right flex w-max gap-3 px-3 sm:gap-4 sm:px-4">
              {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map(
                (tech, index) => (
                  <TechItem key={`right-${tech.id}-${index}`} tech={tech} />
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom minimal accent */}
        <div className="mt-7 flex items-center justify-center gap-3 px-5 sm:mt-9">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#004658]/40" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
            Built for modern digital products
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#004658]/40" />
        </div>
      </div>
    </section>
  );
};

export default Technology;