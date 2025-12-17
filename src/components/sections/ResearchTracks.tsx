'use client';

import { ArrowRight, Cpu, Lock, Network, Loader2 } from 'lucide-react';
import SpotlightCard from '../ui/SpotlightCard';

export default function ResearchTracks() {
  const tracks = [
    {
      icon: Network,
      title: "Sparse Attention Scaling",
      status: "Recruiting",
      description: "Investigating sub-quadratic attention mechanisms for context windows exceeding 10M tokens.",
      progress: 65
    },
    {
      icon: Lock,
      title: "Mechanistic Interpretability",
      status: "In Progress",
      description: "Mapping activation atlases for deception detection in pre-training vs. fine-tuning stages.",
      progress: 40
    },
    {
      icon: Cpu,
      title: "Deterministic Reasoning",
      status: "In Progress",
      description: "Reducing hallucination rates by constraining the search space of Chain-of-Thought outputs.",
      progress: 25
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-serif text-white mb-2">Active Frontiers</h2>
          <p className="text-gray-400 font-light">The problems we are solving next.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#3B82F6]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]"></span>
          </span>
          LAB_OPERATIONAL
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tracks.map((track, idx) => (
          <SpotlightCard key={idx} className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/5 rounded-sm text-[#3B82F6]">
                <track.icon size={24} />
              </div>
              <div className="px-2 py-1 bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-[10px] font-bold uppercase tracking-wider rounded-sm flex items-center gap-1">
                {track.status === 'Recruiting' ? (
                   <>
                     <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-pulse" />
                     Recruiting
                   </>
                ) : (
                   <>
                     <Loader2 className="w-3 h-3 animate-spin" />
                     In Progress
                   </>
                )}
              </div>
            </div>

            <h3 className="text-xl font-medium text-white mb-3">{track.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-grow">
              {track.description}
            </p>

            {/* Progress Bar Visual - Shows "Velocity" to VCs */}
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
              <div
                className="bg-[#3B82F6] h-full rounded-full"
                style={{ width: `${track.progress}%` }}
              />
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
