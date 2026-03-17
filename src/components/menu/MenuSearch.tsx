import { Search, X } from "lucide-react";
import { type DietaryTag, DIETARY_TAG_CONFIG } from "@/data/menuItems";

interface MenuSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilters: DietaryTag[];
  onToggleFilter: (tag: DietaryTag) => void;
  onClearFilters: () => void;
}

const filterTags: DietaryTag[] = ["V", "GF", "DF"];

const MenuSearch = ({
  searchQuery,
  onSearchChange,
  activeFilters,
  onToggleFilter,
  onClearFilters,
}: MenuSearchProps) => {
  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search menu items..."
          className="w-full pl-12 pr-10 py-3.5 rounded-full border border-foreground/10 bg-white shadow-sm text-sm font-medium focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive/30 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/70 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dietary filter toggles */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wide">
          Filter:
        </span>
        {filterTags.map((tag) => {
          const config = DIETARY_TAG_CONFIG[tag];
          const isActive = activeFilters.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => onToggleFilter(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all ${
                isActive
                  ? config.activeClassName
                  : "bg-white text-foreground/60 border-foreground/15 hover:border-foreground/30"
              }`}
              title={config.fullLabel}
            >
              {config.fullLabel}
            </button>
          );
        })}
        {activeFilters.length > 0 && (
          <button
            onClick={onClearFilters}
            className="text-xs font-medium text-foreground/40 hover:text-foreground/70 transition-colors ml-1"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuSearch;
