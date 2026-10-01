// Google Form that stores survey responses.
// formId: the part after /forms/d/e/ in the form's "pre-filled link" (ends before /viewform).
// entries: the entry.NNNN ids for each question, taken from the same pre-filled link.
// Until formId and every entry id are set, the survey is shown but voting is disabled.
export const SURVEY_FORM = {
  formId: '1FAIpQLSeySXOvF8Wq-Z9i4oFJ7xfG9mDTQKozY6VFur03tMgOxSkp1Q',
  entries: {
    activity: '731716119',
    explanation: '1395536753',
  },
};

// `value` is sent to the Google Form and must match the form's option text exactly.
export const SURVEY_QUESTIONS = [
  {
    key: 'activity',
    ko: '완전 자율주행차를 타고 1시간 이동한다면, 무엇을 가장 하고 싶나요?',
    en: 'If you rode in a fully self-driving car for an hour, what would you most want to do?',
    options: [
      { value: '영상·콘텐츠 시청 / Watch videos', ko: '영상·콘텐츠 시청', en: 'Watch videos' },
      { value: '업무·메일 처리 / Work or email', ko: '업무·메일 처리', en: 'Work or email' },
      { value: '휴식·수면 / Rest or sleep', ko: '휴식·수면', en: 'Rest or sleep' },
      { value: '창밖 보기·대화 / Look outside or chat', ko: '창밖 보기·대화', en: 'Look outside or chat' },
    ],
  },
  {
    key: 'explanation',
    ko: 'AI가 중요한 판단(예: 진단)을 내릴 때, 어떤 설명이 가장 믿음이 가나요?',
    en: 'When an AI makes an important decision (e.g., a diagnosis), which explanation would you trust most?',
    options: [
      { value: '판단에 영향을 준 요인 / Factors behind the decision', ko: '판단에 영향을 준 요인', en: 'Factors behind the decision' },
      { value: '단계별 판단 규칙 / Step-by-step rules', ko: '단계별 판단 규칙', en: 'Step-by-step rules' },
      { value: '비슷한 과거 사례 / Similar past cases', ko: '비슷한 과거 사례', en: 'Similar past cases' },
      { value: '설명 없이 결과만 / Just the result', ko: '설명 없이 결과만', en: 'Just the result' },
    ],
  },
] as const;

export type SurveyKey = (typeof SURVEY_QUESTIONS)[number]['key'];
