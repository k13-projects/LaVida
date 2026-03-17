import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { fullMenuItems, fullMenuCategories, type DietaryTag } from "@/data/menuItems";
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
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Track which menu section is in view
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entry most visible in the viewport
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to the top
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(top.target.id.replace("section-", ""));
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    const sections = fullMenuCategories.map((c) =>
      document.getElementById(`section-${c.id}`)
    );
    sections.forEach((el) => el && observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [filteredItems]);

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
      {/* Simplified Navbar */}
      <nav className="bg-secondary/95 backdrop-blur-sm relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between py-4 md:py-5">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary font-semibold text-sm transition-colors z-10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden md:inline">La Vida</span>
          </Link>

          {/* Centered overflowing logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-30 group"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-primary rounded-full flex items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 overflow-hidden relative">
              <img
                src={`${import.meta.env.BASE_URL}images/logo/logo-white.png`}
                alt="La Vida"
                className="w-full h-full object-contain relative z-10"
              />
              <div className="absolute inset-0 z-20 overflow-hidden rounded-full">
                <div className="absolute w-[15%] h-[200%] bg-gradient-to-b from-transparent via-white/40 to-transparent -rotate-12 top-1/2 -translate-y-1/2 animate-coin-shine" />
              </div>
            </div>
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>

          {/* View PDF button */}
          <button
            onClick={() => setPdfOpen(true)}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-foreground/10 hover:bg-primary hover:text-white text-foreground text-sm font-semibold transition-all z-10"
          >
            <FileText className="w-4 h-4" />
            View PDF
          </button>

          {/* Spacer for mobile to balance the back button */}
          <div className="w-10 sm:hidden" />
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="bg-primary relative z-10 pt-14 sm:pt-16 md:pt-20 pb-6 sm:pb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground">
          Our Menu
        </h1>
        <p className="text-primary-foreground/70 font-medium text-sm sm:text-base mt-2 max-w-md mx-auto px-4">
          Fresh, feel-good food made with real ingredients
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex gap-8">
        {/* Sticky sidebar nav — desktop only */}
        <aside className="hidden lg:block w-44 shrink-0">
          <nav className="sticky top-8">
            <ul className="space-y-1">
              {fullMenuCategories.map((category) => {
                const hasItems = filteredItems.some(
                  (item) => item.category === category.id
                );
                if (!hasItems) return null;
                const isActive = activeSection === category.id;
                return (
                  <li key={category.id}>
                    <a
                      href={`#section-${category.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(`section-${category.id}`)
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className={`block px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-primary text-white shadow-sm"
                          : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                      }`}
                    >
                      {category.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
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
            <button
              onClick={() => setOrderModalOpen(true)}
              className="inline-flex px-6 py-3 rounded-full font-bold text-white transition-all bg-primary hover:brightness-110 hover:shadow-lg hover:scale-[1.03]"
            >
              ORDER NOW
            </button>
          </div>
        </main>
      </div>

      {/* Order Now Modal */}
      <Dialog open={orderModalOpen} onOpenChange={setOrderModalOpen}>
        <DialogContent className="max-w-[380px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] w-[92vw] border-4 border-olive rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary text-center">Order Now</DialogTitle>
            <DialogDescription className="sr-only">Choose pickup or delivery options</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7 py-3 sm:py-4 lg:py-5">
            <a
              href="https://order.toasttab.com/online/la-vida-windmill-food-hall"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-primary text-white px-5 sm:px-6 py-3 sm:py-4 lg:py-4 rounded-xl font-semibold text-base sm:text-lg lg:text-xl transition-all shadow-lg hover:brightness-110 hover:shadow-xl hover:scale-[1.03]"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/logo/platform logos/TOAST LOGO-03.png`}
                alt=""
                aria-hidden="true"
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 object-contain"
              />
              Order Pickup
            </a>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-foreground/20" />
              <span className="text-foreground/60 text-xs sm:text-sm font-medium">or</span>
              <div className="flex-1 h-px bg-foreground/20" />
            </div>

            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              <p className="text-center text-foreground font-semibold text-sm sm:text-base lg:text-lg">Order Delivery</p>
              <div className="flex justify-center gap-6 sm:gap-8 lg:gap-10">
                <a
                  href="https://www.grubhub.com/restaurant/la-vida-890-palomar-airport-rd-carlsbad/11836016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                  aria-label="Order delivery via Grubhub (opens in new tab)"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full shadow-lg group-hover:scale-110 transition-transform overflow-hidden" aria-hidden="true">
                    <img
                      src={`${import.meta.env.BASE_URL}images/logo/platform logos/Grunhub logo-02.png`}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-semibold text-foreground">Grubhub</span>
                </a>

                <a
                  href="https://www.doordash.com/store/san-diego-34149887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                  aria-label="Order delivery via DoorDash (opens in new tab)"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full shadow-lg group-hover:scale-110 transition-transform overflow-hidden" aria-hidden="true">
                    <img
                      src={`${import.meta.env.BASE_URL}images/logo/platform logos/Doordash logo.png`}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-semibold text-foreground">DoorDash</span>
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
