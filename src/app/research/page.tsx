'use client';

import React, { useState, useMemo } from 'react';
import {
  ArrowRight,
  Users,
  Microscope,
  ShieldCheck,
  Scale,
  Menu,
  ArrowUpRight,
  X
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import ResearchTracks from '@/components/sections/ResearchTracks';
import Link from 'next/link';
import Image from 'next/image';
import { RESEARCH_DATA } from '@/lib/research-data';
import { AUTHORS } from '@/lib/author-data'; // <--- 1. Import Authors

export default function ResearchPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. DYNAMIC DATA LOGIC
  const featuredPaper = useMemo(() => {
    if (!RESEARCH_DATA || RESEARCH_DATA.length === 0) return null;
    const sortedData = [...RESEARCH_DATA].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return sortedData[0];
  }, []);

  if (!featuredPaper) {
    return (
      <div className="min-h-screen bg-[#030304] flex items-center justify-center text-white font-mono text-sm">
        [SYSTEM_STATUS: NO_DATA_AVAILABLE]
      </div>
    );
  }

  // <--- 2. Resolve Authors for Featured Paper
  const paperAuthors = (featuredPaper.authors || []).map(id => AUTHORS[id]).filter(Boolean);

  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* --- LEFT SIDEBAR --- */}
        <aside className="md:col-span-3 md:sticky md:top-32 h-fit z-20">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white mb-6 w-full border-b border-white/10 pb-4"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            {isMobileMenuOpen ? 'Close Menu' : 'Research Menu'}
          </button>

          <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block transition-all duration-300`}>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-3">
              Directory
            </div>
            <ul className="flex flex-col space-y-1">
              <li>
                <Link href="/research" className="flex items-center justify-between bg-[#3B82F6]/10 text-[#3B82F6] px-3 py-2 rounded-sm text-sm font-bold border-l-2 border-[#3B82F6]">
                  Research Overview
                </Link>
              </li>
              <li>
                <Link href="/research/index" className="flex items-center justify-between text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-sm text-sm font-medium transition-colors group">
                  Research Index
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-600">
                    <ArrowRight size={12} />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/charter" className="flex items-center justify-between text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-sm text-sm font-medium transition-colors group">
                  Charter
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-600">
                    <ArrowRight size={12} />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="flex items-center justify-between text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-sm text-sm font-medium transition-colors group">
                  Research Residency
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-600">
                    <ArrowRight size={12} />
                  </span>
                </Link>
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10 px-3 hidden md:block">
               <div className="text-xs text-gray-500 mb-2">Latest Status</div>
               <div className="flex items-center gap-2 text-xs font-mono text-[#3B82F6]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]"></span>
                  </span>
                  LAB_OPERATIONAL
               </div>
            </div>
          </nav>
        </aside>

        {/* --- RIGHT CONTENT AREA --- */}
        <div className="md:col-span-9">

          {/* 1. HERO SECTION */}
          <section className="mb-24">
            <Link
              href={featuredPaper.link}
              className="grid lg:grid-cols-2 gap-12 items-start group cursor-pointer"
            >
              {/* Left: Text Content */}
              <div>
                <div className="flex gap-3 mb-6">
                    <span className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-[10px] font-bold uppercase tracking-wider rounded-sm">
                      {featuredPaper.category}
                    </span>
                    <span className="px-2 py-1 bg-white/5 text-gray-500 text-[10px] font-bold uppercase tracking-wider rounded-sm font-mono">
                      {featuredPaper.date}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif text-white leading-[1.1] mb-6 group-hover:text-[#3B82F6] transition-colors">
                  {featuredPaper.title}
                </h1>

                {/* <--- 3. Updated Dynamic Author Section --- > */}
                <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-400">
                   <div className="flex items-center gap-2">
                     <Users size={16} className="text-[#3B82F6]" />
                     {paperAuthors.length > 0 ? (
                       paperAuthors.map((author, i) => (
                         <span key={author.name}>
                           <span className="text-white font-medium">{author.name}</span>
                           {i < paperAuthors.length - 1 && <span className="mx-2 opacity-50">/</span>}
                         </span>
                       ))
                     ) : (
                       // Fallback if no authors found
                       <span className="text-white">Metanthropic Research</span>
                     )}
                   </div>
                </div>

                <p className="text-gray-400 leading-relaxed font-light">
                  {featuredPaper.summary}
                </p>
              </div>

              {/* Right: Visual Abstract OR Real Image */}
              <div className="relative w-full aspect-square bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden group-hover:border-[#3B82F6]/30 transition-colors">

                 {featuredPaper.image ? (
                   // --- OPTION A: REAL IMAGE (If it exists in data) ---
                   <Image
                     src={featuredPaper.image}
                     alt={featuredPaper.title}
                     fill
                     className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                   />
                 ) : (
                   // --- OPTION B: ABSTRACT ART (Fallback) ---
                   <>
                     <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-40 h-40 border border-[#3B82F6]/50 rounded-lg backdrop-blur-sm bg-[#3B82F6]/5 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
                           <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/20 to-transparent opacity-50" />
                           <div className="w-24 h-24 border border-white/20 rounded-md flex items-center justify-center">
                              <div className="w-12 h-12 bg-[#3B82F6] rounded-full blur-2xl opacity-40 animate-pulse" />
                           </div>
                        </div>
                     </div>
                     <div className="absolute bottom-4 right-4 text-[10px] font-mono text-gray-600">
                       FIG 1: ACTIVATION
                     </div>
                   </>
                 )}

              </div>
            </Link>
          </section>

          {/* 2. THE FRONTIER */}
          <div className="border-t border-white/10 -mx-6 px-6 md:mx-0 md:px-0">
             <ResearchTracks />
          </div>

          {/* 3. METHODOLOGY */}
          <section className="py-24 border-t border-white/10">
             <div className="mb-12">
                <h2 className="text-2xl font-serif text-white mb-4">Our Methodology</h2>
                <p className="text-gray-400 max-w-2xl font-light">
                  We believe that AGI will not be achieved by scale alone. We are building a new stack based on three non-negotiable pillars.
                </p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                <div className="group">
                   <div className="w-10 h-10 bg-[#121214] border border-white/10 flex items-center justify-center rounded-sm mb-4 text-[#3B82F6] group-hover:border-[#3B82F6] transition-colors">
                      <Microscope size={20} />
                   </div>
                   <h3 className="text-lg text-white font-medium mb-2">Interpretability</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">
                      Every model we train is subjected to rigorous activation mapping. If we cannot explain a behavior, we do not ship it.
                   </p>
                </div>
                <div className="group">
                   <div className="w-10 h-10 bg-[#121214] border border-white/10 flex items-center justify-center rounded-sm mb-4 text-[#3B82F6] group-hover:border-[#3B82F6] transition-colors">
                      <Scale size={20} />
                   </div>
                   <h3 className="text-lg text-white font-medium mb-2">Scalable Oversight</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">
                      Developing &quot;Constitutional AI&quot; methods where models supervise other models based on formal rules.
                   </p>
                </div>
                <div className="group">
                   <div className="w-10 h-10 bg-[#121214] border border-white/10 flex items-center justify-center rounded-sm mb-4 text-[#3B82F6] group-hover:border-[#3B82F6] transition-colors">
                      <ShieldCheck size={20} />
                   </div>
                   <h3 className="text-lg text-white font-medium mb-2">Intrinsic Safety</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">
                      Baking safety constraints into the model&#39;s weights and architecture before fine-tuning begins.
                   </p>
                </div>
             </div>
          </section>

          {/* 4. JOIN THE LAB */}
          <section className="py-24 border-t border-white/10">
             <div className="grid md:grid-cols-2 gap-12">
                <div>
                   <h2 className="text-3xl font-serif text-white mb-4">Join the Lab</h2>
                   <p className="text-gray-400 mb-6 leading-relaxed">
                      We are looking for researchers who are tired of incrementally improving benchmarks and want to solve the foundational problems of intelligence.
                   </p>
                   <Link href="/careers" className="text-[#3B82F6] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                      View all open roles <ArrowRight size={16} />
                   </Link>
                </div>
                <div className="space-y-3">
                   <div className="p-4 border border-white/10 bg-[#121214] rounded-sm hover:border-[#3B82F6]/50 transition-colors cursor-pointer group">
                      <div className="flex justify-between items-center">
                         <h3 className="text-white font-medium group-hover:text-[#3B82F6] transition-colors">Research Engineer</h3>
                         <ArrowUpRight size={14} className="text-gray-600 group-hover:text-[#3B82F6]" />
                      </div>
                   </div>
                   <div className="p-4 border border-white/10 bg-[#121214] rounded-sm hover:border-[#3B82F6]/50 transition-colors cursor-pointer group">
                      <div className="flex justify-between items-center">
                         <h3 className="text-white font-medium group-hover:text-[#3B82F6] transition-colors">Research Scientist</h3>
                         <ArrowUpRight size={14} className="text-gray-600 group-hover:text-[#3B82F6]" />
                      </div>
                   </div>
                </div>
             </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
