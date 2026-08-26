export interface Publication {
  id: string;
  title: string;
  journal: string;
  role: string;
  roleType: '1st' | '2nd' | 'Co-Author' | '4th';
  jcr: string;
  if?: number;
  date: string;
  doi?: string;
  abstract: string;
  keywords: string[];
  metrics: string;
  affiliations?: string;
  isFirstAuthor?: boolean;
}

export interface IndustryProject {
  id: string;
  partner: string;
  partnerShort: string;
  partnerCategory: 'Samsung' | 'Hyundai' | 'National' | 'Other';
  title: string;
  period: string;
  description: string;
  contributions: string[];
  tags: string[];
  badgeColor?: string;
}

export interface ConferencePresentation {
  id: string;
  title: string;
  conference: string;
  shortConf: string;
  date: string;
  role: string;
  isInternational: boolean;
  award?: string;
}

export interface Patent {
  id: string;
  title: string;
  status: string;
  applicant: string;
  field: string;
  description: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  rank: string;
}

export interface ResearchEquipment {
  name: string;
  category: string;
  spec: string;
  usage: string;
  icon: string;
}
