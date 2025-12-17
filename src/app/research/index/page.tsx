'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Filter, LayoutGrid, List, ArrowRight, ChevronDown, Check } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import ResearchRow from '@/components/research/ResearchRow';
import ResearchCard from '@/components/research/ResearchCard';
import FilterModal from '@/components/research/FilterModal';
import { RESEARCH_DATA, Category, Tech, Topic } from '@/lib/research-data';

type SortOption = 'Newest' | 'Oldest' | 'A-Z';

export default function ResearchIndex() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [sortBy, setSortBy] = useState<SortOption>('Newest');
  const [isSortOpen, setIsSortOpen] = useState(false);

  // --- NEW: Filter Modal State ---
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<Tech[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);

  // Toggle Logic
  const toggleTech = (tech: Tech) => {
    setSelectedTech(prev => prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]);
  };
  const toggleTopic = (topic: Topic) => {
    setSelectedTopics(prev => prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]);
  };

  // --- FILTERING LOGIC ---
  let processedData = RESEARCH_DATA.filter(item => {
    // 1. Basic Category (Top Bar)
    if (activeFilter !== 'All' && item.category !== activeFilter) return false;

    // 2. Tech Filter
    if (selectedTech.length > 0) {
      if (!item.tech || !item.tech.some(t => selectedTech.includes(t))) return false;
    }

    // 3. Topic Filter
    if (selectedTopics.length > 0) {
      if (!item.topics || !item.topics.some(t => selectedTopics.includes(t))) return false;
    }

    return true;
  });

  // --- SORTING LOGIC ---
  processedData.sort((a, b) => {
    if (sortBy === 'Newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortBy === 'Oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
    if (sortBy === 'A-Z') return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* --- LEFT SIDEBAR --- */}
        <aside className="md:col-span-3 hidden md:block sticky top-32 h-fit">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 px-3">
            Directory
          </div>
          <nav className="flex flex-col space-y-1">
            <Link href="/research" className="text-gray-400 hover:text-white px-3 py-2 rounded-sm text-sm font-medium transition-colors group flex justify-between">
              Research Overview <ArrowRight size={14} className="opacity-0 group-hover:opacity-100" />
            </Link>
            <Link href="/research/index" className="bg-[#3B82F6]/10 text-[#3B82F6] px-3 py-2 rounded-sm text-sm font-bold border-l-2 border-[#3B82F6]">
              Research Index
            </Link>
            <Link href="/charter" className="text-gray-400 hover:text-white px-3 py-2 rounded-sm text-sm font-medium transition-colors group flex justify-between">
              Charter <ArrowRight size={14} className="opacity-0 group-hover:opacity-100" />
            </Link>
          </nav>
        </aside>

        {/* --- RIGHT CONTENT --- */}
        <div className="md:col-span-9">
          <h1 className="text-5xl font-serif text-white mb-12">Research Index</h1>

          {/* CONTROL BAR */}
          <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-4 mb-8">
            <div className="flex gap-6 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
              {['All', 'Publication', 'Milestone', 'Release'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat as Category)}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    activeFilter === cat ? 'text-[#3B82F6]' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-6 relative">

               {/* 1. FILTER BUTTON */}
               <div className="relative">
                 <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className={`flex items-center gap-2 text-sm transition-colors ${
                      (selectedTech.length > 0 || selectedTopics.length > 0) ? 'text-[#3B82F6]' : 'text-gray-400 hover:text-white'
                    }`}
                 >
                    Filter <Filter size={14} />
                 </button>

                 {/* The Modal Component */}
                 <FilterModal
                    isOpen={isFilterOpen}
                    onClose={() => setIsFilterOpen(false)}
                    selectedTech={selectedTech}
                    selectedTopics={selectedTopics}
                    onToggleTech={toggleTech}
                    onToggleTopic={toggleTopic}
                 />
               </div>

               {/* 2. SORT BUTTON */}
               <div className="relative">
                 <button
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                 >
                    Sort <ChevronDown size={14} />
                 </button>

                 {isSortOpen && (
                   <div className="absolute right-0 top-full mt-2 w-40 bg-[#121214] border border-white/10 rounded-sm shadow-xl z-50 py-1">
                      {['Newest', 'Oldest', 'A-Z'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => { setSortBy(opt as SortOption); setIsSortOpen(false); }}
                          className="w-full text-left px-4 py-2 text-xs hover:bg-white/5 text-gray-400 hover:text-white flex justify-between"
                        >
                          {opt} {sortBy === opt && <Check size={12} className="text-[#3B82F6]" />}
                        </button>
                      ))}
                   </div>
                 )}
               </div>

               <div className="w-[1px] h-4 bg-white/10" />

               {/* 3. VIEW TOGGLES */}
               <div className="flex gap-2">
                 <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded-sm ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}><LayoutGrid size={16} /></button>
                 <button onClick={() => setViewMode('list')} className={`p-1.5 rounded-sm ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}><List size={16} /></button>
               </div>
            </div>
          </div>

          {/* LIST CONTENT */}
          {processedData.length > 0 ? (
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'flex flex-col'}>
              {processedData.map((item) => (
                viewMode === 'grid' ? <ResearchCard key={item.id} {...item} /> : <ResearchRow key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border-b border-white/10">
              <div className="text-gray-500 mb-2">No research found matching these filters.</div>
              <button
                onClick={() => { setActiveFilter('All'); setSelectedTech([]); setSelectedTopics([]); }}
                className="text-[#3B82F6] text-xs font-bold uppercase tracking-widest hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}
