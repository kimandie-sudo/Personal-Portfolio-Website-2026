import React from 'react';
import { useT, usePortfolioData } from '../i18n';
import { Section, DatedRow, SubHeading } from './Section';

export const Education: React.FC = () => {
  const t = useT();
  const { EDUCATION, PATENTS, LANGUAGES } = usePortfolioData();

  return (
    <Section id="education" title={t('학력 · 특허 · 언어', 'Education · Patents · Languages')}>
      <SubHeading first>{t('학력', 'Education')}</SubHeading>
      <ul>
        {EDUCATION.map((e) => (
          <DatedRow key={e.school} date={e.period}>
            <p className="text-sm sm:text-base font-bold text-zinc-900">{e.school}</p>
            <p className="text-sm text-zinc-700 mt-0.5">{e.degree}</p>
            <p className="text-xs text-zinc-500 mt-1">{e.advisor}</p>
          </DatedRow>
        ))}
      </ul>

      <SubHeading>{t('특허', 'Patents')}</SubHeading>
      <ul>
        {PATENTS.map((p) => (
          <li key={p.id} className="py-4 border-b border-zinc-100 last:border-b-0">
            <p className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">{p.title}</p>
            <p className="text-xs text-zinc-500 mt-1">
              {p.status} · {p.applicant}
            </p>
          </li>
        ))}
      </ul>

      <SubHeading>{t('언어', 'Languages')}</SubHeading>
      <p className="py-4 text-sm text-zinc-700">
        {LANGUAGES.map((l, i) => (
          <span key={l.lang}>
            {i > 0 && <span className="text-zinc-300"> · </span>}
            <strong className="text-zinc-900">{l.lang}</strong> {l.score}
          </span>
        ))}
      </p>
    </Section>
  );
};
