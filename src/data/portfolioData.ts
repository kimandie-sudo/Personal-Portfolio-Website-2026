import { Publication, IndustryProject, ConferencePresentation, Patent, Award, ResearchEquipment } from '../types';

export const PERSONAL_INFO = {
  nameKo: '김성민',
  nameEn: 'Sungmin Kim',
  titleKo: '서울대학교 산업공학과 박사과정 (인간공학)',
  titleEn: 'Ph.D. Candidate in Human Factors & Human-AI Interaction',
  affiliationKo: '서울대학교 인간공학 연구실 (LET Lab, 지도교수: 박우진)',
  affiliationEn: 'Life Enhancement Technology Lab, Seoul National University',
  advisor: '박우진 교수 (Prof. Woojin Park)',
  email: 'kimandie@snu.ac.kr',
  linkedin: 'https://www.linkedin.com/in/sungmin-kim-3bb2a8188/',
  period: '2020.03 – 현재',
  location: 'Seoul, Republic of Korea',
  dissertationTopic: '자율주행 환경에서 탑승자 비운전과업 수행 및 상호작용 방식에 관한 인간공학적 연구',
  coreStatement1: '인간은 복잡하며 섬세합니다. 그래서 정밀한 다중 생체신호 계측이 필요합니다.',
  coreStatement2: 'AI의 판단은 불투명합니다. 그래서 직관적인 설명과 인터페이스가 필요합니다.',
  synthesis: '사람을 깊이 이해해야 AI를 제대로 설계할 수 있고, AI의 판단 과정과 근거가 명확해야 사람이 비로소 신뢰하며 함께할 수 있습니다.',
  dualFocus: [
    {
      num: '01',
      title: '자율주행 생체신호 기반 탑승자 정밀 측정 & UX',
      desc: '자율주행 환경에서 시선 추적(Tobii Pro Glasses 3) 및 다채널 생체신호(fNIRS 10-ch, HRV)를 활용하여 탑승자의 인지 부하, 멀미(VMS), 비운전과업(NDRT) 수행 상태를 정량적으로 분석하고 차내 멀미 저감 인터페이스를 설계합니다.'
    },
    {
      num: '02',
      title: '설명가능 AI (XAI) & MLLM 멀티에이전트 인터페이스',
      desc: '의료 진단 및 모바일 맥락에서 AI의 의사결정 과정을 사용자가 직관적으로 해석하고 신뢰할 수 있도록 Decision Tree, Example-Based, Feature Attribution 기반 XAI 인터페이스와 8-Agent MLLM 휴리스틱 평가 파이프라인을 구축합니다.'
    }
  ]
};

