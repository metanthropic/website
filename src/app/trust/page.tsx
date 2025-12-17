'use client';

import React from 'react';
import { FileText, ExternalLink, Activity, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import ResearchRow from '@/components/research/ResearchRow'; // Reusing for Report List

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">

         {/* HERO */}
         <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-bold uppercase tracking-widest mb-8">
               Transparency Report
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
               Don't Trust Us. <br/> Verify Us.
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
               In the age of AGI, "trust me" is not enough. We provide the logs, the audits, and the thought traces required for you to verify our claims.
            </p>
         </section>

         {/* 1. LIVE METRICS DASHBOARD (Simulated) */}
         <section className="max-w-7xl mx-auto px-6 mb-32">
            <div className="border border-white/10 bg-[#0A0A0A] rounded-sm p-8">
               <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                  <Activity className="text-[#3B82F6]" size={20} />
                  <h2 className="text-lg font-bold text-white uppercase tracking-widest">Live Safety Telemetry</h2>
                  <div className="ml-auto flex items-center gap-2 text-xs text-green-500">
                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                     SYSTEM NORMAL
                  </div>
               </div>

               <div className="grid md:grid-cols-4 gap-8">
                  <div>
                     <div className="text-gray-500 text-xs uppercase mb-1">Total Requests (24h)</div>
                     <div className="text-3xl text-white font-mono">14.2M</div>
                  </div>
                  <div>
                     <div className="text-gray-500 text-xs uppercase mb-1">Safety Interventions</div>
                     <div className="text-3xl text-[#3B82F6] font-mono">0.04%</div>
                     <div className="text-xs text-gray-600 mt-1">Below 0.1% threshold</div>
                  </div>
                  <div>
                     <div className="text-gray-500 text-xs uppercase mb-1">Refusal Rate</div>
                     <div className="text-3xl text-white font-mono">1.2%</div>
                  </div>
                  <div>
                     <div className="text-gray-500 text-xs uppercase mb-1">Avg. Trace Latency</div>
                     <div className="text-3xl text-white font-mono">42ms</div>
                  </div>
               </div>
            </div>
         </section>

         {/* 2. AUDIT REPORTS */}
         <section className="max-w-5xl mx-auto px-6 mb-24">
            <h2 className="text-3xl font-serif text-white mb-12">External Audits</h2>
            <div className="border-t border-white/10">
               {/* Using ResearchRow styled components manually for custom content */}
               <div className="group py-8 border-b border-white/10 grid md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-3 text-xs font-bold text-[#3B82F6] uppercase tracking-widest">Oct 2025</div>
                  <div className="md:col-span-9">
                     <h3 className="text-2xl font-serif text-white mb-2">ARC Evals: Model Autonomy Assessment</h3>
                     <p className="text-gray-400 mb-4 text-sm">
                        Independent assessment by the Alignment Research Center evaluating our Alpha-1 model for autonomous replication capabilities.
                     </p>
                     <button className="text-white text-xs font-bold uppercase border-b border-white hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors pb-0.5">
                        Download PDF
                     </button>
                  </div>
               </div>

               <div className="group py-8 border-b border-white/10 grid md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-3 text-xs font-bold text-[#3B82F6] uppercase tracking-widest">Sep 2025</div>
                  <div className="md:col-span-9">
                     <h3 className="text-2xl font-serif text-white mb-2">System Card: Metanthropic-V1</h3>
                     <p className="text-gray-400 mb-4 text-sm">
                        Comprehensive system card detailing training data composition, safety benchmarks, and known limitations of our flagship reasoning model.
                     </p>
                     <button className="text-white text-xs font-bold uppercase border-b border-white hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors pb-0.5">
                        View System Card
                     </button>
                  </div>
               </div>
            </div>
         </section>

         {/* 3. TRANSPARENCY FAQ */}
         <section className="max-w-3xl mx-auto px-6">
             <div className="bg-[#121214] p-8 rounded-sm">
                <h3 className="text-xl text-white font-medium mb-6">How to Audit a Thought Trace?</h3>
                <p className="text-gray-400 mb-4">
                   Every API response includes a `x-metanthropic-trace-id`. You can plug this ID into our <span className="text-white font-mono">Inspector Tool</span> to replay the model's step-by-step reasoning process.
                </p>
                <div className="flex items-center gap-2 text-[#3B82F6] text-sm font-bold uppercase cursor-pointer hover:underline">
                   Launch Inspector <ExternalLink size={14} />
                </div>
             </div>
         </section>

      </main>
      <Footer />
    </div>
  );
}
