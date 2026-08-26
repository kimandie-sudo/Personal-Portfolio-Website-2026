import React, { useState } from 'react';
import { Sparkles, Activity, Cpu, Sliders, CheckCircle2, Eye, HeartPulse, BarChart3, HelpCircle, Calendar, FileDown, Mail, Phone, ExternalLink } from 'lucide-react';
import { EQUIPMENTS, PERSONAL_INFO } from '../data/portfolioData';

interface RightRailWidgetsProps {
  onOpenSpecs: () => void;
}

export const RightRailWidgets: React.FC<RightRailWidgetsProps> = ({ onOpenSpecs }) => {
  // Simulator 1: XAI Strategy Explorer (IJHCI 2026 Paper)
  const [xaiStrategy, setXaiStrategy] = useState<'decision_tree' | 'example_based' | 'feature_attribution'>('feature_attribution');
  const [userRole, setUserRole] = useState<'patient' | 'clinician'>('patient');

  // Simulator 2: Vehicle Motion Sickness & VMC (IEEE THMS 2026 & CHI 2026)
  const [displayModality, setDisplayModality] = useState<'HUD' | 'CenterStack' | 'Tablet'>('HUD');
  const [vmcEnabled, setVmcEnabled] = useState<boolean>(true);
  const [controlModality, setControlModality] = useState<'Voice' | 'Touch' | 'Gesture'>('Voice');

  // Interactive Poll
  const [pollSelected, setPollSelected] = useState<string>('opt1');
  const [pollSubmitted, setPollSubmitted] = useState<boolean>(false);
  const [pollVotes, setPollVotes] = useState<Record<string, number>>({
    opt1: 42,
    opt2: 28,
    opt3: 65,
    opt4: 31
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

  // Compute VMS & Workload metrics based on user selections
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
    <div className="w-full space-y-4">
      {/* Contact & Terminal Card (Professional Polish Dark Slab) */}
      <div className="bg-[#1A1A1A] p-5 text-white border-l-4 border-[#0047BB] shadow-[4px_4px_0px_0px_rgba(0,71,187,0.1)]">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#0047BB] uppercase bg-white px-1.5 py-0.5">
            RESEARCH PROFILE
          </span>
          <span className="w-2 h-2 rounded-full bg-[#0047BB] animate-ping" />
        </div>

        <div className="space-y-2 text-xs mb-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 font-mono">연구자:</span>
            <span className="font-bold text-white">김성민 (Sungmin Kim)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 font-mono">소속:</span>
            <span className="font-bold text-gray-200">서울대 LET Lab (인간공학)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 font-mono">Email:</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono text-white hover:text-[#0047BB] underline">
              {PERSONAL_INFO.email}
            </a>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 font-mono">전화:</span>
            <span className="font-mono text-gray-300">{PERSONAL_INFO.phone}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="h-8 bg-[#0047BB] hover:bg-blue-800 text-white text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </a>
          <button
            onClick={onOpenSpecs}
            className="h-8 bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border border-white/20 cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0047BB]" />
            <span>DESIGN SPEC</span>
          </button>
        </div>
      </div>

      {/* INTERACTIVE DEMO 1: XAI Strategy Explorer (IJHCI 2026) */}
      <div className="bg-white border border-[#1A1A1A] p-5 shadow-[4px_4px_0px_0px_rgba(0,71,187,0.1)]">
        {/* Header Tab */}
        <div className="flex items-center justify-between border-b border-black/10 pb-2.5 mb-3">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-[#0047BB]" />
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]">
              XAI STRATEGY EXPLORER (IJHCI '26)
            </h3>
          </div>
          <span className="bg-[#1A1A1A] text-white text-[9px] font-mono font-bold px-1.5 py-0.5">
            SIMULATOR
          </span>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed mb-3">
          의료 AI 진단 인터페이스의 3가지 설명 전략별 사용자 신뢰도와 인지적 이해도를 실시간 비교 체험합니다.
        </p>

        {/* Strategy Selector Chips */}
        <div className="grid grid-cols-3 gap-1 mb-3">
          {[
            { id: 'feature_attribution', label: 'SHAP Attr.' },
            { id: 'decision_tree', label: 'Decision Tree' },
            { id: 'example_based', label: 'Example (KNN)' },
          ].map((st) => (
            <button
              key={st.id}
              onClick={() => setXaiStrategy(st.id as any)}
              className={`py-1.5 px-1 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                xaiStrategy === st.id
                  ? 'bg-[#0047BB] text-white'
                  : 'bg-gray-100 text-[#1A1A1A] hover:bg-gray-200 border border-gray-300'
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>

        {/* Dynamic Visualization Surface */}
        <div className="bg-[#F4F4F2] border border-gray-300 p-3 text-xs mb-3">
          {xaiStrategy === 'feature_attribution' && (
            <div className="space-y-2">
              <div className="flex justify-between font-bold text-[#1A1A1A] text-[11px]">
                <span>Feature Contribution (SHAP Value)</span>
                <span className="text-[#0047BB] font-mono">Risk: High (87%)</span>
              </div>
              <div className="space-y-1.5">
                <div>
                  <div className="flex justify-between text-[10px] text-gray-700">
                    <span>Age & Lumbar Curvature (+0.38)</span>
                    <span className="text-[#0047BB] font-mono font-bold">+38%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 overflow-hidden">
                    <div className="h-full bg-[#0047BB] w-[75%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-gray-700">
                    <span>fNIRS Frontal Activation (+0.25)</span>
                    <span className="text-[#0047BB] font-mono font-bold">+25%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 overflow-hidden">
                    <div className="h-full bg-[#1A1A1A] w-[50%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-gray-700">
                    <span>Daily Mobility Activity (-0.18)</span>
                    <span className="text-gray-600 font-mono font-bold">-18%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 overflow-hidden">
                    <div className="h-full bg-gray-400 w-[35%]" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {xaiStrategy === 'decision_tree' && (
            <div className="space-y-1.5">
              <div className="font-bold text-[#1A1A1A] text-[11px]">Rule Path (IF-THEN Traversal):</div>
              <div className="p-2 bg-white font-mono text-[10px] space-y-1 border border-gray-300">
                <div>1. IF (Sitting Angle &gt; 115°) → True</div>
                <div>2. AND (Lumbar Pressure Variance &gt; 4.2 kPa) → True</div>
                <div className="text-[#0047BB] font-bold">3. THEN Classify: Chronic Fatigue [Conf: 91%]</div>
              </div>
            </div>
          )}

          {xaiStrategy === 'example_based' && (
            <div className="space-y-1.5">
              <div className="font-bold text-[#1A1A1A] text-[11px]">Nearest Case Comparisons (KNN=2):</div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 bg-white border border-gray-300">
                  <div className="font-bold text-[#1A1A1A]">Patient Case #402</div>
                  <div className="text-[#0047BB] font-mono font-bold">Similarity: 94.2%</div>
                  <div className="text-gray-500">Recovery: 4 Weeks</div>
                </div>
                <div className="p-2 bg-white border border-gray-300">
                  <div className="font-bold text-[#1A1A1A]">Patient Case #118</div>
                  <div className="text-[#0047BB] font-mono font-bold">Similarity: 88.5%</div>
                  <div className="text-gray-500">Recovery: 6 Weeks</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Metrics readout */}
        <div className="grid grid-cols-2 gap-2 text-center text-xs bg-[#1A1A1A] text-white p-2.5">
          <div>
            <span className="text-[9px] text-gray-400 block uppercase font-mono">USER TRUST</span>
            <span className="font-bold font-mono text-white text-sm">
              {xaiStrategy === 'feature_attribution' ? '89.4%' : xaiStrategy === 'decision_tree' ? '82.1%' : '76.8%'}
            </span>
          </div>
          <div className="border-l border-white/20">
            <span className="text-[9px] text-gray-400 block uppercase font-mono">COGNITIVE LOAD</span>
            <span className="font-bold font-mono text-white text-sm">
              {xaiStrategy === 'feature_attribution' ? 'Low (2.4/7)' : xaiStrategy === 'decision_tree' ? 'Med (4.1/7)' : 'Low (2.8/7)'}
            </span>
          </div>
        </div>
      </div>

      {/* INTERACTIVE DEMO 2: Vehicle Motion Sickness & VMC Simulator (THMS '26 & CHI '26) */}
      <div className="bg-white border border-[#1A1A1A] p-5 shadow-[4px_4px_0px_0px_rgba(0,71,187,0.1)]">
        {/* Header Tab */}
        <div className="flex items-center justify-between border-b border-black/10 pb-2.5 mb-3">
          <div className="flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-[#0047BB]" />
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]">
              VMC & SICKNESS SIMULATOR (THMS '26)
            </h3>
          </div>
          <span className="bg-[#0047BB] text-white text-[9px] font-mono font-bold px-1.5 py-0.5">
            IEEE / CHI
          </span>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed mb-3">
          자율주행 중 비운전과업(NDRT) 디스플레이 위치 및 모션 큐(VMC) 설정에 따른 예측 멀미 저감도를 연산합니다.
        </p>

        {/* Controls */}
        <div className="space-y-2 bg-[#F4F4F2] p-3 border border-gray-300 text-xs mb-3">
          {/* Display selection */}
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#1A1A1A]">Display Location:</span>
            <div className="flex gap-1">
              {(['HUD', 'CenterStack', 'Tablet'] as const).map(m => (
                <button
                  key={m}
                  onClick={() => setDisplayModality(m)}
                  className={`px-2 py-0.5 text-[10px] font-bold uppercase transition-all cursor-pointer ${
                    displayModality === m
                      ? 'bg-[#0047BB] text-white'
                      : 'bg-white text-[#1A1A1A] border border-gray-300'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* VMC Toggle */}
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#1A1A1A]">Visual Motion Cues (VMC):</span>
            <button
              onClick={() => setVmcEnabled(!vmcEnabled)}
              className={`px-2.5 py-0.5 text-[10px] font-bold uppercase transition-all cursor-pointer ${
                vmcEnabled
                  ? 'bg-[#0047BB] text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {vmcEnabled ? 'VMC ON (CHI \'26)' : 'OFF'}
            </button>
          </div>

          {/* Control Modality */}
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#1A1A1A]">Control Modality:</span>
            <div className="flex gap-1">
              {(['Voice', 'Touch', 'Gesture'] as const).map(c => (
                <button
                  key={c}
                  onClick={() => setControlModality(c)}
                  className={`px-2 py-0.5 text-[10px] font-bold uppercase transition-all cursor-pointer ${
                    controlModality === c
                      ? 'bg-[#1A1A1A] text-white'
                      : 'bg-white text-[#1A1A1A] border border-gray-300'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Prediction Results Gauge */}
        <div className="grid grid-cols-2 gap-2 text-center text-xs bg-[#1A1A1A] text-white p-3">
          <div>
            <span className="text-[9px] text-gray-400 block font-mono uppercase">PREDICTED MSIS (멀미)</span>
            <span className="text-xl font-bold text-white font-mono">
              {computeVmsScore()} <span className="text-xs text-gray-400">/ 10</span>
            </span>
          </div>
          <div className="border-l border-white/20">
            <span className="text-[9px] text-gray-400 block font-mono uppercase">PREFERENCE SCORE</span>
            <span className="text-xl font-bold text-[#0047BB] bg-white px-2 py-0.5 inline-block font-mono mt-0.5">
              {computePrefScore()}%
            </span>
          </div>
        </div>
      </div>

      {/* PLAYER'S POLL (Researcher's Interactive Poll) */}
      <div className="bg-white border border-[#1A1A1A] p-5 shadow-[4px_4px_0px_0px_rgba(0,71,187,0.1)]">
        {/* Label bar */}
        <div className="flex items-center justify-between border-b border-black/10 pb-2.5 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-[#0047BB]" />
            RESEARCH COMMUNITY POLL
          </span>
          <span className="text-[10px] font-mono text-gray-500 font-bold">VOTES: {totalVotes}</span>
        </div>

        <form onSubmit={handleVoteSubmit} className="space-y-3 text-xs text-[#1A1A1A]">
          <p className="font-bold leading-snug">
            Q: "자율주행 및 AI 시스템에서 사용자가 가장 신뢰감을 느끼는 UX 요소는?"
          </p>

          <div className="space-y-1.5 bg-[#F4F4F2] p-2.5 border border-gray-300">
            {[
              { id: 'opt1', text: 'A. 실시간 주행 궤적 동기화 큐 (VMC)' },
              { id: 'opt2', text: 'B. 다중 생체신호 기반 적응형 피드백' },
              { id: 'opt3', text: 'C. AI 판단 근거 설명 (XAI 인터페이스)' },
              { id: 'opt4', text: 'D. 음성·제스처 멀티모달 인터랙션' },
            ].map(opt => (
              <label
                key={opt.id}
                className="flex items-center gap-2 p-1.5 hover:bg-white cursor-pointer text-xs font-medium"
              >
                <input
                  type="radio"
                  name="poll"
                  value={opt.id}
                  checked={pollSelected === opt.id}
                  onChange={() => setPollSelected(opt.id)}
                  disabled={pollSubmitted}
                  className="accent-[#0047BB] cursor-pointer"
                />
                <span className="flex-1">{opt.text}</span>
                {pollSubmitted && (
                  <span className="font-mono text-xs text-[#0047BB] font-bold">
                    {Math.round(((pollVotes[opt.id] || 0) / (totalVotes as number)) * 100)}%
                  </span>
                )}
              </label>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-gray-600 font-medium">
              {pollSubmitted ? '✓ 투표가 완료되었습니다!' : '선택 후 Submit을 누르세요.'}
            </span>
            <button
              type="submit"
              disabled={pollSubmitted}
              className={`h-8 px-4 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors ${
                pollSubmitted
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-[#1A1A1A] hover:bg-[#0047BB] text-white'
              }`}
            >
              {pollSubmitted ? 'VOTED' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </div>

      {/* RESEARCH EQUIPMENT STACK */}
      <div className="bg-white border border-[#1A1A1A] p-5 shadow-[4px_4px_0px_0px_rgba(0,71,187,0.1)]">
        <div className="flex items-center justify-between border-b border-black/10 pb-2.5 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]">
            LAB EQUIPMENT & MEASUREMENT STACK
          </span>
        </div>

        <div className="space-y-2">
          {EQUIPMENTS.map((eq, i) => (
            <div key={i} className="p-2 bg-[#F4F4F2] border border-gray-200 text-xs">
              <div className="flex items-center justify-between font-bold text-[#1A1A1A] mb-0.5">
                <span>{eq.name}</span>
                <span className="text-[#0047BB] text-[10px] font-mono bg-white px-1.5 py-0.2 border border-gray-300">
                  {eq.category}
                </span>
              </div>
              <p className="text-[11px] text-gray-600 font-mono leading-tight">{eq.spec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ph.D. MILESTONE CALENDAR */}
      <div className="bg-white border border-[#1A1A1A] p-5 shadow-[4px_4px_0px_0px_rgba(0,71,187,0.1)]">
        <div className="flex items-center justify-between border-b border-black/10 pb-2.5 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]">
            PH.D. TIMELINE CALENDAR
          </span>
          <span className="text-xs font-mono text-gray-500">2026 – 2027</span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-start gap-2 p-2 bg-[#F4F4F2] border border-gray-200">
            <span className="bg-[#1A1A1A] text-white text-[9px] font-mono font-bold px-1.5 py-0.5 shrink-0">
              2026.01
            </span>
            <span><strong>IEEE THMS Journal</strong> NDRT Interface Published</span>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[#F4F4F2] border border-gray-200">
            <span className="bg-[#0047BB] text-white text-[9px] font-mono font-bold px-1.5 py-0.5 shrink-0">
              2026.03
            </span>
            <span><strong>IJHCI Journal</strong> Patient Diagnostic XAI Published</span>
          </div>
          <div className="flex items-start gap-2 p-2 bg-blue-50 border border-blue-200 text-blue-900">
            <span className="bg-[#0047BB] text-white text-[9px] font-mono font-bold px-1.5 py-0.5 shrink-0">
              2026.04
            </span>
            <span><strong>ACM CHI 2026</strong> Visual Motion Cues Presentation</span>
          </div>
          <div className="flex items-start gap-2 p-2 bg-[#1A1A1A] text-white">
            <span className="bg-white text-[#1A1A1A] text-[9px] font-mono font-bold px-1.5 py-0.5 shrink-0">
              2027.02
            </span>
            <span><strong>서울대학교 박사학위 취득 (Ph.D. Defense)</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
