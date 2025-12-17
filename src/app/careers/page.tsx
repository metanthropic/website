'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, MapPin, Users, X, Filter } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import InteractiveGrid from '@/components/ui/InteractiveGrid';
import FilterDropdown, { FilterGroup } from '@/components/careers/FilterDropdown';
import { JOB_POSTS } from '@/lib/jobs-data';

export default function CareersPage() {
  // --- STATE ---
  const [searchQuery, setSearchQuery] = useState('');

  // Open states for the two dropdowns
  const [openDropdown, setOpenDropdown] = useState<'teams' | 'locations' | null>(null);

  // Selected values
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  // --- DATA PREPARATION ---

  // 1. Group Teams by Department for Hierarchical Filter
  const teamStructure: FilterGroup[] = useMemo(() => {
    const groups: Record<string, Set<string>> = {};
    JOB_POSTS.forEach(job => {
      if (!groups[job.department]) groups[job.department] = new Set();
      groups[job.department].add(job.team);
    });
    return Object.entries(groups).map(([label, set]) => ({
      label,
      options: Array.from(set)
    }));
  }, []);

  // 2. Get Flat List of Locations
  const locationOptions = useMemo(() => {
    return Array.from(new Set(JOB_POSTS.map(j => j.location))).sort();
  }, []);

  // --- HANDLERS ---

  const handleToggleTeam = (team: string) => {
    setSelectedTeams(prev =>
      prev.includes(team) ? prev.filter(t => t !== team) : [...prev, team]
    );
  };

  const handleToggleDepartment = (deptLabel: string, deptTeams: string[]) => {
    const allSelected = deptTeams.every(t => selectedTeams.includes(t));
    if (allSelected) {
      setSelectedTeams(prev => prev.filter(t => !deptTeams.includes(t)));
    } else {
      const newTeams = [...selectedTeams];
      deptTeams.forEach(t => {
        if (!newTeams.includes(t)) newTeams.push(t);
      });
      setSelectedTeams(newTeams);
    }
  };

  const handleToggleLocation = (loc: string) => {
    setSelectedLocations(prev =>
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTeams([]);
    setSelectedLocations([]);
  };

  // --- FILTERING LOGIC ---
  const filteredJobs = useMemo(() => {
    return JOB_POSTS.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTeam = selectedTeams.length === 0 || selectedTeams.includes(job.team);
      const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(job.location);

      return matchesSearch && matchesTeam && matchesLocation;
    });
  }, [searchQuery, selectedTeams, selectedLocations]);

  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
         <InteractiveGrid />
      </div>

      <main className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Join the Lab</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
             We are looking for researchers and engineers to help us solve the physics of intelligence.
          </p>
        </div>

        {/* --- COMPACT FILTER BAR --- */}
        {/* Removed overflow-hidden/auto here to allow dropdowns to pop out */}
        <div className="sticky top-24 z-30 mb-12 flex flex-col md:flex-row gap-4 justify-center items-center">

           {/* 1. Search Input (Increased width to w-96) */}
           <div className="relative group w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white transition-colors" size={16} />
              <input
                 type="text"
                 placeholder="Search roles..."
                 className="w-full bg-[#121214] border border-white/10 rounded-full py-3 pl-11 pr-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/40 transition-all hover:border-white/20 shadow-lg"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>

           {/* 2. Separator */}
           <div className="hidden md:block w-px h-8 bg-white/10 mx-2" />

           {/* 3. Dropdown Filters */}
           <div className="flex flex-wrap gap-3 justify-center">

              <FilterDropdown
                label="Teams"
                isOpen={openDropdown === 'teams'}
                onToggleOpen={() => setOpenDropdown(openDropdown === 'teams' ? null : 'teams')}
                onClose={() => setOpenDropdown(null)}
                groups={teamStructure}
                selectedValues={selectedTeams}
                onToggleValue={handleToggleTeam}
                onToggleGroup={handleToggleDepartment}
              />

              <FilterDropdown
                label="Locations"
                isOpen={openDropdown === 'locations'}
                onToggleOpen={() => setOpenDropdown(openDropdown === 'locations' ? null : 'locations')}
                onClose={() => setOpenDropdown(null)}
                options={locationOptions}
                selectedValues={selectedLocations}
                onToggleValue={handleToggleLocation}
              />

           </div>
        </div>

        {/* --- RESULTS LIST --- */}
        <div className="space-y-4 min-h-[400px]">

           <div className="flex justify-between items-end mb-4 border-b border-white/10 pb-2">
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                 {filteredJobs.length} Open {filteredJobs.length === 1 ? 'Role' : 'Roles'}
              </div>
              {(selectedTeams.length > 0 || selectedLocations.length > 0 || searchQuery) && (
                 <button onClick={clearFilters} className="text-[10px] uppercase tracking-widest font-bold text-[#3B82F6] hover:text-white transition-colors flex items-center gap-1">
                    <X size={10} /> Clear Filters
                 </button>
              )}
           </div>

           {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Link
                  key={job.slug}
                  href={`/careers/${job.slug}`}
                  className="group block p-6 bg-[#121214] border border-white/5 hover:border-[#3B82F6]/50 rounded-sm transition-all hover:translate-x-1"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                     <div>
                        <h3 className="text-lg md:text-xl font-medium text-white mb-2 group-hover:text-[#3B82F6] transition-colors">
                           {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-xs text-gray-500 font-mono">
                           <span className="flex items-center gap-1.5">
                              <Users size={12} />
                              <span className="text-gray-400">{job.department}</span>
                              <span className="text-gray-700">/</span>
                              <span>{job.team}</span>
                           </span>
                           <span className="w-0.5 h-3 bg-gray-800 self-center" />
                           <span className="flex items-center gap-1.5">
                              <MapPin size={12} /> {job.location}
                           </span>
                        </div>
                     </div>

                     <div className="flex items-center gap-2 text-[#3B82F6] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        View Role <ArrowRight size={14} />
                     </div>
                  </div>
                </Link>
              ))
           ) : (
              <div className="py-24 text-center">
                 <p className="text-gray-500 mb-4 font-light">No roles found matching your criteria.</p>
                 <button
                    onClick={clearFilters}
                    className="text-white text-xs bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors inline-flex items-center gap-2"
                 >
                    <X size={12} /> Clear all filters
                 </button>
              </div>
           )}
        </div>

      </main>
      <Footer />
    </div>
  );
}