export const PUBLICATIONS: Publication[] = [
  {
    id: 'thms-2026',
    title: 'Effects of NDRT Interface Display and Control Modalities on Motion Sickness and Preference during Autonomous Driving',
    journal: 'IEEE Transactions on Human-Machine Systems (THMS)',
    role: '제1저자 (First Author)',
    roleType: '1st',
    jcr: 'JCR Q2 (IF 4.4)',
    if: 4.4,
    date: '2026.01',
    doi: '10.1109/THMS.2025.xxxxxxx',
    isFirstAuthor: true,
    abstract: '자율주행 차량 내에서 비운전과업(NDRT) 수행 시 디스플레이 배치(HUD, 센터스택, 클러스터)와 조작 모달리티(터치, 제스처, 음성)가 탑승자의 차량 멀미(Motion Sickness) 및 선호도에 미치는 영향을 다중 생체신호 계측을 통해 정량적으로 규명한 실증 연구.',
    keywords: ['Autonomous Driving', 'NDRT Interface', 'Motion Sickness', 'Display Modality', 'fNIRS', 'Human-Machine Systems'],
    metrics: 'IEEE THMS · IF 4.4 · JCR Q2 Top Rank',
    affiliations: 'Seoul National University LET Lab'
  },
  {
    id: 'ijhci-2026',
    title: 'Evaluating Explanation Strategies in Patient-Facing Diagnostic AI: A Comparative Study of Decision Tree, Example-Based, and Feature Attribution Approaches',
    journal: 'International Journal of Human-Computer Interaction (IJHCI)',
    role: '공저자 (Co-Author)',
    roleType: 'Co-Author',
    jcr: 'JCR Q1',
    date: '2026.03',
    abstract: '환자 대면형 진단 AI 시스템에서 의사결정 나무(Decision Tree), 유사 사례(Example-Based), 특성 기여도(Feature Attribution) 등 3가지 설명 전략이 사용자의 이해도, 신뢰 형성 및 의사결정 확신도에 미치는 영향을 비교 평가한 연구.',
    keywords: ['Explainable AI (XAI)', 'Diagnostic AI', 'Decision Tree', 'Feature Attribution', 'User Trust', 'Healthcare UX'],
    metrics: 'IJHCI · JCR Q1 Flagship Journal',
    affiliations: 'Seoul National University & IITP Project Team'
  },
  {
    id: 'ae-2024',
    title: 'Developing Predictive Models of User Affective Responses and a Grading System for Foldable Smartphone Crease Patterns',
    journal: 'Applied Ergonomics',
    role: '4저자 (Co-Author)',
    roleType: '4th',
    jcr: 'JCR Q1 (Top Tier)',
    date: '2024.12',
    abstract: '폴더블 스마트폰 힌지부의 크리즈(주름) 형상 파라미터가 사용자의 시각적 인지 품질 및 감성적 반응에 미치는 영향을 선형혼합모형(LMER)으로 모델링하고 정량적 품질 등급 체계를 수립한 연구.',
    keywords: ['Foldable Display', 'Crease Visibility', 'Affective Ergonomics', 'LMER Modeling', 'Quality Grading'],
    metrics: 'Applied Ergonomics · Ergonomics JCR Q1',
    affiliations: 'Seoul National University & Samsung Display'
  },
  {
    id: 'chi-2026',
    title: 'Beyond One-Size-Fits-All: Individual Differences in the Effectiveness of Visual Motion Cues for Mitigating Motion Sickness in a Moving Vehicle',
    journal: 'ACM CHI 2026 Late-Breaking Work (LBW)',
    role: '공동 2저자 (Co-2nd Author)',
    roleType: '2nd',
    jcr: 'Top HCI Conference',
    date: '2026.04',
    abstract: '실차 주행 환경에서 시각 모션 큐(Visual Motion Cues, VMC)가 탑승자 멀미 저감에 미치는 효과와 개인차(멀미 감수성, 시각 의존도)를 분석하고 맞춤형 차내 UI/UX 알고리즘을 제안한 연구.',
    keywords: ['Visual Motion Cues (VMC)', 'Vehicle Motion Sickness', 'In-Vehicle UX', 'CHI LBW', 'Individual Differences'],
    metrics: 'ACM CHI 2026 · 현대모비스/현대자동차 공동연구',
    affiliations: 'Seoul National University & Hyundai Mobis / Hyundai Motor'
  }
];

