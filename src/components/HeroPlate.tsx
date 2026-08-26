import React from 'react';
import { ArrowRight, ChevronRight, Activity, Cpu, Sparkles, Award, FileCode, CheckCircle2, GraduationCap, BookOpen, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroPlateProps {
  onExplorePublications: () => void;
  onExploreIndustry: () => void;
  onOpenXaiDemo: () => void;
}

export const HeroPlate: React.FC<HeroPlateProps> = ({
  onExplorePublications,
  onExploreIndustry,
  onOpenXaiDemo
}) => {
  return (
    <section className="w-full space-y-4">
      {/* Top Hero Statement Card */}
      <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(0,71,187,0.1)] relative">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB]">
              Academic & Industry Research Statement
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-xs font-semibold text-gray-700 flex items-center gap-1 font-mono">
              <GraduationCap className="w-3.5 h-3.5 text-[#0047BB]" />
              {PERSONAL_INFO.titleKo}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-gray-600">
            <span>지도교수: <strong className="text-[#1A1A1A]">{PERSONAL_INFO.advisor}</strong></span>
            <span className="text-gray-300">•</span>
            <span className="text-[#0047BB] font-bold">졸업예정: 2027.02</span>
          </div>
        </div>

        {/* Display Typography */}
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter uppercase text-[#1A1A1A] leading-tight">
            Human-AI Interaction & Autonomous Driving UX
          </h2>
          <p className="text-sm font-medium text-gray-600 mt-1">
            인간공학 다중 생체신호 계측 (fNIRS / Eye-Tracking) × 설명가능 AI (XAI) × Multi-Agent MLLM 휴리스틱스
          </p>
        </div>

        {/* Editorial Research Statement (Italic Serif from Professional Polish Spec) */}
        <div className="bg-[#F4F4F2] border-l-4 border-[#0047BB] p-4 sm:p-5 my-4">
          <p className="text-sm sm:text-base leading-relaxed font-serif italic text-[#1A1A1A] mb-2">
            "{PERSONAL_INFO.coreStatement1} {PERSONAL_INFO.coreStatement2}"
          </p>
          <p className="text-xs font-sans text-gray-600 leading-relaxed font-medium">
            {PERSONAL_INFO.synthesis}
          </p>
        </div>

        {/* Dual Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          {/* Pillar 1 */}
          <div className="bg-white border border-[#1A1A1A] p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono font-bold text-gray-500 mb-1">
                <span className="text-[#0047BB] uppercase">PILLAR 01 // AUTONOMOUS UX</span>
                <span className="bg-gray-100 px-1.5 py-0.5 text-[#1A1A1A]">IEEE THMS '26 / CHI '26</span>
              </div>
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-1.5 flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-[#0047BB]" />
                {PERSONAL_INFO.dualFocus[0].title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {PERSONAL_INFO.dualFocus[0].desc}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
              <span className="font-mono text-gray-500 text-[10px]">Tobii 3 · fNIRS · HRV · LMER</span>
              <button
                onClick={onExplorePublications}
                className="text-[#0047BB] hover:underline font-bold text-xs flex items-center gap-0.5 cursor-pointer"
              >
                VIEW PAPERS <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-[#1A1A1A] p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono font-bold text-gray-500 mb-1">
                <span className="text-[#0047BB] uppercase">PILLAR 02 // XAI & MULTI-AGENT</span>
                <span className="bg-gray-100 px-1.5 py-0.5 text-[#1A1A1A]">IJHCI '26 (Q1) / Samsung CXI</span>
              </div>
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-1.5 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#1A1A1A]" />
                {PERSONAL_INFO.dualFocus[1].title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {PERSONAL_INFO.dualFocus[1].desc}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
              <span className="font-mono text-gray-500 text-[10px]">8-Agent MLLM · XAI Decision Trees</span>
              <button
                onClick={onOpenXaiDemo}
                className="text-[#0047BB] hover:underline font-bold text-xs flex items-center gap-0.5 cursor-pointer"
              >
                TEST SIMULATOR <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Quantitative Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 bg-[#1A1A1A] text-white p-3 sm:p-4">
          <div className="text-center p-1.5">
            <span className="text-2xl font-bold font-mono text-white block">4+</span>
            <span className="text-[10px] uppercase font-medium tracking-wider text-gray-400">Top Journal & CHI</span>
          </div>
          <div className="text-center p-1.5 border-l border-white/15">
            <span className="text-2xl font-bold font-mono text-[#0047BB] bg-white px-1.5 py-0.5 inline-block">10</span>
            <span className="text-[10px] uppercase font-medium tracking-wider text-gray-400 block mt-0.5">Industry Projects</span>
          </div>
          <div className="text-center p-1.5 border-l border-white/15">
            <span className="text-2xl font-bold font-mono text-white block">12</span>
            <span className="text-[10px] uppercase font-medium tracking-wider text-gray-400">Conf Talks (7 Intl)</span>
          </div>
          <div className="text-center p-1.5 border-l border-white/15">
            <span className="text-2xl font-bold font-mono text-white block">2</span>
            <span className="text-[10px] uppercase font-medium tracking-wider text-gray-400">Patents Registered</span>
          </div>
          <div className="col-span-2 sm:col-span-1 text-center p-1.5 border-l border-white/15 bg-white/5">
            <span className="text-2xl font-bold font-mono text-[#0047BB] block">1st</span>
            <span className="text-[10px] uppercase font-medium tracking-wider text-gray-300">MSIT Minister Prize</span>
          </div>
        </div>

        {/* Footer info line with call to action */}
        <div className="mt-4 pt-3 border-t border-black/10 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-semibold text-[#1A1A1A] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0047BB]" />
            <span>학위논문: <strong className="text-[#0047BB]">{PERSONAL_INFO.dissertationTopic}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenXaiDemo}
              className="px-4 py-2 bg-[#0047BB] hover:bg-blue-800 active:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-sm transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>LAUNCH INTERACTIVE SIMULATORS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

