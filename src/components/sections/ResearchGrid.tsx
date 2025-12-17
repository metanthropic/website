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
        <SpotlightCard className="p-8">
          <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-sm bg-white/5">
            <Zap className="w-6 h-6 text-[#3B82F6]" />
          </div>
          <h3 className="text-xl font-medium mb-3 text-white">Scaling & Architecture</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Optimizing compute-to-performance ratios and sustaining coherence over long contexts beyond standard transformers.
          </p>
          <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            Deep Dive <ArrowRight className="w-3 h-3" />
          </span>
        </SpotlightCard>

        <SpotlightCard className="p-8">
          <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-sm bg-white/5">
            <Cpu className="w-6 h-6 text-[#3B82F6]" />
          </div>
          <h3 className="text-xl font-medium mb-3 text-white">Foundational Capabilities</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Advancing reasoning, multimodality, and RL to build systems capable of complex, multi-step problem solving.
          </p>
          <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            Deep Dive <ArrowRight className="w-3 h-3" />
          </span>
        </SpotlightCard>

        <SpotlightCard className="p-8">
          <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-sm bg-white/5">
            <Shield className="w-6 h-6 text-[#3B82F6]" />
          </div>
          <h3 className="text-xl font-medium mb-3 text-white">Safety & Alignment</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Ensuring robustness against adversarial failure modes by integrating interpretability into pre-training.
          </p>
          <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            Deep Dive <ArrowRight className="w-3 h-3" />
          </span>
        </SpotlightCard>
      </div>
    </section>
  );
}