export const INDUSTRY_PROJECTS: IndustryProject[] = [
  {
    id: 'samsung-cxi-2025',
    partner: '삼성전자 CXI 팀',
    partnerShort: 'Samsung CXI',
    partnerCategory: 'Samsung',
    title: 'MLLM 기반 UX 휴리스틱 평가 자동화 연구',
    period: '2025.01 – 현재',
    description: '스크린샷 기반 맥락 추론 및 UX 이슈 자동 탐지 파이프라인을 설계하고, 8-Agent 아키텍처 기반 평가 프로세스 구축.',
    contributions: [
      '모바일 및 가전 UI 스크린샷 대상 Multimodal LLM 기반 맥락 인식 및 컴포넌트 계층 분석',
      '8개 특화 에이전트(정보구조, 접근성, 인지부하, 일관성, 오류방지 등) 협업 평가 워크플로우 구축',
      '기존 정성적 전문가 리뷰 대비 평가 시간 75% 단축 및 휴리스틱 결함 탐지율 92% 달성'
    ],
    tags: ['Multimodal LLM', '8-Agent Architecture', 'UX Heuristics', 'Automated QA', 'Samsung Electronics'],
    badgeColor: '#e48600'
  },
  {
    id: 'samsung-mx-multidevice',
    partner: '삼성전자 MX 사업부',
    partnerShort: 'Samsung MX',
    partnerCategory: 'Samsung',
    title: '멀티디바이스 사용자 경험 (Multi-Device UX) 연구',
    period: '2024',
    description: '스마트폰, 태블릿, 웨어러블 간 생태계 연동 시 사용자의 인지 전환 및 테스크 연속성 최적화 연구.',
    contributions: [
      '디바이스 간 컨텍스트 스위칭 시 인지 부하 측정 및 사용자 저니 매핑',
      '크로스 디바이스 알림 및 핸드오프 상호작용 가이드라인 제정'
    ],
    tags: ['Multi-Device UX', 'Ecosystem Continuity', 'Task Handoff', 'Samsung MX'],
    badgeColor: '#e48600'
  },
  {
    id: 'samsung-mx-needs',
    partner: '삼성전자 MX 사업부',
    partnerShort: 'Samsung MX',
    partnerCategory: 'Samsung',
    title: '모바일 경험 사용자 니즈 & 저니(Journey) 분석',
    period: '2023',
    description: '차세대 갤럭시 사용자 세그먼트별 사용 맥락에 대한 심층 정량·정성 분석 및 핵심 페인포인트 도출.',
    contributions: [
      '사용자 일상 행동 데이터 기반 경험 저니 모델링',
      '핵심 기능 인터랙션 개선 제안서 전달 및 실무 반영'
    ],
    tags: ['User Needs', 'Journey Mapping', 'Quantitative Survey', 'In-depth Interview'],
    badgeColor: '#e48600'
  },
  {
    id: 'samsung-display-crease',
    partner: '삼성디스플레이 (Samsung Display)',
    partnerShort: 'Samsung Display',
    partnerCategory: 'Samsung',
    title: '폴더블 디스플레이 크리즈(주름) 시인성이 사용자 품질 인식에 미치는 영향 평가 연구',
    period: '2023 – 2024',
    description: '빛 반사 각도 및 힌지 주름 깊이에 따른 시각적 인지 거슬림(Annoyance) 정량화 및 감성 품질 예측 모델 개발 (Applied Ergonomics 논문 게재).',
    contributions: [
      '정밀 광학 측정 장비와 연계한 사용자 심리물리학(Psychophysics) 실험 설계',
      '선형혼합모형(LMER)을 이용한 크리즈 품질 정량 등급 산출 공식 도출'
    ],
    tags: ['Foldable Display', 'Psychophysics', 'LMER Modeling', 'Applied Ergonomics'],
    badgeColor: '#e48600'
  },
  {
    id: 'samsung-da-vacuum',
    partner: '삼성전자 DA(생활가전) 사업부',
    partnerShort: 'Samsung DA',
    partnerCategory: 'Samsung',
    title: '스틱 청소기 인간공학 설계 가이드 도출 연구',
    period: '2022',
    description: '손목 및 어깨 근전도(EMG)와 파지력 분석을 통한 프리미엄 무선 청소기 그립부 및 무게중심 인간공학적 최적화.',
    contributions: [
      '다양한 신체 체형별 사용자의 상지 근육 피로도(EMG) 측정 및 분석',
      '손잡이 각도 및 그립 직경 최적화 인간공학 설계 지침서 도출'
    ],
    tags: ['Ergonomics Design', 'EMG Analysis', 'Grip Comfort', 'Home Appliance'],
    badgeColor: '#e48600'
  },
  {
    id: 'hyundai-group-mobility',
    partner: '현대자동차그룹',
    partnerShort: 'Hyundai Motor Group',
    partnerCategory: 'Hyundai',
    title: '미래 모빌리티 아키텍처의 탑승자 UX 수용 인자 도출',
    period: '2023 – 2024',
    description: 'SDV 및 목적기반모빌리티(PBV) 실내 공간 가변성에 따른 탑승자 수용성(Acceptance) 및 상호작용 모델 개발.',
    contributions: [
      '가변 시트 레이아웃 및 디스플레이 배치별 공간 지각 평가',
      '탑승자 편의 및 안전 수용성 구조방정식 모델링'
    ],
    tags: ['Future Mobility', 'PBV Architecture', 'UX Acceptance', 'Spatial Ergonomics'],
    badgeColor: '#206479'
  },
  {
    id: 'hyundai-mobis-vmc',
    partner: '현대모비스 (Hyundai Mobis)',
    partnerShort: 'Hyundai Mobis',
    partnerCategory: 'Hyundai',
    title: '차량 모션 저감 디스플레이 UI/UX 설계 및 실차 구현·검증 (VMC)',
    period: '2024 – 2025',
    description: '차량 관성 및 주행 궤적에 실시간 동기화되는 시각 모션 큐(Visual Motion Cues) 알고리즘 설계 및 실차 주행 검증 (CHI 2026 LBW).',
    contributions: [
      '차량 CAN 통신 기반 가속도·각속도 연동 동적 UI 그래픽 엔진 구축',
      '실차 주행 중 탑승자 주관 멀미 지수(MSIS) 및 fNIRS 뇌혈류 반응 측정'
    ],
    tags: ['Visual Motion Cues', 'VMC Engine', 'Real-vehicle Test', 'CHI 2026 LBW'],
    badgeColor: '#206479'
  },
  {
    id: 'hyundai-ngv-ev',
    partner: '현대자동차 남양연구소 (NGV)',
    partnerShort: 'Hyundai NGV',
    partnerCategory: 'Hyundai',
    title: '전기차(EV) 가감속 프로파일별 탑승자 불편감 최소화 조건 규명',
    period: '2022 – 2023',
    description: '전기차 회생제동 및 급가감속 시 저크(Jerk) 프로파일이 탑승자의 신체 동요와 멀미에 미치는 영향 정밀 규명.',
    contributions: [
      'EV 고유 토크 응답성에 따른 탑승자 머리 동요(Head Motion) 6자유도 IMU 계측',
      '불편감 임계 가속도-저크 2차원 허용 영역 맵(Safety & Comfort Boundary) 도출'
    ],
    tags: ['EV Regenerative Braking', 'Jerk Profile', 'Motion Sickness', 'IMU Motion Capture'],
    badgeColor: '#206479'
  },
  {
    id: 'iitp-xai-grant',
    partner: '과학기술정보통신부 (IITP 국책과제)',
    partnerShort: 'IITP (과기정통부)',
    partnerCategory: 'National',
    title: '설명가능 AI (XAI) 인터페이스 개발 및 평가',
    period: '2022.04 – 2023.12',
    description: '복잡한 머신러닝/딥러닝 모델의 의사결정 근거를 일반 사용자와 도메인 전문가가 직관적으로 이해할 수 있는 설명 UI/UX 파이프라인 개발 (IJHCI 논문 게재).',
    contributions: [
      'SHAP/LIME 기반 Feature Attribution과 Decision Tree 기반 규칙 설명 UI 프로토타이핑',
      '사용자 인지 신뢰(Trust) 및 인지 과부하 측정 실험 설계 및 통계 분석'
    ],
    tags: ['Explainable AI', 'XAI Interface', 'User Trust', 'IJHCI Publication', 'National Grant'],
    badgeColor: '#ecab37'
  },
  {
    id: 'nrf-ar-hmd',
    partner: '한국연구재단 (NRF)',
    partnerShort: 'NRF (한국연구재단)',
    partnerCategory: 'National',
    title: 'AR HMD 조립 작업 중 산업 인간공학 위험도 평가',
    period: '2021 – 2022',
    description: '산업 현장 스마트 글래스 및 증강현실 HMD 착용 작업 시 작업자의 목 관절 부하(RULA/REBA) 및 시각 피로 정량화.',
    contributions: [
      '3D 모션 캡처 및 시선 추적 연동 작업 위험도 시각화 툴체인 구현',
      '산업 현장 HMD 인터페이스 배치 가이드라인 수립'
    ],
    tags: ['AR HMD', 'Industrial Ergonomics', 'RULA/REBA', 'Visual Fatigue'],
    badgeColor: '#ecab37'
  }
];

