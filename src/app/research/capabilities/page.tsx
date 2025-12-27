'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import { Cpu, Brain, Terminal, GitBranch } from 'lucide-react';

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#3B82F6] text-xs font-bold tracking-widest uppercase mb-8">
               <Cpu size={12} /> Foundational Capabilities
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
               System 2 Reasoning.
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
               We are moving beyond probabilistic pattern matching to verifiable, multi-step reasoning. Our models do not just guess; they plan, critique, and execute.
            </p>
        </section>

        {/* Technical Deep Dive */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
           <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 border border-white/10 bg-[#0A0A0A] rounded-sm group hover:border-[#3B82F6]/50 transition-colors">
                 <Brain className="text-[#3B82F6] mb-6" size={32} />
                 <h3 className="text-xl text-white font-medium mb-4">Native Chain-of-Thought</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">
                    Reasoning is not an emergent side-effect; it is a training objective. We penalize models that jump to conclusions without generating a valid intermediate logic trace.
                 </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 border border-white/10 bg-[#0A0A0A] rounded-sm group hover:border-[#3B82F6]/50 transition-colors">
                 <Terminal className="text-[#3B82F6] mb-6" size={32} />
                 <h3 className="text-xl text-white font-medium mb-4">Active Tool Use</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">
                    Our models are trained to recognize their own limitations and autonomously call external APIs, run code, or query databases to ground their answers in reality.
                 </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 border border-white/10 bg-[#0A0A0A] rounded-sm group hover:border-[#3B82F6]/50 transition-colors">
                 <GitBranch className="text-[#3B82F6] mb-6" size={32} />
                 <h3 className="text-xl text-white font-medium mb-4">Self-Correction</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">
                    We implement "Critic-Actor" loops where the model reviews its own output for logical fallacies before showing the result to the user.
                 </p>
              </div>
           </div>
        </section>

        {/* Quote */}
        <section className="max-w-3xl mx-auto px-6 mb-24 text-center">
           <blockquote className="text-2xl font-serif text-white italic">
              "A model that cannot explain its reasoning is just a very expensive random number generator."
           </blockquote>
           <div className="mt-4 text-sm text-[#3B82F6] font-bold uppercase tracking-widest">
              — Ekjot Singh, Founder
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
