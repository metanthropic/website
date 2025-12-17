'use client';

import React, { useMemo } from 'react';
import { X, Check, Minus } from 'lucide-react';
import { JobPost } from '@/lib/jobs-data';

interface JobFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobs: JobPost[];
  selectedTeams: string[];
  selectedLocations: string[];
  onToggleTeam: (team: string) => void;
  onToggleDepartment: (dept: string, allTeams: string[]) => void;
  onToggleLocation: (loc: string) => void;
}

export default function JobFilterModal({
  isOpen,
  onClose,
  jobs,
  selectedTeams,
  selectedLocations,
  onToggleTeam,
  onToggleDepartment,
  onToggleLocation
}: JobFilterModalProps) {

  if (!isOpen) return null;

  const structure = useMemo(() => {
    const map: Record<string, Set<string>> = {};
    const locs = new Set<string>();

    jobs.forEach(job => {
      if (!map[job.department]) map[job.department] = new Set();
      map[job.department].add(job.team);
      locs.add(job.location);
    });

    return {
      departments: map,
      locations: Array.from(locs).sort()
    };
  }, [jobs]);

  return (
    // FIXED: Changed w-[600px] to w-[480px] and added max-w constraint for mobile
    <div className="absolute left-0 top-full mt-2 w-[300px] max-w-[calc(100vw-1rem)] bg-[#121214] border border-white/10 rounded-sm shadow-2xl z-50 p-6 flex flex-col">

      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Filter Roles</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X size={16} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">

        {/* COLUMN 1: TEAMS (Hierarchical) */}
        <div className="flex flex-col">
          <h4 className="text-white font-medium mb-3 text-sm">Teams</h4>

          {/* Custom Scrollbar Container */}
          <div className="space-y-6 max-h-80 overflow-y-auto pr-2 custom-scrollbar">

            {Object.entries(structure.departments).map(([dept, teamsSet]) => {
              const teams = Array.from(teamsSet);
              const selectedCount = teams.filter(t => selectedTeams.includes(t)).length;
              const isAllSelected = selectedCount === teams.length;
              const isIndeterminate = selectedCount > 0 && selectedCount < teams.length;

              return (
                <div key={dept} className="flex flex-col gap-2">
                  {/* Parent Checkbox */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={`w-4 h-4 flex-shrink-0 rounded-sm border flex items-center justify-center transition-colors
                      ${(isAllSelected || isIndeterminate) ? 'bg-[#3B82F6] border-[#3B82F6]' : 'border-white/20 group-hover:border-white'}`}
                    >
                      {isAllSelected && <Check size={10} className="text-white" />}
                      {isIndeterminate && <Minus size={10} className="text-white" />}
                    </div>
                    <input
                      type="checkbox"
                      className="hidden"
                      onChange={() => onToggleDepartment(dept, teams)}
                      checked={isAllSelected}
                    />
                    <span className={`text-sm font-medium ${selectedCount > 0 ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                      {dept}
                    </span>
                  </label>

                  {/* Children Checkboxes */}
                  <div className="ml-7 flex flex-col gap-2 border-l border-white/10 pl-4 py-1">
                    {teams.map(team => (
                      <label key={team} className="flex items-center gap-3 cursor-pointer group/child">
                        <div
                          className={`w-3.5 h-3.5 flex-shrink-0 rounded-sm border flex items-center justify-center transition-colors
                          ${selectedTeams.includes(team) ? 'bg-[#3B82F6] border-[#3B82F6]' : 'border-white/10 group-hover/child:border-white'}`}
                        >
                          {selectedTeams.includes(team) && <Check size={8} className="text-white" />}
                        </div>
                        <input
                          type="checkbox"
                          className="hidden"
                          onChange={() => onToggleTeam(team)}
                          checked={selectedTeams.includes(team)}
                        />
                        <span className={`text-xs ${selectedTeams.includes(team) ? 'text-white' : 'text-gray-500 group-hover/child:text-gray-300'}`}>
                          {team}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUMN 2: LOCATIONS */}
        <div className="flex flex-col">
          <h4 className="text-white font-medium mb-3 text-sm">Locations</h4>

          <div className="space-y-2 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
            {structure.locations.map((loc) => (
              <label key={loc} className="flex items-center gap-3 cursor-pointer group py-0.5">
                <div className={`w-4 h-4 flex-shrink-0 rounded-sm border flex items-center justify-center transition-colors ${selectedLocations.includes(loc) ? 'bg-[#3B82F6] border-[#3B82F6]' : 'border-white/20 group-hover:border-white'}`}>
                  {selectedLocations.includes(loc) && <Check size={10} className="text-white" />}
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={selectedLocations.includes(loc)}
                  onChange={() => onToggleLocation(loc)}
                />
                <span className={`text-sm ${selectedLocations.includes(loc) ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {loc}
                </span>
              </label>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex justify-end bg-[#121214]">
        <button
          onClick={onClose}
          className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] hover:text-white transition-colors"
        >
          View Roles
        </button>
      </div>
    </div>
  );
}
