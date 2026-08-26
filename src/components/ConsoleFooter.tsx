import React from 'react';
import { ShieldCheck, Mail, Phone, ExternalLink, Sparkles, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ConsoleFooterProps {
  onOpenDesignSpecs: () => void;
}

export const ConsoleFooter: React.FC<ConsoleFooterProps> = ({ onOpenDesignSpecs }) => {
  return (
    <footer className="w-full bg-[#1A1A1A] border-t border-black/20 text-gray-300 px-4 sm:px-8 py-8 mt-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand mark and Academic Affiliation */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Badge */}
          <div className="bg-white text-[#1A1A1A] p-2 flex items-center gap-2">
            <div className="w-6 h-6 bg-[#0047BB] text-white flex items-center justify-center font-bold text-xs font-mono">
              SNU
            </div>
            <div className="pr-1 text-left">
              <div className="text-[10px] font-bold uppercase leading-none">LET LAB</div>
              <div className="text-[8px] font-semibold text-gray-500 leading-none mt-0.5 font-mono">HUMAN-AI SYSTEM</div>
            </div>
          </div>

          {/* Academic Trust Mark */}
          <div className="text-xs text-gray-300 text-left">
            <p className="font-bold text-white">
              {PERSONAL_INFO.nameKo} ({PERSONAL_INFO.nameEn}) · {PERSONAL_INFO.titleKo}
            </p>
            <p className="text-gray-400">
              {PERSONAL_INFO.affiliationKo} · 지도교수: {PERSONAL_INFO.advisor}
            </p>
          </div>
        </div>

        {/* Center/Right: Design System & Quick Actions */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={onOpenDesignSpecs}
            className="h-8 px-4 bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer border border-white/20 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0047BB]" />
            <span>DESIGN SYSTEM SUMMARY (설계 요약표)</span>
          </button>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="h-8 px-4 bg-[#0047BB] hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>SEND EMAIL</span>
          </a>
        </div>
      </div>

      {/* Bottom Fine Print */}
      <div className="max-w-[1200px] mx-auto mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-2">
        <p>© 2020–2027 Sungmin Kim. All research rights reserved. Seoul National University.</p>
        <p className="font-mono text-gray-400">
          PROFESSIONAL POLISH SYSTEM · HIGH-PRECISION RESEARCH PORTFOLIO
        </p>
      </div>
    </footer>
  );
};
