import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const leftNavLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Menu", href: "#menu" },
];

const rightNavLinks = [
  { name: "Locations", href: "#locations" },
  { name: "Catering", href: "#catering" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation - Elegant curved layout around logo */}
        <div className="hidden md:flex items-end justify-center h-28 relative pb-3">
          {/* Left Navigation - aligned with bottom of logo */}
          <div className="flex items-end gap-4 lg:gap-6 pr-6 lg:pr-8 pb-1">
            {leftNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-base lg:text-lg tracking-wide relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Logo Container - centered on bottom border, half overflowing */}
          <a
            href="#"
            className="relative z-10 mx-4 group translate-y-1/2"
          >
            <div className="w-28 h-28 lg:w-32 lg:h-32 bg-primary rounded-full flex items-center justify-center p-4 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
              <img
                src="/images/logo/logo-white.png"
                alt="La Vida"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>

          {/* Right Navigation with stacked buttons above on smaller screens */}
          <div className="flex flex-col items-start pl-6 lg:pl-8">
            {/* Buttons row - above nav links on md/lg, hidden on xl+ */}
            <div className="xl:hidden flex items-center gap-3 mb-1">
              <a
                href="#contact"
                className="w-8 h-8 rounded-full bg-foreground/10 hover:bg-primary flex items-center justify-center transition-all duration-300 group"
                aria-label="Contact us"
              >
                <Phone size={14} className="text-foreground group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#order"
                className="bg-primary hover:bg-olive-dark text-primary-foreground px-5 py-1.5 rounded-full font-bold text-xs transition-all duration-300 hover:shadow-xl shadow-lg"
              >
                ORDER ONLINE
              </a>
            </div>
            {/* Nav links */}
            <div className="flex items-end gap-4 lg:gap-6 pb-1">
              {rightNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-base lg:text-lg tracking-wide relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side actions - only on xl screens and up */}
          <div className="hidden xl:flex absolute right-0 bottom-3 items-center gap-4">
            <a
              href="#contact"
              className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-primary flex items-center justify-center transition-all duration-300 group"
              aria-label="Contact us"
            >
              <Phone size={18} className="text-foreground group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="#order"
              className="bg-primary hover:bg-olive-dark text-primary-foreground px-7 py-2.5 rounded-full font-bold text-base transition-all duration-300 hover:shadow-xl shadow-lg"
            >
              ORDER ONLINE
            </a>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between h-20">
          {/* Mobile Logo */}
          <a href="#" className="relative z-10">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center p-2 shadow-lg">
              <img
                src="/images/logo/logo-white.png"
                alt="La Vida"
                className="w-full h-full object-contain"
              />
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {[...leftNavLinks, ...rightNavLinks, { name: "Contact", href: "#contact" }].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-base py-2 border-b border-foreground/10"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#order"
                onClick={() => setIsOpen(false)}
                className="bg-primary hover:bg-olive-dark text-primary-foreground px-6 py-3 rounded-full font-semibold text-center transition-all mt-2"
              >
                ORDER ONLINE
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
