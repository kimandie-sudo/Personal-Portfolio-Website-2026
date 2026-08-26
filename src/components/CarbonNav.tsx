import React from 'react';
import { Cpu, FileText, FlaskConical, Award, BookOpen, Layers, Sparkles } from 'lucide-react';

interface CarbonNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenDesignSpecs: () => void;
}

export const CarbonNav: React.FC<CarbonNavProps> = ({
  activeSection,
  setActiveSection,
  onOpenDesignSpecs
}) => {
  const navItems = [
    { id: 'overview', label: 'OVERVIEW', icon: Layers },
    { id: 'research', label: 'CORE STATEMENT', icon: Cpu },
    { id: 'publications', label: 'PUBLICATIONS', icon: BookOpen },
    { id: 'industry', label: 'COLLABORATIONS', icon: FlaskConical },
    { id: 'conferences', label: 'HONORS & TALKS', icon: Award },
    { id: 'skills', label: 'EDUCATION & PATENTS', icon: FileText },
  ];

  return (
    <div className="w-full flex flex-col border-b border-[#1A1A1A]">
      {/* Primary Navigation Bar (Deep Carbon Polish) */}
      <nav className="w-full bg-[#1A1A1A] text-white px-4 sm:px-8 py-2">
        <div className="max-w-[1140px] mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Lab Badge */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setActiveSection('overview')}
              className="bg-white text-[#1A1A1A] px-2.5 py-0.5 text-[11px] font-bold tracking-wider uppercase font-mono hover:bg-[#0047BB] hover:text-white transition-colors cursor-pointer"
            >
              SNU · LET LAB
            </button>
            <span className="text-[11px] text-gray-400 font-mono hidden sm:inline uppercase tracking-widest pl-2 border-l border-gray-700">
              Ph.D. Candidate (2020 – 2027)
            </span>
          </div>

          {/* Clean Editorial Nav Links */}
          <div className="flex items-center flex-wrap gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#0047BB] text-white shadow-sm'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className={`w-3 h-3 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Utility Chips */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenDesignSpecs}
              className="bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-white/20 flex items-center gap-1.5 cursor-pointer transition-colors"
              title="View Design Language Spec & Summary Table"
            >
              <Sparkles className="w-3 h-3 text-[#0047BB]" />
              <span>DESIGN SPEC</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Sub-strip with Highlights */}
      <div className="w-full bg-white border-b border-[#1A1A1A]/10 px-4 sm:px-8 py-1.5 text-[#1A1A1A]">
        <div className="max-w-[1140px] mx-auto flex items-center justify-between text-[11px] font-medium overflow-x-auto whitespace-nowrap scrollbar-none gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              CORE DOMAINS:
            </span>
            <span className="border-accent-left pl-2 font-semibold text-xs">
              Autonomous Driving UX
            </span>
            <span className="text-gray-300">/</span>
            <span className="font-semibold text-xs text-gray-700">
              fNIRS & Eye-Tracking Biometrics
            </span>
            <span className="text-gray-300">/</span>
            <span className="border-accent-left pl-2 font-semibold text-xs">
              Explainable AI (XAI)
            </span>
            <span className="text-gray-300">/</span>
            <span className="font-semibold text-xs text-gray-700">
              Multi-Agent MLLM Heuristics
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono shrink-0">
            <span className="bg-[#1A1A1A] text-white px-1.5 py-0.5 font-bold">
              IEEE THMS '26 (IF 4.4)
            </span>
            <span className="bg-[#0047BB] text-white px-1.5 py-0.5 font-bold">
              IJHCI '26 (JCR Q1)
            </span>
            <span className="bg-gray-200 text-[#1A1A1A] px-1.5 py-0.5 font-bold">
              ACM CHI '26 LBW
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

