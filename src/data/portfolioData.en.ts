import { Publication, IndustryProject, ConferencePresentation, Patent, Award, ResearchEquipment } from '../types';

export const PERSONAL_INFO = {
  nameKo: '김성민',
  nameEn: 'Sungmin Kim',
  titleKo: 'Ph.D. Candidate, Department of Industrial Engineering (Human Factors), Seoul National University',
  titleEn: 'Ph.D. Candidate in Human Factors & Human-AI Interaction',
  affiliationKo: 'Life Enhancement Technology Lab (LET Lab), Seoul National University (Advisor: Prof. Woojin Park)',
  affiliationEn: 'Life Enhancement Technology Lab, Seoul National University',
  advisor: 'Prof. Woojin Park',
  email: 'kimandie@snu.ac.kr',
  phone: '010-9824-3236',
  period: '2020.03 – Present',
  location: 'Seoul, Republic of Korea',
  dissertationTopic: 'A Human Factors Study of Occupant Non-Driving-Related Task Performance and Interaction Modalities in Autonomous Vehicles',
  coreStatement1: 'Humans are complex and nuanced. That is why precise, multimodal physiological measurement is essential.',
  coreStatement2: 'AI decisions are opaque. That is why intuitive explanations and interfaces are essential.',
  synthesis: 'Only by deeply understanding people can we design AI well — and only when AI makes its reasoning and evidence clear can people truly trust it and work alongside it.',
  dualFocus: [
    {
      num: '01',
      title: 'Physiological Measurement & UX for Autonomous Vehicle Occupants',
      desc: 'Using eye tracking (Tobii Pro Glasses 3) and multichannel physiological signals (10-ch fNIRS, HRV), I quantitatively analyze occupants’ cognitive load, vehicle motion sickness (VMS), and non-driving-related task (NDRT) performance in autonomous driving, and design in-vehicle interfaces that mitigate motion sickness.'
    },
    {
      num: '02',
      title: 'Explainable AI (XAI) & MLLM Multi-Agent Interfaces',
      desc: 'In medical diagnosis and mobile contexts, I build Decision Tree, Example-Based, and Feature Attribution XAI interfaces that help users intuitively interpret and trust AI decision-making, along with an 8-agent MLLM pipeline for automated heuristic evaluation.'
    }
  ]
};

