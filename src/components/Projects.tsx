import React from 'react';
import { useT, usePortfolioData } from '../i18n';
import { Section, DatedRow, SubHeading } from './Section';
import { IndustryProject } from '../types';

export const Projects: React.FC = () => {
  const t = useT();
  const { INDUSTRY_PROJECTS } = usePortfolioData();

  const groups: { key: IndustryProject['partnerCategory']; label: string }[] = [
    { key: 'Samsung', label: t('삼성', 'Samsung') },
    { key: 'Hyundai', label: t('현대자동차그룹', 'Hyundai Motor Group') },
    { key: 'National', label: t('국책 과제', 'Government-funded') },
  ];

  return (
    <Section id="projects" title={t('산학·국책 프로젝트', 'Industry & Government Projects')} count={INDUSTRY_PROJECTS.length}>
      {groups.map((g, gi) => {
        const items = INDUSTRY_PROJECTS.filter((p) => p.partnerCategory === g.key);
        if (items.length === 0) return null;
        return (
          <div key={g.key}>
            <SubHeading first={gi === 0}>{g.label}</SubHeading>
            <ul>
              {items.map((p) => (
                <DatedRow key={p.id} date={p.period}>
                  <h3 className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">{p.title}</h3>
                  <p className="text-xs font-semibold text-zinc-500 mt-0.5">{p.partner}</p>
                  <p className="text-sm text-zinc-600 mt-1.5 leading-relaxed">{p.description}</p>
                </DatedRow>
              ))}
            </ul>
          </div>
        );
      })}
    </Section>
  );
};
