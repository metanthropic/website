'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">

        {/* 1. HEADER (OpenAI Charter Style) */}
        <div className="max-w-3xl mx-auto px-6 mb-24 text-center">
          <div className="inline-block mb-6 text-sm font-medium text-gray-500 uppercase tracking-widest">
            Company
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-8">
            About Metanthropic
          </h1>
          <p className="text-xl text-white font-light leading-relaxed">
            Metanthropic is an AI safety and research laboratory dedicated to building verifiable, interpretable, and safe artificial intelligence systems.
          </p>
        </div>

        {/* 2. MAIN SECTION: Vertical Image + Anthropic Narrative */}
        <section className="max-w-7xl mx-auto px-6 mb-32 grid md:grid-cols-2 gap-16 items-start">

           {/* LEFT: Vertical Founder Image (Restored) */}
           <div className="sticky top-32">
              <div className="relative aspect-[4/5] bg-[#121214] border border-white/10 rounded-sm overflow-hidden group">
                 <Image
                   src="/images/ekjot-singh.png"
                   alt="Ekjot Singh, Founder of Metanthropic"
                   fill
                   className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                 <div className="absolute bottom-8 left-8">
                    <div className="text-white font-serif text-3xl mb-1">Ekjot Singh</div>
                    <div className="text-[#3B82F6] font-mono text-sm uppercase tracking-widest">Founder & Director</div>
                 </div>
              </div>
           </div>

           {/* RIGHT: The Content (Anthropic Style) */}
           <div className="prose prose-invert prose-lg pt-2">

              <h2 className="text-3xl text-white font-serif mt-0 mb-6">We build verifiable systems</h2>
              <p className="text-gray-400 leading-relaxed">
                AI will have a vast impact on the world. We aim to build frontier AI systems that are not just powerful, but reliable and fully interpretable. We reject the "black box" paradigm. Our research focuses on developing architectures where the reasoning process is transparent and the outputs are bound by verifiable constraints.
              </p>

              <h2 className="text-3xl text-white font-serif mt-12 mb-6">Safety is physics</h2>
              <p className="text-gray-400 leading-relaxed">
                We treat AI safety not as a compliance checklist, but as a fundamental science akin to physics. We conduct empirical research to discover the "laws" that govern neural network behavior. By understanding the underlying dynamics of intelligence, we can build systems that are safe by design, rather than trying to align them after they are trained.
              </p>

              <h2 className="text-3xl text-white font-serif mt-12 mb-6">Interdisciplinary collaboration</h2>
              <p className="text-gray-400 leading-relaxed">
                Metanthropic is a collaborative team of physicists, mathematicians, deep learning engineers, and policy experts. We believe that solving the alignment problem requires perspectives from multiple domains. We bring together the rigor of the hard sciences with the agility of modern software engineering.
              </p>

           </div>
        </section>

        {/* 3. DIVIDER */}
        <div className="max-w-3xl mx-auto px-6">
           <div className="h-px bg-white/10 my-24" />
        </div>

        {/* 4. VALUES SECTION (Charter UI Style) */}
        <section className="max-w-3xl mx-auto px-6 mb-32">
          <h2 className="text-4xl text-white font-serif mb-12 text-center">Our Values</h2>
          <p className="text-xl text-gray-400 font-light text-center mb-16 leading-relaxed">
            Our values guide how we work together and the decisions we make. They are the operating system of our laboratory.
          </p>

          <div className="space-y-16">

            <div>
              <h3 className="text-2xl text-white font-medium mb-4">Act for the global good</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                We strive to make decisions that maximize positive outcomes for humanity in the long run. We are willing to be bold in our research directions if it means ensuring that AGI is a robustly positive force. We prioritize safety over speed, and humanity over profit.
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-white font-medium mb-4">Do the simple thing that works</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                We take an empirical approach to problems. We care about the size of our impact, not the complexity of our methods. If a simple linear probe explains a model behavior better than a complex neural network, we choose the simple explanation. Clarity is the precursor to safety.
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-white font-medium mb-4">Be helpful, honest, and harmless</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                We are a high-trust, low-ego organization. We communicate kindly and directly. We believe that the culture of the lab is reflected in the safety of the models we build. We foster an environment where it is safe to speak up about risks.
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
