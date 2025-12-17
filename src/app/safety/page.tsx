
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  ArrowRight,
  Server,
  Activity,
  FileCheck,
  Zap,
  Biohazard,
  BrainCircuit,
  Fingerprint
} from 'lucide-react';
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
                 Our Technical Approach <ArrowRight size={16} />
               </Link>
               <Link href="/charter" className="border border-white/20 text-white px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                 Read The Charter
               </Link>
            </div>
          </div>
        </section>

        {/* 2. THE LIFECYCLE: CONSTRAINT, VERIFY, CONTROL (Better than Teach/Test/Share) */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
           <div className="border-t border-white/10 pt-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <h2 className="text-3xl font-serif text-white mb-4">Defense in Depth</h2>
                <p className="text-gray-400 max-w-xl">
                  Standard labs rely on "RLHF" to patch behavior. We intervene at the atomic level of the model's cognition.
                </p>
              </div>
              <div className="hidden md:block text-gray-500 text-sm font-mono uppercase tracking-widest">
                 System Status: Enforced
              </div>
           </div>

           <div className="grid md:grid-cols-3 gap-6">

              {/* Pillar 1 */}
              <SpotlightCard className="p-8 h-full bg-[#0A0A0A]">
                 <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-[#3B82F6] mb-6">
                    <BrainCircuit size={24} />
                 </div>
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phase 1: Pre-Training</div>
                 <h3 className="text-2xl text-white font-medium mb-4">Constitutional Design</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">
                    We embed safety axioms directly into the loss function. The model is not just discouraged from harm; it is mathematically penalized for formulating harmful reasoning trajectories.
                 </p>
              </SpotlightCard>

              {/* Pillar 2 */}
              <SpotlightCard className="p-8 h-full bg-[#0A0A0A]">
                 <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-[#3B82F6] mb-6">
                    <Eye size={24} />
                 </div>
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phase 2: Inference</div>
                 <h3 className="text-2xl text-white font-medium mb-4">Mechanistic Oversight</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">
                    Our "Glass Box" tools monitor internal activations in real-time. If the model secretly plans deception, we see the neurons light up and intervene before a token is generated.
                 </p>
              </SpotlightCard>

              {/* Pillar 3 */}
              <SpotlightCard className="p-8 h-full bg-[#0A0A0A]">
                 <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-[#3B82F6] mb-6">
                    <Shield size={24} />
                 </div>
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phase 3: Deployment</div>
                 <h3 className="text-2xl text-white font-medium mb-4">The Kill Switch</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">
                    A hardware-level interlock that isolates the model from the internet. If a "Thought Trace" violates our charter, the system automatically severs external connections.
                 </p>
              </SpotlightCard>

           </div>
        </section>

        {/* 3. DOMAIN-SPECIFIC HAZARDS (Mimicking OpenAI's Child/Privacy sections but upgrading) */}
        <section className="bg-[#050505] border-y border-white/10 py-32">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 mb-20">
                 <div>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Categorical Risk Mitigation</h2>
                    <p className="text-gray-400 text-lg">
                       We categorize risks into three classes and deploy specific architectural defenses for each.
                    </p>
                 </div>
                 <div className="flex items-center justify-end">
                    <Link href="/safety/approach" className="text-[#3B82F6] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors flex items-center gap-2">
                       View Technical Details <ArrowRight size={16} />
                    </Link>
                 </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">

                 {/* Risk 1: Information */}
                 <div className="group border border-white/10 hover:border-white/30 bg-[#0A0A0A] p-8 rounded-sm transition-colors">
                    <Fingerprint className="text-gray-500 group-hover:text-[#3B82F6] mb-6 transition-colors" size={32} />
                    <h3 className="text-xl text-white font-medium mb-4">Information Hazards</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                       Protecting user privacy and preventing the generation of private data. We employ differential privacy techniques during training to ensure no individual's data can be extracted.
                    </p>
                    <ul className="text-xs text-gray-500 space-y-2 font-mono">
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#3B82F6] rounded-full"/> PII Redaction</li>
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#3B82F6] rounded-full"/> Zero-Retention API</li>
                    </ul>
                 </div>

                 {/* Risk 2: Physical */}
                 <div className="group border border-white/10 hover:border-white/30 bg-[#0A0A0A] p-8 rounded-sm transition-colors">
                    <Biohazard className="text-gray-500 group-hover:text-[#3B82F6] mb-6 transition-colors" size={32} />
                    <h3 className="text-xl text-white font-medium mb-4">Physical Hazards (CBRN)</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                       Preventing the misuse of AI for chemical, biological, radiological, or nuclear threats. We conduct "Preparedness Evals" with domain experts to stress-test the model's refusal boundaries.
                    </p>
                    <ul className="text-xs text-gray-500 space-y-2 font-mono">
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#3B82F6] rounded-full"/> Bio-weapon Knowledge Removal</li>
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#3B82F6] rounded-full"/> Dual-Use Screening</li>
                    </ul>
                 </div>

                 {/* Risk 3: Cognitive */}
                 <div className="group border border-white/10 hover:border-white/30 bg-[#0A0A0A] p-8 rounded-sm transition-colors">
                    <Zap className="text-gray-500 group-hover:text-[#3B82F6] mb-6 transition-colors" size={32} />
                    <h3 className="text-xl text-white font-medium mb-4">Cognitive Hazards</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                       Mitigating risks related to manipulation, child safety, and mass persuasion. Our models are constitutionally bound to prioritize factual accuracy over persuasiveness.
                    </p>
                    <ul className="text-xs text-gray-500 space-y-2 font-mono">
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#3B82F6] rounded-full"/> Anti-Sycophancy</li>
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#3B82F6] rounded-full"/> Child Safety Filters</li>
                    </ul>
                 </div>

              </div>
           </div>
        </section>

        {/* 4. ENTERPRISE RELIABILITY (The "Corporate" Angle) */}
        <section className="bg-[#0A0A0A] border-b border-white/10 py-24">
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

        {/* 5. NAVIGATION HUB */}
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
