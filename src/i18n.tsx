import React, { createContext, useContext, useEffect, useState } from 'react';
import * as ko from './data/portfolioData';
import * as en from './data/portfolioData.en';

export type Lang = 'ko' | 'en';

const STORAGE_KEY = 'portfolio-lang';

// Priority: ?lang= query param (shareable links) → saved choice → browser language → Korean
function detectInitialLang(): Lang {
  try {
    const param = new URLSearchParams(window.location.search).get('lang');
    if (param === 'ko' || param === 'en') return param;
  } catch {}
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'ko' || saved === 'en') return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({ lang: 'ko', setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.set('lang', lang);
        window.history.replaceState(null, '', url);
      }
    } catch {}
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

/** Inline UI string picker: t('한국어', 'English') */
export function useT() {
  const { lang } = useLang();
  return (koText: string, enText: string) => (lang === 'ko' ? koText : enText);
}

/** Portfolio content in the active language (same shape for both languages). */
export function usePortfolioData(): typeof ko {
  const { lang } = useLang();
  return lang === 'ko' ? ko : en;
}
