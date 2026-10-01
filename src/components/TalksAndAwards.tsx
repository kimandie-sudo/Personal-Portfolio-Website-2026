import React from 'react';
import { useT, usePortfolioData } from '../i18n';
import { Section, DatedRow, SubHeading } from './Section';

export const TalksAndAwards: React.FC = () => {
  const t = useT();
  const { CONFERENCES, AWARDS } = usePortfolioData();

  // Newest first
  const byDate = [...CONFERENCES].sort((a, b) => b.date.localeCompare(a.date));
  const talkGroups = [
    { label: t('국제 학술대회', 'International'), items: byDate.filter((c) => c.isInternational) },
    { label: t('국내 학술대회', 'Domestic'), items: byDate.filter((c) => !c.isInternational) },
  ];

  return (
    <Section id="talks" title={t('수상 & 학회 발표', 'Awards & Talks')}>
      <SubHeading first>{t('수상', 'Awards')}</SubHeading>
      <ul>
        {AWARDS.map((a) => (
          <li key={a.id} className="py-4 border-b border-zinc-100 last:border-b-0">
            <p className="text-sm sm:text-base font-bold text-zinc-900">{a.title}</p>
            <p className="text-xs text-zinc-500 mt-0.5">
              {a.issuer} · {a.date}
            </p>
          </li>
        ))}
      </ul>

      {talkGroups.map((g) => (
        <div key={g.label}>
          <SubHeading>
            {g.label} <span className="text-zinc-400">{g.items.length}</span>
          </SubHeading>
          <ul>
            {g.items.map((c) => (
              <DatedRow key={c.id} date={c.date}>
                <p className="text-sm font-semibold text-zinc-900 leading-snug">{c.title}</p>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {c.shortConf} · {c.role}
                </p>
              </DatedRow>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
};
