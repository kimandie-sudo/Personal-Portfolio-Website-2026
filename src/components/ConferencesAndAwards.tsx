import React, { useState } from 'react';
import { Award, Globe, Trophy, Star, ChevronRight, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { CONFERENCES, AWARDS } from '../data/portfolioData';

export const ConferencesAndAwards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'CONF' | 'AWARDS'>('CONF');
  const [intlOnly, setIntlOnly] = useState(false);

  const displayedConferences = intlOnly
    ? CONFERENCES.filter((c) => c.isInternational)
    : CONFERENCES;

  return (
    <section id="conferences-section" className="w-full mb-12 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              <Trophy className="w-3.5 h-3.5" />
              <span>CONFERENCE TALKS, PRESENTATIONS & HONORS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
              학술대회 구두발표 (12회) & 수상 내역
            </h2>
            <p className="text-sm text-zinc-600 mt-1 max-w-3xl">
              국제 인간공학 및 HCI 학술대회(IEA, AHFE, CHI LBW)와 국내 춘/추계 학술대회 발표, 그리고 과학기술정보통신부 장관상 수상 실적입니다.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1.5 bg-zinc-100 p-1 rounded-xl border border-zinc-200 self-start sm:self-auto shrink-0">
            <button
              onClick={() => setActiveTab('CONF')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'CONF'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              학술대회 발표 ({CONFERENCES.length})
            </button>
            <button
              onClick={() => setActiveTab('AWARDS')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'AWARDS'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              수상 및 표창 ({AWARDS.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Conferences */}
        {activeTab === 'CONF' && (
          <div className="space-y-4">
            
            {/* Filter banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs">
              <div className="font-semibold text-zinc-700">
                총 {CONFERENCES.length}회 구두 발표 (국제 학술대회 7회, 국내 학술대회 5회)
              </div>
              <button
                onClick={() => setIntlOnly(!intlOnly)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  intlOnly
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
                }`}
              >
                {intlOnly ? '✓ 국제 학술대회만 보기 (7)' : '전체 보기 (12)'}
              </button>
            </div>

            {/* Conference list */}
            <div className="space-y-3">
              {displayedConferences.map((conf, idx) => (
                <div
                  key={conf.id}
                  className="modern-card p-5 bg-white border border-zinc-200 hover:border-blue-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5 flex-1">
                    <div className="w-7 h-7 rounded-lg bg-zinc-100 text-zinc-700 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {conf.isInternational ? (
                          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-200 flex items-center gap-1">
                            <Globe className="w-3 h-3" /> INTERNATIONAL
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 text-[11px] font-semibold border border-zinc-200">
                            DOMESTIC
                          </span>
                        )}

                        <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[11px] font-medium">
                          {conf.role}
                        </span>

                        {conf.award && (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[11px] font-bold border border-amber-200 flex items-center gap-1">
                            ★ {conf.award}
                          </span>
                        )}

                        <span className="text-xs font-mono font-semibold text-zinc-400 ml-auto sm:ml-0">
                          {conf.date}
                        </span>
                      </div>

                      {/* Title (Full, readable) */}
                      <h4 className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
                        {conf.title}
                      </h4>

                      {/* Conference Name & Location */}
                      <p className="text-xs font-semibold text-blue-700">
                        {conf.conference}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 2: Awards */}
        {activeTab === 'AWARDS' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {AWARDS.map((aw) => (
              <div
                key={aw.id}
                className="modern-card p-6 bg-white border border-zinc-200 hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-amber-600" />
                      {aw.rank}
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {aw.date}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-zinc-900 leading-snug mb-2">
                    {aw.title}
                  </h4>

                  <p className="text-xs font-semibold text-blue-700 mb-2">
                    수여기관: {aw.issuer}
                  </p>

                  <p className="text-xs text-zinc-600 leading-relaxed bg-zinc-50 p-3 rounded-lg border border-zinc-200/80">
                    인간공학 및 설명가능 AI 분야에서의 우수한 연구 기여와 실증 프로젝트 성과를 인정받아 수여된 공식 표창입니다.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 text-xs text-zinc-500 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>공인 수상 실적 검증 완료</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
