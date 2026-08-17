import React, { useState, useMemo, useRef } from 'react'

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

// Modern Minimalist Spotlight Card with Full-Card Ambient Technology Artwork & Clean Typography
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
      className={`group relative rounded-2xl overflow-hidden bg-white/95 backdrop-blur-md border transition-all duration-300 ease-out cursor-pointer select-none flex flex-col justify-between p-4 sm:p-4.5 min-h-[170px] sm:min-h-[180px] ${
        isSelected
          ? 'border-[#004658] ring-2 ring-[#004658]/30 shadow-xl shadow-[#004658]/15 -translate-y-1'
          : 'border-slate-200/90 shadow-xs hover:border-[#004658]/50 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-1'
      }`}
    >
      {/* 1. FULL CARD AMBIENT TECHNOLOGY BACKGROUND (Watermark & Subtle Radial Glow) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        {/* Ambient Top Glow Wash */}
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-500"
          style={{ backgroundColor: tech.color }}
        />
        {/* Full-Card Ambient Tech Watermark SVG */}
        <div className="absolute -bottom-3 -right-3 w-24 h-24 sm:w-28 sm:h-28 opacity-[0.06] group-hover:opacity-[0.15] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
          {tech.icon}
        </div>
      </div>

      {/* 2. Dynamic Cursor Spotlight Radial Glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none -inset-px transition-opacity duration-300 opacity-100 rounded-2xl z-10"
          style={{
            background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, ${tech.color}18, transparent 75%)`
          }}
        />
      )}

      {/* 3. CARD HEADER (Tech Icon + Badge) */}
      <div className="relative z-10 flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200/80 p-1.5 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform"
            style={{ color: tech.color }}
          >
            {tech.icon}
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-[#004658] transition-colors leading-tight tracking-tight">
              {tech.name}
            </h3>
            <span className="text-[10px] font-mono font-bold text-[#004658]">
              {tech.type}
            </span>
          </div>
        </div>

        {/* Minimal Category Status Dot Badge */}
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-100/90 text-slate-700 text-[10px] font-mono font-medium border border-slate-200/70 shadow-2xs">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: tech.color }}
          />
          {tech.badge}
        </span>
      </div>

      {/* 4. CARD BODY (Minimalist Punchy Tagline) */}
      <div className="relative z-10 my-1">
        <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-relaxed line-clamp-2">
          {tech.tagline}
        </p>
      </div>

      {/* 5. CARD FOOTER (Telemetry Metric & Inspect Action) */}
      <div className="relative z-10 pt-2.5 mt-1 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-[10px] font-mono font-bold text-slate-700 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md flex items-center gap-1">
          ⚡ {tech.metric}
        </span>

        <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#004658] group-hover:translate-x-0.5 transition-transform">
          <span>Inspect</span>
          <span>→</span>
        </span>
      </div>
    </div>
  )
}

