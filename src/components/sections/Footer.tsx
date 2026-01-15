import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo & Description */}
          <div>
            <div className="w-20 h-20 md:w-24 md:h-24 mb-5">
              <img
                src="/images/logo/logo-color.png"
                alt="La Vida"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Fuel your day with good vibes + real ingredients. All Day Health in
              San Diego.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg md:text-xl mb-5 font-bold">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  890 Palomar Airport Rd
                  <br />
                  Carlsbad, CA 92011
                </span>
              </li>
              <li>
                <a
                  href="mailto:hello@lavidasandiego.com"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  hello@lavidasandiego.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl mb-5 font-bold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-primary transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-primary transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#catering" className="hover:text-primary transition-colors">
                  Catering
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/lavida.sandiego/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} La Vida San Diego. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Beachy, balanced & always fresh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
