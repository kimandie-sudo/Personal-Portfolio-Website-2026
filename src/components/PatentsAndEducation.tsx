import React from 'react';
import { ShieldCheck, GraduationCap, Languages, Sparkles, CheckCircle2 } from 'lucide-react';
import { usePortfolioData, useT } from '../i18n';

export const PatentsAndEducation: React.FC = () => {
  const { PATENTS, EDUCATION, LANGUAGES } = usePortfolioData();
  const t = useT();
  return (
    <section id="patents-bio-section" className="w-full mb-12 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* SECTION 1: Academic Background & Global Competency */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND & GLOBAL COMPETENCY</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-6">
            {t('학력 및 글로벌 역량', 'Academic Background & Languages')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Academic Background (7 cols) */}
            <div className="lg:col-span-7 modern-card p-6 sm:p-7 bg-white border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-100">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide">
                    {t('학력', 'Education')}
                  </h3>
                </div>

                <div className="space-y-4">
                  {EDUCATION.map((edu, i) => (
                    <div key={i} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                      <div className="flex items-center justify-between text-xs font-mono mb-1">
                        <span className="text-blue-600 font-bold">{edu.period}</span>
                        <span className="text-zinc-400 font-semibold">STAGE 0{i + 1}</span>
                      </div>

                      <h4 className="text-base font-bold text-zinc-900 mb-0.5">
                        {edu.school}
                      </h4>

                      <p className="text-xs font-bold text-blue-700 mb-2">
                        {edu.degree}
                      </p>

                      {edu.advisor && (
                        <p className="text-xs text-zinc-700 leading-relaxed">
                          • {edu.advisor}
                        </p>
                      )}

                      {edu.note && (
                        <p className="text-xs text-zinc-600 leading-relaxed mt-1 font-medium">
                          • {edu.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Global Languages & Research Competencies (5 cols) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              {/* Global Languages */}
              <div className="modern-card p-6 bg-white border border-zinc-200">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-100">
                  <Languages className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide">
                    {t('글로벌 어학 역량', 'Global Languages')}
                  </h3>
                </div>

                <div className="space-y-3">
                  {LANGUAGES.map((l, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-xs font-bold text-zinc-900 block">{l.lang}</span>
                        <span className="text-[11px] text-zinc-600 font-medium leading-tight">{l.note}</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-zinc-900 text-white text-xs font-mono font-bold shrink-0">
                        {l.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* SECTION 2: Patents */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PATENTS & INTELLECTUAL PROPERTY</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-6">
            {t(`특허 출원 실적 (총 ${PATENTS.length}건)`, `Patent Applications (${PATENTS.length} total)`)}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PATENTS.map((p, idx) => (
              <div
                key={p.id}
                className="modern-card p-6 bg-white border border-zinc-200 hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {p.status}
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-400">
                      PATENT NO. 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-zinc-900 leading-snug mb-2">
                    {p.title}
                  </h4>

                  <p className="text-xs font-semibold text-blue-700 mb-3">
                    {t('기술 분야', 'Field')}: {p.field}
                  </p>

                  <p className="text-xs text-zinc-700 leading-relaxed bg-zinc-50 p-3.5 rounded-xl border border-zinc-200/80 mb-4">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>{t('출원인', 'Applicant')}: {p.applicant}</span>
                  <span className="text-blue-600 font-bold font-sans">{t('인간공학 진단 인터페이스', 'Ergonomic Diagnostic Interface')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
