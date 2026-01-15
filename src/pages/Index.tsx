import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Locations from "@/components/sections/Locations";
import Catering from "@/components/sections/Catering";
import OrderOnline from "@/components/sections/OrderOnline";
import Instagram from "@/components/sections/Instagram";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Locations />
      <Catering />
      <OrderOnline />
      <Instagram />
      <Footer />
    </div>
  );
};

export default Index;
