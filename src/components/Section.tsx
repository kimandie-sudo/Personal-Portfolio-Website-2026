import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  count?: number;
  children: React.ReactNode;
}

/** Shared section shell: one heading style and spacing for every part of the page. */
export const Section: React.FC<SectionProps> = ({ id, title, count, children }) => (
  <section id={`${id}-section`} className="scroll-mt-24 py-10 sm:py-12 border-t border-zinc-200">
    <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-6 flex items-baseline gap-2">
      {title}
      {count !== undefined && <span className="text-base font-semibold text-zinc-400">{count}</span>}
    </h2>
    {children}
  </section>
);

/** Two-column row used by the list sections: a narrow date column and the content. */
export const DatedRow: React.FC<{ date: string; children: React.ReactNode }> = ({ date, children }) => (
  <li className="grid grid-cols-1 sm:grid-cols-[8.5rem_1fr] gap-x-6 gap-y-1 py-4 border-b border-zinc-100 last:border-b-0">
    <div className="text-xs font-mono text-zinc-500 pt-0.5">{date}</div>
    <div className="min-w-0">{children}</div>
  </li>
);

/** Small subheading inside a section. */
export const SubHeading: React.FC<{ first?: boolean; children: React.ReactNode }> = ({ first, children }) => (
  <h3 className={`text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 ${first ? '' : 'mt-10'}`}>{children}</h3>
);
