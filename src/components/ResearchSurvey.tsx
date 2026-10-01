import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { useLang, useT } from '../i18n';
import { SURVEY_FORM, SURVEY_QUESTIONS, SurveyKey } from '../data/surveyConfig';

const DONE_KEY = 'portfolio-survey-done';

function readDone() {
  try {
    return localStorage.getItem(DONE_KEY) === '1';
  } catch {
    return false;
  }
}

export const ResearchSurvey: React.FC<{ footer?: React.ReactNode }> = ({ footer }) => {
  const { lang } = useLang();
  const t = useT();
  const [answers, setAnswers] = useState<Partial<Record<SurveyKey, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>(readDone() ? 'done' : 'idle');

  const configured = Boolean(SURVEY_FORM.formId);
  const complete = SURVEY_QUESTIONS.every((q) => answers[q.key]);
  const locked = status === 'sending' || status === 'done';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!configured || !complete || locked) return;
    setStatus('sending');
    const body = new URLSearchParams();
    for (const q of SURVEY_QUESTIONS) {
      body.append(`entry.${SURVEY_FORM.entries[q.key]}`, answers[q.key]!);
    }
    try {
      // Google Forms does not send CORS headers, so the response is opaque; a network error still throws.
      await fetch(`https://docs.google.com/forms/d/e/${SURVEY_FORM.formId}/formResponse`, {
        method: 'POST',
        mode: 'no-cors',
        body,
      });
      try {
        localStorage.setItem(DONE_KEY, '1');
      } catch {}
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  const message =
    status === 'done'
      ? t('✓ 응답해 주셔서 감사합니다!', '✓ Thank you for your response!')
      : status === 'error'
        ? t('전송에 실패했어요. 잠시 후 다시 시도해 주세요.', 'Could not send. Please try again later.')
        : !configured
          ? t('설문 준비 중입니다.', 'The survey opens soon.')
          : t('두 질문에 답한 뒤 제출해 주세요. 익명으로 수집됩니다.', 'Answer both questions, then submit. Responses are anonymous.');

  return (
    <div className="modern-card p-6 bg-white border border-zinc-200 flex flex-col">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-100">
        <HelpCircle className="w-4 h-4 text-blue-600" />
        <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide">
          {t('짧은 연구 설문', 'Quick Research Survey')}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs text-zinc-800">
        {SURVEY_QUESTIONS.map((q, qi) => (
          <fieldset key={q.key} className="space-y-1.5" disabled={locked}>
            <legend className="font-bold leading-relaxed text-zinc-900 mb-1.5">
              Q{qi + 1}. {lang === 'ko' ? q.ko : q.en}
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {q.options.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                    answers[q.key] === opt.value ? 'border-blue-300 bg-blue-50' : 'border-zinc-200 bg-zinc-50 hover:bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name={q.key}
                    value={opt.value}
                    checked={answers[q.key] === opt.value}
                    onChange={() => setAnswers((prev) => ({ ...prev, [q.key]: opt.value }))}
                    className="accent-blue-600 cursor-pointer"
                  />
                  <span className="font-medium">{lang === 'ko' ? opt.ko : opt.en}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        <div className="flex items-center justify-between gap-3 pt-1">
          <span className="text-xs text-zinc-500 font-medium">{message}</span>
          <button
            type="submit"
            disabled={!configured || !complete || locked}
            className="px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 bg-blue-600 hover:bg-blue-700 text-white shadow-xs cursor-pointer disabled:bg-zinc-200 disabled:text-zinc-500 disabled:cursor-not-allowed disabled:shadow-none"
          >
            {status === 'done' ? t('제출 완료', 'Submitted') : status === 'sending' ? t('전송 중…', 'Sending…') : t('제출하기', 'Submit')}
          </button>
        </div>
      </form>

      {footer}
    </div>
  );
};
