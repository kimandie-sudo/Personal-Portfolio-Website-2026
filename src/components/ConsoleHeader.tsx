import React, { useState } from 'react';
import { Search, Mail, Phone, ExternalLink, Sparkles, Volume2, VolumeX, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ConsoleHeaderProps {
  onSearch: (query: string, category: string) => void;
  soundEnabled: boolean;
  setSoundEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ConsoleHeader: React.FC<ConsoleHeaderProps> = ({
  onSearch,
  soundEnabled,
  setSoundEnabled
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput, selectedCategory);
  };

  return (
    <header className="w-full bg-[#F4F4F2] border-b border-[#1A1A1A] pt-6 pb-4 px-4 sm:px-8">
      <div className="max-w-[1140px] mx-auto">
        {/* Main Masthead row */}
        <div className="flex flex-col md:flex-row justify-between md:items-end pb-4 border-b border-[#1A1A1A] gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-[#1A1A1A]">
                {PERSONAL_INFO.nameEn}
              </h1>
              <span className="text-sm font-bold text-gray-500 font-mono">({PERSONAL_INFO.nameKo})</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#0047BB] uppercase mt-1">
              Human-AI Interaction · Autonomous Driving UX · XAI Researcher
            </p>
          </div>

          <div className="text-left md:text-right text-[11px] leading-tight font-mono space-y-0.5 text-[#1A1A1A]">
            <p className="font-bold">{PERSONAL_INFO.email}</p>
            <p className="text-gray-600">{PERSONAL_INFO.phone}</p>
            <p className="text-[#0047BB] font-semibold uppercase">
              {PERSONAL_INFO.affiliationEn} / ADVISOR: {PERSONAL_INFO.advisor}
            </p>
          </div>
        </div>

        {/* Action bar: Search + Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-1.5 flex-1 max-w-xl">
            <div className="relative flex-1 flex items-center">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search publications, patents, XAI models, projects..."
                className="w-full h-8 pl-8 pr-3 text-xs bg-white text-[#1A1A1A] border border-[#1A1A1A] rounded-none outline-none focus:ring-1 focus:ring-[#0047BB] focus:border-[#0047BB]"
              />
              <Search className="w-3.5 h-3.5 text-gray-500 absolute left-2.5 pointer-events-none" />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-8 px-2 text-xs font-medium bg-white text-[#1A1A1A] border border-[#1A1A1A] rounded-none cursor-pointer outline-none focus:border-[#0047BB]"
            >
              <option value="ALL">ALL DOMAINS</option>
              <option value="PUBLICATIONS">PUBLICATIONS</option>
              <option value="INDUSTRY">INDUSTRY COLLAB</option>
              <option value="XAI">XAI & MLLM</option>
              <option value="AV_UX">AUTONOMOUS UX</option>
              <option value="PATENTS">PATENTS</option>
            </select>

            <button
              type="submit"
              className="h-8 px-4 bg-[#1A1A1A] hover:bg-[#0047BB] active:bg-black text-white text-[11px] font-bold uppercase tracking-wider rounded-none transition-colors cursor-pointer"
            >
              SEARCH
            </button>
          </form>

          {/* Quick links & SFX toggle */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="h-8 px-3 bg-white hover:bg-gray-100 text-[#1A1A1A] border border-[#1A1A1A] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0047BB]" />
              <span>EMAIL ME</span>
            </a>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="h-8 px-2.5 bg-white hover:bg-gray-100 text-[#1A1A1A] border border-[#1A1A1A] text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
              title={soundEnabled ? "Mute interaction sound effects" : "Enable interaction sound effects"}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#0047BB]" /> : <VolumeX className="w-3.5 h-3.5 text-gray-400" />}
              <span className="text-[10px] font-mono">{soundEnabled ? "SFX" : "MUTED"}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

