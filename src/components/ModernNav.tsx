import React, { useState } from 'react';
import { 
  BookOpen, 
  Briefcase, 
  Sparkles, 
  Trophy, 
  GraduationCap, 
  Mail, 
  Menu, 
  X,
  Volume2,
  VolumeX,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ModernNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  onOpenSpecsModal: () => void;
}

export const ModernNav: React.FC<ModernNavProps> = ({
  activeSection,
  onNavigate,
  soundEnabled,
  setSoundEnabled,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Clean sequential navigation items
  const navItems = [
    { id: 'overview', label: '소개', icon: GraduationCap },
    { id: 'patents-bio', label: '학력·특허', icon: FileText },
    { id: 'pillars', label: '연구 분야', icon: Sparkles },
    { id: 'publications', label: '학술 논문', count: 4, icon: BookOpen },
    { id: 'industry', label: '산학 프로젝트', count: 10, icon: Briefcase },
    { id: 'conferences', label: '학술발표·수상', count: 12, icon: Trophy },
    { id: 'interactive-lab', label: '체험 랩', badge: 'LIVE', icon: Sparkles },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Left: Clean & Authoritative Identity Branding */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('overview')}
              className="flex items-center gap-3 text-left group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-xs group-hover:bg-blue-700 transition-colors shrink-0">
                SNU
              </div>
              <div className="space-y-0.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-black text-zinc-900 tracking-normal group-hover:text-blue-600 transition-colors">
                    김성민
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-zinc-500">
                    Sungmin Kim
                  </span>
                </div>
                <div className="text-xs text-zinc-600 font-medium whitespace-nowrap">
                  서울대학교 산업공학과 인간공학 연구실 (LET Lab) · 박사과정
                </div>
              </div>
            </button>
          </div>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-zinc-900 text-white shadow-xs'
                      : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.count && (
                    <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-zinc-200/90 text-zinc-700'
                    }`}>
                      {item.count}
                    </span>
                  )}
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-blue-600 text-white font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Sound toggle & Contact Button */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 sm:p-2.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer border border-zinc-200"
              title={soundEnabled ? '효과음 켜짐' : '효과음 꺼짐'}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-blue-600" />
              ) : (
                <VolumeX className="w-4 h-4 text-zinc-400" />
              )}
            </button>

            {/* Direct Email Action Button */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>연락하기</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-lg text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 cursor-pointer border border-zinc-200"
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
                {item.count && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-200 text-zinc-800 font-mono font-bold">
                    {item.count}
                  </span>
                )}
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
            
            <div className="pt-3 mt-2 border-t border-zinc-200 flex items-center justify-between px-2">
              <span className="text-xs text-zinc-500 font-mono">{PERSONAL_INFO.email}</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>연락하기</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
