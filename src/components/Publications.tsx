import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useT, usePortfolioData } from '../i18n';
import { Section } from './Section';
import { Publication } from '../types';

export const Publications: React.FC = () => {
  const t = useT();
  const { PUBLICATIONS } = usePortfolioData();
  const [open, setOpen] = useState<string | null>(null);

  const roleLabel: Record<Publication['roleType'], string> = {
    '1st': t('제1저자', 'First author'),
    '2nd': t('공동 2저자', 'Co-second author'),
    '4th': t('4저자', 'Fourth author'),
    'Co-Author': t('공저자', 'Co-author'),
  };

  return (
    <Section id="publications" title={t('논문', 'Publications')} count={PUBLICATIONS.length}>
      <ol className="space-y-6">
        {PUBLICATIONS.map((pub) => (
          <li key={pub.id}>
            <h3 className="text-base font-bold text-zinc-900 leading-snug">{pub.title}</h3>
            <p className="mt-1 text-sm text-zinc-600">
              <span className="font-semibold text-blue-700">{pub.journal}</span> · {pub.date}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
              <span
                className={`px-2 py-0.5 rounded-md font-semibold ${
                  pub.isFirstAuthor ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-700'
                }`}
              >
                {roleLabel[pub.roleType]}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold">{pub.jcr}</span>
              <button
                onClick={() => setOpen(open === pub.id ? null : pub.id)}
                aria-expanded={open === pub.id}
                className="inline-flex items-center gap-0.5 text-zinc-500 hover:text-blue-600 font-semibold cursor-pointer"
              >
                {t('초록', 'Abstract')}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open === pub.id ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {open === pub.id && (
              <p className="mt-3 text-sm text-zinc-700 leading-relaxed pl-3 border-l-2 border-blue-200">{pub.abstract}</p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
};
