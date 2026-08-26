import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Layers, Palette, Type, Move, Smartphone } from 'lucide-react';

interface DesignSystemSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignSystemSummaryModal: React.FC<DesignSystemSummaryModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'TABLE' | 'MAPPING'>('TABLE');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-white border border-[#1A1A1A] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Title Bar */}
        <div className="bg-[#1A1A1A] text-white px-5 py-3.5 flex items-center justify-between border-b border-black/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0047BB]" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest font-mono">
              PROFESSIONAL POLISH DESIGN SYSTEM SPECIFICATION (설계 요약)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white flex items-center justify-center font-bold text-xs cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-[#F4F4F2] px-5 py-2.5 border-b border-black/10 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('TABLE')}
            className={`px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'TABLE'
                ? 'bg-[#0047BB] text-white'
                : 'bg-white text-[#1A1A1A] border border-gray-300 hover:bg-gray-100'
            }`}
          >
            1. 설계 시스템 요약표 (SYSTEM SPECIFICATION)
          </button>
          <button
            onClick={() => setActiveTab('MAPPING')}
            className={`px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'MAPPING'
                ? 'bg-[#0047BB] text-white'
                : 'bg-white text-[#1A1A1A] border border-gray-300 hover:bg-gray-100'
            }`}
          >
            2. 연구 포트폴리오 매핑 요약 (RESEARCH MAPPING)
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs text-[#1A1A1A]">
          {activeTab === 'TABLE' ? (
            <div className="space-y-4">
              {/* Summary Table 1: Spacing & Grid */}
              <div className="bg-white border border-[#1A1A1A] overflow-hidden">
                <div className="bg-[#1A1A1A] text-white px-3 py-1.5 font-bold text-xs uppercase tracking-wider font-mono">
                  1. 간격 스케일 (SPACING SCALE) & 레이아웃 구조
                </div>
                <div className="p-3 space-y-1.5 text-xs text-gray-800">
                  <p><strong>Base Unit:</strong> 8px 단위 리듬 (4px / 8px / 16px / 24px / 32px / 48px)</p>
                  <p><strong>Container Padding:</strong> 카드 패딩 20~24px, 세부 요소 간 여백 12~16px로 최적화된 시각적 균형감 유지</p>
                  <p><strong>Layout Architecture:</strong> 상단 콘솔 헤더 → 수평 카본 네비게이션 → 좌측 2/3 주 연구 섹션 + 우측 1/3 인터랙티브 시뮬레이터 레일 구조</p>
                </div>
              </div>

              {/* Summary Table 2: Typography */}
              <div className="bg-white border border-[#1A1A1A] overflow-hidden">
                <div className="bg-[#1A1A1A] text-white px-3 py-1.5 font-bold text-xs uppercase tracking-wider font-mono">
                  2. 타이포그래피 스케일 (TYPOGRAPHY SCALE)
                </div>
                <div className="p-3 space-y-1.5 text-xs text-gray-800">
                  <p><strong>Display Title:</strong> 28~36px Bold (High-contrast Sans Serif with precise tracking)</p>
                  <p><strong>Section Headers:</strong> 11~13px Bold (All Caps + Tracking Wide for architectural hierarchy)</p>
                  <p><strong>Body Text:</strong> 12~14px Regular/Medium (행간 1.6, 논문 초록 및 프로젝트 설명의 최상급 가독성)</p>
                  <p><strong>Micro / Mono:</strong> 10~11px Monospace (연구 메트릭스, 일자, 통계 수치)</p>
                </div>
              </div>

              {/* Summary Table 3: Color Palette */}
              <div className="bg-white border border-[#1A1A1A] overflow-hidden">
                <div className="bg-[#1A1A1A] text-white px-3 py-1.5 font-bold text-xs uppercase tracking-wider font-mono">
                  3. 색상 팔레트 (COLOR PALETTE & CONTRAST)
                </div>
                <div className="p-3 space-y-1.5 text-xs text-gray-800">
                  <p><strong>Canvas Background:</strong> Warm White / Light Platinum (#F4F4F2)</p>
                  <p><strong>Primary Accent:</strong> International Klein Blue (#0047BB)</p>
                  <p><strong>Typography & Ink:</strong> Charcoal Black (#1A1A1A)</p>
                  <p><strong>Surfaces:</strong> Pure White (#FFFFFF) with crisp 1px solid border & 4px hard shadow</p>
                </div>
              </div>

              {/* Summary Table 4: Interaction Specs */}
              <div className="bg-white border border-[#1A1A1A] overflow-hidden">
                <div className="bg-[#1A1A1A] text-white px-3 py-1.5 font-bold text-xs uppercase tracking-wider font-mono">
                  4. 인터랙션 스펙 & 컴포넌트 동작
                </div>
                <div className="p-3 space-y-1.5 text-xs text-gray-800">
                  <p><strong>Navigation & Filter:</strong> 즉각적인 탭 전환 및 키워드 실시간 필터링</p>
                  <p><strong>Interactive Simulators:</strong> 실시간 XAI 설명 전략 비교(SHAP vs Decision Tree vs KNN) 및 VMC 멀미 저감 예측기</p>
                  <p><strong>Samsung CXI 8-Agent:</strong> 8개 특화 멀티에이전트 역할 실시간 검사 인터랙션</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-[#1A1A1A] p-4 sm:p-5 space-y-3">
              <div className="bg-[#0047BB] text-white p-2.5 font-bold text-xs font-mono uppercase tracking-wider">
                연구 포트폴리오 1:1 매핑 요약:
              </div>

              <div className="p-3 bg-[#F4F4F2] border-l-4 border-[#0047BB] font-medium text-xs leading-relaxed text-[#1A1A1A]">
                김성민 연구원의 <strong>서울대학교 산업공학과 인간공학 박사과정 연구(자율주행 생체신호 UX, XAI 의사결정 설명 모델, 8-Agent MLLM 평가 파이프라인, 산학 실증 성과)</strong>가 현대적이고 신뢰도 높은 'Professional Polish' 디자인 언어로 완벽히 구현되었습니다.
              </div>

              <div className="space-y-2 text-xs pt-2 text-gray-700">
                <p><strong>• 저널 및 학술 성과:</strong> IEEE THMS, IJHCI, ACM CHI 등 최고 권위 학술지 논문 게재 현황 및 인용 지표 매핑</p>
                <p><strong>• 산학 프로젝트:</strong> 삼성전자 CXI 8-Agent 자동화 파이프라인, 현대차 자율주행 인터랙션 등 10개 산학 프로젝트</p>
                <p><strong>• 실시간 시뮬레이터:</strong> XAI 설명 모델 체감기 및 VMC 자율주행 멀미 저감 예측 도구</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#F4F4F2] px-5 py-3 border-t border-black/10 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#1A1A1A] hover:bg-[#0047BB] text-white text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
          >
            CLOSE [X]
          </button>
        </div>
      </div>
    </div>
  );
};
