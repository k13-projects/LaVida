import { useState } from "react";

interface NameStepProps {
  onSubmit: (name: string) => void;
}

const NameStep = ({ onSubmit }: NameStepProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) onSubmit(name.trim());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 animate-fade-in">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6 sm:p-8 text-center">
        <div className="mb-8">
          <span className="text-4xl">👋</span>
          <h2 className="text-2xl font-bold text-olive-dark mt-4">
            Before we start...
          </h2>
          <p className="text-foreground/80 font-medium mt-2 text-[15px]">
            We have 8 quick questions about the website. Just tap your choice — takes about 2 minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-foreground/90 mb-2 text-left">
              What's your name?
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Eren"
              autoFocus
              className="w-full px-4 py-4 text-lg font-medium rounded-xl border-2 border-olive/20 focus:border-olive focus:outline-none transition-colors bg-white shadow-sm"
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full py-4 px-6 rounded-xl text-lg font-bold text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
            style={{ backgroundColor: "#9F9D58" }}
          >
            Let's Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default NameStep;
