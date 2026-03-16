import { type DietaryTag, DIETARY_TAG_CONFIG } from "@/data/menuItems";

interface DietaryBadgeProps {
  tag: DietaryTag;
}

const DietaryBadge = ({ tag }: DietaryBadgeProps) => {
  const config = DIETARY_TAG_CONFIG[tag];
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold border ${config.className}`}
      title={config.fullLabel}
    >
      {config.label}
    </span>
  );
};

export default DietaryBadge;
