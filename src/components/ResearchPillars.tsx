import React from 'react';
import { Activity, Cpu, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ResearchPillarsProps {
  onSelectTopic: (topic: string) => void;
}

export const ResearchPillars: React.FC<ResearchPillarsProps> = ({ onSelectTopic }) => {
  const pillars = [
    {
      id: 'pillar-av',
      icon: Activity,
      tag: 'PILLAR 01 · AUTONOMOUS DRIVING UX',
      title: '자율주행 환경의 탑승자 경험(UX) & 멀미 저감',
      highlight: '실차 주행 계측 & Visual Motion Cues (VMC) 알고리즘',
      description: '자율주행 중 비운전과업(NDRT) 수행 시 발생하는 차량 멀미(Motion Sickness)와 인지 부하를 다중 생체신호로 정밀 측정하고, 주행 궤적과 실시간 동기화되는 시각 모션 큐(VMC) 및 최적 디스플레이 인터페이스를 설계합니다.',
      keyContributions: [
        'IEEE Transactions on Human-Machine Systems (THMS 2026, 제1저자)',
        'ACM CHI 2026 Late-Breaking Work (LBW) 실차 VMC 멀미 저감 검증',
        '현대모비스 및 현대자동차그룹 남양연구소 산학 실차 인터랙션 연구 주도',
        'fNIRS 10-ch 전두엽 뇌혈류 활성도 & Tobii Pro Glasses 3 시선 추적 분석'
      ],
      filterKey: 'AV_UX',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'pillar-xai',
      icon: Cpu,
      tag: 'PILLAR 02 · EXPLAINABLE AI (XAI)',
      title: '설명가능 AI(XAI) & 의사결정 신뢰 인터페이스',
      highlight: 'SHAP Feature Attribution · Decision Tree · Example-Based KNN',
      description: '복잡한 블랙박스 AI 모델의 판단 근거를 사용자와 도메인 전문가가 직관적으로 해석하고 신뢰할 수 있도록, 대표적인 설명 전략들의 인지적 이해도와 신뢰 형성 메커니즘을 규명하고 맞춤형 UI로 구현합니다.',
      keyContributions: [
        'International Journal of Human-Computer Interaction (IJHCI 2026, JCR Q1)',
        '과기정통부(IITP) 국책과제 XAI 인터페이스 개발 및 사용자 평가',
        'SHAP/LIME 기반 특성 기여도와 결정 트리 기반 규칙형 설명 UI 구축',
        '과기정통부 장관상 수상 (XAI 의사결정 모델링 연구 공로)'
      ],
      filterKey: 'XAI',
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      id: 'pillar-mllm',
      icon: Layers,
      tag: 'PILLAR 03 · MULTIMODAL LLM EVALUATION',
      title: 'Multimodal LLM 기반 UX 휴리스틱 평가 자동화',
      highlight: '삼성전자 CXI 팀 산학협력 · 8-Agent 협업 파이프라인',
      description: '모바일 및 가전 디스플레이의 UI 스크린샷을 분석하여 맥락을 자동 추론하고, 8개 특화 멀티에이전트가 협업하여 접근성·일관성·정보구조·오류방지 등 UX 휴리스틱 이슈를 정밀 진단하는 평가 아키텍처를 구축했습니다.',
      keyContributions: [
        '삼성전자 CXI 팀 산학협력 프로젝트 리드 & 파이프라인 설계 (2025–현재)',
        '8-Agent Multi-Agent 협업 오케스트레이션 파이프라인 구축',
        '기존 정성적 전문가 리뷰 대비 평가 시간 75% 단축 달성',
        '스크린샷 기반 휴리스틱 결함 탐지율 92% 달성 및 리포트 자동 생성'
      ],
      filterKey: 'MLLM',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200'
    }
  ];

  return (
    <section id="pillars-section" className="w-full mb-12 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE RESEARCH PILLARS</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
            3대 핵심 연구 분야 & 실증 성과
          </h2>
          <p className="text-sm text-zinc-600 mt-1 max-w-3xl">
            서울대학교 인간공학 연구실에서 주도한 자율주행, 설명가능 AI, 그리고 멀티에이전트 MLLM 평가 파이프라인의 핵심 연구 영역입니다.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="modern-card p-6 flex flex-col justify-between hover:border-blue-300 transition-all group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${p.badgeClass}`}>
                      {p.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Highlight */}
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug mb-2">
                    {p.title}
                  </h3>

                  <p className="text-xs font-bold text-blue-600 mb-3 leading-relaxed">
                    {p.highlight}
                  </p>

                  {/* Description with comfortable reading */}
                  <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                    {p.description}
                  </p>

                  {/* Key Contributions Checklist */}
                  <div className="space-y-2 pt-3 border-t border-zinc-100">
                    <div className="text-[11px] font-bold text-zinc-800 uppercase tracking-wide">
                      주요 연구 실적 & 기여:
                    </div>
                    <ul className="space-y-1.5">
                      {p.keyContributions.map((c, i) => (
                        <li key={i} className="text-xs text-zinc-700 flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Filter Trigger */}
                <div className="pt-4 mt-4 border-t border-zinc-100">
                  <button
                    onClick={() => onSelectTopic(p.filterKey)}
                    className="w-full py-2 px-3 rounded-lg bg-zinc-50 hover:bg-blue-50 text-zinc-700 hover:text-blue-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-zinc-200 hover:border-blue-200"
                  >
                    <span>관련 논문 및 프로젝트 보기</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
