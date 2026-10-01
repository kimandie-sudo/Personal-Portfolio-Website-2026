import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { useLang, useT, usePortfolioData } from '../i18n';

export const About: React.FC = () => {
  const { lang } = useLang();
  const t = useT();
  const { PERSONAL_INFO, PUBLICATIONS, INDUSTRY_PROJECTS, CONFERENCES, PATENTS } = usePortfolioData();

  const interests = [
    {
      title: t('자율주행 탑승자 경험 & 멀미 저감', 'Passenger experience & motion sickness in automated vehicles'),
      desc: t(
        '비운전과업(NDRT) 인터페이스와 시각 모션 큐(VMC)를 다중 생체신호(fNIRS·시선 추적·HRV)로 평가합니다.',
        'Evaluating non-driving-task (NDRT) interfaces and visual motion cues (VMC) with multimodal physiological signals (fNIRS, eye tracking, HRV).'
      ),
    },
    {
      title: t('설명가능 AI(XAI) & 신뢰', 'Explainable AI (XAI) & trust'),
      desc: t(
        '설명 전략이 사용자의 이해·신뢰·의사결정에 미치는 영향을 연구하고 설명 인터페이스를 설계합니다.',
        'Studying how explanation strategies shape understanding, trust and decisions, and designing explanation interfaces.'
      ),
    },
    {
      title: t('멀티모달 LLM 기반 UX 평가 자동화', 'Automated UX evaluation with multimodal LLMs'),
      desc: t(
        'UI 스크린샷을 분석하는 8-에이전트 휴리스틱 평가 파이프라인을 구축합니다 (삼성전자 CXI).',
        'Building an 8-agent heuristic evaluation pipeline that analyzes UI screenshots (Samsung Electronics CXI).'
      ),
    },
  ];

  const stats = [
    { n: PUBLICATIONS.length, label: t('논문', 'papers') },
    { n: INDUSTRY_PROJECTS.length, label: t('산학·국책 프로젝트', 'industry & government projects') },
    { n: CONFERENCES.length, label: t('학회 발표', 'conference talks') },
    { n: PATENTS.length, label: t('특허', 'patents') },
  ];

  return (
    <section id="overview-section" className="scroll-mt-24 pt-10 pb-12 sm:pt-16">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h1 className="text-3xl sm:text-5xl font-black text-zinc-900">{lang === 'ko' ? '김성민' : 'Sungmin Kim'}</h1>
        <span className="text-xl sm:text-2xl font-bold text-zinc-400">{lang === 'ko' ? 'Sungmin Kim' : '김성민'}</span>
      </div>

      <p className="mt-3 text-sm sm:text-base font-semibold text-zinc-800">
        {t('서울대학교 산업공학과 박사과정 · 인간공학 연구실 (LET Lab)', 'Ph.D. Candidate, Industrial Engineering, Seoul National University · LET Lab')}
      </p>
      <p className="mt-1 text-sm text-zinc-600">
        {t('지도교수', 'Advisor')}: {PERSONAL_INFO.advisor} · {t('2027년 2월 졸업 예정', 'Expected graduation: Feb. 2027')} · {PERSONAL_INFO.location}
      </p>
      <p className="mt-1 text-sm text-zinc-600">
        {t('학위논문', 'Dissertation')}: <span className="text-zinc-800">{PERSONAL_INFO.dissertationTopic}</span>
      </p>

      <p className="mt-6 text-base sm:text-lg text-zinc-700 leading-relaxed max-w-3xl">
        {t(
          '인간의 생체신호를 정밀하게 계측하는 일부터 설명가능 AI(XAI) 인터페이스 설계까지, 사람과 AI가 서로를 이해하고 안전하게 협력하는 상호작용을 연구합니다.',
          'From precise measurement of human physiological signals to explainable AI (XAI) interfaces, I study interactions in which people and AI understand each other and collaborate safely.'
        )}
      </p>

      <h2 className="mt-8 text-xs font-bold uppercase tracking-wider text-blue-600">{t('연구 관심사', 'Research interests')}</h2>
      <ul className="mt-3 space-y-3 max-w-3xl">
        {interests.map((it) => (
          <li key={it.title} className="text-sm leading-relaxed">
            <span className="font-bold text-zinc-900">{it.title}</span>
            <span className="text-zinc-600"> — {it.desc}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors"
        >
          <Mail className="w-4 h-4" />
          {PERSONAL_INFO.email}
        </a>
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-200 text-sm font-bold transition-colors"
        >
          <Linkedin className="w-4 h-4 text-[#0a66c2]" />
          LinkedIn
        </a>
        <p className="basis-full mt-1 text-sm text-zinc-500">
          {stats.map((s, i) => (
            <span key={s.label}>
              {i > 0 && ' · '}
              <strong className="text-zinc-900">{s.n}</strong> {s.label}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};
