import React, { useState } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  Sparkles,
  FileText,
  Bookmark
} from 'lucide-react';
import { PUBLICATIONS } from '../data/portfolioData';
import { Publication } from '../types';

interface PublicationsListProps {
  filterQuery?: string;
}

export const PublicationsList: React.FC<PublicationsListProps> = ({ filterQuery = '' }) => {
  const [filterType, setFilterType] = useState<'ALL' | '1st' | 'Q1'>('ALL');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({
    'thms-2026': true, // Open by default for top 1st author paper
    'ijhci-2026': false,
    'ae-2024': false,
    'chi-2026': false
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopyCitation = (pub: Publication) => {
    const citation = `${pub.title}. ${pub.journal} (${pub.date}). DOI: ${pub.doi || 'In Press'}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPublications = PUBLICATIONS.filter((pub) => {
    if (filterType === '1st' && !pub.isFirstAuthor) return false;
    if (filterType === 'Q1' && !pub.jcr.includes('Q1')) return false;

    if (filterQuery) {
      const q = filterQuery.toLowerCase();
      return (
        pub.title.toLowerCase().includes(q) ||
        pub.journal.toLowerCase().includes(q) ||
        pub.keywords.some(k => k.toLowerCase().includes(q)) ||
        pub.abstract.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <section id="publications-section" className="w-full mb-12 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>PEER-REVIEWED JOURNAL & CONFERENCE PUBLICATIONS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
              학술 논문 및 게재 성과 (총 {PUBLICATIONS.length}편)
            </h2>
            <p className="text-sm text-zinc-600 mt-1 max-w-3xl">
              IEEE Transactions, IJHCI, ACM CHI, Applied Ergonomics 등 인간공학 및 인간-컴퓨터 상호작용(HCI) 분야 최상위 저널에 게재된 연구 논문 목록입니다.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-1.5 bg-zinc-100 p-1 rounded-xl border border-zinc-200 self-start sm:self-auto shrink-0">
            {[
              { id: 'ALL', label: `전체 (${PUBLICATIONS.length})` },
              { id: '1st', label: '제1저자 논문 (1st Author)' },
              { id: 'Q1', label: 'JCR Q1 Top Tier' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-white text-zinc-900 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Publications Cards List */}
        <div className="space-y-4">
          {filteredPublications.map((pub, idx) => {
            const isExpanded = expandedAbstracts[pub.id] || false;
            return (
              <div
                key={pub.id}
                className={`modern-card p-6 border transition-all ${
                  pub.isFirstAuthor
                    ? 'border-blue-200 bg-linear-to-r from-white via-white to-blue-50/20'
                    : 'border-zinc-200 bg-white'
                }`}
              >
                {/* Header Row: Badges & Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Role Badge */}
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      pub.isFirstAuthor
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-zinc-100 text-zinc-800 border border-zinc-200'
                    }`}>
                      {pub.role}
                    </span>

                    {/* JCR Rank Badge */}
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {pub.jcr}
                    </span>

                    {/* Date */}
                    <span className="text-xs font-mono text-zinc-500 font-semibold">
                      {pub.date}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-medium text-zinc-500">
                    PAPER NO. 0{idx + 1}
                  </span>
                </div>

                {/* Paper Title (Full, No Truncation) */}
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug mb-2">
                  {pub.title}
                </h3>

                {/* Journal & Affiliation */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm mb-4">
                  <span className="font-bold text-blue-700">
                    {pub.journal}
                  </span>
                  <span className="text-zinc-300">•</span>
                  <span className="text-zinc-600 font-medium">
                    {pub.affiliations}
                  </span>
                </div>

                {/* Abstract Section with comfortable line breaks */}
                <div className="rounded-xl bg-zinc-50 border border-zinc-200/80 p-4 mb-4">
                  <div className="flex items-center justify-between text-xs font-bold text-zinc-700 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-blue-600" />
                      연구 개요 & 핵심 기여 (Abstract & Key Findings)
                    </span>
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="text-blue-600 hover:text-blue-800 text-xs font-semibold flex items-center gap-0.5 cursor-pointer"
                    >
                      <span>{isExpanded ? '간략히 접기' : '전체 초록 보기'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <p className={`text-xs sm:text-sm text-zinc-700 leading-relaxed ${
                    isExpanded ? '' : 'line-clamp-2'
                  }`}>
                    {pub.abstract}
                  </p>
                </div>

                {/* Keywords & Actions Bottom Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-zinc-100">
                  
                  {/* Keywords */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {pub.keywords.map((kw, kIdx) => (
                      <span
                        key={kIdx}
                        className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 text-[11px] font-medium"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleCopyCitation(pub)}
                      className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="인용 양식 복사"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">복사 완료!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>인용 복사</span>
                        </>
                      )}
                    </button>

                    {pub.doi && (
                      <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-mono font-medium border border-blue-200/60">
                        DOI: {pub.doi}
                      </span>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
