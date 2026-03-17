import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { fullMenuItems, type DietaryTag } from "@/data/menuItems";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MenuSearch from "@/components/menu/MenuSearch";
import MenuGrid from "@/components/menu/MenuGrid";

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<DietaryTag[]>([]);
  const [pdfOpen, setPdfOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return fullMenuItems.filter((item) => {
      const matchesSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDietary =
        activeFilters.length === 0 ||
        activeFilters.every((tag) => item.dietaryTags.includes(tag));

      return matchesSearch && matchesDietary;
    });
  }, [searchQuery, activeFilters]);

  const handleToggleFilter = (tag: DietaryTag) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      {/* Header */}
      <header className="bg-primary py-6 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-medium text-sm transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-primary-foreground">
                Our Menu
              </h1>
              <p className="text-primary-foreground/70 font-medium text-sm mt-1">
                Fresh, feel-good food made with real ingredients
              </p>
            </div>
            <button
              onClick={() => setPdfOpen(true)}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-primary-foreground text-sm font-semibold transition-colors border border-white/20"
            >
              <FileText className="w-4 h-4" />
              View PDF
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Search + Filters */}
        <div className="mb-8">
          <MenuSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeFilters={activeFilters}
            onToggleFilter={handleToggleFilter}
            onClearFilters={() => setActiveFilters([])}
          />
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium text-foreground/50">
            {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""}
            {activeFilters.length > 0 || searchQuery ? " found" : ""}
          </p>
          {/* Mobile PDF button */}
          <button
            onClick={() => setPdfOpen(true)}
            className="sm:hidden flex items-center gap-1.5 text-olive text-sm font-semibold"
          >
            <FileText className="w-4 h-4" />
            PDF Menu
          </button>
        </div>

        {/* Menu Grid */}
        <MenuGrid items={filteredItems} />

        {/* Order CTA */}
        <div className="mt-12 text-center bg-white rounded-2xl shadow-sm border border-foreground/5 p-8">
          <h3 className="text-lg font-bold text-olive-dark mb-2">
            Ready to order?
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            Order online for pickup or delivery
          </p>
          <a
            href="https://order.toasttab.com/online/la-vida-windmill-food-hall"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-6 py-3 rounded-full font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#9F9D58" }}
          >
            ORDER NOW
          </a>
        </div>
      </main>

      {/* PDF Modal */}
      <Dialog open={pdfOpen} onOpenChange={setPdfOpen}>
        <DialogContent className="max-w-[96vw] w-[96vw] h-[92vh] p-0 overflow-hidden flex flex-col">
          <DialogHeader className="p-4 pb-2 shrink-0">
            <DialogTitle className="text-xl font-bold text-primary">Full Menu PDF</DialogTitle>
            <DialogDescription className="sr-only">View the full menu as a PDF document</DialogDescription>
          </DialogHeader>
          <div className="flex-1 w-full px-4 pb-4 min-h-0">
            <iframe
              src={`${import.meta.env.BASE_URL}images/menu/MENU WEBSITE LA VIDA.pdf`}
              className="w-full h-full rounded-lg border-0"
              title="La Vida Full Menu PDF"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuPage;
