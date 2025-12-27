'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import { ArrowRight, Network, Zap, Layers } from 'lucide-react';
import Link from 'next/link';

export default function ScalingPage() {
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
               <Zap size={12} /> Architecture Research
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
               The End of O(N²).
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
               We are breaking the quadratic bottleneck of the Transformer. By implementing sparse attention mechanisms and linearized state-space models, we are building the infrastructure for infinite context.
            </p>
        </section>

        {/* Technical Deep Dive */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl font-serif text-white mb-6">Sub-Quadratic Scaling</h2>
                 <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    Standard attention mechanisms scale quadratically with sequence length. This limits the "memory" of AI to a fixed window.
                 </p>
                 <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Our <strong>Sparse State Expansion (SSE)</strong> architecture decouples parameter size from state capacity, allowing us to process sequences of 10M+ tokens with linear compute cost.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-300">
                       <Network className="text-[#3B82F6]" size={20} />
                       <span>Active Retrieval vs. Passive Sliding Window</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                       <Layers className="text-[#3B82F6]" size={20} />
                       <span>Hierarchical Memory Stacks</span>
                    </li>
                 </ul>
              </div>
              <div className="relative aspect-square border border-white/10 bg-[#0A0A0A] rounded-sm flex items-center justify-center overflow-hidden">
                 {/* Visual abstraction of sparse attention */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3B82F6_0%,transparent_70%)] opacity-10" />
                 <div className="grid grid-cols-12 gap-1 w-3/4 h-3/4 opacity-50">
                    {[...Array(144)].map((_, i) => (
                       <div key={i} className={`rounded-[1px] ${
                         (i % 13 === 0 || i % 7 === 0) ? 'bg-[#3B82F6]' : 'bg-white/5'
                       }`} />
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-6 text-center border-t border-white/10 pt-24">
           <h2 className="text-3xl font-serif text-white mb-6">Read the Paper</h2>
           <p className="text-gray-400 mb-8">
              Our findings on "Scaling Linear Attention with Sparse State Expansion" are available for review.
           </p>
           <Link href="/research" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-sm font-bold hover:bg-gray-200 transition-colors">
              View Research Index <ArrowRight size={16} />
           </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
