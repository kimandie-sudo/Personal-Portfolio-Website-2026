import React, { useState, useEffect } from 'react';
import { ModernNav } from './components/ModernNav';
import { About } from './components/About';
import { Publications } from './components/Publications';
import { Projects } from './components/Projects';
import { TalksAndAwards } from './components/TalksAndAwards';
import { Education } from './components/Education';
import { Section } from './components/Section';
import { ResearchSurvey } from './components/ResearchSurvey';
import { ModernFooter } from './components/ModernFooter';
import { ChevronUp } from 'lucide-react';
import { useT } from './i18n';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const t = useT();

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

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      
      {/* 1. Sticky Navigation Header */}
      <ModernNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* 2. Main content: one column, one section style */}
      <main className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex-1">
        <About />
        <Publications />
        <Projects />
        <TalksAndAwards />
        <Education />
        <Section id="survey" title={t('짧은 연구 설문', 'Quick Research Survey')}>
          <ResearchSurvey />
        </Section>
      </main>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => {
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
      <ModernFooter />

    </div>
  );
}
