import { useEffect, useRef } from "react";

const BEHOLD_FEED_ID = "rfsYLytJBGuKlwhFGhdS";

const Instagram = () => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <section
        className="relative bg-primary min-h-[400px] md:min-h-[450px] flex items-center"
        aria-labelledby="instagram-heading"
      >
        <h2 id="instagram-heading" className="sr-only">
          Follow us on Instagram
        </h2>
        <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-24 lg:pt-32 pb-40 md:pb-52 lg:pb-64">
          {/* Behold Instagram Widget */}
          <div className="max-w-4xl mx-auto mb-8">
            <div data-behold-id={BEHOLD_FEED_ID}></div>
          </div>

          {/* Follow Button */}
          <div className="text-center">
            <a
              href="https://www.instagram.com/lavida.sandiego/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-olive-dark text-white px-10 py-3 rounded-full font-semibold transition-all hover:brightness-125 hover:shadow-lg hover:scale-[1.03]"
              aria-label="Follow La Vida San Diego on Instagram (opens in new tab)"
            >
              FOLLOW US
            </a>
          </div>
        </div>
      </section>

      {/* Wave transition from olive to pink - decorative */}
      <section
        className="relative w-full bg-secondary -mt-32 md:-mt-40 lg:-mt-48 pb-32 md:pb-40 lg:pb-52"
        aria-hidden="true"
      >
        <svg
          className="w-full h-32 md:h-48 lg:h-56"
          viewBox="0 0 1440 230"
          preserveAspectRatio="none"
          style={{ transform: "scaleX(-1) scaleY(-1)" }}
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M0,0 L0,150 C200,80 400,50 600,50 C840,50 960,150 1440,150 L1440,230 L0,230 Z"
            fill="hsl(var(--primary))"
          />
        </svg>
      </section>
    </>
  );
};

export default Instagram;
