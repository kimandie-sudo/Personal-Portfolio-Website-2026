import React, { useState, useEffect } from 'react';
import { ModernNav } from './components/ModernNav';
import { ModernHero } from './components/ModernHero';
import { PatentsAndEducation } from './components/PatentsAndEducation';
import { ResearchPillars } from './components/ResearchPillars';
import { PublicationsList } from './components/PublicationsList';
import { IndustryProjects } from './components/IndustryProjects';
import { ConferencesAndAwards } from './components/ConferencesAndAwards';
import { InteractiveLab } from './components/InteractiveLab';
import { ModernFooter } from './components/ModernFooter';
import { ChevronUp } from 'lucide-react';
import { DesignSystemSummaryModal } from './components/DesignSystemSummaryModal';
import { useT } from './i18n';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [showSpecsModal, setShowSpecsModal] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const t = useT();

  // Clean Web Audio feedback
  const playClickSound = (freq = 880, duration = 0.04) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio context may be restricted before interaction
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    playClickSound(950, 0.04);
    setActiveSection(sectionId);
    if (sectionId === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const elem = document.getElementById(`${sectionId}-section`);
      if (elem) {
        // Calculate offset position leaving 90px breathing room for sticky navbar so section title is clearly visible
        const headerOffset = 90;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }
  };

  const handleQuickFilter = (category: string) => {
    playClickSound(1050, 0.05);
    setSelectedFilter(category);
    if (category === 'ALL') {
      // Show all
    } else if (category === 'AV_UX') {
      handleNavigate('publications');
    } else if (category === 'XAI') {
      handleNavigate('publications');
    } else if (category === 'MLLM') {
      handleNavigate('industry');
    } else if (category === 'BIOMETRIC') {
      handleNavigate('interactive-lab');
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      
      {/* 1. Sticky Navigation Header */}
      <ModernNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenSpecsModal={() => setShowSpecsModal(true)}
      />

      {/* 2. Main Content Canvas */}
      <main className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 py-4">

        {/* 1) 소개 Hero Section */}
        <ModernHero
          onExplorePublications={() => handleNavigate('publications')}
          onExploreIndustry={() => handleNavigate('industry')}
          onExploreLab={() => handleNavigate('interactive-lab')}
          onExploreConferences={() => handleNavigate('conferences')}
          onExplorePatents={() => handleNavigate('patents-bio')}
          onQuickFilter={handleQuickFilter}
          selectedFilter={selectedFilter}
        />

        {/* 2) 소개 바로 다음: 학력 및 특허 (Patents, Academic Background & Languages) */}
        <PatentsAndEducation />

        {/* 3) 연구 분야 (3 Core Research Pillars) */}
        <ResearchPillars onSelectTopic={handleQuickFilter} />

        {/* 4) 학술 논문 목록 (Publications List) */}
        <PublicationsList />

        {/* 5) 산학협력 프로젝트 (Industry Projects) */}
        <IndustryProjects />

        {/* 6) 학술발표 & 수상 내역 (Conferences & Awards) */}
        <ConferencesAndAwards />

        {/* 7) 체험 랩 (Interactive Lab - 연락하기 바로 직전 위치) */}
        <InteractiveLab />

      </main>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => {
            playClickSound(750, 0.04);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-zinc-900 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-200 border border-zinc-700"
          title={t('맨 위로 이동', 'Back to top')}
          aria-label={t('맨 위로 이동', 'Back to top')}
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* 3. Modern Footer */}
      <ModernFooter onOpenDesignSpecs={() => setShowSpecsModal(true)} />

      {/* Design System Specifications Modal */}
      <DesignSystemSummaryModal
        isOpen={showSpecsModal}
        onClose={() => setShowSpecsModal(false)}
      />
    </div>
  );
}
