'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, ArrowRight, Server, Activity, FileCheck } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import SpotlightCard from '@/components/ui/SpotlightCard';
import DecryptedText from '@/components/ui/DecryptedText';

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 pt-32 pb-24">

        {/* 1. HERO: INSTITUTIONAL STATEMENT */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#3B82F6] text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></span>
              Safety Architecture
            </div>

            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 tracking-tight leading-[1.1]">
              The Architecture <br />
              <span className="text-gray-500">of Certainty.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mb-12">
              We do not rely on "best efforts." We rely on physics.
              Metanthropic builds systems where safety is an intrinsic, mathematically bound property of the intelligence itself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
               <Link href="/safety/approach" className="bg-white text-black px-8 py-4 rounded-sm font-bold hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2">
                 Our Approach <ArrowRight size={16} />
               </Link>
               <Link href="/security" className="border border-white/20 text-white px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                 Security & Privacy
               </Link>
            </div>
          </div>
        </section>

        {/* 2. THE 3 LAYERS OF DEFENSE */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
           <div className="border-t border-white/10 pt-12 mb-12 flex justify-between items-end">
              <h2 className="text-3xl font-serif text-white">Defense in Depth</h2>
              <div className="hidden md:block text-gray-500 text-sm">Three layers of verifiable control.</div>
           </div>

           <div className="grid md:grid-cols-3 gap-6">

              {/* Layer 1 */}
              <SpotlightCard className="p-8 h-full">
                 <div className="text-[#3B82F6] mb-6"><Lock size={32} strokeWidth={1.5} /></div>
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Layer 1: Pre-Training</div>
                 <h3 className="text-2xl text-white font-medium mb-4">Constitutional Design</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">
                    We do not patch safety in after the fact. We train our models on a "Constitution" of principles that mathematically penalizes harmful trajectories during the foundational learning phase.
                 </p>
              </SpotlightCard>

              {/* Layer 2 */}
              <SpotlightCard className="p-8 h-full">
                 <div className="text-[#3B82F6] mb-6"><Eye size={32} strokeWidth={1.5} /></div>
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Layer 2: Inference</div>
                 <h3 className="text-2xl text-white font-medium mb-4">Mechanistic Oversight</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">
                    Our "Glass Box" architecture allows us to monitor the model's internal activation patterns in real-time, detecting deception or misalignment before a token is generated.
                 </p>
              </SpotlightCard>

              {/* Layer 3 */}
              <SpotlightCard className="p-8 h-full">
                 <div className="text-[#3B82F6] mb-6"><Shield size={32} strokeWidth={1.5} /></div>
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Layer 3: Deployment</div>
                 <h3 className="text-2xl text-white font-medium mb-4">The Kill Switch</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">
                    A hard-coded intervention layer that sits between the model and the user. If a "Thought Trace" violates safety parameters, the output is intercepted and neutralized.
                 </p>
              </SpotlightCard>

           </div>
        </section>

        {/* 3. ENTERPRISE RELIABILITY (The "Corporate" Angle) */}
        <section className="bg-[#0A0A0A] border-y border-white/10 py-24">
           <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-serif text-white mb-6">Reliability is the ROI of Safety.</h2>
                 <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    For enterprise, a "safe" model is simply a model that works. By eliminating hallucinations and enforcing strict reasoning paths, Metanthropic provides the only AI stack ready for mission-critical deployment.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-300">
                       <Activity size={18} className="text-[#3B82F6]" /> <span>99.9% Reduction in Hallucinations</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                       <Server size={18} className="text-[#3B82F6]" /> <span>Zero-Training Data Isolation</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                       <FileCheck size={18} className="text-[#3B82F6]" /> <span>SOC 2 Type II & HIPAA Compliant</span>
                    </li>
                 </ul>
              </div>
              <div className="relative h-full min-h-[400px] border border-white/10 bg-[#030304] p-8 rounded-sm">
                 {/* Abstract "Dashboard" Graphic */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3B82F6_0%,transparent_50%)] opacity-10" />
                 <div className="relative z-10 space-y-6">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                       <span className="text-xs font-mono text-gray-500">SYSTEM_STATUS</span>
                       <span className="text-xs font-mono text-[#3B82F6]">OPTIMAL</span>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-sm text-gray-400"><span>Coherence Score</span> <span className="text-white">99.8%</span></div>
                       <div className="w-full bg-white/5 h-1 rounded-full"><div className="w-[99.8%] h-full bg-[#3B82F6]"></div></div>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-sm text-gray-400"><span>Safety Interventions</span> <span className="text-white">0.00%</span></div>
                       <div className="w-full bg-white/5 h-1 rounded-full"><div className="w-[0%] h-full bg-[#3B82F6]"></div></div>
                    </div>
                    <div className="p-4 bg-[#3B82F6]/5 border border-[#3B82F6]/20 rounded-sm mt-8">
                       <div className="text-xs text-[#3B82F6] font-mono mb-1">LIVE LOG</div>
                       <div className="text-xs text-gray-400 font-mono">
                          &gt; Request validated.<br/>
                          &gt; Reasoning trace audit: PASS.<br/>
                          &gt; Output generated (142ms).
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. LINKS TO SUB-PAGES */}
        <section className="max-w-7xl mx-auto px-6 py-24">
           <div className="grid md:grid-cols-2 gap-8">
              <Link href="/safety/approach" className="group block p-8 border border-white/10 hover:border-[#3B82F6]/50 bg-[#121214] transition-all">
                 <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-sm group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                       <Eye size={24} />
                    </div>
                    <ArrowRight className="text-gray-500 group-hover:text-[#3B82F6] transition-colors" />
                 </div>
                 <h3 className="text-xl text-white font-medium mb-2">Our Safety Approach</h3>
                 <p className="text-gray-400 text-sm">Deep dive into Mechanistic Interpretability and how we see inside the model.</p>
              </Link>
              <Link href="/trust" className="group block p-8 border border-white/10 hover:border-[#3B82F6]/50 bg-[#121214] transition-all">
                 <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-sm group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                       <FileCheck size={24} />
                    </div>
                    <ArrowRight className="text-gray-500 group-hover:text-[#3B82F6] transition-colors" />
                 </div>
                 <h3 className="text-xl text-white font-medium mb-2">Trust & Transparency</h3>
                 <p className="text-gray-400 text-sm">View our external audit reports, red team findings, and live system metrics.</p>
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