export const PUBLICATIONS: Publication[] = [
  {
    id: 'thms-2026',
    title: 'Effects of NDRT Interface Display and Control Modalities on Motion Sickness and Preference during Autonomous Driving',
    journal: 'IEEE Transactions on Human-Machine Systems (THMS)',
    role: 'First Author',
    roleType: '1st',
    jcr: 'JCR Q2 (IF 4.4)',
    if: 4.4,
    date: '2026.01',
    doi: '10.1109/THMS.2025.xxxxxxx',
    isFirstAuthor: true,
    abstract: 'An empirical study that uses multimodal physiological measurement to quantify how display placement (HUD, center stack, cluster) and control modality (touch, gesture, voice) for non-driving-related tasks (NDRTs) affect occupants’ motion sickness and preference in autonomous vehicles.',
    keywords: ['Autonomous Driving', 'NDRT Interface', 'Motion Sickness', 'Display Modality', 'fNIRS', 'Human-Machine Systems'],
    metrics: 'IEEE THMS · IF 4.4 · JCR Q2 Top Rank',
    affiliations: 'Seoul National University LET Lab'
  },
  {
    id: 'ijhci-2026',
    title: 'Evaluating Explanation Strategies in Patient-Facing Diagnostic AI: A Comparative Study of Decision Tree, Example-Based, and Feature Attribution Approaches',
    journal: 'International Journal of Human-Computer Interaction (IJHCI)',
    role: 'Co-Author',
    roleType: 'Co-Author',
    jcr: 'JCR Q1',
    date: '2026.03',
    abstract: 'A comparative evaluation of how three explanation strategies — decision tree, example-based, and feature attribution — in patient-facing diagnostic AI systems affect users’ understanding, trust formation, and decision confidence.',
    keywords: ['Explainable AI (XAI)', 'Diagnostic AI', 'Decision Tree', 'Feature Attribution', 'User Trust', 'Healthcare UX'],
    metrics: 'IJHCI · JCR Q1 Flagship Journal',
    affiliations: 'Seoul National University & IITP Project Team'
  },
  {
    id: 'ae-2024',
    title: 'Developing Predictive Models of User Affective Responses and a Grading System for Foldable Smartphone Crease Patterns',
    journal: 'Applied Ergonomics',
    role: 'Fourth Author',
    roleType: '4th',
    jcr: 'JCR Q1 (Top Tier)',
    date: '2024.12',
    abstract: 'A study that models, using linear mixed-effects regression (LMER), how the geometric parameters of hinge creases on foldable smartphones affect users’ perceived visual quality and affective responses, and establishes a quantitative quality grading system.',
    keywords: ['Foldable Display', 'Crease Visibility', 'Affective Ergonomics', 'LMER Modeling', 'Quality Grading'],
    metrics: 'Applied Ergonomics · Ergonomics JCR Q1',
    affiliations: 'Seoul National University & Samsung Display'
  },
  {
    id: 'chi-2026',
    title: 'Beyond One-Size-Fits-All: Individual Differences in the Effectiveness of Visual Motion Cues for Mitigating Motion Sickness in a Moving Vehicle',
    journal: 'ACM CHI 2026 Late-Breaking Work (LBW)',
    role: 'Co-Second Author',
    roleType: '2nd',
    jcr: 'Top HCI Conference',
    date: '2026.04',
    abstract: 'A real-vehicle study analyzing the effectiveness of visual motion cues (VMC) in reducing occupant motion sickness and the role of individual differences (motion sickness susceptibility, visual dependence), and proposing a personalized in-vehicle UI/UX algorithm.',
    keywords: ['Visual Motion Cues (VMC)', 'Vehicle Motion Sickness', 'In-Vehicle UX', 'CHI LBW', 'Individual Differences'],
    metrics: 'ACM CHI 2026 · Joint research with Hyundai Mobis / Hyundai Motor',
    affiliations: 'Seoul National University & Hyundai Mobis / Hyundai Motor'
  }
];

