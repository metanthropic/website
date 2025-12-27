'use client';

import Link from 'next/link';
import { ArrowRight, Cpu, Shield, Zap } from 'lucide-react';
import SpotlightCard from '../ui/SpotlightCard';

export default function ResearchGrid() {
  return (
    <section id="research" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-8">
        <h2 className="text-4xl font-serif text-white">Research Pillars</h2>
        <div className="hidden md:block text-gray-500 text-sm">Focusing on the critical path to AGI.</div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Card 1: Scaling */}
        <Link href="/research/scaling" className="block h-full group">
          <SpotlightCard className="p-8 h-full transition-all duration-300 hover:border-[#3B82F6]/50">
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-sm bg-white/5 group-hover:bg-[#3B82F6] transition-colors">
              <Zap className="w-6 h-6 text-[#3B82F6] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-white group-hover:text-[#3B82F6] transition-colors">Scaling & Architecture</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Optimizing compute-to-performance ratios and sustaining coherence over long contexts beyond standard transformers.
            </p>
            <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
              Deep Dive <ArrowRight className="w-3 h-3" />
            </span>
          </SpotlightCard>
        </Link>

        {/* Card 2: Capabilities */}
        <Link href="/research/capabilities" className="block h-full group">
          <SpotlightCard className="p-8 h-full transition-all duration-300 hover:border-[#3B82F6]/50">
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-sm bg-white/5 group-hover:bg-[#3B82F6] transition-colors">
              <Cpu className="w-6 h-6 text-[#3B82F6] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-white group-hover:text-[#3B82F6] transition-colors">Foundational Capabilities</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Advancing reasoning, multimodality, and RL to build systems capable of complex, multi-step problem solving.
            </p>
            <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
              Deep Dive <ArrowRight className="w-3 h-3" />
            </span>
          </SpotlightCard>
        </Link>

        {/* Card 3: Safety */}
        <Link href="/safety" className="block h-full group">
          <SpotlightCard className="p-8 h-full transition-all duration-300 hover:border-[#3B82F6]/50">
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-sm bg-white/5 group-hover:bg-[#3B82F6] transition-colors">
              <Shield className="w-6 h-6 text-[#3B82F6] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-white group-hover:text-[#3B82F6] transition-colors">Safety & Alignment</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Ensuring robustness against adversarial failure modes by integrating interpretability into pre-training.
            </p>
            <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
              Deep Dive <ArrowRight className="w-3 h-3" />
            </span>
          </SpotlightCard>
        </Link>

      </div>
    </section>
  );
}
