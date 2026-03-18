import { useState } from "react";
import { CheckCircle, Copy, Download, Mail, Check } from "lucide-react";

interface ThankYouScreenProps {
  name: string;
  resultsText: string;
}

const EMAIL = "projects.k13@gmail.com";

const ThankYouScreen = ({ name, resultsText }: ThankYouScreenProps) => {
  const [copied, setCopied] = useState(false);

  const subject = `La Vida Website Decisions — ${name}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resultsText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = resultsText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([resultsText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lavida-decisions-${name.toLowerCase().replace(/\s+/g, "-")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(resultsText)}`;

  return (
    <div className="px-4 sm:px-6 animate-fade-in">
      <div className="max-w-md lg:max-w-2xl mx-auto">
        {/* Success header */}
        <div className="text-center mb-6">
          <CheckCircle className="w-16 h-16 text-olive mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-olive-dark mb-2">
            All done, {name}!
          </h2>
          <p className="text-foreground/80 font-medium text-[15px] leading-relaxed">
            Your answers have been captured. Now just send them to us using one of the options below.
          </p>
        </div>

        {/* Send instructions card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 mb-4">
          <h3 className="text-lg font-bold text-olive-dark mb-1">
            Send your answers
          </h3>
          <p className="text-foreground/60 text-sm font-medium mb-5">
            Email to: <span className="font-bold text-olive-dark">{EMAIL}</span>
          </p>

          {/* Option 1: Open email with everything pre-filled */}
          <a
            href={mailtoLink}
            className="flex items-center gap-3 w-full p-4 rounded-2xl border border-olive/20 bg-olive/5 shadow-md hover:shadow-lg transition-all mb-3 group"
          >
            <div className="w-11 h-11 rounded-full bg-olive flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-bold text-olive-dark">Open Email App</p>
              <p className="text-xs text-foreground/60 font-medium">Pre-filled with subject, body & results</p>
            </div>
            <svg className="w-5 h-5 text-olive/40 group-hover:text-olive transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-foreground/10" />
            <span className="text-xs font-semibold text-foreground/40">OR</span>
            <div className="flex-1 h-px bg-foreground/10" />
          </div>

          {/* Option 2 & 3: Copy / Download */}
          <div className="space-y-3">
            <button
              onClick={handleCopy}
              className="flex items-center gap-3 w-full p-4 rounded-2xl border border-foreground/10 bg-white shadow-md hover:shadow-lg hover:border-olive/30 transition-all"
            >
              <div className="w-11 h-11 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                {copied ? (
                  <Check className="w-5 h-5 text-olive" />
                ) : (
                  <Copy className="w-5 h-5 text-olive-dark" />
                )}
              </div>
              <div className="flex-1 text-left">
                <p className="text-[15px] font-bold text-foreground/90">
                  {copied ? "Copied!" : "Copy Results"}
                </p>
                <p className="text-xs text-foreground/60 font-medium">
                  Paste into an email to {EMAIL}
                </p>
              </div>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-3 w-full p-4 rounded-2xl border border-foreground/10 bg-white shadow-md hover:shadow-lg hover:border-olive/30 transition-all"
            >
              <div className="w-11 h-11 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                <Download className="w-5 h-5 text-olive-dark" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-[15px] font-bold text-foreground/90">Download Results</p>
                <p className="text-xs text-foreground/60 font-medium">
                  Save as .txt file and attach to email
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Preview of what's being sent */}
        <details className="bg-white rounded-2xl shadow-md border border-foreground/10 overflow-hidden">
          <summary className="px-5 py-3 cursor-pointer text-sm font-bold text-foreground/70 hover:text-olive-dark transition-colors">
            Preview your answers
          </summary>
          <pre className="px-5 pb-4 text-xs text-foreground/60 whitespace-pre-wrap font-mono leading-relaxed max-h-60 overflow-y-auto">
            {resultsText}
          </pre>
        </details>

        {/* Footer link */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-sm font-semibold text-olive hover:text-olive-dark transition-colors"
          >
            Visit La Vida Site &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouScreen;
