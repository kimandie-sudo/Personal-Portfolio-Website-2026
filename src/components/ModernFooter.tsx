import React from 'react';
import { Mail } from 'lucide-react';
import { useLang, useT, usePortfolioData } from '../i18n';

interface ModernFooterProps {
  onOpenDesignSpecs?: () => void;
}

export const ModernFooter: React.FC<ModernFooterProps> = ({ onOpenDesignSpecs }) => {
  const { lang } = useLang();
  const t = useT();
  const { PERSONAL_INFO } = usePortfolioData();

  return (
    <footer className="w-full bg-white border-t border-zinc-200 mt-16 pt-12 pb-8 text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-100">
          
          {/* Col 1: Identity & Lab (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                SNU
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-black text-lg sm:text-xl text-zinc-900">
                  {lang === 'ko' ? '김성민' : 'Sungmin Kim'}
                </span>
                <span className="font-semibold text-sm text-zinc-500">
                  {lang === 'ko' ? 'Sungmin Kim' : '김성민'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed max-w-lg">
              {lang === 'ko' ? PERSONAL_INFO.affiliationKo : PERSONAL_INFO.affiliationEn}<br />
              <span className="text-blue-600 font-semibold">{PERSONAL_INFO.dissertationTopic}</span>
            </p>
          </div>

          {/* Col 2: Direct Contact (6 cols) */}
          <div className="md:col-span-6 md:justify-self-end space-y-2">
            <div className="text-xs font-bold text-zinc-900 mb-2">
              CONTACT & COLLABORATION
            </div>
            <p className="text-xs text-zinc-600">
              {t('산학 연구, 포스닥/연구원 포지션 및 학술 협업 문의:', 'For industry research, postdoc/researcher positions, and academic collaboration:')}
            </p>
            <div className="space-y-1.5 pt-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            {t('© 2026 김성민 (Sungmin Kim). Seoul National University LET Lab.', '© 2026 Sungmin Kim (김성민). Seoul National University LET Lab.')}
          </p>
        </div>

      </div>
    </footer>
  );
};
