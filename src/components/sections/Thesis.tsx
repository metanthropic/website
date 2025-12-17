'use client';

import { Cpu, Network, Lock, GitMerge } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Thesis() {
  return (
    <section id="mission" className="relative border-t border-white/10 bg-[#0A0A0A] overflow-hidden">

      {/* Background noise texture for "gritty" feel */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="grid md:grid-cols-2">

        {/* LEFT: The "Technical Visual" (The Blueprint) */}
        <div className="relative p-12 md:p-24 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center items-center min-h-[500px] overflow-hidden group">

           {/* The "Brain" Effect - A glowing, pulsing orbit */}
           <div className="absolute w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-3xl animate-pulse" />

           {/* The Central Artifact */}
           <div className="relative z-10 w-64 h-64 border border-[#3B82F6]/30 rounded-full flex items-center justify-center bg-[#030304]/80 backdrop-blur-sm shadow-[0_0_50px_rgba(59,130,246,0.1)]">
              {/* Inner spinning ring */}
              <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />

              {/* Core Icon */}
              <Network strokeWidth={0.5} className="w-24 h-24 text-[#3B82F6] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

              {/* Floating "Nodes" around the core */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-[#3B82F6] w-2 h-2 rounded-full shadow-[0_0_10px_#3B82F6]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 bg-[#3B82F6] w-2 h-2 rounded-full shadow-[0_0_10px_#3B82F6]" />
              </motion.div>
           </div>

           {/* Technical Labels (The "Blueprint" look) */}
           <div className="absolute bottom-10 left-10 font-mono text-xs text-[#3B82F6]">
              <div>ARCH_V.01</div>
              <div className="opacity-50">ALIGNMENT: INTRINSIC</div>
           </div>
        </div>

        {/* RIGHT: The "Manifesto" Text */}
        <div className="relative p-12 md:p-24 bg-[#030304] flex flex-col justify-center z-10">

          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[1px] bg-[#3B82F6]"></span>
            <span className="text-[#3B82F6] text-xs font-bold tracking-[0.2em] uppercase">The Coherence Horizon</span>
          </div>

          {/* The Quote */}
          <blockquote className="text-2xl md:text-3xl font-serif text-white leading-tight mb-8">
            &quot;True general intelligence is not just prediction. It is predictable reasoning. We are solving the &apos;Black Box&apos; problem at the neuron level.&quot;
          </blockquote>

          {/* Founder Signature */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-12">
            <div>
              <div className="text-white font-medium">Ekjot Singh</div>
              <div className="text-xs uppercase tracking-wider">Founder & Director</div>
            </div>
          </div>

          {/* Core Thesis Paragraphs */}
          <div className="space-y-6 text-gray-400 leading-relaxed font-light">
            <p>
              <strong className="text-white font-medium">The limit is not compute; it is coherence.</strong> Current scaling laws suggest that as capability increases, controllability decreases. This is the "Alignment Gap."
            </p>
            <p>
              Metanthropic rejects the industry standard of post-training reinforcement (RLHF). Instead, we integrate interpretability directly into the <span className="text-white border-b border-[#3B82F6]/30">pre-training objective</span>.
            </p>
            <p>
               We are building the infrastructure for <strong className="text-white">Deterministic AGI</strong>—models where safety is not a guardrail, but the underlying physics of the system.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
