import { fullMenuCategories, type FullMenuItem } from "@/data/menuItems";
import MenuItemCard from "./MenuItemCard";

interface MenuGridProps {
  items: FullMenuItem[];
}

const MenuGrid = ({ items }: MenuGridProps) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg font-semibold text-foreground/40">
          No items match your search
        </p>
        <p className="text-sm text-foreground/30 mt-1">
          Try a different keyword or clear the filters
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {fullMenuCategories.map((category) => {
        const categoryItems = items.filter((item) => item.category === category.id);
        if (categoryItems.length === 0) return null;

        return (
          <section key={category.id}>
            <div className="mb-4">
              <h2 className="text-xl font-extrabold text-olive-dark">
                {category.title}
              </h2>
              <p className="text-sm text-foreground/60 font-medium">
                {category.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default MenuGrid;
