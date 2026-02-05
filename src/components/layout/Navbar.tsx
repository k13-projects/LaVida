import { useState, useEffect } from "react";
import { Menu, X, Phone, FileText, Mail, Calendar, Clock, Users, ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const occasionOptions = [
  "Corporate Event",
  "Wedding",
  "Birthday Party",
  "Graduation",
  "Holiday Party",
  "Family Gathering",
  "Other",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [cateringModalOpen, setCateringModalOpen] = useState(false);
  const [cateringFormOpen, setCateringFormOpen] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    numberOfPeople: "",
    date: "",
    time: "",
    occasion: "",
    serviceType: "pickup",
    description: "",
  });

  // Listen for custom event from Catering section
  useEffect(() => {
    const handleOpenCateringModal = () => {
      setCateringModalOpen(true);
    };

    window.addEventListener('openCateringModal', handleOpenCateringModal);
    return () => {
      window.removeEventListener('openCateringModal', handleOpenCateringModal);
    };
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);

    // Create email body
    const emailBody = `
New Catering Request

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Number of People: ${formData.numberOfPeople}
Date: ${formData.date}
Time: ${formData.time}
Occasion: ${formData.occasion}
Service Type: ${formData.serviceType}

Description/Requests:
${formData.description}
    `.trim();

    // Open mailto link
    const mailtoLink = `mailto:info@lavidasandiego.com?subject=Catering Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    setFormSubmitting(false);
    setFormSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setFormSubmitted(false);
      setCateringFormOpen(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        numberOfPeople: "",
        date: "",
        time: "",
        occasion: "",
        serviceType: "pickup",
        description: "",
      });
    }, 2000);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-end h-20 lg:h-24 xl:h-28 relative">
            {/* Centered nav with logo */}
            <div className="flex-1 flex items-end justify-center gap-8 lg:gap-10 xl:gap-12 pb-3 xl:pb-4">
              {/* About Us */}
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-sm lg:text-base xl:text-lg tracking-wide relative group whitespace-nowrap"
              >
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>

              {/* Menu - Opens Modal */}
              <button
                onClick={() => setMenuModalOpen(true)}
                className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-sm lg:text-base xl:text-lg tracking-wide relative group whitespace-nowrap"
              >
                Menu
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>

              {/* Logo - inline, bottom half overflows */}
              <a href="#" className="relative z-10 group translate-y-1/2">
                <div className="w-36 h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-primary rounded-full flex items-center justify-center p-5 lg:p-6 xl:p-7 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 overflow-hidden relative">
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
              </a>

              {/* Locations */}
              <a
                href="#locations"
                className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-sm lg:text-base xl:text-lg tracking-wide relative group whitespace-nowrap"
              >
                Locations
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>

              {/* Catering - Opens Modal */}
              <button
                onClick={() => setCateringModalOpen(true)}
                className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-sm lg:text-base xl:text-lg tracking-wide relative group whitespace-nowrap"
              >
                Catering
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </div>

            {/* Action buttons - right side */}
            <div className="absolute right-0 bottom-3 xl:bottom-4 flex items-center gap-3">
              <a
                href="#contact"
                className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-foreground/10 hover:bg-primary flex items-center justify-center transition-all duration-300 group"
                aria-label="Contact us"
              >
                <Phone size={16} className="xl:hidden text-foreground group-hover:text-white transition-colors duration-300" />
                <Phone size={18} className="hidden xl:block text-foreground group-hover:text-white transition-colors duration-300" />
              </a>
              <button
                onClick={() => setOrderModalOpen(true)}
                className="bg-primary hover:bg-olive-dark text-primary-foreground px-4 xl:px-6 py-1.5 xl:py-2 rounded-full font-bold text-xs xl:text-sm transition-all duration-300 hover:shadow-xl shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">ORDER NOW</span>
                <div className="absolute w-[15%] h-[200%] bg-gradient-to-b from-transparent via-white/30 to-transparent -rotate-12 top-1/2 -translate-y-1/2 animate-button-shine" />
              </button>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between h-16">
            {/* Mobile Logo */}
            <a href="#" className="relative z-10">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center p-2 shadow-lg">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo/logo-white.png`}
                  alt="La Vida"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div id="mobile-menu" className="md:hidden pb-6 animate-fade-in" role="menu">
              <div className="flex flex-col space-y-4">
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-base py-2 border-b border-foreground/10"
                >
                  About Us
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setMenuModalOpen(true);
                  }}
                  className="text-foreground hover:text-primary transition-colors font-medium text-base py-2 border-b border-foreground/10 text-left"
                >
                  Menu
                </button>
                <a
                  href="#locations"
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-base py-2 border-b border-foreground/10"
                >
                  Locations
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setCateringModalOpen(true);
                  }}
                  className="text-foreground hover:text-primary transition-colors font-medium text-base py-2 border-b border-foreground/10 text-left"
                >
                  Catering
                </button>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-base py-2 border-b border-foreground/10"
                >
                  Contact
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setOrderModalOpen(true);
                  }}
                  className="bg-primary hover:bg-olive-dark text-primary-foreground px-6 py-3 rounded-full font-semibold text-center transition-all mt-2"
                >
                  ORDER ONLINE
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Menu PDF Modal */}
      <Dialog open={menuModalOpen} onOpenChange={setMenuModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 overflow-hidden flex flex-col">
          <DialogHeader className="p-4 pb-2 shrink-0">
            <DialogTitle className="text-xl font-bold text-primary">Our Menu</DialogTitle>
          </DialogHeader>
          <div className="flex-1 w-full px-4 pb-4 min-h-0">
            <iframe
              src={`${import.meta.env.BASE_URL}images/menu/MENU WEBSITE LA VIDA.pdf`}
              className="w-full h-full rounded-lg border-0"
              title="La Vida Menu"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Order Now Modal */}
      <Dialog open={orderModalOpen} onOpenChange={setOrderModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary text-center">Order Now</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-6 py-4">
            {/* Order Pickup */}
            <a
              href="https://order.toasttab.com/online/la-vida-windmill-food-hall"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-primary hover:bg-olive-dark text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Order Pickup
            </a>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-foreground/20" />
              <span className="text-foreground/60 text-sm font-medium">or</span>
              <div className="flex-1 h-px bg-foreground/20" />
            </div>

            {/* Order Delivery */}
            <div className="space-y-4">
              <p className="text-center text-foreground font-semibold">Order Delivery</p>
              <div className="flex justify-center gap-6">
                {/* Grubhub */}
                <a
                  href="https://www.grubhub.com/restaurant/la-vida-890-palomar-airport-rd-carlsbad/11836016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                  aria-label="Order delivery via Grubhub (opens in new tab)"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F63440] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                    <span className="text-white font-bold text-xs">GH</span>
                  </div>
                  <span className="text-sm text-foreground/80">Grubhub</span>
                </a>

                {/* DoorDash */}
                <div
                  className="flex flex-col items-center gap-2 opacity-60"
                  aria-label="DoorDash delivery coming soon"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FF3008] flex items-center justify-center shadow-lg" aria-hidden="true">
                    <span className="text-white font-bold text-xs">DD</span>
                  </div>
                  <span className="text-sm text-foreground/80">DoorDash</span>
                  <span className="text-xs text-foreground/50">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Catering Modal */}
      <Dialog open={cateringModalOpen} onOpenChange={setCateringModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary text-center">Catering Services</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            {/* View Catering Menu */}
            <button
              onClick={() => {
                // For now, show alert - replace with PDF modal when ready
                alert("Catering menu PDF coming soon!");
              }}
              className="flex items-center justify-center gap-3 bg-primary hover:bg-olive-dark text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <FileText className="w-6 h-6" />
              View Catering Menu (10+ People)
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-foreground/20" />
              <span className="text-foreground/60 text-sm font-medium">or</span>
              <div className="flex-1 h-px bg-foreground/20" />
            </div>

            {/* Custom Order Form */}
            <button
              onClick={() => {
                setCateringModalOpen(false);
                setCateringFormOpen(true);
              }}
              className="flex items-center justify-center gap-3 bg-olive-dark hover:bg-olive text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Mail className="w-6 h-6" />
              Email Us for Custom Orders
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Catering Form Modal */}
      <Dialog open={cateringFormOpen} onOpenChange={setCateringFormOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary text-center">Custom Catering Request</DialogTitle>
          </DialogHeader>

          {formSubmitted ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email Client Opening!</h3>
              <p className="text-foreground/60">Please send the email from your email client.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 py-4">
              {/* Name */}
              <div>
                <label htmlFor="catering-name" className="block text-sm font-medium text-foreground mb-1">Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                <input
                  type="text"
                  id="catering-name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  aria-required="true"
                  className="w-full px-4 py-2.5 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="catering-phone" className="block text-sm font-medium text-foreground mb-1">Phone <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" aria-hidden="true" />
                    <input
                      type="tel"
                      id="catering-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      aria-required="true"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="catering-email" className="block text-sm font-medium text-foreground mb-1">Email <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" aria-hidden="true" />
                    <input
                      type="email"
                      id="catering-email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      aria-required="true"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Number of People */}
              <div>
                <label htmlFor="catering-guests" className="block text-sm font-medium text-foreground mb-1">Number of People <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" aria-hidden="true" />
                  <input
                    type="number"
                    id="catering-guests"
                    name="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleFormChange}
                    required
                    aria-required="true"
                    min="1"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Expected guests"
                  />
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="catering-date" className="block text-sm font-medium text-foreground mb-1">Date <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" aria-hidden="true" />
                    <input
                      type="date"
                      id="catering-date"
                      name="date"
                      value={formData.date}
                      onChange={handleFormChange}
                      required
                      aria-required="true"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="catering-time" className="block text-sm font-medium text-foreground mb-1">Time <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" aria-hidden="true" />
                    <input
                      type="time"
                      id="catering-time"
                      name="time"
                      value={formData.time}
                      onChange={handleFormChange}
                      required
                      aria-required="true"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label htmlFor="catering-occasion" className="block text-sm font-medium text-foreground mb-1">Occasion <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                <div className="relative">
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none" aria-hidden="true" />
                  <select
                    id="catering-occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleFormChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-2.5 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                  >
                    <option value="">Select an occasion</option>
                    {occasionOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Service Type */}
              <fieldset>
                <legend className="block text-sm font-medium text-foreground mb-2">Service Type <span aria-hidden="true">*</span><span className="sr-only">(required)</span></legend>
                <div className="flex gap-4" role="radiogroup" aria-required="true">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="serviceType"
                      value="pickup"
                      checked={formData.serviceType === "pickup"}
                      onChange={handleFormChange}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <span className="text-foreground">Pickup</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="serviceType"
                      value="delivery"
                      checked={formData.serviceType === "delivery"}
                      onChange={handleFormChange}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <span className="text-foreground">Delivery</span>
                  </label>
                </div>
              </fieldset>

              {/* Description */}
              <div>
                <label htmlFor="catering-description" className="block text-sm font-medium text-foreground mb-1">Description / Requests</label>
                <textarea
                  id="catering-description"
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your event, dietary requirements, or special requests..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formSubmitting}
                className="w-full bg-primary hover:bg-olive-dark text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {formSubmitting ? "Opening Email..." : "Send Catering Request"}
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
