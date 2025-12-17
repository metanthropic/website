/* FILE: src/app/status/archive/page.tsx
   ACTION: Create the detailed incident log
*/

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Search, Filter, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';

// --- MOCK DATA: The "Flight Recorder" Logs ---
const INCIDENT_LOGS = [
  {
    id: 'INC-2025-114',
    date: 'Nov 14, 2025',
    time: '08:42 UTC',
    status: 'Resolved',
    severity: 'none',
    component: 'System Wide',
    title: 'All Systems Operational',
    description: 'Daily automated integrity check completed. No anomalies detected in inference clusters or safety layers.',
    duration: 'N/A'
  },
  {
    id: 'INC-2025-098',
    date: 'Oct 30, 2025',
    time: '14:20 UTC',
    status: 'Resolved',
    severity: 'minor',
    component: 'API Gateway',
    title: 'Elevated Latency in EU-West',
    description: 'We observed a 45ms latency increase for traffic routing through Frankfurt. Traffic was automatically re-routed to Paris edge nodes within 12 seconds.',
    duration: '12m'
  },
  {
    id: 'INC-2025-082',
    date: 'Oct 15, 2025',
    time: '03:00 UTC',
    status: 'Completed',
    severity: 'maintenance',
    component: 'Core Cluster',
    title: 'Scheduled Maintenance: Vector DB Upgrade',
    description: 'Planned upgrade of the long-term memory retrieval stack. Zero downtime observed due to blue/green deployment strategy.',
    duration: '45m'
  },
  {
    id: 'INC-2025-071',
    date: 'Sep 22, 2025',
    time: '19:45 UTC',
    status: 'Resolved',
    severity: 'major',
    component: 'Safety Filter',
    title: 'False Positive Spike in Constitutional Layer',
    description: 'An update to the "Self-Harm" refusal circuit caused a 2% spike in false refusals for medical queries. Model weights were rolled back to v2.4.1 immediately.',
    duration: '18m'
  },
  {
    id: 'INC-2025-055',
    date: 'Aug 10, 2025',
    time: '11:15 UTC',
    status: 'Resolved',
    severity: 'minor',
    component: 'Dashboard',
    title: 'Billing Metrics Delay',
    description: 'Usage logs for the "Reasoning-Alpha" endpoint were delayed by 15 minutes in the dashboard. No data was lost; purely a display latency.',
    duration: '2h'
  },
  {
    id: 'INC-2025-012',
    date: 'Jul 04, 2025',
    time: '09:00 UTC',
    status: 'Completed',
    severity: 'maintenance',
    component: 'Infrastructure',
    title: 'H100 Cluster Expansion',
    description: 'Added 4,096 H100 GPUs to the primary training cluster. Compute capacity increased by 40%.',
    duration: '4h'
  }
];

export default function StatusArchivePage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logs based on search
  const filteredLogs = INCIDENT_LOGS.filter(log =>
    log.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.component.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 max-w-6xl mx-auto px-6">

        {/* 1. HEADER */}
        <div className="mb-12">
           <Link href="/status" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white mb-8 transition-colors">
             <ArrowLeft size={16} /> Return to Live Telemetry
           </Link>
           <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                 <h1 className="text-4xl font-serif text-white mb-4">Incident Archive</h1>
                 <p className="text-gray-400 max-w-2xl">
                    A permanent, immutable record of system performance. We believe that hiding failures prevents trust.
                 </p>
              </div>
              <div className="flex gap-4">
                 <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input
                       type="text"
                       placeholder="Search logs..."
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       className="bg-[#121214] border border-white/10 rounded-sm py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#3B82F6] w-64 transition-colors"
                    />
                 </div>
                 <button className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-sm text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    <Calendar size={16} /> 2025
                 </button>
              </div>
           </div>
        </div>

        {/* 2. THE LOG TABLE (Terminal Style) */}
        <div className="border border-white/10 rounded-sm bg-[#050505] overflow-hidden">

           {/* Table Header */}
           <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/10 bg-white/5 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <div className="col-span-2">Date (UTC)</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-6">Incident Details</div>
              <div className="col-span-2 text-right">Duration</div>
           </div>

           {/* Table Body */}
           <div className="divide-y divide-white/5">
              {filteredLogs.map((log) => (
                 <div key={log.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-6 hover:bg-white/[0.02] transition-colors group">

                    {/* Date Column */}
                    <div className="md:col-span-2 flex flex-row md:flex-col gap-2 md:gap-0 font-mono text-sm text-gray-400">
                       <span className="text-white">{log.date}</span>
                       <span className="text-gray-600 text-xs">{log.time}</span>
                    </div>

                    {/* Status Column */}
                    <div className="md:col-span-2 mb-2 md:mb-0">
                       {log.severity === 'none' && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-sm border border-green-500/20">
                             <CheckCircle size={12} /> OK
                          </span>
                       )}
                       {log.severity === 'minor' && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded-sm border border-yellow-500/20">
                             <AlertCircle size={12} /> Degraded
                          </span>
                       )}
                       {log.severity === 'major' && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded-sm border border-red-500/20">
                             <AlertCircle size={12} /> Outage
                          </span>
                       )}
                       {log.severity === 'maintenance' && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded-sm border border-blue-500/20">
                             <Clock size={12} /> Maint
                          </span>
                       )}
                    </div>

                    {/* Details Column */}
                    <div className="md:col-span-6">
                       <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-mono text-gray-500 border border-white/10 px-1.5 rounded-sm">{log.component}</span>
                          <h3 className="text-white font-medium text-sm">{log.title}</h3>
                       </div>
                       <p className="text-gray-400 text-sm leading-relaxed text-sm">
                          {log.description}
                       </p>
                       <div className="mt-2 text-xs text-gray-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                          ID: {log.id}
                       </div>
                    </div>

                    {/* Duration Column */}
                    <div className="md:col-span-2 text-left md:text-right font-mono text-sm text-gray-500">
                       {log.duration}
                    </div>

                 </div>
              ))}
           </div>

           {/* Empty State */}
           {filteredLogs.length === 0 && (
              <div className="p-12 text-center text-gray-500">
                 No logs found matching "{searchTerm}"
              </div>
           )}

        </div>

      </main>
      <Footer />
    </div>
  );
}
