import React from 'react';
import { Mail, ArrowUp, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ModernFooterProps {
  onOpenDesignSpecs?: () => void;
}

export const ModernFooter: React.FC<ModernFooterProps> = ({ onOpenDesignSpecs }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white border-t border-zinc-200 mt-16 pt-12 pb-8 text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-100">
          
          {/* Col 1: Identity & Lab (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                SNU
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-black text-lg sm:text-xl text-zinc-900">
                  김성민
                </span>
                <span className="font-semibold text-sm text-zinc-500">
                  Sungmin Kim
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed max-w-lg">
              {PERSONAL_INFO.affiliationKo}<br />
              <span className="text-blue-600 font-semibold">{PERSONAL_INFO.dissertationTopic}</span>
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-zinc-600 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {PERSONAL_INFO.location}
              </span>
              <span>지도교수: <strong>{PERSONAL_INFO.advisor}</strong></span>
            </div>
          </div>

          {/* Col 2: Direct Contact (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold text-zinc-900 mb-2">
              CONTACT & COLLABORATION
            </div>
            <p className="text-xs text-zinc-600">
              산학 연구, 포스닥/연구원 포지션 및 학술 협업 문의:
            </p>
            <div className="space-y-1.5 pt-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <p className="text-xs text-zinc-500 font-mono">
                {PERSONAL_INFO.phone}
              </p>
            </div>
          </div>

          {/* Col 3: Quick Navigation & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-zinc-900 mb-2">
                QUICK NAVIGATION
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                <a href="#overview-section" className="hover:text-blue-600">소개</a>
                <a href="#patents-bio-section" className="hover:text-blue-600">학력·특허</a>
                <a href="#pillars-section" className="hover:text-blue-600">연구 분야</a>
                <a href="#publications-section" className="hover:text-blue-600">학술 논문 (4)</a>
                <a href="#industry-section" className="hover:text-blue-600">산학 프로젝트 (10)</a>
                <a href="#conferences-section" className="hover:text-blue-600">학술발표·수상</a>
                <a href="#interactive-lab-section" className="hover:text-blue-600">체험 랩</a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="self-start px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>맨 위로 이동</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            © 2026 김성민 (Sungmin Kim). Seoul National University LET Lab.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-zinc-400">Typography: Pretendard & Plus Jakarta Sans</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
