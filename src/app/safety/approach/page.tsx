/* FILE: src/app/safety/approach/page.tsx
   ACTION: Simplify title (remove DecryptedText)
*/

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Network, Zap, Search } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import SpotlightCard from '@/components/ui/SpotlightCard';
// Removed DecryptedText import

export default function SafetyApproachPage() {
  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">

        {/* 1. HEADER (SIMPLIFIED) */}
        <div className="max-w-4xl mx-auto px-6 mb-20 text-center">
          <Link href="/safety" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white mb-8 transition-colors">
             <ArrowLeft size={16} /> Return to Safety Hub
          </Link>

          {/* Replaced fancy loader with standard static text */}
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
             Mechanistic Interpretability
          </h1>

          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
             We do not just train models; we dissect them.
             Our approach treats neural networks as physical systems that can be mapped, understood, and engineered.
          </p>
        </div>

        {/* 2. THE COMPARISON (Glass Box vs Black Box) */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
           <div className="grid md:grid-cols-2 gap-1 border border-white/10 bg-white/10 rounded-sm overflow-hidden">

              {/* LEFT: The Industry Standard */}
              <div className="bg-[#050505] p-12 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                 <div className="relative z-10 opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">The Industry Standard</div>
                    <h3 className="text-3xl font-serif text-gray-400 mb-6">"The Black Box"</h3>
                    <p className="text-gray-500 leading-relaxed mb-8">
                       Standard LLMs are opaque probabilistic engines. Safety is applied via "Reinforcement Learning from Human Feedback" (RLHF)—essentially training the model to hide its bad behavior, not remove it.
                    </p>
                    <div className="h-48 border border-white/5 bg-white/5 rounded-sm flex items-center justify-center">
                       <div className="text-gray-600 font-mono text-sm">? [HIDDEN STATE] ?</div>
                    </div>
                 </div>
              </div>

              {/* RIGHT: Metanthropic */}
              <div className="bg-[#121214] p-12 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[#3B82F6]/5" />
                 <div className="relative z-10">
                    <div className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest mb-4">The Metanthropic Standard</div>
                    <h3 className="text-3xl font-serif text-white mb-6">"The Glass Box"</h3>
                    <p className="text-gray-300 leading-relaxed mb-8">
                       We map the activation patterns of specific neurons to concepts (e.g., deception, sycophancy). We can visually inspect the model's "Thought Trace" and surgically remove harmful circuits without degrading general capability.
                    </p>
                    <div className="h-48 border border-[#3B82F6]/30 bg-[#3B82F6]/10 rounded-sm flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 p-2">
                          {[...Array(24)].map((_, i) => (
                             <div key={i} className={`rounded-sm ${i === 7 || i === 14 ? 'bg-[#3B82F6] animate-pulse' : 'bg-[#3B82F6]/20'}`} />
                          ))}
                       </div>
                       <div className="relative z-10 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#3B82F6] text-[#3B82F6] text-xs font-mono font-bold">
                          CIRCUIT_MAPPED
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </section>

        {/* 3. TECHNICAL PILLARS */}
        <section className="max-w-7xl mx-auto px-6">
           <div className="mb-12">
              <h2 className="text-3xl font-serif text-white">Core Technologies</h2>
           </div>

           <div className="grid md:grid-cols-3 gap-8">

              <SpotlightCard className="p-8">
                 <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-[#3B82F6] mb-6">
                    <Network size={24} />
                 </div>
                 <h3 className="text-xl text-white font-medium mb-3">Sparse Autoencoders</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                    We use massive-scale sparse autoencoders to decompose the model's dense representations into interpretable features, allowing us to read the "language of the neurons."
                 </p>
              </SpotlightCard>

              <SpotlightCard className="p-8">
                 <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-[#3B82F6] mb-6">
                    <Search size={24} />
                 </div>
                 <h3 className="text-xl text-white font-medium mb-3">Causal Tracing</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                    By intervening on specific activations during a forward pass, we can mathematically prove which parts of the model caused a specific output, establishing a causal chain of reasoning.
                 </p>
              </SpotlightCard>

              <SpotlightCard className="p-8">
                 <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-[#3B82F6] mb-6">
                    <Zap size={24} />
                 </div>
                 <h3 className="text-xl text-white font-medium mb-3">Activation Steering</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                    We clamp specific feature vectors (e.g., "Honesty") to high values during inference, forcing the model to adhere to safety constraints even in adversarial scenarios.
                 </p>
              </SpotlightCard>

           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
