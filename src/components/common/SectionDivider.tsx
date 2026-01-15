import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "wave" | "organic" | "curve";
  fillColor?: string;
  className?: string;
  flip?: boolean;
}

const SectionDivider = ({
  variant = "wave",
  fillColor = "hsl(var(--secondary))",
  className,
  flip = false,
}: SectionDividerProps) => {
  const paths = {
    wave: "M0 50C360 100 1080 0 1440 50V100H0V50Z",
    organic: "M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 C1300,80 1380,40 1440,60 L1440,100 L0,100 Z",
    curve: "M0,80 Q720,0 1440,80 L1440,100 L0,100 Z",
  };

  return (
    <div
      className={cn(
        "absolute left-0 right-0 h-16 md:h-24 lg:h-32 pointer-events-none",
        flip ? "top-0 rotate-180" : "bottom-0",
        className
      )}
    >
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path d={paths[variant]} fill={fillColor} />
      </svg>
    </div>
  );
};

export default SectionDivider;
