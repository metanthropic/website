'use client';

import React from 'react';
import { X } from 'lucide-react';
import { Tech, Topic } from '@/lib/research-data';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTech: Tech[];
  selectedTopics: Topic[];
  onToggleTech: (tech: Tech) => void;
  onToggleTopic: (topic: Topic) => void;
}

// Full Option Lists
const TECH_OPTIONS: Tech[] = [
  'Foundation Models',
  'Reasoning Systems',
  'Generative Vision',
  'Audio Intelligence',
  'Code Generation',
  'Video Generation',
  'Interpretability Tools',
  'Safety Frameworks',
  'Sparse Architectures',
  'Robotics',
  'General'
];

const TOPIC_OPTIONS: Topic[] = [
  'AGI',
  'Safety',
  'Founding',
  '2025',
  'Community & Collaboration',
  'Compute Scaling',
  'Ethics & Safety',
  'Exploration & Games',
  'Generative Models',
  'Language',
  'Learning Paradigms',
  'Multi-agent',
  'Reasoning & Policy',
  'Robotics',
  'Simulated Environments',
  'Software & Engineering',
  'Transformers',
  'Company'
];

export default function FilterModal({
  isOpen,
  onClose,
  selectedTech,
  selectedTopics,
  onToggleTech,
  onToggleTopic
}: FilterModalProps) {

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-[480px] bg-[#121214] border border-white/10 rounded-sm shadow-2xl z-50 p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Filter Research</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X size={16} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">

        {/* TECH COLUMN */}
        <div className="flex flex-col">
          <h4 className="text-white font-medium mb-3 text-sm">Tech</h4>
          {/* Scrollable Container for Tech */}
          <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {TECH_OPTIONS.map((tech) => (
              <label key={tech} className="flex items-center gap-3 cursor-pointer group py-0.5">
                <div className={`w-4 h-4 flex-shrink-0 rounded-sm border flex items-center justify-center transition-colors ${selectedTech.includes(tech) ? 'bg-[#3B82F6] border-[#3B82F6]' : 'border-white/20 group-hover:border-white'}`}>
                  {selectedTech.includes(tech) && <div className="w-2 h-2 bg-white rounded-sm" />}
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={selectedTech.includes(tech)}
                  onChange={() => onToggleTech(tech)}
                />
                <span className={`text-sm ${selectedTech.includes(tech) ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {tech}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* TOPIC COLUMN */}
        <div className="flex flex-col">
          <h4 className="text-white font-medium mb-3 text-sm">Topic</h4>
          {/* Scrollable Container for Topic */}
          <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {TOPIC_OPTIONS.map((topic) => (
              <label key={topic} className="flex items-center gap-3 cursor-pointer group py-0.5">
                <div className={`w-4 h-4 flex-shrink-0 rounded-sm border flex items-center justify-center transition-colors ${selectedTopics.includes(topic) ? 'bg-[#3B82F6] border-[#3B82F6]' : 'border-white/20 group-hover:border-white'}`}>
                  {selectedTopics.includes(topic) && <div className="w-2 h-2 bg-white rounded-sm" />}
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={selectedTopics.includes(topic)}
                  onChange={() => onToggleTopic(topic)}
                />
                <span className={`text-sm ${selectedTopics.includes(topic) ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {topic}
                </span>
              </label>
            ))}
          </div>
        </div>

      </div>

      {/* Footer / Done Button */}
      <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
        <button
          onClick={onClose}
          className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] hover:text-white transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
}
