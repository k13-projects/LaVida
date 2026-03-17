import { useState, useEffect, useCallback } from "react";
import { questions, type QuestionnaireAnswers } from "@/data/questionnaireData";
import NameStep from "./NameStep";
import ChoiceQuestion from "./ChoiceQuestion";
import TextQuestion from "./TextQuestion";
import ReviewScreen from "./ReviewScreen";
import ThankYouScreen from "./ThankYouScreen";

const STORAGE_KEY = "lavida_questionnaire";

type SavedState = {
  name: string;
  answers: QuestionnaireAnswers;
  step: number;
};

const loadSaved = (): SavedState | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
};

const QuestionnaireFlow = () => {
  const saved = loadSaved();
  const [name, setName] = useState(saved?.name || "");
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(saved?.answers || {});
  const [step, setStep] = useState(saved?.step || 0);
  const [editingFromReview, setEditingFromReview] = useState(false);
  // 0 = name, 1-8 = questions, 9 = review, 10 = submitted

  const totalQuestions = questions.length;

  // Persist to localStorage
  useEffect(() => {
    if (step < 10) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, answers, step }));
    }
  }, [name, answers, step]);

  const handleNameSubmit = (submittedName: string) => {
    setName(submittedName);
    setStep(1);
  };

  const handleAnswer = useCallback(
    (questionId: number, value: string | Record<string, string>) => {
      setAnswers((prev) => ({ ...prev, [questionId]: value }));
      if (editingFromReview) {
        setEditingFromReview(false);
        setStep(9); // return to review
      } else if (questionId < totalQuestions) {
        setStep(questionId + 1);
      } else {
        setStep(9); // review
      }
    },
    [totalQuestions, editingFromReview]
  );

  const handleBack = () => {
    if (editingFromReview) {
      setEditingFromReview(false);
      setStep(9); // return to review
    } else if (step === 1) {
      setStep(0);
    } else if (step === 9) {
      setStep(totalQuestions);
    } else {
      setStep(step - 1);
    }
  };

  const handleEditFromReview = (questionId: number) => {
    setEditingFromReview(true);
    setStep(questionId);
  };

  const buildEmailBody = (): string => {
    let body = `Website Decisions — Submitted by ${name}\n`;
    body += `Date: ${new Date().toLocaleDateString()}\n`;
    body += `${"=".repeat(40)}\n\n`;

    questions.forEach((q) => {
      body += `Q${q.id}: ${q.title}\n`;
      const answer = answers[q.id];

      if (q.type === "choice" && typeof answer === "string") {
        if (answer.startsWith("custom:")) {
          body += `Answer: Custom — ${answer.slice(7)}\n`;
        } else {
          const selected = q.options.find((o) => o.value === answer);
          body += `Answer: ${selected ? `${selected.label}) ${selected.description}` : "Not answered"}\n`;
        }
      } else if (q.type === "text" && typeof answer === "object") {
        q.fields.forEach((field) => {
          body += `  ${field.label}: ${answer[field.key] || "(not provided)"}\n`;
        });
      } else {
        body += `Answer: Not answered\n`;
      }
      body += `\n`;
    });

    return body.trim();
  };

  const handleSubmit = () => {
    // Clear saved state and move to the send screen
    localStorage.removeItem(STORAGE_KEY);
    setStep(10);
  };

  // Progress percentage (0 during name, then 1/8 through 8/8)
  const progress = step === 0 ? 0 : step >= 9 ? 100 : (step / totalQuestions) * 100;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FFF8F0" }}>
      {/* Header with logo */}
      <div className="pt-6 pb-2 text-center">
        <a href="/" className="inline-block">
          <img
            src={`${import.meta.env.BASE_URL}images/logo/logo-color.png`}
            alt="La Vida"
            className="h-16 mx-auto"
          />
        </a>
      </div>

      {/* Progress bar */}
      {step > 0 && step < 10 && (
        <div className="px-6 pt-2 pb-4 max-w-md mx-auto w-full">
          <div className="h-1.5 rounded-full bg-foreground/5 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%`, backgroundColor: "#9F9D58" }}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 pb-12">
        {step === 0 && <NameStep onSubmit={handleNameSubmit} />}

        {step >= 1 && step <= totalQuestions && (() => {
          const question = questions[step - 1];
          if (question.type === "choice") {
            return (
              <ChoiceQuestion
                key={question.id}
                question={question}
                currentAnswer={answers[question.id] as string | undefined}
                onAnswer={(value) => handleAnswer(question.id, value)}
                onBack={handleBack}
                questionNumber={step}
                totalQuestions={totalQuestions}
              />
            );
          }
          return (
            <TextQuestion
              key={question.id}
              question={question}
              currentAnswer={answers[question.id] as Record<string, string> | undefined}
              onAnswer={(value) => handleAnswer(question.id, value)}
              onBack={handleBack}
              questionNumber={step}
              totalQuestions={totalQuestions}
            />
          );
        })()}

        {step === 9 && (
          <ReviewScreen
            name={name}
            answers={answers}
            onEdit={handleEditFromReview}
            onSubmit={handleSubmit}
          />
        )}

        {step === 10 && <ThankYouScreen name={name} resultsText={buildEmailBody()} />}
      </div>
    </div>
  );
};

export default QuestionnaireFlow;