export const CONFERENCES: ConferencePresentation[] = [
  {
    id: 'conf-iea-2024-1',
    title: 'Exploring the Impacts of NDRT Interface Modality Design on Occupant Comfort',
    conference: '22nd Triennial Congress of the International Ergonomics Association (IEA 2024)',
    shortConf: 'IEA 2024 (Jeju, Korea)',
    date: '2024.08',
    role: '제1저자 (Oral Presentation)',
    isInternational: true
  },
  {
    id: 'conf-iea-2024-2',
    title: 'Metrics for Comprehensive Evaluation of Vehicle Motion Sickness',
    conference: '22nd Triennial Congress of the International Ergonomics Association (IEA 2024)',
    shortConf: 'IEA 2024 (Jeju, Korea)',
    date: '2024.08',
    role: '제2저자',
    isInternational: true
  },
  {
    id: 'conf-hfes-2024',
    title: 'Impacts of Non-Driving-Related Task Interface Design on Time Change',
    conference: 'Human Factors and Ergonomics Society Annual Meeting (HFES 2024)',
    shortConf: 'HFES 2024 (Phoenix, USA)',
    date: '2024.09',
    role: '제1저자 (Oral Presentation)',
    isInternational: true
  },
  {
    id: 'conf-hfes-2023',
    title: 'Effects of NDRT Interface Display and Control Modalities on Motion Sickness',
    conference: 'Human Factors and Ergonomics Society Annual Meeting (HFES 2023)',
    shortConf: 'HFES 2023 (Washington D.C., USA)',
    date: '2023.09',
    role: '제1저자 (Oral Presentation)',
    isInternational: true
  },
  {
    id: 'conf-jes-2025-1',
    title: 'Effects of Display-Control Modality on Workload During Non-Driving Related Task',
    conference: 'The 66th Annual Conference of the Japan Human Factors and Ergonomics Society (JES 2025)',
    shortConf: 'JES 2025 (Japan)',
    date: '2025.05',
    role: '제1저자',
    isInternational: true
  },
  {
    id: 'conf-jes-2025-2',
    title: '멀미 저감 시각 디스플레이 평가를 위한 비운전과업 설계 방안 연구',
    conference: 'The 66th Annual Conference of the Japan Human Factors and Ergonomics Society (JES 2025)',
    shortConf: 'JES 2025 (Japan)',
    date: '2025.05',
    role: '제2저자',
    isInternational: true
  },
  {
    id: 'conf-ahfe-2023',
    title: 'Effects of Crease Features on Crease Visibility and Goodness of Smartphone Design',
    conference: 'International Conference on Applied Human Factors and Ergonomics (AHFE International)',
    shortConf: 'AHFE 2023 (San Francisco, USA)',
    date: '2023.07',
    role: '4저자',
    isInternational: true
  },
  {
    id: 'conf-chi-2026',
    title: 'Beyond One-Size-Fits-All: Individual Differences in the Effectiveness of Visual Motion Cues for Mitigating Motion Sickness in a Moving Vehicle',
    conference: 'ACM CHI 2026 Late-Breaking Work',
    shortConf: 'ACM CHI 2026',
    date: '2026.04',
    role: '공동 2저자 (현대모비스·현대자동차 공동)',
    isInternational: true
  },
  {
    id: 'conf-ask-2024-spring',
    title: 'Changes in the Time Profile of Motion Sickness During Autonomous Driving',
    conference: '한국음향학회 춘계학술발표대회',
    shortConf: '한국음향학회 춘계 2024',
    date: '2024.04',
    role: '제1저자',
    isInternational: false
  },
  {
    id: 'conf-ask-2024-fall',
    title: '자율주행 환경에서 탑승자 멀미 변화 양상 계측 연구',
    conference: '한국음향학회 추계학술발표대회 (우수발표상 수상)',
    shortConf: '한국음향학회 추계 2024',
    date: '2024.10',
    role: '제1저자 (우수발표상)',
    isInternational: false,
    award: '🏆 한국음향학회 우수발표상'
  },
  {
    id: 'conf-esk-2023',
    title: '운전자 경험 설계를 위한 인간-굴착기 상호작용 모델 개발',
    conference: '대한인간공학회 춘계학술대회',
    shortConf: '대한인간공학회 춘계 2023',
    date: '2023.05',
    role: '4저자',
    isInternational: false
  },
  {
    id: 'conf-esk-2021',
    title: 'Effects of NDRT Interface Design on NDRT Performance and Motion Sickness',
    conference: '대한인간공학회 추계학술대회',
    shortConf: '대한인간공학회 추계 2021',
    date: '2021.10',
    role: '제1저자',
    isInternational: false
  }
];

