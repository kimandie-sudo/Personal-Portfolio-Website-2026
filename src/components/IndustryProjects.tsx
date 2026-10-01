import React, { useState } from 'react';
import { 
  Briefcase, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  ExternalLink,
  Cpu,
  Building2,
  Calendar
} from 'lucide-react';
import { usePortfolioData, useT } from '../i18n';

interface IndustryProjectsProps {
  filterQuery?: string;
}

export const IndustryProjects: React.FC<IndustryProjectsProps> = ({ filterQuery = '' }) => {
  const { INDUSTRY_PROJECTS } = usePortfolioData();
  const t = useT();
  const [partnerFilter, setPartnerFilter] = useState<'ALL' | 'Samsung' | 'Hyundai' | 'National'>('ALL');
  const [activeAgentDemo, setActiveAgentDemo] = useState<number>(0);

  const agentsList = [
    { 
      name: '1. Context Inference Agent', 
      role: t('UI 스크린샷 계층 및 앱 도메인 맥락 자동 파악', 'Automatically identifies UI screenshot hierarchy and app-domain context'), 
      desc: t('스크린샷 상의 헤더, 네비게이션, 본문 영역을 분할 인식하고 현재 사용자 인터랙션 맥락을 추론합니다.', 'Segments the header, navigation, and content regions of a screenshot and infers the current user-interaction context.') 
    },
    { 
      name: '2. Info Architecture Agent', 
      role: t('네비게이션 계층 및 메뉴 인지 부하 평가', 'Evaluates navigation hierarchy and menu cognitive load'), 
      desc: t('Hick-Hyman Law에 기반하여 메뉴 뎁스와 선택지 복잡도를 계산하고 길찾기 난이도를 진단합니다.', 'Computes menu depth and choice complexity based on the Hick-Hyman Law to diagnose wayfinding difficulty.') 
    },
    { 
      name: '3. Accessibility Agent', 
      role: t('WCAG 명도 대비, 터치 타겟(44px), 가독성 검증', 'Verifies WCAG contrast, touch targets (44px), and legibility'), 
      desc: t('텍스트-배경 대비비 4.5:1 준수 여부 및 최소 인터랙션 터치 영역(44x44px)을 픽셀 단위로 전수 검사합니다.', 'Exhaustively checks, at the pixel level, 4.5:1 text-to-background contrast compliance and minimum touch-target size (44x44px).') 
    },
    { 
      name: '4. Error Prevention Agent', 
      role: t('파괴적 동작 방어 및 취소 가역성 확인', 'Guards against destructive actions and checks reversibility'), 
      desc: t('삭제, 결제 등 비가역적 동작 전 확인 팝업 및 Undo/취소 인터랙션 지원 여부를 검증합니다.', 'Verifies that irreversible actions such as deletion or payment are preceded by confirmation dialogs and support undo/cancel interactions.') 
    },
    { 
      name: '5. Consistency Agent', 
      role: t('디자인 시스템 토큰 및 용어 일관성 심사', 'Audits design-system token and terminology consistency'), 
      desc: t('동일 앱 내 아이콘 의미 통일성, 버튼 스타일 일관성, 용어 통일성 위반 사례를 자동 검출합니다.', 'Automatically detects inconsistencies in icon semantics, button styles, and terminology within the same app.') 
    },
    { 
      name: '6. Feedback Loop Agent', 
      role: t('로딩/성공/경고 인터랙션 상태 피드백 진단', 'Diagnoses loading/success/warning state feedback'), 
      desc: t('시스템 상태 가시성(Nielsen Norman #1)에 의거하여 작업 진행 상황 알림 유무를 심사합니다.', 'Assesses whether task progress is communicated, based on visibility of system status (Nielsen Norman heuristic #1).') 
    },
    { 
      name: '7. Cognitive Load Agent', 
      role: t('정보 밀도 및 인지 과부하(Cognitive Load) 측정', 'Measures information density and cognitive overload'), 
      desc: t('화면 내 정보 밀집도와 시각적 노이즈를 정량화하여 사용자의 순간적 인지 부담을 산출합니다.', 'Quantifies on-screen information density and visual noise to estimate the momentary cognitive burden on users.') 
    },
    { 
      name: '8. Synthesis & Report Agent', 
      role: t('우선순위화된 UX 개선 리포트 자동 생성', 'Automatically generates a prioritized UX improvement report'), 
      desc: t('7개 전문 에이전트의 진단 결과를 심각도(Severity 1~4)별로 종합 집계하고 최적 개선안 리포트를 생성합니다.', 'Aggregates the findings of the seven specialist agents by severity (1–4) and generates a report with optimal improvement recommendations.') 
    }
  ];

  const filteredProjects = INDUSTRY_PROJECTS.filter((proj) => {
    if (partnerFilter !== 'ALL' && proj.partnerCategory !== partnerFilter) return false;
    if (filterQuery) {
      const q = filterQuery.toLowerCase();
      return (
        proj.title.toLowerCase().includes(q) ||
        proj.partner.toLowerCase().includes(q) ||
        proj.description.toLowerCase().includes(q) ||
        proj.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const countByPartner = (cat: string) => INDUSTRY_PROJECTS.filter((p) => p.partnerCategory === cat).length;

  return (
    <section id="industry-section" className="w-full mb-12 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>INDUSTRY-ACADEMIA COLLABORATIONS & NATIONAL RESEARCH GRANTS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
              {t(`산학 협력 및 국책 실증 프로젝트 (총 ${INDUSTRY_PROJECTS.length}건)`, `Industry Collaborations & National Research Projects (${INDUSTRY_PROJECTS.length} total)`)}
            </h2>
            <p className="text-sm text-zinc-600 mt-1 max-w-3xl">
              {t('삼성전자(CXI/MX/Display/DA), 현대자동차그룹(남양연구소/현대모비스), 과기정통부(IITP), 한국연구재단(NRF)과 함께 산업 현장의 핵심 문제를 해결한 산학 실증 프로젝트 목록입니다.', 'Applied research projects addressing real-world industry challenges in partnership with Samsung Electronics (CXI/MX/Display/DA), Hyundai Motor Group (Namyang R&D Center/Hyundai Mobis), MSIT (IITP), and the National Research Foundation of Korea (NRF).')}
            </p>
          </div>

          {/* Partner Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-100 p-1 rounded-xl border border-zinc-200 self-start sm:self-auto shrink-0">
            {[
              { id: 'ALL', label: t(`전체 (${INDUSTRY_PROJECTS.length})`, `All (${INDUSTRY_PROJECTS.length})`) },
              { id: 'Samsung', label: t(`삼성전자 그룹 (${countByPartner('Samsung')})`, `Samsung Electronics (${countByPartner('Samsung')})`) },
              { id: 'Hyundai', label: t(`현대자동차그룹 (${countByPartner('Hyundai')})`, `Hyundai Motor Group (${countByPartner('Hyundai')})`) },
              { id: 'National', label: t(`정부 국책과제 (${countByPartner('National')})`, `Government R&D (${countByPartner('National')})`) },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setPartnerFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  partnerFilter === tab.id
                    ? 'bg-white text-zinc-900 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Flagship Highlight Card: Samsung CXI 8-Agent MLLM Evaluation Engine */}
        <div className="modern-card-dark p-6 sm:p-8 mb-8 border border-zinc-800 relative overflow-hidden">
          
          {/* Top Label */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                FEATURED RESEARCH (2025 – PRESENT)
              </span>
              <span className="text-xs font-bold text-amber-400">
                {t('삼성전자 CXI 팀 산학협력', 'Samsung Electronics CXI Team Collaboration')}
              </span>
            </div>
            <span className="text-xs font-mono text-zinc-400 font-medium">
              Role: Project Lead / Architecture Lead
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
            {t('Multimodal LLM 기반 UX 휴리스틱 평가 자동화 & 8-Agent 아키텍처 구축', 'Automating UX Heuristic Evaluation with Multimodal LLMs & Building an 8-Agent Architecture')}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed max-w-4xl">
            {t(
              '모바일·가전 UI 스크린샷을 입력받아 맥락을 스스로 이해하고, 8개 전문 에이전트가 협업하여 접근성·일관성·정보구조 등 UX 결함을 자동 검출하는 평가 파이프라인을 구축했습니다.',
              'Built an evaluation pipeline that takes mobile and home-appliance UI screenshots as input, infers their context autonomously, and coordinates eight specialized agents to automatically detect UX issues in accessibility, consistency, information architecture, and more.'
            )}
            {t('기존 정성적 전문가 리뷰 대비 ', ' Compared with conventional qualitative expert reviews, it achieved a ')}<strong className="text-amber-400 font-bold">{t('평가 시간 75% 단축', '75% reduction in evaluation time')}</strong>{t(' 및 ', ' and a ')}<strong className="text-amber-400 font-bold">{t('휴리스틱 결함 탐지율 92%', '92% heuristic issue detection rate')}</strong>{t('를 달성했습니다.', '.')}
          </p>

          {/* Interactive 8-Agent Visualizer Engine */}
          <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-zinc-800 text-xs">
              <div className="flex items-center gap-2 font-bold text-white">
                <Bot className="w-4 h-4 text-blue-400" />
                <span>8-AGENT MULTIMODAL EVALUATION ORCHESTRATION</span>
              </div>
              <span className="text-zinc-400 text-[11px] font-mono">
                {t('에이전트를 클릭하여 세부 검증 역할을 확인하세요', 'Click an agent to see its inspection role')}
              </span>
            </div>

            {/* Agent Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {agentsList.map((ag, i) => (
                <button
                  key={i}
                  onClick={() => setActiveAgentDemo(i)}
                  className={`p-2.5 rounded-lg text-left text-xs transition-all cursor-pointer ${
                    activeAgentDemo === i
                      ? 'bg-blue-600 text-white font-bold shadow-sm'
                      : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700/60'
                  }`}
                >
                  <div className="text-[11px] font-mono text-zinc-400 mb-0.5">AGENT 0{i + 1}</div>
                  <div className="font-semibold text-xs leading-snug">{ag.name.replace(/^\d+\.\s*/, '')}</div>
                </button>
              ))}
            </div>

            {/* Selected Agent Output Terminal Box */}
            <div className="p-4 rounded-lg bg-black/70 border border-blue-500/30 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-blue-400 font-bold">● ACTIVE INSPECTION:</span>
                  <span className="text-white font-bold">{agentsList[activeAgentDemo].name}</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono font-bold">
                  STATUS: OPERATIONAL
                </span>
              </div>
              <div className="text-xs text-amber-300 font-medium">
                {agentsList[activeAgentDemo].role}
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                {agentsList[activeAgentDemo].desc}
              </p>
            </div>
          </div>

        </div>

        {/* Projects Grid (9 other projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="modern-card p-6 flex flex-col justify-between hover:border-blue-300 transition-all bg-white"
            >
              <div>
                {/* Partner Badge & Period */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-zinc-100 text-zinc-800 border border-zinc-200">
                    {proj.partner}
                  </span>
                  <span className="text-xs font-mono font-medium text-zinc-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {proj.period}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-base font-bold text-zinc-900 leading-snug mb-2">
                  {proj.title}
                </h4>

                {/* Description with readable spacing */}
                <p className="text-xs sm:text-sm text-zinc-600 mb-4 leading-relaxed">
                  {proj.description}
                </p>

                {/* Contributions Checklist */}
                <div className="rounded-xl bg-zinc-50 p-3.5 mb-4 border border-zinc-200/70">
                  <div className="text-[11px] font-bold text-zinc-700 uppercase tracking-wide mb-2">
                    {t('주요 연구 내용 및 실증 기여:', 'Key Research & Contributions:')}
                  </div>
                  <ul className="space-y-2">
                    {proj.contributions.map((c, i) => (
                      <li key={i} className="text-xs text-zinc-700 flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags footer */}
              <div className="pt-3 border-t border-zinc-100 flex flex-wrap items-center gap-1.5">
                {proj.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 text-[11px] font-medium"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
