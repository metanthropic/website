'use client';

import React from 'react';
import { Lock, Shield, Server, FileCode, CheckCircle, Bug } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      {/* Background Matrix Effect */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 pt-32 pb-24">

        {/* HERO */}
        <div className="max-w-4xl mx-auto px-6 mb-24 text-center">
           <div className="inline-flex items-center gap-2 text-[#3B82F6] mb-6">
              <Shield size={24} />
              <span className="font-bold tracking-widest uppercase text-sm">Metanthropic Security</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
              Your Data. Your Physics. <br/>Our Infrastructure.
           </h1>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We operate an information fortress. From zero-training guarantees to biosafety-level isolation for model weights.
           </p>
        </div>

        {/* 1. THE ZERO TRAINING PLEDGE */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
           <div className="bg-[#121214] border-l-4 border-[#3B82F6] p-8 md:p-12 rounded-r-sm">
              <h2 className="text-3xl text-white font-medium mb-4">The Zero-Training Guarantee</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                 Unlike other foundation model providers, Metanthropic differentiates strictly between "Research Data" and "Commercial Data."
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                 <div>
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2"><CheckCircle size={16} className="text-[#3B82F6]" /> Commercial API</h3>
                    <p className="text-sm text-gray-500">
                       Data sent to our API is <strong className="text-white">never</strong> used to train our models. It is retained for 30 days solely for abuse monitoring, then permanently deleted.
                    </p>
                 </div>
                 <div>
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2"><CheckCircle size={16} className="text-[#3B82F6]" /> Research Preview</h3>
                    <p className="text-sm text-gray-500">
                       Free tier consumer data may be used for training, but users have a one-click opt-out available in settings.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* 2. COMPLIANCE GRID (The "Corporate" Trust Signals) */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
           <div className="mb-12 text-center">
              <h2 className="text-3xl font-serif text-white">Compliance & Standards</h2>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['SOC 2 Type II', 'GDPR Compliant', 'HIPAA Ready', 'ISO 27001', 'CCPA', 'AES-256', 'TLS 1.3', 'Role-Based Access'].map((item) => (
                 <div key={item} className="p-6 border border-white/10 bg-white/5 rounded-sm flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
                    <CheckCircle className="text-[#3B82F6] mb-3" size={24} />
                    <span className="text-white font-medium">{item}</span>
                 </div>
              ))}
           </div>
        </section>

        {/* 3. RED TEAM NETWORK */}
        <section className="max-w-5xl mx-auto px-6 text-center border-t border-white/10 pt-24">
           <Bug size={48} className="text-[#3B82F6] mx-auto mb-6" />
           <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">The Red Team Network</h2>
           <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              We invite the world's best security researchers to break our systems.
              Our bug bounty program offers up to $50,000 for critical model extraction or safety bypass vulnerabilities.
           </p>
           <button className="bg-white text-black px-8 py-4 rounded-sm font-bold hover:bg-gray-200 transition-colors">
              View Bounty Program
           </button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