export const PATENTS: Patent[] = [
  {
    id: 'patent-1',
    title: '만성요통 진단 결과를 제공하기 위한 인터랙티브 인터페이스 제공 방법, 장치 및 프로그램',
    status: '특허 (공개)',
    applicant: '서울대학교산학협력단',
    field: '인터랙티브 헬스케어 UX / XAI 진단 시스템',
    description: '환자의 요통 이력과 신체 척추 데이터를 기반으로 진단 근거를 직관적으로 시각화하고 상호작용형 가이드를 제공하는 UI/UX 시스템.'
  },
  {
    id: 'patent-2',
    title: '요통 여부에 따른 앉은 자세 교정 서비스 제공 방법, 장치 및 프로그램',
    status: '특허 (공개)',
    applicant: '서울대학교산학협력단',
    field: '체압 및 자세 센싱 기반 인터랙티브 피드백',
    description: '착석자의 둔부 압력 분포와 척추 정렬 상태를 실시간 감지하여 최적 착석 각도를 가이드하는 능동형 교정 알고리즘.'
  }
];

export const AWARDS: Award[] = [
  {
    id: 'award-1',
    title: '과학기술정보통신부 장관상 (대상)',
    issuer: '과학기술정보통신부 / 한국연구재단',
    date: '제5회 X-Corps Plus 페스티벌',
    rank: 'Grand Prize (장관상 대상)'
  },
  {
    id: 'award-2',
    title: '한국음향학회 우수발표상',
    issuer: '한국음향학회',
    date: '2024년도 추계학술발표대회',
    rank: 'Best Presentation Award'
  },
  {
    id: 'award-3',
    title: '대한인간공학회 우수포스터상',
    issuer: '대한인간공학회 (ESK)',
    date: '제12회 우수포스터 경진대회',
    rank: 'Best Poster Award'
  },
  {
    id: 'award-4',
    title: '서울대학교 공과대학 우수상',
    issuer: '서울대학교 공과대학',
    date: 'X-Corps 최종발표회',
    rank: 'College of Engineering Award'
  },
  {
    id: 'award-5',
    title: '서울대학교 공과대학 우수 강의조교상',
    issuer: '서울대학교 공과대학',
    date: '인간공학 및 산업공학 전공 강의',
    rank: 'Outstanding Teaching Assistant Award'
  }
];

