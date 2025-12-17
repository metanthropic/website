/* FILE: src/app/status/page.tsx
   ACTION: Complete code with Archive Link integration
*/

'use client';

import React from 'react';
import Link from 'next/link';
import {
  Activity,
  CheckCircle,
  Server,
  Shield,
  Globe,
  Zap,
  Cpu,
  AlertCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';

// --- COMPONENTS FOR DASHBOARD ---

const StatusBadge = ({ status }: { status: 'operational' | 'degraded' | 'down' }) => {
  if (status === 'operational') {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Operational
      </div>
    );
  }
  if (status === 'degraded') {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
        Degraded
      </div>
    );
  }
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest">
      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
      Outage
    </div>
  );
};

const MetricCard = ({ label, value, unit, icon: Icon, trend }: any) => (
  <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-sm relative overflow-hidden group hover:border-white/20 transition-colors">
    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity text-[#3B82F6]">
      <Icon size={48} strokeWidth={1} />
    </div>
    <div className="relative z-10">
      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{label}</div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-mono text-white">{value}</span>
        <span className="text-sm font-mono text-gray-500">{unit}</span>
      </div>
      {trend && (
        <div className="mt-2 text-xs text-green-500 flex items-center gap-1">
          <Activity size={10} /> {trend}
        </div>
      )}
    </div>
  </div>
);

const ServiceRow = ({ name, region }: { name: string, region?: string }) => (
  <div className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 hover:bg-white/5 px-4 rounded-sm transition-colors">
    <div className="flex items-center gap-4">
      <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
      <div>
        <div className="text-sm font-medium text-gray-200">{name}</div>
        {region && <div className="text-xs text-gray-600 font-mono">{region}</div>}
      </div>
    </div>
    <div className="flex items-center gap-8">
      <div className="hidden md:block w-32 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="w-full h-full bg-green-500/50 animate-pulse origin-left scale-x-100"></div>
      </div>
      <span className="text-xs font-bold text-green-500 uppercase tracking-wider">Operational</span>
    </div>
  </div>
);

// --- MAIN PAGE ---

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 pt-32 pb-24">

        {/* 1. HERO: GLOBAL STATUS */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-white/10 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 text-gray-500 text-xs font-mono">
                <Clock size={12} /> LAST UPDATED: {new Date().toUTCString()}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">
                System Telemetry
              </h1>
              <p className="text-xl text-gray-400 font-light">
                Real-time performance metrics for the Metanthropic Interface.
              </p>
            </div>
            <div className="text-right">
               <StatusBadge status="operational" />
               <div className="mt-2 text-sm text-gray-500">All systems performing within nominal parameters.</div>
            </div>
          </div>
        </section>

        {/* 2. KEY METRICS (HUD STYLE) */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <MetricCard
                label="Global Latency"
                value="42"
                unit="ms"
                icon={Zap}
                trend="-1.2ms (24h)"
             />
             <MetricCard
                label="Error Rate"
                value="0.002"
                unit="%"
                icon={AlertCircle}
                trend="Stable"
             />
             <MetricCard
                label="Active Nodes"
                value="14.2"
                unit="k"
                icon={Server}
                trend="+850 (24h)"
             />
             {/* UNIQUE METANTHROPIC METRIC */}
             <MetricCard
                label="Safety Layer"
                value="100"
                unit="%"
                icon={Shield}
                trend="Enforced"
             />
          </div>
        </section>

        {/* 3. DETAILED COMPONENT STATUS */}
        <section className="max-w-6xl mx-auto px-6 mb-20 grid md:grid-cols-2 gap-12">

          {/* LEFT: API & INFRASTRUCTURE */}
          <div>
            <h2 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
              <Globe size={20} className="text-[#3B82F6]" />
              API Infrastructure
            </h2>
            <div className="bg-[#0A0A0A] border border-white/10 rounded-sm p-2">
              <ServiceRow name="Inference API" region="Global Edge" />
              <ServiceRow name="Fine-tuning API" region="us-east-1" />
              <ServiceRow name="Embeddings API" region="Global Edge" />
              <ServiceRow name="Dashboard & Billing" region="Global" />
            </div>
          </div>

          {/* RIGHT: MODEL & SAFETY LAYERS (The "Physics" Part) */}
          <div>
            <h2 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
              <Cpu size={20} className="text-[#3B82F6]" />
              Model Physics
            </h2>
            <div className="bg-[#0A0A0A] border border-white/10 rounded-sm p-2">
              <ServiceRow name="Reasoning Engine (Alpha-1)" region="Core Cluster" />
              <ServiceRow name="Context Window Manager" region="Dynamic Scaling" />
              <ServiceRow name="Constitutional Filter" region="Pre-Inference" />
              <ServiceRow name="Mechanistic Inspector" region="Real-time Tools" />
            </div>
          </div>

        </section>

        {/* 4. INCIDENT LOG (Terminal Style) */}
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-serif text-white mb-6">Incident History</h2>
          <div className="bg-[#050505] border border-white/10 rounded-sm p-6 font-mono text-sm h-64 overflow-y-auto custom-scrollbar">

            <div className="border-l-2 border-green-500 pl-4 py-2 mb-4">
               <div className="text-xs text-gray-500 mb-1">Nov 14, 2025 - 08:42 UTC</div>
               <div className="text-green-500 font-bold mb-1">No Incidents Reported</div>
               <div className="text-gray-400">All systems have been operational for the past 45 days.</div>
            </div>

            <div className="border-l-2 border-gray-700 pl-4 py-2 opacity-50">
               <div className="text-xs text-gray-500 mb-1">Sep 02, 2025 - 14:20 UTC</div>
               <div className="text-white font-bold mb-1">Scheduled Maintenance Completed</div>
               <div className="text-gray-400">Core inference cluster upgrade. Zero downtime observed due to A/B rollover.</div>
            </div>

          </div>
          <div className="mt-4 text-center">
             <Link href="/status/archive" className="text-xs text-[#3B82F6] font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2">
                View Full Incident Archive <ArrowRight size={14} />
             </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
