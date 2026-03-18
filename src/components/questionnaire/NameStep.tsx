import { useState } from "react";
import { questions } from "@/data/questionnaireData";

interface NameStepProps {
  onSubmit: (name: string) => void;
}

const NameStep = ({ onSubmit }: NameStepProps) => {
  const [showCustom, setShowCustom] = useState(false);
  const [customName, setCustomName] = useState("");

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customName.trim()) onSubmit(customName.trim());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 animate-fade-in">
      <div className="w-full max-w-md lg:max-w-2xl bg-white rounded-3xl shadow-lg p-6 sm:p-8 text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-olive-dark mt-2">
            Website Decisions
          </h2>
          <p className="text-foreground/70 font-medium mt-2 text-[15px] leading-relaxed">
            We have {questions.length} quick questions about the La Vida website.
            Each one includes context and visuals so you can make an informed choice.
            Just tap your preference — takes about 3 minutes.
          </p>
        </div>

        {/* Name selection */}
        <p className="text-sm font-bold text-foreground/90 mb-3">
          I am...
        </p>

        {!showCustom ? (
          <>
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => onSubmit("Eren")}
                className="flex-1 py-4 px-6 rounded-2xl text-lg font-bold border-2 border-olive/20 hover:border-olive hover:bg-olive/5 transition-all duration-200 text-olive-dark active:scale-[0.97] shadow-sm"
              >
                Eren
              </button>
              <button
                onClick={() => onSubmit("Lorena")}
                className="flex-1 py-4 px-6 rounded-2xl text-lg font-bold border-2 border-olive/20 hover:border-olive hover:bg-olive/5 transition-all duration-200 text-olive-dark active:scale-[0.97] shadow-sm"
              >
                Lorena
              </button>
            </div>

            <button
              onClick={() => setShowCustom(true)}
              className="text-sm font-medium text-foreground/50 hover:text-olive-dark transition-colors"
            >
              I'm someone else
            </button>
          </>
        ) : (
          <form onSubmit={handleCustomSubmit} className="space-y-4 animate-fade-in">
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Your name"
              autoFocus
              className="w-full px-4 py-4 text-lg font-medium rounded-xl border-2 border-olive/20 focus:border-olive focus:outline-none transition-colors bg-white shadow-sm"
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowCustom(false)}
                className="py-3 px-5 rounded-xl text-sm font-bold text-foreground/60 hover:text-foreground/90 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={!customName.trim()}
                className="flex-1 py-3 px-6 rounded-xl text-lg font-bold text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                style={{ backgroundColor: "#9F9D58" }}
              >
                Let's Go
              </button>
            </div>
          </form>
        )}

        {/* URL reference */}
        <p className="text-xs text-foreground/40 font-medium mt-6">
          www.lavida.fit/decisions
        </p>
      </div>
    </div>
  );
};

export default NameStep;