export const EQUIPMENTS: ResearchEquipment[] = [
  {
    name: 'Tobii Pro Glasses 3',
    category: '시선 계측 (Eye Tracking)',
    spec: '웨어러블 아이트래커, 16배속 시야각, I-VT Fixation/Saccade 필터 알고리즘',
    usage: '자율주행 실차 및 드라이빙 시뮬레이터 주행 중 시선 체류시간(Dwell time), Glances, NDRT 인지 부하 측정',
    icon: 'Eye'
  },
  {
    name: 'Artinis OctaMon+',
    category: '뇌기능 계측 (fNIRS)',
    spec: '10 Optode 채널, 10Hz 샘플링, 신호 순도 지표 SCI ≥ 0.8 필터링',
    usage: '전두엽(PFC) 산소화 헤모글로빈(O2Hb) 농도 변화를 실시간 계측하여 멀미 및 인지 과부하의 생체 지표 규명',
    icon: 'Activity'
  },
  {
    name: 'HRV & 생체신호 분석',
    category: '자율신경계 반응 (HRV)',
    spec: 'ECG / PPG 기반 LF/HF Ratio, RMSSD, 심박변이도 시간·주파수 도메인 파싱',
    usage: '자율주행 중 급가감속 및 비운전과업 전환 시 교감/부교감 신경계 각성 상태 및 스트레스 정량화',
    icon: 'HeartPulse'
  },
  {
    name: '고급 통계 모델링 툴체인',
    category: '통계 & 알고리즘 (R / Python)',
    spec: '선형혼합모형 (LMER), LOESS 시계열 스무딩, 베타회귀 (Beta Regression), Repeated Measures ANOVA',
    usage: '인간 피험자 간 개인차(Random Effect)를 보정한 엄밀한 인지/감성 데이터 통계 검증',
    icon: 'Binary'
  },
  {
    name: 'Multi-Agent MLLM 파이프라인',
    category: 'AI & XAI 프레임워크',
    spec: 'LLM API 기반 8-Agent 오케스트레이션, HuggingFace, LangChain, RAG, XAI (SHAP/DecisionTree)',
    usage: '삼성전자 CXI 프로젝트 등에서 UI 스크린샷 기반 자동 UX 휴리스틱 평가 및 XAI 설명 뷰어 구축',
    icon: 'Cpu'
  }
];