const Technology = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTechId, setActiveTechId] = useState('react')
  const [inspectModalTech, setInspectModalTech] = useState(null)
  const [copiedSnippet, setCopiedSnippet] = useState(false)
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'pipeline'

  // Filtered dataset based on category and search query
  const filteredTech = useMemo(() => {
    return techStackData.filter((tech) => {
      const matchesCategory =
        selectedCategory === 'All' ? true : tech.category === selectedCategory
      const matchesSearch =
        searchQuery.trim() === ''
          ? true
          : tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tech.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tech.capabilities.some((c) =>
              c.toLowerCase().includes(searchQuery.toLowerCase())
            ) ||
            tech.type.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // Active detail item for the bottom interactive inspector or pipeline
  const activeTech = useMemo(() => {
    return (
      techStackData.find((t) => t.id === activeTechId) || techStackData[0]
    )
  }, [activeTechId])

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText(text)
    setCopiedSnippet(true)
    setTimeout(() => setCopiedSnippet(false), 2000)
  }

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-12 max-w-[1480px] mx-auto overflow-hidden"
      id="technology"
    >
      {/* Background Precision Grid & Ambient Glowing Sphere */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-20"
        style={{
          backgroundImage: `radial-gradient(#004658 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none rounded-full opacity-25 blur-3xl -z-10"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 70, 88, 0.35) 0%, rgba(0, 216, 255, 0.15) 45%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      <div className="relative z-10">
        {/* =========================================================================
            1. SECTION HEADER (Spacious, Minimalist Silicon-Grade Aesthetic)
           ========================================================================= */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
          
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004658]/8 border border-[#004658]/20 text-[#004658] text-[11px] font-mono font-bold uppercase tracking-widest mb-3.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#00D8FF] animate-ping" />
            <span>ENTERPRISE ARCHITECTURE & ECOSYSTEM</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
            Engineered with <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004658] via-[#00738e] to-[#00D8FF]">
              Silicon-Grade Precision
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium max-w-2xl leading-relaxed">
            A production-hardened stack of 16 modern frameworks, distributed runtimes, and atomic design systems orchestrated for zero-downtime scalability.
          </p>
        </div>

        {/* WIDE CONTROL BAR (Single Clean Linear Strip for Filters, Search & View Modes) */}
        <div className="w-full max-w-6xl mx-auto mb-10 p-2 bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-lg shadow-slate-200/30 flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Left: Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? techStackData.length
                  : techStackData.filter((t) => t.category === cat).length

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-[#004658] text-white shadow-sm shadow-[#004658]/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                      selectedCategory === cat
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200/70 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right: Search Bar & Grid/Pipeline Toggle */}
          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Search stack, framework..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8.5 pr-8 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#004658] focus:bg-white transition-all font-medium"
              />
              <svg
                className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Switcher Button (Grid vs Pipeline Flow) */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode('grid')}
                title="Grid Matrix View"
                className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#004658] shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>

              <button
                onClick={() => setViewMode('pipeline')}
                title="Architecture Pipeline View"
                className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'pipeline'
                    ? 'bg-white text-[#004658] shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* =========================================================================
            2. MAIN CARDS GRID (Sleek, Compact 4x4 Grid with Full-Card Background Art)
           ========================================================================= */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4.5 mb-14">
            {filteredTech.map((tech) => (
              <SpotlightTechCard
                key={tech.id}
                tech={tech}
                isSelected={tech.id === activeTechId}
                onClick={(t) => setInspectModalTech(t)}
                onSelect={(id) => setActiveTechId(id)}
              />
            ))}
          </div>
        ) : (
          /* Architecture Pipeline & Synergy Flow View */
          <div className="mb-14 p-6 sm:p-8 bg-white border border-slate-200/90 rounded-3xl shadow-lg shadow-slate-200/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#004658] uppercase tracking-widest">
                  End-to-End Synergy Pipeline
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  How Our Technology Ecosystem Communicates
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200">
                ● High Cohesion / Loose Coupling
              </span>
            </div>

            {/* 4 Pipeline Stages */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Stage 1: UI & Client */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold text-slate-400">LAYER 01</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00D8FF]" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 mb-1">
                    Client & Reactive UI
                  </h4>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    React 19 + TypeScript + Tailwind CSS delivering 60 FPS interfaces and atomic design systems.
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2.5 border-t border-slate-200/60 font-mono text-[10px] text-slate-500">
                  <span>⚡ DOM Diff &lt;16ms</span>
                </div>
              </div>

              {/* Stage 2: Edge & Gateway */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold text-slate-400">LAYER 02</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0F172A]" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 mb-1">
                    Edge SSR & Router
                  </h4>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Next.js 15 App Router streaming pre-rendered HTML and executing low-latency edge middlewares.
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2.5 border-t border-slate-200/60 font-mono text-[10px] text-slate-500">
                  <span>🌍 Edge TTL &lt;5ms</span>
                </div>
              </div>

              {/* Stage 3: Enterprise Services */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold text-slate-400">LAYER 03</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#512BD4]" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 mb-1">
                    Async Microservices
                  </h4>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Node.js 24 + Express + .NET 9 + GraphQL federated microservices processing heavy logic.
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2.5 border-t border-slate-200/60 font-mono text-[10px] text-slate-500">
                  <span>🚀 150k req/sec</span>
                </div>
              </div>

              {/* Stage 4: State & Storage */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold text-slate-400">LAYER 04</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#47A248]" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 mb-1">
                    Distributed Persistence
                  </h4>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    MongoDB + PostgreSQL + Redis + Kubernetes auto-healing mesh for sub-millisecond retrieval.
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2.5 border-t border-slate-200/60 font-mono text-[10px] text-slate-500">
                  <span>🔒 ACID & K8s Mesh</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            3. LIVE TECH SPECIFICATION & CODE SYNERGY DRAWER
           ========================================================================= */}
        <div className="mb-12 rounded-3xl bg-slate-950 text-white p-6 sm:p-9 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Animated Background Mesh Accent */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: activeTech.color }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left: Active Tech Telemetry & Capabilities */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-3.5">
                <div
                  className="w-11 h-11 rounded-xl bg-white/10 p-2.5 border border-white/15 flex items-center justify-center shadow-md"
                  style={{ color: activeTech.color }}
                >
                  {activeTech.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                    {activeTech.category} // {activeTech.version}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {activeTech.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                {activeTech.tagline}. Optimized for enterprise throughput, zero-latency caching, and maintainable codebase architectures.
              </p>

              {/* Telemetry Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[9px] font-mono text-slate-400 uppercase block mb-0.5">
                    Benchmark Metric
                  </span>
                  <span className="text-xs sm:text-sm font-black text-cyan-300 font-mono">
                    {activeTech.metric}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[9px] font-mono text-slate-400 uppercase block mb-0.5">
                    Role in Stack
                  </span>
                  <span className="text-xs sm:text-sm font-black text-emerald-300 truncate block">
                    {activeTech.badge}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                  <span className="text-[9px] font-mono text-slate-400 uppercase block mb-0.5">
                    Stack Synergy
                  </span>
                  <span className="text-xs font-mono font-bold text-purple-300 truncate block">
                    {activeTech.synergy.join(', ')}
                  </span>
                </div>
              </div>

              {/* Capability Tags */}
              <div className="flex flex-wrap gap-1.5">
                {activeTech.capabilities.map((cap, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-[11px] text-slate-200 font-mono"
                  >
                    ✓ {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Code Sample & Real-Time Configuration Terminal */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-900/95 border border-slate-800 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="px-3.5 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[10px] text-slate-400">
                      {activeTech.id}-spec.config.ts
                    </span>
                  </div>

                  <button
                    onClick={() => copyToClipboard(activeTech.codeSnippet)}
                    className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-[10px] font-mono text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    {copiedSnippet ? (
                      <span className="text-emerald-400">✓ Copied!</span>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Body */}
                <pre className="p-4 font-mono text-xs text-cyan-200/90 leading-relaxed overflow-x-auto selection:bg-cyan-500 selection:text-slate-900">
                  <code>{activeTech.codeSnippet}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            4. MODAL INSPECTOR (Detailed View for Clicked Item)
           ========================================================================= */}
        {inspectModalTech && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
            onClick={() => setInspectModalTech(null)}
          >
            <div
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Accent Gradient Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: inspectModalTech.color }}
              />

              {/* Close Button */}
              <button
                onClick={() => setInspectModalTech(null)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer text-xs"
              >
                ✕
              </button>

              <div className="flex items-center gap-3.5 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 p-2.5 flex items-center justify-center shadow-xs"
                  style={{ color: inspectModalTech.color }}
                >
                  {inspectModalTech.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    {inspectModalTech.category} // {inspectModalTech.version}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {inspectModalTech.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                {inspectModalTech.tagline}. Designed for high-concurrency systems and resilient product delivery.
              </p>

              <div className="space-y-3.5 mb-5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-1">
                    Key Architectural Capabilities
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {inspectModalTech.capabilities.map((c, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[9px] font-mono text-slate-400 uppercase block">
                      Production Benchmark
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#004658] font-mono">
                      {inspectModalTech.metric}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[9px] font-mono text-slate-400 uppercase block">
                      Stack Synergies
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-800 truncate block">
                      {inspectModalTech.synergy.join(', ')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3.5 border-t border-slate-100">
                <button
                  onClick={() => {
                    setActiveTechId(inspectModalTech.id)
                    setInspectModalTech(null)
                  }}
                  className="px-4 py-1.5 rounded-xl bg-[#004658] text-white text-xs font-bold hover:bg-[#003746] transition-colors cursor-pointer"
                >
                  View in Code Terminal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            5. FOOTER ECOSYSTEM MARQUEE & METRICS STRIP
           ========================================================================= */}
        <div className="pt-6 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-700">
              All 16 core stack modules battle-tested for enterprise reliability
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap font-mono text-[10px] text-slate-400">
            <span>• Zero Legacy Debt</span>
            <span>• 100% CI/CD Automated</span>
            <span>• Global Edge CDN Ready</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Technology