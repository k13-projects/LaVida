import { useState } from "react";
import { Menu, X } from "lucide-react";

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
        <div className="hidden md:flex items-center justify-center h-24 relative">
          {/* Left Navigation - curves toward logo */}
          <div className="flex items-center gap-6 pr-8">
            {leftNavLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg tracking-wide relative group"
                style={{
                  transform: `translateY(${(leftNavLinks.length - 1 - index) * 2}px)`,
                }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Logo Container - the crown jewel */}
          <a
            href="#"
            className="relative z-10 mx-4 group"
          >
            <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center p-4 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
              <img
                src="/images/logo/logo-white.png"
                alt="La Vida"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>

          {/* Right Navigation - curves toward logo */}
          <div className="flex items-center gap-6 pl-8">
            {rightNavLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg tracking-wide relative group"
                style={{
                  transform: `translateY(${index * 2}px)`,
                }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Contact Link - subtle placement */}
          <a
            href="#contact"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-primary transition-all duration-300 text-sm font-medium tracking-wide"
          >
            Contact
          </a>

          {/* Order Button - floating accent */}
          <a
            href="#order"
            className="absolute right-0 -bottom-5 bg-primary hover:bg-olive-dark text-primary-foreground px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:shadow-xl shadow-lg hover:-translate-y-1"
          >
            ORDER ONLINE
          </a>
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
