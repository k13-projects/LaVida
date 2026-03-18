import { useState, useRef, useEffect } from "react";
import { Check, MessageSquarePlus, Info } from "lucide-react";
import type { ChoiceQuestion as ChoiceQuestionType } from "@/data/questionnaireData";
import { CUSTOM_CHAR_LIMIT } from "@/data/questionnaireData";

interface ChoiceQuestionProps {
  question: ChoiceQuestionType;
  currentAnswer?: string;
  onAnswer: (value: string) => void;
  onBack: () => void;
  questionNumber: number;
  totalQuestions: number;
}

const ChoiceQuestion = ({
  question,
  currentAnswer,
  onAnswer,
  onBack,
  questionNumber,
  totalQuestions,
}: ChoiceQuestionProps) => {
  const isCustomPrev =
    currentAnswer &&
    currentAnswer.startsWith("custom:") ? currentAnswer.slice(7) : "";
  const [selected, setSelected] = useState<string | null>(
    currentAnswer
      ? currentAnswer.startsWith("custom:")
        ? "custom"
        : currentAnswer
      : null
  );
  const [customText, setCustomText] = useState(isCustomPrev);
  const [showCustomInput, setShowCustomInput] = useState(!!isCustomPrev);
  const [tooltipId, setTooltipId] = useState<string | null>(null);
  const tooltipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const customInputRef = useRef<HTMLInputElement>(null);

  // Focus custom input when it appears
  useEffect(() => {
    if (showCustomInput && customInputRef.current) {
      customInputRef.current.focus();
    }
  }, [showCustomInput]);

  // Cleanup tooltip timer
  useEffect(() => {
    return () => {
      if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
    };
  }, []);

  const [optionInputText, setOptionInputText] = useState(
    currentAnswer && !currentAnswer.startsWith("custom:")
      ? (() => {
          const idx = currentAnswer.indexOf(":");
          const val = idx > -1 ? currentAnswer.slice(0, idx) : currentAnswer;
          const opt = question.options.find((o) => o.value === val && o.inputPlaceholder);
          return opt && idx > -1 ? currentAnswer.slice(idx + 1) : "";
        })()
      : ""
  );
  const optionInputRef = useRef<HTMLTextAreaElement>(null);

  const selectedOptionHasInput = selected
    ? question.options.find((o) => o.value === selected && o.inputPlaceholder)
    : null;

  useEffect(() => {
    if (selectedOptionHasInput && optionInputRef.current) {
      optionInputRef.current.focus();
    }
  }, [selectedOptionHasInput]);

  const handleSelect = (value: string) => {
    if (value === "custom") {
      setSelected("custom");
      setShowCustomInput(true);
      return;
    }
    const opt = question.options.find((o) => o.value === value);
    if (opt?.inputPlaceholder) {
      setSelected(value);
      setShowCustomInput(false);
      setCustomText("");
      return; // don't auto-advance, show input
    }
    setSelected(value);
    setShowCustomInput(false);
    setCustomText("");
    setOptionInputText("");
    setTimeout(() => onAnswer(value), 350);
  };

  const handleOptionInputSubmit = () => {
    if (selected && optionInputText.trim()) {
      onAnswer(`${selected}:${optionInputText.trim()}`);
    }
  };

  const handleCustomSubmit = () => {
    if (customText.trim()) {
      onAnswer(`custom:${customText.trim()}`);
    }
  };

  const handleTooltipEnter = (optionValue: string) => {
    tooltipTimerRef.current = setTimeout(() => {
      setTooltipId(optionValue);
    }, 2000);
  };

  const handleTooltipLeave = () => {
    if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
    setTooltipId(null);
  };

  return (
    <div className="px-4 sm:px-6 animate-fade-in">
      <div className="max-w-md lg:max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-8">
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
          {question.description.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className={`text-foreground/80 text-[15px] font-medium leading-relaxed ${i > 0 ? "mt-3" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Preview image */}
        {question.image && (
          <div className="mb-6">
            <div className="rounded-2xl overflow-hidden shadow-md border border-foreground/5">
              <img
                src={`${import.meta.env.BASE_URL}${question.image}`}
                alt={question.title}
                className="w-full max-h-48 object-cover"
              />
            </div>
            {question.imageCaption && (
              <p className="text-xs text-foreground/50 font-medium mt-2 text-center italic">
                {question.imageCaption}
              </p>
            )}
          </div>
        )}

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selected === option.value;
            const showTooltip = tooltipId === option.value && option.tooltip;
            return (
              <div key={option.value} className="relative">
                <button
                  onClick={() => handleSelect(option.value)}
                  onMouseEnter={() => option.tooltip && handleTooltipEnter(option.value)}
                  onMouseLeave={handleTooltipLeave}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 active:scale-[0.98] ${
                    isSelected
                      ? "border-olive bg-olive/10 shadow-lg ring-1 ring-olive/30"
                      : "border-foreground/10 bg-white hover:border-olive/40 shadow-md hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors duration-200 ${
                        isSelected
                          ? "bg-olive text-white"
                          : "bg-olive/10 text-olive-dark"
                      }`}
                    >
                      {isSelected ? <Check className="w-5 h-5" /> : option.label}
                    </div>
                    <div className="flex-1 pt-1.5">
                      <p className={`text-[15px] leading-relaxed font-semibold ${isSelected ? "text-olive-dark" : "text-foreground/90"}`}>
                        {option.description}
                      </p>
                    </div>
                    {option.tooltip && (
                      <Info className="w-4 h-4 text-foreground/25 flex-shrink-0 mt-2.5" />
                    )}
                  </div>
                </button>

                {/* Tooltip */}
                {showTooltip && (
                  <div
                    className="absolute left-4 right-4 -bottom-2 translate-y-full z-20 bg-olive-dark text-white text-xs font-medium rounded-xl p-3 shadow-xl animate-fade-in leading-relaxed"
                    onMouseEnter={() => setTooltipId(option.value)}
                    onMouseLeave={handleTooltipLeave}
                  >
                    {option.tooltip}
                    <div className="absolute -top-1.5 left-8 w-3 h-3 bg-olive-dark rotate-45" />
                  </div>
                )}

                {/* Inline input for options that need text */}
                {isSelected && option.inputPlaceholder && (
                  <div className="mt-3 animate-fade-in">
                    <textarea
                      ref={optionInputRef}
                      value={optionInputText}
                      onChange={(e) => setOptionInputText(e.target.value)}
                      placeholder={option.inputPlaceholder}
                      rows={3}
                      className="w-full px-4 py-3 text-sm font-medium rounded-xl border border-olive/20 focus:border-olive focus:outline-none transition-colors bg-white shadow-sm resize-none"
                    />
                    <button
                      onClick={handleOptionInputSubmit}
                      disabled={!optionInputText.trim()}
                      className="mt-2 w-full py-3 rounded-xl text-sm font-bold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                      style={{ backgroundColor: "#9F9D58" }}
                    >
                      Continue
                    </button>
                  </div>
                )}
              </div>
            );
          })}

          {/* Custom option C */}
          <div className="relative">
            <button
              onClick={() => handleSelect("custom")}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 active:scale-[0.98] ${
                selected === "custom"
                  ? "border-olive bg-olive/10 shadow-lg ring-1 ring-olive/30"
                  : "border-dashed border-foreground/15 bg-white/50 hover:border-olive/40 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors duration-200 ${
                    selected === "custom"
                      ? "bg-olive text-white"
                      : "bg-olive/10 text-olive-dark"
                  }`}
                >
                  {selected === "custom" ? <Check className="w-5 h-5" /> : <MessageSquarePlus className="w-4 h-4" />}
                </div>
                <p className={`text-[15px] leading-relaxed pt-1.5 font-semibold ${selected === "custom" ? "text-olive-dark" : "text-foreground/50"}`}>
                  Other — type your own answer
                </p>
              </div>
            </button>
          </div>

          {/* Custom text input */}
          {showCustomInput && (
            <div className="pl-14 pr-1 animate-fade-in">
              <div className="relative">
                <input
                  ref={customInputRef}
                  type="text"
                  value={customText}
                  onChange={(e) => {
                    if (e.target.value.length <= CUSTOM_CHAR_LIMIT)
                      setCustomText(e.target.value);
                  }}
                  placeholder={question.customPlaceholder || "Type your answer..."}
                  maxLength={CUSTOM_CHAR_LIMIT}
                  className="w-full px-4 py-3 text-sm font-medium rounded-xl border border-olive/20 focus:border-olive focus:outline-none transition-colors bg-white shadow-sm"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleCustomSubmit();
                  }}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-foreground/40 font-medium">
                  {customText.length}/{CUSTOM_CHAR_LIMIT}
                </span>
              </div>
              <button
                onClick={handleCustomSubmit}
                disabled={!customText.trim()}
                className="mt-3 w-full py-3 rounded-xl text-sm font-bold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                style={{ backgroundColor: "#9F9D58" }}
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChoiceQuestion;
