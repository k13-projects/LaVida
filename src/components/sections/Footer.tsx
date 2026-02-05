import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-secondary text-foreground min-h-[200px] md:min-h-[240px]" role="contentinfo" aria-label="Site footer">

      <div className="container mx-auto px-4 -mt-8 md:-mt-12 pb-16">
        {/* Contact Info and Logo - aligned in flex row */}
        <div className="flex justify-between items-start">
          {/* Contact Info - Left aligned */}
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">CONTACT INFO</h2>

            <address className="space-y-2 text-foreground not-italic">
              <p>
                890 Palomar Airport Rd
                <br />
                Carlsbad, CA 92011
              </p>
              <p>
                <a
                  href="mailto:hello@lavidasandiego.com"
                  className="hover:text-primary transition-colors"
                  aria-label="Email us at hello@lavidasandiego.com"
                >
                  hello@lavidasandiego.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/lavida.sandiego/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Follow us on Instagram at lavida.sandiego (opens in new tab)"
                >
                  @lavida.sandiego
                </a>
              </p>
            </address>
          </div>

          {/* Logo - Right aligned, vertically centered with contact */}
          <div className="hidden sm:block">
            <img
              src={`${import.meta.env.BASE_URL}images/logo/logo-color.png`}
              alt="La Vida San Diego logo"
              className="h-20 md:h-28 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Copyright and Accessibility Link - bottom */}
      <div className="absolute bottom-0 left-0 right-0 text-center py-4 border-t border-foreground/10">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} La Vida San Diego. All rights reserved.
          {" · "}
          <Link
            to="/accessibility"
            className="hover:text-primary transition-colors underline"
          >
            Accessibility
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
