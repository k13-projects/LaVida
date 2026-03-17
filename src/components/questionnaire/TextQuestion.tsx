import { useState } from "react";
import type { TextQuestion as TextQuestionType } from "@/data/questionnaireData";

interface TextQuestionProps {
  question: TextQuestionType;
  currentAnswer?: Record<string, string>;
  onAnswer: (value: Record<string, string>) => void;
  onBack: () => void;
  questionNumber: number;
  totalQuestions: number;
}

const TextQuestion = ({
  question,
  currentAnswer,
  onAnswer,
  onBack,
  questionNumber,
  totalQuestions,
}: TextQuestionProps) => {
  const [values, setValues] = useState<Record<string, string>>(() => {
    if (currentAnswer) return currentAnswer;
    // Pre-fill with default values so users can confirm without retyping
    const defaults: Record<string, string> = {};
    question.fields.forEach((field) => {
      if (field.defaultValue) defaults[field.key] = field.defaultValue;
    });
    return defaults;
  });

  const handleChange = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnswer(values);
  };

  const hasAnyValue = Object.values(values).some((v) => v.trim());

  return (
    <div className="px-4 sm:px-6 animate-fade-in">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-8">
        {/* Back + counter */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={onBack}
            className="text-olive-dark font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            Back
          </button>
          <span className="text-sm text-foreground/60 font-semibold">
            {questionNumber} of {totalQuestions}
          </span>
        </div>

        {/* Question — stands out */}
        <div className="mb-6 bg-olive/5 rounded-2xl p-5 border border-olive/10">
          <h2 className="text-2xl font-extrabold text-olive-dark mb-2">
            {question.title}
          </h2>
          <p className="text-foreground/80 text-[15px] font-medium leading-relaxed">
            {question.description}
          </p>
        </div>

        {/* Text fields */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {question.fields.map((field) => (
            <div key={field.key}>
              <label
                htmlFor={field.key}
                className="block text-sm font-bold text-foreground/90 mb-2"
              >
                {field.label}
              </label>
              <input
                id={field.key}
                type="text"
                value={values[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                className="w-full px-4 py-3.5 text-sm font-medium rounded-xl border border-foreground/10 focus:border-olive focus:outline-none transition-colors bg-white shadow-md"
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={!hasAnyValue}
            className="w-full py-4 px-6 rounded-xl text-lg font-bold text-white transition-all duration-200 mt-4 disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
            style={{ backgroundColor: "#9F9D58" }}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default TextQuestion;
