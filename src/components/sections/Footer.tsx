import Wave from "@/components/common/Wave";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-secondary text-foreground min-h-[380px] md:min-h-[420px]">
      {/* Wave Top - olive (from Instagram section) flowing into pink */}
      <Wave
        position="top"
        variant="deep"
        fillColor="hsl(var(--primary))"
      />

      <div className="container mx-auto px-4 pt-28 md:pt-32 pb-16">
        {/* Contact Info - Left aligned */}
        <div className="max-w-md">
          <h4 className="text-2xl md:text-3xl font-bold mb-6">CONTACT INFO</h4>

          <div className="space-y-2 text-foreground">
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
      </div>

      {/* Logo at bottom right - absolute positioned */}
      <div className="absolute right-8 md:right-12 lg:right-16 bottom-16 md:bottom-20">
        <img
          src="/images/logo/logo-color.png"
          alt="La Vida"
          className="h-20 md:h-28 w-auto"
        />
      </div>

      {/* Copyright - bottom */}
      <div className="absolute bottom-0 left-0 right-0 text-center py-4 border-t border-foreground/10">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} La Vida San Diego. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
