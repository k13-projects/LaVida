import type { FullMenuItem } from "@/data/menuItems";
import DietaryBadge from "./DietaryBadge";

interface MenuItemCardProps {
  item: FullMenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const imagePath = item.image
    ? `${import.meta.env.BASE_URL}images/menu/items/${item.image}`
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-foreground/5 overflow-hidden hover:shadow-md transition-shadow">
      {imagePath && (
        <div className="aspect-[4/3] overflow-hidden bg-black">
          <img
            src={imagePath}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-base font-bold text-olive-dark leading-tight">
            {item.name}
          </h3>
          {item.dietaryTags.length > 0 && (
            <div className="flex gap-1 flex-shrink-0">
              {item.dietaryTags.map((tag) => (
                <DietaryBadge key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>
        <p className="text-sm text-foreground/70 leading-relaxed">
          {item.description}
        </p>
        {item.note && (
          <p className="text-xs text-foreground/50 mt-2 italic">{item.note}</p>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;
