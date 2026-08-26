import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Briefcase, 
  Award, 
  ChevronRight, 
  Mail, 
  ShieldCheck 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ModernHeroProps {
  onExplorePublications: () => void;
  onExploreIndustry: () => void;
  onExploreLab: () => void;
  onExploreConferences: () => void;
  onExplorePatents: () => void;
  onQuickFilter: (category: string) => void;
  selectedFilter: string;
}

export const ModernHero: React.FC<ModernHeroProps> = ({
  onExplorePublications,
  onExploreIndustry,
  onExploreLab,
  onExploreConferences,
  onExplorePatents,
  onQuickFilter,
  selectedFilter
}) => {
  return (
    <section id="overview-section" className="w-full pt-4 pb-8 sm:pt-6 sm:pb-12 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Main Hero Card */}
        <div className="p-6 sm:p-10 rounded-2xl bg-white border border-zinc-200/90 shadow-sm relative overflow-hidden">
          
          {/* Subtle decorative background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            {/* Top Identity & Lab Info Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-zinc-100">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200">
                  서울대학교 산업공학과 인간공학 연구실 (LET Lab)
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">
                  박사과정 연구원
                </span>
              </div>

              <div className="text-xs sm:text-sm text-zinc-600 font-medium flex items-center gap-2">
                <span>지도교수: <strong>{PERSONAL_INFO.advisor}</strong></span>
                <span className="text-zinc-300">|</span>
                <span className="text-zinc-700">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Main Headline with Prominent Name "김성민" */}
            <div className="max-w-4xl space-y-5">
              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-normal">
                    김성민
                  </h1>
                  <span className="text-xl sm:text-2xl font-bold text-zinc-500">
                    Sungmin Kim
                  </span>
                  <span className="text-xs sm:text-sm font-semibold px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200">
                    Human Factors & Human-AI Interaction Researcher
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-zinc-900 leading-tight">
                  인간의 생체신호 정밀 계측부터 <br className="hidden sm:inline" />
                  <span className="text-blue-600">설명가능 AI(XAI) 인터페이스</span>까지
                </h2>

                <p className="text-base sm:text-lg text-zinc-700 font-medium leading-relaxed max-w-3xl">
                  자율주행 환경의 탑승자 경험(UX)과 멀티에이전트 AI 평가 자동화를 연구하는 서울대학교 인간공학 박사과정 연구원입니다.
                </p>
              </div>

              {/* Research Philosophy Quote with comfortable line breaks */}
              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2 text-sm text-zinc-800 leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-2xl select-none leading-none">“</span>
                  <div className="space-y-2">
                    <p>
                      <strong>인간은 복잡하며 섬세합니다.</strong> 그래서 정밀한 다중 생체신호(fNIRS 뇌기능, 시선 추적, 심박변이도 HRV) 계측이 필요합니다.
                    </p>
                    <p>
                      <strong>AI의 판단은 불투명합니다.</strong> 그래서 사용자가 신뢰할 수 있는 설명 인터페이스(XAI)와 인지부하 최적화가 필요합니다.
                    </p>
                    <p className="text-zinc-900 font-bold pt-1">
                      이 두 영역의 융합을 통해, 인간과 AI가 서로를 이해하고 안전하게 협력할 수 있는 차세대 상호작용 시스템을 설계하고 검증합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 
              Key Accomplishments & Jump Boxes
            */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  주요 연구 및 산학 실적 (클릭 시 해당 상세 섹션으로 바로 이동합니다)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* 1. 학술 논문 Box */}
                <button
                  onClick={onExplorePublications}
                  className="group text-left p-5 rounded-2xl bg-white hover:bg-blue-50/40 border-2 border-zinc-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-blue-600 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                        <span>내용 보기</span>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl font-black text-zinc-900 group-hover:text-blue-600 transition-colors">
                      학술 논문
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-zinc-100">
                    <div className="text-sm font-bold text-blue-700">
                      총 4편 저널 및 학술지
                    </div>
                    <p className="text-xs text-zinc-600 mt-1 leading-snug">
                      IEEE THMS 1저자 · IJHCI Q1 · CHI LBW
                    </p>
                  </div>
                </button>

                {/* 2. 산학협력 프로젝트 Box */}
                <button
                  onClick={onExploreIndustry}
                  className="group text-left p-5 rounded-2xl bg-white hover:bg-blue-50/40 border-2 border-zinc-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                        <span>내용 보기</span>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl font-black text-zinc-900 group-hover:text-blue-600 transition-colors">
                      산학 프로젝트
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-zinc-100">
                    <div className="text-sm font-bold text-emerald-700">
                      총 10건 산학 및 국책 과제
                    </div>
                    <p className="text-xs text-zinc-600 mt-1 leading-snug">
                      삼성전자 · 현대자동차그룹 · NRF
                    </p>
                  </div>
                </button>

                {/* 3. 학술대회 발표 Box */}
                <button
                  onClick={onExploreConferences}
                  className="group text-left p-5 rounded-2xl bg-white hover:bg-blue-50/40 border-2 border-zinc-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-purple-600 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                        <span>내용 보기</span>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl font-black text-zinc-900 group-hover:text-blue-600 transition-colors">
                      학술대회 발표
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-zinc-100">
                    <div className="text-sm font-bold text-purple-700">
                      총 12회 구두 발표
                    </div>
                    <p className="text-xs text-zinc-600 mt-1 leading-snug">
                      국제 7회 (IEA, HFES, CHI) · 국내 5회
                    </p>
                  </div>
                </button>

                {/* 4. 특허 & 수상 Box */}
                <button
                  onClick={onExplorePatents}
                  className="group text-left p-5 rounded-2xl bg-white hover:bg-blue-50/40 border-2 border-zinc-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-amber-600 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                        <span>내용 보기</span>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl font-black text-zinc-900 group-hover:text-blue-600 transition-colors">
                      특허 & 수상
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-zinc-100">
                    <div className="text-sm font-bold text-amber-700">
                      장관상 및 특허 2건
                    </div>
                    <p className="text-xs text-zinc-600 mt-1 leading-snug">
                      과기정통부 장관상 · 특허 출원 2건
                    </p>
                  </div>
                </button>

              </div>
            </div>

            {/* Quick Action Navigation Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-200">
              
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onExplorePublications}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-xs flex items-center gap-2 transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>학술 논문 목록 (4편)</span>
                </button>

                <button
                  onClick={onExploreIndustry}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>산학협력 프로젝트 (10건)</span>
                </button>

                <button
                  onClick={onExploreLab}
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-blue-700 border-2 border-blue-200 text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>인터랙티브 연구 랩 체험</span>
                </button>
              </div>

              {/* Direct Quick Contact */}
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-700">
                <span className="text-xs text-zinc-500">문의 이메일:</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1.5 font-bold"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Quick Topic Filter Pill Strip */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-zinc-500 mr-1">
            분야별 모아보기:
          </span>
          {[
            { id: 'ALL', label: '전체 보기' },
            { id: 'AV_UX', label: '자율주행 UX 및 멀미저감' },
            { id: 'XAI', label: '설명가능 AI (XAI) 신뢰 인터페이스' },
            { id: 'MLLM', label: '삼성 CXI 8-Agent MLLM 평가' },
            { id: 'BIOMETRIC', label: '생체신호 계측 (fNIRS·아이트래킹)' }
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => onQuickFilter(pill.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === pill.id
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
