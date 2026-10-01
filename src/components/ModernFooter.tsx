import React from 'react';
import { Mail } from 'lucide-react';
import { useT, usePortfolioData } from '../i18n';

export const ModernFooter: React.FC = () => {
  const t = useT();
  const { PERSONAL_INFO } = usePortfolioData();

  return (
    <footer className="w-full bg-white border-t border-zinc-200 mt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-500">
        <p>
          {t('© 2026 김성민 (Sungmin Kim) · 서울대학교 인간공학 연구실 (LET Lab)', '© 2026 Sungmin Kim (김성민) · LET Lab, Seoul National University')}
        </p>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Mail className="w-3.5 h-3.5" />
          {PERSONAL_INFO.email}
        </a>
      </div>
    </footer>
  );
};
