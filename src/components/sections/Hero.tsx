'use client';

import React from 'react';
import Link from 'next/link'; // <--- Added Next.js Link
import { ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveGrid from '../ui/InteractiveGrid';
import DecryptedText from '../ui/DecryptedText';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-32 pb-20">

            {/* --- BACKGROUND LAYERS --- */}

            {/* 1. The Interactive Mouse-Tracking Grid */}
            <div className="absolute inset-0 z-0">
                <InteractiveGrid />
            </div>

            {/* 2. The Ambient Blue Glow (Depth) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#3B82F6] opacity-[0.12] blur-[120px] rounded-full z-0 pointer-events-none" />


            {/* --- FOREGROUND CONTENT --- */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">

                {/* A. Signal Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-bold tracking-widest uppercase mb-8 cursor-default"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]"></span>
                    </span>
                    System Status: Research Phase
                </motion.div>

                {/* B. Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
                >
                    Solving Artificial <br />
                    <span className="text-white drop-shadow-lg">
                        {/* Mobile: Static text to ensure layout stability */}
                        <span className="md:hidden">General Intelligence.</span>

                        {/* Desktop: Animated DecryptedText component */}
                        <DecryptedText
                            text="General Intelligence."
                            className="hidden md:inline-block"
                        />
                    </span>
                </motion.h1>

                {/* C. Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-lg md:text-2xl text-gray-400 leading-relaxed max-w-3xl font-light mb-12"
                >
                    <span className="text-white font-medium">Metanthropic is architecting the physics of AGI.</span> We do not patch intelligence; we architect it.
                    Building systems where alignment and reasoning are mathematically indivisible.
                </motion.p>

                {/* D. Call To Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
                >
                    {/* Primary Button - Linked to Manifesto */}
                    <Link href="/mission" className="group relative px-8 py-4 bg-[#3B82F6] text-white text-sm font-bold rounded-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative flex items-center justify-center gap-2">
                            Read Our Mission <ArrowRight className="w-4 h-4" />
                        </span>
                    </Link>

                    {/* Secondary Button */}
                    <Link
                        href="/research" // <--- The critical part
                        className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-white text-sm font-bold rounded-sm hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
                    >
                        <Globe className="w-4 h-4 text-gray-400" />
                        View Research Agenda
                    </Link>
                </motion.div>

                {/* E. Stats Row (Frontier-Class) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-24 pt-8 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center md:text-left"
                >
                    {/* Stat 1 */}
                    <div>
                        <div className="text-3xl font-light text-white mb-1">2025</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest">Founded</div>
                    </div>

                    {/* Stat 2 */}
                    <div>
                        <div className="text-3xl font-light text-white mb-1">Post-Transformer</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest">Architecture</div>
                    </div>

                    {/* Stat 3 */}
                    <div>
                        <div className="text-3xl font-light text-white mb-1">Reasoning</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest">Native</div>
                    </div>

                    {/* Stat 4 */}
                    <div>
                        <div className="text-3xl font-light text-white mb-1">Provable</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest">Alignment</div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