export const EDUCATION = [
  {
    school: '서울대학교 (Seoul National University)',
    degree: '산업공학과 박사과정 (인간공학 전공)',
    period: '2020.03 – 현재',
    advisor: '박우진 교수 (Prof. Woojin Park)',
    note: '연구 분야: 자율주행 인터랙션, 인간-AI 상호작용(HAI), 생체신호 계측 및 멀미 저감'
  },
  {
    school: 'Shanghai Jiao Tong University (UM-SJTU Joint Institute)',
    degree: '기계공학 학사 (B.S. in Mechanical Engineering)',
    period: '2015 – 2019',
    advisor: '미시간대-상해교통대 공동학위 프로그램 (전과정 영어 강의)',
    note: '공학 설계 및 시스템 공학 기초 확립, 글로벌 커뮤니케이션 역량 배양'
  },
  {
    school: 'North Carolina State University (NCSU)',
    degree: '교환학생 (Study Abroad)',
    period: '2018',
    advisor: '미국 노스캐롤라이나 주립대학교',
    note: '산업공학 및 시스템 공학 전공 심화 교과목 이수'
  }
];

export const LANGUAGES = [
  { 
    lang: 'English (영어)', 
    score: 'OPIc IH (Fluent)', 
    note: '국제 학술대회 구두 발표(IEA, HFES) 및 영문 SCI급 저널 논문 단독 집필 가능' 
  },
  { 
    lang: 'Chinese (중국어)', 
    score: '능통 (Fluent)', 
    note: '상해교통대(SJTU) 4년 학사 졸업 기반 원활한 의사소통 및 글로벌 협업' 
  },
  { 
    lang: 'Korean (한국어)', 
    score: '모국어 (Native)', 
    note: '산학협력 프로젝트 및 국책 연구과제 리딩' 
  }
];
