import { Check, Pencil } from "lucide-react";
import {
  questions,
  type QuestionnaireAnswers,
} from "@/data/questionnaireData";

interface ReviewScreenProps {
  name: string;
  answers: QuestionnaireAnswers;
  onEdit: (questionId: number) => void;
  onSubmit: () => void;
}

const ReviewScreen = ({ name, answers, onEdit, onSubmit }: ReviewScreenProps) => {
  const getAnswerDisplay = (questionId: number): string => {
    const question = questions.find((q) => q.id === questionId);
    const answer = answers[questionId];
    if (!question || !answer) return "Not answered";

    if (question.type === "choice") {
      if (typeof answer === "string" && answer.startsWith("custom:")) {
        return `Custom: ${answer.slice(7)}`;
      }
      const selected = question.options.find((o) => o.value === answer);
      return selected ? `${selected.label}) ${selected.description}` : "Not answered";
    }

    if (question.type === "text" && typeof answer === "object") {
      return Object.entries(answer)
        .filter(([, v]) => v.trim())
        .map(([k, v]) => {
          const field = question.fields.find((f) => f.key === k);
          return `${field?.label || k}: ${v}`;
        })
        .join(" · ") || "Not answered";
    }

    return "Not answered";
  };

  return (
    <div className="px-4 sm:px-6 animate-fade-in">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-8">
        <div className="mb-6 text-center">
          <div className="w-14 h-14 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-4">
            <Check className="w-7 h-7 text-olive" />
          </div>
          <h2 className="text-2xl font-bold text-olive-dark">
            Review Your Answers
          </h2>
          <p className="text-foreground/70 font-medium mt-1 text-[15px]">
            Tap any question to change your answer, {name}
          </p>
        </div>

        <div className="space-y-3">
          {questions.map((question) => (
            <button
              key={question.id}
              onClick={() => onEdit(question.id)}
              className="w-full text-left p-4 rounded-xl border border-foreground/10 shadow-md hover:shadow-lg hover:border-olive/30 transition-all group bg-white"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-olive bg-olive/10 px-2 py-0.5 rounded-full">
                      Q{question.id}
                    </span>
                    <span className="text-sm font-bold text-olive-dark truncate">
                      {question.title}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-foreground/70 leading-relaxed line-clamp-2">
                    {getAnswerDisplay(question.id)}
                  </p>
                </div>
                <Pencil className="w-4 h-4 text-foreground/30 group-hover:text-olive flex-shrink-0 mt-1 transition-colors" />
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={onSubmit}
          className="w-full py-4 px-6 rounded-xl text-lg font-bold text-white mt-6 transition-all duration-200 active:scale-[0.98] shadow-md"
          style={{ backgroundColor: "#9F9D58" }}
        >
          Submit Answers
        </button>
      </div>
    </div>
  );
};

export default ReviewScreen;
