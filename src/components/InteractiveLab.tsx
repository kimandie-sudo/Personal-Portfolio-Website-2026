import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Activity, 
  Eye, 
  HelpCircle, 
  CheckCircle2, 
  BarChart3, 
  Layers, 
  Sliders, 
  ArrowRight,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { EQUIPMENTS } from '../data/portfolioData';

export const InteractiveLab: React.FC = () => {
  // Simulator 1: XAI Strategy Explorer (IJHCI 2026 Paper)
  const [xaiStrategy, setXaiStrategy] = useState<'feature_attribution' | 'decision_tree' | 'example_based'>('feature_attribution');
  
  // Simulator 2: Vehicle Motion Sickness & VMC (IEEE THMS 2026 & CHI 2026)
  const [displayModality, setDisplayModality] = useState<'HUD' | 'CenterStack' | 'Tablet'>('HUD');
  const [vmcEnabled, setVmcEnabled] = useState<boolean>(true);
  const [controlModality, setControlModality] = useState<'Voice' | 'Touch' | 'Gesture'>('Voice');

  // Interactive Poll
  const [pollSelected, setPollSelected] = useState<string>('opt1');
  const [pollSubmitted, setPollSubmitted] = useState<boolean>(false);
  const [pollVotes, setPollVotes] = useState<Record<string, number>>({
    opt1: 54,
    opt2: 32,
    opt3: 78,
    opt4: 41
  });

  const handleVoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pollSubmitted) {
      setPollVotes(prev => ({
        ...prev,
        [pollSelected]: prev[pollSelected] + 1
      }));
      setPollSubmitted(true);
    }
  };

  const totalVotes = Object.values(pollVotes).reduce((a: number, b: number) => a + b, 0) || 1;

  // Compute VMS & Workload metrics
  const computeVmsScore = () => {
    let base = 6.2;
    if (displayModality === 'HUD') base -= 2.4;
    if (displayModality === 'CenterStack') base += 0.8;
    if (displayModality === 'Tablet') base += 2.1;
    if (vmcEnabled) base -= 2.0;
    if (controlModality === 'Voice') base -= 1.0;
    if (controlModality === 'Touch') base += 0.5;
    return Math.max(1.2, Math.min(9.8, base)).toFixed(1);
  };

  const computePrefScore = () => {
    let pref = 60;
    if (displayModality === 'HUD') pref += 25;
    if (vmcEnabled) pref += 20;
    if (controlModality === 'Voice') pref += 15;
    return Math.min(98, pref);
  };

  return (
    <section id="interactive-lab-section" className="w-full mb-12 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE RESEARCH LAB & SIMULATORS</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
            인터랙티브 연구 시뮬레이터 & 측정 장비
          </h2>
          <p className="text-sm text-zinc-600 mt-1 max-w-3xl">
            게재된 학술 논문(IJHCI 2026, IEEE THMS 2026, ACM CHI 2026)의 핵심 알고리즘과 인터페이스 원리를 웹 상에서 실시간으로 직접 조작하고 체험해 볼 수 있는 인터랙티브 랩입니다.
          </p>
        </div>

        {/* 2 Simulators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* SIMULATOR 1: XAI Strategy Explorer (IJHCI 2026) */}
          <div className="modern-card p-6 flex flex-col justify-between bg-white border border-zinc-200">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900">
                      XAI 설명 전략 시뮬레이터 (IJHCI '26)
                    </h3>
                    <span className="text-[11px] text-zinc-500 font-mono">
                      Explainable AI Strategy Comparison
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold font-mono">
                  IJHCI Q1
                </span>
              </div>

              <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
                환자·사용자 대면 진단 AI 시스템에서 3가지 설명 전략(SHAP 특성 기여도, 결정 트리, 유사 사례 KNN)에 따른 사용자 신뢰 형성과 인지 부하를 실시간 비교합니다.
              </p>

              {/* Strategy Selector Chips */}
              <div className="grid grid-cols-3 gap-1.5 mb-4">
                {[
                  { id: 'feature_attribution', label: '1. SHAP 특성 기여도' },
                  { id: 'decision_tree', label: '2. 결정 트리 (Tree)' },
                  { id: 'example_based', label: '3. 유사 사례 (KNN)' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setXaiStrategy(st.id as any)}
                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                      xaiStrategy === st.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* Interactive Output Visualization Surface */}
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs mb-4 min-h-[140px] flex flex-col justify-center">
                {xaiStrategy === 'feature_attribution' && (
                  <div className="space-y-2.5">
                    <div className="flex justify-between font-bold text-zinc-900 text-xs">
                      <span>Feature Contribution (SHAP Value 분석)</span>
                      <span className="text-blue-600 font-mono">위험도: 높음 (87%)</span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-[11px] text-zinc-700 mb-0.5">
                          <span>연령 및 척추 요추 만곡도 (+0.38)</span>
                          <span className="text-blue-600 font-mono font-bold">+38% 기여</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full w-[76%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] text-zinc-700 mb-0.5">
                          <span>fNIRS 전두엽 인지 활성도 (+0.25)</span>
                          <span className="text-blue-600 font-mono font-bold">+25% 기여</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-600 rounded-full w-[50%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] text-zinc-700 mb-0.5">
                          <span>일일 신체 활동량 (-0.18)</span>
                          <span className="text-emerald-600 font-mono font-bold">-18% 완화</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full w-[36%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {xaiStrategy === 'decision_tree' && (
                  <div className="space-y-2">
                    <div className="font-bold text-zinc-900 text-xs">
                      IF-THEN 규칙 탐색 경로 (Rule Traversal):
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-zinc-200 font-mono text-[11px] space-y-1 text-zinc-800">
                      <div>1. IF (착석 각도 &gt; 115°) → <strong className="text-emerald-600">TRUE</strong></div>
                      <div>2. AND (요추 압력 분산도 &gt; 4.2 kPa) → <strong className="text-emerald-600">TRUE</strong></div>
                      <div className="text-blue-600 font-bold pt-1 border-t border-zinc-100">
                        3. THEN 최종 분류: 만성 피로군 [신뢰도: 91.4%]
                      </div>
                    </div>
                  </div>
                )}

                {xaiStrategy === 'example_based' && (
                  <div className="space-y-2">
                    <div className="font-bold text-zinc-900 text-xs">
                      최근접 유사 임상 케이스 매칭 (KNN = 2):
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2.5 bg-white rounded-lg border border-zinc-200">
                        <div className="font-bold text-zinc-900">환자 케이스 #402</div>
                        <div className="text-blue-600 font-mono font-bold">유사도: 94.2%</div>
                        <div className="text-zinc-500 text-[10px]">회복 소요 기간: 4주</div>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-zinc-200">
                        <div className="font-bold text-zinc-900">환자 케이스 #118</div>
                        <div className="text-blue-600 font-mono font-bold">유사도: 88.5%</div>
                        <div className="text-zinc-500 text-[10px]">회복 소요 기간: 6주</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Readout Metrics */}
            <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-zinc-900 text-white text-center">
              <div>
                <span className="text-[10px] text-zinc-400 font-mono block uppercase">사용자 신뢰도 (Trust)</span>
                <span className="text-lg font-bold font-mono text-white">
                  {xaiStrategy === 'feature_attribution' ? '89.4%' : xaiStrategy === 'decision_tree' ? '82.1%' : '76.8%'}
                </span>
              </div>
              <div className="border-l border-zinc-700">
                <span className="text-[10px] text-zinc-400 font-mono block uppercase">인지 부하 (Cognitive Load)</span>
                <span className="text-lg font-bold font-mono text-emerald-400">
                  {xaiStrategy === 'feature_attribution' ? '낮음 (2.4/7)' : xaiStrategy === 'decision_tree' ? '중간 (4.1/7)' : '낮음 (2.8/7)'}
                </span>
              </div>
            </div>
          </div>

          {/* SIMULATOR 2: Autonomous Driving VMC & Motion Sickness (IEEE THMS & ACM CHI '26) */}
          <div className="modern-card p-6 flex flex-col justify-between bg-white border border-zinc-200">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900">
                      자율주행 VMC 멀미 저감 예측기 (THMS '26)
                    </h3>
                    <span className="text-[11px] text-zinc-500 font-mono">
                      In-Vehicle VMC & Sickness Predictor
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono">
                  IEEE / CHI '26
                </span>
              </div>

              <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
                자율주행 중 비운전과업(NDRT) 수행 시 디스플레이 위치(HUD, 센터스택, 태블릿)와 시각 모션 큐(VMC ON/OFF) 설정에 따른 예측 멀미 저감도와 사용자 선호도를 계산합니다.
              </p>

              {/* Controls */}
              <div className="space-y-3 p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs mb-4">
                
                {/* Display Location */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-zinc-800">디스플레이 위치:</span>
                  <div className="flex gap-1">
                    {(['HUD', 'CenterStack', 'Tablet'] as const).map((m) => (
                      <button
                        key={m}
                        onClick={() => setDisplayModality(m)}
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                          displayModality === m
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* VMC Toggle */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-zinc-800">시각 모션 큐 (VMC):</span>
                  <button
                    onClick={() => setVmcEnabled(!vmcEnabled)}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      vmcEnabled
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300'
                    }`}
                  >
                    {vmcEnabled ? '✓ VMC 적용 (CHI \'26)' : 'OFF (미적용)'}
                  </button>
                </div>

                {/* Control Modality */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-zinc-800">조작 모달리티:</span>
                  <div className="flex gap-1">
                    {(['Voice', 'Touch', 'Gesture'] as const).map((c) => (
                      <button
                        key={c}
                        onClick={() => setControlModality(c)}
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                          controlModality === c
                            ? 'bg-zinc-900 text-white'
                            : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
                        }`}
                      >
                        {c === 'Voice' ? '음성' : c === 'Touch' ? '터치' : '제스처'}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Readout Metrics */}
            <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-zinc-900 text-white text-center">
              <div>
                <span className="text-[10px] text-zinc-400 font-mono block uppercase">예측 멀미 지수 (MSIS)</span>
                <span className="text-xl font-bold font-mono text-amber-400">
                  {computeVmsScore()} <span className="text-xs text-zinc-400 font-normal">/ 10</span>
                </span>
              </div>
              <div className="border-l border-zinc-700">
                <span className="text-[10px] text-zinc-400 font-mono block uppercase">사용자 선호도 점수</span>
                <span className="text-xl font-bold font-mono text-emerald-400">
                  {computePrefScore()}%
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row: Equipment Stack & Live Research Poll */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Equipment Stack */}
          <div className="modern-card p-6 bg-white border border-zinc-200">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-100">
              <Eye className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide">
                실험실 정밀 측정 장비 스택 (Lab Equipment)
              </h3>
            </div>

            <div className="space-y-2.5">
              {EQUIPMENTS.map((eq, i) => (
                <div key={i} className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div className="flex items-center justify-between text-xs font-bold text-zinc-900 mb-0.5">
                    <span>{eq.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-200/60">
                      {eq.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans">{eq.spec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Live Research Community Poll */}
          <div className="modern-card p-6 bg-white border border-zinc-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide">
                    연구 커뮤니티 실시간 서베이
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-500 font-semibold">
                  참여 {totalVotes}명
                </span>
              </div>

              <form onSubmit={handleVoteSubmit} className="space-y-3 text-xs text-zinc-800">
                <p className="font-bold leading-relaxed text-zinc-900">
                  Q: "자율주행 및 지능형 AI 시스템에서 사용자가 가장 신뢰감을 느끼는 UX 요소는 무엇인가요?"
                </p>

                <div className="space-y-1.5 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                  {[
                    { id: 'opt1', text: 'A. 실시간 주행 궤적 동기화 모션 큐 (VMC)' },
                    { id: 'opt2', text: 'B. 다중 생체신호 기반 적응형 피드백' },
                    { id: 'opt3', text: 'C. AI 판단 근거 설명 (XAI 인터페이스)' },
                    { id: 'opt4', text: 'D. 음성·제스처 멀티모달 상호작용' },
                  ].map((opt) => (
                    <label
                      key={opt.id}
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="poll"
                        value={opt.id}
                        checked={pollSelected === opt.id}
                        onChange={() => setPollSelected(opt.id)}
                        disabled={pollSubmitted}
                        className="accent-blue-600 cursor-pointer"
                      />
                      <span className="flex-1 font-medium text-xs">{opt.text}</span>
                      {pollSubmitted && (
                        <span className="font-mono text-xs text-blue-600 font-bold">
                          {Math.round(((pollVotes[opt.id] || 0) / (totalVotes as number)) * 100)}%
                        </span>
                      )}
                    </label>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-zinc-500 font-medium">
                    {pollSubmitted ? '✓ 투표에 참여해 주셔서 감사합니다!' : '항목을 선택 후 투표해 주세요.'}
                  </span>
                  <button
                    type="submit"
                    disabled={pollSubmitted}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      pollSubmitted
                        ? 'bg-zinc-200 text-zinc-500 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
                    }`}
                  >
                    {pollSubmitted ? '투표 완료' : '투표하기'}
                  </button>
                </div>
              </form>
            </div>

            {/* Ph.D. Milestone Highlight */}
            <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-600">
              <span className="flex items-center gap-1.5 font-semibold text-zinc-800">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                2027.02 서울대학교 산업공학 박사 졸업 예정
              </span>
              <span className="text-blue-600 font-bold font-mono">D-Defense 2026-2027</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
