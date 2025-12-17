'use client';

import React from 'react';
import Link from 'next/link';
import { Microscope, Dna, Atom, Binary, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import { motion } from 'framer-motion';

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      {/* Background Effect */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 pt-32 pb-20">

        {/* 1. HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tight leading-[1.1]"
              >
                Metanthropic <br />
                <span className="text-[#3B82F6]">for Science</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12"
              >
                We are building intelligence designed for the scientific method.
                Models that do not just generate answers, but <span className="text-white font-medium">derive proofs</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center gap-4"
              >
                <Link href="/careers" className="bg-white text-black px-8 py-4 rounded-sm font-bold hover:bg-gray-200 transition-colors">
                  Join the Science Team
                </Link>
                <Link href="/research/index" className="border border-white/20 text-white px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-colors">
                  View Research
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. MISSION STATEMENT (Positive Pivot) */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Scientific discovery is not about probable outcomes; it is about verifiable truth. To solve the hardest problems in physics, biology, and mathematics, researchers need more than a prediction engine—they need a reasoning partner.
                <br /><br />
                Metanthropic for Science builds <strong>Interpretable Architectures</strong> that expose their chain of thought. By making the "why" as accessible as the "what," we empower scientists to trust, verify, and build upon AI-generated insights with absolute confidence.
              </p>
            </div>
          </div>
        </section>

        {/* 3. LATEST HIGHLIGHTS */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex items-baseline justify-between mb-8 border-b border-white/10 pb-4">
            <h2 className="text-3xl font-serif text-white">Scientific Frontiers</h2>
            <Link href="/research" className="text-[#3B82F6] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-square bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden mb-4 group-hover:border-[#3B82F6]/50 transition-colors">
                 {/* Visual: Math/Logic */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3B82F6_0%,transparent_70%)] opacity-20" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Binary size={64} className="text-[#3B82F6] opacity-80" />
                 </div>
              </div>
              <div className="text-xs text-gray-500 font-mono mb-2">MATHEMATICS</div>
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#3B82F6] transition-colors">
                Automated Theorem Verification
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Integrating formal proof assistants (Coq/Lean) directly into the model's loss function to guarantee mathematical correctness.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-square bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden mb-4 group-hover:border-[#3B82F6]/50 transition-colors">
                 {/* Visual: Biology */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#10b981_0%,transparent_60%)] opacity-20" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Dna size={64} className="text-emerald-500 opacity-80" />
                 </div>
              </div>
              <div className="text-xs text-gray-500 font-mono mb-2">BIOLOGY</div>
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#3B82F6] transition-colors">
                Causal Protein Design
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Moving beyond structure prediction to generating novel proteins with verifiable binding properties and known failure modes.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-square bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden mb-4 group-hover:border-[#3B82F6]/50 transition-colors">
                 {/* Visual: Physics */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#8b5cf6_0%,transparent_60%)] opacity-20" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Atom size={64} className="text-violet-500 opacity-80" />
                 </div>
              </div>
              <div className="text-xs text-gray-500 font-mono mb-2">PHYSICS</div>
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#3B82F6] transition-colors">
                High-Fidelity Simulation
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Using sparse attention to model complex particle interactions with O(n) complexity, enabling simulations previously considered impossible.
              </p>
            </div>

          </div>
        </section>

        {/* 4. METHODOLOGY (Built for Discovery) */}
        <section className="bg-[#050505] py-24 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-12 gap-12">
              <div className="col-span-12 md:col-span-4">
                <h2 className="text-3xl font-serif text-white mb-6">Instruments, not Oracles.</h2>
                <p className="text-gray-400 leading-relaxed">
                  We treat AI as a precision instrument. Every output is designed to be inspected, critiqued, and verified by domain experts.
                </p>
              </div>

              <div className="col-span-12 md:col-span-8 grid gap-8">
                {/* Feature 1 */}
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-[#121214] border border-white/10 flex items-center justify-center rounded-sm shrink-0 text-[#3B82F6]">
                      <span className="font-mono font-bold">01</span>
                   </div>
                   <div>
                      <h3 className="text-xl text-white font-medium mb-2">Transparent Reasoning</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Our models provide a legible "Thought Trace" for every prediction. This allows researchers to audit the model's logic and ensure it aligns with physical laws.
                      </p>
                   </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-[#121214] border border-white/10 flex items-center justify-center rounded-sm shrink-0 text-[#3B82F6]">
                      <span className="font-mono font-bold">02</span>
                   </div>
                   <div>
                      <h3 className="text-xl text-white font-medium mb-2">Hypothesis Generation</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        We can ingest raw experimental data and propose testable, causal hypotheses, effectively acting as a co-investigator in the lab.
                      </p>
                   </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-[#121214] border border-white/10 flex items-center justify-center rounded-sm shrink-0 text-[#3B82F6]">
                      <span className="font-mono font-bold">03</span>
                   </div>
                   <div>
                      <h3 className="text-xl text-white font-medium mb-2">Reliable Citations</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Our science-focused checkpoints are fine-tuned to retrieve and cite sources accurately, eliminating the "hallucinated citation" problem common in general models.
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA (Get Involved) */}
        <section className="py-32 px-6">
           <div className="max-w-4xl mx-auto bg-[#3B82F6] rounded-sm p-12 text-center relative overflow-hidden group">
              {/* Background Texture */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Accelerate your research.</h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-light">
                  We are partnering with select laboratories to pilot our Alpha-1 Science Model. Apply to join the cohort.
                </p>
                <Link href="mailto:science@metanthropic.com" className="bg-white text-[#3B82F6] px-8 py-4 rounded-sm font-bold hover:bg-gray-100 transition-colors inline-block shadow-lg">
                  Request Access
                </Link>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
