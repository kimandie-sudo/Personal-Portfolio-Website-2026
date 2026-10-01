import React, { useState } from 'react';
import { 
  BookOpen, 
  Briefcase, 
  Trophy, 
  GraduationCap, 
  Mail, 
  Menu, 
  X,
  FileText
} from 'lucide-react';
import { useLang, useT, usePortfolioData } from '../i18n';

interface ModernNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const ModernNav: React.FC<ModernNavProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = useT();
  const { PERSONAL_INFO } = usePortfolioData();

  // Clean sequential navigation items
  const navItems = [
    { id: 'overview', label: t('소개', 'About'), icon: GraduationCap },
    { id: 'publications', label: t('논문', 'Publications'), icon: BookOpen },
    { id: 'projects', label: t('프로젝트', 'Projects'), icon: Briefcase },
    { id: 'talks', label: t('수상·발표', 'Awards & Talks'), icon: Trophy },
    { id: 'education', label: t('학력', 'Education'), icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Left: Clean & Authoritative Identity Branding */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => onNavigate('overview')}
              className="flex items-center gap-3 text-left group cursor-pointer min-w-0"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-xs group-hover:bg-blue-700 transition-colors shrink-0">
                SNU
              </div>
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-baseline gap-2 sm:whitespace-nowrap">
                  <span className="text-lg sm:text-2xl font-black text-zinc-900 tracking-normal leading-tight group-hover:text-blue-600 transition-colors">
                    {lang === 'ko' ? '김성민' : 'Sungmin Kim'}
                  </span>
                  <span className="hidden sm:inline lg:hidden text-sm sm:text-base font-semibold text-zinc-500">
                    {lang === 'ko' ? 'Sungmin Kim' : '김성민'}
                  </span>
                </div>
                <div className="hidden sm:block lg:hidden text-xs text-zinc-600 font-medium whitespace-nowrap truncate">
                  {t('서울대학교 산업공학과 인간공학 연구실 (LET Lab) · 박사과정', 'Human Factors Lab (LET Lab), SNU Industrial Engineering · Ph.D. Candidate')}
                </div>
              </div>
            </button>
          </div>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-2.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-zinc-900 text-white shadow-xs'
                      : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: Language toggle & Contact Button */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">

            {/* Language Toggle (KO | EN) — always visible on desktop & mobile */}
            <div
              role="group"
              aria-label={t('언어 선택', 'Select language')}
              title={t('언어 전환 (한국어 / English)', 'Switch language (한국어 / English)')}
              className="flex items-center p-0.5 rounded-lg border border-zinc-200 bg-zinc-50 shrink-0"
            >
              {(['ko', 'en'] as const).map((code) => {
                const isActive = lang === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    aria-pressed={isActive}
                    aria-label={code === 'ko' ? '한국어로 보기' : 'View in English'}
                    title={code === 'ko' ? '한국어' : 'English'}
                    className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-md text-[11px] sm:text-xs font-bold font-mono transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-zinc-900 text-white shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
                    }`}
                  >
                    {code.toUpperCase()}
                  </button>
                );
              })}
            </div>

            {/* Direct Email Action Button */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label={t('이메일 보내기', 'Send an email')}
              title={PERSONAL_INFO.email}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden sm:inline lg:hidden">{t('연락하기', 'Contact')}</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-lg text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 cursor-pointer border border-zinc-200"
              aria-label={mobileMenuOpen ? t('메뉴 닫기', 'Close menu') : t('메뉴 열기', 'Open menu')}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zinc-200 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 bg-white">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-700 hover:bg-zinc-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
              </button>
            ))}
            
            <div className="pt-3 mt-2 border-t border-zinc-200 flex items-center justify-between px-2">
              <span className="text-xs text-zinc-500 font-mono">{PERSONAL_INFO.email}</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t('연락하기', 'Contact')}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
