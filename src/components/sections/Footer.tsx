import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-secondary text-foreground min-h-[280px] md:min-h-[320px]" role="contentinfo" aria-label="Site footer">

      <div className="container mx-auto px-4 pt-4 md:pt-6 pb-36 md:pb-44">
        {/* UPDATED: Center-aligned layout (Fix 2) */}
        <div className="flex flex-col items-center text-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CONTACT INFO</h2>

            {/* TODO: Update phone number when confirmed by Lorena/Eren */}
            <address className="space-y-2 text-foreground not-italic text-lg md:text-xl">
              <p>
                890 Palomar Airport Rd
                <br />
                Carlsbad, CA 92011
              </p>
              <p>
                <a
                  href="mailto:sd.lavidafit@gmail.com"
                  className="hover:text-primary transition-colors"
                  aria-label="Email us at sd.lavidafit@gmail.com"
                >
                  sd.lavidafit@gmail.com
                </a>
              </p>
              {/* Instagram icon */}
              <p>
                <a
                  href="https://www.instagram.com/lavida.sandiego/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors justify-center"
                  aria-label="Follow us on Instagram (opens in new tab)"
                >
                  <Instagram size={40} aria-hidden="true" />
                  <span className="sr-only">La Vida San Diego on Instagram</span>
                </a>
              </p>
            </address>
          </div>

          {/* Logo - below contact info, centered */}
          <div className="mt-6">
            <img
              src={`${import.meta.env.BASE_URL}images/logo/logo-color.png`}
              alt="La Vida San Diego logo"
              className="h-16 sm:h-20 md:h-28 w-auto"
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
            to="/privacy"
            className="hover:text-primary transition-colors underline"
          >
            Privacy Policy
          </Link>
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
