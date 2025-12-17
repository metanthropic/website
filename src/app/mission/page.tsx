'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Target,
  ShieldCheck,
  Microscope,
  Scale,
  Globe,
  Zap,
  Lock
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';

export default function MissionPage() {

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 pt-32 pb-20">

        {/* 1. HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 mb-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-mono mb-8 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></span>
              Our Purpose
            </div>

            <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 tracking-tight leading-[1.1]">
              To Solve the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#3B82F6] to-[#3B82F6]">
                Physics of Intelligence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
              We are an independent research laboratory building AGI that is safe by design, not by chance.
              We believe alignment is a quantifiable property of a system, akin to entropy or mass.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="/charter" className="bg-white text-black px-8 py-4 rounded-sm font-bold hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2">
                 Read The Charter <ArrowRight size={16} />
              </Link>
              <Link href="/research" className="border border-white/20 text-white px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                 View Research Agenda
              </Link>
            </div>
          </motion.div>
        </section>

        {/* 2. THE CORE PROBLEM (The Alignment Gap) */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-16 items-center p-12 bg-[#0A0A0A] border border-white/10 rounded-sm"
          >
             <div>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">The Alignment Gap</h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                   <p>
                      The current paradigm of AI development is defined by a dangerous asymmetry: <strong>Capabilities are scaling exponentially, while control methods scale linearly.</strong>
                   </p>
                   <p>
                      We are building "Black Boxes" larger than our ability to illuminate them. At Metanthropic, we refuse to accept that AGI must be inscrutable. We operate on the conviction that to trust a mind, you must be able to read its thoughts.
                   </p>
                </div>
             </div>

             {/* Abstract Visual: Gap Graph */}
             <div className="relative h-64 md:h-full min-h-[300px] border-l border-white/10 pl-8 md:pl-12 flex flex-col justify-center">
                <div className="relative w-full h-48">
                   {/* Line 1: Capabilities (Exponential) */}
                   <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
                      <svg className="w-full h-full" preserveAspectRatio="none">
                         <path d="M0,192 C100,192 200,150 400,0" fill="none" stroke="#EDEDED" strokeWidth="2" strokeDasharray="5,5" />
                      </svg>
                      <div className="absolute top-0 right-0 text-white text-xs font-mono">CAPABILITY</div>
                   </div>

                   {/* Line 2: Safety (Linear) */}
                   <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
                      <svg className="w-full h-full" preserveAspectRatio="none">
                         <path d="M0,192 L400,100" fill="none" stroke="#333" strokeWidth="2" />
                      </svg>
                      <div className="absolute top-[40%] right-0 text-gray-600 text-xs font-mono">SAFETY</div>
                   </div>

                   {/* The Gap - UPDATED POSITIONING */}
                   <div className="absolute top-1/4 left-[40%] -translate-x-1/2 text-[#3B82F6] font-bold text-sm bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/20">
                      The Alignment Gap
                   </div>
                </div>
             </div>
          </motion.div>
        </section>

        {/* 3. OUR THESIS (The Solution) */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Our Thesis</h2>
              <p className="text-gray-400">We are closing the gap with three non-negotiable pillars.</p>
           </div>

           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
             className="grid md:grid-cols-3 gap-8"
           >
              {/* Card 1 */}
              <motion.div variants={fadeInUp} className="group p-8 border border-white/10 bg-[#050505] hover:border-[#3B82F6]/50 transition-colors rounded-sm">
                 <div className="w-12 h-12 bg-[#121214] flex items-center justify-center text-[#3B82F6] mb-6 rounded-sm group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <Microscope size={24} />
                 </div>
                 <h3 className="text-2xl font-serif text-white mb-4">Mechanistic Interpretability</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">
                    We map the neural circuitry of our models. Just as biology maps the genome, we map the "connectome" of our networks to identify where deception, bias, and reasoning failures originate.
                 </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeInUp} className="group p-8 border border-white/10 bg-[#050505] hover:border-[#3B82F6]/50 transition-colors rounded-sm">
                 <div className="w-12 h-12 bg-[#121214] flex items-center justify-center text-[#3B82F6] mb-6 rounded-sm group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <Scale size={24} />
                 </div>
                 <h3 className="text-2xl font-serif text-white mb-4">Constitutional Design</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">
                    Safety is not a filter; it is a constraint. We use "Constitutional AI" to train models that self-police their outputs against a set of human-defined principles during the pre-training phase.
                 </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeInUp} className="group p-8 border border-white/10 bg-[#050505] hover:border-[#3B82F6]/50 transition-colors rounded-sm">
                 <div className="w-12 h-12 bg-[#121214] flex items-center justify-center text-[#3B82F6] mb-6 rounded-sm group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <Target size={24} />
                 </div>
                 <h3 className="text-2xl font-serif text-white mb-4">Verifiable Reasoning</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">
                    A model that guesses is useful; a model that proves is revolutionary. We are building "System 2" reasoning engines that expose their chain of thought for human verification.
                 </p>
              </motion.div>
           </motion.div>
        </section>

        {/* 4. STRATEGIC PRINCIPLES (From Charter) */}
        <section className="pt-24 pb-12 border-t border-white/10 bg-[#0A0A0A]">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-12 gap-16">

                 {/* Left: Headline */}
                 <div className="md:col-span-4">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Operating Principles</h2>
                    <p className="text-gray-400 leading-relaxed mb-8">
                       Our Charter defines the parameters of our mission. These are the rules we cannot break, regardless of competitive pressure.
                    </p>
                    <Link href="/charter" className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                       Read full Charter <ArrowRight size={16} />
                    </Link>
                 </div>

                 {/* Right: Grid of 4 */}
                 <div className="md:col-span-8 grid sm:grid-cols-2 gap-12">

                    <div>
                       <div className="flex items-center gap-3 mb-3 text-white font-medium">
                          <Globe className="text-[#3B82F6]" size={20} />
                          <h3>Broadly Distributed Benefits</h3>
                       </div>
                       <p className="text-sm text-gray-500 leading-relaxed">
                          We commit to using any influence we obtain over AGI to ensure it benefits all of humanity, avoiding uses that unduly concentrate power.
                       </p>
                    </div>

                    <div>
                       <div className="flex items-center gap-3 mb-3 text-white font-medium">
                          <ShieldCheck className="text-[#3B82F6]" size={20} />
                          <h3>Long-Term Safety</h3>
                       </div>
                       <p className="text-sm text-gray-500 leading-relaxed">
                          If a value-aligned project comes close to building AGI before we do, we commit to stop competing and start assisting them.
                       </p>
                    </div>

                    <div>
                       <div className="flex items-center gap-3 mb-3 text-white font-medium">
                          <Zap className="text-[#3B82F6]" size={20} />
                          <h3>Technical Leadership</h3>
                       </div>
                       <p className="text-sm text-gray-500 leading-relaxed">
                          Policy advocacy is insufficient without capability. To steer the future, we must be on the cutting edge of what is possible.
                       </p>
                    </div>

                    <div>
                       <div className="flex items-center gap-3 mb-3 text-white font-medium">
                          <Lock className="text-[#3B82F6]" size={20} />
                          <h3>Cooperative Orientation</h3>
                       </div>
                       <p className="text-sm text-gray-500 leading-relaxed">
                          We actively cooperate with other research labs. Safety is a shared responsibility, not a trade secret.
                       </p>
                    </div>

                 </div>

              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