export const INDUSTRY_PROJECTS: IndustryProject[] = [
  {
    id: 'samsung-cxi-2025',
    partner: 'Samsung Electronics CXI Team',
    partnerShort: 'Samsung CXI',
    partnerCategory: 'Samsung',
    title: 'Automating UX Heuristic Evaluation with MLLMs',
    period: '2025.01 – Present',
    description: 'Designed a pipeline for screenshot-based context inference and automatic UX issue detection, and built an evaluation process on an 8-agent architecture.',
    contributions: [
      'Multimodal LLM-based context recognition and component hierarchy analysis of mobile and home appliance UI screenshots',
      'Built a collaborative evaluation workflow of eight specialized agents (information architecture, accessibility, cognitive load, consistency, error prevention, etc.)',
      'Reduced evaluation time by 75% versus conventional qualitative expert review and achieved a 92% heuristic defect detection rate'
    ],
    tags: ['Multimodal LLM', '8-Agent Architecture', 'UX Heuristics', 'Automated QA', 'Samsung Electronics'],
    badgeColor: '#e48600'
  },
  {
    id: 'samsung-mx-multidevice',
    partner: 'Samsung Electronics MX Business',
    partnerShort: 'Samsung MX',
    partnerCategory: 'Samsung',
    title: 'Multi-Device User Experience Research',
    period: '2024',
    description: 'Research on optimizing users’ cognitive transitions and task continuity across a connected ecosystem of smartphones, tablets, and wearables.',
    contributions: [
      'Measured cognitive load during cross-device context switching and mapped user journeys',
      'Established interaction guidelines for cross-device notifications and handoff'
    ],
    tags: ['Multi-Device UX', 'Ecosystem Continuity', 'Task Handoff', 'Samsung MX'],
    badgeColor: '#e48600'
  },
  {
    id: 'samsung-mx-needs',
    partner: 'Samsung Electronics MX Business',
    partnerShort: 'Samsung MX',
    partnerCategory: 'Samsung',
    title: 'User Needs & Journey Analysis for Mobile Experiences',
    period: '2023',
    description: 'In-depth quantitative and qualitative analysis of usage contexts across next-generation Galaxy user segments, identifying key pain points.',
    contributions: [
      'Modeled experience journeys based on users’ everyday behavioral data',
      'Delivered interaction improvement proposals for core features, which were adopted in practice'
    ],
    tags: ['User Needs', 'Journey Mapping', 'Quantitative Survey', 'In-depth Interview'],
    badgeColor: '#e48600'
  },
  {
    id: 'samsung-display-crease',
    partner: 'Samsung Display',
    partnerShort: 'Samsung Display',
    partnerCategory: 'Samsung',
    title: 'Effects of Foldable Display Crease Visibility on Perceived Quality',
    period: '2023 – 2024',
    description: 'Quantified visual annoyance as a function of light reflection angle and hinge crease depth, and developed an affective quality prediction model (published in Applied Ergonomics).',
    contributions: [
      'Designed psychophysics experiments integrated with precision optical measurement equipment',
      'Derived a quantitative crease quality grading formula using linear mixed-effects models (LMER)'
    ],
    tags: ['Foldable Display', 'Psychophysics', 'LMER Modeling', 'Applied Ergonomics'],
    badgeColor: '#e48600'
  },
  {
    id: 'samsung-da-vacuum',
    partner: 'Samsung Electronics DA (Digital Appliances) Business',
    partnerShort: 'Samsung DA',
    partnerCategory: 'Samsung',
    title: 'Ergonomic Design Guidelines for Stick Vacuum Cleaners',
    period: '2022',
    description: 'Ergonomic optimization of the grip and center of mass of premium cordless vacuums through wrist and shoulder electromyography (EMG) and grip force analysis.',
    contributions: [
      'Measured and analyzed upper-limb muscle fatigue (EMG) across users of diverse body types',
      'Developed ergonomic design guidelines for optimal handle angle and grip diameter'
    ],
    tags: ['Ergonomics Design', 'EMG Analysis', 'Grip Comfort', 'Home Appliance'],
    badgeColor: '#e48600'
  },
  {
    id: 'hyundai-group-mobility',
    partner: 'Hyundai Motor Group',
    partnerShort: 'Hyundai Motor Group',
    partnerCategory: 'Hyundai',
    title: 'Identifying Occupant UX Acceptance Factors for Future Mobility Architectures',
    period: '2023 – 2024',
    description: 'Developed occupant acceptance and interaction models for reconfigurable interior spaces in software-defined vehicles (SDV) and purpose-built vehicles (PBV).',
    contributions: [
      'Evaluated spatial perception across reconfigurable seat layouts and display placements',
      'Structural equation modeling of occupant comfort and safety acceptance'
    ],
    tags: ['Future Mobility', 'PBV Architecture', 'UX Acceptance', 'Spatial Ergonomics'],
    badgeColor: '#206479'
  },
  {
    id: 'hyundai-mobis-vmc',
    partner: 'Hyundai Mobis',
    partnerShort: 'Hyundai Mobis',
    partnerCategory: 'Hyundai',
    title: 'Motion Sickness Mitigating Display UI/UX: Design, Real-Vehicle Implementation & Validation (VMC)',
    period: '2024 – 2025',
    description: 'Designed visual motion cue (VMC) algorithms synchronized in real time with vehicle inertia and trajectory, and validated them in on-road driving (CHI 2026 LBW).',
    contributions: [
      'Built a dynamic UI graphics engine driven by acceleration and angular velocity from the vehicle CAN bus',
      'Measured occupants’ subjective motion sickness (MSIS) and fNIRS hemodynamic responses during on-road driving'
    ],
    tags: ['Visual Motion Cues', 'VMC Engine', 'Real-vehicle Test', 'CHI 2026 LBW'],
    badgeColor: '#206479'
  },
  {
    id: 'hyundai-ngv-ev',
    partner: 'Hyundai Motor Namyang R&D Center (NGV)',
    partnerShort: 'Hyundai NGV',
    partnerCategory: 'Hyundai',
    title: 'Identifying EV Acceleration/Deceleration Profiles that Minimize Occupant Discomfort',
    period: '2022 – 2023',
    description: 'Precisely characterized how jerk profiles during EV regenerative braking and abrupt acceleration/deceleration affect occupants’ body sway and motion sickness.',
    contributions: [
      'Measured occupant head motion with 6-DoF IMUs in response to EV-specific torque characteristics',
      'Derived a two-dimensional acceleration–jerk tolerance map of discomfort thresholds (Safety & Comfort Boundary)'
    ],
    tags: ['EV Regenerative Braking', 'Jerk Profile', 'Motion Sickness', 'IMU Motion Capture'],
    badgeColor: '#206479'
  },
  {
    id: 'iitp-xai-grant',
    partner: 'Ministry of Science and ICT (MSIT) – IITP National R&D Project',
    partnerShort: 'IITP (MSIT)',
    partnerCategory: 'National',
    title: 'Development and Evaluation of Explainable AI (XAI) Interfaces',
    period: '2022.04 – 2023.12',
    description: 'Developed an explanation UI/UX pipeline that enables lay users and domain experts to intuitively understand the decision rationale of complex machine learning and deep learning models (published in IJHCI).',
    contributions: [
      'Prototyped SHAP/LIME-based feature attribution and decision tree–based rule explanation UIs',
      'Designed experiments and conducted statistical analyses measuring user trust and cognitive overload'
    ],
    tags: ['Explainable AI', 'XAI Interface', 'User Trust', 'IJHCI Publication', 'National Grant'],
    badgeColor: '#ecab37'
  },
  {
    id: 'nrf-ar-hmd',
    partner: 'National Research Foundation of Korea (NRF)',
    partnerShort: 'NRF',
    partnerCategory: 'National',
    title: 'Industrial Ergonomic Risk Assessment of AR HMD-Assisted Assembly Work',
    period: '2021 – 2022',
    description: 'Quantified workers’ neck loading (RULA/REBA) and visual fatigue during industrial tasks performed while wearing smart glasses and augmented reality HMDs.',
    contributions: [
      'Implemented a task risk visualization toolchain integrating 3D motion capture and eye tracking',
      'Established guidelines for HMD interface placement in industrial settings'
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
    role: 'First Author (Oral Presentation)',
    isInternational: true
  },
  {
    id: 'conf-iea-2024-2',
    title: 'Metrics for Comprehensive Evaluation of Vehicle Motion Sickness',
    conference: '22nd Triennial Congress of the International Ergonomics Association (IEA 2024)',
    shortConf: 'IEA 2024 (Jeju, Korea)',
    date: '2024.08',
    role: 'Second Author',
    isInternational: true
  },
  {
    id: 'conf-hfes-2024',
    title: 'Impacts of Non-Driving-Related Task Interface Design on Time Change',
    conference: 'Human Factors and Ergonomics Society Annual Meeting (HFES 2024)',
    shortConf: 'HFES 2024 (Phoenix, USA)',
    date: '2024.09',
    role: 'First Author (Oral Presentation)',
    isInternational: true
  },
  {
    id: 'conf-hfes-2023',
    title: 'Effects of NDRT Interface Display and Control Modalities on Motion Sickness',
    conference: 'Human Factors and Ergonomics Society Annual Meeting (HFES 2023)',
    shortConf: 'HFES 2023 (Washington D.C., USA)',
    date: '2023.09',
    role: 'First Author (Oral Presentation)',
    isInternational: true
  },
  {
    id: 'conf-jes-2025-1',
    title: 'Effects of Display-Control Modality on Workload During Non-Driving Related Task',
    conference: 'The 66th Annual Conference of the Japan Human Factors and Ergonomics Society (JES 2025)',
    shortConf: 'JES 2025 (Japan)',
    date: '2025.05',
    role: 'First Author',
    isInternational: true
  },
  {
    id: 'conf-jes-2025-2',
    title: 'Designing Non-Driving-Related Tasks for Evaluating Motion Sickness Mitigating Visual Displays',
    conference: 'The 66th Annual Conference of the Japan Human Factors and Ergonomics Society (JES 2025)',
    shortConf: 'JES 2025 (Japan)',
    date: '2025.05',
    role: 'Second Author',
    isInternational: true
  },
  {
    id: 'conf-ahfe-2023',
    title: 'Effects of Crease Features on Crease Visibility and Goodness of Smartphone Design',
    conference: 'International Conference on Applied Human Factors and Ergonomics (AHFE International)',
    shortConf: 'AHFE 2023 (San Francisco, USA)',
    date: '2023.07',
    role: 'Fourth Author',
    isInternational: true
  },
  {
    id: 'conf-chi-2026',
    title: 'Beyond One-Size-Fits-All: Individual Differences in the Effectiveness of Visual Motion Cues for Mitigating Motion Sickness in a Moving Vehicle',
    conference: 'ACM CHI 2026 Late-Breaking Work',
    shortConf: 'ACM CHI 2026',
    date: '2026.04',
    role: 'Co-Second Author (Joint with Hyundai Mobis & Hyundai Motor)',
    isInternational: true
  },
  {
    id: 'conf-ask-2024-spring',
    title: 'Changes in the Time Profile of Motion Sickness During Autonomous Driving',
    conference: 'Acoustical Society of Korea Spring Conference',
    shortConf: 'ASK Spring 2024',
    date: '2024.04',
    role: 'First Author',
    isInternational: false
  },
  {
    id: 'conf-ask-2024-fall',
    title: 'Measuring Patterns of Occupant Motion Sickness in Autonomous Driving',
    conference: 'Acoustical Society of Korea Fall Conference (Best Presentation Award)',
    shortConf: 'ASK Fall 2024',
    date: '2024.10',
    role: 'First Author (Best Presentation Award)',
    isInternational: false,
    award: '🏆 Best Presentation Award, Acoustical Society of Korea'
  },
  {
    id: 'conf-esk-2023',
    title: 'Developing a Human–Excavator Interaction Model for Operator Experience Design',
    conference: 'Ergonomics Society of Korea (ESK) Spring Conference',
    shortConf: 'ESK Spring 2023',
    date: '2023.05',
    role: 'Fourth Author',
    isInternational: false
  },
  {
    id: 'conf-esk-2021',
    title: 'Effects of NDRT Interface Design on NDRT Performance and Motion Sickness',
    conference: 'Ergonomics Society of Korea (ESK) Fall Conference',
    shortConf: 'ESK Fall 2021',
    date: '2021.10',
    role: 'First Author',
    isInternational: false
  }
];

export const PATENTS: Patent[] = [
  {
    id: 'patent-1',
    title: 'Method, Apparatus, and Program for Providing an Interactive Interface for Chronic Low Back Pain Diagnosis Results',
    status: 'Patent (Published)',
    applicant: 'SNU R&DB Foundation',
    field: 'Interactive Healthcare UX / XAI Diagnostic Systems',
    description: 'A UI/UX system that intuitively visualizes diagnostic evidence based on a patient’s low back pain history and spinal data, and provides interactive guidance.'
  },
  {
    id: 'patent-2',
    title: 'Method, Apparatus, and Program for Providing a Sitting Posture Correction Service Based on Low Back Pain Status',
    status: 'Patent (Published)',
    applicant: 'SNU R&DB Foundation',
    field: 'Interactive Feedback Based on Seat Pressure and Posture Sensing',
    description: 'An active correction algorithm that detects a seated user’s buttock pressure distribution and spinal alignment in real time and guides them toward an optimal sitting angle.'
  }
];

export const AWARDS: Award[] = [
  {
    id: 'award-1',
    title: 'Minister of Science and ICT Award (Grand Prize)',
    issuer: 'Ministry of Science and ICT (MSIT) / National Research Foundation of Korea (NRF)',
    date: '5th X-Corps Plus Festival',
    rank: 'Grand Prize (Minister’s Award)'
  },
  {
    id: 'award-2',
    title: 'Best Presentation Award, Acoustical Society of Korea',
    issuer: 'Acoustical Society of Korea',
    date: '2024 Fall Conference',
    rank: 'Best Presentation Award'
  },
  {
    id: 'award-3',
    title: 'Best Poster Award, Ergonomics Society of Korea',
    issuer: 'Ergonomics Society of Korea (ESK)',
    date: '12th Best Poster Competition',
    rank: 'Best Poster Award'
  },
  {
    id: 'award-4',
    title: 'Excellence Award, College of Engineering, Seoul National University',
    issuer: 'College of Engineering, Seoul National University',
    date: 'X-Corps Final Presentation',
    rank: 'College of Engineering Award'
  },
  {
    id: 'award-5',
    title: 'Outstanding Teaching Assistant Award, College of Engineering, Seoul National University',
    issuer: 'College of Engineering, Seoul National University',
    date: 'Human Factors & Industrial Engineering Courses',
    rank: 'Outstanding Teaching Assistant Award'
  }
];

export const EQUIPMENTS: ResearchEquipment[] = [
  {
    name: 'Tobii Pro Glasses 3',
    category: 'Eye Tracking',
    spec: 'Wearable eye tracker, wide-angle scene camera, I-VT fixation/saccade filter algorithm',
    usage: 'Measuring dwell time, glances, and NDRT cognitive load during on-road autonomous driving and driving simulator sessions',
    icon: 'Eye'
  },
  {
    name: 'Artinis OctaMon+',
    category: 'Brain Activity (fNIRS)',
    spec: '10 optode channels, 10 Hz sampling, signal quality filtering at SCI ≥ 0.8',
    usage: 'Real-time measurement of oxygenated hemoglobin (O2Hb) changes in the prefrontal cortex (PFC) to identify physiological markers of motion sickness and cognitive overload',
    icon: 'Activity'
  },
  {
    name: 'HRV & Physiological Signal Analysis',
    category: 'Autonomic Nervous System (HRV)',
    spec: 'ECG/PPG-based LF/HF ratio, RMSSD, and time- and frequency-domain heart rate variability analysis',
    usage: 'Quantifying sympathetic/parasympathetic arousal and stress during abrupt acceleration/deceleration and NDRT transitions in autonomous driving',
    icon: 'HeartPulse'
  },
  {
    name: 'Advanced Statistical Modeling Toolchain',
    category: 'Statistics & Algorithms (R / Python)',
    spec: 'Linear mixed-effects models (LMER), LOESS time-series smoothing, beta regression, repeated-measures ANOVA',
    usage: 'Rigorous statistical validation of cognitive and affective data, accounting for individual differences between participants (random effects)',
    icon: 'Binary'
  },
  {
    name: 'Multi-Agent MLLM Pipeline',
    category: 'AI & XAI Frameworks',
    spec: 'LLM API-based 8-agent orchestration, HuggingFace, LangChain, RAG, XAI (SHAP/Decision Tree)',
    usage: 'Building automated screenshot-based UX heuristic evaluation and XAI explanation viewers, including for the Samsung Electronics CXI project',
    icon: 'Cpu'
  }
];

export const EDUCATION = [
  {
    school: 'Seoul National University',
    degree: 'Ph.D. Candidate, Industrial Engineering (Human Factors)',
    period: '2020.03 – Present',
    advisor: 'Prof. Woojin Park',
    note: 'Research areas: autonomous vehicle interaction, human-AI interaction (HAI), physiological measurement, and motion sickness mitigation'
  },
  {
    school: 'Shanghai Jiao Tong University (UM-SJTU Joint Institute)',
    degree: 'B.S. in Mechanical Engineering',
    period: '2015 – 2019',
    advisor: 'University of Michigan – Shanghai Jiao Tong University Joint Institute (all courses taught in English)',
    note: 'Built a foundation in engineering design and systems engineering, and developed global communication skills'
  },
  {
    school: 'North Carolina State University (NCSU)',
    degree: 'Exchange Student (Study Abroad)',
    period: '2018',
    advisor: 'North Carolina State University, USA',
    note: 'Completed advanced coursework in industrial and systems engineering'
  }
];

export const LANGUAGES = [
  {
    lang: 'English',
    score: 'OPIc IH (Fluent)',
    note: 'Oral presentations at international conferences (IEA, HFES) and independent authorship of SCI journal papers in English'
  },
  {
    lang: 'Chinese',
    score: 'Fluent',
    note: 'Fluent communication and global collaboration, built on four years of undergraduate study at SJTU'
  },
  {
    lang: 'Korean',
    score: 'Native',
    note: 'Leading industry-academia collaboration projects and national research projects'
  }
];
