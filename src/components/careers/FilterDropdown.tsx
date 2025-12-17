'use client';

import React, { useRef, useEffect } from 'react';
import { ChevronDown, Check, Minus } from 'lucide-react';

export type FilterGroup = {
  label: string;
  options: string[];
};

interface FilterDropdownProps {
  label: string;
  isOpen: boolean;
  onToggleOpen: () => void;
  onClose: () => void;
  groups?: FilterGroup[];
  options?: string[];
  selectedValues: string[];
  onToggleValue: (value: string) => void;
  onToggleGroup?: (groupLabel: string, allValues: string[]) => void;
}

export default function FilterDropdown({
  label,
  isOpen,
  onToggleOpen,
  onClose,
  groups,
  options,
  selectedValues,
  onToggleValue,
  onToggleGroup
}: FilterDropdownProps) {

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const selectedCount = selectedValues.length;

  return (
    <div className="relative" ref={dropdownRef}>

      {/* --- TRIGGER BUTTON (Updated: Bigger and Wider) --- */}
      <button
        onClick={onToggleOpen}
        className={`flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition-all border shadow-sm ${
          (isOpen || selectedCount > 0)
          ? 'bg-white text-black border-white'
          : 'bg-[#121214] text-gray-300 border-white/10 hover:border-white/40'
        }`}
      >
        <span>{label}</span>
        {selectedCount > 0 && (
          <span className="bg-[#3B82F6] text-white px-2 py-0.5 rounded-full text-[10px] min-w-[20px] text-center">
            {selectedCount}
          </span>
        )}
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* --- DROPDOWN CONTENT --- */}
      {isOpen && (
        // Added w-72 for a wider menu
        <div className="absolute top-full left-0 mt-3 w-72 bg-[#1A1A1C] border border-white/10 rounded-lg shadow-2xl z-50 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-100 origin-top-left">

          {/* Scrollable Area */}
          <div className="max-h-72 overflow-y-auto custom-scrollbar p-2">

            {/* HIERARCHICAL MODE (Teams) */}
            {groups && groups.map((group) => {
              const groupSelectedCount = group.options.filter(opt => selectedValues.includes(opt)).length;
              const isAllSelected = groupSelectedCount === group.options.length && group.options.length > 0;
              const isIndeterminate = groupSelectedCount > 0 && !isAllSelected;

              return (
                <div key={group.label} className="mb-4 last:mb-0">
                  {/* Group Header */}
                  <div
                    className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-md cursor-pointer group/header select-none"
                    onClick={() => onToggleGroup && onToggleGroup(group.label, group.options)}
                  >
                    <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors ${
                       (isAllSelected || isIndeterminate) ? 'bg-[#3B82F6] border-[#3B82F6]' : 'border-gray-600 group-hover/header:border-gray-400'
                    }`}>
                      {isAllSelected && <Check size={12} className="text-white" />}
                      {isIndeterminate && <Minus size={12} className="text-white" />}
                    </div>
                    <span className="text-xs font-bold text-gray-300 group-hover/header:text-white uppercase tracking-wider">
                      {group.label}
                    </span>
                  </div>

                  {/* Children */}
                  <div className="mt-1 ml-2 border-l border-white/10 pl-2">
                    {group.options.map(opt => (
                      <div
                        key={opt}
                        className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-md cursor-pointer group/item select-none"
                        onClick={() => onToggleValue(opt)}
                      >
                         <div className={`w-3.5 h-3.5 rounded-[3px] border flex items-center justify-center transition-colors ${
                            selectedValues.includes(opt) ? 'bg-[#3B82F6] border-[#3B82F6]' : 'border-gray-700 group-hover/item:border-gray-500'
                         }`}>
                           {selectedValues.includes(opt) && <Check size={10} className="text-white" />}
                         </div>
                         <span className={`text-sm ${selectedValues.includes(opt) ? 'text-white' : 'text-gray-400 group-hover/item:text-gray-200'}`}>
                           {opt}
                         </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* FLAT MODE (Locations) */}
            {options && options.map(opt => (
              <div
                key={opt}
                className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-md cursor-pointer group/item select-none"
                onClick={() => onToggleValue(opt)}
              >
                 <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors ${
                    selectedValues.includes(opt) ? 'bg-[#3B82F6] border-[#3B82F6]' : 'border-gray-600 group-hover/item:border-gray-400'
                 }`}>
                   {selectedValues.includes(opt) && <Check size={12} className="text-white" />}
                 </div>
                 <span className={`text-sm ${selectedValues.includes(opt) ? 'text-white' : 'text-gray-400 group-hover/item:text-gray-200'}`}>
                   {opt}
                 </span>
              </div>
            ))}

          </div>
        </div>
      )}
    </div>
  );
}
