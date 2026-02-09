import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Locations from "@/components/sections/Locations";
import Catering from "@/components/sections/Catering";
import Instagram from "@/components/sections/Instagram";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Skip to main content link for keyboard/screen reader users - WCAG 2.4.1 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" role="main" aria-label="Main content">
        <Hero />
        <About />
        <Menu />
        <Locations />
        <Catering />
        <Instagram />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
