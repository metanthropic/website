'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Terminal,
  Shield,
  Microscope,
  ArrowRight,
  Command,
  FileText,
  Zap,
  Cpu,
  Lock,
  Globe,
  CreditCard,
  Users,
  Code,
  LayoutGrid,
  Key
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import SpotlightCard from '@/components/ui/SpotlightCard';

// --- DATA: HELP CATEGORIES (Modeled after OpenAI's structure but "Metanthropic-ed") ---
const HELP_CATEGORIES = [
  {
    id: 'billing',
    title: 'Account & Billing',
    description: 'Manage subscriptions, credit usage, refund requests, and invoice history.',
    icon: CreditCard,
    links: ['Pricing Tiers', 'Usage Dashboard', 'Invoices', 'Payment Methods']
  },
  {
    id: 'api',
    title: 'API Platform',
    description: 'Integration guides, rate limits, error handling, and SDK documentation.',
    icon: Terminal,
    links: ['API Reference', 'Rate Limits', 'Error Codes', 'Quickstart Guide']
  },
  {
    id: 'models',
    title: 'Model Behavior',
    description: 'Technical specs for Alpha-1, context window management, and reasoning capabilities.',
    icon: Cpu,
    links: ['Reasoning Engine', 'Context Window', 'Fine-tuning', 'System Prompts']
  },
  {
    id: 'enterprise',
    title: 'Enterprise & SSO',
    description: 'SAML/SSO configuration, SCIM provisioning, and workspace management.',
    icon: Users,
    links: ['SAML Setup', 'Role Management', 'Audit Logs', 'Dedicated Capacity']
  },
  {
    id: 'privacy',
    title: 'Privacy & Compliance',
    description: 'Data retention policies, SOC 2 reports, GDPR compliance, and zero-training guarantees.',
    icon: Shield,
    links: ['Data Policy', 'SOC 2 Report', 'GDPR / CCPA', 'Zero-Retention']
  },
  {
    id: 'open-source',
    title: 'Open Source',
    description: 'Access our open-weight models, research checkpoints, and evaluation harnesses.',
    icon: Globe,
    links: ['HuggingFace Hub', 'Eval Tools', 'Research Papers', 'License']
  },
  {
    id: 'safety',
    title: 'Safety & Alignment',
    description: 'Understanding Constitutional AI, safety boundaries, and refusal behaviors.',
    icon: Lock,
    links: ['Safety System', 'Refusal Types', 'Red Teaming', 'Responsible Disclosure']
  },
  {
    id: 'tools',
    title: 'Tools & Agents',
    description: 'Documentation for the Code Agent, visual reasoning, and tool-use capabilities.',
    icon: Code,
    links: ['Code Agent', 'Visual Input', 'Function Calling', 'Tool Definitions']
  },
  {
    id: 'interface',
    title: 'Metanthropic Console',
    description: 'Navigating the web interface, prompt library, and sharing settings.',
    icon: LayoutGrid,
    links: ['Workspace', 'Prompt Library', 'Sharing', 'Keyboard Shortcuts']
  }
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // FILTER LOGIC
  const filteredCategories = HELP_CATEGORIES.filter(cat =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.links.some(link => link.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 pt-32 pb-24">

        {/* 1. HERO & SEARCH INTERFACE */}
        <section className="max-w-4xl mx-auto px-6 mb-20 relative text-center">

          {/* Top Right: System Status Mini-Widget */}
          <div className="absolute top-0 right-6 hidden lg:flex items-center gap-3 bg-[#0A0A0A] border border-white/10 px-4 py-2 rounded-full hover:border-white/20 transition-colors cursor-pointer group">
             <Link href="/status" className="flex items-center gap-3">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               <span className="text-xs font-bold text-gray-400 group-hover:text-white uppercase tracking-widest transition-colors">
                  System Nominal
               </span>
               <ArrowRight size={12} className="text-gray-600 group-hover:text-white transition-colors" />
             </Link>
          </div>

          <div className="mt-12 md:mt-0">
             <div className="inline-flex items-center gap-2 mb-6 text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/20">
                <Terminal size={12} />
                <span className="text-xs font-bold uppercase tracking-widest">Support Terminal v2.1</span>
             </div>

             <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                Intelligence Interface
             </h1>
             <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-10">
                Access technical documentation, compliance records, and system diagnostics.
             </p>

             {/* FUNCTIONAL SEARCH BAR */}
             <div className="relative w-full max-w-2xl mx-auto group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-sm opacity-20 group-hover:opacity-40 blur transition duration-500" />
                <div className="relative flex items-center bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden p-1 focus-within:border-[#3B82F6]/50 transition-colors">
                  <div className="pl-4 text-gray-500 group-focus-within:text-[#3B82F6] transition-colors">
                    <Search size={20} />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search documentation, error codes, or billing..."
                    className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-4 text-lg placeholder-gray-600 outline-none z-10"
                    autoComplete="off"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="pr-4 text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest"
                    >
                      CLEAR
                    </button>
                  )}
                </div>
             </div>
          </div>

        </section>

        {/* 2. DYNAMIC CONTENT GRID */}
        <section className="max-w-7xl mx-auto px-6 mb-32">

           {/* Grid Header */}
           <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                 {searchQuery ? `Search Results (${filteredCategories.length})` : 'Knowledge Nodes'}
              </h2>
              {!searchQuery && (
                <div className="hidden md:flex gap-2 text-xs text-gray-600 font-mono">
                   <span>SORT: RELEVANCE</span>
                </div>
              )}
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredCategories.map((cat) => (
                   <SpotlightCard key={cat.id} className="p-8 h-full bg-[#0A0A0A] group cursor-pointer border-white/10 hover:border-[#3B82F6]/50 transition-colors">
                      <div className="flex justify-between items-start mb-6">
                         <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                            <cat.icon size={24} />
                         </div>
                         <ArrowRight className="text-gray-600 group-hover:text-[#3B82F6] transition-colors" />
                      </div>

                      <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
                        {cat.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-6 leading-relaxed h-10 overflow-hidden text-ellipsis line-clamp-2">
                         {cat.description}
                      </p>

                      {/* Deep Links List */}
                      <ul className="space-y-3 pt-4 border-t border-white/5">
                         {cat.links.map((link, idx) => (
                           <li key={idx} className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                              <FileText size={14} className="text-gray-700 group-hover/li:text-[#3B82F6]" />
                              {link}
                           </li>
                         ))}
                      </ul>
                   </SpotlightCard>
                ))}
              </AnimatePresence>
           </div>

           {/* Empty State */}
           {filteredCategories.length === 0 && (
              <div className="text-center py-24 border border-white/10 border-dashed rounded-sm bg-white/5">
                 <Terminal size={48} className="mx-auto text-gray-700 mb-4" />
                 <h3 className="text-xl text-white font-medium mb-2">No nodes found</h3>
                 <p className="text-gray-500 max-w-md mx-auto mb-6">
                    Your search for "{searchQuery}" did not match any active documentation clusters.
                 </p>
                 <button
                    onClick={() => setSearchQuery('')}
                    className="text-[#3B82F6] text-sm font-bold uppercase tracking-widest hover:underline"
                 >
                    Reset Interface
                 </button>
              </div>
           )}

        </section>

        {/* 3. QUICK ACTIONS (Footer Terminal) */}
        <section className="max-w-4xl mx-auto px-6">
           <div className="bg-[#050505] border border-white/10 rounded-sm p-8">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                 Common Diagnostic Queries
              </h3>
              <div className="grid md:grid-cols-2 gap-y-4 gap-x-12">
                 {[
                    "How to rotate API keys safely?",
                    "Interpreting 429 Rate Limit errors",
                    "Configuring Context Window size",
                    "Download latest Invoice PDF",
                    "Enterprise SSO Setup Guide",
                    "Reporting a Model Hallucination"
                 ].map((query, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-3 cursor-pointer"
                      onClick={() => setSearchQuery(query.split(' ')[2] || query.split(' ')[0])} // Simple 'smart' search trigger
                    >
                       <span className="text-gray-600 font-mono text-xs group-hover:text-[#3B82F6] transition-colors">{`>_`}</span>
                       <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{query}</span>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. AI ASSISTANT HINT */}
        <section className="max-w-4xl mx-auto px-6 mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-help">
               <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
               <span className="text-xs text-gray-500">
                  <span className="text-white font-bold">Metanthropic Assistant</span> is training. Live support available 9am-5pm PST.
               </span>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
