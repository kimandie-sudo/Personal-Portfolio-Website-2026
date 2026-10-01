import React from 'react';
import { Activity, Cpu, Layers, Sparkles } from 'lucide-react';
import { useT } from '../i18n';

export const ResearchPillars: React.FC = () => {
  const t = useT();
  const pillars = [
    {
      id: 'pillar-av',
      icon: Activity,
      tag: 'PILLAR 01 · AUTONOMOUS DRIVING UX',
      title: t('자율주행 환경의 탑승자 경험(UX) & 멀미 저감', 'Passenger Experience (UX) & Motion Sickness Mitigation in Autonomous Vehicles'),
      highlight: t('실차 주행 계측 & Visual Motion Cues (VMC) 알고리즘', 'On-Road Vehicle Measurement & Visual Motion Cue (VMC) Algorithms'),
      description: t('자율주행 중 비운전과업(NDRT) 수행 시 발생하는 차량 멀미(Motion Sickness)와 인지 부하를 다중 생체신호로 정밀 측정하고, 주행 궤적과 실시간 동기화되는 시각 모션 큐(VMC) 및 최적 디스플레이 인터페이스를 설계합니다.', 'Precisely measures motion sickness and cognitive load during non-driving-related tasks (NDRTs) in automated vehicles using multimodal physiological signals, and designs visual motion cues (VMC) synchronized in real time with the vehicle trajectory, along with optimized in-vehicle display interfaces.'),
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'pillar-xai',
      icon: Cpu,
      tag: 'PILLAR 02 · EXPLAINABLE AI (XAI)',
      title: t('설명가능 AI(XAI) & 의사결정 신뢰 인터페이스', 'Explainable AI (XAI) & Trustworthy Decision-Support Interfaces'),
      highlight: 'SHAP Feature Attribution · Decision Tree · Example-Based KNN',
      description: t('복잡한 블랙박스 AI 모델의 판단 근거를 사용자와 도메인 전문가가 직관적으로 해석하고 신뢰할 수 있도록, 대표적인 설명 전략들의 인지적 이해도와 신뢰 형성 메커니즘을 규명하고 맞춤형 UI로 구현합니다.', 'Investigates how representative explanation strategies shape comprehension and trust formation, so that end users and domain experts can intuitively interpret and appropriately trust the reasoning of complex black-box AI models, and translates these findings into tailored interfaces.'),
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      id: 'pillar-mllm',
      icon: Layers,
      tag: 'PILLAR 03 · MULTIMODAL LLM EVALUATION',
      title: t('Multimodal LLM 기반 UX 휴리스틱 평가 자동화', 'Automated UX Heuristic Evaluation with Multimodal LLMs'),
      highlight: t('삼성전자 CXI 팀 산학협력 · 8-Agent 협업 파이프라인', 'Samsung Electronics CXI Team Collaboration · 8-Agent Collaborative Pipeline'),
      description: t('모바일 및 가전 디스플레이의 UI 스크린샷을 분석하여 맥락을 자동 추론하고, 8개 특화 멀티에이전트가 협업하여 접근성·일관성·정보구조·오류방지 등 UX 휴리스틱 이슈를 정밀 진단하는 평가 아키텍처를 구축했습니다.', 'Built an evaluation architecture that analyzes UI screenshots from mobile and home-appliance displays to automatically infer usage context, with eight specialized agents collaborating to diagnose UX heuristic issues such as accessibility, consistency, information architecture, and error prevention.'),
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
            {t('3대 핵심 연구 분야', 'Three Core Research Areas')}
          </h2>
          <p className="text-sm text-zinc-600 mt-1 max-w-3xl">
            {t('서울대학교 인간공학 연구실에서 주도한 자율주행, 설명가능 AI, 그리고 멀티에이전트 MLLM 평가 파이프라인의 핵심 연구 영역입니다.', 'Core research areas led at the Life Enhancement Technology (LET) Lab, Seoul National University: autonomous driving UX, explainable AI, and multi-agent MLLM evaluation pipelines.')}
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="modern-card p-6 flex flex-col hover:border-blue-300 transition-all group"
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
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
