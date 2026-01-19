const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Contact Info Section */}
        <div className="text-center mb-12">
          <h4 className="text-2xl md:text-3xl font-bold mb-8">CONTACT INFO</h4>

          <div className="space-y-3 text-foreground">
            <p>
              890 Palomar Airport Rd
              <br />
              Carlsbad, CA 92011
            </p>
            <p>
              <a
                href="mailto:hello@lavidasandiego.com"
                className="hover:text-primary transition-colors"
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
              >
                @lavida.sandiego
              </a>
            </p>
          </div>
        </div>

        {/* Logo at bottom */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/logo/logo-color.png"
            alt="La Vida"
            className="h-16 md:h-20 w-auto"
          />
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-foreground/10 pt-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} La Vida San Diego. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
